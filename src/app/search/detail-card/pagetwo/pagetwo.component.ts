import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SearchService} from "../../search.service";

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PagetwoComponent implements OnInit {
  mapOptions: google.maps.MapOptions;
  marker:any;

  constructor(public sService: SearchService) { }

  ngOnInit(): void {
    this.mapOptions = {
      center: { lat: this.sService.sBusiness_DET.coordinates.latitude, lng: this.sService.sBusiness_DET.coordinates.longitude},
      zoom : 15
    }
    this.marker = {
      position: { lat: this.sService.sBusiness_DET.coordinates.latitude, lng: this.sService.sBusiness_DET.coordinates.longitude},
    }
  }
}
