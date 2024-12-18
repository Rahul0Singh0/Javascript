// function fetchNextElement(arr) {
//     let idx = 0; // closure concept used 
//     function next() {
//         // some logic
//         if(idx >= arr.length) {
//             return undefined;
//         }
//         const newElement = arr[idx];
//         idx++;
//         return newElement;
//     }
//     return next;
// }

// const autoFetcher = fetchNextElement([1, 2, 3, 4, 5]);
// console.log(autoFetcher());
// console.log(autoFetcher());
// for(let i = 0; i < 10000000000; i++) {}
// console.log(autoFetcher());

// arr = [1, 2, 3, 4, 5]
// fetchNextElement(arr) => 1
// fetchNextElement(arr) => 2
// fetchNextElement(arr) => 3
// fetchNextElement(arr) => 4
// fetchNextElement(arr) => 5
// fetchNextElement(arr) => undefined

function fetchNextElement(arr) {
    let idx = 0; // closure concept used 
    function next() {
        // some logic
        if(idx >= arr.length) {
            return {value: undefined, done: true};
        }
        const newElement = arr[idx];
        idx++;
        return {value: newElement, done: false};
    }
    return {next};
}

const autoFetcher = fetchNextElement([1, 2, 3, 4, 5]);
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());