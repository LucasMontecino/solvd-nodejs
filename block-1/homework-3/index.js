/* 
    Task 1
*/

const myProducts = [
  { id: '1', name: 'Laptop', price: '999' },
  { id: '2', name: 'Headphones', price: '199' },
  { id: '3', name: 'Smartphone', price: '699' },
  { id: '4', name: 'Keyboard', price: '89' },
  { id: '5', name: 'Monitor', price: '249' },
];

const calculateDiscountedPrice = (products, discountPercentage) => {
  const discount = discountPercentage / 100;
  return products.map((item) => ({
    ...item,
    price: (Number(item.price) - Number(item.price) * discount)
      .toFixed(1)
      .toString(),
  }));
};

// console.log('new array...', calculateDiscountedPrice(myProducts, 20));
// console.log('old array...', myProducts);

const calculateTotalPrice = (products) => {
  return products.reduce((acc, el) => acc + Number(el.price), 0);
};

// console.log('result...', calculateTotalPrice(myProducts));
// console.log('old array...', myProducts);

// ---------------------------------------------------------------------

/* 
    Task 2
*/

const myPerson = {
  firstName: 'Lucas',
  lastName: 'Montecino',
};

const getFullName = (person) => `${person.firstName} ${person.lastName}`;

// console.log(getFullName(myPerson));

const filterUniqueWords = (string) => [...new Set(string.split(' '))].sort();

// const myWord = 'the quick brown fox quick over the lazy fox';
// const result = filterUniqueWords(myWord);
// console.log('the result...', result);

const myStudents = [
  {
    id: 1,
    name: 'Alice Johnson',
    grades: [85, 92, 78],
  },
  {
    id: 2,
    name: 'Brian Smith',
    grades: [90, 88, 95],
  },
  {
    id: 3,
    name: 'Clara Evans',
    grades: [70, 75, 80],
  },
  {
    id: 4,
    name: 'David Lee',
    grades: [60, 65, 58],
  },
];

const getAverage = (arr) => arr.reduce((acc, el) => acc + el, 0) / arr.length;
const getGrades = (student) => student.grades;

const getAverageGrade = (students) => students.map(getGrades).map(getAverage);

// console.log('result...', getAverageGrade(myStudents));

// ---------------------------------------------------------------------

/* 
    Task 3
*/

const createCount = () => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
};

const myCounter = createCount();
const secondCounter = createCount();

const secondFirst = secondCounter();

const first = myCounter();
const second = myCounter();
const third = myCounter();
// console.log(
//   first,
//   'first',
//   second,
//   'second',
//   third,
//   'third',
//   secondFirst,
//   'the newest'
// );

const repeatFunction = (fn, number) => () => {
  if (number >= 0) {
    for (let i = 0; i < number; i++) {
      fn();
    }
  } else {
    let count = 0;
    const interval = setInterval(() => {
      fn();
      count++;
      if (count === 10) clearInterval(interval);
    }, 500);
  }
};

const sayHello = () => console.log('Hello!');
const repeat5Times = repeatFunction(sayHello, -1);
// repeat5Times();

// ---------------------------------------------------------------------

/* 
    Task 4
*/

// 3! = 3 * 2 * 1 = 6
// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
const calculateFactorial = (number, acc = 1) => {
  if (number === 0) return acc;
  return calculateFactorial(number - 1, acc * number);
};

// console.log(calculateFactorial(6));

// (2, 3) = 2 * 2 * 2 = 8
// (2, 5) = 32
// (3, 4) = 81
const power = (base, exponent) => {
  if (exponent === 1) return base;

  return base * power(base, exponent - 1);
};

// console.log(power(3, 4));

// ---------------------------------------------------------------------

/* 
    Task 5
*/

const lazyMap = (arr, map) => {
  let index = 0;

  return {
    next() {
      if (index >= arr.length) {
        return { done: true };
      } else {
        const value = map(arr[index]);
        index++;
        return { value, done: false };
      }
    },
  };
};

const myArr = [1, 3, 5];
const myFunc = (x) => x * 2;

const lazy = lazyMap(myArr, myFunc);

// console.log(lazy.next());
// console.log(lazy.next());
// console.log(lazy.next());
// console.log(lazy.next());

const fibonacciGenerator = () => {
  let a = 0;
  let b = 1;

  return {
    next() {
      const value = a;
      [a, b] = [b, a + b];
      return { value, done: false };
    },
  };
};

const fib = fibonacciGenerator();

// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
