import {animalsReducer, AnimalsState} from './data.reducer';
import {ActionReducerMap} from "@ngrx/store";

export interface State {
  animals: AnimalsState;
  animal: AnimalsState;
}

export const reducers: ActionReducerMap<State, any> = {
  animals: animalsReducer,
  animal: animalsReducer
};
