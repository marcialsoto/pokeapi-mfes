import { Routes } from '@angular/router';
import { PokedexListComponent } from '../pages/pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from '../pages/pokedex-detail/pokedex-detail.component';

export const POKEDEX_ROUTES: Routes = [
    {
        path: '',
        component: PokedexListComponent,
    },
    {
        path: ':id',
        component: PokedexDetailComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
