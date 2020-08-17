import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server",name : "this is name",content : "content"}];

  onAddServerAdded(serverData : {serverName : string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBlueprintAdded(bulePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bulePrintData.serverName,
      content: bulePrintData.serverContent
    });
  }
}
