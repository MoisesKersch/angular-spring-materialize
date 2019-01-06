import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooComponent } from './pages/foo/foo.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [{
    path: 'register',
    component: RegisterComponent,
    data: {
        title: 'Register Page'
    }
},
{
    path: 'home',                 
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'foo',
        component: FooComponent
      }
    ]
},
{
    path: '',
    component: LoginComponent,
    data:
    {
        title: 'Login Page'
    }
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
