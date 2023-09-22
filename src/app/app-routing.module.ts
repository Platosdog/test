import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Datepicker } from './Datepicker/datepicker';
import { VacationsComponent } from './Vacations/vacations.component'

const routes: Routes = [
  { path: 'datepicker', component: Datepicker},
  { path: 'vacations', component: VacationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
