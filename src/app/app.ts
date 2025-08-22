import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
  <app-navbar></app-navbar>,
  <router-outlet />`,
  
  styles: ``,
})
export class App {
  
  protected readonly title = signal('angular_Gestion_Produits');
}
