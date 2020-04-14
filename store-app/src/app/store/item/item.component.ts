import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() public item: any = { price: 9.99, title: "Default title", url: "" };
  @Input() public action: string = "";
  @Input() public method: Function = (item: any) => { };

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
  }

}
