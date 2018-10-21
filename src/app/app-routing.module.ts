import { MessageEditComponent } from './components/message-edit/message-edit.component';
import { MessageComponent } from './components/message/message.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { ListEditComponent } from './components/list-edit/list-edit.component';
import { ListComponent } from './components/list/list.component';
import { BannerEditComponent } from './components/banner-edit/banner-edit.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentEditComponent } from './components/content-edit/content-edit.component';
import { ContentComponent } from './components/content/content.component';
import { SettingComponent } from './components/setting/setting.component';
import { PaymentmethodEditComponent } from './components/paymentmethod-edit/paymentmethod-edit.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryComponent } from './components/category/category.component';
// import { ProductComponent } from './components/product/product.component';
// import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guards';
import { PaymentmethodComponent } from './components/paymentmethod/paymentmethod.component';
import { OutletEditComponent } from './components/outlet-edit/outlet-edit.component';
import { InfoboxEditComponent } from './components/infobox-edit/infobox-edit.component';
import { InfoboxComponent } from './components/infobox/infobox.component';

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
        path: 'category',
        component: CategoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'category/:category',
        component: CategoryEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'infobox',
        component: InfoboxComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'infobox/:infobox',
        component: InfoboxEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'message',
        component: MessageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'message/:message',
        component: MessageEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'paymentmethod',
        component: PaymentmethodComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'paymentmethod/:paymentmethod',
        component: PaymentmethodEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'content',
        component: ContentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'content/:content',
        component: ContentEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'banner',
        component: BannerComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'banner/:banner',
        component: BannerEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'list',
        component: ListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'list/:list',
        component: ListEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'outlet',
        component: OutletComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'outlet/:outlet',
        component: OutletEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'setting',
        component: SettingComponent,
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
