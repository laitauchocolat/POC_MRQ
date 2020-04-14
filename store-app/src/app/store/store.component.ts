import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { Item } from './model/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public method = (item: Item) => { this.cartService.add(item); }
  public action = "Ajouter";
  public items: Array<Item>;

  constructor(public cartService: CartService, public storeService: StoreService) { }

  ngOnInit(): void {
    this.method.bind(this);
    this.storeService.getItems().subscribe(response => {
      this.items = response;
    });
  }

}
