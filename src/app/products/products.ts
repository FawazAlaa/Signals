import { Component, inject, OnInit, output, Output, signal } from '@angular/core';
import { Http } from '../http';
import { Subscription } from 'rxjs';
import { Product } from "../product/product";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [Product],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit{
  data$!:Subscription;
  products=signal([]);
 private productsCall=inject(Http);
ngOnInit(): void {
  this.data$=this.productsCall.getProducts().subscribe({
  next:(data:any)=>{
    this.products.set(data.products);
    console.log(this.products);
   
  },
  error:(err)=>console.log('Failed to Load due to:' ,err)
  })
}

}
