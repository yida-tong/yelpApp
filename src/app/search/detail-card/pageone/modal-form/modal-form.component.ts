import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SearchService} from "../../../search.service";
declare var bootstrap: any;

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit, AfterViewInit, OnDestroy {
  todayDate: string = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
  myModal: any;

  constructor(public sService: SearchService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    this.myModal.show();
  }

  ngOnDestroy() {
    this.myModal.hide();
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formValues = {};
      formValues['name'] = this.sService.sBusiness_DET.name;
      formValues['date'] = myForm.value.date;
      formValues['time'] = myForm.value.hour + ':'+ myForm.value.minute;
      formValues['Email'] = myForm.value.email;

      const fetchLocalStorage = JSON.parse(localStorage.getItem('angularResource'));
      fetchLocalStorage[this.sService.sBusiness_DET.id] = formValues;
      localStorage.setItem('angularResource', JSON.stringify(fetchLocalStorage));
      alert('Reservation submit!');

      this.sService.formRendered = false;
    }
  }

}
