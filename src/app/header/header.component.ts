import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  title: string = "";

  @Output() 
  addViewSelected: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  
  constructor() { }

  goToView(view: string) {
    if(view==='home')
      this.addViewSelected.emit(false);
    else
      this.addViewSelected.emit(true);
  }

  
  
}
