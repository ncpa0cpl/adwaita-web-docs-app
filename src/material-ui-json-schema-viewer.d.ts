declare module "material-ui-json-schema-viewer" {
  import type { JSONSchema4 } from "json-schema";
  const SchemaViewer: React.ComponentType<{
    schema: JSONSchema4;
    references?: Array<JSONSchema4>;
  }>;
  export default SchemaViewer;
}
