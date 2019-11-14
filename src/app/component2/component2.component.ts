import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { State, userSearchSelector } from '../store';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  userState: Observable<any>;

  constructor(private store: Store<State>) {
    this.userState = this.store.select(userSearchSelector)

  }
  ngOnInit() {
    this.store.pipe(select(userSearchSelector))
      .subscribe(item => console.log("hello world"));
  }





}
