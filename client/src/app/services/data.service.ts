import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loginUserDetails: any
  cartItem: any
  selectedItem: any
  selectProduct: any
  countCartItem: any
  inLoginUser=new BehaviorSubject(false)

  constructor(private rest: RestApiService) {
    console.log("service data", this.loginUserDetails);

  }
  async getProfile() {
    const profileData: any = await this.rest.get('http://localhost:3000/api/user/profile')
    console.log("data", profileData.user);
    this.inLoginUser.next(true)

    this.loginUserDetails = profileData.user

  }

  async setCart(item: any) {
    item["user"] = this.loginUserDetails._id


    const data: any = await this.rest.post("http://localhost:3000/api/user/addcart", item)
    console.log("set", data);

  }


  async getSingleProduct(item: any) {
    const data: any = await this.rest.get(`http://localhost:3000/api/user/singleproduct/${item}`)

    this.selectProduct = data.data
    console.log(this.selectProduct);

  }





}
