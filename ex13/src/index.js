// Only change code below this line
var fiveNumbers="";
function inverseWhile() {
var i = 5;
while (i>-1) {
   if (i>0) {
    fiveNumbers += i + ","; 
   } else {
    fiveNumbers += i;
   }
    i--;
}   
return fiveNumbers; 
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;