import { Component, inject, OnInit, output, Output } from '@angular/core';
import { Http } from '../http';
import { Subscription } from 'rxjs';
import { Product } from "../product/product";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [Product,CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit{
  data$!:Subscription;
  products:any[]=[]
 private productsCall=inject(Http);
ngOnInit(): void {
  this.data$=this.productsCall.getProducts().subscribe({
  next:(data:any)=>{
    this.products=data.products as any[];
    console.log(this.products);
   
  },
  error:(err)=>console.log('Failed to Load due to:' ,err)
  })
}

}
