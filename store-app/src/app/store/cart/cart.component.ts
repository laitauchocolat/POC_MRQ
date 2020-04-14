import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public action = "Retirer";
  public method = (item: any) => { this.cartService.remove(item); }

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.method.bind(this);
  }

}
