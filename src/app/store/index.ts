import { Category } from "../models/category";
import { User } from "../models/user";
import * as fromData from './data/index';
import * as fromUI from './ui/index';

export interface State {
    data: {
        category: Category;
        users: User[];
        selectedUser: User;
    };
    ui: {
        theme: string;
    };

}

export const storeReducer = {
    data: fromData.dataReducer,
    ui: fromUI.uiReducer    
};

export const storeActions = 
{
    data : fromData.dataActions,
    ui : fromUI.uiActions
}


export const SELECTS = {
    data : fromData.SELECTS,
    ui : fromUI.SELECTS
}
