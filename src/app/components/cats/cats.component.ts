import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  @Input() images:string[] = [
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
