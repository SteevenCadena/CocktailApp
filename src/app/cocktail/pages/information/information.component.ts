import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { CocktailService } from '../../services/cocktail.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  cocktail          : any      = {}
  ingredients       : string[] = [];

  constructor( private activatedRoute: ActivatedRoute, private cocktailService: CocktailService ) { }

  ngOnInit(): void {

   
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) =>this.cocktailService.buscarInformacion( id ) ),
        // tap( console.log )
      )
      .subscribe( cocktail => {
        this.cocktail = cocktail.drinks[0];     
          this.tratarDatos();
      });
      

  }


  tratarDatos(): void {
    
    for (const valor in this.cocktail ) {

      for( let i = 1; i <= 15; i++ ) {

        const cantidad    = `strMeasure${i}`;
        const ingrediente = `strIngredient${i}`;

        if( ingrediente === valor ) {
          if( this.cocktail[valor] != null ){
            this.ingredients.push(`${this.cocktail[valor]}: ${this.cocktail[cantidad]}`.toString());
          }
        }
        
      }

    }
  }
}
