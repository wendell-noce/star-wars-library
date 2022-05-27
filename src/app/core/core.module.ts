
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ApiService } from './api/api.service';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule,
      MatSnackBarModule
    ],
    providers: [ ApiService],
})
export class CoreModule {}
