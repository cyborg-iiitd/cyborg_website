import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

import { Project } from '../../assets/project_class';
import { Projects_data } from '../../assets/project_data';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  markdown=`
  ##Hi
  `;
  data = Projects_data;
  project_class = Project;
  temp: Project;
  data_array=[];
  mdPath:String;
  constructor(
    private markdownService: MarkdownService
  ) { 
    this.getProjects();
  }

  ngOnInit(): void {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return '<h' + level + '>' +
               '<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">' +
                 '<span class="header-link"></span>' +
               '</a>' + text +
             '</h' + level + '>';
    };
    this.mdPath='';
  }
  getProjects(){
    for(var i=0;i<this.data.length;i++){
      this.temp = new Project();
      this.temp.Title = this.data[i].Title;
      this.temp.Description = this.data[i].Description;
      this.temp.Drive = this.data[i].Drive;
      this.temp.Github = this.data[i].Github;
      this.temp.Image = this.data[i].Image;
      this.temp.MDFilePath = this.data[i].MDFile;
      this.temp.Members = this.data[i].Members;
      // [];
      // for(var j=0;j<this.data[i].Members.length;j++){
      //   this.temp.Members.push(this.data[i].Members[j]);
      // }
      this.data_array.push(this.temp);
    }
  }
  fetchMd(a){
    this.mdPath=a;
  }
}
