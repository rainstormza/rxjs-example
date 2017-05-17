'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log('hot or cold');

// const interval$ = Rx.Observable.interval(1000)
//     .take(10)
//     .publish();


// setTimeout(() => {
//     interval$.connect();
// }, 5000);

// setTimeout(() => {
//     interval$.subscribe(createSubscriber('one'));
// }, 1200);

// setTimeout(() => {
//     interval$.subscribe(createSubscriber('two'));
// }, 3200);


// const simple$ = new Rx.Observable(observer => {
//     observer.next('one');
//     observer.next('two');
//     observer.next('three');
//     observer.complete();
// });

// const published$ = simple$.publishReplay(2);

// published$.subscribe(createSubscriber('one'));
// published$.connect();
// published$.subscribe(createSubscriber('two'));


// const simple$ = new Rx.Observable(observer => {
//     observer.next('one');
//     observer.next('two');
//     observer.next('three');
//     // observer.complete();
//     return () => console.log("Disposed");

// });

// const published$ = simple$.publishReplay(2);

// const sub1 = published$.subscribe(createSubscriber('one'));
// const connection = published$.connect();
// const sub2 = published$.subscribe(createSubscriber('two'));


// sub1.unsubscribe();
// sub2.unsubscribe();

// connection.unsubscribe();


var simple$ = new _Rx2.default.Observable(function (observer) {
    observer.next('one');
    observer.next('two');
    observer.next('three');
    // observer.complete();
    return function () {
        return console.log("Disposed");
    };
});

var published$ = simple$.publishReplay(2).refCount();
//refCount() conntect to observable on the first subscription and then it will disconnect once the last subscription has unsubscribed
// const published$ = simple$.publish().refCount();
// const published$ = simple$.share();


var sub1 = published$.subscribe((0, _util.createSubscriber)('one'));
var sub2 = published$.subscribe((0, _util.createSubscriber)('two'));

sub1.unsubscribe();
sub2.unsubscribe();