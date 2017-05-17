'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


getApi().retry(5).catch(function (error) {
    return _Rx2.default.Observable.of(error);
}) // must have
.do(function () {
    return console.log('Thing');
}).subscribe((0, _util.createSubscriber)('api'));

function getApi() {
    return new _Rx2.default.Observable(function (observer) {
        console.log('Getting API');
        setTimeout(function () {
            observer.error(new Error());
        }, 1000);
    });
}