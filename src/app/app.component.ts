import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'yelpApp';

  ngOnInit() {
    if (localStorage.getItem('angularResource')===null) {
      localStorage.setItem('angularResource', JSON.stringify({}));
    }
  }

}
