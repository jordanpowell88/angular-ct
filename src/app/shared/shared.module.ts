import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudsComponent } from './clouds/clouds.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    CloudsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    CloudsComponent
  ]
})
export class SharedModule { }
