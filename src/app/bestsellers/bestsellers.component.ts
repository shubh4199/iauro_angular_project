import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input('bestSell') bestSeller = document.getElementsByClassName('product-card')

}
