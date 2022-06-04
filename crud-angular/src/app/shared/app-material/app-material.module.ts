import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  //é só para efeito de organização e não criação de componentes
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ],
})
export class AppMaterialModule { }