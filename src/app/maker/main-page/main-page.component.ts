import { MainToDlService } from './../main-to-dl.service';
import { OSKNPosiiton } from './../../component/icon-stage/icon-stage.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

export class IconInfo {
  constructor(private _back: string, private _icons: string[], private _details: Map<string, any>) {
  }

  set details(details: Map<string, any>) {
    this._details = details;
  }

  get details() {
    return this._details;
  }
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  iconInfo: IconInfo;

  constructor(private router: Router, private service: MainToDlService) { }

  ngOnInit() {
    this.iconInfo = new IconInfo('white', ['hanabi'], new Map([['hanabi', { x: 100, y: 100 }]]));
  }

  onMove() {
    this.service.export(this.iconInfo);
    this.router.navigate(["/download"]);
  }

  onDragged(event: OSKNPosiiton) {
    let map = this.iconInfo.details;
    map['hanabi'] = event;
    this.iconInfo.details = map;
  }

}
