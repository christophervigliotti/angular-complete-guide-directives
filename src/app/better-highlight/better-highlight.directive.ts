import { 
  Directive, 
  OnInit, 
  ElementRef, 
  Renderer2, 
  HostListener, 
  HostBinding, 
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2
  ) { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseEnters(eventData: Event){
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeaves(eventData: Event){
    this.backgroundColor = this.defaultColor;
  }
}