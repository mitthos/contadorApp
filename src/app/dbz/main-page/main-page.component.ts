import { Component } from '@angular/core';

import { Personaje } from "../interfaces/dbz.interfaces";

// interface Personaje {
//   nombre: string,
//   poder : number
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  public personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder : 15000
    },{
      nombre: "Vegeta",
      poder :  8500
    }

  ];

  nuevo: Personaje  = {
    nombre: "",
    poder: 0
  }

  // agregar() {
  //   if (this.nuevo.nombre.trim().length === 0){
  //     return;
  //   }

  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre:"", poder: 0
  //   };
  //   console.log(this.nuevo)

  // }

}
