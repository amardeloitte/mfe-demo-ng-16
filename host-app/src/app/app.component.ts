import { Component, OnInit } from '@angular/core';
import { DataMBusService } from 'data-m-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'host-app';

  constructor(private mbus: DataMBusService){}
  
  ngOnInit(): void {
    this.mbus?.getDataFromRemote().subscribe(res => {
      console.log(res)
    })
  }
}
