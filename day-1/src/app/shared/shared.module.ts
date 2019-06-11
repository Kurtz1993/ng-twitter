import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const CommonComponents = [TopBarComponent];

@NgModule({
  declarations: [...CommonComponents],
  imports: [CommonModule],
  exports: [...CommonComponents],
})
export class SharedModule {}
