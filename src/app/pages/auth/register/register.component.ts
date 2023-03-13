import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
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


  private initForm(): void {
    const fb = this.fb;
    this.registerForm = fb.group({
      fullName: fb.control(null, [Validators.required]),
      email: fb.control(null, [Validators.required, Validators.email]),
      password: fb.control(null, [Validators.required, Validators.minLength(8)]),
    })
  }
}
