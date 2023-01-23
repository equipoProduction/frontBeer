import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private urlpost = 'http://localhost:3000/api/login';


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