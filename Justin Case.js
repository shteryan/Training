resolveTime = 100;
rejectTime = 50;

let thePromise = new Promise(function (resolve, reject) {
    //console.log("start RESolving");
    /*setTimeout(function () {
        resolve("Черешки")
    }, resolveTime);*/

    //console.log("start REJecting");
    /*setTimeout(function () {
        reject("Слаба реколта")
    }, rejectTime);*/
});

/*setTimeout(function () {
    console.log("DONE reJECTing");
}, rejectTime);*/

/*setTimeout(function () {
    console.log("DONE reSOLVing");
}, resolveTime);*/

thePromise.then((result) => console.log(`Виж ни! Вишни, ${result}!`))
    .catch((error) => console.log(`Error type: ${error}`));