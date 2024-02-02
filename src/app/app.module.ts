import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homeapp } from './Home/home';
import { Galleryapp } from './Gallery/gallery.component';
import { Aboutapp } from './About/about.component.';
import { Contactapp } from './Contact/contact.componenet';

@NgModule({
  declarations: [
    AppComponent , Homeapp , Galleryapp , Aboutapp , Contactapp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
