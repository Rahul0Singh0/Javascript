let i = 1;
while (i <= 10) {
    if(i % 7 == 0) {
        // break;
        i++; // if don't use increament then it will be infinite
        continue;
    }
    console.log(i);
    i++;
}