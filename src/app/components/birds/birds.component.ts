import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent implements OnInit {
  @Input() images:string[] = [
    "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/23/18/27/hummingbird-1854225_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/05/20/21/25/chicks-349035_1280.jpg"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
