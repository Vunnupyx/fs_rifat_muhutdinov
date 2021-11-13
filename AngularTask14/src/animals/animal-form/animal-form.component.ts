import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Animal, DataService} from "../services/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.less']
})
export class AnimalFormComponent implements OnInit {
  public _animal: Animal = {breed: '', name: '', type: '', gender: '', age: 0, weight: 0, furLength: '', img: ''};

  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _dataService: DataService) {
  }

  public _closeForm() {
    this.isConfirmed.emit(false);
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

  ngOnInit(): void {
  }

  public _onSubmit(form: NgForm) {
    if (form.valid) {
      this._dataService.create(this._animal)
    }
  }
}
