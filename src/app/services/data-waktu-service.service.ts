import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataWaktuService {

  constructor() { }

  getTanggalObservable(): any {

    moment.locale('id');

    const observableDate = Observable.create(
      observable => {

        try {
          const momentlocale = moment().locale('id');
          const susunWaktuTanggal: string = momentlocale.format('DD MMMM YYYY');
          observable.next(susunWaktuTanggal);
          observable.complete();
        } catch (err) {
          Observable.throw(err);
        }
      }
    );

    return observableDate;
  }
}
