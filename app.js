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
let flashlight = document.querySelector(".flashlight");
let rad = document.getElementById("rad")
let cam = document.querySelector(".cam")
let menu = document.querySelector(".menu")

flashBtn.addEventListener("click", function(){
if(rad.classList.contains("flashMode")){
    rad.classList.remove("flashMode")
    flashlight.style.backgroundColor = "#222"
    cam.style.display = "block"
    menu.style.display = "block"
}else {
    rad.classList.add("flashMode")
    flashlight.style.backgroundColor = "#222"
    flashlight.style.color = "#fff"
    cam.style.display = "none"
    menu.style.display = "none"
}
})


let show1 = document.getElementById("show1");

let appsBtn = document.getElementById("appsBtn")

appsBtn.addEventListener("click", function(){
    screen.style.display = "none"
    flashlight.style.display = "none"
    cam.style.display = "none"
    menu.style.display = "none"
   show1.innerHTML = `<div class="appsDiv">
   <div class="apps">
   <div class="iconText">
   <p><ion-icon class="icon tiktok" name="logo-tiktok"></ion-icon></p>
   <span>Tiktok</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon whatsapp" name="logo-whatsapp"></ion-icon></p>
   <span>WhatsApp</span>
   </div>
   <div class="iconText"
   <p><ion-icon class="icon mail" name="mail-unread-outline"></ion-icon></p>
   <span>Mail</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon facebook" name="logo-facebook"></ion-icon></p>
   <span>Facebook</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon discord" name="logo-discord"></ion-icon></p>
   <span>Discord</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon yahoo" name="logo-yahoo"></ion-icon></p>
   <span>Yahoo Mail</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon file" name="folder-outline"></ion-icon></p>
   <span>Files</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon cameraout" name="camera-outline"></ion-icon></p>
   <span>Camera</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon applelogo" name="logo-apple"></ion-icon></p>
   <span>TV</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon clock" name="time-outline"></ion-icon></p>
   <span>Clock</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon appstore" name="logo-apple-appstore"></ion-icon></p>
   <span>App Store</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon navigate" name="navigate-outline"></ion-icon></p>
   <span>Maps</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon calendar" name="calendar-number-outline"></ion-icon></p>
   <span>Calendar</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon instagram" name="logo-instagram"></ion-icon></p>
   <span>Instagram</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon bitcoin" name="logo-bitcoin"></ion-icon></p>
   <span>Binance</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon chrome" name="logo-chrome"></ion-icon></p>
   <span>Chrome</span>
   </div>
   <div class="iconText">
   <p><ion-icon  class="icon settings" name="settings-outline"></ion-icon></p>
   <span>Settings</span>
   </div>

   </div>
   <div class="bottomNav">
   <nav class="nav">
   <button><ion-icon class="icon call"name="call-outline"></ion-icon></button>
   <button><ion-icon class="icon chrome" name="logo-chrome"></ion-icon></button>
   <button><ion-icon class="icon wechat" name="logo-wechat"></ion-icon></button>
   <button><ion-icon class="icon music"name="musical-notes-outline"></ion-icon></button>
   </nav>
   </div>
</div>`;


})