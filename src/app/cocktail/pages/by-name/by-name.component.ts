import { Component } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent  {

  cocktailsSugeridos: any[] = [];
  cocktails         : any[] = [];

  cocktailId : string = '';
  termino    : string = '';
  placeholder: string = 'Search name';
  hayError   : boolean = false;
  mostrarSugerencias: boolean = false;

  constructor( private cocktailService: CocktailService ) { }

  buscar( termino: string ) {
    this.termino = termino;
    this.mostrarSugerencias = false;
    this.hayError = false;

    this.cocktailService.buscarPorNombre( termino )
      .subscribe({
        next: resp => {
          if( !resp.drinks  ){
            this.hayError = true;
            this.cocktails= [];
            return;
          }
          this.cocktails = resp.drinks;
          if( this.cocktails) {
            this.mostrarSugerencias = false
          }

        }
      })
  }

  sugerir( termino: string ) {
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;

    this.cocktailService.buscarPorNombre( termino )
      .subscribe({
        next: resp => {
          if( !resp.drinks  ){
            this.hayError = true;
            return;
          }
          this.cocktailsSugeridos = resp.drinks.splice(0,3);
        },

      })
    }      

  buscarSugerencias( termino: string ){
    this.buscar(termino);
  }
}
