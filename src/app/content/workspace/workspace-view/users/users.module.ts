import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import {SharedModule} from '../../../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {UsersService} from './users.service';
import { UsersFilterPipe } from './users-filter.pipe';



@NgModule({
  declarations: [UsersFilterPipe],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      }
    ])
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
