import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate) {

    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    if (this.updates.isEnabled) {
      interval(6 * 60 * 60).subscribe(() => {
        this.updates.checkForUpdate();
      });
    }
  }

  checkUpdatesApp() {

    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);

      this.prompUpdateUsers();
    });
  }

  prompUpdateUsers() {
    console.log('Update to new version');
    // paksa update halaman atau app
    this.updates.activateUpdate().then(() => {
      document.location.reload();
    });
  }
}
