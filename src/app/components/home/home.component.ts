import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  banner: string = 'assets/fondo_login_erp_2.jpg'

  constructor() { }

  ngOnInit(): void {}

}
