import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JamWaktuViewComponent } from '@app/jam-dinding/jam-waktu-view/jam-waktu-view.component';
import { SelectivePreloadStrategy } from '@app/SelectivePreloadStrategy';

const routes: Routes = [
  {
    path: 'jam',
    component: JamWaktuViewComponent,
  },
  {
    path: 'tentang-aplikasi',
    loadChildren: './tentang-app-modules/tentang-app.module#TentangAppModule',
    data: { preload: true },
  },
  {
    path: '', redirectTo: '/jam', pathMatch: 'full',
  },
  {
    path: '**', redirectTo: '/jam', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: SelectivePreloadStrategy,
  })],
  providers: [SelectivePreloadStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule { }
