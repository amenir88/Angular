import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ListproductComponent } from './listproduct/listproduct.component';
import { MainProductComponent } from '../main-product/main-product.component';



@NgModule({
  declarations: [
    MainProductComponent,
    ListproductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
