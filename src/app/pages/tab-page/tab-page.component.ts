import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IList } from 'src/app/shared/model/test-app.model';
import { ListService } from 'src/app/shared/service/list.service';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss']
})
export class TabPageComponent implements OnInit {

  url: string = 'urlid=cb1d6ce2';
  receivedList!: IList[];
  done: boolean = false;
  list: IList[] = [];
  activeItem!: string;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.postList(this.url);
  }

  postList(url: string) {
    this.listService.postAllList(this.url).subscribe({
      next: (response: any) => {
      this.receivedList = response.data;
      // console.log(this.receivedList);
      this.goToTab('income','income')
    },
    error: error => console.log(error)
    })
  }

  goToTab(url: string, item: string) {
    this.router.navigate([url])
    this.list = this.receivedList.filter(list => list.type === url);
    this.activeItem = item;
    // console.log(this.list);
  }

}
