import { Component, Input, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/model/test-app.model';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {

  @Input() tab!: IList;

  constructor() { }

  ngOnInit(): void {
  }

}
