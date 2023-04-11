import { Component } from '@angular/core';
import { User } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user: User = {
    name: 'Fred',
    age: 246,
    birthday: '07/04/1776'
  };

  public numbers = [1, 2 ,3 ,4 ,5];
}
