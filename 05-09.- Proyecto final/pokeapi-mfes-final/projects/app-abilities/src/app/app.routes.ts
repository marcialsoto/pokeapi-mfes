import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./abilities/router/abilities.routes').then(m => m.ABILITIES_ROUTES)
    },
];
