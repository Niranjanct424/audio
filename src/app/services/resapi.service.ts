import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable, window } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResapiService {

  constructor(private _httpClient: HttpClient) { }

  // private baseUrl ="http://localhost:8080/sampleapp";
  private baseUrl = "http://localhost:8080/sampleapp";
  private _url : string = "../assets/data/employees.json";
  private prodUrl : string = "/assets/data/employees.json";


  getHikeDetails():Observable<IEmployee[]> {
    return this._httpClient.get<IEmployee[]>(this.baseUrl+this.prodUrl);

    // return this._httpClient.get<IEmployee[]>(this._url);
  }
}
