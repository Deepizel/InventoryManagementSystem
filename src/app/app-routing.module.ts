import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ActivitylogComponent } from './activitylog/activitylog.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AuditComponent } from './audit/audit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overView/overview.component';
import { ProductlogComponent } from './productlog/productlog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffposComponent } from './staffpos/staffpos.component';
import { StaffproductlogComponent } from './staffproductlog/staffproductlog.component';
import { SupplierComponent } from './supplier/supplier.component';
import { TestsidenavComponent } from './testsidenav/testsidenav.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { UserLogsComponent } from './user-logs/user-logs.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'overview/:id',
    component: OverviewComponent,
  },
  {
    path: 'productlog/updateproduct/:id',
    component: UpdateProductsComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
  },
  {
    path: 'makesale',
    component: MakeSaleComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'nav',
    component: SidenavComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'home',
    component: LandingpageComponent,
  },
  {
    path: 'navbarr',
    component: NavbarComponent,
  },
  {
    path: 'login',
    component: LoginpageComponent,
  },
  {
    path: 'suppliers',
    component: SupplierComponent,
  },
  {
    path: 'productlog',
    component: ProductlogComponent,
  },
  {
    path: 'userlogs',
    component: UserLogsComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'staffdashboard/:id',
    component: StaffDashboardComponent,
  },
  {
    path: 'addStaff',
    component: AddStaffComponent,
  },
  {
    path: 'audit',
    component: AuditComponent,
  },
  {
    path: 'staffproductlog',
    component: StaffproductlogComponent,
  },
  {
    path: 'activitylog',
    component: ActivitylogComponent,
  },
  {
    path: 'staffpointofsale',
    component: StaffposComponent,
  },
  {
    path: 'stafflogin',
    component: StaffLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
