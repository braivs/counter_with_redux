import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";
import {displayReducer} from "./display-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  display: displayReducer
})

export const store = createStore(rootReducer, loadState());

/*store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  })
})*/

export type AppStateType = ReturnType<typeof rootReducer>
