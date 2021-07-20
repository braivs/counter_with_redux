import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
  counter: counterReducer
})

// export const store = createStore(rootReducer, loadState()); // TODO: забор данных из localStorage

export const store = createStore(rootReducer);

// TODO: work with localstorage
/*store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  })
})*/

export type AppStateType = ReturnType<typeof rootReducer>
