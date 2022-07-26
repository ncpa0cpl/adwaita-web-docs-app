import lodash_1 from '/_snowpack/pkg/lodash.v4.17.21.js';
import * as luxon from '/_snowpack/pkg/luxon.v3.0.1.js';
import * as immer from '/_snowpack/pkg/immer.v9.0.15.js';
import * as react from '/_snowpack/pkg/react.v18.2.0.js';
import shim_1 from '/_snowpack/pkg/use-sync-external-store.shim.v1.2.0.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var CatchMiddleware = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatchMiddleware = void 0;
function createCatchMiddleware(params) {
    const onCatch = params?.onCatch ?? (() => { });
    return (prevState, value, resume) => {
        if (value instanceof Promise) {
            value.catch((e) => onCatch(e));
            return resume(value);
        }
        try {
            return resume(value);
        }
        catch (e) {
            return onCatch(e);
        }
    };
}
exports.createCatchMiddleware = createCatchMiddleware;
});

var CatchMiddleware$1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(CatchMiddleware, exports);
});

var CancelUpdate_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelUpdate = void 0;
const CANCEL_UPDATE_SYMBOL = Symbol();
/** A class that can be thrown within a Quark Action to prevent the update. */
class CancelUpdate {
    constructor() {
        this.identifier = CANCEL_UPDATE_SYMBOL;
    }
    static isCancel(e) {
        return (typeof e === "object" &&
            e !== null &&
            "identifier" in e &&
            e.identifier === CANCEL_UPDATE_SYMBOL);
    }
}
exports.CancelUpdate = CancelUpdate;
});

var GeneralPurposeUtilities = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasKey = void 0;
/**
 * Check if the provided key is a property of the provided object and assert that
 * object type to allow the access to that property.
 *
 * @internal
 */
function hasKey(obj, key) {
    return key in obj;
}
exports.hasKey = hasKey;
});

var PropagateError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.propagateError = void 0;
const propagateError = (e, message) => {
    let originalMessage = null;
    if (e instanceof Error) {
        originalMessage = e.message;
    }
    // @ts-expect-error
    return new Error(`${message}${originalMessage ? ` [${originalMessage}]` : ""}`, {
        cause: e,
    });
};
exports.propagateError = propagateError;
});

var AsyncUpdates = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncUpdatesController = exports.CancelablePromise = exports.extractIsPromiseCanceled = void 0;



const PROMISE_CANCEL_STATUS_PROPERTY = Symbol("__quark_internal_is_promise_canceled__");
/**
 * Check if the passed promise has been dispatched to the Quark as update and canceled.
 *
 * If the provided promise has not been ever dispatched as update `undefined` will be returned.
 *
 * @param promise A Promise class instance
 * @returns A boolean
 */
function extractIsPromiseCanceled(promise) {
    if (typeof promise === "object" &&
        promise !== null &&
        (0, GeneralPurposeUtilities.hasKey)(promise, PROMISE_CANCEL_STATUS_PROPERTY)) {
        return promise[PROMISE_CANCEL_STATUS_PROPERTY];
    }
}
exports.extractIsPromiseCanceled = extractIsPromiseCanceled;
function assignCancelStatusToOriginalPromise(promise, canceled) {
    Object.assign(promise, { [PROMISE_CANCEL_STATUS_PROPERTY]: canceled });
}
/**
 * Creates a CancelablePromise object which is an object wrapping a regular
 * JavaScript Promise class instance that allows for subscribing to it with a
 * `.then()` method and cancel that subscription with a `.cancel()` method.
 *
 * @param orgPromise A Promise class instance
 * @returns CancelablePromise object
 * @internal
 */
function CancelablePromise(orgPromise) {
    let isCanceled = false;
    assignCancelStatusToOriginalPromise(orgPromise, isCanceled);
    return {
        then(onFulfilled) {
            return orgPromise
                .then(async (v) => {
                if (!isCanceled)
                    return Promise.resolve(await onFulfilled(v));
                else
                    return Promise.resolve();
            })
                .catch((e) => {
                if (CancelUpdate_1.CancelUpdate.isCancel(e)) {
                    assignCancelStatusToOriginalPromise(orgPromise, true);
                    return;
                }
                if (!isCanceled) {
                    const err = (0, PropagateError.propagateError)(e, "Asynchronous state update was unsuccessful due to an error.");
                    console.error(err);
                }
                throw e;
            });
        },
        cancel() {
            isCanceled = true;
            assignCancelStatusToOriginalPromise(orgPromise, isCanceled);
        },
    };
}
exports.CancelablePromise = CancelablePromise;
/**
 * Creates a Controller responsible for managing asynchronous updates. By default all
 * and any dispatched updates cause any previous non resolved updates to be canceled.
 * This prevents occurrence of race conditions between the dispatched updates.
 *
 * @param self Quark context
 * @internal
 */
function asyncUpdatesController(self) {
    let currentAsyncUpdate;
    const preventLastAsyncUpdate = self.configOptions.allowRaceConditions
        ? () => { }
        : () => {
            currentAsyncUpdate?.cancel();
            currentAsyncUpdate = undefined;
        };
    const dispatchAsyncUpdate = (p, stateUpdate) => {
        preventLastAsyncUpdate();
        const cp = CancelablePromise(p);
        currentAsyncUpdate = cp;
        return cp.then((v) => {
            currentAsyncUpdate = undefined;
            stateUpdate(v);
        });
    };
    return {
        dispatchAsyncUpdate,
        preventLastAsyncUpdate,
    };
}
exports.asyncUpdatesController = asyncUpdatesController;
});

var AddToGlobalSpace = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToGlobalSpace = void 0;
function addToGlobalSpace(o) {
    if (window) {
        Object.assign(window, o);
    }
    else if (commonjsGlobal && commonjsGlobal.window) {
        Object.assign(commonjsGlobal.window, o);
    }
    else if (commonjsGlobal) {
        Object.assign(commonjsGlobal, o);
    }
}
exports.addToGlobalSpace = addToGlobalSpace;
});

var luxon_1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(luxon);

var EntryToReadableForm = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryToReadableForm = void 0;


const PROPERTIES_FRIENDLY_NAMES_MAP = {
    value: "Value:",
    type: "Value Type:",
    change: "Value Change is:",
    initialState: "Previous state value:",
    dispatchedUpdate: "Dispatched state value:",
    name: "Quark Name:",
    source: "Update Source:",
    stackTrace: "Stack Trace:",
    stateAfterUpdate: "Next state value:",
    time: "Timestamp:",
    isCanceled: "Canceled:",
};
const columns = [
    "initialState",
    "dispatchedUpdate",
    "stateAfterUpdate",
    "isCanceled",
    "change",
    "source",
    "time",
    "stackTrace",
];
function stringifyIfObject(v) {
    if (typeof v === "object") {
        if (v instanceof Promise)
            return "Promise {}";
        if (v !== null)
            return JSON.stringify(v);
        return "null";
    }
    return v;
}
function parseObjectValue(obj) {
    if ("type" in obj && "value" in obj)
        return `Type: ${obj.type}; Value: [${stringifyIfObject(obj.value)}]`;
    return `Type: Value; Value: [${stringifyIfObject(obj)}]`;
}
function entryToReadableForm(entry) {
    const columnValues = columns.map((propertyName) => {
        const friendlyName = PROPERTIES_FRIENDLY_NAMES_MAP[propertyName];
        const value = (0, GeneralPurposeUtilities.hasKey)(entry, propertyName)
            ? entry[propertyName]
            : undefined;
        if (typeof value === "object") {
            return [friendlyName, parseObjectValue(value)];
        }
        if (propertyName === "time") {
            return [friendlyName, luxon_1.DateTime.fromMillis(value).toISO()];
        }
        if (propertyName === "isCanceled") {
            return [friendlyName, !!value];
        }
        return [friendlyName, value];
    });
    return Object.fromEntries(columnValues);
}
exports.entryToReadableForm = entryToReadableForm;
});

var ConsoleTools = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConsoleTools = void 0;



function printQuarkHistory(options) {
    const { showLast = 16, name = undefined } = options ?? {};
    const history = (0, UpdateHistory.getStateUpdateHistory)();
    const quarksHistories = history.getHistory();
    for (const quarkHistory of quarksHistories) {
        const useTablePrint = options?.useTablePrint ?? quarkHistory.options.useTablePrint;
        if (!name || quarkHistory.name === name) {
            if (name)
                console.groupCollapsed(quarkHistory.name);
            else
                console.group(quarkHistory.name);
            const table = [...quarkHistory.stateChangeHistory]
                .reverse()
                .slice(0, showLast)
                .reverse()
                .map(EntryToReadableForm.entryToReadableForm);
            if (useTablePrint)
                console.table(table);
            else
                console.log(table);
            console.groupEnd();
        }
    }
}
function initConsoleTools() {
    (0, AddToGlobalSpace.addToGlobalSpace)({ printQuarkHistory });
}
exports.initConsoleTools = initConsoleTools;
});

var TrackedQuark = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrackedQuark = void 0;


function createTrackedQuark(options) {
    const stateChangeHistory = [];
    const onEntryAdded = options.realTimeLogging
        ? (entry) => {
            console.group(options.name);
            if (options.useTablePrint)
                console.table([(0, EntryToReadableForm.entryToReadableForm)(entry)]);
            else
                console.log((0, EntryToReadableForm.entryToReadableForm)(entry));
            console.groupEnd();
        }
        : () => { };
    const addHistoryEntry = (entry) => {
        const change = ["Promise", "Generator"].includes(entry.dispatchedUpdate.type)
            ? "Postponed"
            : "Immediate";
        const newEntry = {
            ...entry,
            time: luxon_1.DateTime.now().toMillis(),
            change,
            stateAfterUpdate: change === "Postponed"
                ? entry.initialState.value
                : entry.dispatchedUpdate.value,
        };
        stateChangeHistory.push(newEntry);
        onEntryAdded(newEntry);
    };
    const clear = () => {
        stateChangeHistory.splice(0);
    };
    return {
        options,
        name: options.name,
        stateChangeHistory,
        addHistoryEntry,
        clear,
    };
}
exports.createTrackedQuark = createTrackedQuark;
});

var UpdateHistory = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateUpdateHistory = void 0;



function createStateUpdateHistory() {
    const trackedQuarks = [];
    const track = (options) => {
        const quarkTrack = (0, TrackedQuark.createTrackedQuark)(options);
        trackedQuarks.push(quarkTrack);
        return quarkTrack;
    };
    const getHistory = () => {
        return trackedQuarks.map((t) => ({
            options: t.options,
            name: t.name,
            stateChangeHistory: t.stateChangeHistory,
        }));
    };
    const showHistory = () => {
        return Object.fromEntries(trackedQuarks.map((trackedQuark, index) => {
            return [`${index}_${trackedQuark.name}`, trackedQuark.stateChangeHistory];
        }));
    };
    const clear = () => {
        for (const q of trackedQuarks) {
            q.clear();
        }
    };
    return { track, showHistory, getHistory, clear };
}
let StateUpdateHistory;
function getStateUpdateHistory() {
    if (StateUpdateHistory)
        return StateUpdateHistory;
    StateUpdateHistory = createStateUpdateHistory();
    (0, AddToGlobalSpace.addToGlobalSpace)({ __quark_history_tracker__: StateUpdateHistory });
    (0, ConsoleTools.initConsoleTools)();
    return StateUpdateHistory;
}
exports.getStateUpdateHistory = getStateUpdateHistory;
});

var DebugHistoryMiddleware = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDebugHistoryMiddleware = void 0;



function getValueType(val) {
    if (val instanceof Promise)
        return "Promise";
    if (typeof val === "function")
        return "Generator";
    return "Value";
}
function cloneDeep(v) {
    if (v instanceof Promise || typeof v === "function")
        return v;
    return (0, lodash_1.cloneDeep)(v);
}
function createDebugHistoryMiddleware(options) {
    const { name, trace = true, realTimeLogging = false, useTablePrint = true, } = options;
    const StateUpdateHistory = (0, UpdateHistory.getStateUpdateHistory)();
    const quarkHistoryTracker = StateUpdateHistory.track({
        name,
        realTimeLogging,
        useTablePrint,
    });
    return (getState, newValue, resume, _, type) => {
        switch (type) {
            case "sync": {
                const stackTrace = trace
                    ? new Error().stack?.replace(/$Error\n\sat/gi, "Called from")
                    : undefined;
                quarkHistoryTracker.addHistoryEntry({
                    source: "Sync-Dispatch",
                    stackTrace,
                    initialState: {
                        type: "Value",
                        value: cloneDeep(getState()),
                    },
                    dispatchedUpdate: {
                        type: getValueType(newValue),
                        value: cloneDeep(newValue),
                    },
                });
                break;
            }
            case "async": {
                quarkHistoryTracker.addHistoryEntry({
                    source: "Async-Dispatch",
                    stackTrace: undefined,
                    initialState: {
                        type: "Value",
                        value: cloneDeep(getState()),
                    },
                    dispatchedUpdate: {
                        type: getValueType(newValue),
                        value: cloneDeep(newValue),
                    },
                });
                break;
            }
        }
        if (newValue instanceof Promise) {
            newValue
                .then((v) => {
                const hasBeenCanceled = (0, AsyncUpdates.extractIsPromiseCanceled)(newValue);
                if (hasBeenCanceled) {
                    quarkHistoryTracker.addHistoryEntry({
                        dispatchedUpdate: {
                            type: getValueType(v),
                            value: cloneDeep(v),
                        },
                        initialState: {
                            type: "Value",
                            value: getState(),
                        },
                        source: "Async-Dispatch",
                        stackTrace: undefined,
                        isCanceled: true,
                    });
                }
            })
                .catch(() => { });
        }
        return resume(newValue);
    };
}
exports.createDebugHistoryMiddleware = createDebugHistoryMiddleware;
});

var DebugHistoryMiddleware$1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(DebugHistoryMiddleware, exports);
});

var immer_1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(immer);

var ImmerMiddleware = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImmerMiddleware = void 0;

const createImmerMiddleware = (options) => {
    if (options?.es5support) {
        (0, immer_1.enableES5)();
    }
    if (options?.mapAndSetSupport) {
        (0, immer_1.enableMapSet)();
    }
    return (_, action, resume) => {
        if ((0, immer_1.isDraft)(action)) {
            return resume((0, immer_1.finishDraft)(action));
        }
        if (typeof action === "function") {
            return resume((currentState) => {
                if (typeof currentState !== "object" || currentState === null)
                    return action(currentState);
                const draft = (0, immer_1.createDraft)(currentState);
                const actionResult = action(draft);
                if ((0, immer_1.isDraft)(actionResult)) {
                    return (0, immer_1.finishDraft)(actionResult);
                }
                return actionResult;
            });
        }
        return resume(action);
    };
};
exports.createImmerMiddleware = createImmerMiddleware;
});

var ImmerMiddleware$1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(ImmerMiddleware, exports);
});

var Middlewares = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImmerMiddleware = exports.createDebugHistoryMiddleware = exports.createCatchMiddleware = void 0;

Object.defineProperty(exports, "createCatchMiddleware", { enumerable: true, get: function () { return CatchMiddleware$1.createCatchMiddleware; } });

Object.defineProperty(exports, "createDebugHistoryMiddleware", { enumerable: true, get: function () { return DebugHistoryMiddleware$1.createDebugHistoryMiddleware; } });

Object.defineProperty(exports, "createImmerMiddleware", { enumerable: true, get: function () { return ImmerMiddleware$1.createImmerMiddleware; } });
});

var GenerateCustomActions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCustomActions = void 0;
/**
 * Generates 'action' function based on the actions defined in the Quark config.
 *
 * Each 'action' definition takes the Quark state value as it's first argument and
 * returns a new state value.
 *
 * @param self Context of the Quark in question
 * @param setState Function allowing for updating the current state of the Quark
 * @param actions Object containing 'action' definitions
 * @returns An object with the same structure as the `actions` argument
 * @internal
 */
function generateCustomActions(self, setState, actions) {
    return Object.fromEntries(Object.entries(actions).map(([actionName, actionMethod]) => {
        actionMethod = actionMethod.bind(actions);
        const wrappedAction = (...args) => {
            const r = setState((currentState) => actionMethod(currentState, ...args));
            return r;
        };
        return [actionName, wrappedAction];
    }));
}
exports.generateCustomActions = generateCustomActions;
});

var GenerateCustomSelectors = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCustomSelectors = void 0;

/** @internal */
function generatePredefinedSelectHook(self, selector) {
    const hook = (0, Utilities.generateSelectHook)(self);
    return (...args) => hook(selector, ...args);
}
/**
 * Generate `selector` React Hooks based on the selectors defined in the Quark config.
 *
 * @param self Context of the Quark in question
 * @param selectors An object containing selector definitions, each selector must be
 *   a function accepting the Quark state value in it's first argument
 * @returns An object with the same structure as `selectors` but each method it
 *   contains is a React Hook
 * @internal
 */
function generateCustomSelectors(self, selectors) {
    return Object.fromEntries(Object.entries(selectors).map(([selectorName, selectorMethod]) => {
        const wrappedSelector = generatePredefinedSelectHook(self, selectorMethod.bind(selectors));
        return [selectorName, wrappedSelector];
    }));
}
exports.generateCustomSelectors = generateCustomSelectors;
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(react);

var UseCachedSelector = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCachedSelector = void 0;

const react_1 = __importDefault(require$$0);
const NULL_SYM = Symbol("null");
const useCachedSelector = (selector) => {
    const cache = react_1.default.useRef({
        prevState: NULL_SYM,
        prevArgs: [],
        prevResult: NULL_SYM,
    });
    const impl = react_1.default.useRef(selector);
    impl.current = selector;
    const [selectorWrapper] = react_1.default.useState(() => (state, ...args) => {
        if (cache.current.prevResult === NULL_SYM ||
            state !== cache.current.prevState ||
            !(0, lodash_1.isEqual)(args, cache.current.prevArgs)) {
            const result = impl.current(state, ...args);
            cache.current.prevState = state;
            cache.current.prevArgs = args;
            cache.current.prevResult = result;
        }
        return cache.current.prevResult;
    });
    return selectorWrapper;
};
exports.useCachedSelector = useCachedSelector;
});

var UseDynamicDependencies = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDynamicDependencies = void 0;
const react_1 = __importDefault(require$$0);
const useDynamicDependencies = (deps) => {
    const lastDepResult = react_1.default.useRef(0);
    const prevDeps = react_1.default.useRef(deps);
    if (deps.length !== prevDeps.current.length) {
        lastDepResult.current = (lastDepResult.current + 1) % 1000;
    }
    else if (deps.some((elem, index) => !Object.is(elem, prevDeps.current[index]))) {
        lastDepResult.current = (lastDepResult.current + 1) % 1000;
    }
    prevDeps.current = deps;
    return lastDepResult.current;
};
exports.useDynamicDependencies = useDynamicDependencies;
});

var GenerateSelectHook = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSelectHook = void 0;
const react_1 = __importDefault(require$$0);



/**
 * Generate a 'selector' React Hook for this Quark.
 *
 * Selector hook allows for selecting part of the state and subscribing to it's changes.
 *
 * @param self Context of the Quark in question
 * @internal
 */
function generateSelectHook(self) {
    const subscribe = (callback) => {
        self.subscribers.add(callback);
        return () => self.subscribers.delete(callback);
    };
    return (selector, ...args) => {
        const cachedSelector = (0, UseCachedSelector.useCachedSelector)(selector);
        const argsDep = (0, UseDynamicDependencies.useDynamicDependencies)(args);
        const get = react_1.default.useCallback(() => cachedSelector(self.value, ...args), [argsDep]);
        const value = (0, shim_1.useSyncExternalStore)(subscribe, get);
        return value;
    };
}
exports.generateSelectHook = generateSelectHook;
});

var GenerateUseHook = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUseHook = void 0;

/**
 * Generate the react hook for this specific quark.
 *
 * @param self Context of the Quark in question
 * @param set Function allowing for updating the current state of the Quark
 * @param get Function that resolves the Quark state value
 * @returns A React Hook function exposing this quark state and actions
 * @internal
 */
function generateUseHook(self, actions, set) {
    const subscribe = (callback) => {
        self.subscribers.add(callback);
        return () => void self.subscribers.delete(callback);
    };
    const getSnapshot = () => self.value;
    return () => {
        const value = (0, shim_1.useSyncExternalStore)(subscribe, getSnapshot);
        return {
            set,
            value,
            ...actions,
        };
    };
}
exports.generateUseHook = generateUseHook;
});

var IsGenerator = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGenerator = void 0;
/**
 * Determine if the passed value is a State Generator.
 *
 * A State Generator is a method that receives the current Quark State value and
 * returns the new value or a Promise resolving the new value.
 *
 * @internal
 */
function isGenerator(v) {
    return typeof v === "function";
}
exports.isGenerator = isGenerator;
});

var IsUpdateNecessary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUpdateNecessary = void 0;
/**
 * Compare old ans new state value and determine if the substituents should receive
 * `STATE CHANGED` event.
 *
 * This is the method that's used by the Quarks by default.
 *
 * @internal
 */
function isUpdateNecessary(_old, _new) {
    return typeof _new === "object" ? true : !Object.is(_old, _new);
}
exports.isUpdateNecessary = isUpdateNecessary;
});

var QuarksCollection = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hydrateQuarks = exports.serializeQuarks = exports.registerQuark = void 0;
function deserialize(serializedJavascript) {
    return eval("(" + serializedJavascript + ")");
}
const quarkCollection = new Map();
const registerQuark = (name, context) => {
    if (quarkCollection.has(name)) {
        throw new Error(`Quark name must be unique! Duplicate name: [${name}]`);
    }
    quarkCollection.set(name, context);
};
exports.registerQuark = registerQuark;
/**
 * Serializes all named quarks. Use to serialize the quark states on the server, when
 * using SSR, and send them to the client for hydration.
 *
 * This functions requires `serialize-javascript` package, and as a result can only
 * be used in Node environments.
 */
const serializeQuarks = () => {
    // eslint-disable-next-line
    const serialize = commonjsRequire();
    return JSON.stringify(serialize([...quarkCollection.entries()].map(([name, context]) => [name, context.value]), { ignoreFunction: true }));
};
exports.serializeQuarks = serializeQuarks;
/**
 * Deserializes named quarks and updates the state of each included named quark with
 * the state from the serialized data.
 */
const hydrateQuarks = (serializedQuarks, options) => {
    const { skipMissingQuarks = false } = options ?? {};
    const data = deserialize(JSON.parse(serializedQuarks));
    for (const [name, value] of data) {
        const context = quarkCollection.get(name);
        if (!context) {
            if (skipMissingQuarks)
                continue;
            throw new Error(`Quark does not exist. Unable to hydrate. Missing quark: [${name}]`);
        }
        context.value = value;
        for (const sub of context.subscribers) {
            sub(context.value);
        }
    }
};
exports.hydrateQuarks = hydrateQuarks;
});

var ApplyMiddlewares = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddlewares = void 0;
/**
 * Extract the list of middlewares from the Quark context and process the `value`
 * through each middleware in the list (unless one of the middlewares stops the propagation).
 *
 * After processing through all middlewares or when propagation is stopped call the
 * `setterFn` with the final value.
 *
 * @param self Context of the Quark in question
 * @param value Value to be processed through middlewares
 * @param type Update type (one of: ['sync', 'async'])
 * @param setterFn Function that updates the state of the Quark
 * @internal
 */
function applyMiddlewares(self, value, type, setterFn) {
    const applyMiddlewareOfIndex = (index, v) => {
        const nextMiddleware = self.middlewares[index];
        if (nextMiddleware) {
            return nextMiddleware(() => self.value, v, (resumedValue) => applyMiddlewareOfIndex(index + 1, resumedValue), setterFn, type);
        }
        else {
            return setterFn(v);
        }
    };
    return applyMiddlewareOfIndex(0, value);
}
exports.applyMiddlewares = applyMiddlewares;
});

var EventsDispatcher = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventsDispatcher = void 0;
function createEventsDispatcher() {
    let lastTimeout;
    const dispatchEvent = (eventAction) => {
        if (lastTimeout !== undefined) {
            window.clearTimeout(lastTimeout);
            lastTimeout = undefined;
        }
        lastTimeout = window.setTimeout(() => {
            lastTimeout = undefined;
            eventAction();
        }, 0);
    };
    return { dispatchEvent };
}
exports.createEventsDispatcher = createEventsDispatcher;
});

var ProcessStateUpdate = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.processStateUpdate = void 0;
/**
 * Run all the necessary action after the state has changed, propagate the effects
 * and send events to the subscribers if necessary.
 *
 * @internal
 */
function processStateUpdate(params) {
    const { previousState, self, applyMiddlewaresAndUpdateState, dispatchEvent } = params;
    const shouldUpdate = self.stateComparator(self.value, previousState);
    const subscribers = new Set(self.subscribers);
    const notifySubscribers = () => {
        for (const subscriber of subscribers) {
            subscriber(self.value);
        }
    };
    if (shouldUpdate) {
        if (self.sideEffect) {
            self.sideEffect(previousState, self.value, applyMiddlewaresAndUpdateState);
        }
        dispatchEvent(() => {
            notifySubscribers();
        });
    }
}
exports.processStateUpdate = processStateUpdate;
});

var UnpackStateSetter = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpackStateSetter = void 0;


/**
 * If the provided value is a Promise or a State Generator, resolve it and the pass
 * the received value to the middlewares and then "unpack" it again.
 *
 * If the provided value is of any other type, signal the async controller to cancel
 * ongoing updates and resolve the function passed to the `then()` method with the value.
 *
 * @param self Quark context
 * @param asyncUpdates Asynchronous updates controller
 * @param setter Value dispatched as an update to be unpacked
 * @internal
 */
function unpackStateSetter(self, asyncUpdates, setter) {
    if (setter instanceof Promise) {
        return {
            then(handler) {
                return asyncUpdates.dispatchAsyncUpdate(setter, (state) => {
                    return (0, ApplyMiddlewares.applyMiddlewares)(self, state, "async", (v) => unpackStateSetter(self, asyncUpdates, v).then(handler));
                });
            },
        };
    }
    if ((0, IsGenerator.isGenerator)(setter)) {
        const s = setter(self.value);
        return {
            then(handler) {
                return (0, ApplyMiddlewares.applyMiddlewares)(self, s, "sync", (v) => unpackStateSetter(self, asyncUpdates, v).then(handler));
            },
        };
    }
    asyncUpdates.preventLastAsyncUpdate();
    return {
        then(handler) {
            return handler(setter);
        },
    };
}
exports.unpackStateSetter = unpackStateSetter;
});

var GenerateSetter = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSetter = void 0;





/**
 * Generates a function that allows for updating the state of the Quark.
 *
 * Updating the state with this function will trigger the Quark middlewares.
 *
 * @param self Quark context
 * @returns A method for updating the Quark state, this method can take as it's
 *   argument the new state value, a generator function or a Promise resolving to the
 *   new value.
 * @internal
 */
function generateSetter(self) {
    const asyncUpdates = (0, AsyncUpdates.asyncUpdatesController)(self);
    const { dispatchEvent } = (0, EventsDispatcher.createEventsDispatcher)();
    /**
     * A method for updating the Quark state, this method can take as it's argument the
     * new state value, a generator function or a Promise resolving to the new value.
     */
    const applyMiddlewaresAndUpdateState = (newVal) => {
        return (0, ApplyMiddlewares.applyMiddlewares)(self, newVal, "sync", (setter) => (0, UnpackStateSetter.unpackStateSetter)(self, asyncUpdates, setter).then((newState) => {
            const previousState = self.value;
            self.value = newState;
            return (0, ProcessStateUpdate.processStateUpdate)({
                self,
                previousState,
                applyMiddlewaresAndUpdateState,
                dispatchEvent,
            });
        }));
    };
    return applyMiddlewaresAndUpdateState;
}
exports.generateSetter = generateSetter;
});

var StateUpdates = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSetter = void 0;

Object.defineProperty(exports, "generateSetter", { enumerable: true, get: function () { return GenerateSetter.generateSetter; } });
});

var Utilities = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(GenerateCustomActions, exports);
__exportStar(GenerateCustomSelectors, exports);
__exportStar(GenerateSelectHook, exports);
__exportStar(GenerateUseHook, exports);
__exportStar(IsGenerator, exports);
__exportStar(IsUpdateNecessary, exports);
__exportStar(QuarksCollection, exports);
__exportStar(StateUpdates, exports);
__exportStar(ApplyMiddlewares, exports);
});

var GenerateSubscribeFunction = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSubscribeFunction = void 0;
function generateSubscribeFunction(self) {
    const subscribe = (onStateChange) => {
        const cancelSubscription = () => self.subscribers.delete(subscribeCallback);
        const subscribeCallback = (state) => {
            onStateChange(state, cancelSubscription);
        };
        self.subscribers.add(subscribeCallback);
        return {
            cancel() {
                cancelSubscription();
            },
        };
    };
    return subscribe;
}
exports.generateSubscribeFunction = generateSubscribeFunction;
});

var GlobalMiddlewares = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalQuarkMiddlewares = exports.setGlobalQuarkMiddlewares = exports.addGlobalQuarkMiddleware = void 0;
const GLOBAL_MIDDLEWARES = [];
const addGlobalQuarkMiddleware = (middleware, at = "end") => {
    switch (at) {
        case "end":
            GLOBAL_MIDDLEWARES.push(middleware);
            break;
        case "start":
            GLOBAL_MIDDLEWARES.unshift(middleware);
            break;
    }
};
exports.addGlobalQuarkMiddleware = addGlobalQuarkMiddleware;
const setGlobalQuarkMiddlewares = (middlewares) => {
    GLOBAL_MIDDLEWARES.splice(0, GLOBAL_MIDDLEWARES.length, ...middlewares);
};
exports.setGlobalQuarkMiddlewares = setGlobalQuarkMiddlewares;
const getGlobalQuarkMiddlewares = () => {
    return GLOBAL_MIDDLEWARES.slice();
};
exports.getGlobalQuarkMiddlewares = getGlobalQuarkMiddlewares;
});

var Quark = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.quark = void 0;




/**
 * Creates a new quark object.
 *
 * @param initValue Initial data of the quark.
 * @param config Config allows for adding custom actions and selectors to the quark
 *   as well as changing when subscribed component should update.
 */
function quark(initValue, config = {}) {
    const self = {
        value: initValue,
        subscribers: new Set(),
        middlewares: config.middlewares ?? [],
        sideEffect: config.effect,
        stateComparator: config.shouldUpdate ?? Utilities.isUpdateNecessary,
        configOptions: {
            allowRaceConditions: config.allowRaceConditions ?? false,
        },
    };
    self.middlewares.unshift(...(0, GlobalMiddlewares.getGlobalQuarkMiddlewares)());
    const set = (0, Utilities.generateSetter)(self);
    const customActions = (0, Utilities.generateCustomActions)(self, set, config?.actions ?? {});
    const customSelectors = (0, Utilities.generateCustomSelectors)(self, config?.selectors ?? {});
    const get = () => self.value;
    const use = (0, Utilities.generateUseHook)(self, customActions, set);
    const useSelector = (0, Utilities.generateSelectHook)(self);
    const subscribe = (0, GenerateSubscribeFunction.generateSubscribeFunction)(self);
    const quark = {
        set: set,
        get,
        use,
        useSelector,
        subscribe,
        ...customActions,
        ...customSelectors,
    };
    if (config.name !== undefined) {
        (0, QuarksCollection.registerQuark)(config.name, self);
    }
    return quark;
}
exports.quark = quark;
});

var Actions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var Config = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var Effects = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var Middlewares$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var Quark$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var Selectors = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var Utilities$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var Types = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(Actions, exports);
__exportStar(Config, exports);
__exportStar(Effects, exports);
__exportStar(Middlewares$1, exports);
__exportStar(Quark$1, exports);
__exportStar(Selectors, exports);
__exportStar(Utilities$1, exports);
});

var dist = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGlobalQuarkMiddlewares = exports.getGlobalQuarkMiddlewares = exports.addGlobalQuarkMiddleware = exports.CancelUpdate = exports.serializeQuarks = exports.hydrateQuarks = exports.quark = void 0;
__exportStar(Middlewares, exports);

Object.defineProperty(exports, "quark", { enumerable: true, get: function () { return Quark.quark; } });
__exportStar(Types, exports);

Object.defineProperty(exports, "hydrateQuarks", { enumerable: true, get: function () { return Utilities.hydrateQuarks; } });
Object.defineProperty(exports, "serializeQuarks", { enumerable: true, get: function () { return Utilities.serializeQuarks; } });

Object.defineProperty(exports, "CancelUpdate", { enumerable: true, get: function () { return CancelUpdate_1.CancelUpdate; } });

Object.defineProperty(exports, "addGlobalQuarkMiddleware", { enumerable: true, get: function () { return GlobalMiddlewares.addGlobalQuarkMiddleware; } });
Object.defineProperty(exports, "getGlobalQuarkMiddlewares", { enumerable: true, get: function () { return GlobalMiddlewares.getGlobalQuarkMiddlewares; } });
Object.defineProperty(exports, "setGlobalQuarkMiddlewares", { enumerable: true, get: function () { return GlobalMiddlewares.setGlobalQuarkMiddlewares; } });
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(dist);

var CancelUpdate = dist.CancelUpdate;
var addGlobalQuarkMiddleware = dist.addGlobalQuarkMiddleware;
var createCatchMiddleware = dist.createCatchMiddleware;
var createDebugHistoryMiddleware = dist.createDebugHistoryMiddleware;
var createImmerMiddleware = dist.createImmerMiddleware;
export default __pika_web_default_export_for_treeshaking__;
var getGlobalQuarkMiddlewares = dist.getGlobalQuarkMiddlewares;
var hydrateQuarks = dist.hydrateQuarks;
var quark = dist.quark;
var serializeQuarks = dist.serializeQuarks;
var setGlobalQuarkMiddlewares = dist.setGlobalQuarkMiddlewares;
export { CancelUpdate, dist as __moduleExports, addGlobalQuarkMiddleware, createCatchMiddleware, createDebugHistoryMiddleware, createImmerMiddleware, getGlobalQuarkMiddlewares, hydrateQuarks, quark, serializeQuarks, setGlobalQuarkMiddlewares };
