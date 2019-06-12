import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './components/top-bar/top-bar.component';

const CommonComponents = [TopBarComponent];

@NgModule({
  declarations: [...CommonComponents],
  imports: [CommonModule, RouterModule],
  exports: [...CommonComponents],
})
export class SharedModule {}
