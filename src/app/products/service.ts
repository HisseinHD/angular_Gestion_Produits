import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProductsInterface } from './products-interface';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private baseUrl = 'http://localhost:3000';

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
    }),
  };


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/products').pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
  getSingle(id:string): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/products/' + id).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  create(product: ProductsInterface): Observable<any> {
  return this.httpClient.post(
    this.baseUrl + '/products',
    product, // <-- envoyer l'objet directement
    this.httpOption
  ).pipe(
    catchError((error) => {
      console.log(error);
      return throwError(() => error);
    })
  );
}


}
