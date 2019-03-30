import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'welcome',
        redirectTo: 'welcome/0'
      },
      {
        path: 'welcome/:index',
        component: WelcomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}
