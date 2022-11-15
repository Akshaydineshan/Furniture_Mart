
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:'admin-dashboard',component:DashboradComponent},
  {path:'admin/add-product',component:AddProductComponent},
  {path:'admin/order',component:OrderComponent},
  {path:'admin/products',component:ProductsComponent},
  {path:'admin/user-list',component:UserListComponent},
  {path:'admin/update-product/:id',component:UpdateproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
