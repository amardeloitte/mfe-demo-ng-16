import { Component } from '@angular/core';
import { DataMBusService } from 'data-m-bus';

@Component({
  selector: 'app-angular-tech',
  templateUrl: './angular-tech.component.html',
  styleUrls: ['./angular-tech.component.scss']
})
export class AngularTechComponent {

  constructor(private dataBus: DataMBusService) {}

  addFav() {
    this.dataBus?.setDataFromRemote({added: true});
  }

}
