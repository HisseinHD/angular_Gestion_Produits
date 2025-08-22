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

  constructor(public Service: Service, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.Service.getAll().subscribe((data: ProductsInterface[]) => {
      console.log('Data:::', data);
      this.products = data;
      console.log('Products:::', this.products);
    });
  }

  deleteProduct(id: string): void {
    if (confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      this.Service.delete(id).subscribe({
        next: () => {

          // this.message = "Produit supprimé avec succès !";

          this.products = this.products.filter((product) => product._id !== id);
          console.log("Produit supprimé avec succès !");
        },
        error: (err) => console.error("Erreur suppression", err)
      });


    }
  }

}
