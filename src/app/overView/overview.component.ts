import { Component, OnInit } from '@angular/core';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';
import { UsersService } from '../Services/users.service';
import { Users } from '../user/user.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ApexChart, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  products: Products[] = [];
  user: Users = {
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    password: '',
    data: {},
  };

  chartSeries: ApexNonAxisChartSeries = [40,32,28,55];

  chartDetails: ApexChart  = {
    type: 'donut',
    toolbar: {
      show: true
    }
  }

  chartLabels = ["Available", "low", "Unavailable"];

  chartTitle: ApexTitleSubtitle={
     text: 'Inventory status levels',
     align: 'center'  
  }; 

  constructor(
    private productsService: ProductsService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.productsService.getAllProducts().subscribe({
  //     next: (products) => {
  //       console.log('*',products);
  //       this.products = products.data;
  //     },
  //     error: (response) => {
  //       console.log(response);
  //     }
  //   })
  // }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params: { get: (arg0: string) => any }) => {
        const id: any = params.get('id');
        console.log(id);
        if (id) {
          this.userService.getUser(id).subscribe((res) => {
            console.log(res);
            this.user = res.data;
          });
        }
      },
    });

    this.productsService.getAllProducts().subscribe((res: { data: any }) => {
      console.log(res.data);
      this.products = res.data;
    });
  }
}
