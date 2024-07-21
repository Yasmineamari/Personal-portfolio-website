import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  configB: any;
  blogs: any = [];

  constructor(private profileService:ProfileService) { 
    
    
  }

  ngOnInit() {
    this.blogs = this.profileService.getBlogs()
    console.log(this.blogs)
    this.configB = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.blogs.length
    };
  }

  pageChangedB(event: any){
    this.configB.currentPage = event;
  }

}
