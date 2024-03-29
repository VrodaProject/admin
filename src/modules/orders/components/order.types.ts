export interface JoinedOrdersMenuItem {
  id?: string;
  order_id?: string;
  products_id: string;
  amount: number;
}

export interface OrderForm {
  id: string;
  client_address: string;
  client_name: string;
  client_phone: string;
  status: string;
  joined_orders_products: JoinedOrdersMenuItem[];
}
