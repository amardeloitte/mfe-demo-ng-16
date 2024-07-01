import { Component, OnInit } from '@angular/core';
import { DataMBusService } from 'data-m-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'host-app';
  isNgFav: boolean = false;
  tech: Array<string> = [];

  constructor(private mbus: DataMBusService) {}

  ngOnInit(): void {
    // this.mbus?.getDataFromRemote()?.subscribe({
    //   next: (res: any) => {
    //     this.isNgFav = res?.added;
    //     this.tech = [];
    //     if(this.isNgFav)
    //       {
    //         this.tech.push("Angular");
    //       }
    //       else{
    //         this.tech.push("No records");
    //       }
    //   }
    // })

    window.addEventListener('remoteToHostComm', () => {
      const data = localStorage.getItem('added');
      this.isNgFav = data === 'true';
      this.tech = [];
      if (this.isNgFav) {
        this.tech.push('Angular');
      } else {
        this.tech.push('No records');
      }
    });
  }

  removefav(techStr: string) {
    this.tech = this.tech?.filter((item) => item !== techStr);
    this.tech = this.tech?.length === 0 ? ['No records'] : this.tech;
    this.isNgFav = techStr !== 'Angular';
    !this.isNgFav && this.mbus.setDataFromHost({ added: false });
  }
}
