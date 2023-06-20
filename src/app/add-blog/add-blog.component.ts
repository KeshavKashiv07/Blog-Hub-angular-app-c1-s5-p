import { Component , OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{

  blog: Blog = {};
  constructor(private blogService: BlogService) { }

  saveBlog() {
    this.blogService.saveBlog(this.blog).subscribe({
          next: data => {
              alert("Blog added");
           },
          error: error => {
             alert("Error while adding blog data !!");
            }
          });
  }
}
