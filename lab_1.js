function foo1(n){
    const arr = [];
    for (var i = 0; i < n; i++){

        arr.push(i);
    }
    return arr;
}

function foo2 (x, y, z){
    if (x % y === 0 && x % z === 0) {
        return true;
    }
    else {
        return false;
    }

}

function foo3(word){
    let arr = word.split('')
    arr[0] = arr[0].toUpperCase()
    return arr.join('')
}


console.log(foo1(5));

console.log(foo2(4, 1, 4));

console.log(foo3("work"));
