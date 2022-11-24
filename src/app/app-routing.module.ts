import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByNameComponent } from './cocktail/pages/by-name/by-name.component';
import { ByIngredientComponent } from './cocktail/pages/by-ingredient/by-ingredient.component';
import { ByCategoryComponent } from './cocktail/pages/by-category/by-category.component';
import { ByAlcoholicComponent } from './cocktail/pages/by-alcoholic/by-alcoholic.component';
import { RandomComponent } from './cocktail/pages/random/random.component';
import { InformationComponent } from './cocktail/pages/information/information.component';


const routes: Routes = [
    {
        path: '',
        component: ByNameComponent,
        pathMatch: 'full'
    },

    {
        path: 'ingredient',
        component: ByIngredientComponent
    },
    {
        path: 'category',
        component: ByCategoryComponent
    },
    {
        path: 'alcoholic',
        component: ByAlcoholicComponent
    },
    {
        path: 'random',
        component: RandomComponent
    },
    {
        path: 'information/:id',
        component: InformationComponent
    },
    {
        path: '**',
        redirectTo: '',
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule{}