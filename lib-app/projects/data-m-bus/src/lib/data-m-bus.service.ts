import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMBusService {

  constructor() { }

  dataFromHost = new BehaviorSubject<object>({});
  dataFromRemote = new BehaviorSubject<object>({});

  setDataFromHost(data: object) {
    this.dataFromHost.next(data);
  }

  getDataFromHost(): Observable<object> {
    return this.dataFromHost;
  }

  setDataFromRemote(data: object) {
    this.dataFromRemote.next(data);
  }

  getDataFromRemote(): Observable<object> {
    return this.dataFromRemote;
  }
}
