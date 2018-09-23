
import { State } from "../../index";
import { UIAction} from "../UIAction";
export const THEME_ACTION ="[THEME] Theme Action "

export class theme
{
    shade : string;
   
    constructor(shade:string)
    {
        this.shade =shade
    }
}
const intialstate:theme = null;

export function themereducer(state : theme = intialstate, action:UIAction)
{
    switch(action.type)
    {       
        case THEME_ACTION:  
            return action.payload;          

        default:
            return state;
    }
}


export const SELECTS = (state: State) => state.ui.theme;