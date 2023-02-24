// GET DATE 

let screen = document.getElementById("show");

function getDate(){
    setInterval(() => {
    let date = new Date().toString().split(" ");
    let newDate = `${date[0]}, ${date[1]} ${date[2]} `
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
   

    hours = hours < 12 ? "0" + hours : hours;
    minutes = minutes < 12 ? "0" + minutes : minutes;
    
    let time = `${hours}:${minutes}`
   
    screen.innerHTML = `<div class="dateAndTime">
    <p class="date">${newDate}</p>
    <p class="time">${time}</p>
    </div>`
    }, 1000);
    
}
getDate();

// FLASH LIGHT

let flashBtn = document.getElementById("flashBtn");
let radfone = document.getElementById("radfone");
let flashMode = document.querySelector(".flashMode");

flashBtn.addEventListener("click", function(){
   radfone.style.backgroundColor = "red";
//    radfone.classList.add("flashMode")
})


let show1 = document.getElementById("show1");
// let appsBtn = document.getElementById("appsBtn");

function appsBtn(){
    alert("hi");
}