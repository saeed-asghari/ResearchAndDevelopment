import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private route: ActivatedRoute) {}
  lng: string | null | undefined;
  strDir:Direction =Direction.LTR;
  ngOnInit() {
    this.lng = this.route.snapshot.queryParamMap.get('lng');
    if (this.lng != null && this.lng != undefined && this.lng == 'fa') {
      this.strDir = Direction.RTL;
    } else {
      this.strDir = Direction.LTR;
    }
  }
}
enum Direction {
  RTL = 'rtl',
  LTR = 'ltr',
}
