import { Component, Output, Input, EventEmitter } from '@angular/core';

import { User } from '@app/models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  @Input()
  user: User;
  @Output()
  logout = new EventEmitter<null>();
}
