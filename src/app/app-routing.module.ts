import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rick-morty/view',
    pathMatch: 'full',
  },
  {
    path: 'rick-morty',
    /**
     * Lazy load of the RickAndMortyPageModule.
     *
     * @returns {LoadChildren} Lazy-loaded child module.
     */
    loadChildren: () =>
      import('./rick-and-morty-view/rick-and-morty-view.module').then(
        (m) => m.RickAndMortyPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
