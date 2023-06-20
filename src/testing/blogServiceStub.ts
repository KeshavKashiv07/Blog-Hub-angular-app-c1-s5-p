import { of } from "rxjs";
import { Blog } from "src/app/models/blog";

export class BlogServiceStub {
    getAllBlogs() {
        return of([] as Blog[]);
    }

    saveBlog() {
        return of({} as Blog);
    }
}