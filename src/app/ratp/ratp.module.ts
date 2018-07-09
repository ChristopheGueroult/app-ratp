import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './containers/list/list.component';
import { RatpRoutingModule } from './ratp-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    RatpRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [ListComponent]
})
export class RatpModule { }
