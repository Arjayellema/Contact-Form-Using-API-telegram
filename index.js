var telegram_bot_id = "519553677:AAHb_rPUjud4-16yZa80hIzO8daYxPFkSvc";

var chat_id = 5043469086;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot5195536775:AAHb_rPUjud4-16yZa80hIzO8daYxPFkSvc/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": 5043469086,
            "text": message,
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
