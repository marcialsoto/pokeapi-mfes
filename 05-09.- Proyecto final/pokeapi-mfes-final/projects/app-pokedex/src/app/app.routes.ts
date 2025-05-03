import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pokedex/router/pokedex.routes').then(m => m.POKEDEX_ROUTES)
    },
];
