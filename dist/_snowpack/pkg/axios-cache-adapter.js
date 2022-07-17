import {c as createCommonjsModule} from "./common/_commonjsHelpers-b3efd043.js";
import {a as axios} from "./common/index-03e44bfd.js";
import "./common/_polyfill-node:global-acbc543a.js";
var cache = createCommonjsModule(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(axios);
  })(window, function(__WEBPACK_EXTERNAL_MODULE_axios__) {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, {enumerable: true, get: getter});
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, {value: "Module"});
        }
        Object.defineProperty(exports2, "__esModule", {value: true});
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {enumerable: true, value});
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }({
      "./node_modules/cache-control-esm/index.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CacheControl", function() {
          return CacheControl;
        });
        __webpack_require__.d(__webpack_exports__, "parse", function() {
          return parse;
        });
        __webpack_require__.d(__webpack_exports__, "format", function() {
          return format;
        });
        var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es6.array.from.js");
        var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.function.name.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/web.dom.iterable.js");
        var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/core-js/modules/es7.symbol.async-iterator.js");
        var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/core-js/modules/es6.symbol.js");
        var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/core-js/modules/es6.regexp.split.js");
        var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/core-js/modules/es6.number.is-finite.js");
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var HEADER_REGEXP = /([a-zA-Z][a-zA-Z_-]*)\s*(?:=(?:"([^"]*)"|([^ \t",;]*)))?/g;
        var STRINGS = {
          maxAge: "max-age",
          sharedMaxAge: "s-maxage",
          maxStale: "max-stale",
          minFresh: "min-fresh",
          immutable: "immutable",
          mustRevalidate: "must-revalidate",
          noCache: "no-cache",
          noStore: "no-store",
          noTransform: "no-transform",
          onlyIfCached: "only-if-cached",
          private: "private",
          proxyRevalidate: "proxy-revalidate",
          public: "public"
        };
        function parseBooleanOnly(value) {
          return value === null;
        }
        function parseDuration(value) {
          if (!value) {
            return null;
          }
          var duration = parseInt(value, 10);
          if (!Number.isFinite(duration) || duration < 0) {
            return null;
          }
          return duration;
        }
        var CacheControl = /* @__PURE__ */ function() {
          function CacheControl2() {
            _classCallCheck(this, CacheControl2);
            this.maxAge = null;
            this.sharedMaxAge = null;
            this.maxStale = null;
            this.maxStaleDuration = null;
            this.minFresh = null;
            this.immutable = null;
            this.mustRevalidate = null;
            this.noCache = null;
            this.noStore = null;
            this.noTransform = null;
            this.onlyIfCached = null;
            this["private"] = null;
            this.proxyRevalidate = null;
            this["public"] = null;
          }
          _createClass(CacheControl2, [{
            key: "parse",
            value: function parse2(header) {
              if (!header || header.length === 0) {
                return this;
              }
              var values = {};
              var matches = header.match(HEADER_REGEXP) || [];
              Array.prototype.forEach.call(matches, function(match) {
                var tokens = match.split("=", 2);
                var _tokens = _slicedToArray(tokens, 1), key = _tokens[0];
                var value = null;
                if (tokens.length > 1) {
                  value = tokens[1].trim();
                }
                values[key.toLowerCase()] = value;
              });
              this.maxAge = parseDuration(values[STRINGS.maxAge]);
              this.sharedMaxAge = parseDuration(values[STRINGS.sharedMaxAge]);
              this.maxStale = parseBooleanOnly(values[STRINGS.maxStale]);
              this.maxStaleDuration = parseDuration(values[STRINGS.maxStale]);
              if (this.maxStaleDuration) {
                this.maxStale = true;
              }
              this.minFresh = parseDuration(values[STRINGS.minFresh]);
              this.immutable = parseBooleanOnly(values[STRINGS.immutable]);
              this.mustRevalidate = parseBooleanOnly(values[STRINGS.mustRevalidate]);
              this.noCache = parseBooleanOnly(values[STRINGS.noCache]);
              this.noStore = parseBooleanOnly(values[STRINGS.noStore]);
              this.noTransform = parseBooleanOnly(values[STRINGS.noTransform]);
              this.onlyIfCached = parseBooleanOnly(values[STRINGS.onlyIfCached]);
              this["private"] = parseBooleanOnly(values[STRINGS["private"]]);
              this.proxyRevalidate = parseBooleanOnly(values[STRINGS.proxyRevalidate]);
              this["public"] = parseBooleanOnly(values[STRINGS["public"]]);
              return this;
            }
          }, {
            key: "format",
            value: function format2() {
              var tokens = [];
              if (this.maxAge) {
                tokens.push("".concat(STRINGS.maxAge, "=").concat(this.maxAge));
              }
              if (this.sharedMaxAge) {
                tokens.push("".concat(STRINGS.sharedMaxAge, "=").concat(this.sharedMaxAge));
              }
              if (this.maxStale) {
                if (this.maxStaleDuration) {
                  tokens.push("".concat(STRINGS.maxStale, "=").concat(this.maxStaleDuration));
                } else {
                  tokens.push(STRINGS.maxStale);
                }
              }
              if (this.minFresh) {
                tokens.push("".concat(STRINGS.minFresh, "=").concat(this.minFresh));
              }
              if (this.immutable) {
                tokens.push(STRINGS.immutable);
              }
              if (this.mustRevalidate) {
                tokens.push(STRINGS.mustRevalidate);
              }
              if (this.noCache) {
                tokens.push(STRINGS.noCache);
              }
              if (this.noStore) {
                tokens.push(STRINGS.noStore);
              }
              if (this.noTransform) {
                tokens.push(STRINGS.noTransform);
              }
              if (this.onlyIfCached) {
                tokens.push(STRINGS.onlyIfCached);
              }
              if (this["private"]) {
                tokens.push(STRINGS["private"]);
              }
              if (this.proxyRevalidate) {
                tokens.push(STRINGS.proxyRevalidate);
              }
              if (this["public"]) {
                tokens.push(STRINGS["public"]);
              }
              return tokens.join(", ");
            }
          }]);
          return CacheControl2;
        }();
        function parse(header) {
          var cc = new CacheControl();
          return cc.parse(header);
        }
        function format(cc) {
          if (!(cc instanceof CacheControl)) {
            return CacheControl.prototype.format.call(cc);
          }
          return cc.format();
        }
        __webpack_exports__["default"] = {
          CacheControl,
          parse,
          format
        };
      },
      "./node_modules/charenc/charenc.js": function(module2, exports2) {
        var charenc = {
          utf8: {
            stringToBytes: function(str) {
              return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
            },
            bytesToString: function(bytes) {
              return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
            }
          },
          bin: {
            stringToBytes: function(str) {
              for (var bytes = [], i = 0; i < str.length; i++)
                bytes.push(str.charCodeAt(i) & 255);
              return bytes;
            },
            bytesToString: function(bytes) {
              for (var str = [], i = 0; i < bytes.length; i++)
                str.push(String.fromCharCode(bytes[i]));
              return str.join("");
            }
          }
        };
        module2.exports = charenc;
      },
      "./node_modules/core-js/modules/_a-function.js": function(module2, exports2) {
        module2.exports = function(it) {
          if (typeof it != "function")
            throw TypeError(it + " is not a function!");
          return it;
        };
      },
      "./node_modules/core-js/modules/_add-to-unscopables.js": function(module2, exports2, __webpack_require__) {
        var UNSCOPABLES = __webpack_require__("./node_modules/core-js/modules/_wks.js")("unscopables");
        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == void 0)
          __webpack_require__("./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
        module2.exports = function(key) {
          ArrayProto[UNSCOPABLES][key] = true;
        };
      },
      "./node_modules/core-js/modules/_advance-string-index.js": function(module2, exports2, __webpack_require__) {
        var at = __webpack_require__("./node_modules/core-js/modules/_string-at.js")(true);
        module2.exports = function(S, index, unicode) {
          return index + (unicode ? at(S, index).length : 1);
        };
      },
      "./node_modules/core-js/modules/_an-object.js": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
        module2.exports = function(it) {
          if (!isObject(it))
            throw TypeError(it + " is not an object!");
          return it;
        };
      },
      "./node_modules/core-js/modules/_array-includes.js": function(module2, exports2, __webpack_require__) {
        var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
        var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
        var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/modules/_to-absolute-index.js");
        module2.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                if (value != value)
                  return true;
              }
            else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el)
                    return IS_INCLUDES || index || 0;
                }
            return !IS_INCLUDES && -1;
          };
        };
      },
      "./node_modules/core-js/modules/_classof.js": function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
        var TAG = __webpack_require__("./node_modules/core-js/modules/_wks.js")("toStringTag");
        var ARG = cof(function() {
          return arguments;
        }()) == "Arguments";
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (e) {
          }
        };
        module2.exports = function(it) {
          var O, T, B;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
        };
      },
      "./node_modules/core-js/modules/_cof.js": function(module2, exports2) {
        var toString = {}.toString;
        module2.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };
      },
      "./node_modules/core-js/modules/_core.js": function(module2, exports2) {
        var core = module2.exports = {version: "2.6.12"};
        if (typeof __e == "number")
          __e = core;
      },
      "./node_modules/core-js/modules/_create-property.js": function(module2, exports2, __webpack_require__) {
        var $defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
        var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
        module2.exports = function(object, index, value) {
          if (index in object)
            $defineProperty.f(object, index, createDesc(0, value));
          else
            object[index] = value;
        };
      },
      "./node_modules/core-js/modules/_ctx.js": function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
        module2.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === void 0)
            return fn;
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function() {
            return fn.apply(that, arguments);
          };
        };
      },
      "./node_modules/core-js/modules/_defined.js": function(module2, exports2) {
        module2.exports = function(it) {
          if (it == void 0)
            throw TypeError("Can't call method on  " + it);
          return it;
        };
      },
      "./node_modules/core-js/modules/_descriptors.js": function(module2, exports2, __webpack_require__) {
        module2.exports = !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function() {
          return Object.defineProperty({}, "a", {get: function() {
            return 7;
          }}).a != 7;
        });
      },
      "./node_modules/core-js/modules/_dom-create.js": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
        var document = __webpack_require__("./node_modules/core-js/modules/_global.js").document;
        var is = isObject(document) && isObject(document.createElement);
        module2.exports = function(it) {
          return is ? document.createElement(it) : {};
        };
      },
      "./node_modules/core-js/modules/_enum-bug-keys.js": function(module2, exports2) {
        module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      "./node_modules/core-js/modules/_enum-keys.js": function(module2, exports2, __webpack_require__) {
        var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
        var gOPS = __webpack_require__("./node_modules/core-js/modules/_object-gops.js");
        var pIE = __webpack_require__("./node_modules/core-js/modules/_object-pie.js");
        module2.exports = function(it) {
          var result = getKeys(it);
          var getSymbols = gOPS.f;
          if (getSymbols) {
            var symbols = getSymbols(it);
            var isEnum = pIE.f;
            var i = 0;
            var key;
            while (symbols.length > i)
              if (isEnum.call(it, key = symbols[i++]))
                result.push(key);
          }
          return result;
        };
      },
      "./node_modules/core-js/modules/_export.js": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
        var core = __webpack_require__("./node_modules/core-js/modules/_core.js");
        var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
        var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
        var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
        var PROTOTYPE = "prototype";
        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
          var exports3 = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports3[PROTOTYPE] || (exports3[PROTOTYPE] = {});
          var key, own, out, exp;
          if (IS_GLOBAL)
            source = name;
          for (key in source) {
            own = !IS_FORCED && target && target[key] !== void 0;
            out = (own ? target : source)[key];
            exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
            if (target)
              redefine(target, key, out, type & $export.U);
            if (exports3[key] != out)
              hide(exports3, key, exp);
            if (IS_PROTO && expProto[key] != out)
              expProto[key] = out;
          }
        };
        global.core = core;
        $export.F = 1;
        $export.G = 2;
        $export.S = 4;
        $export.P = 8;
        $export.B = 16;
        $export.W = 32;
        $export.U = 64;
        $export.R = 128;
        module2.exports = $export;
      },
      "./node_modules/core-js/modules/_fails-is-regexp.js": function(module2, exports2, __webpack_require__) {
        var MATCH = __webpack_require__("./node_modules/core-js/modules/_wks.js")("match");
        module2.exports = function(KEY) {
          var re = /./;
          try {
            "/./"[KEY](re);
          } catch (e) {
            try {
              re[MATCH] = false;
              return !"/./"[KEY](re);
            } catch (f) {
            }
          }
          return true;
        };
      },
      "./node_modules/core-js/modules/_fails.js": function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };
      },
      "./node_modules/core-js/modules/_fix-re-wks.js": function(module2, exports2, __webpack_require__) {
        __webpack_require__("./node_modules/core-js/modules/es6.regexp.exec.js");
        var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
        var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
        var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
        var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
        var wks = __webpack_require__("./node_modules/core-js/modules/_wks.js");
        var regexpExec = __webpack_require__("./node_modules/core-js/modules/_regexp-exec.js");
        var SPECIES = wks("species");
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
          var re = /./;
          re.exec = function() {
            var result = [];
            result.groups = {a: "7"};
            return result;
          };
          return "".replace(re, "$<a>") !== "7";
        });
        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
          var re = /(?:)/;
          var originalExec = re.exec;
          re.exec = function() {
            return originalExec.apply(this, arguments);
          };
          var result = "ab".split(re);
          return result.length === 2 && result[0] === "a" && result[1] === "b";
        }();
        module2.exports = function(KEY, length, exec) {
          var SYMBOL = wks(KEY);
          var DELEGATES_TO_SYMBOL = !fails(function() {
            var O = {};
            O[SYMBOL] = function() {
              return 7;
            };
            return ""[KEY](O) != 7;
          });
          var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
            var execCalled = false;
            var re = /a/;
            re.exec = function() {
              execCalled = true;
              return null;
            };
            if (KEY === "split") {
              re.constructor = {};
              re.constructor[SPECIES] = function() {
                return re;
              };
            }
            re[SYMBOL]("");
            return !execCalled;
          }) : void 0;
          if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
            var nativeRegExpMethod = /./[SYMBOL];
            var fns = exec(defined, SYMBOL, ""[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  return {done: true, value: nativeRegExpMethod.call(regexp, str, arg2)};
                }
                return {done: true, value: nativeMethod.call(str, regexp, arg2)};
              }
              return {done: false};
            });
            var strfn = fns[0];
            var rxfn = fns[1];
            redefine(String.prototype, KEY, strfn);
            hide(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
              return rxfn.call(string, this, arg);
            } : function(string) {
              return rxfn.call(string, this);
            });
          }
        };
      },
      "./node_modules/core-js/modules/_flags.js": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        module2.exports = function() {
          var that = anObject(this);
          var result = "";
          if (that.global)
            result += "g";
          if (that.ignoreCase)
            result += "i";
          if (that.multiline)
            result += "m";
          if (that.unicode)
            result += "u";
          if (that.sticky)
            result += "y";
          return result;
        };
      },
      "./node_modules/core-js/modules/_function-to-string.js": function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__("./node_modules/core-js/modules/_shared.js")("native-function-to-string", Function.toString);
      },
      "./node_modules/core-js/modules/_global.js": function(module2, exports2) {
        var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number")
          __g = global;
      },
      "./node_modules/core-js/modules/_has.js": function(module2, exports2) {
        var hasOwnProperty = {}.hasOwnProperty;
        module2.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };
      },
      "./node_modules/core-js/modules/_hide.js": function(module2, exports2, __webpack_require__) {
        var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
        var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
        module2.exports = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? function(object, key, value) {
          return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
          object[key] = value;
          return object;
        };
      },
      "./node_modules/core-js/modules/_html.js": function(module2, exports2, __webpack_require__) {
        var document = __webpack_require__("./node_modules/core-js/modules/_global.js").document;
        module2.exports = document && document.documentElement;
      },
      "./node_modules/core-js/modules/_ie8-dom-define.js": function(module2, exports2, __webpack_require__) {
        module2.exports = !__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function() {
          return Object.defineProperty(__webpack_require__("./node_modules/core-js/modules/_dom-create.js")("div"), "a", {get: function() {
            return 7;
          }}).a != 7;
        });
      },
      "./node_modules/core-js/modules/_iobject.js": function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
        module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
          return cof(it) == "String" ? it.split("") : Object(it);
        };
      },
      "./node_modules/core-js/modules/_is-array-iter.js": function(module2, exports2, __webpack_require__) {
        var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
        var ITERATOR = __webpack_require__("./node_modules/core-js/modules/_wks.js")("iterator");
        var ArrayProto = Array.prototype;
        module2.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };
      },
      "./node_modules/core-js/modules/_is-array.js": function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
        module2.exports = Array.isArray || function isArray(arg) {
          return cof(arg) == "Array";
        };
      },
      "./node_modules/core-js/modules/_is-object.js": function(module2, exports2) {
        module2.exports = function(it) {
          return typeof it === "object" ? it !== null : typeof it === "function";
        };
      },
      "./node_modules/core-js/modules/_is-regexp.js": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
        var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
        var MATCH = __webpack_require__("./node_modules/core-js/modules/_wks.js")("match");
        module2.exports = function(it) {
          var isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : cof(it) == "RegExp");
        };
      },
      "./node_modules/core-js/modules/_iter-call.js": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        module2.exports = function(iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
          } catch (e) {
            var ret = iterator["return"];
            if (ret !== void 0)
              anObject(ret.call(iterator));
            throw e;
          }
        };
      },
      "./node_modules/core-js/modules/_iter-create.js": function(module2, exports2, __webpack_require__) {
        var create = __webpack_require__("./node_modules/core-js/modules/_object-create.js");
        var descriptor = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
        var setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js");
        var IteratorPrototype = {};
        __webpack_require__("./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/modules/_wks.js")("iterator"), function() {
          return this;
        });
        module2.exports = function(Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
          setToStringTag(Constructor, NAME + " Iterator");
        };
      },
      "./node_modules/core-js/modules/_iter-define.js": function(module2, exports2, __webpack_require__) {
        var LIBRARY = __webpack_require__("./node_modules/core-js/modules/_library.js");
        var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
        var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
        var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
        var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
        var $iterCreate = __webpack_require__("./node_modules/core-js/modules/_iter-create.js");
        var setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js");
        var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
        var ITERATOR = __webpack_require__("./node_modules/core-js/modules/_wks.js")("iterator");
        var BUGGY = !([].keys && "next" in [].keys());
        var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";
        var returnThis = function() {
          return this;
        };
        module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function(kind) {
            if (!BUGGY && kind in proto)
              return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }
            return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + " Iterator";
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
          var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype;
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              setToStringTag(IteratorPrototype, TAG, true);
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
                hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          }
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED)
              for (key in methods) {
                if (!(key in proto))
                  redefine(proto, key, methods[key]);
              }
            else
              $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }
          return methods;
        };
      },
      "./node_modules/core-js/modules/_iter-detect.js": function(module2, exports2, __webpack_require__) {
        var ITERATOR = __webpack_require__("./node_modules/core-js/modules/_wks.js")("iterator");
        var SAFE_CLOSING = false;
        try {
          var riter = [7][ITERATOR]();
          riter["return"] = function() {
            SAFE_CLOSING = true;
          };
          Array.from(riter, function() {
            throw 2;
          });
        } catch (e) {
        }
        module2.exports = function(exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING)
            return false;
          var safe = false;
          try {
            var arr = [7];
            var iter = arr[ITERATOR]();
            iter.next = function() {
              return {done: safe = true};
            };
            arr[ITERATOR] = function() {
              return iter;
            };
            exec(arr);
          } catch (e) {
          }
          return safe;
        };
      },
      "./node_modules/core-js/modules/_iter-step.js": function(module2, exports2) {
        module2.exports = function(done, value) {
          return {value, done: !!done};
        };
      },
      "./node_modules/core-js/modules/_iterators.js": function(module2, exports2) {
        module2.exports = {};
      },
      "./node_modules/core-js/modules/_library.js": function(module2, exports2) {
        module2.exports = false;
      },
      "./node_modules/core-js/modules/_meta.js": function(module2, exports2, __webpack_require__) {
        var META = __webpack_require__("./node_modules/core-js/modules/_uid.js")("meta");
        var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
        var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
        var setDesc = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
          return true;
        };
        var FREEZE = !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function() {
          return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
          setDesc(it, META, {value: {
            i: "O" + ++id,
            w: {}
          }});
        };
        var fastKey = function(it, create) {
          if (!isObject(it))
            return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
          if (!has(it, META)) {
            if (!isExtensible(it))
              return "F";
            if (!create)
              return "E";
            setMeta(it);
          }
          return it[META].i;
        };
        var getWeak = function(it, create) {
          if (!has(it, META)) {
            if (!isExtensible(it))
              return true;
            if (!create)
              return false;
            setMeta(it);
          }
          return it[META].w;
        };
        var onFreeze = function(it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
            setMeta(it);
          return it;
        };
        var meta = module2.exports = {
          KEY: META,
          NEED: false,
          fastKey,
          getWeak,
          onFreeze
        };
      },
      "./node_modules/core-js/modules/_object-create.js": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        var dPs = __webpack_require__("./node_modules/core-js/modules/_object-dps.js");
        var enumBugKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js");
        var IE_PROTO = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")("IE_PROTO");
        var Empty = function() {
        };
        var PROTOTYPE = "prototype";
        var createDict = function() {
          var iframe = __webpack_require__("./node_modules/core-js/modules/_dom-create.js")("iframe");
          var i = enumBugKeys.length;
          var lt = "<";
          var gt = ">";
          var iframeDocument;
          iframe.style.display = "none";
          __webpack_require__("./node_modules/core-js/modules/_html.js").appendChild(iframe);
          iframe.src = "javascript:";
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
          iframeDocument.close();
          createDict = iframeDocument.F;
          while (i--)
            delete createDict[PROTOTYPE][enumBugKeys[i]];
          return createDict();
        };
        module2.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = createDict();
          return Properties === void 0 ? result : dPs(result, Properties);
        };
      },
      "./node_modules/core-js/modules/_object-dp.js": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/modules/_ie8-dom-define.js");
        var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
        var dP = Object.defineProperty;
        exports2.f = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return dP(O, P, Attributes);
            } catch (e) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw TypeError("Accessors not supported!");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      },
      "./node_modules/core-js/modules/_object-dps.js": function(module2, exports2, __webpack_require__) {
        var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
        module2.exports = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = getKeys(Properties);
          var length = keys.length;
          var i = 0;
          var P;
          while (length > i)
            dP.f(O, P = keys[i++], Properties[P]);
          return O;
        };
      },
      "./node_modules/core-js/modules/_object-gopd.js": function(module2, exports2, __webpack_require__) {
        var pIE = __webpack_require__("./node_modules/core-js/modules/_object-pie.js");
        var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
        var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
        var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
        var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
        var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/modules/_ie8-dom-define.js");
        var gOPD = Object.getOwnPropertyDescriptor;
        exports2.f = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
          O = toIObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE)
            try {
              return gOPD(O, P);
            } catch (e) {
            }
          if (has(O, P))
            return createDesc(!pIE.f.call(O, P), O[P]);
        };
      },
      "./node_modules/core-js/modules/_object-gopn-ext.js": function(module2, exports2, __webpack_require__) {
        var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
        var gOPN = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f;
        var toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
          try {
            return gOPN(it);
          } catch (e) {
            return windowNames.slice();
          }
        };
        module2.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
        };
      },
      "./node_modules/core-js/modules/_object-gopn.js": function(module2, exports2, __webpack_require__) {
        var $keys = __webpack_require__("./node_modules/core-js/modules/_object-keys-internal.js");
        var hiddenKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js").concat("length", "prototype");
        exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return $keys(O, hiddenKeys);
        };
      },
      "./node_modules/core-js/modules/_object-gops.js": function(module2, exports2) {
        exports2.f = Object.getOwnPropertySymbols;
      },
      "./node_modules/core-js/modules/_object-gpo.js": function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
        var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
        var IE_PROTO = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")("IE_PROTO");
        var ObjectProto = Object.prototype;
        module2.exports = Object.getPrototypeOf || function(O) {
          O = toObject(O);
          if (has(O, IE_PROTO))
            return O[IE_PROTO];
          if (typeof O.constructor == "function" && O instanceof O.constructor) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectProto : null;
        };
      },
      "./node_modules/core-js/modules/_object-keys-internal.js": function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
        var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
        var arrayIndexOf = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")(false);
        var IE_PROTO = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")("IE_PROTO");
        module2.exports = function(object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            if (key != IE_PROTO)
              has(O, key) && result.push(key);
          while (names.length > i)
            if (has(O, key = names[i++])) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          return result;
        };
      },
      "./node_modules/core-js/modules/_object-keys.js": function(module2, exports2, __webpack_require__) {
        var $keys = __webpack_require__("./node_modules/core-js/modules/_object-keys-internal.js");
        var enumBugKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js");
        module2.exports = Object.keys || function keys(O) {
          return $keys(O, enumBugKeys);
        };
      },
      "./node_modules/core-js/modules/_object-pie.js": function(module2, exports2) {
        exports2.f = {}.propertyIsEnumerable;
      },
      "./node_modules/core-js/modules/_own-keys.js": function(module2, exports2, __webpack_require__) {
        var gOPN = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js");
        var gOPS = __webpack_require__("./node_modules/core-js/modules/_object-gops.js");
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        var Reflect = __webpack_require__("./node_modules/core-js/modules/_global.js").Reflect;
        module2.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
          var keys = gOPN.f(anObject(it));
          var getSymbols = gOPS.f;
          return getSymbols ? keys.concat(getSymbols(it)) : keys;
        };
      },
      "./node_modules/core-js/modules/_property-desc.js": function(module2, exports2) {
        module2.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
      },
      "./node_modules/core-js/modules/_redefine.js": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
        var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
        var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
        var SRC = __webpack_require__("./node_modules/core-js/modules/_uid.js")("src");
        var $toString = __webpack_require__("./node_modules/core-js/modules/_function-to-string.js");
        var TO_STRING = "toString";
        var TPL = ("" + $toString).split(TO_STRING);
        __webpack_require__("./node_modules/core-js/modules/_core.js").inspectSource = function(it) {
          return $toString.call(it);
        };
        (module2.exports = function(O, key, val, safe) {
          var isFunction = typeof val == "function";
          if (isFunction)
            has(val, "name") || hide(val, "name", key);
          if (O[key] === val)
            return;
          if (isFunction)
            has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
          if (O === global) {
            O[key] = val;
          } else if (!safe) {
            delete O[key];
            hide(O, key, val);
          } else if (O[key]) {
            O[key] = val;
          } else {
            hide(O, key, val);
          }
        })(Function.prototype, TO_STRING, function toString() {
          return typeof this == "function" && this[SRC] || $toString.call(this);
        });
      },
      "./node_modules/core-js/modules/_regexp-exec-abstract.js": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js");
        var builtinExec = RegExp.prototype.exec;
        module2.exports = function(R, S) {
          var exec = R.exec;
          if (typeof exec === "function") {
            var result = exec.call(R, S);
            if (typeof result !== "object") {
              throw new TypeError("RegExp exec method returned something other than an Object or null");
            }
            return result;
          }
          if (classof(R) !== "RegExp") {
            throw new TypeError("RegExp#exec called on incompatible receiver");
          }
          return builtinExec.call(R, S);
        };
      },
      "./node_modules/core-js/modules/_regexp-exec.js": function(module2, exports2, __webpack_require__) {
        var regexpFlags = __webpack_require__("./node_modules/core-js/modules/_flags.js");
        var nativeExec = RegExp.prototype.exec;
        var nativeReplace = String.prototype.replace;
        var patchedExec = nativeExec;
        var LAST_INDEX = "lastIndex";
        var UPDATES_LAST_INDEX_WRONG = function() {
          var re1 = /a/, re2 = /b*/g;
          nativeExec.call(re1, "a");
          nativeExec.call(re2, "a");
          return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
        }();
        var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
        if (PATCH) {
          patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;
            if (NPCG_INCLUDED) {
              reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
            }
            if (UPDATES_LAST_INDEX_WRONG)
              lastIndex = re[LAST_INDEX];
            match = nativeExec.call(re, str);
            if (UPDATES_LAST_INDEX_WRONG && match) {
              re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
            }
            if (NPCG_INCLUDED && match && match.length > 1) {
              nativeReplace.call(match[0], reCopy, function() {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === void 0)
                    match[i] = void 0;
                }
              });
            }
            return match;
          };
        }
        module2.exports = patchedExec;
      },
      "./node_modules/core-js/modules/_set-to-string-tag.js": function(module2, exports2, __webpack_require__) {
        var def = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
        var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
        var TAG = __webpack_require__("./node_modules/core-js/modules/_wks.js")("toStringTag");
        module2.exports = function(it, tag, stat) {
          if (it && !has(it = stat ? it : it.prototype, TAG))
            def(it, TAG, {configurable: true, value: tag});
        };
      },
      "./node_modules/core-js/modules/_shared-key.js": function(module2, exports2, __webpack_require__) {
        var shared = __webpack_require__("./node_modules/core-js/modules/_shared.js")("keys");
        var uid = __webpack_require__("./node_modules/core-js/modules/_uid.js");
        module2.exports = function(key) {
          return shared[key] || (shared[key] = uid(key));
        };
      },
      "./node_modules/core-js/modules/_shared.js": function(module2, exports2, __webpack_require__) {
        var core = __webpack_require__("./node_modules/core-js/modules/_core.js");
        var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});
        (module2.exports = function(key, value) {
          return store[key] || (store[key] = value !== void 0 ? value : {});
        })("versions", []).push({
          version: core.version,
          mode: __webpack_require__("./node_modules/core-js/modules/_library.js") ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      "./node_modules/core-js/modules/_species-constructor.js": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
        var SPECIES = __webpack_require__("./node_modules/core-js/modules/_wks.js")("species");
        module2.exports = function(O, D) {
          var C = anObject(O).constructor;
          var S;
          return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? D : aFunction(S);
        };
      },
      "./node_modules/core-js/modules/_string-at.js": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
        var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
        module2.exports = function(TO_STRING) {
          return function(that, pos) {
            var s = String(defined(that));
            var i = toInteger(pos);
            var l = s.length;
            var a, b;
            if (i < 0 || i >= l)
              return TO_STRING ? "" : void 0;
            a = s.charCodeAt(i);
            return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
          };
        };
      },
      "./node_modules/core-js/modules/_string-context.js": function(module2, exports2, __webpack_require__) {
        var isRegExp = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js");
        var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
        module2.exports = function(that, searchString, NAME) {
          if (isRegExp(searchString))
            throw TypeError("String#" + NAME + " doesn't accept regex!");
          return String(defined(that));
        };
      },
      "./node_modules/core-js/modules/_to-absolute-index.js": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
        var max = Math.max;
        var min = Math.min;
        module2.exports = function(index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };
      },
      "./node_modules/core-js/modules/_to-integer.js": function(module2, exports2) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module2.exports = function(it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
      },
      "./node_modules/core-js/modules/_to-iobject.js": function(module2, exports2, __webpack_require__) {
        var IObject = __webpack_require__("./node_modules/core-js/modules/_iobject.js");
        var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
        module2.exports = function(it) {
          return IObject(defined(it));
        };
      },
      "./node_modules/core-js/modules/_to-length.js": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
        var min = Math.min;
        module2.exports = function(it) {
          return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
      },
      "./node_modules/core-js/modules/_to-object.js": function(module2, exports2, __webpack_require__) {
        var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
        module2.exports = function(it) {
          return Object(defined(it));
        };
      },
      "./node_modules/core-js/modules/_to-primitive.js": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
        module2.exports = function(it, S) {
          if (!isObject(it))
            return it;
          var fn, val;
          if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
            return val;
          if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
            return val;
          if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
            return val;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      "./node_modules/core-js/modules/_uid.js": function(module2, exports2) {
        var id = 0;
        var px = Math.random();
        module2.exports = function(key) {
          return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
        };
      },
      "./node_modules/core-js/modules/_wks-define.js": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
        var core = __webpack_require__("./node_modules/core-js/modules/_core.js");
        var LIBRARY = __webpack_require__("./node_modules/core-js/modules/_library.js");
        var wksExt = __webpack_require__("./node_modules/core-js/modules/_wks-ext.js");
        var defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
        module2.exports = function(name) {
          var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
          if (name.charAt(0) != "_" && !(name in $Symbol))
            defineProperty($Symbol, name, {value: wksExt.f(name)});
        };
      },
      "./node_modules/core-js/modules/_wks-ext.js": function(module2, exports2, __webpack_require__) {
        exports2.f = __webpack_require__("./node_modules/core-js/modules/_wks.js");
      },
      "./node_modules/core-js/modules/_wks.js": function(module2, exports2, __webpack_require__) {
        var store = __webpack_require__("./node_modules/core-js/modules/_shared.js")("wks");
        var uid = __webpack_require__("./node_modules/core-js/modules/_uid.js");
        var Symbol2 = __webpack_require__("./node_modules/core-js/modules/_global.js").Symbol;
        var USE_SYMBOL = typeof Symbol2 == "function";
        var $exports = module2.exports = function(name) {
          return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
        };
        $exports.store = store;
      },
      "./node_modules/core-js/modules/core.get-iterator-method.js": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js");
        var ITERATOR = __webpack_require__("./node_modules/core-js/modules/_wks.js")("iterator");
        var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
        module2.exports = __webpack_require__("./node_modules/core-js/modules/_core.js").getIteratorMethod = function(it) {
          if (it != void 0)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
      },
      "./node_modules/core-js/modules/es6.array.from.js": function(module2, exports2, __webpack_require__) {
        var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
        var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
        var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
        var call = __webpack_require__("./node_modules/core-js/modules/_iter-call.js");
        var isArrayIter = __webpack_require__("./node_modules/core-js/modules/_is-array-iter.js");
        var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
        var createProperty = __webpack_require__("./node_modules/core-js/modules/_create-property.js");
        var getIterFn = __webpack_require__("./node_modules/core-js/modules/core.get-iterator-method.js");
        $export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_iter-detect.js")(function(iter) {
          Array.from(iter);
        }), "Array", {
          from: function from(arrayLike) {
            var O = toObject(arrayLike);
            var C = typeof this == "function" ? this : Array;
            var aLen = arguments.length;
            var mapfn = aLen > 1 ? arguments[1] : void 0;
            var mapping = mapfn !== void 0;
            var index = 0;
            var iterFn = getIterFn(O);
            var length, result, step, iterator;
            if (mapping)
              mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
            if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
              for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
              }
            } else {
              length = toLength(O.length);
              for (result = new C(length); length > index; index++) {
                createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
              }
            }
            result.length = index;
            return result;
          }
        });
      },
      "./node_modules/core-js/modules/es6.array.iterator.js": function(module2, exports2, __webpack_require__) {
        var addToUnscopables = __webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js");
        var step = __webpack_require__("./node_modules/core-js/modules/_iter-step.js");
        var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
        var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
        module2.exports = __webpack_require__("./node_modules/core-js/modules/_iter-define.js")(Array, "Array", function(iterated, kind) {
          this._t = toIObject(iterated);
          this._i = 0;
          this._k = kind;
        }, function() {
          var O = this._t;
          var kind = this._k;
          var index = this._i++;
          if (!O || index >= O.length) {
            this._t = void 0;
            return step(1);
          }
          if (kind == "keys")
            return step(0, index);
          if (kind == "values")
            return step(0, O[index]);
          return step(0, [index, O[index]]);
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
      },
      "./node_modules/core-js/modules/es6.function.name.js": function(module2, exports2, __webpack_require__) {
        var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
        var FProto = Function.prototype;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = "name";
        NAME in FProto || __webpack_require__("./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
          configurable: true,
          get: function() {
            try {
              return ("" + this).match(nameRE)[1];
            } catch (e) {
              return "";
            }
          }
        });
      },
      "./node_modules/core-js/modules/es6.number.is-finite.js": function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
        var _isFinite = __webpack_require__("./node_modules/core-js/modules/_global.js").isFinite;
        $export($export.S, "Number", {
          isFinite: function isFinite(it) {
            return typeof it == "number" && _isFinite(it);
          }
        });
      },
      "./node_modules/core-js/modules/es6.object.to-string.js": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js");
        var test = {};
        test[__webpack_require__("./node_modules/core-js/modules/_wks.js")("toStringTag")] = "z";
        if (test + "" != "[object z]") {
          __webpack_require__("./node_modules/core-js/modules/_redefine.js")(Object.prototype, "toString", function toString() {
            return "[object " + classof(this) + "]";
          }, true);
        }
      },
      "./node_modules/core-js/modules/es6.regexp.exec.js": function(module2, exports2, __webpack_require__) {
        var regexpExec = __webpack_require__("./node_modules/core-js/modules/_regexp-exec.js");
        __webpack_require__("./node_modules/core-js/modules/_export.js")({
          target: "RegExp",
          proto: true,
          forced: regexpExec !== /./.exec
        }, {
          exec: regexpExec
        });
      },
      "./node_modules/core-js/modules/es6.regexp.split.js": function(module2, exports2, __webpack_require__) {
        var isRegExp = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js");
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        var speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_species-constructor.js");
        var advanceStringIndex = __webpack_require__("./node_modules/core-js/modules/_advance-string-index.js");
        var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
        var callRegExpExec = __webpack_require__("./node_modules/core-js/modules/_regexp-exec-abstract.js");
        var regexpExec = __webpack_require__("./node_modules/core-js/modules/_regexp-exec.js");
        var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
        var $min = Math.min;
        var $push = [].push;
        var $SPLIT = "split";
        var LENGTH = "length";
        var LAST_INDEX = "lastIndex";
        var MAX_UINT32 = 4294967295;
        var SUPPORTS_Y = !fails(function() {
        });
        __webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")("split", 2, function(defined, SPLIT, $split, maybeCallNative) {
          var internalSplit;
          if ("abbc"[$SPLIT](/(b)*/)[1] == "c" || "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || "."[$SPLIT](/()()/)[LENGTH] > 1 || ""[$SPLIT](/.?/)[LENGTH]) {
            internalSplit = function(separator, limit) {
              var string = String(this);
              if (separator === void 0 && limit === 0)
                return [];
              if (!isRegExp(separator))
                return $split.call(string, separator, limit);
              var output = [];
              var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
              var lastLastIndex = 0;
              var splitLimit = limit === void 0 ? MAX_UINT32 : limit >>> 0;
              var separatorCopy = new RegExp(separator.source, flags + "g");
              var match, lastIndex, lastLength;
              while (match = regexpExec.call(separatorCopy, string)) {
                lastIndex = separatorCopy[LAST_INDEX];
                if (lastIndex > lastLastIndex) {
                  output.push(string.slice(lastLastIndex, match.index));
                  if (match[LENGTH] > 1 && match.index < string[LENGTH])
                    $push.apply(output, match.slice(1));
                  lastLength = match[0][LENGTH];
                  lastLastIndex = lastIndex;
                  if (output[LENGTH] >= splitLimit)
                    break;
                }
                if (separatorCopy[LAST_INDEX] === match.index)
                  separatorCopy[LAST_INDEX]++;
              }
              if (lastLastIndex === string[LENGTH]) {
                if (lastLength || !separatorCopy.test(""))
                  output.push("");
              } else
                output.push(string.slice(lastLastIndex));
              return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
            };
          } else if ("0"[$SPLIT](void 0, 0)[LENGTH]) {
            internalSplit = function(separator, limit) {
              return separator === void 0 && limit === 0 ? [] : $split.call(this, separator, limit);
            };
          } else {
            internalSplit = $split;
          }
          return [
            function split(separator, limit) {
              var O = defined(this);
              var splitter = separator == void 0 ? void 0 : separator[SPLIT];
              return splitter !== void 0 ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
            },
            function(regexp, limit) {
              var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
              if (res.done)
                return res.value;
              var rx = anObject(regexp);
              var S = String(this);
              var C = speciesConstructor(rx, RegExp);
              var unicodeMatching = rx.unicode;
              var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
              var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
              var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
              if (lim === 0)
                return [];
              if (S.length === 0)
                return callRegExpExec(splitter, S) === null ? [S] : [];
              var p = 0;
              var q = 0;
              var A = [];
              while (q < S.length) {
                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                var e;
                if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                  q = advanceStringIndex(S, q, unicodeMatching);
                } else {
                  A.push(S.slice(p, q));
                  if (A.length === lim)
                    return A;
                  for (var i = 1; i <= z.length - 1; i++) {
                    A.push(z[i]);
                    if (A.length === lim)
                      return A;
                  }
                  q = p = e;
                }
              }
              A.push(S.slice(p));
              return A;
            }
          ];
        });
      },
      "./node_modules/core-js/modules/es6.string.includes.js": function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
        var context = __webpack_require__("./node_modules/core-js/modules/_string-context.js");
        var INCLUDES = "includes";
        $export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), "String", {
          includes: function includes(searchString) {
            return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "./node_modules/core-js/modules/es6.symbol.js": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
        var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
        var DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js");
        var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
        var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
        var META = __webpack_require__("./node_modules/core-js/modules/_meta.js").KEY;
        var $fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
        var shared = __webpack_require__("./node_modules/core-js/modules/_shared.js");
        var setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js");
        var uid = __webpack_require__("./node_modules/core-js/modules/_uid.js");
        var wks = __webpack_require__("./node_modules/core-js/modules/_wks.js");
        var wksExt = __webpack_require__("./node_modules/core-js/modules/_wks-ext.js");
        var wksDefine = __webpack_require__("./node_modules/core-js/modules/_wks-define.js");
        var enumKeys = __webpack_require__("./node_modules/core-js/modules/_enum-keys.js");
        var isArray = __webpack_require__("./node_modules/core-js/modules/_is-array.js");
        var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
        var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
        var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
        var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
        var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
        var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
        var _create = __webpack_require__("./node_modules/core-js/modules/_object-create.js");
        var gOPNExt = __webpack_require__("./node_modules/core-js/modules/_object-gopn-ext.js");
        var $GOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js");
        var $GOPS = __webpack_require__("./node_modules/core-js/modules/_object-gops.js");
        var $DP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
        var $keys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE = "prototype";
        var HIDDEN = wks("_hidden");
        var TO_PRIMITIVE = wks("toPrimitive");
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared("symbol-registry");
        var AllSymbols = shared("symbols");
        var OPSymbols = shared("op-symbols");
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
        var QObject = global.QObject;
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
          return _create(dP({}, "a", {
            get: function() {
              return dP(this, "a", {value: 7}).a;
            }
          })).a != 7;
        }) ? function(it, key, D) {
          var protoDesc = gOPD(ObjectProto, key);
          if (protoDesc)
            delete ObjectProto[key];
          dP(it, key, D);
          if (protoDesc && it !== ObjectProto)
            dP(ObjectProto, key, protoDesc);
        } : dP;
        var wrap = function(tag) {
          var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
          sym._k = tag;
          return sym;
        };
        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          return it instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(it, key, D) {
          if (it === ObjectProto)
            $defineProperty(OPSymbols, key, D);
          anObject(it);
          key = toPrimitive(key, true);
          anObject(D);
          if (has(AllSymbols, key)) {
            if (!D.enumerable) {
              if (!has(it, HIDDEN))
                dP(it, HIDDEN, createDesc(1, {}));
              it[HIDDEN][key] = true;
            } else {
              if (has(it, HIDDEN) && it[HIDDEN][key])
                it[HIDDEN][key] = false;
              D = _create(D, {enumerable: createDesc(0, false)});
            }
            return setSymbolDesc(it, key, D);
          }
          return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
          anObject(it);
          var keys = enumKeys(P = toIObject(P));
          var i = 0;
          var l = keys.length;
          var key;
          while (l > i)
            $defineProperty(it, key = keys[i++], P[key]);
          return it;
        };
        var $create = function create(it, P) {
          return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
          var E = isEnum.call(this, key = toPrimitive(key, true));
          if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
            return false;
          return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
          it = toIObject(it);
          key = toPrimitive(key, true);
          if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
            return;
          var D = gOPD(it, key);
          if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
            D.enumerable = true;
          return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
          var names = gOPN(toIObject(it));
          var result = [];
          var i = 0;
          var key;
          while (names.length > i) {
            if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
              result.push(key);
          }
          return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
          var IS_OP = it === ObjectProto;
          var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
          var result = [];
          var i = 0;
          var key;
          while (names.length > i) {
            if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))
              result.push(AllSymbols[key]);
          }
          return result;
        };
        if (!USE_NATIVE) {
          $Symbol = function Symbol2() {
            if (this instanceof $Symbol)
              throw TypeError("Symbol is not a constructor!");
            var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
            var $set = function(value) {
              if (this === ObjectProto)
                $set.call(OPSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
              setSymbolDesc(this, tag, createDesc(1, value));
            };
            if (DESCRIPTORS && setter)
              setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
            return wrap(tag);
          };
          redefine($Symbol[PROTOTYPE], "toString", function toString() {
            return this._k;
          });
          $GOPD.f = $getOwnPropertyDescriptor;
          $DP.f = $defineProperty;
          __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
          __webpack_require__("./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
          $GOPS.f = $getOwnPropertySymbols;
          if (DESCRIPTORS && !__webpack_require__("./node_modules/core-js/modules/_library.js")) {
            redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
          }
          wksExt.f = function(name) {
            return wrap(wks(name));
          };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
        for (var es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; )
          wks(es6Symbols[j++]);
        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; )
          wksDefine(wellKnownSymbols[k++]);
        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
          for: function(key) {
            return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
          },
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym))
              throw TypeError(sym + " is not a symbol!");
            for (var key in SymbolRegistry)
              if (SymbolRegistry[key] === sym)
                return key;
          },
          useSetter: function() {
            setter = true;
          },
          useSimple: function() {
            setter = false;
          }
        });
        $export($export.S + $export.F * !USE_NATIVE, "Object", {
          create: $create,
          defineProperty: $defineProperty,
          defineProperties: $defineProperties,
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          getOwnPropertyNames: $getOwnPropertyNames,
          getOwnPropertySymbols: $getOwnPropertySymbols
        });
        var FAILS_ON_PRIMITIVES = $fails(function() {
          $GOPS.f(1);
        });
        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return $GOPS.f(toObject(it));
          }
        });
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
          var S = $Symbol();
          return _stringify([S]) != "[null]" || _stringify({a: S}) != "{}" || _stringify(Object(S)) != "{}";
        })), "JSON", {
          stringify: function stringify(it) {
            var args = [it];
            var i = 1;
            var replacer, $replacer;
            while (arguments.length > i)
              args.push(arguments[i++]);
            $replacer = replacer = args[1];
            if (!isObject(replacer) && it === void 0 || isSymbol(it))
              return;
            if (!isArray(replacer))
              replacer = function(key, value) {
                if (typeof $replacer == "function")
                  value = $replacer.call(this, key, value);
                if (!isSymbol(value))
                  return value;
              };
            args[1] = replacer;
            return _stringify.apply($JSON, args);
          }
        });
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        setToStringTag($Symbol, "Symbol");
        setToStringTag(Math, "Math", true);
        setToStringTag(global.JSON, "JSON", true);
      },
      "./node_modules/core-js/modules/es7.array.includes.js": function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
        var $includes = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")(true);
        $export($export.P, "Array", {
          includes: function includes(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        __webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")("includes");
      },
      "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js": function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
        var ownKeys = __webpack_require__("./node_modules/core-js/modules/_own-keys.js");
        var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
        var gOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js");
        var createProperty = __webpack_require__("./node_modules/core-js/modules/_create-property.js");
        $export($export.S, "Object", {
          getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
            var O = toIObject(object);
            var getDesc = gOPD.f;
            var keys = ownKeys(O);
            var result = {};
            var i = 0;
            var key, desc;
            while (keys.length > i) {
              desc = getDesc(O, key = keys[i++]);
              if (desc !== void 0)
                createProperty(result, key, desc);
            }
            return result;
          }
        });
      },
      "./node_modules/core-js/modules/es7.symbol.async-iterator.js": function(module2, exports2, __webpack_require__) {
        __webpack_require__("./node_modules/core-js/modules/_wks-define.js")("asyncIterator");
      },
      "./node_modules/core-js/modules/web.dom.iterable.js": function(module2, exports2, __webpack_require__) {
        var $iterators = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
        var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
        var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
        var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
        var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
        var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
        var wks = __webpack_require__("./node_modules/core-js/modules/_wks.js");
        var ITERATOR = wks("iterator");
        var TO_STRING_TAG = wks("toStringTag");
        var ArrayValues = Iterators.Array;
        var DOMIterables = {
          CSSRuleList: true,
          CSSStyleDeclaration: false,
          CSSValueList: false,
          ClientRectList: false,
          DOMRectList: false,
          DOMStringList: false,
          DOMTokenList: true,
          DataTransferItemList: false,
          FileList: false,
          HTMLAllCollection: false,
          HTMLCollection: false,
          HTMLFormElement: false,
          HTMLSelectElement: false,
          MediaList: true,
          MimeTypeArray: false,
          NamedNodeMap: false,
          NodeList: true,
          PaintRequestList: false,
          Plugin: false,
          PluginArray: false,
          SVGLengthList: false,
          SVGNumberList: false,
          SVGPathSegList: false,
          SVGPointList: false,
          SVGStringList: false,
          SVGTransformList: false,
          SourceBufferList: false,
          StyleSheetList: true,
          TextTrackCueList: false,
          TextTrackList: false,
          TouchList: false
        };
        for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
          var NAME = collections[i];
          var explicit = DOMIterables[NAME];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          var key;
          if (proto) {
            if (!proto[ITERATOR])
              hide(proto, ITERATOR, ArrayValues);
            if (!proto[TO_STRING_TAG])
              hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = ArrayValues;
            if (explicit) {
              for (key in $iterators)
                if (!proto[key])
                  redefine(proto, key, $iterators[key], true);
            }
          }
        }
      },
      "./node_modules/crypt/crypt.js": function(module2, exports2) {
        (function() {
          var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
            rotl: function(n, b) {
              return n << b | n >>> 32 - b;
            },
            rotr: function(n, b) {
              return n << 32 - b | n >>> b;
            },
            endian: function(n) {
              if (n.constructor == Number) {
                return crypt.rotl(n, 8) & 16711935 | crypt.rotl(n, 24) & 4278255360;
              }
              for (var i = 0; i < n.length; i++)
                n[i] = crypt.endian(n[i]);
              return n;
            },
            randomBytes: function(n) {
              for (var bytes = []; n > 0; n--)
                bytes.push(Math.floor(Math.random() * 256));
              return bytes;
            },
            bytesToWords: function(bytes) {
              for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
                words[b >>> 5] |= bytes[i] << 24 - b % 32;
              return words;
            },
            wordsToBytes: function(words) {
              for (var bytes = [], b = 0; b < words.length * 32; b += 8)
                bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
              return bytes;
            },
            bytesToHex: function(bytes) {
              for (var hex = [], i = 0; i < bytes.length; i++) {
                hex.push((bytes[i] >>> 4).toString(16));
                hex.push((bytes[i] & 15).toString(16));
              }
              return hex.join("");
            },
            hexToBytes: function(hex) {
              for (var bytes = [], c = 0; c < hex.length; c += 2)
                bytes.push(parseInt(hex.substr(c, 2), 16));
              return bytes;
            },
            bytesToBase64: function(bytes) {
              for (var base64 = [], i = 0; i < bytes.length; i += 3) {
                var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
                for (var j = 0; j < 4; j++)
                  if (i * 8 + j * 6 <= bytes.length * 8)
                    base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
                  else
                    base64.push("=");
              }
              return base64.join("");
            },
            base64ToBytes: function(base64) {
              base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
              for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
                if (imod4 == 0)
                  continue;
                bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
              }
              return bytes;
            }
          };
          module2.exports = crypt;
        })();
      },
      "./node_modules/is-buffer/index.js": function(module2, exports2) {
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        module2.exports = function(obj) {
          return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
        };
        function isBuffer(obj) {
          return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
        }
        function isSlowBuffer(obj) {
          return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
        }
      },
      "./node_modules/md5/md5.js": function(module2, exports2, __webpack_require__) {
        (function() {
          var crypt = __webpack_require__("./node_modules/crypt/crypt.js"), utf8 = __webpack_require__("./node_modules/charenc/charenc.js").utf8, isBuffer = __webpack_require__("./node_modules/is-buffer/index.js"), bin = __webpack_require__("./node_modules/charenc/charenc.js").bin, md5 = function(message, options) {
            if (message.constructor == String)
              if (options && options.encoding === "binary")
                message = bin.stringToBytes(message);
              else
                message = utf8.stringToBytes(message);
            else if (isBuffer(message))
              message = Array.prototype.slice.call(message, 0);
            else if (!Array.isArray(message) && message.constructor !== Uint8Array)
              message = message.toString();
            var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
            for (var i = 0; i < m.length; i++) {
              m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
            }
            m[l >>> 5] |= 128 << l % 32;
            m[(l + 64 >>> 9 << 4) + 14] = l;
            var FF = md5._ff, GG = md5._gg, HH = md5._hh, II = md5._ii;
            for (var i = 0; i < m.length; i += 16) {
              var aa = a, bb = b, cc = c, dd = d;
              a = FF(a, b, c, d, m[i + 0], 7, -680876936);
              d = FF(d, a, b, c, m[i + 1], 12, -389564586);
              c = FF(c, d, a, b, m[i + 2], 17, 606105819);
              b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
              a = FF(a, b, c, d, m[i + 4], 7, -176418897);
              d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
              c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
              b = FF(b, c, d, a, m[i + 7], 22, -45705983);
              a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
              d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
              c = FF(c, d, a, b, m[i + 10], 17, -42063);
              b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
              a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
              d = FF(d, a, b, c, m[i + 13], 12, -40341101);
              c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
              b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
              a = GG(a, b, c, d, m[i + 1], 5, -165796510);
              d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
              c = GG(c, d, a, b, m[i + 11], 14, 643717713);
              b = GG(b, c, d, a, m[i + 0], 20, -373897302);
              a = GG(a, b, c, d, m[i + 5], 5, -701558691);
              d = GG(d, a, b, c, m[i + 10], 9, 38016083);
              c = GG(c, d, a, b, m[i + 15], 14, -660478335);
              b = GG(b, c, d, a, m[i + 4], 20, -405537848);
              a = GG(a, b, c, d, m[i + 9], 5, 568446438);
              d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
              c = GG(c, d, a, b, m[i + 3], 14, -187363961);
              b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
              a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
              d = GG(d, a, b, c, m[i + 2], 9, -51403784);
              c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
              b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
              a = HH(a, b, c, d, m[i + 5], 4, -378558);
              d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
              c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
              b = HH(b, c, d, a, m[i + 14], 23, -35309556);
              a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
              d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
              c = HH(c, d, a, b, m[i + 7], 16, -155497632);
              b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
              a = HH(a, b, c, d, m[i + 13], 4, 681279174);
              d = HH(d, a, b, c, m[i + 0], 11, -358537222);
              c = HH(c, d, a, b, m[i + 3], 16, -722521979);
              b = HH(b, c, d, a, m[i + 6], 23, 76029189);
              a = HH(a, b, c, d, m[i + 9], 4, -640364487);
              d = HH(d, a, b, c, m[i + 12], 11, -421815835);
              c = HH(c, d, a, b, m[i + 15], 16, 530742520);
              b = HH(b, c, d, a, m[i + 2], 23, -995338651);
              a = II(a, b, c, d, m[i + 0], 6, -198630844);
              d = II(d, a, b, c, m[i + 7], 10, 1126891415);
              c = II(c, d, a, b, m[i + 14], 15, -1416354905);
              b = II(b, c, d, a, m[i + 5], 21, -57434055);
              a = II(a, b, c, d, m[i + 12], 6, 1700485571);
              d = II(d, a, b, c, m[i + 3], 10, -1894986606);
              c = II(c, d, a, b, m[i + 10], 15, -1051523);
              b = II(b, c, d, a, m[i + 1], 21, -2054922799);
              a = II(a, b, c, d, m[i + 8], 6, 1873313359);
              d = II(d, a, b, c, m[i + 15], 10, -30611744);
              c = II(c, d, a, b, m[i + 6], 15, -1560198380);
              b = II(b, c, d, a, m[i + 13], 21, 1309151649);
              a = II(a, b, c, d, m[i + 4], 6, -145523070);
              d = II(d, a, b, c, m[i + 11], 10, -1120210379);
              c = II(c, d, a, b, m[i + 2], 15, 718787259);
              b = II(b, c, d, a, m[i + 9], 21, -343485551);
              a = a + aa >>> 0;
              b = b + bb >>> 0;
              c = c + cc >>> 0;
              d = d + dd >>> 0;
            }
            return crypt.endian([a, b, c, d]);
          };
          md5._ff = function(a, b, c, d, x, s, t) {
            var n = a + (b & c | ~b & d) + (x >>> 0) + t;
            return (n << s | n >>> 32 - s) + b;
          };
          md5._gg = function(a, b, c, d, x, s, t) {
            var n = a + (b & d | c & ~d) + (x >>> 0) + t;
            return (n << s | n >>> 32 - s) + b;
          };
          md5._hh = function(a, b, c, d, x, s, t) {
            var n = a + (b ^ c ^ d) + (x >>> 0) + t;
            return (n << s | n >>> 32 - s) + b;
          };
          md5._ii = function(a, b, c, d, x, s, t) {
            var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
            return (n << s | n >>> 32 - s) + b;
          };
          md5._blocksize = 16;
          md5._digestsize = 16;
          module2.exports = function(message, options) {
            if (message === void 0 || message === null)
              throw new Error("Illegal argument " + message);
            var digestbytes = crypt.wordsToBytes(md5(message, options));
            return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
          };
        })();
      },
      "./node_modules/regenerator-runtime/runtime.js": function(module2, exports2, __webpack_require__) {
        var runtime = function(exports3) {
          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined$1;
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
            return obj[key];
          }
          try {
            define({}, "");
          } catch (err) {
            define = function(obj, key, value) {
              return obj[key] = value;
            };
          }
          function wrap(innerFn, outerFn, self2, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            generator._invoke = makeInvokeMethod(innerFn, self2, context);
            return generator;
          }
          exports3.wrap = wrap;
          function tryCatch(fn, obj, arg) {
            try {
              return {type: "normal", arg: fn.call(obj, arg)};
            } catch (err) {
              return {type: "throw", arg: err};
            }
          }
          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";
          var ContinueSentinel = {};
          function Generator() {
          }
          function GeneratorFunction() {
          }
          function GeneratorFunctionPrototype() {
          }
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function() {
            return this;
          };
          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            IteratorPrototype = NativeIteratorPrototype;
          }
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function(method) {
              define(prototype, method, function(arg) {
                return this._invoke(method, arg);
              });
            });
          }
          exports3.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };
          exports3.mark = function(genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };
          exports3.awrap = function(arg) {
            return {__await: arg};
          };
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                  return PromiseImpl.resolve(value.__await).then(function(value2) {
                    invoke("next", value2, resolve, reject);
                  }, function(err) {
                    invoke("throw", err, resolve, reject);
                  });
                }
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                  result.value = unwrapped;
                  resolve(result);
                }, function(error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
            }
            var previousPromise;
            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            this._invoke = enqueue;
          }
          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
          };
          exports3.AsyncIterator = AsyncIterator;
          exports3.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
            if (PromiseImpl === void 0)
              PromiseImpl = Promise;
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
            return exports3.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
            });
          };
          function makeInvokeMethod(innerFn, self2, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }
              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }
                return doneResult();
              }
              context.method = method;
              context.arg = arg;
              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel)
                      continue;
                    return delegateResult;
                  }
                }
                if (context.method === "next") {
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }
                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self2, context);
                if (record.type === "normal") {
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                  if (record.arg === ContinueSentinel) {
                    continue;
                  }
                  return {
                    value: record.arg,
                    done: context.done
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined$1) {
              context.delegate = null;
              if (context.method === "throw") {
                if (delegate.iterator["return"]) {
                  context.method = "return";
                  context.arg = undefined$1;
                  maybeInvokeDelegate(delegate, context);
                  if (context.method === "throw") {
                    return ContinueSentinel;
                  }
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }
            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined$1;
              }
            } else {
              return info;
            }
            context.delegate = null;
            return ContinueSentinel;
          }
          defineIteratorMethods(Gp);
          define(Gp, toStringTagSymbol, "Generator");
          Gp[iteratorSymbol] = function() {
            return this;
          };
          Gp.toString = function() {
            return "[object Generator]";
          };
          function pushTryEntry(locs) {
            var entry = {tryLoc: locs[0]};
            if (1 in locs) {
              entry.catchLoc = locs[1];
            }
            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{tryLoc: "root"}];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }
          exports3.keys = function(object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();
            return function next() {
              while (keys.length) {
                var key2 = keys.pop();
                if (key2 in object) {
                  next.value = key2;
                  next.done = false;
                  return next;
                }
              }
              next.done = true;
              return next;
            };
          };
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }
              if (typeof iterable.next === "function") {
                return iterable;
              }
              if (!isNaN(iterable.length)) {
                var i = -1, next = function next2() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next2.value = iterable[i];
                      next2.done = false;
                      return next2;
                    }
                  }
                  next2.value = undefined$1;
                  next2.done = true;
                  return next2;
                };
                return next.next = next;
              }
            }
            return {next: doneResult};
          }
          exports3.values = values;
          function doneResult() {
            return {value: undefined$1, done: true};
          }
          Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
              this.prev = 0;
              this.next = 0;
              this.sent = this._sent = undefined$1;
              this.done = false;
              this.delegate = null;
              this.method = "next";
              this.arg = undefined$1;
              this.tryEntries.forEach(resetTryEntry);
              if (!skipTempReset) {
                for (var name in this) {
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined$1;
                  }
                }
              }
            },
            stop: function() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }
              return this.rval;
            },
            dispatchException: function(exception) {
              if (this.done) {
                throw exception;
              }
              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                  context.method = "next";
                  context.arg = undefined$1;
                }
                return !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") {
                  return handle("end");
                }
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },
            abrupt: function(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                finallyEntry = null;
              }
              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;
              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }
              return this.complete(record);
            },
            complete: function(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }
              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }
              return ContinueSentinel;
            },
            finish: function(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            catch: function(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName,
                nextLoc
              };
              if (this.method === "next") {
                this.arg = undefined$1;
              }
              return ContinueSentinel;
            }
          };
          return exports3;
        }(module2.exports);
        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      },
      "./src/api.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "setup", function() {
          return setup;
        });
        __webpack_require__.d(__webpack_exports__, "setupCache", function() {
          return setupCache2;
        });
        var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
        var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.symbol.js");
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
        var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("axios");
        var axios__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
        var _request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/request.js");
        var _cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/cache.js");
        __webpack_require__.d(__webpack_exports__, "serializeQuery", function() {
          return _cache__WEBPACK_IMPORTED_MODULE_7__["serializeQuery"];
        });
        var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/config.js");
        var _utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/utilities.js");
        function _objectWithoutProperties(source, excluded) {
          if (source == null)
            return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0)
                continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null)
            return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0)
              continue;
            target[key] = source[key];
          }
          return target;
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function() {
            var self2 = this, args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self2, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(void 0);
            });
          };
        }
        function setupCache2() {
          var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          config = Object(_config__WEBPACK_IMPORTED_MODULE_8__["makeConfig"])(config);
          function adapter(_x) {
            return _adapter.apply(this, arguments);
          }
          function _adapter() {
            _adapter = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(req) {
              var reqConfig, res, next, networkError, readOnError;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      reqConfig = Object(_config__WEBPACK_IMPORTED_MODULE_8__["mergeRequestConfig"])(config, req);
                      _context.next = 3;
                      return Object(_request__WEBPACK_IMPORTED_MODULE_6__["default"])(reqConfig, req);
                    case 3:
                      res = _context.sent;
                      next = res.next;
                      if (Object(_utilities__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(next)) {
                        _context.next = 7;
                        break;
                      }
                      return _context.abrupt("return", next);
                    case 7:
                      _context.prev = 7;
                      _context.next = 10;
                      return reqConfig.adapter(req);
                    case 10:
                      res = _context.sent;
                      _context.next = 16;
                      break;
                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](7);
                      networkError = _context.t0;
                    case 16:
                      if (!networkError) {
                        _context.next = 31;
                        break;
                      }
                      readOnError = Object(_utilities__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(reqConfig.readOnError) ? reqConfig.readOnError(networkError, req) : reqConfig.readOnError;
                      if (!readOnError) {
                        _context.next = 30;
                        break;
                      }
                      _context.prev = 19;
                      reqConfig.acceptStale = true;
                      _context.next = 23;
                      return Object(_request__WEBPACK_IMPORTED_MODULE_6__["default"])(reqConfig, req);
                    case 23:
                      res = _context.sent;
                      res.next.request.stale = true;
                      return _context.abrupt("return", res.next);
                    case 28:
                      _context.prev = 28;
                      _context.t1 = _context["catch"](19);
                    case 30:
                      throw networkError;
                    case 31:
                      return _context.abrupt("return", next(res));
                    case 32:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[7, 13], [19, 28]]);
            }));
            return _adapter.apply(this, arguments);
          }
          return {
            adapter,
            config,
            store: config.store
          };
        }
        function setup() {
          var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var instanceConfig = _objectSpread(_objectSpread(_objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_8__["defaults"].axios), config), {}, {
            cache: _objectSpread(_objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_8__["defaults"].axios.cache), config.cache)
          });
          var cache2 = setupCache2(instanceConfig.cache);
          var _ = instanceConfig.cache, axiosConfig = _objectWithoutProperties(instanceConfig, ["cache"]);
          var api = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create(_objectSpread(_objectSpread({}, axiosConfig), {}, {
            adapter: cache2.adapter
          }));
          api.cache = cache2.store;
          return api;
        }
        __webpack_exports__["default"] = {
          setup,
          setupCache: setupCache2,
          serializeQuery: _cache__WEBPACK_IMPORTED_MODULE_7__["serializeQuery"]
        };
      },
      "./src/cache.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "read", function() {
          return read;
        });
        __webpack_require__.d(__webpack_exports__, "write", function() {
          return write;
        });
        __webpack_require__.d(__webpack_exports__, "key", function() {
          return key;
        });
        __webpack_require__.d(__webpack_exports__, "invalidate", function() {
          return invalidate;
        });
        __webpack_require__.d(__webpack_exports__, "serializeQuery", function() {
          return serializeQuery;
        });
        var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es7.array.includes.js");
        var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.string.includes.js");
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utilities.js");
        var md5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/md5/md5.js");
        var md5__WEBPACK_IMPORTED_MODULE_6___default = /* @__PURE__ */ __webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_6__);
        var _serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/serialize.js");
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key2, arg) {
          try {
            var info = gen[key2](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function() {
            var self2 = this, args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self2, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(void 0);
            });
          };
        }
        function write(_x, _x2, _x3) {
          return _write.apply(this, arguments);
        }
        function _write() {
          _write = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(config, req, res) {
            var entry;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    entry = {
                      expires: config.expires,
                      data: Object(_serialize__WEBPACK_IMPORTED_MODULE_7__["default"])(config, req, res)
                    };
                    _context.next = 4;
                    return config.store.setItem(config.uuid, entry);
                  case 4:
                    _context.next = 19;
                    break;
                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    config.debug("Could not store response", _context.t0);
                    if (!config.clearOnError) {
                      _context.next = 18;
                      break;
                    }
                    _context.prev = 10;
                    _context.next = 13;
                    return config.store.clear();
                  case 13:
                    _context.next = 18;
                    break;
                  case 15:
                    _context.prev = 15;
                    _context.t1 = _context["catch"](10);
                    config.debug("Could not clear store", _context.t1);
                  case 18:
                    return _context.abrupt("return", false);
                  case 19:
                    return _context.abrupt("return", true);
                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 6], [10, 15]]);
          }));
          return _write.apply(this, arguments);
        }
        function read(_x4, _x5) {
          return _read.apply(this, arguments);
        }
        function _read() {
          _read = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2(config, req) {
            var uuid, ignoreCache, entry, error, expires, data, offline, _error;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    uuid = config.uuid, ignoreCache = config.ignoreCache;
                    _context2.next = 3;
                    return config.store.getItem(uuid);
                  case 3:
                    entry = _context2.sent;
                    if (!(ignoreCache || !entry || !entry.data)) {
                      _context2.next = 10;
                      break;
                    }
                    config.debug("cache-miss", req.url);
                    error = new Error();
                    error.reason = "cache-miss";
                    error.message = "Entry not found from cache";
                    throw error;
                  case 10:
                    expires = entry.expires, data = entry.data;
                    offline = typeof navigator !== "undefined" && "onLine" in navigator && !navigator.onLine;
                    if (!(!offline && !config.acceptStale && expires !== 0 && expires < Date.now())) {
                      _context2.next = 18;
                      break;
                    }
                    config.debug("cache-stale", req.url);
                    _error = new Error();
                    _error.reason = "cache-stale";
                    _error.message = "Entry is stale";
                    throw _error;
                  case 18:
                    config.debug(config.acceptStale ? "cache-hit-stale" : "cache-hit", req.url);
                    return _context2.abrupt("return", data);
                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          return _read.apply(this, arguments);
        }
        function key(config) {
          if (Object(_utilities__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(config.key))
            return config.key;
          var cacheKey;
          if (Object(_utilities__WEBPACK_IMPORTED_MODULE_5__["isString"])(config.key)) {
            cacheKey = function cacheKey2(req) {
              var url = "".concat(req.baseURL ? req.baseURL : "").concat(req.url);
              var key2 = "".concat(config.key, "/").concat(url).concat(serializeQuery(req));
              return req.data ? key2 + md5__WEBPACK_IMPORTED_MODULE_6___default()(req.data) : key2;
            };
          } else {
            cacheKey = function cacheKey2(req) {
              var url = "".concat(req.baseURL ? req.baseURL : "").concat(req.url);
              var key2 = url + serializeQuery(req);
              return req.data ? key2 + md5__WEBPACK_IMPORTED_MODULE_6___default()(req.data) : key2;
            };
          }
          return cacheKey;
        }
        function defaultInvalidate(_x6, _x7) {
          return _defaultInvalidate.apply(this, arguments);
        }
        function _defaultInvalidate() {
          _defaultInvalidate = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3(config, req) {
            var method;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    method = req.method.toLowerCase();
                    if (!config.exclude.methods.includes(method)) {
                      _context3.next = 4;
                      break;
                    }
                    _context3.next = 4;
                    return config.store.removeItem(config.uuid);
                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
          return _defaultInvalidate.apply(this, arguments);
        }
        function invalidate() {
          var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (Object(_utilities__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(config.invalidate))
            return config.invalidate;
          return defaultInvalidate;
        }
        function serializeQuery(req) {
          if (!req.params)
            return "";
          if (typeof URLSearchParams === "undefined")
            return JSON.stringify(req.params);
          var params = req.params;
          var isInstanceOfURLSearchParams = req.params instanceof URLSearchParams;
          if (!isInstanceOfURLSearchParams) {
            params = new URLSearchParams();
            Object.keys(req.params).forEach(function(key2) {
              return params.append(key2, req.params[key2]);
            });
          }
          return "?".concat(params.toString());
        }
        __webpack_exports__["default"] = {
          read,
          write,
          key,
          invalidate,
          serializeQuery
        };
      },
      "./src/config.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "defaults", function() {
          return defaults;
        });
        __webpack_require__.d(__webpack_exports__, "makeConfig", function() {
          return makeConfig;
        });
        __webpack_require__.d(__webpack_exports__, "mergeRequestConfig", function() {
          return mergeRequestConfig;
        });
        var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
        var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.symbol.js");
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("axios");
        var axios__WEBPACK_IMPORTED_MODULE_4___default = /* @__PURE__ */ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
        var _memory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/memory.js");
        var _cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/cache.js");
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
          } else {
            obj[key] = value;
          }
          return obj;
        }
        var noop = function noop2() {
        };
        var debug = function debug2() {
          var _console;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return (_console = console).log.apply(_console, ["[axios-cache-adapter]"].concat(args));
        };
        var defaults = {
          cache: {
            maxAge: 0,
            limit: false,
            store: null,
            key: null,
            invalidate: null,
            exclude: {
              paths: [],
              query: true,
              filter: null,
              methods: ["post", "patch", "put", "delete"]
            },
            adapter: axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.adapter,
            clearOnStale: true,
            clearOnError: true,
            readOnError: false,
            readHeaders: false,
            debug: false,
            ignoreCache: false
          },
          axios: {
            cache: {
              maxAge: 15 * 60 * 1e3
            }
          }
        };
        var disallowedPerRequestKeys = ["limit", "store", "adapter", "uuid", "acceptStale"];
        var makeConfig = function makeConfig2() {
          var override = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var config = _objectSpread(_objectSpread(_objectSpread({}, defaults.cache), override), {}, {
            exclude: _objectSpread(_objectSpread({}, defaults.cache.exclude), override.exclude)
          });
          config.key = Object(_cache__WEBPACK_IMPORTED_MODULE_6__["key"])(config);
          config.invalidate = Object(_cache__WEBPACK_IMPORTED_MODULE_6__["invalidate"])(config);
          if (config.debug !== false) {
            config.debug = typeof config.debug === "function" ? config.debug : debug;
          } else {
            config.debug = noop;
          }
          if (!config.store)
            config.store = new _memory__WEBPACK_IMPORTED_MODULE_5__["default"]();
          config.debug("Global cache config", config);
          return config;
        };
        var mergeRequestConfig = function mergeRequestConfig2(config, req) {
          var requestConfig = req.cache || {};
          if (requestConfig) {
            disallowedPerRequestKeys.forEach(function(key) {
              return requestConfig[key] ? delete requestConfig[key] : void 0;
            });
          }
          var mergedConfig = _objectSpread(_objectSpread(_objectSpread({}, config), requestConfig), {}, {
            exclude: _objectSpread(_objectSpread({}, config.exclude), requestConfig.exclude)
          });
          if (mergedConfig.debug === true) {
            mergedConfig.debug = debug;
          }
          if (requestConfig.key) {
            mergedConfig.key = Object(_cache__WEBPACK_IMPORTED_MODULE_6__["key"])(requestConfig);
          }
          mergedConfig.uuid = mergedConfig.key(req);
          config.debug("Request config for ".concat(req.url), mergedConfig);
          return mergedConfig;
        };
        __webpack_exports__["default"] = {
          defaults,
          makeConfig,
          mergeRequestConfig
        };
      },
      "./src/exclude.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es7.array.includes.js");
        var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es6.string.includes.js");
        var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utilities.js");
        function exclude() {
          var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var req = arguments.length > 1 ? arguments[1] : void 0;
          var _config$exclude = config.exclude, exclude2 = _config$exclude === void 0 ? {} : _config$exclude, debug = config.debug;
          var method = req.method.toLowerCase();
          if (method === "head" || exclude2.methods.includes(method)) {
            debug("Excluding request by HTTP method ".concat(req.url));
            return true;
          }
          if (typeof exclude2.filter === "function" && exclude2.filter(req)) {
            debug("Excluding request by filter ".concat(req.url));
            return true;
          }
          var hasQueryParams = /\?.*$/.test(req.url) || Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["isObject"])(req.params) && Object.keys(req.params).length !== 0 || typeof URLSearchParams !== "undefined" && req.params instanceof URLSearchParams;
          if (exclude2.query && hasQueryParams) {
            debug("Excluding request by query ".concat(req.url));
            return true;
          }
          var paths = exclude2.paths || [];
          var found = paths.some(function(regexp) {
            return req.url.match(regexp);
          });
          if (found) {
            debug("Excluding request by url match ".concat(req.url));
            return true;
          }
          return false;
        }
        __webpack_exports__["default"] = exclude;
      },
      "./src/index.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/api.js");
        __webpack_require__.d(__webpack_exports__, "setup", function() {
          return _api__WEBPACK_IMPORTED_MODULE_0__["setup"];
        });
        __webpack_require__.d(__webpack_exports__, "setupCache", function() {
          return _api__WEBPACK_IMPORTED_MODULE_0__["setupCache"];
        });
        __webpack_require__.d(__webpack_exports__, "serializeQuery", function() {
          return _api__WEBPACK_IMPORTED_MODULE_0__["serializeQuery"];
        });
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return _api__WEBPACK_IMPORTED_MODULE_0__["default"];
        });
      },
      "./src/limit.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function() {
            var self2 = this, args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self2, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(void 0);
            });
          };
        }
        function limit(_x) {
          return _limit.apply(this, arguments);
        }
        function _limit() {
          _limit = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(config) {
            var length, firstItem;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return config.store.length();
                  case 2:
                    length = _context.sent;
                    if (!(length < config.limit)) {
                      _context.next = 5;
                      break;
                    }
                    return _context.abrupt("return");
                  case 5:
                    config.debug("Current store size: ".concat(length));
                    _context.next = 8;
                    return config.store.iterate(function(value, key) {
                      if (!firstItem)
                        firstItem = {
                          value,
                          key
                        };
                      if (value.expires < firstItem.value.expires)
                        firstItem = {
                          value,
                          key
                        };
                    });
                  case 8:
                    if (!firstItem) {
                      _context.next = 12;
                      break;
                    }
                    config.debug("Removing item: ".concat(firstItem.key));
                    _context.next = 12;
                    return config.store.removeItem(firstItem.key);
                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
          return _limit.apply(this, arguments);
        }
        __webpack_exports__["default"] = limit;
      },
      "./src/memory.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
        var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utilities.js");
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function() {
            var self2 = this, args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self2, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(void 0);
            });
          };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var MemoryStore = /* @__PURE__ */ function() {
          function MemoryStore2() {
            _classCallCheck(this, MemoryStore2);
            this.store = {};
          }
          _createClass(MemoryStore2, [{
            key: "getItem",
            value: function() {
              var _getItem = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(key) {
                var item;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        item = this.store[key] || null;
                        return _context.abrupt("return", JSON.parse(item));
                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
              function getItem(_x) {
                return _getItem.apply(this, arguments);
              }
              return getItem;
            }()
          }, {
            key: "setItem",
            value: function() {
              var _setItem = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2(key, value) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.store[key] = JSON.stringify(value);
                        return _context2.abrupt("return", value);
                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
              function setItem(_x2, _x3) {
                return _setItem.apply(this, arguments);
              }
              return setItem;
            }()
          }, {
            key: "removeItem",
            value: function() {
              var _removeItem = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3(key) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        delete this.store[key];
                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
              function removeItem(_x4) {
                return _removeItem.apply(this, arguments);
              }
              return removeItem;
            }()
          }, {
            key: "clear",
            value: function() {
              var _clear = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.store = {};
                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
              function clear() {
                return _clear.apply(this, arguments);
              }
              return clear;
            }()
          }, {
            key: "length",
            value: function() {
              var _length = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", Object.keys(this.store).length);
                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
              function length() {
                return _length.apply(this, arguments);
              }
              return length;
            }()
          }, {
            key: "iterate",
            value: function iterate(fn) {
              return Promise.all(Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["mapObject"])(this.store, fn));
            }
          }]);
          return MemoryStore2;
        }();
        __webpack_exports__["default"] = MemoryStore;
      },
      "./src/request.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        var _response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/response.js");
        var _exclude__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/exclude.js");
        var _cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/cache.js");
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function() {
            var self2 = this, args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self2, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(void 0);
            });
          };
        }
        function request(_x, _x2) {
          return _request.apply(this, arguments);
        }
        function _request() {
          _request = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(config, req) {
            var next, res, excludeFromCache;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    excludeFromCache = function _excludeFromCache() {
                      config.excludeFromCache = true;
                      return {
                        config,
                        next
                      };
                    };
                    config.debug("uuid", config.uuid);
                    next = function next2() {
                      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                      }
                      return _response__WEBPACK_IMPORTED_MODULE_2__["default"].apply(void 0, [config, req].concat(args));
                    };
                    _context.next = 5;
                    return config.invalidate(config, req);
                  case 5:
                    if (!Object(_exclude__WEBPACK_IMPORTED_MODULE_3__["default"])(config, req)) {
                      _context.next = 7;
                      break;
                    }
                    return _context.abrupt("return", excludeFromCache());
                  case 7:
                    _context.prev = 7;
                    _context.next = 10;
                    return Object(_cache__WEBPACK_IMPORTED_MODULE_4__["read"])(config, req);
                  case 10:
                    res = _context.sent;
                    res.config = req;
                    res.request = {
                      fromCache: true
                    };
                    return _context.abrupt("return", {
                      config,
                      next: res
                    });
                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context["catch"](7);
                    if (!(config.clearOnStale && _context.t0.reason === "cache-stale")) {
                      _context.next = 21;
                      break;
                    }
                    _context.next = 21;
                    return config.store.removeItem(config.uuid);
                  case 21:
                    return _context.abrupt("return", {
                      config,
                      next
                    });
                  case 22:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[7, 16]]);
          }));
          return _request.apply(this, arguments);
        }
        __webpack_exports__["default"] = request;
      },
      "./src/response.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        var _limit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/limit.js");
        var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/cache.js");
        var cache_control_esm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cache-control-esm/index.js");
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function() {
            var self2 = this, args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self2, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(void 0);
            });
          };
        }
        function response(_x, _x2, _x3) {
          return _response.apply(this, arguments);
        }
        function _response() {
          _response = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(config, req, res) {
            var _res$request, request, _res$headers, headers, cacheControl;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _res$request = res.request, request = _res$request === void 0 ? {} : _res$request, _res$headers = res.headers, headers = _res$headers === void 0 ? {} : _res$headers;
                    if (!(["arraybuffer", "blob"].indexOf(request.responseType) > -1)) {
                      _context.next = 3;
                      break;
                    }
                    return _context.abrupt("return", res);
                  case 3:
                    cacheControl = {};
                    if (config.readHeaders) {
                      if (headers["cache-control"]) {
                        cacheControl = Object(cache_control_esm__WEBPACK_IMPORTED_MODULE_4__["parse"])(headers["cache-control"]);
                        if (cacheControl.noCache || cacheControl.noStore) {
                          config.excludeFromCache = true;
                        }
                      } else if (headers.expires) {
                        config.expires = new Date(headers.expires).getTime();
                      } else {
                        config.expires = new Date().getTime();
                      }
                    }
                    if (config.excludeFromCache) {
                      _context.next = 15;
                      break;
                    }
                    if (cacheControl.maxAge || cacheControl.maxAge === 0) {
                      config.expires = Date.now() + cacheControl.maxAge * 1e3;
                    } else if (!config.readHeaders) {
                      config.expires = config.maxAge === 0 ? Date.now() : Date.now() + config.maxAge;
                    }
                    if (!config.limit) {
                      _context.next = 11;
                      break;
                    }
                    config.debug("Detected limit: ".concat(config.limit));
                    _context.next = 11;
                    return Object(_limit__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
                  case 11:
                    _context.next = 13;
                    return Object(_cache__WEBPACK_IMPORTED_MODULE_3__["write"])(config, req, res);
                  case 13:
                    _context.next = 16;
                    break;
                  case 15:
                    res.request.excludedFromCache = true;
                  case 16:
                    return _context.abrupt("return", res);
                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
          return _response.apply(this, arguments);
        }
        __webpack_exports__["default"] = response;
      },
      "./src/serialize.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es6.symbol.js");
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        function _objectWithoutProperties(source, excluded) {
          if (source == null)
            return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0)
                continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null)
            return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0)
              continue;
            target[key] = source[key];
          }
          return target;
        }
        function serialize(config, req, res) {
          if (res.data) {
            try {
              res.data = JSON.parse(res.data);
            } catch (err) {
              config.debug("Could not parse data as JSON", err);
            }
          }
          var request = res.request, _ = res.config, serialized = _objectWithoutProperties(res, ["request", "config"]);
          return serialized;
        }
        __webpack_exports__["default"] = serialize;
      },
      "./src/utilities.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "isObject", function() {
          return isObject;
        });
        __webpack_require__.d(__webpack_exports__, "getTag", function() {
          return getTag;
        });
        __webpack_require__.d(__webpack_exports__, "isFunction", function() {
          return isFunction;
        });
        __webpack_require__.d(__webpack_exports__, "isString", function() {
          return isString;
        });
        __webpack_require__.d(__webpack_exports__, "mapObject", function() {
          return mapObject;
        });
        var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es7.symbol.async-iterator.js");
        var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es6.symbol.js");
        var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
        var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function isObject(value) {
          var type = _typeof(value);
          return value != null && (type === "object" || type === "function");
        }
        function getTag(value) {
          if (value === null) {
            return value === void 0 ? "[object Undefined]" : "[object Null]";
          }
          return Object.prototype.toString.call(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = getTag(value);
          return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object Proxy]";
        }
        function isString(value) {
          var type = _typeof(value);
          return type === "string" || type === "object" && value != null && !Array.isArray(value) && getTag(value) === "[object String]";
        }
        function mapObject(value, fn) {
          if (!isObject(value)) {
            return [];
          }
          return Object.keys(value).map(function(key) {
            return fn(value[key], key);
          });
        }
      },
      axios: function(module2, exports2) {
        module2.exports = __WEBPACK_EXTERNAL_MODULE_axios__;
      }
    });
  });
});
var setupCache = cache.setupCache;
export {setupCache};
