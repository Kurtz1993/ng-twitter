import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  @Input()
  user: User;

  constructor() {}

  ngOnInit() {}
}
