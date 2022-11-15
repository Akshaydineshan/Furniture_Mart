import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Furnitures: any

  constructor(private rest: RestApiService) { }

  ngOnInit(): void {
    this.getAllProduct()

  }

  async getAllProduct() {
    try {
      const data: any = await this.rest.get('http://localhost:3000/api/admin/viewproduct')
      console.log("furnitures", data);

      this.Furnitures = data.products
    } catch (error) {
      console.log(error);

    }


  }

  async delete(id:any){
    console.log(id);
    if(confirm("are you sure to delete")){
      const delp:any=await this.rest.delete(`http://localhost:3000/api/admin/deleteproduct/${id}`)
      console.log("delp",delp);
      

    }
    
   
  }

}
