import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  blogData
  getService(): Observable<any> {
    return this.http.get(
      "https://5f047dac8b06d60016ddebce.mockapi.io/api/blog"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }
  getServiceById(index): Observable<any> {
    return this.http.get(
      "https://5f047dac8b06d60016ddebce.mockapi.io/api/blog/" + index
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }



}
