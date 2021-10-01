import {Component, OnInit} from '@angular/core';
import {Animal, DataService} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  searchText = '';
  animals: Animal[];
  expandedElement = -1;
  hideItem: boolean = false;

  hideCats() {
    if (this.hideItem) {
      this.animals = this.animals.filter(it => {
        return it.breed !== 'Котик'
      });
    }
    else this.animals = this.dataService.getAnimals()
  }

  constructor(private dataService: DataService) {
    this.animals = this.dataService.getAnimals();
  }

  ngOnInit() {
    this.animals = this.dataService.getAnimals()
  }

}
