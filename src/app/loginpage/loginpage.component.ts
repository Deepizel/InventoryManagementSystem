import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Login } from '../login/login.module';
import { ProductsService } from '../Services/products.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validator,
  Validators,
} from '@angular/forms';
import { Users } from '../user/user.module';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  loginUserRequest: Login = {
    id: 0,
    email: '',
    password: '',
    statusCode: '',
    message: '',
    data: {
      id: 0,
    },
  };
  
  // loginUserRequest: Login = {} as Login;

  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  LoginUser() {
    setTimeout(() => {
      console.log(this.loginForm);
      this.productsService.loginUser(this.loginUserRequest).subscribe({
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

            this.router.navigate([`overview/${res.data.id}`]);
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

  // loginUser() {
  //     this.productsService.loginUser(this.loginUserRequest).subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         if (res.code == '00') {
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: res.message,
  //             showConfirmButton: false,
  //             timer: 3000,
  //           });
  //           this.router.navigate([`overview`]);
  //         } else if(res.code === "02") {
  //           //alert('User already exists');
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'warning',
  //             title: res.message,
  //             showConfirmButton: false,
  //             timer: 3000,
  //           });

  //           // this.router.navigate(['employees']);
  //         }else{
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'error',
  //             title: res.message,
  //             showConfirmButton: false,
  //             timer: 3000,
  //           });
  //         }
  //       },
  //     });
  //     //defaultIfEmpty(this.alert=false);
  //     this.alert = true;
  //   }
  //   closeAlert() {
  //     this.alert = false;
  //   }
  // }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('invalid form');
      this.validateAllFormFields(this.loginForm);
      alert('your form is invalid');
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

//   const btn = document.getElementById('btn');
//   btn.addEventListener({ }: { ; }'click', function handleClick() {
//   btn.textContent = 'Button clicked';
// });
}
