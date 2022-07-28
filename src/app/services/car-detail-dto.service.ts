import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailsDto } from '../models/carDetailsDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {
  apiUrl='https://localhost:44322/api/cars/';
  constructor(private httpClient:HttpClient) {

}
  getCarDetail():Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+"getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByColor(colorName:string):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+'getbycolorName?colorName='+colorName;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByBrand(brandName:string):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+'getbybrandname?brandname='+brandName;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByCarId(carId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+'getcardetailsbycarid?carId='+carId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
}
