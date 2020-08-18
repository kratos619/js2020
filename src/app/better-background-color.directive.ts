import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterBackgroundColor]'
})
export class BetterBackgroundColorDirective implements OnInit {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
    console.log('this render',this.renderer);
    console.log('this eleRef',this.eleRef);
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
  }

  // @HostListener('click') click(eventData :Event){
  //   this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
  // }

}
