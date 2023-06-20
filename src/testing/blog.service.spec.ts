import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BlogService } from 'src/app/services/blog.service';

describe('BlogService', () => {
  let service: BlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET calls to server to fetch all blogs', () => {
    const blogs = [{
      "id": 400,
      "title": "Testing Levels",
      "author": "Jonathan S",
      "content": "Testing should be performed at various levels to ensure application runs correctly in all aspects",
      "date": "2018-12-1T05:32:42 -06:-30"
    }, {
      "id": 401,
      "title": "Benefits of Testing",
      "author": "Kayne D",
      "content": "The key benefit of testing is to ensure a bug free, quality product is delivered to the clients",
      "date": "2021-10-21T15:12:40 -06:-30"
    }]

    service.getAllBlogs().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(blogs);
      expect(data[0].id).toBe(400);
      expect(data[1].id).toBe(401);
    });

    const request = httpMock.expectOne("http://localhost:3000/blogs");
    expect(request.request.method).toBe("GET");
    request.flush(blogs);
  });

  it('should make POST calls to server to save blog', () => {
    const blog =  {
      "id": 500,
      "title": "TDD vs BDD",
      "author": "Alice J",
      "content": "This blog is written to highlight the key differences between BDD and TDD",
      "date": "2019-02-19T09:32:42 -06:-30"
    };

    service.saveBlog(blog).subscribe(data => {
      expect(data).toEqual(blog);
      expect(data.title).toEqual("TDD vs BDD");
    });

    const request = httpMock.expectOne("http://localhost:3000/blogs");
    expect(request.request.method).toBe("POST");
    request.flush(blog);
  });

  afterEach(()=>{
    httpMock.verify();
  });
});
