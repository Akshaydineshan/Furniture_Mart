import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-selectproduct',
  templateUrl: './selectproduct.component.html',
  styleUrls: ['./selectproduct.component.css']
})
export class SelectproductComponent implements OnInit {
selectedProduct:any
qty:any
  constructor(private data:DataService,private router:Router) { }

  ngOnInit(): void {
    this.selectedProduct=this.data.selectProduct
    console.log('selected click',this.selectedProduct);
    
  }

  
  addToCart(item: any) {
    console.log("inside add cart",item);
    // item['prize'] =
    
    this.data.setCart(item)


    this.router.navigateByUrl('user-mycart')


  }

}
