import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ObservablesService } from './observables.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  count$: Observable<number> = new BehaviorSubject<number>(0);

  constructor(private readonly countService: ObservablesService) { }

  ngOnInit(): void {
    this.count$ = this.countService.count$;
  }

  increment(): void {
    this.countService.add();
  }

  decrement(): void {
    this.countService.remove();
  }
}
