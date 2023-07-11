import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { createUser } from '../state/user/user.action';
import { User } from '../interfaces/user/user.interface';

@Component({
  selector: 'force-app-root-r2d2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class R2d2AppComponent implements OnInit {
  title = 'r2d2';
  user: User = {
    id: 1,
    name: 'Alan',
    login: 'anovais',
    password: '123',
    actived: false,
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(createUser(this.user));
  }
}
