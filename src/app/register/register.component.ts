import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { confirmPasswordValidation } from './confirm-password.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerResult: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.registerResult = false;
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }
  get email() {
    return this.registerForm.controls.email;
  }
  get password() {
    return this.registerForm.controls.password;
  }
  get confirmPassword() {
    return this.registerForm.controls.confirmPassword;
  }
  onSubmit() {
    let email = this.registerForm.value['email'];
    let password = this.registerForm.value['password'];
    this.userService.register({ email, password } as User).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      () => {
        this.registerResult = true;
      }
    );
  }
}
