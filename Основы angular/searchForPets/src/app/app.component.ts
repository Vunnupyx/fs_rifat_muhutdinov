import {Component, OnInit} from '@angular/core';
import {Animal, DataService} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  /*todo: насчёт форматирования не забывай. Тут так же есть модификаторы доступа
  *  Если переменная писпользуется только в классе, то сделай приватным, а если
  *  она используется ещё и в шаблоне, то перед именем "_"*/
  searchText = '';
  animals: Animal[];
  expandedElement = -1;
  hideItem: boolean = false;

  hideCats() {
    if (this.hideItem) {
      /* todo: использовать "it" в качестве имени - круто, но не читаемо, лучше просто "animal" и пропиши тип*/
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
  /*todo: Форматни все файлы, можно выделить через шифт и зажать ctrl+alt+L*/
}
