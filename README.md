# Directives Deep Dive (Section 7)

This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)". For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .


## ngFor and ngIf Recap

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

app template 
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

app component 
```
oddNumbers = [1, 3, 5, 7, 9, 11];
evenNumbers = [2, 4, 6, 8];
onlyOdd = false;
```

## 91 Module Introduction

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