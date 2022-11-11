import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {BookingComponent} from "./booking/booking.component";

const routes: Routes = [
  {path: 'search', component: SearchComponent, pathMatch: 'full'},
  {path: 'bookings', component: BookingComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/search'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
