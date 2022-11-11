import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../search.service";

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
  twitter: {text:string, url:string};

  constructor(public sService: SearchService) { }

  ngOnInit(): void {
    this.twitter = {text: encodeURI(this.sService.sBusiness_DET.name), url: encodeURI(this.sService.sBusiness_DET.url)};
  }

  onCancelRes() {
    const fetchLocalStorage = JSON.parse(localStorage.getItem('angularResource'));
    delete fetchLocalStorage[this.sService.sBusiness_DET.id];
    localStorage.setItem('angularResource', JSON.stringify(fetchLocalStorage));
    alert('Reservation cancel!');
  }

  isReserved() {
    const fetchLocalStorage = JSON.parse(localStorage.getItem('angularResource'));
    return this.sService.sBusiness_DET.id in fetchLocalStorage;
  }
}
