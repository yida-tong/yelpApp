import { Component, OnInit } from '@angular/core';
import {LocalStorageItem} from "../share/models";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  reservationList: LocalStorageItem[] = [];
  shown: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.reservationList = [];
    const fetchLocalStorage = JSON.parse(localStorage.getItem('angularResource'));
    Object.entries(fetchLocalStorage).forEach((value: any[])=>{
      value[1]['id'] = value[0];
      this.reservationList.push(value[1]);
    });
    this.shown = this.reservationList.length>0;
  }

  onClick(id:string) {
    const fetchLocalStorage = JSON.parse(localStorage.getItem('angularResource'));
    delete fetchLocalStorage[id];
    localStorage.setItem('angularResource', JSON.stringify(fetchLocalStorage));
    this.ngOnInit();
    alert('Reservation cancel');
  }

}
