import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailCardComponent implements OnInit {
  tagNum: number=0;

  constructor(public sService: SearchService) { }

  ngOnInit(): void {
  }

}
