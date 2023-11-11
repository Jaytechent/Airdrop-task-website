import {
  e as xo,
  y as Mo,
  b as Ao,
  z as Oo,
  A as Lo,
  B as Bo,
  h as Po,
  C as Uo,
  D as qo,
  E as Do,
  F as $o,
  G as Fo,
  c as Ho,
  n as jo,
  j as Wo,
  g as zo,
  I as Vo,
  s as Jo,
  f as Qo,
  a as Ko,
  d as Yo,
  l as he,
  K as Go,
  i as mn,
  o as Ht,
  J as jt,
  H as Zo,
} from "./http-68f2e67b.js";
import { g as wn, h as Xo } from "./index-ba2052c8.js";
import { e as ei, d as ti } from "./dijkstra-73e86c63.js";
const We = "Session currently connected",
  V = "Session currently disconnected",
  ni = "Session Rejected",
  ri = "Missing JSON RPC response",
  oi = 'JSON-RPC success response must include "result" field',
  ii = 'JSON-RPC error response must include "error" field',
  si = 'JSON RPC request must have valid "method" value',
  ai = 'JSON RPC request must have valid "id" value',
  ci = "Missing one of the required parameters: bridge / uri / session",
  Wt = "JSON RPC response format is invalid",
  li = "URI format is invalid",
  ui = "QRCode Modal not provided",
  zt = "User close QRCode Modal",
  di = [
    "session_request",
    "session_update",
    "exchange_key",
    "connect",
    "disconnect",
    "display_uri",
    "modal_closed",
    "transport_open",
    "transport_close",
    "transport_error",
  ],
  fi = [
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  dt = [
    "eth_sendTransaction",
    "eth_signTransaction",
    "eth_sign",
    "eth_signTypedData",
    "eth_signTypedData_v1",
    "eth_signTypedData_v2",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "personal_sign",
    ...fi,
  ],
  Xe = "WALLETCONNECT_DEEPLINK_CHOICE",
  _i = { 1: "mainnet", 3: "ropsten", 4: "rinkeby", 5: "goerli", 42: "kovan" };
var yn = ft;
ft.strict = bn;
ft.loose = vn;
var hi = Object.prototype.toString,
  gi = {
    "[object Int8Array]": !0,
    "[object Int16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Uint16Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
  };
function ft(t) {
  return bn(t) || vn(t);
}
function bn(t) {
  return (
    t instanceof Int8Array ||
    t instanceof Int16Array ||
    t instanceof Int32Array ||
    t instanceof Uint8Array ||
    t instanceof Uint8ClampedArray ||
    t instanceof Uint16Array ||
    t instanceof Uint32Array ||
    t instanceof Float32Array ||
    t instanceof Float64Array
  );
}
function vn(t) {
  return gi[hi.call(t)];
}
var pi = yn.strict,
  mi = function (e) {
    if (pi(e)) {
      var n = Buffer.from(e.buffer);
      return (
        e.byteLength !== e.buffer.byteLength &&
          (n = n.slice(e.byteOffset, e.byteOffset + e.byteLength)),
        n
      );
    } else return Buffer.from(e);
  };
const _t = "hex",
  ht = "utf8",
  wi = "binary",
  yi = "buffer",
  bi = "array",
  vi = "typed-array",
  Ei = "array-buffer",
  Oe = "0";
function G(t) {
  return new Uint8Array(t);
}
function gt(t, e = !1) {
  const n = t.toString(_t);
  return e ? ge(n) : n;
}
function pt(t) {
  return t.toString(ht);
}
function En(t) {
  return t.readUIntBE(0, t.length);
}
function oe(t) {
  return mi(t);
}
function $(t, e = !1) {
  return gt(oe(t), e);
}
function Cn(t) {
  return pt(oe(t));
}
function Sn(t) {
  return En(oe(t));
}
function mt(t) {
  return Buffer.from(Z(t), _t);
}
function F(t) {
  return G(mt(t));
}
function Ci(t) {
  return pt(mt(t));
}
function Si(t) {
  return Sn(F(t));
}
function wt(t) {
  return Buffer.from(t, ht);
}
function In(t) {
  return G(wt(t));
}
function Ii(t, e = !1) {
  return gt(wt(t), e);
}
function ki(t) {
  const e = parseInt(t, 10);
  return Wi(ji(e), "Number can only safely store up to 53 bits"), e;
}
function Ri(t) {
  return Mi(yt(t));
}
function Ti(t) {
  return bt(yt(t));
}
function Ni(t, e) {
  return Ai(yt(t), e);
}
function xi(t) {
  return `${t}`;
}
function yt(t) {
  const e = (t >>> 0).toString(2);
  return Et(e);
}
function Mi(t) {
  return oe(bt(t));
}
function bt(t) {
  return new Uint8Array(qi(t).map((e) => parseInt(e, 2)));
}
function Ai(t, e) {
  return $(bt(t), e);
}
function Oi(t) {
  return !(
    typeof t != "string" ||
    !new RegExp(/^[01]+$/).test(t) ||
    t.length % 8 !== 0
  );
}
function kn(t, e) {
  return !(
    typeof t != "string" ||
    !t.match(/^0x[0-9A-Fa-f]*$/) ||
    (e && t.length !== 2 + 2 * e)
  );
}
function Le(t) {
  return Buffer.isBuffer(t);
}
function vt(t) {
  return yn.strict(t) && !Le(t);
}
function Rn(t) {
  return !vt(t) && !Le(t) && typeof t.byteLength < "u";
}
function Li(t) {
  return Le(t)
    ? yi
    : vt(t)
    ? vi
    : Rn(t)
    ? Ei
    : Array.isArray(t)
    ? bi
    : typeof t;
}
function Bi(t) {
  return Oi(t) ? wi : kn(t) ? _t : ht;
}
function Pi(...t) {
  return Buffer.concat(t);
}
function Tn(...t) {
  let e = [];
  return (
    t.forEach((n) => (e = e.concat(Array.from(n)))), new Uint8Array([...e])
  );
}
function Ui(t, e = 8) {
  const n = t % e;
  return n ? ((t - n) / e) * e + e : t;
}
function qi(t, e = 8) {
  const n = Et(t).match(new RegExp(`.{${e}}`, "gi"));
  return Array.from(n || []);
}
function Et(t, e = 8, n = Oe) {
  return Di(t, Ui(t.length, e), n);
}
function Di(t, e, n = Oe) {
  return zi(t, e, !0, n);
}
function Z(t) {
  return t.replace(/^0x/, "");
}
function ge(t) {
  return t.startsWith("0x") ? t : `0x${t}`;
}
function $i(t) {
  return (t = Z(t)), (t = Et(t, 2)), t && (t = ge(t)), t;
}
function Fi(t) {
  const e = t.startsWith("0x");
  return (t = Z(t)), (t = t.startsWith(Oe) ? t.substring(1) : t), e ? ge(t) : t;
}
function Hi(t) {
  return typeof t > "u";
}
function ji(t) {
  return !Hi(t);
}
function Wi(t, e) {
  if (!t) throw new Error(e);
}
function zi(t, e, n, r = Oe) {
  const o = e - t.length;
  let i = t;
  if (o > 0) {
    const s = r.repeat(o);
    i = n ? s + t : t + s;
  }
  return i;
}
function ke(t) {
  return oe(new Uint8Array(t));
}
function Vi(t) {
  return Cn(new Uint8Array(t));
}
function Nn(t, e) {
  return $(new Uint8Array(t), !e);
}
function Ji(t) {
  return Sn(new Uint8Array(t));
}
function Qi(...t) {
  return F(t.map((e) => $(new Uint8Array(e))).join("")).buffer;
}
function xn(t) {
  return G(t).buffer;
}
function Ki(t) {
  return pt(t);
}
function Yi(t, e) {
  return gt(t, !e);
}
function Gi(t) {
  return En(t);
}
function Zi(...t) {
  return Pi(...t);
}
function Xi(t) {
  return In(t).buffer;
}
function es(t) {
  return wt(t);
}
function ts(t, e) {
  return Ii(t, !e);
}
function ns(t) {
  return ki(t);
}
function rs(t) {
  return mt(t);
}
function Mn(t) {
  return F(t).buffer;
}
function os(t) {
  return Ci(t);
}
function is(t) {
  return Si(t);
}
function ss(t) {
  return Ri(t);
}
function as(t) {
  return Ti(t).buffer;
}
function cs(t) {
  return xi(t);
}
function An(t, e) {
  return Ni(Number(t), !e);
}
const ls = Oo,
  us = Lo,
  ds = Bo,
  fs = Po,
  _s = Uo,
  On = Ao,
  hs = qo,
  Ln = xo,
  gs = Do,
  ps = $o,
  ms = Fo,
  Be = Mo;
function Pe(t) {
  return Ho(t);
}
function Ue() {
  const t = Pe();
  return t && t.os ? t.os : void 0;
}
function Bn() {
  const t = Ue();
  return t ? t.toLowerCase().includes("android") : !1;
}
function Pn() {
  const t = Ue();
  return t
    ? t.toLowerCase().includes("ios") ||
        (t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
    : !1;
}
function Un() {
  return Ue() ? Bn() || Pn() : !1;
}
function qn() {
  const t = Pe();
  return t && t.name ? t.name.toLowerCase() === "node" : !1;
}
function Dn() {
  return !qn() && !!On();
}
const $n = jo,
  Fn = Wo;
function Ct(t, e) {
  const n = Fn(e),
    r = Be();
  r && r.setItem(t, n);
}
function St(t) {
  let e = null,
    n = null;
  const r = Be();
  return r && (n = r.getItem(t)), (e = n && $n(n)), e;
}
function It(t) {
  const e = Be();
  e && e.removeItem(t);
}
function et() {
  return zo();
}
function ws(t) {
  return $i(t);
}
function ys(t) {
  return ge(t);
}
function bs(t) {
  return Z(t);
}
function vs(t) {
  return Fi(ge(t));
}
const Hn = Vo;
function Ce() {
  return ((e, n) => {
    for (
      n = e = "";
      e++ < 36;
      n +=
        (e * 51) & 52
          ? (e ^ 15 ? 8 ^ (Math.random() * (e ^ 20 ? 16 : 4)) : 4).toString(16)
          : "-"
    );
    return n;
  })();
}
function Es() {
  console.warn(
    "DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!"
  );
}
function jn(t, e) {
  let n;
  const r = _i[t];
  return r && (n = `https://${r}.infura.io/v3/${e}`), n;
}
function Wn(t, e) {
  let n;
  const r = jn(t, e.infuraId);
  return e.custom && e.custom[t] ? (n = e.custom[t]) : r && (n = r), n;
}
function Cs(t, e) {
  const n = encodeURIComponent(t);
  return e.universalLink
    ? `${e.universalLink}/wc?uri=${n}`
    : e.deepLink
    ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${n}`
    : "";
}
function Ss(t) {
  const e = t.href.split("?")[0];
  Ct(Xe, Object.assign(Object.assign({}, t), { href: e }));
}
function zn(t, e) {
  return t.filter((n) => n.name.toLowerCase().includes(e.toLowerCase()))[0];
}
function Is(t, e) {
  let n = t;
  return e && (n = e.map((r) => zn(t, r)).filter(Boolean)), n;
}
function ks(t, e) {
  return async (...r) =>
    new Promise((o, i) => {
      const s = (a, c) => {
        (a === null || typeof a > "u") && i(a), o(c);
      };
      t.apply(e, [...r, s]);
    });
}
function Vn(t) {
  const e = t.message || "Failed or Rejected Request";
  let n = -32e3;
  if (t && !t.code)
    switch (e) {
      case "Parse error":
        n = -32700;
        break;
      case "Invalid request":
        n = -32600;
        break;
      case "Method not found":
        n = -32601;
        break;
      case "Invalid params":
        n = -32602;
        break;
      case "Internal error":
        n = -32603;
        break;
      default:
        n = -32e3;
        break;
    }
  const r = { code: n, message: e };
  return t.data && (r.data = t.data), r;
}
const Jn = "https://registry.walletconnect.com";
function Rs() {
  return Jn + "/api/v2/wallets";
}
function Ts() {
  return Jn + "/api/v2/dapps";
}
function Qn(t, e = "mobile") {
  var n;
  return {
    name: t.name || "",
    shortName: t.metadata.shortName || "",
    color: t.metadata.colors.primary || "",
    logo: (n = t.image_url.sm) !== null && n !== void 0 ? n : "",
    universalLink: t[e].universal || "",
    deepLink: t[e].native || "",
  };
}
function Ns(t, e = "mobile") {
  return Object.values(t)
    .filter((n) => !!n[e].universal || !!n[e].native)
    .map((n) => Qn(n, e));
}
var kt = {};
(function (t) {
  const e = Ko,
    n = Yo,
    r = Jo,
    o = Qo,
    i = (u) => u == null;
  function s(u) {
    switch (u.arrayFormat) {
      case "index":
        return (f) => (h, d) => {
          const m = h.length;
          return d === void 0 ||
            (u.skipNull && d === null) ||
            (u.skipEmptyString && d === "")
            ? h
            : d === null
            ? [...h, [_(f, u), "[", m, "]"].join("")]
            : [...h, [_(f, u), "[", _(m, u), "]=", _(d, u)].join("")];
        };
      case "bracket":
        return (f) => (h, d) =>
          d === void 0 ||
          (u.skipNull && d === null) ||
          (u.skipEmptyString && d === "")
            ? h
            : d === null
            ? [...h, [_(f, u), "[]"].join("")]
            : [...h, [_(f, u), "[]=", _(d, u)].join("")];
      case "comma":
      case "separator":
        return (f) => (h, d) =>
          d == null || d.length === 0
            ? h
            : h.length === 0
            ? [[_(f, u), "=", _(d, u)].join("")]
            : [[h, _(d, u)].join(u.arrayFormatSeparator)];
      default:
        return (f) => (h, d) =>
          d === void 0 ||
          (u.skipNull && d === null) ||
          (u.skipEmptyString && d === "")
            ? h
            : d === null
            ? [...h, _(f, u)]
            : [...h, [_(f, u), "=", _(d, u)].join("")];
    }
  }
  function a(u) {
    let f;
    switch (u.arrayFormat) {
      case "index":
        return (h, d, m) => {
          if (
            ((f = /\[(\d*)\]$/.exec(h)), (h = h.replace(/\[\d*\]$/, "")), !f)
          ) {
            m[h] = d;
            return;
          }
          m[h] === void 0 && (m[h] = {}), (m[h][f[1]] = d);
        };
      case "bracket":
        return (h, d, m) => {
          if (((f = /(\[\])$/.exec(h)), (h = h.replace(/\[\]$/, "")), !f)) {
            m[h] = d;
            return;
          }
          if (m[h] === void 0) {
            m[h] = [d];
            return;
          }
          m[h] = [].concat(m[h], d);
        };
      case "comma":
      case "separator":
        return (h, d, m) => {
          const E = typeof d == "string" && d.includes(u.arrayFormatSeparator),
            b =
              typeof d == "string" &&
              !E &&
              l(d, u).includes(u.arrayFormatSeparator);
          d = b ? l(d, u) : d;
          const k =
            E || b
              ? d.split(u.arrayFormatSeparator).map((T) => l(T, u))
              : d === null
              ? d
              : l(d, u);
          m[h] = k;
        };
      default:
        return (h, d, m) => {
          if (m[h] === void 0) {
            m[h] = d;
            return;
          }
          m[h] = [].concat(m[h], d);
        };
    }
  }
  function c(u) {
    if (typeof u != "string" || u.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function _(u, f) {
    return f.encode ? (f.strict ? e(u) : encodeURIComponent(u)) : u;
  }
  function l(u, f) {
    return f.decode ? n(u) : u;
  }
  function v(u) {
    return Array.isArray(u)
      ? u.sort()
      : typeof u == "object"
      ? v(Object.keys(u))
          .sort((f, h) => Number(f) - Number(h))
          .map((f) => u[f])
      : u;
  }
  function p(u) {
    const f = u.indexOf("#");
    return f !== -1 && (u = u.slice(0, f)), u;
  }
  function g(u) {
    let f = "";
    const h = u.indexOf("#");
    return h !== -1 && (f = u.slice(h)), f;
  }
  function w(u) {
    u = p(u);
    const f = u.indexOf("?");
    return f === -1 ? "" : u.slice(f + 1);
  }
  function S(u, f) {
    return (
      f.parseNumbers &&
      !Number.isNaN(Number(u)) &&
      typeof u == "string" &&
      u.trim() !== ""
        ? (u = Number(u))
        : f.parseBooleans &&
          u !== null &&
          (u.toLowerCase() === "true" || u.toLowerCase() === "false") &&
          (u = u.toLowerCase() === "true"),
      u
    );
  }
  function I(u, f) {
    (f = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      f
    )),
      c(f.arrayFormatSeparator);
    const h = a(f),
      d = Object.create(null);
    if (typeof u != "string" || ((u = u.trim().replace(/^[?#&]/, "")), !u))
      return d;
    for (const m of u.split("&")) {
      if (m === "") continue;
      let [E, b] = r(f.decode ? m.replace(/\+/g, " ") : m, "=");
      (b =
        b === void 0
          ? null
          : ["comma", "separator"].includes(f.arrayFormat)
          ? b
          : l(b, f)),
        h(l(E, f), b, d);
    }
    for (const m of Object.keys(d)) {
      const E = d[m];
      if (typeof E == "object" && E !== null)
        for (const b of Object.keys(E)) E[b] = S(E[b], f);
      else d[m] = S(E, f);
    }
    return f.sort === !1
      ? d
      : (f.sort === !0
          ? Object.keys(d).sort()
          : Object.keys(d).sort(f.sort)
        ).reduce((m, E) => {
          const b = d[E];
          return (
            b && typeof b == "object" && !Array.isArray(b)
              ? (m[E] = v(b))
              : (m[E] = b),
            m
          );
        }, Object.create(null));
  }
  (t.extract = w),
    (t.parse = I),
    (t.stringify = (u, f) => {
      if (!u) return "";
      (f = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        f
      )),
        c(f.arrayFormatSeparator);
      const h = (b) =>
          (f.skipNull && i(u[b])) || (f.skipEmptyString && u[b] === ""),
        d = s(f),
        m = {};
      for (const b of Object.keys(u)) h(b) || (m[b] = u[b]);
      const E = Object.keys(m);
      return (
        f.sort !== !1 && E.sort(f.sort),
        E.map((b) => {
          const k = u[b];
          return k === void 0
            ? ""
            : k === null
            ? _(b, f)
            : Array.isArray(k)
            ? k.reduce(d(b), []).join("&")
            : _(b, f) + "=" + _(k, f);
        })
          .filter((b) => b.length > 0)
          .join("&")
      );
    }),
    (t.parseUrl = (u, f) => {
      f = Object.assign({ decode: !0 }, f);
      const [h, d] = r(u, "#");
      return Object.assign(
        { url: h.split("?")[0] || "", query: I(w(u), f) },
        f && f.parseFragmentIdentifier && d
          ? { fragmentIdentifier: l(d, f) }
          : {}
      );
    }),
    (t.stringifyUrl = (u, f) => {
      f = Object.assign({ encode: !0, strict: !0 }, f);
      const h = p(u.url).split("?")[0] || "",
        d = t.extract(u.url),
        m = t.parse(d, { sort: !1 }),
        E = Object.assign(m, u.query);
      let b = t.stringify(E, f);
      b && (b = `?${b}`);
      let k = g(u.url);
      return (
        u.fragmentIdentifier && (k = `#${_(u.fragmentIdentifier, f)}`),
        `${h}${b}${k}`
      );
    }),
    (t.pick = (u, f, h) => {
      h = Object.assign({ parseFragmentIdentifier: !0 }, h);
      const { url: d, query: m, fragmentIdentifier: E } = t.parseUrl(u, h);
      return t.stringifyUrl(
        { url: d, query: o(m, f), fragmentIdentifier: E },
        h
      );
    }),
    (t.exclude = (u, f, h) => {
      const d = Array.isArray(f) ? (m) => !f.includes(m) : (m, E) => !f(m, E);
      return t.pick(u, d, h);
    });
})(kt);
function Kn(t) {
  const e = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0;
  return typeof e < "u" ? t.substr(e) : "";
}
function Yn(t, e) {
  let n = Rt(t);
  return (n = Object.assign(Object.assign({}, n), e)), (t = Gn(n)), t;
}
function Rt(t) {
  return kt.parse(t);
}
function Gn(t) {
  return kt.stringify(t);
}
function Zn(t) {
  return typeof t.bridge < "u";
}
function Xn(t) {
  const e = t.indexOf(":"),
    n = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0,
    r = t.substring(0, e),
    o = t.substring(e + 1, n);
  function i(v) {
    const p = "@",
      g = v.split(p);
    return { handshakeTopic: g[0], version: parseInt(g[1], 10) };
  }
  const s = i(o),
    a = typeof n < "u" ? t.substr(n) : "";
  function c(v) {
    const p = Rt(v);
    return { key: p.key || "", bridge: p.bridge || "" };
  }
  const _ = c(a);
  return Object.assign(Object.assign({ protocol: r }, s), _);
}
function xs(t) {
  return t === "" || (typeof t == "string" && t.trim() === "");
}
function Ms(t) {
  return !(t && t.length);
}
function As(t) {
  return Le(t);
}
function Os(t) {
  return vt(t);
}
function Ls(t) {
  return Rn(t);
}
function Bs(t) {
  return Li(t);
}
function Ps(t) {
  return Bi(t);
}
function Us(t, e) {
  return kn(t, e);
}
function qs(t) {
  return typeof t.params == "object";
}
function er(t) {
  return typeof t.method < "u";
}
function K(t) {
  return typeof t.result < "u";
}
function ue(t) {
  return typeof t.error < "u";
}
function tt(t) {
  return typeof t.event < "u";
}
function tr(t) {
  return di.includes(t) || t.startsWith("wc_");
}
function nr(t) {
  return t.method.startsWith("wc_") ? !0 : !dt.includes(t.method);
}
const Ds = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      addHexPrefix: ys,
      appendToQueryString: Yn,
      concatArrayBuffers: Qi,
      concatBuffers: Zi,
      convertArrayBufferToBuffer: ke,
      convertArrayBufferToHex: Nn,
      convertArrayBufferToNumber: Ji,
      convertArrayBufferToUtf8: Vi,
      convertBufferToArrayBuffer: xn,
      convertBufferToHex: Yi,
      convertBufferToNumber: Gi,
      convertBufferToUtf8: Ki,
      convertHexToArrayBuffer: Mn,
      convertHexToBuffer: rs,
      convertHexToNumber: is,
      convertHexToUtf8: os,
      convertNumberToArrayBuffer: as,
      convertNumberToBuffer: ss,
      convertNumberToHex: An,
      convertNumberToUtf8: cs,
      convertUtf8ToArrayBuffer: Xi,
      convertUtf8ToBuffer: es,
      convertUtf8ToHex: ts,
      convertUtf8ToNumber: ns,
      detectEnv: Pe,
      detectOS: Ue,
      formatIOSMobile: Cs,
      formatMobileRegistry: Ns,
      formatMobileRegistryEntry: Qn,
      formatQueryString: Gn,
      formatRpcError: Vn,
      getClientMeta: et,
      getCrypto: ps,
      getCryptoOrThrow: gs,
      getDappRegistryUrl: Ts,
      getDocument: fs,
      getDocumentOrThrow: ds,
      getEncoding: Ps,
      getFromWindow: ls,
      getFromWindowOrThrow: us,
      getInfuraRpcUrl: jn,
      getLocal: St,
      getLocalStorage: Be,
      getLocalStorageOrThrow: ms,
      getLocation: Ln,
      getLocationOrThrow: hs,
      getMobileLinkRegistry: Is,
      getMobileRegistryEntry: zn,
      getNavigator: On,
      getNavigatorOrThrow: _s,
      getQueryString: Kn,
      getRpcUrl: Wn,
      getType: Bs,
      getWalletRegistryUrl: Rs,
      isAndroid: Bn,
      isArrayBuffer: Ls,
      isBrowser: Dn,
      isBuffer: As,
      isEmptyArray: Ms,
      isEmptyString: xs,
      isHexString: Us,
      isIOS: Pn,
      isInternalEvent: tt,
      isJsonRpcRequest: er,
      isJsonRpcResponseError: ue,
      isJsonRpcResponseSuccess: K,
      isJsonRpcSubscription: qs,
      isMobile: Un,
      isNode: qn,
      isReservedEvent: tr,
      isSilentPayload: nr,
      isTypedArray: Os,
      isWalletConnectSession: Zn,
      logDeprecationWarning: Es,
      parseQueryString: Rt,
      parseWalletConnectUri: Xn,
      payloadId: Hn,
      promisify: ks,
      removeHexLeadingZeros: vs,
      removeHexPrefix: bs,
      removeLocal: It,
      safeJsonParse: $n,
      safeJsonStringify: Fn,
      sanitizeHex: ws,
      saveMobileLinkInfo: Ss,
      setLocal: Ct,
      uuid: Ce,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
class $s {
  constructor() {
    (this._eventEmitters = []),
      typeof window < "u" &&
        typeof window.addEventListener < "u" &&
        (window.addEventListener("online", () => this.trigger("online")),
        window.addEventListener("offline", () => this.trigger("offline")));
  }
  on(e, n) {
    this._eventEmitters.push({ event: e, callback: n });
  }
  trigger(e) {
    let n = [];
    e && (n = this._eventEmitters.filter((r) => r.event === e)),
      n.forEach((r) => {
        r.callback();
      });
  }
}
const Fs = typeof global.WebSocket < "u" ? global.WebSocket : require("ws");
class Hs {
  constructor(e) {
    if (
      ((this.opts = e),
      (this._queue = []),
      (this._events = []),
      (this._subscriptions = []),
      (this._protocol = e.protocol),
      (this._version = e.version),
      (this._url = ""),
      (this._netMonitor = null),
      (this._socket = null),
      (this._nextSocket = null),
      (this._subscriptions = e.subscriptions || []),
      (this._netMonitor = e.netMonitor || new $s()),
      !e.url || typeof e.url != "string")
    )
      throw new Error("Missing or invalid WebSocket url");
    (this._url = e.url),
      this._netMonitor.on("online", () => this._socketCreate());
  }
  set readyState(e) {}
  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }
  set connecting(e) {}
  get connecting() {
    return this.readyState === 0;
  }
  set connected(e) {}
  get connected() {
    return this.readyState === 1;
  }
  set closing(e) {}
  get closing() {
    return this.readyState === 2;
  }
  set closed(e) {}
  get closed() {
    return this.readyState === 3;
  }
  open() {
    this._socketCreate();
  }
  close() {
    this._socketClose();
  }
  send(e, n, r) {
    if (!n || typeof n != "string")
      throw new Error("Missing or invalid topic field");
    this._socketSend({ topic: n, type: "pub", payload: e, silent: !!r });
  }
  subscribe(e) {
    this._socketSend({ topic: e, type: "sub", payload: "", silent: !0 });
  }
  on(e, n) {
    this._events.push({ event: e, callback: n });
  }
  _socketCreate() {
    if (this._nextSocket) return;
    const e = js(this._url, this._protocol, this._version);
    if (((this._nextSocket = new Fs(e)), !this._nextSocket))
      throw new Error("Failed to create socket");
    (this._nextSocket.onmessage = (n) => this._socketReceive(n)),
      (this._nextSocket.onopen = () => this._socketOpen()),
      (this._nextSocket.onerror = (n) => this._socketError(n)),
      (this._nextSocket.onclose = () => {
        setTimeout(() => {
          (this._nextSocket = null), this._socketCreate();
        }, 1e3);
      });
  }
  _socketOpen() {
    this._socketClose(),
      (this._socket = this._nextSocket),
      (this._nextSocket = null),
      this._queueSubscriptions(),
      this._pushQueue();
  }
  _socketClose() {
    this._socket && ((this._socket.onclose = () => {}), this._socket.close());
  }
  _socketSend(e) {
    const n = JSON.stringify(e);
    this._socket && this._socket.readyState === 1
      ? this._socket.send(n)
      : (this._setToQueue(e), this._socketCreate());
  }
  async _socketReceive(e) {
    let n;
    try {
      n = JSON.parse(e.data);
    } catch {
      return;
    }
    if (
      (this._socketSend({
        topic: n.topic,
        type: "ack",
        payload: "",
        silent: !0,
      }),
      this._socket && this._socket.readyState === 1)
    ) {
      const r = this._events.filter((o) => o.event === "message");
      r && r.length && r.forEach((o) => o.callback(n));
    }
  }
  _socketError(e) {
    const n = this._events.filter((r) => r.event === "error");
    n && n.length && n.forEach((r) => r.callback(e));
  }
  _queueSubscriptions() {
    this._subscriptions.forEach((n) =>
      this._queue.push({ topic: n, type: "sub", payload: "", silent: !0 })
    ),
      (this._subscriptions = this.opts.subscriptions || []);
  }
  _setToQueue(e) {
    this._queue.push(e);
  }
  _pushQueue() {
    this._queue.forEach((n) => this._socketSend(n)), (this._queue = []);
  }
}
function js(t, e, n) {
  var r, o;
  const s = (
      t.startsWith("https")
        ? t.replace("https", "wss")
        : t.startsWith("http")
        ? t.replace("http", "ws")
        : t
    ).split("?"),
    a = Dn()
      ? {
          protocol: e,
          version: n,
          env: "browser",
          host: ((r = Ln()) === null || r === void 0 ? void 0 : r.host) || "",
        }
      : {
          protocol: e,
          version: n,
          env: ((o = Pe()) === null || o === void 0 ? void 0 : o.name) || "",
        },
    c = Yn(Kn(s[1] || ""), a);
  return s[0] + "?" + c;
}
class Ws {
  constructor() {
    this._eventEmitters = [];
  }
  subscribe(e) {
    this._eventEmitters.push(e);
  }
  unsubscribe(e) {
    this._eventEmitters = this._eventEmitters.filter((n) => n.event !== e);
  }
  trigger(e) {
    let n = [],
      r;
    er(e)
      ? (r = e.method)
      : K(e) || ue(e)
      ? (r = `response:${e.id}`)
      : tt(e)
      ? (r = e.event)
      : (r = ""),
      r && (n = this._eventEmitters.filter((o) => o.event === r)),
      (!n || !n.length) &&
        !tr(r) &&
        !tt(r) &&
        (n = this._eventEmitters.filter((o) => o.event === "call_request")),
      n.forEach((o) => {
        if (ue(e)) {
          const i = new Error(e.error.message);
          o.callback(i, null);
        } else o.callback(null, e);
      });
  }
}
class zs {
  constructor(e = "walletconnect") {
    this.storageId = e;
  }
  getSession() {
    let e = null;
    const n = St(this.storageId);
    return n && Zn(n) && (e = n), e;
  }
  setSession(e) {
    return Ct(this.storageId, e), e;
  }
  removeSession() {
    It(this.storageId);
  }
}
const Vs = "walletconnect.org",
  Js = "abcdefghijklmnopqrstuvwxyz0123456789",
  rr = Js.split("").map((t) => `https://${t}.bridge.walletconnect.org`);
function Qs(t) {
  let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
  return (e = e.split(":")[0]), (e = e.split("?")[0]), e;
}
function Ks(t) {
  return Qs(t).split(".").slice(-2).join(".");
}
function Ys() {
  return Math.floor(Math.random() * rr.length);
}
function Gs() {
  return rr[Ys()];
}
function Zs(t) {
  return Ks(t) === Vs;
}
function Xs(t) {
  return Zs(t) ? Gs() : t;
}
class ea {
  constructor(e) {
    if (
      ((this.protocol = "wc"),
      (this.version = 1),
      (this._bridge = ""),
      (this._key = null),
      (this._clientId = ""),
      (this._clientMeta = null),
      (this._peerId = ""),
      (this._peerMeta = null),
      (this._handshakeId = 0),
      (this._handshakeTopic = ""),
      (this._connected = !1),
      (this._accounts = []),
      (this._chainId = 0),
      (this._networkId = 0),
      (this._rpcUrl = ""),
      (this._eventManager = new Ws()),
      (this._clientMeta = et() || e.connectorOpts.clientMeta || null),
      (this._cryptoLib = e.cryptoLib),
      (this._sessionStorage =
        e.sessionStorage || new zs(e.connectorOpts.storageId)),
      (this._qrcodeModal = e.connectorOpts.qrcodeModal),
      (this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions),
      (this._signingMethods = [
        ...dt,
        ...(e.connectorOpts.signingMethods || []),
      ]),
      !e.connectorOpts.bridge &&
        !e.connectorOpts.uri &&
        !e.connectorOpts.session)
    )
      throw new Error(ci);
    e.connectorOpts.bridge && (this.bridge = Xs(e.connectorOpts.bridge)),
      e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
    const n = e.connectorOpts.session || this._getStorageSession();
    n && (this.session = n),
      this.handshakeId &&
        this._subscribeToSessionResponse(
          this.handshakeId,
          "Session request rejected"
        ),
      (this._transport =
        e.transport ||
        new Hs({
          protocol: this.protocol,
          version: this.version,
          url: this.bridge,
          subscriptions: [this.clientId],
        })),
      this._subscribeToInternalEvents(),
      this._initTransport(),
      e.connectorOpts.uri && this._subscribeToSessionRequest(),
      e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
  }
  set bridge(e) {
    e && (this._bridge = e);
  }
  get bridge() {
    return this._bridge;
  }
  set key(e) {
    if (!e) return;
    const n = Mn(e);
    this._key = n;
  }
  get key() {
    return this._key ? Nn(this._key, !0) : "";
  }
  set clientId(e) {
    e && (this._clientId = e);
  }
  get clientId() {
    let e = this._clientId;
    return e || (e = this._clientId = Ce()), this._clientId;
  }
  set peerId(e) {
    e && (this._peerId = e);
  }
  get peerId() {
    return this._peerId;
  }
  set clientMeta(e) {}
  get clientMeta() {
    let e = this._clientMeta;
    return e || (e = this._clientMeta = et()), e;
  }
  set peerMeta(e) {
    this._peerMeta = e;
  }
  get peerMeta() {
    return this._peerMeta;
  }
  set handshakeTopic(e) {
    e && (this._handshakeTopic = e);
  }
  get handshakeTopic() {
    return this._handshakeTopic;
  }
  set handshakeId(e) {
    e && (this._handshakeId = e);
  }
  get handshakeId() {
    return this._handshakeId;
  }
  get uri() {
    return this._formatUri();
  }
  set uri(e) {
    if (!e) return;
    const { handshakeTopic: n, bridge: r, key: o } = this._parseUri(e);
    (this.handshakeTopic = n), (this.bridge = r), (this.key = o);
  }
  set chainId(e) {
    this._chainId = e;
  }
  get chainId() {
    return this._chainId;
  }
  set networkId(e) {
    this._networkId = e;
  }
  get networkId() {
    return this._networkId;
  }
  set accounts(e) {
    this._accounts = e;
  }
  get accounts() {
    return this._accounts;
  }
  set rpcUrl(e) {
    this._rpcUrl = e;
  }
  get rpcUrl() {
    return this._rpcUrl;
  }
  set connected(e) {}
  get connected() {
    return this._connected;
  }
  set pending(e) {}
  get pending() {
    return !!this._handshakeTopic;
  }
  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic,
    };
  }
  set session(e) {
    e &&
      ((this._connected = e.connected),
      (this.accounts = e.accounts),
      (this.chainId = e.chainId),
      (this.bridge = e.bridge),
      (this.key = e.key),
      (this.clientId = e.clientId),
      (this.clientMeta = e.clientMeta),
      (this.peerId = e.peerId),
      (this.peerMeta = e.peerMeta),
      (this.handshakeId = e.handshakeId),
      (this.handshakeTopic = e.handshakeTopic));
  }
  on(e, n) {
    const r = { event: e, callback: n };
    this._eventManager.subscribe(r);
  }
  off(e) {
    this._eventManager.unsubscribe(e);
  }
  async createInstantRequest(e) {
    this._key = await this._generateKey();
    const n = this._formatRequest({
      method: "wc_instantRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          request: this._formatRequest(e),
        },
      ],
    });
    (this.handshakeId = n.id),
      (this.handshakeTopic = Ce()),
      this._eventManager.trigger({ event: "display_uri", params: [this.uri] }),
      this.on("modal_closed", () => {
        throw new Error(zt);
      });
    const r = () => {
      this.killSession();
    };
    try {
      const o = await this._sendCallRequest(n);
      return o && r(), o;
    } catch (o) {
      throw (r(), o);
    }
  }
  async connect(e) {
    if (!this._qrcodeModal) throw new Error(ui);
    return this.connected
      ? { chainId: this.chainId, accounts: this.accounts }
      : (await this.createSession(e),
        new Promise(async (n, r) => {
          this.on("modal_closed", () => r(new Error(zt))),
            this.on("connect", (o, i) => {
              if (o) return r(o);
              n(i.params[0]);
            });
        }));
  }
  async createSession(e) {
    if (this._connected) throw new Error(We);
    if (this.pending) return;
    this._key = await this._generateKey();
    const n = this._formatRequest({
      method: "wc_sessionRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          chainId: e && e.chainId ? e.chainId : null,
        },
      ],
    });
    (this.handshakeId = n.id),
      (this.handshakeTopic = Ce()),
      this._sendSessionRequest(n, "Session update rejected", {
        topic: this.handshakeTopic,
      }),
      this._eventManager.trigger({ event: "display_uri", params: [this.uri] });
  }
  approveSession(e) {
    if (this._connected) throw new Error(We);
    (this.chainId = e.chainId),
      (this.accounts = e.accounts),
      (this.networkId = e.networkId || 0),
      (this.rpcUrl = e.rpcUrl || "");
    const n = {
        approved: !0,
        chainId: this.chainId,
        networkId: this.networkId,
        accounts: this.accounts,
        rpcUrl: this.rpcUrl,
        peerId: this.clientId,
        peerMeta: this.clientMeta,
      },
      r = { id: this.handshakeId, jsonrpc: "2.0", result: n };
    this._sendResponse(r),
      (this._connected = !0),
      this._setStorageSession(),
      this._eventManager.trigger({
        event: "connect",
        params: [
          {
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            chainId: this.chainId,
            accounts: this.accounts,
          },
        ],
      });
  }
  rejectSession(e) {
    if (this._connected) throw new Error(We);
    const n = e && e.message ? e.message : ni,
      r = this._formatResponse({ id: this.handshakeId, error: { message: n } });
    this._sendResponse(r),
      (this._connected = !1),
      this._eventManager.trigger({
        event: "disconnect",
        params: [{ message: n }],
      }),
      this._removeStorageSession();
  }
  updateSession(e) {
    if (!this._connected) throw new Error(V);
    (this.chainId = e.chainId),
      (this.accounts = e.accounts),
      (this.networkId = e.networkId || 0),
      (this.rpcUrl = e.rpcUrl || "");
    const n = {
        approved: !0,
        chainId: this.chainId,
        networkId: this.networkId,
        accounts: this.accounts,
        rpcUrl: this.rpcUrl,
      },
      r = this._formatRequest({ method: "wc_sessionUpdate", params: [n] });
    this._sendSessionRequest(r, "Session update rejected"),
      this._eventManager.trigger({
        event: "session_update",
        params: [{ chainId: this.chainId, accounts: this.accounts }],
      }),
      this._manageStorageSession();
  }
  async killSession(e) {
    const n = e ? e.message : "Session Disconnected",
      r = { approved: !1, chainId: null, networkId: null, accounts: null },
      o = this._formatRequest({ method: "wc_sessionUpdate", params: [r] });
    await this._sendRequest(o), this._handleSessionDisconnect(n);
  }
  async sendTransaction(e) {
    if (!this._connected) throw new Error(V);
    const n = e,
      r = this._formatRequest({ method: "eth_sendTransaction", params: [n] });
    return await this._sendCallRequest(r);
  }
  async signTransaction(e) {
    if (!this._connected) throw new Error(V);
    const n = e,
      r = this._formatRequest({ method: "eth_signTransaction", params: [n] });
    return await this._sendCallRequest(r);
  }
  async signMessage(e) {
    if (!this._connected) throw new Error(V);
    const n = this._formatRequest({ method: "eth_sign", params: e });
    return await this._sendCallRequest(n);
  }
  async signPersonalMessage(e) {
    if (!this._connected) throw new Error(V);
    const n = this._formatRequest({ method: "personal_sign", params: e });
    return await this._sendCallRequest(n);
  }
  async signTypedData(e) {
    if (!this._connected) throw new Error(V);
    const n = this._formatRequest({ method: "eth_signTypedData", params: e });
    return await this._sendCallRequest(n);
  }
  async updateChain(e) {
    if (!this._connected) throw new Error("Session currently disconnected");
    const n = this._formatRequest({
      method: "wallet_updateChain",
      params: [e],
    });
    return await this._sendCallRequest(n);
  }
  unsafeSend(e, n) {
    return (
      this._sendRequest(e, n),
      this._eventManager.trigger({
        event: "call_request_sent",
        params: [{ request: e, options: n }],
      }),
      new Promise((r, o) => {
        this._subscribeToResponse(e.id, (i, s) => {
          if (i) {
            o(i);
            return;
          }
          if (!s) throw new Error(ri);
          r(s);
        });
      })
    );
  }
  async sendCustomRequest(e, n) {
    if (!this._connected) throw new Error(V);
    switch (e.method) {
      case "eth_accounts":
        return this.accounts;
      case "eth_chainId":
        return An(this.chainId);
      case "eth_sendTransaction":
      case "eth_signTransaction":
        e.params;
        break;
      case "personal_sign":
        e.params;
        break;
    }
    const r = this._formatRequest(e);
    return await this._sendCallRequest(r, n);
  }
  approveRequest(e) {
    if (K(e)) {
      const n = this._formatResponse(e);
      this._sendResponse(n);
    } else throw new Error(oi);
  }
  rejectRequest(e) {
    if (ue(e)) {
      const n = this._formatResponse(e);
      this._sendResponse(n);
    } else throw new Error(ii);
  }
  transportClose() {
    this._transport.close();
  }
  async _sendRequest(e, n) {
    const r = this._formatRequest(e),
      o = await this._encrypt(r),
      i = typeof (n == null ? void 0 : n.topic) < "u" ? n.topic : this.peerId,
      s = JSON.stringify(o),
      a =
        typeof (n == null ? void 0 : n.forcePushNotification) < "u"
          ? !n.forcePushNotification
          : nr(r);
    this._transport.send(s, i, a);
  }
  async _sendResponse(e) {
    const n = await this._encrypt(e),
      r = this.peerId,
      o = JSON.stringify(n),
      i = !0;
    this._transport.send(o, r, i);
  }
  async _sendSessionRequest(e, n, r) {
    this._sendRequest(e, r), this._subscribeToSessionResponse(e.id, n);
  }
  _sendCallRequest(e, n) {
    return (
      this._sendRequest(e, n),
      this._eventManager.trigger({
        event: "call_request_sent",
        params: [{ request: e, options: n }],
      }),
      this._subscribeToCallResponse(e.id)
    );
  }
  _formatRequest(e) {
    if (typeof e.method > "u") throw new Error(si);
    return {
      id: typeof e.id > "u" ? Hn() : e.id,
      jsonrpc: "2.0",
      method: e.method,
      params: typeof e.params > "u" ? [] : e.params,
    };
  }
  _formatResponse(e) {
    if (typeof e.id > "u") throw new Error(ai);
    const n = { id: e.id, jsonrpc: "2.0" };
    if (ue(e)) {
      const r = Vn(e.error);
      return Object.assign(Object.assign(Object.assign({}, n), e), {
        error: r,
      });
    } else if (K(e)) return Object.assign(Object.assign({}, n), e);
    throw new Error(Wt);
  }
  _handleSessionDisconnect(e) {
    const n = e || "Session Disconnected";
    this._connected || (this._qrcodeModal && this._qrcodeModal.close(), It(Xe)),
      this._connected && (this._connected = !1),
      this._handshakeId && (this._handshakeId = 0),
      this._handshakeTopic && (this._handshakeTopic = ""),
      this._peerId && (this._peerId = ""),
      this._eventManager.trigger({
        event: "disconnect",
        params: [{ message: n }],
      }),
      this._removeStorageSession(),
      this.transportClose();
  }
  _handleSessionResponse(e, n) {
    n
      ? n.approved
        ? (this._connected
            ? (n.chainId && (this.chainId = n.chainId),
              n.accounts && (this.accounts = n.accounts),
              this._eventManager.trigger({
                event: "session_update",
                params: [{ chainId: this.chainId, accounts: this.accounts }],
              }))
            : ((this._connected = !0),
              n.chainId && (this.chainId = n.chainId),
              n.accounts && (this.accounts = n.accounts),
              n.peerId && !this.peerId && (this.peerId = n.peerId),
              n.peerMeta && !this.peerMeta && (this.peerMeta = n.peerMeta),
              this._eventManager.trigger({
                event: "connect",
                params: [
                  {
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    chainId: this.chainId,
                    accounts: this.accounts,
                  },
                ],
              })),
          this._manageStorageSession())
        : this._handleSessionDisconnect(e)
      : this._handleSessionDisconnect(e);
  }
  async _handleIncomingMessages(e) {
    if (![this.clientId, this.handshakeTopic].includes(e.topic)) return;
    let r;
    try {
      r = JSON.parse(e.payload);
    } catch {
      return;
    }
    const o = await this._decrypt(r);
    o && this._eventManager.trigger(o);
  }
  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }
  _subscribeToResponse(e, n) {
    this.on(`response:${e}`, n);
  }
  _subscribeToSessionResponse(e, n) {
    this._subscribeToResponse(e, (r, o) => {
      if (r) {
        this._handleSessionResponse(r.message);
        return;
      }
      K(o)
        ? this._handleSessionResponse(n, o.result)
        : o.error && o.error.message
        ? this._handleSessionResponse(o.error.message)
        : this._handleSessionResponse(n);
    });
  }
  _subscribeToCallResponse(e) {
    return new Promise((n, r) => {
      this._subscribeToResponse(e, (o, i) => {
        if (o) {
          r(o);
          return;
        }
        K(i)
          ? n(i.result)
          : i.error && i.error.message
          ? r(i.error)
          : r(new Error(Wt));
      });
    });
  }
  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      this._qrcodeModal &&
        this._qrcodeModal.open(
          this.uri,
          () => {
            this._eventManager.trigger({ event: "modal_closed", params: [] });
          },
          this._qrcodeModalOptions
        );
    }),
      this.on("connect", () => {
        this._qrcodeModal && this._qrcodeModal.close();
      }),
      this.on("call_request_sent", (e, n) => {
        const { request: r } = n.params[0];
        if (Un() && this._signingMethods.includes(r.method)) {
          const o = St(Xe);
          o && (window.location.href = o.href);
        }
      }),
      this.on("wc_sessionRequest", (e, n) => {
        e &&
          this._eventManager.trigger({
            event: "error",
            params: [{ code: "SESSION_REQUEST_ERROR", message: e.toString() }],
          }),
          (this.handshakeId = n.id),
          (this.peerId = n.params[0].peerId),
          (this.peerMeta = n.params[0].peerMeta);
        const r = Object.assign(Object.assign({}, n), {
          method: "session_request",
        });
        this._eventManager.trigger(r);
      }),
      this.on("wc_sessionUpdate", (e, n) => {
        e && this._handleSessionResponse(e.message),
          this._handleSessionResponse("Session disconnected", n.params[0]);
      });
  }
  _initTransport() {
    this._transport.on("message", (e) => this._handleIncomingMessages(e)),
      this._transport.on("open", () =>
        this._eventManager.trigger({ event: "transport_open", params: [] })
      ),
      this._transport.on("close", () =>
        this._eventManager.trigger({ event: "transport_close", params: [] })
      ),
      this._transport.on("error", () =>
        this._eventManager.trigger({
          event: "transport_error",
          params: ["Websocket connection failed"],
        })
      ),
      this._transport.open();
  }
  _formatUri() {
    const e = this.protocol,
      n = this.handshakeTopic,
      r = this.version,
      o = encodeURIComponent(this.bridge),
      i = this.key;
    return `${e}:${n}@${r}?bridge=${o}&key=${i}`;
  }
  _parseUri(e) {
    const n = Xn(e);
    if (n.protocol === this.protocol) {
      if (!n.handshakeTopic)
        throw Error("Invalid or missing handshakeTopic parameter value");
      const r = n.handshakeTopic;
      if (!n.bridge)
        throw Error("Invalid or missing bridge url parameter value");
      const o = decodeURIComponent(n.bridge);
      if (!n.key) throw Error("Invalid or missing key parameter value");
      const i = n.key;
      return { handshakeTopic: r, bridge: o, key: i };
    } else throw new Error(li);
  }
  async _generateKey() {
    return this._cryptoLib ? await this._cryptoLib.generateKey() : null;
  }
  async _encrypt(e) {
    const n = this._key;
    return this._cryptoLib && n ? await this._cryptoLib.encrypt(e, n) : null;
  }
  async _decrypt(e) {
    const n = this._key;
    return this._cryptoLib && n ? await this._cryptoLib.decrypt(e, n) : null;
  }
  _getStorageSession() {
    let e = null;
    return this._sessionStorage && (e = this._sessionStorage.getSession()), e;
  }
  _setStorageSession() {
    this._sessionStorage && this._sessionStorage.setSession(this.session);
  }
  _removeStorageSession() {
    this._sessionStorage && this._sessionStorage.removeSession();
  }
  _manageStorageSession() {
    this._connected ? this._setStorageSession() : this._removeStorageSession();
  }
  _registerPushServer(e) {
    if (!e.url || typeof e.url != "string")
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    if (!e.type || typeof e.type != "string")
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    if (!e.token || typeof e.token != "string")
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    const n = {
      bridge: this.bridge,
      topic: this.clientId,
      type: e.type,
      token: e.token,
      peerName: "",
      language: e.language || "",
    };
    this.on("connect", async (r, o) => {
      if (r) throw r;
      if (e.peerMeta) {
        const i = o.params[0].peerMeta.name;
        n.peerName = i;
      }
      try {
        if (
          !(
            await (
              await fetch(`${e.url}/new`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(n),
              })
            ).json()
          ).success
        )
          throw Error("Failed to register in Push Server");
      } catch {
        throw Error("Failed to register in Push Server");
      }
    });
  }
}
function ta(t) {
  return he.getBrowerCrypto().getRandomValues(new Uint8Array(t));
}
const or = 256,
  ir = or,
  na = or,
  H = "AES-CBC",
  ra = `SHA-${ir}`,
  nt = "HMAC",
  oa = "encrypt",
  ia = "decrypt",
  sa = "sign",
  aa = "verify";
function ca(t) {
  return t === H ? { length: ir, name: H } : { hash: { name: ra }, name: nt };
}
function la(t) {
  return t === H ? [oa, ia] : [sa, aa];
}
async function Tt(t, e = H) {
  return he.getSubtleCrypto().importKey("raw", t, ca(e), !0, la(e));
}
async function ua(t, e, n) {
  const r = he.getSubtleCrypto(),
    o = await Tt(e, H),
    i = await r.encrypt({ iv: t, name: H }, o, n);
  return new Uint8Array(i);
}
async function da(t, e, n) {
  const r = he.getSubtleCrypto(),
    o = await Tt(e, H),
    i = await r.decrypt({ iv: t, name: H }, o, n);
  return new Uint8Array(i);
}
async function fa(t, e) {
  const n = he.getSubtleCrypto(),
    r = await Tt(t, nt),
    o = await n.sign({ length: na, name: nt }, r, e);
  return new Uint8Array(o);
}
function _a(t, e, n) {
  return ua(t, e, n);
}
function ha(t, e, n) {
  return da(t, e, n);
}
async function sr(t, e) {
  return await fa(t, e);
}
async function ar(t) {
  const e = (t || 256) / 8,
    n = ta(e);
  return xn(oe(n));
}
async function cr(t, e) {
  const n = F(t.data),
    r = F(t.iv),
    o = F(t.hmac),
    i = $(o, !1),
    s = Tn(n, r),
    a = await sr(e, s),
    c = $(a, !1);
  return Z(i) === Z(c);
}
async function ga(t, e, n) {
  const r = G(ke(e)),
    o = n || (await ar(128)),
    i = G(ke(o)),
    s = $(i, !1),
    a = JSON.stringify(t),
    c = In(a),
    _ = await _a(i, r, c),
    l = $(_, !1),
    v = Tn(_, i),
    p = await sr(r, v),
    g = $(p, !1);
  return { data: l, hmac: g, iv: s };
}
async function pa(t, e) {
  const n = G(ke(e));
  if (!n) throw new Error("Missing key: required for decryption");
  if (!(await cr(t, n))) return null;
  const o = F(t.data),
    i = F(t.iv),
    s = await ha(i, n, o),
    a = Cn(s);
  let c;
  try {
    c = JSON.parse(a);
  } catch {
    return null;
  }
  return c;
}
const ma = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      decrypt: pa,
      encrypt: ga,
      generateKey: ar,
      verifyHmac: cr,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
class wa extends ea {
  constructor(e, n) {
    super({ cryptoLib: ma, connectorOpts: e, pushServerOpts: n });
  }
}
const ya = wn(Ds);
var pe = {},
  ba = function () {
    return (
      typeof Promise == "function" &&
      Promise.prototype &&
      Promise.prototype.then
    );
  },
  lr = {},
  A = {};
let Nt;
const va = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
  2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
];
A.getSymbolSize = function (e) {
  if (!e) throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
A.getSymbolTotalCodewords = function (e) {
  return va[e];
};
A.getBCHDigit = function (t) {
  let e = 0;
  for (; t !== 0; ) e++, (t >>>= 1);
  return e;
};
A.setToSJISFunction = function (e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Nt = e;
};
A.isKanjiModeEnabled = function () {
  return typeof Nt < "u";
};
A.toSJIS = function (e) {
  return Nt(e);
};
var qe = {};
(function (t) {
  (t.L = { bit: 1 }),
    (t.M = { bit: 0 }),
    (t.Q = { bit: 3 }),
    (t.H = { bit: 2 });
  function e(n) {
    if (typeof n != "string") throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  (t.isValid = function (r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
  }),
    (t.from = function (r, o) {
      if (t.isValid(r)) return r;
      try {
        return e(r);
      } catch {
        return o;
      }
    });
})(qe);
function ur() {
  (this.buffer = []), (this.length = 0);
}
ur.prototype = {
  get: function (t) {
    const e = Math.floor(t / 8);
    return ((this.buffer[e] >>> (7 - (t % 8))) & 1) === 1;
  },
  put: function (t, e) {
    for (let n = 0; n < e; n++) this.putBit(((t >>> (e - n - 1)) & 1) === 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (t) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0),
      t && (this.buffer[e] |= 128 >>> this.length % 8),
      this.length++;
  },
};
var Ea = ur;
function me(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  (this.size = t),
    (this.data = new Uint8Array(t * t)),
    (this.reservedBit = new Uint8Array(t * t));
}
me.prototype.set = function (t, e, n, r) {
  const o = t * this.size + e;
  (this.data[o] = n), r && (this.reservedBit[o] = !0);
};
me.prototype.get = function (t, e) {
  return this.data[t * this.size + e];
};
me.prototype.xor = function (t, e, n) {
  this.data[t * this.size + e] ^= n;
};
me.prototype.isReserved = function (t, e) {
  return this.reservedBit[t * this.size + e];
};
var Ca = me,
  dr = {};
(function (t) {
  const e = A.getSymbolSize;
  (t.getRowColCoords = function (r) {
    if (r === 1) return [];
    const o = Math.floor(r / 7) + 2,
      i = e(r),
      s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2,
      a = [i - 7];
    for (let c = 1; c < o - 1; c++) a[c] = a[c - 1] - s;
    return a.push(6), a.reverse();
  }),
    (t.getPositions = function (r) {
      const o = [],
        i = t.getRowColCoords(r),
        s = i.length;
      for (let a = 0; a < s; a++)
        for (let c = 0; c < s; c++)
          (a === 0 && c === 0) ||
            (a === 0 && c === s - 1) ||
            (a === s - 1 && c === 0) ||
            o.push([i[a], i[c]]);
      return o;
    });
})(dr);
var fr = {};
const Sa = A.getSymbolSize,
  Vt = 7;
fr.getPositions = function (e) {
  const n = Sa(e);
  return [
    [0, 0],
    [n - Vt, 0],
    [0, n - Vt],
  ];
};
var _r = {};
(function (t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
  const e = { N1: 3, N2: 3, N3: 40, N4: 10 };
  (t.isValid = function (o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }),
    (t.from = function (o) {
      return t.isValid(o) ? parseInt(o, 10) : void 0;
    }),
    (t.getPenaltyN1 = function (o) {
      const i = o.size;
      let s = 0,
        a = 0,
        c = 0,
        _ = null,
        l = null;
      for (let v = 0; v < i; v++) {
        (a = c = 0), (_ = l = null);
        for (let p = 0; p < i; p++) {
          let g = o.get(v, p);
          g === _ ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), (_ = g), (a = 1)),
            (g = o.get(p, v)),
            g === l ? c++ : (c >= 5 && (s += e.N1 + (c - 5)), (l = g), (c = 1));
        }
        a >= 5 && (s += e.N1 + (a - 5)), c >= 5 && (s += e.N1 + (c - 5));
      }
      return s;
    }),
    (t.getPenaltyN2 = function (o) {
      const i = o.size;
      let s = 0;
      for (let a = 0; a < i - 1; a++)
        for (let c = 0; c < i - 1; c++) {
          const _ =
            o.get(a, c) +
            o.get(a, c + 1) +
            o.get(a + 1, c) +
            o.get(a + 1, c + 1);
          (_ === 4 || _ === 0) && s++;
        }
      return s * e.N2;
    }),
    (t.getPenaltyN3 = function (o) {
      const i = o.size;
      let s = 0,
        a = 0,
        c = 0;
      for (let _ = 0; _ < i; _++) {
        a = c = 0;
        for (let l = 0; l < i; l++)
          (a = ((a << 1) & 2047) | o.get(_, l)),
            l >= 10 && (a === 1488 || a === 93) && s++,
            (c = ((c << 1) & 2047) | o.get(l, _)),
            l >= 10 && (c === 1488 || c === 93) && s++;
      }
      return s * e.N3;
    }),
    (t.getPenaltyN4 = function (o) {
      let i = 0;
      const s = o.data.length;
      for (let c = 0; c < s; c++) i += o.data[c];
      return Math.abs(Math.ceil((i * 100) / s / 5) - 10) * e.N4;
    });
  function n(r, o, i) {
    switch (r) {
      case t.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case t.Patterns.PATTERN001:
        return o % 2 === 0;
      case t.Patterns.PATTERN010:
        return i % 3 === 0;
      case t.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return ((o * i) % 2) + ((o * i) % 3) === 0;
      case t.Patterns.PATTERN110:
        return (((o * i) % 2) + ((o * i) % 3)) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (((o * i) % 3) + ((o + i) % 2)) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  (t.applyMask = function (o, i) {
    const s = i.size;
    for (let a = 0; a < s; a++)
      for (let c = 0; c < s; c++) i.isReserved(c, a) || i.xor(c, a, n(o, c, a));
  }),
    (t.getBestMask = function (o, i) {
      const s = Object.keys(t.Patterns).length;
      let a = 0,
        c = 1 / 0;
      for (let _ = 0; _ < s; _++) {
        i(_), t.applyMask(_, o);
        const l =
          t.getPenaltyN1(o) +
          t.getPenaltyN2(o) +
          t.getPenaltyN3(o) +
          t.getPenaltyN4(o);
        t.applyMask(_, o), l < c && ((c = l), (a = _));
      }
      return a;
    });
})(_r);
var De = {};
const D = qe,
  ve = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
  ],
  Ee = [
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
    88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
    72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352,
    120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
    532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442,
    644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
    588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
    1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
    924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064,
    1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
    2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
  ];
De.getBlocksCount = function (e, n) {
  switch (n) {
    case D.L:
      return ve[(e - 1) * 4 + 0];
    case D.M:
      return ve[(e - 1) * 4 + 1];
    case D.Q:
      return ve[(e - 1) * 4 + 2];
    case D.H:
      return ve[(e - 1) * 4 + 3];
    default:
      return;
  }
};
De.getTotalCodewordsCount = function (e, n) {
  switch (n) {
    case D.L:
      return Ee[(e - 1) * 4 + 0];
    case D.M:
      return Ee[(e - 1) * 4 + 1];
    case D.Q:
      return Ee[(e - 1) * 4 + 2];
    case D.H:
      return Ee[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var hr = {},
  $e = {};
const ae = new Uint8Array(512),
  Re = new Uint8Array(256);
(function () {
  let e = 1;
  for (let n = 0; n < 255; n++)
    (ae[n] = e), (Re[e] = n), (e <<= 1), e & 256 && (e ^= 285);
  for (let n = 255; n < 512; n++) ae[n] = ae[n - 255];
})();
$e.log = function (e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return Re[e];
};
$e.exp = function (e) {
  return ae[e];
};
$e.mul = function (e, n) {
  return e === 0 || n === 0 ? 0 : ae[Re[e] + Re[n]];
};
(function (t) {
  const e = $e;
  (t.mul = function (r, o) {
    const i = new Uint8Array(r.length + o.length - 1);
    for (let s = 0; s < r.length; s++)
      for (let a = 0; a < o.length; a++) i[s + a] ^= e.mul(r[s], o[a]);
    return i;
  }),
    (t.mod = function (r, o) {
      let i = new Uint8Array(r);
      for (; i.length - o.length >= 0; ) {
        const s = i[0];
        for (let c = 0; c < o.length; c++) i[c] ^= e.mul(o[c], s);
        let a = 0;
        for (; a < i.length && i[a] === 0; ) a++;
        i = i.slice(a);
      }
      return i;
    }),
    (t.generateECPolynomial = function (r) {
      let o = new Uint8Array([1]);
      for (let i = 0; i < r; i++) o = t.mul(o, new Uint8Array([1, e.exp(i)]));
      return o;
    });
})(hr);
const gr = hr;
function xt(t) {
  (this.genPoly = void 0),
    (this.degree = t),
    this.degree && this.initialize(this.degree);
}
xt.prototype.initialize = function (e) {
  (this.degree = e), (this.genPoly = gr.generateECPolynomial(this.degree));
};
xt.prototype.encode = function (e) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  const n = new Uint8Array(e.length + this.degree);
  n.set(e);
  const r = gr.mod(n, this.genPoly),
    o = this.degree - r.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(r, o), i;
  }
  return r;
};
var Ia = xt,
  pr = {},
  j = {},
  Mt = {};
Mt.isValid = function (e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var B = {};
const mr = "[0-9]+",
  ka = "[A-Z $%*+\\-./:]+";
let de =
  "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
de = de.replace(/u/g, "\\u");
const Ra =
  "(?:(?![A-Z0-9 $%*+\\-./:]|" +
  de +
  `)(?:.|[\r
]))+`;
B.KANJI = new RegExp(de, "g");
B.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
B.BYTE = new RegExp(Ra, "g");
B.NUMERIC = new RegExp(mr, "g");
B.ALPHANUMERIC = new RegExp(ka, "g");
const Ta = new RegExp("^" + de + "$"),
  Na = new RegExp("^" + mr + "$"),
  xa = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
B.testKanji = function (e) {
  return Ta.test(e);
};
B.testNumeric = function (e) {
  return Na.test(e);
};
B.testAlphanumeric = function (e) {
  return xa.test(e);
};
(function (t) {
  const e = Mt,
    n = B;
  (t.NUMERIC = { id: "Numeric", bit: 1 << 0, ccBits: [10, 12, 14] }),
    (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 1 << 1, ccBits: [9, 11, 13] }),
    (t.BYTE = { id: "Byte", bit: 1 << 2, ccBits: [8, 16, 16] }),
    (t.KANJI = { id: "Kanji", bit: 1 << 3, ccBits: [8, 10, 12] }),
    (t.MIXED = { bit: -1 }),
    (t.getCharCountIndicator = function (i, s) {
      if (!i.ccBits) throw new Error("Invalid mode: " + i);
      if (!e.isValid(s)) throw new Error("Invalid version: " + s);
      return s >= 1 && s < 10
        ? i.ccBits[0]
        : s < 27
        ? i.ccBits[1]
        : i.ccBits[2];
    }),
    (t.getBestModeForData = function (i) {
      return n.testNumeric(i)
        ? t.NUMERIC
        : n.testAlphanumeric(i)
        ? t.ALPHANUMERIC
        : n.testKanji(i)
        ? t.KANJI
        : t.BYTE;
    }),
    (t.toString = function (i) {
      if (i && i.id) return i.id;
      throw new Error("Invalid mode");
    }),
    (t.isValid = function (i) {
      return i && i.bit && i.ccBits;
    });
  function r(o) {
    if (typeof o != "string") throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  t.from = function (i, s) {
    if (t.isValid(i)) return i;
    try {
      return r(i);
    } catch {
      return s;
    }
  };
})(j);
(function (t) {
  const e = A,
    n = De,
    r = qe,
    o = j,
    i = Mt,
    s =
      (1 << 12) |
      (1 << 11) |
      (1 << 10) |
      (1 << 9) |
      (1 << 8) |
      (1 << 5) |
      (1 << 2) |
      (1 << 0),
    a = e.getBCHDigit(s);
  function c(p, g, w) {
    for (let S = 1; S <= 40; S++) if (g <= t.getCapacity(S, w, p)) return S;
  }
  function _(p, g) {
    return o.getCharCountIndicator(p, g) + 4;
  }
  function l(p, g) {
    let w = 0;
    return (
      p.forEach(function (S) {
        const I = _(S.mode, g);
        w += I + S.getBitsLength();
      }),
      w
    );
  }
  function v(p, g) {
    for (let w = 1; w <= 40; w++)
      if (l(p, w) <= t.getCapacity(w, g, o.MIXED)) return w;
  }
  (t.from = function (g, w) {
    return i.isValid(g) ? parseInt(g, 10) : w;
  }),
    (t.getCapacity = function (g, w, S) {
      if (!i.isValid(g)) throw new Error("Invalid QR Code version");
      typeof S > "u" && (S = o.BYTE);
      const I = e.getSymbolTotalCodewords(g),
        u = n.getTotalCodewordsCount(g, w),
        f = (I - u) * 8;
      if (S === o.MIXED) return f;
      const h = f - _(S, g);
      switch (S) {
        case o.NUMERIC:
          return Math.floor((h / 10) * 3);
        case o.ALPHANUMERIC:
          return Math.floor((h / 11) * 2);
        case o.KANJI:
          return Math.floor(h / 13);
        case o.BYTE:
        default:
          return Math.floor(h / 8);
      }
    }),
    (t.getBestVersionForData = function (g, w) {
      let S;
      const I = r.from(w, r.M);
      if (Array.isArray(g)) {
        if (g.length > 1) return v(g, I);
        if (g.length === 0) return 1;
        S = g[0];
      } else S = g;
      return c(S.mode, S.getLength(), I);
    }),
    (t.getEncodedBits = function (g) {
      if (!i.isValid(g) || g < 7) throw new Error("Invalid QR Code version");
      let w = g << 12;
      for (; e.getBCHDigit(w) - a >= 0; ) w ^= s << (e.getBCHDigit(w) - a);
      return (g << 12) | w;
    });
})(pr);
var wr = {};
const rt = A,
  yr =
    (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
  Ma = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
  Jt = rt.getBCHDigit(yr);
wr.getEncodedBits = function (e, n) {
  const r = (e.bit << 3) | n;
  let o = r << 10;
  for (; rt.getBCHDigit(o) - Jt >= 0; ) o ^= yr << (rt.getBCHDigit(o) - Jt);
  return ((r << 10) | o) ^ Ma;
};
var br = {};
const Aa = j;
function X(t) {
  (this.mode = Aa.NUMERIC), (this.data = t.toString());
}
X.getBitsLength = function (e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
};
X.prototype.getLength = function () {
  return this.data.length;
};
X.prototype.getBitsLength = function () {
  return X.getBitsLength(this.data.length);
};
X.prototype.write = function (e) {
  let n, r, o;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    (r = this.data.substr(n, 3)), (o = parseInt(r, 10)), e.put(o, 10);
  const i = this.data.length - n;
  i > 0 &&
    ((r = this.data.substr(n)), (o = parseInt(r, 10)), e.put(o, i * 3 + 1));
};
var Oa = X;
const La = j,
  ze = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
  ];
function ee(t) {
  (this.mode = La.ALPHANUMERIC), (this.data = t);
}
ee.getBitsLength = function (e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
ee.prototype.getLength = function () {
  return this.data.length;
};
ee.prototype.getBitsLength = function () {
  return ee.getBitsLength(this.data.length);
};
ee.prototype.write = function (e) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = ze.indexOf(this.data[n]) * 45;
    (r += ze.indexOf(this.data[n + 1])), e.put(r, 11);
  }
  this.data.length % 2 && e.put(ze.indexOf(this.data[n]), 6);
};
var Ba = ee;
const Pa = ei,
  Ua = j;
function te(t) {
  (this.mode = Ua.BYTE),
    typeof t == "string" && (t = Pa(t)),
    (this.data = new Uint8Array(t));
}
te.getBitsLength = function (e) {
  return e * 8;
};
te.prototype.getLength = function () {
  return this.data.length;
};
te.prototype.getBitsLength = function () {
  return te.getBitsLength(this.data.length);
};
te.prototype.write = function (t) {
  for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8);
};
var qa = te;
const Da = j,
  $a = A;
function ne(t) {
  (this.mode = Da.KANJI), (this.data = t);
}
ne.getBitsLength = function (e) {
  return e * 13;
};
ne.prototype.getLength = function () {
  return this.data.length;
};
ne.prototype.getBitsLength = function () {
  return ne.getBitsLength(this.data.length);
};
ne.prototype.write = function (t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let n = $a.toSJIS(this.data[e]);
    if (n >= 33088 && n <= 40956) n -= 33088;
    else if (n >= 57408 && n <= 60351) n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " +
          this.data[e] +
          `
Make sure your charset is UTF-8`
      );
    (n = ((n >>> 8) & 255) * 192 + (n & 255)), t.put(n, 13);
  }
};
var Fa = ne;
(function (t) {
  const e = j,
    n = Oa,
    r = Ba,
    o = qa,
    i = Fa,
    s = B,
    a = A,
    c = ti;
  function _(u) {
    return unescape(encodeURIComponent(u)).length;
  }
  function l(u, f, h) {
    const d = [];
    let m;
    for (; (m = u.exec(h)) !== null; )
      d.push({ data: m[0], index: m.index, mode: f, length: m[0].length });
    return d;
  }
  function v(u) {
    const f = l(s.NUMERIC, e.NUMERIC, u),
      h = l(s.ALPHANUMERIC, e.ALPHANUMERIC, u);
    let d, m;
    return (
      a.isKanjiModeEnabled()
        ? ((d = l(s.BYTE, e.BYTE, u)), (m = l(s.KANJI, e.KANJI, u)))
        : ((d = l(s.BYTE_KANJI, e.BYTE, u)), (m = [])),
      f
        .concat(h, d, m)
        .sort(function (b, k) {
          return b.index - k.index;
        })
        .map(function (b) {
          return { data: b.data, mode: b.mode, length: b.length };
        })
    );
  }
  function p(u, f) {
    switch (f) {
      case e.NUMERIC:
        return n.getBitsLength(u);
      case e.ALPHANUMERIC:
        return r.getBitsLength(u);
      case e.KANJI:
        return i.getBitsLength(u);
      case e.BYTE:
        return o.getBitsLength(u);
    }
  }
  function g(u) {
    return u.reduce(function (f, h) {
      const d = f.length - 1 >= 0 ? f[f.length - 1] : null;
      return d && d.mode === h.mode
        ? ((f[f.length - 1].data += h.data), f)
        : (f.push(h), f);
    }, []);
  }
  function w(u) {
    const f = [];
    for (let h = 0; h < u.length; h++) {
      const d = u[h];
      switch (d.mode) {
        case e.NUMERIC:
          f.push([
            d,
            { data: d.data, mode: e.ALPHANUMERIC, length: d.length },
            { data: d.data, mode: e.BYTE, length: d.length },
          ]);
          break;
        case e.ALPHANUMERIC:
          f.push([d, { data: d.data, mode: e.BYTE, length: d.length }]);
          break;
        case e.KANJI:
          f.push([d, { data: d.data, mode: e.BYTE, length: _(d.data) }]);
          break;
        case e.BYTE:
          f.push([{ data: d.data, mode: e.BYTE, length: _(d.data) }]);
      }
    }
    return f;
  }
  function S(u, f) {
    const h = {},
      d = { start: {} };
    let m = ["start"];
    for (let E = 0; E < u.length; E++) {
      const b = u[E],
        k = [];
      for (let T = 0; T < b.length; T++) {
        const N = b[T],
          z = "" + E + T;
        k.push(z), (h[z] = { node: N, lastCount: 0 }), (d[z] = {});
        for (let ie = 0; ie < m.length; ie++) {
          const M = m[ie];
          h[M] && h[M].node.mode === N.mode
            ? ((d[M][z] =
                p(h[M].lastCount + N.length, N.mode) -
                p(h[M].lastCount, N.mode)),
              (h[M].lastCount += N.length))
            : (h[M] && (h[M].lastCount = N.length),
              (d[M][z] =
                p(N.length, N.mode) + 4 + e.getCharCountIndicator(N.mode, f)));
        }
      }
      m = k;
    }
    for (let E = 0; E < m.length; E++) d[m[E]].end = 0;
    return { map: d, table: h };
  }
  function I(u, f) {
    let h;
    const d = e.getBestModeForData(u);
    if (((h = e.from(f, d)), h !== e.BYTE && h.bit < d.bit))
      throw new Error(
        '"' +
          u +
          '" cannot be encoded with mode ' +
          e.toString(h) +
          `.
 Suggested mode is: ` +
          e.toString(d)
      );
    switch ((h === e.KANJI && !a.isKanjiModeEnabled() && (h = e.BYTE), h)) {
      case e.NUMERIC:
        return new n(u);
      case e.ALPHANUMERIC:
        return new r(u);
      case e.KANJI:
        return new i(u);
      case e.BYTE:
        return new o(u);
    }
  }
  (t.fromArray = function (f) {
    return f.reduce(function (h, d) {
      return (
        typeof d == "string"
          ? h.push(I(d, null))
          : d.data && h.push(I(d.data, d.mode)),
        h
      );
    }, []);
  }),
    (t.fromString = function (f, h) {
      const d = v(f, a.isKanjiModeEnabled()),
        m = w(d),
        E = S(m, h),
        b = c.find_path(E.map, "start", "end"),
        k = [];
      for (let T = 1; T < b.length - 1; T++) k.push(E.table[b[T]].node);
      return t.fromArray(g(k));
    }),
    (t.rawSplit = function (f) {
      return t.fromArray(v(f, a.isKanjiModeEnabled()));
    });
})(br);
const Fe = A,
  Ve = qe,
  Ha = Ea,
  ja = Ca,
  Wa = dr,
  za = fr,
  ot = _r,
  it = De,
  Va = Ia,
  Te = pr,
  Ja = wr,
  Qa = j,
  Je = br;
function Ka(t, e) {
  const n = t.size,
    r = za.getPositions(e);
  for (let o = 0; o < r.length; o++) {
    const i = r[o][0],
      s = r[o][1];
    for (let a = -1; a <= 7; a++)
      if (!(i + a <= -1 || n <= i + a))
        for (let c = -1; c <= 7; c++)
          s + c <= -1 ||
            n <= s + c ||
            ((a >= 0 && a <= 6 && (c === 0 || c === 6)) ||
            (c >= 0 && c <= 6 && (a === 0 || a === 6)) ||
            (a >= 2 && a <= 4 && c >= 2 && c <= 4)
              ? t.set(i + a, s + c, !0, !0)
              : t.set(i + a, s + c, !1, !0));
  }
}
function Ya(t) {
  const e = t.size;
  for (let n = 8; n < e - 8; n++) {
    const r = n % 2 === 0;
    t.set(n, 6, r, !0), t.set(6, n, r, !0);
  }
}
function Ga(t, e) {
  const n = Wa.getPositions(e);
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0],
      i = n[r][1];
    for (let s = -2; s <= 2; s++)
      for (let a = -2; a <= 2; a++)
        s === -2 || s === 2 || a === -2 || a === 2 || (s === 0 && a === 0)
          ? t.set(o + s, i + a, !0, !0)
          : t.set(o + s, i + a, !1, !0);
  }
}
function Za(t, e) {
  const n = t.size,
    r = Te.getEncodedBits(e);
  let o, i, s;
  for (let a = 0; a < 18; a++)
    (o = Math.floor(a / 3)),
      (i = (a % 3) + n - 8 - 3),
      (s = ((r >> a) & 1) === 1),
      t.set(o, i, s, !0),
      t.set(i, o, s, !0);
}
function Qe(t, e, n) {
  const r = t.size,
    o = Ja.getEncodedBits(e, n);
  let i, s;
  for (i = 0; i < 15; i++)
    (s = ((o >> i) & 1) === 1),
      i < 6
        ? t.set(i, 8, s, !0)
        : i < 8
        ? t.set(i + 1, 8, s, !0)
        : t.set(r - 15 + i, 8, s, !0),
      i < 8
        ? t.set(8, r - i - 1, s, !0)
        : i < 9
        ? t.set(8, 15 - i - 1 + 1, s, !0)
        : t.set(8, 15 - i - 1, s, !0);
  t.set(r - 8, 8, 1, !0);
}
function Xa(t, e) {
  const n = t.size;
  let r = -1,
    o = n - 1,
    i = 7,
    s = 0;
  for (let a = n - 1; a > 0; a -= 2)
    for (a === 6 && a--; ; ) {
      for (let c = 0; c < 2; c++)
        if (!t.isReserved(o, a - c)) {
          let _ = !1;
          s < e.length && (_ = ((e[s] >>> i) & 1) === 1),
            t.set(o, a - c, _),
            i--,
            i === -1 && (s++, (i = 7));
        }
      if (((o += r), o < 0 || n <= o)) {
        (o -= r), (r = -r);
        break;
      }
    }
}
function ec(t, e, n) {
  const r = new Ha();
  n.forEach(function (c) {
    r.put(c.mode.bit, 4),
      r.put(c.getLength(), Qa.getCharCountIndicator(c.mode, t)),
      c.write(r);
  });
  const o = Fe.getSymbolTotalCodewords(t),
    i = it.getTotalCodewordsCount(t, e),
    s = (o - i) * 8;
  for (
    r.getLengthInBits() + 4 <= s && r.put(0, 4);
    r.getLengthInBits() % 8 !== 0;

  )
    r.putBit(0);
  const a = (s - r.getLengthInBits()) / 8;
  for (let c = 0; c < a; c++) r.put(c % 2 ? 17 : 236, 8);
  return tc(r, t, e);
}
function tc(t, e, n) {
  const r = Fe.getSymbolTotalCodewords(e),
    o = it.getTotalCodewordsCount(e, n),
    i = r - o,
    s = it.getBlocksCount(e, n),
    a = r % s,
    c = s - a,
    _ = Math.floor(r / s),
    l = Math.floor(i / s),
    v = l + 1,
    p = _ - l,
    g = new Va(p);
  let w = 0;
  const S = new Array(s),
    I = new Array(s);
  let u = 0;
  const f = new Uint8Array(t.buffer);
  for (let b = 0; b < s; b++) {
    const k = b < c ? l : v;
    (S[b] = f.slice(w, w + k)),
      (I[b] = g.encode(S[b])),
      (w += k),
      (u = Math.max(u, k));
  }
  const h = new Uint8Array(r);
  let d = 0,
    m,
    E;
  for (m = 0; m < u; m++)
    for (E = 0; E < s; E++) m < S[E].length && (h[d++] = S[E][m]);
  for (m = 0; m < p; m++) for (E = 0; E < s; E++) h[d++] = I[E][m];
  return h;
}
function nc(t, e, n, r) {
  let o;
  if (Array.isArray(t)) o = Je.fromArray(t);
  else if (typeof t == "string") {
    let _ = e;
    if (!_) {
      const l = Je.rawSplit(t);
      _ = Te.getBestVersionForData(l, n);
    }
    o = Je.fromString(t, _ || 40);
  } else throw new Error("Invalid data");
  const i = Te.getBestVersionForData(o, n);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e) e = i;
  else if (e < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
        i +
        `.
`
    );
  const s = ec(e, n, o),
    a = Fe.getSymbolSize(e),
    c = new ja(a);
  return (
    Ka(c, e),
    Ya(c),
    Ga(c, e),
    Qe(c, n, 0),
    e >= 7 && Za(c, e),
    Xa(c, s),
    isNaN(r) && (r = ot.getBestMask(c, Qe.bind(null, c, n))),
    ot.applyMask(r, c),
    Qe(c, n, r),
    {
      modules: c,
      version: e,
      errorCorrectionLevel: n,
      maskPattern: r,
      segments: o,
    }
  );
}
lr.create = function (e, n) {
  if (typeof e > "u" || e === "") throw new Error("No input text");
  let r = Ve.M,
    o,
    i;
  return (
    typeof n < "u" &&
      ((r = Ve.from(n.errorCorrectionLevel, Ve.M)),
      (o = Te.from(n.version)),
      (i = ot.from(n.maskPattern)),
      n.toSJISFunc && Fe.setToSJISFunction(n.toSJISFunc)),
    nc(e, o, r, i)
  );
};
var vr = {},
  At = {};
(function (t) {
  function e(n) {
    if ((typeof n == "number" && (n = n.toString()), typeof n != "string"))
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) &&
      (r = Array.prototype.concat.apply(
        [],
        r.map(function (i) {
          return [i, i];
        })
      )),
      r.length === 6 && r.push("F", "F");
    const o = parseInt(r.join(""), 16);
    return {
      r: (o >> 24) & 255,
      g: (o >> 16) & 255,
      b: (o >> 8) & 255,
      a: o & 255,
      hex: "#" + r.slice(0, 6).join(""),
    };
  }
  (t.getOptions = function (r) {
    r || (r = {}), r.color || (r.color = {});
    const o =
        typeof r.margin > "u" || r.margin === null || r.margin < 0
          ? 4
          : r.margin,
      i = r.width && r.width >= 21 ? r.width : void 0,
      s = r.scale || 4;
    return {
      width: i,
      scale: i ? 4 : s,
      margin: o,
      color: {
        dark: e(r.color.dark || "#000000ff"),
        light: e(r.color.light || "#ffffffff"),
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {},
    };
  }),
    (t.getScale = function (r, o) {
      return o.width && o.width >= r + o.margin * 2
        ? o.width / (r + o.margin * 2)
        : o.scale;
    }),
    (t.getImageWidth = function (r, o) {
      const i = t.getScale(r, o);
      return Math.floor((r + o.margin * 2) * i);
    }),
    (t.qrToImageData = function (r, o, i) {
      const s = o.modules.size,
        a = o.modules.data,
        c = t.getScale(s, i),
        _ = Math.floor((s + i.margin * 2) * c),
        l = i.margin * c,
        v = [i.color.light, i.color.dark];
      for (let p = 0; p < _; p++)
        for (let g = 0; g < _; g++) {
          let w = (p * _ + g) * 4,
            S = i.color.light;
          if (p >= l && g >= l && p < _ - l && g < _ - l) {
            const I = Math.floor((p - l) / c),
              u = Math.floor((g - l) / c);
            S = v[a[I * s + u] ? 1 : 0];
          }
          (r[w++] = S.r), (r[w++] = S.g), (r[w++] = S.b), (r[w] = S.a);
        }
    });
})(At);
(function (t) {
  const e = At;
  function n(o, i, s) {
    o.clearRect(0, 0, i.width, i.height),
      i.style || (i.style = {}),
      (i.height = s),
      (i.width = s),
      (i.style.height = s + "px"),
      (i.style.width = s + "px");
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  (t.render = function (i, s, a) {
    let c = a,
      _ = s;
    typeof c > "u" && (!s || !s.getContext) && ((c = s), (s = void 0)),
      s || (_ = r()),
      (c = e.getOptions(c));
    const l = e.getImageWidth(i.modules.size, c),
      v = _.getContext("2d"),
      p = v.createImageData(l, l);
    return (
      e.qrToImageData(p.data, i, c), n(v, _, l), v.putImageData(p, 0, 0), _
    );
  }),
    (t.renderToDataURL = function (i, s, a) {
      let c = a;
      typeof c > "u" && (!s || !s.getContext) && ((c = s), (s = void 0)),
        c || (c = {});
      const _ = t.render(i, s, c),
        l = c.type || "image/png",
        v = c.rendererOpts || {};
      return _.toDataURL(l, v.quality);
    });
})(vr);
var Er = {};
const rc = At;
function Qt(t, e) {
  const n = t.a / 255,
    r = e + '="' + t.hex + '"';
  return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function Ke(t, e, n) {
  let r = t + e;
  return typeof n < "u" && (r += " " + n), r;
}
function oc(t, e, n) {
  let r = "",
    o = 0,
    i = !1,
    s = 0;
  for (let a = 0; a < t.length; a++) {
    const c = Math.floor(a % e),
      _ = Math.floor(a / e);
    !c && !i && (i = !0),
      t[a]
        ? (s++,
          (a > 0 && c > 0 && t[a - 1]) ||
            ((r += i ? Ke("M", c + n, 0.5 + _ + n) : Ke("m", o, 0)),
            (o = 0),
            (i = !1)),
          (c + 1 < e && t[a + 1]) || ((r += Ke("h", s)), (s = 0)))
        : o++;
  }
  return r;
}
Er.render = function (e, n, r) {
  const o = rc.getOptions(n),
    i = e.modules.size,
    s = e.modules.data,
    a = i + o.margin * 2,
    c = o.color.light.a
      ? "<path " +
        Qt(o.color.light, "fill") +
        ' d="M0 0h' +
        a +
        "v" +
        a +
        'H0z"/>'
      : "",
    _ =
      "<path " +
      Qt(o.color.dark, "stroke") +
      ' d="' +
      oc(s, i, o.margin) +
      '"/>',
    l = 'viewBox="0 0 ' + a + " " + a + '"',
    p =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") +
      l +
      ' shape-rendering="crispEdges">' +
      c +
      _ +
      `</svg>
`;
  return typeof r == "function" && r(null, p), p;
};
const ic = ba,
  st = lr,
  Cr = vr,
  sc = Er;
function Ot(t, e, n, r, o) {
  const i = [].slice.call(arguments, 1),
    s = i.length,
    a = typeof i[s - 1] == "function";
  if (!a && !ic()) throw new Error("Callback required as last argument");
  if (a) {
    if (s < 2) throw new Error("Too few arguments provided");
    s === 2
      ? ((o = n), (n = e), (e = r = void 0))
      : s === 3 &&
        (e.getContext && typeof o > "u"
          ? ((o = r), (r = void 0))
          : ((o = r), (r = n), (n = e), (e = void 0)));
  } else {
    if (s < 1) throw new Error("Too few arguments provided");
    return (
      s === 1
        ? ((n = e), (e = r = void 0))
        : s === 2 && !e.getContext && ((r = n), (n = e), (e = void 0)),
      new Promise(function (c, _) {
        try {
          const l = st.create(n, r);
          c(t(l, e, r));
        } catch (l) {
          _(l);
        }
      })
    );
  }
  try {
    const c = st.create(n, r);
    o(null, t(c, e, r));
  } catch (c) {
    o(c);
  }
}
pe.create = st.create;
pe.toCanvas = Ot.bind(null, Cr.render);
pe.toDataURL = Ot.bind(null, Cr.renderToDataURL);
pe.toString = Ot.bind(null, function (t, e, n) {
  return sc.render(t, n);
});
var we,
  C,
  Sr,
  J,
  Kt,
  Ir,
  at,
  kr,
  Ne = {},
  Rr = [],
  ac = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function P(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Tr(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function L(t, e, n) {
  var r,
    o,
    i,
    s = {};
  for (i in e)
    i == "key" ? (r = e[i]) : i == "ref" ? (o = e[i]) : (s[i] = e[i]);
  if (
    (arguments.length > 2 &&
      (s.children = arguments.length > 3 ? we.call(arguments, 2) : n),
    typeof t == "function" && t.defaultProps != null)
  )
    for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return ce(t, s, r, o, null);
}
function ce(t, e, n, r, o) {
  var i = {
    type: t,
    props: e,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o ?? ++Sr,
  };
  return o == null && C.vnode != null && C.vnode(i), i;
}
function Nr() {
  return { current: null };
}
function q(t) {
  return t.children;
}
function O(t, e) {
  (this.props = t), (this.context = e);
}
function fe(t, e) {
  if (e == null) return t.__ ? fe(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? fe(t) : null;
}
function xr(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return xr(t);
  }
}
function ct(t) {
  ((!t.__d && (t.__d = !0) && J.push(t) && !xe.__r++) ||
    Kt !== C.debounceRendering) &&
    ((Kt = C.debounceRendering) || Ir)(xe);
}
function xe() {
  var t, e, n, r, o, i, s, a;
  for (J.sort(at); (t = J.shift()); )
    t.__d &&
      ((e = J.length),
      (r = void 0),
      (o = void 0),
      (s = (i = (n = t).__v).__e),
      (a = n.__P) &&
        ((r = []),
        ((o = P({}, i)).__v = i.__v + 1),
        Lt(
          a,
          i,
          o,
          n.__n,
          a.ownerSVGElement !== void 0,
          i.__h != null ? [s] : null,
          r,
          s ?? fe(i),
          i.__h
        ),
        Br(r, i),
        i.__e != s && xr(i)),
      J.length > e && J.sort(at));
  xe.__r = 0;
}
function Mr(t, e, n, r, o, i, s, a, c, _) {
  var l,
    v,
    p,
    g,
    w,
    S,
    I,
    u = (r && r.__k) || Rr,
    f = u.length;
  for (n.__k = [], l = 0; l < e.length; l++)
    if (
      (g = n.__k[l] =
        (g = e[l]) == null || typeof g == "boolean" || typeof g == "function"
          ? null
          : typeof g == "string" || typeof g == "number" || typeof g == "bigint"
          ? ce(null, g, null, null, g)
          : Array.isArray(g)
          ? ce(q, { children: g }, null, null, null)
          : g.__b > 0
          ? ce(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v)
          : g) != null
    ) {
      if (
        ((g.__ = n),
        (g.__b = n.__b + 1),
        (p = u[l]) === null || (p && g.key == p.key && g.type === p.type))
      )
        u[l] = void 0;
      else
        for (v = 0; v < f; v++) {
          if ((p = u[v]) && g.key == p.key && g.type === p.type) {
            u[v] = void 0;
            break;
          }
          p = null;
        }
      Lt(t, g, (p = p || Ne), o, i, s, a, c, _),
        (w = g.__e),
        (v = g.ref) &&
          p.ref != v &&
          (I || (I = []),
          p.ref && I.push(p.ref, null, g),
          I.push(v, g.__c || w, g)),
        w != null
          ? (S == null && (S = w),
            typeof g.type == "function" && g.__k === p.__k
              ? (g.__d = c = Ar(g, c, t))
              : (c = Or(t, g, p, u, w, c)),
            typeof n.type == "function" && (n.__d = c))
          : c && p.__e == c && c.parentNode != t && (c = fe(p));
    }
  for (n.__e = S, l = f; l--; )
    u[l] != null &&
      (typeof n.type == "function" &&
        u[l].__e != null &&
        u[l].__e == n.__d &&
        (n.__d = Lr(r).nextSibling),
      Ur(u[l], u[l]));
  if (I) for (l = 0; l < I.length; l++) Pr(I[l], I[++l], I[++l]);
}
function Ar(t, e, n) {
  for (var r, o = t.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) &&
      ((r.__ = t),
      (e =
        typeof r.type == "function" ? Ar(r, e, n) : Or(n, r, r, o, r.__e, e)));
  return e;
}
function U(t, e) {
  return (
    (e = e || []),
    t == null ||
      typeof t == "boolean" ||
      (Array.isArray(t)
        ? t.some(function (n) {
            U(n, e);
          })
        : e.push(t)),
    e
  );
}
function Or(t, e, n, r, o, i) {
  var s, a, c;
  if (e.__d !== void 0) (s = e.__d), (e.__d = void 0);
  else if (n == null || o != i || o.parentNode == null)
    e: if (i == null || i.parentNode !== t) t.appendChild(o), (s = null);
    else {
      for (a = i, c = 0; (a = a.nextSibling) && c < r.length; c += 1)
        if (a == o) break e;
      t.insertBefore(o, i), (s = i);
    }
  return s !== void 0 ? s : o.nextSibling;
}
function Lr(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string") return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (r = Lr(n))) return r;
  }
  return null;
}
function cc(t, e, n, r, o) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in e || Me(t, i, null, n[i], r);
  for (i in e)
    (o && typeof e[i] != "function") ||
      i === "children" ||
      i === "key" ||
      i === "value" ||
      i === "checked" ||
      n[i] === e[i] ||
      Me(t, i, e[i], n[i], r);
}
function Yt(t, e, n) {
  e[0] === "-"
    ? t.setProperty(e, n ?? "")
    : (t[e] =
        n == null ? "" : typeof n != "number" || ac.test(e) ? n : n + "px");
}
function Me(t, e, n, r, o) {
  var i;
  e: if (e === "style")
    if (typeof n == "string") t.style.cssText = n;
    else {
      if ((typeof r == "string" && (t.style.cssText = r = ""), r))
        for (e in r) (n && e in n) || Yt(t.style, e, "");
      if (n) for (e in n) (r && n[e] === r[e]) || Yt(t.style, e, n[e]);
    }
  else if (e[0] === "o" && e[1] === "n")
    (i = e !== (e = e.replace(/Capture$/, ""))),
      (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + i] = n),
      n
        ? r || t.addEventListener(e, i ? Zt : Gt, i)
        : t.removeEventListener(e, i ? Zt : Gt, i);
  else if (e !== "dangerouslySetInnerHTML") {
    if (o) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e !== "width" &&
      e !== "height" &&
      e !== "href" &&
      e !== "list" &&
      e !== "form" &&
      e !== "tabIndex" &&
      e !== "download" &&
      e in t
    )
      try {
        t[e] = n ?? "";
        break e;
      } catch {}
    typeof n == "function" ||
      (n == null || (n === !1 && e[4] !== "-")
        ? t.removeAttribute(e)
        : t.setAttribute(e, n));
  }
}
function Gt(t) {
  return this.l[t.type + !1](C.event ? C.event(t) : t);
}
function Zt(t) {
  return this.l[t.type + !0](C.event ? C.event(t) : t);
}
function Lt(t, e, n, r, o, i, s, a, c) {
  var _,
    l,
    v,
    p,
    g,
    w,
    S,
    I,
    u,
    f,
    h,
    d,
    m,
    E,
    b,
    k = e.type;
  if (e.constructor !== void 0) return null;
  n.__h != null &&
    ((c = n.__h), (a = e.__e = n.__e), (e.__h = null), (i = [a])),
    (_ = C.__b) && _(e);
  try {
    e: if (typeof k == "function") {
      if (
        ((I = e.props),
        (u = (_ = k.contextType) && r[_.__c]),
        (f = _ ? (u ? u.props.value : _.__) : r),
        n.__c
          ? (S = (l = e.__c = n.__c).__ = l.__E)
          : ("prototype" in k && k.prototype.render
              ? (e.__c = l = new k(I, f))
              : ((e.__c = l = new O(I, f)),
                (l.constructor = k),
                (l.render = uc)),
            u && u.sub(l),
            (l.props = I),
            l.state || (l.state = {}),
            (l.context = f),
            (l.__n = r),
            (v = l.__d = !0),
            (l.__h = []),
            (l._sb = [])),
        l.__s == null && (l.__s = l.state),
        k.getDerivedStateFromProps != null &&
          (l.__s == l.state && (l.__s = P({}, l.__s)),
          P(l.__s, k.getDerivedStateFromProps(I, l.__s))),
        (p = l.props),
        (g = l.state),
        (l.__v = e),
        v)
      )
        k.getDerivedStateFromProps == null &&
          l.componentWillMount != null &&
          l.componentWillMount(),
          l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (
          (k.getDerivedStateFromProps == null &&
            I !== p &&
            l.componentWillReceiveProps != null &&
            l.componentWillReceiveProps(I, f),
          (!l.__e &&
            l.shouldComponentUpdate != null &&
            l.shouldComponentUpdate(I, l.__s, f) === !1) ||
            e.__v === n.__v)
        ) {
          for (
            e.__v !== n.__v && ((l.props = I), (l.state = l.__s), (l.__d = !1)),
              l.__e = !1,
              e.__e = n.__e,
              e.__k = n.__k,
              e.__k.forEach(function (T) {
                T && (T.__ = e);
              }),
              h = 0;
            h < l._sb.length;
            h++
          )
            l.__h.push(l._sb[h]);
          (l._sb = []), l.__h.length && s.push(l);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(I, l.__s, f),
          l.componentDidUpdate != null &&
            l.__h.push(function () {
              l.componentDidUpdate(p, g, w);
            });
      }
      if (
        ((l.context = f),
        (l.props = I),
        (l.__P = t),
        (d = C.__r),
        (m = 0),
        "prototype" in k && k.prototype.render)
      ) {
        for (
          l.state = l.__s,
            l.__d = !1,
            d && d(e),
            _ = l.render(l.props, l.state, l.context),
            E = 0;
          E < l._sb.length;
          E++
        )
          l.__h.push(l._sb[E]);
        l._sb = [];
      } else
        do
          (l.__d = !1),
            d && d(e),
            (_ = l.render(l.props, l.state, l.context)),
            (l.state = l.__s);
        while (l.__d && ++m < 25);
      (l.state = l.__s),
        l.getChildContext != null && (r = P(P({}, r), l.getChildContext())),
        v ||
          l.getSnapshotBeforeUpdate == null ||
          (w = l.getSnapshotBeforeUpdate(p, g)),
        (b = _ != null && _.type === q && _.key == null ? _.props.children : _),
        Mr(t, Array.isArray(b) ? b : [b], e, n, r, o, i, s, a, c),
        (l.base = e.__e),
        (e.__h = null),
        l.__h.length && s.push(l),
        S && (l.__E = l.__ = null),
        (l.__e = !1);
    } else
      i == null && e.__v === n.__v
        ? ((e.__k = n.__k), (e.__e = n.__e))
        : (e.__e = lc(n.__e, e, n, r, o, i, s, c));
    (_ = C.diffed) && _(e);
  } catch (T) {
    (e.__v = null),
      (c || i != null) &&
        ((e.__e = a), (e.__h = !!c), (i[i.indexOf(a)] = null)),
      C.__e(T, e, n);
  }
}
function Br(t, e) {
  C.__c && C.__c(e, t),
    t.some(function (n) {
      try {
        (t = n.__h),
          (n.__h = []),
          t.some(function (r) {
            r.call(n);
          });
      } catch (r) {
        C.__e(r, n.__v);
      }
    });
}
function lc(t, e, n, r, o, i, s, a) {
  var c,
    _,
    l,
    v = n.props,
    p = e.props,
    g = e.type,
    w = 0;
  if ((g === "svg" && (o = !0), i != null)) {
    for (; w < i.length; w++)
      if (
        (c = i[w]) &&
        "setAttribute" in c == !!g &&
        (g ? c.localName === g : c.nodeType === 3)
      ) {
        (t = c), (i[w] = null);
        break;
      }
  }
  if (t == null) {
    if (g === null) return document.createTextNode(p);
    (t = o
      ? document.createElementNS("http://www.w3.org/2000/svg", g)
      : document.createElement(g, p.is && p)),
      (i = null),
      (a = !1);
  }
  if (g === null) v === p || (a && t.data === p) || (t.data = p);
  else {
    if (
      ((i = i && we.call(t.childNodes)),
      (_ = (v = n.props || Ne).dangerouslySetInnerHTML),
      (l = p.dangerouslySetInnerHTML),
      !a)
    ) {
      if (i != null)
        for (v = {}, w = 0; w < t.attributes.length; w++)
          v[t.attributes[w].name] = t.attributes[w].value;
      (l || _) &&
        ((l && ((_ && l.__html == _.__html) || l.__html === t.innerHTML)) ||
          (t.innerHTML = (l && l.__html) || ""));
    }
    if ((cc(t, p, v, o, a), l)) e.__k = [];
    else if (
      ((w = e.props.children),
      Mr(
        t,
        Array.isArray(w) ? w : [w],
        e,
        n,
        r,
        o && g !== "foreignObject",
        i,
        s,
        i ? i[0] : n.__k && fe(n, 0),
        a
      ),
      i != null)
    )
      for (w = i.length; w--; ) i[w] != null && Tr(i[w]);
    a ||
      ("value" in p &&
        (w = p.value) !== void 0 &&
        (w !== t.value ||
          (g === "progress" && !w) ||
          (g === "option" && w !== v.value)) &&
        Me(t, "value", w, v.value, !1),
      "checked" in p &&
        (w = p.checked) !== void 0 &&
        w !== t.checked &&
        Me(t, "checked", w, v.checked, !1));
  }
  return t;
}
function Pr(t, e, n) {
  try {
    typeof t == "function" ? t(e) : (t.current = e);
  } catch (r) {
    C.__e(r, n);
  }
}
function Ur(t, e, n) {
  var r, o;
  if (
    (C.unmount && C.unmount(t),
    (r = t.ref) && ((r.current && r.current !== t.__e) || Pr(r, null, e)),
    (r = t.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        C.__e(i, e);
      }
    (r.base = r.__P = null), (t.__c = void 0);
  }
  if ((r = t.__k))
    for (o = 0; o < r.length; o++)
      r[o] && Ur(r[o], e, n || typeof t.type != "function");
  n || t.__e == null || Tr(t.__e), (t.__ = t.__e = t.__d = void 0);
}
function uc(t, e, n) {
  return this.constructor(t, n);
}
function _e(t, e, n) {
  var r, o, i;
  C.__ && C.__(t, e),
    (o = (r = typeof n == "function") ? null : (n && n.__k) || e.__k),
    (i = []),
    Lt(
      e,
      (t = ((!r && n) || e).__k = L(q, null, [t])),
      o || Ne,
      Ne,
      e.ownerSVGElement !== void 0,
      !r && n ? [n] : o ? null : e.firstChild ? we.call(e.childNodes) : null,
      i,
      !r && n ? n : o ? o.__e : e.firstChild,
      r
    ),
    Br(i, t);
}
function qr(t, e) {
  _e(t, e, qr);
}
function dc(t, e, n) {
  var r,
    o,
    i,
    s = P({}, t.props);
  for (i in e)
    i == "key" ? (r = e[i]) : i == "ref" ? (o = e[i]) : (s[i] = e[i]);
  return (
    arguments.length > 2 &&
      (s.children = arguments.length > 3 ? we.call(arguments, 2) : n),
    ce(t.type, s, r || t.key, o || t.ref, null)
  );
}
function Dr(t, e) {
  var n = {
    __c: (e = "__cC" + kr++),
    __: t,
    Consumer: function (r, o) {
      return r.children(o);
    },
    Provider: function (r) {
      var o, i;
      return (
        this.getChildContext ||
          ((o = []),
          ((i = {})[e] = this),
          (this.getChildContext = function () {
            return i;
          }),
          (this.shouldComponentUpdate = function (s) {
            this.props.value !== s.value &&
              o.some(function (a) {
                (a.__e = !0), ct(a);
              });
          }),
          (this.sub = function (s) {
            o.push(s);
            var a = s.componentWillUnmount;
            s.componentWillUnmount = function () {
              o.splice(o.indexOf(s), 1), a && a.call(s);
            };
          })),
        r.children
      );
    },
  };
  return (n.Provider.__ = n.Consumer.contextType = n);
}
(we = Rr.slice),
  (C = {
    __e: function (t, e, n, r) {
      for (var o, i, s; (e = e.__); )
        if ((o = e.__c) && !o.__)
          try {
            if (
              ((i = o.constructor) &&
                i.getDerivedStateFromError != null &&
                (o.setState(i.getDerivedStateFromError(t)), (s = o.__d)),
              o.componentDidCatch != null &&
                (o.componentDidCatch(t, r || {}), (s = o.__d)),
              s)
            )
              return (o.__E = o);
          } catch (a) {
            t = a;
          }
      throw t;
    },
  }),
  (Sr = 0),
  (O.prototype.setState = function (t, e) {
    var n;
    (n =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = P({}, this.state))),
      typeof t == "function" && (t = t(P({}, n), this.props)),
      t && P(n, t),
      t != null && this.__v && (e && this._sb.push(e), ct(this));
  }),
  (O.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), ct(this));
  }),
  (O.prototype.render = q),
  (J = []),
  (Ir =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (at = function (t, e) {
    return t.__v.__b - e.__v.__b;
  }),
  (xe.__r = 0),
  (kr = 0);
var W,
  R,
  Ye,
  Xt,
  re = 0,
  $r = [],
  Se = [],
  en = C.__b,
  tn = C.__r,
  nn = C.diffed,
  rn = C.__c,
  on = C.unmount;
function Q(t, e) {
  C.__h && C.__h(R, t, re || e), (re = 0);
  var n = R.__H || (R.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({ __V: Se }), n.__[t];
}
function He(t) {
  return (re = 1), Bt(Jr, t);
}
function Bt(t, e, n) {
  var r = Q(W++, 2);
  if (
    ((r.t = t),
    !r.__c &&
      ((r.__ = [
        n ? n(e) : Jr(void 0, e),
        function (a) {
          var c = r.__N ? r.__N[0] : r.__[0],
            _ = r.t(c, a);
          c !== _ && ((r.__N = [_, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = R),
      !R.u))
  ) {
    var o = function (a, c, _) {
      if (!r.__c.__H) return !0;
      var l = r.__c.__H.__.filter(function (p) {
        return p.__c;
      });
      if (
        l.every(function (p) {
          return !p.__N;
        })
      )
        return !i || i.call(this, a, c, _);
      var v = !1;
      return (
        l.forEach(function (p) {
          if (p.__N) {
            var g = p.__[0];
            (p.__ = p.__N), (p.__N = void 0), g !== p.__[0] && (v = !0);
          }
        }),
        !(!v && r.__c.props === a) && (!i || i.call(this, a, c, _))
      );
    };
    R.u = !0;
    var i = R.shouldComponentUpdate,
      s = R.componentWillUpdate;
    (R.componentWillUpdate = function (a, c, _) {
      if (this.__e) {
        var l = i;
        (i = void 0), o(a, c, _), (i = l);
      }
      s && s.call(this, a, c, _);
    }),
      (R.shouldComponentUpdate = o);
  }
  return r.__N || r.__;
}
function Pt(t, e) {
  var n = Q(W++, 3);
  !C.__s && Ut(n.__H, e) && ((n.__ = t), (n.i = e), R.__H.__h.push(n));
}
function ye(t, e) {
  var n = Q(W++, 4);
  !C.__s && Ut(n.__H, e) && ((n.__ = t), (n.i = e), R.__h.push(n));
}
function Fr(t) {
  return (
    (re = 5),
    je(function () {
      return { current: t };
    }, [])
  );
}
function Hr(t, e, n) {
  (re = 6),
    ye(
      function () {
        return typeof t == "function"
          ? (t(e()),
            function () {
              return t(null);
            })
          : t
          ? ((t.current = e()),
            function () {
              return (t.current = null);
            })
          : void 0;
      },
      n == null ? n : n.concat(t)
    );
}
function je(t, e) {
  var n = Q(W++, 7);
  return Ut(n.__H, e) ? ((n.__V = t()), (n.i = e), (n.__h = t), n.__V) : n.__;
}
function jr(t, e) {
  return (
    (re = 8),
    je(function () {
      return t;
    }, e)
  );
}
function Wr(t) {
  var e = R.context[t.__c],
    n = Q(W++, 9);
  return (
    (n.c = t),
    e ? (n.__ == null && ((n.__ = !0), e.sub(R)), e.props.value) : t.__
  );
}
function zr(t, e) {
  C.useDebugValue && C.useDebugValue(e ? e(t) : t);
}
function fc(t) {
  var e = Q(W++, 10),
    n = He();
  return (
    (e.__ = t),
    R.componentDidCatch ||
      (R.componentDidCatch = function (r, o) {
        e.__ && e.__(r, o), n[1](r);
      }),
    [
      n[0],
      function () {
        n[1](void 0);
      },
    ]
  );
}
function Vr() {
  var t = Q(W++, 11);
  if (!t.__) {
    for (var e = R.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function _c() {
  for (var t; (t = $r.shift()); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Ie), t.__H.__h.forEach(lt), (t.__H.__h = []);
      } catch (e) {
        (t.__H.__h = []), C.__e(e, t.__v);
      }
}
(C.__b = function (t) {
  (R = null), en && en(t);
}),
  (C.__r = function (t) {
    tn && tn(t), (W = 0);
    var e = (R = t.__c).__H;
    e &&
      (Ye === R
        ? ((e.__h = []),
          (R.__h = []),
          e.__.forEach(function (n) {
            n.__N && (n.__ = n.__N), (n.__V = Se), (n.__N = n.i = void 0);
          }))
        : (e.__h.forEach(Ie), e.__h.forEach(lt), (e.__h = []))),
      (Ye = R);
  }),
  (C.diffed = function (t) {
    nn && nn(t);
    var e = t.__c;
    e &&
      e.__H &&
      (e.__H.__h.length &&
        (($r.push(e) !== 1 && Xt === C.requestAnimationFrame) ||
          ((Xt = C.requestAnimationFrame) || hc)(_c)),
      e.__H.__.forEach(function (n) {
        n.i && (n.__H = n.i),
          n.__V !== Se && (n.__ = n.__V),
          (n.i = void 0),
          (n.__V = Se);
      })),
      (Ye = R = null);
  }),
  (C.__c = function (t, e) {
    e.some(function (n) {
      try {
        n.__h.forEach(Ie),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || lt(r);
          }));
      } catch (r) {
        e.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (e = []),
          C.__e(r, n.__v);
      }
    }),
      rn && rn(t, e);
  }),
  (C.unmount = function (t) {
    on && on(t);
    var e,
      n = t.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (r) {
        try {
          Ie(r);
        } catch (o) {
          e = o;
        }
      }),
      (n.__H = void 0),
      e && C.__e(e, n.__v));
  });
var sn = typeof requestAnimationFrame == "function";
function hc(t) {
  var e,
    n = function () {
      clearTimeout(r), sn && cancelAnimationFrame(e), setTimeout(t);
    },
    r = setTimeout(n, 100);
  sn && (e = requestAnimationFrame(n));
}
function Ie(t) {
  var e = R,
    n = t.__c;
  typeof n == "function" && ((t.__c = void 0), n()), (R = e);
}
function lt(t) {
  var e = R;
  (t.__c = t.__()), (R = e);
}
function Ut(t, e) {
  return (
    !t ||
    t.length !== e.length ||
    e.some(function (n, r) {
      return n !== t[r];
    })
  );
}
function Jr(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Qr(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function ut(t, e) {
  for (var n in t) if (n !== "__source" && !(n in e)) return !0;
  for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
  return !1;
}
function Ge(t, e) {
  return (t === e && (t !== 0 || 1 / t == 1 / e)) || (t != t && e != e);
}
function Ae(t) {
  this.props = t;
}
function Kr(t, e) {
  function n(o) {
    var i = this.props.ref,
      s = i == o.ref;
    return (
      !s && i && (i.call ? i(null) : (i.current = null)),
      e ? !e(this.props, o) || !s : ut(this.props, o)
    );
  }
  function r(o) {
    return (this.shouldComponentUpdate = n), L(t, o);
  }
  return (
    (r.displayName = "Memo(" + (t.displayName || t.name) + ")"),
    (r.prototype.isReactComponent = !0),
    (r.__f = !0),
    r
  );
}
((Ae.prototype = new O()).isPureReactComponent = !0),
  (Ae.prototype.shouldComponentUpdate = function (t, e) {
    return ut(this.props, t) || ut(this.state, e);
  });
var an = C.__b;
C.__b = function (t) {
  t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
    an && an(t);
};
var gc =
  (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Yr(t) {
  function e(n) {
    var r = Qr({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return (
    (e.$$typeof = gc),
    (e.render = e),
    (e.prototype.isReactComponent = e.__f = !0),
    (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
    e
  );
}
var cn = function (t, e) {
    return t == null ? null : U(U(t).map(e));
  },
  Gr = {
    map: cn,
    forEach: cn,
    count: function (t) {
      return t ? U(t).length : 0;
    },
    only: function (t) {
      var e = U(t);
      if (e.length !== 1) throw "Children.only";
      return e[0];
    },
    toArray: U,
  },
  pc = C.__e;
C.__e = function (t, e, n, r) {
  if (t.then) {
    for (var o, i = e; (i = i.__); )
      if ((o = i.__c) && o.__c)
        return e.__e == null && ((e.__e = n.__e), (e.__k = n.__k)), o.__c(t, e);
  }
  pc(t, e, n, r);
};
var ln = C.unmount;
function Zr(t, e, n) {
  return (
    t &&
      (t.__c &&
        t.__c.__H &&
        (t.__c.__H.__.forEach(function (r) {
          typeof r.__c == "function" && r.__c();
        }),
        (t.__c.__H = null)),
      (t = Qr({}, t)).__c != null &&
        (t.__c.__P === n && (t.__c.__P = e), (t.__c = null)),
      (t.__k =
        t.__k &&
        t.__k.map(function (r) {
          return Zr(r, e, n);
        }))),
    t
  );
}
function Xr(t, e, n) {
  return (
    t &&
      ((t.__v = null),
      (t.__k =
        t.__k &&
        t.__k.map(function (r) {
          return Xr(r, e, n);
        })),
      t.__c &&
        t.__c.__P === e &&
        (t.__e && n.insertBefore(t.__e, t.__d),
        (t.__c.__e = !0),
        (t.__c.__P = n))),
    t
  );
}
function le() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function eo(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function to(t) {
  var e, n, r;
  function o(i) {
    if (
      (e ||
        (e = t()).then(
          function (s) {
            n = s.default || s;
          },
          function (s) {
            r = s;
          }
        ),
      r)
    )
      throw r;
    if (!n) throw e;
    return L(n, i);
  }
  return (o.displayName = "Lazy"), (o.__f = !0), o;
}
function Y() {
  (this.u = null), (this.o = null);
}
(C.unmount = function (t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), ln && ln(t);
}),
  ((le.prototype = new O()).__c = function (t, e) {
    var n = e.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = eo(r.__v),
      i = !1,
      s = function () {
        i || ((i = !0), (n.__R = null), o ? o(a) : a());
      };
    n.__R = s;
    var a = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var _ = r.state.__a;
            r.__v.__k[0] = Xr(_, _.__c.__P, _.__c.__O);
          }
          var l;
          for (r.setState({ __a: (r.__b = null) }); (l = r.t.pop()); )
            l.forceUpdate();
        }
      },
      c = e.__h === !0;
    r.__u++ || c || r.setState({ __a: (r.__b = r.__v.__k[0]) }), t.then(s, s);
  }),
  (le.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (le.prototype.render = function (t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = Zr(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var o = e.__a && L(q, null, t.fallback);
    return o && (o.__h = null), [L(q, null, e.__a ? null : t.children), o];
  });
var un = function (t, e, n) {
  if (
    (++n[1] === n[0] && t.o.delete(e),
    t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
  )
    for (n = t.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      t.u = n = n[2];
    }
};
function mc(t) {
  return (
    (this.getChildContext = function () {
      return t.context;
    }),
    t.children
  );
}
function wc(t) {
  var e = this,
    n = t.i;
  (e.componentWillUnmount = function () {
    _e(null, e.l), (e.l = null), (e.i = null);
  }),
    e.i && e.i !== n && e.componentWillUnmount(),
    t.__v
      ? (e.l ||
          ((e.i = n),
          (e.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (r) {
              this.childNodes.push(r), e.i.appendChild(r);
            },
            insertBefore: function (r, o) {
              this.childNodes.push(r), e.i.appendChild(r);
            },
            removeChild: function (r) {
              this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
                e.i.removeChild(r);
            },
          })),
        _e(L(mc, { context: e.context }, t.__v), e.l))
      : e.l && e.componentWillUnmount();
}
function no(t, e) {
  var n = L(wc, { __v: t, i: e });
  return (n.containerInfo = e), n;
}
((Y.prototype = new O()).__a = function (t) {
  var e = this,
    n = eo(e.__v),
    r = e.o.get(t);
  return (
    r[0]++,
    function (o) {
      var i = function () {
        e.props.revealOrder ? (r.push(o), un(e, t, r)) : o();
      };
      n ? n(i) : i();
    }
  );
}),
  (Y.prototype.render = function (t) {
    (this.u = null), (this.o = new Map());
    var e = U(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; ) this.o.set(e[n], (this.u = [1, 0, this.u]));
    return t.children;
  }),
  (Y.prototype.componentDidUpdate = Y.prototype.componentDidMount =
    function () {
      var t = this;
      this.o.forEach(function (e, n) {
        un(t, n, e);
      });
    });
var ro =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  yc =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  bc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  vc = /[A-Z0-9]/g,
  Ec = typeof document < "u",
  Cc = function (t) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(t);
  };
function oo(t, e, n) {
  return (
    e.__k == null && (e.textContent = ""),
    _e(t, e),
    typeof n == "function" && n(),
    t ? t.__c : null
  );
}
function io(t, e, n) {
  return qr(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
(O.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (t) {
    Object.defineProperty(O.prototype, t, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + t];
      },
      set: function (e) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: e,
        });
      },
    });
  });
var dn = C.event;
function Sc() {}
function Ic() {
  return this.cancelBubble;
}
function kc() {
  return this.defaultPrevented;
}
C.event = function (t) {
  return (
    dn && (t = dn(t)),
    (t.persist = Sc),
    (t.isPropagationStopped = Ic),
    (t.isDefaultPrevented = kc),
    (t.nativeEvent = t)
  );
};
var qt,
  Rc = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  fn = C.vnode;
C.vnode = function (t) {
  typeof t.type == "string" &&
    (function (e) {
      var n = e.props,
        r = e.type,
        o = {};
      for (var i in n) {
        var s = n[i];
        if (
          !(
            (i === "value" && "defaultValue" in n && s == null) ||
            (Ec && i === "children" && r === "noscript") ||
            i === "class" ||
            i === "className"
          )
        ) {
          var a = i.toLowerCase();
          i === "defaultValue" && "value" in n && n.value == null
            ? (i = "value")
            : i === "download" && s === !0
            ? (s = "")
            : a === "ondoubleclick"
            ? (i = "ondblclick")
            : a !== "onchange" ||
              (r !== "input" && r !== "textarea") ||
              Cc(n.type)
            ? a === "onfocus"
              ? (i = "onfocusin")
              : a === "onblur"
              ? (i = "onfocusout")
              : bc.test(i)
              ? (i = a)
              : r.indexOf("-") === -1 && yc.test(i)
              ? (i = i.replace(vc, "-$&").toLowerCase())
              : s === null && (s = void 0)
            : (a = i = "oninput"),
            a === "oninput" && o[(i = a)] && (i = "oninputCapture"),
            (o[i] = s);
        }
      }
      r == "select" &&
        o.multiple &&
        Array.isArray(o.value) &&
        (o.value = U(n.children).forEach(function (c) {
          c.props.selected = o.value.indexOf(c.props.value) != -1;
        })),
        r == "select" &&
          o.defaultValue != null &&
          (o.value = U(n.children).forEach(function (c) {
            c.props.selected = o.multiple
              ? o.defaultValue.indexOf(c.props.value) != -1
              : o.defaultValue == c.props.value;
          })),
        n.class && !n.className
          ? ((o.class = n.class), Object.defineProperty(o, "className", Rc))
          : ((n.className && !n.class) || (n.class && n.className)) &&
            (o.class = o.className = n.className),
        (e.props = o);
    })(t),
    (t.$$typeof = ro),
    fn && fn(t);
};
var _n = C.__r;
C.__r = function (t) {
  _n && _n(t), (qt = t.__c);
};
var hn = C.diffed;
C.diffed = function (t) {
  hn && hn(t);
  var e = t.props,
    n = t.__e;
  n != null &&
    t.type === "textarea" &&
    "value" in e &&
    e.value !== n.value &&
    (n.value = e.value == null ? "" : e.value),
    (qt = null);
};
var so = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (t) {
          return qt.__n[t.__c].props.value;
        },
      },
    },
  },
  Tc = "17.0.2";
function ao(t) {
  return L.bind(null, t);
}
function Dt(t) {
  return !!t && t.$$typeof === ro;
}
function co(t) {
  return Dt(t) ? dc.apply(null, arguments) : t;
}
function lo(t) {
  return !!t.__k && (_e(null, t), !0);
}
function uo(t) {
  return (t && (t.base || (t.nodeType === 1 && t))) || null;
}
var fo = function (t, e) {
    return t(e);
  },
  _o = function (t, e) {
    return t(e);
  },
  ho = q;
function $t(t) {
  t();
}
function go(t) {
  return t;
}
function po() {
  return [!1, $t];
}
var mo = ye;
function wo(t, e) {
  var n = e(),
    r = He({ h: { __: n, v: e } }),
    o = r[0].h,
    i = r[1];
  return (
    ye(
      function () {
        (o.__ = n), (o.v = e), Ge(o.__, e()) || i({ h: o });
      },
      [t, n, e]
    ),
    Pt(
      function () {
        return (
          Ge(o.__, o.v()) || i({ h: o }),
          t(function () {
            Ge(o.__, o.v()) || i({ h: o });
          })
        );
      },
      [t]
    ),
    n
  );
}
var Nc = {
  useState: He,
  useId: Vr,
  useReducer: Bt,
  useEffect: Pt,
  useLayoutEffect: ye,
  useInsertionEffect: mo,
  useTransition: po,
  useDeferredValue: go,
  useSyncExternalStore: wo,
  startTransition: $t,
  useRef: Fr,
  useImperativeHandle: Hr,
  useMemo: je,
  useCallback: jr,
  useContext: Wr,
  useDebugValue: zr,
  version: "17.0.2",
  Children: Gr,
  render: oo,
  hydrate: io,
  unmountComponentAtNode: lo,
  createPortal: no,
  createElement: L,
  createContext: Dr,
  createFactory: ao,
  cloneElement: co,
  createRef: Nr,
  Fragment: q,
  isValidElement: Dt,
  findDOMNode: uo,
  Component: O,
  PureComponent: Ae,
  memo: Kr,
  forwardRef: Yr,
  flushSync: _o,
  unstable_batchedUpdates: fo,
  StrictMode: ho,
  Suspense: le,
  SuspenseList: Y,
  lazy: to,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: so,
};
const xc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: Gr,
        Component: O,
        Fragment: q,
        PureComponent: Ae,
        StrictMode: ho,
        Suspense: le,
        SuspenseList: Y,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: so,
        cloneElement: co,
        createContext: Dr,
        createElement: L,
        createFactory: ao,
        createPortal: no,
        createRef: Nr,
        default: Nc,
        findDOMNode: uo,
        flushSync: _o,
        forwardRef: Yr,
        hydrate: io,
        isValidElement: Dt,
        lazy: to,
        memo: Kr,
        render: oo,
        startTransition: $t,
        unmountComponentAtNode: lo,
        unstable_batchedUpdates: fo,
        useCallback: jr,
        useContext: Wr,
        useDebugValue: zr,
        useDeferredValue: go,
        useEffect: Pt,
        useErrorBoundary: fc,
        useId: Vr,
        useImperativeHandle: Hr,
        useInsertionEffect: mo,
        useLayoutEffect: ye,
        useMemo: je,
        useReducer: Bt,
        useRef: Fr,
        useState: He,
        useSyncExternalStore: wo,
        useTransition: po,
        version: Tc,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Mc = wn(xc);
function yo(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
var x = ya,
  bo = yo(pe),
  Ac = yo(Xo),
  y = Mc;
function Oc(t) {
  bo.toString(t, { type: "terminal" }).then(console.log);
}
var Lc = `:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;
typeof Symbol < "u" &&
  (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" &&
  (Symbol.asyncIterator ||
    (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
function Bc(t, e) {
  try {
    var n = t();
  } catch (r) {
    return e(r);
  }
  return n && n.then ? n.then(void 0, e) : n;
}
var Pc =
    "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
  Uc = "WalletConnect",
  qc = 300,
  Dc = "rgb(64, 153, 255)",
  vo = "walletconnect-wrapper",
  gn = "walletconnect-style-sheet",
  Eo = "walletconnect-qrcode-modal",
  $c = "walletconnect-qrcode-close",
  Co = "walletconnect-qrcode-text",
  Fc = "walletconnect-connect-button";
function Hc(t) {
  return y.createElement(
    "div",
    { className: "walletconnect-modal__header" },
    y.createElement("img", {
      src: Pc,
      className: "walletconnect-modal__headerLogo",
    }),
    y.createElement("p", null, Uc),
    y.createElement(
      "div",
      { className: "walletconnect-modal__close__wrapper", onClick: t.onClose },
      y.createElement(
        "div",
        { id: $c, className: "walletconnect-modal__close__icon" },
        y.createElement("div", {
          className: "walletconnect-modal__close__line1",
        }),
        y.createElement("div", {
          className: "walletconnect-modal__close__line2",
        })
      )
    )
  );
}
function jc(t) {
  return y.createElement(
    "a",
    {
      className: "walletconnect-connect__button",
      href: t.href,
      id: Fc + "-" + t.name,
      onClick: t.onClick,
      rel: "noopener noreferrer",
      style: { backgroundColor: t.color },
      target: "_blank",
    },
    t.name
  );
}
var Wc =
  "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";
function zc(t) {
  var e = t.color,
    n = t.href,
    r = t.name,
    o = t.logo,
    i = t.onClick;
  return y.createElement(
    "a",
    {
      className: "walletconnect-modal__base__row",
      href: n,
      onClick: i,
      rel: "noopener noreferrer",
      target: "_blank",
    },
    y.createElement(
      "h3",
      { className: "walletconnect-modal__base__row__h3" },
      r
    ),
    y.createElement(
      "div",
      { className: "walletconnect-modal__base__row__right" },
      y.createElement("div", {
        className: "walletconnect-modal__base__row__right__app-icon",
        style: { background: "url('" + o + "') " + e, backgroundSize: "100%" },
      }),
      y.createElement("img", {
        src: Wc,
        className: "walletconnect-modal__base__row__right__caret",
      })
    )
  );
}
function Vc(t) {
  var e = t.color,
    n = t.href,
    r = t.name,
    o = t.logo,
    i = t.onClick,
    s = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
  return y.createElement(
    "a",
    {
      className: "walletconnect-connect__button__icon_anchor",
      href: n,
      onClick: i,
      rel: "noopener noreferrer",
      target: "_blank",
    },
    y.createElement("div", {
      className: "walletconnect-connect__button__icon",
      style: { background: "url('" + o + "') " + e, backgroundSize: "100%" },
    }),
    y.createElement(
      "div",
      {
        style: { fontSize: s },
        className: "walletconnect-connect__button__text",
      },
      r
    )
  );
}
var Jc = 5,
  Ze = 12;
function Qc(t) {
  var e = x.isAndroid(),
    n = y.useState(""),
    r = n[0],
    o = n[1],
    i = y.useState(""),
    s = i[0],
    a = i[1],
    c = y.useState(1),
    _ = c[0],
    l = c[1],
    v = s
      ? t.links.filter(function (d) {
          return d.name.toLowerCase().includes(s.toLowerCase());
        })
      : t.links,
    p = t.errorMessage,
    g = s || v.length > Jc,
    w = Math.ceil(v.length / Ze),
    S = [(_ - 1) * Ze + 1, _ * Ze],
    I = v.length
      ? v.filter(function (d, m) {
          return m + 1 >= S[0] && m + 1 <= S[1];
        })
      : [],
    u = !e && w > 1,
    f = void 0;
  function h(d) {
    o(d.target.value),
      clearTimeout(f),
      d.target.value
        ? (f = setTimeout(function () {
            a(d.target.value), l(1);
          }, 1e3))
        : (o(""), a(""), l(1));
  }
  return y.createElement(
    "div",
    null,
    y.createElement(
      "p",
      { id: Co, className: "walletconnect-qrcode__text" },
      e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet
    ),
    !e &&
      y.createElement("input", {
        className: "walletconnect-search__input",
        placeholder: "Search",
        value: r,
        onChange: h,
      }),
    y.createElement(
      "div",
      {
        className:
          "walletconnect-connect__buttons__wrapper" +
          (e ? "__android" : g && v.length ? "__wrap" : ""),
      },
      e
        ? y.createElement(jc, {
            name: t.text.connect,
            color: Dc,
            href: t.uri,
            onClick: y.useCallback(function () {
              x.saveMobileLinkInfo({ name: "Unknown", href: t.uri });
            }, []),
          })
        : I.length
        ? I.map(function (d) {
            var m = d.color,
              E = d.name,
              b = d.shortName,
              k = d.logo,
              T = x.formatIOSMobile(t.uri, d),
              N = y.useCallback(
                function () {
                  x.saveMobileLinkInfo({ name: E, href: T });
                },
                [I]
              );
            return g
              ? y.createElement(Vc, {
                  color: m,
                  href: T,
                  name: b || E,
                  logo: k,
                  onClick: N,
                })
              : y.createElement(zc, {
                  color: m,
                  href: T,
                  name: E,
                  logo: k,
                  onClick: N,
                });
          })
        : y.createElement(
            y.Fragment,
            null,
            y.createElement(
              "p",
              null,
              p.length
                ? t.errorMessage
                : t.links.length && !v.length
                ? t.text.no_wallets_found
                : t.text.loading
            )
          )
    ),
    u &&
      y.createElement(
        "div",
        { className: "walletconnect-modal__footer" },
        Array(w)
          .fill(0)
          .map(function (d, m) {
            var E = m + 1,
              b = _ === E;
            return y.createElement(
              "a",
              {
                style: {
                  margin: "auto 10px",
                  fontWeight: b ? "bold" : "normal",
                },
                onClick: function () {
                  return l(E);
                },
              },
              E
            );
          })
      )
  );
}
function Kc(t) {
  var e = !!t.message.trim();
  return y.createElement(
    "div",
    {
      className:
        "walletconnect-qrcode__notification" + (e ? " notification__show" : ""),
    },
    t.message
  );
}
var Yc = function (t) {
  try {
    var e = "";
    return Promise.resolve(bo.toString(t, { margin: 0, type: "svg" })).then(
      function (n) {
        return (
          typeof n == "string" &&
            (e = n.replace("<svg", '<svg class="walletconnect-qrcode__image"')),
          e
        );
      }
    );
  } catch (n) {
    return Promise.reject(n);
  }
};
function Gc(t) {
  var e = y.useState(""),
    n = e[0],
    r = e[1],
    o = y.useState(""),
    i = o[0],
    s = o[1];
  y.useEffect(function () {
    try {
      return Promise.resolve(Yc(t.uri)).then(function (c) {
        s(c);
      });
    } catch (c) {
      Promise.reject(c);
    }
  }, []);
  var a = function () {
    var c = Ac(t.uri);
    c
      ? (r(t.text.copied_to_clipboard),
        setInterval(function () {
          return r("");
        }, 1200))
      : (r("Error"),
        setInterval(function () {
          return r("");
        }, 1200));
  };
  return y.createElement(
    "div",
    null,
    y.createElement(
      "p",
      { id: Co, className: "walletconnect-qrcode__text" },
      t.text.scan_qrcode_with_wallet
    ),
    y.createElement("div", { dangerouslySetInnerHTML: { __html: i } }),
    y.createElement(
      "div",
      { className: "walletconnect-modal__footer" },
      y.createElement("a", { onClick: a }, t.text.copy_to_clipboard)
    ),
    y.createElement(Kc, { message: n })
  );
}
function Zc(t) {
  var e = x.isAndroid(),
    n = x.isMobile(),
    r = n
      ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks
        ? t.qrcodeModalOptions.mobileLinks
        : void 0
      : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks
      ? t.qrcodeModalOptions.desktopLinks
      : void 0,
    o = y.useState(!1),
    i = o[0],
    s = o[1],
    a = y.useState(!1),
    c = a[0],
    _ = a[1],
    l = y.useState(!n),
    v = l[0],
    p = l[1],
    g = {
      mobile: n,
      text: t.text,
      uri: t.uri,
      qrcodeModalOptions: t.qrcodeModalOptions,
    },
    w = y.useState(""),
    S = w[0],
    I = w[1],
    u = y.useState(!1),
    f = u[0],
    h = u[1],
    d = y.useState([]),
    m = d[0],
    E = d[1],
    b = y.useState(""),
    k = b[0],
    T = b[1],
    N = function () {
      c ||
        i ||
        (r && !r.length) ||
        m.length > 0 ||
        y.useEffect(function () {
          var ie = function () {
            try {
              if (e) return Promise.resolve();
              s(!0);
              var M = Bc(
                function () {
                  var se =
                    t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl
                      ? t.qrcodeModalOptions.registryUrl
                      : x.getWalletRegistryUrl();
                  return Promise.resolve(fetch(se)).then(function (ko) {
                    return Promise.resolve(ko.json()).then(function (Ro) {
                      var To = Ro.listings,
                        No = n ? "mobile" : "desktop",
                        be = x.getMobileLinkRegistry(
                          x.formatMobileRegistry(To, No),
                          r
                        );
                      s(!1),
                        _(!0),
                        T(be.length ? "" : t.text.no_supported_wallets),
                        E(be);
                      var Ft = be.length === 1;
                      Ft && (I(x.formatIOSMobile(t.uri, be[0])), p(!0)), h(Ft);
                    });
                  });
                },
                function (se) {
                  s(!1),
                    _(!0),
                    T(t.text.something_went_wrong),
                    console.error(se);
                }
              );
              return Promise.resolve(
                M && M.then ? M.then(function () {}) : void 0
              );
            } catch (se) {
              return Promise.reject(se);
            }
          };
          ie();
        });
    };
  N();
  var z = n ? v : !v;
  return y.createElement(
    "div",
    { id: Eo, className: "walletconnect-qrcode__base animated fadeIn" },
    y.createElement(
      "div",
      { className: "walletconnect-modal__base" },
      y.createElement(Hc, { onClose: t.onClose }),
      f && v
        ? y.createElement(
            "div",
            { className: "walletconnect-modal__single_wallet" },
            y.createElement(
              "a",
              {
                onClick: function () {
                  return x.saveMobileLinkInfo({ name: m[0].name, href: S });
                },
                href: S,
                rel: "noopener noreferrer",
                target: "_blank",
              },
              t.text.connect_with + " " + (f ? m[0].name : "") + " ›"
            )
          )
        : e || i || (!i && m.length)
        ? y.createElement(
            "div",
            {
              className:
                "walletconnect-modal__mobile__toggle" +
                (z ? " right__selected" : ""),
            },
            y.createElement("div", {
              className: "walletconnect-modal__mobile__toggle_selector",
            }),
            n
              ? y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(
                    "a",
                    {
                      onClick: function () {
                        return p(!1), N();
                      },
                    },
                    t.text.mobile
                  ),
                  y.createElement(
                    "a",
                    {
                      onClick: function () {
                        return p(!0);
                      },
                    },
                    t.text.qrcode
                  )
                )
              : y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(
                    "a",
                    {
                      onClick: function () {
                        return p(!0);
                      },
                    },
                    t.text.qrcode
                  ),
                  y.createElement(
                    "a",
                    {
                      onClick: function () {
                        return p(!1), N();
                      },
                    },
                    t.text.desktop
                  )
                )
          )
        : null,
      y.createElement(
        "div",
        null,
        v || (!e && !i && !m.length)
          ? y.createElement(Gc, Object.assign({}, g))
          : y.createElement(
              Qc,
              Object.assign({}, g, { links: m, errorMessage: k })
            )
      )
    )
  );
}
var Xc = {
    choose_preferred_wallet: "Wähle bevorzugte Wallet",
    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
    scan_qrcode_with_wallet:
      "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
    connect: "Verbinden",
    qrcode: "QR-Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "In die Zwischenablage kopieren",
    copied_to_clipboard: "In die Zwischenablage kopiert!",
    connect_with: "Verbinden mit Hilfe von",
    loading: "Laden...",
    something_went_wrong: "Etwas ist schief gelaufen",
    no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
    no_wallets_found: "keine Wallet gefunden",
  },
  el = {
    choose_preferred_wallet: "Choose your preferred wallet",
    connect_mobile_wallet: "Connect to Mobile Wallet",
    scan_qrcode_with_wallet:
      "Scan QR code with a WalletConnect-compatible wallet",
    connect: "Connect",
    qrcode: "QR Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "Copy to clipboard",
    copied_to_clipboard: "Copied to clipboard!",
    connect_with: "Connect with",
    loading: "Loading...",
    something_went_wrong: "Something went wrong",
    no_supported_wallets: "There are no supported wallets yet",
    no_wallets_found: "No wallets found",
  },
  tl = {
    choose_preferred_wallet: "Elige tu billetera preferida",
    connect_mobile_wallet: "Conectar a billetera móvil",
    scan_qrcode_with_wallet:
      "Escanea el código QR con una billetera compatible con WalletConnect",
    connect: "Conectar",
    qrcode: "Código QR",
    mobile: "Móvil",
    desktop: "Desktop",
    copy_to_clipboard: "Copiar",
    copied_to_clipboard: "Copiado!",
    connect_with: "Conectar mediante",
    loading: "Cargando...",
    something_went_wrong: "Algo salió mal",
    no_supported_wallets: "Todavía no hay billeteras compatibles",
    no_wallets_found: "No se encontraron billeteras",
  },
  nl = {
    choose_preferred_wallet: "Choisissez votre portefeuille préféré",
    connect_mobile_wallet: "Se connecter au portefeuille mobile",
    scan_qrcode_with_wallet:
      "Scannez le QR code avec un portefeuille compatible WalletConnect",
    connect: "Se connecter",
    qrcode: "QR Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "Copier",
    copied_to_clipboard: "Copié!",
    connect_with: "Connectez-vous à l'aide de",
    loading: "Chargement...",
    something_went_wrong: "Quelque chose a mal tourné",
    no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
    no_wallets_found: "Aucun portefeuille trouvé",
  },
  rl = {
    choose_preferred_wallet: "원하는 지갑을 선택하세요",
    connect_mobile_wallet: "모바일 지갑과 연결",
    scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
    connect: "연결",
    qrcode: "QR 코드",
    mobile: "모바일",
    desktop: "데스크탑",
    copy_to_clipboard: "클립보드에 복사",
    copied_to_clipboard: "클립보드에 복사되었습니다!",
    connect_with: "와 연결하다",
    loading: "로드 중...",
    something_went_wrong: "문제가 발생했습니다.",
    no_supported_wallets: "아직 지원되는 지갑이 없습니다",
    no_wallets_found: "지갑을 찾을 수 없습니다",
  },
  ol = {
    choose_preferred_wallet: "Escolha sua carteira preferida",
    connect_mobile_wallet: "Conectar-se à carteira móvel",
    scan_qrcode_with_wallet:
      "Ler o código QR com uma carteira compatível com WalletConnect",
    connect: "Conectar",
    qrcode: "Código QR",
    mobile: "Móvel",
    desktop: "Desktop",
    copy_to_clipboard: "Copiar",
    copied_to_clipboard: "Copiado!",
    connect_with: "Ligar por meio de",
    loading: "Carregamento...",
    something_went_wrong: "Algo correu mal",
    no_supported_wallets: "Ainda não há carteiras suportadas",
    no_wallets_found: "Nenhuma carteira encontrada",
  },
  il = {
    choose_preferred_wallet: "选择你的钱包",
    connect_mobile_wallet: "连接至移动端钱包",
    scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
    connect: "连接",
    qrcode: "二维码",
    mobile: "移动",
    desktop: "桌面",
    copy_to_clipboard: "复制到剪贴板",
    copied_to_clipboard: "复制到剪贴板成功！",
    connect_with: "通过以下方式连接",
    loading: "正在加载...",
    something_went_wrong: "出了问题",
    no_supported_wallets: "目前还没有支持的钱包",
    no_wallets_found: "没有找到钱包",
  },
  sl = {
    choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
    connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
    scan_qrcode_with_wallet:
      "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
    connect: "اتصال",
    qrcode: "کد QR",
    mobile: "سیار",
    desktop: "دسکتاپ",
    copy_to_clipboard: "کپی به کلیپ بورد",
    copied_to_clipboard: "در کلیپ بورد کپی شد!",
    connect_with: "ارتباط با",
    loading: "...بارگذاری",
    something_went_wrong: "مشکلی پیش آمد",
    no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
    no_wallets_found: "هیچ کیف پولی پیدا نشد",
  },
  pn = { de: Xc, en: el, es: tl, fr: nl, ko: rl, pt: ol, zh: il, fa: sl };
function al() {
  var t = x.getDocumentOrThrow(),
    e = t.getElementById(gn);
  e && t.head.removeChild(e);
  var n = t.createElement("style");
  n.setAttribute("id", gn), (n.innerText = Lc), t.head.appendChild(n);
}
function cl() {
  var t = x.getDocumentOrThrow(),
    e = t.createElement("div");
  return e.setAttribute("id", vo), t.body.appendChild(e), e;
}
function So() {
  var t = x.getDocumentOrThrow(),
    e = t.getElementById(Eo);
  e &&
    ((e.className = e.className.replace("fadeIn", "fadeOut")),
    setTimeout(function () {
      var n = t.getElementById(vo);
      n && t.body.removeChild(n);
    }, qc));
}
function ll(t) {
  return function () {
    So(), t && t();
  };
}
function ul() {
  var t = x.getNavigatorOrThrow().language.split("-")[0] || "en";
  return pn[t] || pn.en;
}
function dl(t, e, n) {
  al();
  var r = cl();
  y.render(
    y.createElement(Zc, {
      text: ul(),
      uri: t,
      onClose: ll(e),
      qrcodeModalOptions: n,
    }),
    r
  );
}
function fl() {
  So();
}
var Io = function () {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
};
function _l(t, e, n) {
  console.log(t), Io() ? Oc(t) : dl(t, e, n);
}
function hl() {
  Io() || fl();
}
var gl = { open: _l, close: hl },
  pl = gl;
class ml extends Go {
  constructor(e) {
    super(),
      (this.events = new mn()),
      (this.accounts = []),
      (this.chainId = 1),
      (this.pending = !1),
      (this.bridge = "https://bridge.walletconnect.org"),
      (this.qrcode = !0),
      (this.qrcodeModalOptions = void 0),
      (this.opts = e),
      (this.chainId = (e == null ? void 0 : e.chainId) || this.chainId),
      (this.wc = this.register(e));
  }
  get connected() {
    return typeof this.wc < "u" && this.wc.connected;
  }
  get connecting() {
    return this.pending;
  }
  get connector() {
    return (this.wc = this.register(this.opts)), this.wc;
  }
  on(e, n) {
    this.events.on(e, n);
  }
  once(e, n) {
    this.events.once(e, n);
  }
  off(e, n) {
    this.events.off(e, n);
  }
  removeListener(e, n) {
    this.events.removeListener(e, n);
  }
  async open(e) {
    if (this.connected) {
      this.onOpen();
      return;
    }
    return new Promise((n, r) => {
      this.on("error", (o) => {
        r(o);
      }),
        this.on("open", () => {
          n();
        }),
        this.create(e);
    });
  }
  async close() {
    typeof this.wc > "u" ||
      (this.wc.connected && this.wc.killSession(), this.onClose());
  }
  async send(e) {
    (this.wc = this.register(this.opts)),
      this.connected || (await this.open()),
      this.sendPayload(e)
        .then((n) => this.events.emit("payload", n))
        .catch((n) => this.events.emit("payload", Ht(e.id, n.message)));
  }
  register(e) {
    if (this.wc) return this.wc;
    (this.opts = e || this.opts),
      (this.bridge =
        e != null && e.connector
          ? e.connector.bridge
          : (e == null ? void 0 : e.bridge) ||
            "https://bridge.walletconnect.org"),
      (this.qrcode =
        typeof (e == null ? void 0 : e.qrcode) > "u" || e.qrcode !== !1),
      (this.chainId =
        typeof (e == null ? void 0 : e.chainId) < "u"
          ? e.chainId
          : this.chainId),
      (this.qrcodeModalOptions = e == null ? void 0 : e.qrcodeModalOptions);
    const n = {
      bridge: this.bridge,
      qrcodeModal: this.qrcode ? pl : void 0,
      qrcodeModalOptions: this.qrcodeModalOptions,
      storageId: e == null ? void 0 : e.storageId,
      signingMethods: e == null ? void 0 : e.signingMethods,
      clientMeta: e == null ? void 0 : e.clientMeta,
    };
    if (
      ((this.wc =
        typeof (e == null ? void 0 : e.connector) < "u"
          ? e.connector
          : new wa(n)),
      typeof this.wc > "u")
    )
      throw new Error("Failed to register WalletConnect connector");
    return (
      this.wc.accounts.length && (this.accounts = this.wc.accounts),
      this.wc.chainId && (this.chainId = this.wc.chainId),
      this.registerConnectorEvents(),
      this.wc
    );
  }
  onOpen(e) {
    (this.pending = !1), e && (this.wc = e), this.events.emit("open");
  }
  onClose() {
    (this.pending = !1),
      this.wc && (this.wc = void 0),
      this.events.emit("close");
  }
  onError(e, n = "Failed or Rejected Request", r = -32e3) {
    const o = { id: e.id, jsonrpc: e.jsonrpc, error: { code: r, message: n } };
    return this.events.emit("payload", o), o;
  }
  create(e) {
    (this.wc = this.register(this.opts)),
      (this.chainId = e || this.chainId),
      !(this.connected || this.pending) &&
        ((this.pending = !0),
        this.registerConnectorEvents(),
        this.wc
          .createSession({ chainId: this.chainId })
          .then(() => this.events.emit("created"))
          .catch((n) => this.events.emit("error", n)));
  }
  registerConnectorEvents() {
    (this.wc = this.register(this.opts)),
      this.wc.on("connect", (e) => {
        var n, r;
        if (e) {
          this.events.emit("error", e);
          return;
        }
        (this.accounts =
          ((n = this.wc) === null || n === void 0 ? void 0 : n.accounts) || []),
          (this.chainId =
            ((r = this.wc) === null || r === void 0 ? void 0 : r.chainId) ||
            this.chainId),
          this.onOpen();
      }),
      this.wc.on("disconnect", (e) => {
        if (e) {
          this.events.emit("error", e);
          return;
        }
        this.onClose();
      }),
      this.wc.on("modal_closed", () => {
        this.events.emit("error", new Error("User closed modal"));
      }),
      this.wc.on("session_update", (e, n) => {
        const { accounts: r, chainId: o } = n.params[0];
        (!this.accounts || (r && this.accounts !== r)) &&
          ((this.accounts = r), this.events.emit("accountsChanged", r)),
          (!this.chainId || (o && this.chainId !== o)) &&
            ((this.chainId = o), this.events.emit("chainChanged", o));
      });
  }
  async sendPayload(e) {
    this.wc = this.register(this.opts);
    try {
      const n = await this.wc.unsafeSend(e);
      return this.sanitizeResponse(n);
    } catch (n) {
      return this.onError(e, n.message);
    }
  }
  sanitizeResponse(e) {
    return typeof e.error < "u" && typeof e.error.code > "u"
      ? Ht(e.id, e.error.message, e.error.data)
      : e;
  }
}
class vl {
  constructor(e) {
    (this.events = new mn()),
      (this.rpc = {
        infuraId: e == null ? void 0 : e.infuraId,
        custom: e == null ? void 0 : e.rpc,
      }),
      (this.signer = new jt(new ml(e)));
    const n =
      this.signer.connection.chainId || (e == null ? void 0 : e.chainId) || 1;
    (this.http = this.setHttpProvider(n)), this.registerEventListeners();
  }
  get connected() {
    return this.signer.connection.connected;
  }
  get connector() {
    return this.signer.connection.connector;
  }
  get accounts() {
    return this.signer.connection.accounts;
  }
  get chainId() {
    return this.signer.connection.chainId;
  }
  get rpcUrl() {
    var e;
    return (
      ((e = this.http) === null || e === void 0 ? void 0 : e.connection).url ||
      ""
    );
  }
  async request(e) {
    switch (e.method) {
      case "eth_requestAccounts":
        return await this.connect(), this.signer.connection.accounts;
      case "eth_accounts":
        return this.signer.connection.accounts;
      case "eth_chainId":
        return this.signer.connection.chainId;
    }
    if (dt.includes(e.method)) return this.signer.request(e);
    if (typeof this.http > "u")
      throw new Error(
        `Cannot request JSON-RPC method (${e.method}) without provided rpc url`
      );
    return this.http.request(e);
  }
  sendAsync(e, n) {
    this.request(e)
      .then((r) => n(null, r))
      .catch((r) => n(r, void 0));
  }
  async enable() {
    return await this.request({ method: "eth_requestAccounts" });
  }
  async connect() {
    this.signer.connection.connected || (await this.signer.connect());
  }
  async disconnect() {
    this.signer.connection.connected && (await this.signer.disconnect());
  }
  on(e, n) {
    this.events.on(e, n);
  }
  once(e, n) {
    this.events.once(e, n);
  }
  removeListener(e, n) {
    this.events.removeListener(e, n);
  }
  off(e, n) {
    this.events.off(e, n);
  }
  get isWalletConnect() {
    return !0;
  }
  registerEventListeners() {
    this.signer.connection.on("accountsChanged", (e) => {
      this.events.emit("accountsChanged", e);
    }),
      this.signer.connection.on("chainChanged", (e) => {
        (this.http = this.setHttpProvider(e)),
          this.events.emit("chainChanged", e);
      }),
      this.signer.on("disconnect", () => {
        this.events.emit("disconnect");
      });
  }
  setHttpProvider(e) {
    const n = Wn(e, this.rpc);
    return typeof n > "u" ? void 0 : new jt(new Zo(n));
  }
}
export { vl as default };
