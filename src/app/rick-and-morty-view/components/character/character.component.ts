import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() listCharacter: any[] = [];

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
}
