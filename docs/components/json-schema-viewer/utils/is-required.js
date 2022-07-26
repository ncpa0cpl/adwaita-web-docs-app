export const isRequired = (schema, property) => {
  if (!schema || !property)
    return true;
  return !!(schema.required === true || Array.isArray(schema.required) && schema.required?.includes(property));
};
