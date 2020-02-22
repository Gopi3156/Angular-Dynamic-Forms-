import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitialFormComponent} from "./initial-form/initial-form.component";


const routes: Routes = [{ path: 'initialForm', component: InitialFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
