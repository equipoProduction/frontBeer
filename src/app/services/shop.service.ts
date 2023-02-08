import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { Product } from '../components/models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private url_get = 'http://localhost:3000/api/get_products';
  private url_get_category = 'http://localhost:3000/api/get_productCategory/';
  private url_get_novelty = 'http://localhost:3000/api/get_productsNovelty';


  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url_get).pipe(catchError(this.handleError<any>('getProducts')));
  }

  getCategorys(category:string):Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url_get_category+category).pipe(catchError(this.handleError<any>('getProducts')));
  }

  getNovelty():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url_get_novelty).pipe(catchError(this.handleError<any>('getProducts')));
  }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
