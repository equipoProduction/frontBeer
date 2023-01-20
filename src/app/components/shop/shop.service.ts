import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private url = 'http://localhost:3000/api/get_products';
  private urlpost = 'http://localhost:3000/api/add_product';
  private urldelete = 'http://localhost:3000/api/delete_product';
  private urlput = 'http://localhost:3000/api/update_product';

  constructor() { }
}
