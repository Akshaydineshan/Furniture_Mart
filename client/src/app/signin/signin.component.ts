import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  LoginForm: any = this.fb.group({

    email: ['',[Validators.required,Validators.email]],

    password: ['',[Validators.required,Validators.minLength(6)]],

  })
  constructor(private fb: FormBuilder, private rest: RestApiService,private router:Router,private dataS:DataService) { }

  ngOnInit(): void {
    console.log(this.LoginForm);
    
    if(localStorage.getItem("token")){
      this.router.navigateByUrl('user-dashboard')
    }
  }


  login = async () => {
    console.log(this.LoginForm.value);

    try {

      const data:any= await this.rest.post('http://localhost:3000/api/user/signin', this.LoginForm.value)
      console.log("kfdj", data);
      if(data['success'] ){
        if(data['user'].role =='user'){
          localStorage.setItem("token",data["token"])
          await this.dataS.getProfile()
         this.router.navigateByUrl('user-dashboard')
        }else if(data['user'].role =='admin'){
          localStorage.setItem("token",data["token"])
          await this.dataS.getProfile()
      
          this.router.navigateByUrl('admin-dashboard')
        }
        
      }


      this.LoginForm.reset()


    } catch (error) {
      console.log(error);

    }


  }

}
