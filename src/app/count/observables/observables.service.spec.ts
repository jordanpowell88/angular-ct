import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { ObservablesService } from './observables.service';

describe('ObservablesService', () => {
  let service: ObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservablesService]
    });
    service = TestBed.inject(ObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('count$ should return a value of 0', () => {
    service.count$.pipe(take(1)).subscribe(count => expect(count).toEqual(0))
  })

  it('add() increments the count$ observable', () => {
    service.add();
    service.count$.pipe(take(1)).subscribe(count => expect(count).toEqual(1))
  })

  it('remove() decrements the count$ observable', () => {
    service.add();
    service.add();
    service.count$.pipe(take(1)).subscribe(count => expect(count).toEqual(2))
    service.remove();
    service.count$.pipe(take(1)).subscribe(count => expect(count).toEqual(1))
  })
});
