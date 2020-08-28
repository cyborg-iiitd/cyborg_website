import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // trying 
  
        // ——————————————————————————————————————————————————
      // TextScramble
      // ——————————————————————————————————————————————————


      // ——————————————————————————————————————————————————
      // Example
      // ——————————————————————————————————————————————————

      const phrases = [
      "FREQUENT COMPETITIONS",
      "REGULAR SESSIONS",
      "INTERESTING PROJECTS"
      ];
      const phrases1 = [
      "<div class=\" col-12 d-flex justify-content-center  \"> <b >FREQUENT COMPETITIONS</b> </div>   We take part in frequent competitions in tech-fests and other events in colleges of Delhi and outside like DTU, NSIT, IIT Bombay. We not only take part but also organise our own mini and main hardware hackathons regularly .",
      "<div class=\" col-12 d-flex justify-content-center  \"> <b >REGULAR SESSIONS</b> </div>  We hold regular sessions and hackathons in college for juniors and new-comers on basics of programming in Arduino, RPi, Computer Vision and Control Theory. We also help freshers in their IED/PIS projects in first year .",
      "<div class=\" col-12 d-flex justify-content-center  \"> <b >INTERESTING PROJECTS</b> </div>  We are involved in a number of interesting robotics projects ranging from Self-driving Cars and Rovers to Human-detection Drones, Comm Systems etc ."
      ];
      
      
      // const el = document.querySelector(".text");
      const el1 = document.querySelector(".text1");
      // const fx = new TextScramble(el);
      const fx1 = new TextScramble(el1);
      
      let counter = 0;
      let counter1 = 0;
      
      // const next = () => {
      //   fx.setText(phrases[counter]).then(() => {
      //     setTimeout(next, 5000);
      //   });
      //   counter = (counter + 1) % phrases.length;
      // };
      const next1 = () => {
        fx1.setText(phrases1[counter1]).then(() => {
          setTimeout(next1, 4000);
        });
        counter1 = (counter1 + 1) % phrases1.length;
      };

      // next();
      next1();
    //trying
  }

}

class TextScramble {
  el;
  chars;
  queue;
  resolve;
  frameRequest;
  frame;
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
        // output += `${char}`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

