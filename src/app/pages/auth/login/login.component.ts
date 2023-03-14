import { DestroySubscription } from './../../../shared/helpers/destroy-subscription';
import { ApiService } from './../../../shared/services/api.service';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends DestroySubscription implements OnInit {
  loginForm!: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;


  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private apiService: ApiService, private router: Router, private snackBar: MatSnackBar) {
    super();
    this.initForm();
  }

  ngOnInit(): void {
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  send() {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const formData = this.loginForm.getRawValue();

    this.apiService.login(formData).pipe(takeUntil(this.destroyStream$)).subscribe(data => {
      this.router.navigate(['/']);
    }, (err) => {
      this.snackBar.open('User not found(');
    });
  }

  private initForm(): void {
    const fb = this.fb;
    this.loginForm = fb.group({
      email: fb.control(null, [Validators.required, Validators.email]),
      password: fb.control(null, [Validators.required, Validators.minLength(8)]),
    })
  }

}
