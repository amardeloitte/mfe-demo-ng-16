import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hostText:string = "hostData Modified";

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  loadNgMfe() {
    this.router.navigate(['/angular-tech-mfe', this.hostText], {relativeTo: this.activatedRoute});
  }

}
