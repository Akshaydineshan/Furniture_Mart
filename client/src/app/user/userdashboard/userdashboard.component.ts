import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  name: any
  furnitures: any
  value:any;

  constructor(private data: DataService, private rest: RestApiService, private router: Router) {

   }

  ngOnInit(): void {
    // console.log("dddddddddddd",this.data.searchValue);
    
    // this.value=this.data.searchValue
    this.getProduct()
    this.name = this.data.loginUserDetails
  }
  async getProduct() {
    const data: any = await this.rest.get('http://localhost:3000/api/admin/viewProduct')
    console.log(data.products);

    this.furnitures = data.products
  }



  async itemClick(item:any){
       await this.data.getSingleProduct(item)
    // this.data.selectedItem=item
    this.router.navigateByUrl('user-selectproduct')
   
    
  }


}
