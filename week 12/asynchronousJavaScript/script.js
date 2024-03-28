alert("JS file linked!");

// Quiz 1
// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise1 = job();

// promise1
// .then(function() {
//     console.log('Success 1');
// })
// .then(function() {
//     console.log('Success 2');
// })
// .then(function() {
//     console.log('Success 3');
// })
// .catch(function() {
//     console.log('Error 1');
// })
// .then(function() {
//     console.log('Success 4');
// });

// Quiz 2
// function job2(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// function name(a,b) {
//     return a+b
// }
// console.log(name(4,5))

// let promise2 = job2(true);

// promise2
// .then(function(data) {
//     console.log(data);

//     return job2(false);
// })
// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })
// .then(function(data) {
//     console.log(data);

//     return job2(true);
// })
// .catch(function(error) {
//     console.log(error);
// });

// Quiz 3
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});