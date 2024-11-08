let x = 123;
let y = 2;
let z = 50;
console.log(`Мне уже ${x} года и ${y} месяца`);
let ar = [];
let sum = 0;
let str = ``;
for (let i = 0; i < 6; ++i) {
    const el = Math.floor(Math.random() * 10);
    ar.push(el);
    console.log(`[${el}]`);
    str += `[${el}] `;
    sum += el;

}
console.log(ar);
console.log(sum);
console.log(ar.pop());
console.log(ar.shift());
console.log(str);
function strangeThingsHappen(num, str, num1) {
    return str + num + num1;
}
let str1 = "же5сть";
console.log(strangeThingsHappen(x, str1, y));
function FindMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log(`Максимум из 3-х чисел: ${FindMax(x, y, z)}`);
let stringa = "Антон";
function PeopleTalk(str, operation) {
    return operation(str);
}
function Greeting(str) {
    console.log(`Привет! ${str}! Приятно познакомиться :)`)
}
function Byebye(str) {
    console.log(`Пока! ${str}! Было приятно иметь с тобой дело ^_^`)
}
PeopleTalk(stringa, Greeting);
PeopleTalk(stringa, Byebye);
const Person =
{
    name: "Agile",
    age: 30,
    work: "Plaksin",
    someCalc: function () { return this.age / 10; }
}
console.log(Person.name);
console.log(Person.someCalc());
function Book(title, author) {
    this.title = title;
    this.author = author;
}
const book = new Book("Преступление и наказание", "Ф.Достоевский")
