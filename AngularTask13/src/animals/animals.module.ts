import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AnimalsRoutingModule} from './animals-routing.module';
import {AnimalsComponent} from './animals.component';
import {FilterPipe} from "./pipes/filter.pipe";
import {AnimalDetailsComponent} from './animal-details/animal-details.component';
import {FormsModule} from "@angular/forms";
import {DataService} from "./services/data.service";

@NgModule({
  declarations: [
    AnimalsComponent,
    FilterPipe,
    AnimalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AnimalsRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AnimalsComponent]
})
export class AnimalsModule {
}
