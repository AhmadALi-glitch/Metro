import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError, throwError } from 'rxjs';
import { AppError} from '../error-handlers/app-specefication-errors/App-Error';
import { NotFoundError } from '../error-handlers/app-specefication-errors/Not-Found-Error';
import { Inject } from "@angular/core";
import { InternalServerError } from '../error-handlers/app-specefication-errors/server-Error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(@Inject(String) private url:string , private http: HttpClient,) {}

  getAll(id?:string) {
    return this.http.get(this.url + "/" + id)
              .pipe(catchError(this.handleErrors)
    );
  }

  add(resource:any, id?:any) {    
    let headers = new HttpHeaders();
    headers.set("Content-Type", 'application/json')

    return this.http.post(this.url + "/" + id, resource, {
      headers : headers
    })
    .pipe( catchError(this.handleErrors) );
  }

  getOne(id:string) {
    return this.http.get(this.url + "/" + id).pipe(
      catchError(this.handleErrors)
    )
  }

  deleteOne(id:string) {
    return this.http.delete(this.url + "/" + id).pipe(
      catchError(this.handleErrors)
    )
  }

  private handleErrors(errorObj: HttpErrorResponse) {
  
    if (errorObj.status === 404) {
      return throwError(() => {
        new NotFoundError()
      });
    }

    if (errorObj.status == 400) {
      return throwError(() => {
        new InternalServerError();
      });
    }

    else 
    return throwError(() => {
      new AppError();
    });
  }
  
}
