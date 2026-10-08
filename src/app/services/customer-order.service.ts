import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerOrderType } from '../models/customer-order/customer-order-type';
import { CustomerOrder } from '../static-data/customer-order';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {
  public getCustomerOrder(): Observable<CustomerOrderType[]> {
    return of(CustomerOrder['CustomerOrderType']);
  }
}
