import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { TableComponent } from './search/table/table.component';
import { ModalFormComponent } from './search/detail-card/pageone/modal-form/modal-form.component';
import { InfoCardComponent } from './search/detail-card/pageone/info-card/info-card.component';
import { DetailCardComponent } from './search/detail-card/detail-card.component';
import { RecordComponent } from './search/table/record/record.component';
import { MeterMilePipe } from './search/meter-mile.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageoneComponent } from './search/detail-card/pageone/pageone.component';
import { PagetwoComponent } from './search/detail-card/pagetwo/pagetwo.component';
import { PagethreeComponent } from './search/detail-card/pagethree/pagethree.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BookingComponent,
    SearchFormComponent,
    TableComponent,
    ModalFormComponent,
    InfoCardComponent,
    DetailCardComponent,
    RecordComponent,
    MeterMilePipe,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
