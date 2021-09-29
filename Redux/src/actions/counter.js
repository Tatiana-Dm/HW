import { COUNTER_INC, COUNTER_DEC } from '../constants';

export const actionInc = () => ({
    type: COUNTER_INC
});

export const actionDec = () => ({
    type: COUNTER_DEC
});
