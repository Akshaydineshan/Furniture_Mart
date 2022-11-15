import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  cartItem:any
  carts:any
  total:Number=0
  qty:String='1'
  constructor(private data:DataService,private rest:RestApiService,private router:Router) { }

  ngOnInit(): void {
   this.getCartItems()
  }

  async getCartItems(){
       const  cartdata:any =await this.rest.get(`http://localhost:3000/api/user/viewcart/${this.data.loginUserDetails._id}`)
       console.log("cartdate",cartdata.data);
      
       
          for(let i:number=0;i<cartdata.data.length;i++){
            this.total=Number(this.total)
            let price:any=Number(cartdata.data[i].prize)
            //  console.log(typeof price)
            // console.log("hghgh",typeof this.total);
            this.total =this.total + price
            console.log(this.total);
            
          }
         
       this.carts=cartdata.data
       
  }




  async deleteCart(id:any){
      await this.rest.delete(`http://localhost:3000/api/user/cart-item-delete/${id}`)
      this.getCartItems()
  }



  async checkout(item:any){
    if(confirm("Are you sure to buy this product?")){
      console.log("checkout click",item);
      await this.data.addOrder(item)
      await this.deleteCart(item[0]._id)
      this.router.navigateByUrl('user-myorder')

    }
  

    // await this.rest

    
  }

}
