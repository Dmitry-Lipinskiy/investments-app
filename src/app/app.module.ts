import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListService } from './shared/service/list.service';
import { TabListComponent } from './components/tab-list/tab-list.component';
import { TabPageComponent } from './pages/tab-page/tab-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TabListComponent,
    TabPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
