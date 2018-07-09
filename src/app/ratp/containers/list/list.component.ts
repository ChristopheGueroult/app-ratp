import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RatpService } from '../../../core/services/ratp.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public displayedColumns: string[] = ['cp', 'ville', 'libelle'];
  public dataSource: any;
  public length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private ratpService: RatpService
  ) {
   }

  ngOnInit() {
    this.ratpService.getList(0).subscribe((data) => {
      console.log(data.nhits);
      console.log(data.records);
      this.generateTable(data);
    });
  }

  generateTable(data) {
    this.length = data.nhits;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 100];
    this.dataSource = new MatTableDataSource(data.records);
    this.dataSource.sort = this.sort;
  }

  page(event) {
    const nextSerie = event.pageIndex * 10;
    this.ratpService.getList(nextSerie).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.records);
      this.dataSource.sort = this.sort;
    });
  }

}
