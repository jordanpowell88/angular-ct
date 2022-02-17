import { Action, createReducer, on } from "@ngrx/store";
import { decrementCount, incrementCount } from "./count.actions";

export const COUNT_FEATURE = 'count';

export interface CountState {
    count: number
}

const initialState: CountState = {
    count: 0
}

const reducer = createReducer(
    initialState,
    on(incrementCount, (state) => ({
        ...state,
        count: state.count + 1
    })),
    on(decrementCount, state => ({
        ...state,
        count: state.count - 1
    }))
)

export const countReducer = (state = initialState, action: Action): CountState => reducer(state, action);