//Listas
const names = ["felipe", "João", "Julia", 10, false];

const joao = names[1];

//adicionar no final da lista
names.push("pedro");

//console.log(names);

//adicionar no inicio da lista
names.unshift("Fernanda");

//console.log(names);

//excluir do fim da lista
names.pop();
names.pop();
names.pop();

//reacimilar um nome da lista
names[3] = "Gustavo";

//Fala a posição do Felipe na lista
console.log(names.indexOf("Felipe"));

//Ordena a lista em ordem alfabetica
const sortedNames = names.sort();

console.log(names);
console.log(sortedNames);
