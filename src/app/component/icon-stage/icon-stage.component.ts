import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

export interface OSKNPosiiton {
  x: number;
  y: number;
}

@Component({
  selector: 'app-icon-stage',
  templateUrl: './icon-stage.component.html',
  styleUrls: ['./icon-stage.component.scss']
})
export class IconStageComponent implements OnInit {
  move: BehaviorSubject<OSKNPosiiton> = new BehaviorSubject({ x: 0, y: 0 });
  @Output() dragged: EventEmitter<OSKNPosiiton> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDrop(event) {
    console.log(event)
    this.move.next({ x: event.event.offsetX, y: event.event.offsetY });
  }

  onDragEnded() {
    this.move.subscribe(position => {
      this.dragged.emit(position);
    }).unsubscribe();
  }
}
