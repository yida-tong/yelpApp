import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";
import {BUSINESS_REC} from "../../share/models";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public sService: SearchService) {}

  ngOnInit(): void {
  }
  onClick (id) {
    this.sService.fetchDetail(encodeURI(id)).subscribe();
  }
}
