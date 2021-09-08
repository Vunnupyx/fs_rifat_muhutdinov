/*todo: это дз должно лежать в отдельной папке на уровне с HTML+CSS Advanced и назвать JS Basic*/
/*todo: подключи все jsки к HTMLкам, чтобы я смог проверить*/
/*todo: после того как исправишь, удали todo*/

let a = 100;
let b = 150;
console.log(a, b); // 100 150

//Временная переменная
let temp = a;
a = b;
b = temp;
console.log(a, b); // 150 100


//Деструктурирующее присваивание
[a, b] = [b, a];
console.log(a, b); // 100 150


//Сложение и вычитание
a = a + b;
b = a - b;
a = a - b;
console.log(a, b) // 150 100

//Побитовый оператор XOR
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b) // 100 150
