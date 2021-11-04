import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TestComponent } from './test/test.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TestComponent,
    ListUserComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    HomeComponent,
    FormUserComponent,
    LoginUserComponent,
    ParentComponent,
    FilsComponent,
    ListInvoiceComponent,
    EditInvoiceComponent,
    AddInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
