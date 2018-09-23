
import { State } from "../../index";
import { User } from "../../../models/user";
import { DataAction} from "../DataAction";
export const USERS_ACTION ="[Users] Load Users"
export const COMPLETE_ACTION = "[Users] Users Loaded"

const intialstate:User = null;

export function usersreducer(state :User = intialstate, action:DataAction)
{
    switch(action.type)
    {
        // case COMPLETE_ACTION:
        //     return action.payload;           
        // default:
        //     return state;
         case USERS_ACTION:
            return action.payload;           
        default:
            return state;
    }
}

export const SELECTS = (state: State) => state.data.users;
