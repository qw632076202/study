const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        if(!(typeof executor === 'function')) {
            throw new Error('MyPromise constructor param must be a function!')
        }

        this.value = undefined
        this.status = PENDING;
        this.onFulfilledQueues = [];
        this.onRejectedQueues = [];

        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }
    }

    resolve = (val) => {
        if(this.status === PENDING) {
            this.status = FULFILLED;
            this.value = val;
            for(let fn of this.onFulfilledQueues) {
                fn(this.value);
            }
        }
    }

    reject = (reason) => {
        if(this.status === PENDING) {
            this.status = REJECTED;
            this.value = reason;
            for(let fn of this.onRejectedQueues) {
                fn(this.reason);
            }
        }
    }

    then = (onFulfilled, onRejected) => {
        if(this.status === FULFILLED) {
            onFulfilled(this.value);
        }else if(this.status === REJECTED){
            onRejected(this.reason);
        }else if(this.status === PENDING) {
            this.onFulfilledQueues.push(onFulfilled);
            this.onRejectedQueues.push(onRejected);
        }
    }
}

let fun1 = function() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('fun1')
        }, 1000);
    })
}

let fun2 = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fun1')
        }, 1000);
    })
}

console.log('1111');

// fun1().then(res => {
//     console.log(res);
// }).then(res => {
//     console.log(res);
// })

fun2().then(res => {
    console.log(1);
}).then(res => {
    console.log(res);
})






