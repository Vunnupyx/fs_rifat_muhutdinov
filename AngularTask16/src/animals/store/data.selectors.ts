import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AnimalsState} from "./data.reducer";


export const selectAnimalsStore = createFeatureSelector<AnimalsState>('animals');

export const selectAnimalsList = createSelector(
  selectAnimalsStore,
  (state: AnimalsState) => state.animals
);

export const selectAnimalStore = createFeatureSelector<AnimalsState>('animal');

export const selectAnimal = createSelector(
  selectAnimalStore,
  (state: AnimalsState) => state.animal
);
