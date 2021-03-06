'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('8');

// Rx.Observable.interval(1000)
//     .take(3)
//     .map(a => a*a)
//     .subscribe(createSubscriber('map'));

// function arrayMap(array, projection) {
//     const returnArray = [];
//     for (let item of array) {
//         const projected = projection(item);
//         returnArray.push(projected);
//     }

//     return returnArray;
// }

// function arrayMergeMap(array, projection) {
//     const returnArray = [];
//     for (let item of array) {
//         const projectedArray = projection(item);
//         for (let projected of projectedArray) {
//             returnArray.push(projected);
//         }
//     }

//     return returnArray;
// }

// const albums = [
//     {title: 'Album 1', tracks: [{id: 1, title: 'Track 1'}, {id: 2, title: 'Track 2'}]},
//     {title: 'Album 2', tracks: [{id: 3, title: 'Track 3'}, {id: 4, title: 'Track 4'}]},
// ];

// const tracksWrong = arrayMap(albums, album => album.tracks);
// const tracksRight = arrayMergeMap(albums, album => album.tracks);

// console.log(JSON.stringify(tracksWrong));
// console.log(JSON.stringify(tracksRight)); // map array to single array


// Rx.Observable.range(1, 3)
//     .mergeMap(i => Rx.Observable.timer(i*1000).map(() => `After ${i} Seconds`))
//     .subscribe(createSubscriber('mergeMap'));

// Rx.Observable.fromPromise(getTracks())
//     .mergeMap(tracks => Rx.Observable.from(tracks))
//     .subscribe(createSubscriber('tracks'));

// function getTracks() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(['track 1', 'track 2', 'track 3']);
//         }, 1000)
//     });
// }


_Rx2.default.Observable.of('my query').do(function () {
    return console.log('Querying');
}).mergeMap(function (a) {
    return query(a);
}).do(function () {
    return console.log('After querying');
}).subscribe((0, _util.createSubscriber)('query'));

function query(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('This is the value');
        }, 1000);
    });
}