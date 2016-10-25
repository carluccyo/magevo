import { Routes, RouterModule }  from '@angular/router';

import { Components } from './components.component';
import { NavbarComponent } from './navbar/navbar.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Components,
    children: [
      { path: 'my-navbar', component: NavbarComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
