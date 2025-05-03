import { Routes } from '@angular/router';
import { PokedexListComponent } from '../pages/pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from '../pages/pokedex-detail/pokedex-detail.component';

export const POKEDEX_ROUTES: Routes = [
    {
        path: '',
        component: PokedexListComponent,
        data: {
            title: 'Pokédex',
            description: 'Lista de pokemones'
        },
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
