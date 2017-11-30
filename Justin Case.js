//resolveTime = 100;
//rejectTime = 150;

//console.log('before the promise');

let thePromise = new Promise((resolve, reject) => {

    //Hokus pokus, computer magic!

});

//console.log('after promise');

/*
setTimeout(() => console.log('DONE reSOLVing'), resolveTime);
setTimeout(() => console.log('DONE reJECTing'), rejectTime);
*/


/*
thePromise.then((result) => console.log(`Yipikayay, ${result}`))
    .catch((reject) => console.log(`Error: ${reject}`));
    */


/*
thePromise.then(function(result) {
    return 'Enough is enough! I have had it with this ' + result;
})
    .then(function(newResult) {
        return newResult + ' snakes on this monday to Friday train. ';
    })
    .then(function(finalResult) {
        console.log(finalResult + "I'm about to open some windows");
    })
    .catch((reject) => console.log(`Error: ${reject}`));
    */