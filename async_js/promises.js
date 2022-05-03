const paymentSuccess = true;
const marks = 70;

function enroll(){
    console.log('Course enrollment is in progress.');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            } else {
                reject('Payment failed!');
            }
        }, 2000);
    });
    return promise
}



function progress(){
    console.log('course on progress...');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80) {
                resolve();
            } else {
                reject('You could not get enough marks to get the certificate');
            }
        }, 3000);
    });
    return promise
}

function getCertificate(){
    console.log('preparing your certificate!');

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Congrats! You got the certificate");
        }, 1000);
    });
    return promise
}

// enroll()
//     .then(function(res){
//         console.log(res)
//         const val= progress();
//         return val
//     }).then(function(res){
//         console.log(res)
//         const val=getCertificate();
//         return val
//     }).then(function(value){
//         console.log(value);
//         console.log(value);
//     })

//     .catch(function(err){
//         console.log(err)
//     })



enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })

    .catch(function(err){
        console.log(err)
    })

