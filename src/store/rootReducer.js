import { combineReducers } from "redux";

import theme from "./Theme/reducer";
import skills from "./Skills/reducer";
import projects from "./Projects/reducer";

const rootReducer = combineReducers({
  theme,
  skills,
  projects,
});

export default rootReducer;
