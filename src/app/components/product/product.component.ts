import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  beer: Product | undefined;
  id = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const respId = paramMap.get('id')
      if (respId) {
        this.id = respId
      }
      console.log(this.id);
    })

    this.getProduct()
  }

  getProduct(): any {
    this.productService.getOneProduct(this.id).subscribe((res) => {
      this.beer = res;
      console.log(this.beer);
    });
  }
}
