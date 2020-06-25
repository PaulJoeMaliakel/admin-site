import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductListComponent } from './shopping/product-list/product-list.component';


const routes: Routes = [
  {path : '', component : UsersListComponent},
  {path : 'add-user', component : AddUsersComponent },
  {path : 'user-details/:id', component : UserDetailsComponent },
  {path : 'shopping', component : ShoppingComponent },
  {path : 'product-list/:id', component : ProductListComponent },



  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
