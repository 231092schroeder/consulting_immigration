import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SmartFormComponent } from './pages/smart-form/smart-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';


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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Router { }
