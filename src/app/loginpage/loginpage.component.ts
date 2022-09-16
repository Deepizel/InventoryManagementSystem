import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit( form: NgForm) {
    console.log(form);
  }
}
