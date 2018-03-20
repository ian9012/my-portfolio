import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyInfoComponent } from './components/my-info/my-info.component';


const routes: Routes = [
  {path: '', redirectTo: 'my-info', pathMatch: 'full'},
  {
    path: 'my-info',
    component: MyInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouteComponents = [MyInfoComponent];
