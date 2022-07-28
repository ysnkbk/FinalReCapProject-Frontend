import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';
import { CarService } from 'src/app/services/car.service';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';

//axios,fetch
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]= [];
  carDetailDtos:CarDetailsDto[]=[];
  dataLoaded=false;
  constructor(private carService:CarService,
    ) { }

  ngOnInit(): void {

  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }




}
