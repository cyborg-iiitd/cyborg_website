import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

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
  }

}
