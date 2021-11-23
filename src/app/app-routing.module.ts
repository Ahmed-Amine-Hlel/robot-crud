import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  { path: 'robots', component: ProduitsComponent },

  { path: 'add-robot', component: AddProduitComponent },

  { path: 'updateRobot/:id', component: UpdateProduitComponent },

  { path: '', redirectTo: 'robots', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
