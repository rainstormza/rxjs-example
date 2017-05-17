import Rx from "rxjs/Rx";
import { createSubscriber } from './lib/util';

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


Rx.Observable.range(1, 10)
    .toArray()
    .subscribe(createSubscriber('range'));