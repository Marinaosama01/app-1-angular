import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class Aboutapp {
  title = 'angularapp1';
}

interface Product {
    image: string;
    title: string;
    description: string;
    price: number;
  }
  
export class AboutComponent {
    products: Product[] = [];
  
    constructor() {
      for (let i = 1; i <= 20; i++) {
        this.products.push({
          image: `product${i}.jpg`,
          title: `Product ${i}`,
          description: `This is the description for Product ${i}`,
          price: 10.99 + i
        });
      }
    }
  }