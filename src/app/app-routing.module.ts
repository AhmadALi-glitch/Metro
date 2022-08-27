import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';
import { MeComponent } from './pages/me/me.component';
import { LoginComponent } from './pages/login/login.component';
import { PeopleComponent } from './pages/people/people.component';
import { UserPageComponent } from './metro-templates/user-page/user-page.component';

const routes: Routes = [
  { path : "", component:HomeComponent},
  { path: 'home', component: HomeComponent},
  { path:"explore", component:PeopleComponent},
  { path: 'sign', component: SignComponent },
  { path: 'login', component: LoginComponent },
  { path: 'me', component: MeComponent},
  { path: "page/:id", component:UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
