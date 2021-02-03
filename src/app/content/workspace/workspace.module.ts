import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import {WorkspaceNavComponent} from './workspace-nav/workspace-nav.component';
import {WorkspaceViewComponent} from './workspace-view/workspace-view.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import { SearchBoxComponent } from './workspace-view/search-box/search-box.component';
import { UserItemComponent } from './workspace-view/users/user-item/user-item.component';
import {UsersComponent} from './workspace-view/users/users.component';
import {UsersService} from './workspace-view/users/users.service';



@NgModule({
  declarations: [
    WorkspaceComponent,
    WorkspaceNavComponent,
    WorkspaceViewComponent,
    SearchBoxComponent,
    UsersComponent,
    UserItemComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WorkspaceComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./workspace-view/users/users.module').then((m) => m.UsersModule)
          }
        ]
      }
    ])
  ],
  providers: [
    UsersService
  ]
})
export class WorkspaceModule { }
