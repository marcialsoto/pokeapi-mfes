// projects/app-types/src/app/types/router/types.routes.ts
import { Routes } from '@angular/router';
import { TypeDetailComponent } from '../pages/type-detail/type-detail.component';
import { TypesListComponent } from '../pages/types-list/types-list.component';
import { TypesFeaturedComponent } from '../pages/types-featured/types-featured.component';

export const TYPES_ROUTES: Routes = [
    {
        path: '',
        component: TypesListComponent,
        data: {
            title: 'Tipos de Pokémon',
            description: 'Lista de tipos de Pokémon disponibles',
        },
    },
    {
        path: 'destacados',
        component: TypesFeaturedComponent,
    },
    {
        path: ':id',
        component: TypeDetailComponent,
        data: {
            title: 'Detalle de Tipo',
            description: 'Información del tipo seleccionado',
        },
    },
    {
        path: '',
        redirectTo: 'tipos',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'tipos',
        pathMatch: 'full',
    },
];
