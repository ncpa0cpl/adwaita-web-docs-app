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

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var scrollbarSize_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var scrollbarSize = (function () {
    var scrollbarSize;
    return function () {
        if (scrollbarSize != null) {
            return scrollbarSize;
        }
        var div1 = window.document.createElement("div");
        var div2 = window.document.createElement("div");
        div1.style.width = "100px";
        div1.style.overflowX = "scroll";
        div2.style.width = "100px";
        window.document.body.appendChild(div1);
        window.document.body.appendChild(div2);
        scrollbarSize = div1.offsetHeight - div2.offsetHeight;
        window.document.body.removeChild(div1);
        window.document.body.removeChild(div2);
        return scrollbarSize;
    };
})();
exports.default = scrollbarSize;

});

var scrollbarSize = /*@__PURE__*/getDefaultExportFromCjs(scrollbarSize_1);

export default scrollbarSize;
