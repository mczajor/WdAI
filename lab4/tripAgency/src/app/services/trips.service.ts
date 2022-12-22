import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Trip } from '../trip';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TripsService {
  private apiUrl = 'http://localhost:3000/Trips';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  deleteTrip(trip: Trip): Observable<Trip> {
    const url = `${this.apiUrl}/${trip.id}`;
    return this.http.delete<Trip>(url);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip);
  }
}
