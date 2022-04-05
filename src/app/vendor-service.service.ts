import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {
  private baseUrl="http://localhost:8082/site/vendor/data"

  constructor(private httpClient:HttpClient) { }

  getAllVendorList(): Observable<Vendor[]>{
    console.log("hello")
    return this.httpClient.get<Vendor[]>(`${this.baseUrl}`);
  }
}
