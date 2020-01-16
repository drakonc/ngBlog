import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatLineModule, MatProgressSpinnerModule, MatDividerModule, MatChipsModule
}
  from '@angular/material';

const myModule = [MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatLineModule, MatProgressSpinnerModule, MatDividerModule, MatChipsModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule]
})
export class MaterialModule { }
