import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Service } from '../service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsInterface } from '../products-interface';

@Component({
  selector: 'app-update',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update implements OnInit {
  form!: FormGroup;
  id!: string;

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

    
    this.service.getSingle(this.id).subscribe((data: ProductsInterface) => {
      this.form.patchValue(data);
    });
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

