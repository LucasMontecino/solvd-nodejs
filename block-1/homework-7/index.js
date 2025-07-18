// task 1

function promiseAll(array) {
    return new Promise((resolve, reject) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            array[i].then((res) => {
                result.push(res);
            }).catch((err) => {
                reject(err);
            })
        };
        resolve(result);
    })
}

const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

promiseAll(promises).then((res) => {
    console.log('All promises resolved', res)
}).catch((err) => {
    console.error('At least one promise rejected', err);
});

// task 2

function promiseAllSettled(array) {
    return new Promise((resolve, reject) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            array[i].then((value) => result.push({ status: 'fulfilled', value }),
                (reason) => result.push({ status: 'rejected', reason }))
        }
        resolve(result);
    })
}

const promises2 = [Promise.resolve(1), Promise.reject('Error ocurred'), Promise.resolve(3)];

promiseAllSettled(promises2).then((res) => {
    console.log('All promises settled', res)
});

// task 3

function chainPromises(arrFns) {
    return arrFns.reduce((acc, curr) => {
        return acc.then(curr);
    }, Promise.resolve())
}

function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
    return Promise.resolve(data + ' - Result from asyncFunction2');
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray).then((res) => {
    console.log('Chain promises', res)
})
    .catch((err) => {
        console.error('Error in chain promises', err)
    })

// task 4

function promisify(fn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

function callbackStyleFunction(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback("Invalid value", null);
        }
    }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
    .then(result => {
        console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
        console.error("Promised function error:", error);
    });