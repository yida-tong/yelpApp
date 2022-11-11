import { Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {SearchService} from "../search.service";


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @ViewChild('formTemplate') myForm: NgForm;
  isLoading:boolean = false;
  filteredOptions:string[] = [];
  block: boolean = false;

  constructor(private sService: SearchService) { }

  ngOnInit(): void {}

  onSubmit() {
    const formInput = {
      term: this.myForm.value.term,
      radius: Math.floor(Number(this.myForm.value.Distance)*1609.344),
      categories: this.myForm.value.Category
    };
    if (this.myForm.value.autodetect) {
      this.sService.fetchFromIp().subscribe(
        coordinate=>{
          formInput['latitude'] = coordinate.lat;
          formInput['longitude'] = coordinate.long;
          this.sService.fetchBusiness(formInput).subscribe();
        }
      );
    } else {
      this.sService.fetchFromGeo(encodeURI(this.myForm.value.Location)).subscribe(
        res=>{
          if (res.error) {
            alert('invalid location.');
          } else {
            formInput['latitude'] = res.content.latitude;
            formInput['longitude'] = res.content.longitude;
            this.sService.fetchBusiness(formInput).subscribe();
          }
        }
      );
    }
  }

  onReset() {
    this.myForm.resetForm();
    this.myForm.setValue({term: '', Category: 'all', Distance: '10', Location:'', autodetect: false});
    this.sService.sFormState = 2;
    this.sService.sBusiness_RECS = [];
  }

  onkeyStroke() {
    this.isLoading = true;
    if (this.myForm.value.term!=='') {
      if (!this.block) {
        this.block = true;
        setTimeout(()=>{
          if (this.myForm.value.term==='') {
            this.filteredOptions = [];
            this.isLoading = false;
            this.block = false;
          } else {
            this.sService.fetchKeyWord(encodeURI(this.myForm.value.term)).subscribe(options=>{
              this.isLoading = false;
              this.filteredOptions = options;
              this.block = false;
            })
          }
        }, 1000);
      }
    } else {
      this.isLoading = false;
      this.filteredOptions = [];
    }
  }
}
