import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  RegForm: any = this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    cpassword: ['',[Validators.required,Validators.minLength(6)]],
    password: ['',[Validators.required,Validators.minLength(6)]],

  })

  constructor(private fb: FormBuilder, private rest: RestApiService,private router:Router) { }

  async register() {
    console.log("reg");

    try {
      if(this.RegForm.value.cpassword==this.RegForm.value.password){
        const data = await this.rest.post('http://localhost:3000/api/user/signup', this.RegForm.value)
        console.log(data);

        this.RegForm.reset()
        this.router.navigateByUrl('signin')

      }
     
      
    } catch (error) {
      console.log(error);

    }
  
    

  }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.router.navigateByUrl('user-dashboard')
    }
    console.log(this.RegForm);
    
  }

}
