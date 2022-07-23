import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl='https://localhost:44322/api/brands/getall'; 
  constructor(private httpClient:HttpClient) { }

  getBrand():Observable<BrandResponseModel>{
      return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }


}
