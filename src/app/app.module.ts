import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { SpecializationComponent } from './Components/specialization/specialization.component';
import { JourneyComponent } from './Components/journey/journey.component';
import { WorksComponent } from './Components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactFormComponent,
    SpecializationComponent,
    JourneyComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
