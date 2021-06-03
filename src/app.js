/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let a = Math.floor(Math.random() * who.length);
    let b = Math.floor(Math.random() * action.length);
    let c = Math.floor(Math.random() * what.length);
    let d = Math.floor(Math.random() * when.length);
    let excuse = who[a] + " " + action[b] + " " + what[c] + " " + when[d];
    return excuse;
    console.log(excuse);
  }
  let p = document.getElementById("excuse");
  p.innerHTML = excuse();
};
