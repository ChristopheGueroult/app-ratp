import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatpService {
  constructor(private http: HttpClient) {
  }

  public getList(start) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(`https://data.ratp.fr//api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&rows=10&sort=code_postal&facet=tco_libelle&facet=code_postal&start=${start}`);
  }


}
