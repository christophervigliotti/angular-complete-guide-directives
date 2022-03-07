import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(
        private elementRef: ElementRef
    ){
        console.log('basic-highlight.directive constructor');
    }
    ngOnInit() {
        console.log('basic-highlight.directive ngOnInit');
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}