import { Component, OnInit } from '@angular/core';

import $ from "jquery";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      if($(window).width() <= 800){
        $("ul").removeClass("container");
        $("ul").removeClass("align");
        $("ul").addClass("container");
      }
      else{
        $("ul").removeClass("container");
        $("ul").removeClass("align");
        $("ul").addClass("align");
      }
    });
  }

}
