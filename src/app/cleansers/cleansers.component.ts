import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleansers',
  templateUrl: './cleansers.component.html',
  styleUrls: ['./cleansers.component.css']
})
export class CleansersComponent implements OnInit {

  cleansersCollection:any = document.getElementsByClassName('product-card');

  constructor() { }

  ngOnInit(): void {
  }

  

}
