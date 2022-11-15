import { RestApiService } from './../../services/rest-api.service';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  orderlist: any
  orderProduct: any

  constructor(public data: DataService, private rest: RestApiService) { }

  ngOnInit(): void {
    this.getOrders()
    // this.getOrderProduct()
    // this.orderlist =this.data.orderList
    // console.log("ddddddddddd",this.data.orderList);
  }

  getOrders() {
    this.data.getOrders()
  }

  async getOrderProduct() {
    await this.getOrders()
    console.log('111111111');

    for (let i = 0; i <= this.data.orderList.length; i++) {
      console.log(this.data.orderList[i].productid);

      const result: any = await this.rest.get(`http://localhost:3000/api/user/vieworderproduct/${this.data.orderList[i].productid[i]}`)
      console.log("result", result.data);
      this.orderProduct = result.data[i]

    }


  }



  async cancelOrder(id: any) {
    if (confirm("Are you sure to cancel this order")) {
      try {
        await this.rest.delete(`http://localhost:3000/api/user/cancelorder/${id}`)
        this.getOrders()
  
      } catch (error) {
        console.log(error);
  
      }

    }
   
  }

}
