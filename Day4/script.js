function f(){
    document.getElementById("c").src="imgs/resume.png";
}


function f1(){
    document.getElementById("c").src="imgs/f.jpg";
    document.getElementById("c").innerHTML = "SHARAN";
}

console.log("Hello");
console.warn("Warning!");
console.error("Error!");
console.table([{name:"Alice",age:"36"},{name: "Bob",age:"46"}])

eval("let a=5;console.log(\"Hello world!\");console.log(a);");

let x = 3.14;
console.log(x);

let obj = {name:"John"};
let str = JSON.stringify(obj);
console.log(str);
let back = JSON.parse(str);
console.log(back);

localStorage.setItem("username","hari");
console.log(localStorage.getItem("username"));

sessionStorage.setItem("user","set");
console.log(sessionStorage.getItem("user"));

let promise = new Promise( (resolve,reject) => {
    let commit = true;
    setTimeout(() => {resolve("hello")}, 2000);
});
promise.then(res => console.log(res)).catch(err => console.log(err));

function outer() {
    let name = "JS";
    return function inner() {
        console.log(name);
    }

}

let divc = document.getElementById("dom");

let body = document.querySelector("div");

let ele = document.createElement("div");

ele.innerHTML = "<h1>Hello World<h1>";

divc.appendChild(ele);

let dom = document.getElementById("dom");

//dom.style.color = "red";



let newele = document.createElement("h1");

dom.style.textAlign="center";

newele.innerHTML = "PRATHISH";

setTimeout(()=>{dom.appendChild(newele)},1000);
setTimeout(()=>{dom.removeChild(newele)},7000);

//setTimeout(() => {dom.removeChild(newele)},1000);

let dom1 = document.getElementById("dom");

let new2 = document.createElement("h1");

new2.innerText= "EIE - B";

setTimeout(() => {dom1.appendChild(new2)}, 2000);
setTimeout(() => {dom1.removeChild(new2)}, 3000);

let new3 = document.createElement("h1");

new3.innerText="III Year";

setTimeout(() => {dom1.appendChild(new3)}, 3000);
setTimeout(() => {dom1.removeChild(new3)}, 5000);

let new4 = document.createElement("h1");

new4.innerText="KONGU ENGINEERING COLLEGE";

setTimeout(() => {dom1.appendChild(new4)}, 5000);
setTimeout(() => {dom1.removeChild(new4)}, 6000);

let l = document.getElementById("s");
l.addEventListener("click",()=>{
    l.innerText = "CLICKED";
});

let m = document.getElementById("m");
m.addEventListener("mouseover",()=>{
    m.innerText = "GO AWAY!!";
});