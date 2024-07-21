import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  config: any;
  projects: any =[];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.projects = this.profileService.getProjects()
    console.log(this.projects)
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}