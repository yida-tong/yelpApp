import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: '[app-record]',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() idx: number;
  @Input() url: string;
  @Input() name: string;
  @Input() rating: number;
  @Input() distance: number;

  constructor() { }

  ngOnInit(): void {
  }

}
