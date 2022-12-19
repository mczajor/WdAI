import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { TripsContainerComponent } from './components/trips-container/trips-container.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TripCardComponent,
    TripsContainerComponent,
    NavigationComponent,
    UserCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
