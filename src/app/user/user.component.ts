import { Component, Input } from '@angular/core';

export interface User {
  name: string,
  age: number,
  birthday: string
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input({ required: true }) user: User;

  // private _numberList: number[];

  // @Input({ alias: 'numberList', required: true })
  // set numbers(numbers: number[]) {
  //   this._numberList = numbers.filter(number => number % 2 === 0);
  // }

  // get numbers(): number[] {
  //   return this._numberList;
  // }
}
