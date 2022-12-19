import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceboxComponent } from './components/choicebox/choicebox.component';
import { CBoxContainerComponent } from './components/cbox-container/cbox-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceboxComponent,
    CBoxContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
