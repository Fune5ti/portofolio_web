import { combineReducers } from "redux";

import theme from "./Theme/reducer";

const rootReducer = combineReducers({
  theme,
});

export default rootReducer;
