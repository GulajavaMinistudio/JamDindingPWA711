import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TentangAppRoutingModule } from './tentang-app-routing.module';
import { TentangAppComponent } from './tentang-app/tentang-app.component';

@NgModule({
  declarations: [
    TentangAppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TentangAppRoutingModule,
  ]
})
export class TentangAppModule { }
