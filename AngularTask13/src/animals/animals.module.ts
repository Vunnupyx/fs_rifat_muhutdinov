import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AnimalsComponent} from './animals.component';
import {FilterPipe} from "./pipes/filter.pipe";
import {AnimalDetailsComponent} from './animal-details/animal-details.component';
import {DataService} from "./services/data.service";
import {AnimalFormComponent} from './animal-form/animal-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AnimalEditComponent} from './animal-edit/animal-edit.component';
import {RouterModule} from "@angular/router";
import {AnimalsRoutingModule} from "./animals-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpConfigInterceptor} from "./services/httpconfig.interceptor";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AnimalsRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AnimalsComponent,
    FilterPipe,
    AnimalDetailsComponent,
    AnimalFormComponent,
    AnimalEditComponent,
  ],

  providers: [DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    }],
  bootstrap: [AnimalsComponent]
})
export class AnimalsModule {
}
