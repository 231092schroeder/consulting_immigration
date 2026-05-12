import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SmartFormComponent } from './pages/smart-form/smart-form.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  {
    path: '**', component: SmartFormComponent,
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Router { }
