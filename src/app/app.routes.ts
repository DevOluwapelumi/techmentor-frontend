import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { adminPrivateGuard } from './guards/admin-private.guard';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooTerComponent } from './foo-ter/foo-ter.component';

export const routes: Routes = [
    {path: '', component:LandingPageComponent},
    {path: 'nav', component:NavBarComponent},
    {path: 'foot', component:FooTerComponent},
    {path: 'login', component:LoginPageComponent},
    {path: 'register', component:RegisterPageComponent},
    {path: 'dashboard/:id', component:UserDashboardComponent},
    {path: 'admin', component:AdminDashboardComponent, canActivate: [adminPrivateGuard]},
];
