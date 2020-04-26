import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  public currentBlog$: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private blogpostService: BlogpostService,
    private titleService: Title
  ) { 
    console.log('blog-detail component called')
  }

  ngOnInit() {

    console.log('blog-detail ngOnInit called')

    let myBlogId = this.route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    /*  this.currentBlog = this.blogpostService.getSingleBlogInformation(myBlogId).subscribe(
                data =>{
                  console.log(data);
                  this.currentBlog = data;}
                error =>{
                  console.log("some error occured");
                  console.log(error.errorMessage); }) */

    this.currentBlog$ = this.route.params.pipe(
      switchMap((params) =>
                    this.blogpostService.getSingleBlogInformation(params['blogId']))
                    );
    
    this.titleService.setTitle('Blog Detail');
  }

  ngOnDestroy(){
    ('blog-detail component destroyed')
  }

}
