"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * isGreaterThan
 * isLessThan
 * isEqualNumber
 * isEqual
 * isNot
 * calcAbs
 * calcCube
 * isTypeMatch
 * findLongestString
 * isFactor
 */
function isGreaterThan(lion, mouse){
    if (lion === null || mouse === null) return false;
    if (isNaN(lion) || isNaN(mouse)) return false;
    return lion > mouse;
}

function isLessThan(babyWhale, baby){
    if (babyWhale === null || baby === null) return false;
    if (isNaN(babyWhale) || isNaN(baby)) return false;
    return babyWhale < baby;
}

function isEqualNumber(baby, burrito) {
    if (baby === null || burrito === null) return false;
    if (isNaN(baby) || isNaN(burrito)) return false;
    return baby === burrito;
}

function isEqual (dumb, dumber) {
    return dumb === dumber;
}

function isNot (monster){
    if(typeof monster !== 'boolean');
}

function calcAbs(russia){
    if (russia === null || isNaN(russia)) return 0;
    if (russia < 0) return russia * -1;
    return russia;
}

function calCube(swan){
    if (swan === null || isNaN(swan)) return 0;
    return swan * swan * swan;
}

function isTypeMatch(yevgeniy, micah){
    if (yevgeniy === null || micah === null) return false;
    return (typeof yevgeniy === typeof micah);
}


