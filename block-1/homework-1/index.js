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

    if (
      current === '' ||
      parseInt(current) < parseInt(divisor)
    ) {
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
