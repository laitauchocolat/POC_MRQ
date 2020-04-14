import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  public add(item: Item) {
    if (!this.items.some(x => x.id == item.id)) {
      this.items.push(item);
    }
    this.items.find(x => x.id == item.id).count++;
  }

  public remove(item: Item) {
    item.count--;
    if (item.count == 0) {
      var index = this.items.findIndex(x => x.id == item.id);
      this.items.splice(index, 1);
    }
  }

  public length(): number {
    var count = 0;
    this.items.forEach(x => count += x.count);
    return count;
  }

  public sum(): number {
    var sum = 0;
    this.items.forEach(x => (sum += (x.price * x.count)));
    return sum;
  }

  constructor() { }
}
