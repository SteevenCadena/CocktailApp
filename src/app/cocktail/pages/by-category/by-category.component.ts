import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Drink, Categories } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-by-category',
  templateUrl: './by-category.component.html',
  styleUrls: ['./by-category.component.css']
})
export class ByCategoryComponent implements OnInit {

  categorias     : any[] = [];
  categoriaActica: string = '';
  cocktails       : any[] = [];

  constructor( private cocktailService: CocktailService ) { }



  ngOnInit(): void {
    this.cocktailService.obtenerCategorias().subscribe({ 
      next: resp => {
        this.categorias = resp.drinks; 
        this.categorias = this.categorias.map( c => {
          return c.strCategory;
        })
        this.categorias.sort();
        console.log(this.categorias);
      }
    });
  }

  buscar( categoria: string ) {
    this.categoriaActica = categoria;

    this.cocktailService.buscarPorCategoria(categoria)
      .subscribe({
        next: resp => {
          console.log(resp);
          this.cocktails = resp.drinks;
        }
      })
  } 





}
