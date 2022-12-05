import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    margin: 0,
    category: '',
    updatedOn: '',
    data: '',
    totalAmount: 0,
    quantityNumber: 0,
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
    this.route.paramMap.subscribe({
      next: (params: { get: (arg0: string) => any }) => {
        const id: any = params.get('id');
        if (id) {
          this.productservice.getProduct(id).subscribe({
            next: (response) => {
              this.updateDetails = response.data;
            },
          });
        }
      },
    });
  }

  // updateProduct() {
   
  // }

  getProductById(id: any) {
    this.productservice.getProduct(id).subscribe({
      next: (res) => {
        console.log(res, 'CHECKING PRODUCT BY ID');
      },
    });
    console.log(this.updateDetails);
  }

  simpleAlert() {
    Swal.fire('Product added');
  }
  alertWithSuccess() {
    Swal.fire('Thank you...', 'Update successful!', 'success');
  }

  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to update this listing?',
      text: 'You will not be able to revert changes!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
         this.productservice
           .updateProduct(this.updateDetails.id, this.updateDetails)
           .subscribe({
             next: (response) => {
               this.router.navigate(['productlog']);
               console.log('checking the update user', response);
             },
           });
        Swal.fire(
          'Updated!',
          'product listing has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Update cancelled :)', 'error');
      }
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
