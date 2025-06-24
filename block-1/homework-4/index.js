/* 
    Task 1
*/
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
};

Object.defineProperties(user, {
  firstName: {
    value: 'John',
    writable: false,
  },
  lastName: {
    value: 'Doe',
    writable: false,
  },
  age: {
    value: 30,
    writable: false,
  },
  email: {
    value: 'john.doe@example.com',
    writable: false,
  },
});

// all changes are ignored
user.firstName = 'Lucas';
user.lastName = 'Montecino';
user.age = 25;
user.email = 'lucas@example.com';

// console.log(user);

user.updateInfo = function (info) {
  // { firstName: 'Jane', age: 32 }
  for (let key in info) {
    Object.defineProperty(user, key, {
      value: info[key],
      writable: false,
    });
  }
};

user.updateInfo({ firstName: 'Jane', age: 32 });

Object.defineProperty(user, 'address', {
  value: {},
  writable: true,
});

// --------------------------------------------------------------------

/* 
    Task 2
*/

const product = {
  name: 'Laptop',
  price: 1000,
  quantity: 5,
};

const changeProperties = (obj, propertyName, updateValues) => {
  Object.defineProperty(obj, propertyName, updateValues);
};

changeProperties(product, 'price', {
  value: 1000,
  enumerable: false,
  writable: false,
});

changeProperties(product, 'quantity', {
  value: 5,
  enumerable: false,
  writable: false,
});

// console.log(Object.getOwnPropertyDescriptors(product));

const getTotalPrice = (obj) => {
  const { value: price } = Object.getOwnPropertyDescriptor(obj, 'price');
  const { value: quantity } = Object.getOwnPropertyDescriptor(obj, 'quantity');

  return price * quantity;
};

const totalPrice = getTotalPrice(product);
// console.log(totalPrice);

const newUser = {
  firstName: 'Lucas',
  lastName: 'Montecino',
  age: 30,
  occupation: 'Full Stack Developer Junior',
};

const deleteNonConfigurable = (obj, propertyName) => {
  const descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
  if (obj.hasOwnProperty(propertyName)) {
    if (!descriptor.configurable)
      throw new Error('The property is set to non-configurable');
    const property = propertyName;
    delete propertyName;
    return `${property} deleted successfully`;
  } else {
    return 'No property found';
  }
};

// try {
//   console.log(deleteNonConfigurable(Math, 'PI'));
// } catch (error) {
//   console.error({ error: error.message });
// }

// --------------------------------------------------------------------

/* 
  Task 3 
*/

function CreateBankAccount(amount) {
  this._balance = amount;
  Object.defineProperty(this, 'formattedBalance', {
    get() {
      return this._balance.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
      });
    },
  });

  Object.defineProperty(this, 'balance', {
    set(value) {
      this._balance = value;
    },
  });

  this.transfer = function (bankOne, bankTwo, amount) {
    if (bankOne._balance >= amount) {
      bankTwo.balance = bankTwo._balance + amount;
      bankOne.balance = bankOne._balance - amount;
    } else
      throw new Error(
        "You don't have the necessary amount to perform the operation"
      );
  };
}

const bankAccount = new CreateBankAccount(1000);
const bankAccountTwo = new CreateBankAccount(0);

// try {
//   bankAccount.transfer(bankAccount, bankAccountTwo, 300);
//   console.log(bankAccount.formattedBalance, bankAccount._balance);
//   console.log(bankAccountTwo.formattedBalance, bankAccountTwo._balance);
// } catch (error) {
//   console.error({ error: error.message });
// }

// --------------------------------------------------------------------

/* 
  Task 4
*/

const createImmutableObject = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    Object.defineProperty(newObj, key, {
      value: createImmutableObject(obj[key]),
      enumerable: true,
    });
  }
  return newObj;
};

const immutableObj = createImmutableObject(user);
immutableObj.firstName = 'Lucas';
immutableObj.age = 20;
// console.log(immutableObj);

// --------------------------------------------------------------------

/* 
  Task 5
*/

const observeObject = (obj, cb) => {
  const proxy = new Proxy(obj, {
    get(target, prop) {
      cb(prop, 'get');
      return target[prop];
    },
    set(target, prop, value) {
      cb(prop, 'set');
      target[prop] = value;
      return true;
    },
  });

  return proxy;
};

const observedUser = observeObject(user, (prop, action) =>
  console.log(`${prop} ${action}`)
);

// observedUser.lastName = 'Montecino';
// console.log(observedUser.lastName);

// observedUser.firstName = 'Lucas';
// console.log(observedUser.firstName);

// --------------------------------------------------------------------

/* 
  Task 6
*/

const myObj = {
  author: 'Jk Rowling',
  books: [1, 2, 3],
  address: {
    city: 'London',
    country: 'England',
    street: {
      zipCode: '08054',
      number: '813',
    },
  },
};

const deepCloneObject = (obj, map = new WeakMap()) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const newObj = Array.isArray(obj) ? [] : {};
  map.set(obj, newObj);

  for (const key of Object.keys(obj)) {
    newObj[key] = deepCloneObject(obj[key], map);
  }

  return newObj;
};

const deepCopy = deepCloneObject(myObj);
// console.log(deepCopy);

const otherObj = { a: 1, b: { c: 2 } };
const secondDeep = deepCloneObject(otherObj);

// console.log(secondDeep);
// console.log(secondDeep !== otherObj);
// console.log(secondDeep.b !== otherObj.b);

const thirdObj = { name: 'circular' };
thirdObj.self = thirdObj;

const circularClone = deepCloneObject(thirdObj);
// console.log(circularClone !== thirdObj);
// console.log(circularClone.self === circularClone);

// --------------------------------------------------------------------

/* 
  Task 7
*/

const validateObject = (obj, schema) => {
  for (const key in schema) {
    if (schema[key].required) {
      if (!obj[key]) return false;
      if (typeof obj[key] !== schema[key].type) return false;
    } else if (obj[key]) {
      if (typeof obj[key] !== schema[key].type) return false;
    }
  }

  return true;
};

const object = {
  name: 'lucas',
  age: 30,
  email: 'lucasm@exmaple.com',
};

const schema = {
  name: { type: 'string', required: true },
  age: { type: 'number', required: true },
  email: { type: 'string', required: false },
};

const result = validateObject(object, schema);
// console.log(result);
