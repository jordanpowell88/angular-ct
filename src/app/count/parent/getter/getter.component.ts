import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-getter',
  templateUrl: './getter.component.html',
  styleUrls: ['./getter.component.scss']
})
export class GetterComponent {
  @Input() size = 75;

  get style() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`
    };
  }

  get url() {
    return `https://via.placeholder.com/${this.size}`
  }
}
