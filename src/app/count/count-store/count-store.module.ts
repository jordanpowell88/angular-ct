import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { countReducer, COUNT_FEATURE } from './count.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(COUNT_FEATURE, countReducer)
  ]
})
export class CountStoreModule { }
