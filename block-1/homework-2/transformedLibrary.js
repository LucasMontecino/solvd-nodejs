import {
  convertNumberHelper,
  validateBoolean,
  validateNumber,
  validateSerialization,
  validateType,
} from './utils/helper.js';
import logger from './utils/logger.js';

const transformedLibrary = {
  addValues(a, b) {
    try {
      if (validateType(a) || validateType(b))
        throw new Error('Please provide numbers or strings as values.');
      if (!a || !b)
        throw new Error(
          'You must provide two values to make the addition possible.'
        );

      return a + b;
    } catch (error) {
      logger.error({ error: error.message });
    }
  },

  stringifyValue(value) {
    if (validateSerialization(value)) {
      return JSON.stringify(value);
    }
    return value.toString();
  },

  invertBoolean(value) {
    try {
      if (validateBoolean(value))
        throw new Error('This method only accepts boolean values.');
      return !value;
    } catch (error) {
      logger.error({ error: error.message });
    }
  },

  convertToNumber(value) {
    try {
      if (!validateBoolean(value)) {
        return value ? 1 : 0;
      }
      if (validateNumber(value)) return value;
      if (validateSerialization(value)) {
        let result = '';
        for (let curr of Object.values(value)) {
          result += curr;
        }
        return convertNumberHelper(result);
      }
      return convertNumberHelper(value);
    } catch (error) {
      logger.error({ error: error.message });
    }
  },

  coerceType(value, type) {
    try {
      switch (type) {
        case 'number': {
          const result = parseInt(value);
          if (isNaN(result)) throw new Error('Cannot coerce value to number.');
          return result;
        }
        case 'string': {
          const result = value.toString();
          return result;
        }
        case 'boolean': {
          return Boolean(value);
        }
        case 'object': {
          const result = Object(value);
          if (!result) throw new Error('Cannot coerce value to an object.');
          return result;
        }
        default:
          throw new Error('Cannot coerce value.');
      }
    } catch (error) {
      logger.error({ error: error.message });
    }
  },
};

export default transformedLibrary;
