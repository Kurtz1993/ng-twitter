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

  @Input()
  picture: string;

  @Input()
  size = 40;

  get imgUrl(): string {
    return `${this.picture}?s=${this.size}`;
  }

  ngOnInit() {
  }

}
