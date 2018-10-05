import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryComponent } from './components/category/category.component';
// import { ProductComponent } from './components/product/product.component';
// import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guards';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'categories',
        component: CategoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'category/:category',
        component: CategoryEditComponent,
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
