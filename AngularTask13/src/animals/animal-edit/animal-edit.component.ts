import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Animal, DataService} from "../services/data.service"


@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.less']
})
export class AnimalEditComponent implements OnInit {
  public _reactiveForm: FormGroup;
  private _animal: Animal = {breed: '', name: '', type: '', gender: '', age: 0, weight: 0, furLength: '', img: ''};

  constructor(private _dataService: DataService, private _route: ActivatedRoute) {
    this._reactiveForm = new FormGroup({
      "type": new FormControl('', [
        Validators.pattern("^[A-Za-zА-Яа-яЁё]+$"),
        Validators.maxLength(15),
        Validators.minLength(3)
      ]),
      "name": new FormControl('', [
        Validators.pattern("^[A-Za-zА-Яа-яЁё]+$"),
        Validators.maxLength(15),
        Validators.minLength(3)
      ]),
      "breed": new FormControl('', [
        Validators.pattern("^[A-Za-zА-Яа-яЁё]+$"),
        Validators.maxLength(15),
        Validators.minLength(3)
      ]),
      "gender": new FormControl(''),
      "age": new FormControl('', Validators.pattern("[0-9]{1,2}")),
      "weight": new FormControl('', Validators.pattern("^[0-9]+$")),
      "furLength": new FormControl(''),
      "img": new FormControl('')
    });
  }


  ngOnInit() {
    this._route.paramMap.pipe(
      switchMap(params => params.getAll('id'))).subscribe(id => {
      this._setAnimal(+id)
    });
  }

  public _onFileChanged(e: any) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this._animal.img = event.target.result;
      }
    }
  }

  public _onSubmit() {
    if (this._reactiveForm.valid) {
      this._prepareSaveAnimal();
      this._dataService.update(this._animal)
    }
  }

  private _setAnimal(id: number): void {
    this._dataService.get(id).subscribe(animal => {
      this._animal = animal;
      this._initForm();
    })
  }

  private _initForm() {
    this._reactiveForm.patchValue({
      type: this._animal.type,
      name: this._animal.name,
      breed: this._animal.breed,
      gender: this._animal.gender,
      age: this._animal.age,
      weight: this._animal.weight,
      furLength: this._animal.furLength,
    });
  }

  private _prepareSaveAnimal(): void {
    const formModel = this._reactiveForm.value;
    this._animal.type = formModel.type;
    this._animal.name = formModel.name;
    this._animal.breed = formModel.breed;
    this._animal.gender = formModel.gender;
    this._animal.age = formModel.age;
    this._animal.weight = formModel.weight;
    this._animal.furLength = formModel.furLength;
  }

}
