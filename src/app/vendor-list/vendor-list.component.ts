import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorServiceService } from '../vendor-service.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
   
  vendors!: Vendor[];
  role!: string | null;
  constructor(private vendorService:VendorServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.role=this.route.snapshot.paramMap.get('role');
    alert(this.role);
    this.getAllVendor();
  }
  private getAllVendor(){
    console.log("hii")
    this.vendorService.getAllVendorList().subscribe((data: Vendor[]) =>
      {this.vendors=data;
      })
  }

}
