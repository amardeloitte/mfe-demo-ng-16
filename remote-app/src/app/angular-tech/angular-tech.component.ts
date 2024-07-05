import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataMBusService } from 'data-m-bus';

@Component({
  selector: 'app-angular-tech',
  templateUrl: './angular-tech.component.html',
  styleUrls: ['./angular-tech.component.scss']
})
export class AngularTechComponent implements OnInit {
  FavClicked:Boolean=false;
  hostData:string = "";

  constructor(private dataBus: DataMBusService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataBus.getDataFromHost().subscribe({
      next: (res: any) => {
        this.FavClicked = res?.added;
      }
    })

    this.activatedRoute.paramMap?.subscribe({
      next: (params: ParamMap) => {
        this.hostData = params.get("data") as string;
      }
    })

    this.dataBus?.getDataFromRemoteTable().subscribe((res: any) => {
      this.hostData = res?.text ? res?.text: '';
    })
  }

  addFav() {
    //this.dataBus?.setDataFromRemote({added: true});
    localStorage.setItem("added", 'true');
    const customEvent = new Event("remoteToHostComm");
    window.dispatchEvent(customEvent);
    this.FavClicked=true;
  }

  remFav()
  {
    this.dataBus?.setDataFromRemote({added: false});
    this.FavClicked=false;

  }


}
