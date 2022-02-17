import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-output-button',
  templateUrl: './test-output-button.component.html',
  styleUrls: ['./test-output-button.component.scss']
})
export class TestOutputButtonComponent {

  @Output() count = new EventEmitter<number>();

  clickCounter = 0;

  handleTestOutputClick(): void {
    this.clickCounter ++;
    this.count.emit(this.clickCounter);
  }
}
