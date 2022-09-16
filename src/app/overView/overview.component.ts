import { Component, OnInit } from '@angular/core';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  products: Products[] = [];

  constructor(private productsService: ProductsService) {}

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
    this.productsService.getAllProducts().subscribe(
      (res: { data: any; }) => { this.products = res.data; }
      
    );
  }
}
