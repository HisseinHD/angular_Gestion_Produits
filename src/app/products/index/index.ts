import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsInterface } from '../products-interface';
import { Service } from '../service';

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  products: ProductsInterface[] = [];

  constructor(public Service: Service, private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    this.Service.getAll().subscribe((data: ProductsInterface[]) => {
      console.log('Data:::', data);
      this.products = data;
      console.log('Products:::', this.products);
    });
  }
}
