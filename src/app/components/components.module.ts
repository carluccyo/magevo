import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing }       from './components.routing';
import { Components } from './components.component';
import { NavbarComponent } from './navbar/navbar.component';

// TODO: tree component?
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    Components,
    NavbarComponent
  ]
})
export default class ComponentsModule {}
