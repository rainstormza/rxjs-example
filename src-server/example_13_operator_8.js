import Rx from "rxjs/Rx";
import { createSubscriber } from './lib/util';

console.log('13');

// Rx.Observable.concat(
//     Rx.Observable.of(42),
//     Rx.Observable.throw(new Error('Error')),
//     Rx.Observable.of(10))
//     .subscribe(createSubscriber('catch'));


// Rx.Observable.fromPromise(getApi())
//     .catch(error => Rx.Observable.of(error))
//     .do(() => console.log('Thing'))
//     .subscribe(createSubscriber('api'));

// function getApi() {
//     console.log('Getting API');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Hello');
//             reject(new Error());
//         }, 1000)
//     });
// }


getApi()
    .retry(5)
    .catch(error => Rx.Observable.of(error)) // must have
    .do(() => console.log('Thing'))
    .subscribe(createSubscriber('api'));

function getApi() {
    return new Rx.Observable(observer => {
        console.log('Getting API');
        setTimeout(() => {
            observer.error(new Error());
        }, 1000);
    });
}