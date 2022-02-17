import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementCount, incrementCount } from '../count-store/count.actions';
import { selectCount } from '../count-store/count.selectors';

@Component({
  selector: 'app-ngrx-counter',
  templateUrl: './ngrx-counter.component.html',
  styleUrls: ['./ngrx-counter.component.scss']
})
export class NgrxCounterComponent {

  count$ = this.store.select(selectCount);

  constructor(private readonly store: Store) { }

  increment(): void {
    this.store.dispatch(incrementCount())
  }

  decrement(): void {
    this.store.dispatch(decrementCount())
  }

}
