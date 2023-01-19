import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { productComponent } from './shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  title = 'shop';
  products:productComponent[]=[];

}
