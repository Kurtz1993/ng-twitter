import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';

const CommonComponents = [TopBarComponent, ProfilePicComponent];

@NgModule({
  declarations: [...CommonComponents],
  imports: [CommonModule, RouterModule],
  exports: [...CommonComponents],
})
export class SharedModule {}
