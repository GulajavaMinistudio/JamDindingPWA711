import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataWaktuService } from './services/data-waktu-service.service';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  stringTanggalSekarang = '1 Januari 2019';
  subscription: Subscription;

  constructor(private dateservice: DataWaktuService) { }


  ngOnInit(): void {

    this.setTanggalSekarang();
  }

  ngOnDestroy(): void {

    try {
      this.subscription.unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }

  setTanggalSekarang(): void {

    this.subscription = this.dateservice.getTanggalObservable()
      .pipe(
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      )
      .subscribe(
        (hasil) => {
          console.log('tanggal disegarkan');
          this.stringTanggalSekarang = hasil;
        },
        (error) => {
          this.stringTanggalSekarang = '1 Januari 2019';
          console.log(error);
        }
      );
  }

  handleErrorsProses(error: any) {
    this.stringTanggalSekarang = '1 Januari 2019';
    console.log(error);
  }
}

