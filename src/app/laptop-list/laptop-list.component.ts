import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  products: Product[]=[];
  role!: string | null;
  showForm:boolean=false;
  forAd:boolean=false;
  product:Product=new Product();

  constructor(private productService:ProductServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.role=this.route.snapshot.paramMap.get('role');
    alert(this.role);
    if(this.role=="ADMIN"){
      this.forAd=true;
    }else if(this.role=="USER"){
      this.forAd=false;
    }
    this.getAllProduct();
  }
  private getAllProduct(){
    console.log("hii")
    this.productService.getAllVendorList().subscribe((data: Product[]) =>
      {this.products=data;
      console.log(data);
      })
  }

  showLapTopForm(){
    this.showForm=true;
  }

  submitLapTopForm(){
    console.log(this.product);
    this.products.push(this.product);
  }

}
