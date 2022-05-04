/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird", "My mon"];
  let action = ["ate", "peed", "crushed", "broke", "cook"];
  let what = ["my homework", "the keys", "the car", "my repository", "my code"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomNumber = Math.floor(Math.random() * 5);

  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[randomNumber]} ${action[randomNumber]} ${what[randomNumber]} ${when[randomNumber]}`;
};

