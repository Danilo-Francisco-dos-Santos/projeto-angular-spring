import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule
  ]
})
export class CursosModule { }
