let n = 20;
for(let row = 1; row <= n; row++) {
    let space = "";
    for(let col = 1; col <= n-row; col++) {
        space += "  ";
    }
    // let star = "";
    for(let col = 1; col <= row; col++) {
        // star += "* ";
        space += "* ";
    }
    // console.log(space+star);
    console.log(space);
}