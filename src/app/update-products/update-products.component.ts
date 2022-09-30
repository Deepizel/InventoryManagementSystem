import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css'],
})
export class UpdateProductsComponent implements OnInit {
  updateDetails: Products = {
    id: 0,
    productName: '',
    quantity: 0,
    costPrice: 0,
    sellPrice: 0,
    margin:0,
    category: '',
    updatedOn: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router
  ) {}

  // updateProduct: Products {
  //   id: 0,
  //   productName: "",
  //   quantity: 0,
  //   price: 0,
  //   category: ''
  // };

  ngOnInit(): void {
    //  this.route.paramMap.subscribe({
    //   next: (params) => {
    //     const id = params.get('id');

    //     if (id) {
    //       this.productservice.getProduct('id')
    //         .subscribe({
    //         next: (response) => {
    //           this.updateDetails = response;
    //         },
    //       });
    //     }
    //   }
    // });
    this.route.paramMap.subscribe({
      next: (params: { get: (arg0: string) => any }) => {
        const id: any = params.get('id');
        if (id) {
          this.productservice.getProduct(id).subscribe({
            next: (response) => {
              this.updateDetails = response;
            },
          });
        }
      },
    });
  }

  updateProduct() {
    this.productservice
      .updateProduct(this.updateDetails.id, this.updateDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['addproduct']);
        },
      });
  }

  // updateProduct() {
  //   this.productservice
  //     .updateProduct(this.updateDetails.id, this.updateDetails)
  //     .subscribe({
  //       next: (_response) => {
  //         this.router.navigate(['productlog']);
  //       },
  //     });
  // }
}
