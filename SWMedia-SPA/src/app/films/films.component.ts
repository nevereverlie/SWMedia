import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor() { }

  Images = ['https://res.cloudinary.com/nevereverlie/image/upload/v1591097291/SWMedia_Films/Rectangle_1_smosjc.png',
            'https://res.cloudinary.com/nevereverlie/image/upload/v1591097291/SWMedia_Films/Rectangle_2_ysdlhg.jpg',
            'https://res.cloudinary.com/nevereverlie/image/upload/v1591097291/SWMedia_Films/Rectangle_3_ipr7pq.jpg',
            'https://res.cloudinary.com/nevereverlie/image/upload/v1591097290/SWMedia_Films/Rectangle_4_bilcis.png',
            'https://res.cloudinary.com/nevereverlie/image/upload/v1591097290/SWMedia_Films/Rectangle_5_kd3btk.png',
            'https://res.cloudinary.com/nevereverlie/image/upload/v1591097290/SWMedia_Films/Rectangle_6_altaql.png',
            'https://res.cloudinary.com/nevereverlie/image/upload/v1591097290/SWMedia_Films/Rectangle_7_n2oaip.jpg',
            'https://res.cloudinary.com/nevereverlie/image/upload/v1591097290/SWMedia_Films/Rectangle_8_dxof3w.jpg',
            'https://res.cloudinary.com/nevereverlie/image/upload/v1591097290/SWMedia_Films/Rectangle_9_o8towe.jpg'];

  SlideOptions = { items: 3, dots: true };
  CarouselOptions = { items: 9, dots: true, mouseDrag: true };

  ngOnInit() {
  }

}
