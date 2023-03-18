// GET DATE 

let screen = document.getElementById("show");
let staySafe = document.querySelector(".staySafe");

function getDate(){
    setInterval(() => {
    let date = new Date().toString().split(" ");
    let newDate = `${date[0]}, ${date[1]} ${date[2]} `
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
   

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
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
   <p><ion-icon class="icon instagram" name="logo-instagram"></ion-icon></p>
   <span>Instagram</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon whatsapp" name="logo-whatsapp"></ion-icon></p>
   <span>WhatsApp</span>
   </div>
   <div class="iconText"
   <p><ion-icon class="icon mail" name="mail-unread-outline"></ion-icon></p>
   <span>Mail</span>
   </div>
   <div class="iconText" onclick="calculatorBtn()">
   <p><ion-icon class="icon clock" name="calculator-outline"></ion-icon></p>
   <span>Calculator</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon facebook" name="logo-facebook"></ion-icon></p>
   <span>Facebook</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon applelogo" name="logo-apple"></ion-icon></p>
   <span>Airtime Gen</span>
   </div>
   <div class="iconText">
   <p><ion-icon  class="icon settings" name="settings-outline"></ion-icon></p>
   <span>Settings</span>
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
   <p><ion-icon class="icon discord" name="logo-discord"></ion-icon></p>
   <span>Discord</span>
   </div>
   <div class="iconText" onclick="clockbtn()">
   <p><ion-icon class="icon clock" name="time-outline"></ion-icon></p>
   <span>Clock</span>
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
   <p><ion-icon class="icon tiktok" name="logo-tiktok"></ion-icon></p>
   <span>Tiktok</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon yahoo" name="logo-yahoo"></ion-icon></p>
   <span>Yahoo Mail</span>
   </div>
   <div class="iconText">
   <p><ion-icon class="icon bitcoin" name="logo-bitcoin"></ion-icon></p>
   <span>Binance</span>
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
            <button onclick="recentBtn()"><ion-icon class="callIcon" name="time-outline"></ion-icon></button>
            <span>Recents</span>
            </div>
            <div class="navspan">
            <button onclick="contactBtn()"><ion-icon class="callIcon" name="person-outline"></ion-icon></button>
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
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      </div>
      <div class="modal-body">
      <h3>New Contact</h3>
     <span> <ion-icon class="user" name="person-circle-outline"></ion-icon></span>
       <input type="text" id="fName" placeholder="First name">
       <input type="text" id="lName" placeholder="Last name">
       <input type="text" id="mobile" placeholder="mobile">
      </div>
      <div class="modal-footer">
        <button onclick="closeBtn()" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onclick="saveContactBtn()" type="button" class="btn btn-primary">Done</button>
      </div>
    </div>
  </div>
</div>
    <p onclick="saveBtn()" class="save">Add Number</p>
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
    <button class="btn-call" onclick="dialBtn()"><ion-icon class="dial" name="call-outline"></ion-icon></button>
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
            <button onclick="recentBtn()"><ion-icon class="callIcon" name="time-outline"></ion-icon></button>
            <span>Recents</span>
            </div>
            <div class="navspan">
            <button onclick="contactBtn()"><ion-icon class="callIcon" name="person-outline"></ion-icon></button>
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


// KEYPAD BUTTONS
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

//  DELETE 

function delBtn(){
 let inputValue = screenInput.value;
 if(inputValue.length > 0){
   inputValue = inputValue.slice(0,-1)
   screenInput.value = inputValue;
 }
}

// CALL

function dialBtn(){
    let recentArr = [];
    let screenInput = document.getElementById("screenInput");
    let phoneNumber = screenInput.value;
   
        let date = new Date().toString().split(" ");
        let month = new Date().getMonth();
        let newDate = `${date[0]}, ${date[1]} ${date[2]} `
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        hours = hours < 12 ? "0" + hours : hours;
        minutes = minutes < 12 ? "0" + minutes : minutes;
        let time = `${hours}:${minutes}`
        let updatedDate = `${date[2]}/${month}/${date[3]}`

 
    console.log(time,updatedDate);
    const validPhone = validPhoneNumber(phoneNumber)

    if(validPhone){
      let callInfo = {
        number: validPhone,
        time: time, 
        date: updatedDate
        
      }
      console.log(callInfo);
      let recentArr = JSON.parse(localStorage.getItem("log")) || [];
      recentArr.push(callInfo)
      localStorage.setItem("log", JSON.stringify(recentArr))
      console.log(recentArr);
        alert("Calling")
        // initiateCall(validPhone)
    } else {
        alert("Number not available")
    }
}

function validPhoneNumber(phoneNumber){

    // remove all numeric 
    const newPhoneNumber = phoneNumber.replace(/\D/g, "");

    // set to 10 digits
    const phonePattern = (/^\d{11}$/);

    // test if number passes pattern test (11 digits)
    const isValidPhoneNumber = phonePattern.test(newPhoneNumber)

    if(isValidPhoneNumber){
        return newPhoneNumber;
    } else {
        return false;
    }
}


    //   function initiateCall(phoneNumber) {
    //     const accountSid = 'AC5d2d20165f208a9e375d41776c3a3c04';
    //     const authToken = '2fa60edf0d21419d0ae4d7bb4c8d5179';
    //     const client = require('twilio')(accountSid, authToken);
        
    //     client.calls.create({
    //       url: 'http://demo.twilio.com/docs/voice.xml',
    //       to: `+1${phoneNumber}`,
    //       from: '+12766378786'
    //     })
    //     .then(call => console.log(call.sid))
    //     .catch(error => console.log(error));
    //   }

    let show2 = document.getElementById("show2")


   function recentBtn(){
    show1.innerHTML = `<div class="logsDiv">
    <div class="logs">
    <button>ALL</button>
    <button>MISSED</button>
    </div>
    <h3>Recents</h3>
    </div>
    <div class="callSection">
    <div class="callNavDiv">
        <nav class="navCallSection">
            <div class="navspan">
            <button><ion-icon class="callIcon" name="star-outline"></ion-icon></button>
            <span>Favorites</span>
            </div>
            <div class="navspan">
            <button onclick="recentBtn()"><ion-icon class="callIcon" name="time-outline"></ion-icon></button>
            <span>Recents</span>
            </div>
            <div class="navspan">
            <button onclick="contactBtn()"><ion-icon class="callIcon" name="person-outline"></ion-icon></button>
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
    let gotten = JSON.parse(localStorage.getItem("log"))
    console.log(gotten);
    if(gotten){
        gotten.forEach(element => {
            show1.innerHTML += `<div class="recentDiv">
            <div class"numWrap">
            <span class="outgoing material-symbols-outlined">
            call_made </span>
            <div class="callLog">
            <span>
            <p class="num">${element.number}</p></span>
            </div>
            </div>
            <div class="TimeAndDate">
            <p class="date">${element.date}</p>
            <p class="time">${element.time}</p>
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
                <button onclick="recentBtn()"><ion-icon class="callIcon" name="time-outline"></ion-icon></button>
                <span>Recents</span>
                </div>
                <div class="navspan">
                <button onclick="contactBtn()"><ion-icon class="callIcon" name="person-outline"></ion-icon></button>
                <span>Contact</span>
                </div>
                <div class="navspan">
                <button onclick="keypadBtn()"><ion-icon class="callIcon" name="keypad-outline"></ion-icon></button>
                <span>Keypad</span>
                </div>
            </nav>
        </div>
        </div>`
        });
    }
  
   }

function saveBtn(){
    let modal = document.querySelector(".modal")
    // alert("save?")
modal.style.display = "block"
}

function saveContactBtn(){
    let modal = document.querySelector(".modal")
    let fName = document.getElementById("fName")
    let lName = document.getElementById("lName")
    let mobile = document.getElementById("mobile")
    // let screenInput = document.getElementById("screenInput");
    // mobile.textContent = screenInput.value;
    // let phoneNumber = screenInput.value;
    if(fName.value == "" ||  mobile.value == "" ){
        alert("Enter contact details")
    } else {
        let contactInfo = {
            firstName: fName.value,
            lastName: lName.value,
            mobile: mobile.value
        }
        let contactArr = JSON.parse(localStorage.getItem("contact")) || [];
        contactArr.push(contactInfo);
        localStorage.setItem("contact",JSON.stringify(contactArr));
        modal.style.display = "none";
        keypadBtn()
        // window.location.reload()
        console.log(contactArr);
    }
}

function closeBtn(){
    let modal = document.querySelector(".modal")
    modal.style.display = "none"
    keypadBtn()
}
function contactBtn(){
    show1.innerHTML =  `<div class="contactHead">
    <p class="con">Contacts</p>
    <p onclick="editBtn()" class="edit">Edit</p>
    </div>
    <div class="callSection">
    <div class="callNavDiv">
        <nav class="navCallSection">
            <div class="navspan">
            <button><ion-icon class="callIcon" name="star-outline"></ion-icon></button>
            <span>Favorites</span>
            </div>
            <div class="navspan">
            <button onclick="recentBtn()"><ion-icon class="callIcon" name="time-outline"></ion-icon></button>
            <span>Recents</span>
            </div>
            <div class="navspan">
            <button onclick="contactBtn()"><ion-icon class="callIcon" name="person-outline"></ion-icon></button>
            <span>Contact</span>
            </div>
            <div class="navspan">
            <button onclick="keypadBtn()"><ion-icon class="callIcon" name="keypad-outline"></ion-icon></button>
            <span>Keypad</span>
            </div>
        </nav>
    </div>
    </div>`
    let savedContacts = JSON.parse(localStorage.getItem("contact"))
    console.log(savedContacts);
    if(savedContacts){
        savedContacts.forEach(element => {
            console.log(element);
            show1.innerHTML += `<div class="contactsDiv">
            <div class="contacts">
            <button class="contactBtn" onclick="delBtnn()"><ion-icon name="close-outline"></ion-icon></button>
            <p>${element.firstName}</p>
            <p>${element.mobile}</p>
            </div>
            </div>
            <hr>
            <div class="callSection">
        <div class="callNavDiv">
            <nav class="navCallSection">
                <div class="navspan">
                <button><ion-icon class="callIcon" name="star-outline"></ion-icon></button>
                <span>Favorites</span>
                </div>
                <div class="navspan">
                <button onclick="recentBtn()"><ion-icon class="callIcon" name="time-outline"></ion-icon></button>
                <span>Recents</span>
                </div>
                <div class="navspan">
                <button onclick="contactBtn()"><ion-icon class="callIcon" name="person-outline"></ion-icon></button>
                <span>Contact</span>
                </div>
                <div class="navspan">
                <button onclick="keypadBtn()"><ion-icon class="callIcon" name="keypad-outline"></ion-icon></button>
                <span>Keypad</span>
                </div>
            </nav>
        </div>
        </div>`
        });
    
    }
   
    
}

function editBtn(){
let contactBtns = document.querySelectorAll(".contactBtn");
contactBtns.forEach(btn => {
    if(btn.style.display == "none"){
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
});
}

function delBtnn(i){
    let savedContacts = JSON.parse(localStorage.getItem("contact"));
    savedContacts.splice(0, 1);
    localStorage.setItem("contact", JSON.stringify(savedContacts))
    contactBtn();
}




    // const video = document.getElementById('video');
    // const canvas = document.getElementById('canvas');
    // const snapButton = document.getElementById('snap');
    // const context = canvas.getContext('2d');

    // // Request permission to access the camera
    // navigator.mediaDevices.getUserMedia({ video: true })
    //   .then(stream => {
    //     video.srcObject = stream;
    //     video.play();
    //   })
    //   .catch(error => {
    //     console.error('Could not access camera', error);
    //   });

    // // Take a photo when the "Take Photo" button is clicked
    // snapButton.addEventListener('click', () => {
    //   context.drawImage(video, 0, 0, canvas.width, canvas.height);
    //   // Do something with the image, like upload it to a server
    // });
 

    // let calculatorBtn = document.getElementById("calculatorBtn");
   function calculatorBtn(){
    screen.innerHTML = ""
        show1.innerHTML = `<div class="calculator">
        <div>
          <input type="text" class="calcscreen" />
        </div>
        <div class="buttons">
          <button class="btn btn-yellow" data-num="*">*</button>
          <button class="btn btn-yellow" data-num="/">/</button>
          <button class="btn btn-yellow" data-num="-">-</button>
          <button class="btn btn-yellow" data-num="+">+</button>
  
          <button class="btn btn-grey" data-num="9">9</button>
          <button class="btn btn-grey" data-num="8">8</button>
          <button class="btn btn-grey" data-num="7">7</button>
          <button class="btn btn-grey" data-num="6">6</button>
          <button class="btn btn-grey" data-num="5">5</button>
          <button class="btn btn-grey" data-num="4">4</button>
          <button class="btn btn-grey" data-num="3">3</button>
          <button class="btn btn-grey" data-num="2">2</button>
          <button class="btn btn-grey" data-num="1">1</button>
          <button class="btn btn-grey" data-num="0">0</button>
          <button class="btn btn-grey" data-num=".">.</button>

          <button class="btn-equal">=</button>
          <button class="btn-clear">C</button>
        </div>
      </div>
      `
      
      rad.classList.add("darkMode")

    const show = document.querySelector(".calcscreen");
    const equal = document.querySelector(".btn-equal");
    const clear = document.querySelector(".btn-clear");
    const button = document.querySelectorAll(".btn");


    button.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let value = e.currentTarget.dataset.num;
      show.value += value;
    });
  
    // Equal button
    equal.addEventListener("click", function (e) {
      if (show === "") {
        show.value = "Enter your inputs";
      } else {
        let answer = eval(show.value);
        show.value = answer;
      }
    });
  
    //    Clear button
    clear.addEventListener("click", function (e) {
      show.value = 0;
    });
  });
    }

    let homeLineBtn = document.getElementById("homeLineBtn");
    homeLineBtn.addEventListener("click", function(){
        show1.innerHTML = ""
        screen.style.display = "block"
        flashlight.style.display = "block"
        cam.style.display = "block"
        menu.style.display = "block"
        rad.classList.remove("darkMode")
    })

    function clockbtn(){
        show1.innerHTML = ""
        show1.innerHTML = `<div class="clockDiv  animate__animated animate__backInUp">
        <div id="MyClock" class="myclock"></div>
        </div>`
        rad.classList.add("darkMode")

        // setInterval(() => {
            var currentDate = new Date();
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();
            let session = "AM";
          
            if (hours === 0) {
              hours = 12;
            }
            if (hours > 12) {
              hours = hours - 12;
              session = "PM";
            }
          
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
          
            var time = `${hours} : ${minutes} : ${seconds} ${session}`;
            document.querySelector(".clockDiv").innerHTML = time;
        // }, 1000); 
    }
   
      
      