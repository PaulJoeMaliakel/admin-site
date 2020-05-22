import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispatcherComponent } from './dispatcher/dispatcher.component';


const routes: Routes = [
  {path: 'dispatcher', component: DispatcherComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
