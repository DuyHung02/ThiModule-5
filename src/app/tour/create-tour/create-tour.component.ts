import { Component } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../../model/Tour";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css']
})
export class CreateTourComponent {

  constructor(private tourService : TourService, private router: Router) {
  }

  tour!: Tour

  formTour : FormGroup = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    price: new FormControl(""),
    description: new FormControl("")
  })

  creatTour() {
    this.tour = this.formTour.value
    this.tourService.creatTour(this.tour).subscribe(data =>{
      this.router.navigate(['/show'])
    })
  }

}
