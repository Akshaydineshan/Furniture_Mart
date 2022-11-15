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
  // searchValue=new BehaviorSubject('')
  
  orderList:any
  inLoginUser=new BehaviorSubject(false)

  constructor(private rest: RestApiService) {
   
    

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
    console.log("a",this.selectProduct);

  }

  async addOrder(item:any){

     
    // for(let i=0;i<item.length;i++){
      const data:any =await this.rest.post('http://localhost:3000/api/user/order',item)
      console.log("order post ",data);
      

    // }
   
  }


  async getOrders(){
    try{
     const data:any= await this.rest.get(`http://localhost:3000/api/user/vieworders/${this.loginUserDetails._id}`)

     this.orderList =data.orders
     console.log("order",this.orderList);
     
     

    }catch(error){
      console.log(error);
      
    }

  }





}
