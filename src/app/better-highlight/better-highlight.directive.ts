import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    /*
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue');
    */
  }

  @HostListener('mouseenter') mouseEnters(eventData: Event){
    console.log('better-highlight.directive > HostListener mouseenter');
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue');
  }

  @HostListener('mouseleave') mouseLeaves(eventData: Event){
    console.log('better-highlight.directive > HostListener mouseleave');
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent');    
  }

}