# Directives Deep Dive (Section 7)

This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)". For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .

## 101. Building a Structural Directive

link

notes
```
code
```

notes
```
code
```

## 100. What Happens behind the Scenes on Structural Directives

link

notes
```
code
```

notes
```
code
```

## 99. Binding to Directive Properties

link

notes
```
code
```

notes
```
code
```

## 98. Using HostBinding to Bind to Host Properties

link

notes
```
code
```

notes
```
code
```

## 97. Using HostListener to Listen to Host Events

link

notes
```
code
```

notes
```
code
```

## 96. More about the Renderer

link

notes
```
code
```

notes
```
code
```

## 95. Using the Renderer to build a Better Attribute Directive

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656172#overview

### better-highlight.directive.ts

* Command `ng g d better-highlight` generates the new directive (and a test that I deleted).  File was moved into subfolder `better-highlight`.
* Renderer2 is injected into the constructor method...as with the previous method, scoping the var to `private` allows us to access it in other methods in this object/directive.  
* setStyle() method is used to change the background-color to blue

```
import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2
  ) { }
  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue');
  }
}
```

### app.module.ts

Import BetterHighlightDirective using `import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';` and also add it to the declarations array
```
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### app.component.html

Implement the directive
```
<p appBetterHighlight>Style me with a better directive</p>
```

## 94. Creating a Basic Attribute Directive

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/13193718#overview

* ngClass and ngStyle are attribute directives
* build a directive that highlights an element that we hover over
* created new subfolder of app `basic-highlight`
* created new file `basic-highlight.directive.ts` 

### basic.highlight.directive.ts

This defines our custom attribute directive.  `selector: '[appBasicHighlight]'` defines our selector.  In this example we could implement this directive in a template using `<p appBasicHighlight>I respect your mother</p>` where `appBasicHighlight` is a unique selector.  The square brackets around the selector name allows us to apply the directive to any tag that contains the directive name.  If the brackets were not present TODO: define what the behavior is and note sample usage when square brackets are not used.  
  
We inject the element that the directive sits on by passing it into the constructor function `constructor(private elementRef: ElementRef){}` where `private elementRef: ElementRef` is the element reference argument.  To use the data everywhere in the class (outside of the constructor) we specify that the argument is `private`.  We are doing just that in function `ngOnInit`.

```
import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){}
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'orange';
    }
}
```

### app.module.ts

Inform Angular that we have this directive.  We must import it and declare it.  We import it via `import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';` and declare it in the `declarations` array in the `@NgModule` call.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### app.component.html

To implement this new directive, simply add it as an attribute of the tag where you want to apply it..
```
<p appBasicHighlight>Style me with basic directive</p>
```

## 93. ngClass and ngStype Recap

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656166#overview 

### red text only if number is odd (with "ngClass")

Using `[ngClass]="{odd: odd % 2 == 0}" ` in app.template...

```
<div *ngIf="onlyOdd">
  <li
    class="list-group-item" 
    [ngClass]="{odd: odd % 2 !== 0}"
    *ngFor="let odd of oddNumbers" 
  >{{ odd }}</li>
</div>
<div *ngIf="!onlyOdd">
  <li
    class="list-group-item"
    [ngClass]="{odd: odd % 2 == 0}" 
    *ngFor="let even of evenNumbers" 
  >{{ even }}</li>
</div>
```

### yellow background only if number is odd (with "ngStyle")

using [ngStyle]="{backgroundColor: odd % 2 !== 0?'yellow':'transparent'}"

```
<div *ngIf="onlyOdd">
  <li
    class="list-group-item" 
    [ngClass]="{odd: odd % 2 !== 0}" 
    [ngStyle]="{backgroundColor: odd % 2 !== 0?'yellow':'transparent'}"
    *ngFor="let odd of oddNumbers" 
  >{{ odd }}</li>
</div>
<div *ngIf="!onlyOdd">
  <li
    class="list-group-item"
    [ngClass]="{odd: odd % 2 == 0}" 
    [ngStyle]="{backgroundColor: odd % 2 == 0?'yellow':'transparent'}"
    *ngFor="let even of evenNumbers" 
  >{{ even }}</li>
</div>
```

## 92. ngFor and ngIf Recap

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656164#overview

### loop through all numbers

app template  - loops through the numbers array and displays the current array element 
```
<ul class="list-group">
    <li
    class="list-group-item"
    *ngFor="let number of numbers"             
    >{{ number }}</li>
</ul>
```

app component - declare the array of numbers
```
numbers = [1, 2, 3, 4, 5];
```

### loop through odd or even numbers (toggle with button)

app template - conditional display of one array or another based on the value of boolean variable `onlyOdd`...
```
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <button
        class="btn btn-primary"
        (click)="onlyOdd = !onlyOdd"
      >toggle odd/even numbers</button>
      <br><br>
      <ul class="list-group">
        <div *ngIf="onlyOdd">
          <li
            class="list-group-item"
            *ngFor="let odd of oddNumbers" 
          >{{ odd }}</li>
        </div>
        <div *ngIf="!onlyOdd">
          <li
            class="list-group-item"
            *ngFor="let even of evenNumbers" 
          >{{ even }}</li>
        </div>
      </ul>
  </div>
</div>
```

app component, declare the odd and even arrays...
```
oddNumbers = [1, 3, 5, 7, 9, 11];
evenNumbers = [2, 4, 6, 8];
onlyOdd = false;
```

## 91. Module Introduction

Attribute Directives vs Structural Directives

* attribute: because they sit on elements
* structural: same, but they change the structure of the DOM

## Up And Running
```
sudo npm i -g npm@6
sudo npm install
ng serve
```
via https://bit.ly/32r25z2