import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabListComponent } from './components/tab-list/tab-list.component';

const routes: Routes = [
  { path: 'income', component: TabListComponent },
  { path: 'outcome', component: TabListComponent },
  { path: 'loan', component: TabListComponent },
  { path: 'investment', component: TabListComponent },
  // { path: '', redirectTo: 'income', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
