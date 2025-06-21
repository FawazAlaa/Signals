import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Http {

  private httpCall=inject(HttpClient)

  getProducts(){
    return this.httpCall.get('https://dummyjson.com/products')
  }
}
