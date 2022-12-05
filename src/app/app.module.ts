import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { NgApexchartsModule } from 'ng-apexcharts';
import { UserLogsComponent } from './user-logs/user-logs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffSidebarComponent } from './staff-sidebar/staff-sidebar.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffproductlogComponent } from './staffproductlog/staffproductlog.component';
import { StaffposComponent } from './staffpos/staffpos.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { ActivitylogComponent } from './activitylog/activitylog.component';
import { AuditComponent } from './audit/audit.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';

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
    UserLogsComponent,
    SidebarComponent,
    StaffDashboardComponent,
    StaffSidebarComponent,
    AddStaffComponent,
    StaffproductlogComponent,
    StaffposComponent,
    StaffLoginComponent,
    ActivitylogComponent,
    AuditComponent,
    OffcanvasComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
