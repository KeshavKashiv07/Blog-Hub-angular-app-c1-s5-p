import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog_url: string = "http://localhost:3000/blogs";
  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<Blog[]>{
       return this.http.get<Blog[]>(this.blog_url);
    }

  saveBlog(blog: Blog): Observable<Blog> {
      return this.http.post<Blog>(this.blog_url, blog);
    }  
}
