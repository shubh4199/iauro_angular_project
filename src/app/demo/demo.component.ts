import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  images:any = [
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27278_S1_8901030773563_228x228.jpg?v=1652078098"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27281_S1_8901030773600_228x228.jpg?v=1652072971"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27274_S1_8901030773525_228x228.jpg?v=1652079525"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27278_S1_8901030773563_228x228.jpg?v=1652078098"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27281_S1_8901030773600_228x228.jpg?v=1652072971"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27274_S1_8901030773525_228x228.jpg?v=1652079525"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27278_S1_8901030773563_228x228.jpg?v=1652078098"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27281_S1_8901030773600_228x228.jpg?v=1652072971"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27274_S1_8901030773525_228x228.jpg?v=1652079525"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27278_S1_8901030773563_228x228.jpg?v=1652078098"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27281_S1_8901030773600_228x228.jpg?v=1652072971"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27274_S1_8901030773525_228x228.jpg?v=1652079525"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27278_S1_8901030773563_228x228.jpg?v=1652078098"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27281_S1_8901030773600_228x228.jpg?v=1652072971"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27274_S1_8901030773525_228x228.jpg?v=1652079525"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"},
    {url: "https://cdn.shopify.com/s/files/1/0560/7017/6931/products/27279_S1_8901030773570_280x280.jpg?v=1652078571"}
  ];

  post:any = [];

  constructor() { }
  count = 0
  ngOnInit(): void {
    for(let i=1; i<=8; i++)
    {
      this.post.push(this.images[this.count]);
      this.count++;
    }
  }

  onScroll() {
    const length = this.post.length;
    setTimeout(() => {
      const p:any = ' '.repeat(8).split('').map((s,i)=> i +  1 + length);
      //while(p.length) this.post.push(p.shift());
      for(let i=1; i<=8; i++)
    {
      this.post.push(this.images[i])
    }
    },1000);
  }
  
}
