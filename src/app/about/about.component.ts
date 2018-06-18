import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  public scrollPosition: number ;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let loki = document.getElementById('parallax-image');
    this.scrollPosition = window.pageYOffset;
    let calc = this.scrollPosition - 200;
    if (this.scrollPosition<400){
     loki.style.transform ="translate3D(0px ," + calc / 4 + "px ,0px)";
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
