function event(friendName, notifyFn) {
    console.log('bejelöltek jajj');

    // 100 sor logika

    notifyFn(friendName);
}

const notifySettings = 'sms'; // sms

if (notifySettings === 'email') {
    event('pista', notifyEmail);
} else {
    event('pista', notifySms);    
}

function notifyEmail(name) {
    console.log('sending email ' + name);
}

function notifySms(name) {
    console.log('sending sms ' + name);
}