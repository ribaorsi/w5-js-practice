var myFirstString = "ez egy string";
var mySecondString = 'ez is egy string';
var myThirdString = `ez egy több
soros string`;

var MyFirstNumber = 1;
var MySecondNumber = 35;

var MyFirstBoolean = true;

var MyFirstArray = ["1984", "Lord of the Rings","A Mester és Margarita", "Galaxis útikalauz stopposoknak", "Vita Brevis"]
var MySecondArray = [1984, "Lord of the Rings","A Mester és Margarita", "Galaxis útikalauz stopposoknak", "Vita Brevis"]

var MyFirstObject = {
    title: "Lord of the Rings",
    publication: 1954,
    translations: ["hu", "de", "fr", "jp"]
};

console.log(MyFirstArray[0]);

console.log(MyFirstObject.title);
console.log(MyFirstObject["title"]);

var a = 1;
var b = 2;
var c = a+b;
console.log(c);

function add(firstNumber, secondNumber) {
    console.log(firstNumber+secondNumber);
}
add(1,2);
add(17948, 18773);

var subtraction = function(a,b){
    if (a>b) {
        console.log(a-b);
    } else if (a===b) {
        console.log(a-b);
        console.log("A végeredmény nulla lesz");
    } else {
        console.log(b-a);
    }
}

subtraction(3,6);
subtraction ("15", 15);
add ("15", 15);

function ifElseCheck(text){
    if (text === "Hello") {
        console.log("A text az volt h Hello")
    } else if (text === "Hello") {
        console.log("A text megint Hello")
    }
}
ifElseCheck ("Hello");

function compare(a,b){
    console.log("== ", a == b);
    console.log("=== ", a === b);
    var c = a+b;
    console.log(typeof c);
}
compare("1984", 1984);

var myFirstFunctionVariable = function(){
    console.log("Ez egy függvény amit változóban tároltunk el");
}
myFirstFunctionVariable();

(function(){
    console.log("?");
}()) //immediately invoked function expression, akkor volt jelentősége amikor nem volt let és const

var anotherVar = myFirstFunctionVariable();
//ha ott a zárójelpár mögötte, akkor lefut! Értéke undefined mert már lefutott a fv és kiüríti!

var anotherVar2 = myFirstFunctionVariable;
anotherVar2();

console.log(typeof anotherVar2);

//függvényt argumentumként is átadhatunk egy másik függvénynek
function theLastFunction(obj1, obj2){
    console.log("obj1 értéke", obj1);
    console.log("obj1 típusa", typeof obj1);
    console.log("obj2 értéke", obj2);
    console.log("obj2 típusa", typeof obj2);
    console.log(obj2());

}
theLastFunction("hello", function (){
    return "I'm calling theLastFunction"
})
/*
var window = {
    addEventListener: function (eventName, eventFunction){
        ...
    }
}
 */
window.addEventListener("load", function(){
    console.log("Az oldal betöltődött");
}
);




