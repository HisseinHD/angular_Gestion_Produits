import { Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';
import { Read } from './products/read/read';
import { Delete } from './products/delete/delete';
import { Index } from './products/index/index';


import { Component } from '@angular/core';

export const routes: Routes = [
  { path: 'acceuil', component: Acceuil },
  { path: 'products/read', component: Read },
  { path: 'products/delete', component: Delete },
  { path: 'products/index', component: Index },
];
