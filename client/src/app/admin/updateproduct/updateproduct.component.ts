import { RestApiService } from './../../services/rest-api.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
EditFurnitures: any = this.fb.group({
    title: [''],
    description: [''],
    category: [''],
    image: [''],
    status: [''],
    prize: [''],
   

  })
  updateid:any

  constructor(private fb:FormBuilder,private router:ActivatedRoute,private rest:RestApiService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.updateid=params['id']
      this.getDetails(params['id'])
      
    })
  }

 async getDetails(id:any){
  console.log("get",id);
  

    const data:any=await this.rest.get(`http://localhost:3000/api/admin/getproduct/${id}`)
    console.log("id details",data.data);
    this.EditFurnitures.patchValue(data.data)
    
      
  }


  async editFurnitures(){
   console.log("iddd",this.updateid);
   console.log(this.EditFurnitures.value);
   
   
     
      const data:any=await this.rest.put(`http://localhost:3000/api/admin/updateproduct/${this.updateid}`,this.EditFurnitures.value)
      console.log("final",data);
      
    
 
 
    console.log(this.EditFurnitures.value)
      //  const data:any=await this.rest.update

  }

}
