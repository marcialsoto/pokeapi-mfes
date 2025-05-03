import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./types/router/types.routes').then(m => m.TYPES_ROUTES)
    },
];
