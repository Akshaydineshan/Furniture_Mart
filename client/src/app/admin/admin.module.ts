import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad/dashborad.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdminRoutingModule } from './admin-routing-module';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';




@NgModule({
  declarations: [
    DashboradComponent,
    AddProductComponent,
    OrderComponent,
    ProductsComponent,
    UserListComponent,
    UpdateproductComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[
    DashboradComponent,
  ]
})
export class AdminModule { }
