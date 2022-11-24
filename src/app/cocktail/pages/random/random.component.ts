import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {


  cocktails :any[] = [];
  idDrink = '';
  constructor( private cocktailService: CocktailService) { }

  ngOnInit(): void {

      this.buscar();
  }

  buscar() {
    this.cocktailService.buscarRandom()
    .subscribe({
      next: resp => {
        this.cocktails = resp.drinks;
      },
    }) 
  }
  



}
