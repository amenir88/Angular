import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainProductComponent } from '../main-product/main-product.component';
import { ListproductComponent } from './listproduct/listproduct.component';

const routes : Routes = [
  {path:"",component:MainProductComponent},
  {path:"list",component:ListproductComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})export class ProductRoutingModule { }
