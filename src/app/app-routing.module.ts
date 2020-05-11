import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageLandingPageComponent } from './manage-landing-page/manage-landing-page.component';


const routes: Routes = [{ path: '', component: ManageLandingPageComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
