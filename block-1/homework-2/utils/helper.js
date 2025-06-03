export const validateType = (value) =>
  typeof value !== 'string' && typeof value !== 'number';

export const validateSerialization = (value) => typeof value === 'object';

export const validateBoolean = (value) => typeof value !== 'boolean';

export const validateString = (value) => typeof value === 'string';

export const convertNumberHelper = (value) => {
  const numberValue = parseInt(value);
  if (isNaN(numberValue)) throw new Error('Conversion is not possible.');
  return numberValue;
};

export const validateNumber = (value) => typeof value === 'number';
