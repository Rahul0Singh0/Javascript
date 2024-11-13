function isEvenOrOdd(x) {
    if(x % 2 == 0) {
        return "even"; // string return 
    } else {
        return "odd"; // string return
    }
}

const ans = isEvenOrOdd(2);
console.log(ans);