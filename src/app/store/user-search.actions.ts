import { UserSearchDTO } from '../user.state.model';
import { Action } from '@ngrx/store';


export enum UserSearchActionTypes {
    UpdateUserSearch = '[UserSearch] Load UserSearchs',
}

export class UpdateUserSearch implements Action {
    readonly type = UserSearchActionTypes.UpdateUserSearch;
    constructor(public search: UserSearchDTO) { }
}


export type UserSearchActions = UpdateUserSearch;
