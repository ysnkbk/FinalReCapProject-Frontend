import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailsDto } from '../models/carDetailsDto';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {
  apiUrl='https://localhost:44322/api/cars/getcardetails';
  constructor(private httpClient:HttpClient) {

}
  getCarDetailByBrandId():Observable<ListResponseModel<CarDetailsDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(this.apiUrl);
  }


}
