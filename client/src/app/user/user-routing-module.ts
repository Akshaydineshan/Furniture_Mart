import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import { MycartComponent } from './mycart/mycart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { SelectproductComponent } from './selectproduct/selectproduct.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';





const routes: Routes = [
{path:'user-dashboard',component:UserdashboardComponent,canActivate:[AuthGuardGuard]},
{path:'user-myorder',component:MyorderComponent,canActivate:[AuthGuardGuard]},
{path:'user-mycart',component:MycartComponent,canActivate:[AuthGuardGuard]},
{path:'user-selectproduct',component:SelectproductComponent,canActivate:[AuthGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
