import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalDtos:RentalDetailDto[]=[];
  constructor(private rentalDetailDtoService:RentalDetailDtoService) { }

  ngOnInit(): void {
    this.getRentalDtos();
  }

  getRentalDtos(){
    this.rentalDetailDtoService.getRentalDetail().subscribe(response=>
        this.rentalDtos=response.data
      )
  }
}
