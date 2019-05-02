import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DemoComponent } from './demo/demo.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListComponent } from './employee/list/list.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'employees', component: ListComponent },
  { path: 'employees/:id', component: EmployeeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
