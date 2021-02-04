import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {BackofficeComponent} from './backoffice.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {UsersService} from './services/users.service';
import {UsersComponent} from './content/users/users.component';
import {UserItemComponent} from './content/users/user-item/user-item.component';
import {SearchBoxComponent} from './content/search-box/search-box.component';
import { UsersFilterPipe } from './services/users-filter.pipe';


@NgModule({
  declarations: [
    BackofficeComponent,
    SidenavComponent,
    SearchBoxComponent,
    UsersComponent,
    UserItemComponent,
    UsersFilterPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BackofficeComponent,
      }
    ])
  ],
  providers: [
    UsersService
  ]
})
export class BackofficeModule { }
