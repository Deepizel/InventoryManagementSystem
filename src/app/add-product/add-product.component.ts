import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  addProductRequest: Products = {
    id: 0, 
    productName: '',
    quantity: 0,
    price: 0,
    category: '',
    
  };
  
  constructor( private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.productsService.addProduct(this.addProductRequest)
      .subscribe({
        next: (product: any) => {
          this.router.navigate(['dashboard']);
      }
    })
    console.log(this.addProductRequest);
  }
}
