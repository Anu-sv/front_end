import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseUrl="http://localhost:8082/site/product/get"

  constructor(private httpClient:HttpClient) { }

  getAllVendorList(): Observable<Product[]>{
    console.log("hello")
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }
}
