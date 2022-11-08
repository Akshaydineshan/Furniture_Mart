import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersList:any
  constructor(private rest:RestApiService) { }
 
  ngOnInit(): void {
    this.viewUsers()
  }

  async viewUsers(){
    try{
     const users:any=await this.rest.get('http://localhost:3000/api/admin/viewUsers')
     console.log("users",users);
     this.usersList=users.users
     
    }catch(error){
      console.log(error);
      
    }
       
  }


  async deleteUser(id:any){
    if(confirm(`are you sure to delete ${id}  of user`)){
      await this.rest.delete(`http://localhost:3000/api/admin/deleteuser/${id}`)
      this.viewUsers()
    }
   
  }

}
