import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
@Input() images:string[] = [
  "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016_1280.jpg"
];
  constructor() { }

  ngOnInit(): void {
  }

}
