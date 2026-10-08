export interface CustomerOrderType {
  id?: number;
  orderId?: string;
  customerName?: string;
  orderDate?: Date;
  totalAmount?: number;
  paymentStatus?: string;
  fulfillmentStatus?: string;
}
