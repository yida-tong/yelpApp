import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Subject} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {BUSINESS_DET, BUSINESS_DET_RES, BUSINESS_REC, BUSINESS_RES, REVIEW} from "../share/models";

@Injectable()
export class SearchService {
  sFormState: number = 2;
  sBusiness_RECS: BUSINESS_REC[] = [];
  sBusiness_DET: BUSINESS_DET;

  formRendered: boolean = false;


  constructor(private http: HttpClient) {}

  fetchFromIp () {
    return this.http.get<{[key:string]: string}>(
      'https://ipinfo.io',
      {
        params: new HttpParams().set('token', 'b0f9d3d54e689f'),
        observe: 'body'
      }
    ).pipe(map(
      body =>{
        return {lat: body.loc.split(',')[0], long: body.loc.split(',')[1]};
      }
    ));
  }

  fetchFromGeo (encodedStr: string) {
    return this.http.get<{[key:string]: any}>(
      'https://tony-node.wl.r.appspot.com/geo/'+encodedStr,
      {
        observe: 'body'
      }
    );
  }

  fetchBusiness (form: {term?: string, latitude?: string, longitude?: string, radius?: number, categories?: string}) {
    return this.http.get<BUSINESS_RES>(
      'https://tony-node.wl.r.appspot.com/yelp/search',
      {
        params: form,
        observe: 'body'
      }
    ).pipe(tap(
      body =>{
        if (body.error) {
          alert(body.content);
        } else {
          this.sBusiness_RECS = body.content;
          if (this.sBusiness_RECS.length===0) this.sFormState=0;
          else this.sFormState=1;
        }
      }
    ));
  }

  fetchKeyWord (encodedStr: string) {
    return this.http.get<{error: boolean, content: string[]}>(
      'https://tony-node.wl.r.appspot.com/yelp/autocomplete/'+encodedStr,
      {
        observe: 'body'
      }
    ).pipe(map(
      body =>{
        if (body.error) {
          alert('yelp status code:429, too many autocomplete requests. Please slow down typing.');
        } else {
          return body.content;
        }
      }
    ));
  }

  fetchDetail (encodedId: string) {
    return this.http.get<BUSINESS_DET_RES>(
      'https://tony-node.wl.r.appspot.com/yelp/detail/'+encodedId,
      {
        observe: 'body'
      }
    ).pipe(tap(
      body =>{
        if (body.error) {
          alert('yelp business detail response error.');
        } else {
          this.sBusiness_DET = body.content;
          this.sFormState = 3;
        }
      }
    ));
  }

  fetchReview (encodedId: string) {
    return this.http.get<{error:boolean;content:REVIEW[]}>(
      'https://tony-node.wl.r.appspot.com/yelp/review/'+encodedId,
      {
        observe: 'body'
      }
    );
  }

}
