import { UserSearchState, UserSearchReducer } from './user-search.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { UserSearchStore } from './user.serarch.store';

export interface State {
    userSearch: UserSearchState
}

export const reducers: ActionReducerMap<State> = {
    userSearch: UserSearchReducer
};

export const userSearchSelector = createSelector((state: State) => state.userSearch, (state: UserSearchStore) => state.userSearch);