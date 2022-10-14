import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { Users } from '../user/user.module';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  addUserRequest: Users = {
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    password: '',
    data: {},
  };

  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private UsersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      businessname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  addUser() {
    this.UsersService.addUser(this.addUserRequest).subscribe({
      next: (Users: any) => {
        this.router.navigate(['login']);
      },
    });
    console.log(this.addUserRequest);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('invalid form');
      this.validateAllFormFields(this.signupForm);
      alert('your form is invalid');
    }
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
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
}
