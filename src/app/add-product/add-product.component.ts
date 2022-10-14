import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductRequest: Products = {
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
    quantityNumber: 0
  };

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProduct() {
    this.productsService.addProduct(this.addProductRequest).subscribe({
      next: (product: any) => {
        this.router.navigate(['productlog']);
      },
    });
    console.log(this.addProductRequest);
  }

  simpleAlert() {
    Swal.fire('Product added');
  }
  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
  }

  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
