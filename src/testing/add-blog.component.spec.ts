import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddBlogComponent } from  'src/app/add-blog/add-blog.component';

import { FormsModule } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { BlogServiceStub } from './blogServiceStub';
import { throwError } from 'rxjs';

describe('AddBlogComponent', () => {
  let component: AddBlogComponent;
  let fixture: ComponentFixture<AddBlogComponent>;
  let blogService: BlogService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [AddBlogComponent],
      imports: [FormsModule],
      providers: [{ provide: BlogService, useClass: BlogServiceStub }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddBlogComponent);
    blogService = fixture.debugElement.injector.get(BlogService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveBlog() and raise alert when server successfully posts blog', () => {
    const spy = spyOn(blogService, "saveBlog").and.callThrough();
    spyOn(window, "alert"); 

    let button = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler("click", null);
    expect(window.alert).toHaveBeenCalledWith("Blog added");

    expect(spy).toHaveBeenCalled();
  });

  it('should call saveBlog() and raise alert when server returns error while posting blog', () => {
    const spy = spyOn(blogService, "saveBlog").and.returnValue( throwError(()=>"Error while adding blog data !!"));
    spyOn(window, "alert"); 

    let button = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler("click", null);
    expect(spy).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Error while adding blog data !!");

  });
});
