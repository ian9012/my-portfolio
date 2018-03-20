import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInfoService } from './services/my-info.service';


@NgModule({
  declarations: [
    AppComponent,
    RouteComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
