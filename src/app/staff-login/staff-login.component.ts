import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Login } from '../login/login.module';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css'],
})
export class StaffLoginComponent implements OnInit {
  staffUserRequest: Login = {
    id: 0,
    email: '',
    password: '',
    statusCode: '',
    message: '',
    data: {
      id: 0,
    },
  };

  isLoading = false;

  toggleLoading = () => {
    this.isLoading = true;
  };
  staffloginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.staffloginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  LoginUser() {
    setTimeout(() => {
      console.log(this.staffloginForm);
      this.productsService.stafflogin(this.staffUserRequest).subscribe({
        next: (res) => {
          console.log(res);
          if (res.statusCode == '00') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Logged in successfully',
              showConfirmButton: false,
              timer: 0,
            });
            console.log(res.data.id, 'CHK----');
            this.router.navigate([`staffdashboard/${res.data.id}`]);
          } else if (res.statusCode == '01') {
            Swal.fire({
              icon: 'warning',
              title: 'Warning',
              text: res.message,
              // footer: '<a href="">Why do I have this issue?</a>',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: res.message,
              // footer: '<a href="">Why do I have this issue?</a>',
            });
          }
        },
      });
    }, 1500);
  }

  // private validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach((field) => {
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsDirty({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     }
  //   });
  // }
}
