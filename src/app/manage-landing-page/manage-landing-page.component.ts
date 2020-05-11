import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-landing-page',
  templateUrl: './manage-landing-page.component.html',
  styleUrls: ['./manage-landing-page.component.css']
})
export class ManageLandingPageComponent implements OnInit {
  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;

  slides = [
    {image: 'assets/images/avatar-shanai.png'},
    {image: 'assets/images/avatar-ali.png'},
    {image: 'assets/images/avatar-richard.png'},
    {image: 'assets/images/avatar-richard.png'},
    {image: 'assets/images/avatar-richard.png'},
    {image: 'assets/images/avatar-ali.png'},
    {image: 'assets/images/avatar-shanai.png'},
    {image: 'assets/images/avatar-richard.png'},
    {image: 'assets/images/avatar-anisha.png'},
  ];
  constructor() { }

  ngOnInit() {

  }

}
