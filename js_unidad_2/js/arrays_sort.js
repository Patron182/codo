
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

var arrayStr = [];
var arrayInt = [];
var arrayFloat = [];

function initializeArrays(arraysSize){
    for (let i = 0; i < arraysSize; i++ ) {
        arrayStr.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        arrayInt.push(Math.floor((100000) * Math.random()));
        arrayFloat.push(parseFloat((100000 * Math.random()).toFixed(2)));
    }
     
}

initializeArrays(10);

//se muestran en pantalla y en consola
document.getElementById("arrayStr").innerHTML = arrayStr;
console.log(arrayStr);
console.log(arrayStr.sort());
document.getElementById("arrayStrSort").innerHTML = arrayStr;

document.getElementById("arrayInt").innerHTML = arrayInt;
console.log(arrayInt.sort());
document.getElementById("arrayIntSort").innerHTML = arrayInt;
console.log(arrayInt.sort((a,b)=>a-b));
document.getElementById("arrayIntSortNumber").innerHTML = arrayInt;


document.getElementById("arrayFloat").innerHTML = arrayFloat;
console.log(arrayFloat.sort());
document.getElementById("arrayFloatSort").innerHTML = arrayFloat;
console.log(arrayFloat.sort((a,b)=>a-b));
document.getElementById("arrayFloatSortNumber").innerHTML = arrayFloat;









