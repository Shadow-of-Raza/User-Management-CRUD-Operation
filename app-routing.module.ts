import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListPaginationComponent } from './components/user-list-pagination/user-list-pagination.component';




const routes: Routes = [
  { path: '', component: UserListComponent  },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'edit/:userid', component: UserEditComponent },
  { path: 'user-delete/:id', component: UserDeleteComponent },
  { path: 'user-delete', component: UserDeleteComponent },
  { path: 'user-list-pagination', component: UserListPaginationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
