import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataWaktuService } from './services/data-waktu-service.service';
import { JamWaktuComponent } from './jam-waktu/jam-waktu.component';

@NgModule({
  declarations: [
    AppComponent,
    JamWaktuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataWaktuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
