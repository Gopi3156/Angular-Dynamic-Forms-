import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InitialFormComponent} from "../initial-form/initial-form.component";

const components = [InitialFormComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class PracticeFormsModule { }


/*
* Notes: generated this module using ng g module PracticeFormsModule. export this class and add
* all the components related to forms here. for the appModule to use we also need to export the components created
* here to appmodule we need to add to exports so instead of duplicating the componets to imports and exports create
* an array and use ... spread operator and only change thats required in appmodule is to import this module in there
*
* */
