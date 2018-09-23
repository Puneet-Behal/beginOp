
import { combineReducers } from '@ngrx/store';
import * as fromTheme from './theme/theme.reducer';

export const uiReducer = combineReducers({
    theme: fromTheme.themereducer
  });
  

  export const uiActions = 
  {
      theme : fromTheme.THEME_ACTION
  }

  export const SELECTS = 
  {
      theme : fromTheme.SELECTS
  }