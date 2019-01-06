import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';

import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './theme/components/header/header.component';
import { MenuComponent } from './theme/components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from '../app/auth/interceptor';

import { AuthService } from '../app/services/auth.service';
import { FooComponent } from './pages/foo/foo.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        HomeComponent,
        HeaderComponent,
        MenuComponent,
        LoginComponent,
        FooComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DataTablesModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }