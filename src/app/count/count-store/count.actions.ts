import { createAction } from "@ngrx/store";

export const incrementCount = createAction(
    '[COUNT] Increment'
);

export const decrementCount = createAction(
    '[COUNT] Decrement'
);