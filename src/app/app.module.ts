import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemListComponent } from './item-list/item-list.component';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { pencil, trash, personPlusFill, search } from 'ngx-bootstrap-icons';
import { InputComponent } from './input/input.component';

const icons = {
  pencil,
  trash,
  personPlusFill,
  search,
};

@NgModule({
  declarations: [AppComponent, ItemListComponent, InputComponent],
  imports: [BrowserModule, NgbModule, NgxBootstrapIconsModule.pick(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
