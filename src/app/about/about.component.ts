import { Component, OnInit } from '@angular/core';

import $ from "jquery";

import { data } from "../../assets/data"; // member data

import { Member } from "../../assets/member"; // member data

import { Alumni } from '../../assets/alumni'; // class

import { Alumni_data } from '../../assets/alumni_data'; // data

import { Carousel } from '../../assets/about_us_carousel_class';

import { Carousel_Data } from '../../assets/about_us_carousel_data';

// import Hovercard from "hovercard";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data=data;
  AlumniData=Alumni_data;
  carousel_data = Carousel_Data;
  members: Member[];
  alumni=[];
  carousel=[];
  constructor() {
    this.getMembers();
    this.getAlumni();
    this.getCarousel();
   }

  ngOnInit(): void {
    // const cards = new Hovercard();
    // const targets = document.querySelectorAll(".card");
    // const lazyload = target =>{
    //   const io = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry =>{
    //       if(entry.isIntersecting){
    //         const img = entry.target;
    //         // const src= img.getAttribute("data-lazy");
    //         // img.setAttribute('src', src);
    //         img.classList.add("fade");
    //         observer.disconnect();
    //       }
    //     });
    //   });
    //   io.observe(target);
    // } 
    // targets.forEach(lazyload);
  }
  // ngAfterViewChecked(): void{
  //   const targets = document.querySelectorAll(".card");
  //   const lazyload = target =>{
  //     const io = new IntersectionObserver((entries, observer) => {
  //       entries.forEach(entry =>{
  //         if(entry.isIntersecting){
  //           const img = entry.target;
  //           // const src= img.getAttribute("data-lazy");
  //           // img.setAttribute('src', src);
  //           img.classList.add("fade");
  //           observer.disconnect();
  //         }
  //       });
  //     });
  //     io.observe(target);
  //   } 
  //   targets.forEach(lazyload);
  // }
  temp:any;
  getMembers(){
    this.members=[];
    for(var i=0;i<data.length;i++){
      this.temp = new Member();
      this.temp.Name=data[i]["Name"];
      this.temp.Designation=data[i]["Designation"];
      this.temp.Branch=data[i]["Branch"];
      this.temp.Email=data[i]["Email Address"];
      this.temp.Github=data[i]["Github Account"];
      this.temp.Linkedin=data[i]["LinkedIn Profile"];
      this.temp.Interests=data[i]["Academic Interests"];
      this.temp.Image=data[i]['Image'];
      this.members.push(this.temp);
    }
  }
  
  getAlumni(){
    this.alumni=[];
    for(var i=0;i<Alumni_data.length;i++){
        this.temp=new Alumni();
        this.temp.Name= Alumni_data[i]["Name"];
        this.temp.image= Alumni_data[i]["image"];
        this.alumni.push(this.temp);
    }
  }

  getCarousel(){
    this.carousel=[];
    for(var i=0;i<this.carousel_data.length;i++){
        this.temp = new Carousel();
        this.temp.image = this.carousel_data[i].image;
        this.temp.description = this.carousel_data[i].description;
        this.carousel.push(this.temp);
    }
  }

  isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
}