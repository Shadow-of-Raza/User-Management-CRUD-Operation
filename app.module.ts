import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListPaginationComponent } from './components/user-list-pagination/user-list-pagination.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserListPaginationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
