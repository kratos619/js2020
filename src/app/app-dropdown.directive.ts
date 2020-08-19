import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appAppDropdown]'
})
export class AppDropdownDirective {
  @HostBinding('class.open')  isOpen = false;
  @HostListener('click') function (){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  constructor() { }

}
