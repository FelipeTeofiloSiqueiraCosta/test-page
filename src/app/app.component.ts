import { Component } from '@angular/core';
import { ItemProps } from './item-list/item-list.component';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: ItemProps[] = [];
  pageSize: number = 5;
  page: number = 1;
  isVisible = false;

  constructor(private deviceService: DeviceDetectorService) {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        email: `Sample email ${i}`,
        games: `Game 1, Game 2, Game 3, Game 4`,
        id: i,
        name: `Sample name ${i}`,
      });
    }
    this.isVisible = deviceService.isMobile();
  }
}
