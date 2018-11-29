import { MakerModule } from './maker/maker.module';
import { MainPageComponent } from './maker/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DlPageComponent } from './maker/dl-page/dl-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'download', component: DlPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MakerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
