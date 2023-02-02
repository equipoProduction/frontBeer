import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/product-card';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  beers:ProductCard[];

  constructor(private productService:ProductService){
    this.beers=[];
  }
  ngOnInit():void{
    this.getProducts();
  }
  private getProducts():void{
    this.productService.getProducts().subscribe(res=>{
      this.beers = res;
      console.log(this.beers);
    });
  }

}

