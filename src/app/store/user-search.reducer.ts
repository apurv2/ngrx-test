import { UserSearchDTO } from '../user.state.model';
import { UserSearchActions, UserSearchActionTypes } from './user-search.actions';

export interface UserSearchState {
    userSearch: UserSearchDTO
}

export const initialState: UserSearchState = {
    userSearch: new UserSearchDTO()
};

export function UserSearchReducer(state: UserSearchState = initialState, action: UserSearchActions): UserSearchState {
    switch (action.type) {
        case UserSearchActionTypes.UpdateUserSearch:
            return { ...state, userSearch: action.search }
        default:
            return state;
    }
}