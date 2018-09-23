

import { Category } from "../../../models/category";
import { State } from "../../index";
import { DataAction} from "../DataAction";

export const CATEGORY_ACTION ="[Category] Select Category"

const intialstate:Category = null;

export function categoryreducer(state :Category = intialstate, action:DataAction)
{
    switch(action.type)
    {
        case CATEGORY_ACTION:
            return action.payload;           
        default:
            return state;
    }
}

export const SELECTS = (state: State) => state.data.category;
