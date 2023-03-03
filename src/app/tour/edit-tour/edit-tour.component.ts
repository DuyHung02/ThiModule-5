import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tour} from "../../model/Tour";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit{

  constructor(private tourService: TourService, private route : ActivatedRoute, private router: Router) {
  }

  id!: any
  tour!: Tour
  formEdit!: FormGroup

  editTour() {
    this.tour = this.formEdit.value
    this.tourService.creatTour(this.tour).subscribe(data => {
      this.router.navigate(['/show'])
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.tourService.findTourById(this.id).subscribe(data =>{
      this.tour = data
      this.formEdit = new FormGroup({
        id: new FormControl(this.tour?.id),
        name: new FormControl(this.tour?.name),
        price: new FormControl(this.tour?.price),
        description: new FormControl(this.tour?.description)
      })
    })
  }

}
