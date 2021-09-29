import {CHANGE_COLOR} from "../constants";

const initialColor = {
    color: "",

};

export const colorReducer = (state = initialColor,action) => {
    switch(action.type) {
        case CHANGE_COLOR: {
            return {
                color: action.color
            };
        }


        default: {
            return state;
        }

    }
};