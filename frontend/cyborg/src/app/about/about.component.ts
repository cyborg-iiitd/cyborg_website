import { Component, OnInit } from '@angular/core';

import $ from "jquery";
// declare var $:JQueryStatic;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

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
    const header=document.querySelector("header");
    window.addEventListener("scroll",()=>{
      header.classList.toggle("change",window.scrollY>10);
      if(window.scrollY>600){
        $('.heading').addClass("relative");
      }
      else{
        $('.heading').removeClass("relative");

      }
      console.log(window.scrollY);
    });
    $(document).ready(function() {
      if($(window).width() <= 800){
        $('#carousel').removeClass("container");
      }
      else{
        $('#carousel').removeClass("container");
        $('#carousel').addClass("container");

      }
    });
  }

}