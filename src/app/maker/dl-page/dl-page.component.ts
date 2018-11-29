import { HanabiComponent } from './../../component/hanabi/hanabi.component';
import { MainToDlService } from './../main-to-dl.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { injectElementRef } from '../../../../node_modules/@angular/core/src/render3/view_engine_compatibility';

@Component({
  selector: 'app-dl-page',
  templateUrl: './dl-page.component.html',
  styleUrls: ['./dl-page.component.scss']
})
export class DlPageComponent implements OnInit {
  @ViewChild('hanabi', { read: ElementRef }) hanabi: ElementRef;
  @ViewChild('myCanvas') myCanvas;
  infos: Map<string, { x: number, y: number }> = new Map();

  constructor(private service: MainToDlService, private render: Renderer2) { }

  ngOnInit() {
    this.service.import().subscribe(info => {
      info.details.forEach((val, name) => {
        this.infos.set(name, val);
      })
    });
  }

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext("2d");
    let image = new Image();
    image.src = "data:image/svg+xml;base64," + btoa(this.hanabi.nativeElement.innerHTML);

    let info = this.infos.get('hanabi');
    console.log(info)
    ctx.drawImage(image, info.x, info.y, 300, 300);
  }


}
