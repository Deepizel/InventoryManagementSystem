import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
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
  signupForm!: FormGroup;
  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      businessname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

   onSubmit(){
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('invalid form');
      this.validateAllFormFields(this.signupForm);
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
}
