import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountRoutingModule } from './count-routing.module';
import { CountComponent } from './count.component';
import { TestOutputButtonComponent } from './test-output-button/test-output-button.component';
import { ObservablesComponent } from './observables/observables.component';
import { CountStoreModule } from './count-store/count-store.module';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter.component';
import { ObservablesService } from './observables/observables.service';
import { OverridesComponent } from './overrides/overrides.component';



@NgModule({
  declarations: [
    CountComponent,
    TestOutputButtonComponent,
    ObservablesComponent,
    NgrxCounterComponent,
    OverridesComponent
  ],
  providers: [ObservablesService],
  imports: [
    CommonModule,
    CountRoutingModule,
    CountStoreModule,
  ],
})
export class CountModule { }
