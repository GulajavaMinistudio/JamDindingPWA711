import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { DataWaktuService } from '@app/services/data-waktu-service.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jam-waktu-view',
  templateUrl: './jam-waktu-view.component.html',
  styleUrls: ['./jam-waktu-view.component.css']
})
export class JamWaktuViewComponent implements OnInit, OnDestroy {


  stringTanggalSekarang = '1 Januari 2019';
  subscription: Subscription;

  constructor(private dateservice: DataWaktuService,
    private router: Router) { }

  ngOnInit() {
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
          this.handleErrorsProses(error);
          console.log(error);
        }
      );
  }

  handleErrorsProses(error: any) {
    this.stringTanggalSekarang = '1 Januari 2019';
    console.log(error);
  }

  navigasiHalamanTentang() {
    this.router.navigate(['/tentang-aplikasi']);
  }
}
