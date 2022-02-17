import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  private count = 0;
  private _count = new BehaviorSubject<number>(this.count);
  count$ = this._count.asObservable();

  add(): void {
    this.count ++;
    this._count.next(this.count);
  }

  remove(): void {
    this.count --;
    this._count.next(this.count);
  }
}
