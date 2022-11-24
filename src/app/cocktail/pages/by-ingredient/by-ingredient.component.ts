import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-by-ingredient',
  templateUrl: './by-ingredient.component.html',
  styleUrls: ['./by-ingredient.component.css']
})
export class ByIngredientComponent {

  cocktails: any[] = [];
  cocktailsSugeridos: any[] = [];
  hayError : boolean = false;
  placeholder: string = 'Search ingredient';
  mostrarSugerencias: boolean = false;
  termino: string = '';

  constructor( private cocktailService: CocktailService ) { }



  buscar( termino: string ){
    this.cocktailService.buscarIngrediente( termino )
      .subscribe({
        next: resp => {
          this.cocktails = resp.drinks;
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

    buscarSugerencias( termino: string ) {
      
    }
}
