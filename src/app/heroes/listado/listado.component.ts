import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[]= ['Spierman', 'Ironman', 'Hulk', 'Thor']
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado= this.heroes.pop() || '';
  }
}
