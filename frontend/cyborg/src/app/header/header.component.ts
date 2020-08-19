import { Component, OnInit } from '@angular/core';

import $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const header=document.querySelector("header");
    window.addEventListener("scroll",()=>{
        header.classList.toggle("change",window.scrollY>10);
        console.log(window.scrollY);
    });
    $(document).ready(function() {
      $("[data-trigger]").on("click", function(e){
          e.preventDefault();
          e.stopPropagation();
          var offcanvas_id =  $(this).attr('data-trigger');
          $(offcanvas_id).toggleClass("show");
          $('body').toggleClass("offcanvas-active");
          $(".screen-overlay").toggleClass("show");
      
      }); 
      $(document).on('keydown', function(event) {
          if(event.keyCode === 27) {
             $(".offcanvas").removeClass("show");
             $("body").removeClass("overlay-active");
          }
      });
      $(".btn-close, .screen-overlay").click(function(e){
        $(".screen-overlay").removeClass("show");
          $(".offcanvas").removeClass("show");
          $("body").removeClass("offcanvas-active");
      }); 
  }); // jquery end
  }

}
