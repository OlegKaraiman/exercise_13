// eslint-disable-next-line no-unused-vars
function getStr(numb) {
    let res = '';
    const three = 3;
    const five = 5;
    const nothing = 0;
    for (let i = 1; i <= numb; i++) {
        if (i % three === nothing && i % five !== nothing) {
            res += 'fizz';
        } else if (i % five === nothing && i % three !== nothing) {
            res += 'buzz';
        } else if (i % three === nothing && i % five === nothing) {
            res += 'fizzBuzz';
        } else res += i;
    }
    return res;
}
