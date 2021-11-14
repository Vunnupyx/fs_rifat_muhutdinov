import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimalEditComponent} from "./animal-edit/animal-edit.component";

const routes: Routes = [
  { path: "edit/:id", component: AnimalEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule {
}
