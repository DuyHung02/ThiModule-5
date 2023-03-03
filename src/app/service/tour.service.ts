import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../model/Tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) {
  }

  showTour(): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:3000/tours')
  }

  findTourById(id: number): Observable<Tour> {
    return this.http.get<Tour>('http://localhost:3000/tours/' + id)
  }

  creatTour(tour: Tour) : Observable<Tour> {
    return this.http.post<Tour>('http://localhost:3000/tours', tour)
  }

  deleteTour(id: number) {
    return this.http.delete('http://localhost:3000/tours/' + id)
  }
}
