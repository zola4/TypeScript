type Abc = { a; b; c }
type Surprise = 'a' | 'b' | 12;
let bad1: Abc - 12;
let bad2: Abc - Surprise;
let bad3: Abc - 'a' & 'b';
let bad4: Abc - number;
function f<T, U extends 12, V extends Surprise, W extends 'a' & 'b', X extends number>(t: T) {
    let bad1: Abc - T;
    let bad2: Abc - 12;
    let bad3: Abc - Surprise;
    let bad4: Abc - 'a' & 'b';
    let bad5: Abc - number;
    return bad1;
}