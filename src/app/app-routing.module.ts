import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PlayComponent } from './play/play.component';
import { Datepicker } from './Datepicker/datepicker';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'play', component: PlayComponent },
  { path: 'datepicker', component: Datepicker}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
