import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private readonly urlProd = environment.urlProd;
  private urlpost = `${this.urlProd}/api/register`;


  constructor(private httpClient: HttpClient) { }
  
  addNewUser(
    name: string,
    surname: string,
    tel: string,
    date_birth: string,
    address: string,
    city:String,
    cp:Number,
    email:String,
    password: String,
    status: boolean,

  ): Observable<object>{

    const data = {
      name: name,
      surname: surname,
      tel: tel,
      date_birth: date_birth,
      address: address,
      city:city,
      cp:cp,
      email:email,
      password: password,
      status: status,
    };
    return this.httpClient.post(this.urlpost,data,{observe:'body'}).pipe(catchError(this.handleError<any>('addNewUser')));
  }

  private handleError<T>(operation = 'opearation',result?:T){
    return (error:any):Observable<T>=>{
      // TODO: send the error to remote logging infrastructure
      console.error(error);// log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

}
