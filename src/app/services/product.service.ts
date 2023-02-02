import { Injectable } from '@angular/core';
import { ProductCard } from '../product-card';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url_get='http://localhost:3000/api/get_product/63b2a99b3d209bfa3ab75917';

  constructor(private httpClient:HttpClient) {}
  getProducts():Observable<ProductCard[]>{
    return this.httpClient.get<ProductCard[]>(this.url_get).pipe(catchError(this.handleError<any>('getProducts')));
  }

  private handleError<T>(operation = 'opearation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}

