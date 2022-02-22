import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable()
export class OverridesService {
  tick$: Observable<number> = timer(1000, 1000);
}
