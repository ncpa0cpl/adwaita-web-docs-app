import type { JSONSchema4 } from "json-schema";

export const isRequired = (
  schema?: JSONSchema4,
  property?: string
): boolean => {
  if (!schema || !property) return true;

  return !!(
    schema.required === true ||
    (Array.isArray(schema.required) && schema.required?.includes(property))
  );
};
