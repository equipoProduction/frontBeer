import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { ShopService } from '../../services/shop.service';
import { Product } from '../models/shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  title = 'shop';
  products:Product[]=[];
  novelty_products:Product[]=[];

  constructor( private shopService:ShopService){
   
      
  }

  ngOnInit(){
    this.getProducts();
    this.getNovelty();
  }

  getProducts():void{
    this.shopService.getProducts().subscribe(res=>this.products = res);
  }

  getCategory(category:string):void{
    this.shopService.getCategorys(category).subscribe(res=>this.products = res);
  }

  getNovelty():void{
    this.shopService.getNovelty().subscribe(res=>this.novelty_products = res);
  }

  puntuacion(score:number):any{
    
    return new Array(Math.floor(score));
  }

}
