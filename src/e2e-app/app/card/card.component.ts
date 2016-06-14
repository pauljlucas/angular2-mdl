import { Component } from '@angular/core';
import { MDL_DIRECTIVES } from '../../components';
import { PrismDirective } from './../prism/prism.component';

@Component({
  moduleId: module.id,
  selector: 'card-demo',
  templateUrl: 'card.component.html',
  directives: [
    MDL_DIRECTIVES,
    PrismDirective
  ],
})
export class CardDemo {

}