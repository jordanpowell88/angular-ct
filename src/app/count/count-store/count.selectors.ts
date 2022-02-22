import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountState, COUNT_FEATURE } from "./count.reducer";

const countFeatureSelector = createFeatureSelector<CountState>(COUNT_FEATURE);

export const selectCount = createSelector(
    countFeatureSelector,
    state => state?.count
)