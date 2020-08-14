import { Component } from '@angular/core';

@Component({
    selector: 'server-component',
    templateUrl : "./server.component.html",
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverId = 10;
    serverStat = 'offline';
    nameChange = '';

    getServerStat(){
        return this.serverStat;
    }

    changeServerStat(){
        return this.serverStat = 'online'
    }

    onInputChange(event){
        console.log(event.target.value);
        this.nameChange = event.target.value;
    }

}