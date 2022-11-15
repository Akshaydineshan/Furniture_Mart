import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { UserRoutingModule } from './user-routing-module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MycartComponent } from './mycart/mycart.component';

import { MyorderComponent } from './myorder/myorder.component';
import { FormsModule } from '@angular/forms';
import { SelectproductComponent } from './selectproduct/selectproduct.component';



@NgModule({
  declarations: [
 
  
    UserdashboardComponent,
         MycartComponent,
         MyorderComponent,
         MyorderComponent,
         SelectproductComponent
  ],
  imports: [
    CommonModule,UserRoutingModule,FormsModule
  ],
  exports:[
    UserdashboardComponent,
    MyorderComponent,
  
   
  
  ]
})
export class UserModule { }
