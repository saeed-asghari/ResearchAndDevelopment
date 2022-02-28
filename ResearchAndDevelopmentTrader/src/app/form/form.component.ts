import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  hide = true;
  submit(){
    console.log("submit")
  }
  ngOnInit(): void {
  }

}
