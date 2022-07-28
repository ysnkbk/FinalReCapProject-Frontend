import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {
  carDetailDtos:CarDetailsDto[];
  constructor(private carDetailDtoService:CarDetailDtoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
          this.getCarsByCarId(params["carId"]);
      }
    })
  }
  getCarsByCarId(carId:number){
    this.carDetailDtoService.getCarsByCarId(carId).subscribe(response=>
        this.carDetailDtos=response.data
      )
  }
}
