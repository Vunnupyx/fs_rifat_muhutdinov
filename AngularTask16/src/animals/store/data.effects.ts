import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap,} from 'rxjs/operators';
import {Animal, DataService} from "../services/data.service";
import {
  AddAnimalAction,
  AddAnimalSuccessAction,
  AnimalActionsType,
  GetAnimalAction,
  GetAnimalSuccessAction,
  LoadAnimalsError,
  LoadAnimalsSuccessAction,
  RemoveAnimalAction,
  RemoveAnimalSuccessAction,
  UpdateAnimalAction,
  UpdateAnimalSuccessAction
} from "./data.actions";
import {of} from "rxjs";

@Injectable()
export class AnimalsEffects {

  loadAnimals$ = createEffect(() => this.actions$.pipe(
    ofType(AnimalActionsType.LOAD_ANIMALS),
    switchMap(() => this.dataService.getAll()),
    map((data: Animal[]) => {
      return new LoadAnimalsSuccessAction({
        animals: data,
      })
    }),
    catchError(() => of(new LoadAnimalsError())
    )
  ));

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AnimalActionsType.ADD_ANIMAL),
      mergeMap((action: AddAnimalAction) => {
        return this.dataService.create(action.payload.animal).pipe(
          map((data: Animal) => {
            return new AddAnimalSuccessAction({
              animal: data,
            });
          }),
          catchError(() => of(new LoadAnimalsError()))
        );
      })
    );
  });

  removeAnimal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AnimalActionsType.REMOVE_ANIMAL),
      switchMap((action: RemoveAnimalAction) => {
        return this.dataService.remove(action.payload.id).pipe(
          map(() => {
            return new RemoveAnimalSuccessAction({id: action.payload.id});
          })
        );
      })
    );
  });

  updateAnimal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AnimalActionsType.UPDATE_ANIMAL),
      switchMap((action: UpdateAnimalAction) => {
        return this.dataService.update(action.payload.animal).pipe(
          map((data) => {
            return new UpdateAnimalSuccessAction({animal: data});
          })
        );
      })
    );
  });

  getAnimal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AnimalActionsType.GET_ANIMAL),
      switchMap((action: GetAnimalAction) => {
        return this.dataService.get(action.payload.id).pipe(
          map((data: Animal) => {
            return new GetAnimalSuccessAction({animal: data});
          })
        );
      })
    );
  });

  constructor(private actions$: Actions,
              private dataService: DataService) {
  }


}
