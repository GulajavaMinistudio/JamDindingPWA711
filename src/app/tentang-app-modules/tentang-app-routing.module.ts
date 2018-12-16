import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TentangAppComponent } from './tentang-app/tentang-app.component';


const tentangAppRoutes: Routes = [
  {
    path: '',
    component: TentangAppComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(tentangAppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TentangAppRoutingModule { }
