import { Component, OnInit } from '@angular/core';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-productlog',
  templateUrl: './productlog.component.html',
  styleUrls: ['./productlog.component.css'],
})
export class ProductlogComponent implements OnInit {
  products: Products[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res: { data: any }) => {
      this.products = res.data;
    });
  }
}
