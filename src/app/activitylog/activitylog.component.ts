import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css'],
})
export class ActivitylogComponent implements OnInit {
  searchText: any;
  page = 1;
  p: number = 1;
  collection!: any[];
  products: Products[] = [];
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res: { data: any }) => {
      console.log(res.data);
      this.products = res.data;
    });
  }
}
