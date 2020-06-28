var rect = require('./rectangle');
// var rect = {
//     perimeter: (x, y) => 2*(x + y),
//     area: (x, y) => x*y
// };
function solveRect(l , b) {
    const rectInstance = {
        perimeter: 0,
        area: 0
    }
    if ( l <= 0 || b <= 0 ){
        //Error handling
        console.log("Parameters error: must greater than zero!!!");
    }
    else{
        let area = rect.area(l , b);
        let perimeter = rect.perimeter(l , b);
        rectInstance.area = area;
        rectInstance.perimeter = perimeter;
    }

    return rectInstance;
}

console.log(JSON.stringify( solveRect(0 , 0)));
console.log(JSON.stringify( solveRect(1 , 2)));
console.log(JSON.stringify( solveRect(6 , 2)));