import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataWaktuService } from './services/data-waktu-service.service';
import { JamWaktuComponent } from '@app/jam-dinding/jam-waktu/jam-waktu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LogUpdateService } from './services/log-update.service';
import { JamWaktuViewComponent } from '@app/jam-dinding/jam-waktu-view/jam-waktu-view.component';

@NgModule({
  declarations: [
    AppComponent,
    JamWaktuComponent,
    JamWaktuViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataWaktuService, LogUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
