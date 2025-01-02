const show = document.getElementById("show");
const wallet = document.getElementById("wallet");
const history = document.getElementById("history");
const connex = document.getElementById("connex");
const port = document.getElementById("port");
const stage =  document.getElementById("stage");

const validationRegex = [
  { regex: /.{8,}/ }, // min 8 letters,
  { regex: /[0-9]/ }, // numbers from 0 - 9
  { regex: /[a-z]/ }, // letters from a - z (lowercase)
  { regex: /[A-Z]/ }, // letters from A-Z (uppercase),
  { regex: /[^A-Za-z0-9]/ } // special characters
];

const signup = '<p class="label" id="pinlbl">Enter Password</p><input type="password" id="pin" class="pin"/><p class="label" id="pin2lbl">Re Enter Password</p><input type="password" id="pin2"  class="pin"/><input type="hidden" id="session"/><div id="setpin" class="submitter">Set Password</div>';

const signin = '<p class="label">Enter Password</p><input type="password" id="pin" class="pin"/><input type="hidden" id="session"/><div id="setpin" class="submitter">Login</div><p>If you forgot your Password you can recover your entire Account with the Seedphrase</p>';

const pinChecklist = '<p class="label" id="pinlbl">Enter Password</p><input type="password" id="pin" class="pin"/><p class="label" id="pin2lbl">Re Enter Password</p><input type="password" id="pin2"  class="pin"/><input type="hidden" id="session"/><div class="password-checklist"><h3 class="checklist-title label">Password should be</h3><ul class="checklist"><li class="list-item">At least 8 character long</li><li class="list-item">At least 1 number</li><li class="list-item">At least 1 lowercase letter</li><li class="list-item">At least 1 uppercase letter</li><li class="list-item">At least 1 special character</li></ul></div><div id="setpin" class="submitter">Set Password</div>';

const changed = (e) => {
    const pin = document.getElementById("pin");
    const pin2 = document.getElementById("pin2");
    console.log(e.target.id, e.target.value);
}

const goSignUp = (e) => {
    const pin = document.getElementById("pin");
    const pin2 = document.getElementById("pin2");
    const pin2lbl = document.getElementById("pin2lbl");
    if(pin.value == pin2.value) {
        if(pin.value.length >= 8) {
            stage.innerHTML = "";
            console.log("PINS CORRECT !");
        }
        else stage.innerHTML = pinChecklist;
    }
    else pin2lbl.innerHTML = "Passwords do not match !";
    
}

const goWallet = (e) => {
    console.log("# wallet initialisation check !"); 
    console.log(document.cookie);
    if(document.cookie === ""){
        stage.innerHTML = signup;
        const pin = document.getElementById("pin");
        const pin2 = document.getElementById("pin2");
        const setpin = document.getElementById("setpin");
        pin.addEventListener("change", changed);
        pin2.addEventListener("change", changed);
        setpin.addEventListener("click", goSignUp);
        
    }
    else{
        getCookie();
        stage.innerHTML = signin;
        pin.addEventListener("change", changed);
    }
}

const setCookie = (cookieData) => {
    var date = new Date("Februari 10, 2013");
    var dateString = date.toGMTString();
    // var cookieString = "Css=document.getElementById("css").href" + dateString;
    var cookieString = cookieData + dateString;
    document.cookie = cookieString;
}

const getCookie = () => {
    console.log(document.cookie);
}

wallet.addEventListener("click",goWallet);