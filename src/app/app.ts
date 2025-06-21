import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Product } from "./product/product";
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Products],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'calls';
}
