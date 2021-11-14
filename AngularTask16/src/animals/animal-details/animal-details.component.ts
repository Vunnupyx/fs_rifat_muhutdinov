import {Component, Input, OnInit} from '@angular/core';
import {Animal} from "../services/data.service";

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.less']
})
export class AnimalDetailsComponent implements OnInit {
  constructor() {
  }

  private _animal!: Animal;

  get animal(): Animal {
    return this._animal;
  }

  @Input()
  set animal(value: Animal) {
    this._animal = value;
  }

  ngOnInit(): void {
    console.log(this._animal)
  }

}
