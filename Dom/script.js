// let headingEl = document.getElementById("heading");
// let headingEl = document.getElementsByClassName("heading");
let headingEl = document.querySelector("#heading");
let btnEl = document.querySelector("#btn");
let btnEL = document.querySelector("#bttn");
let btneL = document.querySelector("#bttnn");
let boxEl = document.querySelector(".box");


// headingEl.style.color = "red";
// headingEl.style.backgroundColor = "blue";
// headingEl.textContent = "Hiiiiiiiiiiii";
// headingEl.innerHTML += "<h2>hello this is from js</h2>";


let count=0;

btnEL.addEventListener("click",()=>{
    count--;
    headingEl.textContent=count;
})

// let fun = ()=>{
//     headingEl.style.color = "red";
// }

btnEl.addEventListener("click",()=>{
    count++;
    headingEl.textContent=count;
})

btneL.addEventListener("click",()=>{
    count=0;
    headingEl.textContent=count;
})
console.log(headingEl);

// boxEl.addEventListener("click",()=>{
boxEl.addEventListener("mouseover",()=>{
    let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = "#";
    for(let i=0;i<6;i++){
        let randomNum= Math.floor(Math.random()*15);
        hexColor += arr[randomNum];
    }
    boxEl.style.backgroundColor = hexColor;
})
    
// console.log("Hello, World!");
// console.log(document);