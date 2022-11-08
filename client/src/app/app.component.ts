import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { RestApiService } from './services/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  checkstring: String = "user"
  istoken: Boolean = false
  count:any;

  constructor(public data: DataService, public router: Router, private rest: RestApiService) {

    this.data.getProfile()
    this.cartCount()
   


    if (localStorage.getItem("token")) {
      this.istoken = true
    }


    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (val.url.includes('admin')) {
          this.checkstring = "admin"

        }

      }
    })
    // this.cartCount()
  }

  


  logout() {
    if (confirm("are you sure to logout")) {

      localStorage.removeItem("token")
      // this.data.loginUserDetails={}
      this.router.navigateByUrl('signin')
      // window.location.reload()

    }



  }
  async cartCount() {
    console.log("inside cartcount");
    console.log("jhjj", this.data.loginUserDetails);

    const data: any = await this.rest.get(`http://localhost:3000/api/user/viewcart/636787ca695eb10b8c48ff7d`)
    console.log("ffffffffff", data);
     this.count=data.data.length

  }



  title = 'client';






}
