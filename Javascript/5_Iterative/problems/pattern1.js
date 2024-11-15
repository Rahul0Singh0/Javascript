let n = 4;
for(let row = 1; row <= n; row++) {
    let star = "";
    for(let col = 1; col <= row; col++) {
        star += "* ";
    }
    console.log(star);
}

