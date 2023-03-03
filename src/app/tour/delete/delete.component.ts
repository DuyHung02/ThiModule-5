import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tour} from "../../model/Tour";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  constructor(private tourService: TourService, private route : ActivatedRoute, private router: Router) {
  }

  id!: any
  tour!: Tour

  deleteTour() {
    this.tourService.deleteTour(this.id).subscribe(data => {
      this.router.navigate(['/show'])
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.tourService.findTourById(this.id).subscribe(data =>{
      this.tour = data
    })
  }
}
