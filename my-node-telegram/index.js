const request = require('request');
let token;
let chatID;
let name;

exports.init = function (inToken, inChatID, inName) {
    token = inToken;
    chatID = inChatID;
    name = inName;
}

exports.sendMessage = function (msg) {
    if (msg === undefined) {
        return;
    }
    msg = bold(name) + '\n' + msg;
    msg = msg.replace("+", "%2B");
    url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${msg}&parse_mode=html`;

    request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
    });
}

exports.bold = function (msg) {
    if (msg === undefined) {
        return;
    }
    return `<b>${msg}</b>`;
}