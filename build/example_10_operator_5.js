'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('10');

// Rx.Observable.range(1, 100)
//     .bufferCount(25)
//     .subscribe(createSubscriber('items'));

// Rx.Observable.interval(500)
//     .bufferTime(2000)
//     .subscribe(createSubscriber('bufferTime'));


// const stopSubject$ = new Rx.Subject();
// Rx.Observable.interval(500)
//     .buffer(stopSubject$)
//     .subscribe(createSubscriber('buffer'));

// setTimeout(() => {
//     stopSubject$.next();
// }, 3000);


_Rx2.default.Observable.range(1, 10).toArray().subscribe((0, _util.createSubscriber)('range'));