import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { RocketComponent } from './rocket/rocket.component';
import { FooterComponent } from './footer/footer.component';
import { RoundCardButtonsComponent } from './round-card-buttons/round-card-buttons.component';
import { CloudsComponent } from './clouds/clouds.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ResourcesComponent } from './resources/resources.component';
import { TestOutputButtonComponent } from './test-output-button/test-output-button.component';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    RocketComponent,
    FooterComponent,
    RoundCardButtonsComponent,
    CloudsComponent,
    NextStepsComponent,
    ResourcesComponent,
    TestOutputButtonComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
