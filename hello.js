console.log("hello");//prints hello to terminal

const a=10;
const b=20; //const is constant. you can't change the value of b after this
console.log("a is "+a);
if (a!=b){
    console.log("a is not equal to b");
} //these curly braces are called a scope
if (a!=b){
    var c=10
    //c was declared inside this scope
}
console.log(c)//this works. but if we used let or const to declare the variable c inside the scope we couldn't call c outside the scope
n=6
for(let i=0; i<n; i++){
    console.log(i);
    } //prints and then increments i again and again until its value reaches n-1
//note that the inside of the scope is executed before incrementing i
function print(x) {
    console.log(x)
}      //created the print function. it takes the argument and displays it onto the terminal
print (5);//5 is the argument here
const cowsay= require("cowsay");
console.log(cowsay.say({
    text : "I know what you did",
    e : "..",
    T : "U "
})); //makes use of cowsay function imported from cowsay package




















