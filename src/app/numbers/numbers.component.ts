import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  num1=0;
  num2=0;

  firstNum: number;
  secondNum: number;


  getNum1(value: string) {
    this.num1 = parseInt(value);

    if (!isNaN(this.num1)) {
      console.log(this.num1);
    this.firstNum=this.num1
    }
  }

  getNum2(value: string) {
    this.num2 = parseInt(value);

    if (!isNaN(this.num2)) {
      console.log(this.num2);
      this.secondNum=this.num2
    }
  }


  ngOnInit(): void {
  }

}
