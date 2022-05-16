import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SearchComponent } from './components/search/search.component';
import { RickAndMortyViewComponent } from './rick-and-morty-view.component';
const routes: Routes = [
  {
    path: 'view',
    component: RickAndMortyViewComponent,
  },
  {
    path: 'character',
    component: CharacterComponent,
  },
  {
    path: 'episode',
    component: EpisodeComponent,
  },
  {
    path: 'location',
    component: LocationsComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickAndMortyRoutingModule {}
