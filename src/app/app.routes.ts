import { Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';
import { Read } from './products/read/read';
import { Delete } from './products/delete/delete';
import { Index } from './products/index/index';


import { Component } from '@angular/core';
import { Create } from './products/create/create';

export const routes: Routes = [
  { path: '', component: Acceuil },
  { path: 'products/read', component: Read },
  { path: 'products/read/:id', component: Read },
  { path: 'products/delete', component: Delete },
  { path: 'products/index', component: Index },
  { path: 'products/create', component: Create },
];
