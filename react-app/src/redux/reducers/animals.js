import {competitionsAPI} from "../../api/api";

const SET_ANIMALS = "SET_ANIMALS"
const SET_ANIMAL = "SET_ANIMAL"
const ADD_ANIMAL = "ADD_ANIMAL"
const UPDATE_ANIMAL = "UPDATE_ANIMAL"
const REMOVE_ANIMAL = "REMOVE_ANIMAL"

const FILTER_ANIMALS = "FILTER_ANIMALS"
const SET_HIDE_CATS = "SET_HIDE_CATS"
const SET_EXPANDED_NUMBER = "SET_EXPANDED_NUMBER"
const SET_SHOW_ADD_FORM = "SET_SHOW_ADD_FORM"

const initialState = {
    animals: [],
    saveAnimals: [],
    animal: {
        breed: '',
        name: '',
        type: '',
        gender: 'М',
        age: 0,
        weight: 0,
        furLength: '',
        img: ''
    },
    expandedAnimal: -1,
    hideCats: true,
    showAddForm: false
};

const animals = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANIMALS:
            return {
                ...state,
                animals: action.data.map((item) => {
                    return [item.id, item.breed, item.name, item.type, item.gender, item.age, item.weight, item.furLength, item.img];
                }),
                saveAnimals: action.data.map((item) => {
                    return [item.id, item.breed, item.name, item.type, item.gender, item.age, item.weight, item.furLength, item.img];
                }),
            };
        case FILTER_ANIMALS:
            return {
                ...state,
                animals: state.saveAnimals.filter((item) => {
                    const searchText = action.text.toLocaleLowerCase();
                    return item[2].toLocaleLowerCase().includes(searchText) || item[3].toLocaleLowerCase().includes(searchText)
                })
            };
        case SET_HIDE_CATS:
            return {
                ...state,
                hideCats: !state.hideCats
            };
        case SET_SHOW_ADD_FORM:
            return {
                ...state,
                showAddForm: !state.showAddForm
            };
        case SET_EXPANDED_NUMBER:
            return {
                ...state,
                expandedAnimal: action.number
            }
        case SET_ANIMAL:
            return {
                ...state,
                animal: action.data
            };
        case ADD_ANIMAL:
            return {
                ...state,
                animals: [...state.animals, [action.data.id, action.data.breed, action.data.name, action.data.type,
                    action.data.gender, action.data.age, action.data.weight, action.data.furLength, action.data.img]],
                saveAnimals: [...state.animals, [action.data.id, action.data.breed, action.data.name, action.data.type,
                    action.data.gender, action.data.age, action.data.weight, action.data.furLength, action.data.img]]

            };
        case UPDATE_ANIMAL:
            return {
                ...state,
                animals: state.animals.map(animal => {
                    if (animal[0] === action.data.id) {
                        return [action.data.id, action.data.breed, action.data.name, action.data.type,
                            action.data.gender, action.data.age, action.data.weight, action.data.furLength, action.data.img]
                    } else return animal;
                }),
                saveAnimals: state.animals.map(animal => {
                    if (animal[0] === action.data.id) {
                        return [action.data.id, action.data.breed, action.data.name, action.data.type,
                            action.data.gender, action.data.age, action.data.weight, action.data.furLength, action.data.img]
                    } else return animal;
                })
            }
        case REMOVE_ANIMAL:
            return {
                ...state,
                animals: state.animals.filter((animal) => animal[0] !== action.id),
                saveAnimals: state.animals.filter((animal) => animal[0] !== action.id)
            }
        default:
            return state;
    }
};
export const filterAnimals = (text) => ({
    type: FILTER_ANIMALS,
    text,
});
export const setHideCats = () => ({
    type: SET_HIDE_CATS,
});

export const setExpandedAnimal = (number) => ({
    type: SET_EXPANDED_NUMBER,
    number
})
export const setShowAddForm = () => ({
    type: SET_SHOW_ADD_FORM,
});

export const setAnimals = (data) => ({
    type: SET_ANIMALS,
    data,
});

export const setAnimal = (data) => ({
    type: SET_ANIMAL,
    data,
});

export const setCreateAnimal = (data) => ({
    type: ADD_ANIMAL,
    data,
});
export const setUpdateAnimal = (data) => ({
    type: UPDATE_ANIMAL,
    data,
});
export const setRemoveAnimal = (id) => ({
    type: REMOVE_ANIMAL,
    id,
});


export const getAnimals = () => (dispatch) => {
    competitionsAPI.getAll().then((data) => {
        dispatch(setAnimals(data))
    });
};
export const getAnimalId = (id) => (dispatch) => {
    competitionsAPI.get(id).then((data) => {
        dispatch(setAnimal(data))
    });
};
export const createAnimal = (animal) => (dispatch) => {
    competitionsAPI.create(animal).then((data) => {
        dispatch(setCreateAnimal(data))
    });
};
export const updateAnimal = (animal) => (dispatch) => {
    competitionsAPI.update(animal).then((data) => {
        dispatch(setUpdateAnimal(data))
    });
};
export const removeAnimal = (id) => (dispatch) => {
    competitionsAPI.remove(id).then(() => {
        dispatch(setRemoveAnimal(id))
    });
};

export default animals