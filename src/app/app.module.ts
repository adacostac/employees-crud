import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LandingModule } from './landing/landing.module';
import { DemoModule } from './demo/demo.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayDataComponent } from './employee/detail/display-data/display-data.component';
import { EditDataComponent } from './employee/detail/edit-data/edit-data.component';
import { SharedModule } from './shared/shared.module';
import { ListComponent } from './employee/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DisplayDataComponent,
    EditDataComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LandingModule,
    DemoModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
