import { c as createCommonjsModule, r as reactDom } from '/_snowpack/pkg/react-dom.v18.2.0/common/index-fe5f98d4.js';
import '/_snowpack/pkg/react.v18.2.0.js';
import '/_snowpack/pkg/scheduler.v0.23.0.js';

var client = createCommonjsModule(function (module, exports) {


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
export default client;
var hydrateRoot = client.hydrateRoot;
export { client as __moduleExports, createRoot, hydrateRoot };
