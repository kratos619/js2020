import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{
    @Output() componentSeleted = new EventEmitter<string>();
    constructor() { }
    loadComponent(component_type : string){
        console.log(component_type);
        this.componentSeleted.emit(component_type)
    }
    
}