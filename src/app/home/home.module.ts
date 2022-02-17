import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ResourcesComponent } from './resources/resources.component';
import { RocketComponent } from './rocket/rocket.component';
import { RoundCardButtonsComponent } from './round-card-buttons/round-card-buttons.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    CardComponent,
    RocketComponent,
    RoundCardButtonsComponent,
    NextStepsComponent,
    ResourcesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
