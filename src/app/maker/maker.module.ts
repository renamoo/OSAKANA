import { ComponentModule } from './../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DlPageComponent } from './dl-page/dl-page.component';
import { MainToDlService } from './main-to-dl.service';

@NgModule({
  declarations: [MainPageComponent, DlPageComponent],
  imports: [
    CommonModule,
    ComponentModule,
    DragDropModule
  ],
  providers: [MainToDlService]
})
export class MakerModule { }
