import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  @Input() listLocation: any[] = [];

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
}
