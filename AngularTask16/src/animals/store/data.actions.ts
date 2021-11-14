import {Action} from '@ngrx/store';
import {Animal} from "../services/data.service";


export enum AnimalActionsType {
  LOAD_ANIMALS = '[ANIMALS page] load animals',
  LOAD_ANIMALS_SUCCESS = '[ANIMALS page] load animals success',
  LOAD_ANIMALS_ERROR = '[ANIMALS page] load animals error',

  ADD_ANIMAL = '[ANIMALS page] add animals',
  ADD_ANIMAL_SUCCESS = '[ANIMALS page] add animals success',

  REMOVE_ANIMAL = '[ANIMALS page] remove animal',
  REMOVE_ANIMAL_SUCCESS = '[ANIMALS page] remove animal success',

  UPDATE_ANIMAL = '[ANIMALS page] update animal',
  UPDATE_ANIMAL_SUCCESS = '[ANIMALS page] update animal success',

  GET_ANIMAL = '[ANIMALS page] get animal',
  GET_ANIMAL_SUCCESS = '[ANIMALS page] get animal success',
}

export class LoadAnimalsAction implements Action {
  readonly type = AnimalActionsType.LOAD_ANIMALS;
}

export class LoadAnimalsSuccessAction implements Action {
  readonly type = AnimalActionsType.LOAD_ANIMALS_SUCCESS;

  constructor(public payload: { animals: Animal[] }) {
  }
}

export class LoadAnimalsError implements Action {
  readonly type = AnimalActionsType.LOAD_ANIMALS_ERROR;
}

export class AddAnimalAction implements Action {
  readonly type = AnimalActionsType.ADD_ANIMAL;

  constructor(public payload: { animal: Animal }) {
  }
}

export class AddAnimalSuccessAction implements Action {
  readonly type = AnimalActionsType.ADD_ANIMAL_SUCCESS;

  constructor(public payload: { animal: Animal }) {
  }
}

export class RemoveAnimalAction implements Action {
  readonly type = AnimalActionsType.REMOVE_ANIMAL;

  constructor(public payload: { id: number }) {
  }
}

export class RemoveAnimalSuccessAction implements Action {
  readonly type = AnimalActionsType.REMOVE_ANIMAL_SUCCESS;

  constructor(public payload: { id: number }) {
  }
}

export class UpdateAnimalAction implements Action {
  readonly type = AnimalActionsType.UPDATE_ANIMAL;

  constructor(public payload: { animal: Animal }) {
  }
}

export class UpdateAnimalSuccessAction implements Action {
  readonly type = AnimalActionsType.UPDATE_ANIMAL_SUCCESS;

  constructor(public payload: { animal: Animal }) {
  }
}

export class GetAnimalAction implements Action {
  readonly type = AnimalActionsType.GET_ANIMAL;

  constructor(public payload: { id: string }) {
  }
}

export class GetAnimalSuccessAction implements Action {
  readonly type = AnimalActionsType.GET_ANIMAL_SUCCESS;

  constructor(public payload: { animal: Animal }) {
  }
}

export type AnimalActions = LoadAnimalsAction
  | LoadAnimalsSuccessAction
  | LoadAnimalsError
  | AddAnimalAction
  | AddAnimalSuccessAction
  | RemoveAnimalAction
  | RemoveAnimalSuccessAction
  | UpdateAnimalAction
  | UpdateAnimalSuccessAction
  | GetAnimalAction
  | GetAnimalSuccessAction;
