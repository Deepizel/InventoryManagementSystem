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
    price: 0,
    category: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductsService, private router:Router
  ) { }

  // updatenewProduct: Products = {
  //   id: 0,
  //   productName: "",
  //   quantity: 0,
  //   price: 0,
  //   category: ''
  // };


  ngOnInit(): void { 
  }

  updateProduct() {
     this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.productservice.getProduct(id)
            .subscribe({
            next: (response) => {
              this.updateDetails = response;
            },
          });
        }
      }
    });
 }
}
