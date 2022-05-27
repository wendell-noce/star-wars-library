import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages-routing.module';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
    PagesRoutes,
    SharedModule
  ],
  exports: [
    ListagemComponent
  ]
})
export class PagesModule { }
