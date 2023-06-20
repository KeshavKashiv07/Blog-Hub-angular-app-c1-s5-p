import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewBlogsComponent } from 'src/app/view-blogs/view-blogs.component';
import { BlogService } from 'src/app/services/blog.service';
import { BlogServiceStub } from './blogServiceStub';
import { FormsModule } from '@angular/forms';
import { throwError } from 'rxjs';

describe('ViewBlogsComponent', () => {
  let component: ViewBlogsComponent;
  let fixture: ComponentFixture<ViewBlogsComponent>;
  let blogService: BlogService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ViewBlogsComponent],
      providers: [{ provide: BlogService, useClass: BlogServiceStub }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewBlogsComponent);
    blogService = fixture.debugElement.injector.get(BlogService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getAllBlogs() when the component is created', () => {
    const spy = spyOn(blogService, "getAllBlogs").and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getAllBlogs() and raise alert when server returns error while posting blog', () => {
    const spy = spyOn(blogService, "getAllBlogs").and.returnValue(throwError(() => "Error while fetching blog data !!!"));
    spyOn(window, "alert");

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Error while fetching blog data !!!");

  });
});
