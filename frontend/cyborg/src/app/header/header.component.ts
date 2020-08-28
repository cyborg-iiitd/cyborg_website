import { Component, OnInit } from '@angular/core';

import $ from "jquery";
// declare var $:JQueryStatic;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
    $(document).ready(function() {
      if($(window).width() <= 800){
        $(".offcanvas").removeClass("show");
        $("i").removeClass("hide");
      }
      else{
        $("i").addClass("hide");
        $(".offcanvas").addClass("show");
        
      }
      $("[data-trigger]").on("click", function(e){
          if($(window).width() <= 1000){
            // $('#div2').toggle({"display":"block"});
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id =  $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass("show");
            $('body').toggleClass("offcanvas-active");
            $(".screen-overlay").toggleClass("show");
            $('span').toggleClass("rotate");
          }
      }); 
      $(document).on('keydown', function(event) {
          if(event.keyCode === 27 && $(window).width() <= 800) {
             $(".offcanvas").removeClass("show");
             $("body").removeClass("overlay-active");
            $('span').toggleClass("rotate");

          }
      });
      $(".btn-close, .screen-overlay").click(function(e){
        if($(window).width() <= 1000){
          $(".screen-overlay").removeClass("show");
          $(".offcanvas").removeClass("show");
          $("body").removeClass("offcanvas-active");
          $('span').toggleClass("rotate");

        }
      }); 
      }); // jquery end

      // window.onscroll = function() {scrollFunction()};

      // function scrollFunction() {
      //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      //     document.getElementById("navbar").style.padding = "30px 10px";
      //     document.querySelector("h1").style.fontSize = "40px";
      //   } else {
      //     document.getElementById("navbar").style.padding = "80px 10px";
      //     document.querySelector("h1").style.fontSize = "50px";
      //   }
      // }

  }

}
