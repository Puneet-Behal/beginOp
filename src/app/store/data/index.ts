import { combineReducers } from '@ngrx/store';
import * as fromCategory from './category/category.reducer';
import * as fromUsers from './users/users.reducer';
import { categoryreducer } from './category/category.reducer';

export const dataReducer = combineReducers({
    "category": fromCategory.categoryreducer,
    "users" : fromUsers.usersreducer
});

export const dataActions = 
{
    category : fromCategory.CATEGORY_ACTION,
    users : fromUsers.USERS_ACTION
}

export const SELECTS = 
{
    category : fromCategory.SELECTS,
    users: fromUsers.SELECTS
}