// GET DATE 

let screen = document.getElementById("show");
let staySafe = document.querySelector(".staySafe");

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
let whiteMode = document.querySelector(".whiteMode");
let darkMode = document.querySelector(".darkMode");
let flashlight = document.querySelector(".flashlight");
let rad = document.getElementById("rad")
let cam = document.querySelector(".cam")
let menu = document.querySelector(".menu")

flashBtn.addEventListener("click", function(){
if(rad.classList.contains("whiteMode")){
    rad.classList.remove("whiteMode")
    flashlight.style.backgroundColor = "#222"
    cam.style.display = "block"
    menu.style.display = "block"
}else {
    rad.classList.add("whiteMode")
    flashlight.style.backgroundColor = "#222"
    flashlight.style.color = "#fff"
    cam.style.display = "none"
    menu.style.display = "none"
}
})


// SHOW APPS

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
   <button onclick="callBtn()"><ion-icon class="icon call" name="call-outline"></ion-icon></button>
   <button onclick="chromeBtn()"><ion-icon class="icon chrome" name="logo-chrome"></ion-icon></button>
   <button onclick="wechatBtn()"><ion-icon class="icon wechat" name="logo-wechat"></ion-icon></button>
   <button onclick="musicBtn()"><ion-icon class="icon music"name="musical-notes-outline"></ion-icon></button>
   </nav>
   </div>
</div>`;
})

// CALL SECTION

function callBtn(){
    show1.innerHTML = ""
    show1.innerHTML = `<div class="callSection">
    <div class="callNavDiv">
        <nav class="navCallSection">
            <div class="navspan">
            <button><ion-icon class="callIcon" name="star-outline"></ion-icon></button>
            <span>Favorites</span>
            </div>
            <div class="navspan">
            <button><ion-icon class="callIcon" name="time-outline"></ion-icon></button>
            <span>Recents</span>
            </div>
            <div class="navspan">
            <button><ion-icon class="callIcon" name="person-outline"></ion-icon></button>
            <span>Contact</span>
            </div>
            <div class="navspan">
            <button onclick="keypadBtn()"><ion-icon class="callIcon" name="keypad-outline"></ion-icon></button>
            <span>Keypad</span>
            </div>
        </nav>
    </div>
    </div>`
    rad.classList.add("darkMode")
    
    function getDate(){
        setInterval(() => {
        let date = new Date().toString().split(" ");
        let newDate = `${date[0]}, ${date[1]} ${date[2]} `
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        hours = hours < 12 ? "0" + hours : hours;
        minutes = minutes < 12 ? "0" + minutes : minutes;
        let time = `${hours}:${minutes}`
        staySafe.textContent = `${time}`
        }, 1000); 
    }
    getDate();
}

function keypadBtn(){
    screen.innerHTML = ""
    show1.innerHTML = `<div class="keypadDiv">
    <div class="inputDiv">
    <input id="screenInput" type="text">
    <p class="save">Add Number</p>
    </div>
    <div class="numbers">
       <button class="btn" data-num="1">
       <p>1</p>
       <span>&nbsp;</span>
       </button>
       <button class="btn" data-num="2">
       <p>2</p>
       <span>ABC</span>
       </button>
       <button class="btn" data-num="3">
       <p>3</p>
       <span>DEF</span>
       </button>
       <button class="btn" data-num="4">
       <p>4</p>
       <span>GHI</span>
       </button>
       <button class="btn" data-num="5">
       <p>5</p>
       <span>JKL</span>
       </button>
       <button class="btn" data-num="6">
       <p>6</p>
       <span>MNO</span>
       </button>
       <button class="btn" data-num="7">
       <p>7</p>
       <span>PQRS</span>
       </button>
       <button class="btn" data-num="8">
       <p>8</p>
       <span>TUV</span>
       </button>
       <button class="btn" data-num="9">
       <p>9</p>
       <span>WXYZ</span>
       </button>
       <button class="btn" data-num="*">
       <p>*</p>
       <span>&nbsp;</span>
       </button>
       <button class="btn" data-num="0">
       <p>0</p>
       <span>+</span>
       </button>
       <button class="btn" data-num="#">
       <p>#</p>
       <span>&nbsp;</span>
       </button>
    </div>
    <div class="callndel">
    <div class="dialdiv">
    <button class="btn-call"><ion-icon class="dial" name="call-outline"></ion-icon></button>
    </div>
    <div class="deldiv">
    <button onclick="delBtn()" class="btn-del"><ion-icon name="backspace-outline"></ion-icon></button>
    </div>
    </div>
</div> 
<div class="callSection">
    <div class="callNavDiv">
        <nav class="navCallSection">
            <div class="navspan">
            <button><ion-icon class="callIcon" name="star-outline"></ion-icon></button>
            <span>Favorites</span>
            </div>
            <div class="navspan">
            <button><ion-icon class="callIcon" name="time-outline"></ion-icon></button>
            <span>Recents</span>
            </div>
            <div class="navspan">
            <button><ion-icon class="callIcon" name="person-outline"></ion-icon></button>
            <span>Contact</span>
            </div>
            <div class="navspan">
            <button onclick="keypadBtn()"><ion-icon class="callIcon" name="keypad-outline"></ion-icon></button>
            <span>Keypad</span>
            </div>
        </nav>
    </div>
    </div>
`
let btndel = document.querySelector(".btn-del");
let save = document.querySelector(".save");
let screenInput = document.getElementById("screenInput");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
       let digits = e.currentTarget.dataset.num;
       screenInput.value += `${digits}`
       btndel.style.display = "block"
       save.style.display = "block"
    })

})

}

function delBtn(){
 let inputValue = screenInput.value;
 if(inputValue.length > 0){
   inputValue = inputValue.slice(0,-1)
   screenInput.value = inputValue;
 }
}