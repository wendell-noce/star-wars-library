
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ApiService } from './api/api.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule,
      MatSnackBarModule],
    providers: [
      ApiService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
      }, ],
})
export class CoreModule {}
