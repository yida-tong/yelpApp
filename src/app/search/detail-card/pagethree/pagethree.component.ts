import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../search.service";
import {REVIEW} from "../../../share/models";

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent implements OnInit {
  reviews: REVIEW[] = [];

  constructor(public sService: SearchService) { }

  ngOnInit(): void {
    this.sService.fetchReview(encodeURI(this.sService.sBusiness_DET.id)).subscribe(
      body=>{
        if (body.error) {
          alert('yelp review response error.');
        } else {
          this.reviews = body.content;
        }
      }
    );
  }

}
