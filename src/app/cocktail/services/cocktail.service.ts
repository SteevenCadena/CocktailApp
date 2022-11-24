import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Cocktail } from '../interfaces/cocktail.interface';
import { Ingredientes } from '../interfaces/ingredientes.interface';
import { Categories } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})


export class CocktailService {
  private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  private name       : string = '';
  private ingredient : string = '';
  private category   : string = '';
  private id         : string = '';


  private get getNombre() {
    return new HttpParams().set('s', this.name );
  }

  private get getId() {
    return new HttpParams().set('i', this.id);
  }  

  private get getPorIngrediente() {
    return new HttpParams().set('i', this.ingredient);
  }

  private get getCategories() {
    return new HttpParams().set('c', 'list');
  }

  private get getPorCategoria() {
    return new HttpParams().set('c', this.category );
  }

  constructor( private http: HttpClient ) { }


  buscarPorNombre( termino: string ): Observable<Cocktail> {
    this.name = termino;
    const url = `${ this.apiUrl }/search.php?${this.getNombre}`;

    return this.http.get<Cocktail>(url);
  }

  buscarInformacion( id: string ): Observable<Cocktail>{
    this.id   = id;
    const url = `${ this.apiUrl }/lookup.php?${ this.getId }`;

    return this.http.get<Cocktail>( url );
  }

  buscarIngrediente( termino: string ): Observable<Ingredientes>{
    this.ingredient = termino;
    const url       = `${ this.apiUrl }/filter.php?${ this.getPorIngrediente }`;

    return this.http.get<Ingredientes>( url ) ;
  }

  obtenerCategorias(): Observable<Categories> {
    const url = `${ this.apiUrl }/list.php?${ this.getCategories }`
 
    return this.http.get<Categories>( url );
  }

  buscarPorCategoria( termino: string): Observable<Ingredientes> {
    this.category = termino;
    const url = `${ this.apiUrl }/filter.php?${ this.getPorCategoria }`;

    return this.http.get<Ingredientes>(url);
  }

  buscarPorAlcohol( ifAlcohol: boolean ): Observable<Ingredientes> {

    const url = ( ifAlcohol === true )
      ?`${ this.apiUrl }/filter.php?a=Alcoholic`
      :`${ this.apiUrl }/filter.php?a=Non_Alcoholic`;

    return this.http.get<Ingredientes>(url);
  }

  buscarRandom(): Observable<Ingredientes> {
    const url = `${ this.apiUrl }/random.php`;

    return this.http.get<Ingredientes>( url );
  }

}
