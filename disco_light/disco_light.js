const disco = document.querySelector("button");
let colors = ["red", "green", "blue", "yellow", "brown", "black", "pink", "orange", "skyblue"];
let ele = document.body;
let index =0;

disco.addEventListener("click", () => {
  setInterval(() => {
    ele.style.background = colors[index];
    if(index > 8){
        index = -1;
    }
    index++;
  }, 10);
});