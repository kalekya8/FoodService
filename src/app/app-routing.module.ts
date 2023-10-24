import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; 

const routes: Routes = [
  {path:'', component:HomepageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgMultiSelectDropDownModule.forRoot()
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
