import Highlight from "../_snowpack/pkg/react-highlight.js";
import indent from "../helpers/indent.js";
import "../styles/highlight.css.proxy.js";
const styles = {
  root: {
    "& pre": {
      padding: "1em"
    },
    "& code": {
      border: "none",
      padding: 0
    }
  }
};
function CodeExample({classes, text, children}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.root
  }, /* @__PURE__ */ React.createElement(Highlight, {
    className: "javascript",
    children: indent(text || children)
  }));
}
export default CodeExample;
