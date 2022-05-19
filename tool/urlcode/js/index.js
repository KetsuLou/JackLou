function requestResourse() {
    var pDoc = document.getElementsByTagName("p")[0]
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest()
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            pDoc.innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.open("POST", "http://172.0.2.218:3000/client/api/000003", true);
    xmlHttp.send();
}

// 测试JS的url编码解码
var encodeEle
var decodeEle
var encodeResult
var decodeResult
var codeType
var url
var encodeFlag
var decodeFlag
window.onload = function () {
    var urlInput = document.getElementById("text");
    encodeEle = document.getElementById("encode");
    decodeEle = document.getElementById("decode");
    var one = document.getElementById("chooseone");
    var two = document.getElementById("choosetwo");
    encodeFlag = document.getElementById("encodeFlag");
    decodeFlag = document.getElementById("decodeFlag");

    codeType = 0;
    url = urlInput.value;
    encodeResult = url;
    decodeResult = url;

    one.onclick = function () {
        checkRadioType();
    }
    two.onclick = function () {
        checkRadioType();
    }
    //判断单选框
    function checkRadioType() {
        if (one.checked == true) {
            codeType = 0;
        } else {
            codeType = 1;
        }
    }
}

function jsEscape() {
    if (codeType == 0) {
        encodeResult = escape(url)
    } else {
        encodeResult = escape(encodeResult)
    }
    decodeResult = encodeResult
    encodeEle.value = encodeResult
    encodeFlag.innerHTML = "(escape)"
}
function jsDeEscape() {
    decodeResult = unescape(decodeResult)
    decodeEle.value = decodeResult
    decodeFlag.innerHTML = "(deescape)"
}
function jsEncode() {
    if (codeType == 0) {
        encodeResult = encodeURI(url)
    } else {
        encodeResult = encodeURI(encodeResult)
    }
    decodeResult = encodeResult
    encodeEle.value = encodeResult
    encodeFlag.innerHTML = "(encode)"
}
function jsDeEncode() {
    decodeResult = decodeURI(decodeResult)
    decodeEle.value = decodeResult
    decodeFlag.innerHTML = "(decode)"
}
function jsEncodeComponent() {
    if (codeType == 0) {
        encodeResult = encodeURIComponent(url)
    } else {
        encodeResult = encodeURIComponent(encodeResult)
    }
    decodeResult = encodeResult
    encodeEle.value = encodeResult
    encodeFlag.innerHTML = "(encodeURIcomponent)"
}
function jsDeEncodeComponent() {
    decodeResult = decodeURIComponent(decodeResult)
    decodeEle.value = decodeResult
    decodeFlag.innerHTML = "(decodeURIcomponent)"
}

// Firefox, Google Chrome, Opera, Safari, Internet Explorer from version 9
function OnInput(event) {
    // alert ("The new content: " + event.target.value);
    url = event.target.value
    encodeResult = url
    decodeResult = url
}
// Internet Explorer
function OnPropChanged(event) {
    if (event.propertyName.toLowerCase() == "value") {
        // alert ("The new content: " + event.srcElement.value);
        url = event.srcElement.value
        encodeResult = url
        decodeResult = url
    }
}