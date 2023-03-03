import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowTourComponent} from "./tour/show-tour/show-tour.component";
import {CreateTourComponent} from "./tour/create-tour/create-tour.component";
import {TourDetailComponent} from "./tour/tour-detail/tour-detail.component";
import {EditTourComponent} from "./tour/edit-tour/edit-tour.component";

const routes: Routes = [
  {path: 'show', component: ShowTourComponent},
  {path: 'create', component: CreateTourComponent},
  {path: 'detail', component: TourDetailComponent},
  {path: 'edit/: id', component: EditTourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
