import { Component } from '@angular/core';
import { OverridesService } from './overrides.service';

@Component({
  selector: 'app-overrides',
  templateUrl: './overrides.component.html',
  styleUrls: ['./overrides.component.scss'],
  providers: [OverridesService]
})
export class OverridesComponent {
  ticker$ = this.service.tick$;

  constructor(private readonly service: OverridesService) { }

}
