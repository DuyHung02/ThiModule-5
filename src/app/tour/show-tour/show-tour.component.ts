import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../model/Tour";

@Component({
  selector: 'app-show-tour',
  templateUrl: './show-tour.component.html',
  styleUrls: ['./show-tour.component.css']
})
export class ShowTourComponent implements OnInit{

  tours: Tour[] = []

  constructor(private tourService : TourService) {
  }

  ngOnInit(): void {
    this.tourService.showTour().subscribe(data =>{
      this.tours = data
    })
  }



}
