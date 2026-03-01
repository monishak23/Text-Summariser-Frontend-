import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./modules/text-summariser/text-summariser').then(m => m.TextSummariser)
}
];
