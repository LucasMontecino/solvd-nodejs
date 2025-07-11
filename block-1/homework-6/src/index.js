import { localize } from './localize.js';
import { highlightKeywords } from './highlightKeywords.js';
import { multiline } from './multiline.js';
import { debounce } from './debounce.js';
import { throttle } from './throttle.js';
import { curry } from './curry.js';

// Quasi-Tagged Templates
const greeting = 'greet';
const introduction = 'intro';
const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;
console.log(localizedGreeting);
console.log(localizedIntroduction);

// Advanced Tagged Template
const keywords = ['JavaScript', 'template', 'tagged'];
const template =
  'Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.';

const highlighted = highlightKeywords(template, keywords);
console.log(highlighted);

// Multiline Tagged Template
const code = multiline`function add(a, b){
return a + b;
}
`;

console.log(code);

// Debounce Function
const debouncedSearch = (query) => {
  console.log('Searching for:', query);
};

const debouncedSearchHandler = debounce(debouncedSearch, 500);

const inputElement = document.getElementById('search-input');

inputElement.addEventListener('input', (event) => {
  debouncedSearchHandler(event.target.value);
});

// Throttle Function
const onScroll = (event) => {
  console.log('Scroll event:', event);
};

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener('scroll', throttledScrollHandler);

// Currying Function
const sum = (a, b, c) => {
  return a + b + c;
};

const curriedSum = curry(sum, 3);

const step1 = curriedSum(2);
const step2 = step1(4);
const result = step2(5);

console.log('Result:', result);
