# Directives Deep Dive (Section 7)

This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)". For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .

## 101. Building a Structural Directive

## 100. What Happens behind the Scenes on Structural Directives

## 99. Binding to Directive Properties

## 98. Using HostBinding to Bind to Host Properties

## 97. Using HostListener to Listen to Host Events

## 96. More about the Renderer

## 95. Using the Renderer to build a Better Attribute Directive

## 94. Creating a Basic Attribute Directive

## 93. ngClass and ngStype Recap

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656166#overview 

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