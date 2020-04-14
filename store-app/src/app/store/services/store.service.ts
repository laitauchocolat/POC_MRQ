import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(public httpClient: HttpClient) { }

  private items: string = "http://localhost:8181/items";


  public getItems(): Observable<Array<Item>> {
    return this.httpClient.get<Array<Item>>(this.items);
  }
}
