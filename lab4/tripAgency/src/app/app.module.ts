import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { TripsContainerComponent } from './components/trips-container/trips-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { RatingComponent } from './components/rating/rating.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; 
import { environment } from '../environments/environment';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GoogleMapsModule } from '@angular/google-maps';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { CartTripCardComponent } from './components/cart-trip-card/cart-trip-card.component';



@NgModule({
  declarations: [
    AppComponent,
    TripCardComponent,
    TripsContainerComponent,
    NavbarComponent,
    FilterComponent,
    AddTripComponent,
    RatingComponent,
    FilterPipe,
    HomeComponent,
    CartComponent,
    PageNotFoundComponent,
    TripDetailsComponent,
    CartTripCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    BrowserModule,
    GoogleMapsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
