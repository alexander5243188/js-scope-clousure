var a; // delaración
var b = 'b' // declaramos y asignamos
b = 'bb' // reasignacion
var a = 'aa' // reasignación

//Global scope
fruit = "orange";

function bestFruit (){
    console.log(fruit);    
}

bestFruit();

function countries(){
    country = 'Bolivia';
    console.log("Dentro de la funcion ",country);
}

countries();
console.log("Fuera de la funcion ",country);