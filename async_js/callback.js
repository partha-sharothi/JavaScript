const paymentSuccess = true;
const marks = 70;

function enroll(callback){
    console.log('Course enrollment is in progress.');

    setTimeout(function(){
        if(paymentSuccess){
            callback();
        } else {
            console.log('Payment failed!');
        }
    }, 2000);
}


function progress(callback){
    console.log('course on progress...');

    setTimeout(function(){
        if(marks >= 80) {
            callback();
        } else {
            console.log('You could not get enough marks to get the certificate');
        }
    }, 3000);
}

function getCertificate(){
    console.log('preparing your certivicate!');

    setTimeout(function(){
        console.log("Congrats! You got the certificate");
    }, 1000);
}


// enroll();

// progress();

// getCertificate();

enroll(function(){
    progress(function(){
        getCertificate()
    });
})