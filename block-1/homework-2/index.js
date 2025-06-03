/* 

  PLEASE open the README file and read the documentation before start using the library.

*/

import transformedLibrary from './transformedLibrary.js';
import logger from './utils/logger.js';

logger.info(transformedLibrary.addValues(10, '5'));
logger.info(
  transformedLibrary.stringifyValue({
    name: 'lucas',
    age: 30,
  })
);
logger.info(transformedLibrary.invertBoolean(false));
logger.info(
  transformedLibrary.convertToNumber({
    first: 10,
    second: 20,
  })
);
logger.info(transformedLibrary.coerceType(10, 'string'));
