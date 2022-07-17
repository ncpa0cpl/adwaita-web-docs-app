import prettier from "../_snowpack/pkg/prettier.js";
import parserBabel from "../_snowpack/pkg/prettier/esm/parser-babel.js";
import {sortBy} from "../_snowpack/pkg/rambda.js";
const DEFAULT_PROP_DESCRIPTIONS = {
  value: "The value of the component",
  defaultValue: "The initial value of the component",
  className: "The class of the component",
  size: "The size of the component"
};
const border = "#ccc";
const styles = {
  root: {
    border: `1px solid ${border}`,
    borderCollapse: "collapse",
    "& td, & th": {
      border: `1px solid ${border}`
    },
    "& th": {
      padding: "1rem 10px",
      textAlign: "left",
      opacity: 0.5,
      fontSize: 11,
      letterSpacing: 0.2,
      textTransform: "uppercase"
    },
    "& td": {
      borderTop: "none",
      borderBottom: "none",
      padding: "0.5rem 10px",
      verticalAlign: "top",
      fontSize: 14
    },
    "& td:nth-child(1)": {
      fontWeight: "bold",
      fontFamily: "monospace"
    },
    "& td:nth-child(3)": {
      textAlign: "center"
    },
    "& td:nth-child(4)": {
      minWidth: 200
    },
    "& pre": {
      margin: 0
    }
  }
};
function DocTable({classes, data}) {
  const {propTypes = {}, defaultProps = {}} = data;
  const keys = sortBy((k) => !propTypes[k].required, Object.keys(propTypes));
  return /* @__PURE__ */ React.createElement("table", {
    className: classes.root
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Type"), /* @__PURE__ */ React.createElement("th", null, "Required"), /* @__PURE__ */ React.createElement("th", null, "Description"), /* @__PURE__ */ React.createElement("th", null, "Default"))), /* @__PURE__ */ React.createElement("tbody", null, keys.map((key) => {
    var _a;
    return /* @__PURE__ */ React.createElement("tr", {
      key
    }, /* @__PURE__ */ React.createElement("td", null, key), /* @__PURE__ */ React.createElement("td", null, formatType(propTypes[key].value)), /* @__PURE__ */ React.createElement("td", null, propTypes[key].required ? "Yes" : null), /* @__PURE__ */ React.createElement("td", null, propTypes[key].description || DEFAULT_PROP_DESCRIPTIONS[key]), /* @__PURE__ */ React.createElement("td", null, formatDefault((_a = defaultProps[key]) == null ? void 0 : _a.value)));
  })));
}
export default DocTable;
function formatType(type) {
  const doc = type.replace(/prop\./g, "").replace(/\.isRequired$/, "").replace(/\bshape\b/g, "");
  const prettyDoc = prettier.format(doc, {
    parser: "babel",
    plugins: [parserBabel],
    semi: false,
    printWidth: 25
  }).trim();
  if (prettyDoc.includes("\n"))
    return /* @__PURE__ */ React.createElement("pre", null, prettyDoc);
  return /* @__PURE__ */ React.createElement("code", null, prettyDoc);
}
function formatDefault(value) {
  if (!value)
    return null;
  return /* @__PURE__ */ React.createElement("code", null, value);
}
