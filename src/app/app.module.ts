import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { VenderProductPageComponent } from './vender-product-page/vender-product-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponent,
    VendorListComponent,
    LoginComponent,
    VenderProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
