import { Component, OnInit } from '@angular/core';
import { DataMBusService } from 'data-m-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'host-app';
  isNgFav: boolean = false;
  tech:string = "";

  constructor(private mbus: DataMBusService){}

  ngOnInit(): void
  {
    this.mbus?.getDataFromRemote()?.subscribe({
      next: (res: any) => {
        this.isNgFav = res?.added;

        if(this.isNgFav)
          {
              this.tech="Angular";
          }
          else{
            this.tech="No records";
          }
      }
    })
  }

  removefav()
  {
    this.tech = "No records";
    this.isNgFav = false;
    this.mbus.setDataFromHost({added: false});
  }

}
