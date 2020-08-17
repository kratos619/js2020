import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';
  @ViewChild('newServerName') newServerName: ElementRef;

  onAddServer() {
    this.serverCreated.emit({
      serverName : this.newServerName.nativeElement.value,
      serverContent : this.newServerContent
    })
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName.nativeElement.value,
      serverContent: this.newServerContent
    })
  }


  ngOnInit(): void {
  }

}
