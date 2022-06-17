import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input('heroesZ') personajes: Personaje[] = [];

  @Input() nuevo: Personaje  = {
    nombre: "",
    poder: 0
  }

  agregar() {
    console.log(this.personajes)
    console.log(this.personajes.length)
    for (let i = 0; i<this.personajes.length; i++){
      console.log(this.personajes[i].nombre);
    }
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:"", poder: 0
    };
    //console.log(this.nuevo)

    console.log(this.personajes);
    this.personajes.forEach(kaka => {
      console.log(kaka.nombre);
    }); 
  }

}
