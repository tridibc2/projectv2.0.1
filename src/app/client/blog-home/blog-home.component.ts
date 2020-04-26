import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  public allBlogs;

  constructor(public blogpostService:BlogpostService) { 
  console.log('Home component constructor called');
}

ngOnInit() {
  console.log("home onInIt called")
  this.allBlogs = this.blogpostService.getAllBlogs().subscribe(

    data =>{
      console.log(data);
      this.allBlogs = data["data"];
    },
    error =>{
      console.log("some error occured");
      console.log(error.errorMessage);
    }
  )

  console.log(this.allBlogs);
  
}

ngOnDestroy() {
  console.log("home component destroyed")
}

}
