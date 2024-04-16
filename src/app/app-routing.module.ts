import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { Proj1Component } from './proj1/proj1.component';
import { CitedComponent } from './cited/cited.component';
import { StatementComponent } from './statement/statement.component';
import { Proj2Component } from './proj2/proj2.component';
import { Proj3Component } from './proj3/proj3.component';
import { Proj4Component } from './proj4/proj4.component';

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
    path: 'p2',
    component: Proj2Component
},
{
  path: 'p3',
  component: Proj3Component
},
{
  path: 'p4',
  component: Proj4Component
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
