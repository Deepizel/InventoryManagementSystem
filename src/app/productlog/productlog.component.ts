import { Component, OnInit } from '@angular/core';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productlog',
  templateUrl: './productlog.component.html',
  styleUrls: ['./productlog.component.css'],
})
export class ProductlogComponent implements OnInit {
  searchText: any;
  page = 1;
  p: number = 1;
  collection!: any[];
  products: Products[] = [];

  productDetails: Products = {
    id: 0,
    productName: '',
    quantity: 0,
    costPrice: 0,
    sellPrice: 0,
    margin: 0,
    category: '',
    updatedOn: '',
    data: '',
    totalAmount: 0,
    quantityNumber: 0,
  };

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res: { data: any }) => {
      this.products = res.data;
      console.log(res.data);
      this.page = 5;

      this.route.paramMap.subscribe({
        next: (params: { get: (arg0: string) => any }) => {
          const id: any = params.get('id');
          if (id) {
            this.productsService.getProduct(id).subscribe({
              next: (response) => {
                this.productDetails = response;
                this.page = 5;
              },
            });
          }
        },
      });
    });
  }

  updateProduct() {
    this.productsService
      .updateProduct(this.productDetails.id, this.productDetails)
      .subscribe({
        next: (_response) => {
          this.router.navigate(['overview/updateproduct/']);
        },
      });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe({
      next: (response) => {
        this.router.navigate(['productlog']);
      },
    });
  }
}
