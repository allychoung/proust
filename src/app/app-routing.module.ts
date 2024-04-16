import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { Proj1Component } from './proj1/proj1.component';
import { CitedComponent } from './cited/cited.component';
import { StatementComponent } from './statement/statement.component';

export const routes: Routes = [
  {
      path: '',
      component: IntroComponent
  },
  {
    path: 'statement',
    component: StatementComponent
},

  {
      path: 'p1',
      component: Proj1Component
  },
  {
    path: 'cited',
    component: CitedComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
