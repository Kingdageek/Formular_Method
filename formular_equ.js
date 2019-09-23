function solveQuadEquWithFormularEqu(a,b,c) {
    // debugger;
    let discriminant = getDiscriminant(a,b,c);
    let answer;
    switch (discriminant >= 0) {
        case false:
            answer = NaN;
            break;
        case true:
            answer = getSolutionsForX(a,b,discriminant);
            break;
    }
    return answer
}

function getDiscriminant(a,b,c) {
    let discriminant = Math.pow(b,2) - ( 4 * a * c);
    return discriminant;
}

function getSolutionsForX(a,b,discriminant) {
    let rightOfTheSigns = Math.sqrt(discriminant) / ( 2 * a);
    let leftOfTheSigns = - 1 * b / ( 2 * a);
    let x1 = leftOfTheSigns + rightOfTheSigns;
    let x2 = leftOfTheSigns - rightOfTheSigns;
    let X = [ x1, x2 ];
    return X;
}

console.log(solveQuadEquWithFormularEqu(1,2,1));
console.log(solveQuadEquWithFormularEqu(1,6,5));
console.log(solveQuadEquWithFormularEqu(2,2,1));
