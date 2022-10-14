import { Component, OnInit } from '@angular/core';
import { Suppliers } from './supplier.module';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  addSupplierRequest: Suppliers = {
    id: 0,
    product: '',
    companyName: '',
    email: '',
    phoneNumber: 0,
    category: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
