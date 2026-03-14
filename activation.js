async function activateProduct(code,type){

const deviceId =
navigator.userAgent +
screen.width +
screen.height;

const url =
"https://script.google.com/macros/s/AKfycbxv2FYouHoZ040Wk3fFhouD0wgSXRiYmgp5R00XXNqElu_QSRpchdf8GWIXdDOPTbGU1Q/exec"
+"?code="+code
+"&type="+type
+"&device="+deviceId;

const res = await fetch(url);

const result = await res.text();

if(result === "VALID"){
return true;
}

if(result === "USED"){
alert("This activation code is already used.");
return false;
}

alert("Invalid activation code.");
return false;

}
