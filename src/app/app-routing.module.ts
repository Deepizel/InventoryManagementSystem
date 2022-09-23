import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overView/overview.component';
import { ProductlogComponent } from './productlog/productlog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SupplierComponent } from './supplier/supplier.component';
import { TestsidenavComponent } from './testsidenav/testsidenav.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'overview/updateproduct/:id',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
