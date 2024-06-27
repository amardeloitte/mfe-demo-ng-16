import { Component, OnInit } from '@angular/core';
import { DataMBusService } from 'data-m-bus';

@Component({
  selector: 'app-angular-tech',
  templateUrl: './angular-tech.component.html',
  styleUrls: ['./angular-tech.component.scss']
})
export class AngularTechComponent implements OnInit {

  constructor(private mbus: DataMBusService) {}

  ngOnInit(): void {
    this.mbus?.setDataFromRemote({data: "remote"});
  }

}
