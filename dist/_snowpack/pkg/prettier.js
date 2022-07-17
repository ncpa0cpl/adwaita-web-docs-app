import {g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal} from "./common/_commonjsHelpers-b3efd043.js";
var standalone = createCommonjsModule(function(module, exports) {
  (function(e) {
    module.exports = e();
  })(function() {
    var we = (e, n) => () => (n || e((n = {exports: {}}).exports, n), n.exports);
    var Ye = we((Ig, ru) => {
      var rr = function(e) {
        return e && e.Math == Math && e;
      };
      ru.exports = rr(typeof globalThis == "object" && globalThis) || rr(typeof window == "object" && window) || rr(typeof self == "object" && self) || rr(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
        return this;
      }() || Function("return this")();
    });
    var Dt = we((Lg, nu) => {
      nu.exports = function(e) {
        try {
          return !!e();
        } catch (e2) {
          return true;
        }
      };
    });
    var Ct = we((jg, uu) => {
      var So = Dt();
      uu.exports = !So(function() {
        return Object.defineProperty({}, 1, {get: function() {
          return 7;
        }})[1] != 7;
      });
    });
    var nr = we((Og, su) => {
      var xo = Dt();
      su.exports = !xo(function() {
        var e = function() {
        }.bind();
        return typeof e != "function" || e.hasOwnProperty("prototype");
      });
    });
    var Et = we((qg, iu) => {
      var bo = nr(), ur = Function.prototype.call;
      iu.exports = bo ? ur.bind(ur) : function() {
        return ur.apply(ur, arguments);
      };
    });
    var cu = we((lu) => {
      var au = {}.propertyIsEnumerable, ou = Object.getOwnPropertyDescriptor, To = ou && !au.call({1: 2}, 1);
      lu.f = To ? function(n) {
        var t = ou(this, n);
        return !!t && t.enumerable;
      } : au;
    });
    var sr = we((Rg, pu) => {
      pu.exports = function(e, n) {
        return {enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: n};
      };
    });
    var at = we((Vg, mu) => {
      var fu = nr(), Du = Function.prototype, Bo = Du.bind, Or = Du.call, No = fu && Bo.bind(Or, Or);
      mu.exports = fu ? function(e) {
        return e && No(e);
      } : function(e) {
        return e && function() {
          return Or.apply(e, arguments);
        };
      };
    });
    var ir = we((Wg, gu) => {
      var du = at(), wo = du({}.toString), _o = du("".slice);
      gu.exports = function(e) {
        return _o(wo(e), 8, -1);
      };
    });
    var hu = we(($g, yu) => {
      var Po = Ye(), ko = at(), Io = Dt(), Lo = ir(), qr = Po.Object, jo = ko("".split);
      yu.exports = Io(function() {
        return !qr("z").propertyIsEnumerable(0);
      }) ? function(e) {
        return Lo(e) == "String" ? jo(e, "") : qr(e);
      } : qr;
    });
    var Mr = we((Hg, vu) => {
      var Oo = Ye(), qo = Oo.TypeError;
      vu.exports = function(e) {
        if (e == null)
          throw qo("Can't call method on " + e);
        return e;
      };
    });
    var ar = we((Gg, Cu) => {
      var Mo = hu(), Ro = Mr();
      Cu.exports = function(e) {
        return Mo(Ro(e));
      };
    });
    var ot = we((Jg, Eu) => {
      Eu.exports = function(e) {
        return typeof e == "function";
      };
    });
    var Ft = we((Ug, Fu) => {
      var Vo = ot();
      Fu.exports = function(e) {
        return typeof e == "object" ? e !== null : Vo(e);
      };
    });
    var Rt = we((zg, Au) => {
      var Rr = Ye(), Wo = ot(), $o = function(e) {
        return Wo(e) ? e : void 0;
      };
      Au.exports = function(e, n) {
        return arguments.length < 2 ? $o(Rr[e]) : Rr[e] && Rr[e][n];
      };
    });
    var Vr = we((Xg, Su) => {
      var Ho = at();
      Su.exports = Ho({}.isPrototypeOf);
    });
    var bu = we((Kg, xu) => {
      var Go = Rt();
      xu.exports = Go("navigator", "userAgent") || "";
    });
    var ku = we((Yg, Pu) => {
      var _u = Ye(), Wr = bu(), Tu = _u.process, Bu = _u.Deno, Nu = Tu && Tu.versions || Bu && Bu.version, wu = Nu && Nu.v8, ft, or;
      wu && (ft = wu.split("."), or = ft[0] > 0 && ft[0] < 4 ? 1 : +(ft[0] + ft[1]));
      !or && Wr && (ft = Wr.match(/Edge\/(\d+)/), (!ft || ft[1] >= 74) && (ft = Wr.match(/Chrome\/(\d+)/), ft && (or = +ft[1])));
      Pu.exports = or;
    });
    var $r = we((Qg, Lu) => {
      var Iu = ku(), Jo = Dt();
      Lu.exports = !!Object.getOwnPropertySymbols && !Jo(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Iu && Iu < 41;
      });
    });
    var Hr = we((Zg, ju) => {
      var Uo = $r();
      ju.exports = Uo && !Symbol.sham && typeof Symbol.iterator == "symbol";
    });
    var Gr = we((e0, Ou) => {
      var zo = Ye(), Xo = Rt(), Ko = ot(), Yo = Vr(), Qo = Hr(), Zo = zo.Object;
      Ou.exports = Qo ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        var n = Xo("Symbol");
        return Ko(n) && Yo(n.prototype, Zo(e));
      };
    });
    var lr = we((t0, qu) => {
      var el = Ye(), tl = el.String;
      qu.exports = function(e) {
        try {
          return tl(e);
        } catch (e2) {
          return "Object";
        }
      };
    });
    var Vt = we((r0, Mu) => {
      var rl = Ye(), nl = ot(), ul = lr(), sl = rl.TypeError;
      Mu.exports = function(e) {
        if (nl(e))
          return e;
        throw sl(ul(e) + " is not a function");
      };
    });
    var cr = we((n0, Ru) => {
      var il = Vt();
      Ru.exports = function(e, n) {
        var t = e[n];
        return t == null ? void 0 : il(t);
      };
    });
    var Wu = we((u0, Vu) => {
      var al = Ye(), Jr = Et(), Ur = ot(), zr = Ft(), ol = al.TypeError;
      Vu.exports = function(e, n) {
        var t, s;
        if (n === "string" && Ur(t = e.toString) && !zr(s = Jr(t, e)) || Ur(t = e.valueOf) && !zr(s = Jr(t, e)) || n !== "string" && Ur(t = e.toString) && !zr(s = Jr(t, e)))
          return s;
        throw ol("Can't convert object to primitive value");
      };
    });
    var Hu = we((s0, $u) => {
      $u.exports = false;
    });
    var pr = we((i0, Ju) => {
      var Gu = Ye(), ll = Object.defineProperty;
      Ju.exports = function(e, n) {
        try {
          ll(Gu, e, {value: n, configurable: true, writable: true});
        } catch (e2) {
          Gu[e] = n;
        }
        return n;
      };
    });
    var fr = we((a0, zu) => {
      var cl = Ye(), pl = pr(), Uu = "__core-js_shared__", fl = cl[Uu] || pl(Uu, {});
      zu.exports = fl;
    });
    var Xr = we((o0, Ku) => {
      var Dl = Hu(), Xu = fr();
      (Ku.exports = function(e, n) {
        return Xu[e] || (Xu[e] = n !== void 0 ? n : {});
      })("versions", []).push({version: "3.22.2", mode: Dl ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE", source: "https://github.com/zloirock/core-js"});
    });
    var Dr = we((l0, Yu) => {
      var ml = Ye(), dl = Mr(), gl = ml.Object;
      Yu.exports = function(e) {
        return gl(dl(e));
      };
    });
    var gt = we((c0, Qu) => {
      var yl = at(), hl = Dr(), vl = yl({}.hasOwnProperty);
      Qu.exports = Object.hasOwn || function(n, t) {
        return vl(hl(n), t);
      };
    });
    var Kr = we((p0, Zu) => {
      var Cl = at(), El = 0, Fl = Math.random(), Al = Cl(1 .toString);
      Zu.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Al(++El + Fl, 36);
      };
    });
    var St = we((f0, us) => {
      var Sl = Ye(), xl = Xr(), es = gt(), bl = Kr(), ts = $r(), ns = Hr(), Nt = xl("wks"), At = Sl.Symbol, rs = At && At.for, Tl = ns ? At : At && At.withoutSetter || bl;
      us.exports = function(e) {
        if (!es(Nt, e) || !(ts || typeof Nt[e] == "string")) {
          var n = "Symbol." + e;
          ts && es(At, e) ? Nt[e] = At[e] : ns && rs ? Nt[e] = rs(n) : Nt[e] = Tl(n);
        }
        return Nt[e];
      };
    });
    var os = we((D0, as) => {
      var Bl = Ye(), Nl = Et(), ss = Ft(), is = Gr(), wl = cr(), _l = Wu(), Pl = St(), kl = Bl.TypeError, Il = Pl("toPrimitive");
      as.exports = function(e, n) {
        if (!ss(e) || is(e))
          return e;
        var t = wl(e, Il), s;
        if (t) {
          if (n === void 0 && (n = "default"), s = Nl(t, e, n), !ss(s) || is(s))
            return s;
          throw kl("Can't convert object to primitive value");
        }
        return n === void 0 && (n = "number"), _l(e, n);
      };
    });
    var mr = we((m0, ls) => {
      var Ll = os(), jl = Gr();
      ls.exports = function(e) {
        var n = Ll(e, "string");
        return jl(n) ? n : n + "";
      };
    });
    var fs = we((d0, ps) => {
      var Ol = Ye(), cs = Ft(), Yr = Ol.document, ql = cs(Yr) && cs(Yr.createElement);
      ps.exports = function(e) {
        return ql ? Yr.createElement(e) : {};
      };
    });
    var Qr = we((g0, Ds) => {
      var Ml = Ct(), Rl = Dt(), Vl = fs();
      Ds.exports = !Ml && !Rl(function() {
        return Object.defineProperty(Vl("div"), "a", {get: function() {
          return 7;
        }}).a != 7;
      });
    });
    var Zr = we((ds) => {
      var Wl = Ct(), $l = Et(), Hl = cu(), Gl = sr(), Jl = ar(), Ul = mr(), zl = gt(), Xl = Qr(), ms = Object.getOwnPropertyDescriptor;
      ds.f = Wl ? ms : function(n, t) {
        if (n = Jl(n), t = Ul(t), Xl)
          try {
            return ms(n, t);
          } catch (e) {
          }
        if (zl(n, t))
          return Gl(!$l(Hl.f, n, t), n[t]);
      };
    });
    var ys = we((h0, gs) => {
      var Kl = Ct(), Yl = Dt();
      gs.exports = Kl && Yl(function() {
        return Object.defineProperty(function() {
        }, "prototype", {value: 42, writable: false}).prototype != 42;
      });
    });
    var wt = we((v0, vs) => {
      var hs = Ye(), Ql = Ft(), Zl = hs.String, ec = hs.TypeError;
      vs.exports = function(e) {
        if (Ql(e))
          return e;
        throw ec(Zl(e) + " is not an object");
      };
    });
    var gr = we((Es) => {
      var tc = Ye(), rc = Ct(), nc = Qr(), uc = ys(), dr = wt(), Cs = mr(), sc = tc.TypeError, en = Object.defineProperty, ic = Object.getOwnPropertyDescriptor, tn = "enumerable", rn = "configurable", nn = "writable";
      Es.f = rc ? uc ? function(n, t, s) {
        if (dr(n), t = Cs(t), dr(s), typeof n == "function" && t === "prototype" && "value" in s && nn in s && !s[nn]) {
          var a = ic(n, t);
          a && a[nn] && (n[t] = s.value, s = {configurable: rn in s ? s[rn] : a[rn], enumerable: tn in s ? s[tn] : a[tn], writable: false});
        }
        return en(n, t, s);
      } : en : function(n, t, s) {
        if (dr(n), t = Cs(t), dr(s), nc)
          try {
            return en(n, t, s);
          } catch (e) {
          }
        if ("get" in s || "set" in s)
          throw sc("Accessors not supported");
        return "value" in s && (n[t] = s.value), n;
      };
    });
    var yr = we((E0, Fs) => {
      var ac = Ct(), oc = gr(), lc = sr();
      Fs.exports = ac ? function(e, n, t) {
        return oc.f(e, n, lc(1, t));
      } : function(e, n, t) {
        return e[n] = t, e;
      };
    });
    var hr = we((F0, As) => {
      var cc = at(), pc = ot(), un = fr(), fc = cc(Function.toString);
      pc(un.inspectSource) || (un.inspectSource = function(e) {
        return fc(e);
      });
      As.exports = un.inspectSource;
    });
    var bs = we((A0, xs) => {
      var Dc = Ye(), mc = ot(), dc = hr(), Ss = Dc.WeakMap;
      xs.exports = mc(Ss) && /native code/.test(dc(Ss));
    });
    var Ns = we((S0, Bs) => {
      var gc = Xr(), yc = Kr(), Ts = gc("keys");
      Bs.exports = function(e) {
        return Ts[e] || (Ts[e] = yc(e));
      };
    });
    var sn = we((x0, ws) => {
      ws.exports = {};
    });
    var js = we((b0, Ls) => {
      var hc = bs(), Is = Ye(), an = at(), vc = Ft(), Cc = yr(), on = gt(), ln = fr(), Ec = Ns(), Fc = sn(), _s = "Object already initialized", pn = Is.TypeError, Ac = Is.WeakMap, vr, Wt, Cr, Sc = function(e) {
        return Cr(e) ? Wt(e) : vr(e, {});
      }, xc = function(e) {
        return function(n) {
          var t;
          if (!vc(n) || (t = Wt(n)).type !== e)
            throw pn("Incompatible receiver, " + e + " required");
          return t;
        };
      };
      hc || ln.state ? (yt = ln.state || (ln.state = new Ac()), Ps = an(yt.get), cn = an(yt.has), ks = an(yt.set), vr = function(e, n) {
        if (cn(yt, e))
          throw new pn(_s);
        return n.facade = e, ks(yt, e, n), n;
      }, Wt = function(e) {
        return Ps(yt, e) || {};
      }, Cr = function(e) {
        return cn(yt, e);
      }) : (xt = Ec("state"), Fc[xt] = true, vr = function(e, n) {
        if (on(e, xt))
          throw new pn(_s);
        return n.facade = e, Cc(e, xt, n), n;
      }, Wt = function(e) {
        return on(e, xt) ? e[xt] : {};
      }, Cr = function(e) {
        return on(e, xt);
      });
      var yt, Ps, cn, ks, xt;
      Ls.exports = {set: vr, get: Wt, has: Cr, enforce: Sc, getterFor: xc};
    });
    var Ms = we((T0, qs) => {
      var fn = Ct(), bc = gt(), Os = Function.prototype, Tc = fn && Object.getOwnPropertyDescriptor, Dn = bc(Os, "name"), Bc = Dn && function() {
      }.name === "something", Nc = Dn && (!fn || fn && Tc(Os, "name").configurable);
      qs.exports = {EXISTS: Dn, PROPER: Bc, CONFIGURABLE: Nc};
    });
    var Hs = we((B0, $s) => {
      var wc = Ye(), Rs = ot(), _c = gt(), Vs = yr(), Pc = pr(), kc = hr(), Ws = js(), Ic = Ms().CONFIGURABLE, Lc = Ws.get, jc = Ws.enforce, Oc = String(String).split("String");
      ($s.exports = function(e, n, t, s) {
        var a = s ? !!s.unsafe : false, r = s ? !!s.enumerable : false, u = s ? !!s.noTargetGet : false, i = s && s.name !== void 0 ? s.name : n, o;
        if (Rs(t) && (String(i).slice(0, 7) === "Symbol(" && (i = "[" + String(i).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!_c(t, "name") || Ic && t.name !== i) && Vs(t, "name", i), o = jc(t), o.source || (o.source = Oc.join(typeof i == "string" ? i : ""))), e === wc) {
          r ? e[n] = t : Pc(n, t);
          return;
        } else
          a ? !u && e[n] && (r = true) : delete e[n];
        r ? e[n] = t : Vs(e, n, t);
      })(Function.prototype, "toString", function() {
        return Rs(this) && Lc(this).source || kc(this);
      });
    });
    var Er = we((N0, Gs) => {
      var qc = Math.ceil, Mc = Math.floor;
      Gs.exports = function(e) {
        var n = +e;
        return n !== n || n === 0 ? 0 : (n > 0 ? Mc : qc)(n);
      };
    });
    var Us = we((w0, Js) => {
      var Rc = Er(), Vc = Math.max, Wc = Math.min;
      Js.exports = function(e, n) {
        var t = Rc(e);
        return t < 0 ? Vc(t + n, 0) : Wc(t, n);
      };
    });
    var Xs = we((_0, zs) => {
      var $c = Er(), Hc = Math.min;
      zs.exports = function(e) {
        return e > 0 ? Hc($c(e), 9007199254740991) : 0;
      };
    });
    var _t = we((P0, Ks) => {
      var Gc = Xs();
      Ks.exports = function(e) {
        return Gc(e.length);
      };
    });
    var Zs = we((k0, Qs) => {
      var Jc = ar(), Uc = Us(), zc = _t(), Ys = function(e) {
        return function(n, t, s) {
          var a = Jc(n), r = zc(a), u = Uc(s, r), i;
          if (e && t != t) {
            for (; r > u; )
              if (i = a[u++], i != i)
                return true;
          } else
            for (; r > u; u++)
              if ((e || u in a) && a[u] === t)
                return e || u || 0;
          return !e && -1;
        };
      };
      Qs.exports = {includes: Ys(true), indexOf: Ys(false)};
    });
    var ri = we((I0, ti) => {
      var Xc = at(), mn = gt(), Kc = ar(), Yc = Zs().indexOf, Qc = sn(), ei = Xc([].push);
      ti.exports = function(e, n) {
        var t = Kc(e), s = 0, a = [], r;
        for (r in t)
          !mn(Qc, r) && mn(t, r) && ei(a, r);
        for (; n.length > s; )
          mn(t, r = n[s++]) && (~Yc(a, r) || ei(a, r));
        return a;
      };
    });
    var ui = we((L0, ni) => {
      ni.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    });
    var ii = we((si) => {
      var Zc = ri(), ep = ui(), tp = ep.concat("length", "prototype");
      si.f = Object.getOwnPropertyNames || function(n) {
        return Zc(n, tp);
      };
    });
    var oi = we((ai) => {
      ai.f = Object.getOwnPropertySymbols;
    });
    var ci = we((q0, li) => {
      var rp = Rt(), np = at(), up = ii(), sp = oi(), ip = wt(), ap = np([].concat);
      li.exports = rp("Reflect", "ownKeys") || function(n) {
        var t = up.f(ip(n)), s = sp.f;
        return s ? ap(t, s(n)) : t;
      };
    });
    var Di = we((M0, fi) => {
      var pi = gt(), op = ci(), lp = Zr(), cp = gr();
      fi.exports = function(e, n, t) {
        for (var s = op(n), a = cp.f, r = lp.f, u = 0; u < s.length; u++) {
          var i = s[u];
          !pi(e, i) && !(t && pi(t, i)) && a(e, i, r(n, i));
        }
      };
    });
    var di = we((R0, mi) => {
      var pp = Dt(), fp = ot(), Dp = /#|\.prototype\./, $t = function(e, n) {
        var t = dp[mp(e)];
        return t == yp ? true : t == gp ? false : fp(n) ? pp(n) : !!n;
      }, mp = $t.normalize = function(e) {
        return String(e).replace(Dp, ".").toLowerCase();
      }, dp = $t.data = {}, gp = $t.NATIVE = "N", yp = $t.POLYFILL = "P";
      mi.exports = $t;
    });
    var Ht = we((V0, gi) => {
      var dn = Ye(), hp = Zr().f, vp = yr(), Cp = Hs(), Ep = pr(), Fp = Di(), Ap = di();
      gi.exports = function(e, n) {
        var t = e.target, s = e.global, a = e.stat, r, u, i, o, c, v;
        if (s ? u = dn : a ? u = dn[t] || Ep(t, {}) : u = (dn[t] || {}).prototype, u)
          for (i in n) {
            if (c = n[i], e.noTargetGet ? (v = hp(u, i), o = v && v.value) : o = u[i], r = Ap(s ? i : t + (a ? "." : "#") + i, e.forced), !r && o !== void 0) {
              if (typeof c == typeof o)
                continue;
              Fp(c, o);
            }
            (e.sham || o && o.sham) && vp(c, "sham", true), Cp(u, i, c, e);
          }
      };
    });
    var gn = we((W0, yi) => {
      var Sp = ir();
      yi.exports = Array.isArray || function(n) {
        return Sp(n) == "Array";
      };
    });
    var yn = we(($0, vi) => {
      var hi = at(), xp = Vt(), bp = nr(), Tp = hi(hi.bind);
      vi.exports = function(e, n) {
        return xp(e), n === void 0 ? e : bp ? Tp(e, n) : function() {
          return e.apply(n, arguments);
        };
      };
    });
    var hn = we((H0, Ei) => {
      var Bp = Ye(), Np = gn(), wp = _t(), _p = yn(), Pp = Bp.TypeError, Ci = function(e, n, t, s, a, r, u, i) {
        for (var o = a, c = 0, v = u ? _p(u, i) : false, m, d; c < s; ) {
          if (c in t) {
            if (m = v ? v(t[c], c, n) : t[c], r > 0 && Np(m))
              d = wp(m), o = Ci(e, n, m, d, o, r - 1) - 1;
            else {
              if (o >= 9007199254740991)
                throw Pp("Exceed the acceptable array length");
              e[o] = m;
            }
            o++;
          }
          c++;
        }
        return o;
      };
      Ei.exports = Ci;
    });
    var Si = we((G0, Ai) => {
      var kp = St(), Ip = kp("toStringTag"), Fi = {};
      Fi[Ip] = "z";
      Ai.exports = String(Fi) === "[object z]";
    });
    var vn = we((J0, xi) => {
      var Lp = Ye(), jp = Si(), Op = ot(), Fr = ir(), qp = St(), Mp = qp("toStringTag"), Rp = Lp.Object, Vp = Fr(function() {
        return arguments;
      }()) == "Arguments", Wp = function(e, n) {
        try {
          return e[n];
        } catch (e2) {
        }
      };
      xi.exports = jp ? Fr : function(e) {
        var n, t, s;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = Wp(n = Rp(e), Mp)) == "string" ? t : Vp ? Fr(n) : (s = Fr(n)) == "Object" && Op(n.callee) ? "Arguments" : s;
      };
    });
    var _i = we((U0, wi) => {
      var $p = at(), Hp = Dt(), bi = ot(), Gp = vn(), Jp = Rt(), Up = hr(), Ti = function() {
      }, zp = [], Bi = Jp("Reflect", "construct"), Cn = /^\s*(?:class|function)\b/, Xp = $p(Cn.exec), Kp = !Cn.exec(Ti), Gt = function(n) {
        if (!bi(n))
          return false;
        try {
          return Bi(Ti, zp, n), true;
        } catch (e) {
          return false;
        }
      }, Ni = function(n) {
        if (!bi(n))
          return false;
        switch (Gp(n)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return Kp || !!Xp(Cn, Up(n));
        } catch (e) {
          return true;
        }
      };
      Ni.sham = true;
      wi.exports = !Bi || Hp(function() {
        var e;
        return Gt(Gt.call) || !Gt(Object) || !Gt(function() {
          e = true;
        }) || e;
      }) ? Ni : Gt;
    });
    var Li = we((z0, Ii) => {
      var Yp = Ye(), Pi = gn(), Qp = _i(), Zp = Ft(), ef = St(), tf = ef("species"), ki = Yp.Array;
      Ii.exports = function(e) {
        var n;
        return Pi(e) && (n = e.constructor, Qp(n) && (n === ki || Pi(n.prototype)) ? n = void 0 : Zp(n) && (n = n[tf], n === null && (n = void 0))), n === void 0 ? ki : n;
      };
    });
    var En = we((X0, ji) => {
      var rf = Li();
      ji.exports = function(e, n) {
        return new (rf(e))(n === 0 ? 0 : n);
      };
    });
    var Oi = we(() => {
      var nf = Ht(), uf = hn(), sf = Vt(), af = Dr(), of = _t(), lf = En();
      nf({target: "Array", proto: true}, {flatMap: function(n) {
        var t = af(this), s = of(t), a;
        return sf(n), a = lf(t, 0), a.length = uf(a, t, t, s, 0, 1, n, arguments.length > 1 ? arguments[1] : void 0), a;
      }});
    });
    var Fn = we((Q0, qi) => {
      qi.exports = {};
    });
    var Ri = we((Z0, Mi) => {
      var cf = St(), pf = Fn(), ff = cf("iterator"), Df = Array.prototype;
      Mi.exports = function(e) {
        return e !== void 0 && (pf.Array === e || Df[ff] === e);
      };
    });
    var An = we((ey, Wi) => {
      var mf = vn(), Vi = cr(), df = Fn(), gf = St(), yf = gf("iterator");
      Wi.exports = function(e) {
        if (e != null)
          return Vi(e, yf) || Vi(e, "@@iterator") || df[mf(e)];
      };
    });
    var Hi = we((ty, $i) => {
      var hf = Ye(), vf = Et(), Cf = Vt(), Ef = wt(), Ff = lr(), Af = An(), Sf = hf.TypeError;
      $i.exports = function(e, n) {
        var t = arguments.length < 2 ? Af(e) : n;
        if (Cf(t))
          return Ef(vf(t, e));
        throw Sf(Ff(e) + " is not iterable");
      };
    });
    var Ui = we((ry, Ji) => {
      var xf = Et(), Gi = wt(), bf = cr();
      Ji.exports = function(e, n, t) {
        var s, a;
        Gi(e);
        try {
          if (s = bf(e, "return"), !s) {
            if (n === "throw")
              throw t;
            return t;
          }
          s = xf(s, e);
        } catch (r) {
          a = true, s = r;
        }
        if (n === "throw")
          throw t;
        if (a)
          throw s;
        return Gi(s), t;
      };
    });
    var Qi = we((ny, Yi) => {
      var Tf = Ye(), Bf = yn(), Nf = Et(), wf = wt(), _f = lr(), Pf = Ri(), kf = _t(), zi = Vr(), If = Hi(), Lf = An(), Xi = Ui(), jf = Tf.TypeError, Ar = function(e, n) {
        this.stopped = e, this.result = n;
      }, Ki = Ar.prototype;
      Yi.exports = function(e, n, t) {
        var s = t && t.that, a = !!(t && t.AS_ENTRIES), r = !!(t && t.IS_ITERATOR), u = !!(t && t.INTERRUPTED), i = Bf(n, s), o, c, v, m, d, p, f, h = function(T) {
          return o && Xi(o, "normal", T), new Ar(true, T);
        }, w = function(T) {
          return a ? (wf(T), u ? i(T[0], T[1], h) : i(T[0], T[1])) : u ? i(T, h) : i(T);
        };
        if (r)
          o = e;
        else {
          if (c = Lf(e), !c)
            throw jf(_f(e) + " is not iterable");
          if (Pf(c)) {
            for (v = 0, m = kf(e); m > v; v++)
              if (d = w(e[v]), d && zi(Ki, d))
                return d;
            return new Ar(false);
          }
          o = If(e, c);
        }
        for (p = o.next; !(f = Nf(p, o)).done; ) {
          try {
            d = w(f.value);
          } catch (T) {
            Xi(o, "throw", T);
          }
          if (typeof d == "object" && d && zi(Ki, d))
            return d;
        }
        return new Ar(false);
      };
    });
    var ea = we((uy, Zi) => {
      var Of = mr(), qf = gr(), Mf = sr();
      Zi.exports = function(e, n, t) {
        var s = Of(n);
        s in e ? qf.f(e, s, Mf(0, t)) : e[s] = t;
      };
    });
    var ta = we(() => {
      var Rf = Ht(), Vf = Qi(), Wf = ea();
      Rf({target: "Object", stat: true}, {fromEntries: function(n) {
        var t = {};
        return Vf(n, function(s, a) {
          Wf(t, s, a);
        }, {AS_ENTRIES: true}), t;
      }});
    });
    var ra = we(() => {
      var $f = Ht(), Hf = Ye();
      $f({global: true}, {globalThis: Hf});
    });
    var na = we(() => {
      ra();
    });
    var ua = we(() => {
      var Gf = Ht(), Jf = hn(), Uf = Dr(), zf = _t(), Xf = Er(), Kf = En();
      Gf({target: "Array", proto: true}, {flat: function() {
        var n = arguments.length ? arguments[0] : void 0, t = Uf(this), s = zf(t), a = Kf(t, 0);
        return a.length = Jf(a, t, t, s, 0, n === void 0 ? 1 : Xf(n)), a;
      }});
    });
    var Pg = we((my, Co) => {
      var Yf = ["cliName", "cliCategory", "cliDescription"], Qf = ["_"], Zf = ["languageId"], sa, ia, aa, oa, la, ca;
      function kn(e, n) {
        if (e == null)
          return {};
        var t = eD(e, n), s, a;
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            s = r[a], !(n.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, s) || (t[s] = e[s]));
        }
        return t;
      }
      function eD(e, n) {
        if (e == null)
          return {};
        var t = {}, s = Object.keys(e), a, r;
        for (r = 0; r < s.length; r++)
          a = s[r], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
        return t;
      }
      Oi();
      ta();
      na();
      ua();
      function Pt(e, n) {
        return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(n)}}));
      }
      var tD = Object.create, Br = Object.defineProperty, rD = Object.getOwnPropertyDescriptor, In = Object.getOwnPropertyNames, nD = Object.getPrototypeOf, uD = Object.prototype.hasOwnProperty, mt = (e, n) => function() {
        return e && (n = (0, e[In(e)[0]])(e = 0)), n;
      }, Z = (e, n) => function() {
        return n || (0, e[In(e)[0]])((n = {exports: {}}).exports, n), n.exports;
      }, Ut = (e, n) => {
        for (var t in n)
          Br(e, t, {get: n[t], enumerable: true});
      }, ga = (e, n, t, s) => {
        if (n && typeof n == "object" || typeof n == "function")
          for (let a of In(n))
            !uD.call(e, a) && a !== t && Br(e, a, {get: () => n[a], enumerable: !(s = rD(n, a)) || s.enumerable});
        return e;
      }, sD = (e, n, t) => (t = e != null ? tD(nD(e)) : {}, ga(n || !e || !e.__esModule ? Br(t, "default", {value: e, enumerable: true}) : t, e)), lt = (e) => ga(Br({}, "__esModule", {value: true}), e), pa, fa, Tt, re = mt({"<define:process>"() {
        pa = {}, fa = [], Tt = {env: pa, argv: fa};
      }}), ya = Z({"package.json"(e, n) {
        n.exports = {version: "2.7.1"};
      }}), iD = Z({"node_modules/diff/lib/diff/base.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true}), e.default = n;
        function n() {
        }
        n.prototype = {diff: function(r, u) {
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = i.callback;
          typeof i == "function" && (o = i, i = {}), this.options = i;
          var c = this;
          function v(S) {
            return o ? (setTimeout(function() {
              o(void 0, S);
            }, 0), true) : S;
          }
          r = this.castInput(r), u = this.castInput(u), r = this.removeEmpty(this.tokenize(r)), u = this.removeEmpty(this.tokenize(u));
          var m = u.length, d = r.length, p = 1, f = m + d, h = [{newPos: -1, components: []}], w = this.extractCommon(h[0], u, r, 0);
          if (h[0].newPos + 1 >= m && w + 1 >= d)
            return v([{value: this.join(u), count: u.length}]);
          function T() {
            for (var S = -1 * p; S <= p; S += 2) {
              var B = void 0, I = h[S - 1], k = h[S + 1], P = (k ? k.newPos : 0) - S;
              I && (h[S - 1] = void 0);
              var C = I && I.newPos + 1 < m, D = k && 0 <= P && P < d;
              if (!C && !D) {
                h[S] = void 0;
                continue;
              }
              if (!C || D && I.newPos < k.newPos ? (B = s(k), c.pushComponent(B.components, void 0, true)) : (B = I, B.newPos++, c.pushComponent(B.components, true, void 0)), P = c.extractCommon(B, u, r, S), B.newPos + 1 >= m && P + 1 >= d)
                return v(t(c, B.components, u, r, c.useLongestToken));
              h[S] = B;
            }
            p++;
          }
          if (o)
            (function S() {
              setTimeout(function() {
                if (p > f)
                  return o();
                T() || S();
              }, 0);
            })();
          else
            for (; p <= f; ) {
              var A = T();
              if (A)
                return A;
            }
        }, pushComponent: function(r, u, i) {
          var o = r[r.length - 1];
          o && o.added === u && o.removed === i ? r[r.length - 1] = {count: o.count + 1, added: u, removed: i} : r.push({count: 1, added: u, removed: i});
        }, extractCommon: function(r, u, i, o) {
          for (var c = u.length, v = i.length, m = r.newPos, d = m - o, p = 0; m + 1 < c && d + 1 < v && this.equals(u[m + 1], i[d + 1]); )
            m++, d++, p++;
          return p && r.components.push({count: p}), r.newPos = m, d;
        }, equals: function(r, u) {
          return this.options.comparator ? this.options.comparator(r, u) : r === u || this.options.ignoreCase && r.toLowerCase() === u.toLowerCase();
        }, removeEmpty: function(r) {
          for (var u = [], i = 0; i < r.length; i++)
            r[i] && u.push(r[i]);
          return u;
        }, castInput: function(r) {
          return r;
        }, tokenize: function(r) {
          return r.split("");
        }, join: function(r) {
          return r.join("");
        }};
        function t(a, r, u, i, o) {
          for (var c = 0, v = r.length, m = 0, d = 0; c < v; c++) {
            var p = r[c];
            if (p.removed) {
              if (p.value = a.join(i.slice(d, d + p.count)), d += p.count, c && r[c - 1].added) {
                var h = r[c - 1];
                r[c - 1] = r[c], r[c] = h;
              }
            } else {
              if (!p.added && o) {
                var f = u.slice(m, m + p.count);
                f = f.map(function(T, A) {
                  var S = i[d + A];
                  return S.length > T.length ? S : T;
                }), p.value = a.join(f);
              } else
                p.value = a.join(u.slice(m, m + p.count));
              m += p.count, p.added || (d += p.count);
            }
          }
          var w = r[v - 1];
          return v > 1 && typeof w.value == "string" && (w.added || w.removed) && a.equals("", w.value) && (r[v - 2].value += w.value, r.pop()), r;
        }
        function s(a) {
          return {newPos: a.newPos, components: a.components.slice(0)};
        }
      }}), aD = Z({"node_modules/diff/lib/diff/array.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true}), e.diffArrays = a, e.arrayDiff = void 0;
        var n = t(iD());
        function t(r) {
          return r && r.__esModule ? r : {default: r};
        }
        var s = new n.default();
        e.arrayDiff = s, s.tokenize = function(r) {
          return r.slice();
        }, s.join = s.removeEmpty = function(r) {
          return r;
        };
        function a(r, u, i) {
          return s.diff(r, u, i);
        }
      }}), Ln = Z({"src/document/doc-builders.js"(e, n) {
        re();
        function t(F) {
          return {type: "concat", parts: F};
        }
        function s(F) {
          return {type: "indent", contents: F};
        }
        function a(F, l) {
          return {type: "align", contents: l, n: F};
        }
        function r(F) {
          let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return {type: "group", id: l.id, contents: F, break: Boolean(l.shouldBreak), expandedStates: l.expandedStates};
        }
        function u(F) {
          return a(Number.NEGATIVE_INFINITY, F);
        }
        function i(F) {
          return a({type: "root"}, F);
        }
        function o(F) {
          return a(-1, F);
        }
        function c(F, l) {
          return r(F[0], Object.assign(Object.assign({}, l), {}, {expandedStates: F}));
        }
        function v(F) {
          return {type: "fill", parts: F};
        }
        function m(F, l) {
          let E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return {type: "if-break", breakContents: F, flatContents: l, groupId: E.groupId};
        }
        function d(F, l) {
          return {type: "indent-if-break", contents: F, groupId: l.groupId, negate: l.negate};
        }
        function p(F) {
          return {type: "line-suffix", contents: F};
        }
        var f = {type: "line-suffix-boundary"}, h = {type: "break-parent"}, w = {type: "trim"}, T = {type: "line", hard: true}, A = {type: "line", hard: true, literal: true}, S = {type: "line"}, B = {type: "line", soft: true}, I = t([T, h]), k = t([A, h]), P = {type: "cursor", placeholder: Symbol("cursor")};
        function C(F, l) {
          let E = [];
          for (let y = 0; y < l.length; y++)
            y !== 0 && E.push(F), E.push(l[y]);
          return t(E);
        }
        function D(F, l, E) {
          let y = F;
          if (l > 0) {
            for (let N = 0; N < Math.floor(l / E); ++N)
              y = s(y);
            y = a(l % E, y), y = a(Number.NEGATIVE_INFINITY, y);
          }
          return y;
        }
        function g(F, l) {
          return {type: "label", label: F, contents: l};
        }
        n.exports = {concat: t, join: C, line: S, softline: B, hardline: I, literalline: k, group: r, conditionalGroup: c, fill: v, lineSuffix: p, lineSuffixBoundary: f, cursor: P, breakParent: h, ifBreak: m, trim: w, indent: s, indentIfBreak: d, align: a, addAlignmentToDoc: D, markAsRoot: i, dedentToRoot: u, dedent: o, hardlineWithoutBreakParent: T, literallineWithoutBreakParent: A, label: g};
      }}), jn = Z({"src/common/end-of-line.js"(e, n) {
        re();
        function t(u) {
          let i = u.indexOf("\r");
          return i >= 0 ? u.charAt(i + 1) === `
` ? "crlf" : "cr" : "lf";
        }
        function s(u) {
          switch (u) {
            case "cr":
              return "\r";
            case "crlf":
              return `\r
`;
            default:
              return `
`;
          }
        }
        function a(u, i) {
          let o;
          switch (i) {
            case `
`:
              o = /\n/g;
              break;
            case "\r":
              o = /\r/g;
              break;
            case `\r
`:
              o = /\r\n/g;
              break;
            default:
              throw new Error('Unexpected "eol" '.concat(JSON.stringify(i), "."));
          }
          let c = u.match(o);
          return c ? c.length : 0;
        }
        function r(u) {
          return u.replace(/\r\n?/g, `
`);
        }
        n.exports = {guessEndOfLine: t, convertEndOfLineToChars: s, countEndOfLineChars: a, normalizeEndOfLine: r};
      }}), it = Z({"src/utils/get-last.js"(e, n) {
        re();
        var t = (s) => s[s.length - 1];
        n.exports = t;
      }});
      function oD() {
        let {onlyFirst: e = false} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(n, e ? void 0 : "g");
      }
      var lD = mt({"node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        re();
      }});
      function cD(e) {
        if (typeof e != "string")
          throw new TypeError("Expected a `string`, got `".concat(typeof e, "`"));
        return e.replace(oD(), "");
      }
      var pD = mt({"node_modules/strip-ansi/index.js"() {
        re(), lD();
      }});
      function fD(e) {
        return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
      }
      var DD = mt({"node_modules/is-fullwidth-code-point/index.js"() {
        re();
      }}), mD = Z({"node_modules/emoji-regex/index.js"(e, n) {
        re(), n.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      }}), ha = {};
      Ut(ha, {default: () => dD});
      function dD(e) {
        if (typeof e != "string" || e.length === 0 || (e = cD(e), e.length === 0))
          return 0;
        e = e.replace((0, va.default)(), "  ");
        let n = 0;
        for (let t = 0; t < e.length; t++) {
          let s = e.codePointAt(t);
          s <= 31 || s >= 127 && s <= 159 || s >= 768 && s <= 879 || (s > 65535 && t++, n += fD(s) ? 2 : 1);
        }
        return n;
      }
      var va, gD = mt({"node_modules/string-width/index.js"() {
        re(), pD(), DD(), va = sD(mD());
      }}), Ca = Z({"src/utils/get-string-width.js"(e, n) {
        re();
        var t = (gD(), lt(ha)).default, s = /[^\x20-\x7F]/;
        function a(r) {
          return r ? s.test(r) ? t(r) : r.length : 0;
        }
        n.exports = a;
      }}), On = Z({"src/document/doc-utils.js"(e, n) {
        re();
        var t = it(), {literalline: s, join: a} = Ln(), r = (l) => Array.isArray(l) || l && l.type === "concat", u = (l) => {
          if (Array.isArray(l))
            return l;
          if (l.type !== "concat" && l.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`.");
          return l.parts;
        }, i = {};
        function o(l, E, y, N) {
          let x = [l];
          for (; x.length > 0; ) {
            let b = x.pop();
            if (b === i) {
              y(x.pop());
              continue;
            }
            if (y && x.push(b, i), !E || E(b) !== false)
              if (r(b) || b.type === "fill") {
                let L = u(b);
                for (let M = L.length, j = M - 1; j >= 0; --j)
                  x.push(L[j]);
              } else if (b.type === "if-break")
                b.flatContents && x.push(b.flatContents), b.breakContents && x.push(b.breakContents);
              else if (b.type === "group" && b.expandedStates)
                if (N)
                  for (let L = b.expandedStates.length, M = L - 1; M >= 0; --M)
                    x.push(b.expandedStates[M]);
                else
                  x.push(b.contents);
              else
                b.contents && x.push(b.contents);
          }
        }
        function c(l, E) {
          let y = new Map();
          return N(l);
          function N(b) {
            if (y.has(b))
              return y.get(b);
            let L = x(b);
            return y.set(b, L), L;
          }
          function x(b) {
            if (Array.isArray(b))
              return E(b.map(N));
            if (b.type === "concat" || b.type === "fill") {
              let L = b.parts.map(N);
              return E(Object.assign(Object.assign({}, b), {}, {parts: L}));
            }
            if (b.type === "if-break") {
              let L = b.breakContents && N(b.breakContents), M = b.flatContents && N(b.flatContents);
              return E(Object.assign(Object.assign({}, b), {}, {breakContents: L, flatContents: M}));
            }
            if (b.type === "group" && b.expandedStates) {
              let L = b.expandedStates.map(N), M = L[0];
              return E(Object.assign(Object.assign({}, b), {}, {contents: M, expandedStates: L}));
            }
            if (b.contents) {
              let L = N(b.contents);
              return E(Object.assign(Object.assign({}, b), {}, {contents: L}));
            }
            return E(b);
          }
        }
        function v(l, E, y) {
          let N = y, x = false;
          function b(L) {
            let M = E(L);
            if (M !== void 0 && (x = true, N = M), x)
              return false;
          }
          return o(l, b), N;
        }
        function m(l) {
          if (l.type === "group" && l.break || l.type === "line" && l.hard || l.type === "break-parent")
            return true;
        }
        function d(l) {
          return v(l, m, false);
        }
        function p(l) {
          if (l.length > 0) {
            let E = t(l);
            !E.expandedStates && !E.break && (E.break = "propagated");
          }
          return null;
        }
        function f(l) {
          let E = new Set(), y = [];
          function N(b) {
            if (b.type === "break-parent" && p(y), b.type === "group") {
              if (y.push(b), E.has(b))
                return false;
              E.add(b);
            }
          }
          function x(b) {
            b.type === "group" && y.pop().break && p(y);
          }
          o(l, N, x, true);
        }
        function h(l) {
          return l.type === "line" && !l.hard ? l.soft ? "" : " " : l.type === "if-break" ? l.flatContents || "" : l;
        }
        function w(l) {
          return c(l, h);
        }
        var T = (l, E) => l && l.type === "line" && l.hard && E && E.type === "break-parent";
        function A(l) {
          if (!l)
            return l;
          if (r(l) || l.type === "fill") {
            let E = u(l);
            for (; E.length > 1 && T(...E.slice(-2)); )
              E.length -= 2;
            if (E.length > 0) {
              let y = A(t(E));
              E[E.length - 1] = y;
            }
            return Array.isArray(l) ? E : Object.assign(Object.assign({}, l), {}, {parts: E});
          }
          switch (l.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
              let E = A(l.contents);
              return Object.assign(Object.assign({}, l), {}, {contents: E});
            }
            case "if-break": {
              let E = A(l.breakContents), y = A(l.flatContents);
              return Object.assign(Object.assign({}, l), {}, {breakContents: E, flatContents: y});
            }
          }
          return l;
        }
        function S(l) {
          return A(I(l));
        }
        function B(l) {
          switch (l.type) {
            case "fill":
              if (l.parts.every((y) => y === ""))
                return "";
              break;
            case "group":
              if (!l.contents && !l.id && !l.break && !l.expandedStates)
                return "";
              if (l.contents.type === "group" && l.contents.id === l.id && l.contents.break === l.break && l.contents.expandedStates === l.expandedStates)
                return l.contents;
              break;
            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!l.contents)
                return "";
              break;
            case "if-break":
              if (!l.flatContents && !l.breakContents)
                return "";
              break;
          }
          if (!r(l))
            return l;
          let E = [];
          for (let y of u(l)) {
            if (!y)
              continue;
            let [N, ...x] = r(y) ? u(y) : [y];
            typeof N == "string" && typeof t(E) == "string" ? E[E.length - 1] += N : E.push(N), E.push(...x);
          }
          return E.length === 0 ? "" : E.length === 1 ? E[0] : Array.isArray(l) ? E : Object.assign(Object.assign({}, l), {}, {parts: E});
        }
        function I(l) {
          return c(l, (E) => B(E));
        }
        function k(l) {
          let E = [], y = l.filter(Boolean);
          for (; y.length > 0; ) {
            let N = y.shift();
            if (!!N) {
              if (r(N)) {
                y.unshift(...u(N));
                continue;
              }
              if (E.length > 0 && typeof t(E) == "string" && typeof N == "string") {
                E[E.length - 1] += N;
                continue;
              }
              E.push(N);
            }
          }
          return E;
        }
        function P(l) {
          return c(l, (E) => Array.isArray(E) ? k(E) : E.parts ? Object.assign(Object.assign({}, E), {}, {parts: k(E.parts)}) : E);
        }
        function C(l) {
          return c(l, (E) => typeof E == "string" && E.includes(`
`) ? D(E) : E);
        }
        function D(l) {
          let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
          return a(E, l.split(`
`)).parts;
        }
        function g(l) {
          if (l.type === "line")
            return true;
        }
        function F(l) {
          return v(l, g, false);
        }
        n.exports = {isConcat: r, getDocParts: u, willBreak: d, traverseDoc: o, findInDoc: v, mapDoc: c, propagateBreaks: f, removeLines: w, stripTrailingHardline: S, normalizeParts: k, normalizeDoc: P, cleanDoc: I, replaceTextEndOfLine: D, replaceEndOfLine: C, canBreak: F};
      }}), yD = Z({"src/document/doc-printer.js"(e, n) {
        re();
        var {convertEndOfLineToChars: t} = jn(), s = it(), a = Ca(), {fill: r, cursor: u, indent: i} = Ln(), {isConcat: o, getDocParts: c} = On(), v, m = 1, d = 2;
        function p() {
          return {value: "", length: 0, queue: []};
        }
        function f(B, I) {
          return w(B, {type: "indent"}, I);
        }
        function h(B, I, k) {
          return I === Number.NEGATIVE_INFINITY ? B.root || p() : I < 0 ? w(B, {type: "dedent"}, k) : I ? I.type === "root" ? Object.assign(Object.assign({}, B), {}, {root: B}) : w(B, {type: typeof I == "string" ? "stringAlign" : "numberAlign", n: I}, k) : B;
        }
        function w(B, I, k) {
          let P = I.type === "dedent" ? B.queue.slice(0, -1) : [...B.queue, I], C = "", D = 0, g = 0, F = 0;
          for (let L of P)
            switch (L.type) {
              case "indent":
                y(), k.useTabs ? l(1) : E(k.tabWidth);
                break;
              case "stringAlign":
                y(), C += L.n, D += L.n.length;
                break;
              case "numberAlign":
                g += 1, F += L.n;
                break;
              default:
                throw new Error("Unexpected type '".concat(L.type, "'"));
            }
          return x(), Object.assign(Object.assign({}, B), {}, {value: C, length: D, queue: P});
          function l(L) {
            C += "	".repeat(L), D += k.tabWidth * L;
          }
          function E(L) {
            C += " ".repeat(L), D += L;
          }
          function y() {
            k.useTabs ? N() : x();
          }
          function N() {
            g > 0 && l(g), b();
          }
          function x() {
            F > 0 && E(F), b();
          }
          function b() {
            g = 0, F = 0;
          }
        }
        function T(B) {
          if (B.length === 0)
            return 0;
          let I = 0;
          for (; B.length > 0 && typeof s(B) == "string" && /^[\t ]*$/.test(s(B)); )
            I += B.pop().length;
          if (B.length > 0 && typeof s(B) == "string") {
            let k = s(B).replace(/[\t ]*$/, "");
            I += s(B).length - k.length, B[B.length - 1] = k;
          }
          return I;
        }
        function A(B, I, k, P, C, D) {
          let g = I.length, F = [B], l = [];
          for (; k >= 0; ) {
            if (F.length === 0) {
              if (g === 0)
                return true;
              F.push(I[g - 1]), g--;
              continue;
            }
            let [E, y, N] = F.pop();
            if (typeof N == "string")
              l.push(N), k -= a(N);
            else if (o(N)) {
              let x = c(N);
              for (let b = x.length - 1; b >= 0; b--)
                F.push([E, y, x[b]]);
            } else
              switch (N.type) {
                case "indent":
                  F.push([f(E, P), y, N.contents]);
                  break;
                case "align":
                  F.push([h(E, N.n, P), y, N.contents]);
                  break;
                case "trim":
                  k += T(l);
                  break;
                case "group": {
                  if (D && N.break)
                    return false;
                  let x = N.break ? m : y;
                  F.push([E, x, N.expandedStates && x === m ? s(N.expandedStates) : N.contents]), N.id && (v[N.id] = x);
                  break;
                }
                case "fill":
                  for (let x = N.parts.length - 1; x >= 0; x--)
                    F.push([E, y, N.parts[x]]);
                  break;
                case "if-break":
                case "indent-if-break": {
                  let x = N.groupId ? v[N.groupId] : y;
                  if (x === m) {
                    let b = N.type === "if-break" ? N.breakContents : N.negate ? N.contents : i(N.contents);
                    b && F.push([E, y, b]);
                  }
                  if (x === d) {
                    let b = N.type === "if-break" ? N.flatContents : N.negate ? i(N.contents) : N.contents;
                    b && F.push([E, y, b]);
                  }
                  break;
                }
                case "line":
                  switch (y) {
                    case d:
                      if (!N.hard) {
                        N.soft || (l.push(" "), k -= 1);
                        break;
                      }
                      return true;
                    case m:
                      return true;
                  }
                  break;
                case "line-suffix":
                  C = true;
                  break;
                case "line-suffix-boundary":
                  if (C)
                    return false;
                  break;
                case "label":
                  F.push([E, y, N.contents]);
                  break;
              }
          }
          return false;
        }
        function S(B, I) {
          v = {};
          let k = I.printWidth, P = t(I.endOfLine), C = 0, D = [[p(), m, B]], g = [], F = false, l = [];
          for (; D.length > 0; ) {
            let [y, N, x] = D.pop();
            if (typeof x == "string") {
              let b = P !== `
` ? x.replace(/\n/g, P) : x;
              g.push(b), C += a(b);
            } else if (o(x)) {
              let b = c(x);
              for (let L = b.length - 1; L >= 0; L--)
                D.push([y, N, b[L]]);
            } else
              switch (x.type) {
                case "cursor":
                  g.push(u.placeholder);
                  break;
                case "indent":
                  D.push([f(y, I), N, x.contents]);
                  break;
                case "align":
                  D.push([h(y, x.n, I), N, x.contents]);
                  break;
                case "trim":
                  C -= T(g);
                  break;
                case "group":
                  switch (N) {
                    case d:
                      if (!F) {
                        D.push([y, x.break ? m : d, x.contents]);
                        break;
                      }
                    case m: {
                      F = false;
                      let b = [y, d, x.contents], L = k - C, M = l.length > 0;
                      if (!x.break && A(b, D, L, I, M))
                        D.push(b);
                      else if (x.expandedStates) {
                        let j = s(x.expandedStates);
                        if (x.break) {
                          D.push([y, m, j]);
                          break;
                        } else
                          for (let $ = 1; $ < x.expandedStates.length + 1; $++)
                            if ($ >= x.expandedStates.length) {
                              D.push([y, m, j]);
                              break;
                            } else {
                              let V = x.expandedStates[$], q = [y, d, V];
                              if (A(q, D, L, I, M)) {
                                D.push(q);
                                break;
                              }
                            }
                      } else
                        D.push([y, m, x.contents]);
                      break;
                    }
                  }
                  x.id && (v[x.id] = s(D)[1]);
                  break;
                case "fill": {
                  let b = k - C, {parts: L} = x;
                  if (L.length === 0)
                    break;
                  let [M, j] = L, $ = [y, d, M], V = [y, m, M], q = A($, [], b, I, l.length > 0, true);
                  if (L.length === 1) {
                    q ? D.push($) : D.push(V);
                    break;
                  }
                  let Y = [y, d, j], H = [y, m, j];
                  if (L.length === 2) {
                    q ? D.push(Y, $) : D.push(H, V);
                    break;
                  }
                  L.splice(0, 2);
                  let R = [y, N, r(L)], Q = L[0];
                  A([y, d, [M, j, Q]], [], b, I, l.length > 0, true) ? D.push(R, Y, $) : q ? D.push(R, H, $) : D.push(R, H, V);
                  break;
                }
                case "if-break":
                case "indent-if-break": {
                  let b = x.groupId ? v[x.groupId] : N;
                  if (b === m) {
                    let L = x.type === "if-break" ? x.breakContents : x.negate ? x.contents : i(x.contents);
                    L && D.push([y, N, L]);
                  }
                  if (b === d) {
                    let L = x.type === "if-break" ? x.flatContents : x.negate ? i(x.contents) : x.contents;
                    L && D.push([y, N, L]);
                  }
                  break;
                }
                case "line-suffix":
                  l.push([y, N, x.contents]);
                  break;
                case "line-suffix-boundary":
                  l.length > 0 && D.push([y, N, {type: "line", hard: true}]);
                  break;
                case "line":
                  switch (N) {
                    case d:
                      if (x.hard)
                        F = true;
                      else {
                        x.soft || (g.push(" "), C += 1);
                        break;
                      }
                    case m:
                      if (l.length > 0) {
                        D.push([y, N, x], ...l.reverse()), l = [];
                        break;
                      }
                      x.literal ? y.root ? (g.push(P, y.root.value), C = y.root.length) : (g.push(P), C = 0) : (C -= T(g), g.push(P + y.value), C = y.length);
                      break;
                  }
                  break;
                case "label":
                  D.push([y, N, x.contents]);
                  break;
              }
            D.length === 0 && l.length > 0 && (D.push(...l.reverse()), l = []);
          }
          let E = g.indexOf(u.placeholder);
          if (E !== -1) {
            let y = g.indexOf(u.placeholder, E + 1), N = g.slice(0, E).join(""), x = g.slice(E + 1, y).join(""), b = g.slice(y + 1).join("");
            return {formatted: N + x + b, cursorNodeStart: N.length, cursorNodeText: x};
          }
          return {formatted: g.join("")};
        }
        n.exports = {printDocToString: S};
      }}), hD = Z({"src/document/doc-debug.js"(e, n) {
        re();
        var {isConcat: t, getDocParts: s} = On();
        function a(u) {
          if (!u)
            return "";
          if (t(u)) {
            let i = [];
            for (let o of s(u))
              if (t(o))
                i.push(...a(o).parts);
              else {
                let c = a(o);
                c !== "" && i.push(c);
              }
            return {type: "concat", parts: i};
          }
          return u.type === "if-break" ? Object.assign(Object.assign({}, u), {}, {breakContents: a(u.breakContents), flatContents: a(u.flatContents)}) : u.type === "group" ? Object.assign(Object.assign({}, u), {}, {contents: a(u.contents), expandedStates: u.expandedStates && u.expandedStates.map(a)}) : u.type === "fill" ? {type: "fill", parts: u.parts.map(a)} : u.contents ? Object.assign(Object.assign({}, u), {}, {contents: a(u.contents)}) : u;
        }
        function r(u) {
          let i = Object.create(null), o = new Set();
          return c(a(u));
          function c(m, d, p) {
            if (typeof m == "string")
              return JSON.stringify(m);
            if (t(m)) {
              let f = s(m).map(c).filter(Boolean);
              return f.length === 1 ? f[0] : "[".concat(f.join(", "), "]");
            }
            if (m.type === "line") {
              let f = Array.isArray(p) && p[d + 1] && p[d + 1].type === "break-parent";
              return m.literal ? f ? "literalline" : "literallineWithoutBreakParent" : m.hard ? f ? "hardline" : "hardlineWithoutBreakParent" : m.soft ? "softline" : "line";
            }
            if (m.type === "break-parent")
              return Array.isArray(p) && p[d - 1] && p[d - 1].type === "line" && p[d - 1].hard ? void 0 : "breakParent";
            if (m.type === "trim")
              return "trim";
            if (m.type === "indent")
              return "indent(" + c(m.contents) + ")";
            if (m.type === "align")
              return m.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + c(m.contents) + ")" : m.n < 0 ? "dedent(" + c(m.contents) + ")" : m.n.type === "root" ? "markAsRoot(" + c(m.contents) + ")" : "align(" + JSON.stringify(m.n) + ", " + c(m.contents) + ")";
            if (m.type === "if-break")
              return "ifBreak(" + c(m.breakContents) + (m.flatContents ? ", " + c(m.flatContents) : "") + (m.groupId ? (m.flatContents ? "" : ', ""') + ", { groupId: ".concat(v(m.groupId), " }") : "") + ")";
            if (m.type === "indent-if-break") {
              let f = [];
              m.negate && f.push("negate: true"), m.groupId && f.push("groupId: ".concat(v(m.groupId)));
              let h = f.length > 0 ? ", { ".concat(f.join(", "), " }") : "";
              return "indentIfBreak(".concat(c(m.contents)).concat(h, ")");
            }
            if (m.type === "group") {
              let f = [];
              m.break && m.break !== "propagated" && f.push("shouldBreak: true"), m.id && f.push("id: ".concat(v(m.id)));
              let h = f.length > 0 ? ", { ".concat(f.join(", "), " }") : "";
              return m.expandedStates ? "conditionalGroup([".concat(m.expandedStates.map((w) => c(w)).join(","), "]").concat(h, ")") : "group(".concat(c(m.contents)).concat(h, ")");
            }
            if (m.type === "fill")
              return "fill([".concat(m.parts.map((f) => c(f)).join(", "), "])");
            if (m.type === "line-suffix")
              return "lineSuffix(" + c(m.contents) + ")";
            if (m.type === "line-suffix-boundary")
              return "lineSuffixBoundary";
            if (m.type === "label")
              return "label(".concat(JSON.stringify(m.label), ", ").concat(c(m.contents), ")");
            throw new Error("Unknown doc type " + m.type);
          }
          function v(m) {
            if (typeof m != "symbol")
              return JSON.stringify(String(m));
            if (m in i)
              return i[m];
            let d = String(m).slice(7, -1) || "symbol";
            for (let p = 0; ; p++) {
              let f = d + (p > 0 ? " #".concat(p) : "");
              if (!o.has(f))
                return o.add(f), i[m] = "Symbol.for(".concat(JSON.stringify(f), ")");
            }
          }
        }
        n.exports = {printDocToDebug: r};
      }}), Oe = Z({"src/document/index.js"(e, n) {
        re(), n.exports = {builders: Ln(), printer: yD(), utils: On(), debug: hD()};
      }}), Ea = {};
      Ut(Ea, {default: () => vD});
      function vD(e) {
        if (typeof e != "string")
          throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var CD = mt({"node_modules/escape-string-regexp/index.js"() {
        re();
      }}), Fa = Z({"node_modules/semver/internal/debug.js"(e, n) {
        re();
        var t = typeof Tt == "object" && Tt.env && Tt.env.NODE_DEBUG && /\bsemver\b/i.test(Tt.env.NODE_DEBUG) ? function() {
          for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++)
            a[r] = arguments[r];
          return console.error("SEMVER", ...a);
        } : () => {
        };
        n.exports = t;
      }}), Aa = Z({"node_modules/semver/internal/constants.js"(e, n) {
        re();
        var t = "2.0.0", s = 256, a = Number.MAX_SAFE_INTEGER || 9007199254740991, r = 16;
        n.exports = {SEMVER_SPEC_VERSION: t, MAX_LENGTH: s, MAX_SAFE_INTEGER: a, MAX_SAFE_COMPONENT_LENGTH: r};
      }}), ED = Z({"node_modules/semver/internal/re.js"(e, n) {
        re();
        var {MAX_SAFE_COMPONENT_LENGTH: t} = Aa(), s = Fa();
        e = n.exports = {};
        var a = e.re = [], r = e.src = [], u = e.t = {}, i = 0, o = (c, v, m) => {
          let d = i++;
          s(c, d, v), u[c] = d, r[d] = v, a[d] = new RegExp(v, m ? "g" : void 0);
        };
        o("NUMERICIDENTIFIER", "0|[1-9]\\d*"), o("NUMERICIDENTIFIERLOOSE", "[0-9]+"), o("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), o("MAINVERSION", "(".concat(r[u.NUMERICIDENTIFIER], ")\\.(").concat(r[u.NUMERICIDENTIFIER], ")\\.(").concat(r[u.NUMERICIDENTIFIER], ")")), o("MAINVERSIONLOOSE", "(".concat(r[u.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(r[u.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(r[u.NUMERICIDENTIFIERLOOSE], ")")), o("PRERELEASEIDENTIFIER", "(?:".concat(r[u.NUMERICIDENTIFIER], "|").concat(r[u.NONNUMERICIDENTIFIER], ")")), o("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(r[u.NUMERICIDENTIFIERLOOSE], "|").concat(r[u.NONNUMERICIDENTIFIER], ")")), o("PRERELEASE", "(?:-(".concat(r[u.PRERELEASEIDENTIFIER], "(?:\\.").concat(r[u.PRERELEASEIDENTIFIER], ")*))")), o("PRERELEASELOOSE", "(?:-?(".concat(r[u.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(r[u.PRERELEASEIDENTIFIERLOOSE], ")*))")), o("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), o("BUILD", "(?:\\+(".concat(r[u.BUILDIDENTIFIER], "(?:\\.").concat(r[u.BUILDIDENTIFIER], ")*))")), o("FULLPLAIN", "v?".concat(r[u.MAINVERSION]).concat(r[u.PRERELEASE], "?").concat(r[u.BUILD], "?")), o("FULL", "^".concat(r[u.FULLPLAIN], "$")), o("LOOSEPLAIN", "[v=\\s]*".concat(r[u.MAINVERSIONLOOSE]).concat(r[u.PRERELEASELOOSE], "?").concat(r[u.BUILD], "?")), o("LOOSE", "^".concat(r[u.LOOSEPLAIN], "$")), o("GTLT", "((?:<|>)?=?)"), o("XRANGEIDENTIFIERLOOSE", "".concat(r[u.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), o("XRANGEIDENTIFIER", "".concat(r[u.NUMERICIDENTIFIER], "|x|X|\\*")), o("XRANGEPLAIN", "[v=\\s]*(".concat(r[u.XRANGEIDENTIFIER], ")(?:\\.(").concat(r[u.XRANGEIDENTIFIER], ")(?:\\.(").concat(r[u.XRANGEIDENTIFIER], ")(?:").concat(r[u.PRERELEASE], ")?").concat(r[u.BUILD], "?)?)?")), o("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(r[u.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(r[u.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(r[u.XRANGEIDENTIFIERLOOSE], ")(?:").concat(r[u.PRERELEASELOOSE], ")?").concat(r[u.BUILD], "?)?)?")), o("XRANGE", "^".concat(r[u.GTLT], "\\s*").concat(r[u.XRANGEPLAIN], "$")), o("XRANGELOOSE", "^".concat(r[u.GTLT], "\\s*").concat(r[u.XRANGEPLAINLOOSE], "$")), o("COERCE", "(^|[^\\d])(\\d{1,".concat(t, "})(?:\\.(\\d{1,").concat(t, "}))?(?:\\.(\\d{1,").concat(t, "}))?(?:$|[^\\d])")), o("COERCERTL", r[u.COERCE], true), o("LONETILDE", "(?:~>?)"), o("TILDETRIM", "(\\s*)".concat(r[u.LONETILDE], "\\s+"), true), e.tildeTrimReplace = "$1~", o("TILDE", "^".concat(r[u.LONETILDE]).concat(r[u.XRANGEPLAIN], "$")), o("TILDELOOSE", "^".concat(r[u.LONETILDE]).concat(r[u.XRANGEPLAINLOOSE], "$")), o("LONECARET", "(?:\\^)"), o("CARETTRIM", "(\\s*)".concat(r[u.LONECARET], "\\s+"), true), e.caretTrimReplace = "$1^", o("CARET", "^".concat(r[u.LONECARET]).concat(r[u.XRANGEPLAIN], "$")), o("CARETLOOSE", "^".concat(r[u.LONECARET]).concat(r[u.XRANGEPLAINLOOSE], "$")), o("COMPARATORLOOSE", "^".concat(r[u.GTLT], "\\s*(").concat(r[u.LOOSEPLAIN], ")$|^$")), o("COMPARATOR", "^".concat(r[u.GTLT], "\\s*(").concat(r[u.FULLPLAIN], ")$|^$")), o("COMPARATORTRIM", "(\\s*)".concat(r[u.GTLT], "\\s*(").concat(r[u.LOOSEPLAIN], "|").concat(r[u.XRANGEPLAIN], ")"), true), e.comparatorTrimReplace = "$1$2$3", o("HYPHENRANGE", "^\\s*(".concat(r[u.XRANGEPLAIN], ")\\s+-\\s+(").concat(r[u.XRANGEPLAIN], ")\\s*$")), o("HYPHENRANGELOOSE", "^\\s*(".concat(r[u.XRANGEPLAINLOOSE], ")\\s+-\\s+(").concat(r[u.XRANGEPLAINLOOSE], ")\\s*$")), o("STAR", "(<|>)?=?\\s*\\*"), o("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), o("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      }}), FD = Z({"node_modules/semver/internal/parse-options.js"(e, n) {
        re();
        var t = ["includePrerelease", "loose", "rtl"], s = (a) => a ? typeof a != "object" ? {loose: true} : t.filter((r) => a[r]).reduce((r, u) => (r[u] = true, r), {}) : {};
        n.exports = s;
      }}), AD = Z({"node_modules/semver/internal/identifiers.js"(e, n) {
        re();
        var t = /^[0-9]+$/, s = (r, u) => {
          let i = t.test(r), o = t.test(u);
          return i && o && (r = +r, u = +u), r === u ? 0 : i && !o ? -1 : o && !i ? 1 : r < u ? -1 : 1;
        }, a = (r, u) => s(u, r);
        n.exports = {compareIdentifiers: s, rcompareIdentifiers: a};
      }}), SD = Z({"node_modules/semver/classes/semver.js"(e, n) {
        re();
        var t = Fa(), {MAX_LENGTH: s, MAX_SAFE_INTEGER: a} = Aa(), {re: r, t: u} = ED(), i = FD(), {compareIdentifiers: o} = AD(), c = class {
          constructor(v, m) {
            if (m = i(m), v instanceof c) {
              if (v.loose === !!m.loose && v.includePrerelease === !!m.includePrerelease)
                return v;
              v = v.version;
            } else if (typeof v != "string")
              throw new TypeError("Invalid Version: ".concat(v));
            if (v.length > s)
              throw new TypeError("version is longer than ".concat(s, " characters"));
            t("SemVer", v, m), this.options = m, this.loose = !!m.loose, this.includePrerelease = !!m.includePrerelease;
            let d = v.trim().match(m.loose ? r[u.LOOSE] : r[u.FULL]);
            if (!d)
              throw new TypeError("Invalid Version: ".concat(v));
            if (this.raw = v, this.major = +d[1], this.minor = +d[2], this.patch = +d[3], this.major > a || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > a || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > a || this.patch < 0)
              throw new TypeError("Invalid patch version");
            d[4] ? this.prerelease = d[4].split(".").map((p) => {
              if (/^[0-9]+$/.test(p)) {
                let f = +p;
                if (f >= 0 && f < a)
                  return f;
              }
              return p;
            }) : this.prerelease = [], this.build = d[5] ? d[5].split(".") : [], this.format();
          }
          format() {
            return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
          }
          toString() {
            return this.version;
          }
          compare(v) {
            if (t("SemVer.compare", this.version, this.options, v), !(v instanceof c)) {
              if (typeof v == "string" && v === this.version)
                return 0;
              v = new c(v, this.options);
            }
            return v.version === this.version ? 0 : this.compareMain(v) || this.comparePre(v);
          }
          compareMain(v) {
            return v instanceof c || (v = new c(v, this.options)), o(this.major, v.major) || o(this.minor, v.minor) || o(this.patch, v.patch);
          }
          comparePre(v) {
            if (v instanceof c || (v = new c(v, this.options)), this.prerelease.length && !v.prerelease.length)
              return -1;
            if (!this.prerelease.length && v.prerelease.length)
              return 1;
            if (!this.prerelease.length && !v.prerelease.length)
              return 0;
            let m = 0;
            do {
              let d = this.prerelease[m], p = v.prerelease[m];
              if (t("prerelease compare", m, d, p), d === void 0 && p === void 0)
                return 0;
              if (p === void 0)
                return 1;
              if (d === void 0)
                return -1;
              if (d === p)
                continue;
              return o(d, p);
            } while (++m);
          }
          compareBuild(v) {
            v instanceof c || (v = new c(v, this.options));
            let m = 0;
            do {
              let d = this.build[m], p = v.build[m];
              if (t("prerelease compare", m, d, p), d === void 0 && p === void 0)
                return 0;
              if (p === void 0)
                return 1;
              if (d === void 0)
                return -1;
              if (d === p)
                continue;
              return o(d, p);
            } while (++m);
          }
          inc(v, m) {
            switch (v) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", m), this.inc("pre", m);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", m), this.inc("pre", m);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let d = this.prerelease.length;
                  for (; --d >= 0; )
                    typeof this.prerelease[d] == "number" && (this.prerelease[d]++, d = -2);
                  d === -1 && this.prerelease.push(0);
                }
                m && (o(this.prerelease[0], m) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [m, 0]) : this.prerelease = [m, 0]);
                break;
              default:
                throw new Error("invalid increment argument: ".concat(v));
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        n.exports = c;
      }}), qn = Z({"node_modules/semver/functions/compare.js"(e, n) {
        re();
        var t = SD(), s = (a, r, u) => new t(a, u).compare(new t(r, u));
        n.exports = s;
      }}), xD = Z({"node_modules/semver/functions/lt.js"(e, n) {
        re();
        var t = qn(), s = (a, r, u) => t(a, r, u) < 0;
        n.exports = s;
      }}), bD = Z({"node_modules/semver/functions/gte.js"(e, n) {
        re();
        var t = qn(), s = (a, r, u) => t(a, r, u) >= 0;
        n.exports = s;
      }}), TD = Z({"src/utils/arrayify.js"(e, n) {
        re(), n.exports = (t, s) => Object.entries(t).map((a) => {
          let [r, u] = a;
          return Object.assign({[s]: r}, u);
        });
      }}), BD = Z({"node_modules/outdent/lib/index.js"(e, n) {
        re(), Object.defineProperty(e, "__esModule", {value: true}), e.outdent = void 0;
        function t() {
          for (var A = [], S = 0; S < arguments.length; S++)
            A[S] = arguments[S];
        }
        function s() {
          return typeof WeakMap < "u" ? new WeakMap() : a();
        }
        function a() {
          return {add: t, delete: t, get: t, set: t, has: function(A) {
            return false;
          }};
        }
        var r = Object.prototype.hasOwnProperty, u = function(A, S) {
          return r.call(A, S);
        };
        function i(A, S) {
          for (var B in S)
            u(S, B) && (A[B] = S[B]);
          return A;
        }
        var o = /^[ \t]*(?:\r\n|\r|\n)/, c = /(?:\r\n|\r|\n)[ \t]*$/, v = /^(?:[\r\n]|$)/, m = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, d = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function p(A, S, B) {
          var I = 0, k = A[0].match(m);
          k && (I = k[1].length);
          var P = "(\\r\\n|\\r|\\n).{0," + I + "}", C = new RegExp(P, "g");
          S && (A = A.slice(1));
          var D = B.newline, g = B.trimLeadingNewline, F = B.trimTrailingNewline, l = typeof D == "string", E = A.length, y = A.map(function(N, x) {
            return N = N.replace(C, "$1"), x === 0 && g && (N = N.replace(o, "")), x === E - 1 && F && (N = N.replace(c, "")), l && (N = N.replace(/\r\n|\n|\r/g, function(b) {
              return D;
            })), N;
          });
          return y;
        }
        function f(A, S) {
          for (var B = "", I = 0, k = A.length; I < k; I++)
            B += A[I], I < k - 1 && (B += S[I]);
          return B;
        }
        function h(A) {
          return u(A, "raw") && u(A, "length");
        }
        function w(A) {
          var S = s(), B = s();
          function I(P) {
            for (var C = [], D = 1; D < arguments.length; D++)
              C[D - 1] = arguments[D];
            if (h(P)) {
              var g = P, F = (C[0] === I || C[0] === T) && d.test(g[0]) && v.test(g[1]), l = F ? B : S, E = l.get(g);
              if (E || (E = p(g, F, A), l.set(g, E)), C.length === 0)
                return E[0];
              var y = f(E, F ? C.slice(1) : C);
              return y;
            } else
              return w(i(i({}, A), P || {}));
          }
          var k = i(I, {string: function(P) {
            return p([P], false, A)[0];
          }});
          return k;
        }
        var T = w({trimLeadingNewline: true, trimTrailingNewline: true});
        if (e.outdent = T, e.default = T, typeof n < "u")
          try {
            n.exports = T, Object.defineProperty(T, "__esModule", {value: true}), T.default = T, T.outdent = T;
          } catch (e2) {
          }
      }}), ND = Z({"src/main/core-options.js"(e, n) {
        re();
        var {outdent: t} = BD(), s = "Config", a = "Editor", r = "Format", u = "Other", i = "Output", o = "Global", c = "Special", v = {cursorOffset: {since: "1.4.0", category: c, type: "int", default: -1, range: {start: -1, end: Number.POSITIVE_INFINITY, step: 1}, description: t(sa || (sa = Pt([`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `]))), cliCategory: a}, endOfLine: {since: "1.15.0", category: o, type: "choice", default: [{since: "1.15.0", value: "auto"}, {since: "2.0.0", value: "lf"}], description: "Which end of line characters to apply.", choices: [{value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"}, {value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"}, {value: "cr", description: "Carriage Return character only (\\r), used very rarely"}, {value: "auto", description: t(ia || (ia = Pt([`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `])))}]}, filepath: {since: "1.4.0", category: c, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: u, cliDescription: "Path to the file to pretend that stdin comes from."}, insertPragma: {since: "1.8.0", category: c, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: u}, parser: {since: "0.0.10", category: o, type: "choice", default: [{since: "0.0.10", value: "babylon"}, {since: "1.13.0", value: void 0}], description: "Which parser to use.", exception: (m) => typeof m == "string" || typeof m == "function", choices: [{value: "flow", description: "Flow"}, {value: "babel", since: "1.16.0", description: "JavaScript"}, {value: "babel-flow", since: "1.16.0", description: "Flow"}, {value: "babel-ts", since: "2.0.0", description: "TypeScript"}, {value: "typescript", since: "1.4.0", description: "TypeScript"}, {value: "acorn", since: "2.6.0", description: "JavaScript"}, {value: "espree", since: "2.2.0", description: "JavaScript"}, {value: "meriyah", since: "2.2.0", description: "JavaScript"}, {value: "css", since: "1.7.1", description: "CSS"}, {value: "less", since: "1.7.1", description: "Less"}, {value: "scss", since: "1.7.1", description: "SCSS"}, {value: "json", since: "1.5.0", description: "JSON"}, {value: "json5", since: "1.13.0", description: "JSON5"}, {value: "json-stringify", since: "1.13.0", description: "JSON.stringify"}, {value: "graphql", since: "1.5.0", description: "GraphQL"}, {value: "markdown", since: "1.8.0", description: "Markdown"}, {value: "mdx", since: "1.15.0", description: "MDX"}, {value: "vue", since: "1.10.0", description: "Vue"}, {value: "yaml", since: "1.14.0", description: "YAML"}, {value: "glimmer", since: "2.3.0", description: "Ember / Handlebars"}, {value: "html", since: "1.15.0", description: "HTML"}, {value: "angular", since: "1.15.0", description: "Angular"}, {value: "lwc", since: "1.17.0", description: "Lightning Web Components"}]}, plugins: {since: "1.10.0", type: "path", array: true, default: [{value: []}], category: o, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (m) => typeof m == "string" || typeof m == "object", cliName: "plugin", cliCategory: s}, pluginSearchDirs: {since: "1.13.0", type: "path", array: true, default: [{value: []}], category: o, description: t(aa || (aa = Pt([`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `]))), exception: (m) => typeof m == "string" || typeof m == "object", cliName: "plugin-search-dir", cliCategory: s}, printWidth: {since: "0.0.0", category: o, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: {start: 0, end: Number.POSITIVE_INFINITY, step: 1}}, rangeEnd: {since: "1.4.0", category: c, type: "int", default: Number.POSITIVE_INFINITY, range: {start: 0, end: Number.POSITIVE_INFINITY, step: 1}, description: t(oa || (oa = Pt([`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `]))), cliCategory: a}, rangeStart: {since: "1.4.0", category: c, type: "int", default: 0, range: {start: 0, end: Number.POSITIVE_INFINITY, step: 1}, description: t(la || (la = Pt([`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `]))), cliCategory: a}, requirePragma: {since: "1.7.0", category: c, type: "boolean", default: false, description: t(ca || (ca = Pt([`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `]))), cliCategory: u}, tabWidth: {type: "int", category: o, default: 2, description: "Number of spaces per indentation level.", range: {start: 0, end: Number.POSITIVE_INFINITY, step: 1}}, useTabs: {since: "1.0.0", category: o, type: "boolean", default: false, description: "Indent with tabs instead of spaces."}, embeddedLanguageFormatting: {since: "2.1.0", category: o, type: "choice", default: [{since: "2.1.0", value: "auto"}], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{value: "auto", description: "Format embedded code if Prettier can automatically identify it."}, {value: "off", description: "Never automatically format embedded code."}]}};
        n.exports = {CATEGORY_CONFIG: s, CATEGORY_EDITOR: a, CATEGORY_FORMAT: r, CATEGORY_OTHER: u, CATEGORY_OUTPUT: i, CATEGORY_GLOBAL: o, CATEGORY_SPECIAL: c, options: v};
      }}), Mn = Z({"src/main/support.js"(e, n) {
        re();
        var t = {compare: qn(), lt: xD(), gte: bD()}, s = TD(), a = ya().version, r = ND().options;
        function u() {
          let {plugins: o = [], showUnreleased: c = false, showDeprecated: v = false, showInternal: m = false} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = a.split("-", 1)[0], p = o.flatMap((A) => A.languages || []).filter(h), f = s(Object.assign({}, ...o.map((A) => {
            let {options: S} = A;
            return S;
          }), r), "name").filter((A) => h(A) && w(A)).sort((A, S) => A.name === S.name ? 0 : A.name < S.name ? -1 : 1).map(T).map((A) => {
            A = Object.assign({}, A), Array.isArray(A.default) && (A.default = A.default.length === 1 ? A.default[0].value : A.default.filter(h).sort((B, I) => t.compare(I.since, B.since))[0].value), Array.isArray(A.choices) && (A.choices = A.choices.filter((B) => h(B) && w(B)), A.name === "parser" && i(A, p, o));
            let S = Object.fromEntries(o.filter((B) => B.defaultOptions && B.defaultOptions[A.name] !== void 0).map((B) => [B.name, B.defaultOptions[A.name]]));
            return Object.assign(Object.assign({}, A), {}, {pluginDefaults: S});
          });
          return {languages: p, options: f};
          function h(A) {
            return c || !("since" in A) || A.since && t.gte(d, A.since);
          }
          function w(A) {
            return v || !("deprecated" in A) || A.deprecated && t.lt(d, A.deprecated);
          }
          function T(A) {
            if (m)
              return A;
            return kn(A, Yf);
          }
        }
        function i(o, c, v) {
          let m = new Set(o.choices.map((d) => d.value));
          for (let d of c)
            if (d.parsers) {
              for (let p of d.parsers)
                if (!m.has(p)) {
                  m.add(p);
                  let f = v.find((w) => w.parsers && w.parsers[p]), h = d.name;
                  f && f.name && (h += " (plugin: ".concat(f.name, ")")), o.choices.push({value: p, description: h});
                }
            }
        }
        n.exports = {getSupportInfo: u};
      }}), Rn = Z({"src/utils/is-non-empty-array.js"(e, n) {
        re();
        function t(s) {
          return Array.isArray(s) && s.length > 0;
        }
        n.exports = t;
      }}), Nr = Z({"src/utils/text/skip.js"(e, n) {
        re();
        function t(i) {
          return (o, c, v) => {
            let m = v && v.backwards;
            if (c === false)
              return false;
            let {length: d} = o, p = c;
            for (; p >= 0 && p < d; ) {
              let f = o.charAt(p);
              if (i instanceof RegExp) {
                if (!i.test(f))
                  return p;
              } else if (!i.includes(f))
                return p;
              m ? p-- : p++;
            }
            return p === -1 || p === d ? p : false;
          };
        }
        var s = t(/\s/), a = t(" 	"), r = t(",; 	"), u = t(/[^\n\r]/);
        n.exports = {skipWhitespace: s, skipSpaces: a, skipToLineEnd: r, skipEverythingButNewLine: u};
      }}), Sa = Z({"src/utils/text/skip-inline-comment.js"(e, n) {
        re();
        function t(s, a) {
          if (a === false)
            return false;
          if (s.charAt(a) === "/" && s.charAt(a + 1) === "*") {
            for (let r = a + 2; r < s.length; ++r)
              if (s.charAt(r) === "*" && s.charAt(r + 1) === "/")
                return r + 2;
          }
          return a;
        }
        n.exports = t;
      }}), xa = Z({"src/utils/text/skip-trailing-comment.js"(e, n) {
        re();
        var {skipEverythingButNewLine: t} = Nr();
        function s(a, r) {
          return r === false ? false : a.charAt(r) === "/" && a.charAt(r + 1) === "/" ? t(a, r) : r;
        }
        n.exports = s;
      }}), ba = Z({"src/utils/text/skip-newline.js"(e, n) {
        re();
        function t(s, a, r) {
          let u = r && r.backwards;
          if (a === false)
            return false;
          let i = s.charAt(a);
          if (u) {
            if (s.charAt(a - 1) === "\r" && i === `
`)
              return a - 2;
            if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
              return a - 1;
          } else {
            if (i === "\r" && s.charAt(a + 1) === `
`)
              return a + 2;
            if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
              return a + 1;
          }
          return a;
        }
        n.exports = t;
      }}), wD = Z({"src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, n) {
        re();
        var t = Sa(), s = ba(), a = xa(), {skipSpaces: r} = Nr();
        function u(i, o) {
          let c = null, v = o;
          for (; v !== c; )
            c = v, v = r(i, v), v = t(i, v), v = a(i, v), v = s(i, v);
          return v;
        }
        n.exports = u;
      }}), Ue = Z({"src/common/util.js"(e, n) {
        re();
        var {default: t} = (CD(), lt(Ea)), s = it(), {getSupportInfo: a} = Mn(), r = Rn(), u = Ca(), {skipWhitespace: i, skipSpaces: o, skipToLineEnd: c, skipEverythingButNewLine: v} = Nr(), m = Sa(), d = xa(), p = ba(), f = wD(), h = (H) => H[H.length - 2];
        function w(H) {
          return (R, Q, ee) => {
            let te = ee && ee.backwards;
            if (Q === false)
              return false;
            let {length: oe} = R, W = Q;
            for (; W >= 0 && W < oe; ) {
              let X = R.charAt(W);
              if (H instanceof RegExp) {
                if (!H.test(X))
                  return W;
              } else if (!H.includes(X))
                return W;
              te ? W-- : W++;
            }
            return W === -1 || W === oe ? W : false;
          };
        }
        function T(H, R) {
          let Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ee = o(H, Q.backwards ? R - 1 : R, Q), te = p(H, ee, Q);
          return ee !== te;
        }
        function A(H, R, Q) {
          for (let ee = R; ee < Q; ++ee)
            if (H.charAt(ee) === `
`)
              return true;
          return false;
        }
        function S(H, R, Q) {
          let ee = Q(R) - 1;
          ee = o(H, ee, {backwards: true}), ee = p(H, ee, {backwards: true}), ee = o(H, ee, {backwards: true});
          let te = p(H, ee, {backwards: true});
          return ee !== te;
        }
        function B(H, R) {
          let Q = null, ee = R;
          for (; ee !== Q; )
            Q = ee, ee = c(H, ee), ee = m(H, ee), ee = o(H, ee);
          return ee = d(H, ee), ee = p(H, ee), ee !== false && T(H, ee);
        }
        function I(H, R, Q) {
          return B(H, Q(R));
        }
        function k(H, R, Q) {
          return f(H, Q(R));
        }
        function P(H, R, Q) {
          return H.charAt(k(H, R, Q));
        }
        function C(H, R) {
          let Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return o(H, Q.backwards ? R - 1 : R, Q) !== R;
        }
        function D(H, R) {
          let Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, ee = 0;
          for (let te = Q; te < H.length; ++te)
            H[te] === "	" ? ee = ee + R - ee % R : ee++;
          return ee;
        }
        function g(H, R) {
          let Q = H.lastIndexOf(`
`);
          return Q === -1 ? 0 : D(H.slice(Q + 1).match(/^[\t ]*/)[0], R);
        }
        function F(H, R) {
          let Q = {quote: '"', regex: /"/g, escaped: "&quot;"}, ee = {quote: "'", regex: /'/g, escaped: "&apos;"}, te = R === "'" ? ee : Q, oe = te === ee ? Q : ee, W = te;
          if (H.includes(te.quote) || H.includes(oe.quote)) {
            let X = (H.match(te.regex) || []).length, ue = (H.match(oe.regex) || []).length;
            W = X > ue ? oe : te;
          }
          return W;
        }
        function l(H, R) {
          let Q = H.slice(1, -1), ee = R.parser === "json" || R.parser === "json5" && R.quoteProps === "preserve" && !R.singleQuote ? '"' : R.__isInHtmlAttribute ? "'" : F(Q, R.singleQuote ? "'" : '"').quote;
          return E(Q, ee, !(R.parser === "css" || R.parser === "less" || R.parser === "scss" || R.__embeddedInHtml));
        }
        function E(H, R, Q) {
          let ee = R === '"' ? "'" : '"', te = /\\(.)|(["'])/gs, oe = H.replace(te, (W, X, ue) => X === ee ? X : ue === R ? "\\" + ue : ue || (Q && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(X) ? X : "\\" + X));
          return R + oe + R;
        }
        function y(H) {
          return H.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function N(H, R) {
          let Q = H.match(new RegExp("(".concat(t(R), ")+"), "g"));
          return Q === null ? 0 : Q.reduce((ee, te) => Math.max(ee, te.length / R.length), 0);
        }
        function x(H, R) {
          let Q = H.match(new RegExp("(".concat(t(R), ")+"), "g"));
          if (Q === null)
            return 0;
          let ee = new Map(), te = 0;
          for (let oe of Q) {
            let W = oe.length / R.length;
            ee.set(W, true), W > te && (te = W);
          }
          for (let oe = 1; oe < te; oe++)
            if (!ee.get(oe))
              return oe;
          return te + 1;
        }
        function b(H, R) {
          (H.comments || (H.comments = [])).push(R), R.printed = false, R.nodeDescription = Y(H);
        }
        function L(H, R) {
          R.leading = true, R.trailing = false, b(H, R);
        }
        function M(H, R, Q) {
          R.leading = false, R.trailing = false, Q && (R.marker = Q), b(H, R);
        }
        function j(H, R) {
          R.leading = false, R.trailing = true, b(H, R);
        }
        function $(H, R) {
          let {languages: Q} = a({plugins: R.plugins}), ee = Q.find((te) => {
            let {name: oe} = te;
            return oe.toLowerCase() === H;
          }) || Q.find((te) => {
            let {aliases: oe} = te;
            return Array.isArray(oe) && oe.includes(H);
          }) || Q.find((te) => {
            let {extensions: oe} = te;
            return Array.isArray(oe) && oe.includes(".".concat(H));
          });
          return ee && ee.parsers[0];
        }
        function V(H) {
          return H && H.type === "front-matter";
        }
        function q(H) {
          let R = new WeakMap();
          return function(Q) {
            return R.has(Q) || R.set(Q, Symbol(H)), R.get(Q);
          };
        }
        function Y(H) {
          let R = H.type || H.kind || "(unknown type)", Q = String(H.name || H.id && (typeof H.id == "object" ? H.id.name : H.id) || H.key && (typeof H.key == "object" ? H.key.name : H.key) || H.value && (typeof H.value == "object" ? "" : String(H.value)) || H.operator || "");
          return Q.length > 20 && (Q = Q.slice(0, 19) + "…"), R + (Q ? " " + Q : "");
        }
        n.exports = {inferParserByLanguage: $, getStringWidth: u, getMaxContinuousCount: N, getMinNotPresentContinuousCount: x, getPenultimate: h, getLast: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: f, getNextNonSpaceNonCommentCharacterIndex: k, getNextNonSpaceNonCommentCharacter: P, skip: w, skipWhitespace: i, skipSpaces: o, skipToLineEnd: c, skipEverythingButNewLine: v, skipInlineComment: m, skipTrailingComment: d, skipNewline: p, isNextLineEmptyAfterIndex: B, isNextLineEmpty: I, isPreviousLineEmpty: S, hasNewline: T, hasNewlineInRange: A, hasSpaces: C, getAlignmentSize: D, getIndentSize: g, getPreferredQuote: F, printString: l, printNumber: y, makeString: E, addLeadingComment: L, addDanglingComment: M, addTrailingComment: j, isFrontMatterNode: V, isNonEmptyArray: r, createGroupIdMapper: q};
      }}), Ta = {};
      Ut(Ta, {basename: () => Pa, default: () => Ia, delimiter: () => Bn, dirname: () => _a, extname: () => ka, isAbsolute: () => Wn, join: () => Na, normalize: () => Vn, relative: () => wa, resolve: () => Tr, sep: () => Tn});
      function Ba(e, n) {
        for (var t = 0, s = e.length - 1; s >= 0; s--) {
          var a = e[s];
          a === "." ? e.splice(s, 1) : a === ".." ? (e.splice(s, 1), t++) : t && (e.splice(s, 1), t--);
        }
        if (n)
          for (; t--; t)
            e.unshift("..");
        return e;
      }
      function Tr() {
        for (var e = "", n = false, t = arguments.length - 1; t >= -1 && !n; t--) {
          var s = t >= 0 ? arguments[t] : "/";
          if (typeof s != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!s)
            continue;
          e = s + "/" + e, n = s.charAt(0) === "/";
        }
        return e = Ba($n(e.split("/"), function(a) {
          return !!a;
        }), !n).join("/"), (n ? "/" : "") + e || ".";
      }
      function Vn(e) {
        var n = Wn(e), t = La(e, -1) === "/";
        return e = Ba($n(e.split("/"), function(s) {
          return !!s;
        }), !n).join("/"), !e && !n && (e = "."), e && t && (e += "/"), (n ? "/" : "") + e;
      }
      function Wn(e) {
        return e.charAt(0) === "/";
      }
      function Na() {
        var e = Array.prototype.slice.call(arguments, 0);
        return Vn($n(e, function(n, t) {
          if (typeof n != "string")
            throw new TypeError("Arguments to path.join must be strings");
          return n;
        }).join("/"));
      }
      function wa(e, n) {
        e = Tr(e).substr(1), n = Tr(n).substr(1);
        function t(c) {
          for (var v = 0; v < c.length && c[v] === ""; v++)
            ;
          for (var m = c.length - 1; m >= 0 && c[m] === ""; m--)
            ;
          return v > m ? [] : c.slice(v, m - v + 1);
        }
        for (var s = t(e.split("/")), a = t(n.split("/")), r = Math.min(s.length, a.length), u = r, i = 0; i < r; i++)
          if (s[i] !== a[i]) {
            u = i;
            break;
          }
        for (var o = [], i = u; i < s.length; i++)
          o.push("..");
        return o = o.concat(a.slice(u)), o.join("/");
      }
      function _a(e) {
        var n = wr(e), t = n[0], s = n[1];
        return !t && !s ? "." : (s && (s = s.substr(0, s.length - 1)), t + s);
      }
      function Pa(e, n) {
        var t = wr(e)[2];
        return n && t.substr(-1 * n.length) === n && (t = t.substr(0, t.length - n.length)), t;
      }
      function ka(e) {
        return wr(e)[3];
      }
      function $n(e, n) {
        if (e.filter)
          return e.filter(n);
        for (var t = [], s = 0; s < e.length; s++)
          n(e[s], s, e) && t.push(e[s]);
        return t;
      }
      var Da, wr, Tn, Bn, Ia, La, _D = mt({"node-modules-polyfills:path"() {
        re(), Da = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, wr = function(e) {
          return Da.exec(e).slice(1);
        }, Tn = "/", Bn = ":", Ia = {extname: ka, basename: Pa, dirname: _a, sep: Tn, delimiter: Bn, relative: wa, join: Na, isAbsolute: Wn, normalize: Vn, resolve: Tr}, La = "ab".substr(-1) === "b" ? function(e, n, t) {
          return e.substr(n, t);
        } : function(e, n, t) {
          return n < 0 && (n = e.length + n), e.substr(n, t);
        };
      }}), PD = Z({"node-modules-polyfills-commonjs:path"(e, n) {
        re();
        var t = (_D(), lt(Ta));
        if (t && t.default) {
          n.exports = t.default;
          for (let s in t)
            n.exports[s] = t[s];
        } else
          t && (n.exports = t);
      }}), zt = Z({"src/common/errors.js"(e, n) {
        re();
        var t = class extends Error {
        }, s = class extends Error {
        }, a = class extends Error {
        }, r = class extends Error {
        };
        n.exports = {ConfigError: t, DebugError: s, UndefinedParserError: a, ArgExpansionBailout: r};
      }}), dt = {};
      Ut(dt, {__assign: () => br, __asyncDelegator: () => GD, __asyncGenerator: () => HD, __asyncValues: () => JD, __await: () => Jt, __awaiter: () => qD, __classPrivateFieldGet: () => KD, __classPrivateFieldSet: () => YD, __createBinding: () => RD, __decorate: () => LD, __exportStar: () => VD, __extends: () => kD, __generator: () => MD, __importDefault: () => XD, __importStar: () => zD, __makeTemplateObject: () => UD, __metadata: () => OD, __param: () => jD, __read: () => ja, __rest: () => ID, __spread: () => WD, __spreadArrays: () => $D, __values: () => Nn});
      function kD(e, n) {
        xr(e, n);
        function t() {
          this.constructor = e;
        }
        e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
      }
      function ID(e, n) {
        var t = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) && n.indexOf(s) < 0 && (t[s] = e[s]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (var a = 0, s = Object.getOwnPropertySymbols(e); a < s.length; a++)
            n.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (t[s[a]] = e[s[a]]);
        return t;
      }
      function LD(e, n, t, s) {
        var a = arguments.length, r = a < 3 ? n : s === null ? s = Object.getOwnPropertyDescriptor(n, t) : s, u;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          r = Reflect.decorate(e, n, t, s);
        else
          for (var i = e.length - 1; i >= 0; i--)
            (u = e[i]) && (r = (a < 3 ? u(r) : a > 3 ? u(n, t, r) : u(n, t)) || r);
        return a > 3 && r && Object.defineProperty(n, t, r), r;
      }
      function jD(e, n) {
        return function(t, s) {
          n(t, s, e);
        };
      }
      function OD(e, n) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(e, n);
      }
      function qD(e, n, t, s) {
        function a(r) {
          return r instanceof t ? r : new t(function(u) {
            u(r);
          });
        }
        return new (t || (t = Promise))(function(r, u) {
          function i(v) {
            try {
              c(s.next(v));
            } catch (m) {
              u(m);
            }
          }
          function o(v) {
            try {
              c(s.throw(v));
            } catch (m) {
              u(m);
            }
          }
          function c(v) {
            v.done ? r(v.value) : a(v.value).then(i, o);
          }
          c((s = s.apply(e, n || [])).next());
        });
      }
      function MD(e, n) {
        var t = {label: 0, sent: function() {
          if (r[0] & 1)
            throw r[1];
          return r[1];
        }, trys: [], ops: []}, s, a, r, u;
        return u = {next: i(0), throw: i(1), return: i(2)}, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
          return this;
        }), u;
        function i(c) {
          return function(v) {
            return o([c, v]);
          };
        }
        function o(c) {
          if (s)
            throw new TypeError("Generator is already executing.");
          for (; t; )
            try {
              if (s = 1, a && (r = c[0] & 2 ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done)
                return r;
              switch (a = 0, r && (c = [c[0] & 2, r.value]), c[0]) {
                case 0:
                case 1:
                  r = c;
                  break;
                case 4:
                  return t.label++, {value: c[1], done: false};
                case 5:
                  t.label++, a = c[1], c = [0];
                  continue;
                case 7:
                  c = t.ops.pop(), t.trys.pop();
                  continue;
                default:
                  if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                    t = 0;
                    continue;
                  }
                  if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) {
                    t.label = c[1];
                    break;
                  }
                  if (c[0] === 6 && t.label < r[1]) {
                    t.label = r[1], r = c;
                    break;
                  }
                  if (r && t.label < r[2]) {
                    t.label = r[2], t.ops.push(c);
                    break;
                  }
                  r[2] && t.ops.pop(), t.trys.pop();
                  continue;
              }
              c = n.call(e, t);
            } catch (v) {
              c = [6, v], a = 0;
            } finally {
              s = r = 0;
            }
          if (c[0] & 5)
            throw c[1];
          return {value: c[0] ? c[1] : void 0, done: true};
        }
      }
      function RD(e, n, t, s) {
        s === void 0 && (s = t), e[s] = n[t];
      }
      function VD(e, n) {
        for (var t in e)
          t !== "default" && !n.hasOwnProperty(t) && (n[t] = e[t]);
      }
      function Nn(e) {
        var n = typeof Symbol == "function" && Symbol.iterator, t = n && e[n], s = 0;
        if (t)
          return t.call(e);
        if (e && typeof e.length == "number")
          return {next: function() {
            return e && s >= e.length && (e = void 0), {value: e && e[s++], done: !e};
          }};
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function ja(e, n) {
        var t = typeof Symbol == "function" && e[Symbol.iterator];
        if (!t)
          return e;
        var s = t.call(e), a, r = [], u;
        try {
          for (; (n === void 0 || n-- > 0) && !(a = s.next()).done; )
            r.push(a.value);
        } catch (i) {
          u = {error: i};
        } finally {
          try {
            a && !a.done && (t = s.return) && t.call(s);
          } finally {
            if (u)
              throw u.error;
          }
        }
        return r;
      }
      function WD() {
        for (var e = [], n = 0; n < arguments.length; n++)
          e = e.concat(ja(arguments[n]));
        return e;
      }
      function $D() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++)
          e += arguments[n].length;
        for (var s = Array(e), a = 0, n = 0; n < t; n++)
          for (var r = arguments[n], u = 0, i = r.length; u < i; u++, a++)
            s[a] = r[u];
        return s;
      }
      function Jt(e) {
        return this instanceof Jt ? (this.v = e, this) : new Jt(e);
      }
      function HD(e, n, t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var s = t.apply(e, n || []), a, r = [];
        return a = {}, u("next"), u("throw"), u("return"), a[Symbol.asyncIterator] = function() {
          return this;
        }, a;
        function u(d) {
          s[d] && (a[d] = function(p) {
            return new Promise(function(f, h) {
              r.push([d, p, f, h]) > 1 || i(d, p);
            });
          });
        }
        function i(d, p) {
          try {
            o(s[d](p));
          } catch (f) {
            m(r[0][3], f);
          }
        }
        function o(d) {
          d.value instanceof Jt ? Promise.resolve(d.value.v).then(c, v) : m(r[0][2], d);
        }
        function c(d) {
          i("next", d);
        }
        function v(d) {
          i("throw", d);
        }
        function m(d, p) {
          d(p), r.shift(), r.length && i(r[0][0], r[0][1]);
        }
      }
      function GD(e) {
        var n, t;
        return n = {}, s("next"), s("throw", function(a) {
          throw a;
        }), s("return"), n[Symbol.iterator] = function() {
          return this;
        }, n;
        function s(a, r) {
          n[a] = e[a] ? function(u) {
            return (t = !t) ? {value: Jt(e[a](u)), done: a === "return"} : r ? r(u) : u;
          } : r;
        }
      }
      function JD(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n = e[Symbol.asyncIterator], t;
        return n ? n.call(e) : (e = typeof Nn == "function" ? Nn(e) : e[Symbol.iterator](), t = {}, s("next"), s("throw"), s("return"), t[Symbol.asyncIterator] = function() {
          return this;
        }, t);
        function s(r) {
          t[r] = e[r] && function(u) {
            return new Promise(function(i, o) {
              u = e[r](u), a(i, o, u.done, u.value);
            });
          };
        }
        function a(r, u, i, o) {
          Promise.resolve(o).then(function(c) {
            r({value: c, done: i});
          }, u);
        }
      }
      function UD(e, n) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {value: n}) : e.raw = n, e;
      }
      function zD(e) {
        if (e && e.__esModule)
          return e;
        var n = {};
        if (e != null)
          for (var t in e)
            Object.hasOwnProperty.call(e, t) && (n[t] = e[t]);
        return n.default = e, n;
      }
      function XD(e) {
        return e && e.__esModule ? e : {default: e};
      }
      function KD(e, n) {
        if (!n.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return n.get(e);
      }
      function YD(e, n, t) {
        if (!n.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return n.set(e, t), t;
      }
      var xr, br, ht = mt({"node_modules/tslib/tslib.es6.js"() {
        re(), xr = function(e, n) {
          return xr = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(t, s) {
            t.__proto__ = s;
          } || function(t, s) {
            for (var a in s)
              s.hasOwnProperty(a) && (t[a] = s[a]);
          }, xr(e, n);
        }, br = function() {
          return br = Object.assign || function(n) {
            for (var t, s = 1, a = arguments.length; s < a; s++) {
              t = arguments[s];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }, br.apply(this, arguments);
        };
      }}), Oa = Z({"node_modules/vnopts/lib/descriptors/api.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true}), e.apiDescriptor = {key: (n) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(n) ? n : JSON.stringify(n), value(n) {
          if (n === null || typeof n != "object")
            return JSON.stringify(n);
          if (Array.isArray(n))
            return "[".concat(n.map((s) => e.apiDescriptor.value(s)).join(", "), "]");
          let t = Object.keys(n);
          return t.length === 0 ? "{}" : "{ ".concat(t.map((s) => "".concat(e.apiDescriptor.key(s), ": ").concat(e.apiDescriptor.value(n[s]))).join(", "), " }");
        }, pair: (n) => {
          let {key: t, value: s} = n;
          return e.apiDescriptor.value({[t]: s});
        }};
      }}), QD = Z({"node_modules/vnopts/lib/descriptors/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = (ht(), lt(dt));
        n.__exportStar(Oa(), e);
      }}), _r = Z({"scripts/build/shims/chalk.cjs"(e, n) {
        re();
        var t = (s) => s;
        t.grey = t, t.red = t, t.bold = t, t.yellow = t, t.blue = t, t.default = t, n.exports = t;
      }}), qa = Z({"node_modules/vnopts/lib/handlers/deprecated/common.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = _r();
        e.commonDeprecatedHandler = (t, s, a) => {
          let {descriptor: r} = a, u = ["".concat(n.default.yellow(typeof t == "string" ? r.key(t) : r.pair(t)), " is deprecated")];
          return s && u.push("we now treat it as ".concat(n.default.blue(typeof s == "string" ? r.key(s) : r.pair(s)))), u.join("; ") + ".";
        };
      }}), ZD = Z({"node_modules/vnopts/lib/handlers/deprecated/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = (ht(), lt(dt));
        n.__exportStar(qa(), e);
      }}), em = Z({"node_modules/vnopts/lib/handlers/invalid/common.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = _r();
        e.commonInvalidHandler = (t, s, a) => ["Invalid ".concat(n.default.red(a.descriptor.key(t)), " value."), "Expected ".concat(n.default.blue(a.schemas[t].expected(a)), ","), "but received ".concat(n.default.red(a.descriptor.value(s)), ".")].join(" ");
      }}), Ma = Z({"node_modules/vnopts/lib/handlers/invalid/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = (ht(), lt(dt));
        n.__exportStar(em(), e);
      }}), tm = Z({"node_modules/vnopts/node_modules/leven/index.js"(e, n) {
        re();
        var t = [], s = [];
        n.exports = function(a, r) {
          if (a === r)
            return 0;
          var u = a;
          a.length > r.length && (a = r, r = u);
          var i = a.length, o = r.length;
          if (i === 0)
            return o;
          if (o === 0)
            return i;
          for (; i > 0 && a.charCodeAt(~-i) === r.charCodeAt(~-o); )
            i--, o--;
          if (i === 0)
            return o;
          for (var c = 0; c < i && a.charCodeAt(c) === r.charCodeAt(c); )
            c++;
          if (i -= c, o -= c, i === 0)
            return o;
          for (var v, m, d, p, f = 0, h = 0; f < i; )
            s[c + f] = a.charCodeAt(c + f), t[f] = ++f;
          for (; h < o; )
            for (v = r.charCodeAt(c + h), d = h++, m = h, f = 0; f < i; f++)
              p = v === s[c + f] ? d : d + 1, d = t[f], m = t[f] = d > m ? p > m ? m + 1 : p : p > d ? d + 1 : p;
          return m;
        };
      }}), Ra = Z({"node_modules/vnopts/lib/handlers/unknown/leven.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = _r(), t = tm();
        e.levenUnknownHandler = (s, a, r) => {
          let {descriptor: u, logger: i, schemas: o} = r, c = ["Ignored unknown option ".concat(n.default.yellow(u.pair({key: s, value: a})), ".")], v = Object.keys(o).sort().find((m) => t(s, m) < 3);
          v && c.push("Did you mean ".concat(n.default.blue(u.key(v)), "?")), i.warn(c.join(" "));
        };
      }}), rm = Z({"node_modules/vnopts/lib/handlers/unknown/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = (ht(), lt(dt));
        n.__exportStar(Ra(), e);
      }}), nm = Z({"node_modules/vnopts/lib/handlers/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = (ht(), lt(dt));
        n.__exportStar(ZD(), e), n.__exportStar(Ma(), e), n.__exportStar(rm(), e);
      }}), vt = Z({"node_modules/vnopts/lib/schema.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function t(r, u) {
          let i = new r(u), o = Object.create(i);
          for (let c of n)
            c in u && (o[c] = a(u[c], i, s.prototype[c].length));
          return o;
        }
        e.createSchema = t;
        var s = class {
          constructor(r) {
            this.name = r.name;
          }
          static create(r) {
            return t(this, r);
          }
          default(r) {
          }
          expected(r) {
            return "nothing";
          }
          validate(r, u) {
            return false;
          }
          deprecated(r, u) {
            return false;
          }
          forward(r, u) {
          }
          redirect(r, u) {
          }
          overlap(r, u, i) {
            return r;
          }
          preprocess(r, u) {
            return r;
          }
          postprocess(r, u) {
            return r;
          }
        };
        e.Schema = s;
        function a(r, u, i) {
          return typeof r == "function" ? function() {
            for (var o = arguments.length, c = new Array(o), v = 0; v < o; v++)
              c[v] = arguments[v];
            return r(...c.slice(0, i - 1), u, ...c.slice(i - 1));
          } : () => r;
        }
      }}), um = Z({"node_modules/vnopts/lib/schemas/alias.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = vt(), t = class extends n.Schema {
          constructor(s) {
            super(s), this._sourceName = s.sourceName;
          }
          expected(s) {
            return s.schemas[this._sourceName].expected(s);
          }
          validate(s, a) {
            return a.schemas[this._sourceName].validate(s, a);
          }
          redirect(s, a) {
            return this._sourceName;
          }
        };
        e.AliasSchema = t;
      }}), sm = Z({"node_modules/vnopts/lib/schemas/any.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = vt(), t = class extends n.Schema {
          expected() {
            return "anything";
          }
          validate() {
            return true;
          }
        };
        e.AnySchema = t;
      }}), im = Z({"node_modules/vnopts/lib/schemas/array.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = (ht(), lt(dt)), t = vt(), s = class extends t.Schema {
          constructor(r) {
            var {valueSchema: u, name: i = u.name} = r, o = n.__rest(r, ["valueSchema", "name"]);
            super(Object.assign({}, o, {name: i})), this._valueSchema = u;
          }
          expected(r) {
            return "an array of ".concat(this._valueSchema.expected(r));
          }
          validate(r, u) {
            if (!Array.isArray(r))
              return false;
            let i = [];
            for (let o of r) {
              let c = u.normalizeValidateResult(this._valueSchema.validate(o, u), o);
              c !== true && i.push(c.value);
            }
            return i.length === 0 ? true : {value: i};
          }
          deprecated(r, u) {
            let i = [];
            for (let o of r) {
              let c = u.normalizeDeprecatedResult(this._valueSchema.deprecated(o, u), o);
              c !== false && i.push(...c.map((v) => {
                let {value: m} = v;
                return {value: [m]};
              }));
            }
            return i;
          }
          forward(r, u) {
            let i = [];
            for (let o of r) {
              let c = u.normalizeForwardResult(this._valueSchema.forward(o, u), o);
              i.push(...c.map(a));
            }
            return i;
          }
          redirect(r, u) {
            let i = [], o = [];
            for (let c of r) {
              let v = u.normalizeRedirectResult(this._valueSchema.redirect(c, u), c);
              "remain" in v && i.push(v.remain), o.push(...v.redirect.map(a));
            }
            return i.length === 0 ? {redirect: o} : {redirect: o, remain: i};
          }
          overlap(r, u) {
            return r.concat(u);
          }
        };
        e.ArraySchema = s;
        function a(r) {
          let {from: u, to: i} = r;
          return {from: [u], to: i};
        }
      }}), am = Z({"node_modules/vnopts/lib/schemas/boolean.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = vt(), t = class extends n.Schema {
          expected() {
            return "true or false";
          }
          validate(s) {
            return typeof s == "boolean";
          }
        };
        e.BooleanSchema = t;
      }}), Hn = Z({"node_modules/vnopts/lib/utils.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        function n(p, f) {
          let h = Object.create(null);
          for (let w of p) {
            let T = w[f];
            if (h[T])
              throw new Error("Duplicate ".concat(f, " ").concat(JSON.stringify(T)));
            h[T] = w;
          }
          return h;
        }
        e.recordFromArray = n;
        function t(p, f) {
          let h = new Map();
          for (let w of p) {
            let T = w[f];
            if (h.has(T))
              throw new Error("Duplicate ".concat(f, " ").concat(JSON.stringify(T)));
            h.set(T, w);
          }
          return h;
        }
        e.mapFromArray = t;
        function s() {
          let p = Object.create(null);
          return (f) => {
            let h = JSON.stringify(f);
            return p[h] ? true : (p[h] = true, false);
          };
        }
        e.createAutoChecklist = s;
        function a(p, f) {
          let h = [], w = [];
          for (let T of p)
            f(T) ? h.push(T) : w.push(T);
          return [h, w];
        }
        e.partition = a;
        function r(p) {
          return p === Math.floor(p);
        }
        e.isInt = r;
        function u(p, f) {
          if (p === f)
            return 0;
          let h = typeof p, w = typeof f, T = ["undefined", "object", "boolean", "number", "string"];
          return h !== w ? T.indexOf(h) - T.indexOf(w) : h !== "string" ? Number(p) - Number(f) : p.localeCompare(f);
        }
        e.comparePrimitive = u;
        function i(p) {
          return p === void 0 ? {} : p;
        }
        e.normalizeDefaultResult = i;
        function o(p, f) {
          return p === true ? true : p === false ? {value: f} : p;
        }
        e.normalizeValidateResult = o;
        function c(p, f) {
          let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          return p === false ? false : p === true ? h ? true : [{value: f}] : "value" in p ? [p] : p.length === 0 ? false : p;
        }
        e.normalizeDeprecatedResult = c;
        function v(p, f) {
          return typeof p == "string" || "key" in p ? {from: f, to: p} : "from" in p ? {from: p.from, to: p.to} : {from: f, to: p.to};
        }
        e.normalizeTransferResult = v;
        function m(p, f) {
          return p === void 0 ? [] : Array.isArray(p) ? p.map((h) => v(h, f)) : [v(p, f)];
        }
        e.normalizeForwardResult = m;
        function d(p, f) {
          let h = m(typeof p == "object" && "redirect" in p ? p.redirect : p, f);
          return h.length === 0 ? {remain: f, redirect: h} : typeof p == "object" && "remain" in p ? {remain: p.remain, redirect: h} : {redirect: h};
        }
        e.normalizeRedirectResult = d;
      }}), om = Z({"node_modules/vnopts/lib/schemas/choice.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = vt(), t = Hn(), s = class extends n.Schema {
          constructor(a) {
            super(a), this._choices = t.mapFromArray(a.choices.map((r) => r && typeof r == "object" ? r : {value: r}), "value");
          }
          expected(a) {
            let {descriptor: r} = a, u = Array.from(this._choices.keys()).map((c) => this._choices.get(c)).filter((c) => !c.deprecated).map((c) => c.value).sort(t.comparePrimitive).map(r.value), i = u.slice(0, -2), o = u.slice(-2);
            return i.concat(o.join(" or ")).join(", ");
          }
          validate(a) {
            return this._choices.has(a);
          }
          deprecated(a) {
            let r = this._choices.get(a);
            return r && r.deprecated ? {value: a} : false;
          }
          forward(a) {
            let r = this._choices.get(a);
            return r ? r.forward : void 0;
          }
          redirect(a) {
            let r = this._choices.get(a);
            return r ? r.redirect : void 0;
          }
        };
        e.ChoiceSchema = s;
      }}), Va = Z({"node_modules/vnopts/lib/schemas/number.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = vt(), t = class extends n.Schema {
          expected() {
            return "a number";
          }
          validate(s, a) {
            return typeof s == "number";
          }
        };
        e.NumberSchema = t;
      }}), lm = Z({"node_modules/vnopts/lib/schemas/integer.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = Hn(), t = Va(), s = class extends t.NumberSchema {
          expected() {
            return "an integer";
          }
          validate(a, r) {
            return r.normalizeValidateResult(super.validate(a, r), a) === true && n.isInt(a);
          }
        };
        e.IntegerSchema = s;
      }}), cm = Z({"node_modules/vnopts/lib/schemas/string.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = vt(), t = class extends n.Schema {
          expected() {
            return "a string";
          }
          validate(s) {
            return typeof s == "string";
          }
        };
        e.StringSchema = t;
      }}), pm = Z({"node_modules/vnopts/lib/schemas/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = (ht(), lt(dt));
        n.__exportStar(um(), e), n.__exportStar(sm(), e), n.__exportStar(im(), e), n.__exportStar(am(), e), n.__exportStar(om(), e), n.__exportStar(lm(), e), n.__exportStar(Va(), e), n.__exportStar(cm(), e);
      }}), fm = Z({"node_modules/vnopts/lib/defaults.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = Oa(), t = qa(), s = Ma(), a = Ra();
        e.defaultDescriptor = n.apiDescriptor, e.defaultUnknownHandler = a.levenUnknownHandler, e.defaultInvalidHandler = s.commonInvalidHandler, e.defaultDeprecatedHandler = t.commonDeprecatedHandler;
      }}), Dm = Z({"node_modules/vnopts/lib/normalize.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = fm(), t = Hn();
        e.normalize = (a, r, u) => new s(r, u).normalize(a);
        var s = class {
          constructor(a, r) {
            let {logger: u = console, descriptor: i = n.defaultDescriptor, unknown: o = n.defaultUnknownHandler, invalid: c = n.defaultInvalidHandler, deprecated: v = n.defaultDeprecatedHandler} = r || {};
            this._utils = {descriptor: i, logger: u || {warn: () => {
            }}, schemas: t.recordFromArray(a, "name"), normalizeDefaultResult: t.normalizeDefaultResult, normalizeDeprecatedResult: t.normalizeDeprecatedResult, normalizeForwardResult: t.normalizeForwardResult, normalizeRedirectResult: t.normalizeRedirectResult, normalizeValidateResult: t.normalizeValidateResult}, this._unknownHandler = o, this._invalidHandler = c, this._deprecatedHandler = v, this.cleanHistory();
          }
          cleanHistory() {
            this._hasDeprecationWarned = t.createAutoChecklist();
          }
          normalize(a) {
            let r = {}, u = [a], i = () => {
              for (; u.length !== 0; ) {
                let o = u.shift(), c = this._applyNormalization(o, r);
                u.push(...c);
              }
            };
            i();
            for (let o of Object.keys(this._utils.schemas)) {
              let c = this._utils.schemas[o];
              if (!(o in r)) {
                let v = t.normalizeDefaultResult(c.default(this._utils));
                "value" in v && u.push({[o]: v.value});
              }
            }
            i();
            for (let o of Object.keys(this._utils.schemas)) {
              let c = this._utils.schemas[o];
              o in r && (r[o] = c.postprocess(r[o], this._utils));
            }
            return r;
          }
          _applyNormalization(a, r) {
            let u = [], [i, o] = t.partition(Object.keys(a), (c) => c in this._utils.schemas);
            for (let c of i) {
              let v = this._utils.schemas[c], m = v.preprocess(a[c], this._utils), d = t.normalizeValidateResult(v.validate(m, this._utils), m);
              if (d !== true) {
                let {value: T} = d, A = this._invalidHandler(c, T, this._utils);
                throw typeof A == "string" ? new Error(A) : A;
              }
              let p = (T) => {
                let {from: A, to: S} = T;
                u.push(typeof S == "string" ? {[S]: A} : {[S.key]: S.value});
              }, f = (T) => {
                let {value: A, redirectTo: S} = T, B = t.normalizeDeprecatedResult(v.deprecated(A, this._utils), m, true);
                if (B !== false)
                  if (B === true)
                    this._hasDeprecationWarned(c) || this._utils.logger.warn(this._deprecatedHandler(c, S, this._utils));
                  else
                    for (let {value: I} of B) {
                      let k = {key: c, value: I};
                      if (!this._hasDeprecationWarned(k)) {
                        let P = typeof S == "string" ? {key: S, value: I} : S;
                        this._utils.logger.warn(this._deprecatedHandler(k, P, this._utils));
                      }
                    }
              };
              t.normalizeForwardResult(v.forward(m, this._utils), m).forEach(p);
              let w = t.normalizeRedirectResult(v.redirect(m, this._utils), m);
              if (w.redirect.forEach(p), "remain" in w) {
                let T = w.remain;
                r[c] = c in r ? v.overlap(r[c], T, this._utils) : T, f({value: T});
              }
              for (let {from: T, to: A} of w.redirect)
                f({value: T, redirectTo: A});
            }
            for (let c of o) {
              let v = a[c], m = this._unknownHandler(c, v, this._utils);
              if (m)
                for (let d of Object.keys(m)) {
                  let p = {[d]: m[d]};
                  d in this._utils.schemas ? u.push(p) : Object.assign(r, p);
                }
            }
            return u;
          }
        };
        e.Normalizer = s;
      }}), mm = Z({"node_modules/vnopts/lib/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = (ht(), lt(dt));
        n.__exportStar(QD(), e), n.__exportStar(nm(), e), n.__exportStar(pm(), e), n.__exportStar(Dm(), e), n.__exportStar(vt(), e);
      }}), dm = Z({"src/main/options-normalizer.js"(e, n) {
        re();
        var t = mm(), s = it(), a = {key: (d) => d.length === 1 ? "-".concat(d) : "--".concat(d), value: (d) => t.apiDescriptor.value(d), pair: (d) => {
          let {key: p, value: f} = d;
          return f === false ? "--no-".concat(p) : f === true ? a.key(p) : f === "" ? "".concat(a.key(p), " without an argument") : "".concat(a.key(p), "=").concat(f);
        }}, r = (d) => {
          let {colorsModule: p, levenshteinDistance: f} = d;
          return class extends t.ChoiceSchema {
            constructor(w) {
              let {name: T, flags: A} = w;
              super({name: T, choices: A}), this._flags = [...A].sort();
            }
            preprocess(w, T) {
              if (typeof w == "string" && w.length > 0 && !this._flags.includes(w)) {
                let A = this._flags.find((S) => f(S, w) < 3);
                if (A)
                  return T.logger.warn(["Unknown flag ".concat(p.yellow(T.descriptor.value(w)), ","), "did you mean ".concat(p.blue(T.descriptor.value(A)), "?")].join(" ")), A;
              }
              return w;
            }
            expected() {
              return "a flag";
            }
          };
        }, u;
        function i(d, p) {
          let {logger: f = false, isCLI: h = false, passThrough: w = false, colorsModule: T = null, levenshteinDistance: A = null} = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = w ? Array.isArray(w) ? (D, g) => w.includes(D) ? {[D]: g} : void 0 : (D, g) => ({[D]: g}) : (D, g, F) => {
            let l = F.schemas, y = kn(l, Qf);
            return t.levenUnknownHandler(D, g, Object.assign(Object.assign({}, F), {}, {schemas: y}));
          }, B = h ? a : t.apiDescriptor, I = o(p, {isCLI: h, colorsModule: T, levenshteinDistance: A}), k = new t.Normalizer(I, {logger: f, unknown: S, descriptor: B}), P = f !== false;
          P && u && (k._hasDeprecationWarned = u);
          let C = k.normalize(d);
          return P && (u = k._hasDeprecationWarned), h && C["plugin-search"] === false && (C["plugin-search-dir"] = false), C;
        }
        function o(d, p) {
          let {isCLI: f, colorsModule: h, levenshteinDistance: w} = p, T = [];
          f && T.push(t.AnySchema.create({name: "_"}));
          for (let A of d)
            T.push(c(A, {isCLI: f, optionInfos: d, colorsModule: h, levenshteinDistance: w})), A.alias && f && T.push(t.AliasSchema.create({name: A.alias, sourceName: A.name}));
          return T;
        }
        function c(d, p) {
          let {isCLI: f, optionInfos: h, colorsModule: w, levenshteinDistance: T} = p, {name: A} = d;
          if (A === "plugin-search-dir" || A === "pluginSearchDirs")
            return t.AnySchema.create({name: A, preprocess(k) {
              return k === false || (k = Array.isArray(k) ? k : [k]), k;
            }, validate(k) {
              return k === false ? true : k.every((P) => typeof P == "string");
            }, expected() {
              return "false or paths to plugin search dir";
            }});
          let S = {name: A}, B, I = {};
          switch (d.type) {
            case "int":
              B = t.IntegerSchema, f && (S.preprocess = Number);
              break;
            case "string":
              B = t.StringSchema;
              break;
            case "choice":
              B = t.ChoiceSchema, S.choices = d.choices.map((k) => typeof k == "object" && k.redirect ? Object.assign(Object.assign({}, k), {}, {redirect: {to: {key: d.name, value: k.redirect}}}) : k);
              break;
            case "boolean":
              B = t.BooleanSchema;
              break;
            case "flag":
              B = r({colorsModule: w, levenshteinDistance: T}), S.flags = h.flatMap((k) => [k.alias, k.description && k.name, k.oppositeDescription && "no-".concat(k.name)].filter(Boolean));
              break;
            case "path":
              B = t.StringSchema;
              break;
            default:
              throw new Error("Unexpected type ".concat(d.type));
          }
          if (d.exception ? S.validate = (k, P, C) => d.exception(k) || P.validate(k, C) : S.validate = (k, P, C) => k === void 0 || P.validate(k, C), d.redirect && (I.redirect = (k) => k ? {to: {key: d.redirect.option, value: d.redirect.value}} : void 0), d.deprecated && (I.deprecated = true), f && !d.array) {
            let k = S.preprocess || ((P) => P);
            S.preprocess = (P, C, D) => C.preprocess(k(Array.isArray(P) ? s(P) : P), D);
          }
          return d.array ? t.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, f ? {preprocess: (k) => Array.isArray(k) ? k : [k]} : {}), I), {}, {valueSchema: B.create(S)})) : B.create(Object.assign(Object.assign({}, S), I));
        }
        function v(d, p, f) {
          return i(d, p, f);
        }
        function m(d, p, f) {
          return i(d, p, Object.assign({isCLI: true}, f));
        }
        n.exports = {normalizeApiOptions: v, normalizeCliOptions: m};
      }}), st = Z({"src/language-js/loc.js"(e, n) {
        re();
        var t = Rn();
        function s(o, c) {
          let {ignoreDecorators: v} = c || {};
          if (!v) {
            let m = o.declaration && o.declaration.decorators || o.decorators;
            if (t(m))
              return s(m[0]);
          }
          return o.range ? o.range[0] : o.start;
        }
        function a(o) {
          return o.range ? o.range[1] : o.end;
        }
        function r(o, c) {
          let v = s(o);
          return Number.isInteger(v) && v === s(c);
        }
        function u(o, c) {
          let v = a(o);
          return Number.isInteger(v) && v === a(c);
        }
        function i(o, c) {
          return r(o, c) && u(o, c);
        }
        n.exports = {locStart: s, locEnd: a, hasSameLocStart: r, hasSameLoc: i};
      }}), gm = Z({"src/main/load-parser.js"(e, n) {
        re(), n.exports = () => {
        };
      }}), ym = Z({"scripts/build/shims/babel-highlight.cjs"(e, n) {
        re();
        var t = _r(), s = {shouldHighlight: () => false, getChalk: () => t};
        n.exports = s;
      }}), hm = Z({"node_modules/@babel/code-frame/lib/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true}), e.codeFrameColumns = u, e.default = i;
        var n = ym(), t = false;
        function s(o) {
          return {gutter: o.grey, marker: o.red.bold, message: o.red.bold};
        }
        var a = /\r\n|[\n\r\u2028\u2029]/;
        function r(o, c, v) {
          let m = Object.assign({column: 0, line: -1}, o.start), d = Object.assign({}, m, o.end), {linesAbove: p = 2, linesBelow: f = 3} = v || {}, h = m.line, w = m.column, T = d.line, A = d.column, S = Math.max(h - (p + 1), 0), B = Math.min(c.length, T + f);
          h === -1 && (S = 0), T === -1 && (B = c.length);
          let I = T - h, k = {};
          if (I)
            for (let P = 0; P <= I; P++) {
              let C = P + h;
              if (!w)
                k[C] = true;
              else if (P === 0) {
                let D = c[C - 1].length;
                k[C] = [w, D - w + 1];
              } else if (P === I)
                k[C] = [0, A];
              else {
                let D = c[C - P].length;
                k[C] = [0, D];
              }
            }
          else
            w === A ? w ? k[h] = [w, 0] : k[h] = true : k[h] = [w, A - w];
          return {start: S, end: B, markerLines: k};
        }
        function u(o, c) {
          let v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, m = (v.highlightCode || v.forceColor) && (0, n.shouldHighlight)(v), d = (0, n.getChalk)(v), p = s(d), f = (P, C) => m ? P(C) : C, h = o.split(a), {start: w, end: T, markerLines: A} = r(c, h, v), S = c.start && typeof c.start.column == "number", B = String(T).length, k = (m ? (0, n.default)(o, v) : o).split(a, T).slice(w, T).map((P, C) => {
            let D = w + 1 + C, g = " ".concat(D).slice(-B), F = " ".concat(g, " |"), l = A[D], E = !A[D + 1];
            if (l) {
              let y = "";
              if (Array.isArray(l)) {
                let N = P.slice(0, Math.max(l[0] - 1, 0)).replace(/[^\t]/g, " "), x = l[1] || 1;
                y = [`
 `, f(p.gutter, F.replace(/\d/g, " ")), " ", N, f(p.marker, "^").repeat(x)].join(""), E && v.message && (y += " " + f(p.message, v.message));
              }
              return [f(p.marker, ">"), f(p.gutter, F), P.length > 0 ? " ".concat(P) : "", y].join("");
            } else
              return " ".concat(f(p.gutter, F)).concat(P.length > 0 ? " ".concat(P) : "");
          }).join(`
`);
          return v.message && !S && (k = "".concat(" ".repeat(B + 1)).concat(v.message, `
`).concat(k)), m ? d.reset(k) : k;
        }
        function i(o, c, v) {
          let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (!t) {
            t = true;
            let p = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (Tt.emitWarning)
              Tt.emitWarning(p, "DeprecationWarning");
            else {
              let f = new Error(p);
              f.name = "DeprecationWarning", console.warn(new Error(p));
            }
          }
          return v = Math.max(v, 0), u(o, {start: {column: v, line: c}}, m);
        }
      }}), Gn = Z({"src/main/parser.js"(e, n) {
        re();
        var {ConfigError: t} = zt(), s = st(), a = gm(), {locStart: r, locEnd: u} = s, i = Object.getOwnPropertyNames, o = Object.getOwnPropertyDescriptor;
        function c(d) {
          let p = {};
          for (let f of d.plugins)
            if (!!f.parsers)
              for (let h of i(f.parsers))
                Object.defineProperty(p, h, o(f.parsers, h));
          return p;
        }
        function v(d) {
          let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c(d);
          if (typeof d.parser == "function")
            return {parse: d.parser, astFormat: "estree", locStart: r, locEnd: u};
          if (typeof d.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(p, d.parser))
              return p[d.parser];
            throw new t(`Couldn't resolve parser "`.concat(d.parser, '". Parsers must be explicitly added to the standalone bundle.'));
          }
        }
        function m(d, p) {
          let f = c(p), h = Object.defineProperties({}, Object.fromEntries(Object.keys(f).map((T) => [T, {enumerable: true, get() {
            return f[T].parse;
          }}]))), w = v(p, f);
          try {
            return w.preprocess && (d = w.preprocess(d, p)), {text: d, ast: w.parse(d, h, p)};
          } catch (T) {
            let {loc: A} = T;
            if (A) {
              let {codeFrameColumns: S} = hm();
              throw T.codeFrame = S(d, A, {highlightCode: true}), T.message += `
` + T.codeFrame, T;
            }
            throw T.stack;
          }
        }
        n.exports = {parse: m, resolveParser: v};
      }}), Wa = Z({"src/main/options.js"(e, n) {
        re();
        var t = PD(), {UndefinedParserError: s} = zt(), {getSupportInfo: a} = Mn(), r = dm(), {resolveParser: u} = Gn(), i = {astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null};
        function o(m) {
          let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = Object.assign({}, m), f = a({plugins: m.plugins, showUnreleased: true, showDeprecated: true}).options, h = Object.assign(Object.assign({}, i), Object.fromEntries(f.filter((B) => B.default !== void 0).map((B) => [B.name, B.default])));
          if (!p.parser) {
            if (!p.filepath)
              (d.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), p.parser = "babel";
            else if (p.parser = v(p.filepath, p.plugins), !p.parser)
              throw new s("No parser could be inferred for file: ".concat(p.filepath));
          }
          let w = u(r.normalizeApiOptions(p, [f.find((B) => B.name === "parser")], {passThrough: true, logger: false}));
          p.astFormat = w.astFormat, p.locEnd = w.locEnd, p.locStart = w.locStart;
          let T = c(p);
          p.printer = T.printers[p.astFormat];
          let A = Object.fromEntries(f.filter((B) => B.pluginDefaults && B.pluginDefaults[T.name] !== void 0).map((B) => [B.name, B.pluginDefaults[T.name]])), S = Object.assign(Object.assign({}, h), A);
          for (let [B, I] of Object.entries(S))
            (p[B] === null || p[B] === void 0) && (p[B] = I);
          return p.parser === "json" && (p.trailingComma = "none"), r.normalizeApiOptions(p, f, Object.assign({passThrough: Object.keys(i)}, d));
        }
        function c(m) {
          let {astFormat: d} = m;
          if (!d)
            throw new Error("getPlugin() requires astFormat to be set");
          let p = m.plugins.find((f) => f.printers && f.printers[d]);
          if (!p)
            throw new Error(`Couldn't find plugin for AST format "`.concat(d, '"'));
          return p;
        }
        function v(m, d) {
          let p = t.basename(m).toLowerCase(), h = a({plugins: d}).languages.filter((w) => w.since !== null).find((w) => w.extensions && w.extensions.some((T) => p.endsWith(T)) || w.filenames && w.filenames.some((T) => T.toLowerCase() === p));
          return h && h.parsers[0];
        }
        n.exports = {normalize: o, hiddenDefaults: i, inferParser: v};
      }}), vm = Z({"src/main/massage-ast.js"(e, n) {
        re();
        function t(s, a, r) {
          if (Array.isArray(s))
            return s.map((c) => t(c, a, r)).filter(Boolean);
          if (!s || typeof s != "object")
            return s;
          let u = a.printer.massageAstNode, i;
          u && u.ignoredProperties ? i = u.ignoredProperties : i = new Set();
          let o = {};
          for (let [c, v] of Object.entries(s))
            !i.has(c) && typeof v != "function" && (o[c] = t(v, a, s));
          if (u) {
            let c = u(s, o, r);
            if (c === null)
              return;
            if (c)
              return c;
          }
          return o;
        }
        n.exports = t;
      }}), Xt = Z({"scripts/build/shims/assert.cjs"(e, n) {
        re();
        var t = () => {
        };
        t.ok = t, t.strictEqual = t, n.exports = t;
      }}), et = Z({"src/main/comments.js"(e, n) {
        re();
        var t = Xt(), {builders: {line: s, hardline: a, breakParent: r, indent: u, lineSuffix: i, join: o, cursor: c}} = Oe(), {hasNewline: v, skipNewline: m, skipSpaces: d, isPreviousLineEmpty: p, addLeadingComment: f, addDanglingComment: h, addTrailingComment: w} = Ue(), T = new WeakMap();
        function A(L, M, j) {
          if (!L)
            return;
          let {printer: $, locStart: V, locEnd: q} = M;
          if (j) {
            if ($.canAttachComment && $.canAttachComment(L)) {
              let H;
              for (H = j.length - 1; H >= 0 && !(V(j[H]) <= V(L) && q(j[H]) <= q(L)); --H)
                ;
              j.splice(H + 1, 0, L);
              return;
            }
          } else if (T.has(L))
            return T.get(L);
          let Y = $.getCommentChildNodes && $.getCommentChildNodes(L, M) || typeof L == "object" && Object.entries(L).filter((H) => {
            let [R] = H;
            return R !== "enclosingNode" && R !== "precedingNode" && R !== "followingNode" && R !== "tokens" && R !== "comments" && R !== "parent";
          }).map((H) => {
            let [, R] = H;
            return R;
          });
          if (!!Y) {
            j || (j = [], T.set(L, j));
            for (let H of Y)
              A(H, M, j);
            return j;
          }
        }
        function S(L, M, j, $) {
          let {locStart: V, locEnd: q} = j, Y = V(M), H = q(M), R = A(L, j), Q, ee, te = 0, oe = R.length;
          for (; te < oe; ) {
            let W = te + oe >> 1, X = R[W], ue = V(X), De = q(X);
            if (ue <= Y && H <= De)
              return S(X, M, j, X);
            if (De <= Y) {
              Q = X, te = W + 1;
              continue;
            }
            if (H <= ue) {
              ee = X, oe = W;
              continue;
            }
            throw new Error("Comment location overlaps with node location");
          }
          if ($ && $.type === "TemplateLiteral") {
            let {quasis: W} = $, X = F(W, M, j);
            Q && F(W, Q, j) !== X && (Q = null), ee && F(W, ee, j) !== X && (ee = null);
          }
          return {enclosingNode: $, precedingNode: Q, followingNode: ee};
        }
        var B = () => false;
        function I(L, M, j, $) {
          if (!Array.isArray(L))
            return;
          let V = [], {locStart: q, locEnd: Y, printer: {handleComments: H = {}}} = $, {avoidAstMutation: R, ownLine: Q = B, endOfLine: ee = B, remaining: te = B} = H, oe = L.map((W, X) => Object.assign(Object.assign({}, S(M, W, $)), {}, {comment: W, text: j, options: $, ast: M, isLastComment: L.length - 1 === X}));
          for (let [W, X] of oe.entries()) {
            let {comment: ue, precedingNode: De, enclosingNode: ie, followingNode: G, text: z, options: U, ast: le, isLastComment: ge} = X;
            if (U.parser === "json" || U.parser === "json5" || U.parser === "__js_expression" || U.parser === "__vue_expression" || U.parser === "__vue_ts_expression") {
              if (q(ue) - q(le) <= 0) {
                f(le, ue);
                continue;
              }
              if (Y(ue) - Y(le) >= 0) {
                w(le, ue);
                continue;
              }
            }
            let Ae;
            if (R ? Ae = [X] : (ue.enclosingNode = ie, ue.precedingNode = De, ue.followingNode = G, Ae = [ue, z, U, le, ge]), P(z, U, oe, W))
              ue.placement = "ownLine", Q(...Ae) || (G ? f(G, ue) : De ? w(De, ue) : h(ie || le, ue));
            else if (C(z, U, oe, W))
              ue.placement = "endOfLine", ee(...Ae) || (De ? w(De, ue) : G ? f(G, ue) : h(ie || le, ue));
            else if (ue.placement = "remaining", !te(...Ae))
              if (De && G) {
                let Ne = V.length;
                Ne > 0 && V[Ne - 1].followingNode !== G && D(V, z, U), V.push(X);
              } else
                De ? w(De, ue) : G ? f(G, ue) : h(ie || le, ue);
          }
          if (D(V, j, $), !R)
            for (let W of L)
              delete W.precedingNode, delete W.enclosingNode, delete W.followingNode;
        }
        var k = (L) => !/[\S\n\u2028\u2029]/.test(L);
        function P(L, M, j, $) {
          let {comment: V, precedingNode: q} = j[$], {locStart: Y, locEnd: H} = M, R = Y(V);
          if (q)
            for (let Q = $ - 1; Q >= 0; Q--) {
              let {comment: ee, precedingNode: te} = j[Q];
              if (te !== q || !k(L.slice(H(ee), R)))
                break;
              R = Y(ee);
            }
          return v(L, R, {backwards: true});
        }
        function C(L, M, j, $) {
          let {comment: V, followingNode: q} = j[$], {locStart: Y, locEnd: H} = M, R = H(V);
          if (q)
            for (let Q = $ + 1; Q < j.length; Q++) {
              let {comment: ee, followingNode: te} = j[Q];
              if (te !== q || !k(L.slice(R, Y(ee))))
                break;
              R = H(ee);
            }
          return v(L, R);
        }
        function D(L, M, j) {
          let $ = L.length;
          if ($ === 0)
            return;
          let {precedingNode: V, followingNode: q, enclosingNode: Y} = L[0], H = j.printer.getGapRegex && j.printer.getGapRegex(Y) || /^[\s(]*$/, R = j.locStart(q), Q;
          for (Q = $; Q > 0; --Q) {
            let {comment: ee, precedingNode: te, followingNode: oe} = L[Q - 1];
            t.strictEqual(te, V), t.strictEqual(oe, q);
            let W = M.slice(j.locEnd(ee), R);
            if (H.test(W))
              R = j.locStart(ee);
            else
              break;
          }
          for (let [ee, {comment: te}] of L.entries())
            ee < Q ? w(V, te) : f(q, te);
          for (let ee of [V, q])
            ee.comments && ee.comments.length > 1 && ee.comments.sort((te, oe) => j.locStart(te) - j.locStart(oe));
          L.length = 0;
        }
        function g(L, M) {
          let j = L.getValue();
          return j.printed = true, M.printer.printComment(L, M);
        }
        function F(L, M, j) {
          let $ = j.locStart(M) - 1;
          for (let V = 1; V < L.length; ++V)
            if ($ < j.locStart(L[V]))
              return V - 1;
          return 0;
        }
        function l(L, M) {
          let j = L.getValue(), $ = [g(L, M)], {printer: V, originalText: q, locStart: Y, locEnd: H} = M;
          if (V.isBlockComment && V.isBlockComment(j)) {
            let ee = v(q, H(j)) ? v(q, Y(j), {backwards: true}) ? a : s : " ";
            $.push(ee);
          } else
            $.push(a);
          let Q = m(q, d(q, H(j)));
          return Q !== false && v(q, Q) && $.push(a), $;
        }
        function E(L, M) {
          let j = L.getValue(), $ = g(L, M), {printer: V, originalText: q, locStart: Y} = M, H = V.isBlockComment && V.isBlockComment(j);
          if (v(q, Y(j), {backwards: true})) {
            let Q = p(q, j, Y);
            return i([a, Q ? a : "", $]);
          }
          let R = [" ", $];
          return H || (R = [i(R), r]), R;
        }
        function y(L, M, j, $) {
          let V = [], q = L.getValue();
          return !q || !q.comments || (L.each(() => {
            let Y = L.getValue();
            !Y.leading && !Y.trailing && (!$ || $(Y)) && V.push(g(L, M));
          }, "comments"), V.length === 0) ? "" : j ? o(a, V) : u([a, o(a, V)]);
        }
        function N(L, M, j) {
          let $ = L.getValue();
          if (!$)
            return {};
          let V = $.comments || [];
          j && (V = V.filter((R) => !j.has(R)));
          let q = $ === M.cursorNode;
          if (V.length === 0) {
            let R = q ? c : "";
            return {leading: R, trailing: R};
          }
          let Y = [], H = [];
          return L.each(() => {
            let R = L.getValue();
            if (j && j.has(R))
              return;
            let {leading: Q, trailing: ee} = R;
            Q ? Y.push(l(L, M)) : ee && H.push(E(L, M));
          }, "comments"), q && (Y.unshift(c), H.push(c)), {leading: Y, trailing: H};
        }
        function x(L, M, j, $) {
          let {leading: V, trailing: q} = N(L, j, $);
          return !V && !q ? M : [V, M, q];
        }
        function b(L) {
          if (!!L)
            for (let M of L) {
              if (!M.printed)
                throw new Error('Comment "' + M.value.trim() + '" was not printed. Please report this error!');
              delete M.printed;
            }
        }
        n.exports = {attach: I, printComments: x, printCommentsSeparately: N, printDanglingComments: y, getSortedChildNodes: A, ensureAllCommentsPrinted: b};
      }}), Cm = Z({"src/common/ast-path.js"(e, n) {
        re();
        var t = it();
        function s(u, i) {
          let o = a(u.stack, i);
          return o === -1 ? null : u.stack[o];
        }
        function a(u, i) {
          for (let o = u.length - 1; o >= 0; o -= 2) {
            let c = u[o];
            if (c && !Array.isArray(c) && --i < 0)
              return o;
          }
          return -1;
        }
        var r = class {
          constructor(u) {
            this.stack = [u];
          }
          getName() {
            let {stack: u} = this, {length: i} = u;
            return i > 1 ? u[i - 2] : null;
          }
          getValue() {
            return t(this.stack);
          }
          getNode() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return s(this, u);
          }
          getParentNode() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return s(this, u + 1);
          }
          call(u) {
            let {stack: i} = this, {length: o} = i, c = t(i);
            for (var v = arguments.length, m = new Array(v > 1 ? v - 1 : 0), d = 1; d < v; d++)
              m[d - 1] = arguments[d];
            for (let f of m)
              c = c[f], i.push(f, c);
            let p = u(this);
            return i.length = o, p;
          }
          callParent(u) {
            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = a(this.stack, i + 1), c = this.stack.splice(o + 1), v = u(this);
            return this.stack.push(...c), v;
          }
          each(u) {
            let {stack: i} = this, {length: o} = i, c = t(i);
            for (var v = arguments.length, m = new Array(v > 1 ? v - 1 : 0), d = 1; d < v; d++)
              m[d - 1] = arguments[d];
            for (let p of m)
              c = c[p], i.push(p, c);
            for (let p = 0; p < c.length; ++p)
              i.push(p, c[p]), u(this, p, c), i.length -= 2;
            i.length = o;
          }
          map(u) {
            let i = [];
            for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), v = 1; v < o; v++)
              c[v - 1] = arguments[v];
            return this.each((m, d, p) => {
              i[d] = u(m, d, p);
            }, ...c), i;
          }
          try(u) {
            let {stack: i} = this, o = [...i];
            try {
              return u();
            } finally {
              i.length = 0, i.push(...o);
            }
          }
          match() {
            let u = this.stack.length - 1, i = null, o = this.stack[u--];
            for (var c = arguments.length, v = new Array(c), m = 0; m < c; m++)
              v[m] = arguments[m];
            for (let d of v) {
              if (o === void 0)
                return false;
              let p = null;
              if (typeof i == "number" && (p = i, i = this.stack[u--], o = this.stack[u--]), d && !d(o, i, p))
                return false;
              i = this.stack[u--], o = this.stack[u--];
            }
            return true;
          }
          findAncestor(u) {
            let i = this.stack.length - 1, o = null, c = this.stack[i--];
            for (; c; ) {
              let v = null;
              if (typeof o == "number" && (v = o, o = this.stack[i--], c = this.stack[i--]), o !== null && u(c, o, v))
                return c;
              o = this.stack[i--], c = this.stack[i--];
            }
          }
        };
        n.exports = r;
      }}), Em = Z({"src/main/multiparser.js"(e, n) {
        re();
        var {utils: {stripTrailingHardline: t}} = Oe(), {normalize: s} = Wa(), a = et();
        function r(i, o, c, v) {
          if (c.printer.embed && c.embeddedLanguageFormatting === "auto")
            return c.printer.embed(i, o, (m, d, p) => u(m, d, c, v, p), c);
        }
        function u(i, o, c, v) {
          let {stripTrailingHardline: m = false} = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, d = s(Object.assign(Object.assign(Object.assign({}, c), o), {}, {parentParser: c.parser, originalText: i}), {passThrough: true}), p = Gn().parse(i, d), {ast: f} = p;
          i = p.text;
          let h = f.comments;
          delete f.comments, a.attach(h, f, i, d), d[Symbol.for("comments")] = h || [], d[Symbol.for("tokens")] = f.tokens || [];
          let w = v(f, d);
          return a.ensureAllCommentsPrinted(h), m ? typeof w == "string" ? w.replace(/(?:\r?\n)*$/, "") : t(w) : w;
        }
        n.exports = {printSubtree: r};
      }}), Fm = Z({"src/main/ast-to-doc.js"(e, n) {
        re();
        var t = Cm(), {builders: {hardline: s, addAlignmentToDoc: a}, utils: {propagateBreaks: r}} = Oe(), {printComments: u} = et(), i = Em();
        function o(m, d) {
          let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, {printer: f} = d;
          f.preprocess && (m = f.preprocess(m, d));
          let h = new Map(), w = new t(m), T = A();
          return p > 0 && (T = a([s, T], p, d.tabWidth)), r(T), T;
          function A(B, I) {
            return B === void 0 || B === w ? S(I) : Array.isArray(B) ? w.call(() => S(I), ...B) : w.call(() => S(I), B);
          }
          function S(B) {
            let I = w.getValue(), k = I && typeof I == "object" && B === void 0;
            if (k && h.has(I))
              return h.get(I);
            let P = v(w, d, A, B);
            return k && h.set(I, P), P;
          }
        }
        function c(m, d) {
          let {originalText: p, [Symbol.for("comments")]: f, locStart: h, locEnd: w} = d, T = h(m), A = w(m), S = new Set();
          for (let B of f)
            h(B) >= T && w(B) <= A && (B.printed = true, S.add(B));
          return {doc: p.slice(T, A), printedComments: S};
        }
        function v(m, d, p, f) {
          let h = m.getValue(), {printer: w} = d, T, A;
          if (w.hasPrettierIgnore && w.hasPrettierIgnore(m))
            ({doc: T, printedComments: A} = c(h, d));
          else {
            if (h)
              try {
                T = i.printSubtree(m, p, d, o);
              } catch (S) {
                if (globalThis.PRETTIER_DEBUG)
                  throw S;
              }
            T || (T = w.print(m, d, p, f));
          }
          return (!w.willPrintOwnComments || !w.willPrintOwnComments(m, d)) && (T = u(m, T, d, A)), T;
        }
        n.exports = o;
      }}), Am = Z({"src/main/range-util.js"(e, n) {
        re();
        var t = Xt(), s = et(), a = (f) => {
          let {parser: h} = f;
          return h === "json" || h === "json5" || h === "json-stringify";
        };
        function r(f, h) {
          let w = [f.node, ...f.parentNodes], T = new Set([h.node, ...h.parentNodes]);
          return w.find((A) => v.has(A.type) && T.has(A));
        }
        function u(f) {
          let h = f.length - 1;
          for (; ; ) {
            let w = f[h];
            if (w && (w.type === "Program" || w.type === "File"))
              h--;
            else
              break;
          }
          return f.slice(0, h + 1);
        }
        function i(f, h, w) {
          let {locStart: T, locEnd: A} = w, S = f.node, B = h.node;
          if (S === B)
            return {startNode: S, endNode: B};
          let I = T(f.node);
          for (let P of u(h.parentNodes))
            if (T(P) >= I)
              B = P;
            else
              break;
          let k = A(h.node);
          for (let P of u(f.parentNodes))
            if (A(P) <= k)
              S = P;
            else
              break;
          return {startNode: S, endNode: B};
        }
        function o(f, h, w, T) {
          let A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], S = arguments.length > 5 ? arguments[5] : void 0, {locStart: B, locEnd: I} = w, k = B(f), P = I(f);
          if (!(h > P || h < k || S === "rangeEnd" && h === k || S === "rangeStart" && h === P)) {
            for (let C of s.getSortedChildNodes(f, w)) {
              let D = o(C, h, w, T, [f, ...A], S);
              if (D)
                return D;
            }
            if (!T || T(f, A[0]))
              return {node: f, parentNodes: A};
          }
        }
        function c(f, h) {
          return h !== "DeclareExportDeclaration" && f !== "TypeParameterDeclaration" && (f === "Directive" || f === "TypeAlias" || f === "TSExportAssignment" || f.startsWith("Declare") || f.startsWith("TSDeclare") || f.endsWith("Statement") || f.endsWith("Declaration"));
        }
        var v = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), m = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function d(f, h, w) {
          if (!h)
            return false;
          switch (f.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return c(h.type, w && w.type);
            case "json":
            case "json5":
            case "json-stringify":
              return v.has(h.type);
            case "graphql":
              return m.has(h.kind);
            case "vue":
              return h.tag !== "root";
          }
          return false;
        }
        function p(f, h, w) {
          let {rangeStart: T, rangeEnd: A, locStart: S, locEnd: B} = h;
          t.ok(A > T);
          let I = f.slice(T, A).search(/\S/), k = I === -1;
          if (!k)
            for (T += I; A > T && !/\S/.test(f[A - 1]); --A)
              ;
          let P = o(w, T, h, (F, l) => d(h, F, l), [], "rangeStart"), C = k ? P : o(w, A, h, (F) => d(h, F), [], "rangeEnd");
          if (!P || !C)
            return {rangeStart: 0, rangeEnd: 0};
          let D, g;
          if (a(h)) {
            let F = r(P, C);
            D = F, g = F;
          } else
            ({startNode: D, endNode: g} = i(P, C, h));
          return {rangeStart: Math.min(S(D), S(g)), rangeEnd: Math.max(B(D), B(g))};
        }
        n.exports = {calculateRange: p, findNodeAtOffset: o};
      }}), Sm = Z({"src/main/core.js"(e, n) {
        re();
        var {diffArrays: t} = aD(), {printer: {printDocToString: s}, debug: {printDocToDebug: a}} = Oe(), {getAlignmentSize: r} = Ue(), {guessEndOfLine: u, convertEndOfLineToChars: i, countEndOfLineChars: o, normalizeEndOfLine: c} = jn(), v = Wa().normalize, m = vm(), d = et(), p = Gn(), f = Fm(), h = Am(), w = "\uFEFF", T = Symbol("cursor");
        function A(g, F, l) {
          let E = F.comments;
          return E && (delete F.comments, d.attach(E, F, g, l)), l[Symbol.for("comments")] = E || [], l[Symbol.for("tokens")] = F.tokens || [], l.originalText = g, E;
        }
        function S(g, F) {
          let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!g || g.trim().length === 0)
            return {formatted: "", cursorOffset: -1, comments: []};
          let {ast: E, text: y} = p.parse(g, F);
          if (F.cursorOffset >= 0) {
            let L = h.findNodeAtOffset(E, F.cursorOffset, F);
            L && L.node && (F.cursorNode = L.node);
          }
          let N = A(y, E, F), x = f(E, F, l), b = s(x, F);
          if (d.ensureAllCommentsPrinted(N), l > 0) {
            let L = b.formatted.trim();
            b.cursorNodeStart !== void 0 && (b.cursorNodeStart -= b.formatted.indexOf(L)), b.formatted = L + i(F.endOfLine);
          }
          if (F.cursorOffset >= 0) {
            let L, M, j, $, V;
            if (F.cursorNode && b.cursorNodeText ? (L = F.locStart(F.cursorNode), M = y.slice(L, F.locEnd(F.cursorNode)), j = F.cursorOffset - L, $ = b.cursorNodeStart, V = b.cursorNodeText) : (L = 0, M = y, j = F.cursorOffset, $ = 0, V = b.formatted), M === V)
              return {formatted: b.formatted, cursorOffset: $ + j, comments: N};
            let q = [...M];
            q.splice(j, 0, T);
            let Y = [...V], H = t(q, Y), R = $;
            for (let Q of H)
              if (Q.removed) {
                if (Q.value.includes(T))
                  break;
              } else
                R += Q.count;
            return {formatted: b.formatted, cursorOffset: R, comments: N};
          }
          return {formatted: b.formatted, cursorOffset: -1, comments: N};
        }
        function B(g, F) {
          let {ast: l, text: E} = p.parse(g, F), {rangeStart: y, rangeEnd: N} = h.calculateRange(E, F, l), x = E.slice(y, N), b = Math.min(y, E.lastIndexOf(`
`, y) + 1), L = E.slice(b, y).match(/^\s*/)[0], M = r(L, F.tabWidth), j = S(x, Object.assign(Object.assign({}, F), {}, {rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: F.cursorOffset > y && F.cursorOffset <= N ? F.cursorOffset - y : -1, endOfLine: "lf"}), M), $ = j.formatted.trimEnd(), {cursorOffset: V} = F;
          V > N ? V += $.length - x.length : j.cursorOffset >= 0 && (V = j.cursorOffset + y);
          let q = E.slice(0, y) + $ + E.slice(N);
          if (F.endOfLine !== "lf") {
            let Y = i(F.endOfLine);
            V >= 0 && Y === `\r
` && (V += o(q.slice(0, V), `
`)), q = q.replace(/\n/g, Y);
          }
          return {formatted: q, cursorOffset: V, comments: j.comments};
        }
        function I(g, F, l) {
          return typeof F != "number" || Number.isNaN(F) || F < 0 || F > g.length ? l : F;
        }
        function k(g, F) {
          let {cursorOffset: l, rangeStart: E, rangeEnd: y} = F;
          return l = I(g, l, -1), E = I(g, E, 0), y = I(g, y, g.length), Object.assign(Object.assign({}, F), {}, {cursorOffset: l, rangeStart: E, rangeEnd: y});
        }
        function P(g, F) {
          let {cursorOffset: l, rangeStart: E, rangeEnd: y, endOfLine: N} = k(g, F), x = g.charAt(0) === w;
          if (x && (g = g.slice(1), l--, E--, y--), N === "auto" && (N = u(g)), g.includes("\r")) {
            let b = (L) => o(g.slice(0, Math.max(L, 0)), `\r
`);
            l -= b(l), E -= b(E), y -= b(y), g = c(g);
          }
          return {hasBOM: x, text: g, options: k(g, Object.assign(Object.assign({}, F), {}, {cursorOffset: l, rangeStart: E, rangeEnd: y, endOfLine: N}))};
        }
        function C(g, F) {
          let l = p.resolveParser(F);
          return !l.hasPragma || l.hasPragma(g);
        }
        function D(g, F) {
          let {hasBOM: l, text: E, options: y} = P(g, v(F));
          if (y.rangeStart >= y.rangeEnd && E !== "" || y.requirePragma && !C(E, y))
            return {formatted: g, cursorOffset: F.cursorOffset, comments: []};
          let N;
          return y.rangeStart > 0 || y.rangeEnd < E.length ? N = B(E, y) : (!y.requirePragma && y.insertPragma && y.printer.insertPragma && !C(E, y) && (E = y.printer.insertPragma(E)), N = S(E, y)), l && (N.formatted = w + N.formatted, N.cursorOffset >= 0 && N.cursorOffset++), N;
        }
        n.exports = {formatWithCursor: D, parse(g, F, l) {
          let {text: E, options: y} = P(g, v(F)), N = p.parse(E, y);
          return l && (N.ast = m(N.ast, y)), N;
        }, formatAST(g, F) {
          F = v(F);
          let l = f(g, F);
          return s(l, F);
        }, formatDoc(g, F) {
          return D(a(g), Object.assign(Object.assign({}, F), {}, {parser: "__js_expression"})).formatted;
        }, printToDoc(g, F) {
          F = v(F);
          let {ast: l, text: E} = p.parse(g, F);
          return A(E, l, F), f(l, F);
        }, printDocToString(g, F) {
          return s(g, v(F));
        }};
      }}), xm = Z({"src/common/util-shared.js"(e, n) {
        re();
        var {getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: r, skip: u, skipWhitespace: i, skipSpaces: o, skipNewline: c, skipToLineEnd: v, skipEverythingButNewLine: m, skipInlineComment: d, skipTrailingComment: p, hasNewline: f, hasNewlineInRange: h, hasSpaces: w, isNextLineEmpty: T, isNextLineEmptyAfterIndex: A, isPreviousLineEmpty: S, getNextNonSpaceNonCommentCharacterIndex: B, makeString: I, addLeadingComment: k, addDanglingComment: P, addTrailingComment: C} = Ue();
        n.exports = {getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: r, skip: u, skipWhitespace: i, skipSpaces: o, skipNewline: c, skipToLineEnd: v, skipEverythingButNewLine: m, skipInlineComment: d, skipTrailingComment: p, hasNewline: f, hasNewlineInRange: h, hasSpaces: w, isNextLineEmpty: T, isNextLineEmptyAfterIndex: A, isPreviousLineEmpty: S, getNextNonSpaceNonCommentCharacterIndex: B, makeString: I, addLeadingComment: k, addDanglingComment: P, addTrailingComment: C};
      }}), Bt = Z({"src/utils/create-language.js"(e, n) {
        re(), n.exports = function(t, s) {
          let {languageId: a} = t, r = kn(t, Zf);
          return Object.assign(Object.assign({linguistLanguageId: a}, r), s(t));
        };
      }}), bm = Z({"node_modules/esutils/lib/ast.js"(e, n) {
        re(), function() {
          function t(o) {
            if (o == null)
              return false;
            switch (o.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return true;
            }
            return false;
          }
          function s(o) {
            if (o == null)
              return false;
            switch (o.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return true;
            }
            return false;
          }
          function a(o) {
            if (o == null)
              return false;
            switch (o.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return true;
            }
            return false;
          }
          function r(o) {
            return a(o) || o != null && o.type === "FunctionDeclaration";
          }
          function u(o) {
            switch (o.type) {
              case "IfStatement":
                return o.alternate != null ? o.alternate : o.consequent;
              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return o.body;
            }
            return null;
          }
          function i(o) {
            var c;
            if (o.type !== "IfStatement" || o.alternate == null)
              return false;
            c = o.consequent;
            do {
              if (c.type === "IfStatement" && c.alternate == null)
                return true;
              c = u(c);
            } while (c);
            return false;
          }
          n.exports = {isExpression: t, isStatement: a, isIterationStatement: s, isSourceElement: r, isProblematicIfStatement: i, trailingStatement: u};
        }();
      }}), $a = Z({"node_modules/esutils/lib/code.js"(e, n) {
        re(), function() {
          var t, s, a, r, u, i;
          s = {NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/}, t = {NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/};
          function o(A) {
            return 48 <= A && A <= 57;
          }
          function c(A) {
            return 48 <= A && A <= 57 || 97 <= A && A <= 102 || 65 <= A && A <= 70;
          }
          function v(A) {
            return A >= 48 && A <= 55;
          }
          a = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
          function m(A) {
            return A === 32 || A === 9 || A === 11 || A === 12 || A === 160 || A >= 5760 && a.indexOf(A) >= 0;
          }
          function d(A) {
            return A === 10 || A === 13 || A === 8232 || A === 8233;
          }
          function p(A) {
            if (A <= 65535)
              return String.fromCharCode(A);
            var S = String.fromCharCode(Math.floor((A - 65536) / 1024) + 55296), B = String.fromCharCode((A - 65536) % 1024 + 56320);
            return S + B;
          }
          for (r = new Array(128), i = 0; i < 128; ++i)
            r[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i === 36 || i === 95;
          for (u = new Array(128), i = 0; i < 128; ++i)
            u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 36 || i === 95;
          function f(A) {
            return A < 128 ? r[A] : s.NonAsciiIdentifierStart.test(p(A));
          }
          function h(A) {
            return A < 128 ? u[A] : s.NonAsciiIdentifierPart.test(p(A));
          }
          function w(A) {
            return A < 128 ? r[A] : t.NonAsciiIdentifierStart.test(p(A));
          }
          function T(A) {
            return A < 128 ? u[A] : t.NonAsciiIdentifierPart.test(p(A));
          }
          n.exports = {isDecimalDigit: o, isHexDigit: c, isOctalDigit: v, isWhiteSpace: m, isLineTerminator: d, isIdentifierStartES5: f, isIdentifierPartES5: h, isIdentifierStartES6: w, isIdentifierPartES6: T};
        }();
      }}), Tm = Z({"node_modules/esutils/lib/keyword.js"(e, n) {
        re(), function() {
          var t = $a();
          function s(f) {
            switch (f) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return true;
              default:
                return false;
            }
          }
          function a(f, h) {
            return !h && f === "yield" ? false : r(f, h);
          }
          function r(f, h) {
            if (h && s(f))
              return true;
            switch (f.length) {
              case 2:
                return f === "if" || f === "in" || f === "do";
              case 3:
                return f === "var" || f === "for" || f === "new" || f === "try";
              case 4:
                return f === "this" || f === "else" || f === "case" || f === "void" || f === "with" || f === "enum";
              case 5:
                return f === "while" || f === "break" || f === "catch" || f === "throw" || f === "const" || f === "yield" || f === "class" || f === "super";
              case 6:
                return f === "return" || f === "typeof" || f === "delete" || f === "switch" || f === "export" || f === "import";
              case 7:
                return f === "default" || f === "finally" || f === "extends";
              case 8:
                return f === "function" || f === "continue" || f === "debugger";
              case 10:
                return f === "instanceof";
              default:
                return false;
            }
          }
          function u(f, h) {
            return f === "null" || f === "true" || f === "false" || a(f, h);
          }
          function i(f, h) {
            return f === "null" || f === "true" || f === "false" || r(f, h);
          }
          function o(f) {
            return f === "eval" || f === "arguments";
          }
          function c(f) {
            var h, w, T;
            if (f.length === 0 || (T = f.charCodeAt(0), !t.isIdentifierStartES5(T)))
              return false;
            for (h = 1, w = f.length; h < w; ++h)
              if (T = f.charCodeAt(h), !t.isIdentifierPartES5(T))
                return false;
            return true;
          }
          function v(f, h) {
            return (f - 55296) * 1024 + (h - 56320) + 65536;
          }
          function m(f) {
            var h, w, T, A, S;
            if (f.length === 0)
              return false;
            for (S = t.isIdentifierStartES6, h = 0, w = f.length; h < w; ++h) {
              if (T = f.charCodeAt(h), 55296 <= T && T <= 56319) {
                if (++h, h >= w || (A = f.charCodeAt(h), !(56320 <= A && A <= 57343)))
                  return false;
                T = v(T, A);
              }
              if (!S(T))
                return false;
              S = t.isIdentifierPartES6;
            }
            return true;
          }
          function d(f, h) {
            return c(f) && !u(f, h);
          }
          function p(f, h) {
            return m(f) && !i(f, h);
          }
          n.exports = {isKeywordES5: a, isKeywordES6: r, isReservedWordES5: u, isReservedWordES6: i, isRestrictedWord: o, isIdentifierNameES5: c, isIdentifierNameES6: m, isIdentifierES5: d, isIdentifierES6: p};
        }();
      }}), Bm = Z({"node_modules/esutils/lib/utils.js"(e) {
        re(), function() {
          e.ast = bm(), e.code = $a(), e.keyword = Tm();
        }();
      }}), It = Z({"src/language-js/utils/is-block-comment.js"(e, n) {
        re();
        var t = new Set(["Block", "CommentBlock", "MultiLine"]), s = (a) => t.has(a == null ? void 0 : a.type);
        n.exports = s;
      }}), Nm = Z({"src/language-js/utils/is-node-matches.js"(e, n) {
        re();
        function t(a, r) {
          let u = r.split(".");
          for (let i = u.length - 1; i >= 0; i--) {
            let o = u[i];
            if (i === 0)
              return a.type === "Identifier" && a.name === o;
            if (a.type !== "MemberExpression" || a.optional || a.computed || a.property.type !== "Identifier" || a.property.name !== o)
              return false;
            a = a.object;
          }
        }
        function s(a, r) {
          return r.some((u) => t(a, u));
        }
        n.exports = s;
      }}), Ke = Z({"src/language-js/utils/index.js"(e, n) {
        re();
        var t = Bm().keyword.isIdentifierNameES5, {getLast: s, hasNewline: a, skipWhitespace: r, isNonEmptyArray: u, isNextLineEmptyAfterIndex: i, getStringWidth: o} = Ue(), {locStart: c, locEnd: v, hasSameLocStart: m} = st(), d = It(), p = Nm(), f = "(?:(?=.)\\s)", h = new RegExp("^".concat(f, "*:")), w = new RegExp("^".concat(f, "*::"));
        function T(O) {
          var fe, Te;
          return ((fe = O.extra) === null || fe === void 0 ? void 0 : fe.parenthesized) && d((Te = O.trailingComments) === null || Te === void 0 ? void 0 : Te[0]) && h.test(O.trailingComments[0].value);
        }
        function A(O) {
          let fe = O == null ? void 0 : O[0];
          return d(fe) && w.test(fe.value);
        }
        function S(O, fe) {
          if (!O || typeof O != "object")
            return false;
          if (Array.isArray(O))
            return O.some(($e) => S($e, fe));
          let Te = fe(O);
          return typeof Te == "boolean" ? Te : Object.values(O).some(($e) => S($e, fe));
        }
        function B(O) {
          return O.type === "AssignmentExpression" || O.type === "BinaryExpression" || O.type === "LogicalExpression" || O.type === "NGPipeExpression" || O.type === "ConditionalExpression" || ue(O) || De(O) || O.type === "SequenceExpression" || O.type === "TaggedTemplateExpression" || O.type === "BindExpression" || O.type === "UpdateExpression" && !O.prefix || O.type === "TSAsExpression" || O.type === "TSNonNullExpression";
        }
        function I(O) {
          var fe, Te, $e, Je, Ze, ut;
          return O.expressions ? O.expressions[0] : (fe = (Te = ($e = (Je = (Ze = (ut = O.left) !== null && ut !== void 0 ? ut : O.test) !== null && Ze !== void 0 ? Ze : O.callee) !== null && Je !== void 0 ? Je : O.object) !== null && $e !== void 0 ? $e : O.tag) !== null && Te !== void 0 ? Te : O.argument) !== null && fe !== void 0 ? fe : O.expression;
        }
        function k(O, fe) {
          if (fe.expressions)
            return ["expressions", 0];
          if (fe.left)
            return ["left"];
          if (fe.test)
            return ["test"];
          if (fe.object)
            return ["object"];
          if (fe.callee)
            return ["callee"];
          if (fe.tag)
            return ["tag"];
          if (fe.argument)
            return ["argument"];
          if (fe.expression)
            return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }
        function P(O) {
          return O = new Set(O), (fe) => O.has(fe == null ? void 0 : fe.type);
        }
        var C = P(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), D = P(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function g(O) {
          let fe = O.getParentNode();
          return O.getName() === "declaration" && D(fe) ? fe : null;
        }
        var F = P(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
        function l(O) {
          return O.type === "NumericLiteral" || O.type === "Literal" && typeof O.value == "number";
        }
        function E(O) {
          return O.type === "UnaryExpression" && (O.operator === "+" || O.operator === "-") && l(O.argument);
        }
        function y(O) {
          return O.type === "StringLiteral" || O.type === "Literal" && typeof O.value == "string";
        }
        var N = P(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), x = P(["FunctionExpression", "ArrowFunctionExpression"]);
        function b(O) {
          return O.type === "FunctionExpression" || O.type === "ArrowFunctionExpression" && O.body.type === "BlockStatement";
        }
        function L(O) {
          return ue(O) && O.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(O.callee.name);
        }
        var M = P(["JSXElement", "JSXFragment"]);
        function j(O, fe) {
          if (O.parentParser !== "markdown" && O.parentParser !== "mdx")
            return false;
          let Te = fe.getNode();
          if (!Te.expression || !M(Te.expression))
            return false;
          let $e = fe.getParentNode();
          return $e.type === "Program" && $e.body.length === 1;
        }
        function $(O) {
          return O.kind === "get" || O.kind === "set";
        }
        function V(O) {
          return $(O) || m(O, O.value);
        }
        function q(O) {
          return (O.type === "ObjectTypeProperty" || O.type === "ObjectTypeInternalSlot") && O.value.type === "FunctionTypeAnnotation" && !O.static && !V(O);
        }
        function Y(O) {
          return (O.type === "TypeAnnotation" || O.type === "TSTypeAnnotation") && O.typeAnnotation.type === "FunctionTypeAnnotation" && !O.static && !m(O, O.typeAnnotation);
        }
        var H = P(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        function R(O) {
          return De(O) || O.type === "BindExpression" && Boolean(O.object);
        }
        var Q = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        function ee(O) {
          return O ? !!((O.type === "GenericTypeAnnotation" || O.type === "TSTypeReference") && !O.typeParameters || Q.has(O.type)) : false;
        }
        function te(O) {
          let fe = /^(?:before|after)(?:Each|All)$/;
          return O.callee.type === "Identifier" && fe.test(O.callee.name) && O.arguments.length === 1;
        }
        var oe = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
        function W(O) {
          return p(O, oe);
        }
        function X(O, fe) {
          if (O.type !== "CallExpression")
            return false;
          if (O.arguments.length === 1) {
            if (L(O) && fe && X(fe))
              return x(O.arguments[0]);
            if (te(O))
              return L(O.arguments[0]);
          } else if ((O.arguments.length === 2 || O.arguments.length === 3) && (O.arguments[0].type === "TemplateLiteral" || y(O.arguments[0])) && W(O.callee))
            return O.arguments[2] && !l(O.arguments[2]) ? false : (O.arguments.length === 2 ? x(O.arguments[1]) : b(O.arguments[1]) && Se(O.arguments[1]).length <= 1) || L(O.arguments[1]);
          return false;
        }
        var ue = P(["CallExpression", "OptionalCallExpression"]), De = P(["MemberExpression", "OptionalMemberExpression"]);
        function ie(O) {
          let fe = "expressions";
          O.type === "TSTemplateLiteralType" && (fe = "types");
          let Te = O[fe];
          return Te.length === 0 ? false : Te.every(($e) => {
            if (se($e))
              return false;
            if ($e.type === "Identifier" || $e.type === "ThisExpression")
              return true;
            if (De($e)) {
              let Je = $e;
              for (; De(Je); )
                if (Je.property.type !== "Identifier" && Je.property.type !== "Literal" && Je.property.type !== "StringLiteral" && Je.property.type !== "NumericLiteral" || (Je = Je.object, se(Je)))
                  return false;
              return Je.type === "Identifier" || Je.type === "ThisExpression";
            }
            return false;
          });
        }
        function G(O, fe) {
          return O === "+" || O === "-" ? O + fe : fe;
        }
        function z(O, fe) {
          let Te = c(fe), $e = r(O, v(fe));
          return $e !== false && O.slice(Te, Te + 2) === "/*" && O.slice($e, $e + 2) === "*/";
        }
        function U(O, fe) {
          return M(fe) ? Re(fe) : se(fe, Le.Leading, (Te) => a(O, v(Te)));
        }
        function le(O, fe) {
          return fe.parser !== "json" && y(O.key) && ve(O.key).slice(1, -1) === O.key.value && (t(O.key.value) && !(fe.parser === "babel-ts" && O.type === "ClassProperty" || fe.parser === "typescript" && O.type === "PropertyDefinition") || ge(O.key.value) && String(Number(O.key.value)) === O.key.value && (fe.parser === "babel" || fe.parser === "acorn" || fe.parser === "espree" || fe.parser === "meriyah" || fe.parser === "__babel_estree"));
        }
        function ge(O) {
          return /^(?:\d+|\d+\.\d+)$/.test(O);
        }
        function Ae(O, fe) {
          let Te = /^[fx]?(?:describe|it|test)$/;
          return fe.type === "TaggedTemplateExpression" && fe.quasi === O && fe.tag.type === "MemberExpression" && fe.tag.property.type === "Identifier" && fe.tag.property.name === "each" && (fe.tag.object.type === "Identifier" && Te.test(fe.tag.object.name) || fe.tag.object.type === "MemberExpression" && fe.tag.object.property.type === "Identifier" && (fe.tag.object.property.name === "only" || fe.tag.object.property.name === "skip") && fe.tag.object.object.type === "Identifier" && Te.test(fe.tag.object.object.name));
        }
        function Ne(O) {
          return O.quasis.some((fe) => fe.value.raw.includes(`
`));
        }
        function ke(O, fe) {
          return (O.type === "TemplateLiteral" && Ne(O) || O.type === "TaggedTemplateExpression" && Ne(O.quasi)) && !a(fe, c(O), {backwards: true});
        }
        function ce(O) {
          if (!se(O))
            return false;
          let fe = s(He(O, Le.Dangling));
          return fe && !d(fe);
        }
        function pe(O) {
          if (O.length <= 1)
            return false;
          let fe = 0;
          for (let Te of O)
            if (x(Te)) {
              if (fe += 1, fe > 1)
                return true;
            } else if (ue(Te)) {
              for (let $e of Te.arguments)
                if (x($e))
                  return true;
            }
          return false;
        }
        function de(O) {
          let fe = O.getValue(), Te = O.getParentNode();
          return ue(fe) && ue(Te) && Te.callee === fe && fe.arguments.length > Te.arguments.length && Te.arguments.length > 0;
        }
        function ae(O, fe) {
          if (fe >= 2)
            return false;
          let Te = (Je) => ae(Je, fe + 1), $e = O.type === "Literal" && "regex" in O && O.regex.pattern || O.type === "RegExpLiteral" && O.pattern;
          return $e && o($e) > 5 ? false : O.type === "Literal" || O.type === "BigIntLiteral" || O.type === "DecimalLiteral" || O.type === "BooleanLiteral" || O.type === "NullLiteral" || O.type === "NumericLiteral" || O.type === "RegExpLiteral" || O.type === "StringLiteral" || O.type === "Identifier" || O.type === "ThisExpression" || O.type === "Super" || O.type === "PrivateName" || O.type === "PrivateIdentifier" || O.type === "ArgumentPlaceholder" || O.type === "Import" ? true : O.type === "TemplateLiteral" ? O.quasis.every((Je) => !Je.value.raw.includes(`
`)) && O.expressions.every(Te) : O.type === "ObjectExpression" ? O.properties.every((Je) => !Je.computed && (Je.shorthand || Je.value && Te(Je.value))) : O.type === "ArrayExpression" ? O.elements.every((Je) => Je === null || Te(Je)) : ze(O) ? (O.type === "ImportExpression" || ae(O.callee, fe)) && Xe(O).every(Te) : De(O) ? ae(O.object, fe) && ae(O.property, fe) : O.type === "UnaryExpression" && (O.operator === "!" || O.operator === "-") ? ae(O.argument, fe) : O.type === "TSNonNullExpression" ? ae(O.expression, fe) : false;
        }
        function ve(O) {
          var fe, Te;
          return (fe = (Te = O.extra) === null || Te === void 0 ? void 0 : Te.raw) !== null && fe !== void 0 ? fe : O.raw;
        }
        function K(O) {
          return O;
        }
        function he(O) {
          return O.filepath && /\.tsx$/i.test(O.filepath);
        }
        function ye(O) {
          let fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return O.trailingComma === "es5" && fe === "es5" || O.trailingComma === "all" && (fe === "all" || fe === "es5");
        }
        function Ce(O, fe) {
          switch (O = Ee(O), O.type) {
            case "FunctionExpression":
            case "ClassExpression":
            case "DoExpression":
              return fe;
            case "ObjectExpression":
              return true;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return Ce(O.object, fe);
            case "TaggedTemplateExpression":
              return O.tag.type === "FunctionExpression" ? false : Ce(O.tag, fe);
            case "CallExpression":
            case "OptionalCallExpression":
              return O.callee.type === "FunctionExpression" ? false : Ce(O.callee, fe);
            case "ConditionalExpression":
              return Ce(O.test, fe);
            case "UpdateExpression":
              return !O.prefix && Ce(O.argument, fe);
            case "BindExpression":
              return O.object && Ce(O.object, fe);
            case "SequenceExpression":
              return Ce(O.expressions[0], fe);
            case "TSAsExpression":
            case "TSNonNullExpression":
              return Ce(O.expression, fe);
            default:
              return false;
          }
        }
        var Ie = {"==": true, "!=": true, "===": true, "!==": true}, Fe = {"*": true, "/": true, "%": true}, me = {">>": true, ">>>": true, "<<": true};
        function _(O, fe) {
          return !(ne(fe) !== ne(O) || O === "**" || Ie[O] && Ie[fe] || fe === "%" && Fe[O] || O === "%" && Fe[fe] || fe !== O && Fe[fe] && Fe[O] || me[O] && me[fe]);
        }
        var J = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((O, fe) => O.map((Te) => [Te, fe])));
        function ne(O) {
          return J.get(O);
        }
        function Ee(O) {
          for (; O.left; )
            O = O.left;
          return O;
        }
        function We(O) {
          return Boolean(me[O]) || O === "|" || O === "^" || O === "&";
        }
        function Be(O) {
          var fe;
          if (O.rest)
            return true;
          let Te = Se(O);
          return ((fe = s(Te)) === null || fe === void 0 ? void 0 : fe.type) === "RestElement";
        }
        var Pe = new WeakMap();
        function Se(O) {
          if (Pe.has(O))
            return Pe.get(O);
          let fe = [];
          return O.this && fe.push(O.this), Array.isArray(O.parameters) ? fe.push(...O.parameters) : Array.isArray(O.params) && fe.push(...O.params), O.rest && fe.push(O.rest), Pe.set(O, fe), fe;
        }
        function Qe(O, fe) {
          let Te = O.getValue(), $e = 0, Je = (Ze) => fe(Ze, $e++);
          Te.this && O.call(Je, "this"), Array.isArray(Te.parameters) ? O.each(Je, "parameters") : Array.isArray(Te.params) && O.each(Je, "params"), Te.rest && O.call(Je, "rest");
        }
        var xe = new WeakMap();
        function Xe(O) {
          if (xe.has(O))
            return xe.get(O);
          let fe = O.arguments;
          return O.type === "ImportExpression" && (fe = [O.source], O.attributes && fe.push(O.attributes)), xe.set(O, fe), fe;
        }
        function _e(O, fe) {
          let Te = O.getValue();
          Te.type === "ImportExpression" ? (O.call(($e) => fe($e, 0), "source"), Te.attributes && O.call(($e) => fe($e, 1), "attributes")) : O.each(fe, "arguments");
        }
        function je(O) {
          return O.value.trim() === "prettier-ignore" && !O.unignore;
        }
        function Re(O) {
          return O && (O.prettierIgnore || se(O, Le.PrettierIgnore));
        }
        function be(O) {
          let fe = O.getValue();
          return Re(fe);
        }
        var Le = {Leading: 1 << 1, Trailing: 1 << 2, Dangling: 1 << 3, Block: 1 << 4, Line: 1 << 5, PrettierIgnore: 1 << 6, First: 1 << 7, Last: 1 << 8}, qe = (O, fe) => {
          if (typeof O == "function" && (fe = O, O = 0), O || fe)
            return (Te, $e, Je) => !(O & Le.Leading && !Te.leading || O & Le.Trailing && !Te.trailing || O & Le.Dangling && (Te.leading || Te.trailing) || O & Le.Block && !d(Te) || O & Le.Line && !C(Te) || O & Le.First && $e !== 0 || O & Le.Last && $e !== Je.length - 1 || O & Le.PrettierIgnore && !je(Te) || fe && !fe(Te));
        };
        function se(O, fe, Te) {
          if (!u(O == null ? void 0 : O.comments))
            return false;
          let $e = qe(fe, Te);
          return $e ? O.comments.some($e) : true;
        }
        function He(O, fe, Te) {
          if (!Array.isArray(O == null ? void 0 : O.comments))
            return [];
          let $e = qe(fe, Te);
          return $e ? O.comments.filter($e) : O.comments;
        }
        var Me = (O, fe) => {
          let {originalText: Te} = fe;
          return i(Te, v(O));
        };
        function ze(O) {
          return ue(O) || O.type === "NewExpression" || O.type === "ImportExpression";
        }
        function nt(O) {
          return O && (O.type === "ObjectProperty" || O.type === "Property" && !O.method && O.kind === "init");
        }
        function tt(O) {
          return Boolean(O.__isUsingHackPipeline);
        }
        var pt = Symbol("ifWithoutBlockAndSameLineComment");
        n.exports = {getFunctionParameters: Se, iterateFunctionParametersPath: Qe, getCallArguments: Xe, iterateCallArgumentsPath: _e, hasRestParameter: Be, getLeftSide: I, getLeftSidePathName: k, getParentExportDeclaration: g, getTypeScriptMappedTypeModifier: G, hasFlowAnnotationComment: A, hasFlowShorthandAnnotationComment: T, hasLeadingOwnLineComment: U, hasNakedLeftSide: B, hasNode: S, hasIgnoreComment: be, hasNodeIgnoreComment: Re, identity: K, isBinaryish: H, isCallLikeExpression: ze, isEnabledHackPipeline: tt, isLineComment: C, isPrettierIgnoreComment: je, isCallExpression: ue, isMemberExpression: De, isExportDeclaration: D, isFlowAnnotationComment: z, isFunctionCompositionArgs: pe, isFunctionNotation: V, isFunctionOrArrowExpression: x, isGetterOrSetter: $, isJestEachTemplateLiteral: Ae, isJsxNode: M, isLiteral: F, isLongCurriedCallExpression: de, isSimpleCallArgument: ae, isMemberish: R, isNumericLiteral: l, isSignedNumericLiteral: E, isObjectProperty: nt, isObjectType: N, isObjectTypePropertyAFunction: q, isSimpleType: ee, isSimpleNumber: ge, isSimpleTemplateLiteral: ie, isStringLiteral: y, isStringPropSafeToUnquote: le, isTemplateOnItsOwnLine: ke, isTestCall: X, isTheOnlyJsxElementInMarkdown: j, isTSXFile: he, isTypeAnnotationAFunction: Y, isNextLineEmpty: Me, needsHardlineAfterDanglingComment: ce, rawText: ve, shouldPrintComma: ye, isBitwiseOperator: We, shouldFlatten: _, startsWithNoLookaheadToken: Ce, getPrecedence: ne, hasComment: se, getComments: He, CommentCheckFlags: Le, markerForIfWithoutBlockAndSameLineComment: pt};
      }}), Lt = Z({"src/language-js/print/template-literal.js"(e, n) {
        re();
        var t = it(), {getStringWidth: s, getIndentSize: a} = Ue(), {builders: {join: r, hardline: u, softline: i, group: o, indent: c, align: v, lineSuffixBoundary: m, addAlignmentToDoc: d}, printer: {printDocToString: p}, utils: {mapDoc: f}} = Oe(), {isBinaryish: h, isJestEachTemplateLiteral: w, isSimpleTemplateLiteral: T, hasComment: A, isMemberExpression: S} = Ke();
        function B(g, F, l) {
          let E = g.getValue();
          if (E.type === "TemplateLiteral" && w(E, g.getParentNode())) {
            let M = I(g, l, F);
            if (M)
              return M;
          }
          let N = "expressions";
          E.type === "TSTemplateLiteralType" && (N = "types");
          let x = [], b = g.map(F, N), L = T(E);
          return L && (b = b.map((M) => p(M, Object.assign(Object.assign({}, l), {}, {printWidth: Number.POSITIVE_INFINITY})).formatted)), x.push(m, "`"), g.each((M) => {
            let j = M.getName();
            if (x.push(F()), j < b.length) {
              let {tabWidth: $} = l, V = M.getValue(), q = a(V.value.raw, $), Y = b[j];
              if (!L) {
                let R = E[N][j];
                (A(R) || S(R) || R.type === "ConditionalExpression" || R.type === "SequenceExpression" || R.type === "TSAsExpression" || h(R)) && (Y = [c([i, Y]), i]);
              }
              let H = q === 0 && V.value.raw.endsWith(`
`) ? v(Number.NEGATIVE_INFINITY, Y) : d(Y, q, $);
              x.push(o(["${", H, m, "}"]));
            }
          }, "quasis"), x.push("`"), x;
        }
        function I(g, F, l) {
          let E = g.getNode(), y = E.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (y.length > 1 || y.some((N) => N.length > 0)) {
            F.__inJestEach = true;
            let N = g.map(l, "expressions");
            F.__inJestEach = false;
            let x = [], b = N.map((V) => "${" + p(V, Object.assign(Object.assign({}, F), {}, {printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf"})).formatted + "}"), L = [{hasLineBreak: false, cells: []}];
            for (let V = 1; V < E.quasis.length; V++) {
              let q = t(L), Y = b[V - 1];
              q.cells.push(Y), Y.includes(`
`) && (q.hasLineBreak = true), E.quasis[V].value.raw.includes(`
`) && L.push({hasLineBreak: false, cells: []});
            }
            let M = Math.max(y.length, ...L.map((V) => V.cells.length)), j = Array.from({length: M}).fill(0), $ = [{cells: y}, ...L.filter((V) => V.cells.length > 0)];
            for (let {cells: V} of $.filter((q) => !q.hasLineBreak))
              for (let [q, Y] of V.entries())
                j[q] = Math.max(j[q], s(Y));
            return x.push(m, "`", c([u, r(u, $.map((V) => r(" | ", V.cells.map((q, Y) => V.hasLineBreak ? q : q + " ".repeat(j[Y] - s(q))))))]), u, "`"), x;
          }
        }
        function k(g, F) {
          let l = g.getValue(), E = F();
          return A(l) && (E = o([c([i, E]), i])), ["${", E, m, "}"];
        }
        function P(g, F) {
          return g.map((l) => k(l, F), "expressions");
        }
        function C(g, F) {
          return f(g, (l) => typeof l == "string" ? F ? l.replace(/(\\*)`/g, "$1$1\\`") : D(l) : l);
        }
        function D(g) {
          return g.replace(/([\\`]|\${)/g, "\\$1");
        }
        n.exports = {printTemplateLiteral: B, printTemplateExpressions: P, escapeTemplateCharacters: C, uncookTemplateElementValue: D};
      }}), wm = Z({"src/language-js/embed/markdown.js"(e, n) {
        re();
        var {builders: {indent: t, softline: s, literalline: a, dedentToRoot: r}} = Oe(), {escapeTemplateCharacters: u} = Lt();
        function i(c, v, m) {
          let p = c.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (T, A) => "\\".repeat(A.length / 2) + "`"), f = o(p), h = f !== "";
          h && (p = p.replace(new RegExp("^".concat(f), "gm"), ""));
          let w = u(m(p, {parser: "markdown", __inJsTemplate: true}, {stripTrailingHardline: true}), true);
          return ["`", h ? t([s, w]) : [a, r(w)], s, "`"];
        }
        function o(c) {
          let v = c.match(/^([^\S\n]*)\S/m);
          return v === null ? "" : v[1];
        }
        n.exports = i;
      }}), _m = Z({"src/language-js/embed/css.js"(e, n) {
        re();
        var {isNonEmptyArray: t} = Ue(), {builders: {indent: s, hardline: a, softline: r}, utils: {mapDoc: u, replaceEndOfLine: i, cleanDoc: o}} = Oe(), {printTemplateExpressions: c} = Lt();
        function v(p, f, h) {
          let w = p.getValue(), T = w.quasis.map((k) => k.value.raw), A = 0, S = T.reduce((k, P, C) => C === 0 ? P : k + "@prettier-placeholder-" + A++ + "-id" + P, ""), B = h(S, {parser: "scss"}, {stripTrailingHardline: true}), I = c(p, f);
          return m(B, w, I);
        }
        function m(p, f, h) {
          if (f.quasis.length === 1 && !f.quasis[0].value.raw.trim())
            return "``";
          let T = d(p, h);
          if (!T)
            throw new Error("Couldn't insert all the expressions");
          return ["`", s([a, T]), r, "`"];
        }
        function d(p, f) {
          if (!t(f))
            return p;
          let h = 0, w = u(o(p), (T) => typeof T != "string" || !T.includes("@prettier-placeholder") ? T : T.split(/@prettier-placeholder-(\d+)-id/).map((A, S) => S % 2 === 0 ? i(A) : (h++, f[A])));
          return f.length === h ? w : null;
        }
        n.exports = v;
      }}), Pm = Z({"src/language-js/embed/graphql.js"(e, n) {
        re();
        var {builders: {indent: t, join: s, hardline: a}} = Oe(), {escapeTemplateCharacters: r, printTemplateExpressions: u} = Lt();
        function i(c, v, m) {
          let d = c.getValue(), p = d.quasis.length;
          if (p === 1 && d.quasis[0].value.raw.trim() === "")
            return "``";
          let f = u(c, v), h = [];
          for (let w = 0; w < p; w++) {
            let T = d.quasis[w], A = w === 0, S = w === p - 1, B = T.value.cooked, I = B.split(`
`), k = I.length, P = f[w], C = k > 2 && I[0].trim() === "" && I[1].trim() === "", D = k > 2 && I[k - 1].trim() === "" && I[k - 2].trim() === "", g = I.every((l) => /^\s*(?:#[^\n\r]*)?$/.test(l));
            if (!S && /#[^\n\r]*$/.test(I[k - 1]))
              return null;
            let F = null;
            g ? F = o(I) : F = m(B, {parser: "graphql"}, {stripTrailingHardline: true}), F ? (F = r(F, false), !A && C && h.push(""), h.push(F), !S && D && h.push("")) : !A && !S && C && h.push(""), P && h.push(P);
          }
          return ["`", t([a, s(a, h)]), a, "`"];
        }
        function o(c) {
          let v = [], m = false, d = c.map((p) => p.trim());
          for (let [p, f] of d.entries())
            f !== "" && (d[p - 1] === "" && m ? v.push([a, f]) : v.push(f), m = true);
          return v.length === 0 ? null : s(a, v);
        }
        n.exports = i;
      }}), km = Z({"src/language-js/embed/html.js"(e, n) {
        re();
        var {builders: {indent: t, line: s, hardline: a, group: r}, utils: {mapDoc: u}} = Oe(), {printTemplateExpressions: i, uncookTemplateElementValue: o} = Lt(), c = 0;
        function v(m, d, p, f, h) {
          let {parser: w} = h, T = m.getValue(), A = c;
          c = c + 1 >>> 0;
          let S = (E) => "PRETTIER_HTML_PLACEHOLDER_".concat(E, "_").concat(A, "_IN_JS"), B = T.quasis.map((E, y, N) => y === N.length - 1 ? E.value.cooked : E.value.cooked + S(y)).join(""), I = i(m, d);
          if (I.length === 0 && B.trim().length === 0)
            return "``";
          let k = new RegExp(S("(\\d+)"), "g"), P = 0, C = p(B, {parser: w, __onHtmlRoot(E) {
            P = E.children.length;
          }}, {stripTrailingHardline: true}), D = u(C, (E) => {
            if (typeof E != "string")
              return E;
            let y = [], N = E.split(k);
            for (let x = 0; x < N.length; x++) {
              let b = N[x];
              if (x % 2 === 0) {
                b && (b = o(b), f.__embeddedInHtml && (b = b.replace(/<\/(script)\b/gi, "<\\/$1")), y.push(b));
                continue;
              }
              let L = Number(b);
              y.push(I[L]);
            }
            return y;
          }), g = /^\s/.test(B) ? " " : "", F = /\s$/.test(B) ? " " : "", l = f.htmlWhitespaceSensitivity === "ignore" ? a : g && F ? s : null;
          return r(l ? ["`", t([l, r(D)]), l, "`"] : ["`", g, P > 1 ? t(r(D)) : r(D), F, "`"]);
        }
        n.exports = v;
      }}), Im = Z({"src/language-js/embed.js"(e, n) {
        re();
        var {hasComment: t, CommentCheckFlags: s, isObjectProperty: a} = Ke(), r = wm(), u = _m(), i = Pm(), o = km();
        function c(C) {
          if (d(C) || w(C) || T(C) || p(C))
            return "css";
          if (B(C))
            return "graphql";
          if (k(C))
            return "html";
          if (f(C))
            return "angular";
          if (m(C))
            return "markdown";
        }
        function v(C, D, g, F) {
          let l = C.getValue();
          if (l.type !== "TemplateLiteral" || P(l))
            return;
          let E = c(C);
          if (!!E) {
            if (E === "markdown")
              return r(C, D, g);
            if (E === "css")
              return u(C, D, g);
            if (E === "graphql")
              return i(C, D, g);
            if (E === "html" || E === "angular")
              return o(C, D, g, F, {parser: E});
          }
        }
        function m(C) {
          let D = C.getValue(), g = C.getParentNode();
          return g && g.type === "TaggedTemplateExpression" && D.quasis.length === 1 && g.tag.type === "Identifier" && (g.tag.name === "md" || g.tag.name === "markdown");
        }
        function d(C) {
          let D = C.getValue(), g = C.getParentNode(), F = C.getParentNode(1);
          return F && D.quasis && g.type === "JSXExpressionContainer" && F.type === "JSXElement" && F.openingElement.name.name === "style" && F.openingElement.attributes.some((l) => l.name.name === "jsx") || g && g.type === "TaggedTemplateExpression" && g.tag.type === "Identifier" && g.tag.name === "css" || g && g.type === "TaggedTemplateExpression" && g.tag.type === "MemberExpression" && g.tag.object.name === "css" && (g.tag.property.name === "global" || g.tag.property.name === "resolve");
        }
        function p(C) {
          return C.match((D) => D.type === "TemplateLiteral", (D, g) => D.type === "ArrayExpression" && g === "elements", (D, g) => a(D) && D.key.type === "Identifier" && D.key.name === "styles" && g === "value", ...h);
        }
        function f(C) {
          return C.match((D) => D.type === "TemplateLiteral", (D, g) => a(D) && D.key.type === "Identifier" && D.key.name === "template" && g === "value", ...h);
        }
        var h = [(C, D) => C.type === "ObjectExpression" && D === "properties", (C, D) => C.type === "CallExpression" && C.callee.type === "Identifier" && C.callee.name === "Component" && D === "arguments", (C, D) => C.type === "Decorator" && D === "expression"];
        function w(C) {
          let D = C.getParentNode();
          if (!D || D.type !== "TaggedTemplateExpression")
            return false;
          let g = D.tag.type === "ParenthesizedExpression" ? D.tag.expression : D.tag;
          switch (g.type) {
            case "MemberExpression":
              return A(g.object) || S(g);
            case "CallExpression":
              return A(g.callee) || g.callee.type === "MemberExpression" && (g.callee.object.type === "MemberExpression" && (A(g.callee.object.object) || S(g.callee.object)) || g.callee.object.type === "CallExpression" && A(g.callee.object.callee));
            case "Identifier":
              return g.name === "css";
            default:
              return false;
          }
        }
        function T(C) {
          let D = C.getParentNode(), g = C.getParentNode(1);
          return g && D.type === "JSXExpressionContainer" && g.type === "JSXAttribute" && g.name.type === "JSXIdentifier" && g.name.name === "css";
        }
        function A(C) {
          return C.type === "Identifier" && C.name === "styled";
        }
        function S(C) {
          return /^[A-Z]/.test(C.object.name) && C.property.name === "extend";
        }
        function B(C) {
          let D = C.getValue(), g = C.getParentNode();
          return I(D, "GraphQL") || g && (g.type === "TaggedTemplateExpression" && (g.tag.type === "MemberExpression" && g.tag.object.name === "graphql" && g.tag.property.name === "experimental" || g.tag.type === "Identifier" && (g.tag.name === "gql" || g.tag.name === "graphql")) || g.type === "CallExpression" && g.callee.type === "Identifier" && g.callee.name === "graphql");
        }
        function I(C, D) {
          return t(C, s.Block | s.Leading, (g) => {
            let {value: F} = g;
            return F === " ".concat(D, " ");
          });
        }
        function k(C) {
          return I(C.getValue(), "HTML") || C.match((D) => D.type === "TemplateLiteral", (D, g) => D.type === "TaggedTemplateExpression" && D.tag.type === "Identifier" && D.tag.name === "html" && g === "quasi");
        }
        function P(C) {
          let {quasis: D} = C;
          return D.some((g) => {
            let {value: {cooked: F}} = g;
            return F === null;
          });
        }
        n.exports = v;
      }}), Lm = Z({"src/language-js/clean.js"(e, n) {
        re();
        var t = It(), s = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), a = (u) => {
          for (let i of u.quasis)
            delete i.value;
        };
        function r(u, i, o) {
          if (u.type === "Program" && delete i.sourceType, (u.type === "BigIntLiteral" || u.type === "BigIntLiteralTypeAnnotation") && i.value && (i.value = i.value.toLowerCase()), (u.type === "BigIntLiteral" || u.type === "Literal") && i.bigint && (i.bigint = i.bigint.toLowerCase()), u.type === "DecimalLiteral" && (i.value = Number(i.value)), u.type === "Literal" && i.decimal && (i.decimal = Number(i.decimal)), u.type === "EmptyStatement" || u.type === "JSXText" || u.type === "JSXExpressionContainer" && (u.expression.type === "Literal" || u.expression.type === "StringLiteral") && u.expression.value === " ")
            return null;
          if ((u.type === "Property" || u.type === "ObjectProperty" || u.type === "MethodDefinition" || u.type === "ClassProperty" || u.type === "ClassMethod" || u.type === "PropertyDefinition" || u.type === "TSDeclareMethod" || u.type === "TSPropertySignature" || u.type === "ObjectTypeProperty") && typeof u.key == "object" && u.key && (u.key.type === "Literal" || u.key.type === "NumericLiteral" || u.key.type === "StringLiteral" || u.key.type === "Identifier") && delete i.key, u.type === "JSXElement" && u.openingElement.name.name === "style" && u.openingElement.attributes.some((m) => m.name.name === "jsx"))
            for (let {type: m, expression: d} of i.children)
              m === "JSXExpressionContainer" && d.type === "TemplateLiteral" && a(d);
          u.type === "JSXAttribute" && u.name.name === "css" && u.value.type === "JSXExpressionContainer" && u.value.expression.type === "TemplateLiteral" && a(i.value.expression), u.type === "JSXAttribute" && u.value && u.value.type === "Literal" && /["']|&quot;|&apos;/.test(u.value.value) && (i.value.value = i.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          let c = u.expression || u.callee;
          if (u.type === "Decorator" && c.type === "CallExpression" && c.callee.name === "Component" && c.arguments.length === 1) {
            let m = u.expression.arguments[0].properties;
            for (let [d, p] of i.expression.arguments[0].properties.entries())
              switch (m[d].key.name) {
                case "styles":
                  p.value.type === "ArrayExpression" && a(p.value.elements[0]);
                  break;
                case "template":
                  p.value.type === "TemplateLiteral" && a(p.value);
                  break;
              }
          }
          if (u.type === "TaggedTemplateExpression" && (u.tag.type === "MemberExpression" || u.tag.type === "Identifier" && (u.tag.name === "gql" || u.tag.name === "graphql" || u.tag.name === "css" || u.tag.name === "md" || u.tag.name === "markdown" || u.tag.name === "html") || u.tag.type === "CallExpression") && a(i.quasi), u.type === "TemplateLiteral") {
            var v;
            (((v = u.leadingComments) === null || v === void 0 ? void 0 : v.some((d) => t(d) && ["GraphQL", "HTML"].some((p) => d.value === " ".concat(p, " ")))) || o.type === "CallExpression" && o.callee.name === "graphql" || !u.leadingComments) && a(i);
          }
          if (u.type === "InterpreterDirective" && (i.value = i.value.trimEnd()), (u.type === "TSIntersectionType" || u.type === "TSUnionType") && u.types.length === 1)
            return i.types[0];
        }
        r.ignoredProperties = s, n.exports = r;
      }}), Ha = {};
      Ut(Ha, {EOL: () => Pn, arch: () => jm, cpus: () => Ya, default: () => ro, endianness: () => Ga, freemem: () => Xa, getNetworkInterfaces: () => to, hostname: () => Ja, loadavg: () => Ua, networkInterfaces: () => eo, platform: () => Om, release: () => Za, tmpDir: () => wn, tmpdir: () => _n, totalmem: () => Ka, type: () => Qa, uptime: () => za});
      function Ga() {
        if (typeof Sr > "u") {
          var e = new ArrayBuffer(2), n = new Uint8Array(e), t = new Uint16Array(e);
          if (n[0] = 1, n[1] = 2, t[0] === 258)
            Sr = "BE";
          else if (t[0] === 513)
            Sr = "LE";
          else
            throw new Error("unable to figure out endianess");
        }
        return Sr;
      }
      function Ja() {
        return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
      }
      function Ua() {
        return [];
      }
      function za() {
        return 0;
      }
      function Xa() {
        return Number.MAX_VALUE;
      }
      function Ka() {
        return Number.MAX_VALUE;
      }
      function Ya() {
        return [];
      }
      function Qa() {
        return "Browser";
      }
      function Za() {
        return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
      }
      function eo() {
      }
      function to() {
      }
      function jm() {
        return "javascript";
      }
      function Om() {
        return "browser";
      }
      function wn() {
        return "/tmp";
      }
      var Sr, _n, Pn, ro, qm = mt({"node-modules-polyfills:os"() {
        re(), _n = wn, Pn = `
`, ro = {EOL: Pn, tmpdir: _n, tmpDir: wn, networkInterfaces: eo, getNetworkInterfaces: to, release: Za, type: Qa, cpus: Ya, totalmem: Ka, freemem: Xa, uptime: za, loadavg: Ua, hostname: Ja, endianness: Ga};
      }}), Mm = Z({"node-modules-polyfills-commonjs:os"(e, n) {
        re();
        var t = (qm(), lt(Ha));
        if (t && t.default) {
          n.exports = t.default;
          for (let s in t)
            n.exports[s] = t[s];
        } else
          t && (n.exports = t);
      }}), Rm = Z({"node_modules/detect-newline/index.js"(e, n) {
        re();
        var t = (s) => {
          if (typeof s != "string")
            throw new TypeError("Expected a string");
          let a = s.match(/(?:\r?\n)/g) || [];
          if (a.length === 0)
            return;
          let r = a.filter((i) => i === `\r
`).length, u = a.length - r;
          return r > u ? `\r
` : `
`;
        };
        n.exports = t, n.exports.graceful = (s) => typeof s == "string" && t(s) || `
`;
      }}), Vm = Z({"node_modules/jest-docblock/build/index.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true}), e.extract = p, e.parse = h, e.parseWithComments = w, e.print = T, e.strip = f;
        function n() {
          let S = Mm();
          return n = function() {
            return S;
          }, S;
        }
        function t() {
          let S = s(Rm());
          return t = function() {
            return S;
          }, S;
        }
        function s(S) {
          return S && S.__esModule ? S : {default: S};
        }
        var a = /\*\/$/, r = /^\/\*\*/, u = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, i = /(^|\s+)\/\/([^\r\n]*)/g, o = /^(\r?\n)+/, c = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, v = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, m = /(\r?\n|^) *\* ?/g, d = [];
        function p(S) {
          let B = S.match(u);
          return B ? B[0].trimLeft() : "";
        }
        function f(S) {
          let B = S.match(u);
          return B && B[0] ? S.substring(B[0].length) : S;
        }
        function h(S) {
          return w(S).pragmas;
        }
        function w(S) {
          let B = (0, t().default)(S) || n().EOL;
          S = S.replace(r, "").replace(a, "").replace(m, "$1");
          let I = "";
          for (; I !== S; )
            I = S, S = S.replace(c, "".concat(B, "$1 $2").concat(B));
          S = S.replace(o, "").trimRight();
          let k = Object.create(null), P = S.replace(v, "").replace(o, "").trimRight(), C;
          for (; C = v.exec(S); ) {
            let D = C[2].replace(i, "");
            typeof k[C[1]] == "string" || Array.isArray(k[C[1]]) ? k[C[1]] = d.concat(k[C[1]], D) : k[C[1]] = D;
          }
          return {comments: P, pragmas: k};
        }
        function T(S) {
          let {comments: B = "", pragmas: I = {}} = S, k = (0, t().default)(B) || n().EOL, P = "/**", C = " *", D = " */", g = Object.keys(I), F = g.map((E) => A(E, I[E])).reduce((E, y) => E.concat(y), []).map((E) => C + " " + E + k).join("");
          if (!B) {
            if (g.length === 0)
              return "";
            if (g.length === 1 && !Array.isArray(I[g[0]])) {
              let E = I[g[0]];
              return "".concat(P, " ").concat(A(g[0], E)[0]).concat(D);
            }
          }
          let l = B.split(k).map((E) => "".concat(C, " ").concat(E)).join(k) + k;
          return P + k + (B ? l : "") + (B && g.length ? C + k : "") + F + D;
        }
        function A(S, B) {
          return d.concat(B).map((I) => "@".concat(S, " ").concat(I).trim());
        }
      }}), Wm = Z({"src/language-js/utils/get-shebang.js"(e, n) {
        re();
        function t(s) {
          if (!s.startsWith("#!"))
            return "";
          let a = s.indexOf(`
`);
          return a === -1 ? s : s.slice(0, a);
        }
        n.exports = t;
      }}), no = Z({"src/language-js/pragma.js"(e, n) {
        re();
        var {parseWithComments: t, strip: s, extract: a, print: r} = Vm(), {normalizeEndOfLine: u} = jn(), i = Wm();
        function o(m) {
          let d = i(m);
          d && (m = m.slice(d.length + 1));
          let p = a(m), {pragmas: f, comments: h} = t(p);
          return {shebang: d, text: m, pragmas: f, comments: h};
        }
        function c(m) {
          let d = Object.keys(o(m).pragmas);
          return d.includes("prettier") || d.includes("format");
        }
        function v(m) {
          let {shebang: d, text: p, pragmas: f, comments: h} = o(m), w = s(p), T = r({pragmas: Object.assign({format: ""}, f), comments: h.trimStart()});
          return (d ? "".concat(d, `
`) : "") + u(T) + (w.startsWith(`
`) ? `
` : `

`) + w;
        }
        n.exports = {hasPragma: c, insertPragma: v};
      }}), uo = Z({"src/language-js/comments.js"(e, n) {
        re();
        var {getLast: t, hasNewline: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: a, getNextNonSpaceNonCommentCharacter: r, hasNewlineInRange: u, addLeadingComment: i, addTrailingComment: o, addDanglingComment: c, getNextNonSpaceNonCommentCharacterIndex: v, isNonEmptyArray: m} = Ue(), {getFunctionParameters: d, isPrettierIgnoreComment: p, isJsxNode: f, hasFlowShorthandAnnotationComment: h, hasFlowAnnotationComment: w, hasIgnoreComment: T, isCallLikeExpression: A, getCallArguments: S, isCallExpression: B, isMemberExpression: I, isObjectProperty: k, isLineComment: P, getComments: C, CommentCheckFlags: D, markerForIfWithoutBlockAndSameLineComment: g} = Ke(), {locStart: F, locEnd: l} = st(), E = It();
        function y(me) {
          return [ve, De, q, j, $, V, Q, Ae, U, ge, Ne, ke, te, ie, G].some((_) => _(me));
        }
        function N(me) {
          return [M, De, Y, Ne, j, $, V, Q, ie, z, le, ge, de, G, he].some((_) => _(me));
        }
        function x(me) {
          return [ve, j, $, H, ue, te, ge, X, W, K, G, ae].some((_) => _(me));
        }
        function b(me, _) {
          let J = (me.body || me.properties).find((ne) => {
            let {type: Ee} = ne;
            return Ee !== "EmptyStatement";
          });
          J ? i(J, _) : c(me, _);
        }
        function L(me, _) {
          me.type === "BlockStatement" ? b(me, _) : i(me, _);
        }
        function M(me) {
          let {comment: _, followingNode: J} = me;
          return J && Ie(_) ? (i(J, _), true) : false;
        }
        function j(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, followingNode: Ee, text: We} = me;
          if ((ne == null ? void 0 : ne.type) !== "IfStatement" || !Ee)
            return false;
          if (r(We, _, l) === ")")
            return o(J, _), true;
          if (J === ne.consequent && Ee === ne.alternate) {
            if (J.type === "BlockStatement")
              o(J, _);
            else {
              let Pe = _.type === "SingleLine" || _.loc.start.line === _.loc.end.line, Se = _.loc.start.line === J.loc.start.line;
              Pe && Se ? c(J, _, g) : c(ne, _);
            }
            return true;
          }
          return Ee.type === "BlockStatement" ? (b(Ee, _), true) : Ee.type === "IfStatement" ? (L(Ee.consequent, _), true) : ne.consequent === Ee ? (i(Ee, _), true) : false;
        }
        function $(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, followingNode: Ee, text: We} = me;
          return (ne == null ? void 0 : ne.type) !== "WhileStatement" || !Ee ? false : r(We, _, l) === ")" ? (o(J, _), true) : Ee.type === "BlockStatement" ? (b(Ee, _), true) : ne.body === Ee ? (i(Ee, _), true) : false;
        }
        function V(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, followingNode: Ee} = me;
          return (ne == null ? void 0 : ne.type) !== "TryStatement" && (ne == null ? void 0 : ne.type) !== "CatchClause" || !Ee ? false : ne.type === "CatchClause" && J ? (o(J, _), true) : Ee.type === "BlockStatement" ? (b(Ee, _), true) : Ee.type === "TryStatement" ? (L(Ee.finalizer, _), true) : Ee.type === "CatchClause" ? (L(Ee.body, _), true) : false;
        }
        function q(me) {
          let {comment: _, enclosingNode: J, followingNode: ne} = me;
          return I(J) && (ne == null ? void 0 : ne.type) === "Identifier" ? (i(J, _), true) : false;
        }
        function Y(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, followingNode: Ee, text: We} = me, Be = J && !u(We, l(J), F(_));
          return (!J || !Be) && ((ne == null ? void 0 : ne.type) === "ConditionalExpression" || (ne == null ? void 0 : ne.type) === "TSConditionalType") && Ee ? (i(Ee, _), true) : false;
        }
        function H(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne} = me;
          return k(ne) && ne.shorthand && ne.key === J && ne.value.type === "AssignmentPattern" ? (o(ne.value.left, _), true) : false;
        }
        var R = new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
        function Q(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, followingNode: Ee} = me;
          if (R.has(ne == null ? void 0 : ne.type)) {
            if (m(ne.decorators) && !(Ee && Ee.type === "Decorator"))
              return o(t(ne.decorators), _), true;
            if (ne.body && Ee === ne.body)
              return b(ne.body, _), true;
            if (Ee) {
              if (ne.superClass && Ee === ne.superClass && J && (J === ne.id || J === ne.typeParameters))
                return o(J, _), true;
              for (let We of ["implements", "extends", "mixins"])
                if (ne[We] && Ee === ne[We][0])
                  return J && (J === ne.id || J === ne.typeParameters || J === ne.superClass) ? o(J, _) : c(ne, _, We), true;
            }
          }
          return false;
        }
        var ee = new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition"]);
        function te(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, text: Ee} = me;
          return ne && J && r(Ee, _, l) === "(" && (ne.type === "Property" || ne.type === "TSDeclareMethod" || ne.type === "TSAbstractMethodDefinition") && J.type === "Identifier" && ne.key === J && r(Ee, J, l) !== ":" || (J == null ? void 0 : J.type) === "Decorator" && ee.has(ne == null ? void 0 : ne.type) ? (o(J, _), true) : false;
        }
        var oe = new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
        function W(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, text: Ee} = me;
          return r(Ee, _, l) !== "(" ? false : J && oe.has(ne == null ? void 0 : ne.type) ? (o(J, _), true) : false;
        }
        function X(me) {
          let {comment: _, enclosingNode: J, text: ne} = me;
          if ((J == null ? void 0 : J.type) !== "ArrowFunctionExpression")
            return false;
          let Ee = v(ne, _, l);
          return Ee !== false && ne.slice(Ee, Ee + 2) === "=>" ? (c(J, _), true) : false;
        }
        function ue(me) {
          let {comment: _, enclosingNode: J, text: ne} = me;
          return r(ne, _, l) !== ")" ? false : J && (ye(J) && d(J).length === 0 || A(J) && S(J).length === 0) ? (c(J, _), true) : ((J == null ? void 0 : J.type) === "MethodDefinition" || (J == null ? void 0 : J.type) === "TSAbstractMethodDefinition") && d(J.value).length === 0 ? (c(J.value, _), true) : false;
        }
        function De(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, followingNode: Ee, text: We} = me;
          if ((J == null ? void 0 : J.type) === "FunctionTypeParam" && (ne == null ? void 0 : ne.type) === "FunctionTypeAnnotation" && (Ee == null ? void 0 : Ee.type) !== "FunctionTypeParam" || ((J == null ? void 0 : J.type) === "Identifier" || (J == null ? void 0 : J.type) === "AssignmentPattern") && ne && ye(ne) && r(We, _, l) === ")")
            return o(J, _), true;
          if ((ne == null ? void 0 : ne.type) === "FunctionDeclaration" && (Ee == null ? void 0 : Ee.type) === "BlockStatement") {
            let Be = (() => {
              let Pe = d(ne);
              if (Pe.length > 0)
                return a(We, l(t(Pe)));
              let Se = a(We, l(ne.id));
              return Se !== false && a(We, Se + 1);
            })();
            if (F(_) > Be)
              return b(Ee, _), true;
          }
          return false;
        }
        function ie(me) {
          let {comment: _, enclosingNode: J} = me;
          return (J == null ? void 0 : J.type) === "LabeledStatement" ? (i(J, _), true) : false;
        }
        function G(me) {
          let {comment: _, enclosingNode: J} = me;
          return ((J == null ? void 0 : J.type) === "ContinueStatement" || (J == null ? void 0 : J.type) === "BreakStatement") && !J.label ? (o(J, _), true) : false;
        }
        function z(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne} = me;
          return B(ne) && J && ne.callee === J && ne.arguments.length > 0 ? (i(ne.arguments[0], _), true) : false;
        }
        function U(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, followingNode: Ee} = me;
          return (ne == null ? void 0 : ne.type) === "UnionTypeAnnotation" || (ne == null ? void 0 : ne.type) === "TSUnionType" ? (p(_) && (Ee.prettierIgnore = true, _.unignore = true), J ? (o(J, _), true) : false) : (((Ee == null ? void 0 : Ee.type) === "UnionTypeAnnotation" || (Ee == null ? void 0 : Ee.type) === "TSUnionType") && p(_) && (Ee.types[0].prettierIgnore = true, _.unignore = true), false);
        }
        function le(me) {
          let {comment: _, enclosingNode: J} = me;
          return k(J) ? (i(J, _), true) : false;
        }
        function ge(me) {
          let {comment: _, enclosingNode: J, followingNode: ne, ast: Ee, isLastComment: We} = me;
          return Ee && Ee.body && Ee.body.length === 0 ? (We ? c(Ee, _) : i(Ee, _), true) : (J == null ? void 0 : J.type) === "Program" && (J == null ? void 0 : J.body.length) === 0 && !m(J.directives) ? (We ? c(J, _) : i(J, _), true) : (ne == null ? void 0 : ne.type) === "Program" && (ne == null ? void 0 : ne.body.length) === 0 && (J == null ? void 0 : J.type) === "ModuleExpression" ? (c(ne, _), true) : false;
        }
        function Ae(me) {
          let {comment: _, enclosingNode: J} = me;
          return (J == null ? void 0 : J.type) === "ForInStatement" || (J == null ? void 0 : J.type) === "ForOfStatement" ? (i(J, _), true) : false;
        }
        function Ne(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, text: Ee} = me;
          if ((ne == null ? void 0 : ne.type) === "ImportSpecifier" || (ne == null ? void 0 : ne.type) === "ExportSpecifier")
            return i(ne, _), true;
          let We = (J == null ? void 0 : J.type) === "ImportSpecifier" && (ne == null ? void 0 : ne.type) === "ImportDeclaration", Be = (J == null ? void 0 : J.type) === "ExportSpecifier" && (ne == null ? void 0 : ne.type) === "ExportNamedDeclaration";
          return (We || Be) && s(Ee, l(_)) ? (o(J, _), true) : false;
        }
        function ke(me) {
          let {comment: _, enclosingNode: J} = me;
          return (J == null ? void 0 : J.type) === "AssignmentPattern" ? (i(J, _), true) : false;
        }
        var ce = new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), pe = new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
        function de(me) {
          let {comment: _, enclosingNode: J, followingNode: ne} = me;
          return ce.has(J == null ? void 0 : J.type) && ne && (pe.has(ne.type) || E(_)) ? (i(ne, _), true) : false;
        }
        function ae(me) {
          let {comment: _, enclosingNode: J, followingNode: ne, text: Ee} = me;
          return !ne && ((J == null ? void 0 : J.type) === "TSMethodSignature" || (J == null ? void 0 : J.type) === "TSDeclareFunction" || (J == null ? void 0 : J.type) === "TSAbstractMethodDefinition") && r(Ee, _, l) === ";" ? (o(J, _), true) : false;
        }
        function ve(me) {
          let {comment: _, enclosingNode: J, followingNode: ne} = me;
          if (p(_) && (J == null ? void 0 : J.type) === "TSMappedType" && (ne == null ? void 0 : ne.type) === "TSTypeParameter" && ne.constraint)
            return J.prettierIgnore = true, _.unignore = true, true;
        }
        function K(me) {
          let {comment: _, precedingNode: J, enclosingNode: ne, followingNode: Ee} = me;
          return (ne == null ? void 0 : ne.type) !== "TSMappedType" ? false : (Ee == null ? void 0 : Ee.type) === "TSTypeParameter" && Ee.name ? (i(Ee.name, _), true) : (J == null ? void 0 : J.type) === "TSTypeParameter" && J.constraint ? (o(J.constraint, _), true) : false;
        }
        function he(me) {
          let {comment: _, enclosingNode: J, followingNode: ne} = me;
          return !J || J.type !== "SwitchCase" || J.test ? false : (ne.type === "BlockStatement" && P(_) ? b(ne, _) : c(J, _), true);
        }
        function ye(me) {
          return me.type === "ArrowFunctionExpression" || me.type === "FunctionExpression" || me.type === "FunctionDeclaration" || me.type === "ObjectMethod" || me.type === "ClassMethod" || me.type === "TSDeclareFunction" || me.type === "TSCallSignatureDeclaration" || me.type === "TSConstructSignatureDeclaration" || me.type === "TSMethodSignature" || me.type === "TSConstructorType" || me.type === "TSFunctionType" || me.type === "TSDeclareMethod";
        }
        function Ce(me, _) {
          if ((_.parser === "typescript" || _.parser === "flow" || _.parser === "acorn" || _.parser === "espree" || _.parser === "meriyah" || _.parser === "__babel_estree") && me.type === "MethodDefinition" && me.value && me.value.type === "FunctionExpression" && d(me.value).length === 0 && !me.value.returnType && !m(me.value.typeParameters) && me.value.body)
            return [...me.decorators || [], me.key, me.value.body];
        }
        function Ie(me) {
          return E(me) && me.value[0] === "*" && /@type\b/.test(me.value);
        }
        function Fe(me) {
          let _ = me.getValue(), J = me.getParentNode(), ne = (Ee) => w(C(Ee, D.Leading)) || w(C(Ee, D.Trailing));
          return (_ && (f(_) || h(_) || B(J) && ne(_)) || J && (J.type === "JSXSpreadAttribute" || J.type === "JSXSpreadChild" || J.type === "UnionTypeAnnotation" || J.type === "TSUnionType" || (J.type === "ClassDeclaration" || J.type === "ClassExpression") && J.superClass === _)) && (!T(me) || J.type === "UnionTypeAnnotation" || J.type === "TSUnionType");
        }
        n.exports = {handleOwnLineComment: y, handleEndOfLineComment: N, handleRemainingComment: x, isTypeCastComment: Ie, getCommentChildNodes: Ce, willPrintOwnComments: Fe};
      }}), jt = Z({"src/language-js/needs-parens.js"(e, n) {
        re();
        var t = it(), s = Rn(), {getFunctionParameters: a, getLeftSidePathName: r, hasFlowShorthandAnnotationComment: u, hasNakedLeftSide: i, hasNode: o, isBitwiseOperator: c, startsWithNoLookaheadToken: v, shouldFlatten: m, getPrecedence: d, isCallExpression: p, isMemberExpression: f, isObjectProperty: h} = Ke();
        function w(P, C) {
          let D = P.getParentNode();
          if (!D)
            return false;
          let g = P.getName(), F = P.getNode();
          if (C.__isInHtmlInterpolation && !C.bracketSpacing && B(F) && I(P))
            return true;
          if (T(F))
            return false;
          if (C.parser !== "flow" && u(P.getValue()))
            return true;
          if (F.type === "Identifier")
            return !!(F.extra && F.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(F.name) || g === "left" && F.name === "async" && D.type === "ForOfStatement" && !D.await);
          switch (D.type) {
            case "ParenthesizedExpression":
              return false;
            case "ClassDeclaration":
            case "ClassExpression": {
              if (g === "superClass" && (F.type === "ArrowFunctionExpression" || F.type === "AssignmentExpression" || F.type === "AwaitExpression" || F.type === "BinaryExpression" || F.type === "ConditionalExpression" || F.type === "LogicalExpression" || F.type === "NewExpression" || F.type === "ObjectExpression" || F.type === "SequenceExpression" || F.type === "TaggedTemplateExpression" || F.type === "UnaryExpression" || F.type === "UpdateExpression" || F.type === "YieldExpression" || F.type === "TSNonNullExpression"))
                return true;
              break;
            }
            case "ExportDefaultDeclaration":
              return k(P, C) || F.type === "SequenceExpression";
            case "Decorator": {
              if (g === "expression") {
                let l = false, E = false, y = F;
                for (; y; )
                  switch (y.type) {
                    case "MemberExpression":
                      E = true, y = y.object;
                      break;
                    case "CallExpression":
                      if (E || l)
                        return C.parser !== "typescript";
                      l = true, y = y.callee;
                      break;
                    case "Identifier":
                      return false;
                    case "TaggedTemplateExpression":
                      return C.parser !== "typescript";
                    default:
                      return true;
                  }
                return true;
              }
              break;
            }
            case "ExpressionStatement": {
              if (v(F, true))
                return true;
              break;
            }
            case "ArrowFunctionExpression": {
              if (g === "body" && F.type !== "SequenceExpression" && v(F, false))
                return true;
              break;
            }
          }
          switch (F.type) {
            case "UpdateExpression":
              if (D.type === "UnaryExpression")
                return F.prefix && (F.operator === "++" && D.operator === "+" || F.operator === "--" && D.operator === "-");
            case "UnaryExpression":
              switch (D.type) {
                case "UnaryExpression":
                  return F.operator === D.operator && (F.operator === "+" || F.operator === "-");
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return g === "object";
                case "TaggedTemplateExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return g === "callee";
                case "BinaryExpression":
                  return g === "left" && D.operator === "**";
                case "TSNonNullExpression":
                  return true;
                default:
                  return false;
              }
            case "BinaryExpression": {
              if (D.type === "UpdateExpression" || F.operator === "in" && A(P))
                return true;
              if (F.operator === "|>" && F.extra && F.extra.parenthesized) {
                let l = P.getParentNode(1);
                if (l.type === "BinaryExpression" && l.operator === "|>")
                  return true;
              }
            }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "LogicalExpression":
              switch (D.type) {
                case "TSAsExpression":
                  return F.type !== "TSAsExpression";
                case "ConditionalExpression":
                  return F.type === "TSAsExpression";
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return g === "callee";
                case "ClassExpression":
                case "ClassDeclaration":
                  return g === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return g === "object";
                case "AssignmentExpression":
                case "AssignmentPattern":
                  return g === "left" && (F.type === "TSTypeAssertion" || F.type === "TSAsExpression");
                case "LogicalExpression":
                  if (F.type === "LogicalExpression")
                    return D.operator !== F.operator;
                case "BinaryExpression": {
                  let {operator: l, type: E} = F;
                  if (!l && E !== "TSTypeAssertion")
                    return true;
                  let y = d(l), N = D.operator, x = d(N);
                  return x > y || g === "right" && x === y || x === y && !m(N, l) ? true : x < y && l === "%" ? N === "+" || N === "-" : !!c(N);
                }
                default:
                  return false;
              }
            case "SequenceExpression":
              switch (D.type) {
                case "ReturnStatement":
                  return false;
                case "ForStatement":
                  return false;
                case "ExpressionStatement":
                  return g !== "expression";
                case "ArrowFunctionExpression":
                  return g !== "body";
                default:
                  return true;
              }
            case "YieldExpression":
              if (D.type === "UnaryExpression" || D.type === "AwaitExpression" || D.type === "TSAsExpression" || D.type === "TSNonNullExpression")
                return true;
            case "AwaitExpression":
              switch (D.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return g === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return g === "callee";
                case "ConditionalExpression":
                  return g === "test";
                case "BinaryExpression":
                  return !(!F.argument && D.operator === "|>");
                default:
                  return false;
              }
            case "TSConditionalType":
              if (g === "extendsType" && D.type === "TSConditionalType")
                return true;
            case "TSFunctionType":
            case "TSConstructorType":
              if (g === "checkType" && D.type === "TSConditionalType")
                return true;
            case "TSUnionType":
            case "TSIntersectionType":
              if ((D.type === "TSUnionType" || D.type === "TSIntersectionType") && D.types.length > 1 && (!F.types || F.types.length > 1))
                return true;
            case "TSInferType":
              if (F.type === "TSInferType" && D.type === "TSRestType")
                return false;
            case "TSTypeOperator":
              return D.type === "TSArrayType" || D.type === "TSOptionalType" || D.type === "TSRestType" || g === "objectType" && D.type === "TSIndexedAccessType" || D.type === "TSTypeOperator" || D.type === "TSTypeAnnotation" && P.getParentNode(1).type.startsWith("TSJSDoc");
            case "ArrayTypeAnnotation":
              return D.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return D.type === "ArrayTypeAnnotation" || D.type === "NullableTypeAnnotation" || D.type === "IntersectionTypeAnnotation" || D.type === "UnionTypeAnnotation" || g === "objectType" && (D.type === "IndexedAccessType" || D.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation":
              return D.type === "ArrayTypeAnnotation" || g === "objectType" && (D.type === "IndexedAccessType" || D.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
              let l = D.type === "NullableTypeAnnotation" ? P.getParentNode(1) : D;
              return l.type === "UnionTypeAnnotation" || l.type === "IntersectionTypeAnnotation" || l.type === "ArrayTypeAnnotation" || g === "objectType" && (l.type === "IndexedAccessType" || l.type === "OptionalIndexedAccessType") || l.type === "NullableTypeAnnotation" || D.type === "FunctionTypeParam" && D.name === null && a(F).some((E) => E.typeAnnotation && E.typeAnnotation.type === "NullableTypeAnnotation");
            }
            case "OptionalIndexedAccessType":
              return g === "objectType" && D.type === "IndexedAccessType";
            case "TypeofTypeAnnotation":
              return g === "objectType" && (D.type === "IndexedAccessType" || D.type === "OptionalIndexedAccessType");
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof F.value == "string" && D.type === "ExpressionStatement" && !D.directive) {
                let l = P.getParentNode(1);
                return l.type === "Program" || l.type === "BlockStatement";
              }
              return g === "object" && D.type === "MemberExpression" && typeof F.value == "number";
            case "AssignmentExpression": {
              let l = P.getParentNode(1);
              return g === "body" && D.type === "ArrowFunctionExpression" ? true : g === "key" && (D.type === "ClassProperty" || D.type === "PropertyDefinition") && D.computed || (g === "init" || g === "update") && D.type === "ForStatement" ? false : D.type === "ExpressionStatement" ? F.left.type === "ObjectPattern" : !(g === "key" && D.type === "TSPropertySignature" || D.type === "AssignmentExpression" || D.type === "SequenceExpression" && l && l.type === "ForStatement" && (l.init === D || l.update === D) || g === "value" && D.type === "Property" && l && l.type === "ObjectPattern" && l.properties.includes(D) || D.type === "NGChainedExpression");
            }
            case "ConditionalExpression":
              switch (D.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSNonNullExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return g === "callee";
                case "ConditionalExpression":
                  return g === "test";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return g === "object";
                default:
                  return false;
              }
            case "FunctionExpression":
              switch (D.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return g === "callee";
                case "TaggedTemplateExpression":
                  return true;
                default:
                  return false;
              }
            case "ArrowFunctionExpression":
              switch (D.type) {
                case "BinaryExpression":
                  return D.operator !== "|>" || F.extra && F.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return g === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return g === "object";
                case "TSAsExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return true;
                case "ConditionalExpression":
                  return g === "test";
                default:
                  return false;
              }
            case "ClassExpression":
              if (s(F.decorators))
                return true;
              switch (D.type) {
                case "NewExpression":
                  return g === "callee";
                default:
                  return false;
              }
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
              let l = P.getParentNode(1);
              if (g === "object" && D.type === "MemberExpression" || g === "callee" && (D.type === "CallExpression" || D.type === "NewExpression") || D.type === "TSNonNullExpression" && l.type === "MemberExpression" && l.object === D)
                return true;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (g === "callee" && (D.type === "BindExpression" || D.type === "NewExpression")) {
                let l = F;
                for (; l; )
                  switch (l.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return true;
                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      l = l.object;
                      break;
                    case "TaggedTemplateExpression":
                      l = l.tag;
                      break;
                    case "TSNonNullExpression":
                      l = l.expression;
                      break;
                    default:
                      return false;
                  }
              }
              return false;
            case "BindExpression":
              return g === "callee" && (D.type === "BindExpression" || D.type === "NewExpression") || g === "object" && f(D);
            case "NGPipeExpression":
              return !(D.type === "NGRoot" || D.type === "NGMicrosyntaxExpression" || D.type === "ObjectProperty" && !(F.extra && F.extra.parenthesized) || D.type === "ArrayExpression" || p(D) && D.arguments[g] === F || g === "right" && D.type === "NGPipeExpression" || g === "property" && D.type === "MemberExpression" || D.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement":
              return g === "callee" || g === "left" && D.type === "BinaryExpression" && D.operator === "<" || D.type !== "ArrayExpression" && D.type !== "ArrowFunctionExpression" && D.type !== "AssignmentExpression" && D.type !== "AssignmentPattern" && D.type !== "BinaryExpression" && D.type !== "NewExpression" && D.type !== "ConditionalExpression" && D.type !== "ExpressionStatement" && D.type !== "JsExpressionRoot" && D.type !== "JSXAttribute" && D.type !== "JSXElement" && D.type !== "JSXExpressionContainer" && D.type !== "JSXFragment" && D.type !== "LogicalExpression" && !p(D) && !h(D) && D.type !== "ReturnStatement" && D.type !== "ThrowStatement" && D.type !== "TypeCastExpression" && D.type !== "VariableDeclarator" && D.type !== "YieldExpression";
            case "TypeAnnotation":
              return g === "returnType" && D.type === "ArrowFunctionExpression" && S(F);
          }
          return false;
        }
        function T(P) {
          return P.type === "BlockStatement" || P.type === "BreakStatement" || P.type === "ClassBody" || P.type === "ClassDeclaration" || P.type === "ClassMethod" || P.type === "ClassProperty" || P.type === "PropertyDefinition" || P.type === "ClassPrivateProperty" || P.type === "ContinueStatement" || P.type === "DebuggerStatement" || P.type === "DeclareClass" || P.type === "DeclareExportAllDeclaration" || P.type === "DeclareExportDeclaration" || P.type === "DeclareFunction" || P.type === "DeclareInterface" || P.type === "DeclareModule" || P.type === "DeclareModuleExports" || P.type === "DeclareVariable" || P.type === "DoWhileStatement" || P.type === "EnumDeclaration" || P.type === "ExportAllDeclaration" || P.type === "ExportDefaultDeclaration" || P.type === "ExportNamedDeclaration" || P.type === "ExpressionStatement" || P.type === "ForInStatement" || P.type === "ForOfStatement" || P.type === "ForStatement" || P.type === "FunctionDeclaration" || P.type === "IfStatement" || P.type === "ImportDeclaration" || P.type === "InterfaceDeclaration" || P.type === "LabeledStatement" || P.type === "MethodDefinition" || P.type === "ReturnStatement" || P.type === "SwitchStatement" || P.type === "ThrowStatement" || P.type === "TryStatement" || P.type === "TSDeclareFunction" || P.type === "TSEnumDeclaration" || P.type === "TSImportEqualsDeclaration" || P.type === "TSInterfaceDeclaration" || P.type === "TSModuleDeclaration" || P.type === "TSNamespaceExportDeclaration" || P.type === "TypeAlias" || P.type === "VariableDeclaration" || P.type === "WhileStatement" || P.type === "WithStatement";
        }
        function A(P) {
          let C = 0, D = P.getValue();
          for (; D; ) {
            let g = P.getParentNode(C++);
            if (g && g.type === "ForStatement" && g.init === D)
              return true;
            D = g;
          }
          return false;
        }
        function S(P) {
          return o(P, (C) => C.type === "ObjectTypeAnnotation" && o(C, (D) => D.type === "FunctionTypeAnnotation" || void 0) || void 0);
        }
        function B(P) {
          switch (P.type) {
            case "ObjectExpression":
              return true;
            default:
              return false;
          }
        }
        function I(P) {
          let C = P.getValue(), D = P.getParentNode(), g = P.getName();
          switch (D.type) {
            case "NGPipeExpression":
              if (typeof g == "number" && D.arguments[g] === C && D.arguments.length - 1 === g)
                return P.callParent(I);
              break;
            case "ObjectProperty":
              if (g === "value") {
                let F = P.getParentNode(1);
                return t(F.properties) === D;
              }
              break;
            case "BinaryExpression":
            case "LogicalExpression":
              if (g === "right")
                return P.callParent(I);
              break;
            case "ConditionalExpression":
              if (g === "alternate")
                return P.callParent(I);
              break;
            case "UnaryExpression":
              if (D.prefix)
                return P.callParent(I);
              break;
          }
          return false;
        }
        function k(P, C) {
          let D = P.getValue(), g = P.getParentNode();
          return D.type === "FunctionExpression" || D.type === "ClassExpression" ? g.type === "ExportDefaultDeclaration" || !w(P, C) : !i(D) || g.type !== "ExportDefaultDeclaration" && w(P, C) ? false : P.call((F) => k(F, C), ...r(P, D));
        }
        n.exports = w;
      }}), so = Z({"src/language-js/print-preprocess.js"(e, n) {
        re();
        function t(s, a) {
          switch (a.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
            case "__vue_ts_expression":
              return Object.assign(Object.assign({}, s), {}, {type: a.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: s, comments: [], rootMarker: a.rootMarker});
            default:
              return s;
          }
        }
        n.exports = t;
      }}), $m = Z({"src/language-js/print/html-binding.js"(e, n) {
        re();
        var {builders: {join: t, line: s, group: a, softline: r, indent: u}} = Oe();
        function i(c, v, m) {
          let d = c.getValue();
          if (v.__onHtmlBindingRoot && c.getName() === null && v.__onHtmlBindingRoot(d, v), d.type === "File") {
            if (v.__isVueForBindingLeft)
              return c.call((p) => {
                let f = t([",", s], p.map(m, "params")), {params: h} = p.getValue();
                return h.length === 1 ? f : ["(", u([r, a(f)]), r, ")"];
              }, "program", "body", 0);
            if (v.__isVueBindings)
              return c.call((p) => t([",", s], p.map(m, "params")), "program", "body", 0);
          }
        }
        function o(c) {
          switch (c.type) {
            case "MemberExpression":
              switch (c.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return o(c.object);
              }
              return false;
            case "Identifier":
              return true;
            default:
              return false;
          }
        }
        n.exports = {isVueEventBindingExpression: o, printHtmlBinding: i};
      }}), Jn = Z({"src/language-js/print/binaryish.js"(e, n) {
        re();
        var {printComments: t} = et(), {getLast: s} = Ue(), {builders: {join: a, line: r, softline: u, group: i, indent: o, align: c, ifBreak: v, indentIfBreak: m}, utils: {cleanDoc: d, getDocParts: p, isConcat: f}} = Oe(), {hasLeadingOwnLineComment: h, isBinaryish: w, isJsxNode: T, shouldFlatten: A, hasComment: S, CommentCheckFlags: B, isCallExpression: I, isMemberExpression: k, isObjectProperty: P, isEnabledHackPipeline: C} = Ke(), D = 0;
        function g(E, y, N) {
          let x = E.getValue(), b = E.getParentNode(), L = E.getParentNode(1), M = x !== b.body && (b.type === "IfStatement" || b.type === "WhileStatement" || b.type === "SwitchStatement" || b.type === "DoWhileStatement"), j = C(y) && x.operator === "|>", $ = F(E, N, y, false, M);
          if (M)
            return $;
          if (j)
            return i($);
          if (I(b) && b.callee === x || b.type === "UnaryExpression" || k(b) && !b.computed)
            return i([o([u, ...$]), u]);
          let V = b.type === "ReturnStatement" || b.type === "ThrowStatement" || b.type === "JSXExpressionContainer" && L.type === "JSXAttribute" || x.operator !== "|" && b.type === "JsExpressionRoot" || x.type !== "NGPipeExpression" && (b.type === "NGRoot" && y.parser === "__ng_binding" || b.type === "NGMicrosyntaxExpression" && L.type === "NGMicrosyntax" && L.body.length === 1) || x === b.body && b.type === "ArrowFunctionExpression" || x !== b.body && b.type === "ForStatement" || b.type === "ConditionalExpression" && L.type !== "ReturnStatement" && L.type !== "ThrowStatement" && !I(L) || b.type === "TemplateLiteral", q = b.type === "AssignmentExpression" || b.type === "VariableDeclarator" || b.type === "ClassProperty" || b.type === "PropertyDefinition" || b.type === "TSAbstractPropertyDefinition" || b.type === "ClassPrivateProperty" || P(b), Y = w(x.left) && A(x.operator, x.left.operator);
          if (V || l(x) && !Y || !l(x) && q)
            return i($);
          if ($.length === 0)
            return "";
          let H = T(x.right), R = $.findIndex((X) => typeof X != "string" && !Array.isArray(X) && X.type === "group"), Q = $.slice(0, R === -1 ? 1 : R + 1), ee = $.slice(Q.length, H ? -1 : void 0), te = Symbol("logicalChain-" + ++D), oe = i([...Q, o(ee)], {id: te});
          if (!H)
            return oe;
          let W = s($);
          return i([oe, m(W, {groupId: te})]);
        }
        function F(E, y, N, x, b) {
          let L = E.getValue();
          if (!w(L))
            return [i(y())];
          let M = [];
          A(L.operator, L.left.operator) ? M = E.call((ee) => F(ee, y, N, true, b), "left") : M.push(i(y("left")));
          let j = l(L), $ = (L.operator === "|>" || L.type === "NGPipeExpression" || L.operator === "|" && N.parser === "__vue_expression") && !h(N.originalText, L.right), V = L.type === "NGPipeExpression" ? "|" : L.operator, q = L.type === "NGPipeExpression" && L.arguments.length > 0 ? i(o([u, ": ", a([u, ":", v(" ")], E.map(y, "arguments").map((ee) => c(2, i(ee))))])) : "", Y;
          if (j)
            Y = [V, " ", y("right"), q];
          else {
            let te = C(N) && V === "|>" ? E.call((oe) => F(oe, y, N, true, b), "right") : y("right");
            Y = [$ ? r : "", V, $ ? " " : r, te, q];
          }
          let H = E.getParentNode(), R = S(L.left, B.Trailing | B.Line), Q = R || !(b && L.type === "LogicalExpression") && H.type !== L.type && L.left.type !== L.type && L.right.type !== L.type;
          if (M.push($ ? "" : " ", Q ? i(Y, {shouldBreak: R}) : Y), x && S(L)) {
            let ee = d(t(E, M, N));
            return f(ee) || ee.type === "fill" ? p(ee) : [ee];
          }
          return M;
        }
        function l(E) {
          return E.type !== "LogicalExpression" ? false : !!(E.right.type === "ObjectExpression" && E.right.properties.length > 0 || E.right.type === "ArrayExpression" && E.right.elements.length > 0 || T(E.right));
        }
        n.exports = {printBinaryishExpression: g, shouldInlineLogicalExpression: l};
      }}), Hm = Z({"src/language-js/print/angular.js"(e, n) {
        re();
        var {builders: {join: t, line: s, group: a}} = Oe(), {hasNode: r, hasComment: u, getComments: i} = Ke(), {printBinaryishExpression: o} = Jn();
        function c(d, p, f) {
          let h = d.getValue();
          if (!!h.type.startsWith("NG"))
            switch (h.type) {
              case "NGRoot":
                return [f("node"), u(h.node) ? " //" + i(h.node)[0].value.trimEnd() : ""];
              case "NGPipeExpression":
                return o(d, p, f);
              case "NGChainedExpression":
                return a(t([";", s], d.map((w) => m(w) ? f() : ["(", f(), ")"], "expressions")));
              case "NGEmptyExpression":
                return "";
              case "NGQuotedExpression":
                return [h.prefix, ": ", h.value.trim()];
              case "NGMicrosyntax":
                return d.map((w, T) => [T === 0 ? "" : v(w.getValue(), T, h) ? " " : [";", s], f()], "body");
              case "NGMicrosyntaxKey":
                return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(h.name) ? h.name : JSON.stringify(h.name);
              case "NGMicrosyntaxExpression":
                return [f("expression"), h.alias === null ? "" : [" as ", f("alias")]];
              case "NGMicrosyntaxKeyedExpression": {
                let w = d.getName(), T = d.getParentNode(), A = v(h, w, T) || (w === 1 && (h.key.name === "then" || h.key.name === "else") || w === 2 && h.key.name === "else" && T.body[w - 1].type === "NGMicrosyntaxKeyedExpression" && T.body[w - 1].key.name === "then") && T.body[0].type === "NGMicrosyntaxExpression";
                return [f("key"), A ? " " : ": ", f("expression")];
              }
              case "NGMicrosyntaxLet":
                return ["let ", f("key"), h.value === null ? "" : [" = ", f("value")]];
              case "NGMicrosyntaxAs":
                return [f("key"), " as ", f("alias")];
              default:
                throw new Error("Unknown Angular node type: ".concat(JSON.stringify(h.type), "."));
            }
        }
        function v(d, p, f) {
          return d.type === "NGMicrosyntaxKeyedExpression" && d.key.name === "of" && p === 1 && f.body[0].type === "NGMicrosyntaxLet" && f.body[0].value === null;
        }
        function m(d) {
          return r(d.getValue(), (p) => {
            switch (p.type) {
              case void 0:
                return false;
              case "CallExpression":
              case "OptionalCallExpression":
              case "AssignmentExpression":
                return true;
            }
          });
        }
        n.exports = {printAngular: c};
      }}), Gm = Z({"src/language-js/print/jsx.js"(e, n) {
        re();
        var {printComments: t, printDanglingComments: s} = et(), {builders: {line: a, hardline: r, softline: u, group: i, indent: o, conditionalGroup: c, fill: v, ifBreak: m, lineSuffixBoundary: d, join: p}, utils: {willBreak: f}} = Oe(), {getLast: h, getPreferredQuote: w} = Ue(), {isJsxNode: T, rawText: A, isLiteral: S, isCallExpression: B, isStringLiteral: I, isBinaryish: k, hasComment: P, CommentCheckFlags: C, hasNodeIgnoreComment: D} = Ke(), g = jt(), {willPrintOwnComments: F} = uo(), l = (ie) => ie === "" || ie === a || ie === r || ie === u;
        function E(ie, G, z) {
          let U = ie.getValue();
          if (U.type === "JSXElement" && W(U))
            return [z("openingElement"), z("closingElement")];
          let le = U.type === "JSXElement" ? z("openingElement") : z("openingFragment"), ge = U.type === "JSXElement" ? z("closingElement") : z("closingFragment");
          if (U.children.length === 1 && U.children[0].type === "JSXExpressionContainer" && (U.children[0].expression.type === "TemplateLiteral" || U.children[0].expression.type === "TaggedTemplateExpression"))
            return [le, ...ie.map(z, "children"), ge];
          U.children = U.children.map((Fe) => ue(Fe) ? {type: "JSXText", value: " ", raw: " "} : Fe);
          let Ae = U.children.some(T), Ne = U.children.filter((Fe) => Fe.type === "JSXExpressionContainer").length > 1, ke = U.type === "JSXElement" && U.openingElement.attributes.length > 1, ce = f(le) || Ae || ke || Ne, pe = ie.getParentNode().rootMarker === "mdx", de = G.singleQuote ? "{' '}" : '{" "}', ae = pe ? " " : m([de, u], " "), ve = U.openingElement && U.openingElement.name && U.openingElement.name.name === "fbt", K = y(ie, G, z, ae, ve), he = U.children.some((Fe) => X(Fe));
          for (let Fe = K.length - 2; Fe >= 0; Fe--) {
            let me = K[Fe] === "" && K[Fe + 1] === "", _ = K[Fe] === r && K[Fe + 1] === "" && K[Fe + 2] === r, J = (K[Fe] === u || K[Fe] === r) && K[Fe + 1] === "" && K[Fe + 2] === ae, ne = K[Fe] === ae && K[Fe + 1] === "" && (K[Fe + 2] === u || K[Fe + 2] === r), Ee = K[Fe] === ae && K[Fe + 1] === "" && K[Fe + 2] === ae, We = K[Fe] === u && K[Fe + 1] === "" && K[Fe + 2] === r || K[Fe] === r && K[Fe + 1] === "" && K[Fe + 2] === u;
            _ && he || me || J || Ee || We ? K.splice(Fe, 2) : ne && K.splice(Fe + 1, 2);
          }
          for (; K.length > 0 && l(h(K)); )
            K.pop();
          for (; K.length > 1 && l(K[0]) && l(K[1]); )
            K.shift(), K.shift();
          let ye = [];
          for (let [Fe, me] of K.entries()) {
            if (me === ae) {
              if (Fe === 1 && K[Fe - 1] === "") {
                if (K.length === 2) {
                  ye.push(de);
                  continue;
                }
                ye.push([de, r]);
                continue;
              } else if (Fe === K.length - 1) {
                ye.push(de);
                continue;
              } else if (K[Fe - 1] === "" && K[Fe - 2] === r) {
                ye.push(de);
                continue;
              }
            }
            ye.push(me), f(me) && (ce = true);
          }
          let Ce = he ? v(ye) : i(ye, {shouldBreak: true});
          if (pe)
            return Ce;
          let Ie = i([le, o([r, Ce]), r, ge]);
          return ce ? Ie : c([i([le, ...K, ge]), Ie]);
        }
        function y(ie, G, z, U, le) {
          let ge = [];
          return ie.each((Ae, Ne, ke) => {
            let ce = Ae.getValue();
            if (S(ce)) {
              let pe = A(ce);
              if (X(ce)) {
                let de = pe.split(ee);
                if (de[0] === "") {
                  if (ge.push(""), de.shift(), /\n/.test(de[0])) {
                    let ve = ke[Ne + 1];
                    ge.push(x(le, de[1], ce, ve));
                  } else
                    ge.push(U);
                  de.shift();
                }
                let ae;
                if (h(de) === "" && (de.pop(), ae = de.pop()), de.length === 0)
                  return;
                for (let [ve, K] of de.entries())
                  ve % 2 === 1 ? ge.push(a) : ge.push(K);
                if (ae !== void 0)
                  if (/\n/.test(ae)) {
                    let ve = ke[Ne + 1];
                    ge.push(x(le, h(ge), ce, ve));
                  } else
                    ge.push(U);
                else {
                  let ve = ke[Ne + 1];
                  ge.push(N(le, h(ge), ce, ve));
                }
              } else
                /\n/.test(pe) ? pe.match(/\n/g).length > 1 && ge.push("", r) : ge.push("", U);
            } else {
              let pe = z();
              ge.push(pe);
              let de = ke[Ne + 1];
              if (de && X(de)) {
                let ve = oe(A(de)).split(ee)[0];
                ge.push(N(le, ve, ce, de));
              } else
                ge.push(r);
            }
          }, "children"), ge;
        }
        function N(ie, G, z, U) {
          return ie ? "" : z.type === "JSXElement" && !z.closingElement || U && U.type === "JSXElement" && !U.closingElement ? G.length === 1 ? u : r : u;
        }
        function x(ie, G, z, U) {
          return ie ? r : G.length === 1 ? z.type === "JSXElement" && !z.closingElement || U && U.type === "JSXElement" && !U.closingElement ? r : u : r;
        }
        function b(ie, G, z) {
          let U = ie.getParentNode();
          if (!U || {ArrayExpression: true, JSXAttribute: true, JSXElement: true, JSXExpressionContainer: true, JSXFragment: true, ExpressionStatement: true, CallExpression: true, OptionalCallExpression: true, ConditionalExpression: true, JsExpressionRoot: true}[U.type])
            return G;
          let ge = ie.match(void 0, (Ne) => Ne.type === "ArrowFunctionExpression", B, (Ne) => Ne.type === "JSXExpressionContainer"), Ae = g(ie, z);
          return i([Ae ? "" : m("("), o([u, G]), u, Ae ? "" : m(")")], {shouldBreak: ge});
        }
        function L(ie, G, z) {
          let U = ie.getValue(), le = [];
          if (le.push(z("name")), U.value) {
            let ge;
            if (I(U.value)) {
              let Ne = A(U.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), {escaped: ke, quote: ce, regex: pe} = w(Ne, G.jsxSingleQuote ? "'" : '"');
              Ne = Ne.replace(pe, ke), ge = [ce, Ne, ce];
            } else
              ge = z("value");
            le.push("=", ge);
          }
          return le;
        }
        function M(ie, G, z) {
          let U = ie.getValue(), le = (ge, Ae) => ge.type === "JSXEmptyExpression" || !P(ge) && (ge.type === "ArrayExpression" || ge.type === "ObjectExpression" || ge.type === "ArrowFunctionExpression" || ge.type === "AwaitExpression" && (le(ge.argument, ge) || ge.argument.type === "JSXElement") || B(ge) || ge.type === "FunctionExpression" || ge.type === "TemplateLiteral" || ge.type === "TaggedTemplateExpression" || ge.type === "DoExpression" || T(Ae) && (ge.type === "ConditionalExpression" || k(ge)));
          return le(U.expression, ie.getParentNode(0)) ? i(["{", z("expression"), d, "}"]) : i(["{", o([u, z("expression")]), u, d, "}"]);
        }
        function j(ie, G, z) {
          let U = ie.getValue(), le = U.name && P(U.name) || U.typeParameters && P(U.typeParameters);
          if (U.selfClosing && U.attributes.length === 0 && !le)
            return ["<", z("name"), z("typeParameters"), " />"];
          if (U.attributes && U.attributes.length === 1 && U.attributes[0].value && I(U.attributes[0].value) && !U.attributes[0].value.value.includes(`
`) && !le && !P(U.attributes[0]))
            return i(["<", z("name"), z("typeParameters"), " ", ...ie.map(z, "attributes"), U.selfClosing ? " />" : ">"]);
          let ge = U.attributes.length > 0 && P(h(U.attributes), C.Trailing), Ae = U.attributes.length === 0 && !le || (G.bracketSameLine || G.jsxBracketSameLine) && (!le || U.attributes.length > 0) && !ge, Ne = U.attributes && U.attributes.some((ce) => ce.value && I(ce.value) && ce.value.value.includes(`
`)), ke = G.singleAttributePerLine && U.attributes.length > 1 ? r : a;
          return i(["<", z("name"), z("typeParameters"), o(ie.map(() => [ke, z()], "attributes")), U.selfClosing ? a : Ae ? ">" : u, U.selfClosing ? "/>" : Ae ? "" : ">"], {shouldBreak: Ne});
        }
        function $(ie, G, z) {
          let U = ie.getValue(), le = [];
          le.push("</");
          let ge = z("name");
          return P(U.name, C.Leading | C.Line) ? le.push(o([r, ge]), r) : P(U.name, C.Leading | C.Block) ? le.push(" ", ge) : le.push(ge), le.push(">"), le;
        }
        function V(ie, G) {
          let z = ie.getValue(), U = P(z), le = P(z, C.Line), ge = z.type === "JSXOpeningFragment";
          return [ge ? "<" : "</", o([le ? r : U && !ge ? " " : "", s(ie, G, true)]), le ? r : "", ">"];
        }
        function q(ie, G, z) {
          let U = t(ie, E(ie, G, z), G);
          return b(ie, U, G);
        }
        function Y(ie, G) {
          let z = ie.getValue(), U = P(z, C.Line);
          return [s(ie, G, !U), U ? r : ""];
        }
        function H(ie, G, z) {
          let U = ie.getValue();
          return ["{", ie.call((le) => {
            let ge = ["...", z()], Ae = le.getValue();
            return !P(Ae) || !F(le) ? ge : [o([u, t(le, ge, G)]), u];
          }, U.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }
        function R(ie, G, z) {
          let U = ie.getValue();
          if (!!U.type.startsWith("JSX"))
            switch (U.type) {
              case "JSXAttribute":
                return L(ie, G, z);
              case "JSXIdentifier":
                return String(U.name);
              case "JSXNamespacedName":
                return p(":", [z("namespace"), z("name")]);
              case "JSXMemberExpression":
                return p(".", [z("object"), z("property")]);
              case "JSXSpreadAttribute":
                return H(ie, G, z);
              case "JSXSpreadChild":
                return H(ie, G, z);
              case "JSXExpressionContainer":
                return M(ie, G, z);
              case "JSXFragment":
              case "JSXElement":
                return q(ie, G, z);
              case "JSXOpeningElement":
                return j(ie, G, z);
              case "JSXClosingElement":
                return $(ie, G, z);
              case "JSXOpeningFragment":
              case "JSXClosingFragment":
                return V(ie, G);
              case "JSXEmptyExpression":
                return Y(ie, G);
              case "JSXText":
                throw new Error("JSXTest should be handled by JSXElement");
              default:
                throw new Error("Unknown JSX node type: ".concat(JSON.stringify(U.type), "."));
            }
        }
        var Q = ` 
\r	`, ee = new RegExp("([" + Q + "]+)"), te = new RegExp("[^" + Q + "]"), oe = (ie) => ie.replace(new RegExp("(?:^" + ee.source + "|" + ee.source + "$)"), "");
        function W(ie) {
          if (ie.children.length === 0)
            return true;
          if (ie.children.length > 1)
            return false;
          let G = ie.children[0];
          return S(G) && !X(G);
        }
        function X(ie) {
          return S(ie) && (te.test(A(ie)) || !/\n/.test(A(ie)));
        }
        function ue(ie) {
          return ie.type === "JSXExpressionContainer" && S(ie.expression) && ie.expression.value === " " && !P(ie.expression);
        }
        function De(ie) {
          let G = ie.getValue(), z = ie.getParentNode();
          if (!z || !G || !T(G) || !T(z))
            return false;
          let U = z.children.indexOf(G), le = null;
          for (let ge = U; ge > 0; ge--) {
            let Ae = z.children[ge - 1];
            if (!(Ae.type === "JSXText" && !X(Ae))) {
              le = Ae;
              break;
            }
          }
          return le && le.type === "JSXExpressionContainer" && le.expression.type === "JSXEmptyExpression" && D(le.expression);
        }
        n.exports = {hasJsxIgnoreComment: De, printJsx: R};
      }}), ct = Z({"src/language-js/print/misc.js"(e, n) {
        re();
        var {isNonEmptyArray: t} = Ue(), {builders: {indent: s, join: a, line: r}} = Oe(), {isFlowAnnotationComment: u} = Ke();
        function i(h) {
          let w = h.getValue();
          return !w.optional || w.type === "Identifier" && w === h.getParentNode().key ? "" : w.type === "OptionalCallExpression" || w.type === "OptionalMemberExpression" && w.computed ? "?." : "?";
        }
        function o(h) {
          return h.getValue().definite || h.match(void 0, (w, T) => T === "id" && w.type === "VariableDeclarator" && w.definite) ? "!" : "";
        }
        function c(h, w, T) {
          let A = h.getValue();
          return A.typeArguments ? T("typeArguments") : A.typeParameters ? T("typeParameters") : "";
        }
        function v(h, w, T) {
          let A = h.getValue();
          if (!A.typeAnnotation)
            return "";
          let S = h.getParentNode(), B = S.type === "DeclareFunction" && S.id === A;
          return u(w.originalText, A.typeAnnotation) ? [" /*: ", T("typeAnnotation"), " */"] : [B ? "" : ": ", T("typeAnnotation")];
        }
        function m(h, w, T) {
          return ["::", T("callee")];
        }
        function d(h, w, T) {
          let A = h.getValue();
          return t(A.modifiers) ? [a(" ", h.map(T, "modifiers")), " "] : "";
        }
        function p(h, w, T) {
          return h.type === "EmptyStatement" ? ";" : h.type === "BlockStatement" || T ? [" ", w] : s([r, w]);
        }
        function f(h, w, T) {
          return ["...", T("argument"), v(h, w, T)];
        }
        n.exports = {printOptionalToken: i, printDefiniteToken: o, printFunctionTypeParameters: c, printBindExpressionCallee: m, printTypeScriptModifiers: d, printTypeAnnotation: v, printRestSpread: f, adjustClause: p};
      }}), Kt = Z({"src/language-js/print/array.js"(e, n) {
        re();
        var {printDanglingComments: t} = et(), {builders: {line: s, softline: a, hardline: r, group: u, indent: i, ifBreak: o, fill: c}} = Oe(), {getLast: v, hasNewline: m} = Ue(), {shouldPrintComma: d, hasComment: p, CommentCheckFlags: f, isNextLineEmpty: h, isNumericLiteral: w, isSignedNumericLiteral: T} = Ke(), {locStart: A} = st(), {printOptionalToken: S, printTypeAnnotation: B} = ct();
        function I(D, g, F) {
          let l = D.getValue(), E = [], y = l.type === "TupleExpression" ? "#[" : "[", N = "]";
          if (l.elements.length === 0)
            p(l, f.Dangling) ? E.push(u([y, t(D, g), a, N])) : E.push(y, N);
          else {
            let x = v(l.elements), b = !(x && x.type === "RestElement"), L = x === null, M = Symbol("array"), j = !g.__inJestEach && l.elements.length > 1 && l.elements.every((q, Y, H) => {
              let R = q && q.type;
              if (R !== "ArrayExpression" && R !== "ObjectExpression")
                return false;
              let Q = H[Y + 1];
              if (Q && R !== Q.type)
                return false;
              let ee = R === "ArrayExpression" ? "elements" : "properties";
              return q[ee] && q[ee].length > 1;
            }), $ = k(l, g), V = b ? L ? "," : d(g) ? $ ? o(",", "", {groupId: M}) : o(",") : "" : "";
            E.push(u([y, i([a, $ ? C(D, g, F, V) : [P(D, g, "elements", F), V], t(D, g, true)]), a, N], {shouldBreak: j, id: M}));
          }
          return E.push(S(D), B(D, g, F)), E;
        }
        function k(D, g) {
          return D.elements.length > 1 && D.elements.every((F) => F && (w(F) || T(F) && !p(F.argument)) && !p(F, f.Trailing | f.Line, (l) => !m(g.originalText, A(l), {backwards: true})));
        }
        function P(D, g, F, l) {
          let E = [], y = [];
          return D.each((N) => {
            E.push(y, u(l())), y = [",", s], N.getValue() && h(N.getValue(), g) && y.push(a);
          }, F), E;
        }
        function C(D, g, F, l) {
          let E = [];
          return D.each((y, N, x) => {
            let b = N === x.length - 1;
            E.push([F(), b ? l : ","]), b || E.push(h(y.getValue(), g) ? [r, r] : p(x[N + 1], f.Leading | f.Line) ? r : s);
          }, "elements"), c(E);
        }
        n.exports = {printArray: I, printArrayItems: P, isConciselyPrintedArray: k};
      }}), io = Z({"src/language-js/print/call-arguments.js"(e, n) {
        re();
        var {printDanglingComments: t} = et(), {getLast: s, getPenultimate: a} = Ue(), {getFunctionParameters: r, hasComment: u, CommentCheckFlags: i, isFunctionCompositionArgs: o, isJsxNode: c, isLongCurriedCallExpression: v, shouldPrintComma: m, getCallArguments: d, iterateCallArgumentsPath: p, isNextLineEmpty: f, isCallExpression: h, isStringLiteral: w, isObjectProperty: T} = Ke(), {builders: {line: A, hardline: S, softline: B, group: I, indent: k, conditionalGroup: P, ifBreak: C, breakParent: D}, utils: {willBreak: g}} = Oe(), {ArgExpansionBailout: F} = zt(), {isConciselyPrintedArray: l} = Kt();
        function E(j, $, V) {
          let q = j.getValue(), Y = q.type === "ImportExpression", H = d(q);
          if (H.length === 0)
            return ["(", t(j, $, true), ")"];
          if (b(H))
            return ["(", V(["arguments", 0]), ", ", V(["arguments", 1]), ")"];
          let R = false, Q = false, ee = H.length - 1, te = [];
          p(j, (ie, G) => {
            let z = ie.getNode(), U = [V()];
            G === ee || (f(z, $) ? (G === 0 && (Q = true), R = true, U.push(",", S, S)) : U.push(",", A)), te.push(U);
          });
          let oe = !(Y || q.callee && q.callee.type === "Import") && m($, "all") ? "," : "";
          function W() {
            return I(["(", k([A, ...te]), oe, A, ")"], {shouldBreak: true});
          }
          if (R || j.getParentNode().type !== "Decorator" && o(H))
            return W();
          let X = x(H), ue = N(H, $);
          if (X || ue) {
            if (X ? te.slice(1).some(g) : te.slice(0, -1).some(g))
              return W();
            let ie = [];
            try {
              j.try(() => {
                p(j, (G, z) => {
                  X && z === 0 && (ie = [[V([], {expandFirstArg: true}), te.length > 1 ? "," : "", Q ? S : A, Q ? S : ""], ...te.slice(1)]), ue && z === ee && (ie = [...te.slice(0, -1), V([], {expandLastArg: true})]);
                });
              });
            } catch (G) {
              if (G instanceof F)
                return W();
              throw G;
            }
            return [te.some(g) ? D : "", P([["(", ...ie, ")"], X ? ["(", I(ie[0], {shouldBreak: true}), ...ie.slice(1), ")"] : ["(", ...te.slice(0, -1), I(s(ie), {shouldBreak: true}), ")"], W()])];
          }
          let De = ["(", k([B, ...te]), C(oe), B, ")"];
          return v(j) ? De : I(De, {shouldBreak: te.some(g) || R});
        }
        function y(j) {
          let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          return j.type === "ObjectExpression" && (j.properties.length > 0 || u(j)) || j.type === "ArrayExpression" && (j.elements.length > 0 || u(j)) || j.type === "TSTypeAssertion" && y(j.expression) || j.type === "TSAsExpression" && y(j.expression) || j.type === "FunctionExpression" || j.type === "ArrowFunctionExpression" && (!j.returnType || !j.returnType.typeAnnotation || j.returnType.typeAnnotation.type !== "TSTypeReference" || L(j.body)) && (j.body.type === "BlockStatement" || j.body.type === "ArrowFunctionExpression" && y(j.body, true) || j.body.type === "ObjectExpression" || j.body.type === "ArrayExpression" || !$ && (h(j.body) || j.body.type === "ConditionalExpression") || c(j.body)) || j.type === "DoExpression" || j.type === "ModuleExpression";
        }
        function N(j, $) {
          let V = s(j), q = a(j);
          return !u(V, i.Leading) && !u(V, i.Trailing) && y(V) && (!q || q.type !== V.type) && (j.length !== 2 || q.type !== "ArrowFunctionExpression" || V.type !== "ArrayExpression") && !(j.length > 1 && V.type === "ArrayExpression" && l(V, $));
        }
        function x(j) {
          if (j.length !== 2)
            return false;
          let [$, V] = j;
          return $.type === "ModuleExpression" && M(V) ? true : !u($) && ($.type === "FunctionExpression" || $.type === "ArrowFunctionExpression" && $.body.type === "BlockStatement") && V.type !== "FunctionExpression" && V.type !== "ArrowFunctionExpression" && V.type !== "ConditionalExpression" && !y(V);
        }
        function b(j) {
          return j.length === 2 && j[0].type === "ArrowFunctionExpression" && r(j[0]).length === 0 && j[0].body.type === "BlockStatement" && j[1].type === "ArrayExpression" && !j.some(($) => u($));
        }
        function L(j) {
          return j.type === "BlockStatement" && (j.body.some(($) => $.type !== "EmptyStatement") || u(j, i.Dangling));
        }
        function M(j) {
          return j.type === "ObjectExpression" && j.properties.length === 1 && T(j.properties[0]) && j.properties[0].key.type === "Identifier" && j.properties[0].key.name === "type" && w(j.properties[0].value) && j.properties[0].value.value === "module";
        }
        n.exports = E;
      }}), ao = Z({"src/language-js/print/member.js"(e, n) {
        re();
        var {builders: {softline: t, group: s, indent: a, label: r}} = Oe(), {isNumericLiteral: u, isMemberExpression: i, isCallExpression: o} = Ke(), {printOptionalToken: c} = ct();
        function v(d, p, f) {
          let h = d.getValue(), w = d.getParentNode(), T, A = 0;
          do
            T = d.getParentNode(A), A++;
          while (T && (i(T) || T.type === "TSNonNullExpression"));
          let S = f("object"), B = m(d, p, f), I = T && (T.type === "NewExpression" || T.type === "BindExpression" || T.type === "AssignmentExpression" && T.left.type !== "Identifier") || h.computed || h.object.type === "Identifier" && h.property.type === "Identifier" && !i(w) || (w.type === "AssignmentExpression" || w.type === "VariableDeclarator") && (o(h.object) && h.object.arguments.length > 0 || h.object.type === "TSNonNullExpression" && o(h.object.expression) && h.object.expression.arguments.length > 0 || S.label === "member-chain");
          return r(S.label === "member-chain" ? "member-chain" : "member", [S, I ? B : s(a([t, B]))]);
        }
        function m(d, p, f) {
          let h = f("property"), w = d.getValue(), T = c(d);
          return w.computed ? !w.property || u(w.property) ? [T, "[", h, "]"] : s([T, "[", a([t, h]), t, "]"]) : [T, ".", h];
        }
        n.exports = {printMemberExpression: v, printMemberLookup: m};
      }}), Jm = Z({"src/language-js/print/member-chain.js"(e, n) {
        re();
        var {printComments: t} = et(), {getLast: s, isNextLineEmptyAfterIndex: a, getNextNonSpaceNonCommentCharacterIndex: r} = Ue(), u = jt(), {isCallExpression: i, isMemberExpression: o, isFunctionOrArrowExpression: c, isLongCurriedCallExpression: v, isMemberish: m, isNumericLiteral: d, isSimpleCallArgument: p, hasComment: f, CommentCheckFlags: h, isNextLineEmpty: w} = Ke(), {locEnd: T} = st(), {builders: {join: A, hardline: S, group: B, indent: I, conditionalGroup: k, breakParent: P, label: C}, utils: {willBreak: D}} = Oe(), g = io(), {printMemberLookup: F} = ao(), {printOptionalToken: l, printFunctionTypeParameters: E, printBindExpressionCallee: y} = ct();
        function N(x, b, L) {
          let M = x.getParentNode(), j = !M || M.type === "ExpressionStatement", $ = [];
          function V(de) {
            let {originalText: ae} = b, ve = r(ae, de, T);
            return ae.charAt(ve) === ")" ? ve !== false && a(ae, ve + 1) : w(de, b);
          }
          function q(de) {
            let ae = de.getValue();
            i(ae) && (m(ae.callee) || i(ae.callee)) ? ($.unshift({node: ae, printed: [t(de, [l(de), E(de, b, L), g(de, b, L)], b), V(ae) ? S : ""]}), de.call((ve) => q(ve), "callee")) : m(ae) ? ($.unshift({node: ae, needsParens: u(de, b), printed: t(de, o(ae) ? F(de, b, L) : y(de, b, L), b)}), de.call((ve) => q(ve), "object")) : ae.type === "TSNonNullExpression" ? ($.unshift({node: ae, printed: t(de, "!", b)}), de.call((ve) => q(ve), "expression")) : $.unshift({node: ae, printed: L()});
          }
          let Y = x.getValue();
          $.unshift({node: Y, printed: [l(x), E(x, b, L), g(x, b, L)]}), Y.callee && x.call((de) => q(de), "callee");
          let H = [], R = [$[0]], Q = 1;
          for (; Q < $.length && ($[Q].node.type === "TSNonNullExpression" || i($[Q].node) || o($[Q].node) && $[Q].node.computed && d($[Q].node.property)); ++Q)
            R.push($[Q]);
          if (!i($[0].node))
            for (; Q + 1 < $.length && (m($[Q].node) && m($[Q + 1].node)); ++Q)
              R.push($[Q]);
          H.push(R), R = [];
          let ee = false;
          for (; Q < $.length; ++Q) {
            if (ee && m($[Q].node)) {
              if ($[Q].node.computed && d($[Q].node.property)) {
                R.push($[Q]);
                continue;
              }
              H.push(R), R = [], ee = false;
            }
            (i($[Q].node) || $[Q].node.type === "ImportExpression") && (ee = true), R.push($[Q]), f($[Q].node, h.Trailing) && (H.push(R), R = [], ee = false);
          }
          R.length > 0 && H.push(R);
          function te(de) {
            return /^[A-Z]|^[$_]+$/.test(de);
          }
          function oe(de) {
            return de.length <= b.tabWidth;
          }
          function W(de) {
            let ae = de[1].length > 0 && de[1][0].node.computed;
            if (de[0].length === 1) {
              let K = de[0][0].node;
              return K.type === "ThisExpression" || K.type === "Identifier" && (te(K.name) || j && oe(K.name) || ae);
            }
            let ve = s(de[0]).node;
            return o(ve) && ve.property.type === "Identifier" && (te(ve.property.name) || ae);
          }
          let X = H.length >= 2 && !f(H[1][0].node) && W(H);
          function ue(de) {
            let ae = de.map((ve) => ve.printed);
            return de.length > 0 && s(de).needsParens ? ["(", ...ae, ")"] : ae;
          }
          function De(de) {
            return de.length === 0 ? "" : I(B([S, A(S, de.map(ue))]));
          }
          let ie = H.map(ue), G = ie, z = X ? 3 : 2, U = H.flat(), le = U.slice(1, -1).some((de) => f(de.node, h.Leading)) || U.slice(0, -1).some((de) => f(de.node, h.Trailing)) || H[z] && f(H[z][0].node, h.Leading);
          if (H.length <= z && !le)
            return v(x) ? G : B(G);
          let ge = s(H[X ? 1 : 0]).node, Ae = !i(ge) && V(ge), Ne = [ue(H[0]), X ? H.slice(1, 2).map(ue) : "", Ae ? S : "", De(H.slice(X ? 2 : 1))], ke = $.map((de) => {
            let {node: ae} = de;
            return ae;
          }).filter(i);
          function ce() {
            let de = s(s(H)).node, ae = s(ie);
            return i(de) && D(ae) && ke.slice(0, -1).some((ve) => ve.arguments.some(c));
          }
          let pe;
          return le || ke.length > 2 && ke.some((de) => !de.arguments.every((ae) => p(ae, 0))) || ie.slice(0, -1).some(D) || ce() ? pe = B(Ne) : pe = [D(G) || Ae ? P : "", k([G, Ne])], C("member-chain", pe);
        }
        n.exports = N;
      }}), oo = Z({"src/language-js/print/call-expression.js"(e, n) {
        re();
        var {builders: {join: t, group: s}} = Oe(), a = jt(), {getCallArguments: r, hasFlowAnnotationComment: u, isCallExpression: i, isMemberish: o, isStringLiteral: c, isTemplateOnItsOwnLine: v, isTestCall: m, iterateCallArgumentsPath: d} = Ke(), p = Jm(), f = io(), {printOptionalToken: h, printFunctionTypeParameters: w} = ct();
        function T(S, B, I) {
          let k = S.getValue(), P = S.getParentNode(), C = k.type === "NewExpression", D = k.type === "ImportExpression", g = h(S), F = r(k);
          if (F.length > 0 && (!D && !C && A(k, P) || F.length === 1 && v(F[0], B.originalText) || !C && m(k, P))) {
            let y = [];
            return d(S, () => {
              y.push(I());
            }), [C ? "new " : "", I("callee"), g, w(S, B, I), "(", t(", ", y), ")"];
          }
          let l = (B.parser === "babel" || B.parser === "babel-flow") && k.callee && k.callee.type === "Identifier" && u(k.callee.trailingComments);
          if (l && (k.callee.trailingComments[0].printed = true), !D && !C && o(k.callee) && !S.call((y) => a(y, B), "callee"))
            return p(S, B, I);
          let E = [C ? "new " : "", D ? "import" : I("callee"), g, l ? "/*:: ".concat(k.callee.trailingComments[0].value.slice(2).trim(), " */") : "", w(S, B, I), f(S, B, I)];
          return D || i(k.callee) ? s(E) : E;
        }
        function A(S, B) {
          if (S.callee.type !== "Identifier")
            return false;
          if (S.callee.name === "require")
            return true;
          if (S.callee.name === "define") {
            let I = r(S);
            return B.type === "ExpressionStatement" && (I.length === 1 || I.length === 2 && I[0].type === "ArrayExpression" || I.length === 3 && c(I[0]) && I[1].type === "ArrayExpression");
          }
          return false;
        }
        n.exports = {printCallExpression: T};
      }}), Yt = Z({"src/language-js/print/assignment.js"(e, n) {
        re();
        var {isNonEmptyArray: t, getStringWidth: s} = Ue(), {builders: {line: a, group: r, indent: u, indentIfBreak: i, lineSuffixBoundary: o}, utils: {cleanDoc: c, willBreak: v, canBreak: m}} = Oe(), {hasLeadingOwnLineComment: d, isBinaryish: p, isStringLiteral: f, isLiteral: h, isNumericLiteral: w, isCallExpression: T, isMemberExpression: A, getCallArguments: S, rawText: B, hasComment: I, isSignedNumericLiteral: k, isObjectProperty: P} = Ke(), {shouldInlineLogicalExpression: C} = Jn(), {printCallExpression: D} = oo();
        function g(W, X, ue, De, ie, G) {
          let z = E(W, X, ue, De, G), U = ue(G, {assignmentLayout: z});
          switch (z) {
            case "break-after-operator":
              return r([r(De), ie, r(u([a, U]))]);
            case "never-break-after-operator":
              return r([r(De), ie, " ", U]);
            case "fluid": {
              let le = Symbol("assignment");
              return r([r(De), ie, r(u(a), {id: le}), o, i(U, {groupId: le})]);
            }
            case "break-lhs":
              return r([De, ie, " ", r(U)]);
            case "chain":
              return [r(De), ie, a, U];
            case "chain-tail":
              return [r(De), ie, u([a, U])];
            case "chain-tail-arrow-chain":
              return [r(De), ie, U];
            case "only-left":
              return De;
          }
        }
        function F(W, X, ue) {
          let De = W.getValue();
          return g(W, X, ue, ue("left"), [" ", De.operator], "right");
        }
        function l(W, X, ue) {
          return g(W, X, ue, ue("id"), " =", "init");
        }
        function E(W, X, ue, De, ie) {
          let G = W.getValue(), z = G[ie];
          if (!z)
            return "only-left";
          let U = !x(z);
          if (W.match(x, b, (Ne) => !U || Ne.type !== "ExpressionStatement" && Ne.type !== "VariableDeclaration"))
            return U ? z.type === "ArrowFunctionExpression" && z.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
          if (!U && x(z.right) || d(X.originalText, z))
            return "break-after-operator";
          if (z.type === "CallExpression" && z.callee.name === "require" || X.parser === "json5" || X.parser === "json")
            return "never-break-after-operator";
          if (N(G) || L(G) || $(G) || V(G) && m(De))
            return "break-lhs";
          let Ae = ee(G, De, X);
          return W.call(() => y(W, X, ue, Ae), ie) ? "break-after-operator" : Ae || z.type === "TemplateLiteral" || z.type === "TaggedTemplateExpression" || z.type === "BooleanLiteral" || w(z) || z.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
        }
        function y(W, X, ue, De) {
          let ie = W.getValue();
          if (p(ie) && !C(ie))
            return true;
          switch (ie.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression":
              return true;
            case "ConditionalExpression": {
              let {test: U} = ie;
              return p(U) && !C(U);
            }
            case "ClassExpression":
              return t(ie.decorators);
          }
          if (De)
            return false;
          let G = ie, z = [];
          for (; ; )
            if (G.type === "UnaryExpression")
              G = G.argument, z.push("argument");
            else if (G.type === "TSNonNullExpression")
              G = G.expression, z.push("expression");
            else
              break;
          return !!(f(G) || W.call(() => H(W, X, ue), ...z));
        }
        function N(W) {
          if (b(W)) {
            let X = W.left || W.id;
            return X.type === "ObjectPattern" && X.properties.length > 2 && X.properties.some((ue) => P(ue) && (!ue.shorthand || ue.value && ue.value.type === "AssignmentPattern"));
          }
          return false;
        }
        function x(W) {
          return W.type === "AssignmentExpression";
        }
        function b(W) {
          return x(W) || W.type === "VariableDeclarator";
        }
        function L(W) {
          let X = M(W);
          if (t(X)) {
            let ue = W.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (X.length > 1 && X.some((De) => De[ue] || De.default))
              return true;
          }
          return false;
        }
        function M(W) {
          return j(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null;
        }
        function j(W) {
          return W.type === "TSTypeAliasDeclaration" || W.type === "TypeAlias";
        }
        function $(W) {
          if (W.type !== "VariableDeclarator")
            return false;
          let {typeAnnotation: X} = W.id;
          if (!X || !X.typeAnnotation)
            return false;
          let ue = q(X.typeAnnotation);
          return t(ue) && ue.length > 1 && ue.some((De) => t(q(De)) || De.type === "TSConditionalType");
        }
        function V(W) {
          return W.type === "VariableDeclarator" && W.init && W.init.type === "ArrowFunctionExpression";
        }
        function q(W) {
          return Y(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null;
        }
        function Y(W) {
          return W.type === "TSTypeReference" || W.type === "GenericTypeAnnotation";
        }
        function H(W, X, ue) {
          let De = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, ie = W.getValue(), G = () => H(W, X, ue, true);
          if (ie.type === "TSNonNullExpression")
            return W.call(G, "expression");
          if (T(ie)) {
            if (D(W, X, ue).label === "member-chain")
              return false;
            let U = S(ie);
            return !(U.length === 0 || U.length === 1 && Q(U[0], X)) || te(ie, ue) ? false : W.call(G, "callee");
          }
          return A(ie) ? W.call(G, "object") : De && (ie.type === "Identifier" || ie.type === "ThisExpression");
        }
        var R = 0.25;
        function Q(W, X) {
          let {printWidth: ue} = X;
          if (I(W))
            return false;
          let De = ue * R;
          if (W.type === "ThisExpression" || W.type === "Identifier" && W.name.length <= De || k(W) && !I(W.argument))
            return true;
          let ie = W.type === "Literal" && "regex" in W && W.regex.pattern || W.type === "RegExpLiteral" && W.pattern;
          return ie ? ie.length <= De : f(W) ? B(W).length <= De : W.type === "TemplateLiteral" ? W.expressions.length === 0 && W.quasis[0].value.raw.length <= De && !W.quasis[0].value.raw.includes(`
`) : h(W);
        }
        function ee(W, X, ue) {
          if (!P(W))
            return false;
          X = c(X);
          let De = 3;
          return typeof X == "string" && s(X) < ue.tabWidth + De;
        }
        function te(W, X) {
          let ue = oe(W);
          if (t(ue)) {
            if (ue.length > 1)
              return true;
            if (ue.length === 1) {
              let ie = ue[0];
              if (ie.type === "TSUnionType" || ie.type === "UnionTypeAnnotation" || ie.type === "TSIntersectionType" || ie.type === "IntersectionTypeAnnotation" || ie.type === "TSTypeLiteral" || ie.type === "ObjectTypeAnnotation")
                return true;
            }
            let De = W.typeParameters ? "typeParameters" : "typeArguments";
            if (v(X(De)))
              return true;
          }
          return false;
        }
        function oe(W) {
          return W.typeParameters && W.typeParameters.params || W.typeArguments && W.typeArguments.params;
        }
        n.exports = {printVariableDeclarator: l, printAssignmentExpression: F, printAssignment: g, isArrowFunctionVariableDeclarator: V};
      }}), Pr = Z({"src/language-js/print/function-parameters.js"(e, n) {
        re();
        var {getNextNonSpaceNonCommentCharacter: t} = Ue(), {printDanglingComments: s} = et(), {builders: {line: a, hardline: r, softline: u, group: i, indent: o, ifBreak: c}, utils: {removeLines: v, willBreak: m}} = Oe(), {getFunctionParameters: d, iterateFunctionParametersPath: p, isSimpleType: f, isTestCall: h, isTypeAnnotationAFunction: w, isObjectType: T, isObjectTypePropertyAFunction: A, hasRestParameter: S, shouldPrintComma: B, hasComment: I, isNextLineEmpty: k} = Ke(), {locEnd: P} = st(), {ArgExpansionBailout: C} = zt(), {printFunctionTypeParameters: D} = ct();
        function g(y, N, x, b, L) {
          let M = y.getValue(), j = d(M), $ = L ? D(y, x, N) : "";
          if (j.length === 0)
            return [$, "(", s(y, x, true, (ee) => t(x.originalText, ee, P) === ")"), ")"];
          let V = y.getParentNode(), q = h(V), Y = F(M), H = [];
          if (p(y, (ee, te) => {
            let oe = te === j.length - 1;
            oe && M.rest && H.push("..."), H.push(N()), !oe && (H.push(","), q || Y ? H.push(" ") : k(j[te], x) ? H.push(r, r) : H.push(a));
          }), b) {
            if (m($) || m(H))
              throw new C();
            return i([v($), "(", v(H), ")"]);
          }
          let R = j.every((ee) => !ee.decorators);
          return Y && R ? [$, "(", ...H, ")"] : q ? [$, "(", ...H, ")"] : (A(V) || w(V) || V.type === "TypeAlias" || V.type === "UnionTypeAnnotation" || V.type === "TSUnionType" || V.type === "IntersectionTypeAnnotation" || V.type === "FunctionTypeAnnotation" && V.returnType === M) && j.length === 1 && j[0].name === null && M.this !== j[0] && j[0].typeAnnotation && M.typeParameters === null && f(j[0].typeAnnotation) && !M.rest ? x.arrowParens === "always" ? ["(", ...H, ")"] : H : [$, "(", o([u, ...H]), c(!S(M) && B(x, "all") ? "," : ""), u, ")"];
        }
        function F(y) {
          if (!y)
            return false;
          let N = d(y);
          if (N.length !== 1)
            return false;
          let [x] = N;
          return !I(x) && (x.type === "ObjectPattern" || x.type === "ArrayPattern" || x.type === "Identifier" && x.typeAnnotation && (x.typeAnnotation.type === "TypeAnnotation" || x.typeAnnotation.type === "TSTypeAnnotation") && T(x.typeAnnotation.typeAnnotation) || x.type === "FunctionTypeParam" && T(x.typeAnnotation) || x.type === "AssignmentPattern" && (x.left.type === "ObjectPattern" || x.left.type === "ArrayPattern") && (x.right.type === "Identifier" || x.right.type === "ObjectExpression" && x.right.properties.length === 0 || x.right.type === "ArrayExpression" && x.right.elements.length === 0));
        }
        function l(y) {
          let N;
          return y.returnType ? (N = y.returnType, N.typeAnnotation && (N = N.typeAnnotation)) : y.typeAnnotation && (N = y.typeAnnotation), N;
        }
        function E(y, N) {
          let x = l(y);
          if (!x)
            return false;
          let b = y.typeParameters && y.typeParameters.params;
          if (b) {
            if (b.length > 1)
              return false;
            if (b.length === 1) {
              let L = b[0];
              if (L.constraint || L.default)
                return false;
            }
          }
          return d(y).length === 1 && (T(x) || m(N));
        }
        n.exports = {printFunctionParameters: g, shouldHugFunctionParameters: F, shouldGroupFunctionParameters: E};
      }}), kr = Z({"src/language-js/print/type-annotation.js"(e, n) {
        re();
        var {printComments: t, printDanglingComments: s} = et(), {isNonEmptyArray: a} = Ue(), {builders: {group: r, join: u, line: i, softline: o, indent: c, align: v, ifBreak: m}} = Oe(), d = jt(), {locStart: p} = st(), {isSimpleType: f, isObjectType: h, hasLeadingOwnLineComment: w, isObjectTypePropertyAFunction: T, shouldPrintComma: A} = Ke(), {printAssignment: S} = Yt(), {printFunctionParameters: B, shouldGroupFunctionParameters: I} = Pr(), {printArrayItems: k} = Kt();
        function P(x) {
          if (f(x) || h(x))
            return true;
          if (x.type === "UnionTypeAnnotation" || x.type === "TSUnionType") {
            let b = x.types.filter((M) => M.type === "VoidTypeAnnotation" || M.type === "TSVoidKeyword" || M.type === "NullLiteralTypeAnnotation" || M.type === "TSNullKeyword").length, L = x.types.some((M) => M.type === "ObjectTypeAnnotation" || M.type === "TSTypeLiteral" || M.type === "GenericTypeAnnotation" || M.type === "TSTypeReference");
            if (x.types.length - 1 === b && L)
              return true;
          }
          return false;
        }
        function C(x, b, L) {
          let M = b.semi ? ";" : "", j = x.getValue(), $ = [];
          return $.push("opaque type ", L("id"), L("typeParameters")), j.supertype && $.push(": ", L("supertype")), j.impltype && $.push(" = ", L("impltype")), $.push(M), $;
        }
        function D(x, b, L) {
          let M = b.semi ? ";" : "", j = x.getValue(), $ = [];
          j.declare && $.push("declare "), $.push("type ", L("id"), L("typeParameters"));
          let V = j.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [S(x, b, L, $, " =", V), M];
        }
        function g(x, b, L) {
          let M = x.getValue(), j = x.map(L, "types"), $ = [], V = false;
          for (let q = 0; q < j.length; ++q)
            q === 0 ? $.push(j[q]) : h(M.types[q - 1]) && h(M.types[q]) ? $.push([" & ", V ? c(j[q]) : j[q]]) : !h(M.types[q - 1]) && !h(M.types[q]) ? $.push(c([" &", i, j[q]])) : (q > 1 && (V = true), $.push(" & ", q > 1 ? c(j[q]) : j[q]));
          return r($);
        }
        function F(x, b, L) {
          let M = x.getValue(), j = x.getParentNode(), $ = j.type !== "TypeParameterInstantiation" && j.type !== "TSTypeParameterInstantiation" && j.type !== "GenericTypeAnnotation" && j.type !== "TSTypeReference" && j.type !== "TSTypeAssertion" && j.type !== "TupleTypeAnnotation" && j.type !== "TSTupleType" && !(j.type === "FunctionTypeParam" && !j.name && x.getParentNode(1).this !== j) && !((j.type === "TypeAlias" || j.type === "VariableDeclarator" || j.type === "TSTypeAliasDeclaration") && w(b.originalText, M)), V = P(M), q = x.map((R) => {
            let Q = L();
            return V || (Q = v(2, Q)), t(R, Q, b);
          }, "types");
          if (V)
            return u(" | ", q);
          let Y = $ && !w(b.originalText, M), H = [m([Y ? i : "", "| "]), u([i, "| "], q)];
          return d(x, b) ? r([c(H), o]) : j.type === "TupleTypeAnnotation" && j.types.length > 1 || j.type === "TSTupleType" && j.elementTypes.length > 1 ? r([c([m(["(", o]), H]), o, m(")")]) : r($ ? c(H) : H);
        }
        function l(x, b, L) {
          let M = x.getValue(), j = [], $ = x.getParentNode(0), V = x.getParentNode(1), q = x.getParentNode(2), Y = M.type === "TSFunctionType" || !(($.type === "ObjectTypeProperty" || $.type === "ObjectTypeInternalSlot") && !$.variance && !$.optional && p($) === p(M) || $.type === "ObjectTypeCallProperty" || q && q.type === "DeclareFunction"), H = Y && ($.type === "TypeAnnotation" || $.type === "TSTypeAnnotation"), R = H && Y && ($.type === "TypeAnnotation" || $.type === "TSTypeAnnotation") && V.type === "ArrowFunctionExpression";
          T($) && (Y = true, H = true), R && j.push("(");
          let Q = B(x, L, b, false, true), ee = M.returnType || M.predicate || M.typeAnnotation ? [Y ? " => " : ": ", L("returnType"), L("predicate"), L("typeAnnotation")] : "", te = I(M, ee);
          return j.push(te ? r(Q) : Q), ee && j.push(ee), R && j.push(")"), r(j);
        }
        function E(x, b, L) {
          let M = x.getValue(), j = M.type === "TSTupleType" ? "elementTypes" : "types", $ = M[j], V = a($), q = V ? o : "";
          return r(["[", c([q, k(x, b, j, L)]), m(V && A(b, "all") ? "," : ""), s(x, b, true), q, "]"]);
        }
        function y(x, b, L) {
          let M = x.getValue(), j = M.type === "OptionalIndexedAccessType" && M.optional ? "?.[" : "[";
          return [L("objectType"), j, L("indexType"), "]"];
        }
        function N(x, b, L) {
          let M = x.getValue();
          return [M.postfix ? "" : L, b("typeAnnotation"), M.postfix ? L : ""];
        }
        n.exports = {printOpaqueType: C, printTypeAlias: D, printIntersectionType: g, printUnionType: F, printFunctionType: l, printTupleType: E, printIndexedAccessType: y, shouldHugType: P, printJSDocType: N};
      }}), Ir = Z({"src/language-js/print/type-parameters.js"(e, n) {
        re();
        var {printDanglingComments: t} = et(), {builders: {join: s, line: a, hardline: r, softline: u, group: i, indent: o, ifBreak: c}} = Oe(), {isTestCall: v, hasComment: m, CommentCheckFlags: d, isTSXFile: p, shouldPrintComma: f, getFunctionParameters: h, isObjectType: w} = Ke(), {createGroupIdMapper: T} = Ue(), {shouldHugType: A} = kr(), {isArrowFunctionVariableDeclarator: S} = Yt(), B = T("typeParameters");
        function I(C, D, g, F) {
          let l = C.getValue();
          if (!l[F])
            return "";
          if (!Array.isArray(l[F]))
            return g(F);
          let E = C.getNode(2), y = E && v(E);
          if (!C.match((L) => !(L[F].length === 1 && w(L[F][0])), void 0, (L, M) => M === "typeAnnotation", (L) => L.type === "Identifier", S) && (y || l[F].length === 0 || l[F].length === 1 && (l[F][0].type === "NullableTypeAnnotation" || A(l[F][0]))))
            return ["<", s(", ", C.map(g, F)), k(C, D), ">"];
          let b = l.type === "TSTypeParameterInstantiation" ? "" : h(l).length === 1 && p(D) && !l[F][0].constraint && C.getParentNode().type === "ArrowFunctionExpression" ? "," : f(D, "all") ? c(",") : "";
          return i(["<", o([u, s([",", a], C.map(g, F))]), b, u, ">"], {id: B(l)});
        }
        function k(C, D) {
          let g = C.getValue();
          if (!m(g, d.Dangling))
            return "";
          let F = !m(g, d.Line), l = t(C, D, F);
          return F ? l : [l, r];
        }
        function P(C, D, g) {
          let F = C.getValue(), l = [], E = C.getParentNode();
          return E.type === "TSMappedType" ? (l.push("[", g("name")), F.constraint && l.push(" in ", g("constraint")), E.nameType && l.push(" as ", C.callParent(() => g("nameType"))), l.push("]"), l) : (F.variance && l.push(g("variance")), F.in && l.push("in "), F.out && l.push("out "), l.push(g("name")), F.bound && l.push(": ", g("bound")), F.constraint && l.push(" extends ", g("constraint")), F.default && l.push(" = ", g("default")), l);
        }
        n.exports = {printTypeParameter: P, printTypeParameters: I, getTypeParametersGroupId: B};
      }}), Qt = Z({"src/language-js/print/property.js"(e, n) {
        re();
        var {printComments: t} = et(), {printString: s, printNumber: a} = Ue(), {isNumericLiteral: r, isSimpleNumber: u, isStringLiteral: i, isStringPropSafeToUnquote: o, rawText: c} = Ke(), {printAssignment: v} = Yt(), m = new WeakMap();
        function d(f, h, w) {
          let T = f.getNode();
          if (T.computed)
            return ["[", w("key"), "]"];
          let A = f.getParentNode(), {key: S} = T;
          if (T.type === "ClassPrivateProperty" && S.type === "Identifier")
            return ["#", w("key")];
          if (h.quoteProps === "consistent" && !m.has(A)) {
            let B = (A.properties || A.body || A.members).some((I) => !I.computed && I.key && i(I.key) && !o(I, h));
            m.set(A, B);
          }
          if ((S.type === "Identifier" || r(S) && u(a(c(S))) && String(S.value) === a(c(S)) && !(h.parser === "typescript" || h.parser === "babel-ts")) && (h.parser === "json" || h.quoteProps === "consistent" && m.get(A))) {
            let B = s(JSON.stringify(S.type === "Identifier" ? S.name : S.value.toString()), h);
            return f.call((I) => t(I, B, h), "key");
          }
          return o(T, h) && (h.quoteProps === "as-needed" || h.quoteProps === "consistent" && !m.get(A)) ? f.call((B) => t(B, /^\d/.test(S.value) ? a(S.value) : S.value, h), "key") : w("key");
        }
        function p(f, h, w) {
          return f.getValue().shorthand ? w("value") : v(f, h, w, d(f, h, w), ":", "value");
        }
        n.exports = {printProperty: p, printPropertyKey: d};
      }}), Lr = Z({"src/language-js/print/function.js"(e, n) {
        re();
        var t = Xt(), {printDanglingComments: s, printCommentsSeparately: a} = et(), r = it(), {getNextNonSpaceNonCommentCharacterIndex: u} = Ue(), {builders: {line: i, softline: o, group: c, indent: v, ifBreak: m, hardline: d, join: p, indentIfBreak: f}, utils: {removeLines: h, willBreak: w}} = Oe(), {ArgExpansionBailout: T} = zt(), {getFunctionParameters: A, hasLeadingOwnLineComment: S, isFlowAnnotationComment: B, isJsxNode: I, isTemplateOnItsOwnLine: k, shouldPrintComma: P, startsWithNoLookaheadToken: C, isBinaryish: D, isLineComment: g, hasComment: F, getComments: l, CommentCheckFlags: E, isCallLikeExpression: y, isCallExpression: N, getCallArguments: x, hasNakedLeftSide: b, getLeftSide: L} = Ke(), {locEnd: M} = st(), {printFunctionParameters: j, shouldGroupFunctionParameters: $} = Pr(), {printPropertyKey: V} = Qt(), {printFunctionTypeParameters: q} = ct();
        function Y(z, U, le, ge) {
          let Ae = z.getValue(), Ne = false;
          if ((Ae.type === "FunctionDeclaration" || Ae.type === "FunctionExpression") && ge && ge.expandLastArg) {
            let ae = z.getParentNode();
            N(ae) && x(ae).length > 1 && (Ne = true);
          }
          let ke = [];
          Ae.type === "TSDeclareFunction" && Ae.declare && ke.push("declare "), Ae.async && ke.push("async "), Ae.generator ? ke.push("function* ") : ke.push("function "), Ae.id && ke.push(U("id"));
          let ce = j(z, U, le, Ne), pe = X(z, U, le), de = $(Ae, pe);
          return ke.push(q(z, le, U), c([de ? c(ce) : ce, pe]), Ae.body ? " " : "", U("body")), le.semi && (Ae.declare || !Ae.body) && ke.push(";"), ke;
        }
        function H(z, U, le) {
          let ge = z.getNode(), {kind: Ae} = ge, Ne = ge.value || ge, ke = [];
          return !Ae || Ae === "init" || Ae === "method" || Ae === "constructor" ? Ne.async && ke.push("async ") : (t.ok(Ae === "get" || Ae === "set"), ke.push(Ae, " ")), Ne.generator && ke.push("*"), ke.push(V(z, U, le), ge.optional || ge.key.optional ? "?" : ""), ge === Ne ? ke.push(R(z, U, le)) : Ne.type === "FunctionExpression" ? ke.push(z.call((ce) => R(ce, U, le), "value")) : ke.push(le("value")), ke;
        }
        function R(z, U, le) {
          let ge = z.getNode(), Ae = j(z, le, U), Ne = X(z, le, U), ke = $(ge, Ne), ce = [q(z, U, le), c([ke ? c(Ae) : Ae, Ne])];
          return ge.body ? ce.push(" ", le("body")) : ce.push(U.semi ? ";" : ""), ce;
        }
        function Q(z, U, le, ge) {
          let Ae = z.getValue(), Ne = [];
          if (Ae.async && Ne.push("async "), W(z, U))
            Ne.push(le(["params", 0]));
          else {
            let ce = ge && (ge.expandLastArg || ge.expandFirstArg), pe = X(z, le, U);
            if (ce) {
              if (w(pe))
                throw new T();
              pe = c(h(pe));
            }
            Ne.push(c([j(z, le, U, ce, true), pe]));
          }
          let ke = s(z, U, true, (ce) => {
            let pe = u(U.originalText, ce, M);
            return pe !== false && U.originalText.slice(pe, pe + 2) === "=>";
          });
          return ke && Ne.push(" ", ke), Ne;
        }
        function ee(z, U, le, ge, Ae, Ne) {
          let ke = z.getName(), ce = z.getParentNode(), pe = y(ce) && ke === "callee", de = Boolean(U && U.assignmentLayout), ae = Ne.body.type !== "BlockStatement" && Ne.body.type !== "ObjectExpression" && Ne.body.type !== "SequenceExpression", ve = pe && ae || U && U.assignmentLayout === "chain-tail-arrow-chain", K = Symbol("arrow-chain");
          return Ne.body.type === "SequenceExpression" && (Ae = c(["(", v([o, Ae]), o, ")"])), c([c(v([pe || de ? o : "", c(p([" =>", i], le), {shouldBreak: ge})]), {id: K, shouldBreak: ve}), " =>", f(ae ? v([i, Ae]) : [" ", Ae], {groupId: K}), pe ? m(o, "", {groupId: K}) : ""]);
        }
        function te(z, U, le, ge) {
          let Ae = z.getValue(), Ne = [], ke = [], ce = false;
          if (function K() {
            let he = Q(z, U, le, ge);
            if (Ne.length === 0)
              Ne.push(he);
            else {
              let {leading: ye, trailing: Ce} = a(z, U);
              Ne.push([ye, he]), ke.unshift(Ce);
            }
            ce = ce || Ae.returnType && A(Ae).length > 0 || Ae.typeParameters || A(Ae).some((ye) => ye.type !== "Identifier"), Ae.body.type !== "ArrowFunctionExpression" || ge && ge.expandLastArg ? ke.unshift(le("body", ge)) : (Ae = Ae.body, z.call(K, "body"));
          }(), Ne.length > 1)
            return ee(z, ge, Ne, ce, ke, Ae);
          let pe = Ne;
          if (pe.push(" =>"), !S(U.originalText, Ae.body) && (Ae.body.type === "ArrayExpression" || Ae.body.type === "ObjectExpression" || Ae.body.type === "BlockStatement" || I(Ae.body) || k(Ae.body, U.originalText) || Ae.body.type === "ArrowFunctionExpression" || Ae.body.type === "DoExpression"))
            return c([...pe, " ", ke]);
          if (Ae.body.type === "SequenceExpression")
            return c([...pe, c([" (", v([o, ke]), o, ")"])]);
          let de = (ge && ge.expandLastArg || z.getParentNode().type === "JSXExpressionContainer") && !F(Ae), ae = ge && ge.expandLastArg && P(U, "all"), ve = Ae.body.type === "ConditionalExpression" && !C(Ae.body, false);
          return c([...pe, c([v([i, ve ? m("", "(") : "", ke, ve ? m("", ")") : ""]), de ? [m(ae ? "," : ""), o] : ""])]);
        }
        function oe(z) {
          let U = A(z);
          return U.length === 1 && !z.typeParameters && !F(z, E.Dangling) && U[0].type === "Identifier" && !U[0].typeAnnotation && !F(U[0]) && !U[0].optional && !z.predicate && !z.returnType;
        }
        function W(z, U) {
          if (U.arrowParens === "always")
            return false;
          if (U.arrowParens === "avoid") {
            let le = z.getValue();
            return oe(le);
          }
          return false;
        }
        function X(z, U, le) {
          let ge = z.getValue(), Ae = U("returnType");
          if (ge.returnType && B(le.originalText, ge.returnType))
            return [" /*: ", Ae, " */"];
          let Ne = [Ae];
          return ge.returnType && ge.returnType.typeAnnotation && Ne.unshift(": "), ge.predicate && Ne.push(ge.returnType ? " " : ": ", U("predicate")), Ne;
        }
        function ue(z, U, le) {
          let ge = z.getValue(), Ae = U.semi ? ";" : "", Ne = [];
          ge.argument && (G(U, ge.argument) ? Ne.push([" (", v([d, le("argument")]), d, ")"]) : D(ge.argument) || ge.argument.type === "SequenceExpression" ? Ne.push(c([m(" (", " "), v([o, le("argument")]), o, m(")")])) : Ne.push(" ", le("argument")));
          let ke = l(ge), ce = r(ke), pe = ce && g(ce);
          return pe && Ne.push(Ae), F(ge, E.Dangling) && Ne.push(" ", s(z, U, true)), pe || Ne.push(Ae), Ne;
        }
        function De(z, U, le) {
          return ["return", ue(z, U, le)];
        }
        function ie(z, U, le) {
          return ["throw", ue(z, U, le)];
        }
        function G(z, U) {
          if (S(z.originalText, U))
            return true;
          if (b(U)) {
            let le = U, ge;
            for (; ge = L(le); )
              if (le = ge, S(z.originalText, le))
                return true;
          }
          return false;
        }
        n.exports = {printFunction: Y, printArrowFunction: te, printMethod: H, printReturnStatement: De, printThrowStatement: ie, printMethodInternal: R, shouldPrintParamsWithoutParens: W};
      }}), Un = Z({"src/language-js/print/decorators.js"(e, n) {
        re();
        var {isNonEmptyArray: t, hasNewline: s} = Ue(), {builders: {line: a, hardline: r, join: u, breakParent: i, group: o}} = Oe(), {locStart: c, locEnd: v} = st(), {getParentExportDeclaration: m} = Ke();
        function d(T, A, S) {
          let B = T.getValue();
          return o([u(a, T.map(S, "decorators")), h(B, A) ? r : a]);
        }
        function p(T, A, S) {
          return [u(r, T.map(S, "declaration", "decorators")), r];
        }
        function f(T, A, S) {
          let B = T.getValue(), {decorators: I} = B;
          if (!t(I) || w(T.getParentNode()))
            return;
          let k = B.type === "ClassExpression" || B.type === "ClassDeclaration" || h(B, A);
          return [m(T) ? r : k ? i : "", u(a, T.map(S, "decorators")), a];
        }
        function h(T, A) {
          return T.decorators.some((S) => s(A.originalText, v(S)));
        }
        function w(T) {
          if (T.type !== "ExportDefaultDeclaration" && T.type !== "ExportNamedDeclaration" && T.type !== "DeclareExportDeclaration")
            return false;
          let A = T.declaration && T.declaration.decorators;
          return t(A) && c(T, {ignoreDecorators: true}) > c(A[0]);
        }
        n.exports = {printDecorators: f, printClassMemberDecorators: d, printDecoratorsBeforeExport: p, hasDecoratorsBeforeExport: w};
      }}), Zt = Z({"src/language-js/print/class.js"(e, n) {
        re();
        var {isNonEmptyArray: t, createGroupIdMapper: s} = Ue(), {printComments: a, printDanglingComments: r} = et(), {builders: {join: u, line: i, hardline: o, softline: c, group: v, indent: m, ifBreak: d}} = Oe(), {hasComment: p, CommentCheckFlags: f} = Ke(), {getTypeParametersGroupId: h} = Ir(), {printMethod: w} = Lr(), {printOptionalToken: T, printTypeAnnotation: A, printDefiniteToken: S} = ct(), {printPropertyKey: B} = Qt(), {printAssignment: I} = Yt(), {printClassMemberDecorators: k} = Un();
        function P(x, b, L) {
          let M = x.getValue(), j = [];
          M.declare && j.push("declare "), M.abstract && j.push("abstract "), j.push("class");
          let $ = M.id && p(M.id, f.Trailing) || M.typeParameters && p(M.typeParameters, f.Trailing) || M.superClass && p(M.superClass) || t(M.extends) || t(M.mixins) || t(M.implements), V = [], q = [];
          if (M.id && V.push(" ", L("id")), V.push(L("typeParameters")), M.superClass) {
            let Y = [E(x, b, L), L("superTypeParameters")], H = x.call((R) => ["extends ", a(R, Y, b)], "superClass");
            $ ? q.push(i, v(H)) : q.push(" ", H);
          } else
            q.push(l(x, b, L, "extends"));
          if (q.push(l(x, b, L, "mixins"), l(x, b, L, "implements")), $) {
            let Y;
            F(M) ? Y = [...V, m(q)] : Y = m([...V, q]), j.push(v(Y, {id: C(M)}));
          } else
            j.push(...V, ...q);
          return j.push(" ", L("body")), j;
        }
        var C = s("heritageGroup");
        function D(x) {
          return d(o, "", {groupId: C(x)});
        }
        function g(x) {
          return ["superClass", "extends", "mixins", "implements"].filter((b) => Boolean(x[b])).length > 1;
        }
        function F(x) {
          return x.typeParameters && !p(x.typeParameters, f.Trailing | f.Line) && !g(x);
        }
        function l(x, b, L, M) {
          let j = x.getValue();
          if (!t(j[M]))
            return "";
          let $ = r(x, b, true, (V) => {
            let {marker: q} = V;
            return q === M;
          });
          return [F(j) ? d(" ", i, {groupId: h(j.typeParameters)}) : i, $, $ && o, M, v(m([i, u([",", i], x.map(L, M))]))];
        }
        function E(x, b, L) {
          let M = L("superClass");
          return x.getParentNode().type === "AssignmentExpression" ? v(d(["(", m([c, M]), c, ")"], M)) : M;
        }
        function y(x, b, L) {
          let M = x.getValue(), j = [];
          return t(M.decorators) && j.push(k(x, b, L)), M.accessibility && j.push(M.accessibility + " "), M.readonly && j.push("readonly "), M.declare && j.push("declare "), M.static && j.push("static "), (M.type === "TSAbstractMethodDefinition" || M.abstract) && j.push("abstract "), M.override && j.push("override "), j.push(w(x, b, L)), j;
        }
        function N(x, b, L) {
          let M = x.getValue(), j = [], $ = b.semi ? ";" : "";
          return t(M.decorators) && j.push(k(x, b, L)), M.accessibility && j.push(M.accessibility + " "), M.declare && j.push("declare "), M.static && j.push("static "), (M.type === "TSAbstractPropertyDefinition" || M.abstract) && j.push("abstract "), M.override && j.push("override "), M.readonly && j.push("readonly "), M.variance && j.push(L("variance")), M.type === "ClassAccessorProperty" && j.push("accessor "), j.push(B(x, b, L), T(x), S(x), A(x, b, L)), [I(x, b, L, j, " =", "value"), $];
        }
        n.exports = {printClass: P, printClassMethod: y, printClassProperty: N, printHardlineAfterHeritage: D};
      }}), lo = Z({"src/language-js/print/interface.js"(e, n) {
        re();
        var {isNonEmptyArray: t} = Ue(), {builders: {join: s, line: a, group: r, indent: u, ifBreak: i}} = Oe(), {hasComment: o, identity: c, CommentCheckFlags: v} = Ke(), {getTypeParametersGroupId: m} = Ir(), {printTypeScriptModifiers: d} = ct();
        function p(f, h, w) {
          let T = f.getValue(), A = [];
          T.declare && A.push("declare "), T.type === "TSInterfaceDeclaration" && A.push(T.abstract ? "abstract " : "", d(f, h, w)), A.push("interface");
          let S = [], B = [];
          T.type !== "InterfaceTypeAnnotation" && S.push(" ", w("id"), w("typeParameters"));
          let I = T.typeParameters && !o(T.typeParameters, v.Trailing | v.Line);
          return t(T.extends) && B.push(I ? i(" ", a, {groupId: m(T.typeParameters)}) : a, "extends ", (T.extends.length === 1 ? c : u)(s([",", a], f.map(w, "extends")))), T.id && o(T.id, v.Trailing) || t(T.extends) ? I ? A.push(r([...S, u(B)])) : A.push(r(u([...S, ...B]))) : A.push(...S, ...B), A.push(" ", w("body")), r(A);
        }
        n.exports = {printInterface: p};
      }}), co = Z({"src/language-js/print/module.js"(e, n) {
        re();
        var {isNonEmptyArray: t} = Ue(), {builders: {softline: s, group: a, indent: r, join: u, line: i, ifBreak: o, hardline: c}} = Oe(), {printDanglingComments: v} = et(), {hasComment: m, CommentCheckFlags: d, shouldPrintComma: p, needsHardlineAfterDanglingComment: f, isStringLiteral: h, rawText: w} = Ke(), {locStart: T, hasSameLoc: A} = st(), {hasDecoratorsBeforeExport: S, printDecoratorsBeforeExport: B} = Un();
        function I(N, x, b) {
          let L = N.getValue(), M = x.semi ? ";" : "", j = [], {importKind: $} = L;
          return j.push("import"), $ && $ !== "value" && j.push(" ", $), j.push(g(N, x, b), D(N, x, b), l(N, x, b), M), j;
        }
        function k(N, x, b) {
          let L = N.getValue(), M = [];
          S(L) && M.push(B(N, x, b));
          let {type: j, exportKind: $, declaration: V} = L;
          return M.push("export"), (L.default || j === "ExportDefaultDeclaration") && M.push(" default"), m(L, d.Dangling) && (M.push(" ", v(N, x, true)), f(L) && M.push(c)), V ? M.push(" ", b("declaration")) : M.push($ === "type" ? " type" : "", g(N, x, b), D(N, x, b), l(N, x, b)), C(L, x) && M.push(";"), M;
        }
        function P(N, x, b) {
          let L = N.getValue(), M = x.semi ? ";" : "", j = [], {exportKind: $, exported: V} = L;
          return j.push("export"), $ === "type" && j.push(" type"), j.push(" *"), V && j.push(" as ", b("exported")), j.push(D(N, x, b), l(N, x, b), M), j;
        }
        function C(N, x) {
          if (!x.semi)
            return false;
          let {type: b, declaration: L} = N, M = N.default || b === "ExportDefaultDeclaration";
          if (!L)
            return true;
          let {type: j} = L;
          return !!(M && j !== "ClassDeclaration" && j !== "FunctionDeclaration" && j !== "TSInterfaceDeclaration" && j !== "DeclareClass" && j !== "DeclareFunction" && j !== "TSDeclareFunction" && j !== "EnumDeclaration");
        }
        function D(N, x, b) {
          let L = N.getValue();
          if (!L.source)
            return "";
          let M = [];
          return F(L, x) || M.push(" from"), M.push(" ", b("source")), M;
        }
        function g(N, x, b) {
          let L = N.getValue();
          if (F(L, x))
            return "";
          let M = [" "];
          if (t(L.specifiers)) {
            let j = [], $ = [];
            N.each(() => {
              let V = N.getValue().type;
              if (V === "ExportNamespaceSpecifier" || V === "ExportDefaultSpecifier" || V === "ImportNamespaceSpecifier" || V === "ImportDefaultSpecifier")
                j.push(b());
              else if (V === "ExportSpecifier" || V === "ImportSpecifier")
                $.push(b());
              else
                throw new Error("Unknown specifier type ".concat(JSON.stringify(V)));
            }, "specifiers"), M.push(u(", ", j)), $.length > 0 && (j.length > 0 && M.push(", "), $.length > 1 || j.length > 0 || L.specifiers.some((q) => m(q)) ? M.push(a(["{", r([x.bracketSpacing ? i : s, u([",", i], $)]), o(p(x) ? "," : ""), x.bracketSpacing ? i : s, "}"])) : M.push(["{", x.bracketSpacing ? " " : "", ...$, x.bracketSpacing ? " " : "", "}"]));
          } else
            M.push("{}");
          return M;
        }
        function F(N, x) {
          let {type: b, importKind: L, source: M, specifiers: j} = N;
          return b !== "ImportDeclaration" || t(j) || L === "type" ? false : !/{\s*}/.test(x.originalText.slice(T(N), T(M)));
        }
        function l(N, x, b) {
          let L = N.getNode();
          return t(L.assertions) ? [" assert {", x.bracketSpacing ? " " : "", u(", ", N.map(b, "assertions")), x.bracketSpacing ? " " : "", "}"] : "";
        }
        function E(N, x, b) {
          let L = N.getNode(), {type: M} = L, j = [], $ = M === "ImportSpecifier" ? L.importKind : L.exportKind;
          $ && $ !== "value" && j.push($, " ");
          let V = M.startsWith("Import"), q = V ? "imported" : "local", Y = V ? "local" : "exported", H = L[q], R = L[Y], Q = "", ee = "";
          return M === "ExportNamespaceSpecifier" || M === "ImportNamespaceSpecifier" ? Q = "*" : H && (Q = b(q)), R && !y(L) && (ee = b(Y)), j.push(Q, Q && ee ? " as " : "", ee), j;
        }
        function y(N) {
          if (N.type !== "ImportSpecifier" && N.type !== "ExportSpecifier")
            return false;
          let {local: x, [N.type === "ImportSpecifier" ? "imported" : "exported"]: b} = N;
          if (x.type !== b.type || !A(x, b))
            return false;
          if (h(x))
            return x.value === b.value && w(x) === w(b);
          switch (x.type) {
            case "Identifier":
              return x.name === b.name;
            default:
              return false;
          }
        }
        n.exports = {printImportDeclaration: I, printExportDeclaration: k, printExportAllDeclaration: P, printModuleSpecifier: E};
      }}), zn = Z({"src/language-js/print/object.js"(e, n) {
        re();
        var {printDanglingComments: t} = et(), {builders: {line: s, softline: a, group: r, indent: u, ifBreak: i, hardline: o}} = Oe(), {getLast: c, hasNewlineInRange: v, hasNewline: m, isNonEmptyArray: d} = Ue(), {shouldPrintComma: p, hasComment: f, getComments: h, CommentCheckFlags: w, isNextLineEmpty: T} = Ke(), {locStart: A, locEnd: S} = st(), {printOptionalToken: B, printTypeAnnotation: I} = ct(), {shouldHugFunctionParameters: k} = Pr(), {shouldHugType: P} = kr(), {printHardlineAfterHeritage: C} = Zt();
        function D(g, F, l) {
          let E = F.semi ? ";" : "", y = g.getValue(), N;
          y.type === "TSTypeLiteral" ? N = "members" : y.type === "TSInterfaceBody" ? N = "body" : N = "properties";
          let x = y.type === "ObjectTypeAnnotation", b = [N];
          x && b.push("indexers", "callProperties", "internalSlots");
          let L = b.map((W) => y[W][0]).sort((W, X) => A(W) - A(X))[0], M = g.getParentNode(0), j = x && M && (M.type === "InterfaceDeclaration" || M.type === "DeclareInterface" || M.type === "DeclareClass") && g.getName() === "body", $ = y.type === "TSInterfaceBody" || j || y.type === "ObjectPattern" && M.type !== "FunctionDeclaration" && M.type !== "FunctionExpression" && M.type !== "ArrowFunctionExpression" && M.type !== "ObjectMethod" && M.type !== "ClassMethod" && M.type !== "ClassPrivateMethod" && M.type !== "AssignmentPattern" && M.type !== "CatchClause" && y.properties.some((W) => W.value && (W.value.type === "ObjectPattern" || W.value.type === "ArrayPattern")) || y.type !== "ObjectPattern" && L && v(F.originalText, A(y), A(L)), V = j ? ";" : y.type === "TSInterfaceBody" || y.type === "TSTypeLiteral" ? i(E, ";") : ",", q = y.type === "RecordExpression" ? "#{" : y.exact ? "{|" : "{", Y = y.exact ? "|}" : "}", H = [];
          for (let W of b)
            g.each((X) => {
              let ue = X.getValue();
              H.push({node: ue, printed: l(), loc: A(ue)});
            }, W);
          b.length > 1 && H.sort((W, X) => W.loc - X.loc);
          let R = [], Q = H.map((W) => {
            let X = [...R, r(W.printed)];
            return R = [V, s], (W.node.type === "TSPropertySignature" || W.node.type === "TSMethodSignature" || W.node.type === "TSConstructSignatureDeclaration") && f(W.node, w.PrettierIgnore) && R.shift(), T(W.node, F) && R.push(o), X;
          });
          if (y.inexact) {
            let W;
            if (f(y, w.Dangling)) {
              let X = f(y, w.Line);
              W = [t(g, F, true), X || m(F.originalText, S(c(h(y)))) ? o : s, "..."];
            } else
              W = ["..."];
            Q.push([...R, ...W]);
          }
          let ee = c(y[N]), te = !(y.inexact || ee && ee.type === "RestElement" || ee && (ee.type === "TSPropertySignature" || ee.type === "TSCallSignatureDeclaration" || ee.type === "TSMethodSignature" || ee.type === "TSConstructSignatureDeclaration") && f(ee, w.PrettierIgnore)), oe;
          if (Q.length === 0) {
            if (!f(y, w.Dangling))
              return [q, Y, I(g, F, l)];
            oe = r([q, t(g, F), a, Y, B(g), I(g, F, l)]);
          } else
            oe = [j && d(y.properties) ? C(M) : "", q, u([F.bracketSpacing ? s : a, ...Q]), i(te && (V !== "," || p(F)) ? V : ""), F.bracketSpacing ? s : a, Y, B(g), I(g, F, l)];
          return g.match((W) => W.type === "ObjectPattern" && !W.decorators, (W, X, ue) => k(W) && (X === "params" || X === "parameters" || X === "this" || X === "rest") && ue === 0) || g.match(P, (W, X) => X === "typeAnnotation", (W, X) => X === "typeAnnotation", (W, X, ue) => k(W) && (X === "params" || X === "parameters" || X === "this" || X === "rest") && ue === 0) || !$ && g.match((W) => W.type === "ObjectPattern", (W) => W.type === "AssignmentExpression" || W.type === "VariableDeclarator") ? oe : r(oe, {shouldBreak: $});
        }
        n.exports = {printObject: D};
      }}), Um = Z({"src/language-js/print/flow.js"(e, n) {
        re();
        var t = Xt(), {printDanglingComments: s} = et(), {printString: a, printNumber: r} = Ue(), {builders: {hardline: u, softline: i, group: o, indent: c}} = Oe(), {getParentExportDeclaration: v, isFunctionNotation: m, isGetterOrSetter: d, rawText: p, shouldPrintComma: f} = Ke(), {locStart: h, locEnd: w} = st(), {printClass: T} = Zt(), {printOpaqueType: A, printTypeAlias: S, printIntersectionType: B, printUnionType: I, printFunctionType: k, printTupleType: P, printIndexedAccessType: C} = kr(), {printInterface: D} = lo(), {printTypeParameter: g, printTypeParameters: F} = Ir(), {printExportDeclaration: l, printExportAllDeclaration: E} = co(), {printArrayItems: y} = Kt(), {printObject: N} = zn(), {printPropertyKey: x} = Qt(), {printOptionalToken: b, printTypeAnnotation: L, printRestSpread: M} = ct();
        function j(V, q, Y) {
          let H = V.getValue(), R = q.semi ? ";" : "", Q = [];
          switch (H.type) {
            case "DeclareClass":
              return $(V, T(V, q, Y));
            case "DeclareFunction":
              return $(V, ["function ", Y("id"), H.predicate ? " " : "", Y("predicate"), R]);
            case "DeclareModule":
              return $(V, ["module ", Y("id"), " ", Y("body")]);
            case "DeclareModuleExports":
              return $(V, ["module.exports", ": ", Y("typeAnnotation"), R]);
            case "DeclareVariable":
              return $(V, ["var ", Y("id"), R]);
            case "DeclareOpaqueType":
              return $(V, A(V, q, Y));
            case "DeclareInterface":
              return $(V, D(V, q, Y));
            case "DeclareTypeAlias":
              return $(V, S(V, q, Y));
            case "DeclareExportDeclaration":
              return $(V, l(V, q, Y));
            case "DeclareExportAllDeclaration":
              return $(V, E(V, q, Y));
            case "OpaqueType":
              return A(V, q, Y);
            case "TypeAlias":
              return S(V, q, Y);
            case "IntersectionTypeAnnotation":
              return B(V, q, Y);
            case "UnionTypeAnnotation":
              return I(V, q, Y);
            case "FunctionTypeAnnotation":
              return k(V, q, Y);
            case "TupleTypeAnnotation":
              return P(V, q, Y);
            case "GenericTypeAnnotation":
              return [Y("id"), F(V, q, Y, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return C(V, q, Y);
            case "TypeAnnotation":
              return Y("typeAnnotation");
            case "TypeParameter":
              return g(V, q, Y);
            case "TypeofTypeAnnotation":
              return ["typeof ", Y("argument")];
            case "ExistsTypeAnnotation":
              return "*";
            case "EmptyTypeAnnotation":
              return "empty";
            case "MixedTypeAnnotation":
              return "mixed";
            case "ArrayTypeAnnotation":
              return [Y("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation":
              return String(H.value);
            case "EnumDeclaration":
              return ["enum ", Y("id"), " ", Y("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody": {
              if (H.type === "EnumSymbolBody" || H.explicitType) {
                let ee = null;
                switch (H.type) {
                  case "EnumBooleanBody":
                    ee = "boolean";
                    break;
                  case "EnumNumberBody":
                    ee = "number";
                    break;
                  case "EnumStringBody":
                    ee = "string";
                    break;
                  case "EnumSymbolBody":
                    ee = "symbol";
                    break;
                }
                Q.push("of ", ee, " ");
              }
              if (H.members.length === 0 && !H.hasUnknownMembers)
                Q.push(o(["{", s(V, q), i, "}"]));
              else {
                let ee = H.members.length > 0 ? [u, y(V, q, "members", Y), H.hasUnknownMembers || f(q) ? "," : ""] : [];
                Q.push(o(["{", c([...ee, ...H.hasUnknownMembers ? [u, "..."] : []]), s(V, q, true), u, "}"]));
              }
              return Q;
            }
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [Y("id"), " = ", typeof H.init == "object" ? Y("init") : String(H.init)];
            case "EnumDefaultedMember":
              return Y("id");
            case "FunctionTypeParam": {
              let ee = H.name ? Y("name") : V.getParentNode().this === H ? "this" : "";
              return [ee, b(V), ee ? ": " : "", Y("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return D(V, q, Y);
            case "ClassImplements":
            case "InterfaceExtends":
              return [Y("id"), Y("typeParameters")];
            case "NullableTypeAnnotation":
              return ["?", Y("typeAnnotation")];
            case "Variance": {
              let {kind: ee} = H;
              return t.ok(ee === "plus" || ee === "minus"), ee === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty":
              return H.static && Q.push("static "), Q.push(Y("value")), Q;
            case "ObjectTypeIndexer":
              return [H.static ? "static " : "", H.variance ? Y("variance") : "", "[", Y("id"), H.id ? ": " : "", Y("key"), "]: ", Y("value")];
            case "ObjectTypeProperty": {
              let ee = "";
              return H.proto ? ee = "proto " : H.static && (ee = "static "), [ee, d(H) ? H.kind + " " : "", H.variance ? Y("variance") : "", x(V, q, Y), b(V), m(H) ? "" : ": ", Y("value")];
            }
            case "ObjectTypeAnnotation":
              return N(V, q, Y);
            case "ObjectTypeInternalSlot":
              return [H.static ? "static " : "", "[[", Y("id"), "]]", b(V), H.method ? "" : ": ", Y("value")];
            case "ObjectTypeSpreadProperty":
              return M(V, q, Y);
            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier":
              return [Y("qualification"), ".", Y("id")];
            case "StringLiteralTypeAnnotation":
              return a(p(H), q);
            case "NumberLiteralTypeAnnotation":
              t.strictEqual(typeof H.value, "number");
            case "BigIntLiteralTypeAnnotation":
              return H.extra ? r(H.extra.raw) : r(H.raw);
            case "TypeCastExpression":
              return ["(", Y("expression"), L(V, q, Y), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
              let ee = F(V, q, Y, "params");
              if (q.parser === "flow") {
                let te = h(H), oe = w(H), W = q.originalText.lastIndexOf("/*", te), X = q.originalText.indexOf("*/", oe);
                if (W !== -1 && X !== -1) {
                  let ue = q.originalText.slice(W + 2, X).trim();
                  if (ue.startsWith("::") && !ue.includes("/*") && !ue.includes("*/"))
                    return ["/*:: ", ee, " */"];
                }
              }
              return ee;
            }
            case "InferredPredicate":
              return "%checks";
            case "DeclaredPredicate":
              return ["%checks(", Y("value"), ")"];
            case "AnyTypeAnnotation":
              return "any";
            case "BooleanTypeAnnotation":
              return "boolean";
            case "BigIntTypeAnnotation":
              return "bigint";
            case "NullLiteralTypeAnnotation":
              return "null";
            case "NumberTypeAnnotation":
              return "number";
            case "SymbolTypeAnnotation":
              return "symbol";
            case "StringTypeAnnotation":
              return "string";
            case "VoidTypeAnnotation":
              return "void";
            case "ThisTypeAnnotation":
              return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify(H.type));
          }
        }
        function $(V, q) {
          let Y = v(V);
          return Y ? (t.strictEqual(Y.type, "DeclareExportDeclaration"), q) : ["declare ", q];
        }
        n.exports = {printFlow: j};
      }}), zm = Z({"src/language-js/utils/is-ts-keyword-type.js"(e, n) {
        re();
        function t(s) {
          let {type: a} = s;
          return a.startsWith("TS") && a.endsWith("Keyword");
        }
        n.exports = t;
      }}), po = Z({"src/language-js/print/ternary.js"(e, n) {
        re();
        var {hasNewlineInRange: t} = Ue(), {isJsxNode: s, getComments: a, isCallExpression: r, isMemberExpression: u} = Ke(), {locStart: i, locEnd: o} = st(), c = It(), {builders: {line: v, softline: m, group: d, indent: p, align: f, ifBreak: h, dedent: w, breakParent: T}} = Oe();
        function A(P) {
          let C = [P];
          for (let D = 0; D < C.length; D++) {
            let g = C[D];
            for (let F of ["test", "consequent", "alternate"]) {
              let l = g[F];
              if (s(l))
                return true;
              l.type === "ConditionalExpression" && C.push(l);
            }
          }
          return false;
        }
        function S(P, C, D) {
          let g = P.getValue(), F = g.type === "ConditionalExpression", l = F ? "alternate" : "falseType", E = P.getParentNode(), y = F ? D("test") : [D("checkType"), " ", "extends", " ", D("extendsType")];
          return E.type === g.type && E[l] === g ? f(2, y) : y;
        }
        var B = new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        function I(P) {
          let C = P.getValue();
          if (C.type !== "ConditionalExpression")
            return false;
          let D, g = C;
          for (let F = 0; !D; F++) {
            let l = P.getParentNode(F);
            if (r(l) && l.callee === g || u(l) && l.object === g || l.type === "TSNonNullExpression" && l.expression === g) {
              g = l;
              continue;
            }
            l.type === "NewExpression" && l.callee === g || l.type === "TSAsExpression" && l.expression === g ? (D = P.getParentNode(F + 1), g = l) : D = l;
          }
          return g === C ? false : D[B.get(D.type)] === g;
        }
        function k(P, C, D) {
          let g = P.getValue(), F = g.type === "ConditionalExpression", l = F ? "consequent" : "trueType", E = F ? "alternate" : "falseType", y = F ? ["test"] : ["checkType", "extendsType"], N = g[l], x = g[E], b = [], L = false, M = P.getParentNode(), j = M.type === g.type && y.some((ue) => M[ue] === g), $ = M.type === g.type && !j, V, q, Y = 0;
          do
            q = V || g, V = P.getParentNode(Y), Y++;
          while (V && V.type === g.type && y.every((ue) => V[ue] !== q));
          let H = V || M, R = q;
          if (F && (s(g[y[0]]) || s(N) || s(x) || A(R))) {
            L = true, $ = true;
            let ue = (ie) => [h("("), p([m, ie]), m, h(")")], De = (ie) => ie.type === "NullLiteral" || ie.type === "Literal" && ie.value === null || ie.type === "Identifier" && ie.name === "undefined";
            b.push(" ? ", De(N) ? D(l) : ue(D(l)), " : ", x.type === g.type || De(x) ? D(E) : ue(D(E)));
          } else {
            let ue = [v, "? ", N.type === g.type ? h("", "(") : "", f(2, D(l)), N.type === g.type ? h("", ")") : "", v, ": ", x.type === g.type ? D(E) : f(2, D(E))];
            b.push(M.type !== g.type || M[E] === g || j ? ue : C.useTabs ? w(p(ue)) : f(Math.max(0, C.tabWidth - 2), ue));
          }
          let ee = [...y.map((ue) => a(g[ue])), a(N), a(x)].flat().some((ue) => c(ue) && t(C.originalText, i(ue), o(ue))), te = (ue) => M === H ? d(ue, {shouldBreak: ee}) : ee ? [ue, T] : ue, oe = !L && (u(M) || M.type === "NGPipeExpression" && M.left === g) && !M.computed, W = I(P), X = te([S(P, C, D), $ ? b : p(b), F && oe && !W ? m : ""]);
          return j || W ? d([p([m, X]), m]) : X;
        }
        n.exports = {printTernary: k};
      }}), fo = Z({"src/language-js/print/statement.js"(e, n) {
        re();
        var {builders: {hardline: t}} = Oe(), s = jt(), {getLeftSidePathName: a, hasNakedLeftSide: r, isJsxNode: u, isTheOnlyJsxElementInMarkdown: i, hasComment: o, CommentCheckFlags: c, isNextLineEmpty: v} = Ke(), {shouldPrintParamsWithoutParens: m} = Lr();
        function d(B, I, k, P) {
          let C = B.getValue(), D = [], g = C.type === "ClassBody", F = p(C[P]);
          return B.each((l, E, y) => {
            let N = l.getValue();
            if (N.type === "EmptyStatement")
              return;
            let x = k();
            !I.semi && !g && !i(I, l) && f(l, I) ? o(N, c.Leading) ? D.push(k([], {needsSemi: true})) : D.push(";", x) : D.push(x), !I.semi && g && A(N) && S(N, y[E + 1]) && D.push(";"), N !== F && (D.push(t), v(N, I) && D.push(t));
          }, P), D;
        }
        function p(B) {
          for (let I = B.length - 1; I >= 0; I--) {
            let k = B[I];
            if (k.type !== "EmptyStatement")
              return k;
          }
        }
        function f(B, I) {
          return B.getNode().type !== "ExpressionStatement" ? false : B.call((P) => h(P, I), "expression");
        }
        function h(B, I) {
          let k = B.getValue();
          switch (k.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return true;
            case "ArrowFunctionExpression": {
              if (!m(B, I))
                return true;
              break;
            }
            case "UnaryExpression": {
              let {prefix: P, operator: C} = k;
              if (P && (C === "+" || C === "-"))
                return true;
              break;
            }
            case "BindExpression": {
              if (!k.object)
                return true;
              break;
            }
            case "Literal": {
              if (k.regex)
                return true;
              break;
            }
            default:
              if (u(k))
                return true;
          }
          return s(B, I) ? true : r(k) ? B.call((P) => h(P, I), ...a(B, k)) : false;
        }
        function w(B, I, k) {
          return d(B, I, k, "body");
        }
        function T(B, I, k) {
          return d(B, I, k, "consequent");
        }
        var A = (B) => {
          let {type: I} = B;
          return I === "ClassProperty" || I === "PropertyDefinition" || I === "ClassPrivateProperty" || I === "ClassAccessorProperty";
        };
        function S(B, I) {
          let k = B.key && B.key.name;
          if ((k === "static" || k === "get" || k === "set") && !B.value && !B.typeAnnotation)
            return true;
          if (!I || I.static || I.accessibility)
            return false;
          if (!I.computed) {
            let P = I.key && I.key.name;
            if (P === "in" || P === "instanceof")
              return true;
          }
          if (A(I) && I.variance && !I.static && !I.declare)
            return true;
          switch (I.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition":
              return I.computed;
            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod": {
              if ((I.value ? I.value.async : I.async) || I.kind === "get" || I.kind === "set")
                return false;
              let C = I.value ? I.value.generator : I.generator;
              return !!(I.computed || C);
            }
            case "TSIndexSignature":
              return true;
          }
          return false;
        }
        n.exports = {printBody: w, printSwitchCaseConsequent: T};
      }}), Do = Z({"src/language-js/print/block.js"(e, n) {
        re();
        var {printDanglingComments: t} = et(), {isNonEmptyArray: s} = Ue(), {builders: {hardline: a, indent: r}} = Oe(), {hasComment: u, CommentCheckFlags: i, isNextLineEmpty: o} = Ke(), {printHardlineAfterHeritage: c} = Zt(), {printBody: v} = fo();
        function m(p, f, h) {
          let w = p.getValue(), T = [];
          if (w.type === "StaticBlock" && T.push("static "), w.type === "ClassBody" && s(w.body)) {
            let S = p.getParentNode();
            T.push(c(S));
          }
          T.push("{");
          let A = d(p, f, h);
          if (A)
            T.push(r([a, A]), a);
          else {
            let S = p.getParentNode(), B = p.getParentNode(1);
            S.type === "ArrowFunctionExpression" || S.type === "FunctionExpression" || S.type === "FunctionDeclaration" || S.type === "ObjectMethod" || S.type === "ClassMethod" || S.type === "ClassPrivateMethod" || S.type === "ForStatement" || S.type === "WhileStatement" || S.type === "DoWhileStatement" || S.type === "DoExpression" || S.type === "CatchClause" && !B.finalizer || S.type === "TSModuleDeclaration" || S.type === "TSDeclareFunction" || w.type === "StaticBlock" || w.type === "ClassBody" || T.push(a);
          }
          return T.push("}"), T;
        }
        function d(p, f, h) {
          let w = p.getValue(), T = s(w.directives), A = w.body.some((I) => I.type !== "EmptyStatement"), S = u(w, i.Dangling);
          if (!T && !A && !S)
            return "";
          let B = [];
          if (T && p.each((I, k, P) => {
            B.push(h()), (k < P.length - 1 || A || S) && (B.push(a), o(I.getValue(), f) && B.push(a));
          }, "directives"), A && B.push(v(p, f, h)), S && B.push(t(p, f, true)), w.type === "Program") {
            let I = p.getParentNode();
            (!I || I.type !== "ModuleExpression") && B.push(a);
          }
          return B;
        }
        n.exports = {printBlock: m, printBlockBody: d};
      }}), Xm = Z({"src/language-js/print/typescript.js"(e, n) {
        re();
        var {printDanglingComments: t} = et(), {hasNewlineInRange: s} = Ue(), {builders: {join: a, line: r, hardline: u, softline: i, group: o, indent: c, conditionalGroup: v, ifBreak: m}} = Oe(), {isLiteral: d, getTypeScriptMappedTypeModifier: p, shouldPrintComma: f, isCallExpression: h, isMemberExpression: w} = Ke(), T = zm(), {locStart: A, locEnd: S} = st(), {printOptionalToken: B, printTypeScriptModifiers: I} = ct(), {printTernary: k} = po(), {printFunctionParameters: P, shouldGroupFunctionParameters: C} = Pr(), {printTemplateLiteral: D} = Lt(), {printArrayItems: g} = Kt(), {printObject: F} = zn(), {printClassProperty: l, printClassMethod: E} = Zt(), {printTypeParameter: y, printTypeParameters: N} = Ir(), {printPropertyKey: x} = Qt(), {printFunction: b, printMethodInternal: L} = Lr(), {printInterface: M} = lo(), {printBlock: j} = Do(), {printTypeAlias: $, printIntersectionType: V, printUnionType: q, printFunctionType: Y, printTupleType: H, printIndexedAccessType: R, printJSDocType: Q} = kr();
        function ee(te, oe, W) {
          let X = te.getValue();
          if (!X.type.startsWith("TS"))
            return;
          if (T(X))
            return X.type.slice(2, -7).toLowerCase();
          let ue = oe.semi ? ";" : "", De = [];
          switch (X.type) {
            case "TSThisType":
              return "this";
            case "TSTypeAssertion": {
              let ie = !(X.expression.type === "ArrayExpression" || X.expression.type === "ObjectExpression"), G = o(["<", c([i, W("typeAnnotation")]), i, ">"]), z = [m("("), c([i, W("expression")]), i, m(")")];
              return ie ? v([[G, W("expression")], [G, o(z, {shouldBreak: true})], [G, W("expression")]]) : o([G, W("expression")]);
            }
            case "TSDeclareFunction":
              return b(te, W, oe);
            case "TSExportAssignment":
              return ["export = ", W("expression"), ue];
            case "TSModuleBlock":
              return j(te, oe, W);
            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return F(te, oe, W);
            case "TSTypeAliasDeclaration":
              return $(te, oe, W);
            case "TSQualifiedName":
              return a(".", [W("left"), W("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return E(te, oe, W);
            case "TSAbstractPropertyDefinition":
              return l(te, oe, W);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return De.push(W("expression")), X.typeParameters && De.push(W("typeParameters")), De;
            case "TSTemplateLiteralType":
              return D(te, W, oe);
            case "TSNamedTupleMember":
              return [W("label"), X.optional ? "?" : "", ": ", W("elementType")];
            case "TSRestType":
              return ["...", W("typeAnnotation")];
            case "TSOptionalType":
              return [W("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration":
              return M(te, oe, W);
            case "TSClassImplements":
              return [W("expression"), W("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return N(te, oe, W, "params");
            case "TSTypeParameter":
              return y(te, oe, W);
            case "TSAsExpression": {
              De.push(W("expression"), " as ", W("typeAnnotation"));
              let ie = te.getParentNode();
              return h(ie) && ie.callee === X || w(ie) && ie.object === X ? o([c([i, ...De]), i]) : De;
            }
            case "TSArrayType":
              return [W("elementType"), "[]"];
            case "TSPropertySignature":
              return X.readonly && De.push("readonly "), De.push(x(te, oe, W), B(te)), X.typeAnnotation && De.push(": ", W("typeAnnotation")), X.initializer && De.push(" = ", W("initializer")), De;
            case "TSParameterProperty":
              return X.accessibility && De.push(X.accessibility + " "), X.export && De.push("export "), X.static && De.push("static "), X.override && De.push("override "), X.readonly && De.push("readonly "), De.push(W("parameter")), De;
            case "TSTypeQuery":
              return ["typeof ", W("exprName"), W("typeParameters")];
            case "TSIndexSignature": {
              let ie = te.getParentNode(), G = X.parameters.length > 1 ? m(f(oe) ? "," : "") : "", z = o([c([i, a([", ", i], te.map(W, "parameters"))]), G, i]);
              return [X.export ? "export " : "", X.accessibility ? [X.accessibility, " "] : "", X.static ? "static " : "", X.readonly ? "readonly " : "", X.declare ? "declare " : "", "[", X.parameters ? z : "", X.typeAnnotation ? "]: " : "]", X.typeAnnotation ? W("typeAnnotation") : "", ie.type === "ClassBody" ? ue : ""];
            }
            case "TSTypePredicate":
              return [X.asserts ? "asserts " : "", W("parameterName"), X.typeAnnotation ? [" is ", W("typeAnnotation")] : ""];
            case "TSNonNullExpression":
              return [W("expression"), "!"];
            case "TSImportType":
              return [X.isTypeOf ? "typeof " : "", "import(", W(X.parameter ? "parameter" : "argument"), ")", X.qualifier ? [".", W("qualifier")] : "", N(te, oe, W, "typeParameters")];
            case "TSLiteralType":
              return W("literal");
            case "TSIndexedAccessType":
              return R(te, oe, W);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType": {
              if (X.type === "TSConstructorType" && X.abstract && De.push("abstract "), X.type !== "TSCallSignatureDeclaration" && De.push("new "), De.push(o(P(te, W, oe, false, true))), X.returnType || X.typeAnnotation) {
                let ie = X.type === "TSConstructorType";
                De.push(ie ? " => " : ": ", W("returnType"), W("typeAnnotation"));
              }
              return De;
            }
            case "TSTypeOperator":
              return [X.operator, " ", W("typeAnnotation")];
            case "TSMappedType": {
              let ie = s(oe.originalText, A(X), S(X));
              return o(["{", c([oe.bracketSpacing ? r : i, X.readonly ? [p(X.readonly, "readonly"), " "] : "", I(te, oe, W), W("typeParameter"), X.optional ? p(X.optional, "?") : "", X.typeAnnotation ? ": " : "", W("typeAnnotation"), m(ue)]), t(te, oe, true), oe.bracketSpacing ? r : i, "}"], {shouldBreak: ie});
            }
            case "TSMethodSignature": {
              let ie = X.kind && X.kind !== "method" ? "".concat(X.kind, " ") : "";
              De.push(X.accessibility ? [X.accessibility, " "] : "", ie, X.export ? "export " : "", X.static ? "static " : "", X.readonly ? "readonly " : "", X.abstract ? "abstract " : "", X.declare ? "declare " : "", X.computed ? "[" : "", W("key"), X.computed ? "]" : "", B(te));
              let G = P(te, W, oe, false, true), z = X.returnType ? "returnType" : "typeAnnotation", U = X[z], le = U ? W(z) : "", ge = C(X, le);
              return De.push(ge ? o(G) : G), U && De.push(": ", o(le)), o(De);
            }
            case "TSNamespaceExportDeclaration":
              return De.push("export as namespace ", W("id")), oe.semi && De.push(";"), o(De);
            case "TSEnumDeclaration":
              return X.declare && De.push("declare "), X.modifiers && De.push(I(te, oe, W)), X.const && De.push("const "), De.push("enum ", W("id"), " "), X.members.length === 0 ? De.push(o(["{", t(te, oe), i, "}"])) : De.push(o(["{", c([u, g(te, oe, "members", W), f(oe, "es5") ? "," : ""]), t(te, oe, true), u, "}"])), De;
            case "TSEnumMember":
              return X.computed ? De.push("[", W("id"), "]") : De.push(W("id")), X.initializer && De.push(" = ", W("initializer")), De;
            case "TSImportEqualsDeclaration":
              return X.isExport && De.push("export "), De.push("import "), X.importKind && X.importKind !== "value" && De.push(X.importKind, " "), De.push(W("id"), " = ", W("moduleReference")), oe.semi && De.push(";"), o(De);
            case "TSExternalModuleReference":
              return ["require(", W("expression"), ")"];
            case "TSModuleDeclaration": {
              let ie = te.getParentNode(), G = d(X.id), z = ie.type === "TSModuleDeclaration", U = X.body && X.body.type === "TSModuleDeclaration";
              if (z)
                De.push(".");
              else {
                X.declare && De.push("declare "), De.push(I(te, oe, W));
                let le = oe.originalText.slice(A(X), A(X.id));
                X.id.type === "Identifier" && X.id.name === "global" && !/namespace|module/.test(le) || De.push(G || /(?:^|\s)module(?:\s|$)/.test(le) ? "module " : "namespace ");
              }
              return De.push(W("id")), U ? De.push(W("body")) : X.body ? De.push(" ", o(W("body"))) : De.push(ue), De;
            }
            case "TSConditionalType":
              return k(te, oe, W);
            case "TSInferType":
              return ["infer", " ", W("typeParameter")];
            case "TSIntersectionType":
              return V(te, oe, W);
            case "TSUnionType":
              return q(te, oe, W);
            case "TSFunctionType":
              return Y(te, oe, W);
            case "TSTupleType":
              return H(te, oe, W);
            case "TSTypeReference":
              return [W("typeName"), N(te, oe, W, "typeParameters")];
            case "TSTypeAnnotation":
              return W("typeAnnotation");
            case "TSEmptyBodyFunctionExpression":
              return L(te, oe, W);
            case "TSJSDocAllType":
              return "*";
            case "TSJSDocUnknownType":
              return "?";
            case "TSJSDocNullableType":
              return Q(te, W, "?");
            case "TSJSDocNonNullableType":
              return Q(te, W, "!");
            case "TSInstantiationExpression":
              return [W("expression"), W("typeParameters")];
            default:
              throw new Error("Unknown TypeScript node type: ".concat(JSON.stringify(X.type), "."));
          }
        }
        n.exports = {printTypescript: ee};
      }}), Km = Z({"src/language-js/print/comment.js"(e, n) {
        re();
        var {hasNewline: t} = Ue(), {builders: {join: s, hardline: a}, utils: {replaceTextEndOfLine: r}} = Oe(), {isLineComment: u} = Ke(), {locStart: i, locEnd: o} = st(), c = It();
        function v(p, f) {
          let h = p.getValue();
          if (u(h))
            return f.originalText.slice(i(h), o(h)).trimEnd();
          if (c(h)) {
            if (m(h)) {
              let A = d(h);
              return h.trailing && !t(f.originalText, i(h), {backwards: true}) ? [a, A] : A;
            }
            let w = o(h), T = f.originalText.slice(w - 3, w) === "*-/";
            return ["/*", r(h.value), T ? "*-/" : "*/"];
          }
          throw new Error("Not a comment: " + JSON.stringify(h));
        }
        function m(p) {
          let f = "*".concat(p.value, "*").split(`
`);
          return f.length > 1 && f.every((h) => h.trim()[0] === "*");
        }
        function d(p) {
          let f = p.value.split(`
`);
          return ["/*", s(a, f.map((h, w) => w === 0 ? h.trimEnd() : " " + (w < f.length - 1 ? h.trim() : h.trimStart()))), "*/"];
        }
        n.exports = {printComment: v};
      }}), Ym = Z({"src/language-js/print/literal.js"(e, n) {
        re();
        var {printString: t, printNumber: s} = Ue();
        function a(i, o) {
          let c = i.getNode();
          switch (c.type) {
            case "RegExpLiteral":
              return u(c);
            case "BigIntLiteral":
              return r(c.bigint || c.extra.raw);
            case "NumericLiteral":
              return s(c.extra.raw);
            case "StringLiteral":
              return t(c.extra.raw, o);
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return String(c.value);
            case "DecimalLiteral":
              return s(c.value) + "m";
            case "Literal": {
              if (c.regex)
                return u(c.regex);
              if (c.bigint)
                return r(c.raw);
              if (c.decimal)
                return s(c.decimal) + "m";
              let {value: v} = c;
              return typeof v == "number" ? s(c.raw) : typeof v == "string" ? t(c.raw, o) : String(v);
            }
          }
        }
        function r(i) {
          return i.toLowerCase();
        }
        function u(i) {
          let {pattern: o, flags: c} = i;
          return c = [...c].sort().join(""), "/".concat(o, "/").concat(c);
        }
        n.exports = {printLiteral: a};
      }}), Qm = Z({"src/language-js/printer-estree.js"(e, n) {
        re();
        var {printDanglingComments: t} = et(), {hasNewline: s} = Ue(), {builders: {join: a, line: r, hardline: u, softline: i, group: o, indent: c}, utils: {replaceTextEndOfLine: v}} = Oe(), m = Im(), d = Lm(), {insertPragma: p} = no(), f = uo(), h = jt(), w = so(), {hasFlowShorthandAnnotationComment: T, hasComment: A, CommentCheckFlags: S, isTheOnlyJsxElementInMarkdown: B, isLineComment: I, isNextLineEmpty: k, needsHardlineAfterDanglingComment: P, rawText: C, hasIgnoreComment: D, isCallExpression: g, isMemberExpression: F, markerForIfWithoutBlockAndSameLineComment: l} = Ke(), {locStart: E, locEnd: y} = st(), N = It(), {printHtmlBinding: x, isVueEventBindingExpression: b} = $m(), {printAngular: L} = Hm(), {printJsx: M, hasJsxIgnoreComment: j} = Gm(), {printFlow: $} = Um(), {printTypescript: V} = Xm(), {printOptionalToken: q, printBindExpressionCallee: Y, printTypeAnnotation: H, adjustClause: R, printRestSpread: Q, printDefiniteToken: ee} = ct(), {printImportDeclaration: te, printExportDeclaration: oe, printExportAllDeclaration: W, printModuleSpecifier: X} = co(), {printTernary: ue} = po(), {printTemplateLiteral: De} = Lt(), {printArray: ie} = Kt(), {printObject: G} = zn(), {printClass: z, printClassMethod: U, printClassProperty: le} = Zt(), {printProperty: ge} = Qt(), {printFunction: Ae, printArrowFunction: Ne, printMethod: ke, printReturnStatement: ce, printThrowStatement: pe} = Lr(), {printCallExpression: de} = oo(), {printVariableDeclarator: ae, printAssignmentExpression: ve} = Yt(), {printBinaryishExpression: K} = Jn(), {printSwitchCaseConsequent: he} = fo(), {printMemberExpression: ye} = ao(), {printBlock: Ce, printBlockBody: Ie} = Do(), {printComment: Fe} = Km(), {printLiteral: me} = Ym(), {printDecorators: _} = Un();
        function J(Be, Pe, Se, Qe) {
          let xe = ne(Be, Pe, Se, Qe);
          if (!xe)
            return "";
          let Xe = Be.getValue(), {type: _e} = Xe;
          if (_e === "ClassMethod" || _e === "ClassPrivateMethod" || _e === "ClassProperty" || _e === "ClassAccessorProperty" || _e === "PropertyDefinition" || _e === "TSAbstractPropertyDefinition" || _e === "ClassPrivateProperty" || _e === "MethodDefinition" || _e === "TSAbstractMethodDefinition" || _e === "TSDeclareMethod")
            return xe;
          let je = [xe], Re = _(Be, Pe, Se), be = Xe.type === "ClassExpression" && Re;
          if (Re && (je = [...Re, xe], !be))
            return o(je);
          if (!h(Be, Pe))
            return Qe && Qe.needsSemi && je.unshift(";"), je.length === 1 && je[0] === xe ? xe : je;
          if (be && (je = [c([r, ...je])]), je.unshift("("), Qe && Qe.needsSemi && je.unshift(";"), T(Xe)) {
            let [qe] = Xe.trailingComments;
            je.push(" /*", qe.value.trimStart(), "*/"), qe.printed = true;
          }
          return be && je.push(r), je.push(")"), je;
        }
        function ne(Be, Pe, Se, Qe) {
          let xe = Be.getValue(), Xe = Pe.semi ? ";" : "";
          if (!xe)
            return "";
          if (typeof xe == "string")
            return xe;
          for (let je of [me, x, L, M, $, V]) {
            let Re = je(Be, Pe, Se);
            if (typeof Re < "u")
              return Re;
          }
          let _e = [];
          switch (xe.type) {
            case "JsExpressionRoot":
              return Se("node");
            case "JsonRoot":
              return [Se("node"), u];
            case "File":
              return xe.program && xe.program.interpreter && _e.push(Se(["program", "interpreter"])), _e.push(Se("program")), _e;
            case "Program":
              return Ie(Be, Pe, Se);
            case "EmptyStatement":
              return "";
            case "ExpressionStatement": {
              if (xe.directive)
                return [Ee(xe.expression, Pe), Xe];
              if (Pe.parser === "__vue_event_binding" || Pe.parser === "__vue_ts_event_binding") {
                let Re = Be.getParentNode();
                if (Re.type === "Program" && Re.body.length === 1 && Re.body[0] === xe)
                  return [Se("expression"), b(xe.expression) ? ";" : ""];
              }
              let je = t(Be, Pe, true, (Re) => {
                let {marker: be} = Re;
                return be === l;
              });
              return [Se("expression"), B(Pe, Be) ? "" : Xe, je ? [" ", je] : ""];
            }
            case "ParenthesizedExpression":
              return !A(xe.expression) && (xe.expression.type === "ObjectExpression" || xe.expression.type === "ArrayExpression") ? ["(", Se("expression"), ")"] : o(["(", c([i, Se("expression")]), i, ")"]);
            case "AssignmentExpression":
              return ve(Be, Pe, Se);
            case "VariableDeclarator":
              return ae(Be, Pe, Se);
            case "BinaryExpression":
            case "LogicalExpression":
              return K(Be, Pe, Se);
            case "AssignmentPattern":
              return [Se("left"), " = ", Se("right")];
            case "OptionalMemberExpression":
            case "MemberExpression":
              return ye(Be, Pe, Se);
            case "MetaProperty":
              return [Se("meta"), ".", Se("property")];
            case "BindExpression":
              return xe.object && _e.push(Se("object")), _e.push(o(c([i, Y(Be, Pe, Se)]))), _e;
            case "Identifier":
              return [xe.name, q(Be), ee(Be), H(Be, Pe, Se)];
            case "V8IntrinsicIdentifier":
              return ["%", xe.name];
            case "SpreadElement":
            case "SpreadElementPattern":
            case "SpreadProperty":
            case "SpreadPropertyPattern":
            case "RestElement":
              return Q(Be, Pe, Se);
            case "FunctionDeclaration":
            case "FunctionExpression":
              return Ae(Be, Se, Pe, Qe);
            case "ArrowFunctionExpression":
              return Ne(Be, Pe, Se, Qe);
            case "YieldExpression":
              return _e.push("yield"), xe.delegate && _e.push("*"), xe.argument && _e.push(" ", Se("argument")), _e;
            case "AwaitExpression": {
              if (_e.push("await"), xe.argument) {
                _e.push(" ", Se("argument"));
                let je = Be.getParentNode();
                if (g(je) && je.callee === xe || F(je) && je.object === xe) {
                  _e = [c([i, ..._e]), i];
                  let Re = Be.findAncestor((be) => be.type === "AwaitExpression" || be.type === "BlockStatement");
                  if (!Re || Re.type !== "AwaitExpression")
                    return o(_e);
                }
              }
              return _e;
            }
            case "ExportDefaultDeclaration":
            case "ExportNamedDeclaration":
              return oe(Be, Pe, Se);
            case "ExportAllDeclaration":
              return W(Be, Pe, Se);
            case "ImportDeclaration":
              return te(Be, Pe, Se);
            case "ImportSpecifier":
            case "ExportSpecifier":
            case "ImportNamespaceSpecifier":
            case "ExportNamespaceSpecifier":
            case "ImportDefaultSpecifier":
            case "ExportDefaultSpecifier":
              return X(Be, Pe, Se);
            case "ImportAttribute":
              return [Se("key"), ": ", Se("value")];
            case "Import":
              return "import";
            case "BlockStatement":
            case "StaticBlock":
            case "ClassBody":
              return Ce(Be, Pe, Se);
            case "ThrowStatement":
              return pe(Be, Pe, Se);
            case "ReturnStatement":
              return ce(Be, Pe, Se);
            case "NewExpression":
            case "ImportExpression":
            case "OptionalCallExpression":
            case "CallExpression":
              return de(Be, Pe, Se);
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              return G(Be, Pe, Se);
            case "ObjectProperty":
            case "Property":
              return xe.method || xe.kind === "get" || xe.kind === "set" ? ke(Be, Pe, Se) : ge(Be, Pe, Se);
            case "ObjectMethod":
              return ke(Be, Pe, Se);
            case "Decorator":
              return ["@", Se("expression")];
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              return ie(Be, Pe, Se);
            case "SequenceExpression": {
              let je = Be.getParentNode(0);
              if (je.type === "ExpressionStatement" || je.type === "ForStatement") {
                let Re = [];
                return Be.each((be, Le) => {
                  Le === 0 ? Re.push(Se()) : Re.push(",", c([r, Se()]));
                }, "expressions"), o(Re);
              }
              return o(a([",", r], Be.map(Se, "expressions")));
            }
            case "ThisExpression":
              return "this";
            case "Super":
              return "super";
            case "Directive":
              return [Se("value"), Xe];
            case "DirectiveLiteral":
              return Ee(xe, Pe);
            case "UnaryExpression":
              return _e.push(xe.operator), /[a-z]$/.test(xe.operator) && _e.push(" "), A(xe.argument) ? _e.push(o(["(", c([i, Se("argument")]), i, ")"])) : _e.push(Se("argument")), _e;
            case "UpdateExpression":
              return _e.push(Se("argument"), xe.operator), xe.prefix && _e.reverse(), _e;
            case "ConditionalExpression":
              return ue(Be, Pe, Se);
            case "VariableDeclaration": {
              let je = Be.map(Se, "declarations"), Re = Be.getParentNode(), be = Re.type === "ForStatement" || Re.type === "ForInStatement" || Re.type === "ForOfStatement", Le = xe.declarations.some((se) => se.init), qe;
              return je.length === 1 && !A(xe.declarations[0]) ? qe = je[0] : je.length > 0 && (qe = c(je[0])), _e = [xe.declare ? "declare " : "", xe.kind, qe ? [" ", qe] : "", c(je.slice(1).map((se) => [",", Le && !be ? u : r, se]))], be && Re.body !== xe || _e.push(Xe), o(_e);
            }
            case "WithStatement":
              return o(["with (", Se("object"), ")", R(xe.body, Se("body"))]);
            case "IfStatement": {
              let je = R(xe.consequent, Se("consequent")), Re = o(["if (", o([c([i, Se("test")]), i]), ")", je]);
              if (_e.push(Re), xe.alternate) {
                let be = A(xe.consequent, S.Trailing | S.Line) || P(xe), Le = xe.consequent.type === "BlockStatement" && !be;
                _e.push(Le ? " " : u), A(xe, S.Dangling) && _e.push(t(Be, Pe, true), be ? u : " "), _e.push("else", o(R(xe.alternate, Se("alternate"), xe.alternate.type === "IfStatement")));
              }
              return _e;
            }
            case "ForStatement": {
              let je = R(xe.body, Se("body")), Re = t(Be, Pe, true), be = Re ? [Re, i] : "";
              return !xe.init && !xe.test && !xe.update ? [be, o(["for (;;)", je])] : [be, o(["for (", o([c([i, Se("init"), ";", r, Se("test"), ";", r, Se("update")]), i]), ")", je])];
            }
            case "WhileStatement":
              return o(["while (", o([c([i, Se("test")]), i]), ")", R(xe.body, Se("body"))]);
            case "ForInStatement":
              return o(["for (", Se("left"), " in ", Se("right"), ")", R(xe.body, Se("body"))]);
            case "ForOfStatement":
              return o(["for", xe.await ? " await" : "", " (", Se("left"), " of ", Se("right"), ")", R(xe.body, Se("body"))]);
            case "DoWhileStatement": {
              let je = R(xe.body, Se("body"));
              return _e = [o(["do", je])], xe.body.type === "BlockStatement" ? _e.push(" ") : _e.push(u), _e.push("while (", o([c([i, Se("test")]), i]), ")", Xe), _e;
            }
            case "DoExpression":
              return [xe.async ? "async " : "", "do ", Se("body")];
            case "BreakStatement":
              return _e.push("break"), xe.label && _e.push(" ", Se("label")), _e.push(Xe), _e;
            case "ContinueStatement":
              return _e.push("continue"), xe.label && _e.push(" ", Se("label")), _e.push(Xe), _e;
            case "LabeledStatement":
              return xe.body.type === "EmptyStatement" ? [Se("label"), ":;"] : [Se("label"), ": ", Se("body")];
            case "TryStatement":
              return ["try ", Se("block"), xe.handler ? [" ", Se("handler")] : "", xe.finalizer ? [" finally ", Se("finalizer")] : ""];
            case "CatchClause":
              if (xe.param) {
                let je = A(xe.param, (be) => !N(be) || be.leading && s(Pe.originalText, y(be)) || be.trailing && s(Pe.originalText, E(be), {backwards: true})), Re = Se("param");
                return ["catch ", je ? ["(", c([i, Re]), i, ") "] : ["(", Re, ") "], Se("body")];
              }
              return ["catch ", Se("body")];
            case "SwitchStatement":
              return [o(["switch (", c([i, Se("discriminant")]), i, ")"]), " {", xe.cases.length > 0 ? c([u, a(u, Be.map((je, Re, be) => {
                let Le = je.getValue();
                return [Se(), Re !== be.length - 1 && k(Le, Pe) ? u : ""];
              }, "cases"))]) : "", u, "}"];
            case "SwitchCase": {
              xe.test ? _e.push("case ", Se("test"), ":") : _e.push("default:"), A(xe, S.Dangling) && _e.push(" ", t(Be, Pe, true));
              let je = xe.consequent.filter((Re) => Re.type !== "EmptyStatement");
              if (je.length > 0) {
                let Re = he(Be, Pe, Se);
                _e.push(je.length === 1 && je[0].type === "BlockStatement" ? [" ", Re] : c([u, Re]));
              }
              return _e;
            }
            case "DebuggerStatement":
              return ["debugger", Xe];
            case "ClassDeclaration":
            case "ClassExpression":
              return z(Be, Pe, Se);
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "MethodDefinition":
              return U(Be, Pe, Se);
            case "ClassProperty":
            case "PropertyDefinition":
            case "ClassPrivateProperty":
            case "ClassAccessorProperty":
              return le(Be, Pe, Se);
            case "TemplateElement":
              return v(xe.value.raw);
            case "TemplateLiteral":
              return De(Be, Se, Pe);
            case "TaggedTemplateExpression":
              return [Se("tag"), Se("typeParameters"), Se("quasi")];
            case "PrivateIdentifier":
              return ["#", Se("name")];
            case "PrivateName":
              return ["#", Se("id")];
            case "InterpreterDirective":
              return _e.push("#!", xe.value, u), k(xe, Pe) && _e.push(u), _e;
            case "TopicReference":
              return "%";
            case "ArgumentPlaceholder":
              return "?";
            case "ModuleExpression": {
              _e.push("module {");
              let je = Se("body");
              return je && _e.push(c([u, je]), u), _e.push("}"), _e;
            }
            default:
              throw new Error("unknown type: " + JSON.stringify(xe.type));
          }
        }
        function Ee(Be, Pe) {
          let Se = C(Be), Qe = Se.slice(1, -1);
          if (Qe.includes('"') || Qe.includes("'"))
            return Se;
          let xe = Pe.singleQuote ? "'" : '"';
          return xe + Qe + xe;
        }
        function We(Be) {
          return Be.type && !N(Be) && !I(Be) && Be.type !== "EmptyStatement" && Be.type !== "TemplateElement" && Be.type !== "Import" && Be.type !== "TSEmptyBodyFunctionExpression";
        }
        n.exports = {preprocess: w, print: J, embed: m, insertPragma: p, massageAstNode: d, hasPrettierIgnore(Be) {
          return D(Be) || j(Be);
        }, willPrintOwnComments: f.willPrintOwnComments, canAttachComment: We, printComment: Fe, isBlockComment: N, handleComments: {avoidAstMutation: true, ownLine: f.handleOwnLineComment, endOfLine: f.handleEndOfLineComment, remaining: f.handleRemainingComment}, getCommentChildNodes: f.getCommentChildNodes};
      }}), Zm = Z({"src/language-js/printer-estree-json.js"(e, n) {
        re();
        var {builders: {hardline: t, indent: s, join: a}} = Oe(), r = so();
        function u(c, v, m) {
          let d = c.getValue();
          switch (d.type) {
            case "JsonRoot":
              return [m("node"), t];
            case "ArrayExpression": {
              if (d.elements.length === 0)
                return "[]";
              let p = c.map(() => c.getValue() === null ? "null" : m(), "elements");
              return ["[", s([t, a([",", t], p)]), t, "]"];
            }
            case "ObjectExpression":
              return d.properties.length === 0 ? "{}" : ["{", s([t, a([",", t], c.map(m, "properties"))]), t, "}"];
            case "ObjectProperty":
              return [m("key"), ": ", m("value")];
            case "UnaryExpression":
              return [d.operator === "+" ? "" : d.operator, m("argument")];
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return d.value ? "true" : "false";
            case "StringLiteral":
            case "NumericLiteral":
              return JSON.stringify(d.value);
            case "Identifier": {
              let p = c.getParentNode();
              return p && p.type === "ObjectProperty" && p.key === d ? JSON.stringify(d.name) : d.name;
            }
            case "TemplateLiteral":
              return m(["quasis", 0]);
            case "TemplateElement":
              return JSON.stringify(d.value.cooked);
            default:
              throw new Error("unknown type: " + JSON.stringify(d.type));
          }
        }
        var i = new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function o(c, v) {
          let {type: m} = c;
          if (m === "ObjectProperty" && c.key.type === "Identifier") {
            v.key = {type: "StringLiteral", value: c.key.name};
            return;
          }
          if (m === "UnaryExpression" && c.operator === "+")
            return v.argument;
          if (m === "ArrayExpression") {
            for (let [d, p] of c.elements.entries())
              p === null && v.elements.splice(d, 0, {type: "NullLiteral"});
            return;
          }
          if (m === "TemplateLiteral")
            return {type: "StringLiteral", value: c.quasis[0].value.cooked};
        }
        o.ignoredProperties = i, n.exports = {preprocess: r, print: u, massageAstNode: o};
      }}), Ot = Z({"src/common/common-options.js"(e, n) {
        re();
        var t = "Common";
        n.exports = {bracketSpacing: {since: "0.0.0", category: t, type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets."}, singleQuote: {since: "0.0.0", category: t, type: "boolean", default: false, description: "Use single quotes instead of double quotes."}, proseWrap: {since: "1.8.2", category: t, type: "choice", default: [{since: "1.8.2", value: true}, {since: "1.9.0", value: "preserve"}], description: "How to wrap prose.", choices: [{since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width."}, {since: "1.9.0", value: "never", description: "Do not wrap prose."}, {since: "1.9.0", value: "preserve", description: "Wrap prose as-is."}]}, bracketSameLine: {since: "2.4.0", category: t, type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line."}, singleAttributePerLine: {since: "2.6.0", category: t, type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX."}};
      }}), ed = Z({"src/language-js/options.js"(e, n) {
        re();
        var t = Ot(), s = "JavaScript";
        n.exports = {arrowParens: {since: "1.9.0", category: s, type: "choice", default: [{since: "1.9.0", value: "avoid"}, {since: "2.0.0", value: "always"}], description: "Include parentheses around a sole arrow function parameter.", choices: [{value: "always", description: "Always include parens. Example: `(x) => x`"}, {value: "avoid", description: "Omit parens when possible. Example: `x => x`"}]}, bracketSameLine: t.bracketSameLine, bracketSpacing: t.bracketSpacing, jsxBracketSameLine: {since: "0.17.0", category: s, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0"}, semi: {since: "1.0.0", category: s, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."}, singleQuote: t.singleQuote, jsxSingleQuote: {since: "1.15.0", category: s, type: "boolean", default: false, description: "Use single quotes in JSX."}, quoteProps: {since: "1.17.0", category: s, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{value: "as-needed", description: "Only add quotes around object properties where required."}, {value: "consistent", description: "If at least one property in an object requires quotes, quote all properties."}, {value: "preserve", description: "Respect the input use of quotes in object properties."}]}, trailingComma: {since: "0.0.0", category: s, type: "choice", default: [{since: "0.0.0", value: false}, {since: "0.19.0", value: "none"}, {since: "2.0.0", value: "es5"}], description: "Print trailing commas wherever possible when multi-line.", choices: [{value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"}, {value: "none", description: "No trailing commas."}, {value: "all", description: "Trailing commas wherever possible (including function arguments)."}]}, singleAttributePerLine: t.singleAttributePerLine};
      }}), td = Z({"src/language-js/parse/parsers.js"() {
        re();
      }}), Sn = Z({"node_modules/linguist-languages/data/JavaScript.json"(e, n) {
        n.exports = {name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183};
      }}), rd = Z({"node_modules/linguist-languages/data/TypeScript.json"(e, n) {
        n.exports = {name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378};
      }}), nd = Z({"node_modules/linguist-languages/data/TSX.json"(e, n) {
        n.exports = {name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924};
      }}), ma = Z({"node_modules/linguist-languages/data/JSON.json"(e, n) {
        n.exports = {name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174};
      }}), ud = Z({"node_modules/linguist-languages/data/JSON with Comments.json"(e, n) {
        n.exports = {name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423};
      }}), sd = Z({"node_modules/linguist-languages/data/JSON5.json"(e, n) {
        n.exports = {name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175};
      }}), id = Z({"src/language-js/index.js"(e, n) {
        re();
        var t = Bt(), s = Qm(), a = Zm(), r = ed(), u = td(), i = [t(Sn(), (c) => ({since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...c.interpreters, "zx"], extensions: [...c.extensions.filter((v) => v !== ".jsx"), ".wxs"]})), t(Sn(), () => ({name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"]})), t(Sn(), () => ({name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0})), t(rd(), () => ({since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"]})), t(nd(), () => ({since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"]})), t(ma(), () => ({name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"]})), t(ma(), (c) => ({since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: c.extensions.filter((v) => v !== ".jsonl")})), t(ud(), (c) => ({since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...c.filenames, ".eslintrc", ".swcrc"]})), t(sd(), () => ({since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"]}))], o = {estree: s, "estree-json": a};
        n.exports = {languages: i, options: r, printers: o, parsers: u};
      }}), ad = Z({"src/language-css/clean.js"(e, n) {
        re();
        var {isFrontMatterNode: t} = Ue(), s = it(), a = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function r(i, o, c) {
          if (t(i) && i.lang === "yaml" && delete o.value, i.type === "css-comment" && c.type === "css-root" && c.nodes.length > 0 && ((c.nodes[0] === i || t(c.nodes[0]) && c.nodes[1] === i) && (delete o.text, /^\*\s*@(?:format|prettier)\s*$/.test(i.text)) || c.type === "css-root" && s(c.nodes) === i))
            return null;
          if (i.type === "value-root" && delete o.text, (i.type === "media-query" || i.type === "media-query-list" || i.type === "media-feature-expression") && delete o.value, i.type === "css-rule" && delete o.params, i.type === "selector-combinator" && (o.value = o.value.replace(/\s+/g, " ")), i.type === "media-feature" && (o.value = o.value.replace(/ /g, "")), (i.type === "value-word" && (i.isColor && i.isHex || ["initial", "inherit", "unset", "revert"].includes(o.value.replace().toLowerCase())) || i.type === "media-feature" || i.type === "selector-root-invalid" || i.type === "selector-pseudo") && (o.value = o.value.toLowerCase()), i.type === "css-decl" && (o.prop = o.prop.toLowerCase()), (i.type === "css-atrule" || i.type === "css-import") && (o.name = o.name.toLowerCase()), i.type === "value-number" && (o.unit = o.unit.toLowerCase()), (i.type === "media-feature" || i.type === "media-keyword" || i.type === "media-type" || i.type === "media-unknown" || i.type === "media-url" || i.type === "media-value" || i.type === "selector-attribute" || i.type === "selector-string" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "value-string") && o.value && (o.value = u(o.value)), i.type === "selector-attribute" && (o.attribute = o.attribute.trim(), o.namespace && typeof o.namespace == "string" && (o.namespace = o.namespace.trim(), o.namespace.length === 0 && (o.namespace = true)), o.value && (o.value = o.value.trim().replace(/^["']|["']$/g, ""), delete o.quoted)), (i.type === "media-value" || i.type === "media-type" || i.type === "value-number" || i.type === "selector-root-invalid" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "selector-tag") && o.value && (o.value = o.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (v, m, d) => {
            let p = Number(m);
            return Number.isNaN(p) ? v : p + d.toLowerCase();
          })), i.type === "selector-tag") {
            let v = i.value.toLowerCase();
            ["from", "to"].includes(v) && (o.value = v);
          }
          if (i.type === "css-atrule" && i.name.toLowerCase() === "supports" && delete o.value, i.type === "selector-unknown" && delete o.value, i.type === "value-comma_group") {
            let v = i.groups.findIndex((m) => m.type === "value-number" && m.unit === "...");
            v !== -1 && (o.groups[v].unit = "", o.groups.splice(v + 1, 0, {type: "value-word", value: "...", isColor: false, isHex: false}));
          }
        }
        r.ignoredProperties = a;
        function u(i) {
          return i.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
        }
        n.exports = r;
      }}), Xn = Z({"src/utils/front-matter/print.js"(e, n) {
        re();
        var {builders: {hardline: t, markAsRoot: s}} = Oe();
        function a(r, u) {
          if (r.lang === "yaml") {
            let i = r.value.trim(), o = i ? u(i, {parser: "yaml"}, {stripTrailingHardline: true}) : "";
            return s([r.startDelimiter, t, o, o ? t : "", r.endDelimiter]);
          }
        }
        n.exports = a;
      }}), od = Z({"src/language-css/embed.js"(e, n) {
        re();
        var {builders: {hardline: t}} = Oe(), s = Xn();
        function a(r, u, i) {
          let o = r.getValue();
          if (o.type === "front-matter") {
            let c = s(o, i);
            return c ? [c, t] : "";
          }
        }
        n.exports = a;
      }}), mo = Z({"src/utils/front-matter/parse.js"(e, n) {
        re();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function s(a) {
          let r = a.match(t);
          if (!r)
            return {content: a};
          let {startDelimiter: u, language: i, value: o = "", endDelimiter: c} = r.groups, v = i.trim() || "yaml";
          if (u === "+++" && (v = "toml"), v !== "yaml" && u !== c)
            return {content: a};
          let [m] = r;
          return {frontMatter: {type: "front-matter", lang: v, value: o, startDelimiter: u, endDelimiter: c, raw: m.replace(/\n$/, "")}, content: m.replace(/[^\n]/g, " ") + a.slice(m.length)};
        }
        n.exports = s;
      }}), ld = Z({"src/language-css/pragma.js"(e, n) {
        re();
        var t = no(), s = mo();
        function a(u) {
          return t.hasPragma(s(u).content);
        }
        function r(u) {
          let {frontMatter: i, content: o} = s(u);
          return (i ? i.raw + `

` : "") + t.insertPragma(o);
        }
        n.exports = {hasPragma: a, insertPragma: r};
      }}), cd = Z({"src/language-css/utils/index.js"(e, n) {
        re();
        var t = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
        function s(G, z) {
          let U = Array.isArray(z) ? z : [z], le = -1, ge;
          for (; ge = G.getParentNode(++le); )
            if (U.includes(ge.type))
              return le;
          return -1;
        }
        function a(G, z) {
          let U = s(G, z);
          return U === -1 ? null : G.getParentNode(U);
        }
        function r(G) {
          var z;
          let U = a(G, "css-decl");
          return U == null || (z = U.prop) === null || z === void 0 ? void 0 : z.toLowerCase();
        }
        var u = new Set(["initial", "inherit", "unset", "revert"]);
        function i(G) {
          return u.has(G.toLowerCase());
        }
        function o(G, z) {
          let U = a(G, "css-atrule");
          return (U == null ? void 0 : U.name) && U.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(z.toLowerCase());
        }
        function c(G) {
          return G.includes("$") || G.includes("@") || G.includes("#") || G.startsWith("%") || G.startsWith("--") || G.startsWith(":--") || G.includes("(") && G.includes(")") ? G : G.toLowerCase();
        }
        function v(G, z) {
          var U;
          let le = a(G, "value-func");
          return (le == null || (U = le.value) === null || U === void 0 ? void 0 : U.toLowerCase()) === z;
        }
        function m(G) {
          var z;
          let U = a(G, "css-rule"), le = U == null || (z = U.raws) === null || z === void 0 ? void 0 : z.selector;
          return le && (le.startsWith(":import") || le.startsWith(":export"));
        }
        function d(G, z) {
          let U = Array.isArray(z) ? z : [z], le = a(G, "css-atrule");
          return le && U.includes(le.name.toLowerCase());
        }
        function p(G) {
          let z = G.getValue(), U = a(G, "css-atrule");
          return (U == null ? void 0 : U.name) === "import" && z.groups[0].value === "url" && z.groups.length === 2;
        }
        function f(G) {
          return G.type === "value-func" && G.value.toLowerCase() === "url";
        }
        function h(G, z) {
          var U;
          let le = (U = G.getParentNode()) === null || U === void 0 ? void 0 : U.nodes;
          return le && le.indexOf(z) === le.length - 1;
        }
        function w(G) {
          let {selector: z} = G;
          return z ? typeof z == "string" && /^@.+:.*$/.test(z) || z.value && /^@.+:.*$/.test(z.value) : false;
        }
        function T(G) {
          return G.type === "value-word" && ["from", "through", "end"].includes(G.value);
        }
        function A(G) {
          return G.type === "value-word" && ["and", "or", "not"].includes(G.value);
        }
        function S(G) {
          return G.type === "value-word" && G.value === "in";
        }
        function B(G) {
          return G.type === "value-operator" && G.value === "*";
        }
        function I(G) {
          return G.type === "value-operator" && G.value === "/";
        }
        function k(G) {
          return G.type === "value-operator" && G.value === "+";
        }
        function P(G) {
          return G.type === "value-operator" && G.value === "-";
        }
        function C(G) {
          return G.type === "value-operator" && G.value === "%";
        }
        function D(G) {
          return B(G) || I(G) || k(G) || P(G) || C(G);
        }
        function g(G) {
          return G.type === "value-word" && ["==", "!="].includes(G.value);
        }
        function F(G) {
          return G.type === "value-word" && ["<", ">", "<=", ">="].includes(G.value);
        }
        function l(G) {
          return G.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(G.name);
        }
        function E(G) {
          var z;
          return ((z = G.raws) === null || z === void 0 ? void 0 : z.params) && /^\(\s*\)$/.test(G.raws.params);
        }
        function y(G) {
          return G.name.startsWith("prettier-placeholder");
        }
        function N(G) {
          return G.prop.startsWith("@prettier-placeholder");
        }
        function x(G, z) {
          return G.value === "$$" && G.type === "value-func" && (z == null ? void 0 : z.type) === "value-word" && !z.raws.before;
        }
        function b(G) {
          var z, U;
          return ((z = G.value) === null || z === void 0 ? void 0 : z.type) === "value-root" && ((U = G.value.group) === null || U === void 0 ? void 0 : U.type) === "value-value" && G.prop.toLowerCase() === "composes";
        }
        function L(G) {
          var z, U, le;
          return ((z = G.value) === null || z === void 0 || (U = z.group) === null || U === void 0 || (le = U.group) === null || le === void 0 ? void 0 : le.type) === "value-paren_group" && G.value.group.group.open !== null && G.value.group.group.close !== null;
        }
        function M(G) {
          var z;
          return ((z = G.raws) === null || z === void 0 ? void 0 : z.before) === "";
        }
        function j(G) {
          var z, U;
          return G.type === "value-comma_group" && ((z = G.groups) === null || z === void 0 || (U = z[1]) === null || U === void 0 ? void 0 : U.type) === "value-colon";
        }
        function $(G) {
          var z;
          return G.type === "value-paren_group" && ((z = G.groups) === null || z === void 0 ? void 0 : z[0]) && j(G.groups[0]);
        }
        function V(G) {
          var z;
          let U = G.getValue();
          if (U.groups.length === 0)
            return false;
          let le = G.getParentNode(1);
          if (!$(U) && !(le && $(le)))
            return false;
          let ge = a(G, "css-decl");
          return !!(ge != null && (z = ge.prop) !== null && z !== void 0 && z.startsWith("$") || $(le) || le.type === "value-func");
        }
        function q(G) {
          return G.type === "value-comment" && G.inline;
        }
        function Y(G) {
          return G.type === "value-word" && G.value === "#";
        }
        function H(G) {
          return G.type === "value-word" && G.value === "{";
        }
        function R(G) {
          return G.type === "value-word" && G.value === "}";
        }
        function Q(G) {
          return ["value-word", "value-atword"].includes(G.type);
        }
        function ee(G) {
          return (G == null ? void 0 : G.type) === "value-colon";
        }
        function te(G, z) {
          if (!j(z))
            return false;
          let {groups: U} = z, le = U.indexOf(G);
          return le === -1 ? false : ee(U[le + 1]);
        }
        function oe(G) {
          return G.value && ["not", "and", "or"].includes(G.value.toLowerCase());
        }
        function W(G) {
          return G.type !== "value-func" ? false : t.has(G.value.toLowerCase());
        }
        function X(G) {
          return /\/\//.test(G.split(/[\n\r]/).pop());
        }
        function ue(G) {
          return (G == null ? void 0 : G.type) === "value-atword" && G.value.startsWith("prettier-placeholder-");
        }
        function De(G, z) {
          var U, le;
          if (((U = G.open) === null || U === void 0 ? void 0 : U.value) !== "(" || ((le = G.close) === null || le === void 0 ? void 0 : le.value) !== ")" || G.groups.some((ge) => ge.type !== "value-comma_group"))
            return false;
          if (z.type === "value-comma_group") {
            let ge = z.groups.indexOf(G) - 1, Ae = z.groups[ge];
            if ((Ae == null ? void 0 : Ae.type) === "value-word" && Ae.value === "with")
              return true;
          }
          return false;
        }
        function ie(G) {
          var z, U;
          return G.type === "value-paren_group" && ((z = G.open) === null || z === void 0 ? void 0 : z.value) === "(" && ((U = G.close) === null || U === void 0 ? void 0 : U.value) === ")";
        }
        n.exports = {getAncestorCounter: s, getAncestorNode: a, getPropOfDeclNode: r, maybeToLowerCase: c, insideValueFunctionNode: v, insideICSSRuleNode: m, insideAtRuleNode: d, insideURLFunctionInImportAtRuleNode: p, isKeyframeAtRuleKeywords: o, isWideKeywords: i, isLastNode: h, isSCSSControlDirectiveNode: l, isDetachedRulesetDeclarationNode: w, isRelationalOperatorNode: F, isEqualityOperatorNode: g, isMultiplicationNode: B, isDivisionNode: I, isAdditionNode: k, isSubtractionNode: P, isModuloNode: C, isMathOperatorNode: D, isEachKeywordNode: S, isForKeywordNode: T, isURLFunctionNode: f, isIfElseKeywordNode: A, hasComposesNode: b, hasParensAroundNode: L, hasEmptyRawBefore: M, isDetachedRulesetCallNode: E, isTemplatePlaceholderNode: y, isTemplatePropNode: N, isPostcssSimpleVarNode: x, isKeyValuePairNode: j, isKeyValuePairInParenGroupNode: $, isKeyInValuePairNode: te, isSCSSMapItemNode: V, isInlineValueCommentNode: q, isHashNode: Y, isLeftCurlyBraceNode: H, isRightCurlyBraceNode: R, isWordNode: Q, isColonNode: ee, isMediaAndSupportsKeywords: oe, isColorAdjusterFuncNode: W, lastLineHasInlineComment: X, isAtWordPlaceholderNode: ue, isConfigurationNode: De, isParenGroupNode: ie};
      }}), pd = Z({"src/utils/line-column-to-index.js"(e, n) {
        re(), n.exports = function(t, s) {
          let a = 0;
          for (let r = 0; r < t.line - 1; ++r)
            a = s.indexOf(`
`, a) + 1;
          return a + t.column;
        };
      }}), fd = Z({"src/language-css/loc.js"(e, n) {
        re();
        var {skipEverythingButNewLine: t} = Nr(), s = it(), a = pd();
        function r(p, f) {
          return typeof p.sourceIndex == "number" ? p.sourceIndex : p.source ? a(p.source.start, f) - 1 : null;
        }
        function u(p, f) {
          if (p.type === "css-comment" && p.inline)
            return t(f, p.source.startOffset);
          let h = p.nodes && s(p.nodes);
          return h && p.source && !p.source.end && (p = h), p.source && p.source.end ? a(p.source.end, f) : null;
        }
        function i(p, f) {
          p.source && (p.source.startOffset = r(p, f), p.source.endOffset = u(p, f));
          for (let h in p) {
            let w = p[h];
            h === "source" || !w || typeof w != "object" || (w.type === "value-root" || w.type === "value-unknown" ? o(w, c(p), w.text || w.value) : i(w, f));
          }
        }
        function o(p, f, h) {
          p.source && (p.source.startOffset = r(p, h) + f, p.source.endOffset = u(p, h) + f);
          for (let w in p) {
            let T = p[w];
            w === "source" || !T || typeof T != "object" || o(T, f, h);
          }
        }
        function c(p) {
          let f = p.source.startOffset;
          return typeof p.prop == "string" && (f += p.prop.length), p.type === "css-atrule" && typeof p.name == "string" && (f += 1 + p.name.length + p.raws.afterName.match(/^\s*:?\s*/)[0].length), p.type !== "css-atrule" && p.raws && typeof p.raws.between == "string" && (f += p.raws.between.length), f;
        }
        function v(p) {
          let f = "initial", h = "initial", w, T = false, A = [];
          for (let S = 0; S < p.length; S++) {
            let B = p[S];
            switch (f) {
              case "initial":
                if (B === "'") {
                  f = "single-quotes";
                  continue;
                }
                if (B === '"') {
                  f = "double-quotes";
                  continue;
                }
                if ((B === "u" || B === "U") && p.slice(S, S + 4).toLowerCase() === "url(") {
                  f = "url", S += 3;
                  continue;
                }
                if (B === "*" && p[S - 1] === "/") {
                  f = "comment-block";
                  continue;
                }
                if (B === "/" && p[S - 1] === "/") {
                  f = "comment-inline", w = S - 1;
                  continue;
                }
                continue;
              case "single-quotes":
                if (B === "'" && p[S - 1] !== "\\" && (f = h, h = "initial"), B === `
` || B === "\r")
                  return p;
                continue;
              case "double-quotes":
                if (B === '"' && p[S - 1] !== "\\" && (f = h, h = "initial"), B === `
` || B === "\r")
                  return p;
                continue;
              case "url":
                if (B === ")" && (f = "initial"), B === `
` || B === "\r")
                  return p;
                if (B === "'") {
                  f = "single-quotes", h = "url";
                  continue;
                }
                if (B === '"') {
                  f = "double-quotes", h = "url";
                  continue;
                }
                continue;
              case "comment-block":
                B === "/" && p[S - 1] === "*" && (f = "initial");
                continue;
              case "comment-inline":
                (B === '"' || B === "'" || B === "*") && (T = true), (B === `
` || B === "\r") && (T && A.push([w, S]), f = "initial", T = false);
                continue;
            }
          }
          for (let [S, B] of A)
            p = p.slice(0, S) + p.slice(S, B).replace(/["'*]/g, " ") + p.slice(B);
          return p;
        }
        function m(p) {
          return p.source.startOffset;
        }
        function d(p) {
          return p.source.endOffset;
        }
        n.exports = {locStart: m, locEnd: d, calculateLoc: i, replaceQuotesInInlineComments: v};
      }}), Dd = Z({"src/language-css/utils/is-less-parser.js"(e, n) {
        re();
        function t(s) {
          return s.parser === "css" || s.parser === "less";
        }
        n.exports = t;
      }}), md = Z({"src/language-css/utils/is-scss.js"(e, n) {
        re();
        function t(s, a) {
          return s === "less" || s === "scss" ? s === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(a);
        }
        n.exports = t;
      }}), dd = Z({"src/language-css/utils/css-units.evaluate.js"(e, n) {
        n.exports = {em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x"};
      }}), gd = Z({"src/language-css/utils/print-unit.js"(e, n) {
        re();
        var t = dd();
        function s(a) {
          let r = a.toLowerCase();
          return Object.prototype.hasOwnProperty.call(t, r) ? t[r] : a;
        }
        n.exports = s;
      }}), yd = Z({"src/language-css/printer-postcss.js"(e, n) {
        re();
        var t = it(), {printNumber: s, printString: a, hasNewline: r, isFrontMatterNode: u, isNextLineEmpty: i, isNonEmptyArray: o} = Ue(), {builders: {join: c, line: v, hardline: m, softline: d, group: p, fill: f, indent: h, dedent: w, ifBreak: T, breakParent: A}, utils: {removeLines: S, getDocParts: B}} = Oe(), I = ad(), k = od(), {insertPragma: P} = ld(), {getAncestorNode: C, getPropOfDeclNode: D, maybeToLowerCase: g, insideValueFunctionNode: F, insideICSSRuleNode: l, insideAtRuleNode: E, insideURLFunctionInImportAtRuleNode: y, isKeyframeAtRuleKeywords: N, isWideKeywords: x, isLastNode: b, isSCSSControlDirectiveNode: L, isDetachedRulesetDeclarationNode: M, isRelationalOperatorNode: j, isEqualityOperatorNode: $, isMultiplicationNode: V, isDivisionNode: q, isAdditionNode: Y, isSubtractionNode: H, isMathOperatorNode: R, isEachKeywordNode: Q, isForKeywordNode: ee, isURLFunctionNode: te, isIfElseKeywordNode: oe, hasComposesNode: W, hasParensAroundNode: X, hasEmptyRawBefore: ue, isKeyValuePairNode: De, isKeyInValuePairNode: ie, isDetachedRulesetCallNode: G, isTemplatePlaceholderNode: z, isTemplatePropNode: U, isPostcssSimpleVarNode: le, isSCSSMapItemNode: ge, isInlineValueCommentNode: Ae, isHashNode: Ne, isLeftCurlyBraceNode: ke, isRightCurlyBraceNode: ce, isWordNode: pe, isColonNode: de, isMediaAndSupportsKeywords: ae, isColorAdjusterFuncNode: ve, lastLineHasInlineComment: K, isAtWordPlaceholderNode: he, isConfigurationNode: ye, isParenGroupNode: Ce} = cd(), {locStart: Ie, locEnd: Fe} = fd(), me = Dd(), _ = md(), J = gd();
        function ne(be) {
          return be.trailingComma === "es5" || be.trailingComma === "all";
        }
        function Ee(be, Le, qe) {
          let se = be.getValue();
          if (!se)
            return "";
          if (typeof se == "string")
            return se;
          switch (se.type) {
            case "front-matter":
              return [se.raw, m];
            case "css-root": {
              let He = We(be, Le, qe), Me = se.raws.after.trim();
              return [He, Me ? " ".concat(Me) : "", B(He).length > 0 ? m : ""];
            }
            case "css-comment": {
              let He = se.inline || se.raws.inline, Me = Le.originalText.slice(Ie(se), Fe(se));
              return He ? Me.trimEnd() : Me;
            }
            case "css-rule":
              return [qe("selector"), se.important ? " !important" : "", se.nodes ? [se.selector && se.selector.type === "selector-unknown" && K(se.selector.value) ? v : " ", "{", se.nodes.length > 0 ? h([m, We(be, Le, qe)]) : "", m, "}", M(se) ? ";" : ""] : ";"];
            case "css-decl": {
              let He = be.getParentNode(), {between: Me} = se.raws, ze = Me.trim(), nt = ze === ":", tt = W(se) ? S(qe("value")) : qe("value");
              return !nt && K(ze) && (tt = h([m, w(tt)])), [se.raws.before.replace(/[\s;]/g, ""), l(be) ? se.prop : g(se.prop), ze.startsWith("//") ? " " : "", ze, se.extend ? "" : " ", me(Le) && se.extend && se.selector ? ["extend(", qe("selector"), ")"] : "", tt, se.raws.important ? se.raws.important.replace(/\s*!\s*important/i, " !important") : se.important ? " !important" : "", se.raws.scssDefault ? se.raws.scssDefault.replace(/\s*!default/i, " !default") : se.scssDefault ? " !default" : "", se.raws.scssGlobal ? se.raws.scssGlobal.replace(/\s*!global/i, " !global") : se.scssGlobal ? " !global" : "", se.nodes ? [" {", h([d, We(be, Le, qe)]), d, "}"] : U(se) && !He.raws.semicolon && Le.originalText[Fe(se) - 1] !== ";" ? "" : Le.__isHTMLStyleAttribute && b(be, se) ? T(";") : ";"];
            }
            case "css-atrule": {
              let He = be.getParentNode(), Me = z(se) && !He.raws.semicolon && Le.originalText[Fe(se) - 1] !== ";";
              if (me(Le)) {
                if (se.mixin)
                  return [qe("selector"), se.important ? " !important" : "", Me ? "" : ";"];
                if (se.function)
                  return [se.name, qe("params"), Me ? "" : ";"];
                if (se.variable)
                  return ["@", se.name, ": ", se.value ? qe("value") : "", se.raws.between.trim() ? se.raws.between.trim() + " " : "", se.nodes ? ["{", h([se.nodes.length > 0 ? d : "", We(be, Le, qe)]), d, "}"] : "", Me ? "" : ";"];
              }
              return ["@", G(se) || se.name.endsWith(":") ? se.name : g(se.name), se.params ? [G(se) ? "" : z(se) ? se.raws.afterName === "" ? "" : se.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(se.raws.afterName) ? [m, m] : /^\s*\n/.test(se.raws.afterName) ? m : " " : " ", qe("params")] : "", se.selector ? h([" ", qe("selector")]) : "", se.value ? p([" ", qe("value"), L(se) ? X(se) ? " " : v : ""]) : se.name === "else" ? " " : "", se.nodes ? [L(se) ? "" : se.selector && !se.selector.nodes && typeof se.selector.value == "string" && K(se.selector.value) || !se.selector && typeof se.params == "string" && K(se.params) ? v : " ", "{", h([se.nodes.length > 0 ? d : "", We(be, Le, qe)]), d, "}"] : Me ? "" : ";"];
            }
            case "media-query-list": {
              let He = [];
              return be.each((Me) => {
                let ze = Me.getValue();
                ze.type === "media-query" && ze.value === "" || He.push(qe());
              }, "nodes"), p(h(c(v, He)));
            }
            case "media-query":
              return [c(" ", be.map(qe, "nodes")), b(be, se) ? "" : ","];
            case "media-type":
              return je(Xe(se.value, Le));
            case "media-feature-expression":
              return se.nodes ? ["(", ...be.map(qe, "nodes"), ")"] : se.value;
            case "media-feature":
              return g(Xe(se.value.replace(/ +/g, " "), Le));
            case "media-colon":
              return [se.value, " "];
            case "media-value":
              return je(Xe(se.value, Le));
            case "media-keyword":
              return Xe(se.value, Le);
            case "media-url":
              return Xe(se.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), Le);
            case "media-unknown":
              return se.value;
            case "selector-root":
              return p([E(be, "custom-selector") ? [C(be, "css-atrule").customSelector, v] : "", c([",", E(be, ["extend", "custom-selector", "nest"]) ? v : m], be.map(qe, "nodes"))]);
            case "selector-selector":
              return p(h(be.map(qe, "nodes")));
            case "selector-comment":
              return se.value;
            case "selector-string":
              return Xe(se.value, Le);
            case "selector-tag": {
              let He = be.getParentNode(), Me = He && He.nodes.indexOf(se), ze = Me && He.nodes[Me - 1];
              return [se.namespace ? [se.namespace === true ? "" : se.namespace.trim(), "|"] : "", ze.type === "selector-nesting" ? se.value : je(N(be, se.value) ? se.value.toLowerCase() : se.value)];
            }
            case "selector-id":
              return ["#", se.value];
            case "selector-class":
              return [".", je(Xe(se.value, Le))];
            case "selector-attribute":
              return ["[", se.namespace ? [se.namespace === true ? "" : se.namespace.trim(), "|"] : "", se.attribute.trim(), se.operator ? se.operator : "", se.value ? _e(Xe(se.value.trim(), Le), Le) : "", se.insensitive ? " i" : "", "]"];
            case "selector-combinator": {
              if (se.value === "+" || se.value === ">" || se.value === "~" || se.value === ">>>") {
                let ze = be.getParentNode();
                return [ze.type === "selector-selector" && ze.nodes[0] === se ? "" : v, se.value, b(be, se) ? "" : " "];
              }
              let He = se.value.trim().startsWith("(") ? v : "", Me = je(Xe(se.value.trim(), Le)) || v;
              return [He, Me];
            }
            case "selector-universal":
              return [se.namespace ? [se.namespace === true ? "" : se.namespace.trim(), "|"] : "", se.value];
            case "selector-pseudo":
              return [g(se.value), o(se.nodes) ? ["(", c(", ", be.map(qe, "nodes")), ")"] : ""];
            case "selector-nesting":
              return se.value;
            case "selector-unknown": {
              let He = C(be, "css-rule");
              if (He && He.isSCSSNesterProperty)
                return je(Xe(g(se.value), Le));
              let Me = be.getParentNode();
              if (Me.raws && Me.raws.selector) {
                let nt = Ie(Me), tt = nt + Me.raws.selector.length;
                return Le.originalText.slice(nt, tt).trim();
              }
              let ze = be.getParentNode(1);
              if (Me.type === "value-paren_group" && ze && ze.type === "value-func" && ze.value === "selector") {
                let nt = Fe(Me.open) + 1, tt = Ie(Me.close), pt = Le.originalText.slice(nt, tt).trim();
                return K(pt) ? [A, pt] : pt;
              }
              return se.value;
            }
            case "value-value":
            case "value-root":
              return qe("group");
            case "value-comment":
              return Le.originalText.slice(Ie(se), Fe(se));
            case "value-comma_group": {
              let He = be.getParentNode(), Me = be.getParentNode(1), ze = D(be), nt = ze && He.type === "value-value" && (ze === "grid" || ze.startsWith("grid-template")), tt = C(be, "css-atrule"), pt = tt && L(tt), O = se.groups.some((ut) => Ae(ut)), fe = be.map(qe, "groups"), Te = [], $e = F(be, "url"), Je = false, Ze = false;
              for (let ut = 0; ut < se.groups.length; ++ut) {
                Te.push(fe[ut]);
                let rt = se.groups[ut - 1], Ve = se.groups[ut], Ge = se.groups[ut + 1], tr = se.groups[ut + 2];
                if ($e) {
                  (Ge && Y(Ge) || Y(Ve)) && Te.push(" ");
                  continue;
                }
                if (E(be, "forward") && Ve.type === "value-word" && Ve.value && rt !== void 0 && rt.type === "value-word" && rt.value === "as" && Ge.type === "value-operator" && Ge.value === "*" || !Ge || Ve.type === "value-word" && Ve.value.endsWith("-") && he(Ge))
                  continue;
                let Eo = Ve.type === "value-string" && Ve.value.startsWith("#{"), Fo = Je && Ge.type === "value-string" && Ge.value.endsWith("}");
                if (Eo || Fo) {
                  Je = !Je;
                  continue;
                }
                if (Je || de(Ve) || de(Ge) || Ve.type === "value-atword" && Ve.value === "" || Ve.value === "~" || Ve.value && Ve.value.includes("\\") && Ge && Ge.type !== "value-comment" || rt && rt.value && rt.value.indexOf("\\") === rt.value.length - 1 && Ve.type === "value-operator" && Ve.value === "/" || Ve.value === "\\" || le(Ve, Ge) || Ne(Ve) || ke(Ve) || ce(Ge) || ke(Ge) && ue(Ge) || ce(Ve) && ue(Ge) || Ve.value === "--" && Ne(Ge))
                  continue;
                let Qn = R(Ve), Zn = R(Ge);
                if ((Qn && Ne(Ge) || Zn && ce(Ve)) && ue(Ge) || !rt && q(Ve) || F(be, "calc") && (Y(Ve) || Y(Ge) || H(Ve) || H(Ge)) && ue(Ge))
                  continue;
                let Ao = (Y(Ve) || H(Ve)) && ut === 0 && (Ge.type === "value-number" || Ge.isHex) && Me && ve(Me) && !ue(Ge), eu = tr && tr.type === "value-func" || tr && pe(tr) || Ve.type === "value-func" || pe(Ve), tu = Ge.type === "value-func" || pe(Ge) || rt && rt.type === "value-func" || rt && pe(rt);
                if (!(!(V(Ge) || V(Ve)) && !F(be, "calc") && !Ao && (q(Ge) && !eu || q(Ve) && !tu || Y(Ge) && !eu || Y(Ve) && !tu || H(Ge) || H(Ve)) && (ue(Ge) || Qn && (!rt || rt && R(rt))))) {
                  if (Ae(Ve)) {
                    if (He.type === "value-paren_group") {
                      Te.push(w(m));
                      continue;
                    }
                    Te.push(m);
                    continue;
                  }
                  if (pt && ($(Ge) || j(Ge) || oe(Ge) || Q(Ve) || ee(Ve))) {
                    Te.push(" ");
                    continue;
                  }
                  if (tt && tt.name.toLowerCase() === "namespace") {
                    Te.push(" ");
                    continue;
                  }
                  if (nt) {
                    Ve.source && Ge.source && Ve.source.start.line !== Ge.source.start.line ? (Te.push(m), Ze = true) : Te.push(" ");
                    continue;
                  }
                  if (Zn) {
                    Te.push(" ");
                    continue;
                  }
                  if (!(Ge && Ge.value === "...") && !(he(Ve) && he(Ge) && Fe(Ve) === Ie(Ge))) {
                    if (he(Ve) && Ce(Ge) && Fe(Ve) === Ie(Ge.open)) {
                      Te.push(d);
                      continue;
                    }
                    if (Ve.value === "with" && Ce(Ge)) {
                      Te.push(" ");
                      continue;
                    }
                    Te.push(v);
                  }
                }
              }
              return O && Te.push(A), Ze && Te.unshift(m), pt ? p(h(Te)) : y(be) ? p(f(Te)) : p(h(f(Te)));
            }
            case "value-paren_group": {
              let He = be.getParentNode();
              if (He && te(He) && (se.groups.length === 1 || se.groups.length > 0 && se.groups[0].type === "value-comma_group" && se.groups[0].groups.length > 0 && se.groups[0].groups[0].type === "value-word" && se.groups[0].groups[0].value.startsWith("data:")))
                return [se.open ? qe("open") : "", c(",", be.map(qe, "groups")), se.close ? qe("close") : ""];
              if (!se.open) {
                let $e = be.map(qe, "groups"), Je = [];
                for (let Ze = 0; Ze < $e.length; Ze++)
                  Ze !== 0 && Je.push([",", v]), Je.push($e[Ze]);
                return p(h(f(Je)));
              }
              let Me = ge(be), ze = t(se.groups), nt = ze && ze.type === "value-comment", tt = ie(se, He), pt = ye(se, He), O = pt || Me && !tt, fe = pt || tt, Te = p([se.open ? qe("open") : "", h([d, c([v], be.map(($e, Je) => {
                let Ze = $e.getValue(), ut = Je === se.groups.length - 1, rt = [qe(), ut ? "" : ","];
                if (De(Ze) && Ze.type === "value-comma_group" && Ze.groups && Ze.groups[0].type !== "value-paren_group" && Ze.groups[2] && Ze.groups[2].type === "value-paren_group") {
                  let Ve = B(rt[0].contents.contents);
                  return Ve[1] = p(Ve[1]), p(w(rt));
                }
                if (!ut && Ze.type === "value-comma_group" && o(Ze.groups)) {
                  let Ve = t(Ze.groups);
                  Ve.source && i(Le.originalText, Ve, Fe) && rt.push(m);
                }
                return rt;
              }, "groups"))]), T(!nt && _(Le.parser, Le.originalText) && Me && ne(Le) ? "," : ""), d, se.close ? qe("close") : ""], {shouldBreak: O});
              return fe ? w(Te) : Te;
            }
            case "value-func":
              return [se.value, E(be, "supports") && ae(se) ? " " : "", qe("group")];
            case "value-paren":
              return se.value;
            case "value-number":
              return [Re(se.value), J(se.unit)];
            case "value-operator":
              return se.value;
            case "value-word":
              return se.isColor && se.isHex || x(se.value) ? se.value.toLowerCase() : se.value;
            case "value-colon": {
              let He = be.getParentNode(), Me = He && He.groups.indexOf(se), ze = Me && He.groups[Me - 1];
              return [se.value, ze && typeof ze.value == "string" && t(ze.value) === "\\" || F(be, "url") ? "" : v];
            }
            case "value-comma":
              return [se.value, " "];
            case "value-string":
              return a(se.raws.quote + se.value + se.raws.quote, Le);
            case "value-atword":
              return ["@", se.value];
            case "value-unicode-range":
              return se.value;
            case "value-unknown":
              return se.value;
            default:
              throw new Error("Unknown postcss type ".concat(JSON.stringify(se.type)));
          }
        }
        function We(be, Le, qe) {
          let se = [];
          return be.each((He, Me, ze) => {
            let nt = ze[Me - 1];
            if (nt && nt.type === "css-comment" && nt.text.trim() === "prettier-ignore") {
              let tt = He.getValue();
              se.push(Le.originalText.slice(Ie(tt), Fe(tt)));
            } else
              se.push(qe());
            Me !== ze.length - 1 && (ze[Me + 1].type === "css-comment" && !r(Le.originalText, Ie(ze[Me + 1]), {backwards: true}) && !u(ze[Me]) || ze[Me + 1].type === "css-atrule" && ze[Me + 1].name === "else" && ze[Me].type !== "css-comment" ? se.push(" ") : (se.push(Le.__isHTMLStyleAttribute ? v : m), i(Le.originalText, He.getValue(), Fe) && !u(ze[Me]) && se.push(m)));
          }, "nodes"), se;
        }
        var Be = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, Pe = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, Se = /[A-Za-z]+/g, Qe = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, xe = new RegExp(Be.source + "|(".concat(Qe.source, ")?(").concat(Pe.source, ")(").concat(Se.source, ")?"), "g");
        function Xe(be, Le) {
          return be.replace(Be, (qe) => a(qe, Le));
        }
        function _e(be, Le) {
          let qe = Le.singleQuote ? "'" : '"';
          return be.includes('"') || be.includes("'") ? be : qe + be + qe;
        }
        function je(be) {
          return be.replace(xe, (Le, qe, se, He, Me) => !se && He ? Re(He) + g(Me || "") : Le);
        }
        function Re(be) {
          return s(be).replace(/\.0(?=$|e)/, "");
        }
        n.exports = {print: Ee, embed: k, insertPragma: P, massageAstNode: I};
      }}), hd = Z({"src/language-css/options.js"(e, n) {
        re();
        var t = Ot();
        n.exports = {singleQuote: t.singleQuote};
      }}), vd = Z({"src/language-css/parsers.js"() {
        re();
      }}), Cd = Z({"node_modules/linguist-languages/data/CSS.json"(e, n) {
        n.exports = {name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50};
      }}), Ed = Z({"node_modules/linguist-languages/data/PostCSS.json"(e, n) {
        n.exports = {name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437};
      }}), Fd = Z({"node_modules/linguist-languages/data/Less.json"(e, n) {
        n.exports = {name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198};
      }}), Ad = Z({"node_modules/linguist-languages/data/SCSS.json"(e, n) {
        n.exports = {name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329};
      }}), Sd = Z({"src/language-css/index.js"(e, n) {
        re();
        var t = Bt(), s = yd(), a = hd(), r = vd(), u = [t(Cd(), (o) => ({since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...o.extensions, ".wxss"]})), t(Ed(), () => ({since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"]})), t(Fd(), () => ({since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"]})), t(Ad(), () => ({since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"]}))], i = {postcss: s};
        n.exports = {languages: u, options: a, printers: i, parsers: r};
      }}), xd = Z({"src/language-handlebars/loc.js"(e, n) {
        re();
        function t(a) {
          return a.loc.start.offset;
        }
        function s(a) {
          return a.loc.end.offset;
        }
        n.exports = {locStart: t, locEnd: s};
      }}), bd = Z({"src/language-handlebars/clean.js"(e, n) {
        re();
        function t(s, a) {
          if (s.type === "TextNode") {
            let r = s.chars.trim();
            if (!r)
              return null;
            a.chars = r.replace(/[\t\n\f\r ]+/g, " ");
          }
          s.type === "AttrNode" && s.name.toLowerCase() === "class" && delete a.value;
        }
        t.ignoredProperties = new Set(["loc", "selfClosing"]), n.exports = t;
      }}), Td = Z({"vendors/html-void-elements.json"(e, n) {
        n.exports = {htmlVoidElements: ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]};
      }}), Bd = Z({"src/language-handlebars/utils.js"(e, n) {
        re();
        var {htmlVoidElements: t} = Td(), s = it();
        function a(S) {
          let B = S.getValue(), I = S.getParentNode(0);
          return !!(m(S, ["ElementNode"]) && s(I.children) === B || m(S, ["Block"]) && s(I.body) === B);
        }
        function r(S) {
          return S.toUpperCase() === S;
        }
        function u(S) {
          return v(S, ["ElementNode"]) && typeof S.tag == "string" && !S.tag.startsWith(":") && (r(S.tag[0]) || S.tag.includes("."));
        }
        var i = new Set(t);
        function o(S) {
          return i.has(S.tag) || u(S) && S.children.every((B) => c(B));
        }
        function c(S) {
          return v(S, ["TextNode"]) && !/\S/.test(S.chars);
        }
        function v(S, B) {
          return S && B.includes(S.type);
        }
        function m(S, B) {
          let I = S.getParentNode(0);
          return v(I, B);
        }
        function d(S, B) {
          let I = h(S);
          return v(I, B);
        }
        function p(S, B) {
          let I = w(S);
          return v(I, B);
        }
        function f(S, B) {
          var I, k, P, C;
          let D = S.getValue(), g = (I = S.getParentNode(0)) !== null && I !== void 0 ? I : {}, F = (k = (P = (C = g.children) !== null && C !== void 0 ? C : g.body) !== null && P !== void 0 ? P : g.parts) !== null && k !== void 0 ? k : [], l = F.indexOf(D);
          return l !== -1 && F[l + B];
        }
        function h(S) {
          let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return f(S, -B);
        }
        function w(S) {
          return f(S, 1);
        }
        function T(S) {
          return v(S, ["MustacheCommentStatement"]) && typeof S.value == "string" && S.value.trim() === "prettier-ignore";
        }
        function A(S) {
          let B = S.getValue(), I = h(S, 2);
          return T(B) || T(I);
        }
        n.exports = {getNextNode: w, getPreviousNode: h, hasPrettierIgnore: A, isLastNodeOfSiblings: a, isNextNodeOfSomeType: p, isNodeOfSomeType: v, isParentOfSomeType: m, isPreviousNodeOfSomeType: d, isVoid: o, isWhitespaceNode: c};
      }}), Nd = Z({"src/language-handlebars/printer-glimmer.js"(e, n) {
        re();
        var {builders: {dedent: t, fill: s, group: a, hardline: r, ifBreak: u, indent: i, join: o, line: c, softline: v}, utils: {getDocParts: m, replaceTextEndOfLine: d}} = Oe(), {getPreferredQuote: p, isNonEmptyArray: f} = Ue(), {locStart: h, locEnd: w} = xd(), T = bd(), {getNextNode: A, getPreviousNode: S, hasPrettierIgnore: B, isLastNodeOfSiblings: I, isNextNodeOfSomeType: k, isNodeOfSomeType: P, isParentOfSomeType: C, isPreviousNodeOfSomeType: D, isVoid: g, isWhitespaceNode: F} = Bd(), l = 2;
        function E(K, he, ye) {
          let Ce = K.getValue();
          if (!Ce)
            return "";
          if (B(K))
            return he.originalText.slice(h(Ce), w(Ce));
          let Ie = he.singleQuote ? "'" : '"';
          switch (Ce.type) {
            case "Block":
            case "Program":
            case "Template":
              return a(K.map(ye, "body"));
            case "ElementNode": {
              let Fe = a(N(K, ye)), me = he.htmlWhitespaceSensitivity === "ignore" && k(K, ["ElementNode"]) ? v : "";
              if (g(Ce))
                return [Fe, me];
              let _ = ["</", Ce.tag, ">"];
              return Ce.children.length === 0 ? [Fe, i(_), me] : he.htmlWhitespaceSensitivity === "ignore" ? [Fe, i(x(K, he, ye)), r, i(_), me] : [Fe, i(a(x(K, he, ye))), i(_), me];
            }
            case "BlockStatement": {
              let Fe = K.getParentNode(1);
              return Fe && Fe.inverse && Fe.inverse.body.length === 1 && Fe.inverse.body[0] === Ce && Fe.inverse.body[0].path.parts[0] === "if" ? [ee(K, ye), ue(K, ye, he), De(K, ye, he)] : [R(K, ye), a([ue(K, ye, he), De(K, ye, he), te(K, ye, he)])];
            }
            case "ElementModifierStatement":
              return a(["{{", pe(K, ye), "}}"]);
            case "MustacheStatement":
              return a([L(Ce), pe(K, ye), M(Ce)]);
            case "SubExpression":
              return a(["(", ce(K, ye), v, ")"]);
            case "AttrNode": {
              let Fe = Ce.value.type === "TextNode";
              if (Fe && Ce.value.chars === "" && h(Ce.value) === w(Ce.value))
                return Ce.name;
              let _ = Fe ? p(Ce.value.chars, Ie).quote : Ce.value.type === "ConcatStatement" ? p(Ce.value.parts.filter((ne) => ne.type === "TextNode").map((ne) => ne.chars).join(""), Ie).quote : "", J = ye("value");
              return [Ce.name, "=", _, Ce.name === "class" && _ ? a(i(J)) : J, _];
            }
            case "ConcatStatement":
              return K.map(ye, "parts");
            case "Hash":
              return o(c, K.map(ye, "pairs"));
            case "HashPair":
              return [Ce.key, "=", ye("value")];
            case "TextNode": {
              let Fe = Ce.chars.replace(/{{/g, "\\{{"), me = z(K);
              if (me) {
                if (me === "class") {
                  let xe = Fe.trim().split(/\s+/).join(" "), Xe = false, _e = false;
                  return C(K, ["ConcatStatement"]) && (D(K, ["MustacheStatement"]) && /^\s/.test(Fe) && (Xe = true), k(K, ["MustacheStatement"]) && /\s$/.test(Fe) && xe !== "" && (_e = true)), [Xe ? c : "", xe, _e ? c : ""];
                }
                return d(Fe);
              }
              let J = /^[\t\n\f\r ]*$/.test(Fe), ne = !S(K), Ee = !A(K);
              if (he.htmlWhitespaceSensitivity !== "ignore") {
                let xe = /^[\t\n\f\r ]*/, Xe = /[\t\n\f\r ]*$/, _e = Ee && C(K, ["Template"]), je = ne && C(K, ["Template"]);
                if (J) {
                  if (je || _e)
                    return "";
                  let se = [c], He = U(Fe);
                  return He && (se = Ae(He)), I(K) && (se = se.map((Me) => t(Me))), se;
                }
                let [Re] = Fe.match(xe), [be] = Fe.match(Xe), Le = [];
                if (Re) {
                  Le = [c];
                  let se = U(Re);
                  se && (Le = Ae(se)), Fe = Fe.replace(xe, "");
                }
                let qe = [];
                if (be) {
                  if (!_e) {
                    qe = [c];
                    let se = U(be);
                    se && (qe = Ae(se)), I(K) && (qe = qe.map((He) => t(He)));
                  }
                  Fe = Fe.replace(Xe, "");
                }
                return [...Le, s(ie(Fe)), ...qe];
              }
              let We = U(Fe), Be = le(Fe), Pe = ge(Fe);
              if ((ne || Ee) && J && C(K, ["Block", "ElementNode", "Template"]))
                return "";
              J && We ? (Be = Math.min(We, l), Pe = 0) : (k(K, ["BlockStatement", "ElementNode"]) && (Pe = Math.max(Pe, 1)), D(K, ["BlockStatement", "ElementNode"]) && (Be = Math.max(Be, 1)));
              let Se = "", Qe = "";
              return Pe === 0 && k(K, ["MustacheStatement"]) && (Qe = " "), Be === 0 && D(K, ["MustacheStatement"]) && (Se = " "), ne && (Be = 0, Se = ""), Ee && (Pe = 0, Qe = ""), Fe = Fe.replace(/^[\t\n\f\r ]+/g, Se).replace(/[\t\n\f\r ]+$/, Qe), [...Ae(Be), s(ie(Fe)), ...Ae(Pe)];
            }
            case "MustacheCommentStatement": {
              let Fe = h(Ce), me = w(Ce), _ = he.originalText.charAt(Fe + 2) === "~", J = he.originalText.charAt(me - 3) === "~", ne = Ce.value.includes("}}") ? "--" : "";
              return ["{{", _ ? "~" : "", "!", ne, Ce.value, ne, J ? "~" : "", "}}"];
            }
            case "PathExpression":
              return Ce.original;
            case "BooleanLiteral":
              return String(Ce.value);
            case "CommentStatement":
              return ["<!--", Ce.value, "-->"];
            case "StringLiteral": {
              if (ke(K)) {
                let Fe = he.singleQuote ? '"' : "'";
                return Ne(Ce.value, Fe);
              }
              return Ne(Ce.value, Ie);
            }
            case "NumberLiteral":
              return String(Ce.value);
            case "UndefinedLiteral":
              return "undefined";
            case "NullLiteral":
              return "null";
            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(Ce.type));
          }
        }
        function y(K, he) {
          return h(K) - h(he);
        }
        function N(K, he) {
          let ye = K.getValue(), Ce = ["attributes", "modifiers", "comments"].filter((Fe) => f(ye[Fe])), Ie = Ce.flatMap((Fe) => ye[Fe]).sort(y);
          for (let Fe of Ce)
            K.each((me) => {
              let _ = Ie.indexOf(me.getValue());
              Ie.splice(_, 1, [c, he()]);
            }, Fe);
          return f(ye.blockParams) && Ie.push(c, ve(ye)), ["<", ye.tag, i(Ie), b(ye)];
        }
        function x(K, he, ye) {
          let Ie = K.getValue().children.every((Fe) => F(Fe));
          return he.htmlWhitespaceSensitivity === "ignore" && Ie ? "" : K.map((Fe, me) => {
            let _ = ye();
            return me === 0 && he.htmlWhitespaceSensitivity === "ignore" ? [v, _] : _;
          }, "children");
        }
        function b(K) {
          return g(K) ? u([v, "/>"], [" />", v]) : u([v, ">"], ">");
        }
        function L(K) {
          let he = K.escaped === false ? "{{{" : "{{", ye = K.strip && K.strip.open ? "~" : "";
          return [he, ye];
        }
        function M(K) {
          let he = K.escaped === false ? "}}}" : "}}";
          return [K.strip && K.strip.close ? "~" : "", he];
        }
        function j(K) {
          let he = L(K), ye = K.openStrip.open ? "~" : "";
          return [he, ye, "#"];
        }
        function $(K) {
          let he = M(K);
          return [K.openStrip.close ? "~" : "", he];
        }
        function V(K) {
          let he = L(K), ye = K.closeStrip.open ? "~" : "";
          return [he, ye, "/"];
        }
        function q(K) {
          let he = M(K);
          return [K.closeStrip.close ? "~" : "", he];
        }
        function Y(K) {
          let he = L(K), ye = K.inverseStrip.open ? "~" : "";
          return [he, ye];
        }
        function H(K) {
          let he = M(K);
          return [K.inverseStrip.close ? "~" : "", he];
        }
        function R(K, he) {
          let ye = K.getValue(), Ce = j(ye), Ie = $(ye), Fe = [de(K, he)], me = ae(K, he);
          if (me && Fe.push(c, me), f(ye.program.blockParams)) {
            let _ = ve(ye.program);
            Fe.push(c, _);
          }
          return a([Ce, i(Fe), v, Ie]);
        }
        function Q(K, he) {
          return [he.htmlWhitespaceSensitivity === "ignore" ? r : "", Y(K), "else", H(K)];
        }
        function ee(K, he) {
          let ye = K.getParentNode(1);
          return [Y(ye), "else if ", ae(K, he), H(ye)];
        }
        function te(K, he, ye) {
          let Ce = K.getValue();
          return ye.htmlWhitespaceSensitivity === "ignore" ? [oe(Ce) ? v : r, V(Ce), he("path"), q(Ce)] : [V(Ce), he("path"), q(Ce)];
        }
        function oe(K) {
          return P(K, ["BlockStatement"]) && K.program.body.every((he) => F(he));
        }
        function W(K) {
          return X(K) && K.inverse.body.length === 1 && P(K.inverse.body[0], ["BlockStatement"]) && K.inverse.body[0].path.parts[0] === "if";
        }
        function X(K) {
          return P(K, ["BlockStatement"]) && K.inverse;
        }
        function ue(K, he, ye) {
          let Ce = K.getValue();
          if (oe(Ce))
            return "";
          let Ie = he("program");
          return ye.htmlWhitespaceSensitivity === "ignore" ? i([r, Ie]) : i(Ie);
        }
        function De(K, he, ye) {
          let Ce = K.getValue(), Ie = he("inverse"), Fe = ye.htmlWhitespaceSensitivity === "ignore" ? [r, Ie] : Ie;
          return W(Ce) ? Fe : X(Ce) ? [Q(Ce, ye), i(Fe)] : "";
        }
        function ie(K) {
          return m(o(c, G(K)));
        }
        function G(K) {
          return K.split(/[\t\n\f\r ]+/);
        }
        function z(K) {
          for (let he = 0; he < 2; he++) {
            let ye = K.getParentNode(he);
            if (ye && ye.type === "AttrNode")
              return ye.name.toLowerCase();
          }
        }
        function U(K) {
          return K = typeof K == "string" ? K : "", K.split(`
`).length - 1;
        }
        function le(K) {
          K = typeof K == "string" ? K : "";
          let he = (K.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
          return U(he);
        }
        function ge(K) {
          K = typeof K == "string" ? K : "";
          let he = (K.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
          return U(he);
        }
        function Ae() {
          let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({length: Math.min(K, l)}).fill(r);
        }
        function Ne(K, he) {
          let {quote: ye, regex: Ce} = p(K, he);
          return [ye, K.replace(Ce, "\\".concat(ye)), ye];
        }
        function ke(K) {
          let he = 0, ye = K.getParentNode(he);
          for (; ye && P(ye, ["SubExpression"]); )
            he++, ye = K.getParentNode(he);
          return !!(ye && P(K.getParentNode(he + 1), ["ConcatStatement"]) && P(K.getParentNode(he + 2), ["AttrNode"]));
        }
        function ce(K, he) {
          let ye = de(K, he), Ce = ae(K, he);
          return Ce ? i([ye, c, a(Ce)]) : ye;
        }
        function pe(K, he) {
          let ye = de(K, he), Ce = ae(K, he);
          return Ce ? [i([ye, c, Ce]), v] : ye;
        }
        function de(K, he) {
          return he("path");
        }
        function ae(K, he) {
          let ye = K.getValue(), Ce = [];
          if (ye.params.length > 0) {
            let Ie = K.map(he, "params");
            Ce.push(...Ie);
          }
          if (ye.hash && ye.hash.pairs.length > 0) {
            let Ie = he("hash");
            Ce.push(Ie);
          }
          return Ce.length === 0 ? "" : o(c, Ce);
        }
        function ve(K) {
          return ["as |", K.blockParams.join(" "), "|"];
        }
        n.exports = {print: E, massageAstNode: T};
      }}), wd = Z({"src/language-handlebars/parsers.js"() {
        re();
      }}), _d = Z({"node_modules/linguist-languages/data/Handlebars.json"(e, n) {
        n.exports = {name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155};
      }}), Pd = Z({"src/language-handlebars/index.js"(e, n) {
        re();
        var t = Bt(), s = Nd(), a = wd(), r = [t(_d(), () => ({since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"]}))], u = {glimmer: s};
        n.exports = {languages: r, printers: u, parsers: a};
      }}), kd = Z({"src/language-graphql/pragma.js"(e, n) {
        re();
        function t(a) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(a);
        }
        function s(a) {
          return `# @format

` + a;
        }
        n.exports = {hasPragma: t, insertPragma: s};
      }}), Id = Z({"src/language-graphql/loc.js"(e, n) {
        re();
        function t(a) {
          return typeof a.start == "number" ? a.start : a.loc && a.loc.start;
        }
        function s(a) {
          return typeof a.end == "number" ? a.end : a.loc && a.loc.end;
        }
        n.exports = {locStart: t, locEnd: s};
      }}), Ld = Z({"src/language-graphql/printer-graphql.js"(e, n) {
        re();
        var {builders: {join: t, hardline: s, line: a, softline: r, group: u, indent: i, ifBreak: o}} = Oe(), {isNextLineEmpty: c, isNonEmptyArray: v} = Ue(), {insertPragma: m} = kd(), {locStart: d, locEnd: p} = Id();
        function f(k, P, C) {
          let D = k.getValue();
          if (!D)
            return "";
          if (typeof D == "string")
            return D;
          switch (D.kind) {
            case "Document": {
              let g = [];
              return k.each((F, l, E) => {
                g.push(C()), l !== E.length - 1 && (g.push(s), c(P.originalText, F.getValue(), p) && g.push(s));
              }, "definitions"), [...g, s];
            }
            case "OperationDefinition": {
              let g = P.originalText[d(D)] !== "{", F = Boolean(D.name);
              return [g ? D.operation : "", g && F ? [" ", C("name")] : "", g && !F && v(D.variableDefinitions) ? " " : "", v(D.variableDefinitions) ? u(["(", i([r, t([o("", ", "), r], k.map(C, "variableDefinitions"))]), r, ")"]) : "", h(k, C, D), D.selectionSet ? !g && !F ? "" : " " : "", C("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", C("name"), v(D.variableDefinitions) ? u(["(", i([r, t([o("", ", "), r], k.map(C, "variableDefinitions"))]), r, ")"]) : "", " on ", C("typeCondition"), h(k, C, D), " ", C("selectionSet")];
            case "SelectionSet":
              return ["{", i([s, t(s, w(k, P, C, "selections"))]), s, "}"];
            case "Field":
              return u([D.alias ? [C("alias"), ": "] : "", C("name"), D.arguments.length > 0 ? u(["(", i([r, t([o("", ", "), r], w(k, P, C, "arguments"))]), r, ")"]) : "", h(k, C, D), D.selectionSet ? " " : "", C("selectionSet")]);
            case "Name":
              return D.value;
            case "StringValue": {
              if (D.block) {
                let g = D.value.replace(/"""/g, "\\$&").split(`
`);
                return g.length === 1 && (g[0] = g[0].trim()), g.every((F) => F === "") && (g.length = 0), t(s, ['"""', ...g, '"""']);
              }
              return ['"', D.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
            }
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return D.value;
            case "BooleanValue":
              return D.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", C("name")];
            case "ListValue":
              return u(["[", i([r, t([o("", ", "), r], k.map(C, "values"))]), r, "]"]);
            case "ObjectValue":
              return u(["{", P.bracketSpacing && D.fields.length > 0 ? " " : "", i([r, t([o("", ", "), r], k.map(C, "fields"))]), r, o("", P.bracketSpacing && D.fields.length > 0 ? " " : ""), "}"]);
            case "ObjectField":
            case "Argument":
              return [C("name"), ": ", C("value")];
            case "Directive":
              return ["@", C("name"), D.arguments.length > 0 ? u(["(", i([r, t([o("", ", "), r], w(k, P, C, "arguments"))]), r, ")"]) : ""];
            case "NamedType":
              return C("name");
            case "VariableDefinition":
              return [C("variable"), ": ", C("type"), D.defaultValue ? [" = ", C("defaultValue")] : "", h(k, C, D)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [C("description"), D.description ? s : "", D.kind === "ObjectTypeExtension" ? "extend " : "", "type ", C("name"), D.interfaces.length > 0 ? [" implements ", ...S(k, P, C)] : "", h(k, C, D), D.fields.length > 0 ? [" {", i([s, t(s, w(k, P, C, "fields"))]), s, "}"] : ""];
            case "FieldDefinition":
              return [C("description"), D.description ? s : "", C("name"), D.arguments.length > 0 ? u(["(", i([r, t([o("", ", "), r], w(k, P, C, "arguments"))]), r, ")"]) : "", ": ", C("type"), h(k, C, D)];
            case "DirectiveDefinition":
              return [C("description"), D.description ? s : "", "directive ", "@", C("name"), D.arguments.length > 0 ? u(["(", i([r, t([o("", ", "), r], w(k, P, C, "arguments"))]), r, ")"]) : "", D.repeatable ? " repeatable" : "", " on ", t(" | ", k.map(C, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [C("description"), D.description ? s : "", D.kind === "EnumTypeExtension" ? "extend " : "", "enum ", C("name"), h(k, C, D), D.values.length > 0 ? [" {", i([s, t(s, w(k, P, C, "values"))]), s, "}"] : ""];
            case "EnumValueDefinition":
              return [C("description"), D.description ? s : "", C("name"), h(k, C, D)];
            case "InputValueDefinition":
              return [C("description"), D.description ? D.description.block ? s : a : "", C("name"), ": ", C("type"), D.defaultValue ? [" = ", C("defaultValue")] : "", h(k, C, D)];
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [C("description"), D.description ? s : "", D.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", C("name"), h(k, C, D), D.fields.length > 0 ? [" {", i([s, t(s, w(k, P, C, "fields"))]), s, "}"] : ""];
            case "SchemaExtension":
              return ["extend schema", h(k, C, D), ...D.operationTypes.length > 0 ? [" {", i([s, t(s, w(k, P, C, "operationTypes"))]), s, "}"] : []];
            case "SchemaDefinition":
              return [C("description"), D.description ? s : "", "schema", h(k, C, D), " {", D.operationTypes.length > 0 ? i([s, t(s, w(k, P, C, "operationTypes"))]) : "", s, "}"];
            case "OperationTypeDefinition":
              return [C("operation"), ": ", C("type")];
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [C("description"), D.description ? s : "", D.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", C("name"), D.interfaces.length > 0 ? [" implements ", ...S(k, P, C)] : "", h(k, C, D), D.fields.length > 0 ? [" {", i([s, t(s, w(k, P, C, "fields"))]), s, "}"] : ""];
            case "FragmentSpread":
              return ["...", C("name"), h(k, C, D)];
            case "InlineFragment":
              return ["...", D.typeCondition ? [" on ", C("typeCondition")] : "", h(k, C, D), " ", C("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return u([C("description"), D.description ? s : "", u([D.kind === "UnionTypeExtension" ? "extend " : "", "union ", C("name"), h(k, C, D), D.types.length > 0 ? [" =", o("", " "), i([o([a, "  "]), t([a, "| "], k.map(C, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [C("description"), D.description ? s : "", D.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", C("name"), h(k, C, D)];
            case "NonNullType":
              return [C("type"), "!"];
            case "ListType":
              return ["[", C("type"), "]"];
            default:
              throw new Error("unknown graphql type: " + JSON.stringify(D.kind));
          }
        }
        function h(k, P, C) {
          if (C.directives.length === 0)
            return "";
          let D = t(a, k.map(P, "directives"));
          return C.kind === "FragmentDefinition" || C.kind === "OperationDefinition" ? u([a, D]) : [" ", u(i([r, D]))];
        }
        function w(k, P, C, D) {
          return k.map((g, F, l) => {
            let E = C();
            return F < l.length - 1 && c(P.originalText, g.getValue(), p) ? [E, s] : E;
          }, D);
        }
        function T(k) {
          return k.kind && k.kind !== "Comment";
        }
        function A(k) {
          let P = k.getValue();
          if (P.kind === "Comment")
            return "#" + P.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(P));
        }
        function S(k, P, C) {
          let D = k.getNode(), g = [], {interfaces: F} = D, l = k.map((E) => C(E), "interfaces");
          for (let E = 0; E < F.length; E++) {
            let y = F[E];
            g.push(l[E]);
            let N = F[E + 1];
            if (N) {
              let x = P.originalText.slice(y.loc.end, N.loc.start), b = x.includes("#"), L = x.replace(/#.*/g, "").trim();
              g.push(L === "," ? "," : " &", b ? a : " ");
            }
          }
          return g;
        }
        function B(k, P) {
          k.kind === "StringValue" && k.block && !k.value.includes(`
`) && (P.value = P.value.trim());
        }
        B.ignoredProperties = new Set(["loc", "comments"]);
        function I(k) {
          var P;
          let C = k.getValue();
          return C == null || (P = C.comments) === null || P === void 0 ? void 0 : P.some((D) => D.value.trim() === "prettier-ignore");
        }
        n.exports = {print: f, massageAstNode: B, hasPrettierIgnore: I, insertPragma: m, printComment: A, canAttachComment: T};
      }}), jd = Z({"src/language-graphql/options.js"(e, n) {
        re();
        var t = Ot();
        n.exports = {bracketSpacing: t.bracketSpacing};
      }}), Od = Z({"src/language-graphql/parsers.js"() {
        re();
      }}), qd = Z({"node_modules/linguist-languages/data/GraphQL.json"(e, n) {
        n.exports = {name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139};
      }}), Md = Z({"src/language-graphql/index.js"(e, n) {
        re();
        var t = Bt(), s = Ld(), a = jd(), r = Od(), u = [t(qd(), () => ({since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"]}))], i = {graphql: s};
        n.exports = {languages: u, options: a, printers: i, parsers: r};
      }}), go = Z({"src/language-markdown/loc.js"(e, n) {
        re();
        function t(a) {
          return a.position.start.offset;
        }
        function s(a) {
          return a.position.end.offset;
        }
        n.exports = {locStart: t, locEnd: s};
      }}), Rd = Z({"src/language-markdown/constants.evaluate.js"(e, n) {
        n.exports = {cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"};
      }}), Kn = Z({"src/language-markdown/utils.js"(e, n) {
        re();
        var {getLast: t} = Ue(), {locStart: s, locEnd: a} = go(), {cjkPattern: r, kPattern: u, punctuationPattern: i} = Rd(), o = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], c = [...o, "tableCell", "paragraph", "heading"], v = new RegExp(u), m = new RegExp(i);
        function d(A, S) {
          let B = "non-cjk", I = "cj-letter", k = "k-letter", P = "cjk-punctuation", C = [], D = (S.proseWrap === "preserve" ? A : A.replace(new RegExp("(".concat(r, `)
(`).concat(r, ")"), "g"), "$1$2")).split(/([\t\n ]+)/);
          for (let [F, l] of D.entries()) {
            if (F % 2 === 1) {
              C.push({type: "whitespace", value: /\n/.test(l) ? `
` : " "});
              continue;
            }
            if ((F === 0 || F === D.length - 1) && l === "")
              continue;
            let E = l.split(new RegExp("(".concat(r, ")")));
            for (let [y, N] of E.entries())
              if (!((y === 0 || y === E.length - 1) && N === "")) {
                if (y % 2 === 0) {
                  N !== "" && g({type: "word", value: N, kind: B, hasLeadingPunctuation: m.test(N[0]), hasTrailingPunctuation: m.test(t(N))});
                  continue;
                }
                g(m.test(N) ? {type: "word", value: N, kind: P, hasLeadingPunctuation: true, hasTrailingPunctuation: true} : {type: "word", value: N, kind: v.test(N) ? k : I, hasLeadingPunctuation: false, hasTrailingPunctuation: false});
              }
          }
          return C;
          function g(F) {
            let l = t(C);
            l && l.type === "word" && (l.kind === B && F.kind === I && !l.hasTrailingPunctuation || l.kind === I && F.kind === B && !F.hasLeadingPunctuation ? C.push({type: "whitespace", value: " "}) : !E(B, P) && ![l.value, F.value].some((y) => /\u3000/.test(y)) && C.push({type: "whitespace", value: ""})), C.push(F);
            function E(y, N) {
              return l.kind === y && F.kind === N || l.kind === N && F.kind === y;
            }
          }
        }
        function p(A, S) {
          let [, B, I, k] = S.slice(A.position.start.offset, A.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
          return {numberText: B, marker: I, leadingSpaces: k};
        }
        function f(A, S) {
          if (!A.ordered || A.children.length < 2)
            return false;
          let B = Number(p(A.children[0], S.originalText).numberText), I = Number(p(A.children[1], S.originalText).numberText);
          if (B === 0 && A.children.length > 2) {
            let k = Number(p(A.children[2], S.originalText).numberText);
            return I === 1 && k === 1;
          }
          return I === 1;
        }
        function h(A, S) {
          let {value: B} = A;
          return A.position.end.offset === S.length && B.endsWith(`
`) && S.endsWith(`
`) ? B.slice(0, -1) : B;
        }
        function w(A, S) {
          return function B(I, k, P) {
            let C = Object.assign({}, S(I, k, P));
            return C.children && (C.children = C.children.map((D, g) => B(D, g, [C, ...P]))), C;
          }(A, null, []);
        }
        function T(A) {
          if ((A == null ? void 0 : A.type) !== "link" || A.children.length !== 1)
            return false;
          let [S] = A.children;
          return s(A) === s(S) && a(A) === a(S);
        }
        n.exports = {mapAst: w, splitText: d, punctuationPattern: i, getFencedCodeBlockValue: h, getOrderedListItemInfo: p, hasGitDiffFriendlyOrderedList: f, INLINE_NODE_TYPES: o, INLINE_NODE_WRAPPER_TYPES: c, isAutolink: T};
      }}), Vd = Z({"src/language-markdown/embed.js"(e, n) {
        re();
        var {inferParserByLanguage: t, getMaxContinuousCount: s} = Ue(), {builders: {hardline: a, markAsRoot: r}, utils: {replaceEndOfLine: u}} = Oe(), i = Xn(), {getFencedCodeBlockValue: o} = Kn();
        function c(v, m, d, p) {
          let f = v.getValue();
          if (f.type === "code" && f.lang !== null) {
            let h = t(f.lang, p);
            if (h) {
              let w = p.__inJsTemplate ? "~" : "`", T = w.repeat(Math.max(3, s(f.value, w) + 1)), A = {parser: h};
              f.lang === "tsx" && (A.filepath = "dummy.tsx");
              let S = d(o(f, p.originalText), A, {stripTrailingHardline: true});
              return r([T, f.lang, f.meta ? " " + f.meta : "", a, u(S), a, T]);
            }
          }
          switch (f.type) {
            case "front-matter":
              return i(f, d);
            case "importExport":
              return [d(f.value, {parser: "babel"}, {stripTrailingHardline: true}), a];
            case "jsx":
              return d("<$>".concat(f.value, "</$>"), {parser: "__js_expression", rootMarker: "mdx"}, {stripTrailingHardline: true});
          }
          return null;
        }
        n.exports = c;
      }}), yo = Z({"src/language-markdown/pragma.js"(e, n) {
        re();
        var t = mo(), s = ["format", "prettier"];
        function a(r) {
          let u = "@(".concat(s.join("|"), ")"), i = new RegExp(["<!--\\s*".concat(u, "\\s*-->"), "{\\s*\\/\\*\\s*".concat(u, "\\s*\\*\\/\\s*}"), `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*`.concat(u, `[^\\S
]*($|
)[\\s\\S]*
.*-->`)].join("|"), "m"), o = r.match(i);
          return (o == null ? void 0 : o.index) === 0;
        }
        n.exports = {startWithPragma: a, hasPragma: (r) => a(t(r).content.trimStart()), insertPragma: (r) => {
          let u = t(r), i = "<!-- @".concat(s[0], " -->");
          return u.frontMatter ? "".concat(u.frontMatter.raw, `

`).concat(i, `

`).concat(u.content) : "".concat(i, `

`).concat(u.content);
        }};
      }}), Wd = Z({"src/language-markdown/print-preprocess.js"(e, n) {
        re();
        var t = it(), {getOrderedListItemInfo: s, mapAst: a, splitText: r} = Kn(), u = /^.$/su;
        function i(T, A) {
          return T = v(T, A), T = p(T), T = c(T), T = h(T, A), T = w(T, A), T = f(T, A), T = o(T), T = m(T), T;
        }
        function o(T) {
          return a(T, (A) => A.type !== "import" && A.type !== "export" ? A : Object.assign(Object.assign({}, A), {}, {type: "importExport"}));
        }
        function c(T) {
          return a(T, (A) => A.type !== "inlineCode" ? A : Object.assign(Object.assign({}, A), {}, {value: A.value.replace(/\s+/g, " ")}));
        }
        function v(T, A) {
          return a(T, (S) => S.type !== "text" || S.value === "*" || S.value === "_" || !u.test(S.value) || S.position.end.offset - S.position.start.offset === S.value.length ? S : Object.assign(Object.assign({}, S), {}, {value: A.originalText.slice(S.position.start.offset, S.position.end.offset)}));
        }
        function m(T) {
          return d(T, (A, S) => A.type === "importExport" && S.type === "importExport", (A, S) => ({type: "importExport", value: A.value + `

` + S.value, position: {start: A.position.start, end: S.position.end}}));
        }
        function d(T, A, S) {
          return a(T, (B) => {
            if (!B.children)
              return B;
            let I = B.children.reduce((k, P) => {
              let C = t(k);
              return C && A(C, P) ? k.splice(-1, 1, S(C, P)) : k.push(P), k;
            }, []);
            return Object.assign(Object.assign({}, B), {}, {children: I});
          });
        }
        function p(T) {
          return d(T, (A, S) => A.type === "text" && S.type === "text", (A, S) => ({type: "text", value: A.value + S.value, position: {start: A.position.start, end: S.position.end}}));
        }
        function f(T, A) {
          return a(T, (S, B, I) => {
            let [k] = I;
            if (S.type !== "text")
              return S;
            let {value: P} = S;
            return k.type === "paragraph" && (B === 0 && (P = P.trimStart()), B === k.children.length - 1 && (P = P.trimEnd())), {type: "sentence", position: S.position, children: r(P, A)};
          });
        }
        function h(T, A) {
          return a(T, (S, B, I) => {
            if (S.type === "code") {
              let k = /^\n?(?: {4,}|\t)/.test(A.originalText.slice(S.position.start.offset, S.position.end.offset));
              if (S.isIndented = k, k)
                for (let P = 0; P < I.length; P++) {
                  let C = I[P];
                  if (C.hasIndentedCodeblock)
                    break;
                  C.type === "list" && (C.hasIndentedCodeblock = true);
                }
            }
            return S;
          });
        }
        function w(T, A) {
          return a(T, (I, k, P) => {
            if (I.type === "list" && I.children.length > 0) {
              for (let C = 0; C < P.length; C++) {
                let D = P[C];
                if (D.type === "list" && !D.isAligned)
                  return I.isAligned = false, I;
              }
              I.isAligned = B(I);
            }
            return I;
          });
          function S(I) {
            return I.children.length === 0 ? -1 : I.children[0].position.start.column - 1;
          }
          function B(I) {
            if (!I.ordered)
              return true;
            let [k, P] = I.children;
            if (s(k, A.originalText).leadingSpaces.length > 1)
              return true;
            let D = S(k);
            if (D === -1)
              return false;
            if (I.children.length === 1)
              return D % A.tabWidth === 0;
            let g = S(P);
            return D !== g ? false : D % A.tabWidth === 0 ? true : s(P, A.originalText).leadingSpaces.length > 1;
          }
        }
        n.exports = i;
      }}), $d = Z({"src/language-markdown/clean.js"(e, n) {
        re();
        var {isFrontMatterNode: t} = Ue(), {startWithPragma: s} = yo(), a = new Set(["position", "raw"]);
        function r(u, i, o) {
          if ((u.type === "front-matter" || u.type === "code" || u.type === "yaml" || u.type === "import" || u.type === "export" || u.type === "jsx") && delete i.value, u.type === "list" && delete i.isAligned, (u.type === "list" || u.type === "listItem") && (delete i.spread, delete i.loose), u.type === "text" || (u.type === "inlineCode" && (i.value = u.value.replace(/[\t\n ]+/g, " ")), u.type === "wikiLink" && (i.value = u.value.trim().replace(/[\t\n]+/g, " ")), (u.type === "definition" || u.type === "linkReference") && (i.label = u.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), (u.type === "definition" || u.type === "link" || u.type === "image") && u.title && (i.title = u.title.replace(/\\(["')])/g, "$1")), o && o.type === "root" && o.children.length > 0 && (o.children[0] === u || t(o.children[0]) && o.children[1] === u) && u.type === "html" && s(u.value)))
            return null;
        }
        r.ignoredProperties = a, n.exports = r;
      }}), Hd = Z({"src/language-markdown/printer-markdown.js"(e, n) {
        re();
        var {getLast: t, getMinNotPresentContinuousCount: s, getMaxContinuousCount: a, getStringWidth: r, isNonEmptyArray: u} = Ue(), {builders: {breakParent: i, join: o, line: c, literalline: v, markAsRoot: m, hardline: d, softline: p, ifBreak: f, fill: h, align: w, indent: T, group: A, hardlineWithoutBreakParent: S}, utils: {normalizeDoc: B, replaceTextEndOfLine: I}, printer: {printDocToString: k}} = Oe(), P = Vd(), {insertPragma: C} = yo(), {locStart: D, locEnd: g} = go(), F = Wd(), l = $d(), {getFencedCodeBlockValue: E, hasGitDiffFriendlyOrderedList: y, splitText: N, punctuationPattern: x, INLINE_NODE_TYPES: b, INLINE_NODE_WRAPPER_TYPES: L, isAutolink: M} = Kn(), j = new Set(["importExport"]), $ = ["heading", "tableCell", "link", "wikiLink"], V = new Set(["listItem", "definition", "footnoteDefinition"]);
        function q(ce, pe, de) {
          let ae = ce.getValue();
          if (le(ce))
            return N(pe.originalText.slice(ae.position.start.offset, ae.position.end.offset), pe).map((ve) => ve.type === "word" ? ve.value : ve.value === "" ? "" : oe(ce, ve.value, pe));
          switch (ae.type) {
            case "front-matter":
              return pe.originalText.slice(ae.position.start.offset, ae.position.end.offset);
            case "root":
              return ae.children.length === 0 ? "" : [B(X(ce, pe, de)), j.has(De(ae).type) ? "" : d];
            case "paragraph":
              return ue(ce, pe, de, {postprocessor: h});
            case "sentence":
              return ue(ce, pe, de);
            case "word": {
              let ve = ae.value.replace(/\*/g, "\\$&").replace(new RegExp(["(^|".concat(x, ")(_+)"), "(_+)(".concat(x, "|$)")].join("|"), "g"), (ye, Ce, Ie, Fe, me) => (Ie ? "".concat(Ce).concat(Ie) : "".concat(Fe).concat(me)).replace(/_/g, "\\_")), K = (ye, Ce, Ie) => ye.type === "sentence" && Ie === 0, he = (ye, Ce, Ie) => M(ye.children[Ie - 1]);
              return ve !== ae.value && (ce.match(void 0, K, he) || ce.match(void 0, K, (ye, Ce, Ie) => ye.type === "emphasis" && Ie === 0, he)) && (ve = ve.replace(/^(\\?[*_])+/, (ye) => ye.replace(/\\/g, ""))), ve;
            }
            case "whitespace": {
              let ve = ce.getParentNode(), K = ve.children.indexOf(ae), he = ve.children[K + 1], ye = he && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(he.value) ? "never" : pe.proseWrap;
              return oe(ce, ae.value, {proseWrap: ye});
            }
            case "emphasis": {
              let ve;
              if (M(ae.children[0]))
                ve = pe.originalText[ae.position.start.offset];
              else {
                let K = ce.getParentNode(), he = K.children.indexOf(ae), ye = K.children[he - 1], Ce = K.children[he + 1];
                ve = ye && ye.type === "sentence" && ye.children.length > 0 && t(ye.children).type === "word" && !t(ye.children).hasTrailingPunctuation || Ce && Ce.type === "sentence" && Ce.children.length > 0 && Ce.children[0].type === "word" && !Ce.children[0].hasLeadingPunctuation || te(ce, "emphasis") ? "*" : "_";
              }
              return [ve, ue(ce, pe, de), ve];
            }
            case "strong":
              return ["**", ue(ce, pe, de), "**"];
            case "delete":
              return ["~~", ue(ce, pe, de), "~~"];
            case "inlineCode": {
              let ve = s(ae.value, "`"), K = "`".repeat(ve || 1), he = ve && !/^\s/.test(ae.value) ? " " : "";
              return [K, he, ae.value, he, K];
            }
            case "wikiLink": {
              let ve = "";
              return pe.proseWrap === "preserve" ? ve = ae.value : ve = ae.value.replace(/[\t\n]+/g, " "), ["[[", ve, "]]"];
            }
            case "link":
              switch (pe.originalText[ae.position.start.offset]) {
                case "<": {
                  let ve = "mailto:", K = ae.url.startsWith(ve) && pe.originalText.slice(ae.position.start.offset + 1, ae.position.start.offset + 1 + ve.length) !== ve ? ae.url.slice(ve.length) : ae.url;
                  return ["<", K, ">"];
                }
                case "[":
                  return ["[", ue(ce, pe, de), "](", ge(ae.url, ")"), Ae(ae.title, pe), ")"];
                default:
                  return pe.originalText.slice(ae.position.start.offset, ae.position.end.offset);
              }
            case "image":
              return ["![", ae.alt || "", "](", ge(ae.url, ")"), Ae(ae.title, pe), ")"];
            case "blockquote":
              return ["> ", w("> ", ue(ce, pe, de))];
            case "heading":
              return ["#".repeat(ae.depth) + " ", ue(ce, pe, de)];
            case "code": {
              if (ae.isIndented) {
                let he = " ".repeat(4);
                return w(he, [he, ...I(ae.value, d)]);
              }
              let ve = pe.__inJsTemplate ? "~" : "`", K = ve.repeat(Math.max(3, a(ae.value, ve) + 1));
              return [K, ae.lang || "", ae.meta ? " " + ae.meta : "", d, ...I(E(ae, pe.originalText), d), d, K];
            }
            case "html": {
              let ve = ce.getParentNode(), K = ve.type === "root" && t(ve.children) === ae ? ae.value.trimEnd() : ae.value, he = /^<!--.*-->$/s.test(K);
              return I(K, he ? d : m(v));
            }
            case "list": {
              let ve = R(ae, ce.getParentNode()), K = y(ae, pe);
              return ue(ce, pe, de, {processor: (he, ye) => {
                let Ce = Fe(), Ie = he.getValue();
                if (Ie.children.length === 2 && Ie.children[1].type === "html" && Ie.children[0].position.start.column !== Ie.children[1].position.start.column)
                  return [Ce, Y(he, pe, de, Ce)];
                return [Ce, w(" ".repeat(Ce.length), Y(he, pe, de, Ce))];
                function Fe() {
                  let me = ae.ordered ? (ye === 0 ? ae.start : K ? 1 : ae.start + ye) + (ve % 2 === 0 ? ". " : ") ") : ve % 2 === 0 ? "- " : "* ";
                  return ae.isAligned || ae.hasIndentedCodeblock ? H(me, pe) : me;
                }
              }});
            }
            case "thematicBreak": {
              let ve = ee(ce, "list");
              return ve === -1 ? "---" : R(ce.getParentNode(ve), ce.getParentNode(ve + 1)) % 2 === 0 ? "***" : "---";
            }
            case "linkReference":
              return ["[", ue(ce, pe, de), "]", ae.referenceType === "full" ? ["[", ae.identifier, "]"] : ae.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference":
              switch (ae.referenceType) {
                case "full":
                  return ["![", ae.alt || "", "][", ae.identifier, "]"];
                default:
                  return ["![", ae.alt, "]", ae.referenceType === "collapsed" ? "[]" : ""];
              }
            case "definition": {
              let ve = pe.proseWrap === "always" ? c : " ";
              return A(["[", ae.identifier, "]:", T([ve, ge(ae.url), ae.title === null ? "" : [ve, Ae(ae.title, pe, false)]])]);
            }
            case "footnote":
              return ["[^", ue(ce, pe, de), "]"];
            case "footnoteReference":
              return ["[^", ae.identifier, "]"];
            case "footnoteDefinition": {
              let ve = ce.getParentNode().children[ce.getName() + 1], K = ae.children.length === 1 && ae.children[0].type === "paragraph" && (pe.proseWrap === "never" || pe.proseWrap === "preserve" && ae.children[0].position.start.line === ae.children[0].position.end.line);
              return ["[^", ae.identifier, "]: ", K ? ue(ce, pe, de) : A([w(" ".repeat(4), ue(ce, pe, de, {processor: (he, ye) => ye === 0 ? A([p, de()]) : de()})), ve && ve.type === "footnoteDefinition" ? p : ""])];
            }
            case "table":
              return W(ce, pe, de);
            case "tableCell":
              return ue(ce, pe, de);
            case "break":
              return /\s/.test(pe.originalText[ae.position.start.offset]) ? ["  ", m(v)] : ["\\", d];
            case "liquidNode":
              return I(ae.value, d);
            case "importExport":
              return [ae.value, d];
            case "esComment":
              return ["{/* ", ae.value, " */}"];
            case "jsx":
              return ae.value;
            case "math":
              return ["$$", d, ae.value ? [...I(ae.value, d), d] : "", "$$"];
            case "inlineMath":
              return pe.originalText.slice(D(ae), g(ae));
            case "tableRow":
            case "listItem":
            default:
              throw new Error("Unknown markdown type ".concat(JSON.stringify(ae.type)));
          }
        }
        function Y(ce, pe, de, ae) {
          let ve = ce.getValue(), K = ve.checked === null ? "" : ve.checked ? "[x] " : "[ ] ";
          return [K, ue(ce, pe, de, {processor: (he, ye) => {
            if (ye === 0 && he.getValue().type !== "list")
              return w(" ".repeat(K.length), de());
            let Ce = " ".repeat(Ne(pe.tabWidth - ae.length, 0, 3));
            return [Ce, w(Ce, de())];
          }})];
        }
        function H(ce, pe) {
          let de = ae();
          return ce + " ".repeat(de >= 4 ? 0 : de);
          function ae() {
            let ve = ce.length % pe.tabWidth;
            return ve === 0 ? 0 : pe.tabWidth - ve;
          }
        }
        function R(ce, pe) {
          return Q(ce, pe, (de) => de.ordered === ce.ordered);
        }
        function Q(ce, pe, de) {
          let ae = -1;
          for (let ve of pe.children)
            if (ve.type === ce.type && de(ve) ? ae++ : ae = -1, ve === ce)
              return ae;
        }
        function ee(ce, pe) {
          let de = Array.isArray(pe) ? pe : [pe], ae = -1, ve;
          for (; ve = ce.getParentNode(++ae); )
            if (de.includes(ve.type))
              return ae;
          return -1;
        }
        function te(ce, pe) {
          let de = ee(ce, pe);
          return de === -1 ? null : ce.getParentNode(de);
        }
        function oe(ce, pe, de) {
          if (de.proseWrap === "preserve" && pe === `
`)
            return d;
          let ae = de.proseWrap === "always" && !te(ce, $);
          return pe !== "" ? ae ? c : " " : ae ? p : "";
        }
        function W(ce, pe, de) {
          let ae = ce.getValue(), ve = [], K = ce.map((me) => me.map((_, J) => {
            let ne = k(de(), pe).formatted, Ee = r(ne);
            return ve[J] = Math.max(ve[J] || 3, Ee), {text: ne, width: Ee};
          }, "children"), "children"), he = Ce(false);
          if (pe.proseWrap !== "never")
            return [i, he];
          let ye = Ce(true);
          return [i, A(f(ye, he))];
          function Ce(me) {
            let _ = [Fe(K[0], me), Ie(me)];
            return K.length > 1 && _.push(o(S, K.slice(1).map((J) => Fe(J, me)))), o(S, _);
          }
          function Ie(me) {
            let _ = ve.map((J, ne) => {
              let Ee = ae.align[ne], We = Ee === "center" || Ee === "left" ? ":" : "-", Be = Ee === "center" || Ee === "right" ? ":" : "-", Pe = me ? "-" : "-".repeat(J - 2);
              return "".concat(We).concat(Pe).concat(Be);
            });
            return "| ".concat(_.join(" | "), " |");
          }
          function Fe(me, _) {
            let J = me.map((ne, Ee) => {
              let {text: We, width: Be} = ne;
              if (_)
                return We;
              let Pe = ve[Ee] - Be, Se = ae.align[Ee], Qe = 0;
              Se === "right" ? Qe = Pe : Se === "center" && (Qe = Math.floor(Pe / 2));
              let xe = Pe - Qe;
              return "".concat(" ".repeat(Qe)).concat(We).concat(" ".repeat(xe));
            });
            return "| ".concat(J.join(" | "), " |");
          }
        }
        function X(ce, pe, de) {
          let ae = [], ve = null, {children: K} = ce.getValue();
          for (let [he, ye] of K.entries())
            switch (ie(ye)) {
              case "start":
                ve === null && (ve = {index: he, offset: ye.position.end.offset});
                break;
              case "end":
                ve !== null && (ae.push({start: ve, end: {index: he, offset: ye.position.start.offset}}), ve = null);
                break;
            }
          return ue(ce, pe, de, {processor: (he, ye) => {
            if (ae.length > 0) {
              let Ce = ae[0];
              if (ye === Ce.start.index)
                return [K[Ce.start.index].value, pe.originalText.slice(Ce.start.offset, Ce.end.offset), K[Ce.end.index].value];
              if (Ce.start.index < ye && ye < Ce.end.index)
                return false;
              if (ye === Ce.end.index)
                return ae.shift(), false;
            }
            return de();
          }});
        }
        function ue(ce, pe, de) {
          let ae = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, {postprocessor: ve} = ae, K = ae.processor || (() => de()), he = ce.getValue(), ye = [], Ce;
          return ce.each((Ie, Fe) => {
            let me = Ie.getValue(), _ = K(Ie, Fe);
            if (_ !== false) {
              let J = {parts: ye, prevNode: Ce, parentNode: he, options: pe};
              G(me, J) && (ye.push(d), Ce && j.has(Ce.type) || (z(me, J) || U(me, J)) && ye.push(d), U(me, J) && ye.push(d)), ye.push(_), Ce = me;
            }
          }, "children"), ve ? ve(ye) : ye;
        }
        function De(ce) {
          let pe = ce;
          for (; u(pe.children); )
            pe = t(pe.children);
          return pe;
        }
        function ie(ce) {
          let pe;
          if (ce.type === "html")
            pe = ce.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
          else {
            let de;
            ce.type === "esComment" ? de = ce : ce.type === "paragraph" && ce.children.length === 1 && ce.children[0].type === "esComment" && (de = ce.children[0]), de && (pe = de.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return pe ? pe[1] || "next" : false;
        }
        function G(ce, pe) {
          let de = pe.parts.length === 0, ae = b.includes(ce.type), ve = ce.type === "html" && L.includes(pe.parentNode.type);
          return !de && !ae && !ve;
        }
        function z(ce, pe) {
          var de, ae, ve;
          let he = (pe.prevNode && pe.prevNode.type) === ce.type && V.has(ce.type), ye = pe.parentNode.type === "listItem" && !pe.parentNode.loose, Ce = ((de = pe.prevNode) === null || de === void 0 ? void 0 : de.type) === "listItem" && pe.prevNode.loose, Ie = ie(pe.prevNode) === "next", Fe = ce.type === "html" && ((ae = pe.prevNode) === null || ae === void 0 ? void 0 : ae.type) === "html" && pe.prevNode.position.end.line + 1 === ce.position.start.line, me = ce.type === "html" && pe.parentNode.type === "listItem" && ((ve = pe.prevNode) === null || ve === void 0 ? void 0 : ve.type) === "paragraph" && pe.prevNode.position.end.line + 1 === ce.position.start.line;
          return Ce || !(he || ye || Ie || Fe || me);
        }
        function U(ce, pe) {
          let de = pe.prevNode && pe.prevNode.type === "list", ae = ce.type === "code" && ce.isIndented;
          return de && ae;
        }
        function le(ce) {
          let pe = te(ce, ["linkReference", "imageReference"]);
          return pe && (pe.type !== "linkReference" || pe.referenceType !== "full");
        }
        function ge(ce) {
          let pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], de = [" ", ...Array.isArray(pe) ? pe : [pe]];
          return new RegExp(de.map((ae) => "\\".concat(ae)).join("|")).test(ce) ? "<".concat(ce, ">") : ce;
        }
        function Ae(ce, pe) {
          let de = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
          if (!ce)
            return "";
          if (de)
            return " " + Ae(ce, pe, false);
          if (ce = ce.replace(/\\(["')])/g, "$1"), ce.includes('"') && ce.includes("'") && !ce.includes(")"))
            return "(".concat(ce, ")");
          let ae = ce.split("'").length - 1, ve = ce.split('"').length - 1, K = ae > ve ? '"' : ve > ae || pe.singleQuote ? "'" : '"';
          return ce = ce.replace(/\\/, "\\\\"), ce = ce.replace(new RegExp("(".concat(K, ")"), "g"), "\\$1"), "".concat(K).concat(ce).concat(K);
        }
        function Ne(ce, pe, de) {
          return ce < pe ? pe : ce > de ? de : ce;
        }
        function ke(ce) {
          let pe = Number(ce.getName());
          if (pe === 0)
            return false;
          let de = ce.getParentNode().children[pe - 1];
          return ie(de) === "next";
        }
        n.exports = {preprocess: F, print: q, embed: P, massageAstNode: l, hasPrettierIgnore: ke, insertPragma: C};
      }}), Gd = Z({"src/language-markdown/options.js"(e, n) {
        re();
        var t = Ot();
        n.exports = {proseWrap: t.proseWrap, singleQuote: t.singleQuote};
      }}), Jd = Z({"src/language-markdown/parsers.js"() {
        re();
      }}), da = Z({"node_modules/linguist-languages/data/Markdown.json"(e, n) {
        n.exports = {name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222};
      }}), Ud = Z({"src/language-markdown/index.js"(e, n) {
        re();
        var t = Bt(), s = Hd(), a = Gd(), r = Jd(), u = [t(da(), (o) => ({since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...o.filenames, "README"], extensions: o.extensions.filter((c) => c !== ".mdx")})), t(da(), () => ({name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"]}))], i = {mdast: s};
        n.exports = {languages: u, options: a, printers: i, parsers: r};
      }}), zd = Z({"src/language-html/clean.js"(e, n) {
        re();
        var {isFrontMatterNode: t} = Ue(), s = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function a(r, u) {
          if (r.type === "text" || r.type === "comment" || t(r) || r.type === "yaml" || r.type === "toml")
            return null;
          r.type === "attribute" && delete u.value, r.type === "docType" && delete u.value;
        }
        a.ignoredProperties = s, n.exports = a;
      }}), Xd = Z({"src/language-html/constants.evaluate.js"(e, n) {
        n.exports = {CSS_DISPLAY_TAGS: {area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block"}, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: {listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap"}, CSS_WHITE_SPACE_DEFAULT: "normal"};
      }}), Kd = Z({"src/language-html/utils/is-unknown-namespace.js"(e, n) {
        re();
        function t(s) {
          return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace);
        }
        n.exports = t;
      }}), qt = Z({"src/language-html/utils/index.js"(e, n) {
        re();
        var {inferParserByLanguage: t, isFrontMatterNode: s} = Ue(), {builders: {line: a, hardline: r, join: u}, utils: {getDocParts: i, replaceTextEndOfLine: o}} = Oe(), {CSS_DISPLAY_TAGS: c, CSS_DISPLAY_DEFAULT: v, CSS_WHITE_SPACE_TAGS: m, CSS_WHITE_SPACE_DEFAULT: d} = Xd(), p = Kd(), f = new Set(["	", `
`, "\f", "\r", " "]), h = (_) => _.replace(/^[\t\n\f\r ]+/, ""), w = (_) => _.replace(/[\t\n\f\r ]+$/, ""), T = (_) => h(w(_)), A = (_) => _.replace(/^[\t\f\r ]*\n/g, ""), S = (_) => A(w(_)), B = (_) => _.split(/[\t\n\f\r ]+/), I = (_) => _.match(/^[\t\n\f\r ]*/)[0], k = (_) => {
          let [, J, ne, Ee] = _.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
          return {leadingWhitespace: J, trailingWhitespace: Ee, text: ne};
        }, P = (_) => /[\t\n\f\r ]/.test(_);
        function C(_, J) {
          return !!(_.type === "ieConditionalComment" && _.lastChild && !_.lastChild.isSelfClosing && !_.lastChild.endSourceSpan || _.type === "ieConditionalComment" && !_.complete || le(_) && _.children.some((ne) => ne.type !== "text" && ne.type !== "interpolation") || ye(_, J) && !l(_) && _.type !== "interpolation");
        }
        function D(_) {
          return _.type === "attribute" || !_.parent || !_.prev ? false : g(_.prev);
        }
        function g(_) {
          return _.type === "comment" && _.value.trim() === "prettier-ignore";
        }
        function F(_) {
          return _.type === "text" || _.type === "comment";
        }
        function l(_) {
          return _.type === "element" && (_.fullName === "script" || _.fullName === "style" || _.fullName === "svg:style" || p(_) && (_.name === "script" || _.name === "style"));
        }
        function E(_) {
          return _.children && !l(_);
        }
        function y(_) {
          return l(_) || _.type === "interpolation" || N(_);
        }
        function N(_) {
          return ke(_).startsWith("pre");
        }
        function x(_, J) {
          let ne = Ee();
          if (ne && !_.prev && _.parent && _.parent.tagDefinition && _.parent.tagDefinition.ignoreFirstLf)
            return _.type === "interpolation";
          return ne;
          function Ee() {
            return s(_) ? false : (_.type === "text" || _.type === "interpolation") && _.prev && (_.prev.type === "text" || _.prev.type === "interpolation") ? true : !_.parent || _.parent.cssDisplay === "none" ? false : le(_.parent) ? true : !(!_.prev && (_.parent.type === "root" || le(_) && _.parent || l(_.parent) || K(_.parent, J) || !De(_.parent.cssDisplay)) || _.prev && !z(_.prev.cssDisplay));
          }
        }
        function b(_, J) {
          return s(_) ? false : (_.type === "text" || _.type === "interpolation") && _.next && (_.next.type === "text" || _.next.type === "interpolation") ? true : !_.parent || _.parent.cssDisplay === "none" ? false : le(_.parent) ? true : !(!_.next && (_.parent.type === "root" || le(_) && _.parent || l(_.parent) || K(_.parent, J) || !ie(_.parent.cssDisplay)) || _.next && !G(_.next.cssDisplay));
        }
        function L(_) {
          return U(_.cssDisplay) && !l(_);
        }
        function M(_) {
          return s(_) || _.next && _.sourceSpan.end && _.sourceSpan.end.line + 1 < _.next.sourceSpan.start.line;
        }
        function j(_) {
          return $(_) || _.type === "element" && _.children.length > 0 && (["body", "script", "style"].includes(_.name) || _.children.some((J) => te(J))) || _.firstChild && _.firstChild === _.lastChild && _.firstChild.type !== "text" && H(_.firstChild) && (!_.lastChild.isTrailingSpaceSensitive || R(_.lastChild));
        }
        function $(_) {
          return _.type === "element" && _.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(_.name) || _.cssDisplay.startsWith("table") && _.cssDisplay !== "table-cell");
        }
        function V(_) {
          return Q(_) || _.prev && q(_.prev) || Y(_);
        }
        function q(_) {
          return Q(_) || _.type === "element" && _.fullName === "br" || Y(_);
        }
        function Y(_) {
          return H(_) && R(_);
        }
        function H(_) {
          return _.hasLeadingSpaces && (_.prev ? _.prev.sourceSpan.end.line < _.sourceSpan.start.line : _.parent.type === "root" || _.parent.startSourceSpan.end.line < _.sourceSpan.start.line);
        }
        function R(_) {
          return _.hasTrailingSpaces && (_.next ? _.next.sourceSpan.start.line > _.sourceSpan.end.line : _.parent.type === "root" || _.parent.endSourceSpan && _.parent.endSourceSpan.start.line > _.sourceSpan.end.line);
        }
        function Q(_) {
          switch (_.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return true;
            case "element":
              return ["script", "select"].includes(_.name);
          }
          return false;
        }
        function ee(_) {
          return _.lastChild ? ee(_.lastChild) : _;
        }
        function te(_) {
          return _.children && _.children.some((J) => J.type !== "text");
        }
        function oe(_) {
          let {type: J, lang: ne} = _.attrMap;
          if (J === "module" || J === "text/javascript" || J === "text/babel" || J === "application/javascript" || ne === "jsx")
            return "babel";
          if (J === "application/x-typescript" || ne === "ts" || ne === "tsx")
            return "typescript";
          if (J === "text/markdown")
            return "markdown";
          if (J === "text/html")
            return "html";
          if (J && (J.endsWith("json") || J.endsWith("importmap")) || J === "speculationrules")
            return "json";
          if (J === "text/x-handlebars-template")
            return "glimmer";
        }
        function W(_, J) {
          let {lang: ne} = _.attrMap;
          if (!ne || ne === "postcss" || ne === "css")
            return "css";
          if (ne === "scss")
            return "scss";
          if (ne === "less")
            return "less";
          if (ne === "stylus")
            return t("stylus", J);
        }
        function X(_, J) {
          if (_.name === "script" && !_.attrMap.src)
            return !_.attrMap.lang && !_.attrMap.type ? "babel" : oe(_);
          if (_.name === "style")
            return W(_, J);
          if (J && ye(_, J))
            return oe(_) || !("src" in _.attrMap) && t(_.attrMap.lang, J);
        }
        function ue(_) {
          return _ === "block" || _ === "list-item" || _.startsWith("table");
        }
        function De(_) {
          return !ue(_) && _ !== "inline-block";
        }
        function ie(_) {
          return !ue(_) && _ !== "inline-block";
        }
        function G(_) {
          return !ue(_);
        }
        function z(_) {
          return !ue(_);
        }
        function U(_) {
          return !ue(_) && _ !== "inline-block";
        }
        function le(_) {
          return ke(_).startsWith("pre");
        }
        function ge(_, J) {
          let ne = 0;
          for (let Ee = _.stack.length - 1; Ee >= 0; Ee--) {
            let We = _.stack[Ee];
            We && typeof We == "object" && !Array.isArray(We) && J(We) && ne++;
          }
          return ne;
        }
        function Ae(_, J) {
          let ne = _;
          for (; ne; ) {
            if (J(ne))
              return true;
            ne = ne.parent;
          }
          return false;
        }
        function Ne(_, J) {
          if (_.prev && _.prev.type === "comment") {
            let Ee = _.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (Ee)
              return Ee[1];
          }
          let ne = false;
          if (_.type === "element" && _.namespace === "svg")
            if (Ae(_, (Ee) => Ee.fullName === "svg:foreignObject"))
              ne = true;
            else
              return _.name === "svg" ? "inline-block" : "block";
          switch (J.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return J.parser === "vue" && _.parent && _.parent.type === "root" ? "block" : _.type === "element" && (!_.namespace || ne || p(_)) && c[_.name] || v;
          }
        }
        function ke(_) {
          return _.type === "element" && (!_.namespace || p(_)) && m[_.name] || d;
        }
        function ce(_) {
          let J = Number.POSITIVE_INFINITY;
          for (let ne of _.split(`
`)) {
            if (ne.length === 0)
              continue;
            if (!f.has(ne[0]))
              return 0;
            let Ee = I(ne).length;
            ne.length !== Ee && Ee < J && (J = Ee);
          }
          return J === Number.POSITIVE_INFINITY ? 0 : J;
        }
        function pe(_) {
          let J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce(_);
          return J === 0 ? _ : _.split(`
`).map((ne) => ne.slice(J)).join(`
`);
        }
        function de(_, J) {
          let ne = 0;
          for (let Ee = 0; Ee < _.length; Ee++)
            _[Ee] === J && ne++;
          return ne;
        }
        function ae(_) {
          return _.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }
        var ve = new Set(["template", "style", "script"]);
        function K(_, J) {
          return he(_, J) && !ve.has(_.fullName);
        }
        function he(_, J) {
          return J.parser === "vue" && _.type === "element" && _.parent.type === "root" && _.fullName.toLowerCase() !== "html";
        }
        function ye(_, J) {
          return he(_, J) && (K(_, J) || _.attrMap.lang && _.attrMap.lang !== "html");
        }
        function Ce(_) {
          let J = _.fullName;
          return J.charAt(0) === "#" || J === "slot-scope" || J === "v-slot" || J.startsWith("v-slot:");
        }
        function Ie(_, J) {
          let ne = _.parent;
          if (!he(ne, J))
            return false;
          let Ee = ne.fullName, We = _.fullName;
          return Ee === "script" && We === "setup" || Ee === "style" && We === "vars";
        }
        function Fe(_) {
          let J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.value;
          return _.parent.isWhitespaceSensitive ? _.parent.isIndentationSensitive ? o(J) : o(pe(S(J)), r) : i(u(a, B(J)));
        }
        function me(_, J) {
          return he(_, J) && _.name === "script";
        }
        n.exports = {htmlTrim: T, htmlTrimPreserveIndentation: S, hasHtmlWhitespace: P, getLeadingAndTrailingHtmlWhitespace: k, canHaveInterpolation: E, countChars: de, countParents: ge, dedentString: pe, forceBreakChildren: $, forceBreakContent: j, forceNextEmptyLine: M, getLastDescendant: ee, getNodeCssStyleDisplay: Ne, getNodeCssStyleWhiteSpace: ke, hasPrettierIgnore: D, inferScriptParser: X, isVueCustomBlock: K, isVueNonHtmlBlock: ye, isVueScriptTag: me, isVueSlotAttribute: Ce, isVueSfcBindingsAttribute: Ie, isVueSfcBlock: he, isDanglingSpaceSensitiveNode: L, isIndentationSensitiveNode: N, isLeadingSpaceSensitiveNode: x, isPreLikeNode: le, isScriptLikeTag: l, isTextLikeNode: F, isTrailingSpaceSensitiveNode: b, isWhitespaceSensitiveNode: y, isUnknownNamespace: p, preferHardlineAsLeadingSpaces: V, preferHardlineAsTrailingSpaces: q, shouldPreserveContent: C, unescapeQuoteEntities: ae, getTextValueParts: Fe};
      }}), Yd = Z({"node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true}), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function n(i) {
          return i >= e.$TAB && i <= e.$SPACE || i == e.$NBSP;
        }
        e.isWhitespace = n;
        function t(i) {
          return e.$0 <= i && i <= e.$9;
        }
        e.isDigit = t;
        function s(i) {
          return i >= e.$a && i <= e.$z || i >= e.$A && i <= e.$Z;
        }
        e.isAsciiLetter = s;
        function a(i) {
          return i >= e.$a && i <= e.$f || i >= e.$A && i <= e.$F || t(i);
        }
        e.isAsciiHexDigit = a;
        function r(i) {
          return i === e.$LF || i === e.$CR;
        }
        e.isNewLine = r;
        function u(i) {
          return e.$0 <= i && i <= e.$7;
        }
        e.isOctalDigit = u;
      }}), Qd = Z({"node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = class {
          constructor(s, a, r) {
            this.filePath = s, this.name = a, this.members = r;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
          }
        };
        e.StaticSymbol = n;
        var t = class {
          constructor() {
            this.cache = new Map();
          }
          get(s, a, r) {
            r = r || [];
            let u = r.length ? ".".concat(r.join(".")) : "", i = '"'.concat(s, '".').concat(a).concat(u), o = this.cache.get(i);
            return o || (o = new n(s, a, r), this.cache.set(i, o)), o;
          }
        };
        e.StaticSymbolCache = t;
      }}), Zd = Z({"node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = /-+([a-z0-9])/g;
        function t(l) {
          return l.replace(n, function() {
            for (var E = arguments.length, y = new Array(E), N = 0; N < E; N++)
              y[N] = arguments[N];
            return y[1].toUpperCase();
          });
        }
        e.dashCaseToCamelCase = t;
        function s(l, E) {
          return r(l, ":", E);
        }
        e.splitAtColon = s;
        function a(l, E) {
          return r(l, ".", E);
        }
        e.splitAtPeriod = a;
        function r(l, E, y) {
          let N = l.indexOf(E);
          return N == -1 ? y : [l.slice(0, N).trim(), l.slice(N + 1).trim()];
        }
        function u(l, E, y) {
          return Array.isArray(l) ? E.visitArray(l, y) : A(l) ? E.visitStringMap(l, y) : l == null || typeof l == "string" || typeof l == "number" || typeof l == "boolean" ? E.visitPrimitive(l, y) : E.visitOther(l, y);
        }
        e.visitValue = u;
        function i(l) {
          return l != null;
        }
        e.isDefined = i;
        function o(l) {
          return l === void 0 ? null : l;
        }
        e.noUndefined = o;
        var c = class {
          visitArray(l, E) {
            return l.map((y) => u(y, this, E));
          }
          visitStringMap(l, E) {
            let y = {};
            return Object.keys(l).forEach((N) => {
              y[N] = u(l[N], this, E);
            }), y;
          }
          visitPrimitive(l, E) {
            return l;
          }
          visitOther(l, E) {
            return l;
          }
        };
        e.ValueTransformer = c, e.SyncAsync = {assertSync: (l) => {
          if (k(l))
            throw new Error("Illegal state: value cannot be a promise");
          return l;
        }, then: (l, E) => k(l) ? l.then(E) : E(l), all: (l) => l.some(k) ? Promise.all(l) : l};
        function v(l) {
          throw new Error("Internal Error: ".concat(l));
        }
        e.error = v;
        function m(l, E) {
          let y = Error(l);
          return y[d] = true, E && (y[p] = E), y;
        }
        e.syntaxError = m;
        var d = "ngSyntaxError", p = "ngParseErrors";
        function f(l) {
          return l[d];
        }
        e.isSyntaxError = f;
        function h(l) {
          return l[p] || [];
        }
        e.getParseErrors = h;
        function w(l) {
          return l.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        e.escapeRegExp = w;
        var T = Object.getPrototypeOf({});
        function A(l) {
          return typeof l == "object" && l !== null && Object.getPrototypeOf(l) === T;
        }
        function S(l) {
          let E = "";
          for (let y = 0; y < l.length; y++) {
            let N = l.charCodeAt(y);
            if (N >= 55296 && N <= 56319 && l.length > y + 1) {
              let x = l.charCodeAt(y + 1);
              x >= 56320 && x <= 57343 && (y++, N = (N - 55296 << 10) + x - 56320 + 65536);
            }
            N <= 127 ? E += String.fromCharCode(N) : N <= 2047 ? E += String.fromCharCode(N >> 6 & 31 | 192, N & 63 | 128) : N <= 65535 ? E += String.fromCharCode(N >> 12 | 224, N >> 6 & 63 | 128, N & 63 | 128) : N <= 2097151 && (E += String.fromCharCode(N >> 18 & 7 | 240, N >> 12 & 63 | 128, N >> 6 & 63 | 128, N & 63 | 128));
          }
          return E;
        }
        e.utf8Encode = S;
        function B(l) {
          if (typeof l == "string")
            return l;
          if (l instanceof Array)
            return "[" + l.map(B).join(", ") + "]";
          if (l == null)
            return "" + l;
          if (l.overriddenName)
            return "".concat(l.overriddenName);
          if (l.name)
            return "".concat(l.name);
          if (!l.toString)
            return "object";
          let E = l.toString();
          if (E == null)
            return "" + E;
          let y = E.indexOf(`
`);
          return y === -1 ? E : E.substring(0, y);
        }
        e.stringify = B;
        function I(l) {
          return typeof l == "function" && l.hasOwnProperty("__forward_ref__") ? l() : l;
        }
        e.resolveForwardRef = I;
        function k(l) {
          return !!l && typeof l.then == "function";
        }
        e.isPromise = k;
        var P = class {
          constructor(l) {
            this.full = l;
            let E = l.split(".");
            this.major = E[0], this.minor = E[1], this.patch = E.slice(2).join(".");
          }
        };
        e.Version = P;
        var C = typeof window < "u" && window, D = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, g = typeof globalThis < "u" && globalThis, F = g || C || D;
        e.global = F;
      }}), eg = Z({"node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = Qd(), t = Zd(), s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function a(y) {
          return y.replace(/\W/g, "_");
        }
        e.sanitizeIdentifier = a;
        var r = 0;
        function u(y) {
          if (!y || !y.reference)
            return null;
          let N = y.reference;
          if (N instanceof n.StaticSymbol)
            return N.name;
          if (N.__anonymousType)
            return N.__anonymousType;
          let x = t.stringify(N);
          return x.indexOf("(") >= 0 ? (x = "anonymous_".concat(r++), N.__anonymousType = x) : x = a(x), x;
        }
        e.identifierName = u;
        function i(y) {
          let N = y.reference;
          return N instanceof n.StaticSymbol ? N.filePath : "./".concat(t.stringify(N));
        }
        e.identifierModuleUrl = i;
        function o(y, N) {
          return "View_".concat(u({reference: y}), "_").concat(N);
        }
        e.viewClassName = o;
        function c(y) {
          return "RenderType_".concat(u({reference: y}));
        }
        e.rendererTypeName = c;
        function v(y) {
          return "HostView_".concat(u({reference: y}));
        }
        e.hostViewClassName = v;
        function m(y) {
          return "".concat(u({reference: y}), "NgFactory");
        }
        e.componentFactoryName = m;
        var d;
        (function(y) {
          y[y.Pipe = 0] = "Pipe", y[y.Directive = 1] = "Directive", y[y.NgModule = 2] = "NgModule", y[y.Injectable = 3] = "Injectable";
        })(d = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function p(y) {
          return y.value != null ? a(y.value) : u(y.identifier);
        }
        e.tokenName = p;
        function f(y) {
          return y.identifier != null ? y.identifier.reference : y.value;
        }
        e.tokenReference = f;
        var h = class {
          constructor() {
            let {moduleUrl: y, styles: N, styleUrls: x} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = y || null, this.styles = k(N), this.styleUrls = k(x);
          }
        };
        e.CompileStylesheetMetadata = h;
        var w = class {
          constructor(y) {
            let {encapsulation: N, template: x, templateUrl: b, htmlAst: L, styles: M, styleUrls: j, externalStylesheets: $, animations: V, ngContentSelectors: q, interpolation: Y, isInline: H, preserveWhitespaces: R} = y;
            if (this.encapsulation = N, this.template = x, this.templateUrl = b, this.htmlAst = L, this.styles = k(M), this.styleUrls = k(j), this.externalStylesheets = k($), this.animations = V ? C(V) : [], this.ngContentSelectors = q || [], Y && Y.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = Y, this.isInline = H, this.preserveWhitespaces = R;
          }
          toSummary() {
            return {ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations};
          }
        };
        e.CompileTemplateMetadata = w;
        var T = class {
          static create(y) {
            let {isHost: N, type: x, isComponent: b, selector: L, exportAs: M, changeDetection: j, inputs: $, outputs: V, host: q, providers: Y, viewProviders: H, queries: R, guards: Q, viewQueries: ee, entryComponents: te, template: oe, componentViewType: W, rendererType: X, componentFactory: ue} = y, De = {}, ie = {}, G = {};
            q != null && Object.keys(q).forEach((le) => {
              let ge = q[le], Ae = le.match(s);
              Ae === null ? G[le] = ge : Ae[1] != null ? ie[Ae[1]] = ge : Ae[2] != null && (De[Ae[2]] = ge);
            });
            let z = {};
            $ != null && $.forEach((le) => {
              let ge = t.splitAtColon(le, [le, le]);
              z[ge[0]] = ge[1];
            });
            let U = {};
            return V != null && V.forEach((le) => {
              let ge = t.splitAtColon(le, [le, le]);
              U[ge[0]] = ge[1];
            }), new T({isHost: N, type: x, isComponent: !!b, selector: L, exportAs: M, changeDetection: j, inputs: z, outputs: U, hostListeners: De, hostProperties: ie, hostAttributes: G, providers: Y, viewProviders: H, queries: R, guards: Q, viewQueries: ee, entryComponents: te, template: oe, componentViewType: W, rendererType: X, componentFactory: ue});
          }
          constructor(y) {
            let {isHost: N, type: x, isComponent: b, selector: L, exportAs: M, changeDetection: j, inputs: $, outputs: V, hostListeners: q, hostProperties: Y, hostAttributes: H, providers: R, viewProviders: Q, queries: ee, guards: te, viewQueries: oe, entryComponents: W, template: X, componentViewType: ue, rendererType: De, componentFactory: ie} = y;
            this.isHost = !!N, this.type = x, this.isComponent = b, this.selector = L, this.exportAs = M, this.changeDetection = j, this.inputs = $, this.outputs = V, this.hostListeners = q, this.hostProperties = Y, this.hostAttributes = H, this.providers = k(R), this.viewProviders = k(Q), this.queries = k(ee), this.guards = te, this.viewQueries = k(oe), this.entryComponents = k(W), this.template = X, this.componentViewType = ue, this.rendererType = De, this.componentFactory = ie;
          }
          toSummary() {
            return {summaryKind: d.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory};
          }
        };
        e.CompileDirectiveMetadata = T;
        var A = class {
          constructor(y) {
            let {type: N, name: x, pure: b} = y;
            this.type = N, this.name = x, this.pure = !!b;
          }
          toSummary() {
            return {summaryKind: d.Pipe, type: this.type, name: this.name, pure: this.pure};
          }
        };
        e.CompilePipeMetadata = A;
        var S = class {
        };
        e.CompileShallowModuleMetadata = S;
        var B = class {
          constructor(y) {
            let {type: N, providers: x, declaredDirectives: b, exportedDirectives: L, declaredPipes: M, exportedPipes: j, entryComponents: $, bootstrapComponents: V, importedModules: q, exportedModules: Y, schemas: H, transitiveModule: R, id: Q} = y;
            this.type = N || null, this.declaredDirectives = k(b), this.exportedDirectives = k(L), this.declaredPipes = k(M), this.exportedPipes = k(j), this.providers = k(x), this.entryComponents = k($), this.bootstrapComponents = k(V), this.importedModules = k(q), this.exportedModules = k(Y), this.schemas = k(H), this.id = Q || null, this.transitiveModule = R || null;
          }
          toSummary() {
            let y = this.transitiveModule;
            return {summaryKind: d.NgModule, type: this.type, entryComponents: y.entryComponents, providers: y.providers, modules: y.modules, exportedDirectives: y.exportedDirectives, exportedPipes: y.exportedPipes};
          }
        };
        e.CompileNgModuleMetadata = B;
        var I = class {
          constructor() {
            this.directivesSet = new Set(), this.directives = [], this.exportedDirectivesSet = new Set(), this.exportedDirectives = [], this.pipesSet = new Set(), this.pipes = [], this.exportedPipesSet = new Set(), this.exportedPipes = [], this.modulesSet = new Set(), this.modules = [], this.entryComponentsSet = new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(y, N) {
            this.providers.push({provider: y, module: N});
          }
          addDirective(y) {
            this.directivesSet.has(y.reference) || (this.directivesSet.add(y.reference), this.directives.push(y));
          }
          addExportedDirective(y) {
            this.exportedDirectivesSet.has(y.reference) || (this.exportedDirectivesSet.add(y.reference), this.exportedDirectives.push(y));
          }
          addPipe(y) {
            this.pipesSet.has(y.reference) || (this.pipesSet.add(y.reference), this.pipes.push(y));
          }
          addExportedPipe(y) {
            this.exportedPipesSet.has(y.reference) || (this.exportedPipesSet.add(y.reference), this.exportedPipes.push(y));
          }
          addModule(y) {
            this.modulesSet.has(y.reference) || (this.modulesSet.add(y.reference), this.modules.push(y));
          }
          addEntryComponent(y) {
            this.entryComponentsSet.has(y.componentType) || (this.entryComponentsSet.add(y.componentType), this.entryComponents.push(y));
          }
        };
        e.TransitiveCompileNgModuleMetadata = I;
        function k(y) {
          return y || [];
        }
        var P = class {
          constructor(y, N) {
            let {useClass: x, useValue: b, useExisting: L, useFactory: M, deps: j, multi: $} = N;
            this.token = y, this.useClass = x || null, this.useValue = b, this.useExisting = L, this.useFactory = M || null, this.dependencies = j || null, this.multi = !!$;
          }
        };
        e.ProviderMeta = P;
        function C(y) {
          return y.reduce((N, x) => {
            let b = Array.isArray(x) ? C(x) : x;
            return N.concat(b);
          }, []);
        }
        e.flatten = C;
        function D(y) {
          return y.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function g(y, N, x) {
          let b;
          return x.isInline ? N.type.reference instanceof n.StaticSymbol ? b = "".concat(N.type.reference.filePath, ".").concat(N.type.reference.name, ".html") : b = "".concat(u(y), "/").concat(u(N.type), ".html") : b = x.templateUrl, N.type.reference instanceof n.StaticSymbol ? b : D(b);
        }
        e.templateSourceUrl = g;
        function F(y, N) {
          let x = y.moduleUrl.split(/\/\\/g), b = x[x.length - 1];
          return D("css/".concat(N).concat(b, ".ngstyle.js"));
        }
        e.sharedStylesheetJitUrl = F;
        function l(y) {
          return D("".concat(u(y.type), "/module.ngfactory.js"));
        }
        e.ngModuleJitUrl = l;
        function E(y, N) {
          return D("".concat(u(y), "/").concat(u(N.type), ".ngfactory.js"));
        }
        e.templateJitUrl = E;
      }}), tg = Z({"node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
        re(), Object.defineProperty(e, "__esModule", {value: true});
        var n = Yd(), t = eg(), s = class {
          constructor(v, m, d, p) {
            this.file = v, this.offset = m, this.line = d, this.col = p;
          }
          toString() {
            return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
          }
          moveBy(v) {
            let m = this.file.content, d = m.length, p = this.offset, f = this.line, h = this.col;
            for (; p > 0 && v < 0; )
              if (p--, v++, m.charCodeAt(p) == n.$LF) {
                f--;
                let T = m.substr(0, p - 1).lastIndexOf(String.fromCharCode(n.$LF));
                h = T > 0 ? p - T : p;
              } else
                h--;
            for (; p < d && v > 0; ) {
              let w = m.charCodeAt(p);
              p++, v--, w == n.$LF ? (f++, h = 0) : h++;
            }
            return new s(this.file, p, f, h);
          }
          getContext(v, m) {
            let d = this.file.content, p = this.offset;
            if (p != null) {
              p > d.length - 1 && (p = d.length - 1);
              let f = p, h = 0, w = 0;
              for (; h < v && p > 0 && (p--, h++, !(d[p] == `
` && ++w == m)); )
                ;
              for (h = 0, w = 0; h < v && f < d.length - 1 && (f++, h++, !(d[f] == `
` && ++w == m)); )
                ;
              return {before: d.substring(p, this.offset), after: d.substring(this.offset, f + 1)};
            }
            return null;
          }
        };
        e.ParseLocation = s;
        var a = class {
          constructor(v, m) {
            this.content = v, this.url = m;
          }
        };
        e.ParseSourceFile = a;
        var r = class {
          constructor(v, m) {
            let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = v, this.end = m, this.details = d;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        e.ParseSourceSpan = r, e.EMPTY_PARSE_LOCATION = new s(new a("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new r(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var u;
        (function(v) {
          v[v.WARNING = 0] = "WARNING", v[v.ERROR = 1] = "ERROR";
        })(u = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var i = class {
          constructor(v, m) {
            let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.ERROR;
            this.span = v, this.msg = m, this.level = d;
          }
          contextualMessage() {
            let v = this.span.start.getContext(100, 3);
            return v ? "".concat(this.msg, ' ("').concat(v.before, "[").concat(u[this.level], " ->]").concat(v.after, '")') : this.msg;
          }
          toString() {
            let v = this.span.details ? ", ".concat(this.span.details) : "";
            return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(v);
          }
        };
        e.ParseError = i;
        function o(v, m) {
          let d = t.identifierModuleUrl(m), p = d != null ? "in ".concat(v, " ").concat(t.identifierName(m), " in ").concat(d) : "in ".concat(v, " ").concat(t.identifierName(m)), f = new a("", p);
          return new r(new s(f, -1, -1, -1), new s(f, -1, -1, -1));
        }
        e.typeSourceSpan = o;
        function c(v, m, d) {
          let p = "in ".concat(v, " ").concat(m, " in ").concat(d), f = new a("", p);
          return new r(new s(f, -1, -1, -1), new s(f, -1, -1, -1));
        }
        e.r3JitTypeSourceSpan = c;
      }}), rg = Z({"src/language-html/print-preprocess.js"(e, n) {
        re();
        var {ParseSourceSpan: t} = tg(), {htmlTrim: s, getLeadingAndTrailingHtmlWhitespace: a, hasHtmlWhitespace: r, canHaveInterpolation: u, getNodeCssStyleDisplay: i, isDanglingSpaceSensitiveNode: o, isIndentationSensitiveNode: c, isLeadingSpaceSensitiveNode: v, isTrailingSpaceSensitiveNode: m, isWhitespaceSensitiveNode: d, isVueScriptTag: p} = qt(), f = [w, T, S, I, k, D, P, C, g, B, F];
        function h(l, E) {
          for (let y of f)
            y(l, E);
          return l;
        }
        function w(l) {
          l.walk((E) => {
            if (E.type === "element" && E.tagDefinition.ignoreFirstLf && E.children.length > 0 && E.children[0].type === "text" && E.children[0].value[0] === `
`) {
              let y = E.children[0];
              y.value.length === 1 ? E.removeChild(y) : y.value = y.value.slice(1);
            }
          });
        }
        function T(l) {
          let E = (y) => y.type === "element" && y.prev && y.prev.type === "ieConditionalStartComment" && y.prev.sourceSpan.end.offset === y.startSourceSpan.start.offset && y.firstChild && y.firstChild.type === "ieConditionalEndComment" && y.firstChild.sourceSpan.start.offset === y.startSourceSpan.end.offset;
          l.walk((y) => {
            if (y.children)
              for (let N = 0; N < y.children.length; N++) {
                let x = y.children[N];
                if (!E(x))
                  continue;
                let b = x.prev, L = x.firstChild;
                y.removeChild(b), N--;
                let M = new t(b.sourceSpan.start, L.sourceSpan.end), j = new t(M.start, x.sourceSpan.end);
                x.condition = b.condition, x.sourceSpan = j, x.startSourceSpan = M, x.removeChild(L);
              }
          });
        }
        function A(l, E, y) {
          l.walk((N) => {
            if (N.children)
              for (let x = 0; x < N.children.length; x++) {
                let b = N.children[x];
                if (b.type !== "text" && !E(b))
                  continue;
                b.type !== "text" && (b.type = "text", b.value = y(b));
                let L = b.prev;
                !L || L.type !== "text" || (L.value += b.value, L.sourceSpan = new t(L.sourceSpan.start, b.sourceSpan.end), N.removeChild(b), x--);
              }
          });
        }
        function S(l) {
          return A(l, (E) => E.type === "cdata", (E) => "<![CDATA[".concat(E.value, "]]>"));
        }
        function B(l) {
          let E = (y) => y.type === "element" && y.attrs.length === 0 && y.children.length === 1 && y.firstChild.type === "text" && !r(y.children[0].value) && !y.firstChild.hasLeadingSpaces && !y.firstChild.hasTrailingSpaces && y.isLeadingSpaceSensitive && !y.hasLeadingSpaces && y.isTrailingSpaceSensitive && !y.hasTrailingSpaces && y.prev && y.prev.type === "text" && y.next && y.next.type === "text";
          l.walk((y) => {
            if (y.children)
              for (let N = 0; N < y.children.length; N++) {
                let x = y.children[N];
                if (!E(x))
                  continue;
                let b = x.prev, L = x.next;
                b.value += "<".concat(x.rawName, ">") + x.firstChild.value + "</".concat(x.rawName, ">") + L.value, b.sourceSpan = new t(b.sourceSpan.start, L.sourceSpan.end), b.isTrailingSpaceSensitive = L.isTrailingSpaceSensitive, b.hasTrailingSpaces = L.hasTrailingSpaces, y.removeChild(x), N--, y.removeChild(L);
              }
          });
        }
        function I(l, E) {
          if (E.parser === "html")
            return;
          let y = /{{(.+?)}}/s;
          l.walk((N) => {
            if (!!u(N))
              for (let x of N.children) {
                if (x.type !== "text")
                  continue;
                let b = x.sourceSpan.start, L = null, M = x.value.split(y);
                for (let j = 0; j < M.length; j++, b = L) {
                  let $ = M[j];
                  if (j % 2 === 0) {
                    L = b.moveBy($.length), $.length > 0 && N.insertChildBefore(x, {type: "text", value: $, sourceSpan: new t(b, L)});
                    continue;
                  }
                  L = b.moveBy($.length + 4), N.insertChildBefore(x, {type: "interpolation", sourceSpan: new t(b, L), children: $.length === 0 ? [] : [{type: "text", value: $, sourceSpan: new t(b.moveBy(2), L.moveBy(-2))}]});
                }
                N.removeChild(x);
              }
          });
        }
        function k(l) {
          l.walk((E) => {
            if (!E.children)
              return;
            if (E.children.length === 0 || E.children.length === 1 && E.children[0].type === "text" && s(E.children[0].value).length === 0) {
              E.hasDanglingSpaces = E.children.length > 0, E.children = [];
              return;
            }
            let y = d(E), N = c(E);
            if (!y)
              for (let x = 0; x < E.children.length; x++) {
                let b = E.children[x];
                if (b.type !== "text")
                  continue;
                let {leadingWhitespace: L, text: M, trailingWhitespace: j} = a(b.value), $ = b.prev, V = b.next;
                M ? (b.value = M, b.sourceSpan = new t(b.sourceSpan.start.moveBy(L.length), b.sourceSpan.end.moveBy(-j.length)), L && ($ && ($.hasTrailingSpaces = true), b.hasLeadingSpaces = true), j && (b.hasTrailingSpaces = true, V && (V.hasLeadingSpaces = true))) : (E.removeChild(b), x--, (L || j) && ($ && ($.hasTrailingSpaces = true), V && (V.hasLeadingSpaces = true)));
              }
            E.isWhitespaceSensitive = y, E.isIndentationSensitive = N;
          });
        }
        function P(l) {
          l.walk((E) => {
            E.isSelfClosing = !E.children || E.type === "element" && (E.tagDefinition.isVoid || E.startSourceSpan === E.endSourceSpan);
          });
        }
        function C(l, E) {
          l.walk((y) => {
            y.type === "element" && (y.hasHtmComponentClosingTag = y.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(E.originalText.slice(y.endSourceSpan.start.offset, y.endSourceSpan.end.offset)));
          });
        }
        function D(l, E) {
          l.walk((y) => {
            y.cssDisplay = i(y, E);
          });
        }
        function g(l, E) {
          l.walk((y) => {
            let {children: N} = y;
            if (!!N) {
              if (N.length === 0) {
                y.isDanglingSpaceSensitive = o(y);
                return;
              }
              for (let x of N)
                x.isLeadingSpaceSensitive = v(x, E), x.isTrailingSpaceSensitive = m(x, E);
              for (let x = 0; x < N.length; x++) {
                let b = N[x];
                b.isLeadingSpaceSensitive = (x === 0 || b.prev.isTrailingSpaceSensitive) && b.isLeadingSpaceSensitive, b.isTrailingSpaceSensitive = (x === N.length - 1 || b.next.isLeadingSpaceSensitive) && b.isTrailingSpaceSensitive;
              }
            }
          });
        }
        function F(l, E) {
          if (E.parser === "vue") {
            let y = l.children.find((x) => p(x, E));
            if (!y)
              return;
            let {lang: N} = y.attrMap;
            (N === "ts" || N === "typescript") && (E.__should_parse_vue_template_with_ts = true);
          }
        }
        n.exports = h;
      }}), ng = Z({"src/language-html/pragma.js"(e, n) {
        re();
        function t(a) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(a);
        }
        function s(a) {
          return `<!-- @format -->

` + a.replace(/^\s*\n/, "");
        }
        n.exports = {hasPragma: t, insertPragma: s};
      }}), Yn = Z({"src/language-html/loc.js"(e, n) {
        re();
        function t(a) {
          return a.sourceSpan.start.offset;
        }
        function s(a) {
          return a.sourceSpan.end.offset;
        }
        n.exports = {locStart: t, locEnd: s};
      }}), er = Z({"src/language-html/print/tag.js"(e, n) {
        re();
        var t = Xt(), {isNonEmptyArray: s} = Ue(), {builders: {indent: a, join: r, line: u, softline: i, hardline: o}, utils: {replaceTextEndOfLine: c}} = Oe(), {locStart: v, locEnd: m} = Yn(), {isTextLikeNode: d, getLastDescendant: p, isPreLikeNode: f, hasPrettierIgnore: h, shouldPreserveContent: w, isVueSfcBlock: T} = qt();
        function A(q, Y) {
          return [q.isSelfClosing ? "" : S(q, Y), B(q, Y)];
        }
        function S(q, Y) {
          return q.lastChild && l(q.lastChild) ? "" : [I(q, Y), P(q, Y)];
        }
        function B(q, Y) {
          return (q.next ? g(q.next) : F(q.parent)) ? "" : [C(q, Y), k(q, Y)];
        }
        function I(q, Y) {
          return F(q) ? C(q.lastChild, Y) : "";
        }
        function k(q, Y) {
          return l(q) ? P(q.parent, Y) : E(q) ? $(q.next) : "";
        }
        function P(q, Y) {
          if (t(!q.isSelfClosing), D(q, Y))
            return "";
          switch (q.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (q.hasHtmComponentClosingTag)
                return "<//";
            default:
              return "</".concat(q.rawName);
          }
        }
        function C(q, Y) {
          if (D(q, Y))
            return "";
          switch (q.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";
            case "ieConditionalStartComment":
              return "]><!-->";
            case "interpolation":
              return "}}";
            case "element":
              if (q.isSelfClosing)
                return "/>";
            default:
              return ">";
          }
        }
        function D(q, Y) {
          return !q.isSelfClosing && !q.endSourceSpan && (h(q) || w(q.parent, Y));
        }
        function g(q) {
          return q.prev && q.prev.type !== "docType" && !d(q.prev) && q.isLeadingSpaceSensitive && !q.hasLeadingSpaces;
        }
        function F(q) {
          return q.lastChild && q.lastChild.isTrailingSpaceSensitive && !q.lastChild.hasTrailingSpaces && !d(p(q.lastChild)) && !f(q);
        }
        function l(q) {
          return !q.next && !q.hasTrailingSpaces && q.isTrailingSpaceSensitive && d(p(q));
        }
        function E(q) {
          return q.next && !d(q.next) && d(q) && q.isTrailingSpaceSensitive && !q.hasTrailingSpaces;
        }
        function y(q) {
          let Y = q.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
          return Y ? Y[1] ? Y[1].split(/\s+/) : true : false;
        }
        function N(q) {
          return !q.prev && q.isLeadingSpaceSensitive && !q.hasLeadingSpaces;
        }
        function x(q, Y, H) {
          let R = q.getValue();
          if (!s(R.attrs))
            return R.isSelfClosing ? " " : "";
          let Q = R.prev && R.prev.type === "comment" && y(R.prev.value), ee = typeof Q == "boolean" ? () => Q : Array.isArray(Q) ? (De) => Q.includes(De.rawName) : () => false, te = q.map((De) => {
            let ie = De.getValue();
            return ee(ie) ? c(Y.originalText.slice(v(ie), m(ie))) : H();
          }, "attrs"), oe = R.type === "element" && R.fullName === "script" && R.attrs.length === 1 && R.attrs[0].fullName === "src" && R.children.length === 0, X = Y.singleAttributePerLine && R.attrs.length > 1 && !T(R, Y) ? o : u, ue = [a([oe ? " " : u, r(X, te)])];
          return R.firstChild && N(R.firstChild) || R.isSelfClosing && F(R.parent) || oe ? ue.push(R.isSelfClosing ? " " : "") : ue.push(Y.bracketSameLine ? R.isSelfClosing ? " " : "" : R.isSelfClosing ? u : i), ue;
        }
        function b(q) {
          return q.firstChild && N(q.firstChild) ? "" : V(q);
        }
        function L(q, Y, H) {
          let R = q.getValue();
          return [M(R, Y), x(q, Y, H), R.isSelfClosing ? "" : b(R)];
        }
        function M(q, Y) {
          return q.prev && E(q.prev) ? "" : [j(q, Y), $(q)];
        }
        function j(q, Y) {
          return N(q) ? V(q.parent) : g(q) ? C(q.prev, Y) : "";
        }
        function $(q) {
          switch (q.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return "<!--[if ".concat(q.condition);
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return "<!DOCTYPE";
            case "element":
              if (q.condition)
                return "<!--[if ".concat(q.condition, "]><!--><").concat(q.rawName);
            default:
              return "<".concat(q.rawName);
          }
        }
        function V(q) {
          switch (t(!q.isSelfClosing), q.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (q.condition)
                return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        n.exports = {printClosingTag: A, printClosingTagStart: S, printClosingTagStartMarker: P, printClosingTagEndMarker: C, printClosingTagSuffix: k, printClosingTagEnd: B, needsToBorrowLastChildClosingTagEndMarker: F, needsToBorrowParentClosingTagStartMarker: l, needsToBorrowPrevClosingTagEndMarker: g, printOpeningTag: L, printOpeningTagStart: M, printOpeningTagPrefix: j, printOpeningTagStartMarker: $, printOpeningTagEndMarker: V, needsToBorrowNextOpeningTagStartMarker: E, needsToBorrowParentOpeningTagEndMarker: N};
      }}), ug = Z({"node_modules/parse-srcset/src/parse-srcset.js"(e, n) {
        re(), function(t, s) {
          typeof n == "object" && n.exports ? n.exports = s() : t.parseSrcset = s();
        }(e, function() {
          return function(t, s) {
            var a = s && s.logger || console;
            function r(P) {
              return P === " " || P === "	" || P === `
` || P === "\f" || P === "\r";
            }
            function u(P) {
              var C, D = P.exec(t.substring(S));
              if (D)
                return C = D[0], S += C.length, C;
            }
            for (var i = t.length, o = /^[ \t\n\r\u000c]+/, c = /^[, \t\n\r\u000c]+/, v = /^[^ \t\n\r\u000c]+/, m = /[,]+$/, d = /^\d+$/, p = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, f, h, w, T, A, S = 0, B = []; ; ) {
              if (u(c), S >= i)
                return B;
              f = u(v), h = [], f.slice(-1) === "," ? (f = f.replace(m, ""), k()) : I();
            }
            function I() {
              for (u(o), w = "", T = "in descriptor"; ; ) {
                if (A = t.charAt(S), T === "in descriptor")
                  if (r(A))
                    w && (h.push(w), w = "", T = "after descriptor");
                  else if (A === ",") {
                    S += 1, w && h.push(w), k();
                    return;
                  } else if (A === "(")
                    w = w + A, T = "in parens";
                  else if (A === "") {
                    w && h.push(w), k();
                    return;
                  } else
                    w = w + A;
                else if (T === "in parens")
                  if (A === ")")
                    w = w + A, T = "in descriptor";
                  else if (A === "") {
                    h.push(w), k();
                    return;
                  } else
                    w = w + A;
                else if (T === "after descriptor" && !r(A))
                  if (A === "") {
                    k();
                    return;
                  } else
                    T = "in descriptor", S -= 1;
                S += 1;
              }
            }
            function k() {
              var P = false, C, D, g, F, l = {}, E, y, N, x, b;
              for (F = 0; F < h.length; F++)
                E = h[F], y = E[E.length - 1], N = E.substring(0, E.length - 1), x = parseInt(N, 10), b = parseFloat(N), d.test(N) && y === "w" ? ((C || D) && (P = true), x === 0 ? P = true : C = x) : p.test(N) && y === "x" ? ((C || D || g) && (P = true), b < 0 ? P = true : D = b) : d.test(N) && y === "h" ? ((g || D) && (P = true), x === 0 ? P = true : g = x) : P = true;
              P ? a && a.error && a.error("Invalid srcset descriptor found in '" + t + "' at '" + E + "'.") : (l.url = f, C && (l.w = C), D && (l.d = D), g && (l.h = g), B.push(l));
            }
          };
        });
      }}), sg = Z({"src/language-html/syntax-attribute.js"(e, n) {
        re();
        var t = ug(), {builders: {ifBreak: s, join: a, line: r}} = Oe();
        function u(o) {
          let c = t(o, {logger: {error(I) {
            throw new Error(I);
          }}}), v = c.some((I) => {
            let {w: k} = I;
            return k;
          }), m = c.some((I) => {
            let {h: k} = I;
            return k;
          }), d = c.some((I) => {
            let {d: k} = I;
            return k;
          });
          if (v + m + d > 1)
            throw new Error("Mixed descriptor in srcset is not supported");
          let p = v ? "w" : m ? "h" : "d", f = v ? "w" : m ? "h" : "x", h = (I) => Math.max(...I), w = c.map((I) => I.url), T = h(w.map((I) => I.length)), A = c.map((I) => I[p]).map((I) => I ? I.toString() : ""), S = A.map((I) => {
            let k = I.indexOf(".");
            return k === -1 ? I.length : k;
          }), B = h(S);
          return a([",", r], w.map((I, k) => {
            let P = [I], C = A[k];
            if (C) {
              let D = T - I.length + 1, g = B - S[k], F = " ".repeat(D + g);
              P.push(s(F, " "), C + f);
            }
            return P;
          }));
        }
        function i(o) {
          return o.trim().split(/\s+/).join(" ");
        }
        n.exports = {printImgSrcset: u, printClassNames: i};
      }}), ig = Z({"src/language-html/syntax-vue.js"(e, n) {
        re();
        var {builders: {group: t}} = Oe();
        function s(i, o) {
          let {left: c, operator: v, right: m} = a(i);
          return [t(o("function _(".concat(c, ") {}"), {parser: "babel", __isVueForBindingLeft: true})), " ", v, " ", o(m, {parser: "__js_expression"}, {stripTrailingHardline: true})];
        }
        function a(i) {
          let o = /(.*?)\s+(in|of)\s+(.*)/s, c = /,([^,\]}]*)(?:,([^,\]}]*))?$/, v = /^\(|\)$/g, m = i.match(o);
          if (!m)
            return;
          let d = {};
          if (d.for = m[3].trim(), !d.for)
            return;
          let p = m[1].trim().replace(v, ""), f = p.match(c);
          f ? (d.alias = p.replace(c, ""), d.iterator1 = f[1].trim(), f[2] && (d.iterator2 = f[2].trim())) : d.alias = p;
          let h = [d.alias, d.iterator1, d.iterator2];
          if (!h.some((w, T) => !w && (T === 0 || h.slice(T + 1).some(Boolean))))
            return {left: h.filter(Boolean).join(","), operator: m[2], right: d.for};
        }
        function r(i, o) {
          return o("function _(".concat(i, ") {}"), {parser: "babel", __isVueBindings: true});
        }
        function u(i) {
          let o = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, c = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, v = i.trim();
          return o.test(v) || c.test(v);
        }
        n.exports = {isVueEventBindingExpression: u, printVueFor: s, printVueBindings: r};
      }}), ho = Z({"src/language-html/get-node-content.js"(e, n) {
        re();
        var {needsToBorrowParentClosingTagStartMarker: t, printClosingTagStartMarker: s, needsToBorrowLastChildClosingTagEndMarker: a, printClosingTagEndMarker: r, needsToBorrowParentOpeningTagEndMarker: u, printOpeningTagEndMarker: i} = er();
        function o(c, v) {
          let m = c.startSourceSpan.end.offset;
          c.firstChild && u(c.firstChild) && (m -= i(c).length);
          let d = c.endSourceSpan.start.offset;
          return c.lastChild && t(c.lastChild) ? d += s(c, v).length : a(c) && (d -= r(c.lastChild, v).length), v.originalText.slice(m, d);
        }
        n.exports = o;
      }}), ag = Z({"src/language-html/embed.js"(e, n) {
        re();
        var {builders: {breakParent: t, group: s, hardline: a, indent: r, line: u, fill: i, softline: o}, utils: {mapDoc: c, replaceTextEndOfLine: v}} = Oe(), m = Xn(), {printClosingTag: d, printClosingTagSuffix: p, needsToBorrowPrevClosingTagEndMarker: f, printOpeningTagPrefix: h, printOpeningTag: w} = er(), {printImgSrcset: T, printClassNames: A} = sg(), {printVueFor: S, printVueBindings: B, isVueEventBindingExpression: I} = ig(), {isScriptLikeTag: k, isVueNonHtmlBlock: P, inferScriptParser: C, htmlTrimPreserveIndentation: D, dedentString: g, unescapeQuoteEntities: F, isVueSlotAttribute: l, isVueSfcBindingsAttribute: E, getTextValueParts: y} = qt(), N = ho();
        function x(L, M, j) {
          let $ = (te) => new RegExp(te.join("|")).test(L.fullName), V = () => F(L.value), q = false, Y = (te, oe) => {
            let W = te.type === "NGRoot" ? te.node.type === "NGMicrosyntax" && te.node.body.length === 1 && te.node.body[0].type === "NGMicrosyntaxExpression" ? te.node.body[0].expression : te.node : te.type === "JsExpressionRoot" ? te.node : te;
            W && (W.type === "ObjectExpression" || W.type === "ArrayExpression" || oe.parser === "__vue_expression" && (W.type === "TemplateLiteral" || W.type === "StringLiteral")) && (q = true);
          }, H = (te) => s(te), R = function(te) {
            let oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            return s([r([o, te]), oe ? o : ""]);
          }, Q = (te) => q ? H(te) : R(te), ee = (te, oe) => M(te, Object.assign({__onHtmlBindingRoot: Y, __embeddedInHtml: true}, oe));
          if (L.fullName === "srcset" && (L.parent.fullName === "img" || L.parent.fullName === "source"))
            return R(T(V()));
          if (L.fullName === "class" && !j.parentParser) {
            let te = V();
            if (!te.includes("{{"))
              return A(te);
          }
          if (L.fullName === "style" && !j.parentParser) {
            let te = V();
            if (!te.includes("{{"))
              return R(ee(te, {parser: "css", __isHTMLStyleAttribute: true}));
          }
          if (j.parser === "vue") {
            if (L.fullName === "v-for")
              return S(V(), ee);
            if (l(L) || E(L, j))
              return B(V(), ee);
            let te = ["^@", "^v-on:"], oe = ["^:", "^v-bind:"], W = ["^v-"];
            if ($(te)) {
              let X = V(), ue = I(X) ? "__js_expression" : j.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
              return Q(ee(X, {parser: ue}));
            }
            if ($(oe))
              return Q(ee(V(), {parser: "__vue_expression"}));
            if ($(W))
              return Q(ee(V(), {parser: "__js_expression"}));
          }
          if (j.parser === "angular") {
            let te = (G, z) => ee(G, Object.assign(Object.assign({}, z), {}, {trailingComma: "none"})), oe = ["^\\*"], W = ["^\\(.+\\)$", "^on-"], X = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], ue = ["^i18n(-.+)?$"];
            if ($(W))
              return Q(te(V(), {parser: "__ng_action"}));
            if ($(X))
              return Q(te(V(), {parser: "__ng_binding"}));
            if ($(ue)) {
              let G = V().trim();
              return R(i(y(L, G)), !G.includes("@@"));
            }
            if ($(oe))
              return Q(te(V(), {parser: "__ng_directive"}));
            let De = /{{(.+?)}}/s, ie = V();
            if (De.test(ie)) {
              let G = [];
              for (let [z, U] of ie.split(De).entries())
                if (z % 2 === 0)
                  G.push(v(U));
                else
                  try {
                    G.push(s(["{{", r([u, te(U, {parser: "__ng_interpolation", __isInHtmlInterpolation: true})]), u, "}}"]));
                  } catch (e2) {
                    G.push("{{", v(U), "}}");
                  }
              return s(G);
            }
          }
          return null;
        }
        function b(L, M, j, $) {
          let V = L.getValue();
          switch (V.type) {
            case "element": {
              if (k(V) || V.type === "interpolation")
                return;
              if (!V.isSelfClosing && P(V, $)) {
                let q = C(V, $);
                if (!q)
                  return;
                let Y = N(V, $), H = /^\s*$/.test(Y), R = "";
                return H || (R = j(D(Y), {parser: q, __embeddedInHtml: true}, {stripTrailingHardline: true}), H = R === ""), [h(V, $), s(w(L, $, M)), H ? "" : a, R, H ? "" : a, d(V, $), p(V, $)];
              }
              break;
            }
            case "text": {
              if (k(V.parent)) {
                let q = C(V.parent, $);
                if (q) {
                  let Y = q === "markdown" ? g(V.value.replace(/^[^\S\n]*\n/, "")) : V.value, H = {parser: q, __embeddedInHtml: true};
                  if ($.parser === "html" && q === "babel") {
                    let R = "script", {attrMap: Q} = V.parent;
                    Q && (Q.type === "module" || Q.type === "text/babel" && Q["data-type"] === "module") && (R = "module"), H.__babelSourceType = R;
                  }
                  return [t, h(V, $), j(Y, H, {stripTrailingHardline: true}), p(V, $)];
                }
              } else if (V.parent.type === "interpolation") {
                let q = {__isInHtmlInterpolation: true, __embeddedInHtml: true};
                return $.parser === "angular" ? (q.parser = "__ng_interpolation", q.trailingComma = "none") : $.parser === "vue" ? q.parser = $.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : q.parser = "__js_expression", [r([u, j(V.value, q, {stripTrailingHardline: true})]), V.parent.next && f(V.parent.next) ? " " : u];
              }
              break;
            }
            case "attribute": {
              if (!V.value)
                break;
              if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test($.originalText.slice(V.valueSpan.start.offset, V.valueSpan.end.offset)))
                return [V.rawName, "=", V.value];
              if ($.parser === "lwc" && /^{.*}$/s.test($.originalText.slice(V.valueSpan.start.offset, V.valueSpan.end.offset)))
                return [V.rawName, "=", V.value];
              let q = x(V, (Y, H) => j(Y, Object.assign({__isInHtmlAttribute: true, __embeddedInHtml: true}, H), {stripTrailingHardline: true}), $);
              if (q)
                return [V.rawName, '="', s(c(q, (Y) => typeof Y == "string" ? Y.replace(/"/g, "&quot;") : Y)), '"'];
              break;
            }
            case "front-matter":
              return m(V, j);
          }
        }
        n.exports = b;
      }}), vo = Z({"src/language-html/print/children.js"(e, n) {
        re();
        var {builders: {breakParent: t, group: s, ifBreak: a, line: r, softline: u, hardline: i}, utils: {replaceTextEndOfLine: o}} = Oe(), {locStart: c, locEnd: v} = Yn(), {forceBreakChildren: m, forceNextEmptyLine: d, isTextLikeNode: p, hasPrettierIgnore: f, preferHardlineAsLeadingSpaces: h} = qt(), {printOpeningTagPrefix: w, needsToBorrowNextOpeningTagStartMarker: T, printOpeningTagStartMarker: A, needsToBorrowPrevClosingTagEndMarker: S, printClosingTagEndMarker: B, printClosingTagSuffix: I, needsToBorrowParentClosingTagStartMarker: k} = er();
        function P(g, F, l) {
          let E = g.getValue();
          return f(E) ? [w(E, F), ...o(F.originalText.slice(c(E) + (E.prev && T(E.prev) ? A(E).length : 0), v(E) - (E.next && S(E.next) ? B(E, F).length : 0))), I(E, F)] : l();
        }
        function C(g, F) {
          return p(g) && p(F) ? g.isTrailingSpaceSensitive ? g.hasTrailingSpaces ? h(F) ? i : r : "" : h(F) ? i : u : T(g) && (f(F) || F.firstChild || F.isSelfClosing || F.type === "element" && F.attrs.length > 0) || g.type === "element" && g.isSelfClosing && S(F) ? "" : !F.isLeadingSpaceSensitive || h(F) || S(F) && g.lastChild && k(g.lastChild) && g.lastChild.lastChild && k(g.lastChild.lastChild) ? i : F.hasLeadingSpaces ? r : u;
        }
        function D(g, F, l) {
          let E = g.getValue();
          if (m(E))
            return [t, ...g.map((N) => {
              let x = N.getValue(), b = x.prev ? C(x.prev, x) : "";
              return [b ? [b, d(x.prev) ? i : ""] : "", P(N, F, l)];
            }, "children")];
          let y = E.children.map(() => Symbol(""));
          return g.map((N, x) => {
            let b = N.getValue();
            if (p(b)) {
              if (b.prev && p(b.prev)) {
                let Y = C(b.prev, b);
                if (Y)
                  return d(b.prev) ? [i, i, P(N, F, l)] : [Y, P(N, F, l)];
              }
              return P(N, F, l);
            }
            let L = [], M = [], j = [], $ = [], V = b.prev ? C(b.prev, b) : "", q = b.next ? C(b, b.next) : "";
            return V && (d(b.prev) ? L.push(i, i) : V === i ? L.push(i) : p(b.prev) ? M.push(V) : M.push(a("", u, {groupId: y[x - 1]}))), q && (d(b) ? p(b.next) && $.push(i, i) : q === i ? p(b.next) && $.push(i) : j.push(q)), [...L, s([...M, s([P(N, F, l), ...j], {id: y[x]})]), ...$];
          }, "children");
        }
        n.exports = {printChildren: D};
      }}), og = Z({"src/language-html/print/element.js"(e, n) {
        re();
        var {builders: {breakParent: t, dedentToRoot: s, group: a, ifBreak: r, indentIfBreak: u, indent: i, line: o, softline: c}, utils: {replaceTextEndOfLine: v}} = Oe(), m = ho(), {shouldPreserveContent: d, isScriptLikeTag: p, isVueCustomBlock: f, countParents: h, forceBreakContent: w} = qt(), {printOpeningTagPrefix: T, printOpeningTag: A, printClosingTagSuffix: S, printClosingTag: B, needsToBorrowPrevClosingTagEndMarker: I, needsToBorrowLastChildClosingTagEndMarker: k} = er(), {printChildren: P} = vo();
        function C(D, g, F) {
          let l = D.getValue();
          if (d(l, g))
            return [T(l, g), a(A(D, g, F)), ...v(m(l, g)), ...B(l, g), S(l, g)];
          let E = l.children.length === 1 && l.firstChild.type === "interpolation" && l.firstChild.isLeadingSpaceSensitive && !l.firstChild.hasLeadingSpaces && l.lastChild.isTrailingSpaceSensitive && !l.lastChild.hasTrailingSpaces, y = Symbol("element-attr-group-id"), N = (M) => a([a(A(D, g, F), {id: y}), M, B(l, g)]), x = (M) => E ? u(M, {groupId: y}) : (p(l) || f(l, g)) && l.parent.type === "root" && g.parser === "vue" && !g.vueIndentScriptAndStyle ? M : i(M), b = () => E ? r(c, "", {groupId: y}) : l.firstChild.hasLeadingSpaces && l.firstChild.isLeadingSpaceSensitive ? o : l.firstChild.type === "text" && l.isWhitespaceSensitive && l.isIndentationSensitive ? s(c) : c, L = () => (l.next ? I(l.next) : k(l.parent)) ? l.lastChild.hasTrailingSpaces && l.lastChild.isTrailingSpaceSensitive ? " " : "" : E ? r(c, "", {groupId: y}) : l.lastChild.hasTrailingSpaces && l.lastChild.isTrailingSpaceSensitive ? o : (l.lastChild.type === "comment" || l.lastChild.type === "text" && l.isWhitespaceSensitive && l.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(g.tabWidth * h(D, (j) => j.parent && j.parent.type !== "root"), "}$")).test(l.lastChild.value) ? "" : c;
          return l.children.length === 0 ? N(l.hasDanglingSpaces && l.isDanglingSpaceSensitive ? o : "") : N([w(l) ? t : "", x([b(), P(D, g, F)]), L()]);
        }
        n.exports = {printElement: C};
      }}), lg = Z({"src/language-html/printer-html.js"(e, n) {
        re();
        var {builders: {fill: t, group: s, hardline: a, literalline: r}, utils: {cleanDoc: u, getDocParts: i, isConcat: o, replaceTextEndOfLine: c}} = Oe(), v = zd(), {countChars: m, unescapeQuoteEntities: d, getTextValueParts: p} = qt(), f = rg(), {insertPragma: h} = ng(), {locStart: w, locEnd: T} = Yn(), A = ag(), {printClosingTagSuffix: S, printClosingTagEnd: B, printOpeningTagPrefix: I, printOpeningTagStart: k} = er(), {printElement: P} = og(), {printChildren: C} = vo();
        function D(g, F, l) {
          let E = g.getValue();
          switch (E.type) {
            case "front-matter":
              return c(E.raw);
            case "root":
              return F.__onHtmlRoot && F.__onHtmlRoot(E), [s(C(g, F, l)), a];
            case "element":
            case "ieConditionalComment":
              return P(g, F, l);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [k(E), B(E)];
            case "interpolation":
              return [k(E, F), ...g.map(l, "children"), B(E, F)];
            case "text": {
              if (E.parent.type === "interpolation") {
                let N = /\n[^\S\n]*$/, x = N.test(E.value), b = x ? E.value.replace(N, "") : E.value;
                return [...c(b), x ? a : ""];
              }
              let y = u([I(E, F), ...p(E), S(E, F)]);
              return o(y) || y.type === "fill" ? t(i(y)) : y;
            }
            case "docType":
              return [s([k(E, F), " ", E.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), B(E, F)];
            case "comment":
              return [I(E, F), ...c(F.originalText.slice(w(E), T(E)), r), S(E, F)];
            case "attribute": {
              if (E.value === null)
                return E.rawName;
              let y = d(E.value), N = m(y, "'"), x = m(y, '"'), b = N < x ? "'" : '"';
              return [E.rawName, "=", b, ...c(b === '"' ? y.replace(/"/g, "&quot;") : y.replace(/'/g, "&apos;")), b];
            }
            default:
              throw new Error("Unexpected node type ".concat(E.type));
          }
        }
        n.exports = {preprocess: f, print: D, insertPragma: h, massageAstNode: v, embed: A};
      }}), cg = Z({"src/language-html/options.js"(e, n) {
        re();
        var t = Ot(), s = "HTML";
        n.exports = {bracketSameLine: t.bracketSameLine, htmlWhitespaceSensitivity: {since: "1.15.0", category: s, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{value: "css", description: "Respect the default value of CSS display property."}, {value: "strict", description: "Whitespaces are considered sensitive."}, {value: "ignore", description: "Whitespaces are considered insensitive."}]}, singleAttributePerLine: t.singleAttributePerLine, vueIndentScriptAndStyle: {since: "1.19.0", category: s, type: "boolean", default: false, description: "Indent script and style tags in Vue files."}};
      }}), pg = Z({"src/language-html/parsers.js"() {
        re();
      }}), xn = Z({"node_modules/linguist-languages/data/HTML.json"(e, n) {
        n.exports = {name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146};
      }}), fg = Z({"node_modules/linguist-languages/data/Vue.json"(e, n) {
        n.exports = {name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391};
      }}), Dg = Z({"src/language-html/index.js"(e, n) {
        re();
        var t = Bt(), s = lg(), a = cg(), r = pg(), u = [t(xn(), () => ({name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: []})), t(xn(), (o) => ({since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...o.extensions, ".mjml"]})), t(xn(), () => ({name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: []})), t(fg(), () => ({since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"]}))], i = {html: s};
        n.exports = {languages: u, printers: i, options: a, parsers: r};
      }}), mg = Z({"src/language-yaml/pragma.js"(e, n) {
        re();
        function t(r) {
          return /^\s*@(?:prettier|format)\s*$/.test(r);
        }
        function s(r) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(r);
        }
        function a(r) {
          return `# @format

`.concat(r);
        }
        n.exports = {isPragma: t, hasPragma: s, insertPragma: a};
      }}), dg = Z({"src/language-yaml/loc.js"(e, n) {
        re();
        function t(a) {
          return a.position.start.offset;
        }
        function s(a) {
          return a.position.end.offset;
        }
        n.exports = {locStart: t, locEnd: s};
      }}), gg = Z({"src/language-yaml/embed.js"(e, n) {
        re();
        function t(s, a, r, u) {
          if (s.getValue().type === "root" && u.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint)rc$/.test(u.filepath))
            return r(u.originalText, Object.assign(Object.assign({}, u), {}, {parser: "json"}));
        }
        n.exports = t;
      }}), Mt = Z({"src/language-yaml/utils.js"(e, n) {
        re();
        var {getLast: t, isNonEmptyArray: s} = Ue();
        function a(C, D) {
          let g = 0, F = C.stack.length - 1;
          for (let l = 0; l < F; l++) {
            let E = C.stack[l];
            r(E) && D(E) && g++;
          }
          return g;
        }
        function r(C, D) {
          return C && typeof C.type == "string" && (!D || D.includes(C.type));
        }
        function u(C, D, g) {
          return D("children" in C ? Object.assign(Object.assign({}, C), {}, {children: C.children.map((F) => u(F, D, C))}) : C, g);
        }
        function i(C, D, g) {
          Object.defineProperty(C, D, {get: g, enumerable: false});
        }
        function o(C, D) {
          let g = 0, F = D.length;
          for (let l = C.position.end.offset - 1; l < F; l++) {
            let E = D[l];
            if (E === `
` && g++, g === 1 && /\S/.test(E))
              return false;
            if (g === 2)
              return true;
          }
          return false;
        }
        function c(C) {
          switch (C.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return false;
          }
          let g = C.stack.length;
          for (let F = 1; F < g; F++) {
            let l = C.stack[F], E = C.stack[F - 1];
            if (Array.isArray(E) && typeof l == "number" && l !== E.length - 1)
              return false;
          }
          return true;
        }
        function v(C) {
          return s(C.children) ? v(t(C.children)) : C;
        }
        function m(C) {
          return C.value.trim() === "prettier-ignore";
        }
        function d(C) {
          let D = C.getValue();
          if (D.type === "documentBody") {
            let g = C.getParentNode();
            return S(g.head) && m(t(g.head.endComments));
          }
          return h(D) && m(t(D.leadingComments));
        }
        function p(C) {
          return !s(C.children) && !f(C);
        }
        function f(C) {
          return h(C) || w(C) || T(C) || A(C) || S(C);
        }
        function h(C) {
          return s(C == null ? void 0 : C.leadingComments);
        }
        function w(C) {
          return s(C == null ? void 0 : C.middleComments);
        }
        function T(C) {
          return C == null ? void 0 : C.indicatorComment;
        }
        function A(C) {
          return C == null ? void 0 : C.trailingComment;
        }
        function S(C) {
          return s(C == null ? void 0 : C.endComments);
        }
        function B(C) {
          let D = [], g;
          for (let F of C.split(/( +)/))
            F !== " " ? g === " " ? D.push(F) : D.push((D.pop() || "") + F) : g === void 0 && D.unshift(""), g = F;
          return g === " " && D.push((D.pop() || "") + " "), D[0] === "" && (D.shift(), D.unshift(" " + (D.shift() || ""))), D;
        }
        function I(C, D, g) {
          let F = D.split(`
`).map((l, E, y) => E === 0 && E === y.length - 1 ? l : E !== 0 && E !== y.length - 1 ? l.trim() : E === 0 ? l.trimEnd() : l.trimStart());
          return g.proseWrap === "preserve" ? F.map((l) => l.length === 0 ? [] : [l]) : F.map((l) => l.length === 0 ? [] : B(l)).reduce((l, E, y) => y !== 0 && F[y - 1].length > 0 && E.length > 0 && !(C === "quoteDouble" && t(t(l)).endsWith("\\")) ? [...l.slice(0, -1), [...t(l), ...E]] : [...l, E], []).map((l) => g.proseWrap === "never" ? [l.join(" ")] : l);
        }
        function k(C, D) {
          let {parentIndent: g, isLastDescendant: F, options: l} = D, E = C.position.start.line === C.position.end.line ? "" : l.originalText.slice(C.position.start.offset, C.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], y;
          if (C.indent === null) {
            let b = E.match(/^(?<leadingSpace> *)[^\n\r ]/m);
            y = b ? b.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
          } else
            y = C.indent - 1 + g;
          let N = E.split(`
`).map((b) => b.slice(y));
          if (l.proseWrap === "preserve" || C.type === "blockLiteral")
            return x(N.map((b) => b.length === 0 ? [] : [b]));
          return x(N.map((b) => b.length === 0 ? [] : B(b)).reduce((b, L, M) => M !== 0 && N[M - 1].length > 0 && L.length > 0 && !/^\s/.test(L[0]) && !/^\s|\s$/.test(t(b)) ? [...b.slice(0, -1), [...t(b), ...L]] : [...b, L], []).map((b) => b.reduce((L, M) => L.length > 0 && /\s$/.test(t(L)) ? [...L.slice(0, -1), t(L) + " " + M] : [...L, M], [])).map((b) => l.proseWrap === "never" ? [b.join(" ")] : b));
          function x(b) {
            if (C.chomping === "keep")
              return t(b).length === 0 ? b.slice(0, -1) : b;
            let L = 0;
            for (let M = b.length - 1; M >= 0 && b[M].length === 0; M--)
              L++;
            return L === 0 ? b : L >= 2 && !F ? b.slice(0, -(L - 1)) : b.slice(0, -L);
          }
        }
        function P(C) {
          if (!C)
            return true;
          switch (C.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return true;
            default:
              return false;
          }
        }
        n.exports = {getLast: t, getAncestorCount: a, isNode: r, isEmptyNode: p, isInlineNode: P, mapNode: u, defineShortcut: i, isNextLineEmpty: o, isLastDescendantNode: c, getBlockValueLineContents: k, getFlowScalarLineContents: I, getLastDescendantNode: v, hasPrettierIgnore: d, hasLeadingComments: h, hasMiddleComments: w, hasIndicatorComment: T, hasTrailingComment: A, hasEndComments: S};
      }}), yg = Z({"src/language-yaml/print-preprocess.js"(e, n) {
        re();
        var {defineShortcut: t, mapNode: s} = Mt();
        function a(u) {
          return s(u, r);
        }
        function r(u) {
          switch (u.type) {
            case "document":
              t(u, "head", () => u.children[0]), t(u, "body", () => u.children[1]);
              break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              t(u, "content", () => u.children[0]);
              break;
            case "mappingItem":
            case "flowMappingItem":
              t(u, "key", () => u.children[0]), t(u, "value", () => u.children[1]);
              break;
          }
          return u;
        }
        n.exports = a;
      }}), jr = Z({"src/language-yaml/print/misc.js"(e, n) {
        re();
        var {builders: {softline: t, align: s}} = Oe(), {hasEndComments: a, isNextLineEmpty: r, isNode: u} = Mt(), i = new WeakMap();
        function o(m, d) {
          let p = m.getValue(), f = m.stack[0], h;
          return i.has(f) ? h = i.get(f) : (h = new Set(), i.set(f, h)), !h.has(p.position.end.line) && (h.add(p.position.end.line), r(p, d) && !c(m.getParentNode())) ? t : "";
        }
        function c(m) {
          return a(m) && !u(m, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }
        function v(m, d) {
          return s(" ".repeat(m), d);
        }
        n.exports = {alignWithSpaces: v, shouldPrintEndComments: c, printNextEmptyLine: o};
      }}), hg = Z({"src/language-yaml/print/flow-mapping-sequence.js"(e, n) {
        re();
        var {builders: {ifBreak: t, line: s, softline: a, hardline: r, join: u}} = Oe(), {isEmptyNode: i, getLast: o, hasEndComments: c} = Mt(), {printNextEmptyLine: v, alignWithSpaces: m} = jr();
        function d(f, h, w) {
          let T = f.getValue(), A = T.type === "flowMapping", S = A ? "{" : "[", B = A ? "}" : "]", I = a;
          A && T.children.length > 0 && w.bracketSpacing && (I = s);
          let k = o(T.children), P = k && k.type === "flowMappingItem" && i(k.key) && i(k.value);
          return [S, m(w.tabWidth, [I, p(f, h, w), w.trailingComma === "none" ? "" : t(","), c(T) ? [r, u(r, f.map(h, "endComments"))] : ""]), P ? "" : I, B];
        }
        function p(f, h, w) {
          let T = f.getValue();
          return f.map((S, B) => [h(), B === T.children.length - 1 ? "" : [",", s, T.children[B].position.start.line !== T.children[B + 1].position.start.line ? v(S, w.originalText) : ""]], "children");
        }
        n.exports = {printFlowMapping: d, printFlowSequence: d};
      }}), vg = Z({"src/language-yaml/print/mapping-item.js"(e, n) {
        re();
        var {builders: {conditionalGroup: t, group: s, hardline: a, ifBreak: r, join: u, line: i}} = Oe(), {hasLeadingComments: o, hasMiddleComments: c, hasTrailingComment: v, hasEndComments: m, isNode: d, isEmptyNode: p, isInlineNode: f} = Mt(), {alignWithSpaces: h} = jr();
        function w(B, I, k, P, C) {
          let {key: D, value: g} = B, F = p(D), l = p(g);
          if (F && l)
            return ": ";
          let E = P("key"), y = A(B) ? " " : "";
          if (l)
            return B.type === "flowMappingItem" && I.type === "flowMapping" ? E : B.type === "mappingItem" && T(D.content, C) && !v(D.content) && (!I.tag || I.tag.value !== "tag:yaml.org,2002:set") ? [E, y, ":"] : ["? ", h(2, E)];
          let N = P("value");
          if (F)
            return [": ", h(2, N)];
          if (o(g) || !f(D.content))
            return ["? ", h(2, E), a, u("", k.map(P, "value", "leadingComments").map(($) => [$, a])), ": ", h(2, N)];
          if (S(D.content) && !o(D.content) && !c(D.content) && !v(D.content) && !m(D) && !o(g.content) && !c(g.content) && !m(g) && T(g.content, C))
            return [E, y, ": ", N];
          let x = Symbol("mappingKey"), b = s([r("? "), s(h(2, E), {id: x})]), L = [a, ": ", h(2, N)], M = [y, ":"];
          o(g.content) || m(g) && g.content && !d(g.content, ["mapping", "sequence"]) || I.type === "mapping" && v(D.content) && f(g.content) || d(g.content, ["mapping", "sequence"]) && g.content.tag === null && g.content.anchor === null ? M.push(a) : g.content && M.push(i), M.push(N);
          let j = h(C.tabWidth, M);
          return T(D.content, C) && !o(D.content) && !c(D.content) && !m(D) ? t([[E, j]]) : t([[b, r(L, j, {groupId: x})]]);
        }
        function T(B, I) {
          if (!B)
            return true;
          switch (B.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;
            case "alias":
              return true;
            default:
              return false;
          }
          if (I.proseWrap === "preserve")
            return B.position.start.line === B.position.end.line;
          if (/\\$/m.test(I.originalText.slice(B.position.start.offset, B.position.end.offset)))
            return false;
          switch (I.proseWrap) {
            case "never":
              return !B.value.includes(`
`);
            case "always":
              return !/[\n ]/.test(B.value);
            default:
              return false;
          }
        }
        function A(B) {
          return B.key.content && B.key.content.type === "alias";
        }
        function S(B) {
          if (!B)
            return true;
          switch (B.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
              return B.position.start.line === B.position.end.line;
            case "alias":
              return true;
            default:
              return false;
          }
        }
        n.exports = w;
      }}), Cg = Z({"src/language-yaml/print/block.js"(e, n) {
        re();
        var {builders: {dedent: t, dedentToRoot: s, fill: a, hardline: r, join: u, line: i, literalline: o, markAsRoot: c}, utils: {getDocParts: v}} = Oe(), {getAncestorCount: m, getBlockValueLineContents: d, hasIndicatorComment: p, isLastDescendantNode: f, isNode: h} = Mt(), {alignWithSpaces: w} = jr();
        function T(A, S, B) {
          let I = A.getValue(), k = m(A, (F) => h(F, ["sequence", "mapping"])), P = f(A), C = [I.type === "blockFolded" ? ">" : "|"];
          I.indent !== null && C.push(I.indent.toString()), I.chomping !== "clip" && C.push(I.chomping === "keep" ? "+" : "-"), p(I) && C.push(" ", S("indicatorComment"));
          let D = d(I, {parentIndent: k, isLastDescendant: P, options: B}), g = [];
          for (let [F, l] of D.entries())
            F === 0 && g.push(r), g.push(a(v(u(i, l)))), F !== D.length - 1 ? g.push(l.length === 0 ? r : c(o)) : I.chomping === "keep" && P && g.push(s(l.length === 0 ? r : o));
          return I.indent === null ? C.push(t(w(B.tabWidth, g))) : C.push(s(w(I.indent - 1 + k, g))), C;
        }
        n.exports = T;
      }}), Eg = Z({"src/language-yaml/printer-yaml.js"(e, n) {
        re();
        var {builders: {breakParent: t, fill: s, group: a, hardline: r, join: u, line: i, lineSuffix: o, literalline: c}, utils: {getDocParts: v, replaceTextEndOfLine: m}} = Oe(), {isPreviousLineEmpty: d} = Ue(), {insertPragma: p, isPragma: f} = mg(), {locStart: h} = dg(), w = gg(), {getFlowScalarLineContents: T, getLastDescendantNode: A, hasLeadingComments: S, hasMiddleComments: B, hasTrailingComment: I, hasEndComments: k, hasPrettierIgnore: P, isLastDescendantNode: C, isNode: D, isInlineNode: g} = Mt(), F = yg(), {alignWithSpaces: l, printNextEmptyLine: E, shouldPrintEndComments: y} = jr(), {printFlowMapping: N, printFlowSequence: x} = hg(), b = vg(), L = Cg();
        function M(R, Q, ee) {
          let te = R.getValue(), oe = [];
          te.type !== "mappingValue" && S(te) && oe.push([u(r, R.map(ee, "leadingComments")), r]);
          let {tag: W, anchor: X} = te;
          W && oe.push(ee("tag")), W && X && oe.push(" "), X && oe.push(ee("anchor"));
          let ue = "";
          D(te, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !C(R) && (ue = E(R, Q.originalText)), (W || X) && (D(te, ["sequence", "mapping"]) && !B(te) ? oe.push(r) : oe.push(" ")), B(te) && oe.push([te.middleComments.length === 1 ? "" : r, u(r, R.map(ee, "middleComments")), r]);
          let De = R.getParentNode();
          return P(R) ? oe.push(m(Q.originalText.slice(te.position.start.offset, te.position.end.offset).trimEnd(), c)) : oe.push(a(j(te, De, R, Q, ee))), I(te) && !D(te, ["document", "documentHead"]) && oe.push(o([te.type === "mappingValue" && !te.content ? "" : " ", De.type === "mappingKey" && R.getParentNode(2).type === "mapping" && g(te) ? "" : t, ee("trailingComment")])), y(te) && oe.push(l(te.type === "sequenceItem" ? 2 : 0, [r, u(r, R.map((ie) => [d(Q.originalText, ie.getValue(), h) ? r : "", ee()], "endComments"))])), oe.push(ue), oe;
        }
        function j(R, Q, ee, te, oe) {
          switch (R.type) {
            case "root": {
              let {children: W} = R, X = [];
              ee.each((De, ie) => {
                let G = W[ie], z = W[ie + 1];
                ie !== 0 && X.push(r), X.push(oe()), V(G, z) ? (X.push(r, "..."), I(G) && X.push(" ", oe("trailingComment"))) : z && !I(z.head) && X.push(r, "---");
              }, "children");
              let ue = A(R);
              return (!D(ue, ["blockLiteral", "blockFolded"]) || ue.chomping !== "keep") && X.push(r), X;
            }
            case "document": {
              let W = Q.children[ee.getName() + 1], X = [];
              return q(R, W, Q, te) === "head" && ((R.head.children.length > 0 || R.head.endComments.length > 0) && X.push(oe("head")), I(R.head) ? X.push(["---", " ", oe(["head", "trailingComment"])]) : X.push("---")), $(R) && X.push(oe("body")), u(r, X);
            }
            case "documentHead":
              return u(r, [...ee.map(oe, "children"), ...ee.map(oe, "endComments")]);
            case "documentBody": {
              let {children: W, endComments: X} = R, ue = "";
              if (W.length > 0 && X.length > 0) {
                let De = A(R);
                D(De, ["blockFolded", "blockLiteral"]) ? De.chomping !== "keep" && (ue = [r, r]) : ue = r;
              }
              return [u(r, ee.map(oe, "children")), ue, u(r, ee.map(oe, "endComments"))];
            }
            case "directive":
              return ["%", u(" ", [R.name, ...R.parameters])];
            case "comment":
              return ["#", R.value];
            case "alias":
              return ["*", R.value];
            case "tag":
              return te.originalText.slice(R.position.start.offset, R.position.end.offset);
            case "anchor":
              return ["&", R.value];
            case "plain":
              return Y(R.type, te.originalText.slice(R.position.start.offset, R.position.end.offset), te);
            case "quoteDouble":
            case "quoteSingle": {
              let W = "'", X = '"', ue = te.originalText.slice(R.position.start.offset + 1, R.position.end.offset - 1);
              if (R.type === "quoteSingle" && ue.includes("\\") || R.type === "quoteDouble" && /\\[^"]/.test(ue)) {
                let ie = R.type === "quoteDouble" ? X : W;
                return [ie, Y(R.type, ue, te), ie];
              }
              if (ue.includes(X))
                return [W, Y(R.type, R.type === "quoteDouble" ? ue.replace(/\\"/g, X).replace(/'/g, W.repeat(2)) : ue, te), W];
              if (ue.includes(W))
                return [X, Y(R.type, R.type === "quoteSingle" ? ue.replace(/''/g, W) : ue, te), X];
              let De = te.singleQuote ? W : X;
              return [De, Y(R.type, ue, te), De];
            }
            case "blockFolded":
            case "blockLiteral":
              return L(ee, oe, te);
            case "mapping":
            case "sequence":
              return u(r, ee.map(oe, "children"));
            case "sequenceItem":
              return ["- ", l(2, R.content ? oe("content") : "")];
            case "mappingKey":
            case "mappingValue":
              return R.content ? oe("content") : "";
            case "mappingItem":
            case "flowMappingItem":
              return b(R, Q, ee, oe, te);
            case "flowMapping":
              return N(ee, oe, te);
            case "flowSequence":
              return x(ee, oe, te);
            case "flowSequenceItem":
              return oe("content");
            default:
              throw new Error("Unexpected node type ".concat(R.type));
          }
        }
        function $(R) {
          return R.body.children.length > 0 || k(R.body);
        }
        function V(R, Q) {
          return I(R) || Q && (Q.head.children.length > 0 || k(Q.head));
        }
        function q(R, Q, ee, te) {
          return ee.children[0] === R && /---(?:\s|$)/.test(te.originalText.slice(h(R), h(R) + 4)) || R.head.children.length > 0 || k(R.head) || I(R.head) ? "head" : V(R, Q) ? false : Q ? "root" : false;
        }
        function Y(R, Q, ee) {
          let te = T(R, Q, ee);
          return u(r, te.map((oe) => s(v(u(i, oe)))));
        }
        function H(R, Q) {
          if (D(Q))
            switch (delete Q.position, Q.type) {
              case "comment":
                if (f(Q.value))
                  return null;
                break;
              case "quoteDouble":
              case "quoteSingle":
                Q.type = "quote";
                break;
            }
        }
        n.exports = {preprocess: F, embed: w, print: M, massageAstNode: H, insertPragma: p};
      }}), Fg = Z({"src/language-yaml/options.js"(e, n) {
        re();
        var t = Ot();
        n.exports = {bracketSpacing: t.bracketSpacing, singleQuote: t.singleQuote, proseWrap: t.proseWrap};
      }}), Ag = Z({"src/language-yaml/parsers.js"() {
        re();
      }}), Sg = Z({"node_modules/linguist-languages/data/YAML.json"(e, n) {
        n.exports = {name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407};
      }}), xg = Z({"src/language-yaml/index.js"(e, n) {
        re();
        var t = Bt(), s = Eg(), a = Fg(), r = Ag(), u = [t(Sg(), (i) => ({since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...i.filenames.filter((o) => o !== "yarn.lock"), ".prettierrc", ".stylelintrc"]}))];
        n.exports = {languages: u, printers: {yaml: s}, options: a, parsers: r};
      }}), bg = Z({"src/languages.js"(e, n) {
        re(), n.exports = [id(), Sd(), Pd(), Md(), Ud(), Dg(), xg()];
      }});
      re();
      var {version: Tg} = ya(), kt = Sm(), {getSupportInfo: Bg} = Mn(), Ng = xm(), wg = bg(), _g = Oe();
      function bt(e) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return function() {
          for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
            s[a] = arguments[a];
          let r = s[n] || {}, u = r.plugins || [];
          return s[n] = Object.assign(Object.assign({}, r), {}, {plugins: [...wg, ...Array.isArray(u) ? u : Object.values(u)]}), e(...s);
        };
      }
      var bn = bt(kt.formatWithCursor);
      Co.exports = {formatWithCursor: bn, format(e, n) {
        return bn(e, n).formatted;
      }, check(e, n) {
        let {formatted: t} = bn(e, n);
        return t === e;
      }, doc: _g, getSupportInfo: bt(Bg, 0), version: Tg, util: Ng, __debug: {parse: bt(kt.parse), formatAST: bt(kt.formatAST), formatDoc: bt(kt.formatDoc), printToDoc: bt(kt.printToDoc), printDocToString: bt(kt.printDocToString)}};
    });
    return Pg();
  });
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(standalone);
export default __pika_web_default_export_for_treeshaking__;
