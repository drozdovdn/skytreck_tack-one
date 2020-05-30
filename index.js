/**
 * (1)
 * Сортировка массива
 *
 * Релизуйте сортировку массива
 * @param   {any[]}     values  сортируемый массив
 * @returns {any[]}
 */
//Первый вариант
function sort(values) {
  return values.sort((a,b) => a - b)
}

// console.log(sort([7, 2, 99, 5, 1, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]

//Второй вариант
function sortMy(value) {
  for(let i=0; i <= value.length-1; i++) {
    for(let j=i; j <= value.length; j++) {
      if(value[i] > value[j]) {
        const param = value[i];
        value[i] = value[j];
        value[j] = param;
      }
    }
  }
  return value;
}
// console.log(sortMy([7, 2, 99, 5, 1, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]

/**
 * (2)
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
  let result = '';
  let param = '';
  let count = 0;
  for (let i=0; i<=value.length; i++) {
    if(param === value[i]) {
      count++
    } else if(count >= 1) {
      count++;
      result += param + count;
      param = value[i];
      count = 0;
    } else {
      result += param;
      param = value[i];
      count = 0;
    }
  }
  return result;
}

// console.log(rle('AAVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD')); // -> A2V3B3V2XDHJF4D6HA4J3D2SLS3D4

/**
 * (3)
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */
function isBalanced(input) {
  let count1 = 0;
  let count2 = 0;
  for(let key of input) {
    key === '{' ? count1++ : count2++;
  }
  return count1 === count2
}

// console.log('balanced:', isBalanced('{{}{}}{}')); // true
// console.log('not balanced:', isBalanced('{}{{}')); // false

/**
 * (4)
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */

function isPalindrome(value) {
    let value1 = value.toLowerCase().split('').reverse().filter(el => el !== ' ').join('');
    let value2 = value.toLowerCase().split('').filter(el => el !== ' ').join('');
    return  value1 === value2;
};

// console.log(isPalindrome('abcd')); // false
// console.log(isPalindrome('A man a plan a canal Panama'));// true

/**
 * (5)
 * Получения массива уникальных значений
 * @param  {number[]} values
 * @return {*}
 */
function uniq(values) {
  let mass = [];
  for(let key of values) {
    if(!mass.includes(key)){
      mass.push(key);
    }
  }
  return mass;
}

// console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));

/**
 * (6)
 *  Сжатие целочисленного массива
 *  */
function zip(...values) {
  const sortArr = values.sort((a,b)=> a-b);
  const result = [];

  let position = 0;
  for (let i=0; i <= sortArr.length; i++) {
    if(sortArr[i]-i+position !== sortArr[position]){
      if(sortArr[i-1] === sortArr[position]) {
        result.push(sortArr[position].toString());
      } else {
        result.push(sortArr[position] + '-' + sortArr[i-1]);
      }
      position = i;
    }
  }
  return result.join(',');
}

// console.log(zip(3, 2, 1, 5, 6, -1, 10)); // "-1,1-3,5-6,10"

/**
 * (7)
 *  Проверка массива на монотонность
 *  */
function isMono(...values) {
  let flag = true;
  for(let i=0; i <= values.length - 2; i++) {
    if(!(values[i] <= values[i+1])) {
      flag = false;
    }
  }
  if(!flag) {
    flag = true;
    for(let i=0; i <= values.length - 2; i++) {
      if(!(values[i] >= values[i+1])) {
        flag = false;
      }
    }
  }


  return flag;
}

// console.log(isMono(0, 1, 5, 9, 15)); // true

/**
 * (8)
 * Перенос нулей в конец массива
 * @param {number[]} input
 * @returm {number[]}
 */
function zsort(input) {
  for (let i=0; i < input.length-1; i++) {
    for( let j=i; j < input.length; j++) {
     if(input[i] === 0) {
       let zero = input[i];
       input[i] = input[j];
       input[j] = zero;
     }
    }
  }
  return input;
}
//Проверка
// console.log(zsort([1,0,2,3,0,4,0])); //[ 1, 2, 3, 4, 0, 0, 0 ]

/**
 * (9)
 * Числа фибоначи
 * Напишите функцию, которая возвращает n-ую запись в последовательности,
 * где n — это число, которое вы передаёте в качестве аргумента функции.
 * @param   {number} n
 * @returns {number}
 */
function fibonacci(n) {
  if(n < 2) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

// console.log('3 ->', fibonacci(3)); // 2
// console.log('7 ->', fibonacci(7)); // 13

/**
 * (10)
 * Реализовать функцию sum
 * */
var sum = function (...args) {
  return args.reduce(( a,b ) => a+b )
};

// console.log("result:", sum(1, 2, 3, 4, 5));

/**
 * (11)
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if (left.length !== right.length) return false;
  let obj = {};

  for(let i=0; i<=left.length; i++){
    let name = left[i];
    let value = right[i];

    if(obj[name] === undefined) {
      obj[name] = value;
    }    else if (obj[name] !== value) {
      return false;
    }
  }
  return true;
}

// console.log('egg -> add:', isIsomorphic('egg', 'add')); // true
// console.log('paper -> title:', isIsomorphic('paper', 'title')); // true

/**
 * (12)
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */
function missing(values) {
  let summ = values.reduce((a,b)=> a+b,0);
  let eternalSumm = (values.length+1)*((values.length+1)+1)/2;
  let result = eternalSumm-summ;
  if(result === values.length+1){
    return
  } else return eternalSumm-summ;

}

// console.log(missing([1, 4, 3])); //
// console.log(missing([5, 1, 4, 2])); // 3
// console.log(missing([1, 2, 3, 4])); // undefined

/**
 * (13)
 * Реализовать метод `.delay`
 */

Function.prototype.delay = function (time) {
  setTimeout(this, time);
};

foo.delay(300);

function foo() {
  console.log("Wow!");
}

/**
 * (14)
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */

function intersection(left, right) {
  let result = [];
  for(let i=0; i <= left.length-1; i++) {
    for(let j=0; j <= right.length; j++) {
      if(left[i] === right[j]) {
        if(!result.includes(left[i])) result.push(left[i])
      }
    }
  }
  return result
}

// console.log(intersection(
//     [1, 2, 3, 4, 5],
//     [2, 8, 3]
// ));

/**
 * (15)
 * Текст задачи:
 * Задача исправить сласс Bomb
 * Сейчас console выводит "undefined", нужно это исправить
 */

function Bomb(message, delay) {
  this.message = message;
  setTimeout(function () {
    this.blowUp
  }, delay * 1000); // взрываем через delay sec
}

Bomb.prototype.blowUp = function () {
  console.log(this.message);
};

new Bomb("Allahu akbar!", 0.5).blowUp();

/**
 * (16)
 * Задача: Доработать функцию getRange
 */
function getRange(length, callback) {
  var values = [];
  for (var i = 0; i < length; i++) {
    (function(j){
      setTimeout(function () {
        values.push(j);
        if(j === length-1) callback(values);
      }, i * 10);
    })(i)
  }

}

getRange(5, function (values) {
  console.log(values);
});
