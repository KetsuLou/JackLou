var timerId;

function copyKey() {
    var totpElement = document.getElementById('totp');
    if (totpElement) {
        var range = document.createRange();
        range.selectNode(totpElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        mdui.snackbar({ message: '已复制', position: 'top', });
    }
}

function generateTOTP() {
    clearTimeout(timerId); // 清除之前的定时器

    var key = document.getElementById('key').value;

    // 将所有小写字母转换为大写字母并去掉空格
    key = key.toUpperCase().replace(/\s/g, "");
    // 将Base32编码的密钥解码为二进制
    key = base32Decode(key);

    // 定义哈希算法
    var digestAlgorithm = 'SHA-1';

    // 获取当前时间戳
    var timeStep = 30;  // 默认时间步长为30秒
    var currTime = Math.floor(Date.now() / 1000);

    // 计算到下一个30秒的剩余时间并减去1秒以确保刚好取到当前的30秒
    var remainingTime = timeStep - (currTime % timeStep) - 1;
    var remainingTimems = timeStep - (Date.now() / 1000 % timeStep) - 1;

    // 计算基于时间的单次密码
    var message = Math.floor(currTime / timeStep).toString(16);
    message = message.padStart(16, '0');
    var hmacHash = hmacSHA1(key, hexToBytes(message));
    var offset = hmacHash[19] & 0xf;
    var otp =
        ((hmacHash[offset] & 0x7f) << 24) |
        (hmacHash[offset + 1] << 16) |
        (hmacHash[offset + 2] << 8) |
        hmacHash[offset + 3];
    otp = (otp % 1000000).toString().padStart(6, '0');

    // 更新TOTP密码和剩余时间的显示
    document.getElementById('totp').textContent = otp;
    document.getElementById('remaining-time').textContent = '剩余时间: ' + remainingTime + ' 秒';

    // 更新进度条
    var progress = document.getElementById('progress');
    var progressWidth = (remainingTimems / timeStep) * 100;
    progress.style.display = 'block';
    progress.value = progressWidth;

    // 每0.1秒更新一次
    timerId = setTimeout(generateTOTP, 100);
}

// Base32解码
function base32Decode(input) {
    var base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    var base32lookup = {};
    for (var i = 0; i < base32chars.length; i++) {
        base32lookup[base32chars.charAt(i)] = i;
    }

    input = input.replace(/=+$/, '');
    var bits = '';
    var output = [];
    for (var i = 0; i < input.length; i++) {
        var char = input.charAt(i).toUpperCase();
        var val = base32lookup[char];
        bits += ('00000' + val.toString(2)).slice(-5);
    }
    while (bits.length >= 8) {
        output.push(parseInt(bits.substring(0, 8), 2));
        bits = bits.substring(8);
    }

    return new Uint8Array(output);
}

// HMAC-SHA1哈希
function hmacSHA1(key, message) {
    var keyBytes = new Uint8Array(key);
    var messageBytes = new Uint8Array(message);
    var hmacKey = (keyBytes.length > 64) ? sha1(keyBytes) : keyBytes;
    if (hmacKey.length < 64) {
        var padding = new Uint8Array(64 - hmacKey.length);
        hmacKey = concatenateUint8Arrays(hmacKey, padding);
    }

    var innerPad = new Uint8Array(64);
    var outerPad = new Uint8Array(64);
    for (var i = 0; i < 64; i++) {
        innerPad[i] = hmacKey[i] ^ 0x36;
        outerPad[i] = hmacKey[i] ^ 0x5c;
    }

    var innerHash = sha1(concatenateUint8Arrays(innerPad, messageBytes));
    var outerHash = sha1(concatenateUint8Arrays(outerPad, innerHash));

    return outerHash;
}

// SHA1哈希
function sha1(message) {
    var sha1Hash = CryptoJS.SHA1(CryptoJS.lib.WordArray.create(message));
    return hexToBytes(sha1Hash.toString());
}

// 将十六进制字符串转换为字节数组
function hexToBytes(hex) {
    var bytes = [];
    for (var i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
}

// 合并Uint8Array
function concatenateUint8Arrays(a, b) {
    var result = new Uint8Array(a.length + b.length);
    result.set(a);
    result.set(b, a.length);
    return result;
}

// 提取链接中的key
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == "key") {
        document.getElementById("key").value = pair[1];
        generateTOTP();
    }
}