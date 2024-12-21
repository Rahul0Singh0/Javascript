function* generator() {
    console.log("inside generator");
    yield 100;
    yield 99;
    yield 87;
    yield -1;
}

const i = generator();