import { Component, Input } from '@angular/core';

export interface ItemProps {
  email: string;
  id: number;
  name: string;
  games: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  @Input() item: ItemProps = {} as ItemProps;
}
