import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = "";

  borrarHeroe() {    
    const heroeBorrado = this.heroes.pop() || ''
    this.heroeBorrado = heroeBorrado
  }

}
