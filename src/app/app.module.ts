import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overView/overview.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { InventoryCatlgComponent } from './inventory-catlg/inventory-catlg.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReportComponent } from './report/report.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { InventoryReportComponent } from './inventory-report/inventory-report.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TestsidenavComponent } from './testsidenav/testsidenav.component';
import { ProductlogComponent } from './productlog/productlog.component';
import { AccountComponent } from './account/account.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SupplierComponent } from './supplier/supplier.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    //DashboardComponent,
    OverviewComponent,
    SalesHistoryComponent,
    InventoryCatlgComponent,
    MakeSaleComponent,
    ForgotpasswordComponent,
    SignUpComponent,
    ReportComponent,
    UpdateProductsComponent,
    InventoryReportComponent,
    AddProductComponent,
    NavbarComponent,
    SidenavComponent,
    TestsidenavComponent,
    ProductlogComponent,
    AccountComponent,
    LandingpageComponent,
    SupplierComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
