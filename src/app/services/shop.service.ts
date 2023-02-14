import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { Product } from '../components/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private readonly urlProd = environment.urlProd;
  private url_get = `${this.urlProd}/api/get_products`;
  private url_get_category = `${this.urlProd}/api/get_productCategory/`;
  private url_get_novelty = `${this.urlProd}/api/get_productsNovelty`;


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
