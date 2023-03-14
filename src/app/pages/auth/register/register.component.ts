import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { ApiService } from 'src/app/shared/services/api.service';
import { DestroySubscription } from 'src/app/shared/helpers/destroy-subscription';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends DestroySubscription implements OnInit {
  registerForm!: FormGroup;

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
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const payload = this.registerForm.getRawValue();

    this.apiService.register(payload).pipe(takeUntil(this.destroyStream$)).subscribe(data => {
      this.router.navigate(['/']);
    }, (err) => {
      this.snackBar.open(err.message);
    })

  }

  private initForm(): void {
    const fb = this.fb;
    this.registerForm = fb.group({
      fullName: fb.control(null, [Validators.required]),
      email: fb.control(null, [Validators.required, Validators.email]),
      password: fb.control(null, [Validators.required, Validators.minLength(8)]),
    })
  }
}
