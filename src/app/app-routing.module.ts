import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LoginComponent } from './login/login.component';
import { VenderProductPageComponent } from './vender-product-page/vender-product-page.component';

import { VendorListComponent } from './vendor-list/vendor-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/login',pathMatch:'full'},
  {  path:'login',component:LoginComponent},
  {path:'vendor/:role',component:VendorListComponent},
  {path:'vp/:role',component:VenderProductPageComponent},
  {path:'product/:role',component: LaptopListComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
