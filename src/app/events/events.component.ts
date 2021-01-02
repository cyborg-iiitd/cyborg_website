import { Component, OnInit } from '@angular/core';

import { Event } from '../../assets/events_class';
import { Event_data } from '../../assets/events_data';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  
  data = Event_data;
  event_class = Event;
  temp: Event;
  data_array=[];
  
  constructor() { }

  ngOnInit(): void {
    this.getProjects();
    this.addAnimation();
  }

  getProjects(){
    for(var i=0;i<this.data.length;i++){
      this.temp = new Event();
      this.temp.Title = this.data[i].Title;
      this.temp.Description = this.data[i].Description;
      this.temp.Drive = this.data[i].Drive;
      this.temp.Github = this.data[i].Github;
      this.temp.Image = this.data[i].Image;
      this.temp.Date = this.data[i].Date;
      this.data_array.push(this.temp);
    }
    console.log(this.data_array);
  }

 addAnimation()
 {
    var paths = document.querySelectorAll('.st0');

    [].forEach.call(paths, function(path) {
      var length = path.getTotalLength();
      path.style.transition = path.style.WebkitTransition = 'none';
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    
      path.style.strokeDashoffset = '0';
    })    
 }
}
