import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Trip } from '../trip';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TripsService {
  
  private tripsCollection: CollectionReference<DocumentData>;
  private trips: Observable<Trip[]>;

  private apiUrl = 'https://tripagency-6f84c-default-rtdb.europe-west1.firebasedatabase.app/trips.json';

  constructor(private http: HttpClient, private firestore: Firestore) {
    this.tripsCollection = collection(this.firestore, 'trips');
    this.trips = collectionData(this.tripsCollection, { idField: 'id' }) as Observable<Trip[]>;
   }

  getTrips(): Observable<Trip[]> {
    return this.trips;
  }

  deleteTrip(trip: Trip) {
    const tripRef = doc(this.firestore, `trips/${trip.id}`);
    return deleteDoc(tripRef);
  }

  addTrip(trip: Trip) {
    return addDoc(this.tripsCollection, trip);
  }

  updateTrip(trip: Trip) {
    const tripRef = doc(this.firestore, `trips/${trip.id}`);
    return updateDoc(tripRef, {... trip });
  }
}
