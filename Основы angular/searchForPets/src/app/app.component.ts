import {Component, OnInit} from '@angular/core';
import {Animal, DataService} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public _searchText: string = '';
  public _animals: Animal[];
  public _expandedElement: number = -1;
  public _hideItem: boolean = false;

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

  ngOnInit() {
    this._animals = this._dataService.getAnimals();
  }
}
