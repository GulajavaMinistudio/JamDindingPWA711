import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogUpdateService } from './services/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stringTanggalSekarang = '1 Januari 2019';
  subscription: Subscription;

  constructor(private swupdates: LogUpdateService) {
    // check the service worker for updates
    this.swupdates.checkUpdatesApp();
  }
}

