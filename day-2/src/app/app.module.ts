import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorHandlerService } from '@app/services/error-handler.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('token');
        },
      },
    }),
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
