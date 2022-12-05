import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from '../product/product.module';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-staffpos',
  templateUrl: './staffpos.component.html',
  styleUrls: ['./staffpos.component.css'],
})
export class StaffposComponent implements OnInit {
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
  cartItems: Products[] = [];
  cartItemsTotal: any;
  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res: { data: any }) => {
      this.products = res.data;
      console.log(res.data);
      this.page = 5;
      this.cartItemsTotal = 0;
    });
  }


  addCartItem(id: number, quantityNumber: number, inStockNumber: number) {
    if (quantityNumber > 0 && quantityNumber <= inStockNumber) {
      if (this.cartItems.filter((x) => x.id === id).length > 0) {
        let item = this.cartItems.filter((x) => x.id === id)[0];
        item.quantityNumber++;
        //item.quantity--;
        item.totalAmount = item.quantityNumber * item.sellPrice;
        this.cartItemsTotal = this.cartItems
          .map((x) => x.totalAmount)
          .reduce((acc, curr) => acc + curr, 0);
      } else {
        this.productService.getProduct(id).subscribe({
          next: (response) => {
            response.data.totalAmount =
              quantityNumber * response.data.sellPrice;
            response.data.quantityNumber = quantityNumber;
            console.log('about to push');
            this.cartItems.push(response.data);

            console.log(this.cartItems);

            this.cartItemsTotal = this.cartItems
              .map((x) => x.totalAmount)
              .reduce((acc, curr) => acc + curr, 0);
            //this.page = 5;
          },
        });
      }

      console.log(this.cartItems);
    } else {
      alert('Invalid quantity');
    }
  }

  removeCartItem(id: number) {
    console.log(this.cartItems);
    this.cartItems = this.cartItems.filter((x) => x.id != id);
    this.cartItemsTotal = this.cartItems
      .map((x) => x.totalAmount)
      .reduce((acc, curr) => acc + curr, 0);
  }

  makeSale(cart: Array<any>) {
    cart.forEach((element) => {
      console.log(element);
      this.productService.updateProduct(element.id, element).subscribe();
    });
    //sale completed
  }
}
