import {Component, EventEmitter, Output} from '@angular/core';
import {Animal, DataService} from "./services/data.service";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectAnimalsList} from "./store/data.selectors";
import {LoadAnimalsAction, RemoveAnimalAction} from './store/data.actions';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less']
})
export class AnimalsComponent {
  public _animals: Observable<Animal[]> = this.store$.pipe(select(selectAnimalsList));
  public _hideItem: boolean = false;
  public _searchText: string = '';
  public _selectedAnimal!: Animal;
  public _expandedElement: number = -1;
  public _formVisible: boolean = false;

  @Output()
  emitFunctionOfParent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private store$: Store<Animal>, private _dataService: DataService) {
  }

  public _showForm() {
    this._formVisible = true;
  }

  public _closeForm(isConfirmed: boolean) {
    this._formVisible = false;
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
    this.store$.dispatch(new RemoveAnimalAction({id}))
  }

  ngOnInit(): void {
    this.store$.dispatch(new LoadAnimalsAction());
  }

}
