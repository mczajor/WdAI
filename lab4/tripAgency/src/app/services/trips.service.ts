import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Trip } from '../trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private apiUrl = 'http://localhost:5000/trips';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  
}
