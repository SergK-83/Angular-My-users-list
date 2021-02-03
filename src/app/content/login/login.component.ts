import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ValidationService} from '../../shared/services/validation.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username = new FormControl();
  public password = new FormControl();
  public response = {};

  constructor(
    private router: Router,
    private validationService: ValidationService
  ) {}


  public login(form: NgForm): any {
    this.validationService.checkUser(form.value).subscribe(
      res => {
        if (!res.data) {
          this.router.navigate(['/workspace']);
        } else {
          if (res.data.username) {
            form.form.controls.username.setErrors({username: res.data.username});
          }
          if (res.data.password) {
            form.form.controls.password.setErrors({password: res.data.password});
          }
        }
      },
      err => console.log('err:', err)
    );
  }

}
