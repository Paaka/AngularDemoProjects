import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() currentEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  reciptesClicked(){
    this.currentEvent.emit("recipes");
  }

  shoppingClicked(){
    this.currentEvent.emit("shopping");
  }

}
