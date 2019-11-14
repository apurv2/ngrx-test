import { Component, OnInit } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { State, userSearchSelector } from '../store';
import { Observable } from 'rxjs';
import { UpdateUserSearch } from '../store/user-search.actions';
import { UserSearchDTO } from '../user.state.model';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {


  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }
  dispatch() {
    let userSearch: UserSearchDTO = new UserSearchDTO();
    userSearch.name = "apurv";
    this.store.dispatch(new UpdateUserSearch(userSearch));

  }


}
