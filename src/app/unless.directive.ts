import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear(); // remove everything from this place in the dom
    }
  }

  constructor
  (
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
