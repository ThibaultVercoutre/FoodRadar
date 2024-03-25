import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ResearchComponent } from './research/research.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},  
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin} },
  { path: 'research', component: ResearchComponent, canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin} },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin} },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
