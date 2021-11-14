import {FilterPipe} from "./filter.pipe";
import {Animal} from "../services/data.service";
import {TestBed} from "@angular/core/testing";

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FilterPipe
      ]
    });
    filterPipe = TestBed.inject(FilterPipe)
  })

  let items: Animal[] = [{
    id: 1,
    type: "Котик", name: "Барон",
    breed: "Абиссинская кошка",
    gender: "Мужской",
    age: 2,
    weight: 3,
    furLength: "Короткошерстная",
    img: "assets/images/cat.png"
  },
    {
      id: 2,
      type: "Собачка",
      name: "Персик",
      breed: "Австралийская овчарка",
      gender: "Мужской",
      age: 1,
      weight: 9,
      furLength: "Длинношерстная",
      img: "assets/images/dog.png"
    }]

  it('Filter items by name and type', () => {
    expect(filterPipe.transform(items, 'Котик')).toEqual(
      [items[0]]
    )
  })

})
