import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent {
  @Input() listEpisode: any[] = [];

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
}
