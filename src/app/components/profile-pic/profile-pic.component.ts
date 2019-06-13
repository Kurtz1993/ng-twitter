import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {
  @Input()
  @HostBinding('class.round')
  round = false;

  constructor() { }

  ngOnInit() {
  }

}
