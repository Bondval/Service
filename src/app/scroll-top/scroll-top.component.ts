import { Component, OnInit,HostListener } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
  animations: [
    trigger('AnimationTop', [
      state('hide', style({
        opacity: 0, transform: 'translateY(-100%)'
      })),
      state('show', style({
        opacity: 1, transform: 'translateY(0)'
      })),
      transition('hide <=> show', animate('500ms ease-in')),
    ]),
  ],
})
export class ScrollTopComponent implements OnInit {
  public scrollPosition: number = 0;
  public animationScrollTop: string = 'hide';
  
  scrollToTop() {
    setTimeout(()=>{
      if(this.scrollPosition > 0) {
        this.scrollPosition -= 50;
        window.scrollTo(0, this.scrollPosition);
        this.scrollToTop();
      }
    }, 10);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(){
    this.scrollPosition = window.pageYOffset;
    if (this.scrollPosition >= 800 && this.animationScrollTop == 'hide') {
      this.animationScrollTop = 'show';
    } else if (this.scrollPosition < 800 && this.animationScrollTop == 'show') {
      this.animationScrollTop = 'hide';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
