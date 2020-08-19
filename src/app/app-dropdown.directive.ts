import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appAppDropdown]'
})
export class AppDropdownDirective {
  @HostBinding('class.open')  isOpen = false;
  @HostListener('document:click', ['$event']) function (event: Event){
    // console.log(event.target);
    // this.isOpen = !this.isOpen;
    // console.log(this.elRef.nativeElement.contains(event.target));
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }

}
