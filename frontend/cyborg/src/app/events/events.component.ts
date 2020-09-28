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
    const targets = document.querySelectorAll(".events");
    const lazyload = target =>{
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry =>{
          if(entry.isIntersecting){
            const img = entry.target;
            // const src= img.getAttribute("data-lazy");
            // img.setAttribute('src', src);
            img.classList.add("fade");
            observer.disconnect();
          }
        });
      });
      io.observe(target);
    } 
    targets.forEach(lazyload);
    this.getProjects();
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

}
