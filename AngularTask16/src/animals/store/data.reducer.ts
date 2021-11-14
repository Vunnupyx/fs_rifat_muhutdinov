import {AnimalActions, AnimalActionsType} from "./data.actions";
import {Animal} from "../services/data.service";

export interface AnimalsState {
  animals: Animal[];
  animal: Animal;
}

const initialState: AnimalsState = {
  animals: [],
  animal: {
    breed: '',
    name: '',
    type: '',
    gender: 'М',
    age: 0,
    weight: 0,
    furLength: '',
    img: ''
  }
};

export const animalsReducer = (state: AnimalsState = initialState, action: AnimalActions) => {
  switch (action.type) {
    case AnimalActionsType.LOAD_ANIMALS_SUCCESS:
      return {
        ...state,
        animals: action.payload.animals
      };
    case AnimalActionsType.LOAD_ANIMALS_ERROR:
      return {
        ...state,
        animals: []
      };
    case AnimalActionsType.ADD_ANIMAL_SUCCESS:
      return {
        ...state,
        animals: [...state.animals, action.payload.animal]
      };
    case AnimalActionsType.REMOVE_ANIMAL_SUCCESS:
      return {
        ...state,
        animals: state.animals.filter((animal) => animal.id !== action.payload.id)
      };
    case AnimalActionsType.UPDATE_ANIMAL_SUCCESS:
      return {
        ...state,
        animals: state.animals.map(animal => {
          if (animal.id === action.payload.animal.id) {
            return action.payload.animal
          } else return animal;
        }),
      };
    case AnimalActionsType.GET_ANIMAL_SUCCESS:
      return {
        ...state,
        animal: action.payload.animal
      };
    default:
      return state;
  }
}
