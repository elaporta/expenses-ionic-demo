import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'expenses', pathMatch: 'full' },
    { path: 'expenses', children: [
        {
            path: '',
            loadChildren: './pages/list/list.module#ListPageModule'
        },
        {
            path: 'create',
            loadChildren: './pages/create/create.module#CreatePageModule'
        },
        {
            path: ':expenseId/update',
            loadChildren: './pages/update/update.module#UpdatePageModule'
        }

    ]},
    { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)},
    { path: '**', redirectTo: 'expenses', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
