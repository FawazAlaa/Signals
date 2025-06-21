import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
product=input<any>();
showdata(){
  console.log(this.product());
  
}
}
