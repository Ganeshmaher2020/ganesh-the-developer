import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { SpecializationComponent } from './Components/specialization/specialization.component';
import { JourneyComponent } from './Components/journey/journey.component';
import { words } from 'cypress/types/lodash';
import { WorksComponent } from './Components/works/works.component';
const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {path:'contact',component:ContactFormComponent},
  {path:'specialization', component:SpecializationComponent},
  {path:'journey',component:JourneyComponent},
  {path:'work',component:WorksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
