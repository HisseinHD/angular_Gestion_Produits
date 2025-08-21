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
    Headers: new HttpHeaders({
      'Content-Type': 'applicaion/json',
    }),
  };

  
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/products').pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
}
