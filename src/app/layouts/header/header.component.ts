import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: any = null;
  constructor() { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userLogin'));
    
  }

}
