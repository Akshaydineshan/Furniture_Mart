import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  AddFurnitures: any = this.fb.group({
    title: [''],
    description: [''],
    category: [''],
    image: [''],
    status: [''],
    prize: [''],
   

  })

  constructor(private fb:FormBuilder,private rest:RestApiService,private router:Router) { }

  ngOnInit(): void {
  }

  async addFurnitures(){
  
    
    try{
      console.log("adddddddddddd",this.AddFurnitures);
    
      const data:any=await this.rest.post("http://localhost:3000/api/admin/addProduct",this.AddFurnitures.value)
    
      if(data['success']){
        this.router.navigateByUrl('admin/products')
      }

    }catch(error){
      console.log(error);
      
    }
  
      
  }




}
