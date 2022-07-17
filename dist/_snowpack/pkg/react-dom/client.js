import {c as createCommonjsModule} from "../common/_commonjsHelpers-b3efd043.js";
import {r as reactDom} from "../common/index-cbcc3865.js";
import "../common/index-701b86fb.js";
var client = createCommonjsModule(function(module, exports) {
  {
    var i = reactDom.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    exports.createRoot = function(c, o) {
      i.usingClientEntryPoint = true;
      try {
        return reactDom.createRoot(c, o);
      } finally {
        i.usingClientEntryPoint = false;
      }
    };
    exports.hydrateRoot = function(c, h, o) {
      i.usingClientEntryPoint = true;
      try {
        return reactDom.hydrateRoot(c, h, o);
      } finally {
        i.usingClientEntryPoint = false;
      }
    };
  }
});
var createRoot = client.createRoot;
export {createRoot};
