import { Component } from '@angular/core';
import { ProductsInterface } from '../products-interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Service } from '../service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read',
  imports: [CommonModule],
  templateUrl: './read.html',
  styleUrl: './read.css'
})
export class Read {
id!:string;
  product!: ProductsInterface;

  constructor(public Service: Service, private router: Router, private route: ActivatedRoute) { }

 ngOnInit() {
    console.log(this.route.snapshot.params);
    this.id = this.route.snapshot.params['id'];

    this.Service.getSingle(this.id).subscribe({
      next: (data) => {
        this.product = data.product;
        console.log(this.product);
      },
      error: (err) => console.error(err),
    });
  }
}