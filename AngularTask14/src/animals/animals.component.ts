import {Component, EventEmitter, Output} from '@angular/core';
import {Animal, DataService} from "./services/data.service";


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less']
})
export class AnimalsComponent {
  public _animals: Animal[] = []
  public _hideItem: boolean = false;
  public _searchText: string = '';
  public _selectedAnimal!: Animal;
  public _expandedElement: number = -1;
  public _formVisible: boolean = false;

  @Output()
  emitFunctionOfParent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _dataService: DataService) {
  }

  public _showForm() {
    this._formVisible = true;
  }

  public _closeForm(isConfirmed: boolean) {
    this._formVisible = false;
  }

  public _initAnimals() {
    this._dataService.animals.subscribe(data => {
      if (this._hideItem) {
        this._animals = data.filter((animal: Animal) => {
          return animal.type !== 'Котик';
        });
      } else this._animals = data
    });
  }

  public _showDetails(animal: Animal, i: number): void {
    if (i === this._expandedElement) {
      this._expandedElement = -1;
    } else {
      this._selectedAnimal = Object.assign({}, animal)
      this._expandedElement = i;
    }
  }

  public _removeAnimal(id: number): void {
    this._dataService.remove(id)
  }

  ngOnInit(): void {
    this._dataService.getAll();
    this._initAnimals()
  }

}
