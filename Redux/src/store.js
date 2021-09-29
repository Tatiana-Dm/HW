import { createStore } from "redux";

import { colorReducer } from "./reducers/color";

export const store = createStore(colorReducer);
