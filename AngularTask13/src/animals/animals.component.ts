import {Component} from '@angular/core';
import {Animal, DataService} from "./services/data.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less']
})
export class AnimalsComponent {
  public _animals: Animal[];
  public _hideItem: boolean = false;
  public _searchText: string = '';
  public _selectedAnimal!: Animal;
  public _expandedElement: number = -1;

  constructor(private _dataService: DataService) {
    this._animals = this._dataService.getAnimals();
  }

  public _hideCats(): void {
    if (this._hideItem) {
      this._animals = this._animals.filter((animal: Animal) => {
        return animal.breed !== 'Котик';
      });
    } else this._animals = this._dataService.getAnimals();
  }

  public _showDetails(animal: Animal, i: number): void {
    if (i === this._expandedElement) {
      this._expandedElement = -1;
    } else {
      this._selectedAnimal = Object.assign({}, animal)
      this._expandedElement = i;
    }
  }

  ngOnInit(): void {
    this._animals = this._dataService.getAnimals();
  }
}
