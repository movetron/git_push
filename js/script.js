'use strcict';
//1
console.log('arr' + '- object');
console.log(4 + '- object');
console.log(4 + +'5'); //СТРОКА СТАНОВИТСЯ ЧИСЛОМ

//2
let incr = 10,
    decr = 10;
//Постфиксный инкремент и декримент
incr++;
decr--;
//Префиксиный инкремент и декримент
++incr;
--decr;
console.log(incr);
console.log(decr);
//ничего не изменится
console.log(incr++);
console.log(decr--);
//изменится
console.log(++incr);
console.log(--decr);

//3
console.log(5 % 2); //1

console.log(2 * 4 == 8); //true
console.log(2 * 4 == '8'); //true
console.log(2 * 4 === '8'); //false
//  != !== 
//4
// && - и
// || - или

const isChecked = true,
    isClose = true;
console.log(isChecked && isClose); // true
console.log(isChecked || isClose);
console.log(isChecked && !isClose);

//5 Порядок выполнения операторов