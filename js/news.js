"use strict"; // credit to Yahtzee Master#0168
let ticker = document.getElementById("newsContent");
let tickerContainer = document.getElementById("newsTicker"); // ticker is the text element, tickerContainer is... the thing that contains ticker

let newsPosition = -1e100; // hopefully noones screen is this big

function tickNews() {
  if (player) {
  if (!player.hideNews) {
  newsPosition -= 3;
  ticker.style.left = `${newsPosition}px`;

  if (newsPosition < -ticker.offsetWidth) newNewsMessage()};
  }
}

function newNewsMessage() {
  if (!player.hideNews) {
  const newsCandidates = [];
  for (const i in newsArray)
    if (newsArray[i][1] === undefined || newsArray[i][1]())
      newsCandidates.push(newsArray[i][0]);
  player.newsTotal = player.newsTotal.plus(1);
  ticker.innerHTML = newsCandidates[Math.floor(newsCandidates.length * Math.random())];
  newsPosition = tickerContainer.offsetWidth;
  ticker.style.left = `${newsPosition}px`};
}
// you can add a second element to each message's array
// the second element is a function that returns a boolean of whether to shown it
const newsArray = [
  ["This is very anstract"],
  ["This news ticker was added for you to look at something while you wait for something, I don't even know."],
  ["Play the Ascension Tree! Infinite PLAYTIME!"],
  ["i have POWER!"],
  ["Did you steal the background... Yes."],
  ["...the version notation changed?"],
  ["Also play Gods of Incremental!"],
  ["Racecar is a palindrome?!"],
  ["Infinity, and below!"],
  ["Who is Piter and why is he piching?"],
  ["TROLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLOLO!"],
  ["This tree is in the 'ð' tier (Whoa! Greek letter? wha could it be)"],
  ["the galaxy rating on this one is amazing"],
  ["what an abstract news ticker"],
  ["LIFE IS abstract! xD"],
  ["Needs more logs!"],
  ["List of all mod creators: escapee"],
  ["The newsticker broke. What to do?!"],
  ["catcatcatcatcatcatcatcat"],
  ["I'm in isolation. Stuck here for hours..."],
  ["The grindiest tree. Why? Because the creator loves activity."],
  ["can't believe this tree has more than 1 row", function() {if (player.i.unlocked||player.c.unlocked) return true}],
];
setTimeout(() => {
  ticker = document.getElementById("newsContent");
  tickerContainer = document.getElementById("newsTicker");
  setInterval(tickNews, 15);
}, 100);