function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(1,1));
var mySum = function getSum(num1, num2) {
    if (typeof num1 == 'string' && typeof num2 == 'string') {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum('66',1));
function getName(fname, lname) {
    if (lname == undefined) {
        return fname;
    }
    else {
        return fname + lname;
    }
}
console.log('aini', 'glolaz');
console.log('aini');
function myVoid() {
}
