"use strict";
const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
};
function deleteAllFalsy(obj) {
    for (const key in obj) {
        if (!obj[key]) {
            delete (obj[key]);
        }
    }
}
deleteAllFalsy(obj);
console.log(obj);
