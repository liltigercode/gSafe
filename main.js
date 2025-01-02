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

const firstchoice = '<div id="intro"><button id="new">Create new Wallet</button><button id="exst">Import existing Wallet</button></div>';

const signup = '<p class="label" id="pinlbl">Enter Password</p><input type="password" id="pin" class="pin"/><p class="label" id="pin2lbl">Re Enter Password</p><input type="password" id="pin2"  class="pin"/><input type="hidden" id="session"/><div id="setpin" class="submitter">Set Password</div>';

const signin = '<p class="label">Enter Password</p><input type="password" id="pin" class="pin"/><input type="hidden" id="session"/><div id="setpin" class="submitter">Login</div><p>If you forgot your Password you can recover your entire Account with the Seedphrase</p>';

const pinChecklist = '<p class="label" id="pinlbl">Enter Password</p><input type="password" id="pin" class="pin"/><p class="label" id="pin2lbl">Re Enter Password</p><input type="password" id="pin2"  class="pin"/><input type="hidden" id="session"/><div class="password-checklist"><h3 class="checklist-title label">Password should be</h3><ul class="checklist"><li class="list-item">At least 8 character long</li><li class="list-item">At least 1 number</li><li class="list-item">At least 1 lowercase letter</li><li class="list-item">At least 1 uppercase letter</li><li class="list-item">At least 1 special character</li></ul></div><div id="setpin" class="submitter">Set Password</div>';

const newseed = '<div id="newseedbox"><p id="sp"Your New seedphrase :</p><div id="phrase"><input id="word1" value="yellow" class="seed"/><input id="word2" value="fast" class="seed"/><input id="word3" value="total" class="seed"/><input id="word4" value="rain" class="seed"/><input id="word5" value="card" class="seed"/><input id="word6" value="speed" class="seed"/><input id="word7" value="future" class="seed"/><input id="word8" value="cloud" class="seed"/><input id="word9" value="saddle" class="seed"/><input id="word10" value="widow" class="seed"/><input id="word11" value="couch" class="seed"/><input id="word12" value="speaker" class="seed"/><button id="copy">Copy to Clipboard</button></div></div>';

const importseed = '<div id="seedbox"><p id="sp">Enter your seedphrase :</p><div id="phrase"><input id="word1" placeholder="Word 1" class="seed"/><input id="word2" placeholder="Word 2" class="seed"/><input id="word3" placeholder="Word 3" class="seed"/><input id="word4" placeholder="Word 4" class="seed"/><input id="word5" placeholder="Word 5" class="seed"/><input id="word6" placeholder="Word 6" class="seed"/><input id="word7" placeholder="Word 7" class="seed"/><input id="word8" placeholder="Word 8" class="seed"/><input id="word9" placeholder="Word 9" class="seed"/><input id="word10" placeholder="Word 10" class="seed"/><input id="word11" placeholder="Word 11" class="seed"/><input id="word12" placeholder="Word 12" class="seed"/><button id="import">Import Wallet</button></div></div>';

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
