import { Injectable } from '@angular/core';
import { Robot } from '../model/robot.model';
@Injectable({
  providedIn: 'root',
})
export class RobotService {
  produits: Robot[]; //un tableau de Robot
  produit?: Robot;
  constructor() {
    this.produits = [
      {
        idRobot: 1,
        nomRobot: 'PC Asus',
        nomDev: 'testt',
        prixRobot: 3000.6,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idRobot: 2,
        nomRobot: 'Imprimante Epson',
        nomDev: 'testt',
        prixRobot: 450,
        dateCreation: new Date('12/17/2010'),
      },
      {
        idRobot: 3,
        nomRobot: 'Tablette Samsung',
        nomDev: 'testt',
        prixRobot: 900.123,
        dateCreation: new Date('02/20/2020'),
      },
    ];
  }
  listeRobots(): Robot[] {
    return this.produits;
  }
  ajouterRobot(prod: Robot) {
    prod.idRobot = this.produits.length + 1;
    this.produits.push(prod);
  }
  supprimerRobot(prod: Robot) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idRobot === cur.idRobot) {
    this.produits.splice(index, 1);
    }
    }); */
  }

  consulterRobot(id: number): Robot | undefined {
    return (this.produit = this.produits.find((p) => p.idRobot == id));
    //return this.produit;
  }

  updateRobot(p: Robot) {
    // console.log(p);
    this.supprimerRobot(p);
    this.ajouterRobot(p);
    this.trierRobots();
  }

  trierRobots() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idRobot > n2.idRobot) {
        return 1;
      }
      if (n1.idRobot < n2.idRobot) {
        return -1;
      }
      return 0;
    });
  }
}
