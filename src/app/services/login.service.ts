import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly urlProd = environment.urlProd;
  private urlpost = `${this.urlProd}/api/login`;


  constructor(private httpClient: HttpClient) { }
  
  login(

    email: String,
    password: String,
 

  ): Observable<object> {

    const data = {

      email: email,
      password: password,

    };
    return this.httpClient.post(this.urlpost, data, { observe: 'body' }).pipe(catchError(this.handleError<any>('login')));
  }

  private handleError<T>(operation = 'opearation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);// log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}