import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hanabi',
  templateUrl: './hanabi.component.html',
  styleUrls: ['./hanabi.component.scss']
})
export class HanabiComponent implements OnChanges {
  @Input() length: number = 640;
  viewBox = "0 0 640 640";

  constructor() { }

  ngOnChanges(sc: SimpleChanges) {
    if (sc['Input']) {
      this.viewBox = `0 0 ${length} ${length}`;
    }
  }

}
