import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SmartFormComponent } from './pages/smart-form/smart-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FrancaComponent } from './pages/franca/franca.component';
import { PortugalComponent } from './pages/portugal/portugal.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'smart-form',
    component: SmartFormComponent
  },
  {
    path: 'franca',
    component: FrancaComponent
  },
  {
    path: 'portugal',
    component: PortugalComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Router { }
