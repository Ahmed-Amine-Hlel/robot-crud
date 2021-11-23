import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 
produits : Produit[]; //un tableau de chînes de caractères

constructor(private produitService: ProduitService ) {
  this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
  }

  supprimerProduit(prod: Produit) {
    //console.log(prod);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
    this.produitService.supprimerProduit(prod);
  }

}
