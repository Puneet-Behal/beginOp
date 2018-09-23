import { Action } from '@ngrx/store';

export class DataAction implements Action {
    constructor(public type: string, public payload: any) {    
    }
}