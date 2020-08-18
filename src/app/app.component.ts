import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app-angular-nine';
  title_new = 'my-first-app-angular-nine';
  loadedComponent ='recipe'; 
  componentNavigate(componentName : string){
    this.loadedComponent = componentName; 
  }
}
