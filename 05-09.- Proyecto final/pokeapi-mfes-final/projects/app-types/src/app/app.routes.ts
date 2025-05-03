import { Routes } from '@angular/router';
import { TYPES_ROUTES } from './types/router/types.routes';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./types/router/types.routes').then(m => m.TYPES_ROUTES)
    },
];
