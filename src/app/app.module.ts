import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor, ErrorInterceptor } from './helpers';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { PaymentmethodComponent } from './components/paymentmethod/paymentmethod.component';
import { PaymentmethodEditComponent } from './components/paymentmethod-edit/paymentmethod-edit.component';
import { SettingComponent } from './components/setting/setting.component';
import { ContentComponent } from './components/content/content.component';
import { ContentEditComponent } from './components/content-edit/content-edit.component';

import { QuillModule } from 'ngx-quill';
import { SortablejsModule } from 'angular-sortablejs';
import { AgmCoreModule } from '@agm/core';

import { BannerComponent } from './components/banner/banner.component';
import { BannerEditComponent } from './components/banner-edit/banner-edit.component';
import { ListEditComponent } from './components/list-edit/list-edit.component';
import { ListComponent } from './components/list/list.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { OutletEditComponent } from './components/outlet-edit/outlet-edit.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CategoryComponent,
    CategoryEditComponent,
    PaymentmethodComponent,
    PaymentmethodEditComponent,
    SettingComponent,
    ContentComponent,
    ContentEditComponent,
    BannerComponent,
    BannerEditComponent,
    ListEditComponent,
    ListComponent,
    OutletComponent,
    OutletEditComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    QuillModule,
    SortablejsModule.forRoot({ animation: 150 }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDM56_qNOsN6oNmaRapcWK5rZbFK69K6co'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
