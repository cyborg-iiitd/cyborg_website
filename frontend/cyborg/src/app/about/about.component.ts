import { Component, OnInit } from '@angular/core';

import $ from "jquery";

import { data } from "../../assets/data";

import { Member } from "../../assets/member";

import { Alumni } from '../../assets/alumni';

import { Alumni_data } from '../../assets/alumni_data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data=data;
  AlumniData=Alumni_data;
  members: Member[];
  alumni=[];
  constructor() {
    this.getMembers();
    this.getAlumni();
   }

  slides=[
    "../../assets/c3.png",
    "../../assets/c6.jpg",
    "../../assets/c10.jpg",
    "../../assets/c2.jpg",
    "../../assets/c4.png",
    "../../assets/c6.jpg",
    "../../assets/c8.jpg",
  ];
  ngOnInit(): void {
    // console.log(data);
    // const header=document.querySelector("header");
    // window.addEventListener("scroll",()=>{
    //   header.classList.toggle("change",window.scrollY>10);
    //   if(window.scrollY>600){
    //     $('.heading').addClass("relative");
    //   }
    //   else{
    //     $('.heading').removeClass("relative");
    //   }
    //   console.log(window.scrollY);
    // });
    const targets = document.querySelectorAll(".card");
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
    // $(document).ready(function() {
    //   if($(window).width() <= 800){
    //     $('#carousel').removeClass("container");
    //   }
    //   else{
    //     $('#carousel').removeClass("container");
    //     $('#carousel').addClass("container");

    //   }
    // });
  }
  
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

}