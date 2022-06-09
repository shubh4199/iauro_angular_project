import { Component, OnInit, Input } from '@angular/core';
import { BestsellersComponent } from '../bestsellers/bestsellers.component';
import { CleansersComponent } from '../cleansers/cleansers.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  bestSellers1:HTMLCollectionOf<Element> = document.getElementsByClassName('product-card')
  
  
  

  imgCollection: Array<object> = [
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/280098718_513716927070864_3936634105726744056_n.jpg'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/280105183_754899898837010_3740158969201386798_n.jpg'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/280115950_1479022795833641_8886361134856083742_n.webp'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/279758280_708716210169487_1682623290007293994_n.jpg'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/279888928_554375669436542_8129194429946198224_n.webp'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/279642872_454775739818919_7098828891190305796_n.jpg'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/279671683_145117004730596_849957359366036969_n.webp'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/279656089_722382275556604_4026250021219545050_n.jpg'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/279538713_1619213195120653_7137635369424272150_n.webp'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/280034882_552186606345090_6725420818206440265_n.webp'},
    { thumbImage: 'https://d12oh2gzettinl.cloudfront.net/instagram-story/posts/simpleskincareindia/280225303_412983010338768_3956837485473160136_n.webp'}
  ];

}
