import Rx from "rxjs/Rx";
import { createSubscriber } from './lib/util';

// console.log('test');

// const promise = new Promise((resolve, reject) => {
//     console.log("promise");
//     resolve("hey");
// })

// promise.then(item => console.log(item));


/* Part 1 */
// const simple$ = new Rx.Observable(observer => {
//     console.log('Generating observable');
//     setTimeout(() => {
//         observer.next('An item!');
//         setTimeout(() => {
//             observer.next('Another item!');
//             observer.complete();
//         }, 1000);
//     }, 1000);
// });

// const error$ = new Rx.Observable(observer => {
//     observer.error(new Error('WHOA!'));
// });

// error$.subscribe(
//     item => console.log(`one.next ${item}`),
//     error => console.log(`one.error ${error}`),
//     () => console.log('one.complete')
// );

// setTimeout(() => {
//     simple$.subscribe({
//         next: item => console.log(`two.next ${item}`),
//         error(error) {
//             console.log(`two.error ${error}`);
//         },
//         complete: function() {
//             console.log('two.complete');
//         }
//     })
// }, 3000);


/* Part 2 */
// function createSubscriber(tag) {
//     return {
//         next(item) {console.log(`${tag}.next ${item}`);},
//         error(error) {console.log(`${tag}.error ${error.stack || error}`);},
//         complete() {console.log(`${tag}.complete`)}

//     }
// }

function createInterval$(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            observer.next(index++);
        }, time)

        return () => {
            clearInterval(interval);
        }
    });
}

function take$(sourceObservable$, amount) {
    return new Rx.Observable(observer => {
        let count = 0;
        const subscription = sourceObservable$.subscribe({
            next(item) { 
                observer.next(item);
                if(++count >= amount)
                    observer.complete();
            },
            error(error) { observer.error(error); },
            complete() { observe.complete(); }
        })

        return () => subscription.unsubscribe();
    });
}

const everySecond$ = createInterval$(1000);
const firstFiveSeconds$ = take$(everySecond$, 5);
const subscription = firstFiveSeconds$.subscribe(createSubscriber('one'));
// const subscription = everySecond$.take(3).subscribe(createSubscriber('one'));

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3000);