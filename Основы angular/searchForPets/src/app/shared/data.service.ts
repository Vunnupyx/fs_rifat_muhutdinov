import {Injectable} from '@angular/core';

export class Animal {
  constructor(public breed: string, public name: string, public type: string, public gender: string, public age: number, public weight: number, public furLength: string, public img: string) {
  }
}

@Injectable()
export class DataService {
  constructor() {
  }

  private animals: Animal[] = [
    {
      breed: 'Котик',
      name: 'Бабасик',
      type: 'Абиссинская кошка',
      gender: 'Мужской',
      age: 3,
      weight: 3,
      furLength: 'Короткошерстная',
      img: 'assets/images/cat.png'
    },
    {
      breed: 'Котик',
      name: 'Барки',
      type: 'Абиссинская кошка',
      gender: 'Мужской',
      age: 4,
      weight: 4,
      furLength: 'Короткошерстная',
      img: 'assets/images/cat.png'
    },
    {
      breed: 'Котик',
      name: 'Барна',
      type: 'Абиссинская кошка',
      gender: 'Женский',
      age: 5,
      weight: 5,
      furLength: 'Короткошерстная',
      img: 'assets/images/cat.png'
    },
    {
      breed: 'Котик',
      name: 'Барон',
      type: 'Абиссинская кошка',
      gender: 'Мужской',
      age: 2,
      weight: 3,
      furLength: 'Короткошерстная',
      img: 'assets/images/cat.png'
    },
    {
      breed: 'Собачка',
      name: 'Персик',
      type: 'Австралийская овчарка',
      gender: 'Мужской',
      age: 1,
      weight: 9,
      furLength: 'Длинношерстная',
      img: 'assets/images/dog.png'
    },
    {
      breed: 'Собачка',
      name: 'Пуф',
      type: 'Австралийский келпи',
      gender: 'Мужской',
      age: 2,
      weight: 14,
      furLength: 'Короткошерстная',
      img: 'assets/images/dog.png'
    },
    {
      breed: 'Собачка',
      name: 'Патрик',
      type: 'Американская акита',
      gender: 'Мужской',
      age: 2,
      weight: 23,
      furLength: 'Короткошерстная',
      img: 'assets/images/dog.png'
    },
    {
      breed: 'Собачка',
      name: 'Патрик',
      type: 'Английский бульдог',
      gender: 'Мужской',
      age: 1,
      weight: 8,
      furLength: 'Короткошерстная',
      img: 'assets/images/dog.png'
    },
    {
      breed: 'Амфибия',
      name: 'Покер',
      type: 'Гребенчатый тритон',
      gender: 'Мужской',
      age: 3,
      weight: 0.13,
      furLength: 'Лысая',
      img: 'assets/images/amphibian.png'
    },
    {
      breed: 'Амфибия',
      name: 'Пабло',
      type: 'Древолаз голубой',
      gender: 'Мужской',
      age: 4,
      weight: 0.2,
      furLength: 'Лысая',
      img: 'assets/images/amphibian.png'
    }

  ]

  getAnimals(): Animal[] {
    return this.animals;
  }
}
