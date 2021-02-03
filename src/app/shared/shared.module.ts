import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import {ValidationService} from './services/validation.service';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [UsernameValidatorDirective],
  imports: [
    FormsModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    UsernameValidatorDirective,
    HttpClientModule
  ],
  providers: [
    ValidationService
  ]
})
export class SharedModule { }
