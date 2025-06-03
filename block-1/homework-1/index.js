'use strict';
String.prototype.plus = function (str) {
  const a = this;
  const b = str;

  let i = a.length - 1;
  let j = b.length - 1;

  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    const firstDigit = parseInt(a[i], 10) || 0;
    const secondDigit = parseInt(b[j], 10) || 0;

    let sum = firstDigit + secondDigit + carry;
    carry = Math.floor(sum / 10);

    const resultDigit = sum % 10;

    result = `${resultDigit}${result}`;

    i--;
    j--;
  }

  return result;
};

String.prototype.minus = function (str) {
  const a = this;
  const b = str;

  let i = this.length - 1;
  let j = str.length - 1;

  let borrow = 0;
  let result = '';

  while (i >= 0) {
    let firstDigit = parseInt(a[i]) - borrow;
    let secondDigit = j >= 0 ? parseInt(b[j]) : 0;

    if (firstDigit < secondDigit) {
      firstDigit += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    const difference = firstDigit - secondDigit;

    result = `${difference}${result}`;

    i--;
    j--;
  }

  return parseInt(result).toString();
};

String.prototype.divide = function (str) {
  const dividend = this;
  const divisor = str;

  let result = '';
  let current = '';

  for (const digit of dividend) {
    current = `${current}${digit}`;
    console.log('initial current..', current);

    current = parseInt(current).toString();

    if (current === '' || parseInt(current) < parseInt(divisor)) {
      result = `0${result}`;
      console.log('the partial result...', result);
    } else {
      console.log('the else current...', current);
      let count = 0;
      while (parseInt(current) >= parseInt(divisor)) {
        current = current.minus(divisor);

        count += 1;
        console.log('the count...', count);
      }
      result = `${result}${count}`;
    }
  }

  return parseInt(result).toString();
};

String.prototype.multiply = function (str) {
  const a = this;
  const b = str;

  if (a === '0' || b === '0') return '0';

  let result = '';
  let zeroPadding = '';

  for (let i = str.length - 1; i >= 0; i--) {
    let carry = 0;
    let partial = '';

    for (let j = this.length - 1; j >= 0; j--) {
      let product = str[i] * this[j] + carry;
      carry = Math.floor(product / 10);
      let digit = product % 10;

      partial = `${digit}${partial}`;
    }

    if (carry > 0) {
      partial = `${carry}${partial}`;
    }

    partial = `${partial}${zeroPadding}`;
    result = result.plus(partial);
    zeroPadding += '0';
  }

  return result;
};

const codePlus = document.querySelector('.plus');

const myString = '255';
const result = myString.plus('412');

const codePlusContent = `
  <code class='code__child'><span class='keyword'>let</span> <span class='variable'>myString</span> = '${myString}'</code>
  <code class='code__child'><span class='keyword'>let</span> <span class='variable'>result</span> = <span class='variable'>myString</span>.plus('412')</code>
  <code class='code__child'>console.log(<span class='variable'>result</span>);</code>
  <p class='text-comment'>// result = '${result}';</p>
`;

codePlus.innerHTML = codePlusContent;

const codeMinus = document.querySelector('.minus');

const myString2 = '255';
const result2 = myString2.minus('122');

const codeMinusContent = `
  <code class='code__child'><span class='keyword'>let</span> <span class='variable'>myString</span> = '${myString2}'</code>
  <code class='code__child'><span class='keyword'>let</span> <span class='variable'>result</span> = <span class='variable'>myString</span>.minus('122')</code>
  <code class='code__child'>console.log(<span class='variable'>result</span>);</code>
  <p class='text-comment'>// result = '${result2}';</p>
`;

codeMinus.innerHTML = codeMinusContent;

const codeDivide = document.querySelector('.divide');

const myString3 = '144';
const result3 = myString3.divide('24');

const codeDivideContent = `
  <code class='code__child'><span class='keyword'>let</span> <span class='variable'>myString</span> = '${myString3}'</code>
  <code class='code__child'><span class='keyword'>let</span> <span class='variable'>result</span> = <span class='variable'>myString</span>.divide('24')</code>
  <code class='code__child'>console.log(<span class='variable'>result</span>);</code>
  <p class='text-comment'>// result = '${result3}';</p>
`;

codeDivide.innerHTML = codeDivideContent;

const codeMultiply = document.querySelector('.multiply');

const myString4 = '327';
const result4 = myString4.multiply('24');

const codeMultiplyContent = `
  <code class='code__child'><span class='keyword'>let</span> <span class='variable'>myString</span> = '${myString4}'</code>
  <code class='code__child'><span class='keyword'>let</span> <span class='variable'>result</span> = <span class='variable'>myString</span>.multiply('24')</code>
  <code class='code__child'>console.log(<span class='variable'>result</span>);</code>
  <p class='text-comment'>// result = '${result4}';</p>
`;

codeMultiply.innerHTML = codeMultiplyContent;
