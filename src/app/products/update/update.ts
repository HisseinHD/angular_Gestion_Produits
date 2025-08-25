import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Service } from '../service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsInterface } from '../products-interface';

@Component({
  selector: 'app-update',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update implements OnInit {
  form!: FormGroup;
  id!: string;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: Service,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'id
    this.id = this.route.snapshot.paramMap.get('id') as string;

    // Créer le formulaire
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prix: ['', Validators.required],
      description: [''],
      stock: ['', Validators.required],
      categorie: ['']
    });

    if (this.id) {
      this.service.getSingle(this.id).subscribe({
        next: (data) => {
        this.product = data.product;

        // ✅ remplir le formulaire
        this.form.patchValue({
          nom: this.product.nom,
          prix: this.product.prix,
          description: this.product.description,
          stock: this.product.stock,
          categorie: this.product.categorie
        });
      },
      error: (err) => console.error(err)
    });
    }
  }

  handleUpdate(): void {
    if (this.form.valid) {
      this.service.update(this.id, this.form.value).subscribe(() => {
        alert('Produit mis à jour ');
        this.router.navigate(['/products/index']); 
      });
    }
  }
}

