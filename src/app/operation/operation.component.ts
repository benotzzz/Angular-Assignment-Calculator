import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;

    
  
    


  
  constructor() {}


  result=0;
  calculation: number;

  ngOnInit(): void {}
  add() {
    this.result = this.num1 + this.num2;
    this.calculation = this.result;
    console.log(this.result);
     
  }

  subtract() {
    this.result = this.num1 - this.num2;
    this.calculation = this.result;
    console.log(this.result);
    
  }

  multiply() {
    this.result = this.num1 * this.num2;
    this.calculation = this.result;
    console.log(this.result);
   
  }

  divide() {
    this.result = this.num1 / this.num2;
      this.calculation = this.result;
    console.log(this.result);
    
  }

  
}
