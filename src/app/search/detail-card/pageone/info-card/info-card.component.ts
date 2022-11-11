import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../../search.service";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  constructor(public sService: SearchService) { }

  ngOnInit(): void {
  }

  transCategory(cateList: string[]):string {
    return cateList.join(' | ');
  }

}
