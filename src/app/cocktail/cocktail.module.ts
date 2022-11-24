import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ByCategoryComponent } from './pages/by-category/by-category.component';
import { ByIngredientComponent } from './pages/by-ingredient/by-ingredient.component';
import { ByAlcoholicComponent } from './pages/by-alcoholic/by-alcoholic.component';
import { RandomComponent } from './pages/random/random.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { InformationComponent } from './pages/information/information.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ByCategoryComponent,
    ByIngredientComponent,
    ByAlcoholicComponent,
    RandomComponent,
    ByNameComponent,
    InformationComponent,
    CardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ByCategoryComponent,
    ByIngredientComponent,
    ByAlcoholicComponent,
    RandomComponent,
    ByNameComponent,
    InformationComponent,
    CardComponent,
    InputComponent
  ]
})
export class CocktailModule { }
