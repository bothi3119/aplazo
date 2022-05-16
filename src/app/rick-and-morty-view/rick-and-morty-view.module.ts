import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RickAndMortyRoutingModule } from './rick-and-morty-view-routing.module';
import { RickAndMortyViewComponent } from './rick-and-morty-view.component';
import { CharacterComponent } from './components/character/character.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { SearchComponent } from './components/search/search.component';
import { FilterByValueModule } from '../shared/pipes/filter-by-value.module';

@NgModule({
  declarations: [
    RickAndMortyViewComponent,
    CharacterComponent,
    LocationsComponent,
    EpisodeComponent,
    SearchComponent,
  ],
  imports: [
    FilterByValueModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    RickAndMortyRoutingModule,
  ],
})
export class RickAndMortyPageModule {}
