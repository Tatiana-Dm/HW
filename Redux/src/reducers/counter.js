import { COUNTER_INC, COUNTER_DEC } from "../constants";

const defaultValues = {
  count: 0
};

export const counterReducer = (state = defaultValues, action) => {
    switch(action.type) {
        case COUNTER_INC: {
            return {
                count: state.count + 1
            }
        }
        case COUNTER_DEC: {
            return {
                count: state.count - 1
            }
        }
        default: {
            return state;
        }
    }
};
