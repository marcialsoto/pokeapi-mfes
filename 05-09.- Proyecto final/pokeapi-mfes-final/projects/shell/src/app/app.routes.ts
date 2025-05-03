import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pokemones',
        loadChildren: () =>
            loadRemoteModule({
                remoteName: 'appPokedex',
                exposedModule: './routes'
            }).then(m => m.routes),
    },
];
