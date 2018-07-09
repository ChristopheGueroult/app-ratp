import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './containers/list/list.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class RatpRoutingModule { }
