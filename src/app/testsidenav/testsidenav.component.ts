import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testsidenav',
  templateUrl: './testsidenav.component.html',
  styleUrls: ['./testsidenav.component.css']
})
export class TestsidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sidebarShow: boolean = false;
}

