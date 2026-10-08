import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreInventoryType } from '../models/store-inventory/store-inventory-type';
import { StoreInventory } from '../static-data/store-inventory';

@Injectable({
  providedIn: 'root'
})
export class StoreInventoryService {
  public getStoreInventory(): Observable<StoreInventoryType[]> {
    return of(StoreInventory['StoreInventoryType']);
  }
}
