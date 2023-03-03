import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {ActivatedRoute} from "@angular/router";
import {Tour} from "../../model/Tour";

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit{

  constructor(private tourService: TourService, private route: ActivatedRoute) {
  }

  id: any;
  tour!: Tour

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.tourService.findTourById(this.id).subscribe(data =>{
      this.tour = data
    })
  }

}
