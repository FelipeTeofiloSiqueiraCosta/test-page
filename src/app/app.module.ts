import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemListComponent } from './item-list/item-list.component';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { pencil, trash, personPlusFill } from 'ngx-bootstrap-icons';

const icons = {
  pencil,
  trash,
  personPlusFill,
};

@NgModule({
  declarations: [AppComponent, ItemListComponent],
  imports: [BrowserModule, NgbModule, NgxBootstrapIconsModule.pick(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
