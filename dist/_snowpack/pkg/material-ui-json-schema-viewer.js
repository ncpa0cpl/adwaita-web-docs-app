import {c as createCommonjsModule, d as getDefaultExportFromNamespaceIfNotNamed, g as getDefaultExportFromCjs} from "./common/_commonjsHelpers-b3efd043.js";
import {r as react} from "./common/index-701b86fb.js";
import {_ as _extends$5} from "./common/extends-b13c3e88.js";
import {_ as _inheritsLoose, a as _assertThisInitialized} from "./common/inheritsLoose-197a9db2.js";
import {c as clsx} from "./common/clsx.m-e1b0361e.js";
import {r as reactDom} from "./common/index-cbcc3865.js";
import {g as global} from "./common/_polyfill-node:global-acbc543a.js";
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target2[key] = source[key];
  }
  return target2;
}
var reactIs_development = createCommonjsModule(function(module, exports) {
  {
    (function() {
      var hasSymbol2 = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol2 ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol2 ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol2 ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol2 ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol2 ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol2 ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol2 ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol2 ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol2 ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol2 ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol2 ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type3) {
        return typeof type3 === "string" || typeof type3 === "function" || type3 === REACT_FRAGMENT_TYPE || type3 === REACT_CONCURRENT_MODE_TYPE || type3 === REACT_PROFILER_TYPE || type3 === REACT_STRICT_MODE_TYPE || type3 === REACT_SUSPENSE_TYPE || type3 === REACT_SUSPENSE_LIST_TYPE || typeof type3 === "object" && type3 !== null && (type3.$$typeof === REACT_LAZY_TYPE || type3.$$typeof === REACT_MEMO_TYPE || type3.$$typeof === REACT_PROVIDER_TYPE || type3.$$typeof === REACT_CONTEXT_TYPE || type3.$$typeof === REACT_FORWARD_REF_TYPE || type3.$$typeof === REACT_FUNDAMENTAL_TYPE || type3.$$typeof === REACT_RESPONDER_TYPE || type3.$$typeof === REACT_SCOPE_TYPE || type3.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type3 = object.type;
              switch (type3) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type3;
                default:
                  var $$typeofType = type3 && type3.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element2 = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal3 = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element2;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal3;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_development;
  }
});
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test22 = {};
    for (var i = 0; i < 10; i++) {
      test22["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test22).map(function(n) {
      return test22[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test32 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test32[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test32)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target2, source) {
  var from;
  var to = toObject(target2);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {
};
{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has;
  printWarning = function(text3) {
    var message = "Warning: " + text3;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {
    }
  };
}
function checkPropTypes(typeSpecs, values3, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error2;
        try {
          if (typeof typeSpecs[typeSpecName] !== "function") {
            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
            err.name = "Invariant Violation";
            throw err;
          }
          error2 = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error2 = ex;
        }
        if (error2 && !(error2 instanceof Error)) {
          printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error2 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
        }
        if (error2 instanceof Error && !(error2.message in loggedTypeFailures)) {
          loggedTypeFailures[error2.message] = true;
          var stack = getStack ? getStack() : "";
          printWarning("Failed " + location + " type: " + error2.message + (stack != null ? stack : ""));
        }
      }
    }
  }
}
checkPropTypes.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};
var checkPropTypes_1 = checkPropTypes;
var printWarning$1 = function() {
};
{
  printWarning$1 = function(text3) {
    var message = "Warning: " + text3;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {
    }
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator";
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }
  var ANONYMOUS = "<<anonymous>>";
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker("array"),
    bigint: createPrimitiveTypeChecker("bigint"),
    bool: createPrimitiveTypeChecker("boolean"),
    func: createPrimitiveTypeChecker("function"),
    number: createPrimitiveTypeChecker("number"),
    object: createPrimitiveTypeChecker("object"),
    string: createPrimitiveTypeChecker("string"),
    symbol: createPrimitiveTypeChecker("symbol"),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  function is3(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === "object" ? data : {};
    this.stack = "";
  }
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props3, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = "Invariant Violation";
          throw err;
        } else if (typeof console !== "undefined") {
          var cacheKey = componentName + ":" + propName;
          if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
            printWarning$1("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props3[propName] == null) {
        if (isRequired) {
          if (props3[propName] === null) {
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
          }
          return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
        }
        return null;
      } else {
        return validate(props3, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props3, propName, componentName, location, propFullName, secret) {
      var propValue = props3[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), {expectedType});
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props3, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
      }
      var propValue = props3[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error2 = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret_1);
        if (error2 instanceof Error) {
          return error2;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props3, propName, componentName, location, propFullName) {
      var propValue = props3[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props3, propName, componentName, location, propFullName) {
      var propValue = props3[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props3, propName, componentName, location, propFullName) {
      if (!(props3[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props3[propName]);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning$1("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
        } else {
          printWarning$1("Invalid argument supplied to oneOf, expected an array.");
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props3, propName, componentName, location, propFullName) {
      var propValue = props3[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is3(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type3 = getPreciseType(value);
        if (type3 === "symbol") {
          return String(value);
        }
        return value;
      });
      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props3, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
      }
      var propValue = props3[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error2 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret_1);
          if (error2 instanceof Error) {
            return error2;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning$1("Invalid argument supplied to oneOfType, expected an instance of array.");
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== "function") {
        printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props3, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
        var checker2 = arrayOfTypeCheckers[i2];
        var checkerResult = checker2(props3, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, "expectedType")) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
      return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props3, propName, componentName, location, propFullName) {
      if (!isNode(props3[propName])) {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function invalidValidatorError(componentName, location, propFullName, key, type3) {
    return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type3 + "`.");
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props3, propName, componentName, location, propFullName) {
      var propValue = props3[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== "function") {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret_1);
        if (error2) {
          return error2;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props3, propName, componentName, location, propFullName) {
      var propValue = props3[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
      }
      var allKeys = objectAssign({}, props3[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== "function") {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props3[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
        }
        var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret_1);
        if (error2) {
          return error2;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case "number":
      case "string":
      case "undefined":
        return true;
      case "boolean":
        return !propValue;
      case "object":
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    if (propType === "symbol") {
      return true;
    }
    if (!propValue) {
      return false;
    }
    if (propValue["@@toStringTag"] === "Symbol") {
      return true;
    }
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return "array";
    }
    if (propValue instanceof RegExp) {
      return "object";
    }
    if (isSymbol(propType, propValue)) {
      return "symbol";
    }
    return propType;
  }
  function getPreciseType(propValue) {
    if (typeof propValue === "undefined" || propValue === null) {
      return "" + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === "object") {
      if (propValue instanceof Date) {
        return "date";
      } else if (propValue instanceof RegExp) {
        return "regexp";
      }
    }
    return propType;
  }
  function getPostfixForTypeWarning(value) {
    var type3 = getPreciseType(value);
    switch (type3) {
      case "array":
      case "object":
        return "an " + type3;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + type3;
      default:
        return type3;
    }
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var propTypes = createCommonjsModule(function(module) {
  {
    var ReactIs = reactIs;
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
});
function chainPropTypes(propType1, propType2) {
  return function validate() {
    return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
  };
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function isPlainObject(item) {
  return item && _typeof(item) === "object" && item.constructor === Object;
}
function deepmerge(target2, source) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends$5({}, target2) : target2;
  if (isPlainObject(target2) && isPlainObject(source)) {
    Object.keys(source).forEach(function(key) {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target2) {
        output[key] = deepmerge(target2[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
function isClassComponent(elementType) {
  var _elementType$prototyp = elementType.prototype, prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props3, propName, componentName, location, propFullName) {
  var element = props3[propName];
  var safePropName = propFullName || propName;
  if (element == null) {
    return null;
  }
  var warningHint;
  var elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + "For more information see https://mui.com/r/caveat-with-refs-guide");
  }
  return null;
}
var elementAcceptingRef = chainPropTypes(propTypes.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(propTypes.element.isRequired, acceptingRef);
function isClassComponent$1(elementType) {
  var _elementType$prototyp = elementType.prototype, prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props3, propName, componentName, location, propFullName) {
  var propValue = props3[propName];
  var safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  var warningHint;
  if (typeof propValue === "function" && !isClassComponent$1(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + "For more information see https://mui.com/r/caveat-with-refs-guide");
  }
  return null;
}
var elementTypeAcceptingRef$1 = chainPropTypes(propTypes.elementType, elementTypeAcceptingRef);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var specialProperty = "exact-prop: ​";
function exactProp(propTypes2) {
  return _extends$5({}, propTypes2, _defineProperty({}, specialProperty, function(props3) {
    var unsupportedProps = Object.keys(props3).filter(function(prop3) {
      return !propTypes2.hasOwnProperty(prop3);
    });
    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function(prop3) {
        return "`".concat(prop3, "`");
      }).join(", "), ". Please remove them."));
    }
    return null;
  }));
}
var reactIs_development$1 = createCommonjsModule(function(module, exports) {
  {
    (function() {
      var REACT_ELEMENT_TYPE = 60103;
      var REACT_PORTAL_TYPE = 60106;
      var REACT_FRAGMENT_TYPE = 60107;
      var REACT_STRICT_MODE_TYPE = 60108;
      var REACT_PROFILER_TYPE = 60114;
      var REACT_PROVIDER_TYPE = 60109;
      var REACT_CONTEXT_TYPE = 60110;
      var REACT_FORWARD_REF_TYPE = 60112;
      var REACT_SUSPENSE_TYPE = 60113;
      var REACT_SUSPENSE_LIST_TYPE = 60120;
      var REACT_MEMO_TYPE = 60115;
      var REACT_LAZY_TYPE = 60116;
      var REACT_BLOCK_TYPE = 60121;
      var REACT_SERVER_BLOCK_TYPE = 60122;
      var REACT_FUNDAMENTAL_TYPE = 60117;
      var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
      var REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        symbolFor("react.scope");
        symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }
      var enableScopeAPI = false;
      function isValidElementType(type3) {
        if (typeof type3 === "string" || typeof type3 === "function") {
          return true;
        }
        if (type3 === REACT_FRAGMENT_TYPE || type3 === REACT_PROFILER_TYPE || type3 === REACT_DEBUG_TRACING_MODE_TYPE || type3 === REACT_STRICT_MODE_TYPE || type3 === REACT_SUSPENSE_TYPE || type3 === REACT_SUSPENSE_LIST_TYPE || type3 === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
          return true;
        }
        if (typeof type3 === "object" && type3 !== null) {
          if (type3.$$typeof === REACT_LAZY_TYPE || type3.$$typeof === REACT_MEMO_TYPE || type3.$$typeof === REACT_PROVIDER_TYPE || type3.$$typeof === REACT_CONTEXT_TYPE || type3.$$typeof === REACT_FORWARD_REF_TYPE || type3.$$typeof === REACT_FUNDAMENTAL_TYPE || type3.$$typeof === REACT_BLOCK_TYPE || type3[0] === REACT_SERVER_BLOCK_TYPE) {
            return true;
          }
        }
        return false;
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type3 = object.type;
              switch (type3) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type3;
                default:
                  var $$typeofType = type3 && type3.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element2 = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal3 = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      var hasWarnedAboutDeprecatedIsConcurrentMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isConcurrentMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true;
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element2;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal3;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs$1 = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_development$1;
  }
});
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  var match4 = "".concat(fn).match(fnNameMatchRegex);
  var name = match4 && match4[1];
  return name || "";
}
function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (_typeof(Component) === "object") {
    switch (Component.$$typeof) {
      case reactIs$1.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case reactIs$1.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}
function HTMLElementType(props3, propName, componentName, location, propFullName) {
  var propValue = props3[propName];
  var safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an HTMLElement.");
  }
  return null;
}
var refType = propTypes.oneOfType([propTypes.func, propTypes.object]);
function clamp(value) {
  var min3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var max3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  {
    if (value < min3 || value > max3) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min3, ", ").concat(max3, "]."));
    }
  }
  return Math.min(Math.max(min3, value), max3);
}
function hexToRgb(color) {
  color = color.substr(1);
  var re2 = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), "g");
  var colors = color.match(re2);
  if (colors && colors[0].length === 1) {
    colors = colors.map(function(n) {
      return n + n;
    });
  }
  return colors ? "rgb".concat(colors.length === 4 ? "a" : "", "(").concat(colors.map(function(n, index2) {
    return index2 < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
  }).join(", "), ")") : "";
}
function intToHex(int2) {
  var hex = int2.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
function rgbToHex(color) {
  if (color.indexOf("#") === 0) {
    return color;
  }
  var _decomposeColor = decomposeColor(color), values3 = _decomposeColor.values;
  return "#".concat(values3.map(function(n) {
    return intToHex(n);
  }).join(""));
}
function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color, values3 = _color.values;
  var h = values3[0];
  var s = values3[1] / 100;
  var l = values3[2] / 100;
  var a = s * Math.min(l, 1 - l);
  var f = function f2(n) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  var type3 = "rgb";
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === "hsla") {
    type3 += "a";
    rgb.push(values3[3]);
  }
  return recomposeColor({
    type: type3,
    values: rgb
  });
}
function decomposeColor(color) {
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }
  var marker2 = color.indexOf("(");
  var type3 = color.substring(0, marker2);
  if (["rgb", "rgba", "hsl", "hsla"].indexOf(type3) === -1) {
    throw new Error("Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()."));
  }
  var values3 = color.substring(marker2 + 1, color.length - 1).split(",");
  values3 = values3.map(function(value) {
    return parseFloat(value);
  });
  return {
    type: type3,
    values: values3
  };
}
function recomposeColor(color) {
  var type3 = color.type;
  var values3 = color.values;
  if (type3.indexOf("rgb") !== -1) {
    values3 = values3.map(function(n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type3.indexOf("hsl") !== -1) {
    values3[1] = "".concat(values3[1], "%");
    values3[2] = "".concat(values3[2], "%");
  }
  return "".concat(type3, "(").concat(values3.join(", "), ")");
}
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === "hsl" ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function(val) {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
function fade(color, value) {
  {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(["Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.", "", "You should use `import { alpha } from '@material-ui/core/styles'`"].join("\n"));
    }
  }
  return alpha(color, value);
}
function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);
  if (color.type === "rgb" || color.type === "hsl") {
    color.type += "a";
  }
  color.values[3] = value;
  return recomposeColor(color);
}
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);
  if (color.type.indexOf("hsl") !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf("rgb") !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);
  if (color.type.indexOf("hsl") !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf("rgb") !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target2[key] = source[key];
    }
  }
  return target2;
}
var keys = ["xs", "sm", "md", "lg", "xl"];
function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values, values3 = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values, _breakpoints$unit = breakpoints.unit, unit = _breakpoints$unit === void 0 ? "px" : _breakpoints$unit, _breakpoints$step = breakpoints.step, step = _breakpoints$step === void 0 ? 5 : _breakpoints$step, other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);
  function up(key) {
    var value = typeof values3[key] === "number" ? values3[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }
  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values3[keys[endIndex]];
    if (endIndex === keys.length) {
      return up("xs");
    }
    var value = typeof upperbound === "number" && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }
  function between2(start, end) {
    var endIndex = keys.indexOf(end);
    if (endIndex === keys.length - 1) {
      return up(start);
    }
    return "@media (min-width:".concat(typeof values3[start] === "number" ? values3[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values3[keys[endIndex + 1]] === "number" ? values3[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }
  function only(key) {
    return between2(key, key);
  }
  var warnedOnce2 = false;
  function width(key) {
    {
      if (!warnedOnce2) {
        warnedOnce2 = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", "Use the `theme.breakpoints.values` instead."].join("\n"));
      }
    }
    return values3[key];
  }
  return _extends$5({
    keys,
    values: values3,
    up,
    down,
    between: between2,
    only,
    width
  }, other);
}
function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;
  return _extends$5({
    gutters: function gutters() {
      var styles9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      console.warn(["Material-UI: theme.mixins.gutters() is deprecated.", "You can use the source of the mixin directly:", "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n"));
      return _extends$5({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles9, _defineProperty({}, breakpoints.up("sm"), _extends$5({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles9[breakpoints.up("sm")])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, _defineProperty(_toolbar, "".concat(breakpoints.up("xs"), " and (orientation: landscape)"), {
      minHeight: 48
    }), _defineProperty(_toolbar, breakpoints.up("sm"), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}
var common = {
  black: "#000",
  white: "#fff"
};
var grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#d5d5d5",
  A200: "#aaaaaa",
  A400: "#303030",
  A700: "#616161"
};
var indigo = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe"
};
var pink = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  A100: "#ff80ab",
  A200: "#ff4081",
  A400: "#f50057",
  A700: "#c51162"
};
var red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
var orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
var blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
var green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
var light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common.white,
    default: grey[50]
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: common.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: grey[800],
    default: "#303030"
  },
  action: {
    active: common.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function createPalette(palette) {
  var _palette$primary = palette.primary, primary = _palette$primary === void 0 ? {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700]
  } : _palette$primary, _palette$secondary = palette.secondary, secondary = _palette$secondary === void 0 ? {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700
  } : _palette$secondary, _palette$error = palette.error, error2 = _palette$error === void 0 ? {
    light: red[300],
    main: red[500],
    dark: red[700]
  } : _palette$error, _palette$warning = palette.warning, warning2 = _palette$warning === void 0 ? {
    light: orange[300],
    main: orange[500],
    dark: orange[700]
  } : _palette$warning, _palette$info = palette.info, info = _palette$info === void 0 ? {
    light: blue[300],
    main: blue[500],
    dark: blue[700]
  } : _palette$info, _palette$success = palette.success, success = _palette$success === void 0 ? {
    light: green[300],
    main: green[500],
    dark: green[700]
  } : _palette$success, _palette$type = palette.type, type3 = _palette$type === void 0 ? "light" : _palette$type, _palette$contrastThre = palette.contrastThreshold, contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre, _palette$tonalOffset = palette.tonalOffset, tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset, other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]);
  function getContrastText(background) {
    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    {
      var contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  var augmentColor = function augmentColor2(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 700;
    color = _extends$5({}, color);
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.main) {
      throw new Error("Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property."));
    }
    if (typeof color.main !== "string") {
      throw new Error("Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), '` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport { green } from "@material-ui/core/colors";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });'));
    }
    addLightOrDark(color, "light", lightShade, tonalOffset);
    addLightOrDark(color, "dark", darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  var types = {
    dark,
    light
  };
  {
    if (!types[type3]) {
      console.error("Material-UI: The palette type `".concat(type3, "` is not supported."));
    }
  }
  var paletteOutput = deepmerge(_extends$5({
    common,
    type: type3,
    primary: augmentColor(primary),
    secondary: augmentColor(secondary, "A400", "A200", "A700"),
    error: augmentColor(error2),
    warning: augmentColor(warning2),
    info: augmentColor(info),
    success: augmentColor(success),
    grey,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, types[type3]), other);
  return paletteOutput;
}
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var warnedOnce$1 = false;
function roundWithDeprecationWarning(value) {
  {
    if (!warnedOnce$1) {
      console.warn(["Material-UI: The `theme.typography.round` helper is deprecated.", "Head to https://mui.com/r/migration-v4/#theme for a migration path."].join("\n"));
      warnedOnce$1 = true;
    }
  }
  return round(value);
}
var caseAllCaps = {
  textTransform: "uppercase"
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography) {
  var _ref = typeof typography === "function" ? typography(palette) : typography, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily, _ref$fontSize = _ref.fontSize, fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize, _ref$fontWeightLight = _ref.fontWeightLight, fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight, _ref$fontWeightRegula = _ref.fontWeightRegular, fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula, _ref$fontWeightMedium = _ref.fontWeightMedium, fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium, _ref$fontWeightBold = _ref.fontWeightBold, fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold, _ref$htmlFontSize = _ref.htmlFontSize, htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize, allVariants = _ref.allVariants, pxToRem2 = _ref.pxToRem, other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);
  {
    if (typeof fontSize !== "number") {
      console.error("Material-UI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize !== "number") {
      console.error("Material-UI: `htmlFontSize` is required to be a number.");
    }
  }
  var coef = fontSize / 14;
  var pxToRem = pxToRem2 || function(size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };
  var buildVariant = function buildVariant2(fontWeight, size, lineHeight, letterSpacing, casing) {
    return _extends$5({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };
  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends$5({
    htmlFontSize,
    pxToRem,
    round: roundWithDeprecationWarning,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
  });
}
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow() {
  return ["".concat(arguments.length <= 0 ? void 0 : arguments[0], "px ").concat(arguments.length <= 1 ? void 0 : arguments[1], "px ").concat(arguments.length <= 2 ? void 0 : arguments[2], "px ").concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? void 0 : arguments[4], "px ").concat(arguments.length <= 5 ? void 0 : arguments[5], "px ").concat(arguments.length <= 6 ? void 0 : arguments[6], "px ").concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? void 0 : arguments[8], "px ").concat(arguments.length <= 9 ? void 0 : arguments[9], "px ").concat(arguments.length <= 10 ? void 0 : arguments[10], "px ").concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shape = {
  borderRadius: 4
};
var responsivePropType = propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object, propTypes.array]);
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray(o3, minLen);
  var n = Object.prototype.toString.call(o3).slice(8, -1);
  if (n === "Object" && o3.constructor)
    n = o3.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o3);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o3, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var spacingKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY"];
function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;
  if (typeof themeSpacing === "number") {
    return function(abs) {
      {
        if (typeof abs !== "number") {
          console.error("Material-UI: Expected spacing argument to be a number, got ".concat(abs, "."));
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return function(abs) {
      {
        if (abs > themeSpacing.length - 1) {
          console.error(["Material-UI: The value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join("\n"));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  {
    console.error(["Material-UI: The `theme.spacing` value (".concat(themeSpacing, ") is invalid."), "It should be a number, an array or a function."].join("\n"));
  }
  return function() {
    return void 0;
  };
}
spacingKeys.reduce(function(obj, key) {
  obj[key] = responsivePropType;
  return obj;
}, {});
var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
  if (spacingInput.mui) {
    return spacingInput;
  }
  var transform2 = createUnarySpacing({
    spacing: spacingInput
  });
  var spacing = function spacing2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }
    if (args.length === 0) {
      return transform2(1);
    }
    if (args.length === 1) {
      return transform2(args[0]);
    }
    return args.map(function(argument) {
      if (typeof argument === "string") {
        return argument;
      }
      var output = transform2(argument);
      return typeof output === "number" ? "".concat(output, "px") : output;
    }).join(" ");
  };
  Object.defineProperty(spacing, "unit", {
    get: function get2() {
      {
        if (!warnOnce || false) {
          console.error(["Material-UI: theme.spacing.unit usage has been deprecated.", "It will be removed in v5.", "You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.", "", "You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother."].join("\n"));
        }
        warnOnce = true;
      }
      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}
var easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
var transitions = {
  easing,
  duration,
  create: function create() {
    var props3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["all"];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options$duration = options.duration, durationOption = _options$duration === void 0 ? duration.standard : _options$duration, _options$easing = options.easing, easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing, _options$delay = options.delay, delay = _options$delay === void 0 ? 0 : _options$delay, other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);
    {
      var isString2 = function isString3(value) {
        return typeof value === "string";
      };
      var isNumber = function isNumber2(value) {
        return !isNaN(parseFloat(value));
      };
      if (!isString2(props3) && !Array.isArray(props3)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString2(durationOption)) {
        console.error('Material-UI: Argument "duration" must be a number or a string but found '.concat(durationOption, "."));
      }
      if (!isString2(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString2(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }
      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(","), "]."));
      }
    }
    return (Array.isArray(props3) ? props3 : [props3]).map(function(animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === "string" ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === "string" ? delay : formatMs(delay));
    }).join(",");
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }
    var constant = height / 36;
    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};
var zIndex = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints, breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints, _options$mixins = options.mixins, mixinsInput = _options$mixins === void 0 ? {} : _options$mixins, _options$palette = options.palette, paletteInput = _options$palette === void 0 ? {} : _options$palette, spacingInput = options.spacing, _options$typography = options.typography, typographyInput = _options$typography === void 0 ? {} : _options$typography, other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);
  var palette = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing = createSpacing(spacingInput);
  var muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {},
    palette,
    props: {},
    shadows,
    typography: createTypography(palette, typographyInput),
    spacing,
    shape,
    transitions,
    zIndex
  }, other);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  muiTheme = args.reduce(function(acc, argument) {
    return deepmerge(acc, argument);
  }, muiTheme);
  {
    var pseudoClasses2 = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
    var traverse3 = function traverse4(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var key;
      for (key in node) {
        var child = node[key];
        if (depth === 1) {
          if (key.indexOf("Mui") === 0 && child) {
            traverse4(child, key, depth + 1);
          }
        } else if (pseudoClasses2.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), "You can not override it like this: ", JSON.stringify(node, null, 2), "", "Instead, you need to use the $ruleName syntax:", JSON.stringify({
              root: _defineProperty({}, "&$".concat(key), child)
            }, null, 2), "", "https://mui.com/r/pseudo-classes-guide"].join("\n"));
          }
          node[key] = {};
        }
      }
    };
    traverse3(muiTheme.overrides);
  }
  return muiTheme;
}
var warnedOnce$2 = false;
function createMuiTheme() {
  {
    if (!warnedOnce$2) {
      warnedOnce$2 = true;
      console.error(["Material-UI: the createMuiTheme function was renamed to createTheme.", "", "You should use `import { createTheme } from '@material-ui/core/styles'`"].join("\n"));
    }
  }
  return createTheme.apply(void 0, arguments);
}
function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return createTheme.apply(void 0, [deepmerge({
    unstable_strictMode: true
  }, options)].concat(args));
}
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
var pseudoClasses = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal, disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba, _options$productionPr = options.productionPrefix, _options$seed = options.seed, seed = _options$seed === void 0 ? "" : _options$seed;
  var seedPrefix = seed === "" ? "" : "".concat(seed, "-");
  var ruleCounter = 0;
  var getNextCounterId = function getNextCounterId2() {
    ruleCounter += 1;
    {
      if (ruleCounter >= 1e10) {
        console.warn(["Material-UI: You might have a memory leak.", "The ruleCounter is not supposed to grow that much."].join(""));
      }
    }
    return ruleCounter;
  };
  return function(rule, styleSheet) {
    var name = styleSheet.options.name;
    if (name && name.indexOf("Mui") === 0 && !styleSheet.options.link && !disableGlobal) {
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }
      var prefix2 = "".concat(seedPrefix).concat(name, "-").concat(rule.key);
      if (!styleSheet.options.theme[nested] || seed !== "") {
        return prefix2;
      }
      return "".concat(prefix2, "-").concat(getNextCounterId());
    }
    var suffix = "".concat(rule.key, "-").concat(getNextCounterId());
    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }
    return "".concat(seedPrefix).concat(suffix);
  };
}
function createStyles(styles9) {
  return styles9;
}
function getThemeProps(params) {
  var theme = params.theme, name = params.name, props3 = params.props;
  if (!theme || !theme.props || !theme.props[name]) {
    return props3;
  }
  var defaultProps2 = theme.props[name];
  var propName;
  for (propName in defaultProps2) {
    if (props3[propName] === void 0) {
      props3[propName] = defaultProps2[propName];
    }
  }
  return props3;
}
function warning(condition, message) {
  {
    if (condition) {
      return;
    }
    var text3 = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text3);
    }
    try {
      throw Error(text3);
    } catch (x) {
    }
  }
}
var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === "object" && document.nodeType === 9;
function _defineProperties(target2, props3) {
  for (var i = 0; i < props3.length; i++) {
    var descriptor = props3[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== "object")
    return style;
  if (Array.isArray(style))
    return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor)
    return style;
  var newStyle = {};
  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }
  return newStyle;
}
function createRule(name, decl, options) {
  if (name === void 0) {
    name = "unnamed";
  }
  var jss2 = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss2.plugins.onCreateRule(name, declCopy, options);
  if (rule)
    return rule;
  if (name[0] === "@") {
    warning(false, "[JSS] Unknown rule " + name);
  }
  return null;
}
var join = function join2(value, by) {
  var result = "";
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "!important")
      break;
    if (result)
      result += by;
    result += value[i];
  }
  return result;
};
var toCssValue = function toCssValue2(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }
  if (!Array.isArray(value))
    return value;
  var cssValue = "";
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === "!important")
        break;
      if (cssValue)
        cssValue += ", ";
      cssValue += join(value[i], " ");
    }
  } else
    cssValue = join(value, ", ");
  if (!ignoreImportant && value[value.length - 1] === "!important") {
    cssValue += " !important";
  }
  return cssValue;
};
function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: "",
      space: ""
    };
  }
  return {
    linebreak: "\n",
    space: " "
  };
}
function indentStr(str, indent) {
  var result = "";
  for (var index2 = 0; index2 < indent; index2++) {
    result += "  ";
  }
  return result + str;
}
function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }
  var result = "";
  if (!style)
    return result;
  var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (options.format === false) {
    indent = -Infinity;
  }
  var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
  if (selector)
    indent++;
  if (fallbacks) {
    if (Array.isArray(fallbacks)) {
      for (var index2 = 0; index2 < fallbacks.length; index2++) {
        var fallback = fallbacks[index2];
        for (var prop3 in fallback) {
          var value = fallback[prop3];
          if (value != null) {
            if (result)
              result += linebreak;
            result += indentStr(prop3 + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          if (result)
            result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }
  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== "fallbacks") {
      if (result)
        result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  }
  if (!result && !options.allowEmpty)
    return result;
  if (!selector)
    return result;
  indent--;
  if (result)
    result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr("}", indent);
}
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
var escape = function(str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
};
var BaseStyleRule = /* @__PURE__ */ function() {
  function BaseStyleRule2(key, style, options) {
    this.type = "style";
    this.isProcessed = false;
    var sheet = options.sheet, Renderer2 = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet)
      this.renderer = sheet.renderer;
    else if (Renderer2)
      this.renderer = new Renderer2();
  }
  var _proto = BaseStyleRule2.prototype;
  _proto.prop = function prop3(name, value, options) {
    if (value === void 0)
      return this.style[name];
    var force = options ? options.force : false;
    if (!force && this.style[name] === value)
      return this;
    var newValue = value;
    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }
    var isEmpty4 = newValue == null || newValue === false;
    var isDefined = name in this.style;
    if (isEmpty4 && !isDefined && !force)
      return this;
    var remove3 = isEmpty4 && isDefined;
    if (remove3)
      delete this.style[name];
    else
      this.style[name] = newValue;
    if (this.renderable && this.renderer) {
      if (remove3)
        this.renderer.removeProperty(this.renderable, name);
      else
        this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }
    var sheet = this.options.sheet;
    if (sheet && sheet.attached) {
      warning(false, '[JSS] Rule is not linked. Missing sheet option "link: true".');
    }
    return this;
  };
  return BaseStyleRule2;
}();
var StyleRule = /* @__PURE__ */ function(_BaseStyleRule) {
  _inheritsLoose(StyleRule2, _BaseStyleRule);
  function StyleRule2(key, style, options) {
    var _this;
    _this = _BaseStyleRule.call(this, key, style, options) || this;
    var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }
    return _this;
  }
  var _proto2 = StyleRule2.prototype;
  _proto2.applyTo = function applyTo3(renderable) {
    var renderer2 = this.renderer;
    if (renderer2) {
      var json = this.toJSON();
      for (var prop3 in json) {
        renderer2.setProperty(renderable, prop3, json[prop3]);
      }
    }
    return this;
  };
  _proto2.toJSON = function toJSON() {
    var json = {};
    for (var prop3 in this.style) {
      var value = this.style[prop3];
      if (typeof value !== "object")
        json[prop3] = value;
      else if (Array.isArray(value))
        json[prop3] = toCssValue(value);
    }
    return json;
  };
  _proto2.toString = function toString3(options) {
    var sheet = this.options.sheet;
    var link3 = sheet ? sheet.options.link : false;
    var opts = link3 ? _extends$5({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };
  _createClass(StyleRule2, [{
    key: "selector",
    set: function set5(selector) {
      if (selector === this.selectorText)
        return;
      this.selectorText = selector;
      var renderer2 = this.renderer, renderable = this.renderable;
      if (!renderable || !renderer2)
        return;
      var hasChanged = renderer2.setSelector(renderable, selector);
      if (!hasChanged) {
        renderer2.replaceRule(renderable, this);
      }
    },
    get: function get2() {
      return this.selectorText;
    }
  }]);
  return StyleRule2;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (key[0] === "@" || options.parent && options.parent.type === "keyframes") {
      return null;
    }
    return new StyleRule(key, style, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
var ConditionalRule = /* @__PURE__ */ function() {
  function ConditionalRule2(key, styles9, options) {
    this.type = "conditional";
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : "unknown";
    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends$5({}, options, {
      parent: this
    }));
    for (var name in styles9) {
      this.rules.add(name, styles9[name]);
    }
    this.rules.process();
  }
  var _proto = ConditionalRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.indexOf = function indexOf3(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule)
      this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.toString = function toString3(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions.indent;
    if (options.children == null)
      options.children = defaultToStringOptions.children;
    if (options.children === false) {
      return this.query + " {}";
    }
    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
  };
  return ConditionalRule2;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule2(key, styles9, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles9, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
var KeyframesRule = /* @__PURE__ */ function() {
  function KeyframesRule2(key, frames, options) {
    this.type = "keyframes";
    this.at = "@keyframes";
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);
    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = "noname";
      warning(false, "[JSS] Bad keyframes name " + key);
    }
    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends$5({}, options, {
      parent: this
    }));
    for (var name in frames) {
      this.rules.add(name, frames[name], _extends$5({}, options, {
        parent: this
      }));
    }
    this.rules.process();
  }
  var _proto = KeyframesRule2.prototype;
  _proto.toString = function toString3(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions$1.indent;
    if (options.children == null)
      options.children = defaultToStringOptions$1.children;
    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }
    var children = this.rules.toString(options);
    if (children)
      children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };
  return KeyframesRule2;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;
var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes) {
  if (typeof val === "string") {
    return val.replace(refRegExp, function(match4, name) {
      if (name in keyframes) {
        return keyframes[name];
      }
      warning(false, '[JSS] Referenced keyframes rule "' + name + '" is not defined.');
      return match4;
    });
  }
  return val;
};
var replaceRef = function replaceRef2(style, prop3, keyframes) {
  var value = style[prop3];
  var refKeyframe = findReferencedKeyframe(value, keyframes);
  if (refKeyframe !== value) {
    style[prop3] = refKeyframe;
  }
};
var pluginKeyframesRule = {
  onCreateRule: function onCreateRule3(key, frames, options) {
    return typeof key === "string" && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return style;
    if ("animation-name" in style)
      replaceRef(style, "animation-name", sheet.keyframes);
    if ("animation" in style)
      replaceRef(style, "animation", sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop3, rule) {
    var sheet = rule.options.sheet;
    if (!sheet) {
      return val;
    }
    switch (prop3) {
      case "animation":
        return findReferencedKeyframe(val, sheet.keyframes);
      case "animation-name":
        return findReferencedKeyframe(val, sheet.keyframes);
      default:
        return val;
    }
  }
};
var KeyframeRule = /* @__PURE__ */ function(_BaseStyleRule) {
  _inheritsLoose(KeyframeRule2, _BaseStyleRule);
  function KeyframeRule2() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }
  var _proto = KeyframeRule2.prototype;
  _proto.toString = function toString3(options) {
    var sheet = this.options.sheet;
    var link3 = sheet ? sheet.options.link : false;
    var opts = link3 ? _extends$5({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };
  return KeyframeRule2;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule4(key, style, options) {
    if (options.parent && options.parent.type === "keyframes") {
      return new KeyframeRule(key, style, options);
    }
    return null;
  }
};
var FontFaceRule = /* @__PURE__ */ function() {
  function FontFaceRule2(key, style, options) {
    this.type = "font-face";
    this.at = "@font-face";
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  var _proto = FontFaceRule2.prototype;
  _proto.toString = function toString3(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (Array.isArray(this.style)) {
      var str = "";
      for (var index2 = 0; index2 < this.style.length; index2++) {
        str += toCss(this.at, this.style[index2]);
        if (this.style[index2 + 1])
          str += linebreak;
      }
      return str;
    }
    return toCss(this.at, this.style, options);
  };
  return FontFaceRule2;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule5(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};
var ViewportRule = /* @__PURE__ */ function() {
  function ViewportRule2(key, style, options) {
    this.type = "viewport";
    this.at = "@viewport";
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  var _proto = ViewportRule2.prototype;
  _proto.toString = function toString3(options) {
    return toCss(this.key, this.style, options);
  };
  return ViewportRule2;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule6(key, style, options) {
    return key === "@viewport" || key === "@-ms-viewport" ? new ViewportRule(key, style, options) : null;
  }
};
var SimpleRule = /* @__PURE__ */ function() {
  function SimpleRule2(key, value, options) {
    this.type = "simple";
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  var _proto = SimpleRule2.prototype;
  _proto.toString = function toString3(options) {
    if (Array.isArray(this.value)) {
      var str = "";
      for (var index2 = 0; index2 < this.value.length; index2++) {
        str += this.key + " " + this.value[index2] + ";";
        if (this.value[index2 + 1])
          str += "\n";
      }
      return str;
    }
    return this.key + " " + this.value + ";";
  };
  return SimpleRule2;
}();
var keysMap = {
  "@charset": true,
  "@import": true,
  "@namespace": true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule7(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
};
var RuleList = /* @__PURE__ */ function() {
  function RuleList2(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  var _proto = RuleList2.prototype;
  _proto.add = function add4(name, decl, ruleOptions) {
    var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss2 = _this$options.jss, Renderer2 = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
    var options = _extends$5({
      classes: this.classes,
      parent,
      sheet,
      jss: jss2,
      Renderer: Renderer2,
      generateId,
      scoped,
      name,
      keyframes: this.keyframes,
      selector: void 0
    }, ruleOptions);
    var key = name;
    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    }
    this.raw[key] = decl;
    if (key in this.classes) {
      options.selector = "." + escape(this.classes[key]);
    }
    var rule = createRule(key, decl, options);
    if (!rule)
      return null;
    this.register(rule);
    var index2 = options.index === void 0 ? this.index.length : options.index;
    this.index.splice(index2, 0, rule);
    return rule;
  };
  _proto.replace = function replace4(name, decl, ruleOptions) {
    var oldRule = this.get(name);
    var oldIndex = this.index.indexOf(oldRule);
    if (oldRule) {
      this.remove(oldRule);
    }
    var options = ruleOptions;
    if (oldIndex !== -1)
      options = _extends$5({}, ruleOptions, {
        index: oldIndex
      });
    return this.add(name, decl, options);
  };
  _proto.get = function get2(nameOrSelector) {
    return this.map[nameOrSelector];
  };
  _proto.remove = function remove3(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  };
  _proto.indexOf = function indexOf3(rule) {
    return this.index.indexOf(rule);
  };
  _proto.process = function process() {
    var plugins2 = this.options.jss.plugins;
    this.index.slice(0).forEach(plugins2.onProcessRule, plugins2);
  };
  _proto.register = function register(rule) {
    this.map[rule.key] = rule;
    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id)
        this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  };
  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];
    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  };
  _proto.update = function update3() {
    var name;
    var data;
    var options;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
      name = arguments.length <= 0 ? void 0 : arguments[0];
      data = arguments.length <= 1 ? void 0 : arguments[1];
      options = arguments.length <= 2 ? void 0 : arguments[2];
    } else {
      data = arguments.length <= 0 ? void 0 : arguments[0];
      options = arguments.length <= 1 ? void 0 : arguments[1];
      name = null;
    }
    if (name) {
      this.updateOne(this.get(name), data, options);
    } else {
      for (var index2 = 0; index2 < this.index.length; index2++) {
        this.updateOne(this.index[index2], data, options);
      }
    }
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }
    var _this$options2 = this.options, plugins2 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
    if (rule.rules instanceof RuleList2) {
      rule.rules.update(data, options);
      return;
    }
    var style = rule.style;
    plugins2.onUpdate(data, rule, sheet, options);
    if (options.process && style && style !== rule.style) {
      plugins2.onProcessStyle(rule.style, rule, sheet);
      for (var prop3 in rule.style) {
        var nextValue = rule.style[prop3];
        var prevValue = style[prop3];
        if (nextValue !== prevValue) {
          rule.prop(prop3, nextValue, forceUpdateOptions);
        }
      }
      for (var _prop in style) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style[_prop];
        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  };
  _proto.toString = function toString3(options) {
    var str = "";
    var sheet = this.options.sheet;
    var link3 = sheet ? sheet.options.link : false;
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    for (var index2 = 0; index2 < this.index.length; index2++) {
      var rule = this.index[index2];
      var css2 = rule.toString(options);
      if (!css2 && !link3)
        continue;
      if (str)
        str += linebreak;
      str += css2;
    }
    return str;
  };
  return RuleList2;
}();
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(styles9, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends$5({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });
    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }
    this.rules = new RuleList(this.options);
    for (var name in styles9) {
      this.rules.add(name, styles9[name]);
    }
    this.rules.process();
  }
  var _proto = StyleSheet2.prototype;
  _proto.attach = function attach2() {
    if (this.attached)
      return this;
    if (this.renderer)
      this.renderer.attach();
    this.attached = true;
    if (!this.deployed)
      this.deploy();
    return this;
  };
  _proto.detach = function detach2() {
    if (!this.attached)
      return this;
    if (this.renderer)
      this.renderer.detach();
    this.attached = false;
    return this;
  };
  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue;
    if (this.attached && !queue)
      this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    if (this.attached) {
      if (!this.deployed)
        return rule;
      if (queue)
        queue.push(rule);
      else {
        this.insertRule(rule);
        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = void 0;
        }
      }
      return rule;
    }
    this.deployed = false;
    return rule;
  };
  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
    var oldRule = this.rules.get(nameOrSelector);
    if (!oldRule)
      return this.addRule(nameOrSelector, decl, options);
    var newRule = this.rules.replace(nameOrSelector, decl, options);
    if (newRule) {
      this.options.jss.plugins.onProcessRule(newRule);
    }
    if (this.attached) {
      if (!this.deployed)
        return newRule;
      if (this.renderer) {
        if (!newRule) {
          this.renderer.deleteRule(oldRule);
        } else if (oldRule.renderable) {
          this.renderer.replaceRule(oldRule.renderable, newRule);
        }
      }
      return newRule;
    }
    this.deployed = false;
    return newRule;
  };
  _proto.insertRule = function insertRule2(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  };
  _proto.addRules = function addRules(styles9, options) {
    var added = [];
    for (var name in styles9) {
      var rule = this.addRule(name, styles9[name], options);
      if (rule)
        added.push(rule);
    }
    return added;
  };
  _proto.getRule = function getRule(nameOrSelector) {
    return this.rules.get(nameOrSelector);
  };
  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === "object" ? name : this.rules.get(name);
    if (!rule || this.attached && !rule.renderable) {
      return false;
    }
    this.rules.remove(rule);
    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }
    return true;
  };
  _proto.indexOf = function indexOf3(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.deploy = function deploy() {
    if (this.renderer)
      this.renderer.deploy();
    this.deployed = true;
    return this;
  };
  _proto.update = function update3() {
    var _this$rules;
    (_this$rules = this.rules).update.apply(_this$rules, arguments);
    return this;
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  };
  _proto.toString = function toString3(options) {
    return this.rules.toString(options);
  };
  return StyleSheet2;
}();
var PluginsRegistry = /* @__PURE__ */ function() {
  function PluginsRegistry2() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }
  var _proto = PluginsRegistry2.prototype;
  _proto.onCreateRule = function onCreateRule8(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule)
        return rule;
    }
    return null;
  };
  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed)
      return;
    var sheet = rule.options.sheet;
    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }
    if (rule.style)
      this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  };
  _proto.onProcessStyle = function onProcessStyle2(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  };
  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  };
  _proto.onUpdate = function onUpdate2(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  };
  _proto.onChangeValue = function onChangeValue2(value, prop3, rule) {
    var processedValue = value;
    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop3, rule);
    }
    return processedValue;
  };
  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: "external"
      };
    }
    var plugins2 = this.plugins[options.queue];
    if (plugins2.indexOf(newPlugin) !== -1) {
      return;
    }
    plugins2.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
          warning(false, '[JSS] Unknown hook "' + name + '".');
        }
      }
      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };
  return PluginsRegistry2;
}();
var SheetsRegistry = /* @__PURE__ */ function() {
  function SheetsRegistry2() {
    this.registry = [];
  }
  var _proto = SheetsRegistry2.prototype;
  _proto.add = function add4(sheet) {
    var registry = this.registry;
    var index2 = sheet.options.index;
    if (registry.indexOf(sheet) !== -1)
      return;
    if (registry.length === 0 || index2 >= this.index) {
      registry.push(sheet);
      return;
    }
    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index2) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  };
  _proto.reset = function reset() {
    this.registry = [];
  };
  _proto.remove = function remove3(sheet) {
    var index2 = this.registry.indexOf(sheet);
    this.registry.splice(index2, 1);
  };
  _proto.toString = function toString3(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose(_ref, ["attached"]);
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    var css2 = "";
    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];
      if (attached != null && sheet.attached !== attached) {
        continue;
      }
      if (css2)
        css2 += linebreak;
      css2 += sheet.toString(options);
    }
    return css2;
  };
  _createClass(SheetsRegistry2, [{
    key: "index",
    get: function get2() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);
  return SheetsRegistry2;
}();
var sheets = new SheetsRegistry();
var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
if (globalThis$1[ns] == null)
  globalThis$1[ns] = 0;
var moduleId = globalThis$1[ns]++;
var maxRules = 1e10;
var createGenerateId = function createGenerateId2(options) {
  if (options === void 0) {
    options = {};
  }
  var ruleCounter = 0;
  var generateId = function generateId2(rule, sheet) {
    ruleCounter += 1;
    if (ruleCounter > maxRules) {
      warning(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".");
    }
    var jssId = "";
    var prefix2 = "";
    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix2 = sheet.options.classNamePrefix;
      }
      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }
    if (options.minify) {
      return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
    }
    return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
  };
  return generateId;
};
var memoize = function memoize2(fn) {
  var value;
  return function() {
    if (!value)
      value = fn();
    return value;
  };
};
var getPropertyValue = function getPropertyValue2(cssRule, prop3) {
  try {
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop3);
    }
    return cssRule.style.getPropertyValue(prop3);
  } catch (err) {
    return "";
  }
};
var setProperty = function setProperty2(cssRule, prop3, value) {
  try {
    var cssValue = value;
    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);
      if (value[value.length - 1] === "!important") {
        cssRule.style.setProperty(prop3, cssValue, "important");
        return true;
      }
    }
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop3, cssValue);
    } else {
      cssRule.style.setProperty(prop3, cssValue);
    }
  } catch (err) {
    return false;
  }
  return true;
};
var removeProperty = function removeProperty2(cssRule, prop3) {
  try {
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop3);
    } else {
      cssRule.style.removeProperty(prop3);
    }
  } catch (err) {
    warning(false, '[JSS] DOMException "' + err.message + '" was thrown. Tried to remove property "' + prop3 + '".');
  }
};
var setSelector = function setSelector2(cssRule, selectorText) {
  cssRule.selectorText = selectorText;
  return cssRule.selectorText === selectorText;
};
var getHead = memoize(function() {
  return document.querySelector("head");
});
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findCommentNode(text3) {
  var head2 = getHead();
  for (var i = 0; i < head2.childNodes.length; i++) {
    var node = head2.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text3) {
      return node;
    }
  }
  return null;
}
function findPrevNode(options) {
  var registry = sheets.registry;
  if (registry.length > 0) {
    var sheet = findHigherSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    }
    sheet = findHighestSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  }
  var insertionPoint = options.insertionPoint;
  if (insertionPoint && typeof insertionPoint === "string") {
    var comment2 = findCommentNode(insertionPoint);
    if (comment2) {
      return {
        parent: comment2.parentNode,
        node: comment2.nextSibling
      };
    }
    warning(false, '[JSS] Insertion point "' + insertionPoint + '" not found.');
  }
  return false;
}
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);
  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  }
  if (insertionPoint && typeof insertionPoint.nodeType === "number") {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode)
      parentNode.insertBefore(style, insertionPointElement.nextSibling);
    else
      warning(false, "[JSS] Insertion point is not in the DOM.");
    return;
  }
  getHead().appendChild(style);
}
var getNonce = memoize(function() {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute("content") : null;
});
var _insertRule = function insertRule(container, rule, index2) {
  try {
    if ("insertRule" in container) {
      container.insertRule(rule, index2);
    } else if ("appendRule" in container) {
      container.appendRule(rule);
    }
  } catch (err) {
    warning(false, "[JSS] " + err.message);
    return false;
  }
  return container.cssRules[index2];
};
var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index2) {
  var maxIndex = container.cssRules.length;
  if (index2 === void 0 || index2 > maxIndex) {
    return maxIndex;
  }
  return index2;
};
var createStyle = function createStyle2() {
  var el2 = document.createElement("style");
  el2.textContent = "\n";
  return el2;
};
var DomRenderer = /* @__PURE__ */ function() {
  function DomRenderer2(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    if (sheet)
      sheets.add(sheet);
    this.sheet = sheet;
    var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
    this.element = element || createStyle();
    this.element.setAttribute("data-jss", "");
    if (media)
      this.element.setAttribute("media", media);
    if (meta)
      this.element.setAttribute("data-meta", meta);
    var nonce = getNonce();
    if (nonce)
      this.element.setAttribute("nonce", nonce);
  }
  var _proto = DomRenderer2.prototype;
  _proto.attach = function attach2() {
    if (this.element.parentNode || !this.sheet)
      return;
    insertStyle(this.element, this.sheet.options);
    var deployed = Boolean(this.sheet && this.sheet.deployed);
    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  };
  _proto.detach = function detach2() {
    if (!this.sheet)
      return;
    var parentNode = this.element.parentNode;
    if (parentNode)
      parentNode.removeChild(this.element);
    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = "\n";
    }
  };
  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet)
      return;
    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }
    this.element.textContent = "\n" + sheet.toString() + "\n";
  };
  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  };
  _proto.insertRule = function insertRule2(rule, index2, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }
    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;
      if (rule.type === "conditional" || rule.type === "keyframes") {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);
        if (latestNativeParent === false) {
          return false;
        }
        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }
      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }
    var ruleStr = rule.toString();
    if (!ruleStr)
      return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
    if (nativeRule === false) {
      return false;
    }
    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };
  _proto.refCssRule = function refCssRule(rule, index2, cssRule) {
    rule.renderable = cssRule;
    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules.splice(index2, 0, cssRule);
    }
  };
  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index2 = this.indexOf(cssRule);
    if (index2 === -1)
      return false;
    sheet.deleteRule(index2);
    this.cssRules.splice(index2, 1);
    return true;
  };
  _proto.indexOf = function indexOf3(cssRule) {
    return this.cssRules.indexOf(cssRule);
  };
  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index2 = this.indexOf(cssRule);
    if (index2 === -1)
      return false;
    this.element.sheet.deleteRule(index2);
    this.cssRules.splice(index2, 1);
    return this.insertRule(rule, index2);
  };
  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };
  return DomRenderer2;
}();
var instanceCounter = 0;
var Jss = /* @__PURE__ */ function() {
  function Jss2(options) {
    this.id = instanceCounter++;
    this.version = "10.9.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId,
      Renderer: isBrowser ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });
    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: "internal"
      });
    }
    this.setup(options);
  }
  var _proto = Jss2.prototype;
  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }
    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }
    if (options.id) {
      this.options.id = _extends$5({}, this.options.id, options.id);
    }
    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }
    if (options.insertionPoint != null)
      this.options.insertionPoint = options.insertionPoint;
    if ("Renderer" in options) {
      this.options.Renderer = options.Renderer;
    }
    if (options.plugins)
      this.use.apply(this, options.plugins);
    return this;
  };
  _proto.createStyleSheet = function createStyleSheet(styles9, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, index2 = _options.index;
    if (typeof index2 !== "number") {
      index2 = sheets.index === 0 ? 0 : sheets.index + 1;
    }
    var sheet = new StyleSheet(styles9, _extends$5({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index2
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  };
  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  };
  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (typeof name === "object") {
      return this.createRule(void 0, name, style);
    }
    var ruleOptions = _extends$5({}, options, {
      name,
      jss: this,
      Renderer: this.options.Renderer
    });
    if (!ruleOptions.generateId)
      ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes)
      ruleOptions.classes = {};
    if (!ruleOptions.keyframes)
      ruleOptions.keyframes = {};
    var rule = createRule(name, style, ruleOptions);
    if (rule)
      this.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.use = function use() {
    var _this = this;
    for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins2[_key] = arguments[_key];
    }
    plugins2.forEach(function(plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };
  return Jss2;
}();
var createJss = function createJss2(options) {
  return new Jss(options);
};
var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
function getDynamicStyles(styles9) {
  var to = null;
  for (var key in styles9) {
    var value = styles9[key];
    var type3 = typeof value;
    if (type3 === "function") {
      if (!to)
        to = {};
      to[key] = value;
    } else if (type3 === "object" && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to)
          to = {};
        to[key] = extracted;
      }
    }
  }
  return to;
}
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
var index = createJss();
var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
var functionPlugin = function functionPlugin2() {
  return {
    onCreateRule: function onCreateRule8(name, decl, options) {
      if (typeof decl !== "function")
        return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle2(style, rule) {
      if (fnValuesNs in rule || fnRuleNs in rule)
        return style;
      var fnValues = {};
      for (var prop3 in style) {
        var value = style[prop3];
        if (typeof value !== "function")
          continue;
        delete style[prop3];
        fnValues[prop3] = value;
      }
      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate2(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs];
      if (fnRule) {
        styleRule.style = fnRule(data) || {};
        {
          for (var prop3 in styleRule.style) {
            if (typeof styleRule.style[prop3] === "function") {
              warning(false, "[JSS] Function values inside function rules are not supported.");
              break;
            }
          }
        }
      }
      var fnValues = styleRule[fnValuesNs];
      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};
var at = "@global";
var atPrefix = "@global ";
var GlobalContainerRule = /* @__PURE__ */ function() {
  function GlobalContainerRule2(key, styles9, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends$5({}, options, {
      parent: this
    }));
    for (var selector in styles9) {
      this.rules.add(selector, styles9[selector]);
    }
    this.rules.process();
  }
  var _proto = GlobalContainerRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule)
      this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule)
      this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.indexOf = function indexOf3(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.toString = function toString3(options) {
    return this.rules.toString(options);
  };
  return GlobalContainerRule2;
}();
var GlobalPrefixedRule = /* @__PURE__ */ function() {
  function GlobalPrefixedRule2(key, style, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends$5({}, options, {
      parent: this
    }));
  }
  var _proto2 = GlobalPrefixedRule2.prototype;
  _proto2.toString = function toString3(options) {
    return this.rule ? this.rule.toString(options) : "";
  };
  return GlobalPrefixedRule2;
}();
var separatorRegExp = /\s*,\s*/g;
function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = "";
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1])
      scoped += ", ";
  }
  return scoped;
}
function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options, style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules)
    return;
  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends$5({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }
  delete style[at];
}
function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options, style = rule.style;
  for (var prop3 in style) {
    if (prop3[0] !== "@" || prop3.substr(0, at.length) !== at)
      continue;
    var selector = addScope(prop3.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop3], _extends$5({}, options, {
      selector
    }));
    delete style[prop3];
  }
}
function jssGlobal() {
  function onCreateRule8(name, styles9, options) {
    if (!name)
      return null;
    if (name === at) {
      return new GlobalContainerRule(name, styles9, options);
    }
    if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles9, options);
    }
    var parent = options.parent;
    if (parent) {
      if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
        options.scoped = false;
      }
    }
    if (!options.selector && options.scoped === false) {
      options.selector = name;
    }
    return null;
  }
  function onProcessRule(rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }
  return {
    onCreateRule: onCreateRule8,
    onProcessRule
  };
}
var separatorRegExp$1 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp$1 = /\$([\w-]+)/g;
function jssNested() {
  function getReplaceRef(container, sheet) {
    return function(match4, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);
      if (rule) {
        return rule.selector;
      }
      warning(false, '[JSS] Could not find the referenced rule "' + key + '" in "' + (container.options.meta || container.toString()) + '".');
      return key;
    };
  }
  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp$1);
    var nestedSelectors = nestedProp.split(separatorRegExp$1);
    var result = "";
    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];
      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested2 = nestedSelectors[j];
        if (result)
          result += ", ";
        result += nested2.indexOf("&") !== -1 ? nested2.replace(parentRegExp, parent) : parent + " " + nested2;
      }
    }
    return result;
  }
  function getOptions(rule, container, prevOptions) {
    if (prevOptions)
      return _extends$5({}, prevOptions, {
        index: prevOptions.index + 1
      });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
    var options = _extends$5({}, rule.options, {
      nestingLevel,
      index: container.indexOf(rule) + 1
    });
    delete options.name;
    return options;
  }
  function onProcessStyle2(style, rule, sheet) {
    if (rule.type !== "style")
      return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef3;
    for (var prop3 in style) {
      var isNested = prop3.indexOf("&") !== -1;
      var isNestedConditional = prop3[0] === "@";
      if (!isNested && !isNestedConditional)
        continue;
      options = getOptions(styleRule, container, options);
      if (isNested) {
        var selector = replaceParentRefs(prop3, styleRule.selector);
        if (!replaceRef3)
          replaceRef3 = getReplaceRef(container, sheet);
        selector = selector.replace(refRegExp$1, replaceRef3);
        var name = styleRule.key + "-" + prop3;
        if ("replaceRule" in container) {
          container.replaceRule(name, style[prop3], _extends$5({}, options, {
            selector
          }));
        } else {
          container.addRule(name, style[prop3], _extends$5({}, options, {
            selector
          }));
        }
      } else if (isNestedConditional) {
        container.addRule(prop3, {}, options).addRule(styleRule.key, style[prop3], {
          selector: styleRule.selector
        });
      }
      delete style[prop3];
    }
    return style;
  }
  return {
    onProcessStyle: onProcessStyle2
  };
}
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match4) {
  return "-" + match4.toLowerCase();
}
function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
function convertCase(style) {
  var converted = {};
  for (var prop3 in style) {
    var key = prop3.indexOf("--") === 0 ? prop3 : hyphenateStyleName(prop3);
    converted[key] = style[prop3];
  }
  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks))
      converted.fallbacks = style.fallbacks.map(convertCase);
    else
      converted.fallbacks = convertCase(style.fallbacks);
  }
  return converted;
}
function camelCase() {
  function onProcessStyle2(style) {
    if (Array.isArray(style)) {
      for (var index2 = 0; index2 < style.length; index2++) {
        style[index2] = convertCase(style[index2]);
      }
      return style;
    }
    return convertCase(style);
  }
  function onChangeValue2(value, prop3, rule) {
    if (prop3.indexOf("--") === 0) {
      return value;
    }
    var hyphenatedProp = hyphenateStyleName(prop3);
    if (prop3 === hyphenatedProp)
      return value;
    rule.prop(hyphenatedProp, value);
    return null;
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
var defaultUnits = {
  "animation-delay": ms,
  "animation-duration": ms,
  "background-position": px,
  "background-position-x": px,
  "background-position-y": px,
  "background-size": px,
  border: px,
  "border-bottom": px,
  "border-bottom-left-radius": px,
  "border-bottom-right-radius": px,
  "border-bottom-width": px,
  "border-left": px,
  "border-left-width": px,
  "border-radius": px,
  "border-right": px,
  "border-right-width": px,
  "border-top": px,
  "border-top-left-radius": px,
  "border-top-right-radius": px,
  "border-top-width": px,
  "border-width": px,
  "border-block": px,
  "border-block-end": px,
  "border-block-end-width": px,
  "border-block-start": px,
  "border-block-start-width": px,
  "border-block-width": px,
  "border-inline": px,
  "border-inline-end": px,
  "border-inline-end-width": px,
  "border-inline-start": px,
  "border-inline-start-width": px,
  "border-inline-width": px,
  "border-start-start-radius": px,
  "border-start-end-radius": px,
  "border-end-start-radius": px,
  "border-end-end-radius": px,
  margin: px,
  "margin-bottom": px,
  "margin-left": px,
  "margin-right": px,
  "margin-top": px,
  "margin-block": px,
  "margin-block-end": px,
  "margin-block-start": px,
  "margin-inline": px,
  "margin-inline-end": px,
  "margin-inline-start": px,
  padding: px,
  "padding-bottom": px,
  "padding-left": px,
  "padding-right": px,
  "padding-top": px,
  "padding-block": px,
  "padding-block-end": px,
  "padding-block-start": px,
  "padding-inline": px,
  "padding-inline-end": px,
  "padding-inline-start": px,
  "mask-position-x": px,
  "mask-position-y": px,
  "mask-size": px,
  height: px,
  width: px,
  "min-height": px,
  "max-height": px,
  "min-width": px,
  "max-width": px,
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  "inset-block": px,
  "inset-block-end": px,
  "inset-block-start": px,
  "inset-inline": px,
  "inset-inline-end": px,
  "inset-inline-start": px,
  "box-shadow": px,
  "text-shadow": px,
  "column-gap": px,
  "column-rule": px,
  "column-rule-width": px,
  "column-width": px,
  "font-size": px,
  "font-size-delta": px,
  "letter-spacing": px,
  "text-decoration-thickness": px,
  "text-indent": px,
  "text-stroke": px,
  "text-stroke-width": px,
  "word-spacing": px,
  motion: px,
  "motion-offset": px,
  outline: px,
  "outline-offset": px,
  "outline-width": px,
  perspective: px,
  "perspective-origin-x": percent,
  "perspective-origin-y": percent,
  "transform-origin": percent,
  "transform-origin-x": percent,
  "transform-origin-y": percent,
  "transform-origin-z": percent,
  "transition-delay": ms,
  "transition-duration": ms,
  "vertical-align": px,
  "flex-basis": px,
  "shape-margin": px,
  size: px,
  gap: px,
  grid: px,
  "grid-gap": px,
  "row-gap": px,
  "grid-row-gap": px,
  "grid-column-gap": px,
  "grid-template-rows": px,
  "grid-template-columns": px,
  "grid-auto-rows": px,
  "grid-auto-columns": px,
  "box-shadow-x": px,
  "box-shadow-y": px,
  "box-shadow-blur": px,
  "box-shadow-spread": px,
  "font-line-height": px,
  "text-shadow-x": px,
  "text-shadow-y": px,
  "text-shadow-blur": px
};
function addCamelCasedVersion(obj) {
  var regExp2 = /(-[a-z])/g;
  var replace4 = function replace5(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp2, replace4)] = obj[key];
  }
  return newObj;
}
var units = addCamelCasedVersion(defaultUnits);
function iterate(prop3, value, options) {
  if (value == null)
    return value;
  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop3, value[i], options);
    }
  } else if (typeof value === "object") {
    if (prop3 === "fallbacks") {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop3 + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === "number" && isNaN(value) === false) {
    var unit = options[prop3] || units[prop3];
    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
    }
    return value.toString();
  }
  return value;
}
function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }
  var camelCasedOptions = addCamelCasedVersion(options);
  function onProcessStyle2(style, rule) {
    if (rule.type !== "style")
      return style;
    for (var prop3 in style) {
      style[prop3] = iterate(prop3, style[prop3], camelCasedOptions);
    }
    return style;
  }
  function onChangeValue2(value, prop3) {
    return iterate(prop3, value, camelCasedOptions);
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var js = "";
var css = "";
var vendor = "";
var browser = "";
var isTouch = isBrowser && "ontouchstart" in document.documentElement;
if (isBrowser) {
  var jsCssMap = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  };
  var _document$createEleme = document.createElement("p"), style = _document$createEleme.style;
  var testProp = "Transform";
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
  if (js === "Webkit" && "msHyphens" in style) {
    js = "ms";
    css = jsCssMap.ms;
    browser = "edge";
  }
  if (js === "Webkit" && "-apple-trailing-word" in style) {
    vendor = "apple";
  }
}
var prefix = {
  js,
  css,
  vendor,
  browser,
  isTouch
};
function supportedKeyframes(key) {
  if (key[1] === "-")
    return key;
  if (prefix.js === "ms")
    return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}
var appearence = {
  noPrefill: ["appearance"],
  supportedProperty: function supportedProperty(prop3) {
    if (prop3 !== "appearance")
      return false;
    if (prefix.js === "ms")
      return "-webkit-" + prop3;
    return prefix.css + prop3;
  }
};
var colorAdjust = {
  noPrefill: ["color-adjust"],
  supportedProperty: function supportedProperty2(prop3) {
    if (prop3 !== "color-adjust")
      return false;
    if (prefix.js === "Webkit")
      return prefix.css + "print-" + prop3;
    return prop3;
  }
};
var regExp = /[-\s]+(.)?/g;
function toUpper(match4, c) {
  return c ? c.toUpperCase() : "";
}
function camelize(str) {
  return str.replace(regExp, toUpper);
}
function pascalize(str) {
  return camelize("-" + str);
}
var mask = {
  noPrefill: ["mask"],
  supportedProperty: function supportedProperty3(prop3, style) {
    if (!/^mask/.test(prop3))
      return false;
    if (prefix.js === "Webkit") {
      var longhand = "mask-image";
      if (camelize(longhand) in style) {
        return prop3;
      }
      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop3;
      }
    }
    return prop3;
  }
};
var textOrientation = {
  noPrefill: ["text-orientation"],
  supportedProperty: function supportedProperty4(prop3) {
    if (prop3 !== "text-orientation")
      return false;
    if (prefix.vendor === "apple" && !prefix.isTouch) {
      return prefix.css + prop3;
    }
    return prop3;
  }
};
var transform = {
  noPrefill: ["transform"],
  supportedProperty: function supportedProperty5(prop3, style, options) {
    if (prop3 !== "transform")
      return false;
    if (options.transform) {
      return prop3;
    }
    return prefix.css + prop3;
  }
};
var transition = {
  noPrefill: ["transition"],
  supportedProperty: function supportedProperty6(prop3, style, options) {
    if (prop3 !== "transition")
      return false;
    if (options.transition) {
      return prop3;
    }
    return prefix.css + prop3;
  }
};
var writingMode = {
  noPrefill: ["writing-mode"],
  supportedProperty: function supportedProperty7(prop3) {
    if (prop3 !== "writing-mode")
      return false;
    if (prefix.js === "Webkit" || prefix.js === "ms" && prefix.browser !== "edge") {
      return prefix.css + prop3;
    }
    return prop3;
  }
};
var userSelect = {
  noPrefill: ["user-select"],
  supportedProperty: function supportedProperty8(prop3) {
    if (prop3 !== "user-select")
      return false;
    if (prefix.js === "Moz" || prefix.js === "ms" || prefix.vendor === "apple") {
      return prefix.css + prop3;
    }
    return prop3;
  }
};
var breakPropsOld = {
  supportedProperty: function supportedProperty9(prop3, style) {
    if (!/^break-/.test(prop3))
      return false;
    if (prefix.js === "Webkit") {
      var jsProp = "WebkitColumn" + pascalize(prop3);
      return jsProp in style ? prefix.css + "column-" + prop3 : false;
    }
    if (prefix.js === "Moz") {
      var _jsProp = "page" + pascalize(prop3);
      return _jsProp in style ? "page-" + prop3 : false;
    }
    return false;
  }
};
var inlineLogicalOld = {
  supportedProperty: function supportedProperty10(prop3, style) {
    if (!/^(border|margin|padding)-inline/.test(prop3))
      return false;
    if (prefix.js === "Moz")
      return prop3;
    var newProp = prop3.replace("-inline", "");
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var unprefixed = {
  supportedProperty: function supportedProperty11(prop3, style) {
    return camelize(prop3) in style ? prop3 : false;
  }
};
var prefixed = {
  supportedProperty: function supportedProperty12(prop3, style) {
    var pascalized = pascalize(prop3);
    if (prop3[0] === "-")
      return prop3;
    if (prop3[0] === "-" && prop3[1] === "-")
      return prop3;
    if (prefix.js + pascalized in style)
      return prefix.css + prop3;
    if (prefix.js !== "Webkit" && "Webkit" + pascalized in style)
      return "-webkit-" + prop3;
    return false;
  }
};
var scrollSnap = {
  supportedProperty: function supportedProperty13(prop3) {
    if (prop3.substring(0, 11) !== "scroll-snap")
      return false;
    if (prefix.js === "ms") {
      return "" + prefix.css + prop3;
    }
    return prop3;
  }
};
var overscrollBehavior = {
  supportedProperty: function supportedProperty14(prop3) {
    if (prop3 !== "overscroll-behavior")
      return false;
    if (prefix.js === "ms") {
      return prefix.css + "scroll-chaining";
    }
    return prop3;
  }
};
var propMap = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
};
var flex2012 = {
  supportedProperty: function supportedProperty15(prop3, style) {
    var newProp = propMap[prop3];
    if (!newProp)
      return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var propMap$1 = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
};
var propKeys = Object.keys(propMap$1);
var prefixCss = function prefixCss2(p) {
  return prefix.css + p;
};
var flex2009 = {
  supportedProperty: function supportedProperty16(prop3, style, _ref) {
    var multiple = _ref.multiple;
    if (propKeys.indexOf(prop3) > -1) {
      var newProp = propMap$1[prop3];
      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
      if (!multiple)
        return false;
      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }
      return newProp.map(prefixCss);
    }
    return false;
  }
};
var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins$1.filter(function(p) {
  return p.supportedProperty;
}).map(function(p) {
  return p.supportedProperty;
});
var noPrefill = plugins$1.filter(function(p) {
  return p.noPrefill;
}).reduce(function(a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);
var el;
var cache$1 = {};
if (isBrowser) {
  el = document.createElement("p");
  var computed = window.getComputedStyle(document.documentElement, "");
  for (var key$1 in computed) {
    if (!isNaN(key$1))
      cache$1[computed[key$1]] = computed[key$1];
  }
  noPrefill.forEach(function(x) {
    return delete cache$1[x];
  });
}
function supportedProperty17(prop3, options) {
  if (options === void 0) {
    options = {};
  }
  if (!el)
    return prop3;
  if (cache$1[prop3] != null) {
    return cache$1[prop3];
  }
  if (prop3 === "transition" || prop3 === "transform") {
    options[prop3] = prop3 in el.style;
  }
  for (var i = 0; i < propertyDetectors.length; i++) {
    cache$1[prop3] = propertyDetectors[i](prop3, el.style, options);
    if (cache$1[prop3])
      break;
  }
  try {
    el.style[prop3] = "";
  } catch (err) {
    return false;
  }
  return cache$1[prop3];
}
var cache$1$1 = {};
var transitionProperties = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
function prefixTransitionCallback(match4, p1, p2) {
  if (p1 === "var")
    return "var";
  if (p1 === "all")
    return "all";
  if (p2 === "all")
    return ", all";
  var prefixedValue = p1 ? supportedProperty17(p1) : ", " + supportedProperty17(p2);
  if (!prefixedValue)
    return p1 || p2;
  return prefixedValue;
}
if (isBrowser)
  el$1 = document.createElement("p");
function supportedValue(property, value) {
  var prefixedValue = value;
  if (!el$1 || property === "content")
    return value;
  if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  }
  var cacheKey = property + prefixedValue;
  if (cache$1$1[cacheKey] != null) {
    return cache$1$1[cacheKey];
  }
  try {
    el$1.style[property] = prefixedValue;
  } catch (err) {
    cache$1$1[cacheKey] = false;
    return false;
  }
  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === "") {
    prefixedValue = prefix.css + prefixedValue;
    if (prefixedValue === "-ms-flex")
      el$1.style[property] = "-ms-flexbox";
    el$1.style[property] = prefixedValue;
    if (el$1.style[property] === "") {
      cache$1$1[cacheKey] = false;
      return false;
    }
  }
  el$1.style[property] = "";
  cache$1$1[cacheKey] = prefixedValue;
  return cache$1$1[cacheKey];
}
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === "keyframes") {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }
  function prefixStyle(style) {
    for (var prop3 in style) {
      var value = style[prop3];
      if (prop3 === "fallbacks" && Array.isArray(value)) {
        style[prop3] = value.map(prefixStyle);
        continue;
      }
      var changeProp = false;
      var supportedProp = supportedProperty17(prop3);
      if (supportedProp && supportedProp !== prop3)
        changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value)
        changeValue = true;
      if (changeProp || changeValue) {
        if (changeProp)
          delete style[prop3];
        style[supportedProp || prop3] = supportedValue$1 || value;
      }
    }
    return style;
  }
  function onProcessStyle2(style, rule) {
    if (rule.type !== "style")
      return style;
    return prefixStyle(style);
  }
  function onChangeValue2(value, prop3) {
    return supportedValue(prop3, toCssValue(value)) || value;
  }
  return {
    onProcessRule,
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
function jssPropsSort() {
  var sort3 = function sort4(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }
    return prop0.length - prop1.length;
  };
  return {
    onProcessStyle: function onProcessStyle2(style, rule) {
      if (rule.type !== "style")
        return style;
      var newStyle = {};
      var props3 = Object.keys(style).sort(sort3);
      for (var i = 0; i < props3.length; i++) {
        newStyle[props3[i]] = style[props3[i]];
      }
      return newStyle;
    }
  };
}
function jssPreset() {
  return {
    plugins: [
      functionPlugin(),
      jssGlobal(),
      jssNested(),
      camelCase(),
      defaultUnit(),
      typeof window === "undefined" ? null : jssVendorPrefixer(),
      jssPropsSort()
    ]
  };
}
function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var baseClasses = options.baseClasses, newClasses = options.newClasses, Component = options.Component;
  if (!newClasses) {
    return baseClasses;
  }
  var nextClasses = _extends$5({}, baseClasses);
  {
    if (typeof newClasses === "string") {
      console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(getDisplayName(Component), " is incorrect."), "You might want to use the className prop instead."].join("\n"));
      return baseClasses;
    }
  }
  Object.keys(newClasses).forEach(function(key) {
    {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(","), ".")].join("\n"));
      }
      if (newClasses[key] && typeof newClasses[key] !== "string") {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join("\n"));
      }
    }
    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}
var multiKeyStore = {
  set: function set(cache2, key1, key2, value) {
    var subCache = cache2.get(key1);
    if (!subCache) {
      subCache = new Map();
      cache2.set(key1, subCache);
    }
    subCache.set(key2, value);
  },
  get: function get(cache2, key1, key2) {
    var subCache = cache2.get(key1);
    return subCache ? subCache.get(key2) : void 0;
  },
  delete: function _delete(cache2, key1, key2) {
    var subCache = cache2.get(key1);
    subCache.delete(key2);
  }
};
var ThemeContext = react.createContext(null);
{
  ThemeContext.displayName = "ThemeContext";
}
function useTheme() {
  var theme = react.useContext(ThemeContext);
  {
    react.useDebugValue(theme);
  }
  return theme;
}
var jss = createJss(jssPreset());
var generateClassName = createGenerateClassName();
var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
var StylesContext = react.createContext(defaultOptions);
{
  StylesContext.displayName = "StylesContext";
}
var injectFirstNode;
function StylesProvider(props3) {
  var children = props3.children, _props$injectFirst = props3.injectFirst, injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst, _props$disableGenerat = props3.disableGeneration, disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat, localOptions = _objectWithoutProperties(props3, ["children", "injectFirst", "disableGeneration"]);
  var outerOptions = react.useContext(StylesContext);
  var context = _extends$5({}, outerOptions, {
    disableGeneration
  }, localOptions);
  {
    if (typeof window === "undefined" && !context.sheetsManager) {
      console.error("Material-UI: You need to use the ServerStyleSheets API when rendering on the server.");
    }
  }
  {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error("Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.");
    }
  }
  {
    if (injectFirst && localOptions.jss) {
      console.error("Material-UI: You cannot use the jss and injectFirst props at the same time.");
    }
  }
  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== "undefined") {
    if (!injectFirstNode) {
      var head2 = document.head;
      injectFirstNode = document.createComment("mui-inject-first");
      head2.insertBefore(injectFirstNode, head2.firstChild);
    }
    context.jss = createJss({
      plugins: jssPreset().plugins,
      insertionPoint: injectFirstNode
    });
  }
  return /* @__PURE__ */ react.createElement(StylesContext.Provider, {
    value: context
  }, children);
}
StylesProvider.propTypes = {
  children: propTypes.node.isRequired,
  disableGeneration: propTypes.bool,
  generateClassName: propTypes.func,
  injectFirst: propTypes.bool,
  jss: propTypes.object,
  serverGenerateClassName: propTypes.func,
  sheetsCache: propTypes.object,
  sheetsManager: propTypes.object,
  sheetsRegistry: propTypes.object
};
{
  StylesProvider.propTypes = exactProp(StylesProvider.propTypes);
}
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;
  {
    if (indexCounter >= 0) {
      console.warn(["Material-UI: You might have a memory leak.", "The indexCounter is not supposed to grow that much."].join("\n"));
    }
  }
  return indexCounter;
}
var noopTheme = {};
function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === "function";
  {
    if (_typeof(stylesOrCreator) !== "object" && !themingEnabled) {
      console.error(["Material-UI: The `styles` argument provided is invalid.", "You need to provide a function generating the styles or a styles object."].join("\n"));
    }
  }
  return {
    create: function create2(theme, name) {
      var styles9;
      try {
        styles9 = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        {
          if (themingEnabled === true && theme === noopTheme) {
            console.error(["Material-UI: The `styles` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join("\n"));
          }
        }
        throw err;
      }
      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles9;
      }
      var overrides = theme.overrides[name];
      var stylesWithOverrides = _extends$5({}, styles9);
      Object.keys(overrides).forEach(function(key) {
        {
          if (!stylesWithOverrides[key]) {
            console.warn(["Material-UI: You are trying to override a style that does not exist.", "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join("\n"));
          }
        }
        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}
function getClasses(_ref, classes, Component) {
  var state = _ref.state, stylesOptions = _ref.stylesOptions;
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }
  if (!state.cacheClasses) {
    state.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {}
    };
  }
  var generate = false;
  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }
  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }
  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }
  return state.cacheClasses.value;
}
function attach(_ref2, props3) {
  var state = _ref2.state, theme = _ref2.theme, stylesOptions = _ref2.stylesOptions, stylesCreator = _ref2.stylesCreator, name = _ref2.name;
  if (stylesOptions.disableGeneration) {
    return;
  }
  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }
  var options = _extends$5({}, stylesCreator.options, stylesOptions, {
    theme,
    flip: typeof stylesOptions.flip === "boolean" ? stylesOptions.flip : theme.direction === "rtl"
  });
  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    var staticSheet;
    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }
    var styles9 = stylesCreator.create(theme, name);
    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles9, _extends$5({
        link: false
      }, options));
      staticSheet.attach();
      if (stylesOptions.sheetsCache) {
        multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }
    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }
    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles9);
  }
  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends$5({
      link: true
    }, options));
    dynamicSheet.update(props3);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });
    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }
  sheetManager.refs += 1;
}
function update(_ref3, props3) {
  var state = _ref3.state;
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props3);
  }
}
function detach(_ref4) {
  var state = _ref4.state, theme = _ref4.theme, stylesOptions = _ref4.stylesOptions, stylesCreator = _ref4.stylesCreator;
  if (stylesOptions.disableGeneration) {
    return;
  }
  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }
  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}
function useSynchronousEffect(func, values3) {
  var key = react.useRef([]);
  var output;
  var currentKey = react.useMemo(function() {
    return {};
  }, values3);
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }
  react.useEffect(function() {
    return function() {
      if (output) {
        output();
      }
    };
  }, [currentKey]);
}
function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var name = options.name, classNamePrefixOption = options.classNamePrefix, Component = options.Component, _options$defaultTheme = options.defaultTheme, defaultTheme2 = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme, stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);
  var stylesCreator = getStylesCreator(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || "makeStyles";
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };
  var useStyles = function useStyles2() {
    var props3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var theme = useTheme() || defaultTheme2;
    var stylesOptions = _extends$5({}, react.useContext(StylesContext), stylesOptions2);
    var instance = react.useRef();
    var shouldUpdate = react.useRef();
    useSynchronousEffect(function() {
      var current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props3);
      shouldUpdate.current = false;
      instance.current = current;
      return function() {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react.useEffect(function() {
      if (shouldUpdate.current) {
        update(instance.current, props3);
      }
      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props3.classes, Component);
    {
      react.useDebugValue(classes);
    }
    return classes;
  };
  return useStyles;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var ServerStyleSheets = /* @__PURE__ */ function() {
  function ServerStyleSheets2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, ServerStyleSheets2);
    this.options = options;
  }
  _createClass(ServerStyleSheets2, [{
    key: "collect",
    value: function collect(children) {
      var sheetsManager2 = new Map();
      this.sheetsRegistry = new SheetsRegistry();
      var generateClassName2 = createGenerateClassName();
      return /* @__PURE__ */ react.createElement(StylesProvider, _extends$5({
        sheetsManager: sheetsManager2,
        serverGenerateClassName: generateClassName2,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString3() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : "";
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props3) {
      return /* @__PURE__ */ react.createElement("style", _extends$5({
        id: "jss-server-side",
        key: "jss-server-side",
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props3));
    }
  }]);
  return ServerStyleSheets2;
}();
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys4 = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols$1) {
      keys4 = keys4.concat(getOwnPropertySymbols$1(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys4.length; ++i) {
      var key = keys4[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function(prop3) {
    if (fields.indexOf(prop3) === -1) {
      output[prop3] = input[prop3];
    }
  });
  return output;
}
function styled(Component) {
  var componentCreator = function componentCreator2(style) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var name = options.name, stylesOptions = _objectWithoutProperties(options, ["name"]);
    if (Component === void 0) {
      throw new Error(["You are calling styled(Component)(style) with an undefined component.", "You may have forgotten to import it."].join("\n"));
    }
    var classNamePrefix = name;
    {
      if (!name) {
        var displayName = getDisplayName(Component);
        if (displayName !== void 0) {
          classNamePrefix = displayName;
        }
      }
    }
    var stylesOrCreator = typeof style === "function" ? function(theme) {
      return {
        root: function root(props3) {
          return style(_extends$5({
            theme
          }, props3));
        }
      };
    } : {
      root: style
    };
    var useStyles = makeStyles(stylesOrCreator, _extends$5({
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes$1 = {};
    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    if (style.propTypes) {
      propTypes$1 = style.propTypes;
      delete style.propTypes;
    }
    var StyledComponent = /* @__PURE__ */ react.forwardRef(function StyledComponent2(props3, ref) {
      var children = props3.children, classNameProp = props3.className, clone3 = props3.clone, ComponentProp = props3.component, other = _objectWithoutProperties(props3, ["children", "className", "clone", "component"]);
      var classes = useStyles(props3);
      var className = clsx(classes.root, classNameProp);
      var spread = other;
      if (filterProps) {
        spread = omit(spread, filterProps);
      }
      if (clone3) {
        return /* @__PURE__ */ react.cloneElement(children, _extends$5({
          className: clsx(children.props.className, className)
        }, spread));
      }
      if (typeof children === "function") {
        return children(_extends$5({
          className
        }, spread));
      }
      var FinalComponent = ComponentProp || Component;
      return /* @__PURE__ */ react.createElement(FinalComponent, _extends$5({
        ref,
        className
      }, spread), children);
    });
    StyledComponent.propTypes = _extends$5({
      children: propTypes.oneOfType([propTypes.node, propTypes.func]),
      className: propTypes.string,
      clone: chainPropTypes(propTypes.bool, function(props3) {
        if (props3.clone && props3.component) {
          return new Error("You can not use the clone and component prop at the same time.");
        }
        return null;
      }),
      component: propTypes.elementType
    }, propTypes$1);
    {
      StyledComponent.displayName = "Styled(".concat(classNamePrefix, ")");
    }
    hoistNonReactStatics_cjs(StyledComponent, Component);
    return StyledComponent;
  };
  return componentCreator;
}
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    var mergedTheme = localTheme(outerTheme);
    {
      if (!mergedTheme) {
        console.error(["Material-UI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join("\n"));
      }
    }
    return mergedTheme;
  }
  return _extends$5({}, outerTheme, localTheme);
}
function ThemeProvider(props3) {
  var children = props3.children, localTheme = props3.theme;
  var outerTheme = useTheme();
  {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["Material-UI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  var theme = react.useMemo(function() {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ react.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
}
ThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.oneOfType([propTypes.object, propTypes.func]).isRequired
};
{
  ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes);
}
var withStyles = function withStyles2(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(Component) {
    var defaultTheme2 = options.defaultTheme, _options$withTheme = options.withTheme, withTheme2 = _options$withTheme === void 0 ? false : _options$withTheme, name = options.name, stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);
    {
      if (Component === void 0) {
        throw new Error(["You are calling withStyles(styles)(Component) with an undefined component.", "You may have forgotten to import it."].join("\n"));
      }
    }
    var classNamePrefix = name;
    {
      if (!name) {
        var displayName = getDisplayName(Component);
        if (displayName !== void 0) {
          classNamePrefix = displayName;
        }
      }
    }
    var useStyles = makeStyles(stylesOrCreator, _extends$5({
      defaultTheme: defaultTheme2,
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    var WithStyles = /* @__PURE__ */ react.forwardRef(function WithStyles2(props3, ref) {
      var classesProp = props3.classes, innerRef = props3.innerRef, other = _objectWithoutProperties(props3, ["classes", "innerRef"]);
      var classes = useStyles(_extends$5({}, Component.defaultProps, props3));
      var theme;
      var more = other;
      if (typeof name === "string" || withTheme2) {
        theme = useTheme() || defaultTheme2;
        if (name) {
          more = getThemeProps({
            theme,
            name,
            props: other
          });
        }
        if (withTheme2 && !more.theme) {
          more.theme = theme;
        }
      }
      return /* @__PURE__ */ react.createElement(Component, _extends$5({
        ref: innerRef || ref,
        classes
      }, more));
    });
    WithStyles.propTypes = {
      classes: propTypes.object,
      innerRef: chainPropTypes(propTypes.oneOfType([propTypes.func, propTypes.object]), function(props3) {
        if (props3.innerRef == null) {
          return null;
        }
        return null;
      })
    };
    {
      WithStyles.displayName = "WithStyles(".concat(getDisplayName(Component), ")");
    }
    hoistNonReactStatics_cjs(WithStyles, Component);
    {
      WithStyles.Naked = Component;
      WithStyles.options = options;
      WithStyles.useStyles = useStyles;
    }
    return WithStyles;
  };
};
function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var defaultTheme2 = options.defaultTheme;
  var withTheme2 = function withTheme3(Component) {
    {
      if (Component === void 0) {
        throw new Error(["You are calling withTheme(Component) with an undefined component.", "You may have forgotten to import it."].join("\n"));
      }
    }
    var WithTheme = /* @__PURE__ */ react.forwardRef(function WithTheme2(props3, ref) {
      var innerRef = props3.innerRef, other = _objectWithoutProperties(props3, ["innerRef"]);
      var theme = useTheme() || defaultTheme2;
      return /* @__PURE__ */ react.createElement(Component, _extends$5({
        theme,
        ref: innerRef || ref
      }, other));
    });
    WithTheme.propTypes = {
      innerRef: chainPropTypes(propTypes.oneOfType([propTypes.func, propTypes.object]), function(props3) {
        if (props3.innerRef == null) {
          return null;
        }
        return new Error("Material-UI: The `innerRef` prop is deprecated and will be removed in v5. Refs are now automatically forwarded to the inner component.");
      })
    };
    {
      WithTheme.displayName = "WithTheme(".concat(getDisplayName(Component), ")");
    }
    hoistNonReactStatics_cjs(WithTheme, Component);
    {
      WithTheme.Naked = Component;
    }
    return WithTheme;
  };
  return withTheme2;
}
var withTheme = withThemeCreator();
function createStyles$1(styles9) {
  return createStyles(styles9);
}
var defaultTheme = createTheme();
function makeStyles$1(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return makeStyles(stylesOrCreator, _extends$5({
    defaultTheme
  }, options));
}
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
}
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function toUnitless(length3) {
  return parseFloat(length3);
}
function convertLength(baseFontSize) {
  return function(length3, toUnit) {
    var fromUnit = getUnit(length3);
    if (fromUnit === toUnit) {
      return length3;
    }
    var pxLength = toUnitless(length3);
    if (fromUnit !== "px") {
      if (fromUnit === "em") {
        pxLength = toUnitless(length3) * toUnitless(baseFontSize);
      } else if (fromUnit === "rem") {
        pxLength = toUnitless(length3) * toUnitless(baseFontSize);
        return length3;
      }
    }
    var outputLength = pxLength;
    if (toUnit !== "px") {
      if (toUnit === "em") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === "rem") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length3;
      }
    }
    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size, grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}
function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight, pixels = _ref2.pixels, htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty, min3 = _ref3.min, max3 = _ref3.max, _ref3$unit = _ref3.unit, unit = _ref3$unit === void 0 ? "rem" : _ref3$unit, _ref3$breakpoints = _ref3.breakpoints, breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints, _ref3$transform = _ref3.transform, transform2 = _ref3$transform === void 0 ? null : _ref3$transform;
  var output = _defineProperty({}, cssProperty, "".concat(min3).concat(unit));
  var factor = (max3 - min3) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function(breakpoint) {
    var value = min3 + factor * breakpoint;
    if (transform2 !== null) {
      value = transform2(value);
    }
    output["@media (min-width:".concat(breakpoint, "px)")] = _defineProperty({}, cssProperty, "".concat(Math.round(value * 1e4) / 1e4).concat(unit));
  });
  return output;
}
function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints, breakpoints = _options$breakpoints === void 0 ? ["sm", "md", "lg"] : _options$breakpoints, _options$disableAlign = options.disableAlign, disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign, _options$factor = options.factor, factor = _options$factor === void 0 ? 2 : _options$factor, _options$variants = options.variants, variants = _options$variants === void 0 ? ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"] : _options$variants;
  var theme = _extends$5({}, themeInput);
  theme.typography = _extends$5({}, theme.typography);
  var typography = theme.typography;
  var convert = convertLength(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function(x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function(variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, "rem"));
    if (remFontSize <= 1) {
      return;
    }
    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;
    if (!isUnitless(lineHeight) && !disableAlign) {
      throw new Error("Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead.");
    }
    if (!isUnitless(lineHeight)) {
      lineHeight = parseFloat(convert(lineHeight, "rem")) / parseFloat(remFontSize);
    }
    var transform2 = null;
    if (!disableAlign) {
      transform2 = function transform3(value) {
        return alignProperty({
          size: value,
          grid: fontGrid({
            pixels: 4,
            lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }
    typography[variant] = _extends$5({}, style, responsiveProperty({
      cssProperty: "fontSize",
      min: minFontSize,
      max: maxFontSize,
      unit: "rem",
      breakpoints: breakpointValues,
      transform: transform2
    }));
  });
  return theme;
}
var styled$1 = function styled$12(Component) {
  var componentCreator = styled(Component);
  return function(style, options) {
    return componentCreator(style, _extends$5({
      defaultTheme
    }, options));
  };
};
function useTheme$1() {
  var theme = useTheme() || defaultTheme;
  {
    react.useDebugValue(theme);
  }
  return theme;
}
function withStyles$1(stylesOrCreator, options) {
  return withStyles(stylesOrCreator, _extends$5({
    defaultTheme
  }, options));
}
var withTheme$1 = withThemeCreator({
  defaultTheme
});
var styles = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createTheme,
  createMuiTheme,
  unstable_createMuiStrictModeTheme: createMuiStrictModeTheme,
  createStyles: createStyles$1,
  makeStyles: makeStyles$1,
  responsiveFontSizes,
  styled: styled$1,
  useTheme: useTheme$1,
  withStyles: withStyles$1,
  withTheme: withTheme$1,
  createGenerateClassName,
  jssPreset,
  ServerStyleSheets,
  StylesProvider,
  MuiThemeProvider: ThemeProvider,
  ThemeProvider,
  hexToRgb,
  rgbToHex,
  hslToRgb,
  decomposeColor,
  recomposeColor,
  getContrastRatio,
  getLuminance,
  emphasize,
  fade,
  alpha,
  darken,
  lighten,
  easing,
  duration
});
var classnames = createCommonjsModule(function(module) {
  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner2 = classNames.apply(null, arg);
            if (inner2) {
              classes.push(inner2);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("Material-UI: capitalize(string) expects a string argument.");
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var styles$1 = function styles2(theme) {
  return {
    root: {
      margin: 0
    },
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
    subtitle1: theme.typography.subtitle1,
    subtitle2: theme.typography.subtitle2,
    overline: theme.typography.overline,
    srOnly: {
      position: "absolute",
      height: 1,
      width: 1,
      overflow: "hidden"
    },
    alignLeft: {
      textAlign: "left"
    },
    alignCenter: {
      textAlign: "center"
    },
    alignRight: {
      textAlign: "right"
    },
    alignJustify: {
      textAlign: "justify"
    },
    noWrap: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    gutterBottom: {
      marginBottom: "0.35em"
    },
    paragraph: {
      marginBottom: 16
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorTextPrimary: {
      color: theme.palette.text.primary
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    colorError: {
      color: theme.palette.error.main
    },
    displayInline: {
      display: "inline"
    },
    displayBlock: {
      display: "block"
    }
  };
};
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p"
};
var Typography = /* @__PURE__ */ react.forwardRef(function Typography2(props3, ref) {
  var _props$align = props3.align, align = _props$align === void 0 ? "inherit" : _props$align, classes = props3.classes, className = props3.className, _props$color = props3.color, color = _props$color === void 0 ? "initial" : _props$color, component = props3.component, _props$display = props3.display, display = _props$display === void 0 ? "initial" : _props$display, _props$gutterBottom = props3.gutterBottom, gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom, _props$noWrap = props3.noWrap, noWrap = _props$noWrap === void 0 ? false : _props$noWrap, _props$paragraph = props3.paragraph, paragraph3 = _props$paragraph === void 0 ? false : _props$paragraph, _props$variant = props3.variant, variant = _props$variant === void 0 ? "body1" : _props$variant, _props$variantMapping = props3.variantMapping, variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping, other = _objectWithoutProperties(props3, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);
  var Component = component || (paragraph3 ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  return /* @__PURE__ */ react.createElement(Component, _extends$5({
    className: clsx(classes.root, className, variant !== "inherit" && classes[variant], color !== "initial" && classes["color".concat(capitalize(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph3 && classes.paragraph, align !== "inherit" && classes["align".concat(capitalize(align))], display !== "initial" && classes["display".concat(capitalize(display))]),
    ref
  }, other));
});
Typography.propTypes = {
  align: propTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: propTypes.node,
  classes: propTypes.object.isRequired,
  className: propTypes.string,
  color: propTypes.oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  component: propTypes.elementType,
  display: propTypes.oneOf(["initial", "block", "inline"]),
  gutterBottom: propTypes.bool,
  noWrap: propTypes.bool,
  paragraph: propTypes.bool,
  variant: propTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline", "srOnly", "inherit"]),
  variantMapping: propTypes.object
};
var require$$4 = withStyles$1(styles$1, {
  name: "MuiTypography"
})(Typography);
var F = function() {
  return false;
};
var T = function() {
  return true;
};
var __ = {"@@functional/placeholder": true};
function _isPlaceholder(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
var add = /* @__PURE__ */ _curry2(function add2(a, b) {
  return Number(a) + Number(b);
});
function _concat(set1, set22) {
  set1 = set1 || [];
  set22 = set22 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set22.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set22[idx];
    idx += 1;
  }
  return result;
}
function _arity(n, fn) {
  switch (n) {
    case 0:
      return function() {
        return fn.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function _curryN(length3, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length3;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length3, combined, fn));
  };
}
var curryN = /* @__PURE__ */ _curry2(function curryN2(length3, fn) {
  if (length3 === 1) {
    return _curry1(fn);
  }
  return _arity(length3, _curryN(length3, [], fn));
});
var addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list3 = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list3]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function(_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function(_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
var adjust = /* @__PURE__ */ _curry3(function adjust2(idx, fn, list3) {
  if (idx >= list3.length || idx < -list3.length) {
    return list3;
  }
  var start = idx < 0 ? list3.length : 0;
  var _idx = start + idx;
  var _list = _concat(list3);
  _list[_idx] = fn(list3[_idx]);
  return _list;
});
var _isArray = Array.isArray || function _isArray2(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};
function _isTransformer(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}
function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}
function _reduced(x) {
  return x && x["@@transducer/reduced"] ? x : {
    "@@transducer/value": x,
    "@@transducer/reduced": true
  };
}
var _xfBase = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(result) {
    return this.xf["@@transducer/result"](result);
  }
};
var XAll = /* @__PURE__ */ function() {
  function XAll2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll2.prototype["@@transducer/init"] = _xfBase.init;
  XAll2.prototype["@@transducer/result"] = function(result) {
    if (this.all) {
      result = this.xf["@@transducer/step"](result, true);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAll2.prototype["@@transducer/step"] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf["@@transducer/step"](result, false));
    }
    return result;
  };
  return XAll2;
}();
var _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
  return new XAll(f, xf);
});
var all = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["all"], _xall, function all2(fn, list3) {
  var idx = 0;
  while (idx < list3.length) {
    if (!fn(list3[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
var max = /* @__PURE__ */ _curry2(function max2(a, b) {
  return b > a ? b : a;
});
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}
function _isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}
var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
var XWrap = /* @__PURE__ */ function() {
  function XWrap2(fn) {
    this.f = fn;
  }
  XWrap2.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  };
  XWrap2.prototype["@@transducer/result"] = function(acc) {
    return acc;
  };
  XWrap2.prototype["@@transducer/step"] = function(acc, x) {
    return this.f(acc, x);
  };
  return XWrap2;
}();
function _xwrap(fn) {
  return new XWrap(fn);
}
var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});
function _arrayReduce(xf, acc, list3) {
  var idx = 0;
  var len = list3.length;
  while (idx < len) {
    acc = xf["@@transducer/step"](acc, list3[idx]);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    idx += 1;
  }
  return xf["@@transducer/result"](acc);
}
function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf["@@transducer/step"](acc, step.value);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    step = iter.next();
  }
  return xf["@@transducer/result"](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
  return xf["@@transducer/result"](obj[methodName](bind(xf["@@transducer/step"], xf), acc));
}
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _reduce(fn, acc, list3) {
  if (typeof fn === "function") {
    fn = _xwrap(fn);
  }
  if (_isArrayLike(list3)) {
    return _arrayReduce(fn, acc, list3);
  }
  if (typeof list3["fantasy-land/reduce"] === "function") {
    return _methodReduce(fn, acc, list3, "fantasy-land/reduce");
  }
  if (list3[symIterator] != null) {
    return _iterableReduce(fn, acc, list3[symIterator]());
  }
  if (typeof list3.next === "function") {
    return _iterableReduce(fn, acc, list3);
  }
  if (typeof list3.reduce === "function") {
    return _methodReduce(fn, acc, list3, "reduce");
  }
  throw new TypeError("reduce: list must be array or iterable");
}
var XMap = /* @__PURE__ */ function() {
  function XMap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap2.prototype["@@transducer/init"] = _xfBase.init;
  XMap2.prototype["@@transducer/result"] = _xfBase.result;
  XMap2.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  return XMap2;
}();
var _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
  return new XMap(f, xf);
});
function _has(prop3, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop3);
}
var toString = Object.prototype.toString;
var _isArguments = /* @__PURE__ */ function() {
  return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
    return toString.call(x) === "[object Arguments]";
  } : function _isArguments2(x) {
    return _has("callee", x);
  };
}();
var hasEnumBug = !/* @__PURE__ */ {toString: null}.propertyIsEnumerable("toString");
var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list3, item) {
  var idx = 0;
  while (idx < list3.length) {
    if (list3[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys$1 = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /* @__PURE__ */ _curry1(function keys3(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop3, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
  for (prop3 in obj) {
    if (_has(prop3, obj) && (!checkArgsLength || prop3 !== "length")) {
      ks[ks.length] = prop3;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop3 = nonEnumerableProps[nIdx];
      if (_has(prop3, obj) && !contains(ks, prop3)) {
        ks[ks.length] = prop3;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var map = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], _xmap, function map2(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case "[object Function]":
      return curryN(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case "[object Object]":
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys$1(functor));
    default:
      return _map(fn, functor);
  }
}));
var path = /* @__PURE__ */ _curry2(function path2(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
  return path([p], obj);
});
var pluck = /* @__PURE__ */ _curry2(function pluck2(p, list3) {
  return map(prop(p), list3);
});
var reduce = /* @__PURE__ */ _curry3(_reduce);
var allPass = /* @__PURE__ */ _curry1(function allPass2(preds) {
  return curryN(reduce(max, 0, pluck("length", preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
var always = /* @__PURE__ */ _curry1(function always2(val) {
  return function() {
    return val;
  };
});
var and = /* @__PURE__ */ _curry2(function and2(a, b) {
  return a && b;
});
var XAny = /* @__PURE__ */ function() {
  function XAny2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny2.prototype["@@transducer/init"] = _xfBase.init;
  XAny2.prototype["@@transducer/result"] = function(result) {
    if (!this.any) {
      result = this.xf["@@transducer/step"](result, false);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAny2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf["@@transducer/step"](result, true));
    }
    return result;
  };
  return XAny2;
}();
var _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
  return new XAny(f, xf);
});
var any = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["any"], _xany, function any2(fn, list3) {
  var idx = 0;
  while (idx < list3.length) {
    if (fn(list3[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));
var anyPass = /* @__PURE__ */ _curry1(function anyPass2(preds) {
  return curryN(reduce(max, 0, pluck("length", preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
var ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
  return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
    return applyF(x)(applyX(x));
  } : _reduce(function(acc, f) {
    return _concat(acc, map(f, applyX));
  }, [], applyF);
});
function _aperture(n, list3) {
  var idx = 0;
  var limit = list3.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list3, idx, idx + n);
    idx += 1;
  }
  return acc;
}
var XAperture = /* @__PURE__ */ function() {
  function XAperture2(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture2.prototype["@@transducer/init"] = _xfBase.init;
  XAperture2.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XAperture2.prototype["@@transducer/step"] = function(result, input) {
    this.store(input);
    return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
  };
  XAperture2.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture2.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };
  return XAperture2;
}();
var _xaperture = /* @__PURE__ */ _curry2(function _xaperture2(n, xf) {
  return new XAperture(n, xf);
});
var aperture = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xaperture, _aperture));
var append = /* @__PURE__ */ _curry2(function append2(el2, list3) {
  return _concat(list3, [el2]);
});
var apply = /* @__PURE__ */ _curry2(function apply2(fn, args) {
  return fn.apply(this, args);
});
var values = /* @__PURE__ */ _curry1(function values2(obj) {
  var props3 = keys$1(obj);
  var len = props3.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props3[idx]];
    idx += 1;
  }
  return vals;
});
function mapValues(fn, obj) {
  return keys$1(obj).reduce(function(acc, key) {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}
var applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
  spec = mapValues(function(v) {
    return typeof v == "function" ? v : applySpec2(v);
  }, spec);
  return curryN(reduce(max, 0, pluck("length", values(spec))), function() {
    var args = arguments;
    return mapValues(function(f) {
      return apply(f, args);
    }, spec);
  });
});
var applyTo = /* @__PURE__ */ _curry2(function applyTo2(x, f) {
  return f(x);
});
var ascend = /* @__PURE__ */ _curry3(function ascend2(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
var assoc = /* @__PURE__ */ _curry3(function assoc2(prop3, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop3] = val;
  return result;
});
var _isInteger = Number.isInteger || function _isInteger2(n) {
  return n << 0 === n;
};
var isNil = /* @__PURE__ */ _curry1(function isNil2(x) {
  return x == null;
});
var assocPath = /* @__PURE__ */ _curry3(function assocPath2(path3, val, obj) {
  if (path3.length === 0) {
    return val;
  }
  var idx = path3[0];
  if (path3.length > 1) {
    var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path3[1]) ? [] : {};
    val = assocPath2(Array.prototype.slice.call(path3, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});
var nAry = /* @__PURE__ */ _curry2(function nAry2(n, fn) {
  switch (n) {
    case 0:
      return function() {
        return fn.call(this);
      };
    case 1:
      return function(a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function(a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
  }
});
var binary = /* @__PURE__ */ _curry1(function binary2(fn) {
  return nAry(2, fn);
});
function _isFunction(x) {
  return Object.prototype.toString.call(x) === "[object Function]";
}
var liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function() {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
var lift = /* @__PURE__ */ _curry1(function lift2(fn) {
  return liftN(fn.length, fn);
});
var both = /* @__PURE__ */ _curry2(function both2(f, g) {
  return _isFunction(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : lift(and)(f, g);
});
var curry = /* @__PURE__ */ _curry1(function curry2(fn) {
  return curryN(fn.length, fn);
});
var call = /* @__PURE__ */ curry(function call2(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
function _makeFlat(recursive) {
  return function flatt(list3) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list3.length;
    while (idx < ilen) {
      if (_isArrayLike(list3[idx])) {
        value = recursive ? flatt(list3[idx]) : list3[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list3[idx];
      }
      idx += 1;
    }
    return result;
  };
}
function _forceReduced(x) {
  return {
    "@@transducer/value": x,
    "@@transducer/reduced": true
  };
}
var preservingReduced = function(xf) {
  return {
    "@@transducer/init": _xfBase.init,
    "@@transducer/result": function(result) {
      return xf["@@transducer/result"](result);
    },
    "@@transducer/step": function(result, input) {
      var ret = xf["@@transducer/step"](result, input);
      return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
    }
  };
};
var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    "@@transducer/init": _xfBase.init,
    "@@transducer/result": function(result) {
      return rxf["@@transducer/result"](result);
    },
    "@@transducer/step": function(result, input) {
      return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
    }
  };
};
var _xchain = /* @__PURE__ */ _curry2(function _xchain2(f, xf) {
  return map(f, _flatCat(xf));
});
var chain = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/chain", "chain"], _xchain, function chain2(fn, monad) {
  if (typeof monad === "function") {
    return function(x) {
      return fn(monad(x))(x);
    };
  }
  return _makeFlat(false)(map(fn, monad));
}));
var clamp$1 = /* @__PURE__ */ _curry3(function clamp2(min3, max3, value) {
  if (min3 > max3) {
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  }
  return value < min3 ? min3 : value > max3 ? max3 : value;
});
function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
}
var type = /* @__PURE__ */ _curry1(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
function _clone(value, refFrom, refTo, deep) {
  var copy2 = function copy3(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case "Object":
      return copy2({});
    case "Array":
      return copy2([]);
    case "Date":
      return new Date(value.valueOf());
    case "RegExp":
      return _cloneRegExp(value);
    default:
      return value;
  }
}
var clone = /* @__PURE__ */ _curry1(function clone2(value) {
  return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
});
var comparator = /* @__PURE__ */ _curry1(function comparator2(pred) {
  return function(a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
var not = /* @__PURE__ */ _curry1(function not2(a) {
  return !a;
});
var complement = /* @__PURE__ */ lift(not);
function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
}
function _checkForMethod(methodname, fn) {
  return function() {
    var length3 = arguments.length;
    if (length3 === 0) {
      return fn();
    }
    var obj = arguments[length3 - 1];
    return _isArray(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length3 - 1));
  };
}
var slice = /* @__PURE__ */ _curry3(/* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list3) {
  return Array.prototype.slice.call(list3, fromIndex, toIndex);
}));
var tail = /* @__PURE__ */ _curry1(/* @__PURE__ */ _checkForMethod("tail", /* @__PURE__ */ slice(1, Infinity)));
function pipe() {
  if (arguments.length === 0) {
    throw new Error("pipe requires at least one argument");
  }
  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}
var reverse = /* @__PURE__ */ _curry1(function reverse2(list3) {
  return _isString(list3) ? list3.split("").reverse().join("") : Array.prototype.slice.call(list3, 0).reverse();
});
function compose() {
  if (arguments.length === 0) {
    throw new Error("compose requires at least one argument");
  }
  return pipe.apply(this, reverse(arguments));
}
function composeK() {
  if (arguments.length === 0) {
    throw new Error("composeK requires at least one argument");
  }
  var init2 = Array.prototype.slice.call(arguments);
  var last2 = init2.pop();
  return compose(compose.apply(this, map(chain, init2)), last2);
}
function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
}
function pipeP() {
  if (arguments.length === 0) {
    throw new Error("pipeP requires at least one argument");
  }
  return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
}
function composeP() {
  if (arguments.length === 0) {
    throw new Error("composeP requires at least one argument");
  }
  return pipeP.apply(this, reverse(arguments));
}
var nth = /* @__PURE__ */ _curry2(function nth2(offset2, list3) {
  var idx = offset2 < 0 ? list3.length + offset2 : offset2;
  return _isString(list3) ? list3.charAt(idx) : list3[idx];
});
var head = /* @__PURE__ */ nth(0);
function _identity(x) {
  return x;
}
var identity = /* @__PURE__ */ _curry1(_identity);
var pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list3) {
  if (list3.length <= 0) {
    return identity;
  }
  var headList = head(list3);
  var tailList = tail(list3);
  return _arity(headList.length, function() {
    return _reduce(function(result, f) {
      return xf.call(this, f, result);
    }, headList.apply(this, arguments), tailList);
  });
});
var composeWith = /* @__PURE__ */ _curry2(function composeWith2(xf, list3) {
  return pipeWith.apply(this, [xf, reverse(list3)]);
});
function _arrayFromIterator(iter) {
  var list3 = [];
  var next;
  while (!(next = iter.next()).done) {
    list3.push(next.value);
  }
  return list3;
}
function _includesWith(pred, x, list3) {
  var idx = 0;
  var len = list3.length;
  while (idx < len) {
    if (pred(x, list3[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
function _functionName(f) {
  var match4 = String(f).match(/^function (\w*)/);
  return match4 == null ? "" : match4[1];
}
function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}
var _objectIs$1 = typeof Object.is === "function" ? Object.is : _objectIs;
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith(function(b2, aItem) {
    return !_includesWith(eq, aItem, b2);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if (_objectIs$1(a, b)) {
    return true;
  }
  var typeA = type(a);
  if (typeA !== type(b)) {
    return false;
  }
  if (a == null || b == null) {
    return false;
  }
  if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
    return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
  }
  if (typeof a.equals === "function" || typeof b.equals === "function") {
    return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
        return a === b;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!_objectIs$1(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a.name === b.name && a.message === b.message;
    case "RegExp":
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case "Set":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys$1(a);
  if (keysA.length !== keys$1(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
  return _equals(a, b, [], []);
});
function _indexOf(list3, a, idx) {
  var inf, item;
  if (typeof list3.indexOf === "function") {
    switch (typeof a) {
      case "number":
        if (a === 0) {
          inf = 1 / a;
          while (idx < list3.length) {
            item = list3[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          while (idx < list3.length) {
            item = list3[idx];
            if (typeof item === "number" && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        return list3.indexOf(a, idx);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return list3.indexOf(a, idx);
      case "object":
        if (a === null) {
          return list3.indexOf(a, idx);
        }
    }
  }
  while (idx < list3.length) {
    if (equals(list3[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}
function _includes(a, list3) {
  return _indexOf(list3, a, 0) >= 0;
}
function _quote(s) {
  var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}
var pad = function pad2(n) {
  return (n < 10 ? "0" : "") + n;
};
var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
  return d.toISOString();
} : function _toISOString3(d) {
  return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
}
function _filter(fn, list3) {
  var idx = 0;
  var len = list3.length;
  var result = [];
  while (idx < len) {
    if (fn(list3[idx])) {
      result[result.length] = list3[idx];
    }
    idx += 1;
  }
  return result;
}
function _isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}
var XFilter = /* @__PURE__ */ function() {
  function XFilter2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter2.prototype["@@transducer/init"] = _xfBase.init;
  XFilter2.prototype["@@transducer/result"] = _xfBase.result;
  XFilter2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
  };
  return XFilter2;
}();
var _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
  return new XFilter(f, xf);
});
var filter = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["filter"], _xfilter, function(pred, filterable) {
  return _isObject(filterable) ? _reduce(function(acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys$1(filterable)) : _filter(pred, filterable);
}));
var reject = /* @__PURE__ */ _curry2(function reject2(pred, filterable) {
  return filter(_complement(pred), filterable);
});
function _toString(x, seen) {
  var recur = function recur2(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
  };
  var mapPairs = function(obj, keys4) {
    return _map(function(k) {
      return _quote(k) + ": " + recur(obj[k]);
    }, keys4.slice().sort());
  };
  switch (Object.prototype.toString.call(x)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
    case "[object Array]":
      return "[" + _map(recur, x).concat(mapPairs(x, reject(function(k) {
        return /^\d+$/.test(k);
      }, keys$1(x)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
    case "[object String]":
      return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof x.toString === "function") {
        var repr = x.toString();
        if (repr !== "[object Object]") {
          return repr;
        }
      }
      return "{" + mapPairs(x, keys$1(x)).join(", ") + "}";
  }
}
var toString$1 = /* @__PURE__ */ _curry1(function toString2(val) {
  return _toString(val, []);
});
var concat = /* @__PURE__ */ _curry2(function concat2(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString$1(b) + " is not an array");
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString$1(b) + " is not a string");
  }
  if (a != null && _isFunction(a["fantasy-land/concat"])) {
    return a["fantasy-land/concat"](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString$1(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
var cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
  var arity = reduce(max, 0, map(function(pair3) {
    return pair3[0].length;
  }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
var constructN = /* @__PURE__ */ _curry2(function constructN2(n, Fn) {
  if (n > 10) {
    throw new Error("Constructor with greater than ten arguments");
  }
  if (n === 0) {
    return function() {
      return new Fn();
    };
  }
  return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
var construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
  return constructN(Fn.length, Fn);
});
var contains$1 = /* @__PURE__ */ _curry2(_includes);
var converge = /* @__PURE__ */ _curry2(function converge2(after, fns) {
  return curryN(reduce(max, 0, pluck("length", fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
var XReduceBy = /* @__PURE__ */ function() {
  function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy2.prototype["@@transducer/init"] = _xfBase.init;
  XReduceBy2.prototype["@@transducer/result"] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf["@@transducer/step"](result, this.inputs[key]);
        if (result["@@transducer/reduced"]) {
          result = result["@@transducer/value"];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf["@@transducer/result"](result);
  };
  XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };
  return XReduceBy2;
}();
var _xreduceBy = /* @__PURE__ */ _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
var reduceBy = /* @__PURE__ */ _curryN(4, [], /* @__PURE__ */ _dispatchable([], _xreduceBy, function reduceBy2(valueFn, valueAcc, keyFn, list3) {
  return _reduce(function(acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list3);
}));
var countBy = /* @__PURE__ */ reduceBy(function(acc, elem) {
  return acc + 1;
}, 0);
var dec = /* @__PURE__ */ add(-1);
var defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d, v) {
  return v == null || v !== v ? d : v;
});
var descend = /* @__PURE__ */ _curry3(function descend2(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
var _Set = /* @__PURE__ */ function() {
  function _Set2() {
    this._nativeSet = typeof Set === "function" ? new Set() : null;
    this._items = {};
  }
  _Set2.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };
  _Set2.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };
  return _Set2;
}();
function hasOrAdd(item, shouldAdd, set5) {
  var type3 = typeof item;
  var prevSize, newSize;
  switch (type3) {
    case "string":
    case "number":
      if (item === 0 && 1 / item === -Infinity) {
        if (set5._items["-0"]) {
          return true;
        } else {
          if (shouldAdd) {
            set5._items["-0"] = true;
          }
          return false;
        }
      }
      if (set5._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set5._nativeSet.size;
          set5._nativeSet.add(item);
          newSize = set5._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set5._nativeSet.has(item);
        }
      } else {
        if (!(type3 in set5._items)) {
          if (shouldAdd) {
            set5._items[type3] = {};
            set5._items[type3][item] = true;
          }
          return false;
        } else if (item in set5._items[type3]) {
          return true;
        } else {
          if (shouldAdd) {
            set5._items[type3][item] = true;
          }
          return false;
        }
      }
    case "boolean":
      if (type3 in set5._items) {
        var bIdx = item ? 1 : 0;
        if (set5._items[type3][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set5._items[type3][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set5._items[type3] = item ? [false, true] : [true, false];
        }
        return false;
      }
    case "function":
      if (set5._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set5._nativeSet.size;
          set5._nativeSet.add(item);
          newSize = set5._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set5._nativeSet.has(item);
        }
      } else {
        if (!(type3 in set5._items)) {
          if (shouldAdd) {
            set5._items[type3] = [item];
          }
          return false;
        }
        if (!_includes(item, set5._items[type3])) {
          if (shouldAdd) {
            set5._items[type3].push(item);
          }
          return false;
        }
        return true;
      }
    case "undefined":
      if (set5._items[type3]) {
        return true;
      } else {
        if (shouldAdd) {
          set5._items[type3] = true;
        }
        return false;
      }
    case "object":
      if (item === null) {
        if (!set5._items["null"]) {
          if (shouldAdd) {
            set5._items["null"] = true;
          }
          return false;
        }
        return true;
      }
    default:
      type3 = Object.prototype.toString.call(item);
      if (!(type3 in set5._items)) {
        if (shouldAdd) {
          set5._items[type3] = [item];
        }
        return false;
      }
      if (!_includes(item, set5._items[type3])) {
        if (shouldAdd) {
          set5._items[type3].push(item);
        }
        return false;
      }
      return true;
  }
}
var difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new _Set();
  for (var i = 0; i < secondLen; i += 1) {
    toFilterOut.add(second[i]);
  }
  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
var differenceWith = /* @__PURE__ */ _curry3(function differenceWith2(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
var dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop3, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop3];
  return result;
});
var remove = /* @__PURE__ */ _curry3(function remove2(start, count, list3) {
  var result = Array.prototype.slice.call(list3, 0);
  result.splice(start, count);
  return result;
});
var update$1 = /* @__PURE__ */ _curry3(function update2(idx, x, list3) {
  return adjust(idx, always(x), list3);
});
var dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path3, obj) {
  switch (path3.length) {
    case 0:
      return obj;
    case 1:
      return _isInteger(path3[0]) && _isArray(obj) ? remove(path3[0], 1, obj) : dissoc(path3[0], obj);
    default:
      var head2 = path3[0];
      var tail2 = Array.prototype.slice.call(path3, 1);
      if (obj[head2] == null) {
        return obj;
      } else if (_isInteger(head2) && _isArray(obj)) {
        return update$1(head2, dissocPath2(tail2, obj[head2]), obj);
      } else {
        return assoc(head2, dissocPath2(tail2, obj[head2]), obj);
      }
  }
});
var divide = /* @__PURE__ */ _curry2(function divide2(a, b) {
  return a / b;
});
var XDrop = /* @__PURE__ */ function() {
  function XDrop2(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop2.prototype["@@transducer/init"] = _xfBase.init;
  XDrop2.prototype["@@transducer/result"] = _xfBase.result;
  XDrop2.prototype["@@transducer/step"] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDrop2;
}();
var _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n, xf) {
  return new XDrop(n, xf);
});
var drop = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["drop"], _xdrop, function drop2(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));
var XTake = /* @__PURE__ */ function() {
  function XTake2(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake2.prototype["@@transducer/init"] = _xfBase.init;
  XTake2.prototype["@@transducer/result"] = _xfBase.result;
  XTake2.prototype["@@transducer/step"] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };
  return XTake2;
}();
var _xtake = /* @__PURE__ */ _curry2(function _xtake2(n, xf) {
  return new XTake(n, xf);
});
var take = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["take"], _xtake, function take2(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));
function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
}
var XDropLast = /* @__PURE__ */ function() {
  function XDropLast2(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast2.prototype["@@transducer/init"] = _xfBase.init;
  XDropLast2.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLast2.prototype["@@transducer/step"] = function(result, input) {
    if (this.full) {
      result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast2.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  return XDropLast2;
}();
var _xdropLast = /* @__PURE__ */ _curry2(function _xdropLast2(n, xf) {
  return new XDropLast(n, xf);
});
var dropLast$1 = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropLast, dropLast));
function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return slice(0, idx + 1, xs);
}
var XDropLastWhile = /* @__PURE__ */ function() {
  function XDropLastWhile2(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
    this.retained = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile2.prototype.flush = function(result, input) {
    result = _reduce(this.xf["@@transducer/step"], result, this.retained);
    this.retained = [];
    return this.xf["@@transducer/step"](result, input);
  };
  XDropLastWhile2.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };
  return XDropLastWhile2;
}();
var _xdropLastWhile = /* @__PURE__ */ _curry2(function _xdropLastWhile2(fn, xf) {
  return new XDropLastWhile(fn, xf);
});
var dropLastWhile$1 = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropLastWhile, dropLastWhile));
var XDropRepeatsWith = /* @__PURE__ */ function() {
  function XDropRepeatsWith2(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = void 0;
    this.seenFirstValue = false;
  }
  XDropRepeatsWith2.prototype["@@transducer/init"] = _xfBase.init;
  XDropRepeatsWith2.prototype["@@transducer/result"] = _xfBase.result;
  XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
  };
  return XDropRepeatsWith2;
}();
var _xdropRepeatsWith = /* @__PURE__ */ _curry2(function _xdropRepeatsWith2(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
var last = /* @__PURE__ */ nth(-1);
var dropRepeatsWith = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropRepeatsWith, function dropRepeatsWith2(pred, list3) {
  var result = [];
  var idx = 1;
  var len = list3.length;
  if (len !== 0) {
    result[0] = list3[0];
    while (idx < len) {
      if (!pred(last(result), list3[idx])) {
        result[result.length] = list3[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
var dropRepeats = /* @__PURE__ */ _curry1(/* @__PURE__ */ _dispatchable([], /* @__PURE__ */ _xdropRepeatsWith(equals), /* @__PURE__ */ dropRepeatsWith(equals)));
var XDropWhile = /* @__PURE__ */ function() {
  function XDropWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XDropWhile2.prototype["@@transducer/result"] = _xfBase.result;
  XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDropWhile2;
}();
var _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
  return new XDropWhile(f, xf);
});
var dropWhile = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["dropWhile"], _xdropWhile, function dropWhile2(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return slice(idx, Infinity, xs);
}));
var or = /* @__PURE__ */ _curry2(function or2(a, b) {
  return a || b;
});
var either = /* @__PURE__ */ _curry2(function either2(f, g) {
  return _isFunction(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : lift(or)(f, g);
});
var empty = /* @__PURE__ */ _curry1(function empty2(x) {
  return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : _isArguments(x) ? function() {
    return arguments;
  }() : void 0;
});
var takeLast = /* @__PURE__ */ _curry2(function takeLast2(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});
var endsWith = /* @__PURE__ */ _curry2(function(suffix, list3) {
  return equals(takeLast(suffix.length, list3), suffix);
});
var eqBy = /* @__PURE__ */ _curry3(function eqBy2(f, x, y) {
  return equals(f(x), f(y));
});
var eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop3, obj1, obj2) {
  return equals(obj1[prop3], obj2[prop3]);
});
var evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var transformation, key, type3;
  for (key in object) {
    transformation = transformations[key];
    type3 = typeof transformation;
    result[key] = type3 === "function" ? transformation(object[key]) : transformation && type3 === "object" ? evolve2(transformation, object[key]) : object[key];
  }
  return result;
});
var XFind = /* @__PURE__ */ function() {
  function XFind2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind2.prototype["@@transducer/init"] = _xfBase.init;
  XFind2.prototype["@@transducer/result"] = function(result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, void 0);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFind2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, input));
    }
    return result;
  };
  return XFind2;
}();
var _xfind = /* @__PURE__ */ _curry2(function _xfind2(f, xf) {
  return new XFind(f, xf);
});
var find = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["find"], _xfind, function find2(fn, list3) {
  var idx = 0;
  var len = list3.length;
  while (idx < len) {
    if (fn(list3[idx])) {
      return list3[idx];
    }
    idx += 1;
  }
}));
var XFindIndex = /* @__PURE__ */ function() {
  function XFindIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex2.prototype["@@transducer/init"] = _xfBase.init;
  XFindIndex2.prototype["@@transducer/result"] = function(result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, -1);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, this.idx));
    }
    return result;
  };
  return XFindIndex2;
}();
var _xfindIndex = /* @__PURE__ */ _curry2(function _xfindIndex2(f, xf) {
  return new XFindIndex(f, xf);
});
var findIndex = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindIndex, function findIndex2(fn, list3) {
  var idx = 0;
  var len = list3.length;
  while (idx < len) {
    if (fn(list3[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));
var XFindLast = /* @__PURE__ */ function() {
  function XFindLast2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast2.prototype["@@transducer/init"] = _xfBase.init;
  XFindLast2.prototype["@@transducer/result"] = function(result) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
  };
  XFindLast2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };
  return XFindLast2;
}();
var _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
  return new XFindLast(f, xf);
});
var findLast = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindLast, function findLast2(fn, list3) {
  var idx = list3.length - 1;
  while (idx >= 0) {
    if (fn(list3[idx])) {
      return list3[idx];
    }
    idx -= 1;
  }
}));
var XFindLastIndex = /* @__PURE__ */ function() {
  function XFindLastIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex2.prototype["@@transducer/init"] = _xfBase.init;
  XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
  };
  XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };
  return XFindLastIndex2;
}();
var _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
  return new XFindLastIndex(f, xf);
});
var findLastIndex = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindLastIndex, function findLastIndex2(fn, list3) {
  var idx = list3.length - 1;
  while (idx >= 0) {
    if (fn(list3[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));
var flatten = /* @__PURE__ */ _curry1(/* @__PURE__ */ _makeFlat(true));
var flip = /* @__PURE__ */ _curry1(function flip2(fn) {
  return curryN(fn.length, function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
var forEach = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("forEach", function forEach2(fn, list3) {
  var len = list3.length;
  var idx = 0;
  while (idx < len) {
    fn(list3[idx]);
    idx += 1;
  }
  return list3;
}));
var forEachObjIndexed = /* @__PURE__ */ _curry2(function forEachObjIndexed2(fn, obj) {
  var keyList = keys$1(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});
var fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
var groupBy = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("groupBy", /* @__PURE__ */ reduceBy(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));
var groupWith = /* @__PURE__ */ _curry2(function(fn, list3) {
  var res = [];
  var idx = 0;
  var len = list3.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list3[nextidx - 1], list3[nextidx])) {
      nextidx += 1;
    }
    res.push(list3.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
var gt = /* @__PURE__ */ _curry2(function gt2(a, b) {
  return a > b;
});
var gte = /* @__PURE__ */ _curry2(function gte2(a, b) {
  return a >= b;
});
var hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
  if (_path.length === 0) {
    return false;
  }
  var val = obj;
  var idx = 0;
  while (idx < _path.length) {
    if (_has(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }
  return true;
});
var has$2 = /* @__PURE__ */ _curry2(function has2(prop3, obj) {
  return hasPath([prop3], obj);
});
var hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop3, obj) {
  return prop3 in obj;
});
var identical = /* @__PURE__ */ _curry2(_objectIs$1);
var ifElse = /* @__PURE__ */ _curry3(function ifElse2(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
var inc = /* @__PURE__ */ add(1);
var includes = /* @__PURE__ */ _curry2(_includes);
var indexBy = /* @__PURE__ */ reduceBy(function(acc, elem) {
  return elem;
}, null);
var indexOf = /* @__PURE__ */ _curry2(function indexOf2(target2, xs) {
  return typeof xs.indexOf === "function" && !_isArray(xs) ? xs.indexOf(target2) : _indexOf(xs, target2, 0);
});
var init = /* @__PURE__ */ slice(0, -1);
var innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
  return _filter(function(x) {
    return _includesWith(pred, x, ys);
  }, xs);
});
var insert = /* @__PURE__ */ _curry3(function insert2(idx, elt, list3) {
  idx = idx < list3.length && idx >= 0 ? idx : list3.length;
  var result = Array.prototype.slice.call(list3, 0);
  result.splice(idx, 0, elt);
  return result;
});
var insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list3) {
  idx = idx < list3.length && idx >= 0 ? idx : list3.length;
  return [].concat(Array.prototype.slice.call(list3, 0, idx), elts, Array.prototype.slice.call(list3, idx));
});
var uniqBy = /* @__PURE__ */ _curry2(function uniqBy2(fn, list3) {
  var set5 = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;
  while (idx < list3.length) {
    item = list3[idx];
    appliedItem = fn(item);
    if (set5.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
var uniq = /* @__PURE__ */ uniqBy(identity);
var intersection = /* @__PURE__ */ _curry2(function intersection2(list1, list22) {
  var lookupList, filteredList;
  if (list1.length > list22.length) {
    lookupList = list1;
    filteredList = list22;
  } else {
    lookupList = list22;
    filteredList = list1;
  }
  return uniq(_filter(flip(_includes)(lookupList), filteredList));
});
var intersperse = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("intersperse", function intersperse2(separator, list3) {
  var out = [];
  var idx = 0;
  var length3 = list3.length;
  while (idx < length3) {
    if (idx === length3 - 1) {
      out.push(list3[idx]);
    } else {
      out.push(list3[idx], separator);
    }
    idx += 1;
  }
  return out;
}));
function _objectAssign(target2) {
  if (target2 == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  var output = Object(target2);
  var idx = 1;
  var length3 = arguments.length;
  while (idx < length3) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}
var _objectAssign$1 = typeof Object.assign === "function" ? Object.assign : _objectAssign;
var objOf = /* @__PURE__ */ _curry2(function objOf2(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
var _stepCatArray = {
  "@@transducer/init": Array,
  "@@transducer/step": function(xs, x) {
    xs.push(x);
    return xs;
  },
  "@@transducer/result": _identity
};
var _stepCatString = {
  "@@transducer/init": String,
  "@@transducer/step": function(a, b) {
    return a + b;
  },
  "@@transducer/result": _identity
};
var _stepCatObject = {
  "@@transducer/init": Object,
  "@@transducer/step": function(result, input) {
    return _objectAssign$1(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
  },
  "@@transducer/result": _identity
};
function _stepCat(obj) {
  if (_isTransformer(obj)) {
    return obj;
  }
  if (_isArrayLike(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === "string") {
    return _stepCatString;
  }
  if (typeof obj === "object") {
    return _stepCatObject;
  }
  throw new Error("Cannot create transformer for " + obj);
}
var into = /* @__PURE__ */ _curry3(function into2(acc, xf, list3) {
  return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list3) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list3);
});
var invert = /* @__PURE__ */ _curry1(function invert2(obj) {
  var props3 = keys$1(obj);
  var len = props3.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props3[idx];
    var val = obj[key];
    var list3 = _has(val, out) ? out[val] : out[val] = [];
    list3[list3.length] = key;
    idx += 1;
  }
  return out;
});
var invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
  var props3 = keys$1(obj);
  var len = props3.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props3[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
var invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
  return curryN(arity + 1, function() {
    var target2 = arguments[arity];
    if (target2 != null && _isFunction(target2[method])) {
      return target2[method].apply(target2, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString$1(target2) + ' does not have a method named "' + method + '"');
  });
});
var is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
  return x != null && equals(x, empty(x));
});
var join$1 = /* @__PURE__ */ invoker(1, "join");
var juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
  return converge(function() {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
var keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
  var prop3;
  var ks = [];
  for (prop3 in obj) {
    ks[ks.length] = prop3;
  }
  return ks;
});
var lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target2, xs) {
  if (typeof xs.lastIndexOf === "function" && !_isArray(xs)) {
    return xs.lastIndexOf(target2);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target2)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
function _isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]";
}
var length = /* @__PURE__ */ _curry1(function length2(list3) {
  return list3 != null && _isNumber(list3.length) ? list3.length : NaN;
});
var lens = /* @__PURE__ */ _curry2(function lens2(getter, setter) {
  return function(toFunctorFn) {
    return function(target2) {
      return map(function(focus) {
        return setter(focus, target2);
      }, toFunctorFn(getter(target2)));
    };
  };
});
var lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n) {
  return lens(nth(n), update$1(n));
});
var lensPath = /* @__PURE__ */ _curry1(function lensPath2(p) {
  return lens(path(p), assocPath(p));
});
var lensProp = /* @__PURE__ */ _curry1(function lensProp2(k) {
  return lens(prop(k), assoc(k));
});
var lt = /* @__PURE__ */ _curry2(function lt2(a, b) {
  return a < b;
});
var lte = /* @__PURE__ */ _curry2(function lte2(a, b) {
  return a <= b;
});
var mapAccum = /* @__PURE__ */ _curry3(function mapAccum2(fn, acc, list3) {
  var idx = 0;
  var len = list3.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list3[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
var mapAccumRight = /* @__PURE__ */ _curry3(function mapAccumRight2(fn, acc, list3) {
  var idx = list3.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(tuple[0], list3[idx]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [tuple[0], result];
});
var mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys$1(obj));
});
var match = /* @__PURE__ */ _curry2(function match2(rx2, str) {
  return str.match(rx2) || [];
});
var mathMod = /* @__PURE__ */ _curry2(function mathMod2(m, p) {
  if (!_isInteger(m)) {
    return NaN;
  }
  if (!_isInteger(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
var maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a, b) {
  return f(b) > f(a) ? b : a;
});
var sum = /* @__PURE__ */ reduce(add, 0);
var mean = /* @__PURE__ */ _curry1(function mean2(list3) {
  return sum(list3) / list3.length;
});
var median = /* @__PURE__ */ _curry1(function median2(list3) {
  var len = list3.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list3, 0).sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});
var memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
  var cache2 = {};
  return _arity(fn.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache2)) {
      cache2[key] = fn.apply(this, arguments);
    }
    return cache2[key];
  });
});
var merge = /* @__PURE__ */ _curry2(function merge2(l, r) {
  return _objectAssign$1({}, l, r);
});
var mergeAll = /* @__PURE__ */ _curry1(function mergeAll2(list3) {
  return _objectAssign$1.apply(null, [{}].concat(list3));
});
var mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn, l, r) {
  var result = {};
  var k;
  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }
  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }
  return result;
});
var mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
  return mergeWithKey(function(k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey2(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
var mergeDeepLeft = /* @__PURE__ */ _curry2(function mergeDeepLeft2(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
var mergeDeepRight = /* @__PURE__ */ _curry2(function mergeDeepRight2(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
var mergeDeepWith = /* @__PURE__ */ _curry3(function mergeDeepWith2(fn, lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
var mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l, r) {
  return _objectAssign$1({}, r, l);
});
var mergeRight = /* @__PURE__ */ _curry2(function mergeRight2(l, r) {
  return _objectAssign$1({}, l, r);
});
var mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l, r) {
  return mergeWithKey(function(_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
var min = /* @__PURE__ */ _curry2(function min2(a, b) {
  return b < a ? b : a;
});
var minBy = /* @__PURE__ */ _curry3(function minBy2(f, a, b) {
  return f(b) < f(a) ? b : a;
});
var modulo = /* @__PURE__ */ _curry2(function modulo2(a, b) {
  return a % b;
});
var move = /* @__PURE__ */ _curry3(function(from, to, list3) {
  var length3 = list3.length;
  var result = list3.slice();
  var positiveFrom = from < 0 ? length3 + from : from;
  var positiveTo = to < 0 ? length3 + to : to;
  var item = result.splice(positiveFrom, 1);
  return positiveFrom < 0 || positiveFrom >= list3.length || positiveTo < 0 || positiveTo >= list3.length ? list3 : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list3.length));
});
var multiply = /* @__PURE__ */ _curry2(function multiply2(a, b) {
  return a * b;
});
var negate = /* @__PURE__ */ _curry1(function negate2(n) {
  return -n;
});
var none = /* @__PURE__ */ _curry2(function none2(fn, input) {
  return all(_complement(fn), input);
});
var nthArg = /* @__PURE__ */ _curry1(function nthArg2(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function() {
    return nth(n, arguments);
  });
});
var o = /* @__PURE__ */ _curry3(function o2(f, g, x) {
  return f(g(x));
});
function _of(x) {
  return [x];
}
var of = /* @__PURE__ */ _curry1(_of);
var omit$1 = /* @__PURE__ */ _curry2(function omit2(names, obj) {
  var result = {};
  var index2 = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    index2[names[idx]] = 1;
    idx += 1;
  }
  for (var prop3 in obj) {
    if (!index2.hasOwnProperty(prop3)) {
      result[prop3] = obj[prop3];
    }
  }
  return result;
});
var once = /* @__PURE__ */ _curry1(function once2(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
function _assertPromise(name, p) {
  if (p == null || !_isFunction(p.then)) {
    throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
  }
}
var otherwise = /* @__PURE__ */ _curry2(function otherwise2(f, p) {
  _assertPromise("otherwise", p);
  return p.then(null, f);
});
var Identity = function(x) {
  return {value: x, map: function(f) {
    return Identity(f(x));
  }};
};
var over = /* @__PURE__ */ _curry3(function over2(lens3, f, x) {
  return lens3(function(y) {
    return Identity(f(y));
  })(x).value;
});
var pair = /* @__PURE__ */ _curry2(function pair2(fst, snd) {
  return [fst, snd];
});
function _createPartialApplicator(concat3) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat3(args, arguments));
    });
  });
}
var partial = /* @__PURE__ */ _createPartialApplicator(_concat);
var partialRight = /* @__PURE__ */ _createPartialApplicator(/* @__PURE__ */ flip(_concat));
var partition = /* @__PURE__ */ juxt([filter, reject]);
var pathEq = /* @__PURE__ */ _curry3(function pathEq2(_path, val, obj) {
  return equals(path(_path, obj), val);
});
var pathOr = /* @__PURE__ */ _curry3(function pathOr2(d, p, obj) {
  return defaultTo(d, path(p, obj));
});
var pathSatisfies = /* @__PURE__ */ _curry3(function pathSatisfies2(pred, propPath, obj) {
  return propPath.length > 0 && pred(path(propPath, obj));
});
var pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
var pickAll = /* @__PURE__ */ _curry2(function pickAll2(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
var pickBy = /* @__PURE__ */ _curry2(function pickBy2(test4, obj) {
  var result = {};
  for (var prop3 in obj) {
    if (test4(obj[prop3], prop3, obj)) {
      result[prop3] = obj[prop3];
    }
  }
  return result;
});
function pipeK() {
  if (arguments.length === 0) {
    throw new Error("pipeK requires at least one argument");
  }
  return composeK.apply(this, reverse(arguments));
}
var prepend = /* @__PURE__ */ _curry2(function prepend2(el2, list3) {
  return _concat([el2], list3);
});
var product = /* @__PURE__ */ reduce(multiply, 1);
var useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
  return curryN(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
var project = /* @__PURE__ */ useWith(_map, [pickAll, identity]);
var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
  return equals(val, obj[name]);
});
var propIs = /* @__PURE__ */ _curry3(function propIs2(type3, name, obj) {
  return is(type3, obj[name]);
});
var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
  return pathOr(val, [p], obj);
});
var propSatisfies = /* @__PURE__ */ _curry3(function propSatisfies2(pred, name, obj) {
  return pred(obj[name]);
});
var props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;
  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }
  return out;
});
var range = /* @__PURE__ */ _curry2(function range2(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError("Both arguments to range must be numbers");
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
var reduceRight = /* @__PURE__ */ _curry3(function reduceRight2(fn, acc, list3) {
  var idx = list3.length - 1;
  while (idx >= 0) {
    acc = fn(list3[idx], acc);
    idx -= 1;
  }
  return acc;
});
var reduceWhile = /* @__PURE__ */ _curryN(4, [], function _reduceWhile(pred, fn, a, list3) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list3);
});
var reduced = /* @__PURE__ */ _curry1(_reduced);
var times = /* @__PURE__ */ _curry2(function times2(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list3;
  if (len < 0 || isNaN(len)) {
    throw new RangeError("n must be a non-negative number");
  }
  list3 = new Array(len);
  while (idx < len) {
    list3[idx] = fn(idx);
    idx += 1;
  }
  return list3;
});
var repeat = /* @__PURE__ */ _curry2(function repeat2(value, n) {
  return times(always(value), n);
});
var replace = /* @__PURE__ */ _curry3(function replace2(regex2, replacement, str) {
  return str.replace(regex2, replacement);
});
var scan = /* @__PURE__ */ _curry3(function scan2(fn, acc, list3) {
  var idx = 0;
  var len = list3.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list3[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});
var sequence = /* @__PURE__ */ _curry2(function sequence2(of2, traversable) {
  return typeof traversable.sequence === "function" ? traversable.sequence(of2) : reduceRight(function(x, acc) {
    return ap(map(prepend, x), acc);
  }, of2([]), traversable);
});
var set2 = /* @__PURE__ */ _curry3(function set3(lens3, v, x) {
  return over(lens3, always(v), x);
});
var sort = /* @__PURE__ */ _curry2(function sort2(comparator3, list3) {
  return Array.prototype.slice.call(list3, 0).sort(comparator3);
});
var sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list3) {
  return Array.prototype.slice.call(list3, 0).sort(function(a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
var sortWith = /* @__PURE__ */ _curry2(function sortWith2(fns, list3) {
  return Array.prototype.slice.call(list3, 0).sort(function(a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});
var split = /* @__PURE__ */ invoker(1, "split");
var splitAt = /* @__PURE__ */ _curry2(function splitAt2(index2, array) {
  return [slice(0, index2, array), slice(index2, length(array), array)];
});
var splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n, list3) {
  if (n <= 0) {
    throw new Error("First argument to splitEvery must be a positive integer");
  }
  var result = [];
  var idx = 0;
  while (idx < list3.length) {
    result.push(slice(idx, idx += n, list3));
  }
  return result;
});
var splitWhen = /* @__PURE__ */ _curry2(function splitWhen2(pred, list3) {
  var idx = 0;
  var len = list3.length;
  var prefix2 = [];
  while (idx < len && !pred(list3[idx])) {
    prefix2.push(list3[idx]);
    idx += 1;
  }
  return [prefix2, Array.prototype.slice.call(list3, idx)];
});
var startsWith = /* @__PURE__ */ _curry2(function(prefix2, list3) {
  return equals(take(prefix2.length, list3), prefix2);
});
var subtract = /* @__PURE__ */ _curry2(function subtract2(a, b) {
  return Number(a) - Number(b);
});
var symmetricDifference = /* @__PURE__ */ _curry2(function symmetricDifference2(list1, list22) {
  return concat(difference(list1, list22), difference(list22, list1));
});
var symmetricDifferenceWith = /* @__PURE__ */ _curry3(function symmetricDifferenceWith2(pred, list1, list22) {
  return concat(differenceWith(pred, list1, list22), differenceWith(pred, list22, list1));
});
var takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return slice(idx + 1, Infinity, xs);
});
var XTakeWhile = /* @__PURE__ */ function() {
  function XTakeWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XTakeWhile2.prototype["@@transducer/result"] = _xfBase.result;
  XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
  };
  return XTakeWhile2;
}();
var _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
  return new XTakeWhile(f, xf);
});
var takeWhile = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["takeWhile"], _xtakeWhile, function takeWhile2(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return slice(0, idx, xs);
}));
var XTap = /* @__PURE__ */ function() {
  function XTap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap2.prototype["@@transducer/init"] = _xfBase.init;
  XTap2.prototype["@@transducer/result"] = _xfBase.result;
  XTap2.prototype["@@transducer/step"] = function(result, input) {
    this.f(input);
    return this.xf["@@transducer/step"](result, input);
  };
  return XTap2;
}();
var _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
  return new XTap(f, xf);
});
var tap = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xtap, function tap2(fn, x) {
  fn(x);
  return x;
}));
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === "[object RegExp]";
}
var test = /* @__PURE__ */ _curry2(function test2(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + toString$1(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});
var then = /* @__PURE__ */ _curry2(function then2(f, p) {
  _assertPromise("then", p);
  return p.then(f);
});
var toLower = /* @__PURE__ */ invoker(0, "toLowerCase");
var toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    if (_has(prop3, obj)) {
      pairs[pairs.length] = [prop3, obj[prop3]];
    }
  }
  return pairs;
});
var toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    pairs[pairs.length] = [prop3, obj[prop3]];
  }
  return pairs;
});
var toUpper$1 = /* @__PURE__ */ invoker(0, "toUpperCase");
var transduce = /* @__PURE__ */ curryN(4, function transduce2(xf, fn, acc, list3) {
  return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list3);
});
var transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === "undefined") {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
var traverse = /* @__PURE__ */ _curry3(function traverse2(of2, f, traversable) {
  return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f, of2) : sequence(of2, map(f, traversable));
});
var ws = "	\n\v\f\r   ᠎             　\u2028\u2029\uFEFF";
var zeroWidth = "​";
var hasProtoTrim = typeof String.prototype.trim === "function";
var trim = !hasProtoTrim || /* @__PURE__ */ ws.trim() || !/* @__PURE__ */ zeroWidth.trim() ? /* @__PURE__ */ _curry1(function trim2(str) {
  var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
  var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
  return str.replace(beginRx, "").replace(endRx, "");
}) : /* @__PURE__ */ _curry1(function trim3(str) {
  return str.trim();
});
var tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});
var unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
var unary = /* @__PURE__ */ _curry1(function unary2(fn) {
  return nAry(1, fn);
});
var uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
  return curryN(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === "function") {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
var unfold = /* @__PURE__ */ _curry2(function unfold2(fn, seed) {
  var pair3 = fn(seed);
  var result = [];
  while (pair3 && pair3.length) {
    result[result.length] = pair3[0];
    pair3 = fn(pair3[1]);
  }
  return result;
});
var union = /* @__PURE__ */ _curry2(/* @__PURE__ */ compose(uniq, _concat));
var uniqWith = /* @__PURE__ */ _curry2(function uniqWith2(pred, list3) {
  var idx = 0;
  var len = list3.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list3[idx];
    if (!_includesWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});
var unionWith = /* @__PURE__ */ _curry3(function unionWith2(pred, list1, list22) {
  return uniqWith(pred, _concat(list1, list22));
});
var unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
var unnest = /* @__PURE__ */ chain(_identity);
var until = /* @__PURE__ */ _curry3(function until2(pred, fn, init2) {
  var val = init2;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
var valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
  var prop3;
  var vs = [];
  for (prop3 in obj) {
    vs[vs.length] = obj[prop3];
  }
  return vs;
});
var Const = function(x) {
  return {value: x, "fantasy-land/map": function() {
    return this;
  }};
};
var view = /* @__PURE__ */ _curry2(function view2(lens3, x) {
  return lens3(Const)(x).value;
});
var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
var where = /* @__PURE__ */ _curry2(function where2(spec, testObj) {
  for (var prop3 in spec) {
    if (_has(prop3, spec) && !spec[prop3](testObj[prop3])) {
      return false;
    }
  }
  return true;
});
var whereEq = /* @__PURE__ */ _curry2(function whereEq2(spec, testObj) {
  return where(map(equals, spec), testObj);
});
var without = /* @__PURE__ */ _curry2(function(xs, list3) {
  return reject(flip(_includes)(xs), list3);
});
var xprod = /* @__PURE__ */ _curry2(function xprod2(a, b) {
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});
var zip = /* @__PURE__ */ _curry2(function zip2(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
var zipObj = /* @__PURE__ */ _curry2(function zipObj2(keys4, values3) {
  var idx = 0;
  var len = Math.min(keys4.length, values3.length);
  var out = {};
  while (idx < len) {
    out[keys4[idx]] = values3[idx];
    idx += 1;
  }
  return out;
});
var zipWith = /* @__PURE__ */ _curry3(function zipWith2(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
var thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
  return curryN(fn.length, function createThunk() {
    var fnArgs = arguments;
    return function invokeThunk() {
      return fn.apply(this, fnArgs);
    };
  });
});
var es = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  F,
  T,
  __,
  add,
  addIndex,
  adjust,
  all,
  allPass,
  always,
  and,
  any,
  anyPass,
  ap,
  aperture,
  append,
  apply,
  applySpec,
  applyTo,
  ascend,
  assoc,
  assocPath,
  binary,
  bind,
  both,
  call,
  chain,
  clamp: clamp$1,
  clone,
  comparator,
  complement,
  compose,
  composeK,
  composeP,
  composeWith,
  concat,
  cond,
  construct,
  constructN,
  contains: contains$1,
  converge,
  countBy,
  curry,
  curryN,
  dec,
  defaultTo,
  descend,
  difference,
  differenceWith,
  dissoc,
  dissocPath,
  divide,
  drop,
  dropLast: dropLast$1,
  dropLastWhile: dropLastWhile$1,
  dropRepeats,
  dropRepeatsWith,
  dropWhile,
  either,
  empty,
  endsWith,
  eqBy,
  eqProps,
  equals,
  evolve,
  filter,
  find,
  findIndex,
  findLast,
  findLastIndex,
  flatten,
  flip,
  forEach,
  forEachObjIndexed,
  fromPairs,
  groupBy,
  groupWith,
  gt,
  gte,
  has: has$2,
  hasIn,
  hasPath,
  head,
  identical,
  identity,
  ifElse,
  inc,
  includes,
  indexBy,
  indexOf,
  init,
  innerJoin,
  insert,
  insertAll,
  intersection,
  intersperse,
  into,
  invert,
  invertObj,
  invoker,
  is,
  isEmpty,
  isNil,
  join: join$1,
  juxt,
  keys: keys$1,
  keysIn,
  last,
  lastIndexOf,
  length,
  lens,
  lensIndex,
  lensPath,
  lensProp,
  lift,
  liftN,
  lt,
  lte,
  map,
  mapAccum,
  mapAccumRight,
  mapObjIndexed,
  match,
  mathMod,
  max,
  maxBy,
  mean,
  median,
  memoizeWith,
  merge,
  mergeAll,
  mergeDeepLeft,
  mergeDeepRight,
  mergeDeepWith,
  mergeDeepWithKey,
  mergeLeft,
  mergeRight,
  mergeWith,
  mergeWithKey,
  min,
  minBy,
  modulo,
  move,
  multiply,
  nAry,
  negate,
  none,
  not,
  nth,
  nthArg,
  o,
  objOf,
  of,
  omit: omit$1,
  once,
  or,
  otherwise,
  over,
  pair,
  partial,
  partialRight,
  partition,
  path,
  pathEq,
  pathOr,
  pathSatisfies,
  pick,
  pickAll,
  pickBy,
  pipe,
  pipeK,
  pipeP,
  pipeWith,
  pluck,
  prepend,
  product,
  project,
  prop,
  propEq,
  propIs,
  propOr,
  propSatisfies,
  props,
  range,
  reduce,
  reduceBy,
  reduceRight,
  reduceWhile,
  reduced,
  reject,
  remove,
  repeat,
  replace,
  reverse,
  scan,
  sequence,
  set: set2,
  slice,
  sort,
  sortBy,
  sortWith,
  split,
  splitAt,
  splitEvery,
  splitWhen,
  startsWith,
  subtract,
  sum,
  symmetricDifference,
  symmetricDifferenceWith,
  tail,
  take,
  takeLast,
  takeLastWhile,
  takeWhile,
  tap,
  test,
  then,
  times,
  toLower,
  toPairs,
  toPairsIn,
  toString: toString$1,
  toUpper: toUpper$1,
  transduce,
  transpose,
  traverse,
  trim,
  tryCatch,
  type,
  unapply,
  unary,
  uncurryN,
  unfold,
  union,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  unless,
  unnest,
  until,
  update: update$1,
  useWith,
  values,
  valuesIn,
  view,
  when,
  where,
  whereEq,
  without,
  xprod,
  zip,
  zipObj,
  zipWith,
  thunkify
});
const Aacute = "Á";
const aacute = "á";
const Abreve = "Ă";
const abreve = "ă";
const ac = "∾";
const acd = "∿";
const acE = "∾̳";
const Acirc = "Â";
const acirc = "â";
const acute = "´";
const Acy = "А";
const acy = "а";
const AElig = "Æ";
const aelig = "æ";
const af = "⁡";
const Afr = "𝔄";
const afr = "𝔞";
const Agrave = "À";
const agrave = "à";
const alefsym = "ℵ";
const aleph = "ℵ";
const Alpha = "Α";
const alpha$1 = "α";
const Amacr = "Ā";
const amacr = "ā";
const amalg = "⨿";
const amp = "&";
const AMP = "&";
const andand = "⩕";
const And = "⩓";
const and$1 = "∧";
const andd = "⩜";
const andslope = "⩘";
const andv = "⩚";
const ang = "∠";
const ange = "⦤";
const angle = "∠";
const angmsdaa = "⦨";
const angmsdab = "⦩";
const angmsdac = "⦪";
const angmsdad = "⦫";
const angmsdae = "⦬";
const angmsdaf = "⦭";
const angmsdag = "⦮";
const angmsdah = "⦯";
const angmsd = "∡";
const angrt = "∟";
const angrtvb = "⊾";
const angrtvbd = "⦝";
const angsph = "∢";
const angst = "Å";
const angzarr = "⍼";
const Aogon = "Ą";
const aogon = "ą";
const Aopf = "𝔸";
const aopf = "𝕒";
const apacir = "⩯";
const ap$1 = "≈";
const apE = "⩰";
const ape = "≊";
const apid = "≋";
const apos = "'";
const ApplyFunction = "⁡";
const approx = "≈";
const approxeq = "≊";
const Aring = "Å";
const aring = "å";
const Ascr = "𝒜";
const ascr = "𝒶";
const Assign = "≔";
const ast = "*";
const asymp = "≈";
const asympeq = "≍";
const Atilde = "Ã";
const atilde = "ã";
const Auml = "Ä";
const auml = "ä";
const awconint = "∳";
const awint = "⨑";
const backcong = "≌";
const backepsilon = "϶";
const backprime = "‵";
const backsim = "∽";
const backsimeq = "⋍";
const Backslash = "∖";
const Barv = "⫧";
const barvee = "⊽";
const barwed = "⌅";
const Barwed = "⌆";
const barwedge = "⌅";
const bbrk = "⎵";
const bbrktbrk = "⎶";
const bcong = "≌";
const Bcy = "Б";
const bcy = "б";
const bdquo = "„";
const becaus = "∵";
const because = "∵";
const Because = "∵";
const bemptyv = "⦰";
const bepsi = "϶";
const bernou = "ℬ";
const Bernoullis = "ℬ";
const Beta = "Β";
const beta = "β";
const beth = "ℶ";
const between = "≬";
const Bfr = "𝔅";
const bfr = "𝔟";
const bigcap = "⋂";
const bigcirc = "◯";
const bigcup = "⋃";
const bigodot = "⨀";
const bigoplus = "⨁";
const bigotimes = "⨂";
const bigsqcup = "⨆";
const bigstar = "★";
const bigtriangledown = "▽";
const bigtriangleup = "△";
const biguplus = "⨄";
const bigvee = "⋁";
const bigwedge = "⋀";
const bkarow = "⤍";
const blacklozenge = "⧫";
const blacksquare = "▪";
const blacktriangle = "▴";
const blacktriangledown = "▾";
const blacktriangleleft = "◂";
const blacktriangleright = "▸";
const blank = "␣";
const blk12 = "▒";
const blk14 = "░";
const blk34 = "▓";
const block = "█";
const bne = "=⃥";
const bnequiv = "≡⃥";
const bNot = "⫭";
const bnot = "⌐";
const Bopf = "𝔹";
const bopf = "𝕓";
const bot = "⊥";
const bottom = "⊥";
const bowtie = "⋈";
const boxbox = "⧉";
const boxdl = "┐";
const boxdL = "╕";
const boxDl = "╖";
const boxDL = "╗";
const boxdr = "┌";
const boxdR = "╒";
const boxDr = "╓";
const boxDR = "╔";
const boxh = "─";
const boxH = "═";
const boxhd = "┬";
const boxHd = "╤";
const boxhD = "╥";
const boxHD = "╦";
const boxhu = "┴";
const boxHu = "╧";
const boxhU = "╨";
const boxHU = "╩";
const boxminus = "⊟";
const boxplus = "⊞";
const boxtimes = "⊠";
const boxul = "┘";
const boxuL = "╛";
const boxUl = "╜";
const boxUL = "╝";
const boxur = "└";
const boxuR = "╘";
const boxUr = "╙";
const boxUR = "╚";
const boxv = "│";
const boxV = "║";
const boxvh = "┼";
const boxvH = "╪";
const boxVh = "╫";
const boxVH = "╬";
const boxvl = "┤";
const boxvL = "╡";
const boxVl = "╢";
const boxVL = "╣";
const boxvr = "├";
const boxvR = "╞";
const boxVr = "╟";
const boxVR = "╠";
const bprime = "‵";
const breve = "˘";
const Breve = "˘";
const brvbar = "¦";
const bscr = "𝒷";
const Bscr = "ℬ";
const bsemi = "⁏";
const bsim = "∽";
const bsime = "⋍";
const bsolb = "⧅";
const bsol = "\\";
const bsolhsub = "⟈";
const bull = "•";
const bullet = "•";
const bump = "≎";
const bumpE = "⪮";
const bumpe = "≏";
const Bumpeq = "≎";
const bumpeq = "≏";
const Cacute = "Ć";
const cacute = "ć";
const capand = "⩄";
const capbrcup = "⩉";
const capcap = "⩋";
const cap = "∩";
const Cap = "⋒";
const capcup = "⩇";
const capdot = "⩀";
const CapitalDifferentialD = "ⅅ";
const caps = "∩︀";
const caret = "⁁";
const caron = "ˇ";
const Cayleys = "ℭ";
const ccaps = "⩍";
const Ccaron = "Č";
const ccaron = "č";
const Ccedil = "Ç";
const ccedil = "ç";
const Ccirc = "Ĉ";
const ccirc = "ĉ";
const Cconint = "∰";
const ccups = "⩌";
const ccupssm = "⩐";
const Cdot = "Ċ";
const cdot = "ċ";
const cedil = "¸";
const Cedilla = "¸";
const cemptyv = "⦲";
const cent = "¢";
const centerdot = "·";
const CenterDot = "·";
const cfr = "𝔠";
const Cfr = "ℭ";
const CHcy = "Ч";
const chcy = "ч";
const check = "✓";
const checkmark = "✓";
const Chi = "Χ";
const chi = "χ";
const circ = "ˆ";
const circeq = "≗";
const circlearrowleft = "↺";
const circlearrowright = "↻";
const circledast = "⊛";
const circledcirc = "⊚";
const circleddash = "⊝";
const CircleDot = "⊙";
const circledR = "®";
const circledS = "Ⓢ";
const CircleMinus = "⊖";
const CirclePlus = "⊕";
const CircleTimes = "⊗";
const cir = "○";
const cirE = "⧃";
const cire = "≗";
const cirfnint = "⨐";
const cirmid = "⫯";
const cirscir = "⧂";
const ClockwiseContourIntegral = "∲";
const CloseCurlyDoubleQuote = "”";
const CloseCurlyQuote = "’";
const clubs = "♣";
const clubsuit = "♣";
const colon = ":";
const Colon = "∷";
const Colone = "⩴";
const colone = "≔";
const coloneq = "≔";
const comma = ",";
const commat = "@";
const comp = "∁";
const compfn = "∘";
const complement$1 = "∁";
const complexes = "ℂ";
const cong = "≅";
const congdot = "⩭";
const Congruent = "≡";
const conint = "∮";
const Conint = "∯";
const ContourIntegral = "∮";
const copf = "𝕔";
const Copf = "ℂ";
const coprod = "∐";
const Coproduct = "∐";
const copy = "©";
const COPY = "©";
const copysr = "℗";
const CounterClockwiseContourIntegral = "∳";
const crarr = "↵";
const cross = "✗";
const Cross = "⨯";
const Cscr = "𝒞";
const cscr = "𝒸";
const csub = "⫏";
const csube = "⫑";
const csup = "⫐";
const csupe = "⫒";
const ctdot = "⋯";
const cudarrl = "⤸";
const cudarrr = "⤵";
const cuepr = "⋞";
const cuesc = "⋟";
const cularr = "↶";
const cularrp = "⤽";
const cupbrcap = "⩈";
const cupcap = "⩆";
const CupCap = "≍";
const cup = "∪";
const Cup = "⋓";
const cupcup = "⩊";
const cupdot = "⊍";
const cupor = "⩅";
const cups = "∪︀";
const curarr = "↷";
const curarrm = "⤼";
const curlyeqprec = "⋞";
const curlyeqsucc = "⋟";
const curlyvee = "⋎";
const curlywedge = "⋏";
const curren = "¤";
const curvearrowleft = "↶";
const curvearrowright = "↷";
const cuvee = "⋎";
const cuwed = "⋏";
const cwconint = "∲";
const cwint = "∱";
const cylcty = "⌭";
const dagger = "†";
const Dagger = "‡";
const daleth = "ℸ";
const darr = "↓";
const Darr = "↡";
const dArr = "⇓";
const dash = "‐";
const Dashv = "⫤";
const dashv = "⊣";
const dbkarow = "⤏";
const dblac = "˝";
const Dcaron = "Ď";
const dcaron = "ď";
const Dcy = "Д";
const dcy = "д";
const ddagger = "‡";
const ddarr = "⇊";
const DD = "ⅅ";
const dd = "ⅆ";
const DDotrahd = "⤑";
const ddotseq = "⩷";
const deg = "°";
const Del = "∇";
const Delta = "Δ";
const delta = "δ";
const demptyv = "⦱";
const dfisht = "⥿";
const Dfr = "𝔇";
const dfr = "𝔡";
const dHar = "⥥";
const dharl = "⇃";
const dharr = "⇂";
const DiacriticalAcute = "´";
const DiacriticalDot = "˙";
const DiacriticalDoubleAcute = "˝";
const DiacriticalGrave = "`";
const DiacriticalTilde = "˜";
const diam = "⋄";
const diamond = "⋄";
const Diamond = "⋄";
const diamondsuit = "♦";
const diams = "♦";
const die = "¨";
const DifferentialD = "ⅆ";
const digamma = "ϝ";
const disin = "⋲";
const div = "÷";
const divide$1 = "÷";
const divideontimes = "⋇";
const divonx = "⋇";
const DJcy = "Ђ";
const djcy = "ђ";
const dlcorn = "⌞";
const dlcrop = "⌍";
const dollar = "$";
const Dopf = "𝔻";
const dopf = "𝕕";
const Dot = "¨";
const dot = "˙";
const DotDot = "⃜";
const doteq = "≐";
const doteqdot = "≑";
const DotEqual = "≐";
const dotminus = "∸";
const dotplus = "∔";
const dotsquare = "⊡";
const doublebarwedge = "⌆";
const DoubleContourIntegral = "∯";
const DoubleDot = "¨";
const DoubleDownArrow = "⇓";
const DoubleLeftArrow = "⇐";
const DoubleLeftRightArrow = "⇔";
const DoubleLeftTee = "⫤";
const DoubleLongLeftArrow = "⟸";
const DoubleLongLeftRightArrow = "⟺";
const DoubleLongRightArrow = "⟹";
const DoubleRightArrow = "⇒";
const DoubleRightTee = "⊨";
const DoubleUpArrow = "⇑";
const DoubleUpDownArrow = "⇕";
const DoubleVerticalBar = "∥";
const DownArrowBar = "⤓";
const downarrow = "↓";
const DownArrow = "↓";
const Downarrow = "⇓";
const DownArrowUpArrow = "⇵";
const DownBreve = "̑";
const downdownarrows = "⇊";
const downharpoonleft = "⇃";
const downharpoonright = "⇂";
const DownLeftRightVector = "⥐";
const DownLeftTeeVector = "⥞";
const DownLeftVectorBar = "⥖";
const DownLeftVector = "↽";
const DownRightTeeVector = "⥟";
const DownRightVectorBar = "⥗";
const DownRightVector = "⇁";
const DownTeeArrow = "↧";
const DownTee = "⊤";
const drbkarow = "⤐";
const drcorn = "⌟";
const drcrop = "⌌";
const Dscr = "𝒟";
const dscr = "𝒹";
const DScy = "Ѕ";
const dscy = "ѕ";
const dsol = "⧶";
const Dstrok = "Đ";
const dstrok = "đ";
const dtdot = "⋱";
const dtri = "▿";
const dtrif = "▾";
const duarr = "⇵";
const duhar = "⥯";
const dwangle = "⦦";
const DZcy = "Џ";
const dzcy = "џ";
const dzigrarr = "⟿";
const Eacute = "É";
const eacute = "é";
const easter = "⩮";
const Ecaron = "Ě";
const ecaron = "ě";
const Ecirc = "Ê";
const ecirc = "ê";
const ecir = "≖";
const ecolon = "≕";
const Ecy = "Э";
const ecy = "э";
const eDDot = "⩷";
const Edot = "Ė";
const edot = "ė";
const eDot = "≑";
const ee = "ⅇ";
const efDot = "≒";
const Efr = "𝔈";
const efr = "𝔢";
const eg = "⪚";
const Egrave = "È";
const egrave = "è";
const egs = "⪖";
const egsdot = "⪘";
const el$2 = "⪙";
const Element$1 = "∈";
const elinters = "⏧";
const ell = "ℓ";
const els = "⪕";
const elsdot = "⪗";
const Emacr = "Ē";
const emacr = "ē";
const empty$1 = "∅";
const emptyset = "∅";
const EmptySmallSquare = "◻";
const emptyv = "∅";
const EmptyVerySmallSquare = "▫";
const emsp13 = " ";
const emsp14 = " ";
const emsp = " ";
const ENG = "Ŋ";
const eng = "ŋ";
const ensp = " ";
const Eogon = "Ę";
const eogon = "ę";
const Eopf = "𝔼";
const eopf = "𝕖";
const epar = "⋕";
const eparsl = "⧣";
const eplus = "⩱";
const epsi = "ε";
const Epsilon = "Ε";
const epsilon = "ε";
const epsiv = "ϵ";
const eqcirc = "≖";
const eqcolon = "≕";
const eqsim = "≂";
const eqslantgtr = "⪖";
const eqslantless = "⪕";
const Equal = "⩵";
const equals$1 = "=";
const EqualTilde = "≂";
const equest = "≟";
const Equilibrium = "⇌";
const equiv = "≡";
const equivDD = "⩸";
const eqvparsl = "⧥";
const erarr = "⥱";
const erDot = "≓";
const escr = "ℯ";
const Escr = "ℰ";
const esdot = "≐";
const Esim = "⩳";
const esim = "≂";
const Eta = "Η";
const eta = "η";
const ETH = "Ð";
const eth = "ð";
const Euml = "Ë";
const euml = "ë";
const euro = "€";
const excl = "!";
const exist = "∃";
const Exists = "∃";
const expectation = "ℰ";
const exponentiale = "ⅇ";
const ExponentialE = "ⅇ";
const fallingdotseq = "≒";
const Fcy = "Ф";
const fcy = "ф";
const female = "♀";
const ffilig = "ﬃ";
const fflig = "ﬀ";
const ffllig = "ﬄ";
const Ffr = "𝔉";
const ffr = "𝔣";
const filig = "ﬁ";
const FilledSmallSquare = "◼";
const FilledVerySmallSquare = "▪";
const fjlig = "fj";
const flat = "♭";
const fllig = "ﬂ";
const fltns = "▱";
const fnof = "ƒ";
const Fopf = "𝔽";
const fopf = "𝕗";
const forall = "∀";
const ForAll = "∀";
const fork = "⋔";
const forkv = "⫙";
const Fouriertrf = "ℱ";
const fpartint = "⨍";
const frac12 = "½";
const frac13 = "⅓";
const frac14 = "¼";
const frac15 = "⅕";
const frac16 = "⅙";
const frac18 = "⅛";
const frac23 = "⅔";
const frac25 = "⅖";
const frac34 = "¾";
const frac35 = "⅗";
const frac38 = "⅜";
const frac45 = "⅘";
const frac56 = "⅚";
const frac58 = "⅝";
const frac78 = "⅞";
const frasl = "⁄";
const frown = "⌢";
const fscr = "𝒻";
const Fscr = "ℱ";
const gacute = "ǵ";
const Gamma = "Γ";
const gamma = "γ";
const Gammad = "Ϝ";
const gammad = "ϝ";
const gap = "⪆";
const Gbreve = "Ğ";
const gbreve = "ğ";
const Gcedil = "Ģ";
const Gcirc = "Ĝ";
const gcirc = "ĝ";
const Gcy = "Г";
const gcy = "г";
const Gdot = "Ġ";
const gdot = "ġ";
const ge = "≥";
const gE = "≧";
const gEl = "⪌";
const gel = "⋛";
const geq = "≥";
const geqq = "≧";
const geqslant = "⩾";
const gescc = "⪩";
const ges = "⩾";
const gesdot = "⪀";
const gesdoto = "⪂";
const gesdotol = "⪄";
const gesl = "⋛︀";
const gesles = "⪔";
const Gfr = "𝔊";
const gfr = "𝔤";
const gg = "≫";
const Gg = "⋙";
const ggg = "⋙";
const gimel = "ℷ";
const GJcy = "Ѓ";
const gjcy = "ѓ";
const gla = "⪥";
const gl = "≷";
const glE = "⪒";
const glj = "⪤";
const gnap = "⪊";
const gnapprox = "⪊";
const gne = "⪈";
const gnE = "≩";
const gneq = "⪈";
const gneqq = "≩";
const gnsim = "⋧";
const Gopf = "𝔾";
const gopf = "𝕘";
const grave = "`";
const GreaterEqual = "≥";
const GreaterEqualLess = "⋛";
const GreaterFullEqual = "≧";
const GreaterGreater = "⪢";
const GreaterLess = "≷";
const GreaterSlantEqual = "⩾";
const GreaterTilde = "≳";
const Gscr = "𝒢";
const gscr = "ℊ";
const gsim = "≳";
const gsime = "⪎";
const gsiml = "⪐";
const gtcc = "⪧";
const gtcir = "⩺";
const gt$1 = ">";
const GT = ">";
const Gt = "≫";
const gtdot = "⋗";
const gtlPar = "⦕";
const gtquest = "⩼";
const gtrapprox = "⪆";
const gtrarr = "⥸";
const gtrdot = "⋗";
const gtreqless = "⋛";
const gtreqqless = "⪌";
const gtrless = "≷";
const gtrsim = "≳";
const gvertneqq = "≩︀";
const gvnE = "≩︀";
const Hacek = "ˇ";
const hairsp = " ";
const half = "½";
const hamilt = "ℋ";
const HARDcy = "Ъ";
const hardcy = "ъ";
const harrcir = "⥈";
const harr = "↔";
const hArr = "⇔";
const harrw = "↭";
const Hat = "^";
const hbar = "ℏ";
const Hcirc = "Ĥ";
const hcirc = "ĥ";
const hearts = "♥";
const heartsuit = "♥";
const hellip = "…";
const hercon = "⊹";
const hfr = "𝔥";
const Hfr = "ℌ";
const HilbertSpace = "ℋ";
const hksearow = "⤥";
const hkswarow = "⤦";
const hoarr = "⇿";
const homtht = "∻";
const hookleftarrow = "↩";
const hookrightarrow = "↪";
const hopf = "𝕙";
const Hopf = "ℍ";
const horbar = "―";
const HorizontalLine = "─";
const hscr = "𝒽";
const Hscr = "ℋ";
const hslash = "ℏ";
const Hstrok = "Ħ";
const hstrok = "ħ";
const HumpDownHump = "≎";
const HumpEqual = "≏";
const hybull = "⁃";
const hyphen = "‐";
const Iacute = "Í";
const iacute = "í";
const ic = "⁣";
const Icirc = "Î";
const icirc = "î";
const Icy = "И";
const icy = "и";
const Idot = "İ";
const IEcy = "Е";
const iecy = "е";
const iexcl = "¡";
const iff = "⇔";
const ifr = "𝔦";
const Ifr = "ℑ";
const Igrave = "Ì";
const igrave = "ì";
const ii = "ⅈ";
const iiiint = "⨌";
const iiint = "∭";
const iinfin = "⧜";
const iiota = "℩";
const IJlig = "Ĳ";
const ijlig = "ĳ";
const Imacr = "Ī";
const imacr = "ī";
const image = "ℑ";
const ImaginaryI = "ⅈ";
const imagline = "ℐ";
const imagpart = "ℑ";
const imath = "ı";
const Im = "ℑ";
const imof = "⊷";
const imped = "Ƶ";
const Implies = "⇒";
const incare = "℅";
const infin = "∞";
const infintie = "⧝";
const inodot = "ı";
const intcal = "⊺";
const int = "∫";
const Int = "∬";
const integers = "ℤ";
const Integral = "∫";
const intercal = "⊺";
const Intersection = "⋂";
const intlarhk = "⨗";
const intprod = "⨼";
const InvisibleComma = "⁣";
const InvisibleTimes = "⁢";
const IOcy = "Ё";
const iocy = "ё";
const Iogon = "Į";
const iogon = "į";
const Iopf = "𝕀";
const iopf = "𝕚";
const Iota = "Ι";
const iota = "ι";
const iprod = "⨼";
const iquest = "¿";
const iscr = "𝒾";
const Iscr = "ℐ";
const isin = "∈";
const isindot = "⋵";
const isinE = "⋹";
const isins = "⋴";
const isinsv = "⋳";
const isinv = "∈";
const it = "⁢";
const Itilde = "Ĩ";
const itilde = "ĩ";
const Iukcy = "І";
const iukcy = "і";
const Iuml = "Ï";
const iuml = "ï";
const Jcirc = "Ĵ";
const jcirc = "ĵ";
const Jcy = "Й";
const jcy = "й";
const Jfr = "𝔍";
const jfr = "𝔧";
const jmath = "ȷ";
const Jopf = "𝕁";
const jopf = "𝕛";
const Jscr = "𝒥";
const jscr = "𝒿";
const Jsercy = "Ј";
const jsercy = "ј";
const Jukcy = "Є";
const jukcy = "є";
const Kappa = "Κ";
const kappa = "κ";
const kappav = "ϰ";
const Kcedil = "Ķ";
const kcedil = "ķ";
const Kcy = "К";
const kcy = "к";
const Kfr = "𝔎";
const kfr = "𝔨";
const kgreen = "ĸ";
const KHcy = "Х";
const khcy = "х";
const KJcy = "Ќ";
const kjcy = "ќ";
const Kopf = "𝕂";
const kopf = "𝕜";
const Kscr = "𝒦";
const kscr = "𝓀";
const lAarr = "⇚";
const Lacute = "Ĺ";
const lacute = "ĺ";
const laemptyv = "⦴";
const lagran = "ℒ";
const Lambda = "Λ";
const lambda = "λ";
const lang = "⟨";
const Lang = "⟪";
const langd = "⦑";
const langle = "⟨";
const lap = "⪅";
const Laplacetrf = "ℒ";
const laquo = "«";
const larrb = "⇤";
const larrbfs = "⤟";
const larr = "←";
const Larr = "↞";
const lArr = "⇐";
const larrfs = "⤝";
const larrhk = "↩";
const larrlp = "↫";
const larrpl = "⤹";
const larrsim = "⥳";
const larrtl = "↢";
const latail = "⤙";
const lAtail = "⤛";
const lat = "⪫";
const late = "⪭";
const lates = "⪭︀";
const lbarr = "⤌";
const lBarr = "⤎";
const lbbrk = "❲";
const lbrace = "{";
const lbrack = "[";
const lbrke = "⦋";
const lbrksld = "⦏";
const lbrkslu = "⦍";
const Lcaron = "Ľ";
const lcaron = "ľ";
const Lcedil = "Ļ";
const lcedil = "ļ";
const lceil = "⌈";
const lcub = "{";
const Lcy = "Л";
const lcy = "л";
const ldca = "⤶";
const ldquo = "“";
const ldquor = "„";
const ldrdhar = "⥧";
const ldrushar = "⥋";
const ldsh = "↲";
const le = "≤";
const lE = "≦";
const LeftAngleBracket = "⟨";
const LeftArrowBar = "⇤";
const leftarrow = "←";
const LeftArrow = "←";
const Leftarrow = "⇐";
const LeftArrowRightArrow = "⇆";
const leftarrowtail = "↢";
const LeftCeiling = "⌈";
const LeftDoubleBracket = "⟦";
const LeftDownTeeVector = "⥡";
const LeftDownVectorBar = "⥙";
const LeftDownVector = "⇃";
const LeftFloor = "⌊";
const leftharpoondown = "↽";
const leftharpoonup = "↼";
const leftleftarrows = "⇇";
const leftrightarrow = "↔";
const LeftRightArrow = "↔";
const Leftrightarrow = "⇔";
const leftrightarrows = "⇆";
const leftrightharpoons = "⇋";
const leftrightsquigarrow = "↭";
const LeftRightVector = "⥎";
const LeftTeeArrow = "↤";
const LeftTee = "⊣";
const LeftTeeVector = "⥚";
const leftthreetimes = "⋋";
const LeftTriangleBar = "⧏";
const LeftTriangle = "⊲";
const LeftTriangleEqual = "⊴";
const LeftUpDownVector = "⥑";
const LeftUpTeeVector = "⥠";
const LeftUpVectorBar = "⥘";
const LeftUpVector = "↿";
const LeftVectorBar = "⥒";
const LeftVector = "↼";
const lEg = "⪋";
const leg = "⋚";
const leq = "≤";
const leqq = "≦";
const leqslant = "⩽";
const lescc = "⪨";
const les = "⩽";
const lesdot = "⩿";
const lesdoto = "⪁";
const lesdotor = "⪃";
const lesg = "⋚︀";
const lesges = "⪓";
const lessapprox = "⪅";
const lessdot = "⋖";
const lesseqgtr = "⋚";
const lesseqqgtr = "⪋";
const LessEqualGreater = "⋚";
const LessFullEqual = "≦";
const LessGreater = "≶";
const lessgtr = "≶";
const LessLess = "⪡";
const lesssim = "≲";
const LessSlantEqual = "⩽";
const LessTilde = "≲";
const lfisht = "⥼";
const lfloor = "⌊";
const Lfr = "𝔏";
const lfr = "𝔩";
const lg = "≶";
const lgE = "⪑";
const lHar = "⥢";
const lhard = "↽";
const lharu = "↼";
const lharul = "⥪";
const lhblk = "▄";
const LJcy = "Љ";
const ljcy = "љ";
const llarr = "⇇";
const ll = "≪";
const Ll = "⋘";
const llcorner = "⌞";
const Lleftarrow = "⇚";
const llhard = "⥫";
const lltri = "◺";
const Lmidot = "Ŀ";
const lmidot = "ŀ";
const lmoustache = "⎰";
const lmoust = "⎰";
const lnap = "⪉";
const lnapprox = "⪉";
const lne = "⪇";
const lnE = "≨";
const lneq = "⪇";
const lneqq = "≨";
const lnsim = "⋦";
const loang = "⟬";
const loarr = "⇽";
const lobrk = "⟦";
const longleftarrow = "⟵";
const LongLeftArrow = "⟵";
const Longleftarrow = "⟸";
const longleftrightarrow = "⟷";
const LongLeftRightArrow = "⟷";
const Longleftrightarrow = "⟺";
const longmapsto = "⟼";
const longrightarrow = "⟶";
const LongRightArrow = "⟶";
const Longrightarrow = "⟹";
const looparrowleft = "↫";
const looparrowright = "↬";
const lopar = "⦅";
const Lopf = "𝕃";
const lopf = "𝕝";
const loplus = "⨭";
const lotimes = "⨴";
const lowast = "∗";
const lowbar = "_";
const LowerLeftArrow = "↙";
const LowerRightArrow = "↘";
const loz = "◊";
const lozenge = "◊";
const lozf = "⧫";
const lpar = "(";
const lparlt = "⦓";
const lrarr = "⇆";
const lrcorner = "⌟";
const lrhar = "⇋";
const lrhard = "⥭";
const lrm = "‎";
const lrtri = "⊿";
const lsaquo = "‹";
const lscr = "𝓁";
const Lscr = "ℒ";
const lsh = "↰";
const Lsh = "↰";
const lsim = "≲";
const lsime = "⪍";
const lsimg = "⪏";
const lsqb = "[";
const lsquo = "‘";
const lsquor = "‚";
const Lstrok = "Ł";
const lstrok = "ł";
const ltcc = "⪦";
const ltcir = "⩹";
const lt$1 = "<";
const LT = "<";
const Lt = "≪";
const ltdot = "⋖";
const lthree = "⋋";
const ltimes = "⋉";
const ltlarr = "⥶";
const ltquest = "⩻";
const ltri = "◃";
const ltrie = "⊴";
const ltrif = "◂";
const ltrPar = "⦖";
const lurdshar = "⥊";
const luruhar = "⥦";
const lvertneqq = "≨︀";
const lvnE = "≨︀";
const macr = "¯";
const male = "♂";
const malt = "✠";
const maltese = "✠";
const map$1 = "↦";
const mapsto = "↦";
const mapstodown = "↧";
const mapstoleft = "↤";
const mapstoup = "↥";
const marker = "▮";
const mcomma = "⨩";
const Mcy = "М";
const mcy = "м";
const mdash = "—";
const mDDot = "∺";
const measuredangle = "∡";
const MediumSpace = " ";
const Mellintrf = "ℳ";
const Mfr = "𝔐";
const mfr = "𝔪";
const mho = "℧";
const micro = "µ";
const midast = "*";
const midcir = "⫰";
const mid = "∣";
const middot = "·";
const minusb = "⊟";
const minus = "−";
const minusd = "∸";
const minusdu = "⨪";
const MinusPlus = "∓";
const mlcp = "⫛";
const mldr = "…";
const mnplus = "∓";
const models = "⊧";
const Mopf = "𝕄";
const mopf = "𝕞";
const mp = "∓";
const mscr = "𝓂";
const Mscr = "ℳ";
const mstpos = "∾";
const Mu = "Μ";
const mu = "μ";
const multimap = "⊸";
const mumap = "⊸";
const nabla = "∇";
const Nacute = "Ń";
const nacute = "ń";
const nang = "∠⃒";
const nap = "≉";
const napE = "⩰̸";
const napid = "≋̸";
const napos = "ŉ";
const napprox = "≉";
const natural = "♮";
const naturals = "ℕ";
const natur = "♮";
const nbsp = " ";
const nbump = "≎̸";
const nbumpe = "≏̸";
const ncap = "⩃";
const Ncaron = "Ň";
const ncaron = "ň";
const Ncedil = "Ņ";
const ncedil = "ņ";
const ncong = "≇";
const ncongdot = "⩭̸";
const ncup = "⩂";
const Ncy = "Н";
const ncy = "н";
const ndash = "–";
const nearhk = "⤤";
const nearr = "↗";
const neArr = "⇗";
const nearrow = "↗";
const ne = "≠";
const nedot = "≐̸";
const NegativeMediumSpace = "​";
const NegativeThickSpace = "​";
const NegativeThinSpace = "​";
const NegativeVeryThinSpace = "​";
const nequiv = "≢";
const nesear = "⤨";
const nesim = "≂̸";
const NestedGreaterGreater = "≫";
const NestedLessLess = "≪";
const NewLine = "\n";
const nexist = "∄";
const nexists = "∄";
const Nfr = "𝔑";
const nfr = "𝔫";
const ngE = "≧̸";
const nge = "≱";
const ngeq = "≱";
const ngeqq = "≧̸";
const ngeqslant = "⩾̸";
const nges = "⩾̸";
const nGg = "⋙̸";
const ngsim = "≵";
const nGt = "≫⃒";
const ngt = "≯";
const ngtr = "≯";
const nGtv = "≫̸";
const nharr = "↮";
const nhArr = "⇎";
const nhpar = "⫲";
const ni = "∋";
const nis = "⋼";
const nisd = "⋺";
const niv = "∋";
const NJcy = "Њ";
const njcy = "њ";
const nlarr = "↚";
const nlArr = "⇍";
const nldr = "‥";
const nlE = "≦̸";
const nle = "≰";
const nleftarrow = "↚";
const nLeftarrow = "⇍";
const nleftrightarrow = "↮";
const nLeftrightarrow = "⇎";
const nleq = "≰";
const nleqq = "≦̸";
const nleqslant = "⩽̸";
const nles = "⩽̸";
const nless = "≮";
const nLl = "⋘̸";
const nlsim = "≴";
const nLt = "≪⃒";
const nlt = "≮";
const nltri = "⋪";
const nltrie = "⋬";
const nLtv = "≪̸";
const nmid = "∤";
const NoBreak = "⁠";
const NonBreakingSpace = " ";
const nopf = "𝕟";
const Nopf = "ℕ";
const Not = "⫬";
const not$1 = "¬";
const NotCongruent = "≢";
const NotCupCap = "≭";
const NotDoubleVerticalBar = "∦";
const NotElement = "∉";
const NotEqual = "≠";
const NotEqualTilde = "≂̸";
const NotExists = "∄";
const NotGreater = "≯";
const NotGreaterEqual = "≱";
const NotGreaterFullEqual = "≧̸";
const NotGreaterGreater = "≫̸";
const NotGreaterLess = "≹";
const NotGreaterSlantEqual = "⩾̸";
const NotGreaterTilde = "≵";
const NotHumpDownHump = "≎̸";
const NotHumpEqual = "≏̸";
const notin = "∉";
const notindot = "⋵̸";
const notinE = "⋹̸";
const notinva = "∉";
const notinvb = "⋷";
const notinvc = "⋶";
const NotLeftTriangleBar = "⧏̸";
const NotLeftTriangle = "⋪";
const NotLeftTriangleEqual = "⋬";
const NotLess = "≮";
const NotLessEqual = "≰";
const NotLessGreater = "≸";
const NotLessLess = "≪̸";
const NotLessSlantEqual = "⩽̸";
const NotLessTilde = "≴";
const NotNestedGreaterGreater = "⪢̸";
const NotNestedLessLess = "⪡̸";
const notni = "∌";
const notniva = "∌";
const notnivb = "⋾";
const notnivc = "⋽";
const NotPrecedes = "⊀";
const NotPrecedesEqual = "⪯̸";
const NotPrecedesSlantEqual = "⋠";
const NotReverseElement = "∌";
const NotRightTriangleBar = "⧐̸";
const NotRightTriangle = "⋫";
const NotRightTriangleEqual = "⋭";
const NotSquareSubset = "⊏̸";
const NotSquareSubsetEqual = "⋢";
const NotSquareSuperset = "⊐̸";
const NotSquareSupersetEqual = "⋣";
const NotSubset = "⊂⃒";
const NotSubsetEqual = "⊈";
const NotSucceeds = "⊁";
const NotSucceedsEqual = "⪰̸";
const NotSucceedsSlantEqual = "⋡";
const NotSucceedsTilde = "≿̸";
const NotSuperset = "⊃⃒";
const NotSupersetEqual = "⊉";
const NotTilde = "≁";
const NotTildeEqual = "≄";
const NotTildeFullEqual = "≇";
const NotTildeTilde = "≉";
const NotVerticalBar = "∤";
const nparallel = "∦";
const npar = "∦";
const nparsl = "⫽⃥";
const npart = "∂̸";
const npolint = "⨔";
const npr = "⊀";
const nprcue = "⋠";
const nprec = "⊀";
const npreceq = "⪯̸";
const npre = "⪯̸";
const nrarrc = "⤳̸";
const nrarr = "↛";
const nrArr = "⇏";
const nrarrw = "↝̸";
const nrightarrow = "↛";
const nRightarrow = "⇏";
const nrtri = "⋫";
const nrtrie = "⋭";
const nsc = "⊁";
const nsccue = "⋡";
const nsce = "⪰̸";
const Nscr = "𝒩";
const nscr = "𝓃";
const nshortmid = "∤";
const nshortparallel = "∦";
const nsim = "≁";
const nsime = "≄";
const nsimeq = "≄";
const nsmid = "∤";
const nspar = "∦";
const nsqsube = "⋢";
const nsqsupe = "⋣";
const nsub = "⊄";
const nsubE = "⫅̸";
const nsube = "⊈";
const nsubset = "⊂⃒";
const nsubseteq = "⊈";
const nsubseteqq = "⫅̸";
const nsucc = "⊁";
const nsucceq = "⪰̸";
const nsup = "⊅";
const nsupE = "⫆̸";
const nsupe = "⊉";
const nsupset = "⊃⃒";
const nsupseteq = "⊉";
const nsupseteqq = "⫆̸";
const ntgl = "≹";
const Ntilde = "Ñ";
const ntilde = "ñ";
const ntlg = "≸";
const ntriangleleft = "⋪";
const ntrianglelefteq = "⋬";
const ntriangleright = "⋫";
const ntrianglerighteq = "⋭";
const Nu = "Ν";
const nu = "ν";
const num = "#";
const numero = "№";
const numsp = " ";
const nvap = "≍⃒";
const nvdash = "⊬";
const nvDash = "⊭";
const nVdash = "⊮";
const nVDash = "⊯";
const nvge = "≥⃒";
const nvgt = ">⃒";
const nvHarr = "⤄";
const nvinfin = "⧞";
const nvlArr = "⤂";
const nvle = "≤⃒";
const nvlt = "<⃒";
const nvltrie = "⊴⃒";
const nvrArr = "⤃";
const nvrtrie = "⊵⃒";
const nvsim = "∼⃒";
const nwarhk = "⤣";
const nwarr = "↖";
const nwArr = "⇖";
const nwarrow = "↖";
const nwnear = "⤧";
const Oacute = "Ó";
const oacute = "ó";
const oast = "⊛";
const Ocirc = "Ô";
const ocirc = "ô";
const ocir = "⊚";
const Ocy = "О";
const ocy = "о";
const odash = "⊝";
const Odblac = "Ő";
const odblac = "ő";
const odiv = "⨸";
const odot = "⊙";
const odsold = "⦼";
const OElig = "Œ";
const oelig = "œ";
const ofcir = "⦿";
const Ofr = "𝔒";
const ofr = "𝔬";
const ogon = "˛";
const Ograve = "Ò";
const ograve = "ò";
const ogt = "⧁";
const ohbar = "⦵";
const ohm = "Ω";
const oint = "∮";
const olarr = "↺";
const olcir = "⦾";
const olcross = "⦻";
const oline = "‾";
const olt = "⧀";
const Omacr = "Ō";
const omacr = "ō";
const Omega = "Ω";
const omega = "ω";
const Omicron = "Ο";
const omicron = "ο";
const omid = "⦶";
const ominus = "⊖";
const Oopf = "𝕆";
const oopf = "𝕠";
const opar = "⦷";
const OpenCurlyDoubleQuote = "“";
const OpenCurlyQuote = "‘";
const operp = "⦹";
const oplus = "⊕";
const orarr = "↻";
const Or = "⩔";
const or$1 = "∨";
const ord = "⩝";
const order = "ℴ";
const orderof = "ℴ";
const ordf = "ª";
const ordm = "º";
const origof = "⊶";
const oror = "⩖";
const orslope = "⩗";
const orv = "⩛";
const oS = "Ⓢ";
const Oscr = "𝒪";
const oscr = "ℴ";
const Oslash = "Ø";
const oslash = "ø";
const osol = "⊘";
const Otilde = "Õ";
const otilde = "õ";
const otimesas = "⨶";
const Otimes = "⨷";
const otimes = "⊗";
const Ouml = "Ö";
const ouml = "ö";
const ovbar = "⌽";
const OverBar = "‾";
const OverBrace = "⏞";
const OverBracket = "⎴";
const OverParenthesis = "⏜";
const para = "¶";
const parallel = "∥";
const par = "∥";
const parsim = "⫳";
const parsl = "⫽";
const part = "∂";
const PartialD = "∂";
const Pcy = "П";
const pcy = "п";
const percnt = "%";
const period = ".";
const permil = "‰";
const perp = "⊥";
const pertenk = "‱";
const Pfr = "𝔓";
const pfr = "𝔭";
const Phi = "Φ";
const phi = "φ";
const phiv = "ϕ";
const phmmat = "ℳ";
const phone = "☎";
const Pi = "Π";
const pi = "π";
const pitchfork = "⋔";
const piv = "ϖ";
const planck = "ℏ";
const planckh = "ℎ";
const plankv = "ℏ";
const plusacir = "⨣";
const plusb = "⊞";
const pluscir = "⨢";
const plus = "+";
const plusdo = "∔";
const plusdu = "⨥";
const pluse = "⩲";
const PlusMinus = "±";
const plusmn = "±";
const plussim = "⨦";
const plustwo = "⨧";
const pm = "±";
const Poincareplane = "ℌ";
const pointint = "⨕";
const popf = "𝕡";
const Popf = "ℙ";
const pound = "£";
const prap = "⪷";
const Pr = "⪻";
const pr = "≺";
const prcue = "≼";
const precapprox = "⪷";
const prec = "≺";
const preccurlyeq = "≼";
const Precedes = "≺";
const PrecedesEqual = "⪯";
const PrecedesSlantEqual = "≼";
const PrecedesTilde = "≾";
const preceq = "⪯";
const precnapprox = "⪹";
const precneqq = "⪵";
const precnsim = "⋨";
const pre = "⪯";
const prE = "⪳";
const precsim = "≾";
const prime = "′";
const Prime = "″";
const primes = "ℙ";
const prnap = "⪹";
const prnE = "⪵";
const prnsim = "⋨";
const prod = "∏";
const Product = "∏";
const profalar = "⌮";
const profline = "⌒";
const profsurf = "⌓";
const prop$1 = "∝";
const Proportional = "∝";
const Proportion = "∷";
const propto = "∝";
const prsim = "≾";
const prurel = "⊰";
const Pscr = "𝒫";
const pscr = "𝓅";
const Psi = "Ψ";
const psi = "ψ";
const puncsp = " ";
const Qfr = "𝔔";
const qfr = "𝔮";
const qint = "⨌";
const qopf = "𝕢";
const Qopf = "ℚ";
const qprime = "⁗";
const Qscr = "𝒬";
const qscr = "𝓆";
const quaternions = "ℍ";
const quatint = "⨖";
const quest = "?";
const questeq = "≟";
const quot = '"';
const QUOT = '"';
const rAarr = "⇛";
const race = "∽̱";
const Racute = "Ŕ";
const racute = "ŕ";
const radic = "√";
const raemptyv = "⦳";
const rang = "⟩";
const Rang = "⟫";
const rangd = "⦒";
const range$1 = "⦥";
const rangle = "⟩";
const raquo = "»";
const rarrap = "⥵";
const rarrb = "⇥";
const rarrbfs = "⤠";
const rarrc = "⤳";
const rarr = "→";
const Rarr = "↠";
const rArr = "⇒";
const rarrfs = "⤞";
const rarrhk = "↪";
const rarrlp = "↬";
const rarrpl = "⥅";
const rarrsim = "⥴";
const Rarrtl = "⤖";
const rarrtl = "↣";
const rarrw = "↝";
const ratail = "⤚";
const rAtail = "⤜";
const ratio = "∶";
const rationals = "ℚ";
const rbarr = "⤍";
const rBarr = "⤏";
const RBarr = "⤐";
const rbbrk = "❳";
const rbrace = "}";
const rbrack = "]";
const rbrke = "⦌";
const rbrksld = "⦎";
const rbrkslu = "⦐";
const Rcaron = "Ř";
const rcaron = "ř";
const Rcedil = "Ŗ";
const rcedil = "ŗ";
const rceil = "⌉";
const rcub = "}";
const Rcy = "Р";
const rcy = "р";
const rdca = "⤷";
const rdldhar = "⥩";
const rdquo = "”";
const rdquor = "”";
const rdsh = "↳";
const real = "ℜ";
const realine = "ℛ";
const realpart = "ℜ";
const reals = "ℝ";
const Re = "ℜ";
const rect = "▭";
const reg = "®";
const REG = "®";
const ReverseElement = "∋";
const ReverseEquilibrium = "⇋";
const ReverseUpEquilibrium = "⥯";
const rfisht = "⥽";
const rfloor = "⌋";
const rfr = "𝔯";
const Rfr = "ℜ";
const rHar = "⥤";
const rhard = "⇁";
const rharu = "⇀";
const rharul = "⥬";
const Rho = "Ρ";
const rho = "ρ";
const rhov = "ϱ";
const RightAngleBracket = "⟩";
const RightArrowBar = "⇥";
const rightarrow = "→";
const RightArrow = "→";
const Rightarrow = "⇒";
const RightArrowLeftArrow = "⇄";
const rightarrowtail = "↣";
const RightCeiling = "⌉";
const RightDoubleBracket = "⟧";
const RightDownTeeVector = "⥝";
const RightDownVectorBar = "⥕";
const RightDownVector = "⇂";
const RightFloor = "⌋";
const rightharpoondown = "⇁";
const rightharpoonup = "⇀";
const rightleftarrows = "⇄";
const rightleftharpoons = "⇌";
const rightrightarrows = "⇉";
const rightsquigarrow = "↝";
const RightTeeArrow = "↦";
const RightTee = "⊢";
const RightTeeVector = "⥛";
const rightthreetimes = "⋌";
const RightTriangleBar = "⧐";
const RightTriangle = "⊳";
const RightTriangleEqual = "⊵";
const RightUpDownVector = "⥏";
const RightUpTeeVector = "⥜";
const RightUpVectorBar = "⥔";
const RightUpVector = "↾";
const RightVectorBar = "⥓";
const RightVector = "⇀";
const ring = "˚";
const risingdotseq = "≓";
const rlarr = "⇄";
const rlhar = "⇌";
const rlm = "‏";
const rmoustache = "⎱";
const rmoust = "⎱";
const rnmid = "⫮";
const roang = "⟭";
const roarr = "⇾";
const robrk = "⟧";
const ropar = "⦆";
const ropf = "𝕣";
const Ropf = "ℝ";
const roplus = "⨮";
const rotimes = "⨵";
const RoundImplies = "⥰";
const rpar = ")";
const rpargt = "⦔";
const rppolint = "⨒";
const rrarr = "⇉";
const Rrightarrow = "⇛";
const rsaquo = "›";
const rscr = "𝓇";
const Rscr = "ℛ";
const rsh = "↱";
const Rsh = "↱";
const rsqb = "]";
const rsquo = "’";
const rsquor = "’";
const rthree = "⋌";
const rtimes = "⋊";
const rtri = "▹";
const rtrie = "⊵";
const rtrif = "▸";
const rtriltri = "⧎";
const RuleDelayed = "⧴";
const ruluhar = "⥨";
const rx = "℞";
const Sacute = "Ś";
const sacute = "ś";
const sbquo = "‚";
const scap = "⪸";
const Scaron = "Š";
const scaron = "š";
const Sc = "⪼";
const sc = "≻";
const sccue = "≽";
const sce = "⪰";
const scE = "⪴";
const Scedil = "Ş";
const scedil = "ş";
const Scirc = "Ŝ";
const scirc = "ŝ";
const scnap = "⪺";
const scnE = "⪶";
const scnsim = "⋩";
const scpolint = "⨓";
const scsim = "≿";
const Scy = "С";
const scy = "с";
const sdotb = "⊡";
const sdot = "⋅";
const sdote = "⩦";
const searhk = "⤥";
const searr = "↘";
const seArr = "⇘";
const searrow = "↘";
const sect = "§";
const semi = ";";
const seswar = "⤩";
const setminus = "∖";
const setmn = "∖";
const sext = "✶";
const Sfr = "𝔖";
const sfr = "𝔰";
const sfrown = "⌢";
const sharp = "♯";
const SHCHcy = "Щ";
const shchcy = "щ";
const SHcy = "Ш";
const shcy = "ш";
const ShortDownArrow = "↓";
const ShortLeftArrow = "←";
const shortmid = "∣";
const shortparallel = "∥";
const ShortRightArrow = "→";
const ShortUpArrow = "↑";
const shy = "­";
const Sigma = "Σ";
const sigma = "σ";
const sigmaf = "ς";
const sigmav = "ς";
const sim = "∼";
const simdot = "⩪";
const sime = "≃";
const simeq = "≃";
const simg = "⪞";
const simgE = "⪠";
const siml = "⪝";
const simlE = "⪟";
const simne = "≆";
const simplus = "⨤";
const simrarr = "⥲";
const slarr = "←";
const SmallCircle = "∘";
const smallsetminus = "∖";
const smashp = "⨳";
const smeparsl = "⧤";
const smid = "∣";
const smile = "⌣";
const smt = "⪪";
const smte = "⪬";
const smtes = "⪬︀";
const SOFTcy = "Ь";
const softcy = "ь";
const solbar = "⌿";
const solb = "⧄";
const sol = "/";
const Sopf = "𝕊";
const sopf = "𝕤";
const spades = "♠";
const spadesuit = "♠";
const spar = "∥";
const sqcap = "⊓";
const sqcaps = "⊓︀";
const sqcup = "⊔";
const sqcups = "⊔︀";
const Sqrt = "√";
const sqsub = "⊏";
const sqsube = "⊑";
const sqsubset = "⊏";
const sqsubseteq = "⊑";
const sqsup = "⊐";
const sqsupe = "⊒";
const sqsupset = "⊐";
const sqsupseteq = "⊒";
const square = "□";
const Square = "□";
const SquareIntersection = "⊓";
const SquareSubset = "⊏";
const SquareSubsetEqual = "⊑";
const SquareSuperset = "⊐";
const SquareSupersetEqual = "⊒";
const SquareUnion = "⊔";
const squarf = "▪";
const squ = "□";
const squf = "▪";
const srarr = "→";
const Sscr = "𝒮";
const sscr = "𝓈";
const ssetmn = "∖";
const ssmile = "⌣";
const sstarf = "⋆";
const Star = "⋆";
const star = "☆";
const starf = "★";
const straightepsilon = "ϵ";
const straightphi = "ϕ";
const strns = "¯";
const sub = "⊂";
const Sub = "⋐";
const subdot = "⪽";
const subE = "⫅";
const sube = "⊆";
const subedot = "⫃";
const submult = "⫁";
const subnE = "⫋";
const subne = "⊊";
const subplus = "⪿";
const subrarr = "⥹";
const subset = "⊂";
const Subset = "⋐";
const subseteq = "⊆";
const subseteqq = "⫅";
const SubsetEqual = "⊆";
const subsetneq = "⊊";
const subsetneqq = "⫋";
const subsim = "⫇";
const subsub = "⫕";
const subsup = "⫓";
const succapprox = "⪸";
const succ = "≻";
const succcurlyeq = "≽";
const Succeeds = "≻";
const SucceedsEqual = "⪰";
const SucceedsSlantEqual = "≽";
const SucceedsTilde = "≿";
const succeq = "⪰";
const succnapprox = "⪺";
const succneqq = "⪶";
const succnsim = "⋩";
const succsim = "≿";
const SuchThat = "∋";
const sum$1 = "∑";
const Sum = "∑";
const sung = "♪";
const sup1 = "¹";
const sup2 = "²";
const sup3 = "³";
const sup = "⊃";
const Sup = "⋑";
const supdot = "⪾";
const supdsub = "⫘";
const supE = "⫆";
const supe = "⊇";
const supedot = "⫄";
const Superset = "⊃";
const SupersetEqual = "⊇";
const suphsol = "⟉";
const suphsub = "⫗";
const suplarr = "⥻";
const supmult = "⫂";
const supnE = "⫌";
const supne = "⊋";
const supplus = "⫀";
const supset = "⊃";
const Supset = "⋑";
const supseteq = "⊇";
const supseteqq = "⫆";
const supsetneq = "⊋";
const supsetneqq = "⫌";
const supsim = "⫈";
const supsub = "⫔";
const supsup = "⫖";
const swarhk = "⤦";
const swarr = "↙";
const swArr = "⇙";
const swarrow = "↙";
const swnwar = "⤪";
const szlig = "ß";
const Tab = "	";
const target = "⌖";
const Tau = "Τ";
const tau = "τ";
const tbrk = "⎴";
const Tcaron = "Ť";
const tcaron = "ť";
const Tcedil = "Ţ";
const tcedil = "ţ";
const Tcy = "Т";
const tcy = "т";
const tdot = "⃛";
const telrec = "⌕";
const Tfr = "𝔗";
const tfr = "𝔱";
const there4 = "∴";
const therefore = "∴";
const Therefore = "∴";
const Theta = "Θ";
const theta = "θ";
const thetasym = "ϑ";
const thetav = "ϑ";
const thickapprox = "≈";
const thicksim = "∼";
const ThickSpace = "  ";
const ThinSpace = " ";
const thinsp = " ";
const thkap = "≈";
const thksim = "∼";
const THORN = "Þ";
const thorn = "þ";
const tilde = "˜";
const Tilde = "∼";
const TildeEqual = "≃";
const TildeFullEqual = "≅";
const TildeTilde = "≈";
const timesbar = "⨱";
const timesb = "⊠";
const times$1 = "×";
const timesd = "⨰";
const tint = "∭";
const toea = "⤨";
const topbot = "⌶";
const topcir = "⫱";
const top = "⊤";
const Topf = "𝕋";
const topf = "𝕥";
const topfork = "⫚";
const tosa = "⤩";
const tprime = "‴";
const trade = "™";
const TRADE = "™";
const triangle = "▵";
const triangledown = "▿";
const triangleleft = "◃";
const trianglelefteq = "⊴";
const triangleq = "≜";
const triangleright = "▹";
const trianglerighteq = "⊵";
const tridot = "◬";
const trie = "≜";
const triminus = "⨺";
const TripleDot = "⃛";
const triplus = "⨹";
const trisb = "⧍";
const tritime = "⨻";
const trpezium = "⏢";
const Tscr = "𝒯";
const tscr = "𝓉";
const TScy = "Ц";
const tscy = "ц";
const TSHcy = "Ћ";
const tshcy = "ћ";
const Tstrok = "Ŧ";
const tstrok = "ŧ";
const twixt = "≬";
const twoheadleftarrow = "↞";
const twoheadrightarrow = "↠";
const Uacute = "Ú";
const uacute = "ú";
const uarr = "↑";
const Uarr = "↟";
const uArr = "⇑";
const Uarrocir = "⥉";
const Ubrcy = "Ў";
const ubrcy = "ў";
const Ubreve = "Ŭ";
const ubreve = "ŭ";
const Ucirc = "Û";
const ucirc = "û";
const Ucy = "У";
const ucy = "у";
const udarr = "⇅";
const Udblac = "Ű";
const udblac = "ű";
const udhar = "⥮";
const ufisht = "⥾";
const Ufr = "𝔘";
const ufr = "𝔲";
const Ugrave = "Ù";
const ugrave = "ù";
const uHar = "⥣";
const uharl = "↿";
const uharr = "↾";
const uhblk = "▀";
const ulcorn = "⌜";
const ulcorner = "⌜";
const ulcrop = "⌏";
const ultri = "◸";
const Umacr = "Ū";
const umacr = "ū";
const uml = "¨";
const UnderBar = "_";
const UnderBrace = "⏟";
const UnderBracket = "⎵";
const UnderParenthesis = "⏝";
const Union = "⋃";
const UnionPlus = "⊎";
const Uogon = "Ų";
const uogon = "ų";
const Uopf = "𝕌";
const uopf = "𝕦";
const UpArrowBar = "⤒";
const uparrow = "↑";
const UpArrow = "↑";
const Uparrow = "⇑";
const UpArrowDownArrow = "⇅";
const updownarrow = "↕";
const UpDownArrow = "↕";
const Updownarrow = "⇕";
const UpEquilibrium = "⥮";
const upharpoonleft = "↿";
const upharpoonright = "↾";
const uplus = "⊎";
const UpperLeftArrow = "↖";
const UpperRightArrow = "↗";
const upsi = "υ";
const Upsi = "ϒ";
const upsih = "ϒ";
const Upsilon = "Υ";
const upsilon = "υ";
const UpTeeArrow = "↥";
const UpTee = "⊥";
const upuparrows = "⇈";
const urcorn = "⌝";
const urcorner = "⌝";
const urcrop = "⌎";
const Uring = "Ů";
const uring = "ů";
const urtri = "◹";
const Uscr = "𝒰";
const uscr = "𝓊";
const utdot = "⋰";
const Utilde = "Ũ";
const utilde = "ũ";
const utri = "▵";
const utrif = "▴";
const uuarr = "⇈";
const Uuml = "Ü";
const uuml = "ü";
const uwangle = "⦧";
const vangrt = "⦜";
const varepsilon = "ϵ";
const varkappa = "ϰ";
const varnothing = "∅";
const varphi = "ϕ";
const varpi = "ϖ";
const varpropto = "∝";
const varr = "↕";
const vArr = "⇕";
const varrho = "ϱ";
const varsigma = "ς";
const varsubsetneq = "⊊︀";
const varsubsetneqq = "⫋︀";
const varsupsetneq = "⊋︀";
const varsupsetneqq = "⫌︀";
const vartheta = "ϑ";
const vartriangleleft = "⊲";
const vartriangleright = "⊳";
const vBar = "⫨";
const Vbar = "⫫";
const vBarv = "⫩";
const Vcy = "В";
const vcy = "в";
const vdash = "⊢";
const vDash = "⊨";
const Vdash = "⊩";
const VDash = "⊫";
const Vdashl = "⫦";
const veebar = "⊻";
const vee = "∨";
const Vee = "⋁";
const veeeq = "≚";
const vellip = "⋮";
const verbar = "|";
const Verbar = "‖";
const vert = "|";
const Vert = "‖";
const VerticalBar = "∣";
const VerticalLine = "|";
const VerticalSeparator = "❘";
const VerticalTilde = "≀";
const VeryThinSpace = " ";
const Vfr = "𝔙";
const vfr = "𝔳";
const vltri = "⊲";
const vnsub = "⊂⃒";
const vnsup = "⊃⃒";
const Vopf = "𝕍";
const vopf = "𝕧";
const vprop = "∝";
const vrtri = "⊳";
const Vscr = "𝒱";
const vscr = "𝓋";
const vsubnE = "⫋︀";
const vsubne = "⊊︀";
const vsupnE = "⫌︀";
const vsupne = "⊋︀";
const Vvdash = "⊪";
const vzigzag = "⦚";
const Wcirc = "Ŵ";
const wcirc = "ŵ";
const wedbar = "⩟";
const wedge = "∧";
const Wedge = "⋀";
const wedgeq = "≙";
const weierp = "℘";
const Wfr = "𝔚";
const wfr = "𝔴";
const Wopf = "𝕎";
const wopf = "𝕨";
const wp = "℘";
const wr = "≀";
const wreath = "≀";
const Wscr = "𝒲";
const wscr = "𝓌";
const xcap = "⋂";
const xcirc = "◯";
const xcup = "⋃";
const xdtri = "▽";
const Xfr = "𝔛";
const xfr = "𝔵";
const xharr = "⟷";
const xhArr = "⟺";
const Xi = "Ξ";
const xi = "ξ";
const xlarr = "⟵";
const xlArr = "⟸";
const xmap = "⟼";
const xnis = "⋻";
const xodot = "⨀";
const Xopf = "𝕏";
const xopf = "𝕩";
const xoplus = "⨁";
const xotime = "⨂";
const xrarr = "⟶";
const xrArr = "⟹";
const Xscr = "𝒳";
const xscr = "𝓍";
const xsqcup = "⨆";
const xuplus = "⨄";
const xutri = "△";
const xvee = "⋁";
const xwedge = "⋀";
const Yacute = "Ý";
const yacute = "ý";
const YAcy = "Я";
const yacy = "я";
const Ycirc = "Ŷ";
const ycirc = "ŷ";
const Ycy = "Ы";
const ycy = "ы";
const yen = "¥";
const Yfr = "𝔜";
const yfr = "𝔶";
const YIcy = "Ї";
const yicy = "ї";
const Yopf = "𝕐";
const yopf = "𝕪";
const Yscr = "𝒴";
const yscr = "𝓎";
const YUcy = "Ю";
const yucy = "ю";
const yuml = "ÿ";
const Yuml = "Ÿ";
const Zacute = "Ź";
const zacute = "ź";
const Zcaron = "Ž";
const zcaron = "ž";
const Zcy = "З";
const zcy = "з";
const Zdot = "Ż";
const zdot = "ż";
const zeetrf = "ℨ";
const ZeroWidthSpace = "​";
const Zeta = "Ζ";
const zeta = "ζ";
const zfr = "𝔷";
const Zfr = "ℨ";
const ZHcy = "Ж";
const zhcy = "ж";
const zigrarr = "⇝";
const zopf = "𝕫";
const Zopf = "ℤ";
const Zscr = "𝒵";
const zscr = "𝓏";
const zwj = "‍";
const zwnj = "‌";
var require$$0 = {
  Aacute,
  aacute,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc,
  acirc,
  acute,
  Acy,
  acy,
  AElig,
  aelig,
  af,
  Afr,
  afr,
  Agrave,
  agrave,
  alefsym,
  aleph,
  Alpha,
  alpha: alpha$1,
  Amacr,
  amacr,
  amalg,
  amp,
  AMP,
  andand,
  And,
  and: and$1,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap: ap$1,
  apE,
  ape,
  apid,
  apos,
  ApplyFunction,
  approx,
  approxeq,
  Aring,
  aring,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde,
  atilde,
  Auml,
  auml,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil,
  ccedil,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil,
  Cedilla,
  cemptyv,
  cent,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement: complement$1,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy,
  COPY,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute,
  eacute,
  easter,
  Ecaron,
  ecaron,
  Ecirc,
  ecirc,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave,
  egrave,
  egs,
  egsdot,
  el: el$2,
  Element: Element$1,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty: empty$1,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals: equals$1,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH,
  eth,
  Euml,
  euml,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12,
  frac13,
  frac14,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$1,
  GT,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute,
  iacute,
  ic,
  Icirc,
  icirc,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl,
  iff,
  ifr,
  Ifr,
  Igrave,
  igrave,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  in: "∈",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml,
  iuml,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$1,
  LT,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr,
  male,
  malt,
  maltese,
  Map: "⤅",
  map: map$1,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro,
  midast,
  midcir,
  mid,
  middot,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde,
  ntilde,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute,
  oacute,
  oast,
  Ocirc,
  ocirc,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve,
  ograve,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or: or$1,
  ord,
  order,
  orderof,
  ordf,
  ordm,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash,
  oslash,
  osol,
  Otilde,
  otilde,
  otimesas,
  Otimes,
  otimes,
  Ouml,
  ouml,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop: prop$1,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot,
  QUOT,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range: range$1,
  rangle,
  raquo,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg,
  REG,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum: sum$1,
  Sum,
  sung,
  sup1,
  sup2,
  sup3,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN,
  thorn,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute,
  uacute,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc,
  ucirc,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave,
  ugrave,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml,
  uuml,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute,
  yacute,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
var entities = require$$0;
var regex = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var encodeCache = {};
function getEncodeCache(exclude) {
  var i, ch, cache2 = encodeCache[exclude];
  if (cache2) {
    return cache2;
  }
  cache2 = encodeCache[exclude] = [];
  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    if (/^[0-9a-z]$/i.test(ch)) {
      cache2.push(ch);
    } else {
      cache2.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    }
  }
  for (i = 0; i < exclude.length; i++) {
    cache2[exclude.charCodeAt(i)] = exclude[i];
  }
  return cache2;
}
function encode(string, exclude, keepEscaped) {
  var i, l, code3, nextCode, cache2, result = "";
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode.defaultChars;
  }
  if (typeof keepEscaped === "undefined") {
    keepEscaped = true;
  }
  cache2 = getEncodeCache(exclude);
  for (i = 0, l = string.length; i < l; i++) {
    code3 = string.charCodeAt(i);
    if (keepEscaped && code3 === 37 && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }
    if (code3 < 128) {
      result += cache2[code3];
      continue;
    }
    if (code3 >= 55296 && code3 <= 57343) {
      if (code3 >= 55296 && code3 <= 56319 && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += "%EF%BF%BD";
      continue;
    }
    result += encodeURIComponent(string[i]);
  }
  return result;
}
encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";
var encode_1 = encode;
var decodeCache = {};
function getDecodeCache(exclude) {
  var i, ch, cache2 = decodeCache[exclude];
  if (cache2) {
    return cache2;
  }
  cache2 = decodeCache[exclude] = [];
  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache2.push(ch);
  }
  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache2[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
  }
  return cache2;
}
function decode(string, exclude) {
  var cache2;
  if (typeof exclude !== "string") {
    exclude = decode.defaultChars;
  }
  cache2 = getDecodeCache(exclude);
  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr, result = "";
    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);
      if (b1 < 128) {
        result += cache2[b1];
        continue;
      }
      if ((b1 & 224) === 192 && i + 3 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        if ((b2 & 192) === 128) {
          chr = b1 << 6 & 1984 | b2 & 63;
          if (chr < 128) {
            result += "��";
          } else {
            result += String.fromCharCode(chr);
          }
          i += 3;
          continue;
        }
      }
      if ((b1 & 240) === 224 && i + 6 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128) {
          chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
          if (chr < 2048 || chr >= 55296 && chr <= 57343) {
            result += "���";
          } else {
            result += String.fromCharCode(chr);
          }
          i += 6;
          continue;
        }
      }
      if ((b1 & 248) === 240 && i + 9 < l) {
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);
        if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
          chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
          if (chr < 65536 || chr > 1114111) {
            result += "����";
          } else {
            chr -= 65536;
            result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
          }
          i += 9;
          continue;
        }
      }
      result += "�";
    }
    return result;
  });
}
decode.defaultChars = ";/?:@&=+$,#";
decode.componentChars = "";
var decode_1 = decode;
var format = function format2(url) {
  var result = "";
  result += url.protocol || "";
  result += url.slashes ? "//" : "";
  result += url.auth ? url.auth + "@" : "";
  if (url.hostname && url.hostname.indexOf(":") !== -1) {
    result += "[" + url.hostname + "]";
  } else {
    result += url.hostname || "";
  }
  result += url.port ? ":" + url.port : "";
  result += url.pathname || "";
  result += url.search || "";
  result += url.hash || "";
  return result;
};
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}
var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, hostlessProtocol = {
  javascript: true,
  "javascript:": true
}, slashedProtocol = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) {
    return url;
  }
  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}
Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes, rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }
  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }
    if (rest[hostEnd - 1] === ":") {
      hostEnd--;
    }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    this.parseHost(host);
    this.hostname = this.hostname || "";
    var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part2 = hostparts[i];
        if (!part2) {
          continue;
        }
        if (!part2.match(hostnamePartPattern)) {
          var newpart = "";
          for (var j = 0, k = part2.length; j < k; j++) {
            if (part2.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part2[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part2.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join(".") + rest;
            }
            this.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = "";
    }
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }
  var hash = rest.indexOf("#");
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf("?");
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) {
    this.pathname = rest;
  }
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = "";
  }
  return this;
};
Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) {
    this.hostname = host;
  }
};
var parse = urlParse;
var encode$1 = encode_1;
var decode$1 = decode_1;
var format$1 = format;
var parse$1 = parse;
var mdurl = {
  encode: encode$1,
  decode: decode$1,
  format: format$1,
  parse: parse$1
};
var regex$1 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var regex$2 = /[\0-\x1F\x7F-\x9F]/;
var regex$3 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
var regex$4 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
var Any = regex$1;
var Cc = regex$2;
var Cf = regex$3;
var P = regex;
var Z = regex$4;
var uc_micro = {
  Any,
  Cc,
  Cf,
  P,
  Z
};
var utils = createCommonjsModule(function(module, exports) {
  function _class2(obj) {
    return Object.prototype.toString.call(obj);
  }
  function isString2(obj) {
    return _class2(obj) === "[object String]";
  }
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  function has3(object, key) {
    return _hasOwnProperty.call(object, key);
  }
  function assign2(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function(source) {
      if (!source) {
        return;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be object");
      }
      Object.keys(source).forEach(function(key) {
        obj[key] = source[key];
      });
    });
    return obj;
  }
  function arrayReplaceAt2(src, pos, newElements) {
    return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
  }
  function isValidEntityCode2(c) {
    if (c >= 55296 && c <= 57343) {
      return false;
    }
    if (c >= 64976 && c <= 65007) {
      return false;
    }
    if ((c & 65535) === 65535 || (c & 65535) === 65534) {
      return false;
    }
    if (c >= 0 && c <= 8) {
      return false;
    }
    if (c === 11) {
      return false;
    }
    if (c >= 14 && c <= 31) {
      return false;
    }
    if (c >= 127 && c <= 159) {
      return false;
    }
    if (c > 1114111) {
      return false;
    }
    return true;
  }
  function fromCodePoint2(c) {
    if (c > 65535) {
      c -= 65536;
      var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
      return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c);
  }
  var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
  var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
  var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  function replaceEntityPattern(match4, name) {
    var code3 = 0;
    if (has3(entities, name)) {
      return entities[name];
    }
    if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
      code3 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
      if (isValidEntityCode2(code3)) {
        return fromCodePoint2(code3);
      }
    }
    return match4;
  }
  function unescapeMd(str) {
    if (str.indexOf("\\") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_MD_RE, "$1");
  }
  function unescapeAll2(str) {
    if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_ALL_RE, function(match4, escaped, entity3) {
      if (escaped) {
        return escaped;
      }
      return replaceEntityPattern(match4, entity3);
    });
  }
  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }
  function escapeHtml2(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
  }
  var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
  function escapeRE2(str) {
    return str.replace(REGEXP_ESCAPE_RE, "\\$&");
  }
  function isSpace2(code3) {
    switch (code3) {
      case 9:
      case 32:
        return true;
    }
    return false;
  }
  function isWhiteSpace2(code3) {
    if (code3 >= 8192 && code3 <= 8202) {
      return true;
    }
    switch (code3) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  }
  function isPunctChar2(ch) {
    return regex.test(ch);
  }
  function isMdAsciiPunct2(ch) {
    switch (ch) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  function normalizeReference2(str) {
    str = str.trim().replace(/\s+/g, " ");
    if ("ẞ".toLowerCase() === "Ṿ") {
      str = str.replace(/ẞ/g, "ß");
    }
    return str.toLowerCase().toUpperCase();
  }
  exports.lib = {};
  exports.lib.mdurl = mdurl;
  exports.lib.ucmicro = uc_micro;
  exports.assign = assign2;
  exports.isString = isString2;
  exports.has = has3;
  exports.unescapeMd = unescapeMd;
  exports.unescapeAll = unescapeAll2;
  exports.isValidEntityCode = isValidEntityCode2;
  exports.fromCodePoint = fromCodePoint2;
  exports.escapeHtml = escapeHtml2;
  exports.arrayReplaceAt = arrayReplaceAt2;
  exports.isSpace = isSpace2;
  exports.isWhiteSpace = isWhiteSpace2;
  exports.isMdAsciiPunct = isMdAsciiPunct2;
  exports.isPunctChar = isPunctChar2;
  exports.escapeRE = escapeRE2;
  exports.normalizeReference = normalizeReference2;
});
var parse_link_label = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker2, prevPos, labelEnd = -1, max3 = state.posMax, oldPos = state.pos;
  state.pos = start + 1;
  level = 1;
  while (state.pos < max3) {
    marker2 = state.src.charCodeAt(state.pos);
    if (marker2 === 93) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }
    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker2 === 91) {
      if (prevPos === state.pos - 1) {
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }
  if (found) {
    labelEnd = state.pos;
  }
  state.pos = oldPos;
  return labelEnd;
};
var unescapeAll = utils.unescapeAll;
var parse_link_destination = function parseLinkDestination(str, pos, max3) {
  var code3, level, lines = 0, start = pos, result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (str.charCodeAt(pos) === 60) {
    pos++;
    while (pos < max3) {
      code3 = str.charCodeAt(pos);
      if (code3 === 10) {
        return result;
      }
      if (code3 === 62) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code3 === 92 && pos + 1 < max3) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return result;
  }
  level = 0;
  while (pos < max3) {
    code3 = str.charCodeAt(pos);
    if (code3 === 32) {
      break;
    }
    if (code3 < 32 || code3 === 127) {
      break;
    }
    if (code3 === 92 && pos + 1 < max3) {
      pos += 2;
      continue;
    }
    if (code3 === 40) {
      level++;
    }
    if (code3 === 41) {
      if (level === 0) {
        break;
      }
      level--;
    }
    pos++;
  }
  if (start === pos) {
    return result;
  }
  if (level !== 0) {
    return result;
  }
  result.str = unescapeAll(str.slice(start, pos));
  result.lines = lines;
  result.pos = pos;
  result.ok = true;
  return result;
};
var unescapeAll$1 = utils.unescapeAll;
var parse_link_title = function parseLinkTitle(str, pos, max3) {
  var code3, marker2, lines = 0, start = pos, result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (pos >= max3) {
    return result;
  }
  marker2 = str.charCodeAt(pos);
  if (marker2 !== 34 && marker2 !== 39 && marker2 !== 40) {
    return result;
  }
  pos++;
  if (marker2 === 40) {
    marker2 = 41;
  }
  while (pos < max3) {
    code3 = str.charCodeAt(pos);
    if (code3 === marker2) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll$1(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code3 === 10) {
      lines++;
    } else if (code3 === 92 && pos + 1 < max3) {
      pos++;
      if (str.charCodeAt(pos) === 10) {
        lines++;
      }
    }
    pos++;
  }
  return result;
};
var parseLinkLabel2 = parse_link_label;
var parseLinkDestination2 = parse_link_destination;
var parseLinkTitle2 = parse_link_title;
var helpers = {
  parseLinkLabel: parseLinkLabel2,
  parseLinkDestination: parseLinkDestination2,
  parseLinkTitle: parseLinkTitle2
};
var assign = utils.assign;
var unescapeAll$2 = utils.unescapeAll;
var escapeHtml = utils.escapeHtml;
var default_rules = {};
default_rules.code_inline = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  return "<code" + slf.renderAttrs(token2) + ">" + escapeHtml(tokens[idx].content) + "</code>";
};
default_rules.code_block = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  return "<pre" + slf.renderAttrs(token2) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
};
default_rules.fence = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx], info = token2.info ? unescapeAll$2(token2.info).trim() : "", langName = "", highlighted, i, tmpAttrs, tmpToken;
  if (info) {
    langName = info.split(/\s+/g)[0];
  }
  if (options.highlight) {
    highlighted = options.highlight(token2.content, langName) || escapeHtml(token2.content);
  } else {
    highlighted = escapeHtml(token2.content);
  }
  if (highlighted.indexOf("<pre") === 0) {
    return highlighted + "\n";
  }
  if (info) {
    i = token2.attrIndex("class");
    tmpAttrs = token2.attrs ? token2.attrs.slice() : [];
    if (i < 0) {
      tmpAttrs.push(["class", options.langPrefix + langName]);
    } else {
      tmpAttrs[i][1] += " " + options.langPrefix + langName;
    }
    tmpToken = {
      attrs: tmpAttrs
    };
    return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
  }
  return "<pre><code" + slf.renderAttrs(token2) + ">" + highlighted + "</code></pre>\n";
};
default_rules.image = function(tokens, idx, options, env, slf) {
  var token2 = tokens[idx];
  token2.attrs[token2.attrIndex("alt")][1] = slf.renderInlineAsText(token2.children, options, env);
  return slf.renderToken(tokens, idx, options);
};
default_rules.hardbreak = function(tokens, idx, options) {
  return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
default_rules.softbreak = function(tokens, idx, options) {
  return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
default_rules.text = function(tokens, idx) {
  return escapeHtml(tokens[idx].content);
};
default_rules.html_block = function(tokens, idx) {
  return tokens[idx].content;
};
default_rules.html_inline = function(tokens, idx) {
  return tokens[idx].content;
};
function Renderer() {
  this.rules = assign({}, default_rules);
}
Renderer.prototype.renderAttrs = function renderAttrs(token2) {
  var i, l, result;
  if (!token2.attrs) {
    return "";
  }
  result = "";
  for (i = 0, l = token2.attrs.length; i < l; i++) {
    result += " " + escapeHtml(token2.attrs[i][0]) + '="' + escapeHtml(token2.attrs[i][1]) + '"';
  }
  return result;
};
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken, result = "", needLf = false, token2 = tokens[idx];
  if (token2.hidden) {
    return "";
  }
  if (token2.block && token2.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += "\n";
  }
  result += (token2.nesting === -1 ? "</" : "<") + token2.tag;
  result += this.renderAttrs(token2);
  if (token2.nesting === 0 && options.xhtmlOut) {
    result += " /";
  }
  if (token2.block) {
    needLf = true;
    if (token2.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];
        if (nextToken.type === "inline" || nextToken.hidden) {
          needLf = false;
        } else if (nextToken.nesting === -1 && nextToken.tag === token2.tag) {
          needLf = false;
        }
      }
    }
  }
  result += needLf ? ">\n" : ">";
  return result;
};
Renderer.prototype.renderInline = function(tokens, options, env) {
  var type3, result = "", rules = this.rules;
  for (var i = 0, len = tokens.length; i < len; i++) {
    type3 = tokens[i].type;
    if (typeof rules[type3] !== "undefined") {
      result += rules[type3](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }
  return result;
};
Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
  var result = "";
  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === "text") {
      result += tokens[i].content;
    } else if (tokens[i].type === "image") {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    }
  }
  return result;
};
Renderer.prototype.render = function(tokens, options, env) {
  var i, len, type3, result = "", rules = this.rules;
  for (i = 0, len = tokens.length; i < len; i++) {
    type3 = tokens[i].type;
    if (type3 === "inline") {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type3] !== "undefined") {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }
  return result;
};
var renderer = Renderer;
function Ruler() {
  this.__rules__ = [];
  this.__cache__ = null;
}
Ruler.prototype.__find__ = function(name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};
Ruler.prototype.__compile__ = function() {
  var self2 = this;
  var chains = [""];
  self2.__rules__.forEach(function(rule) {
    if (!rule.enabled) {
      return;
    }
    rule.alt.forEach(function(altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });
  self2.__cache__ = {};
  chains.forEach(function(chain3) {
    self2.__cache__[chain3] = [];
    self2.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      if (chain3 && rule.alt.indexOf(chain3) < 0) {
        return;
      }
      self2.__cache__[chain3].push(rule.fn);
    });
  });
};
Ruler.prototype.at = function(name, fn, options) {
  var index2 = this.__find__(name);
  var opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + name);
  }
  this.__rules__[index2].fn = fn;
  this.__rules__[index2].alt = opt.alt || [];
  this.__cache__ = null;
};
Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
  var index2 = this.__find__(beforeName);
  var opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + beforeName);
  }
  this.__rules__.splice(index2, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.after = function(afterName, ruleName, fn, options) {
  var index2 = this.__find__(afterName);
  var opt = options || {};
  if (index2 === -1) {
    throw new Error("Parser rule not found: " + afterName);
  }
  this.__rules__.splice(index2 + 1, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.push = function(ruleName, fn, options) {
  var opt = options || {};
  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.enable = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  var result = [];
  list3.forEach(function(name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler.prototype.enableOnly = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  this.__rules__.forEach(function(rule) {
    rule.enabled = false;
  });
  this.enable(list3, ignoreInvalid);
};
Ruler.prototype.disable = function(list3, ignoreInvalid) {
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  var result = [];
  list3.forEach(function(name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
Ruler.prototype.getRules = function(chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName] || [];
};
var ruler = Ruler;
var NEWLINES_RE = /\r\n?|\n/g;
var NULL_RE = /\0/g;
var normalize = function normalize2(state) {
  var str;
  str = state.src.replace(NEWLINES_RE, "\n");
  str = str.replace(NULL_RE, "�");
  state.src = str;
};
var block$1 = function block2(state) {
  var token2;
  if (state.inlineMode) {
    token2 = new state.Token("inline", "", 0);
    token2.content = state.src;
    token2.map = [0, 1];
    token2.children = [];
    state.tokens.push(token2);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};
var inline = function inline2(state) {
  var tokens = state.tokens, tok, i, l;
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === "inline") {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};
var arrayReplaceAt = utils.arrayReplaceAt;
function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}
var linkify = function linkify2(state) {
  var i, j, l, tokens, token2, currentToken, nodes, ln, text3, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
  if (!state.md.options.linkify) {
    return;
  }
  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }
    tokens = blockTokens[j].children;
    htmlLinkLevel = 0;
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];
      if (currentToken.type === "link_close") {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
          i--;
        }
        continue;
      }
      if (currentToken.type === "html_inline") {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) {
        continue;
      }
      if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
        text3 = currentToken.content;
        links = state.md.linkify.match(text3);
        nodes = [];
        level = currentToken.level;
        lastPos = 0;
        for (ln = 0; ln < links.length; ln++) {
          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) {
            continue;
          }
          urlText = links[ln].text;
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
          } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }
          pos = links[ln].index;
          if (pos > lastPos) {
            token2 = new state.Token("text", "", 0);
            token2.content = text3.slice(lastPos, pos);
            token2.level = level;
            nodes.push(token2);
          }
          token2 = new state.Token("link_open", "a", 1);
          token2.attrs = [["href", fullUrl]];
          token2.level = level++;
          token2.markup = "linkify";
          token2.info = "auto";
          nodes.push(token2);
          token2 = new state.Token("text", "", 0);
          token2.content = urlText;
          token2.level = level;
          nodes.push(token2);
          token2 = new state.Token("link_close", "a", -1);
          token2.level = --level;
          token2.markup = "linkify";
          token2.info = "auto";
          nodes.push(token2);
          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text3.length) {
          token2 = new state.Token("text", "", 0);
          token2.content = text3.slice(lastPos);
          token2.level = level;
          nodes.push(token2);
        }
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};
var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  c: "©",
  r: "®",
  p: "§",
  tm: "™"
};
function replaceFn(match4, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}
function replace_scoped(inlineTokens) {
  var i, token2, inside_autolink = 0;
  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token2 = inlineTokens[i];
    if (token2.type === "text" && !inside_autolink) {
      token2.content = token2.content.replace(SCOPED_ABBR_RE, replaceFn);
    }
    if (token2.type === "link_open" && token2.info === "auto") {
      inside_autolink--;
    }
    if (token2.type === "link_close" && token2.info === "auto") {
      inside_autolink++;
    }
  }
}
function replace_rare(inlineTokens) {
  var i, token2, inside_autolink = 0;
  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token2 = inlineTokens[i];
    if (token2.type === "text" && !inside_autolink) {
      if (RARE_RE.test(token2.content)) {
        token2.content = token2.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2");
      }
    }
    if (token2.type === "link_open" && token2.info === "auto") {
      inside_autolink--;
    }
    if (token2.type === "link_close" && token2.info === "auto") {
      inside_autolink++;
    }
  }
}
var replacements = function replace3(state) {
  var blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline") {
      continue;
    }
    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }
    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }
  }
};
var isWhiteSpace = utils.isWhiteSpace;
var isPunctChar = utils.isPunctChar;
var isMdAsciiPunct = utils.isMdAsciiPunct;
var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = "’";
function replaceAt(str, index2, ch) {
  return str.substr(0, index2) + ch + str.substr(index2 + 1);
}
function process_inlines(tokens, state) {
  var i, token2, text3, t, pos, max3, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
  stack = [];
  for (i = 0; i < tokens.length; i++) {
    token2 = tokens[i];
    thisLevel = tokens[i].level;
    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) {
        break;
      }
    }
    stack.length = j + 1;
    if (token2.type !== "text") {
      continue;
    }
    text3 = token2.content;
    pos = 0;
    max3 = text3.length;
    OUTER:
      while (pos < max3) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text3);
        if (!t) {
          break;
        }
        canOpen = canClose = true;
        pos = t.index + 1;
        isSingle = t[0] === "'";
        lastChar = 32;
        if (t.index - 1 >= 0) {
          lastChar = text3.charCodeAt(t.index - 1);
        } else {
          for (j = i - 1; j >= 0; j--) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (tokens[j].type !== "text")
              continue;
            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }
        nextChar = 32;
        if (pos < max3) {
          nextChar = text3.charCodeAt(pos);
        } else {
          for (j = i + 1; j < tokens.length; j++) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
              break;
            if (tokens[j].type !== "text")
              continue;
            nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }
        isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace(lastChar);
        isNextWhiteSpace = isWhiteSpace(nextChar);
        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }
        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }
        if (nextChar === 34 && t[0] === '"') {
          if (lastChar >= 48 && lastChar <= 57) {
            canClose = canOpen = false;
          }
        }
        if (canOpen && canClose) {
          canOpen = false;
          canClose = isNextPunctChar;
        }
        if (!canOpen && !canClose) {
          if (isSingle) {
            token2.content = replaceAt(token2.content, t.index, APOSTROPHE);
          }
          continue;
        }
        if (canClose) {
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) {
              break;
            }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }
              token2.content = replaceAt(token2.content, t.index, closeQuote);
              tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
              pos += closeQuote.length - 1;
              if (item.token === i) {
                pos += openQuote.length - 1;
              }
              text3 = token2.content;
              max3 = text3.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }
        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token2.content = replaceAt(token2.content, t.index, APOSTROPHE);
        }
      }
  }
}
var smartquotes = function smartquotes2(state) {
  var blkIdx;
  if (!state.md.options.typographer) {
    return;
  }
  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }
    process_inlines(state.tokens[blkIdx].children, state);
  }
};
function Token(type3, tag, nesting) {
  this.type = type3;
  this.tag = tag;
  this.attrs = null;
  this.map = null;
  this.nesting = nesting;
  this.level = 0;
  this.children = null;
  this.content = "";
  this.markup = "";
  this.info = "";
  this.meta = null;
  this.block = false;
  this.hidden = false;
}
Token.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;
  if (!this.attrs) {
    return -1;
  }
  attrs = this.attrs;
  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) {
      return i;
    }
  }
  return -1;
};
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [attrData];
  }
};
Token.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name), attrData = [name, value];
  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};
Token.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};
Token.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);
  if (idx < 0) {
    this.attrPush([name, value]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
  }
};
var token = Token;
function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md;
}
StateCore.prototype.Token = token;
var state_core = StateCore;
var _rules = [
  ["normalize", normalize],
  ["block", block$1],
  ["inline", inline],
  ["linkify", linkify],
  ["replacements", replacements],
  ["smartquotes", smartquotes]
];
function Core() {
  this.ruler = new ruler();
  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}
Core.prototype.process = function(state) {
  var i, l, rules;
  rules = this.ruler.getRules("");
  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};
Core.prototype.State = state_core;
var parser_core = Core;
var isSpace = utils.isSpace;
function getLine(state, line) {
  var pos = state.bMarks[line] + state.blkIndent, max3 = state.eMarks[line];
  return state.src.substr(pos, max3 - pos);
}
function escapedSplit(str) {
  var result = [], pos = 0, max3 = str.length, ch, escapes = 0, lastPos = 0, backTicked = false, lastBackTick = 0;
  ch = str.charCodeAt(pos);
  while (pos < max3) {
    if (ch === 96) {
      if (backTicked) {
        backTicked = false;
        lastBackTick = pos;
      } else if (escapes % 2 === 0) {
        backTicked = true;
        lastBackTick = pos;
      }
    } else if (ch === 124 && escapes % 2 === 0 && !backTicked) {
      result.push(str.substring(lastPos, pos));
      lastPos = pos + 1;
    }
    if (ch === 92) {
      escapes++;
    } else {
      escapes = 0;
    }
    pos++;
    if (pos === max3 && backTicked) {
      backTicked = false;
      pos = lastBackTick + 1;
    }
    ch = str.charCodeAt(pos);
  }
  result.push(str.substring(lastPos));
  return result;
}
var table = function table2(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, nextLine, columns, columnCount, token2, aligns, t, tableLines, tbodyLines;
  if (startLine + 2 > endLine) {
    return false;
  }
  nextLine = startLine + 1;
  if (state.sCount[nextLine] < state.blkIndent) {
    return false;
  }
  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  }
  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) {
    return false;
  }
  ch = state.src.charCodeAt(pos++);
  if (ch !== 124 && ch !== 45 && ch !== 58) {
    return false;
  }
  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);
    if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
      return false;
    }
    pos++;
  }
  lineText = getLine(state, startLine + 1);
  columns = lineText.split("|");
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }
    if (!/^:?-+:?$/.test(t)) {
      return false;
    }
    if (t.charCodeAt(t.length - 1) === 58) {
      aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
    } else if (t.charCodeAt(0) === 58) {
      aligns.push("left");
    } else {
      aligns.push("");
    }
  }
  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf("|") === -1) {
    return false;
  }
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  columns = escapedSplit(lineText.replace(/^\||\|$/g, ""));
  columnCount = columns.length;
  if (columnCount > aligns.length) {
    return false;
  }
  if (silent) {
    return true;
  }
  token2 = state.push("table_open", "table", 1);
  token2.map = tableLines = [startLine, 0];
  token2 = state.push("thead_open", "thead", 1);
  token2.map = [startLine, startLine + 1];
  token2 = state.push("tr_open", "tr", 1);
  token2.map = [startLine, startLine + 1];
  for (i = 0; i < columns.length; i++) {
    token2 = state.push("th_open", "th", 1);
    token2.map = [startLine, startLine + 1];
    if (aligns[i]) {
      token2.attrs = [["style", "text-align:" + aligns[i]]];
    }
    token2 = state.push("inline", "", 0);
    token2.content = columns[i].trim();
    token2.map = [startLine, startLine + 1];
    token2.children = [];
    token2 = state.push("th_close", "th", -1);
  }
  token2 = state.push("tr_close", "tr", -1);
  token2 = state.push("thead_close", "thead", -1);
  token2 = state.push("tbody_open", "tbody", 1);
  token2.map = tbodyLines = [startLine + 2, 0];
  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    lineText = getLine(state, nextLine).trim();
    if (lineText.indexOf("|") === -1) {
      break;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }
    columns = escapedSplit(lineText.replace(/^\||\|$/g, ""));
    token2 = state.push("tr_open", "tr", 1);
    for (i = 0; i < columnCount; i++) {
      token2 = state.push("td_open", "td", 1);
      if (aligns[i]) {
        token2.attrs = [["style", "text-align:" + aligns[i]]];
      }
      token2 = state.push("inline", "", 0);
      token2.content = columns[i] ? columns[i].trim() : "";
      token2.children = [];
      token2 = state.push("td_close", "td", -1);
    }
    token2 = state.push("tr_close", "tr", -1);
  }
  token2 = state.push("tbody_close", "tbody", -1);
  token2 = state.push("table_close", "table", -1);
  tableLines[1] = tbodyLines[1] = nextLine;
  state.line = nextLine;
  return true;
};
var code = function code2(state, startLine, endLine) {
  var nextLine, last2, token2;
  if (state.sCount[startLine] - state.blkIndent < 4) {
    return false;
  }
  last2 = nextLine = startLine + 1;
  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last2 = nextLine;
      continue;
    }
    break;
  }
  state.line = last2;
  token2 = state.push("code_block", "code", 0);
  token2.content = state.getLines(startLine, last2, 4 + state.blkIndent, true);
  token2.map = [startLine, state.line];
  return true;
};
var fence = function fence2(state, startLine, endLine, silent) {
  var marker2, len, params, nextLine, mem, token2, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max3 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (pos + 3 > max3) {
    return false;
  }
  marker2 = state.src.charCodeAt(pos);
  if (marker2 !== 126 && marker2 !== 96) {
    return false;
  }
  mem = pos;
  pos = state.skipChars(pos, marker2);
  len = pos - mem;
  if (len < 3) {
    return false;
  }
  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max3);
  if (marker2 === 96) {
    if (params.indexOf(String.fromCharCode(marker2)) >= 0) {
      return false;
    }
  }
  if (silent) {
    return true;
  }
  nextLine = startLine;
  for (; ; ) {
    nextLine++;
    if (nextLine >= endLine) {
      break;
    }
    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max3 = state.eMarks[nextLine];
    if (pos < max3 && state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.src.charCodeAt(pos) !== marker2) {
      continue;
    }
    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      continue;
    }
    pos = state.skipChars(pos, marker2);
    if (pos - mem < len) {
      continue;
    }
    pos = state.skipSpaces(pos);
    if (pos < max3) {
      continue;
    }
    haveEndMarker = true;
    break;
  }
  len = state.sCount[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  token2 = state.push("fence", "code", 0);
  token2.info = params;
  token2.content = state.getLines(startLine + 1, nextLine, len, true);
  token2.markup = markup;
  token2.map = [startLine, state.line];
  return true;
};
var isSpace$1 = utils.isSpace;
var blockquote = function blockquote2(state, startLine, endLine, silent) {
  var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset2, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token2, wasOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max3 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos++) !== 62) {
    return false;
  }
  if (silent) {
    return true;
  }
  initial = offset2 = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);
  if (state.src.charCodeAt(pos) === 32) {
    pos++;
    initial++;
    offset2++;
    adjustTab = false;
    spaceAfterMarker = true;
  } else if (state.src.charCodeAt(pos) === 9) {
    spaceAfterMarker = true;
    if ((state.bsCount[startLine] + offset2) % 4 === 3) {
      pos++;
      initial++;
      offset2++;
      adjustTab = false;
    } else {
      adjustTab = true;
    }
  } else {
    spaceAfterMarker = false;
  }
  oldBMarks = [state.bMarks[startLine]];
  state.bMarks[startLine] = pos;
  while (pos < max3) {
    ch = state.src.charCodeAt(pos);
    if (isSpace$1(ch)) {
      if (ch === 9) {
        offset2 += 4 - (offset2 + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
      } else {
        offset2++;
      }
    } else {
      break;
    }
    pos++;
  }
  oldBSCount = [state.bsCount[startLine]];
  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
  lastLineEmpty = pos >= max3;
  oldSCount = [state.sCount[startLine]];
  state.sCount[startLine] = offset2 - initial;
  oldTShift = [state.tShift[startLine]];
  state.tShift[startLine] = pos - state.bMarks[startLine];
  terminatorRules = state.md.block.ruler.getRules("blockquote");
  oldParentType = state.parentType;
  state.parentType = "blockquote";
  wasOutdented = false;
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent)
      wasOutdented = true;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max3 = state.eMarks[nextLine];
    if (pos >= max3) {
      break;
    }
    if (state.src.charCodeAt(pos++) === 62 && !wasOutdented) {
      initial = offset2 = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]);
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        offset2++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[nextLine] + offset2) % 4 === 3) {
          pos++;
          initial++;
          offset2++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;
      while (pos < max3) {
        ch = state.src.charCodeAt(pos);
        if (isSpace$1(ch)) {
          if (ch === 9) {
            offset2 += 4 - (offset2 + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset2++;
          }
        } else {
          break;
        }
        pos++;
      }
      lastLineEmpty = pos >= max3;
      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset2 - initial;
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }
    if (lastLineEmpty) {
      break;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      state.lineMax = nextLine;
      if (state.blkIndent !== 0) {
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }
      break;
    }
    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);
    state.sCount[nextLine] = -1;
  }
  oldIndent = state.blkIndent;
  state.blkIndent = 0;
  token2 = state.push("blockquote_open", "blockquote", 1);
  token2.markup = ">";
  token2.map = lines = [startLine, 0];
  state.md.block.tokenize(state, startLine, nextLine);
  token2 = state.push("blockquote_close", "blockquote", -1);
  token2.markup = ">";
  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;
  return true;
};
var isSpace$2 = utils.isSpace;
var hr = function hr2(state, startLine, endLine, silent) {
  var marker2, cnt, ch, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max3 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  marker2 = state.src.charCodeAt(pos++);
  if (marker2 !== 42 && marker2 !== 45 && marker2 !== 95) {
    return false;
  }
  cnt = 1;
  while (pos < max3) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker2 && !isSpace$2(ch)) {
      return false;
    }
    if (ch === marker2) {
      cnt++;
    }
  }
  if (cnt < 3) {
    return false;
  }
  if (silent) {
    return true;
  }
  state.line = startLine + 1;
  token2 = state.push("hr", "hr", 0);
  token2.map = [startLine, state.line];
  token2.markup = Array(cnt + 1).join(String.fromCharCode(marker2));
  return true;
};
var isSpace$3 = utils.isSpace;
function skipBulletListMarker(state, startLine) {
  var marker2, pos, max3, ch;
  pos = state.bMarks[startLine] + state.tShift[startLine];
  max3 = state.eMarks[startLine];
  marker2 = state.src.charCodeAt(pos++);
  if (marker2 !== 42 && marker2 !== 45 && marker2 !== 43) {
    return -1;
  }
  if (pos < max3) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$3(ch)) {
      return -1;
    }
  }
  return pos;
}
function skipOrderedListMarker(state, startLine) {
  var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max3 = state.eMarks[startLine];
  if (pos + 1 >= max3) {
    return -1;
  }
  ch = state.src.charCodeAt(pos++);
  if (ch < 48 || ch > 57) {
    return -1;
  }
  for (; ; ) {
    if (pos >= max3) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch >= 48 && ch <= 57) {
      if (pos - start >= 10) {
        return -1;
      }
      continue;
    }
    if (ch === 41 || ch === 46) {
      break;
    }
    return -1;
  }
  if (pos < max3) {
    ch = state.src.charCodeAt(pos);
    if (!isSpace$3(ch)) {
      return -1;
    }
  }
  return pos;
}
function markTightParagraphs(state, idx) {
  var i, l, level = state.level + 2;
  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}
var list = function list2(state, startLine, endLine, silent) {
  var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max3, nextLine, offset2, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token2, isTerminatingParagraph = false, tight = true;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
    return false;
  }
  if (silent && state.parentType === "paragraph") {
    if (state.tShift[startLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
    if (isTerminatingParagraph && markerValue !== 1)
      return false;
  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine])
      return false;
  }
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
  if (silent) {
    return true;
  }
  listTokIdx = state.tokens.length;
  if (isOrdered) {
    token2 = state.push("ordered_list_open", "ol", 1);
    if (markerValue !== 1) {
      token2.attrs = [["start", markerValue]];
    }
  } else {
    token2 = state.push("bullet_list_open", "ul", 1);
  }
  token2.map = listLines = [startLine, 0];
  token2.markup = String.fromCharCode(markerCharCode);
  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules("list");
  oldParentType = state.parentType;
  state.parentType = "list";
  while (nextLine < endLine) {
    pos = posAfterMarker;
    max3 = state.eMarks[nextLine];
    initial = offset2 = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
    while (pos < max3) {
      ch = state.src.charCodeAt(pos);
      if (ch === 9) {
        offset2 += 4 - (offset2 + state.bsCount[nextLine]) % 4;
      } else if (ch === 32) {
        offset2++;
      } else {
        break;
      }
      pos++;
    }
    contentStart = pos;
    if (contentStart >= max3) {
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset2 - initial;
    }
    if (indentAfterMarker > 4) {
      indentAfterMarker = 1;
    }
    indent = initial + indentAfterMarker;
    token2 = state.push("list_item_open", "li", 1);
    token2.markup = String.fromCharCode(markerCharCode);
    token2.map = itemLines = [startLine, 0];
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldSCount = state.sCount[startLine];
    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.sCount[startLine] = offset2;
    if (contentStart >= max3 && state.isEmpty(startLine + 1)) {
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, startLine, endLine, true);
    }
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldSCount;
    state.tight = oldTight;
    token2 = state.push("list_item_close", "li", -1);
    token2.markup = String.fromCharCode(markerCharCode);
    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];
    if (nextLine >= endLine) {
      break;
    }
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      break;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    }
    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
      break;
    }
  }
  if (isOrdered) {
    token2 = state.push("ordered_list_close", "ol", -1);
  } else {
    token2 = state.push("bullet_list_close", "ul", -1);
  }
  token2.markup = String.fromCharCode(markerCharCode);
  listLines[1] = nextLine;
  state.line = nextLine;
  state.parentType = oldParentType;
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }
  return true;
};
var normalizeReference = utils.normalizeReference;
var isSpace$4 = utils.isSpace;
var reference = function reference2(state, startLine, _endLine, silent) {
  var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max3 = state.eMarks[startLine], nextLine = startLine + 1;
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 91) {
    return false;
  }
  while (++pos < max3) {
    if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
      if (pos + 1 === max3) {
        return false;
      }
      if (state.src.charCodeAt(pos + 1) !== 58) {
        return false;
      }
      break;
    }
  }
  endLine = state.lineMax;
  terminatorRules = state.md.block.ruler.getRules("reference");
  oldParentType = state.parentType;
  state.parentType = "reference";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max3 = str.length;
  for (pos = 1; pos < max3; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 91) {
      return false;
    } else if (ch === 93) {
      labelEnd = pos;
      break;
    } else if (ch === 10) {
      lines++;
    } else if (ch === 92) {
      pos++;
      if (pos < max3 && str.charCodeAt(pos) === 10) {
        lines++;
      }
    }
  }
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
    return false;
  }
  for (pos = labelEnd + 2; pos < max3; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 10) {
      lines++;
    } else if (isSpace$4(ch))
      ;
    else {
      break;
    }
  }
  res = state.md.helpers.parseLinkDestination(str, pos, max3);
  if (!res.ok) {
    return false;
  }
  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) {
    return false;
  }
  pos = res.pos;
  lines += res.lines;
  destEndPos = pos;
  destEndLineNo = lines;
  start = pos;
  for (; pos < max3; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 10) {
      lines++;
    } else if (isSpace$4(ch))
      ;
    else {
      break;
    }
  }
  res = state.md.helpers.parseLinkTitle(str, pos, max3);
  if (pos < max3 && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = "";
    pos = destEndPos;
    lines = destEndLineNo;
  }
  while (pos < max3) {
    ch = str.charCodeAt(pos);
    if (!isSpace$4(ch)) {
      break;
    }
    pos++;
  }
  if (pos < max3 && str.charCodeAt(pos) !== 10) {
    if (title) {
      title = "";
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max3) {
        ch = str.charCodeAt(pos);
        if (!isSpace$4(ch)) {
          break;
        }
        pos++;
      }
    }
  }
  if (pos < max3 && str.charCodeAt(pos) !== 10) {
    return false;
  }
  label = normalizeReference(str.slice(1, labelEnd));
  if (!label) {
    return false;
  }
  if (silent) {
    return true;
  }
  if (typeof state.env.references === "undefined") {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === "undefined") {
    state.env.references[label] = {title, href};
  }
  state.parentType = oldParentType;
  state.line = startLine + lines + 1;
  return true;
};
var isSpace$5 = utils.isSpace;
var heading = function heading2(state, startLine, endLine, silent) {
  var ch, level, tmp, token2, pos = state.bMarks[startLine] + state.tShift[startLine], max3 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  ch = state.src.charCodeAt(pos);
  if (ch !== 35 || pos >= max3) {
    return false;
  }
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 35 && pos < max3 && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }
  if (level > 6 || pos < max3 && !isSpace$5(ch)) {
    return false;
  }
  if (silent) {
    return true;
  }
  max3 = state.skipSpacesBack(max3, pos);
  tmp = state.skipCharsBack(max3, 35, pos);
  if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
    max3 = tmp;
  }
  state.line = startLine + 1;
  token2 = state.push("heading_open", "h" + String(level), 1);
  token2.markup = "########".slice(0, level);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = state.src.slice(pos, max3).trim();
  token2.map = [startLine, state.line];
  token2.children = [];
  token2 = state.push("heading_close", "h" + String(level), -1);
  token2.markup = "########".slice(0, level);
  return true;
};
var lheading = function lheading2(state, startLine, endLine) {
  var content, terminate, i, l, token2, pos, max3, level, marker2, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  oldParentType = state.parentType;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max3 = state.eMarks[nextLine];
      if (pos < max3) {
        marker2 = state.src.charCodeAt(pos);
        if (marker2 === 45 || marker2 === 61) {
          pos = state.skipChars(pos, marker2);
          pos = state.skipSpaces(pos);
          if (pos >= max3) {
            level = marker2 === 61 ? 1 : 2;
            break;
          }
        }
      }
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  if (!level) {
    return false;
  }
  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine + 1;
  token2 = state.push("heading_open", "h" + String(level), 1);
  token2.markup = String.fromCharCode(marker2);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = content;
  token2.map = [startLine, state.line - 1];
  token2.children = [];
  token2 = state.push("heading_close", "h" + String(level), -1);
  token2.markup = String.fromCharCode(marker2);
  state.parentType = oldParentType;
  return true;
};
var html_blocks = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "meta",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
var unquoted = "[^\"'=<>`\\x00-\\x20]+";
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';
var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
var processing = "<[?].*?[?]>";
var declaration = "<![A-Z]+\\s+[^>]*>";
var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
var HTML_TAG_RE_1 = HTML_TAG_RE;
var HTML_OPEN_CLOSE_TAG_RE_1 = HTML_OPEN_CLOSE_TAG_RE;
var html_re = {
  HTML_TAG_RE: HTML_TAG_RE_1,
  HTML_OPEN_CLOSE_TAG_RE: HTML_OPEN_CLOSE_TAG_RE_1
};
var HTML_OPEN_CLOSE_TAG_RE$1 = html_re.HTML_OPEN_CLOSE_TAG_RE;
var HTML_SEQUENCES = [
  [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + html_blocks.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(HTML_OPEN_CLOSE_TAG_RE$1.source + "\\s*$"), /^$/, false]
];
var html_block = function html_block2(state, startLine, endLine, silent) {
  var i, nextLine, token2, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max3 = state.eMarks[startLine];
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  if (!state.md.options.html) {
    return false;
  }
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  lineText = state.src.slice(pos, max3);
  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) {
      break;
    }
  }
  if (i === HTML_SEQUENCES.length) {
    return false;
  }
  if (silent) {
    return HTML_SEQUENCES[i][2];
  }
  nextLine = startLine + 1;
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max3 = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max3);
      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) {
          nextLine++;
        }
        break;
      }
    }
  }
  state.line = nextLine;
  token2 = state.push("html_block", "", 0);
  token2.map = [startLine, nextLine];
  token2.content = state.getLines(startLine, nextLine, state.blkIndent, true);
  return true;
};
var paragraph = function paragraph2(state, startLine) {
  var content, terminate, i, l, token2, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
  oldParentType = state.parentType;
  state.parentType = "paragraph";
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    }
    if (state.sCount[nextLine] < 0) {
      continue;
    }
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
  }
  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine;
  token2 = state.push("paragraph_open", "p", 1);
  token2.map = [startLine, state.line];
  token2 = state.push("inline", "", 0);
  token2.content = content;
  token2.map = [startLine, state.line];
  token2.children = [];
  token2 = state.push("paragraph_close", "p", -1);
  state.parentType = oldParentType;
  return true;
};
var isSpace$6 = utils.isSpace;
function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset2, indent_found;
  this.src = src;
  this.md = md;
  this.env = env;
  this.tokens = tokens;
  this.bMarks = [];
  this.eMarks = [];
  this.tShift = [];
  this.sCount = [];
  this.bsCount = [];
  this.blkIndent = 0;
  this.line = 0;
  this.lineMax = 0;
  this.tight = false;
  this.ddIndent = -1;
  this.listIndent = -1;
  this.parentType = "root";
  this.level = 0;
  this.result = "";
  s = this.src;
  indent_found = false;
  for (start = pos = indent = offset2 = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);
    if (!indent_found) {
      if (isSpace$6(ch)) {
        indent++;
        if (ch === 9) {
          offset2 += 4 - offset2 % 4;
        } else {
          offset2++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }
    if (ch === 10 || pos === len - 1) {
      if (ch !== 10) {
        pos++;
      }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset2);
      this.bsCount.push(0);
      indent_found = false;
      indent = 0;
      offset2 = 0;
      start = pos + 1;
    }
  }
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);
  this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.push = function(type3, tag, nesting) {
  var token$1 = new token(type3, tag, nesting);
  token$1.block = true;
  if (nesting < 0)
    this.level--;
  token$1.level = this.level;
  if (nesting > 0)
    this.level++;
  this.tokens.push(token$1);
  return token$1;
};
StateBlock.prototype.isEmpty = function isEmpty3(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max3 = this.lineMax; from < max3; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;
  for (var max3 = this.src.length; pos < max3; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace$6(ch)) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min3) {
  if (pos <= min3) {
    return pos;
  }
  while (pos > min3) {
    if (!isSpace$6(this.src.charCodeAt(--pos))) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.skipChars = function skipChars(pos, code3) {
  for (var max3 = this.src.length; pos < max3; pos++) {
    if (this.src.charCodeAt(pos) !== code3) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code3, min3) {
  if (pos <= min3) {
    return pos;
  }
  while (pos > min3) {
    if (code3 !== this.src.charCodeAt(--pos)) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, lineIndent, ch, first, last2, queue, lineStart, line = begin;
  if (begin >= end) {
    return "";
  }
  queue = new Array(end - begin);
  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];
    if (line + 1 < end || keepLastLF) {
      last2 = this.eMarks[line] + 1;
    } else {
      last2 = this.eMarks[line];
    }
    while (first < last2 && lineIndent < indent) {
      ch = this.src.charCodeAt(first);
      if (isSpace$6(ch)) {
        if (ch === 9) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        lineIndent++;
      } else {
        break;
      }
      first++;
    }
    if (lineIndent > indent) {
      queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last2);
    } else {
      queue[i] = this.src.slice(first, last2);
    }
  }
  return queue.join("");
};
StateBlock.prototype.Token = token;
var state_block = StateBlock;
var _rules$1 = [
  ["table", table, ["paragraph", "reference"]],
  ["code", code],
  ["fence", fence, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", blockquote, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", hr, ["paragraph", "reference", "blockquote", "list"]],
  ["list", list, ["paragraph", "reference", "blockquote"]],
  ["reference", reference],
  ["heading", heading, ["paragraph", "reference", "blockquote"]],
  ["lheading", lheading],
  ["html_block", html_block, ["paragraph", "reference", "blockquote"]],
  ["paragraph", paragraph]
];
function ParserBlock() {
  this.ruler = new ruler();
  for (var i = 0; i < _rules$1.length; i++) {
    this.ruler.push(_rules$1[i][0], _rules$1[i][1], {alt: (_rules$1[i][2] || []).slice()});
  }
}
ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
  var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }
    if (state.sCount[line] < state.blkIndent) {
      break;
    }
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }
    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) {
        break;
      }
    }
    state.tight = !hasEmptyLines;
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }
    line = state.line;
    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};
ParserBlock.prototype.parse = function(src, md, env, outTokens) {
  var state;
  if (!src) {
    return;
  }
  state = new this.State(src, md, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};
ParserBlock.prototype.State = state_block;
var parser_block = ParserBlock;
function isTerminatorChar(ch) {
  switch (ch) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
var text = function text2(state, silent) {
  var pos = state.pos;
  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }
  if (pos === state.pos) {
    return false;
  }
  if (!silent) {
    state.pending += state.src.slice(state.pos, pos);
  }
  state.pos = pos;
  return true;
};
var isSpace$7 = utils.isSpace;
var newline = function newline2(state, silent) {
  var pmax, max3, pos = state.pos;
  if (state.src.charCodeAt(pos) !== 10) {
    return false;
  }
  pmax = state.pending.length - 1;
  max3 = state.posMax;
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
        state.pending = state.pending.replace(/ +$/, "");
        state.push("hardbreak", "br", 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push("softbreak", "br", 0);
      }
    } else {
      state.push("softbreak", "br", 0);
    }
  }
  pos++;
  while (pos < max3 && isSpace$7(state.src.charCodeAt(pos))) {
    pos++;
  }
  state.pos = pos;
  return true;
};
var isSpace$8 = utils.isSpace;
var ESCAPED = [];
for (var i = 0; i < 256; i++) {
  ESCAPED.push(0);
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
  ESCAPED[ch.charCodeAt(0)] = 1;
});
var _escape = function escape2(state, silent) {
  var ch, pos = state.pos, max3 = state.posMax;
  if (state.src.charCodeAt(pos) !== 92) {
    return false;
  }
  pos++;
  if (pos < max3) {
    ch = state.src.charCodeAt(pos);
    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) {
        state.pending += state.src[pos];
      }
      state.pos += 2;
      return true;
    }
    if (ch === 10) {
      if (!silent) {
        state.push("hardbreak", "br", 0);
      }
      pos++;
      while (pos < max3) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace$8(ch)) {
          break;
        }
        pos++;
      }
      state.pos = pos;
      return true;
    }
  }
  if (!silent) {
    state.pending += "\\";
  }
  state.pos++;
  return true;
};
var backticks = function backtick(state, silent) {
  var start, max3, marker2, matchStart, matchEnd, token2, pos = state.pos, ch = state.src.charCodeAt(pos);
  if (ch !== 96) {
    return false;
  }
  start = pos;
  pos++;
  max3 = state.posMax;
  while (pos < max3 && state.src.charCodeAt(pos) === 96) {
    pos++;
  }
  marker2 = state.src.slice(start, pos);
  matchStart = matchEnd = pos;
  while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
    matchEnd = matchStart + 1;
    while (matchEnd < max3 && state.src.charCodeAt(matchEnd) === 96) {
      matchEnd++;
    }
    if (matchEnd - matchStart === marker2.length) {
      if (!silent) {
        token2 = state.push("code_inline", "code", 0);
        token2.markup = marker2;
        token2.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      state.pos = matchEnd;
      return true;
    }
  }
  if (!silent) {
    state.pending += marker2;
  }
  state.pos += marker2.length;
  return true;
};
var tokenize = function strikethrough(state, silent) {
  var i, scanned, token2, len, ch, start = state.pos, marker2 = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker2 !== 126) {
    return false;
  }
  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker2);
  if (len < 2) {
    return false;
  }
  if (len % 2) {
    token2 = state.push("text", "", 0);
    token2.content = ch;
    len--;
  }
  for (i = 0; i < len; i += 2) {
    token2 = state.push("text", "", 0);
    token2.content = ch + ch;
    state.delimiters.push({
      marker: marker2,
      length: 0,
      jump: i,
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
};
function postProcess(state, delimiters) {
  var i, j, startDelim, endDelim, token2, loneMarkers = [], max3 = delimiters.length;
  for (i = 0; i < max3; i++) {
    startDelim = delimiters[i];
    if (startDelim.marker !== 126) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    token2 = state.tokens[startDelim.token];
    token2.type = "s_open";
    token2.tag = "s";
    token2.nesting = 1;
    token2.markup = "~~";
    token2.content = "";
    token2 = state.tokens[endDelim.token];
    token2.type = "s_close";
    token2.tag = "s";
    token2.nesting = -1;
    token2.markup = "~~";
    token2.content = "";
    if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
      loneMarkers.push(endDelim.token - 1);
    }
  }
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;
    while (j < state.tokens.length && state.tokens[j].type === "s_close") {
      j++;
    }
    j--;
    if (i !== j) {
      token2 = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token2;
    }
  }
}
var postProcess_1 = function strikethrough2(state) {
  var curr, tokens_meta = state.tokens_meta, max3 = state.tokens_meta.length;
  postProcess(state, state.delimiters);
  for (curr = 0; curr < max3; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};
var strikethrough3 = {
  tokenize,
  postProcess: postProcess_1
};
var tokenize$1 = function emphasis(state, silent) {
  var i, scanned, token2, start = state.pos, marker2 = state.src.charCodeAt(start);
  if (silent) {
    return false;
  }
  if (marker2 !== 95 && marker2 !== 42) {
    return false;
  }
  scanned = state.scanDelims(state.pos, marker2 === 42);
  for (i = 0; i < scanned.length; i++) {
    token2 = state.push("text", "", 0);
    token2.content = String.fromCharCode(marker2);
    state.delimiters.push({
      marker: marker2,
      length: scanned.length,
      jump: i,
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }
  state.pos += scanned.length;
  return true;
};
function postProcess$1(state, delimiters) {
  var i, startDelim, endDelim, token2, ch, isStrong, max3 = delimiters.length;
  for (i = max3 - 1; i >= 0; i--) {
    startDelim = delimiters[i];
    if (startDelim.marker !== 95 && startDelim.marker !== 42) {
      continue;
    }
    if (startDelim.end === -1) {
      continue;
    }
    endDelim = delimiters[startDelim.end];
    isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1 && delimiters[i - 1].marker === startDelim.marker;
    ch = String.fromCharCode(startDelim.marker);
    token2 = state.tokens[startDelim.token];
    token2.type = isStrong ? "strong_open" : "em_open";
    token2.tag = isStrong ? "strong" : "em";
    token2.nesting = 1;
    token2.markup = isStrong ? ch + ch : ch;
    token2.content = "";
    token2 = state.tokens[endDelim.token];
    token2.type = isStrong ? "strong_close" : "em_close";
    token2.tag = isStrong ? "strong" : "em";
    token2.nesting = -1;
    token2.markup = isStrong ? ch + ch : ch;
    token2.content = "";
    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = "";
      state.tokens[delimiters[startDelim.end + 1].token].content = "";
      i--;
    }
  }
}
var postProcess_1$1 = function emphasis2(state) {
  var curr, tokens_meta = state.tokens_meta, max3 = state.tokens_meta.length;
  postProcess$1(state, state.delimiters);
  for (curr = 0; curr < max3; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess$1(state, tokens_meta[curr].delimiters);
    }
  }
};
var emphasis3 = {
  tokenize: tokenize$1,
  postProcess: postProcess_1$1
};
var normalizeReference$1 = utils.normalizeReference;
var isSpace$9 = utils.isSpace;
var link = function link2(state, silent) {
  var attrs, code3, label, labelEnd, labelStart, pos, res, ref, title, token2, href = "", oldPos = state.pos, max3 = state.posMax, start = state.pos, parseReference = true;
  if (state.src.charCodeAt(state.pos) !== 91) {
    return false;
  }
  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max3 && state.src.charCodeAt(pos) === 40) {
    parseReference = false;
    pos++;
    for (; pos < max3; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace$9(code3) && code3 !== 10) {
        break;
      }
    }
    if (pos >= max3) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
    }
    start = pos;
    for (; pos < max3; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace$9(code3) && code3 !== 10) {
        break;
      }
    }
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max3 && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      for (; pos < max3; pos++) {
        code3 = state.src.charCodeAt(pos);
        if (!isSpace$9(code3) && code3 !== 10) {
          break;
        }
      }
    } else {
      title = "";
    }
    if (pos >= max3 || state.src.charCodeAt(pos) !== 41) {
      parseReference = true;
    }
    pos++;
  }
  if (parseReference) {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max3 && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref = state.env.references[normalizeReference$1(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;
    token2 = state.push("link_open", "a", 1);
    token2.attrs = attrs = [["href", href]];
    if (title) {
      attrs.push(["title", title]);
    }
    state.md.inline.tokenize(state);
    token2 = state.push("link_close", "a", -1);
  }
  state.pos = pos;
  state.posMax = max3;
  return true;
};
var normalizeReference$2 = utils.normalizeReference;
var isSpace$a = utils.isSpace;
var image$1 = function image2(state, silent) {
  var attrs, code3, content, label, labelEnd, labelStart, pos, ref, res, title, token2, tokens, start, href = "", oldPos = state.pos, max3 = state.posMax;
  if (state.src.charCodeAt(state.pos) !== 33) {
    return false;
  }
  if (state.src.charCodeAt(state.pos + 1) !== 91) {
    return false;
  }
  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max3 && state.src.charCodeAt(pos) === 40) {
    pos++;
    for (; pos < max3; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace$a(code3) && code3 !== 10) {
        break;
      }
    }
    if (pos >= max3) {
      return false;
    }
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = "";
      }
    }
    start = pos;
    for (; pos < max3; pos++) {
      code3 = state.src.charCodeAt(pos);
      if (!isSpace$a(code3) && code3 !== 10) {
        break;
      }
    }
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max3 && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      for (; pos < max3; pos++) {
        code3 = state.src.charCodeAt(pos);
        if (!isSpace$a(code3) && code3 !== 10) {
          break;
        }
      }
    } else {
      title = "";
    }
    if (pos >= max3 || state.src.charCodeAt(pos) !== 41) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    if (typeof state.env.references === "undefined") {
      return false;
    }
    if (pos < max3 && state.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }
    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }
    ref = state.env.references[normalizeReference$2(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);
    state.md.inline.parse(content, state.md, state.env, tokens = []);
    token2 = state.push("image", "img", 0);
    token2.attrs = attrs = [["src", href], ["alt", ""]];
    token2.children = tokens;
    token2.content = content;
    if (title) {
      attrs.push(["title", title]);
    }
  }
  state.pos = pos;
  state.posMax = max3;
  return true;
};
var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var AUTOLINK_RE = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
var autolink = function autolink2(state, silent) {
  var tail2, linkMatch, emailMatch, url, fullUrl, token2, pos = state.pos;
  if (state.src.charCodeAt(pos) !== 60) {
    return false;
  }
  tail2 = state.src.slice(pos);
  if (tail2.indexOf(">") < 0) {
    return false;
  }
  if (AUTOLINK_RE.test(tail2)) {
    linkMatch = tail2.match(AUTOLINK_RE);
    url = linkMatch[0].slice(1, -1);
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "autolink";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "autolink";
      token2.info = "auto";
    }
    state.pos += linkMatch[0].length;
    return true;
  }
  if (EMAIL_RE.test(tail2)) {
    emailMatch = tail2.match(EMAIL_RE);
    url = emailMatch[0].slice(1, -1);
    fullUrl = state.md.normalizeLink("mailto:" + url);
    if (!state.md.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      token2 = state.push("link_open", "a", 1);
      token2.attrs = [["href", fullUrl]];
      token2.markup = "autolink";
      token2.info = "auto";
      token2 = state.push("text", "", 0);
      token2.content = state.md.normalizeLinkText(url);
      token2 = state.push("link_close", "a", -1);
      token2.markup = "autolink";
      token2.info = "auto";
    }
    state.pos += emailMatch[0].length;
    return true;
  }
  return false;
};
var HTML_TAG_RE$1 = html_re.HTML_TAG_RE;
function isLetter(ch) {
  var lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
var html_inline = function html_inline2(state, silent) {
  var ch, match4, max3, token2, pos = state.pos;
  if (!state.md.options.html) {
    return false;
  }
  max3 = state.posMax;
  if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max3) {
    return false;
  }
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
    return false;
  }
  match4 = state.src.slice(pos).match(HTML_TAG_RE$1);
  if (!match4) {
    return false;
  }
  if (!silent) {
    token2 = state.push("html_inline", "", 0);
    token2.content = state.src.slice(pos, pos + match4[0].length);
  }
  state.pos += match4[0].length;
  return true;
};
var has$3 = utils.has;
var isValidEntityCode = utils.isValidEntityCode;
var fromCodePoint = utils.fromCodePoint;
var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
var entity = function entity2(state, silent) {
  var ch, code3, match4, pos = state.pos, max3 = state.posMax;
  if (state.src.charCodeAt(pos) !== 38) {
    return false;
  }
  if (pos + 1 < max3) {
    ch = state.src.charCodeAt(pos + 1);
    if (ch === 35) {
      match4 = state.src.slice(pos).match(DIGITAL_RE);
      if (match4) {
        if (!silent) {
          code3 = match4[1][0].toLowerCase() === "x" ? parseInt(match4[1].slice(1), 16) : parseInt(match4[1], 10);
          state.pending += isValidEntityCode(code3) ? fromCodePoint(code3) : fromCodePoint(65533);
        }
        state.pos += match4[0].length;
        return true;
      }
    } else {
      match4 = state.src.slice(pos).match(NAMED_RE);
      if (match4) {
        if (has$3(entities, match4[1])) {
          if (!silent) {
            state.pending += entities[match4[1]];
          }
          state.pos += match4[0].length;
          return true;
        }
      }
    }
  }
  if (!silent) {
    state.pending += "&";
  }
  state.pos++;
  return true;
};
function processDelimiters(state, delimiters) {
  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max3 = delimiters.length;
  for (closerIdx = 0; closerIdx < max3; closerIdx++) {
    closer = delimiters[closerIdx];
    closer.length = closer.length || 0;
    if (!closer.close)
      continue;
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [-1, -1, -1];
    }
    minOpenerIdx = openersBottom[closer.marker][closer.length % 3];
    newMinOpenerIdx = -1;
    openerIdx = closerIdx - closer.jump - 1;
    for (; openerIdx > minOpenerIdx; openerIdx -= opener.jump + 1) {
      opener = delimiters[openerIdx];
      if (opener.marker !== closer.marker)
        continue;
      if (newMinOpenerIdx === -1)
        newMinOpenerIdx = openerIdx;
      if (opener.open && opener.end < 0 && opener.level === closer.level) {
        isOddMatch = false;
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }
        if (!isOddMatch) {
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? delimiters[openerIdx - 1].jump + 1 : 0;
          closer.jump = closerIdx - openerIdx + lastJump;
          closer.open = false;
          opener.end = closerIdx;
          opener.jump = lastJump;
          opener.close = false;
          newMinOpenerIdx = -1;
          break;
        }
      }
    }
    if (newMinOpenerIdx !== -1) {
      openersBottom[closer.marker][(closer.length || 0) % 3] = newMinOpenerIdx;
    }
  }
}
var balance_pairs = function link_pairs(state) {
  var curr, tokens_meta = state.tokens_meta, max3 = state.tokens_meta.length;
  processDelimiters(state, state.delimiters);
  for (curr = 0; curr < max3; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(state, tokens_meta[curr].delimiters);
    }
  }
};
var text_collapse = function text_collapse2(state) {
  var curr, last2, level = 0, tokens = state.tokens, max3 = state.tokens.length;
  for (curr = last2 = 0; curr < max3; curr++) {
    if (tokens[curr].nesting < 0)
      level--;
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0)
      level++;
    if (tokens[curr].type === "text" && curr + 1 < max3 && tokens[curr + 1].type === "text") {
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last2) {
        tokens[last2] = tokens[curr];
      }
      last2++;
    }
  }
  if (curr !== last2) {
    tokens.length = last2;
  }
};
var isWhiteSpace$1 = utils.isWhiteSpace;
var isPunctChar$1 = utils.isPunctChar;
var isMdAsciiPunct$1 = utils.isMdAsciiPunct;
function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = "";
  this.pendingLevel = 0;
  this.cache = {};
  this.delimiters = [];
  this._prev_delimiters = [];
}
StateInline.prototype.pushPending = function() {
  var token$1 = new token("text", "", 0);
  token$1.content = this.pending;
  token$1.level = this.pendingLevel;
  this.tokens.push(token$1);
  this.pending = "";
  return token$1;
};
StateInline.prototype.push = function(type3, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }
  var token$1 = new token(type3, tag, nesting);
  var token_meta = null;
  if (nesting < 0) {
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }
  token$1.level = this.level;
  if (nesting > 0) {
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = {delimiters: this.delimiters};
  }
  this.pendingLevel = this.level;
  this.tokens.push(token$1);
  this.tokens_meta.push(token_meta);
  return token$1;
};
StateInline.prototype.scanDelims = function(start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max3 = this.posMax, marker2 = this.src.charCodeAt(start);
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
  while (pos < max3 && this.src.charCodeAt(pos) === marker2) {
    pos++;
  }
  count = pos - start;
  nextChar = pos < max3 ? this.src.charCodeAt(pos) : 32;
  isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));
  isLastWhiteSpace = isWhiteSpace$1(lastChar);
  isNextWhiteSpace = isWhiteSpace$1(nextChar);
  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }
  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }
  if (!canSplitWord) {
    can_open = left_flanking && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking || isNextPunctChar);
  } else {
    can_open = left_flanking;
    can_close = right_flanking;
  }
  return {
    can_open,
    can_close,
    length: count
  };
};
StateInline.prototype.Token = token;
var state_inline = StateInline;
var _rules$2 = [
  ["text", text],
  ["newline", newline],
  ["escape", _escape],
  ["backticks", backticks],
  ["strikethrough", strikethrough3.tokenize],
  ["emphasis", emphasis3.tokenize],
  ["link", link],
  ["image", image$1],
  ["autolink", autolink],
  ["html_inline", html_inline],
  ["entity", entity]
];
var _rules2 = [
  ["balance_pairs", balance_pairs],
  ["strikethrough", strikethrough3.postProcess],
  ["emphasis", emphasis3.postProcess],
  ["text_collapse", text_collapse]
];
function ParserInline() {
  var i;
  this.ruler = new ruler();
  for (i = 0; i < _rules$2.length; i++) {
    this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
  }
  this.ruler2 = new ruler();
  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}
ParserInline.prototype.skipToken = function(state) {
  var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache2 = state.cache;
  if (typeof cache2[pos] !== "undefined") {
    state.pos = cache2[pos];
    return;
  }
  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      state.level++;
      ok = rules[i](state, true);
      state.level--;
      if (ok) {
        break;
      }
    }
  } else {
    state.pos = state.posMax;
  }
  if (!ok) {
    state.pos++;
  }
  cache2[pos] = state.pos;
};
ParserInline.prototype.tokenize = function(state) {
  var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
  while (state.pos < end) {
    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) {
          break;
        }
      }
    }
    if (ok) {
      if (state.pos >= end) {
        break;
      }
      continue;
    }
    state.pending += state.src[state.pos++];
  }
  if (state.pending) {
    state.pushPending();
  }
};
ParserInline.prototype.parse = function(str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);
  this.tokenize(state);
  rules = this.ruler2.getRules("");
  len = rules.length;
  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};
ParserInline.prototype.State = state_inline;
var parser_inline = ParserInline;
var re = function(opts) {
  var re2 = {};
  re2.src_Any = regex$1.source;
  re2.src_Cc = regex$2.source;
  re2.src_Z = regex$4.source;
  re2.src_P = regex.source;
  re2.src_ZPCc = [re2.src_Z, re2.src_P, re2.src_Cc].join("|");
  re2.src_ZCc = [re2.src_Z, re2.src_Cc].join("|");
  var text_separators = "[><｜]";
  re2.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re2.src_ZPCc + ")" + re2.src_Any + ")";
  re2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  re2.src_auth = "(?:(?:(?!" + re2.src_ZCc + "|[@/\\[\\]()]).)+@)?";
  re2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
  re2.src_host_terminator = "(?=$|" + text_separators + "|" + re2.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re2.src_ZPCc + "))";
  re2.src_path = "(?:[/?#](?:(?!" + re2.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + re2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re2.src_ZCc + "|[']).)+\\'|\\'(?=" + re2.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + re2.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + re2.src_ZCc + ").|\\!(?!" + re2.src_ZCc + "|[!]).|\\?(?!" + re2.src_ZCc + "|[?]).)+|\\/)?";
  re2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re2.src_xn = "xn--[a-z0-9\\-]{1,59}";
  re2.src_domain_root = "(?:" + re2.src_xn + "|" + re2.src_pseudo_letter + "{1,63})";
  re2.src_domain = "(?:" + re2.src_xn + "|(?:" + re2.src_pseudo_letter + ")|(?:" + re2.src_pseudo_letter + "(?:-|" + re2.src_pseudo_letter + "){0,61}" + re2.src_pseudo_letter + "))";
  re2.src_host = "(?:(?:(?:(?:" + re2.src_domain + ")\\.)*" + re2.src_domain + "))";
  re2.tpl_host_fuzzy = "(?:" + re2.src_ip4 + "|(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%)))";
  re2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%))";
  re2.src_host_strict = re2.src_host + re2.src_host_terminator;
  re2.tpl_host_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_host_terminator;
  re2.src_host_port_strict = re2.src_host + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_no_ip_fuzzy_strict = re2.tpl_host_no_ip_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re2.src_ZPCc + "|>|$))";
  re2.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re2.src_ZCc + ")(" + re2.src_email_name + "@" + re2.tpl_host_fuzzy_strict + ")";
  re2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re2.src_ZPCc + "))((?![$+<=>^`|｜])" + re2.tpl_host_port_fuzzy_strict + re2.src_path + ")";
  re2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re2.src_ZPCc + "))((?![$+<=>^`|｜])" + re2.tpl_host_port_no_ip_fuzzy_strict + re2.src_path + ")";
  return re2;
};
function assign$1(obj) {
  var sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === "[object String]";
}
function isObject(obj) {
  return _class(obj) === "[object Object]";
}
function isRegExp(obj) {
  return _class(obj) === "[object RegExp]";
}
function isFunction(obj) {
  return _class(obj) === "[object Function]";
}
function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var defaultOptions$1 = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function(acc, k) {
    return acc || defaultOptions$1.hasOwnProperty(k);
  }, false);
}
var defaultSchemas = {
  "http:": {
    validate: function(text3, pos, self2) {
      var tail2 = text3.slice(pos);
      if (!self2.re.http) {
        self2.re.http = new RegExp("^\\/\\/" + self2.re.src_auth + self2.re.src_host_port_strict + self2.re.src_path, "i");
      }
      if (self2.re.http.test(tail2)) {
        return tail2.match(self2.re.http)[0].length;
      }
      return 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(text3, pos, self2) {
      var tail2 = text3.slice(pos);
      if (!self2.re.no_http) {
        self2.re.no_http = new RegExp("^" + self2.re.src_auth + "(?:localhost|(?:(?:" + self2.re.src_domain + ")\\.)+" + self2.re.src_domain_root + ")" + self2.re.src_port + self2.re.src_host_terminator + self2.re.src_path, "i");
      }
      if (self2.re.no_http.test(tail2)) {
        if (pos >= 3 && text3[pos - 3] === ":") {
          return 0;
        }
        if (pos >= 3 && text3[pos - 3] === "/") {
          return 0;
        }
        return tail2.match(self2.re.no_http)[0].length;
      }
      return 0;
    }
  },
  "mailto:": {
    validate: function(text3, pos, self2) {
      var tail2 = text3.slice(pos);
      if (!self2.re.mailto) {
        self2.re.mailto = new RegExp("^" + self2.re.src_email_name + "@" + self2.re.src_host_strict, "i");
      }
      if (self2.re.mailto.test(tail2)) {
        return tail2.match(self2.re.mailto)[0].length;
      }
      return 0;
    }
  }
};
var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function resetScanCache(self2) {
  self2.__index__ = -1;
  self2.__text_cache__ = "";
}
function createValidator(re2) {
  return function(text3, pos) {
    var tail2 = text3.slice(pos);
    if (re2.test(tail2)) {
      return tail2.match(re2)[0].length;
    }
    return 0;
  };
}
function createNormalizer() {
  return function(match4, self2) {
    self2.normalize(match4);
  };
}
function compile(self2) {
  var re$1 = self2.re = re(self2.__opts__);
  var tlds2 = self2.__tlds__.slice();
  self2.onCompile();
  if (!self2.__tlds_replaced__) {
    tlds2.push(tlds_2ch_src_re);
  }
  tlds2.push(re$1.src_xn);
  re$1.src_tlds = tlds2.join("|");
  function untpl(tpl) {
    return tpl.replace("%TLDS%", re$1.src_tlds);
  }
  re$1.email_fuzzy = RegExp(untpl(re$1.tpl_email_fuzzy), "i");
  re$1.link_fuzzy = RegExp(untpl(re$1.tpl_link_fuzzy), "i");
  re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), "i");
  re$1.host_fuzzy_test = RegExp(untpl(re$1.tpl_host_fuzzy_test), "i");
  var aliases = [];
  self2.__compiled__ = {};
  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }
  Object.keys(self2.__schemas__).forEach(function(name) {
    var val = self2.__schemas__[name];
    if (val === null) {
      return;
    }
    var compiled = {validate: null, link: null};
    self2.__compiled__[name] = compiled;
    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }
      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }
      return;
    }
    if (isString(val)) {
      aliases.push(name);
      return;
    }
    schemaError(name, val);
  });
  aliases.forEach(function(alias) {
    if (!self2.__compiled__[self2.__schemas__[alias]]) {
      return;
    }
    self2.__compiled__[alias].validate = self2.__compiled__[self2.__schemas__[alias]].validate;
    self2.__compiled__[alias].normalize = self2.__compiled__[self2.__schemas__[alias]].normalize;
  });
  self2.__compiled__[""] = {validate: null, normalize: createNormalizer()};
  var slist = Object.keys(self2.__compiled__).filter(function(name) {
    return name.length > 0 && self2.__compiled__[name];
  }).map(escapeRE).join("|");
  self2.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re$1.src_ZPCc + "))(" + slist + ")", "i");
  self2.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re$1.src_ZPCc + "))(" + slist + ")", "ig");
  self2.re.pretest = RegExp("(" + self2.re.schema_test.source + ")|(" + self2.re.host_fuzzy_test.source + ")|@", "i");
  resetScanCache(self2);
}
function Match(self2, shift2) {
  var start = self2.__index__, end = self2.__last_index__, text3 = self2.__text_cache__.slice(start, end);
  this.schema = self2.__schema__.toLowerCase();
  this.index = start + shift2;
  this.lastIndex = end + shift2;
  this.raw = text3;
  this.text = text3;
  this.url = text3;
}
function createMatch(self2, shift2) {
  var match4 = new Match(self2, shift2);
  self2.__compiled__[match4.schema].normalize(match4, self2);
  return match4;
}
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }
  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }
  this.__opts__ = assign$1({}, defaultOptions$1, options);
  this.__index__ = -1;
  this.__last_index__ = -1;
  this.__schema__ = "";
  this.__text_cache__ = "";
  this.__schemas__ = assign$1({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
LinkifyIt.prototype.add = function add3(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
LinkifyIt.prototype.set = function set4(options) {
  this.__opts__ = assign$1(this.__opts__, options);
  return this;
};
LinkifyIt.prototype.test = function test3(text3) {
  this.__text_cache__ = text3;
  this.__index__ = -1;
  if (!text3.length) {
    return false;
  }
  var m, ml, me, len, shift2, next, re2, tld_pos, at_pos;
  if (this.re.schema_test.test(text3)) {
    re2 = this.re.schema_search;
    re2.lastIndex = 0;
    while ((m = re2.exec(text3)) !== null) {
      len = this.testSchemaAt(text3, m[2], re2.lastIndex);
      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
    tld_pos = text3.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text3.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift2 = ml.index + ml[1].length;
          if (this.__index__ < 0 || shift2 < this.__index__) {
            this.__schema__ = "";
            this.__index__ = shift2;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
    at_pos = text3.indexOf("@");
    if (at_pos >= 0) {
      if ((me = text3.match(this.re.email_fuzzy)) !== null) {
        shift2 = me.index + me[1].length;
        next = me.index + me[0].length;
        if (this.__index__ < 0 || shift2 < this.__index__ || shift2 === this.__index__ && next > this.__last_index__) {
          this.__schema__ = "mailto:";
          this.__index__ = shift2;
          this.__last_index__ = next;
        }
      }
    }
  }
  return this.__index__ >= 0;
};
LinkifyIt.prototype.pretest = function pretest(text3) {
  return this.re.pretest.test(text3);
};
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text3, schema, pos) {
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text3, pos, this);
};
LinkifyIt.prototype.match = function match3(text3) {
  var shift2 = 0, result = [];
  if (this.__index__ >= 0 && this.__text_cache__ === text3) {
    result.push(createMatch(this, shift2));
    shift2 = this.__last_index__;
  }
  var tail2 = shift2 ? text3.slice(shift2) : text3;
  while (this.test(tail2)) {
    result.push(createMatch(this, shift2));
    tail2 = tail2.slice(this.__last_index__);
    shift2 += this.__last_index__;
  }
  if (result.length) {
    return result;
  }
  return null;
};
LinkifyIt.prototype.tlds = function tlds(list3, keepOld) {
  list3 = Array.isArray(list3) ? list3 : [list3];
  if (!keepOld) {
    this.__tlds__ = list3.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }
  this.__tlds__ = this.__tlds__.concat(list3).sort().filter(function(el2, idx, arr) {
    return el2 !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
LinkifyIt.prototype.normalize = function normalize3(match4) {
  if (!match4.schema) {
    match4.url = "http://" + match4.url;
  }
  if (match4.schema === "mailto:" && !/^mailto:/i.test(match4.url)) {
    match4.url = "mailto:" + match4.url;
  }
};
LinkifyIt.prototype.onCompile = function onCompile() {
};
var linkifyIt = LinkifyIt;
/*! https://mths.be/punycode v1.4.1 by @mathias */
var maxInt = 2147483647;
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128;
var delimiter = "-";
var regexPunycode = /^xn--/;
var regexNonASCII = /[^\x20-\x7E]/;
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
var errors = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;
function error(type3) {
  throw new RangeError(errors[type3]);
}
function map$2(array, fn) {
  var length3 = array.length;
  var result = [];
  while (length3--) {
    result[length3] = fn(array[length3]);
  }
  return result;
}
function mapDomain(string, fn) {
  var parts = string.split("@");
  var result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    string = parts[1];
  }
  string = string.replace(regexSeparators, ".");
  var labels = string.split(".");
  var encoded = map$2(labels, fn).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  var output = [], counter = 0, length3 = string.length, value, extra;
  while (counter < length3) {
    value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length3) {
      extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function ucs2encode(array) {
  return map$2(array, function(value) {
    var output = "";
    if (value > 65535) {
      value -= 65536;
      output += stringFromCharCode(value >>> 10 & 1023 | 55296);
      value = 56320 | value & 1023;
    }
    output += stringFromCharCode(value);
    return output;
  }).join("");
}
function basicToDigit(codePoint) {
  if (codePoint - 48 < 10) {
    return codePoint - 22;
  }
  if (codePoint - 65 < 26) {
    return codePoint - 65;
  }
  if (codePoint - 97 < 26) {
    return codePoint - 97;
  }
  return base;
}
function digitToBasic(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
}
function adapt(delta2, numPoints, firstTime) {
  var k = 0;
  delta2 = firstTime ? floor(delta2 / damp) : delta2 >> 1;
  delta2 += floor(delta2 / numPoints);
  for (; delta2 > baseMinusTMin * tMax >> 1; k += base) {
    delta2 = floor(delta2 / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta2 / (delta2 + skew));
}
function decode$2(input) {
  var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index2, oldi, w, k, digit, t, baseMinusT;
  basic = input.lastIndexOf(delimiter);
  if (basic < 0) {
    basic = 0;
  }
  for (j = 0; j < basic; ++j) {
    if (input.charCodeAt(j) >= 128) {
      error("not-basic");
    }
    output.push(input.charCodeAt(j));
  }
  for (index2 = basic > 0 ? basic + 1 : 0; index2 < inputLength; ) {
    for (oldi = i, w = 1, k = base; ; k += base) {
      if (index2 >= inputLength) {
        error("invalid-input");
      }
      digit = basicToDigit(input.charCodeAt(index2++));
      if (digit >= base || digit > floor((maxInt - i) / w)) {
        error("overflow");
      }
      i += digit * w;
      t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
      if (digit < t) {
        break;
      }
      baseMinusT = base - t;
      if (w > floor(maxInt / baseMinusT)) {
        error("overflow");
      }
      w *= baseMinusT;
    }
    out = output.length + 1;
    bias = adapt(i - oldi, out, oldi == 0);
    if (floor(i / out) > maxInt - n) {
      error("overflow");
    }
    n += floor(i / out);
    i %= out;
    output.splice(i++, 0, n);
  }
  return ucs2encode(output);
}
function encode$2(input) {
  var n, delta2, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
  input = ucs2decode(input);
  inputLength = input.length;
  n = initialN;
  delta2 = 0;
  bias = initialBias;
  for (j = 0; j < inputLength; ++j) {
    currentValue = input[j];
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  handledCPCount = basicLength = output.length;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    for (m = maxInt, j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }
    handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta2) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta2 += (m - n) * handledCPCountPlusOne;
    n = m;
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < n && ++delta2 > maxInt) {
        error("overflow");
      }
      if (currentValue == n) {
        for (q = delta2, k = base; ; k += base) {
          t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) {
            break;
          }
          qMinusT = q - t;
          baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta2, handledCPCountPlusOne, handledCPCount == basicLength);
        delta2 = 0;
        ++handledCPCount;
      }
    }
    ++delta2;
    ++n;
  }
  return output.join("");
}
function toUnicode(input) {
  return mapDomain(input, function(string) {
    return regexPunycode.test(string) ? decode$2(string.slice(4).toLowerCase()) : string;
  });
}
function toASCII(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ? "xn--" + encode$2(string) : string;
  });
}
var version = "1.4.1";
var ucs2 = {
  decode: ucs2decode,
  encode: ucs2encode
};
var _polyfillNode_punycode = {
  version,
  ucs2,
  toASCII,
  toUnicode,
  encode: encode$2,
  decode: decode$2
};
var _polyfillNode_punycode$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  decode: decode$2,
  encode: encode$2,
  toUnicode,
  toASCII,
  version,
  ucs2,
  default: _polyfillNode_punycode
});
var _default = {
  options: {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "“”‘’",
    highlight: null,
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};
var zero = {
  options: {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "“”‘’",
    highlight: null,
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "text_collapse"
      ]
    }
  }
};
var commonmark = {
  options: {
    html: true,
    xhtmlOut: true,
    breaks: false,
    langPrefix: "language-",
    linkify: false,
    typographer: false,
    quotes: "“”‘’",
    highlight: null,
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "text_collapse"
      ]
    }
  }
};
var punycode = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(_polyfillNode_punycode$1);
var config = {
  default: _default,
  zero,
  commonmark
};
var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
function validateLink(url) {
  var str = url.trim().toLowerCase();
  return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
}
var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.encode(mdurl.format(parsed));
}
function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.decode(mdurl.format(parsed));
}
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }
  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = "default";
    }
  }
  this.inline = new parser_inline();
  this.block = new parser_block();
  this.core = new parser_core();
  this.renderer = new renderer();
  this.linkify = new linkifyIt();
  this.validateLink = validateLink;
  this.normalizeLink = normalizeLink;
  this.normalizeLinkText = normalizeLinkText;
  this.utils = utils;
  this.helpers = utils.assign({}, helpers);
  this.options = {};
  this.configure(presetName);
  if (options) {
    this.set(options);
  }
}
MarkdownIt.prototype.set = function(options) {
  utils.assign(this.options, options);
  return this;
};
MarkdownIt.prototype.configure = function(presets) {
  var self2 = this, presetName;
  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) {
      throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
    }
  }
  if (!presets) {
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  }
  if (presets.options) {
    self2.set(presets.options);
  }
  if (presets.components) {
    Object.keys(presets.components).forEach(function(name) {
      if (presets.components[name].rules) {
        self2[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self2[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};
MarkdownIt.prototype.enable = function(list3, ignoreInvalid) {
  var result = [];
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  ["core", "block", "inline"].forEach(function(chain3) {
    result = result.concat(this[chain3].ruler.enable(list3, true));
  }, this);
  result = result.concat(this.inline.ruler2.enable(list3, true));
  var missed = list3.filter(function(name) {
    return result.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.disable = function(list3, ignoreInvalid) {
  var result = [];
  if (!Array.isArray(list3)) {
    list3 = [list3];
  }
  ["core", "block", "inline"].forEach(function(chain3) {
    result = result.concat(this[chain3].ruler.disable(list3, true));
  }, this);
  result = result.concat(this.inline.ruler2.disable(list3, true));
  var missed = list3.filter(function(name) {
    return result.indexOf(name) < 0;
  });
  if (missed.length && !ignoreInvalid) {
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
  }
  return this;
};
MarkdownIt.prototype.use = function(plugin) {
  var args = [this].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};
MarkdownIt.prototype.parse = function(src, env) {
  if (typeof src !== "string") {
    throw new Error("Input data should be a String");
  }
  var state = new this.core.State(src, this, env);
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.render = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parse(src, env), this.options, env);
};
MarkdownIt.prototype.parseInline = function(src, env) {
  var state = new this.core.State(src, this, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};
MarkdownIt.prototype.renderInline = function(src, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(src, env), this.options, env);
};
var lib = MarkdownIt;
var markdownIt = lib;
var styles$2 = function styles3(theme) {
  return {
    root: {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create("fill", {
        duration: theme.transitions.duration.shorter
      })
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorError: {
      color: theme.palette.error.main
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    fontSizeInherit: {
      fontSize: "inherit"
    },
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon = /* @__PURE__ */ react.forwardRef(function SvgIcon2(props3, ref) {
  var children = props3.children, classes = props3.classes, className = props3.className, _props$color = props3.color, color = _props$color === void 0 ? "inherit" : _props$color, _props$component = props3.component, Component = _props$component === void 0 ? "svg" : _props$component, _props$fontSize = props3.fontSize, fontSize = _props$fontSize === void 0 ? "medium" : _props$fontSize, htmlColor = props3.htmlColor, titleAccess = props3.titleAccess, _props$viewBox = props3.viewBox, viewBox = _props$viewBox === void 0 ? "0 0 24 24" : _props$viewBox, other = _objectWithoutProperties(props3, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);
  return /* @__PURE__ */ react.createElement(Component, _extends$5({
    className: clsx(classes.root, className, color !== "inherit" && classes["color".concat(capitalize(color))], fontSize !== "default" && fontSize !== "medium" && classes["fontSize".concat(capitalize(fontSize))]),
    focusable: "false",
    viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, other), children, titleAccess ? /* @__PURE__ */ react.createElement("title", null, titleAccess) : null);
});
SvgIcon.propTypes = {
  children: propTypes.node,
  classes: propTypes.object,
  className: propTypes.string,
  color: propTypes.oneOf(["action", "disabled", "error", "inherit", "primary", "secondary"]),
  component: propTypes.elementType,
  fontSize: chainPropTypes(propTypes.oneOf(["default", "inherit", "large", "medium", "small"]), function(props3) {
    var fontSize = props3.fontSize;
    if (fontSize === "default") {
      throw new Error('Material-UI: `fontSize="default"` is deprecated. Use `fontSize="medium"` instead.');
    }
    return null;
  }),
  htmlColor: propTypes.string,
  shapeRendering: propTypes.string,
  titleAccess: propTypes.string,
  viewBox: propTypes.string
};
SvgIcon.muiName = "SvgIcon";
var SvgIcon$1 = withStyles$1(styles$2, {
  name: "MuiSvgIcon"
})(SvgIcon);
function createSvgIcon(path3, displayName) {
  var Component = function Component2(props3, ref) {
    return /* @__PURE__ */ react.createElement(SvgIcon$1, _extends$5({
      ref
    }, props3), path3);
  };
  {
    Component.displayName = "".concat(displayName, "Icon");
  }
  Component.muiName = SvgIcon$1.muiName;
  return /* @__PURE__ */ react.memo(/* @__PURE__ */ react.forwardRef(Component));
}
var CancelIcon = createSvgIcon(/* @__PURE__ */ react.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function useForkRef(refA, refB) {
  return react.useMemo(function() {
    if (refA == null && refB == null) {
      return null;
    }
    return function(refValue) {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
function unsupportedProp(props3, propName, componentName, location, propFullName) {
  var propFullNameSafe = propFullName || propName;
  if (typeof props3[propName] !== "undefined") {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }
  return null;
}
var useEnhancedEffect = typeof window !== "undefined" ? react.useLayoutEffect : react.useEffect;
function useEventCallback(fn) {
  var ref = react.useRef(fn);
  useEnhancedEffect(function() {
    ref.current = fn;
  });
  return react.useCallback(function() {
    return ref.current.apply(void 0, arguments);
  }, []);
}
function deprecatedPropType(validator, reason) {
  return function(props3, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || "<<anonymous>>";
    var propFullNameSafe = propFullName || propName;
    if (typeof props3[propName] !== "undefined") {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }
    return null;
  };
}
var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node) {
  var type3 = node.type, tagName = node.tagName;
  if (tagName === "INPUT" && inputTypesWhitelist[type3] && !node.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  var target2 = event.target;
  try {
    return target2.matches(":focus-visible");
  } catch (error2) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target2);
}
function handleBlurVisible() {
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
    hadFocusVisibleRecently = false;
  }, 100);
}
function useIsFocusVisible() {
  var ref = react.useCallback(function(instance) {
    var node = reactDom.findDOMNode(instance);
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  {
    react.useDebugValue(isFocusVisible);
  }
  return {
    isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref
  };
}
var config$1 = {
  disabled: false
};
var timeoutsShape = propTypes.oneOfType([propTypes.number, propTypes.shape({
  enter: propTypes.number,
  exit: propTypes.number,
  appear: propTypes.number
}).isRequired]);
var classNamesShape = propTypes.oneOfType([propTypes.string, propTypes.shape({
  enter: propTypes.string,
  exit: propTypes.string,
  active: propTypes.string
}), propTypes.shape({
  enter: propTypes.string,
  enterDone: propTypes.string,
  enterActive: propTypes.string,
  exit: propTypes.string,
  exitDone: propTypes.string,
  exitActive: propTypes.string
})]);
var TransitionGroupContext = react.createContext(null);
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props3, context) {
    var _this;
    _this = _React$Component.call(this, props3, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props3.enter : props3.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props3.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props3.unmountOnExit || props3.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [reactDom.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config$1.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : reactDom.findDOMNode(this);
    if (!exit || config$1.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ react.createElement(TransitionGroupContext.Provider, {
      value: null
    }, typeof children === "function" ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps));
  };
  return Transition2;
}(react.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {
  nodeRef: propTypes.shape({
    current: typeof Element === "undefined" ? propTypes.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return propTypes.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,
  in: propTypes.bool,
  mountOnEnter: propTypes.bool,
  unmountOnExit: propTypes.bool,
  appear: propTypes.bool,
  enter: propTypes.bool,
  exit: propTypes.bool,
  timeout: function timeout(props3) {
    var pt = timeoutsShape;
    if (!props3.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props3].concat(args));
  },
  addEndListener: propTypes.func,
  onEnter: propTypes.func,
  onEntering: propTypes.func,
  onEntered: propTypes.func,
  onExit: propTypes.func,
  onExiting: propTypes.func,
  onExited: propTypes.func
};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && react.isValidElement(child) ? mapFn(child) : child;
  };
  var result = Object.create(null);
  if (children)
    react.Children.map(children, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop3, props3) {
  return props3[prop3] != null ? props3[prop3] : child.props[prop3];
}
function getInitialChildMapping(props3, onExited) {
  return getChildMapping(props3.children, function(child) {
    return react.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props3),
      enter: getProp(child, "enter", props3),
      exit: getProp(child, "exit", props3)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!react.isValidElement(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = react.isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = react.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && react.isValidElement(prevChild)) {
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}
var values$1 = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props3, context) {
    var _this;
    _this = _React$Component.call(this, props3, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends$5({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props3 = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values$1(this.state.children).map(childFactory2);
    delete props3.appear;
    delete props3.enter;
    delete props3.exit;
    if (Component === null) {
      return /* @__PURE__ */ react.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ react.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ react.createElement(Component, props3, children));
  };
  return TransitionGroup2;
}(react.Component);
TransitionGroup.propTypes = {
  component: propTypes.any,
  children: propTypes.node,
  appear: propTypes.bool,
  enter: propTypes.bool,
  exit: propTypes.bool,
  childFactory: propTypes.func
};
TransitionGroup.defaultProps = defaultProps;
var useEnhancedEffect$1 = typeof window === "undefined" ? react.useEffect : react.useLayoutEffect;
function Ripple(props3) {
  var classes = props3.classes, _props$pulsate = props3.pulsate, pulsate = _props$pulsate === void 0 ? false : _props$pulsate, rippleX = props3.rippleX, rippleY = props3.rippleY, rippleSize = props3.rippleSize, inProp = props3.in, _props$onExited = props3.onExited, onExited = _props$onExited === void 0 ? function() {
  } : _props$onExited, timeout2 = props3.timeout;
  var _React$useState = react.useState(false), leaving = _React$useState[0], setLeaving = _React$useState[1];
  var rippleClassName = clsx(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = useEventCallback(onExited);
  useEnhancedEffect$1(function() {
    if (!inProp) {
      setLeaving(true);
      var timeoutId = setTimeout(handleExited, timeout2);
      return function() {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [handleExited, inProp, timeout2]);
  return /* @__PURE__ */ react.createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /* @__PURE__ */ react.createElement("span", {
    className: childClassName
  }));
}
Ripple.propTypes = {
  classes: propTypes.object.isRequired,
  in: propTypes.bool,
  onExited: propTypes.func,
  pulsate: propTypes.bool,
  rippleSize: propTypes.number,
  rippleX: propTypes.number,
  rippleY: propTypes.number,
  timeout: propTypes.number.isRequired
};
var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles$3 = function styles4(theme) {
  return {
    root: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit"
    },
    ripple: {
      opacity: 0,
      position: "absolute"
    },
    rippleVisible: {
      opacity: 0.3,
      transform: "scale(1)",
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },
    child: {
      opacity: 1,
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: "currentColor"
    },
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    childPulsate: {
      position: "absolute",
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    "@keyframes enter": {
      "0%": {
        transform: "scale(0)",
        opacity: 0.1
      },
      "100%": {
        transform: "scale(1)",
        opacity: 0.3
      }
    },
    "@keyframes exit": {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      }
    },
    "@keyframes pulsate": {
      "0%": {
        transform: "scale(1)"
      },
      "50%": {
        transform: "scale(0.92)"
      },
      "100%": {
        transform: "scale(1)"
      }
    }
  };
};
var TouchRipple = /* @__PURE__ */ react.forwardRef(function TouchRipple2(props3, ref) {
  var _props$center = props3.center, centerProp = _props$center === void 0 ? false : _props$center, classes = props3.classes, className = props3.className, other = _objectWithoutProperties(props3, ["center", "classes", "className"]);
  var _React$useState = react.useState([]), ripples = _React$useState[0], setRipples = _React$useState[1];
  var nextKey = react.useRef(0);
  var rippleCallback = react.useRef(null);
  react.useEffect(function() {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  var ignoringMouseDown = react.useRef(false);
  var startTimer = react.useRef(null);
  var startTimerCommit = react.useRef(null);
  var container = react.useRef(null);
  react.useEffect(function() {
    return function() {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = react.useCallback(function(params) {
    var pulsate2 = params.pulsate, rippleX = params.rippleX, rippleY = params.rippleY, rippleSize = params.rippleSize, cb = params.cb;
    setRipples(function(oldRipples) {
      return [].concat(_toConsumableArray(oldRipples), [/* @__PURE__ */ react.createElement(Ripple, {
        key: nextKey.current,
        classes,
        timeout: DURATION,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = react.useCallback(function() {
    var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : void 0;
    var _options$pulsate = options.pulsate, pulsate2 = _options$pulsate === void 0 ? false : _options$pulsate, _options$center = options.center, center = _options$center === void 0 ? centerProp || options.pulsate : _options$center, _options$fakeElement = options.fakeElement, fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;
    if (event.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    var element = fakeElement ? null : container.current;
    var rect2 = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    var rippleX;
    var rippleY;
    var rippleSize;
    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect2.width / 2);
      rippleY = Math.round(rect2.height / 2);
    } else {
      var _ref = event.touches ? event.touches[0] : event, clientX = _ref.clientX, clientY = _ref.clientY;
      rippleX = Math.round(clientX - rect2.left);
      rippleY = Math.round(clientY - rect2.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect2.width, 2) + Math.pow(rect2.height, 2)) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    }
    if (event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = function() {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.current = setTimeout(function() {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = react.useCallback(function() {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = react.useCallback(function(event, cb) {
    clearTimeout(startTimer.current);
    if (event.type === "touchend" && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function() {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples(function(oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  react.useImperativeHandle(ref, function() {
    return {
      pulsate,
      start,
      stop
    };
  }, [pulsate, start, stop]);
  return /* @__PURE__ */ react.createElement("span", _extends$5({
    className: clsx(classes.root, className),
    ref: container
  }, other), /* @__PURE__ */ react.createElement(TransitionGroup, {
    component: null,
    exit: true
  }, ripples));
});
TouchRipple.propTypes = {
  center: propTypes.bool,
  classes: propTypes.object.isRequired,
  className: propTypes.string
};
var TouchRipple$1 = withStyles$1(styles$3, {
  flip: false,
  name: "MuiTouchRipple"
})(/* @__PURE__ */ react.memo(TouchRipple));
var styles$4 = {
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    "&$disabled": {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  },
  disabled: {},
  focusVisible: {}
};
var ButtonBase = /* @__PURE__ */ react.forwardRef(function ButtonBase2(props3, ref) {
  var action = props3.action, buttonRefProp = props3.buttonRef, _props$centerRipple = props3.centerRipple, centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple, children = props3.children, classes = props3.classes, className = props3.className, _props$component = props3.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props3.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableRipple = props3.disableRipple, disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple, _props$disableTouchRi = props3.disableTouchRipple, disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi, _props$focusRipple = props3.focusRipple, focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple, focusVisibleClassName = props3.focusVisibleClassName, onBlur = props3.onBlur, onClick = props3.onClick, onFocus = props3.onFocus, onFocusVisible = props3.onFocusVisible, onKeyDown = props3.onKeyDown, onKeyUp = props3.onKeyUp, onMouseDown = props3.onMouseDown, onMouseLeave = props3.onMouseLeave, onMouseUp = props3.onMouseUp, onTouchEnd = props3.onTouchEnd, onTouchMove = props3.onTouchMove, onTouchStart = props3.onTouchStart, onDragLeave = props3.onDragLeave, _props$tabIndex = props3.tabIndex, tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex, TouchRippleProps = props3.TouchRippleProps, _props$type = props3.type, type3 = _props$type === void 0 ? "button" : _props$type, other = _objectWithoutProperties(props3, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);
  var buttonRef = react.useRef(null);
  function getButtonNode() {
    return reactDom.findDOMNode(buttonRef.current);
  }
  var rippleRef = react.useRef(null);
  var _React$useState = react.useState(false), focusVisible = _React$useState[0], setFocusVisible = _React$useState[1];
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  react.useImperativeHandle(action, function() {
    return {
      focusVisible: function focusVisible2() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  react.useEffect(function() {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);
  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : disableTouchRipple;
    return useEventCallback(function(event) {
      if (eventCallback) {
        eventCallback(event);
      }
      var ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  var handleMouseDown = useRippleHandler("start", onMouseDown);
  var handleDragLeave = useRippleHandler("stop", onDragLeave);
  var handleMouseUp = useRippleHandler("stop", onMouseUp);
  var handleMouseLeave = useRippleHandler("stop", function(event) {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler("start", onTouchStart);
  var handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  var handleTouchMove = useRippleHandler("stop", onTouchMove);
  var handleBlur = useRippleHandler("stop", function(event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = useEventCallback(function(event) {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible2(event)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  var isNonNativeButton = function isNonNativeButton2() {
    var button = getButtonNode();
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  var keydownRef = react.useRef(false);
  var handleKeyDown2 = useEventCallback(function(event) {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function() {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = useEventCallback(function(event) {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function() {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;
  if (ComponentProp === "button" && other.href) {
    ComponentProp = "a";
  }
  var buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type3;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== "a" || !other.href) {
      buttonProps.role = "button";
    }
    buttonProps["aria-disabled"] = disabled;
  }
  var handleUserRef = useForkRef(buttonRefProp, ref);
  var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  var handleRef = useForkRef(handleUserRef, handleOwnRef);
  var _React$useState2 = react.useState(false), mountedState = _React$useState2[0], setMountedState = _React$useState2[1];
  react.useEffect(function() {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;
  {
    react.useEffect(function() {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(["Material-UI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
      }
    }, [enableTouchRipple]);
  }
  return /* @__PURE__ */ react.createElement(ComponentProp, _extends$5({
    className: clsx(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ? /* @__PURE__ */ react.createElement(TouchRipple$1, _extends$5({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
ButtonBase.propTypes = {
  action: refType,
  buttonRef: deprecatedPropType(refType, "Use `ref` instead."),
  centerRipple: propTypes.bool,
  children: propTypes.node,
  classes: propTypes.object,
  className: propTypes.string,
  component: elementTypeAcceptingRef$1,
  disabled: propTypes.bool,
  disableRipple: propTypes.bool,
  disableTouchRipple: propTypes.bool,
  focusRipple: propTypes.bool,
  focusVisibleClassName: propTypes.string,
  href: propTypes.string,
  onBlur: propTypes.func,
  onClick: propTypes.func,
  onDragLeave: propTypes.func,
  onFocus: propTypes.func,
  onFocusVisible: propTypes.func,
  onKeyDown: propTypes.func,
  onKeyUp: propTypes.func,
  onMouseDown: propTypes.func,
  onMouseLeave: propTypes.func,
  onMouseUp: propTypes.func,
  onTouchEnd: propTypes.func,
  onTouchMove: propTypes.func,
  onTouchStart: propTypes.func,
  tabIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),
  TouchRippleProps: propTypes.object,
  type: propTypes.oneOfType([propTypes.oneOf(["button", "reset", "submit"]), propTypes.string])
};
var ButtonBase$1 = withStyles$1(styles$4, {
  name: "MuiButtonBase"
})(ButtonBase);
var styles$5 = function styles5(theme) {
  var backgroundColor = theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = alpha(theme.palette.text.primary, 0.26);
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: "nowrap",
      transition: theme.transitions.create(["background-color", "box-shadow"]),
      cursor: "default",
      outline: 0,
      textDecoration: "none",
      border: "none",
      padding: 0,
      verticalAlign: "middle",
      boxSizing: "border-box",
      "&$disabled": {
        opacity: 0.5,
        pointerEvents: "none"
      },
      "& $avatar": {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === "light" ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      "& $avatarColorPrimary": {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      "& $avatarColorSecondary": {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      "& $avatarSmall": {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },
    sizeSmall: {
      height: 24
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    disabled: {},
    clickable: {
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.08)
      },
      "&:active": {
        boxShadow: theme.shadows[1]
      }
    },
    clickableColorPrimary: {
      "&:hover, &:focus": {
        backgroundColor: emphasize(theme.palette.primary.main, 0.08)
      }
    },
    clickableColorSecondary: {
      "&:hover, &:focus": {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.08)
      }
    },
    deletable: {
      "&:focus": {
        backgroundColor: emphasize(backgroundColor, 0.08)
      }
    },
    deletableColorPrimary: {
      "&:focus": {
        backgroundColor: emphasize(theme.palette.primary.main, 0.2)
      }
    },
    deletableColorSecondary: {
      "&:focus": {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.2)
      }
    },
    outlined: {
      backgroundColor: "transparent",
      border: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
      "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
        backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      "& $avatar": {
        marginLeft: 4
      },
      "& $avatarSmall": {
        marginLeft: 2
      },
      "& $icon": {
        marginLeft: 4
      },
      "& $iconSmall": {
        marginLeft: 2
      },
      "& $deleteIcon": {
        marginRight: 5
      },
      "& $deleteIconSmall": {
        marginRight: 3
      }
    },
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    avatar: {},
    avatarSmall: {},
    avatarColorPrimary: {},
    avatarColorSecondary: {},
    icon: {
      color: theme.palette.type === "light" ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },
    iconColorPrimary: {
      color: "inherit"
    },
    iconColorSecondary: {
      color: "inherit"
    },
    label: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: "nowrap"
    },
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },
    deleteIcon: {
      WebkitTapHighlightColor: "transparent",
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: alpha(deleteIconColor, 0.4)
      }
    },
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },
    deleteIconColorPrimary: {
      color: alpha(theme.palette.primary.contrastText, 0.7),
      "&:hover, &:active": {
        color: theme.palette.primary.contrastText
      }
    },
    deleteIconColorSecondary: {
      color: alpha(theme.palette.secondary.contrastText, 0.7),
      "&:hover, &:active": {
        color: theme.palette.secondary.contrastText
      }
    },
    deleteIconOutlinedColorPrimary: {
      color: alpha(theme.palette.primary.main, 0.7),
      "&:hover, &:active": {
        color: theme.palette.primary.main
      }
    },
    deleteIconOutlinedColorSecondary: {
      color: alpha(theme.palette.secondary.main, 0.7),
      "&:hover, &:active": {
        color: theme.palette.secondary.main
      }
    }
  };
};
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
var Chip = /* @__PURE__ */ react.forwardRef(function Chip2(props3, ref) {
  var avatarProp = props3.avatar, classes = props3.classes, className = props3.className, clickableProp = props3.clickable, _props$color = props3.color, color = _props$color === void 0 ? "default" : _props$color, ComponentProp = props3.component, deleteIconProp = props3.deleteIcon, _props$disabled = props3.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, iconProp = props3.icon, label = props3.label, onClick = props3.onClick, onDelete = props3.onDelete, onKeyDown = props3.onKeyDown, onKeyUp = props3.onKeyUp, _props$size = props3.size, size = _props$size === void 0 ? "medium" : _props$size, _props$variant = props3.variant, variant = _props$variant === void 0 ? "default" : _props$variant, other = _objectWithoutProperties(props3, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);
  var chipRef = react.useRef(null);
  var handleRef = useForkRef(chipRef, ref);
  var handleDeleteIconClick = function handleDeleteIconClick2(event) {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  var handleKeyDown2 = function handleKeyDown3(event) {
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  var handleKeyUp = function handleKeyUp2(event) {
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === "Escape" && chipRef.current) {
        chipRef.current.blur();
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === "small";
  var Component = ComponentProp || (clickable ? ButtonBase$1 : "div");
  var moreProps = Component === ButtonBase$1 ? {
    component: "div"
  } : {};
  var deleteIcon = null;
  if (onDelete) {
    var customClasses = clsx(color !== "default" && (variant === "default" ? classes["deleteIconColor".concat(capitalize(color))] : classes["deleteIconOutlinedColor".concat(capitalize(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /* @__PURE__ */ react.isValidElement(deleteIconProp) ? /* @__PURE__ */ react.cloneElement(deleteIconProp, {
      className: clsx(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /* @__PURE__ */ react.createElement(CancelIcon, {
      className: clsx(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }
  var avatar = null;
  if (avatarProp && /* @__PURE__ */ react.isValidElement(avatarProp)) {
    avatar = /* @__PURE__ */ react.cloneElement(avatarProp, {
      className: clsx(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== "default" && classes["avatarColor".concat(capitalize(color))])
    });
  }
  var icon = null;
  if (iconProp && /* @__PURE__ */ react.isValidElement(iconProp)) {
    icon = /* @__PURE__ */ react.cloneElement(iconProp, {
      className: clsx(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== "default" && classes["iconColor".concat(capitalize(color))])
    });
  }
  {
    if (avatar && icon) {
      console.error("Material-UI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
    }
  }
  return /* @__PURE__ */ react.createElement(Component, _extends$5({
    role: clickable || onDelete ? "button" : void 0,
    className: clsx(classes.root, className, color !== "default" && [classes["color".concat(capitalize(color))], clickable && classes["clickableColor".concat(capitalize(color))], onDelete && classes["deletableColor".concat(capitalize(color))]], variant !== "default" && [classes.outlined, {
      primary: classes.outlinedPrimary,
      secondary: classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : void 0,
    tabIndex: clickable || onDelete ? 0 : void 0,
    onClick,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /* @__PURE__ */ react.createElement("span", {
    className: clsx(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
Chip.propTypes = {
  avatar: propTypes.element,
  children: unsupportedProp,
  classes: propTypes.object,
  className: propTypes.string,
  clickable: propTypes.bool,
  color: propTypes.oneOf(["default", "primary", "secondary"]),
  component: propTypes.elementType,
  deleteIcon: propTypes.element,
  disabled: propTypes.bool,
  icon: propTypes.element,
  label: propTypes.node,
  onClick: propTypes.func,
  onDelete: propTypes.func,
  onKeyDown: propTypes.func,
  onKeyUp: propTypes.func,
  size: propTypes.oneOf(["medium", "small"]),
  variant: propTypes.oneOf(["default", "outlined"])
};
var require$$7 = withStyles$1(styles$5, {
  name: "MuiChip"
})(Chip);
var reflow = function reflow2(node) {
  return node.scrollTop;
};
function getTransitionProps(props3, options) {
  var timeout2 = props3.timeout, _props$style = props3.style, style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout2 === "number" ? timeout2 : timeout2[options.mode] || 0,
    delay: style.transitionDelay
  };
}
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}
var styles$6 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var Grow = /* @__PURE__ */ react.forwardRef(function Grow2(props3, ref) {
  var children = props3.children, _props$disableStrictM = props3.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props3.in, onEnter = props3.onEnter, onEntered = props3.onEntered, onEntering = props3.onEntering, onExit = props3.onExit, onExited = props3.onExited, onExiting = props3.onExiting, style = props3.style, _props$timeout = props3.timeout, timeout2 = _props$timeout === void 0 ? "auto" : _props$timeout, _props$TransitionComp = props3.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition : _props$TransitionComp, other = _objectWithoutProperties(props3, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var timer = react.useRef();
  var autoTimeout = react.useRef();
  var theme = useTheme$1();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react.useRef(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : void 0, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref2 = _slicedToArray(_ref, 2), node = _ref2[0], isAppearing = _ref2[1];
        if (isAppearing === void 0) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    reflow(node);
    var _getTransitionProps = getTransitionProps({
      style,
      timeout: timeout2
    }, {
      mode: "enter"
    }), transitionDuration = _getTransitionProps.duration, delay = _getTransitionProps.delay;
    var duration2;
    if (timeout2 === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: duration2 * 0.666,
      delay
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node) {
    var _getTransitionProps2 = getTransitionProps({
      style,
      timeout: timeout2
    }, {
      mode: "exit"
    }), transitionDuration = _getTransitionProps2.duration, delay = _getTransitionProps2.delay;
    var duration2;
    if (timeout2 === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: duration2 * 0.666,
      delay: delay || duration2 * 0.333
    })].join(",");
    node.style.opacity = "0";
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var addEndListener = function addEndListener2(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;
    if (timeout2 === "auto") {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };
  react.useEffect(function() {
    return function() {
      clearTimeout(timer.current);
    };
  }, []);
  return /* @__PURE__ */ react.createElement(TransitionComponent, _extends$5({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener,
    timeout: timeout2 === "auto" ? null : timeout2
  }, other), function(state, childProps) {
    return /* @__PURE__ */ react.cloneElement(children, _extends$5({
      style: _extends$5({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles$6[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
Grow.propTypes = {
  children: propTypes.element,
  disableStrictModeCompat: propTypes.bool,
  in: propTypes.bool,
  onEnter: propTypes.func,
  onEntered: propTypes.func,
  onEntering: propTypes.func,
  onExit: propTypes.func,
  onExited: propTypes.func,
  onExiting: propTypes.func,
  style: propTypes.object,
  timeout: propTypes.oneOfType([propTypes.oneOf(["auto"]), propTypes.number, propTypes.shape({
    appear: propTypes.number,
    enter: propTypes.number,
    exit: propTypes.number
  })])
};
Grow.muiSupportAuto = true;
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1-lts
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser$1 = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
var timeoutDuration = function() {
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();
function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser$1 && window.Promise;
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
function isFunction$1(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
}
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  var window2 = element.ownerDocument.defaultView;
  var css2 = window2.getComputedStyle(element, null);
  return property ? css2[property] : css2;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }
  var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getReferenceNode(reference3) {
  return reference3 && reference3.referenceNode ? reference3.referenceNode : reference3;
}
var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);
function isIE(version2) {
  if (version2 === 11) {
    return isIE11;
  }
  if (version2 === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE(10) ? document.body : null;
  var offsetParent = element.offsetParent || null;
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }
  if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order2 = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order2 ? element1 : element2;
  var end = order2 ? element2 : element1;
  var range3 = document.createRange();
  range3.setStart(start, 0);
  range3.setEnd(end, 0);
  var commonAncestorContainer = range3.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function includeScroll(rect2, element) {
  var subtract3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract3 ? -1 : 1;
  rect2.top += scrollTop * modifier;
  rect2.bottom += scrollTop * modifier;
  rect2.left += scrollLeft * modifier;
  rect2.right += scrollLeft * modifier;
  return rect2;
}
function getBordersSize(styles9, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles9["border" + sideA + "Width"]) + parseFloat(styles9["border" + sideB + "Width"]);
}
function getSize(axis, body, html, computedStyle) {
  return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
}
function getWindowSizes(document2) {
  var body = document2.body;
  var html = document2.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize("Height", body, html, computedStyle),
    width: getSize("Width", body, html, computedStyle)
  };
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target2, props3) {
    for (var i = 0; i < props3.length; i++) {
      var descriptor = props3[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target2, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty$1 = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends = Object.assign || function(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target2[key] = source[key];
      }
    }
  }
  return target2;
};
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
function getBoundingClientRect(element) {
  var rect2 = {};
  try {
    if (isIE(10)) {
      rect2 = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect2.top += scrollTop;
      rect2.left += scrollLeft;
      rect2.bottom += scrollTop;
      rect2.right += scrollLeft;
    } else {
      rect2 = element.getBoundingClientRect();
    }
  } catch (e) {
  }
  var result = {
    left: rect2.left,
    top: rect2.top,
    width: rect2.right - rect2.left,
    height: rect2.bottom - rect2.top
  };
  var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    var styles9 = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles9, "x");
    vertScrollbar -= getBordersSize(styles9, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isIE102 = isIE(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles9 = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles9.borderTopWidth);
  var borderLeftWidth = parseFloat(styles9.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (!isIE102 && isHTML) {
    var marginTop = parseFloat(styles9.marginTop);
    var marginLeft = parseFloat(styles9.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  var offset2 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height
  };
  return getClientRect(offset2);
}
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el2 = element.parentElement;
  while (el2 && getStyleComputedProperty(el2, "transform") === "none") {
    el2 = el2.parentElement;
  }
  return el2 || document.documentElement;
}
function getBoundaries(popper, reference3, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var boundaries = {top: 0, left: 0};
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference3));
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(reference3));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  padding = padding || 0;
  var isPaddingNumber = typeof padding === "number";
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}
function getArea(_ref) {
  var width = _ref.width, height = _ref.height;
  return width * height;
}
function computeAutoPlacement(placement, refRect, popper, reference3, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper, reference3, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function(key) {
    return _extends({
      key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function(a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function(_ref2) {
    var width = _ref2.width, height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split("-")[1];
  return computedPlacement + (variation ? "-" + variation : "");
}
function getReferenceOffsets(state, popper, reference3) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference3));
  return getOffsetRectRelativeToArbitraryNode(reference3, commonOffsetParent, fixedPosition);
}
function getOuterSizes(element) {
  var window2 = element.ownerDocument.defaultView;
  var styles9 = window2.getComputedStyle(element);
  var x = parseFloat(styles9.marginTop || 0) + parseFloat(styles9.marginBottom || 0);
  var y = parseFloat(styles9.marginLeft || 0) + parseFloat(styles9.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
function getOppositePlacement(placement) {
  var hash = {left: "right", right: "left", bottom: "top", top: "bottom"};
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split("-")[0];
  var popperRect = getOuterSizes(popper);
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };
  var isHoriz = ["right", "left"].indexOf(placement) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}
function find$1(arr, check2) {
  if (Array.prototype.find) {
    return arr.find(check2);
  }
  return arr.filter(check2)[0];
}
function findIndex$1(arr, prop3, value) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop3] === value;
    });
  }
  var match4 = find$1(arr, function(obj) {
    return obj[prop3] === value;
  });
  return arr.indexOf(match4);
}
function runModifiers(modifiers2, data, ends) {
  var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex$1(modifiers2, "name", ends));
  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn;
    if (modifier.enabled && isFunction$1(fn)) {
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
function update$2() {
  if (this.state.isDestroyed) {
    return;
  }
  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
  data = runModifiers(this.modifiers, data);
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
function isModifierEnabled(modifiers2, modifierName) {
  return modifiers2.some(function(_ref) {
    var name = _ref.name, enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefix2 = prefixes[i];
    var toCheck = prefix2 ? "" + prefix2 + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
function destroy() {
  this.state.isDestroyed = true;
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }
  this.disableEventListeners();
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target2 = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target2.addEventListener(event, callback, {passive: true});
  if (!isBody) {
    attachToScrollParents(getScrollParent(target2.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target2);
}
function setupEventListeners(reference3, options, state, updateBound) {
  state.updateBound = updateBound;
  getWindow(reference3).addEventListener("resize", state.updateBound, {passive: true});
  var scrollElement = getScrollParent(reference3);
  attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
function removeEventListeners(reference3, state) {
  getWindow(reference3).removeEventListener("resize", state.updateBound);
  state.scrollParents.forEach(function(target2) {
    target2.removeEventListener("scroll", state.updateBound);
  });
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
}
function setStyles(element, styles9) {
  Object.keys(styles9).forEach(function(prop3) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop3) !== -1 && isNumeric(styles9[prop3])) {
      unit = "px";
    }
    element.style[prop3] = styles9[prop3] + unit;
  });
}
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(prop3) {
    var value = attributes[prop3];
    if (value !== false) {
      element.setAttribute(prop3, attributes[prop3]);
    } else {
      element.removeAttribute(prop3);
    }
  });
}
function applyStyle(data) {
  setStyles(data.instance.popper, data.styles);
  setAttributes(data.instance.popper, data.attributes);
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }
  return data;
}
function applyStyleOnLoad(reference3, popper, options, modifierOptions, state) {
  var referenceOffsets = getReferenceOffsets(state, popper, reference3, options.positionFixed);
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference3, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute("x-placement", placement);
  setStyles(popper, {position: options.positionFixed ? "fixed" : "absolute"});
  return options;
}
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference3 = _data$offsets.reference;
  var round2 = Math.round, floor2 = Math.floor;
  var noRound = function noRound2(v) {
    return v;
  };
  var referenceWidth = round2(reference3.width);
  var popperWidth = round2(popper.width);
  var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round2 : floor2;
  var verticalToInteger = !shouldRound ? noRound : round2;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}
var isFirefox = isBrowser$1 && /Firefox/i.test(navigator.userAgent);
function computeStyle(data, options) {
  var x = options.x, y = options.y;
  var popper = data.offsets.popper;
  var legacyGpuAccelerationOption = find$1(data.instance.modifiers, function(modifier) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== void 0) {
    console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);
  var styles9 = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === "bottom" ? "top" : "bottom";
  var sideB = y === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left = void 0, top2 = void 0;
  if (sideA === "bottom") {
    if (offsetParent.nodeName === "HTML") {
      top2 = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top2 = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top2 = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles9[prefixedProperty] = "translate3d(" + left + "px, " + top2 + "px, 0)";
    styles9[sideA] = 0;
    styles9[sideB] = 0;
    styles9.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles9[sideA] = top2 * invertTop;
    styles9[sideB] = left * invertLeft;
    styles9.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data.placement
  };
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles9, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
function isModifierRequired(modifiers2, requestingName, requestedName) {
  var requesting = find$1(modifiers2, function(_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers2.some(function(modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
  }
  return isRequired;
}
function arrow(data, options) {
  var _data$offsets$arrow;
  if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
    return data;
  }
  var arrowElement = options.element;
  if (typeof arrowElement === "string") {
    arrowElement = data.instance.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return data;
    }
  } else {
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn("WARNING: `arrow.element` must be child of its popper element!");
      return data;
    }
  }
  var placement = data.placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference3 = _data$offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement) !== -1;
  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];
  if (reference3[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference3[opSide] - arrowElementSize);
  }
  if (reference3[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference3[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);
  var center = reference3[side] + reference3[len] / 2 - arrowElementSize / 2;
  var css2 = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css2["margin" + sideCapitalized]);
  var popperBorderSide = parseFloat(css2["border" + sideCapitalized + "Width"]);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
  return data;
}
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}
var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var validPlacements = placements.slice(3);
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var index2 = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index2 + 1).concat(validPlacements.slice(0, index2));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function flip$1(data, options) {
  if (isModifierEnabled(data.instance.modifiers, "inner")) {
    return data;
  }
  if (data.flipped && data.placement === data.originalPlacement) {
    return data;
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";
  var flipOrder = [];
  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }
  flipOrder.forEach(function(step, index2) {
    if (placement !== step || flipOrder.length === index2 + 1) {
      return data;
    }
    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;
    var floor2 = Math.floor;
    var overlapsRef = placement === "left" && floor2(popperOffsets.right) > floor2(refOffsets.left) || placement === "right" && floor2(popperOffsets.left) < floor2(refOffsets.right) || placement === "top" && floor2(popperOffsets.bottom) > floor2(refOffsets.top) || placement === "bottom" && floor2(popperOffsets.top) < floor2(refOffsets.bottom);
    var overflowsLeft = floor2(popperOffsets.left) < floor2(boundaries.left);
    var overflowsRight = floor2(popperOffsets.right) > floor2(boundaries.right);
    var overflowsTop = floor2(popperOffsets.top) < floor2(boundaries.top);
    var overflowsBottom = floor2(popperOffsets.bottom) > floor2(boundaries.bottom);
    var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index2 + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? "-" + variation : "");
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, "flip");
    }
  });
  return data;
}
function keepTogether(data) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference3 = _data$offsets.reference;
  var placement = data.placement.split("-")[0];
  var floor2 = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";
  if (popper[side] < floor2(reference3[opSide])) {
    data.offsets.popper[opSide] = floor2(reference3[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor2(reference3[side])) {
    data.offsets.popper[opSide] = floor2(reference3[side]);
  }
  return data;
}
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  var split2 = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split2[1];
  var unit = split2[2];
  if (!value) {
    return str;
  }
  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }
    var rect2 = getClientRect(element);
    return rect2[measurement] / 100 * value;
  } else if (unit === "vh" || unit === "vw") {
    var size = void 0;
    if (unit === "vh") {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    return value;
  }
}
function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
  var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });
  var divider = fragments.indexOf(find$1(fragments, function(frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  }
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
  ops = ops.map(function(op, index2) {
    var measurement = (index2 === 1 ? !useHeight : useHeight) ? "height" : "width";
    var mergeWithPrevious = false;
    return op.reduce(function(a, b) {
      if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []).map(function(str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });
  ops.forEach(function(op, index2) {
    op.forEach(function(frag, index22) {
      if (isNumeric(frag)) {
        offsets[index2] += frag * (op[index22 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}
function offset(data, _ref) {
  var offset2 = _ref.offset;
  var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference3 = _data$offsets.reference;
  var basePlacement = placement.split("-")[0];
  var offsets = void 0;
  if (isNumeric(+offset2)) {
    offsets = [+offset2, 0];
  } else {
    offsets = parseOffset(offset2, popper, reference3, basePlacement);
  }
  if (basePlacement === "left") {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === "top") {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }
  data.popper = popper;
  return data;
}
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }
  var transformProp = getSupportedPropertyName("transform");
  var popperStyles = data.instance.popper.style;
  var top2 = popperStyles.top, left = popperStyles.left, transform2 = popperStyles[transformProp];
  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  popperStyles.top = top2;
  popperStyles.left = left;
  popperStyles[transformProp] = transform2;
  options.boundaries = boundaries;
  var order2 = options.priority;
  var popper = data.offsets.popper;
  var check2 = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === "right" ? "left" : "top";
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };
  order2.forEach(function(placement) {
    var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
    popper = _extends({}, popper, check2[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftvariation = placement.split("-")[1];
  if (shiftvariation) {
    var _data$offsets = data.offsets, reference3 = _data$offsets.reference, popper = _data$offsets.popper;
    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    var shiftOffsets = {
      start: defineProperty$1({}, side, reference3[side]),
      end: defineProperty$1({}, side, reference3[side] + reference3[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }
  return data;
}
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
    return data;
  }
  var refRect = data.offsets.reference;
  var bound = find$1(data.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    if (data.hide === true) {
      return data;
    }
    data.hide = true;
    data.attributes["x-out-of-boundaries"] = "";
  } else {
    if (data.hide === false) {
      return data;
    }
    data.hide = false;
    data.attributes["x-out-of-boundaries"] = false;
  }
  return data;
}
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference3 = _data$offsets.reference;
  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
  popper[isHoriz ? "left" : "top"] = reference3[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
var modifiers = {
  shift: {
    order: 100,
    enabled: true,
    fn: shift
  },
  offset: {
    order: 200,
    enabled: true,
    fn: offset,
    offset: 0
  },
  preventOverflow: {
    order: 300,
    enabled: true,
    fn: preventOverflow,
    priority: ["left", "right", "top", "bottom"],
    padding: 5,
    boundariesElement: "scrollParent"
  },
  keepTogether: {
    order: 400,
    enabled: true,
    fn: keepTogether
  },
  arrow: {
    order: 500,
    enabled: true,
    fn: arrow,
    element: "[x-arrow]"
  },
  flip: {
    order: 600,
    enabled: true,
    fn: flip$1,
    behavior: "flip",
    padding: 5,
    boundariesElement: "viewport",
    flipVariations: false,
    flipVariationsByContent: false
  },
  inner: {
    order: 700,
    enabled: false,
    fn: inner
  },
  hide: {
    order: 800,
    enabled: true,
    fn: hide
  },
  computeStyle: {
    order: 850,
    enabled: true,
    fn: computeStyle,
    gpuAcceleration: true,
    x: "bottom",
    y: "right"
  },
  applyStyle: {
    order: 900,
    enabled: true,
    fn: applyStyle,
    onLoad: applyStyleOnLoad,
    gpuAcceleration: void 0
  }
};
var Defaults = {
  placement: "bottom",
  positionFixed: false,
  eventsEnabled: true,
  removeOnDestroy: false,
  onCreate: function onCreate() {
  },
  onUpdate: function onUpdate() {
  },
  modifiers
};
var Popper = function() {
  function Popper2(reference3, popper) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    classCallCheck(this, Popper2);
    this.scheduleUpdate = function() {
      return requestAnimationFrame(_this.update);
    };
    this.update = debounce(this.update.bind(this));
    this.options = _extends({}, Popper2.Defaults, options);
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };
    this.reference = reference3 && reference3.jquery ? reference3[0] : reference3;
    this.popper = popper && popper.jquery ? popper[0] : popper;
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper2.Defaults.modifiers, options.modifiers)).forEach(function(name) {
      _this.options.modifiers[name] = _extends({}, Popper2.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });
    this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
      return _extends({
        name
      }, _this.options.modifiers[name]);
    }).sort(function(a, b) {
      return a.order - b.order;
    });
    this.modifiers.forEach(function(modifierOptions) {
      if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }
  createClass(Popper2, [{
    key: "update",
    value: function update$$1() {
      return update$2.call(this);
    }
  }, {
    key: "destroy",
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
  }]);
  return Popper2;
}();
Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return reactDom.findDOMNode(container);
}
var useEnhancedEffect$2 = typeof window !== "undefined" ? react.useLayoutEffect : react.useEffect;
var Portal = /* @__PURE__ */ react.forwardRef(function Portal2(props3, ref) {
  var children = props3.children, container = props3.container, _props$disablePortal = props3.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, onRendered = props3.onRendered;
  var _React$useState = react.useState(null), mountNode = _React$useState[0], setMountNode = _React$useState[1];
  var handleRef = useForkRef(/* @__PURE__ */ react.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect$2(function() {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect$2(function() {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return function() {
        setRef(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect$2(function() {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ react.isValidElement(children)) {
      return /* @__PURE__ */ react.cloneElement(children, {
        ref: handleRef
      });
    }
    return children;
  }
  return mountNode ? /* @__PURE__ */ reactDom.createPortal(children, mountNode) : mountNode;
});
Portal.propTypes = {
  children: propTypes.node,
  container: propTypes.oneOfType([HTMLElementType, propTypes.instanceOf(react.Component), propTypes.func]),
  disablePortal: propTypes.bool,
  onRendered: deprecatedPropType(propTypes.func, "Use the ref instead.")
};
{
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.reduce(function(acc, func) {
    if (func == null) {
      return acc;
    }
    {
      if (typeof func !== "function") {
        console.error("Material-UI: Invalid Argument Type, must only provide functions, undefined, or null.");
      }
    }
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function() {
  });
}
function flipPlacement(placement, theme) {
  var direction = theme && theme.direction || "ltr";
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function getAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var useEnhancedEffect$3 = typeof window !== "undefined" ? react.useLayoutEffect : react.useEffect;
var defaultPopperOptions = {};
var Popper$1 = /* @__PURE__ */ react.forwardRef(function Popper$12(props3, ref) {
  var anchorEl = props3.anchorEl, children = props3.children, container = props3.container, _props$disablePortal = props3.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, _props$keepMounted = props3.keepMounted, keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted, modifiers2 = props3.modifiers, open = props3.open, _props$placement = props3.placement, initialPlacement = _props$placement === void 0 ? "bottom" : _props$placement, _props$popperOptions = props3.popperOptions, popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions, popperRefProp = props3.popperRef, style = props3.style, _props$transition = props3.transition, transition2 = _props$transition === void 0 ? false : _props$transition, other = _objectWithoutProperties(props3, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]);
  var tooltipRef = react.useRef(null);
  var ownRef = useForkRef(tooltipRef, ref);
  var popperRef = react.useRef(null);
  var handlePopperRef = useForkRef(popperRef, popperRefProp);
  var handlePopperRefRef = react.useRef(handlePopperRef);
  useEnhancedEffect$3(function() {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react.useImperativeHandle(popperRefProp, function() {
    return popperRef.current;
  }, []);
  var _React$useState = react.useState(true), exited = _React$useState[0], setExited = _React$useState[1];
  var theme = useTheme();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  var _React$useState2 = react.useState(rtlPlacement), placement = _React$useState2[0], setPlacement = _React$useState2[1];
  react.useEffect(function() {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  var handleOpen = react.useCallback(function() {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }
    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }
    var handlePopperUpdate = function handlePopperUpdate2(data) {
      setPlacement(data.placement);
    };
    var resolvedAnchorEl = getAnchorEl(anchorEl);
    {
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    var popper = new Popper(getAnchorEl(anchorEl), tooltipRef.current, _extends$5({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: _extends$5({}, disablePortal ? {} : {
        preventOverflow: {
          boundariesElement: "window"
        }
      }, modifiers2, popperOptions.modifiers),
      onCreate: createChainedFunction(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: createChainedFunction(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers2, open, rtlPlacement, popperOptions]);
  var handleRef = react.useCallback(function(node) {
    setRef(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  var handleClose = function handleClose2() {
    if (!popperRef.current) {
      return;
    }
    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };
  var handleExited = function handleExited2() {
    setExited(true);
    handleClose();
  };
  react.useEffect(function() {
    return function() {
      handleClose();
    };
  }, []);
  react.useEffect(function() {
    if (!open && !transition2) {
      handleClose();
    }
  }, [open, transition2]);
  if (!keepMounted && !open && (!transition2 || exited)) {
    return null;
  }
  var childProps = {
    placement
  };
  if (transition2) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }
  return /* @__PURE__ */ react.createElement(Portal, {
    disablePortal,
    container
  }, /* @__PURE__ */ react.createElement("div", _extends$5({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: _extends$5({
      position: "fixed",
      top: 0,
      left: 0,
      display: !open && keepMounted && !transition2 ? "none" : null
    }, style)
  }), typeof children === "function" ? children(childProps) : children));
});
Popper$1.propTypes = {
  anchorEl: chainPropTypes(propTypes.oneOfType([HTMLElementType, propTypes.object, propTypes.func]), function(props3) {
    if (props3.open) {
      var resolvedAnchorEl = getAnchorEl(props3.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.clientWidth !== "number" || typeof resolvedAnchorEl.clientHeight !== "number" || typeof resolvedAnchorEl.getBoundingClientRect !== "function") {
        return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a referenceObject ", "(https://popper.js.org/docs/v1/#referenceObject)."].join("\n"));
      }
    }
    return null;
  }),
  children: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
  container: propTypes.oneOfType([HTMLElementType, propTypes.instanceOf(react.Component), propTypes.func]),
  disablePortal: propTypes.bool,
  keepMounted: propTypes.bool,
  modifiers: propTypes.object,
  open: propTypes.bool.isRequired,
  placement: propTypes.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  popperOptions: propTypes.object,
  popperRef: refType,
  style: propTypes.object,
  transition: propTypes.bool
};
function useId(idOverride) {
  var _React$useState = react.useState(idOverride), defaultId = _React$useState[0], setDefaultId = _React$useState[1];
  var id = idOverride || defaultId;
  react.useEffect(function() {
    if (defaultId == null) {
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}
function useControlled(_ref) {
  var controlled = _ref.controlled, defaultProp = _ref.default, name = _ref.name, _ref$state = _ref.state, state = _ref$state === void 0 ? "value" : _ref$state;
  var _React$useRef = react.useRef(controlled !== void 0), isControlled = _React$useRef.current;
  var _React$useState = react.useState(defaultProp), valueState = _React$useState[0], setValue = _React$useState[1];
  var value = isControlled ? controlled : valueState;
  {
    react.useEffect(function() {
      if (isControlled !== (controlled !== void 0)) {
        console.error(["Material-UI: A component is changing the ".concat(isControlled ? "" : "un", "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? "un" : "", "controlled."), "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled ".concat(name, " ") + "element for the lifetime of the component.", "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [controlled]);
    var _React$useRef2 = react.useRef(defaultProp), defaultValue = _React$useRef2.current;
    react.useEffect(function() {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(["Material-UI: A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  var setValueIfUncontrolled = react.useCallback(function(newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function round$1(value) {
  return Math.round(value * 1e5) / 1e5;
}
function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "0 100%"
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "100% 0"
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "100% 100%"
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "0 0"
      }
    }
  };
}
var styles$7 = function styles6(theme) {
  return {
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: "none"
    },
    popperInteractive: {
      pointerEvents: "auto"
    },
    popperArrow: arrowGenerator(),
    tooltip: {
      backgroundColor: alpha(theme.palette.grey[700], 0.9),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      padding: "4px 8px",
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(round$1(14 / 10), "em"),
      maxWidth: 300,
      wordWrap: "break-word",
      fontWeight: theme.typography.fontWeightMedium
    },
    tooltipArrow: {
      position: "relative",
      margin: "0"
    },
    arrow: {
      overflow: "hidden",
      position: "absolute",
      width: "1em",
      height: "0.71em",
      boxSizing: "border-box",
      color: alpha(theme.palette.grey[700], 0.9),
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)"
      }
    },
    touch: {
      padding: "8px 16px",
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(round$1(16 / 14), "em"),
      fontWeight: theme.typography.fontWeightRegular
    },
    tooltipPlacementLeft: _defineProperty({
      transformOrigin: "right center",
      margin: "0 24px "
    }, theme.breakpoints.up("sm"), {
      margin: "0 14px"
    }),
    tooltipPlacementRight: _defineProperty({
      transformOrigin: "left center",
      margin: "0 24px"
    }, theme.breakpoints.up("sm"), {
      margin: "0 14px"
    }),
    tooltipPlacementTop: _defineProperty({
      transformOrigin: "center bottom",
      margin: "24px 0"
    }, theme.breakpoints.up("sm"), {
      margin: "14px 0"
    }),
    tooltipPlacementBottom: _defineProperty({
      transformOrigin: "center top",
      margin: "24px 0"
    }, theme.breakpoints.up("sm"), {
      margin: "14px 0"
    })
  };
};
var hystersisOpen = false;
var hystersisTimer = null;
var Tooltip = /* @__PURE__ */ react.forwardRef(function Tooltip2(props3, ref) {
  var _props$arrow = props3.arrow, arrow2 = _props$arrow === void 0 ? false : _props$arrow, children = props3.children, classes = props3.classes, _props$disableFocusLi = props3.disableFocusListener, disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi, _props$disableHoverLi = props3.disableHoverListener, disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi, _props$disableTouchLi = props3.disableTouchListener, disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi, _props$enterDelay = props3.enterDelay, enterDelay = _props$enterDelay === void 0 ? 100 : _props$enterDelay, _props$enterNextDelay = props3.enterNextDelay, enterNextDelay = _props$enterNextDelay === void 0 ? 0 : _props$enterNextDelay, _props$enterTouchDela = props3.enterTouchDelay, enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela, idProp = props3.id, _props$interactive = props3.interactive, interactive = _props$interactive === void 0 ? false : _props$interactive, _props$leaveDelay = props3.leaveDelay, leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay, _props$leaveTouchDela = props3.leaveTouchDelay, leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela, onClose = props3.onClose, onOpen = props3.onOpen, openProp = props3.open, _props$placement = props3.placement, placement = _props$placement === void 0 ? "bottom" : _props$placement, _props$PopperComponen = props3.PopperComponent, PopperComponent = _props$PopperComponen === void 0 ? Popper$1 : _props$PopperComponen, PopperProps = props3.PopperProps, title = props3.title, _props$TransitionComp = props3.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp, TransitionProps = props3.TransitionProps, other = _objectWithoutProperties(props3, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);
  var theme = useTheme$1();
  var _React$useState = react.useState(), childNode = _React$useState[0], setChildNode = _React$useState[1];
  var _React$useState2 = react.useState(null), arrowRef = _React$useState2[0], setArrowRef = _React$useState2[1];
  var ignoreNonTouchEvents = react.useRef(false);
  var closeTimer = react.useRef();
  var enterTimer = react.useRef();
  var leaveTimer = react.useRef();
  var touchTimer = react.useRef();
  var _useControlled = useControlled({
    controlled: openProp,
    default: false,
    name: "Tooltip",
    state: "open"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), openState = _useControlled2[0], setOpenState = _useControlled2[1];
  var open = openState;
  {
    var _React$useRef = react.useRef(openProp !== void 0), isControlled = _React$useRef.current;
    react.useEffect(function() {
      if (childNode && childNode.disabled && !isControlled && title !== "" && childNode.tagName.toLowerCase() === "button") {
        console.error(["Material-UI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join("\n"));
      }
    }, [title, childNode, isControlled]);
  }
  var id = useId(idProp);
  react.useEffect(function() {
    return function() {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);
  var handleOpen = function handleOpen2(event) {
    clearTimeout(hystersisTimer);
    hystersisOpen = true;
    setOpenState(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  var handleEnter = function handleEnter2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      var childrenProps2 = children.props;
      if (event.type === "mouseover" && childrenProps2.onMouseOver && forward) {
        childrenProps2.onMouseOver(event);
      }
      if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
        return;
      }
      if (childNode) {
        childNode.removeAttribute("title");
      }
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      if (enterDelay || hystersisOpen && enterNextDelay) {
        event.persist();
        enterTimer.current = setTimeout(function() {
          handleOpen(event);
        }, hystersisOpen ? enterNextDelay : enterDelay);
      } else {
        handleOpen(event);
      }
    };
  };
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState3 = react.useState(false), childIsFocusVisible = _React$useState3[0], setChildIsFocusVisible = _React$useState3[1];
  var handleBlur = function handleBlur2() {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };
  var handleFocus = function handleFocus2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      if (!childNode) {
        setChildNode(event.currentTarget);
      }
      if (isFocusVisible2(event)) {
        setChildIsFocusVisible(true);
        handleEnter()(event);
      }
      var childrenProps2 = children.props;
      if (childrenProps2.onFocus && forward) {
        childrenProps2.onFocus(event);
      }
    };
  };
  var handleClose = function handleClose2(event) {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(function() {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);
    if (onClose) {
      onClose(event);
    }
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function() {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  };
  var handleLeave = function handleLeave2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      var childrenProps2 = children.props;
      if (event.type === "blur") {
        if (childrenProps2.onBlur && forward) {
          childrenProps2.onBlur(event);
        }
        handleBlur();
      }
      if (event.type === "mouseleave" && childrenProps2.onMouseLeave && event.currentTarget === childNode) {
        childrenProps2.onMouseLeave(event);
      }
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      event.persist();
      leaveTimer.current = setTimeout(function() {
        handleClose(event);
      }, leaveDelay);
    };
  };
  var detectTouchStart = function detectTouchStart2(event) {
    ignoreNonTouchEvents.current = true;
    var childrenProps2 = children.props;
    if (childrenProps2.onTouchStart) {
      childrenProps2.onTouchStart(event);
    }
  };
  var handleTouchStart = function handleTouchStart2(event) {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(function() {
      handleEnter()(event);
    }, enterTouchDelay);
  };
  var handleTouchEnd = function handleTouchEnd2(event) {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function() {
      handleClose(event);
    }, leaveTouchDelay);
  };
  var handleUseRef = useForkRef(setChildNode, ref);
  var handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
  var handleOwnRef = react.useCallback(function(instance) {
    setRef(handleFocusRef, reactDom.findDOMNode(instance));
  }, [handleFocusRef]);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  if (title === "") {
    open = false;
  }
  var shouldShowNativeTitle = !open && !disableHoverListener;
  var childrenProps = _extends$5({
    "aria-describedby": open ? id : null,
    title: shouldShowNativeTitle && typeof title === "string" ? title : null
  }, other, children.props, {
    className: clsx(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  });
  var interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter();
    childrenProps.onMouseLeave = handleLeave();
    if (interactive) {
      interactiveWrapperListeners.onMouseOver = handleEnter(false);
      interactiveWrapperListeners.onMouseLeave = handleLeave(false);
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus();
    childrenProps.onBlur = handleLeave();
    if (interactive) {
      interactiveWrapperListeners.onFocus = handleFocus(false);
      interactiveWrapperListeners.onBlur = handleLeave(false);
    }
  }
  {
    if (children.props.title) {
      console.error(["Material-UI: You have provided a `title` prop to the child of <Tooltip />.", "Remove this title prop `".concat(children.props.title, "` or the Tooltip component.")].join("\n"));
    }
  }
  var mergedPopperProps = react.useMemo(function() {
    return deepmerge({
      popperOptions: {
        modifiers: {
          arrow: {
            enabled: Boolean(arrowRef),
            element: arrowRef
          }
        }
      }
    }, PopperProps);
  }, [arrowRef, PopperProps]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.cloneElement(children, childrenProps), /* @__PURE__ */ react.createElement(PopperComponent, _extends$5({
    className: clsx(classes.popper, interactive && classes.popperInteractive, arrow2 && classes.popperArrow),
    placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps["aria-describedby"],
    transition: true
  }, interactiveWrapperListeners, mergedPopperProps), function(_ref) {
    var placementInner = _ref.placement, TransitionPropsInner = _ref.TransitionProps;
    return /* @__PURE__ */ react.createElement(TransitionComponent, _extends$5({
      timeout: theme.transitions.duration.shorter
    }, TransitionPropsInner, TransitionProps), /* @__PURE__ */ react.createElement("div", {
      className: clsx(classes.tooltip, classes["tooltipPlacement".concat(capitalize(placementInner.split("-")[0]))], ignoreNonTouchEvents.current && classes.touch, arrow2 && classes.tooltipArrow)
    }, title, arrow2 ? /* @__PURE__ */ react.createElement("span", {
      className: classes.arrow,
      ref: setArrowRef
    }) : null));
  }));
});
Tooltip.propTypes = {
  arrow: propTypes.bool,
  children: elementAcceptingRef.isRequired,
  classes: propTypes.object,
  className: propTypes.string,
  disableFocusListener: propTypes.bool,
  disableHoverListener: propTypes.bool,
  disableTouchListener: propTypes.bool,
  enterDelay: propTypes.number,
  enterNextDelay: propTypes.number,
  enterTouchDelay: propTypes.number,
  id: propTypes.string,
  interactive: propTypes.bool,
  leaveDelay: propTypes.number,
  leaveTouchDelay: propTypes.number,
  onClose: propTypes.func,
  onOpen: propTypes.func,
  open: propTypes.bool,
  placement: propTypes.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  PopperComponent: propTypes.elementType,
  PopperProps: propTypes.object,
  title: propTypes.node.isRequired,
  TransitionComponent: propTypes.elementType,
  TransitionProps: propTypes.object
};
var require$$8 = withStyles$1(styles$7, {
  name: "MuiTooltip",
  flip: false
})(Tooltip);
var styles$8 = function styles7(theme) {
  return {
    root: {
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: "50%",
      overflow: "visible",
      color: theme.palette.action.active,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        backgroundColor: "transparent",
        color: theme.palette.action.disabled
      }
    },
    edgeStart: {
      marginLeft: -12,
      "$sizeSmall&": {
        marginLeft: -3
      }
    },
    edgeEnd: {
      marginRight: -12,
      "$sizeSmall&": {
        marginRight: -3
      }
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    colorSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    disabled: {},
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },
    label: {
      width: "100%",
      display: "flex",
      alignItems: "inherit",
      justifyContent: "inherit"
    }
  };
};
var IconButton = /* @__PURE__ */ react.forwardRef(function IconButton2(props3, ref) {
  var _props$edge = props3.edge, edge = _props$edge === void 0 ? false : _props$edge, children = props3.children, classes = props3.classes, className = props3.className, _props$color = props3.color, color = _props$color === void 0 ? "default" : _props$color, _props$disabled = props3.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableFocusRi = props3.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, _props$size = props3.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props3, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
  return /* @__PURE__ */ react.createElement(ButtonBase$1, _extends$5({
    className: clsx(classes.root, className, color !== "default" && classes["color".concat(capitalize(color))], disabled && classes.disabled, size === "small" && classes["size".concat(capitalize(size))], {
      start: classes.edgeStart,
      end: classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    ref
  }, other), /* @__PURE__ */ react.createElement("span", {
    className: classes.label
  }, children));
});
IconButton.propTypes = {
  children: chainPropTypes(propTypes.node, function(props3) {
    var found = react.Children.toArray(props3.children).some(function(child) {
      return /* @__PURE__ */ react.isValidElement(child) && child.props.onClick;
    });
    if (found) {
      return new Error(["Material-UI: You are providing an onClick event listener to a child of a button element.", "Firefox will never trigger the event.", "You should move the onClick listener to the parent button element.", "https://github.com/mui-org/material-ui/issues/13957"].join("\n"));
    }
    return null;
  }),
  classes: propTypes.object.isRequired,
  className: propTypes.string,
  color: propTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  disabled: propTypes.bool,
  disableFocusRipple: propTypes.bool,
  disableRipple: propTypes.bool,
  edge: propTypes.oneOf(["start", "end", false]),
  size: propTypes.oneOf(["small", "medium"])
};
var require$$9 = withStyles$1(styles$8, {
  name: "MuiIconButton"
})(IconButton);
var styles$9 = function styles8(theme) {
  return {
    root: _extends$5({}, theme.typography.button, {
      boxSizing: "border-box",
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(["background-color", "box-shadow", "border"], {
        duration: theme.transitions.duration.short
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        },
        "&$disabled": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    }),
    label: {
      width: "100%",
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit"
    },
    text: {
      padding: "6px 8px"
    },
    textPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    textSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlined: {
      padding: "5px 15px",
      border: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(alpha(theme.palette.primary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(alpha(theme.palette.secondary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      "&:hover": {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        "@media (hover: none)": {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        "&$disabled": {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      "&$focusVisible": {
        boxShadow: theme.shadows[6]
      },
      "&:active": {
        boxShadow: theme.shadows[8]
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        "@media (hover: none)": {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        "@media (hover: none)": {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    disableElevation: {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none"
      },
      "&$focusVisible": {
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none"
      },
      "&$disabled": {
        boxShadow: "none"
      }
    },
    focusVisible: {},
    disabled: {},
    colorInherit: {
      color: "inherit",
      borderColor: "currentColor"
    },
    textSizeSmall: {
      padding: "4px 5px",
      fontSize: theme.typography.pxToRem(13)
    },
    textSizeLarge: {
      padding: "8px 11px",
      fontSize: theme.typography.pxToRem(15)
    },
    outlinedSizeSmall: {
      padding: "3px 9px",
      fontSize: theme.typography.pxToRem(13)
    },
    outlinedSizeLarge: {
      padding: "7px 21px",
      fontSize: theme.typography.pxToRem(15)
    },
    containedSizeSmall: {
      padding: "4px 10px",
      fontSize: theme.typography.pxToRem(13)
    },
    containedSizeLarge: {
      padding: "8px 22px",
      fontSize: theme.typography.pxToRem(15)
    },
    sizeSmall: {},
    sizeLarge: {},
    fullWidth: {
      width: "100%"
    },
    startIcon: {
      display: "inherit",
      marginRight: 8,
      marginLeft: -4,
      "&$iconSizeSmall": {
        marginLeft: -2
      }
    },
    endIcon: {
      display: "inherit",
      marginRight: -4,
      marginLeft: 8,
      "&$iconSizeSmall": {
        marginRight: -2
      }
    },
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: 18
      }
    },
    iconSizeMedium: {
      "& > *:first-child": {
        fontSize: 20
      }
    },
    iconSizeLarge: {
      "& > *:first-child": {
        fontSize: 22
      }
    }
  };
};
var Button = /* @__PURE__ */ react.forwardRef(function Button2(props3, ref) {
  var children = props3.children, classes = props3.classes, className = props3.className, _props$color = props3.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props3.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props3.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableElevati = props3.disableElevation, disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati, _props$disableFocusRi = props3.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, endIconProp = props3.endIcon, focusVisibleClassName = props3.focusVisibleClassName, _props$fullWidth = props3.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$size = props3.size, size = _props$size === void 0 ? "medium" : _props$size, startIconProp = props3.startIcon, _props$type = props3.type, type3 = _props$type === void 0 ? "button" : _props$type, _props$variant = props3.variant, variant = _props$variant === void 0 ? "text" : _props$variant, other = _objectWithoutProperties(props3, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);
  var startIcon = startIconProp && /* @__PURE__ */ react.createElement("span", {
    className: clsx(classes.startIcon, classes["iconSize".concat(capitalize(size))])
  }, startIconProp);
  var endIcon = endIconProp && /* @__PURE__ */ react.createElement("span", {
    className: clsx(classes.endIcon, classes["iconSize".concat(capitalize(size))])
  }, endIconProp);
  return /* @__PURE__ */ react.createElement(ButtonBase$1, _extends$5({
    className: clsx(classes.root, classes[variant], className, color === "inherit" ? classes.colorInherit : color !== "default" && classes["".concat(variant).concat(capitalize(color))], size !== "medium" && [classes["".concat(variant, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type: type3
  }, other), /* @__PURE__ */ react.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
Button.propTypes = {
  children: propTypes.node,
  classes: propTypes.object,
  className: propTypes.string,
  color: propTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  component: propTypes.elementType,
  disabled: propTypes.bool,
  disableElevation: propTypes.bool,
  disableFocusRipple: propTypes.bool,
  disableRipple: propTypes.bool,
  endIcon: propTypes.node,
  focusVisibleClassName: propTypes.string,
  fullWidth: propTypes.bool,
  href: propTypes.string,
  size: propTypes.oneOf(["large", "medium", "small"]),
  startIcon: propTypes.node,
  type: propTypes.oneOfType([propTypes.oneOf(["button", "reset", "submit"]), propTypes.string]),
  variant: propTypes.oneOf(["contained", "outlined", "text"])
};
var require$$10 = withStyles$1(styles$9, {
  name: "MuiButton"
})(Button);
function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
var React = _interopDefault(react);
var _extends$1 = Object.assign || function(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target2[key] = source[key];
      }
    }
  }
  return target2;
};
var objectWithoutProperties = function(obj, keys4) {
  var target2 = {};
  for (var i in obj) {
    if (keys4.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target2[i] = obj[i];
  }
  return target2;
};
var MenuRightIcon = function MenuRightIcon2(_ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props3 = objectWithoutProperties(_ref, ["color", "size", "children"]);
  var className = "mdi-icon " + (props3.className || "");
  return React.createElement("svg", _extends$1({}, props3, {className, width: size, height: size, fill: color, viewBox: "0 0 24 24"}), React.createElement("path", {d: "M10,17L15,12L10,7V17Z"}));
};
var MenuRightIcon$1 = React.memo ? React.memo(MenuRightIcon) : MenuRightIcon;
var MenuRightIcon_1 = MenuRightIcon$1;
function _interopDefault$1(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
var React$1 = _interopDefault$1(react);
var _extends$2 = Object.assign || function(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target2[key] = source[key];
      }
    }
  }
  return target2;
};
var objectWithoutProperties$1 = function(obj, keys4) {
  var target2 = {};
  for (var i in obj) {
    if (keys4.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target2[i] = obj[i];
  }
  return target2;
};
var MenuDownIcon = function MenuDownIcon2(_ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props3 = objectWithoutProperties$1(_ref, ["color", "size", "children"]);
  var className = "mdi-icon " + (props3.className || "");
  return React$1.createElement("svg", _extends$2({}, props3, {className, width: size, height: size, fill: color, viewBox: "0 0 24 24"}), React$1.createElement("path", {d: "M7,10L12,15L17,10H7Z"}));
};
var MenuDownIcon$1 = React$1.memo ? React$1.memo(MenuDownIcon) : MenuDownIcon;
var MenuDownIcon_1 = MenuDownIcon$1;
function _interopDefault$2(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
var React$2 = _interopDefault$2(react);
var _extends$3 = Object.assign || function(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target2[key] = source[key];
      }
    }
  }
  return target2;
};
var objectWithoutProperties$2 = function(obj, keys4) {
  var target2 = {};
  for (var i in obj) {
    if (keys4.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target2[i] = obj[i];
  }
  return target2;
};
var AlertOutlineIcon = function AlertOutlineIcon2(_ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props3 = objectWithoutProperties$2(_ref, ["color", "size", "children"]);
  var className = "mdi-icon " + (props3.className || "");
  return React$2.createElement("svg", _extends$3({}, props3, {className, width: size, height: size, fill: color, viewBox: "0 0 24 24"}), React$2.createElement("path", {d: "M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16"}));
};
var AlertOutlineIcon$1 = React$2.memo ? React$2.memo(AlertOutlineIcon) : AlertOutlineIcon;
var AlertOutlineIcon_1 = AlertOutlineIcon$1;
function _interopDefault$3(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}
var React$3 = _interopDefault$3(react);
var _extends$4 = Object.assign || function(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target2[key] = source[key];
      }
    }
  }
  return target2;
};
var objectWithoutProperties$3 = function(obj, keys4) {
  var target2 = {};
  for (var i in obj) {
    if (keys4.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target2[i] = obj[i];
  }
  return target2;
};
var InformationOutlineIcon = function InformationOutlineIcon2(_ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props3 = objectWithoutProperties$3(_ref, ["color", "size", "children"]);
  var className = "mdi-icon " + (props3.className || "");
  return React$3.createElement("svg", _extends$4({}, props3, {className, width: size, height: size, fill: color, viewBox: "0 0 24 24"}), React$3.createElement("path", {d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"}));
};
var InformationOutlineIcon$1 = React$3.memo ? React$3.memo(InformationOutlineIcon) : InformationOutlineIcon;
var InformationOutlineIcon_1 = InformationOutlineIcon$1;
var build = createCommonjsModule(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(window, function() {
    return function(e) {
      var t = {};
      function r(n) {
        if (t[n])
          return t[n].exports;
        var a = t[n] = {i: n, l: false, exports: {}};
        return e[n].call(a.exports, a, a.exports, r), a.l = true, a.exports;
      }
      return r.m = e, r.c = t, r.d = function(e2, t2, n) {
        r.o(e2, t2) || Object.defineProperty(e2, t2, {enumerable: true, get: n});
      }, r.r = function(e2) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e2, "__esModule", {value: true});
      }, r.t = function(e2, t2) {
        if (1 & t2 && (e2 = r(e2)), 8 & t2)
          return e2;
        if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
          return e2;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {enumerable: true, value: e2}), 2 & t2 && typeof e2 != "string")
          for (var a in e2)
            r.d(n, a, function(t3) {
              return e2[t3];
            }.bind(null, a));
        return n;
      }, r.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return r.d(t2, "a", t2), t2;
      }, r.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, r.p = "/", r(r.s = 34);
    }([function(e, t) {
      e.exports = react;
    }, function(e, t) {
      e.exports = propTypes;
    }, function(e, t, r) {
      r.d(t, "g", function() {
        return o3;
      }), r.d(t, "d", function() {
        return i;
      }), r.d(t, "h", function() {
        return c;
      }), r.d(t, "f", function() {
        return u;
      }), r.d(t, "j", function() {
        return l;
      }), r.d(t, "a", function() {
        return s;
      }), r.d(t, "e", function() {
        return f;
      }), r.d(t, "i", function() {
        return p;
      }), r.d(t, "b", function() {
        return d;
      }), r.d(t, "c", function() {
        return m;
      }), r.d(t, "k", function() {
        return y;
      });
      var n, a = ["string", "integer", "number", "boolean", "null"], o3 = ["object", "array"], i = ["allOf", "anyOf", "oneOf", "not"], c = "$ref", u = {array: "closeArray", object: "closeObject", allOf: "and", anyOf: "or", oneOf: "or", not: "nor"}, l = [].concat(a, o3), s = [].concat(a, o3, i, function(e2) {
        if (Array.isArray(e2)) {
          for (var t2 = 0, r2 = new Array(e2.length); t2 < e2.length; t2++)
            r2[t2] = e2[t2];
          return r2;
        }
      }(n = Object.values(u)) || function(e2) {
        if (Symbol.iterator in Object(e2) || Object.prototype.toString.call(e2) === "[object Arguments]")
          return Array.from(e2);
      }(n) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }(), [c, "error"]), f = ["_type", "_contains", "_required", "_name", "_id"], p = [].concat(f, ["$id", "$schema", "type", "name", "title", "description", "items", "contains", "properties", "required", "allOf", "anyOf", "oneOf", "not", "$ref", "definitions"]), d = {array: "[", object: "{", closeArray: "]", closeObject: "}"}, m = {allOf: "// All of", anyOf: "// Any of", oneOf: "// One of", not: "// Not", and: "// and", or: "// or", nor: "// nor"}, y = {additionalItems: "Additional items must match a sub-schema. See the JSON-schema source for details.", additionalProperties: "Additional properties must match a sub-schema. See the JSON-schema source for details.", dependencies: "The schema of the object may change based on the presence of certain special properties. See the JSON-schema source for details.", propertyNames: "Names of properties must follow a specified convention. See the JSON-schema source for details.", patternProperties: "Property names or values should match the specified pattern. See the JSON-schema source for details.", required: "Required property", contains: "Only needs to validate against one or more items in the array", noType: "Type of schema is not specified. See the JSON-schema source for details."};
    }, function(e, t) {
      e.exports = styles;
    }, function(e, t) {
      e.exports = classnames;
    }, function(e, t) {
      e.exports = require$$4;
    }, function(e, t, r) {
      r.d(t, "a", function() {
        return c;
      });
      var n = r(1), a = r(2), o3 = (Object(n.shape)({$id: n.string.isRequired, type: Object(n.oneOfType)([Object(n.arrayOf)(Object(n.oneOf)(a.j)), Object(n.oneOf)(a.j)])}), Object(n.shape)({schema: Object(n.shape)({_id: n.string.isRequired, _type: Object(n.oneOfType)([Object(n.arrayOf)(Object(n.oneOf)(a.a)), Object(n.oneOf)(a.a)]), title: n.string, description: n.string, _name: n.string}).isRequired, path: Object(n.arrayOf)(n.number).isRequired, children: n.array})), i = Object(n.shape)({defaultNode: o3.isRequired, expandedNode: o3, isExpanded: n.bool.isRequired}), c = (Object(n.oneOfType)([o3, i]), function() {
      });
    }, function(e, t) {
      e.exports = es;
    }, function(e, t, r) {
      r.r(t);
      var n = r(0), a = r.n(n), o3 = r(3), i = r(15), c = r.n(i), u = Object(o3.makeStyles)({root: {display: "inline"}});
      t.default = function(e2) {
        var t2 = e2.title, r2 = e2.children, n2 = u();
        return a.a.createElement(c.a, {title: t2, arrow: true, placement: "bottom-start", disableFocusListener: true, enterTouchDelay: 1, className: n2.root}, a.a.createElement("div", null, r2));
      };
    }, function(e, t, r) {
      r.d(t, "a", function() {
        return u;
      }), r.d(t, "c", function() {
        return p;
      }), r.d(t, "b", function() {
        return d;
      });
      var n = r(7), a = r(12), o3 = r(2);
      function i(e2, t2) {
        return function(e3) {
          if (Array.isArray(e3))
            return e3;
        }(e2) || function(e3, t3) {
          if (!(Symbol.iterator in Object(e3) || Object.prototype.toString.call(e3) === "[object Arguments]"))
            return;
          var r2 = [], n2 = true, a2 = false, o4 = void 0;
          try {
            for (var i2, c2 = e3[Symbol.iterator](); !(n2 = (i2 = c2.next()).done) && (r2.push(i2.value), !t3 || r2.length !== t3); n2 = true)
              ;
          } catch (e4) {
            a2 = true, o4 = e4;
          } finally {
            try {
              n2 || c2.return == null || c2.return();
            } finally {
              if (a2)
                throw o4;
            }
          }
          return r2;
        }(e2, t2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function c(e2) {
        return function(e3) {
          if (Array.isArray(e3)) {
            for (var t2 = 0, r2 = new Array(e3.length); t2 < e3.length; t2++)
              r2[t2] = e3[t2];
            return r2;
          }
        }(e2) || function(e3) {
          if (Symbol.iterator in Object(e3) || Object.prototype.toString.call(e3) === "[object Arguments]")
            return Array.from(e3);
        }(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function u(e2) {
        var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r2 = {schema: l(e2), children: [], path: t2};
        if ("$ref" in r2.schema)
          return {defaultNode: r2, expandedNode: null, isExpanded: false};
        var a2 = r2.schema._type;
        return o3.d.includes(a2) ? function(e3) {
          var t3 = e3.schema, r3 = t3._type;
          if (Array.isArray(t3[r3])) {
            t3[r3].forEach(function(t4, r4) {
              s(e3, t4, r4);
            });
          } else
            s(e3, t3[r3], 0);
        }(r2) : a2 === "array" ? function(e3) {
          var t3 = e3.schema;
          "items" in t3 && (Array.isArray(t3.items) ? t3.items.forEach(function(t4, r4) {
            s(e3, t4, r4);
          }) : s(e3, t3.items, 0));
          if ("contains" in t3) {
            var r3 = t3.contains, n2 = e3.children.length;
            r3._contains = true, s(e3, r3, n2);
          }
        }(r2) : a2 === "object" && function(e3) {
          var t3 = e3.schema;
          if ("properties" in t3) {
            var r3 = "required" in t3 ? new Set(t3.required) : new Set();
            Object.keys(t3.properties).forEach(function(a3, o4) {
              var i2 = Object(n.clone)(t3.properties[a3]);
              i2._name = a3, r3.has(a3) && (i2._required = true), s(e3, i2, o4);
            });
          }
        }(r2), r2;
      }
      function l(e2) {
        var t2 = Object(n.clone)(e2);
        "type" in t2 ? t2._type = t2.type : [].concat(c(o3.d), [o3.h]).forEach(function(e3) {
          e3 in t2 && (t2._type = e3);
        });
        return "$id" in t2 && (t2._id = t2.$id), "name" in t2 && (t2._name = t2.name), t2;
      }
      function s(e2, t2, r2) {
        var a2 = Object(n.clone)(t2);
        a2._id = e2.schema._id;
        var o4 = u(a2, [].concat(c(e2.path), [r2]));
        e2.children.push(o4);
      }
      function f(e2, t2) {
        var r2 = Object(n.clone)(e2), a2 = r2;
        return t2.path.forEach(function(e3) {
          "isExpanded" in a2 && (a2 = a2.expandedNode), a2 = a2.children[e3];
        }), [r2, a2];
      }
      function p(e2, t2) {
        var r2 = i(f(e2, t2), 2), n2 = r2[0];
        return r2[1].isExpanded = false, n2;
      }
      function d(e2, t2, r2) {
        var n2 = i(f(e2, t2), 2), c2 = n2[0], l2 = n2[1];
        if (l2.isExpanded = true, !l2.expandedNode) {
          var s2 = function(e3, t3, r3) {
            var n3 = i(t3.split("#"), 2), o4 = n3[0], c3 = n3[1], u2 = e3.slice(0, -1);
            try {
              var l3 = function(e4, t4) {
                if (e4.length === 0)
                  return t4;
                if (!Object(a.isAbsolute)(e4))
                  try {
                    return new URL(e4).toString();
                  } catch (n4) {
                    if (n4 instanceof TypeError) {
                      var r4 = Object(a.dirname)(t4);
                      return Object(a.resolve)(r4, e4);
                    }
                  }
                return e4;
              }(o4, u2).concat("#"), s3 = r3[l3];
              if (!s3)
                throw new Error("Cannot find reference to `".concat(l3, "`."));
              return c3.split("/").forEach(function(e4, t4) {
                if (t4 > 0) {
                  if (!(e4 in s3))
                    throw new Error("Cannot find `".concat(c3, "` in `").concat(l3, "`."));
                  s3 = s3[e4];
                }
              }), s3;
            } catch (e4) {
              return {type: "error", description: e4.message};
            }
          }(t2.schema._id, t2.schema.$ref, r2);
          o3.e.forEach(function(e3) {
            e3 in t2.schema && !(e3 in s2) && (s2[e3] = t2.schema[e3]);
          }), l2.expandedNode = u(s2, t2.path);
        }
        return c2;
      }
    }, function(e, t, r) {
      r.r(t);
      var n = r(0), a = r.n(n), o3 = r(3), i = r(4), c = r.n(i), u = r(11), l = r.n(u);
      function s(e2, t2, r2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, {value: r2, enumerable: true, configurable: true, writable: true}) : e2[t2] = r2, e2;
      }
      var f = Object(o3.makeStyles)(function(e2) {
        return {markdown: {"& code": {color: e2.palette.text.primary, backgroundColor: e2.palette.text.disabled, padding: e2.spacing(0.25)}}, inverse: {"& code": {color: e2.palette.common.black, backgroundColor: e2.palette.common.white, padding: e2.spacing(0.25)}}};
      });
      function p(e2) {
        var t2 = e2.children, r2 = e2.inverse, n2 = f(), o4 = l()({linkify: true});
        return a.a.createElement("span", {className: c()(s({}, "".concat(n2.markdown), !r2), s({}, "".concat(n2.inverse), r2)), dangerouslySetInnerHTML: {__html: o4.renderInline(t2)}});
      }
      p.defaultProps = {children: "", inverse: false}, t.default = a.a.memo(p);
    }, function(e, t) {
      e.exports = markdownIt;
    }, function(e, t, r) {
      (function(e2) {
        function r2(e3, t2) {
          for (var r3 = 0, n2 = e3.length - 1; n2 >= 0; n2--) {
            var a2 = e3[n2];
            a2 === "." ? e3.splice(n2, 1) : a2 === ".." ? (e3.splice(n2, 1), r3++) : r3 && (e3.splice(n2, 1), r3--);
          }
          if (t2)
            for (; r3--; r3)
              e3.unshift("..");
          return e3;
        }
        function n(e3, t2) {
          if (e3.filter)
            return e3.filter(t2);
          for (var r3 = [], n2 = 0; n2 < e3.length; n2++)
            t2(e3[n2], n2, e3) && r3.push(e3[n2]);
          return r3;
        }
        t.resolve = function() {
          for (var t2 = "", a2 = false, o3 = arguments.length - 1; o3 >= -1 && !a2; o3--) {
            var i = o3 >= 0 ? arguments[o3] : e2.cwd();
            if (typeof i != "string")
              throw new TypeError("Arguments to path.resolve must be strings");
            i && (t2 = i + "/" + t2, a2 = i.charAt(0) === "/");
          }
          return (a2 ? "/" : "") + (t2 = r2(n(t2.split("/"), function(e3) {
            return !!e3;
          }), !a2).join("/")) || ".";
        }, t.normalize = function(e3) {
          var o3 = t.isAbsolute(e3), i = a(e3, -1) === "/";
          return (e3 = r2(n(e3.split("/"), function(e4) {
            return !!e4;
          }), !o3).join("/")) || o3 || (e3 = "."), e3 && i && (e3 += "/"), (o3 ? "/" : "") + e3;
        }, t.isAbsolute = function(e3) {
          return e3.charAt(0) === "/";
        }, t.join = function() {
          var e3 = Array.prototype.slice.call(arguments, 0);
          return t.normalize(n(e3, function(e4, t2) {
            if (typeof e4 != "string")
              throw new TypeError("Arguments to path.join must be strings");
            return e4;
          }).join("/"));
        }, t.relative = function(e3, r3) {
          function n2(e4) {
            for (var t2 = 0; t2 < e4.length && e4[t2] === ""; t2++)
              ;
            for (var r4 = e4.length - 1; r4 >= 0 && e4[r4] === ""; r4--)
              ;
            return t2 > r4 ? [] : e4.slice(t2, r4 - t2 + 1);
          }
          e3 = t.resolve(e3).substr(1), r3 = t.resolve(r3).substr(1);
          for (var a2 = n2(e3.split("/")), o3 = n2(r3.split("/")), i = Math.min(a2.length, o3.length), c = i, u = 0; u < i; u++)
            if (a2[u] !== o3[u]) {
              c = u;
              break;
            }
          var l = [];
          for (u = c; u < a2.length; u++)
            l.push("..");
          return (l = l.concat(o3.slice(c))).join("/");
        }, t.sep = "/", t.delimiter = ":", t.dirname = function(e3) {
          if (typeof e3 != "string" && (e3 += ""), e3.length === 0)
            return ".";
          for (var t2 = e3.charCodeAt(0), r3 = t2 === 47, n2 = -1, a2 = true, o3 = e3.length - 1; o3 >= 1; --o3)
            if ((t2 = e3.charCodeAt(o3)) === 47) {
              if (!a2) {
                n2 = o3;
                break;
              }
            } else
              a2 = false;
          return n2 === -1 ? r3 ? "/" : "." : r3 && n2 === 1 ? "/" : e3.slice(0, n2);
        }, t.basename = function(e3, t2) {
          var r3 = function(e4) {
            typeof e4 != "string" && (e4 += "");
            var t3, r4 = 0, n2 = -1, a2 = true;
            for (t3 = e4.length - 1; t3 >= 0; --t3)
              if (e4.charCodeAt(t3) === 47) {
                if (!a2) {
                  r4 = t3 + 1;
                  break;
                }
              } else
                n2 === -1 && (a2 = false, n2 = t3 + 1);
            return n2 === -1 ? "" : e4.slice(r4, n2);
          }(e3);
          return t2 && r3.substr(-1 * t2.length) === t2 && (r3 = r3.substr(0, r3.length - t2.length)), r3;
        }, t.extname = function(e3) {
          typeof e3 != "string" && (e3 += "");
          for (var t2 = -1, r3 = 0, n2 = -1, a2 = true, o3 = 0, i = e3.length - 1; i >= 0; --i) {
            var c = e3.charCodeAt(i);
            if (c !== 47)
              n2 === -1 && (a2 = false, n2 = i + 1), c === 46 ? t2 === -1 ? t2 = i : o3 !== 1 && (o3 = 1) : t2 !== -1 && (o3 = -1);
            else if (!a2) {
              r3 = i + 1;
              break;
            }
          }
          return t2 === -1 || n2 === -1 || o3 === 0 || o3 === 1 && t2 === n2 - 1 && t2 === r3 + 1 ? "" : e3.slice(t2, n2);
        };
        var a = "ab".substr(-1) === "b" ? function(e3, t2, r3) {
          return e3.substr(t2, r3);
        } : function(e3, t2, r3) {
          return t2 < 0 && (t2 = e3.length + t2), e3.substr(t2, r3);
        };
      }).call(this, r(25));
    }, function(e, t, r) {
      r.r(t);
      var n = r(0), a = r.n(n), o3 = r(3), i = r(14), c = r.n(i), u = Object(o3.makeStyles)(function(e2) {
        return {chip: {color: e2.palette.text.primary, borderColor: e2.palette.text.secondary}};
      });
      function l(e2) {
        var t2 = e2.label, r2 = e2.icon, n2 = u();
        return a.a.createElement(c.a, {className: n2.chip, label: t2, icon: r2, size: "small", variant: "outlined"});
      }
      l.defaultProps = {icon: null}, t.default = a.a.memo(l);
    }, function(e, t) {
      e.exports = require$$7;
    }, function(e, t) {
      e.exports = require$$8;
    }, function(e, t) {
      e.exports = require$$9;
    }, function(e, t) {
      e.exports = require$$10;
    }, function(e, t) {
      e.exports = MenuRightIcon_1;
    }, function(e, t) {
      e.exports = MenuDownIcon_1;
    }, function(e, t) {
      e.exports = AlertOutlineIcon_1;
    }, function(e, t) {
      e.exports = InformationOutlineIcon_1;
    }, function(e, t, r) {
      r.r(t);
      var n = r(0), a = r.n(n), o3 = r(3), i = r(5), c = r.n(i), u = r(17), l = r.n(u), s = r(10), f = (r(6), Object(o3.makeStyles)(function(e2) {
        return {container: {backgroundColor: e2.palette.background.paper, color: e2.palette.text.primary, padding: "".concat(e2.spacing(1.5), "px ").concat(e2.spacing(1), "px")}, title: {color: e2.palette.text.primary, margin: 0}, description: {color: e2.palette.text.primary}, button: {margin: e2.spacing(1)}};
      }));
      t.default = a.a.memo(function(e2) {
        var t2 = e2.schema, r2 = e2.sourceMode, n2 = e2.toggleMode, o4 = f();
        return a.a.createElement("div", {className: o4.container}, a.a.createElement(c.a, {component: "div", variant: "h6", className: o4.title}, a.a.createElement(s.default, null, t2.title), a.a.createElement(l.a, {className: o4.button, color: "secondary", size: "small", onClick: n2}, r2 ? "hide" : "show", " source")), a.a.createElement(c.a, {component: "div", variant: "subtitle2", className: o4.description}, a.a.createElement(s.default, null, t2.description)));
      });
    }, function(e, t, r) {
      r.r(t);
      var n = r(0), a = r.n(n), o3 = r(3), i = (r(6), Object(o3.makeStyles)(function(e2) {
        return {view: {backgroundColor: e2.palette.background.paper, color: e2.palette.text.primary, overflowX: "auto", padding: e2.spacing(1), margin: 0}};
      }));
      t.default = a.a.memo(function(e2) {
        var t2 = e2.schema, r2 = i(), n2 = JSON.stringify(t2, void 0, 2);
        return a.a.createElement("pre", {className: r2.view}, a.a.createElement("code", null, n2));
      });
    }, function(e, t, r) {
      r.r(t);
      var n = r(0), a = r.n(n), o3 = r(4), i = r.n(o3), c = r(3), u = Object(c.makeStyles)(function(e2) {
        return {wrapper: {display: "block", overflow: "hidden", position: "relative", backgroundColor: e2.palette.background.paper}, cell: {float: "left", boxSizing: "border-box", borderTop: "".concat(e2.spacing(0.125), "px solid ").concat(e2.palette.divider), overflowX: "auto"}, left: {width: "50%", paddingLeft: e2.spacing(1)}, right: {width: "50%"}, break: {clear: "both"}};
      });
      var l = a.a.memo(function(e2) {
        var t2 = e2.rows, r2 = u();
        return a.a.createElement("div", {className: r2.wrapper}, t2.map(function(e3, t3) {
          var o4 = e3.left, c2 = e3.right;
          return a.a.createElement(n.Fragment, {key: "row-".concat(t3)}, a.a.createElement("div", {className: i()(r2.cell, r2.left)}, o4), a.a.createElement("div", {className: i()(r2.cell, r2.right)}, c2), a.a.createElement("div", {className: r2.break}));
        }));
      }), s = r(5), f = r.n(s), p = r(16), d = r.n(p), m = r(18), y = r.n(m), h = r(19), b = r.n(h), g = r(20), v = r.n(g), O = r(8), j = r(6), E = r(9), w = r(2);
      function x(e2) {
        return function(e3) {
          if (Array.isArray(e3)) {
            for (var t2 = 0, r2 = new Array(e3.length); t2 < e3.length; t2++)
              r2[t2] = e3[t2];
            return r2;
          }
        }(e2) || function(e3) {
          if (Symbol.iterator in Object(e3) || Object.prototype.toString.call(e3) === "[object Arguments]")
            return Array.from(e3);
        }(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      var S = Object(c.makeStyles)(function(e2) {
        return {indentation: {marginTop: e2.spacing(1), marginBottom: e2.spacing(1), marginLeft: function(t2) {
          return e2.spacing(2 * t2);
        }}, typography: {color: e2.palette.text.primary, display: "flex", alignItems: "center"}, name: {marginRight: e2.spacing(0.5), fontFamily: "monospace"}, code: {backgroundColor: e2.palette.text.primary, color: e2.palette.getContrastText(e2.palette.text.primary), padding: "0 ".concat(e2.spacing(0.5), "px"), fontSize: e2.typography.subtitle2.fontSize, fontWeight: e2.typography.subtitle2.fontWeight, fontFamily: "monospace"}, missingType: {display: "flex", alignItems: "center"}, comment: {color: e2.palette.text.hint}, prefix: {color: e2.palette.error.main, padding: "0 ".concat(e2.spacing(0.5), "px")}, refButton: {marginLeft: e2.spacing(1)}};
      });
      function A(e2) {
        var t2 = e2.treeNode, r2 = e2.refType, n2 = e2.setSchemaTree, o4 = e2.references, c2 = t2.schema, u2 = t2.path, l2 = c2._type, s2 = c2._name, p2 = u2.length, m2 = S(p2), h2 = function(e3, t3) {
          return w.d.includes(t3), a.a.createElement("span", {className: m2.name}, "".concat(e3, ":"));
        }(s2, l2), g2 = function(e3) {
          var t3 = [].concat(x(w.g), [w.f.array, w.f.object]), r3 = [].concat(x(w.d), x(w.d.map(function(e4) {
            return w.f[e4];
          })));
          if (!e3)
            return a.a.createElement(O.default, {title: w.k.noType}, a.a.createElement("div", {className: m2.missingType}, a.a.createElement(v.a, null)));
          if (t3.includes(e3))
            return w.b[e3];
          if (r3.includes(e3))
            return a.a.createElement("span", {className: m2.comment}, w.c[e3]);
          if (Array.isArray(e3)) {
            var n3 = [];
            return e3.forEach(function(e4, t4) {
              t4 > 0 && n3.push(a.a.createElement("span", {key: "".concat(e4, "-comma")}, ",")), n3.push(a.a.createElement("code", {key: e4, className: m2.code}, e4));
            }), n3;
          }
          return a.a.createElement("code", {className: m2.code}, e3);
        }(l2), j2 = function(e3) {
          return e3._required ? a.a.createElement(O.default, {title: w.k.required}, a.a.createElement("span", {className: m2.prefix}, "*")) : e3._contains ? a.a.createElement(O.default, {title: w.k.contains}, a.a.createElement("span", {className: m2.prefix}, "⊃")) : null;
        }(c2), A2 = {none: null, default: a.a.createElement(d.a, {className: m2.refButton, "aria-label": "expand-ref", size: "small"}, a.a.createElement(y.a, {size: 24})), expanded: a.a.createElement(d.a, {className: m2.refButton, "aria-label": "shrink-ref", size: "small"}, a.a.createElement(b.a, {size: 24}))}[r2], k2 = {none: function() {
        }, default: function() {
          return n2(function(e3) {
            return Object(E.b)(e3, t2, o4);
          });
        }, expanded: function() {
          return n2(function(e3) {
            return Object(E.c)(e3, t2);
          });
        }}[r2];
        return a.a.createElement("div", {key: l2, onClick: k2}, a.a.createElement(f.a, {component: "div", variant: "subtitle2", className: i()(m2.typography, m2.indentation)}, s2 && h2, g2, j2, A2));
      }
      A.defaultProps = {setSchemaTree: j.a, references: {}};
      var k = a.a.memo(A), T2 = r(7), N = r(21), _ = r.n(N), q = r(10), P2 = r(13);
      function C(e2) {
        return (C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      var I = Object(c.makeStyles)(function(e2) {
        return {typography: {color: e2.palette.text.primary}, infoBlock: {marginTop: e2.spacing(1), marginBottom: e2.spacing(1)}};
      });
      var z = a.a.memo(function(e2) {
        var t2 = e2.treeNode.schema, r2 = I(), o4 = Object.keys(t2).filter(function(e3) {
          return !w.i.includes(e3);
        });
        return a.a.createElement("div", null, (t2.title || t2.description) && a.a.createElement("div", {className: r2.infoBlock}, t2.title && a.a.createElement(f.a, {className: r2.typography, variant: "subtitle2"}, a.a.createElement("strong", null, t2.title)), t2.description && a.a.createElement(f.a, {className: r2.typography, variant: "body2"}, a.a.createElement(q.default, null, t2.description))), o4.length > 0 && a.a.createElement("div", {className: i()(r2.typography, r2.infoBlock)}, o4.map(function(e3) {
          return function(e4) {
            if (C(t2[e4]) === "object" && !Array.isArray(t2[e4]) && !Object(T2.isEmpty)(t2[e4])) {
              var r3 = w.k[e4], o5 = a.a.createElement(_.a, {fontSize: "inherit"});
              return a.a.createElement(n.Fragment, {key: e4}, a.a.createElement(O.default, {key: e4, title: r3}, a.a.createElement(P2.default, {label: e4, icon: o5})), a.a.createElement("wbr", null));
            }
            var i2, c2 = (i2 = e4, Array.isArray(t2[e4]) ? t2[e4].length === 0 ? "[ ]" : t2[e4] : C(t2[e4]) === "object" && Object.keys(t2[e4].length === 0) ? "{ }" : t2[i2]);
            return a.a.createElement(n.Fragment, {key: e4}, a.a.createElement(P2.default, {label: "".concat(e4, ": ").concat(c2)}), a.a.createElement("wbr", null));
          }(e3);
        })));
      });
      function M(e2) {
        return function(e3) {
          if (Array.isArray(e3)) {
            for (var t2 = 0, r2 = new Array(e3.length); t2 < e3.length; t2++)
              r2[t2] = e3[t2];
            return r2;
          }
        }(e2) || function(e3) {
          if (Symbol.iterator in Object(e3) || Object.prototype.toString.call(e3) === "[object Arguments]")
            return Array.from(e3);
        }(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      t.default = a.a.memo(function(e2) {
        var t2 = e2.schemaTree, r2 = e2.setSchemaTree, n2 = e2.references, o4 = [];
        function i2(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", i3 = t3 === "none" ? null : r2, c3 = t3 === "none" ? null : n2;
          return {left: a.a.createElement(k, {key: "left-row-".concat(o4.length + 1), treeNode: e3, refType: t3, setSchemaTree: i3, references: c3}), right: a.a.createElement(z, {key: "right-row-".concat(o4.length + 1), treeNode: e3})};
        }
        function c2(e3) {
          var t3 = e3.schema, r3 = e3.path, n3 = t3._type, a2 = {$id: t3._id, type: w.f[n3]}, o5 = w.d.includes(n3) ? [].concat(M(r3), [0]) : r3;
          return i2(Object(E.a)(a2, o5));
        }
        function u2(e3) {
          var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
          if ("isExpanded" in e3)
            !function(e4) {
              var t4 = e4.defaultNode, r4 = e4.expandedNode, n4 = e4.isExpanded, a3 = n4 ? "expanded" : "default";
              if (n4)
                u2(r4, a3);
              else {
                var c3 = i2(t4, a3);
                o4.push(c3);
              }
            }(e3);
          else {
            var r3 = e3.schema, n3 = e3.children, a2 = r3._type, l2 = i2(e3, t3);
            if (o4.push(l2), n3 && n3.forEach(function(t4, r4) {
              if (w.d.includes(a2) && r4 > 0) {
                var n4 = c2(e3);
                o4.push(n4);
              }
              u2(t4);
            }), w.g.includes(a2)) {
              var s2 = c2(e3);
              o4.push(s2);
            }
          }
        }
        return u2(t2), a.a.createElement(l, {rows: o4});
      });
    }, function(e, t) {
      var r, n, a = e.exports = {};
      function o3() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(e2) {
        if (r === setTimeout)
          return setTimeout(e2, 0);
        if ((r === o3 || !r) && setTimeout)
          return r = setTimeout, setTimeout(e2, 0);
        try {
          return r(e2, 0);
        } catch (t2) {
          try {
            return r.call(null, e2, 0);
          } catch (t3) {
            return r.call(this, e2, 0);
          }
        }
      }
      !function() {
        try {
          r = typeof setTimeout == "function" ? setTimeout : o3;
        } catch (e2) {
          r = o3;
        }
        try {
          n = typeof clearTimeout == "function" ? clearTimeout : i;
        } catch (e2) {
          n = i;
        }
      }();
      var u, l = [], s = false, f = -1;
      function p() {
        s && u && (s = false, u.length ? l = u.concat(l) : f = -1, l.length && d());
      }
      function d() {
        if (!s) {
          var e2 = c(p);
          s = true;
          for (var t2 = l.length; t2; ) {
            for (u = l, l = []; ++f < t2; )
              u && u[f].run();
            f = -1, t2 = l.length;
          }
          u = null, s = false, function(e3) {
            if (n === clearTimeout)
              return clearTimeout(e3);
            if ((n === i || !n) && clearTimeout)
              return n = clearTimeout, clearTimeout(e3);
            try {
              n(e3);
            } catch (t3) {
              try {
                return n.call(null, e3);
              } catch (t4) {
                return n.call(this, e3);
              }
            }
          }(e2);
        }
      }
      function m(e2, t2) {
        this.fun = e2, this.array = t2;
      }
      function y() {
      }
      a.nextTick = function(e2) {
        var t2 = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r2 = 1; r2 < arguments.length; r2++)
            t2[r2 - 1] = arguments[r2];
        l.push(new m(e2, t2)), l.length !== 1 || s || c(d);
      }, m.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = true, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = y, a.addListener = y, a.once = y, a.off = y, a.removeListener = y, a.removeAllListeners = y, a.emit = y, a.prependListener = y, a.prependOnceListener = y, a.listeners = function(e2) {
        return [];
      }, a.binding = function(e2) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function() {
        return "/";
      }, a.chdir = function(e2) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function() {
        return 0;
      };
    }, function(e, t, r) {
      r.r(t);
      var n = r(0), a = r.n(n), o3 = r(22), i = r(24), c = r(23), u = (r(6), r(9));
      function l(e2, t2) {
        var r2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(e2);
          t2 && (n2 = n2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function s(e2, t2, r2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, {value: r2, enumerable: true, configurable: true, writable: true}) : e2[t2] = r2, e2;
      }
      function f(e2, t2) {
        return function(e3) {
          if (Array.isArray(e3))
            return e3;
        }(e2) || function(e3, t3) {
          if (!(Symbol.iterator in Object(e3) || Object.prototype.toString.call(e3) === "[object Arguments]"))
            return;
          var r2 = [], n2 = true, a2 = false, o4 = void 0;
          try {
            for (var i2, c2 = e3[Symbol.iterator](); !(n2 = (i2 = c2.next()).done) && (r2.push(i2.value), !t3 || r2.length !== t3); n2 = true)
              ;
          } catch (e4) {
            a2 = true, o4 = e4;
          } finally {
            try {
              n2 || c2.return == null || c2.return();
            } finally {
              if (a2)
                throw o4;
            }
          }
          return r2;
        }(e2, t2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function p(e2) {
        var t2 = e2.schema, r2 = e2.references, p2 = f(Object(n.useState)(Object(u.a)(t2)), 2), d = p2[0], m = p2[1], y = f(Object(n.useState)(false), 2), h = y[0], b = y[1], g = r2.reduce(function(e3, t3) {
          return function(e4) {
            for (var t4 = 1; t4 < arguments.length; t4++) {
              var r3 = arguments[t4] != null ? arguments[t4] : {};
              t4 % 2 ? l(Object(r3), true).forEach(function(t5) {
                s(e4, t5, r3[t5]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r3)) : l(Object(r3)).forEach(function(t5) {
                Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(r3, t5));
              });
            }
            return e4;
          }({}, e3, s({}, t3.$id, t3));
        }, {});
        return a.a.createElement(n.Fragment, null, a.a.createElement(o3.default, {schema: t2, sourceMode: h, toggleMode: function() {
          b(function(e3) {
            return !e3;
          });
        }}), h ? a.a.createElement(c.default, {schema: t2}) : a.a.createElement(i.default, {schemaTree: d, setSchemaTree: m, references: g}));
      }
      p.defaultProps = {schema: {type: "null"}, references: []}, t.default = a.a.memo(p);
    }, , , , , , , , function(e, t, r) {
      e.exports = r(35);
    }, function(e, t, r) {
      r.r(t);
      var n = r(26);
      r.d(t, "SchemaViewer", function() {
        return n.default;
      }), t.default = n.default;
    }]);
  });
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(build);
export default __pika_web_default_export_for_treeshaking__;
