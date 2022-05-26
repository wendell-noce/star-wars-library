import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  // {
  //     path: 'series',
  //     component: SeriesComponent,
  // },
  // {
  //     path: 'movies',
  //     component: MoviesComponent,
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutes {}
