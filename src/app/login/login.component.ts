import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;
  data: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get formControls() {
    return this.authForm.controls;
  }
  signIn() {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signIn(this.authForm.value).subscribe(
      (data) => {
        this.data = data;
        if (this.data.token) {
          localStorage.setItem('ACCESS_TOKEN', this.data.token);
          this.router.navigateByUrl('/dashboard');
        }
        console.log(data);
      },
      (error) => {
        console.log(error.error);
        alert(error.error.detail[0]);
      }
    );
  }
}
