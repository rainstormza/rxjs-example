import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

Rx.Observable.fromEvent($title, "keyup")
    .map(e => e.target.value)
    .distinctUntilChanged()
    .debounceTime(500)
    .switchMap(getItems)
    .subscribe(items => {
        $results.empty();
        $results.append(items.map(r => $(`<li />`).text(r)))
    });

// const keyUps$ = Rx.Observable.fromEvent($title, "keyup");
// const queries$ = keyUps$
//     .map(e => e.target.value)
//     .distinctUntilChanged()
//     .debounceTime(250)
//     // .mergeMap(getItems); // flatMap
//     .switchMap(query => getItems(query)); //flatMapLastest

// queries$.subscribe(items => {
//     // console.log(query);
//     // getItems(query)
//     //     .then(items => {
//             $results.empty();
//             $results.append(items.map(r => $(`<li />`).text(r)))
//         // });
// });

function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random() }`]);
        }, 500+ (Math.random() * 200));
    });
}