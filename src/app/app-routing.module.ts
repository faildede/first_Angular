import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
 { path:'', component: HomeComponent},
 { path:'products', component: ProductsComponent},
 { path:'products/:id', component: ProductComponent},
 { path:'login', component: LoginComponent},
 { path:'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
