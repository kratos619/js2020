import { Directive, OnInit, ElementRef } from "@angular/core"
// import { Element } from "@angular/compiler";

@Directive({
    selector : '[app-backgroud-change]'
})
export class BasicHighLightDirective implements OnInit{
    constructor(private elementRef : ElementRef) {}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = "tomato";
        this.elementRef.nativeElement.textContent = "change text content with direactives" ;
    }
}