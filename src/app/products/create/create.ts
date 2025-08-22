import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Service } from '../service';

@Component({
  selector: 'app-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
form!: FormGroup;

  constructor(public Service: Service, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required])
    })
  }

  get formControls() {
    return this.form.controls;
  }

  handleSubmit() {
    console.log(this.form.value);

    this.Service.create(this.form.value).subscribe((res: any) => {
console.log("Produit ajouté avec succès !");
        this.router.navigateByUrl('products/index');
    })
  }
}
