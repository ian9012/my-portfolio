import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInfoService } from './services/my-info.service';
import { MyInfoComponent } from './components/my-info/my-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MyInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
