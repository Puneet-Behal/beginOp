import { Action } from '@ngrx/store';

export class UIAction implements Action {
    constructor(public type: string, public payload: any) {    
    }
}