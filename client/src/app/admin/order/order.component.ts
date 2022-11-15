import { RestApiService } from './../../services/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  allOrders:any

  constructor(private rest:RestApiService) { }

  ngOnInit(): void {
    this.getOrders()
  }

 async getOrders(){
     const data:any=await this.rest.get('http://localhost:3000/api/admin/vieworders')
     console.log("dataaaaa",data.orders);
     this.allOrders=data.orders
     
  }


  async orderDetails(item:any){
    console.log("dsjhvjdv",item);
    
    
  }

}
