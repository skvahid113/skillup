import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SqlpathComponent } from './sqlpath/sqlpath.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SqloverviewComponent } from './sqloverview/sqloverview.component';
import { SqlcommandsComponent } from './sqlcommands/sqlcommands.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SqlpathComponent,
    SqloverviewComponent,
    SqlcommandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
