function curry(fn, args = []) {
  return (..._args) => ((rest) => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}
const _isArray = Array.isArray;
function reduceFn(reducer, acc, list) {
  if (!_isArray(list)) {
    throw new TypeError("reduce: list must be array or iterable");
  }
  let index = 0;
  const len = list.length;
  while (index < len) {
    acc = reducer(acc, list[index], index, list);
    index++;
  }
  return acc;
}
const reduce = curry(reduceFn);
function type(input) {
  const typeOf = typeof input;
  if (input === null) {
    return "Null";
  } else if (input === void 0) {
    return "Undefined";
  } else if (typeOf === "boolean") {
    return "Boolean";
  } else if (typeOf === "number") {
    return Number.isNaN(input) ? "NaN" : "Number";
  } else if (typeOf === "string") {
    return "String";
  } else if (_isArray(input)) {
    return "Array";
  } else if (typeOf === "symbol") {
    return "Symbol";
  } else if (input instanceof RegExp) {
    return "RegExp";
  }
  const asStr = input && input.toString ? input.toString() : "";
  if (["true", "false"].includes(asStr))
    return "Boolean";
  if (!Number.isNaN(Number(asStr)))
    return "Number";
  if (asStr.startsWith("async"))
    return "Async";
  if (asStr === "[object Promise]")
    return "Promise";
  if (typeOf === "function")
    return "Function";
  if (input instanceof String)
    return "String";
  return "Object";
}
function parseError(maybeError) {
  const typeofError = maybeError.__proto__.toString();
  if (!["Error", "TypeError"].includes(typeofError))
    return [];
  return [typeofError, maybeError.message];
}
function parseDate(maybeDate) {
  if (!maybeDate.toDateString)
    return [false];
  return [true, maybeDate.getTime()];
}
function parseRegex(maybeRegex) {
  if (maybeRegex.constructor !== RegExp)
    return [false];
  return [true, maybeRegex.toString()];
}
function equals(a, b) {
  if (arguments.length === 1)
    return (_b) => equals(a, _b);
  const aType = type(a);
  if (aType !== type(b))
    return false;
  if (aType === "Function") {
    return a.name === void 0 ? false : a.name === b.name;
  }
  if (["NaN", "Undefined", "Null"].includes(aType))
    return true;
  if (aType === "Number") {
    if (Object.is(-0, a) !== Object.is(-0, b))
      return false;
    return a.toString() === b.toString();
  }
  if (["String", "Boolean"].includes(aType)) {
    return a.toString() === b.toString();
  }
  if (aType === "Array") {
    const aClone = Array.from(a);
    const bClone = Array.from(b);
    if (aClone.toString() !== bClone.toString()) {
      return false;
    }
    let loopArrayFlag = true;
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
          loopArrayFlag = false;
        }
      }
    });
    return loopArrayFlag;
  }
  const aRegex = parseRegex(a);
  const bRegex = parseRegex(b);
  if (aRegex[0]) {
    return bRegex[0] ? aRegex[1] === bRegex[1] : false;
  } else if (bRegex[0])
    return false;
  const aDate = parseDate(a);
  const bDate = parseDate(b);
  if (aDate[0]) {
    return bDate[0] ? aDate[1] === bDate[1] : false;
  } else if (bDate[0])
    return false;
  const aError = parseError(a);
  const bError = parseError(b);
  if (aError[0]) {
    return bError[0] ? aError[0] === bError[0] && aError[1] === bError[1] : false;
  }
  if (aType === "Object") {
    const aKeys = Object.keys(a);
    if (aKeys.length !== Object.keys(b).length) {
      return false;
    }
    let loopObjectFlag = true;
    aKeys.forEach((aKeyInstance) => {
      if (loopObjectFlag) {
        const aValue = a[aKeyInstance];
        const bValue = b[aKeyInstance];
        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false;
        }
      }
    });
    return loopObjectFlag;
  }
  return false;
}
function identity(input) {
  return input;
}
function multiply(x, y) {
  if (arguments.length === 1)
    return (_y) => multiply(x, _y);
  return x * y;
}
const product = reduce(multiply, 1);
function range(start, end) {
  if (arguments.length === 1)
    return (_end) => range(start, _end);
  if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
    throw new TypeError("Both arguments to range must be numbers");
  }
  if (end < start)
    return [];
  const len = end - start;
  const willReturn = Array(len);
  for (let i = 0; i < len; i++) {
    willReturn[i] = start + i;
  }
  return willReturn;
}
function sortBy(sortFn, list) {
  if (arguments.length === 1)
    return (_list) => sortBy(sortFn, _list);
  const clone = list.slice();
  return clone.sort((a, b) => {
    const aSortResult = sortFn(a);
    const bSortResult = sortFn(b);
    if (aSortResult === bSortResult)
      return 0;
    return aSortResult < bSortResult ? -1 : 1;
  });
}
export {equals as e, identity as i, range as r, sortBy as s};
