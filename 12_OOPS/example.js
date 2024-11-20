let obj = {
    x: 1,
    y: 2,
    fn: function () {
        // x and y are variables of the function but this will be global scoped because auto scope(not formal declaration)
        x = 3;
        y = 4;
        const printVariables = () => {
            console.log(this.x, this.y);
            console.log(x, y);
        }
        printVariables();
    }
}

obj.fn();