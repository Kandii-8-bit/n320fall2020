// let title = document.getElementsByClassName("title");
// let top = document.getElementsByClassName("topRect");
let container = document.getElementsByClassName("rowContainer");
// let columnOne = document.getElementsByClassName("columnOne");
// let columnTwo = document.getElementsByClassName("columnTwo");
// let columnThree = document.getElementsByClassName("columnThree");

for(let i = 0; i <  container.length; i++) {
    TweenLite.from(container[i], {duration: 1, x:100, alpha:0});
}

