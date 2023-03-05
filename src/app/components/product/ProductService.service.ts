import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getData(id: string) {
    const url =`https://dummyjson.com/product/${id}`;
    return this.http.get(url);
  }
}
