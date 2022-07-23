import { Component, OnInit } from '@angular/core';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetailDtos:CarDetailsDto[]=[];
  constructor(private carDetailDtoService:CarDetailDtoService) { }

  ngOnInit(): void {
      this.getCarDetails();
    }

  getCarDetails(){
    this.carDetailDtoService.getCarDetailByBrandId().subscribe(response=>
        this.carDetailDtos=response.data
      );
  }


  }


