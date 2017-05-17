'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rx.Observable.interval(1000)
//     .merge(Rx.Observable.interval(500))
//     .take(5)
//     .subscribe(createSubscriber('merge1'));

// Rx.Observable.merge(
//     Rx.Observable.interval(1000).map(i => `${i} seconds`),
//     Rx.Observable.interval(500).map(i => `${i} half seconds`))
//     .take(10)
//     .subscribe(createSubscriber('merge2'));

// Rx.Observable.merge(
//     socket.on$('login').map(user => processUser(user)),
//     socket.on$('logout').map(() => null));

// Rx.Observable.interval(500)
//     .take(3)
//     .concat(Rx.Observable.range(10, 3))
//     .subscribe(createSubscriber('concat1'));

_Rx2.default.Observable.concat(_Rx2.default.Observable.interval(1000).map(function (i) {
    return i + ' seconds';
}).take(3), _Rx2.default.Observable.interval(500).map(function (i) {
    return i + ' half seconds';
}).take(3)).subscribe((0, _util.createSubscriber)('concat2'));