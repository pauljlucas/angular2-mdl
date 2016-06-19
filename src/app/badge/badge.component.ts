import { Component } from '@angular/core';
import { MDL_DIRECTIVES } from '../../components';
import { PrismComponent } from './../prism/prism.component';

@Component({
  moduleId: module.id,
  selector: 'badge-demo',
  templateUrl: 'badge.component.html',
  directives: [
    MDL_DIRECTIVES,
    PrismComponent
  ],
})
export class BadgeDemo {
  badgeCount = 1;
}