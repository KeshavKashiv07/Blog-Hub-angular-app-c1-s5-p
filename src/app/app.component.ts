import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog Hub';
  addBlog: boolean = false;

  onAddViewSelected(selected: boolean){
    this.addBlog = selected;
  }
}
