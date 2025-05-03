import { Routes } from '@angular/router';
import { AbilitiesListComponent } from '../pages/abilities-list/abilities-list.component';
import { AbilitiesFeaturedComponent } from '../pages/abilities-featured/abilities-featured.component';

export const ABILITIES_ROUTES: Routes = [
    {
        path: '',
        component: AbilitiesListComponent,
        data: {
            title: 'Habilidades de Pokémon',
            description: 'Lista de habilidades de Pokémon disponibles',
        },
    },
    {
        path: 'destacados',
        component: AbilitiesFeaturedComponent,
    },
    {
        path: '',
        redirectTo: 'habilidades',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'habilidades',
        pathMatch: 'full',
    },
];
