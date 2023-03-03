import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTourComponent } from './tour/show-tour/show-tour.component';
import { CreateTourComponent } from './tour/create-tour/create-tour.component';
import { TourDetailComponent } from './tour/tour-detail/tour-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditTourComponent } from './tour/edit-tour/edit-tour.component';
import { DeleteComponent } from './tour/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTourComponent,
    CreateTourComponent,
    TourDetailComponent,
    EditTourComponent,
    DeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
