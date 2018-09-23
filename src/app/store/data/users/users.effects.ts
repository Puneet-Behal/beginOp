import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import * as fromUsers from './users.reducer';

import { switchMap, map } from 'rxjs/operators';
import { DaoService } from '../../../services/daoservice';
import { DataAction } from '../DataAction';

@Injectable()
export class userEffects
{
    @Effect() users= this.actions$.ofType(fromUsers.USERS_ACTION).pipe(
        switchMap((action:DataAction) => this.daoService.getUsers(action.payload)),
        map(data => ({ type: fromUsers.COMPLETE_ACTION, payload: data})))

    constructor(
        private daoService: DaoService,
        private actions$: Actions
    ) {}
}