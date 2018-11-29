import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HanabiComponent } from './hanabi/hanabi.component';
import { IconStageComponent } from './icon-stage/icon-stage.component';
import { DragDropModule } from '../../../node_modules/@angular/cdk/drag-drop';

const COMPS = [HanabiComponent, IconStageComponent]

@NgModule({
  declarations: [COMPS],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [COMPS]
})
export class ComponentModule { }
