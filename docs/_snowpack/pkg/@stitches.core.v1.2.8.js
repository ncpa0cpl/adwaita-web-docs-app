var e, t = "colors", n = "sizes", r = "space", i = {gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: t, backgroundColor: t, backgroundImage: t, borderImage: t, border: t, borderBlock: t, borderBlockEnd: t, borderBlockStart: t, borderBottom: t, borderBottomColor: t, borderColor: t, borderInline: t, borderInlineEnd: t, borderInlineStart: t, borderLeft: t, borderLeftColor: t, borderRight: t, borderRightColor: t, borderTop: t, borderTopColor: t, caretColor: t, color: t, columnRuleColor: t, fill: t, outline: t, outlineColor: t, stroke: t, textDecorationColor: t, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: n, minBlockSize: n, maxBlockSize: n, inlineSize: n, minInlineSize: n, maxInlineSize: n, width: n, minWidth: n, maxWidth: n, height: n, minHeight: n, maxHeight: n, flexBasis: n, gridTemplateColumns: n, gridTemplateRows: n, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices"}, o = (e2, t2) => typeof t2 == "function" ? {"()": Function.prototype.toString.call(t2)} : t2, l = () => {
  const e2 = Object.create(null);
  return (t2, n2, ...r2) => {
    const i2 = ((e3) => JSON.stringify(e3, o))(t2);
    return i2 in e2 ? e2[i2] : e2[i2] = n2(t2, ...r2);
  };
}, s = Symbol.for("sxs.internal"), a = (e2, t2) => Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)), c = (e2) => {
  for (const t2 in e2)
    return true;
  return false;
}, {hasOwnProperty: d} = Object.prototype, g = (e2) => e2.includes("-") ? e2 : e2.replace(/[A-Z]/g, (e3) => "-" + e3.toLowerCase()), p = /\s+(?![^()]*\))/, u = (e2) => (t2) => e2(...typeof t2 == "string" ? String(t2).split(p) : [t2]), h = {appearance: (e2) => ({WebkitAppearance: e2, appearance: e2}), backfaceVisibility: (e2) => ({WebkitBackfaceVisibility: e2, backfaceVisibility: e2}), backdropFilter: (e2) => ({WebkitBackdropFilter: e2, backdropFilter: e2}), backgroundClip: (e2) => ({WebkitBackgroundClip: e2, backgroundClip: e2}), boxDecorationBreak: (e2) => ({WebkitBoxDecorationBreak: e2, boxDecorationBreak: e2}), clipPath: (e2) => ({WebkitClipPath: e2, clipPath: e2}), content: (e2) => ({content: e2.includes('"') || e2.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e2) ? e2 : `"${e2}"`}), hyphens: (e2) => ({WebkitHyphens: e2, hyphens: e2}), maskImage: (e2) => ({WebkitMaskImage: e2, maskImage: e2}), maskSize: (e2) => ({WebkitMaskSize: e2, maskSize: e2}), tabSize: (e2) => ({MozTabSize: e2, tabSize: e2}), textSizeAdjust: (e2) => ({WebkitTextSizeAdjust: e2, textSizeAdjust: e2}), userSelect: (e2) => ({WebkitUserSelect: e2, userSelect: e2}), marginBlock: u((e2, t2) => ({marginBlockStart: e2, marginBlockEnd: t2 || e2})), marginInline: u((e2, t2) => ({marginInlineStart: e2, marginInlineEnd: t2 || e2})), maxSize: u((e2, t2) => ({maxBlockSize: e2, maxInlineSize: t2 || e2})), minSize: u((e2, t2) => ({minBlockSize: e2, minInlineSize: t2 || e2})), paddingBlock: u((e2, t2) => ({paddingBlockStart: e2, paddingBlockEnd: t2 || e2})), paddingInline: u((e2, t2) => ({paddingInlineStart: e2, paddingInlineEnd: t2 || e2}))}, f = /([\d.]+)([^]*)/, m = (e2, t2) => e2.length ? e2.reduce((e3, n2) => (e3.push(...t2.map((e4) => e4.includes("&") ? e4.replace(/&/g, /[ +>|~]/.test(n2) && /&.*&/.test(e4) ? `:is(${n2})` : n2) : n2 + " " + e4)), e3), []) : t2, b = (e2, t2) => e2 in S && typeof t2 == "string" ? t2.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t3, n2, r2, i2) => n2 + (r2 === "stretch" ? `-moz-available${i2};${g(e2)}:${n2}-webkit-fill-available` : `-moz-fit-content${i2};${g(e2)}:${n2}fit-content`) + i2) : String(t2), S = {blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1}, k = (e2) => e2 ? e2 + "-" : "", y = (e2, t2, n2) => e2.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e3, r2, i2, o2, l2) => o2 == "$" == !!i2 ? e3 : (r2 || o2 == "--" ? "calc(" : "") + "var(--" + (o2 === "$" ? k(t2) + (l2.includes("$") ? "" : k(n2)) + l2.replace(/\$/g, "-") : l2) + ")" + (r2 || o2 == "--" ? "*" + (r2 || "") + (i2 || "1") + ")" : "")), B = /\s*,\s*(?![^()]*\))/, $ = Object.prototype.toString, x = (e2, t2, n2, r2, i2) => {
  let o2, l2, s2;
  const a2 = (e3, t3, n3) => {
    let c2, d2;
    const p2 = (e4) => {
      for (c2 in e4) {
        const x2 = c2.charCodeAt(0) === 64, z2 = x2 && Array.isArray(e4[c2]) ? e4[c2] : [e4[c2]];
        for (d2 of z2) {
          const e5 = /[A-Z]/.test(S2 = c2) ? S2 : S2.replace(/-[^]/g, (e6) => e6[1].toUpperCase()), z3 = typeof d2 == "object" && d2 && d2.toString === $ && (!r2.utils[e5] || !t3.length);
          if (e5 in r2.utils && !z3) {
            const t4 = r2.utils[e5];
            if (t4 !== l2) {
              l2 = t4, p2(t4(d2)), l2 = null;
              continue;
            }
          } else if (e5 in h) {
            const t4 = h[e5];
            if (t4 !== s2) {
              s2 = t4, p2(t4(d2)), s2 = null;
              continue;
            }
          }
          if (x2 && (u2 = c2.slice(1) in r2.media ? "@media " + r2.media[c2.slice(1)] : c2, c2 = u2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e6, t4, n4, r3, i3, o3) => {
            const l3 = f.test(t4), s3 = 0.0625 * (l3 ? -1 : 1), [a3, c3] = l3 ? [r3, t4] : [t4, r3];
            return "(" + (n4[0] === "=" ? "" : n4[0] === ">" === l3 ? "max-" : "min-") + a3 + ":" + (n4[0] !== "=" && n4.length === 1 ? c3.replace(f, (e7, t5, r4) => Number(t5) + s3 * (n4 === ">" ? 1 : -1) + r4) : c3) + (i3 ? ") and (" + (i3[0] === ">" ? "min-" : "max-") + a3 + ":" + (i3.length === 1 ? o3.replace(f, (e7, t5, n5) => Number(t5) + s3 * (i3 === ">" ? -1 : 1) + n5) : o3) : "") + ")";
          })), z3) {
            const e6 = x2 ? n3.concat(c2) : [...n3], r3 = x2 ? [...t3] : m(t3, c2.split(B));
            o2 !== void 0 && i2(I(...o2)), o2 = void 0, a2(d2, r3, e6);
          } else
            o2 === void 0 && (o2 = [[], t3, n3]), c2 = x2 || c2.charCodeAt(0) !== 36 ? c2 : `--${k(r2.prefix)}${c2.slice(1).replace(/\$/g, "-")}`, d2 = z3 ? d2 : typeof d2 == "number" ? d2 && e5 in R ? String(d2) + "px" : String(d2) : y(b(e5, d2 == null ? "" : d2), r2.prefix, r2.themeMap[e5]), o2[0].push(`${x2 ? `${c2} ` : `${g(c2)}:`}${d2}`);
        }
      }
      var u2, S2;
    };
    p2(e3), o2 !== void 0 && i2(I(...o2)), o2 = void 0;
  };
  a2(e2, t2, n2);
}, I = (e2, t2, n2) => `${n2.map((e3) => `${e3}{`).join("")}${t2.length ? `${t2.join(",")}{` : ""}${e2.join(";")}${t2.length ? "}" : ""}${Array(n2.length ? n2.length + 1 : 0).join("}")}`, R = {animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1}, z = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97)), W = (e2) => ((e3) => {
  let t2, n2 = "";
  for (t2 = Math.abs(e3); t2 > 52; t2 = t2 / 52 | 0)
    n2 = z(t2 % 52) + n2;
  return z(t2 % 52) + n2;
})(((e3, t2) => {
  let n2 = t2.length;
  for (; n2; )
    e3 = 33 * e3 ^ t2.charCodeAt(--n2);
  return e3;
})(5381, JSON.stringify(e2)) >>> 0), j = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], E = (e2) => {
  if (e2.href && !e2.href.startsWith(location.origin))
    return false;
  try {
    return !!e2.cssRules;
  } catch (e3) {
    return false;
  }
}, T = (e2) => {
  let t2;
  const n2 = () => {
    const {cssRules: e3} = t2.sheet;
    return [].map.call(e3, (n3, r3) => {
      const {cssText: i2} = n3;
      let o2 = "";
      if (i2.startsWith("--sxs"))
        return "";
      if (e3[r3 - 1] && (o2 = e3[r3 - 1].cssText).startsWith("--sxs")) {
        if (!n3.cssRules.length)
          return "";
        for (const e4 in t2.rules)
          if (t2.rules[e4].group === n3)
            return `--sxs{--sxs:${[...t2.rules[e4].cache].join(" ")}}${i2}`;
        return n3.cssRules.length ? `${o2}${i2}` : "";
      }
      return i2;
    }).join("");
  }, r2 = () => {
    if (t2) {
      const {rules: e3, sheet: n3} = t2;
      if (!n3.deleteRule) {
        for (; Object(Object(n3.cssRules)[0]).type === 3; )
          n3.cssRules.splice(0, 1);
        n3.cssRules = [];
      }
      for (const t3 in e3)
        delete e3[t3];
    }
    const i2 = Object(e2).styleSheets || [];
    for (const e3 of i2)
      if (E(e3)) {
        for (let i3 = 0, o3 = e3.cssRules; o3[i3]; ++i3) {
          const l3 = Object(o3[i3]);
          if (l3.type !== 1)
            continue;
          const s2 = Object(o3[i3 + 1]);
          if (s2.type !== 4)
            continue;
          ++i3;
          const {cssText: a2} = l3;
          if (!a2.startsWith("--sxs"))
            continue;
          const c2 = a2.slice(14, -3).trim().split(/\s+/), d2 = j[c2[0]];
          d2 && (t2 || (t2 = {sheet: e3, reset: r2, rules: {}, toString: n2}), t2.rules[d2] = {group: s2, index: i3, cache: new Set(c2)});
        }
        if (t2)
          break;
      }
    if (!t2) {
      const i3 = (e3, t3) => ({type: t3, cssRules: [], insertRule(e4, t4) {
        this.cssRules.splice(t4, 0, i3(e4, {import: 3, undefined: 1}[(e4.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return e3 === "@media{}" ? `@media{${[].map.call(this.cssRules, (e4) => e4.cssText).join("")}}` : e3;
      }});
      t2 = {sheet: e2 ? (e2.head || e2).appendChild(document.createElement("style")).sheet : i3("", "text/css"), rules: {}, reset: r2, toString: n2};
    }
    const {sheet: o2, rules: l2} = t2;
    for (let e3 = j.length - 1; e3 >= 0; --e3) {
      const t3 = j[e3];
      if (!l2[t3]) {
        const n3 = j[e3 + 1], r3 = l2[n3] ? l2[n3].index : o2.cssRules.length;
        o2.insertRule("@media{}", r3), o2.insertRule(`--sxs{--sxs:${e3}}`, r3), l2[t3] = {group: o2.cssRules[r3 + 1], index: r3, cache: new Set([e3])};
      }
      v(l2[t3]);
    }
  };
  return r2(), t2;
}, v = (e2) => {
  const t2 = e2.group;
  let n2 = t2.cssRules.length;
  e2.apply = (e3) => {
    try {
      t2.insertRule(e3, n2), ++n2;
    } catch (e4) {
    }
  };
}, M = Symbol(), w = l(), C = (e2, t2) => w(e2, () => (...n2) => {
  let r2 = {type: null, composers: new Set()};
  for (const t3 of n2)
    if (t3 != null)
      if (t3[s]) {
        r2.type == null && (r2.type = t3[s].type);
        for (const e3 of t3[s].composers)
          r2.composers.add(e3);
      } else
        t3.constructor !== Object || t3.$$typeof ? r2.type == null && (r2.type = t3) : r2.composers.add(P(t3, e2));
  return r2.type == null && (r2.type = "span"), r2.composers.size || r2.composers.add(["PJLV", {}, [], [], {}, []]), L(e2, r2, t2);
}), P = ({variants: e2, compoundVariants: t2, defaultVariants: n2, ...r2}, i2) => {
  const o2 = `${k(i2.prefix)}c-${W(r2)}`, l2 = [], s2 = [], a2 = Object.create(null), g2 = [];
  for (const e3 in n2)
    a2[e3] = String(n2[e3]);
  if (typeof e2 == "object" && e2)
    for (const t3 in e2) {
      p2 = a2, u2 = t3, d.call(p2, u2) || (a2[t3] = "undefined");
      const n3 = e2[t3];
      for (const e3 in n3) {
        const r3 = {[t3]: String(e3)};
        String(e3) === "undefined" && g2.push(t3);
        const i3 = n3[e3], o3 = [r3, i3, !c(i3)];
        l2.push(o3);
      }
    }
  var p2, u2;
  if (typeof t2 == "object" && t2)
    for (const e3 of t2) {
      let {css: t3, ...n3} = e3;
      t3 = typeof t3 == "object" && t3 || {};
      for (const e4 in n3)
        n3[e4] = String(n3[e4]);
      const r3 = [n3, t3, !c(t3)];
      s2.push(r3);
    }
  return [o2, r2, l2, s2, a2, g2];
}, L = (e2, t2, n2) => {
  const [r2, i2, o2, l2] = O(t2.composers), c2 = typeof t2.type == "function" || t2.type.$$typeof ? ((e3) => {
    function t3() {
      for (let n3 = 0; n3 < t3[M].length; n3++) {
        const [r3, i3] = t3[M][n3];
        e3.rules[r3].apply(i3);
      }
      return t3[M] = [], null;
    }
    return t3[M] = [], t3.rules = {}, j.forEach((e4) => t3.rules[e4] = {apply: (n3) => t3[M].push([e4, n3])}), t3;
  })(n2) : null, d2 = (c2 || n2).rules, g2 = `.${r2}${i2.length > 1 ? `:where(.${i2.slice(1).join(".")})` : ""}`, p2 = (s2) => {
    s2 = typeof s2 == "object" && s2 || D;
    const {css: a2, ...p3} = s2, u2 = {};
    for (const e3 in o2)
      if (delete p3[e3], e3 in s2) {
        let t3 = s2[e3];
        typeof t3 == "object" && t3 ? u2[e3] = {"@initial": o2[e3], ...t3} : (t3 = String(t3), u2[e3] = t3 !== "undefined" || l2.has(e3) ? t3 : o2[e3]);
      } else
        u2[e3] = o2[e3];
    const h2 = new Set([...i2]);
    for (const [r3, i3, o3, l3] of t2.composers) {
      n2.rules.styled.cache.has(r3) || (n2.rules.styled.cache.add(r3), x(i3, [`.${r3}`], [], e2, (e3) => {
        d2.styled.apply(e3);
      }));
      const t3 = A(o3, u2, e2.media), s3 = A(l3, u2, e2.media, true);
      for (const i4 of t3)
        if (i4 !== void 0)
          for (const [t4, o4, l4] of i4) {
            const i5 = `${r3}-${W(o4)}-${t4}`;
            h2.add(i5);
            const s4 = (l4 ? n2.rules.resonevar : n2.rules.onevar).cache, a3 = l4 ? d2.resonevar : d2.onevar;
            s4.has(i5) || (s4.add(i5), x(o4, [`.${i5}`], [], e2, (e3) => {
              a3.apply(e3);
            }));
          }
      for (const t4 of s3)
        if (t4 !== void 0)
          for (const [i4, o4] of t4) {
            const t5 = `${r3}-${W(o4)}-${i4}`;
            h2.add(t5), n2.rules.allvar.cache.has(t5) || (n2.rules.allvar.cache.add(t5), x(o4, [`.${t5}`], [], e2, (e3) => {
              d2.allvar.apply(e3);
            }));
          }
    }
    if (typeof a2 == "object" && a2) {
      const t3 = `${r2}-i${W(a2)}-css`;
      h2.add(t3), n2.rules.inline.cache.has(t3) || (n2.rules.inline.cache.add(t3), x(a2, [`.${t3}`], [], e2, (e3) => {
        d2.inline.apply(e3);
      }));
    }
    for (const e3 of String(s2.className || "").trim().split(/\s+/))
      e3 && h2.add(e3);
    const f2 = p3.className = [...h2].join(" ");
    return {type: t2.type, className: f2, selector: g2, props: p3, toString: () => f2, deferredInjector: c2};
  };
  return a(p2, {className: r2, selector: g2, [s]: t2, toString: () => (n2.rules.styled.cache.has(r2) || p2(), r2)});
}, O = (e2) => {
  let t2 = "";
  const n2 = [], r2 = {}, i2 = [];
  for (const [o2, , , , l2, s2] of e2) {
    t2 === "" && (t2 = o2), n2.push(o2), i2.push(...s2);
    for (const e3 in l2) {
      const t3 = l2[e3];
      (r2[e3] === void 0 || t3 !== "undefined" || s2.includes(t3)) && (r2[e3] = t3);
    }
  }
  return [t2, n2, r2, new Set(i2)];
}, A = (e2, t2, n2, r2) => {
  const i2 = [];
  e:
    for (let [o2, l2, s2] of e2) {
      if (s2)
        continue;
      let e3, a2 = 0, c2 = false;
      for (e3 in o2) {
        const r3 = o2[e3];
        let i3 = t2[e3];
        if (i3 !== r3) {
          if (typeof i3 != "object" || !i3)
            continue e;
          {
            let e4, t3, o3 = 0;
            for (const l3 in i3) {
              if (r3 === String(i3[l3])) {
                if (l3 !== "@initial") {
                  const e5 = l3.slice(1);
                  (t3 = t3 || []).push(e5 in n2 ? n2[e5] : l3.replace(/^@media ?/, "")), c2 = true;
                }
                a2 += o3, e4 = true;
              }
              ++o3;
            }
            if (t3 && t3.length && (l2 = {["@media " + t3.join(", ")]: l2}), !e4)
              continue e;
          }
        }
      }
      (i2[a2] = i2[a2] || []).push([r2 ? "cv" : `${e3}-${o2[e3]}`, l2, c2]);
    }
  return i2;
}, D = {}, H = l(), N = (e2, t2) => H(e2, () => (...n2) => {
  const r2 = () => {
    for (let r3 of n2) {
      r3 = typeof r3 == "object" && r3 || {};
      let n3 = W(r3);
      if (!t2.rules.global.cache.has(n3)) {
        if (t2.rules.global.cache.add(n3), "@import" in r3) {
          let e3 = [].indexOf.call(t2.sheet.cssRules, t2.rules.themed.group) - 1;
          for (let n4 of [].concat(r3["@import"]))
            n4 = n4.includes('"') || n4.includes("'") ? n4 : `"${n4}"`, t2.sheet.insertRule(`@import ${n4};`, e3++);
          delete r3["@import"];
        }
        x(r3, [], [], e2, (e3) => {
          t2.rules.global.apply(e3);
        });
      }
    }
    return "";
  };
  return a(r2, {toString: r2});
}), V = l(), G = (e2, t2) => V(e2, () => (n2) => {
  const r2 = `${k(e2.prefix)}k-${W(n2)}`, i2 = () => {
    if (!t2.rules.global.cache.has(r2)) {
      t2.rules.global.cache.add(r2);
      const i3 = [];
      x(n2, [], [], e2, (e3) => i3.push(e3));
      const o2 = `@keyframes ${r2}{${i3.join("")}}`;
      t2.rules.global.apply(o2);
    }
    return r2;
  };
  return a(i2, {get name() {
    return i2();
  }, toString: i2});
}), F = class {
  constructor(e2, t2, n2, r2) {
    this.token = e2 == null ? "" : String(e2), this.value = t2 == null ? "" : String(t2), this.scale = n2 == null ? "" : String(n2), this.prefix = r2 == null ? "" : String(r2);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + k(this.prefix) + k(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, J = l(), U = (e2, t2) => J(e2, () => (n2, r2) => {
  r2 = typeof n2 == "object" && n2 || Object(r2);
  const i2 = `.${n2 = (n2 = typeof n2 == "string" ? n2 : "") || `${k(e2.prefix)}t-${W(r2)}`}`, o2 = {}, l2 = [];
  for (const t3 in r2) {
    o2[t3] = {};
    for (const n3 in r2[t3]) {
      const i3 = `--${k(e2.prefix)}${t3}-${n3}`, s3 = y(String(r2[t3][n3]), e2.prefix, t3);
      o2[t3][n3] = new F(n3, s3, t3, e2.prefix), l2.push(`${i3}:${s3}`);
    }
  }
  const s2 = () => {
    if (l2.length && !t2.rules.themed.cache.has(n2)) {
      t2.rules.themed.cache.add(n2);
      const i3 = `${r2 === e2.theme ? ":root," : ""}.${n2}{${l2.join(";")}}`;
      t2.rules.themed.apply(i3);
    }
    return n2;
  };
  return {...o2, get className() {
    return s2();
  }, selector: i2, toString: s2};
}), Z = l(), X = (e2) => {
  let t2 = false;
  const n2 = Z(e2, (e3) => {
    t2 = true;
    const n3 = "prefix" in (e3 = typeof e3 == "object" && e3 || {}) ? String(e3.prefix) : "", r2 = typeof e3.media == "object" && e3.media || {}, o2 = typeof e3.root == "object" ? e3.root || null : globalThis.document || null, l2 = typeof e3.theme == "object" && e3.theme || {}, s2 = {prefix: n3, media: r2, theme: l2, themeMap: typeof e3.themeMap == "object" && e3.themeMap || {...i}, utils: typeof e3.utils == "object" && e3.utils || {}}, a2 = T(o2), c2 = {css: C(s2, a2), globalCss: N(s2, a2), keyframes: G(s2, a2), createTheme: U(s2, a2), reset() {
      a2.reset(), c2.theme.toString();
    }, theme: {}, sheet: a2, config: s2, prefix: n3, getCssText: a2.toString, toString: a2.toString};
    return String(c2.theme = c2.createTheme(l2)), c2;
  });
  return t2 || n2.reset(), n2;
}, Y = () => e || (e = X()), q = (...e2) => Y().createTheme(...e2), K = (...e2) => Y().globalCss(...e2), Q = (...e2) => Y().keyframes(...e2), _ = (...e2) => Y().css(...e2);

export { X as createStitches, q as createTheme, _ as css, i as defaultThemeMap, K as globalCss, Q as keyframes };