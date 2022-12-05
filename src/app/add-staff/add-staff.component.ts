import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductsService } from '../Services/products.service';
import { Staff } from '../staff/staff.module';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  addStaffRequest: Staff = {
    data: '',
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    updatedOn: '',
  };

  constructor(
    private productsService: ProductsService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  addStaff() {
    this.productsService.addStaff(this.addStaffRequest).subscribe({
      next: (product: any) => {
        this.route.navigate(['/overview']);
      },
    });
    console.log(this.addStaffRequest);
  }

  simpleAlert() {
    Swal.fire('Staff added');
  }
  alertWithSuccess() {
    Swal.fire('Thank you...', 'You created a new staff succesfully!', 'success');
  }
}
