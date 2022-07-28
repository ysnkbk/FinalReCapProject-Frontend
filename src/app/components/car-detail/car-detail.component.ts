import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  dataLoaded=false;
  carDetailDtos:CarDetailsDto[]=[];
  carImagePath:string;
  currentImage:CarDetailsDto;
  constructor(private carDetailDtoService:CarDetailDtoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorName"]){
          this.getCarsByColor(params["colorName"]);
      }
      else if(params["brandName"]){
          this.getCarsByBrand(params["brandName"]);
      }
      else
        this.getCarDetails();
    })
    }

  getCarDetails(){
    this.carDetailDtoService.getCarDetail().subscribe(response=>
        this.carDetailDtos=response.data
      );
  }
  getCarsByColor(colorName:string){
    this.carDetailDtoService.getCarsByColor(colorName).subscribe(response=>{
      this.carDetailDtos=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByBrand(colorName:string){
    this.carDetailDtoService.getCarsByBrand(colorName).subscribe(response=>{
      this.carDetailDtos=response.data;
      this.dataLoaded=true;
    })
  }
  setCurrentImg(carDetail:CarDetailsDto){
      this.currentImage=carDetail;
  }

  }


