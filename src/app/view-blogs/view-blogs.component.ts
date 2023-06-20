import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe({
        next: data => {
          this.blogs = data;
        },
        error: error => {
          alert("Error while fetching blog data !!!");
        }
      });
  }

}
