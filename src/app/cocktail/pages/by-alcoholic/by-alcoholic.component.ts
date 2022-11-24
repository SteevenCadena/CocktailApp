import { Component, OnInit } from '@angular/core';

import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-by-alcoholic',
  templateUrl: './by-alcoholic.component.html',
  styleUrls: ['./by-alcoholic.component.css']
})
export class ByAlcoholicComponent implements OnInit {

  cocktails : any[] = [];
  categorias :string[] = ['Alocholic', 'Non Alcoholic'];

  constructor( private cocktailService: CocktailService ) { }

  ngOnInit(): void {
  }


  buscar( category: string) {
    const ifAlcohol = ( category === 'Alocholic' )? true : false;

    this.cocktailService.buscarPorAlcohol( ifAlcohol )
      .subscribe({
        next: resp => {
          this.cocktails = resp.drinks;
        }
      })

  }


}
