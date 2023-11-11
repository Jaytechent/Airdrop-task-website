import {
  Z as mt,
  Y as J,
  V as D,
  m as V,
  d as P,
  f as S,
  X as W,
  c as O,
  e as F,
  b as H,
  D as Z,
} from "./index-ba2052c8.js";
import { e as Ei, d as Ai } from "./dijkstra-73e86c63.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Le = window,
  qn =
    Le.ShadowRoot &&
    (Le.ShadyCSS === void 0 || Le.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  Yn = Symbol(),
  ir = new WeakMap();
let zr = class {
  constructor(t, n, i) {
    if (((this._$cssResult$ = !0), i !== Yn))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = t), (this.t = n);
  }
  get styleSheet() {
    let t = this.o;
    const n = this.t;
    if (qn && t === void 0) {
      const i = n !== void 0 && n.length === 1;
      i && (t = ir.get(n)),
        t === void 0 &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && ir.set(n, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ki = (e) => new zr(typeof e == "string" ? e : e + "", void 0, Yn),
  _ = (e, ...t) => {
    const n =
      e.length === 1
        ? e[0]
        : t.reduce(
            (i, r, o) =>
              i +
              ((a) => {
                if (a._$cssResult$ === !0) return a.cssText;
                if (typeof a == "number") return a;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    a +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(r) +
              e[o + 1],
            e[0]
          );
    return new zr(n, e, Yn);
  },
  Ii = (e, t) => {
    qn
      ? (e.adoptedStyleSheets = t.map((n) =>
          n instanceof CSSStyleSheet ? n : n.styleSheet
        ))
      : t.forEach((n) => {
          const i = document.createElement("style"),
            r = Le.litNonce;
          r !== void 0 && i.setAttribute("nonce", r),
            (i.textContent = n.cssText),
            e.appendChild(i);
        });
  },
  or = qn
    ? (e) => e
    : (e) =>
        e instanceof CSSStyleSheet
          ? ((t) => {
              let n = "";
              for (const i of t.cssRules) n += i.cssText;
              return ki(n);
            })(e)
          : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var qe;
const je = window,
  ar = je.trustedTypes,
  Oi = ar ? ar.emptyScript : "",
  sr = je.reactiveElementPolyfillSupport,
  Bn = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? Oi : null;
          break;
        case Object:
        case Array:
          e = e == null ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let n = e;
      switch (t) {
        case Boolean:
          n = e !== null;
          break;
        case Number:
          n = e === null ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            n = JSON.parse(e);
          } catch {
            n = null;
          }
      }
      return n;
    },
  },
  Fr = (e, t) => t !== e && (t == t || e == e),
  Ye = {
    attribute: !0,
    type: String,
    converter: Bn,
    reflect: !1,
    hasChanged: Fr,
  };
let Nt = class extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this.u();
  }
  static addInitializer(t) {
    var n;
    this.finalize(),
      ((n = this.h) !== null && n !== void 0 ? n : (this.h = [])).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((n, i) => {
        const r = this._$Ep(i, n);
        r !== void 0 && (this._$Ev.set(r, i), t.push(r));
      }),
      t
    );
  }
  static createProperty(t, n = Ye) {
    if (
      (n.state && (n.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, n),
      !n.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t,
        r = this.getPropertyDescriptor(t, i, n);
      r !== void 0 && Object.defineProperty(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, n, i) {
    return {
      get() {
        return this[n];
      },
      set(r) {
        const o = this[t];
        (this[n] = r), this.requestUpdate(t, o, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || Ye;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      t.h !== void 0 && (this.h = [...t.h]),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const n = this.properties,
        i = [
          ...Object.getOwnPropertyNames(n),
          ...Object.getOwnPropertySymbols(n),
        ];
      for (const r of i) this.createProperty(r, n[r]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const n = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i) n.unshift(or(r));
    } else t !== void 0 && n.push(or(t));
    return n;
  }
  static _$Ep(t, n) {
    const i = n.attribute;
    return i === !1
      ? void 0
      : typeof i == "string"
      ? i
      : typeof t == "string"
      ? t.toLowerCase()
      : void 0;
  }
  u() {
    var t;
    (this._$E_ = new Promise((n) => (this.enableUpdating = n))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      (t = this.constructor.h) === null ||
        t === void 0 ||
        t.forEach((n) => n(this));
  }
  addController(t) {
    var n, i;
    ((n = this._$ES) !== null && n !== void 0 ? n : (this._$ES = [])).push(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((i = t.hostConnected) === null || i === void 0 || i.call(t));
  }
  removeController(t) {
    var n;
    (n = this._$ES) === null ||
      n === void 0 ||
      n.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, n) => {
      this.hasOwnProperty(n) && (this._$Ei.set(n, this[n]), delete this[n]);
    });
  }
  createRenderRoot() {
    var t;
    const n =
      (t = this.shadowRoot) !== null && t !== void 0
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return Ii(n, this.constructor.elementStyles), n;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$ES) === null ||
        t === void 0 ||
        t.forEach((n) => {
          var i;
          return (i = n.hostConnected) === null || i === void 0
            ? void 0
            : i.call(n);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null ||
      t === void 0 ||
      t.forEach((n) => {
        var i;
        return (i = n.hostDisconnected) === null || i === void 0
          ? void 0
          : i.call(n);
      });
  }
  attributeChangedCallback(t, n, i) {
    this._$AK(t, i);
  }
  _$EO(t, n, i = Ye) {
    var r;
    const o = this.constructor._$Ep(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const a = (
        ((r = i.converter) === null || r === void 0
          ? void 0
          : r.toAttribute) !== void 0
          ? i.converter
          : Bn
      ).toAttribute(n, i.type);
      (this._$El = t),
        a == null ? this.removeAttribute(o) : this.setAttribute(o, a),
        (this._$El = null);
    }
  }
  _$AK(t, n) {
    var i;
    const r = this.constructor,
      o = r._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const a = r.getPropertyOptions(o),
        l =
          typeof a.converter == "function"
            ? { fromAttribute: a.converter }
            : ((i = a.converter) === null || i === void 0
                ? void 0
                : i.fromAttribute) !== void 0
            ? a.converter
            : Bn;
      (this._$El = o),
        (this[o] = l.fromAttribute(n, a.type)),
        (this._$El = null);
    }
  }
  requestUpdate(t, n, i) {
    let r = !0;
    t !== void 0 &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || Fr)(
        this[t],
        n
      )
        ? (this._$AL.has(t) || this._$AL.set(t, n),
          i.reflect === !0 &&
            this._$El !== t &&
            (this._$EC === void 0 && (this._$EC = new Map()),
            this._$EC.set(t, i)))
        : (r = !1)),
      !this.isUpdatePending && r && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (n) {
      Promise.reject(n);
    }
    const t = this.scheduleUpdate();
    return t != null && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((r, o) => (this[o] = r)), (this._$Ei = void 0));
    let n = !1;
    const i = this._$AL;
    try {
      (n = this.shouldUpdate(i)),
        n
          ? (this.willUpdate(i),
            (t = this._$ES) === null ||
              t === void 0 ||
              t.forEach((r) => {
                var o;
                return (o = r.hostUpdate) === null || o === void 0
                  ? void 0
                  : o.call(r);
              }),
            this.update(i))
          : this._$Ek();
    } catch (r) {
      throw ((n = !1), this._$Ek(), r);
    }
    n && this._$AE(i);
  }
  willUpdate(t) {}
  _$AE(t) {
    var n;
    (n = this._$ES) === null ||
      n === void 0 ||
      n.forEach((i) => {
        var r;
        return (r = i.hostUpdated) === null || r === void 0
          ? void 0
          : r.call(i);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 &&
      (this._$EC.forEach((n, i) => this._$EO(i, this[i], n)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
};
(Nt.finalized = !0),
  (Nt.elementProperties = new Map()),
  (Nt.elementStyles = []),
  (Nt.shadowRootOptions = { mode: "open" }),
  sr == null || sr({ ReactiveElement: Nt }),
  ((qe = je.reactiveElementVersions) !== null && qe !== void 0
    ? qe
    : (je.reactiveElementVersions = [])
  ).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Je;
const De = window,
  Bt = De.trustedTypes,
  lr = Bt ? Bt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  Wn = "$lit$",
  dt = `lit$${(Math.random() + "").slice(9)}$`,
  Gr = "?" + dt,
  _i = `<${Gr}>`,
  Wt = document,
  le = () => Wt.createComment(""),
  ce = (e) => e === null || (typeof e != "object" && typeof e != "function"),
  Kr = Array.isArray,
  Pi = (e) =>
    Kr(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function",
  Qe = `[ 	
\f\r]`,
  Gt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  cr = /-->/g,
  dr = />/g,
  gt = RegExp(
    `>|${Qe}(?:([^\\s"'>=/]+)(${Qe}*=${Qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g"
  ),
  hr = /'/g,
  ur = /"/g,
  qr = /^(?:script|style|textarea|title)$/i,
  Yr =
    (e) =>
    (t, ...n) => ({ _$litType$: e, strings: t, values: n }),
  d = Yr(1),
  T = Yr(2),
  $t = Symbol.for("lit-noChange"),
  U = Symbol.for("lit-nothing"),
  mr = new WeakMap(),
  jt = Wt.createTreeWalker(Wt, 129, null, !1),
  Mi = (e, t) => {
    const n = e.length - 1,
      i = [];
    let r,
      o = t === 2 ? "<svg>" : "",
      a = Gt;
    for (let s = 0; s < n; s++) {
      const c = e[s];
      let m,
        u,
        h = -1,
        p = 0;
      for (; p < c.length && ((a.lastIndex = p), (u = a.exec(c)), u !== null); )
        (p = a.lastIndex),
          a === Gt
            ? u[1] === "!--"
              ? (a = cr)
              : u[1] !== void 0
              ? (a = dr)
              : u[2] !== void 0
              ? (qr.test(u[2]) && (r = RegExp("</" + u[2], "g")), (a = gt))
              : u[3] !== void 0 && (a = gt)
            : a === gt
            ? u[0] === ">"
              ? ((a = r ?? Gt), (h = -1))
              : u[1] === void 0
              ? (h = -2)
              : ((h = a.lastIndex - u[2].length),
                (m = u[1]),
                (a = u[3] === void 0 ? gt : u[3] === '"' ? ur : hr))
            : a === ur || a === hr
            ? (a = gt)
            : a === cr || a === dr
            ? (a = Gt)
            : ((a = gt), (r = void 0));
      const I = a === gt && e[s + 1].startsWith("/>") ? " " : "";
      o +=
        a === Gt
          ? c + _i
          : h >= 0
          ? (i.push(m), c.slice(0, h) + Wn + c.slice(h) + dt + I)
          : c + dt + (h === -2 ? (i.push(void 0), s) : I);
    }
    const l = o + (e[n] || "<?>") + (t === 2 ? "</svg>" : "");
    if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [lr !== void 0 ? lr.createHTML(l) : l, i];
  };
let Un = class Jr {
  constructor({ strings: t, _$litType$: n }, i) {
    let r;
    this.parts = [];
    let o = 0,
      a = 0;
    const l = t.length - 1,
      s = this.parts,
      [c, m] = Mi(t, n);
    if (
      ((this.el = Jr.createElement(c, i)),
      (jt.currentNode = this.el.content),
      n === 2)
    ) {
      const u = this.el.content,
        h = u.firstChild;
      h.remove(), u.append(...h.childNodes);
    }
    for (; (r = jt.nextNode()) !== null && s.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) {
          const u = [];
          for (const h of r.getAttributeNames())
            if (h.endsWith(Wn) || h.startsWith(dt)) {
              const p = m[a++];
              if ((u.push(h), p !== void 0)) {
                const I = r.getAttribute(p.toLowerCase() + Wn).split(dt),
                  y = /([.?@])?(.*)/.exec(p);
                s.push({
                  type: 1,
                  index: o,
                  name: y[2],
                  strings: I,
                  ctor:
                    y[1] === "."
                      ? Si
                      : y[1] === "?"
                      ? Ni
                      : y[1] === "@"
                      ? Li
                      : Ve,
                });
              } else s.push({ type: 6, index: o });
            }
          for (const h of u) r.removeAttribute(h);
        }
        if (qr.test(r.tagName)) {
          const u = r.textContent.split(dt),
            h = u.length - 1;
          if (h > 0) {
            r.textContent = Bt ? Bt.emptyScript : "";
            for (let p = 0; p < h; p++)
              r.append(u[p], le()),
                jt.nextNode(),
                s.push({ type: 2, index: ++o });
            r.append(u[h], le());
          }
        }
      } else if (r.nodeType === 8)
        if (r.data === Gr) s.push({ type: 2, index: o });
        else {
          let u = -1;
          for (; (u = r.data.indexOf(dt, u + 1)) !== -1; )
            s.push({ type: 7, index: o }), (u += dt.length - 1);
        }
      o++;
    }
  }
  static createElement(t, n) {
    const i = Wt.createElement("template");
    return (i.innerHTML = t), i;
  }
};
function Ut(e, t, n = e, i) {
  var r, o, a, l;
  if (t === $t) return t;
  let s =
    i !== void 0
      ? (r = n._$Co) === null || r === void 0
        ? void 0
        : r[i]
      : n._$Cl;
  const c = ce(t) ? void 0 : t._$litDirective$;
  return (
    (s == null ? void 0 : s.constructor) !== c &&
      ((o = s == null ? void 0 : s._$AO) === null ||
        o === void 0 ||
        o.call(s, !1),
      c === void 0 ? (s = void 0) : ((s = new c(e)), s._$AT(e, n, i)),
      i !== void 0
        ? (((a = (l = n)._$Co) !== null && a !== void 0 ? a : (l._$Co = []))[
            i
          ] = s)
        : (n._$Cl = s)),
    s !== void 0 && (t = Ut(e, s._$AS(e, t.values), s, i)),
    t
  );
}
class Ti {
  constructor(t, n) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = n);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var n;
    const {
        el: { content: i },
        parts: r,
      } = this._$AD,
      o = (
        (n = t == null ? void 0 : t.creationScope) !== null && n !== void 0
          ? n
          : Wt
      ).importNode(i, !0);
    jt.currentNode = o;
    let a = jt.nextNode(),
      l = 0,
      s = 0,
      c = r[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let m;
        c.type === 2
          ? (m = new ue(a, a.nextSibling, this, t))
          : c.type === 1
          ? (m = new c.ctor(a, c.name, c.strings, this, t))
          : c.type === 6 && (m = new ji(a, this, t)),
          this._$AV.push(m),
          (c = r[++s]);
      }
      l !== (c == null ? void 0 : c.index) && ((a = jt.nextNode()), l++);
    }
    return o;
  }
  v(t) {
    let n = 0;
    for (const i of this._$AV)
      i !== void 0 &&
        (i.strings !== void 0
          ? (i._$AI(t, i, n), (n += i.strings.length - 2))
          : i._$AI(t[n])),
        n++;
  }
}
class ue {
  constructor(t, n, i, r) {
    var o;
    (this.type = 2),
      (this._$AH = U),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = n),
      (this._$AM = i),
      (this.options = r),
      (this._$Cp =
        (o = r == null ? void 0 : r.isConnected) === null || o === void 0 || o);
  }
  get _$AU() {
    var t, n;
    return (n = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !==
      null && n !== void 0
      ? n
      : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const n = this._$AM;
    return (
      n !== void 0 &&
        (t == null ? void 0 : t.nodeType) === 11 &&
        (t = n.parentNode),
      t
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, n = this) {
    (t = Ut(this, t, n)),
      ce(t)
        ? t === U || t == null || t === ""
          ? (this._$AH !== U && this._$AR(), (this._$AH = U))
          : t !== this._$AH && t !== $t && this._(t)
        : t._$litType$ !== void 0
        ? this.g(t)
        : t.nodeType !== void 0
        ? this.$(t)
        : Pi(t)
        ? this.T(t)
        : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
  }
  _(t) {
    this._$AH !== U && ce(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.$(Wt.createTextNode(t)),
      (this._$AH = t);
  }
  g(t) {
    var n;
    const { values: i, _$litType$: r } = t,
      o =
        typeof r == "number"
          ? this._$AC(t)
          : (r.el === void 0 && (r.el = Un.createElement(r.h, this.options)),
            r);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
      this._$AH.v(i);
    else {
      const a = new Ti(o, this),
        l = a.u(this.options);
      a.v(i), this.$(l), (this._$AH = a);
    }
  }
  _$AC(t) {
    let n = mr.get(t.strings);
    return n === void 0 && mr.set(t.strings, (n = new Un(t))), n;
  }
  T(t) {
    Kr(this._$AH) || ((this._$AH = []), this._$AR());
    const n = this._$AH;
    let i,
      r = 0;
    for (const o of t)
      r === n.length
        ? n.push((i = new ue(this.k(le()), this.k(le()), this, this.options)))
        : (i = n[r]),
        i._$AI(o),
        r++;
    r < n.length && (this._$AR(i && i._$AB.nextSibling, r), (n.length = r));
  }
  _$AR(t = this._$AA.nextSibling, n) {
    var i;
    for (
      (i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, n);
      t && t !== this._$AB;

    ) {
      const r = t.nextSibling;
      t.remove(), (t = r);
    }
  }
  setConnected(t) {
    var n;
    this._$AM === void 0 &&
      ((this._$Cp = t),
      (n = this._$AP) === null || n === void 0 || n.call(this, t));
  }
}
class Ve {
  constructor(t, n, i, r, o) {
    (this.type = 1),
      (this._$AH = U),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = n),
      (this._$AM = r),
      (this.options = o),
      i.length > 2 || i[0] !== "" || i[1] !== ""
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = U);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, n = this, i, r) {
    const o = this.strings;
    let a = !1;
    if (o === void 0)
      (t = Ut(this, t, n, 0)),
        (a = !ce(t) || (t !== this._$AH && t !== $t)),
        a && (this._$AH = t);
    else {
      const l = t;
      let s, c;
      for (t = o[0], s = 0; s < o.length - 1; s++)
        (c = Ut(this, l[i + s], n, s)),
          c === $t && (c = this._$AH[s]),
          a || (a = !ce(c) || c !== this._$AH[s]),
          c === U ? (t = U) : t !== U && (t += (c ?? "") + o[s + 1]),
          (this._$AH[s] = c);
    }
    a && !r && this.j(t);
  }
  j(t) {
    t === U
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? "");
  }
}
class Si extends Ve {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === U ? void 0 : t;
  }
}
const Ri = Bt ? Bt.emptyScript : "";
class Ni extends Ve {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    t && t !== U
      ? this.element.setAttribute(this.name, Ri)
      : this.element.removeAttribute(this.name);
  }
}
let Li = class extends Ve {
    constructor(t, n, i, r, o) {
      super(t, n, i, r, o), (this.type = 5);
    }
    _$AI(t, n = this) {
      var i;
      if ((t = (i = Ut(this, t, n, 0)) !== null && i !== void 0 ? i : U) === $t)
        return;
      const r = this._$AH,
        o =
          (t === U && r !== U) ||
          t.capture !== r.capture ||
          t.once !== r.once ||
          t.passive !== r.passive,
        a = t !== U && (r === U || o);
      o && this.element.removeEventListener(this.name, this, r),
        a && this.element.addEventListener(this.name, this, t),
        (this._$AH = t);
    }
    handleEvent(t) {
      var n, i;
      typeof this._$AH == "function"
        ? this._$AH.call(
            (i =
              (n = this.options) === null || n === void 0 ? void 0 : n.host) !==
              null && i !== void 0
              ? i
              : this.element,
            t
          )
        : this._$AH.handleEvent(t);
    }
  },
  ji = class {
    constructor(t, n, i) {
      (this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = n),
        (this.options = i);
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      Ut(this, t);
    }
  };
const pr = De.litHtmlPolyfillSupport;
pr == null || pr(Un, ue),
  ((Je = De.litHtmlVersions) !== null && Je !== void 0
    ? Je
    : (De.litHtmlVersions = [])
  ).push("2.7.2");
const Di = (e, t, n) => {
  var i, r;
  const o =
    (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : t;
  let a = o._$litPart$;
  if (a === void 0) {
    const l =
      (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0
        ? r
        : null;
    o._$litPart$ = a = new ue(t.insertBefore(le(), l), l, void 0, n ?? {});
  }
  return a._$AI(e), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Xe, tn;
let C = class extends Nt {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var t, n;
    const i = super.createRenderRoot();
    return (
      ((t = (n = this.renderOptions).renderBefore) !== null && t !== void 0) ||
        (n.renderBefore = i.firstChild),
      i
    );
  }
  update(t) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = Di(n, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return $t;
  }
};
(C.finalized = !0),
  (C._$litElement$ = !0),
  (Xe = globalThis.litElementHydrateSupport) === null ||
    Xe === void 0 ||
    Xe.call(globalThis, { LitElement: C });
const gr = globalThis.litElementPolyfillSupport;
gr == null || gr({ LitElement: C });
((tn = globalThis.litElementVersions) !== null && tn !== void 0
  ? tn
  : (globalThis.litElementVersions = [])
).push("3.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const E = (e) => (t) =>
  typeof t == "function"
    ? ((n, i) => (customElements.define(n, i), i))(e, t)
    : ((n, i) => {
        const { kind: r, elements: o } = i;
        return {
          kind: r,
          elements: o,
          finisher(a) {
            customElements.define(n, a);
          },
        };
      })(e, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Bi = (e, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? {
        ...t,
        finisher(n) {
          n.createProperty(t.key, e);
        },
      }
    : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer() {
          typeof t.initializer == "function" &&
            (this[t.key] = t.initializer.call(this));
        },
        finisher(n) {
          n.createProperty(t.key, e);
        },
      };
function b(e) {
  return (t, n) =>
    n !== void 0
      ? ((i, r, o) => {
          r.constructor.createProperty(o, i);
        })(e, t, n)
      : Bi(e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function R(e) {
  return b({ ...e, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var en;
((en = window.HTMLSlotElement) === null || en === void 0
  ? void 0
  : en.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Wi = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  Ui =
    (e) =>
    (...t) => ({ _$litDirective$: e, values: t });
class Hi {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, n, i) {
    (this._$Ct = t), (this._$AM = n), (this._$Ci = i);
  }
  _$AS(t, n) {
    return this.update(t, n);
  }
  update(t, n) {
    return this.render(...n);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const G = Ui(
  class extends Hi {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== Wi.ATTRIBUTE ||
          e.name !== "class" ||
          ((t = e.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(e) {
      return (
        " " +
        Object.keys(e)
          .filter((t) => e[t])
          .join(" ") +
        " "
      );
    }
    update(e, [t]) {
      var n, i;
      if (this.it === void 0) {
        (this.it = new Set()),
          e.strings !== void 0 &&
            (this.nt = new Set(
              e.strings
                .join(" ")
                .split(/\s/)
                .filter((o) => o !== "")
            ));
        for (const o in t)
          t[o] &&
            !(!((n = this.nt) === null || n === void 0) && n.has(o)) &&
            this.it.add(o);
        return this.render(t);
      }
      const r = e.element.classList;
      this.it.forEach((o) => {
        o in t || (r.remove(o), this.it.delete(o));
      });
      for (const o in t) {
        const a = !!t[o];
        a === this.it.has(o) ||
          (!((i = this.nt) === null || i === void 0) && i.has(o)) ||
          (a ? (r.add(o), this.it.add(o)) : (r.remove(o), this.it.delete(o)));
      }
      return $t;
    }
  }
);
function Zi(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
const Qr = (e, t, n) => Math.min(Math.max(n, e), t),
  Y = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
  Be = (e) => typeof e == "number",
  Dt = (e) => Array.isArray(e) && !Be(e[0]),
  Vi = (e, t, n) => {
    const i = t - e;
    return ((((n - e) % i) + i) % i) + e;
  };
function zi(e, t) {
  return Dt(e) ? e[Vi(0, e.length, t)] : e;
}
const Xr = (e, t, n) => -n * e + n * t + e,
  ti = () => {},
  ut = (e) => e,
  Jn = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e));
function ei(e, t) {
  const n = e[e.length - 1];
  for (let i = 1; i <= t; i++) {
    const r = Jn(0, t, i);
    e.push(Xr(n, 1, r));
  }
}
function Fi(e) {
  const t = [0];
  return ei(t, e - 1), t;
}
function Gi(e, t = Fi(e.length), n = ut) {
  const i = e.length,
    r = i - t.length;
  return (
    r > 0 && ei(t, r),
    (o) => {
      let a = 0;
      for (; a < i - 2 && !(o < t[a + 1]); a++);
      let l = Qr(0, 1, Jn(t[a], t[a + 1], o));
      return (l = zi(n, a)(l)), Xr(e[a], e[a + 1], l);
    }
  );
}
const ni = (e) => Array.isArray(e) && Be(e[0]),
  Hn = (e) => typeof e == "object" && !!e.createAnimation,
  Ht = (e) => typeof e == "function",
  Ki = (e) => typeof e == "string",
  ae = { ms: (e) => e * 1e3, s: (e) => e / 1e3 },
  ri = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  qi = 1e-7,
  Yi = 12;
function Ji(e, t, n, i, r) {
  let o,
    a,
    l = 0;
  do (a = t + (n - t) / 2), (o = ri(a, i, r) - e), o > 0 ? (n = a) : (t = a);
  while (Math.abs(o) > qi && ++l < Yi);
  return a;
}
function oe(e, t, n, i) {
  if (e === t && n === i) return ut;
  const r = (o) => Ji(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : ri(r(o), t, i));
}
const Qi =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const i = n * e,
        r = t === "end" ? Math.floor(i) : Math.ceil(i);
      return Qr(0, 1, r / e);
    },
  wr = {
    ease: oe(0.25, 0.1, 0.25, 1),
    "ease-in": oe(0.42, 0, 1, 1),
    "ease-in-out": oe(0.42, 0, 0.58, 1),
    "ease-out": oe(0, 0, 0.58, 1),
  },
  Xi = /\((.*?)\)/;
function fr(e) {
  if (Ht(e)) return e;
  if (ni(e)) return oe(...e);
  if (wr[e]) return wr[e];
  if (e.startsWith("steps")) {
    const t = Xi.exec(e);
    if (t) {
      const n = t[1].split(",");
      return Qi(parseFloat(n[0]), n[1].trim());
    }
  }
  return ut;
}
class ii {
  constructor(
    t,
    n = [0, 1],
    {
      easing: i,
      duration: r = Y.duration,
      delay: o = Y.delay,
      endDelay: a = Y.endDelay,
      repeat: l = Y.repeat,
      offset: s,
      direction: c = "normal",
    } = {}
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.easing = ut),
      (this.duration = 0),
      (this.totalDuration = 0),
      (this.repeat = 0),
      (this.playState = "idle"),
      (this.finished = new Promise((u, h) => {
        (this.resolve = u), (this.reject = h);
      })),
      (i = i || Y.easing),
      Hn(i))
    ) {
      const u = i.createAnimation(n);
      (i = u.easing), (n = u.keyframes || n), (r = u.duration || r);
    }
    (this.repeat = l),
      (this.easing = Dt(i) ? ut : fr(i)),
      this.updateDuration(r);
    const m = Gi(n, s, Dt(i) ? i.map(fr) : ut);
    (this.tick = (u) => {
      var h;
      o = o;
      let p = 0;
      this.pauseTime !== void 0
        ? (p = this.pauseTime)
        : (p = (u - this.startTime) * this.rate),
        (this.t = p),
        (p /= 1e3),
        (p = Math.max(p - o, 0)),
        this.playState === "finished" &&
          this.pauseTime === void 0 &&
          (p = this.totalDuration);
      const I = p / this.duration;
      let y = Math.floor(I),
        k = I % 1;
      !k && I >= 1 && (k = 1), k === 1 && y--;
      const x = y % 2;
      (c === "reverse" ||
        (c === "alternate" && x) ||
        (c === "alternate-reverse" && !x)) &&
        (k = 1 - k);
      const f = p >= this.totalDuration ? 1 : Math.min(k, 1),
        v = m(this.easing(f));
      t(v),
        this.pauseTime === void 0 &&
        (this.playState === "finished" || p >= this.totalDuration + a)
          ? ((this.playState = "finished"),
            (h = this.resolve) === null || h === void 0 || h.call(this, v))
          : this.playState !== "idle" &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
    }),
      this.play();
  }
  play() {
    const t = performance.now();
    (this.playState = "running"),
      this.pauseTime !== void 0
        ? (this.startTime = t - this.pauseTime)
        : this.startTime || (this.startTime = t),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      (this.frameRequestId = requestAnimationFrame(this.tick));
  }
  pause() {
    (this.playState = "paused"), (this.pauseTime = this.t);
  }
  finish() {
    (this.playState = "finished"), this.tick(0);
  }
  stop() {
    var t;
    (this.playState = "idle"),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (t = this.reject) === null || t === void 0 || t.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(t) {
    (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    this.pauseTime !== void 0 || this.rate === 0
      ? (this.pauseTime = t)
      : (this.startTime = performance.now() - t / this.rate);
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t) {
    this.rate = t;
  }
}
class to {
  setAnimation(t) {
    (this.animation = t),
      t == null || t.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const nn = new WeakMap();
function oi(e) {
  return (
    nn.has(e) || nn.set(e, { transforms: [], values: new Map() }), nn.get(e)
  );
}
function eo(e, t) {
  return e.has(t) || e.set(t, new to()), e.get(t);
}
const no = ["", "X", "Y", "Z"],
  ro = ["translate", "scale", "rotate", "skew"],
  We = { x: "translateX", y: "translateY", z: "translateZ" },
  vr = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg",
  },
  io = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px",
    },
    rotate: vr,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: ut },
    skew: vr,
  },
  de = new Map(),
  Qn = (e) => `--motion-${e}`,
  Ue = ["x", "y", "z"];
ro.forEach((e) => {
  no.forEach((t) => {
    Ue.push(e + t), de.set(Qn(e + t), io[e]);
  });
});
const oo = (e, t) => Ue.indexOf(e) - Ue.indexOf(t),
  ao = new Set(Ue),
  ai = (e) => ao.has(e),
  so = (e, t) => {
    We[t] && (t = We[t]);
    const { transforms: n } = oi(e);
    Zi(n, t), (e.style.transform = lo(n));
  },
  lo = (e) => e.sort(oo).reduce(co, "").trim(),
  co = (e, t) => `${e} ${t}(var(${Qn(t)}))`,
  Zn = (e) => e.startsWith("--"),
  br = new Set();
function ho(e) {
  if (!br.has(e)) {
    br.add(e);
    try {
      const { syntax: t, initialValue: n } = de.has(e) ? de.get(e) : {};
      CSS.registerProperty({
        name: e,
        inherits: !1,
        syntax: t,
        initialValue: n,
      });
    } catch {}
  }
}
const rn = (e, t) => document.createElement("div").animate(e, t),
  yr = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        rn({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!rn({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        rn({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    },
  },
  on = {},
  Lt = {};
for (const e in yr)
  Lt[e] = () => (on[e] === void 0 && (on[e] = yr[e]()), on[e]);
const uo = 0.015,
  mo = (e, t) => {
    let n = "";
    const i = Math.round(t / uo);
    for (let r = 0; r < i; r++) n += e(Jn(0, i - 1, r)) + ", ";
    return n.substring(0, n.length - 2);
  },
  xr = (e, t) =>
    Ht(e)
      ? Lt.linearEasing()
        ? `linear(${mo(e, t)})`
        : Y.easing
      : ni(e)
      ? po(e)
      : e,
  po = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`;
function go(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] === null && (e[n] = n ? e[n - 1] : t());
  return e;
}
const wo = (e) => (Array.isArray(e) ? e : [e]);
function Vn(e) {
  return We[e] && (e = We[e]), ai(e) ? Qn(e) : e;
}
const ge = {
  get: (e, t) => {
    t = Vn(t);
    let n = Zn(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!n && n !== 0) {
      const i = de.get(t);
      i && (n = i.initialValue);
    }
    return n;
  },
  set: (e, t, n) => {
    (t = Vn(t)), Zn(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
  },
};
function si(e, t = !0) {
  if (!(!e || e.playState === "finished"))
    try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {}
}
function fo(e, t) {
  var n;
  let i = (t == null ? void 0 : t.toDefaultUnit) || ut;
  const r = e[e.length - 1];
  if (Ki(r)) {
    const o =
      ((n = r.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0
        ? void 0
        : n[2]) || "";
    o && (i = (a) => a + o);
  }
  return i;
}
function vo() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function bo(e, t, n, i = {}, r) {
  const o = vo(),
    a = i.record !== !1 && o;
  let l,
    {
      duration: s = Y.duration,
      delay: c = Y.delay,
      endDelay: m = Y.endDelay,
      repeat: u = Y.repeat,
      easing: h = Y.easing,
      persist: p = !1,
      direction: I,
      offset: y,
      allowWebkitAcceleration: k = !1,
    } = i;
  const x = oi(e),
    f = ai(t);
  let v = Lt.waapi();
  f && so(e, t);
  const w = Vn(t),
    M = eo(x.values, w),
    N = de.get(w);
  return (
    si(M.animation, !(Hn(h) && M.generator) && i.record !== !1),
    () => {
      const B = () => {
        var j, X;
        return (X =
          (j = ge.get(e, w)) !== null && j !== void 0
            ? j
            : N == null
            ? void 0
            : N.initialValue) !== null && X !== void 0
          ? X
          : 0;
      };
      let L = go(wo(n), B);
      const Q = fo(L, N);
      if (Hn(h)) {
        const j = h.createAnimation(L, t !== "opacity", B, w, M);
        (h = j.easing), (L = j.keyframes || L), (s = j.duration || s);
      }
      if (
        (Zn(w) && (Lt.cssRegisterProperty() ? ho(w) : (v = !1)),
        f && !Lt.linearEasing() && (Ht(h) || (Dt(h) && h.some(Ht))) && (v = !1),
        v)
      ) {
        N && (L = L.map((tt) => (Be(tt) ? N.toDefaultUnit(tt) : tt))),
          L.length === 1 && (!Lt.partialKeyframes() || a) && L.unshift(B());
        const j = {
          delay: ae.ms(c),
          duration: ae.ms(s),
          endDelay: ae.ms(m),
          easing: Dt(h) ? void 0 : xr(h, s),
          direction: I,
          iterations: u + 1,
          fill: "both",
        };
        (l = e.animate(
          {
            [w]: L,
            offset: y,
            easing: Dt(h) ? h.map((tt) => xr(tt, s)) : void 0,
          },
          j
        )),
          l.finished ||
            (l.finished = new Promise((tt, et) => {
              (l.onfinish = tt), (l.oncancel = et);
            }));
        const X = L[L.length - 1];
        l.finished
          .then(() => {
            p || (ge.set(e, w, X), l.cancel());
          })
          .catch(ti),
          k || (l.playbackRate = 1.000001);
      } else if (r && f)
        (L = L.map((j) => (typeof j == "string" ? parseFloat(j) : j))),
          L.length === 1 && L.unshift(parseFloat(B())),
          (l = new r(
            (j) => {
              ge.set(e, w, Q ? Q(j) : j);
            },
            L,
            Object.assign(Object.assign({}, i), { duration: s, easing: h })
          ));
      else {
        const j = L[L.length - 1];
        ge.set(e, w, N && Be(j) ? N.toDefaultUnit(j) : j);
      }
      return (
        a &&
          o(
            e,
            t,
            L,
            { duration: s, delay: c, easing: h, repeat: u, offset: y },
            "motion-one"
          ),
        M.setAnimation(l),
        l
      );
    }
  );
}
const yo = (e, t) =>
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);
function xo(e, t) {
  var n;
  return (
    typeof e == "string"
      ? t
        ? (((n = t[e]) !== null && n !== void 0) ||
            (t[e] = document.querySelectorAll(e)),
          (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const Co = (e) => e(),
  li = (e, t, n = Y.duration) =>
    new Proxy(
      { animations: e.map(Co).filter(Boolean), duration: n, options: t },
      Eo
    ),
  $o = (e) => e.animations[0],
  Eo = {
    get: (e, t) => {
      const n = $o(e);
      switch (t) {
        case "duration":
          return e.duration;
        case "currentTime":
          return ae.s((n == null ? void 0 : n[t]) || 0);
        case "playbackRate":
        case "playState":
          return n == null ? void 0 : n[t];
        case "finished":
          return (
            e.finished ||
              (e.finished = Promise.all(e.animations.map(Ao)).catch(ti)),
            e.finished
          );
        case "stop":
          return () => {
            e.animations.forEach((i) => si(i));
          };
        case "forEachNative":
          return (i) => {
            e.animations.forEach((r) => i(r, e));
          };
        default:
          return typeof (n == null ? void 0 : n[t]) > "u"
            ? void 0
            : () => e.animations.forEach((i) => i[t]());
      }
    },
    set: (e, t, n) => {
      switch (t) {
        case "currentTime":
          n = ae.ms(n);
        case "currentTime":
        case "playbackRate":
          for (let i = 0; i < e.animations.length; i++) e.animations[i][t] = n;
          return !0;
      }
      return !1;
    },
  },
  Ao = (e) => e.finished;
function ko(e, t, n) {
  return Ht(e) ? e(t, n) : e;
}
function Io(e) {
  return function (n, i, r = {}) {
    n = xo(n);
    const o = n.length,
      a = [];
    for (let l = 0; l < o; l++) {
      const s = n[l];
      for (const c in i) {
        const m = yo(r, c);
        m.delay = ko(m.delay, l, o);
        const u = bo(s, c, i[c], m, e);
        a.push(u);
      }
    }
    return li(a, r, r.duration);
  };
}
const Oo = Io(ii);
function _o(e, t = {}) {
  return li(
    [
      () => {
        const n = new ii(e, [0, 1], t);
        return n.finished.catch(() => {}), n;
      },
    ],
    t,
    t.duration
  );
}
function Ct(e, t, n) {
  return (Ht(e) ? _o : Oo)(e, t, n);
}
var me = {},
  Po = function () {
    return (
      typeof Promise == "function" &&
      Promise.prototype &&
      Promise.prototype.then
    );
  },
  ci = {},
  K = {};
let Xn;
const Mo = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
  2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
];
K.getSymbolSize = function (t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
K.getSymbolTotalCodewords = function (t) {
  return Mo[t];
};
K.getBCHDigit = function (e) {
  let t = 0;
  for (; e !== 0; ) t++, (e >>>= 1);
  return t;
};
K.setToSJISFunction = function (t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Xn = t;
};
K.isKanjiModeEnabled = function () {
  return typeof Xn < "u";
};
K.toSJIS = function (t) {
  return Xn(t);
};
var ze = {};
(function (e) {
  (e.L = { bit: 1 }),
    (e.M = { bit: 0 }),
    (e.Q = { bit: 3 }),
    (e.H = { bit: 2 });
  function t(n) {
    if (typeof n != "string") throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  (e.isValid = function (i) {
    return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
  }),
    (e.from = function (i, r) {
      if (e.isValid(i)) return i;
      try {
        return t(i);
      } catch {
        return r;
      }
    });
})(ze);
function di() {
  (this.buffer = []), (this.length = 0);
}
di.prototype = {
  get: function (e) {
    const t = Math.floor(e / 8);
    return ((this.buffer[t] >>> (7 - (e % 8))) & 1) === 1;
  },
  put: function (e, t) {
    for (let n = 0; n < t; n++) this.putBit(((e >>> (t - n - 1)) & 1) === 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> this.length % 8),
      this.length++;
  },
};
var To = di;
function pe(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  (this.size = e),
    (this.data = new Uint8Array(e * e)),
    (this.reservedBit = new Uint8Array(e * e));
}
pe.prototype.set = function (e, t, n, i) {
  const r = e * this.size + t;
  (this.data[r] = n), i && (this.reservedBit[r] = !0);
};
pe.prototype.get = function (e, t) {
  return this.data[e * this.size + t];
};
pe.prototype.xor = function (e, t, n) {
  this.data[e * this.size + t] ^= n;
};
pe.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t];
};
var So = pe,
  hi = {};
(function (e) {
  const t = K.getSymbolSize;
  (e.getRowColCoords = function (i) {
    if (i === 1) return [];
    const r = Math.floor(i / 7) + 2,
      o = t(i),
      a = o === 145 ? 26 : Math.ceil((o - 13) / (2 * r - 2)) * 2,
      l = [o - 7];
    for (let s = 1; s < r - 1; s++) l[s] = l[s - 1] - a;
    return l.push(6), l.reverse();
  }),
    (e.getPositions = function (i) {
      const r = [],
        o = e.getRowColCoords(i),
        a = o.length;
      for (let l = 0; l < a; l++)
        for (let s = 0; s < a; s++)
          (l === 0 && s === 0) ||
            (l === 0 && s === a - 1) ||
            (l === a - 1 && s === 0) ||
            r.push([o[l], o[s]]);
      return r;
    });
})(hi);
var ui = {};
const Ro = K.getSymbolSize,
  Cr = 7;
ui.getPositions = function (t) {
  const n = Ro(t);
  return [
    [0, 0],
    [n - Cr, 0],
    [0, n - Cr],
  ];
};
var mi = {};
(function (e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
  const t = { N1: 3, N2: 3, N3: 40, N4: 10 };
  (e.isValid = function (r) {
    return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7;
  }),
    (e.from = function (r) {
      return e.isValid(r) ? parseInt(r, 10) : void 0;
    }),
    (e.getPenaltyN1 = function (r) {
      const o = r.size;
      let a = 0,
        l = 0,
        s = 0,
        c = null,
        m = null;
      for (let u = 0; u < o; u++) {
        (l = s = 0), (c = m = null);
        for (let h = 0; h < o; h++) {
          let p = r.get(u, h);
          p === c ? l++ : (l >= 5 && (a += t.N1 + (l - 5)), (c = p), (l = 1)),
            (p = r.get(h, u)),
            p === m ? s++ : (s >= 5 && (a += t.N1 + (s - 5)), (m = p), (s = 1));
        }
        l >= 5 && (a += t.N1 + (l - 5)), s >= 5 && (a += t.N1 + (s - 5));
      }
      return a;
    }),
    (e.getPenaltyN2 = function (r) {
      const o = r.size;
      let a = 0;
      for (let l = 0; l < o - 1; l++)
        for (let s = 0; s < o - 1; s++) {
          const c =
            r.get(l, s) +
            r.get(l, s + 1) +
            r.get(l + 1, s) +
            r.get(l + 1, s + 1);
          (c === 4 || c === 0) && a++;
        }
      return a * t.N2;
    }),
    (e.getPenaltyN3 = function (r) {
      const o = r.size;
      let a = 0,
        l = 0,
        s = 0;
      for (let c = 0; c < o; c++) {
        l = s = 0;
        for (let m = 0; m < o; m++)
          (l = ((l << 1) & 2047) | r.get(c, m)),
            m >= 10 && (l === 1488 || l === 93) && a++,
            (s = ((s << 1) & 2047) | r.get(m, c)),
            m >= 10 && (s === 1488 || s === 93) && a++;
      }
      return a * t.N3;
    }),
    (e.getPenaltyN4 = function (r) {
      let o = 0;
      const a = r.data.length;
      for (let s = 0; s < a; s++) o += r.data[s];
      return Math.abs(Math.ceil((o * 100) / a / 5) - 10) * t.N4;
    });
  function n(i, r, o) {
    switch (i) {
      case e.Patterns.PATTERN000:
        return (r + o) % 2 === 0;
      case e.Patterns.PATTERN001:
        return r % 2 === 0;
      case e.Patterns.PATTERN010:
        return o % 3 === 0;
      case e.Patterns.PATTERN011:
        return (r + o) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(r / 2) + Math.floor(o / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return ((r * o) % 2) + ((r * o) % 3) === 0;
      case e.Patterns.PATTERN110:
        return (((r * o) % 2) + ((r * o) % 3)) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (((r * o) % 3) + ((r + o) % 2)) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + i);
    }
  }
  (e.applyMask = function (r, o) {
    const a = o.size;
    for (let l = 0; l < a; l++)
      for (let s = 0; s < a; s++) o.isReserved(s, l) || o.xor(s, l, n(r, s, l));
  }),
    (e.getBestMask = function (r, o) {
      const a = Object.keys(e.Patterns).length;
      let l = 0,
        s = 1 / 0;
      for (let c = 0; c < a; c++) {
        o(c), e.applyMask(c, r);
        const m =
          e.getPenaltyN1(r) +
          e.getPenaltyN2(r) +
          e.getPenaltyN3(r) +
          e.getPenaltyN4(r);
        e.applyMask(c, r), m < s && ((s = m), (l = c));
      }
      return l;
    });
})(mi);
var Fe = {};
const ht = ze,
  we = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
  ],
  fe = [
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
Fe.getBlocksCount = function (t, n) {
  switch (n) {
    case ht.L:
      return we[(t - 1) * 4 + 0];
    case ht.M:
      return we[(t - 1) * 4 + 1];
    case ht.Q:
      return we[(t - 1) * 4 + 2];
    case ht.H:
      return we[(t - 1) * 4 + 3];
    default:
      return;
  }
};
Fe.getTotalCodewordsCount = function (t, n) {
  switch (n) {
    case ht.L:
      return fe[(t - 1) * 4 + 0];
    case ht.M:
      return fe[(t - 1) * 4 + 1];
    case ht.Q:
      return fe[(t - 1) * 4 + 2];
    case ht.H:
      return fe[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var pi = {},
  Ge = {};
const se = new Uint8Array(512),
  He = new Uint8Array(256);
(function () {
  let t = 1;
  for (let n = 0; n < 255; n++)
    (se[n] = t), (He[t] = n), (t <<= 1), t & 256 && (t ^= 285);
  for (let n = 255; n < 512; n++) se[n] = se[n - 255];
})();
Ge.log = function (t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return He[t];
};
Ge.exp = function (t) {
  return se[t];
};
Ge.mul = function (t, n) {
  return t === 0 || n === 0 ? 0 : se[He[t] + He[n]];
};
(function (e) {
  const t = Ge;
  (e.mul = function (i, r) {
    const o = new Uint8Array(i.length + r.length - 1);
    for (let a = 0; a < i.length; a++)
      for (let l = 0; l < r.length; l++) o[a + l] ^= t.mul(i[a], r[l]);
    return o;
  }),
    (e.mod = function (i, r) {
      let o = new Uint8Array(i);
      for (; o.length - r.length >= 0; ) {
        const a = o[0];
        for (let s = 0; s < r.length; s++) o[s] ^= t.mul(r[s], a);
        let l = 0;
        for (; l < o.length && o[l] === 0; ) l++;
        o = o.slice(l);
      }
      return o;
    }),
    (e.generateECPolynomial = function (i) {
      let r = new Uint8Array([1]);
      for (let o = 0; o < i; o++) r = e.mul(r, new Uint8Array([1, t.exp(o)]));
      return r;
    });
})(pi);
const gi = pi;
function tr(e) {
  (this.genPoly = void 0),
    (this.degree = e),
    this.degree && this.initialize(this.degree);
}
tr.prototype.initialize = function (t) {
  (this.degree = t), (this.genPoly = gi.generateECPolynomial(this.degree));
};
tr.prototype.encode = function (t) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const i = gi.mod(n, this.genPoly),
    r = this.degree - i.length;
  if (r > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(i, r), o;
  }
  return i;
};
var No = tr,
  wi = {},
  pt = {},
  er = {};
er.isValid = function (t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var rt = {};
const fi = "[0-9]+",
  Lo = "[A-Z $%*+\\-./:]+";
let he =
  "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
he = he.replace(/u/g, "\\u");
const jo =
  "(?:(?![A-Z0-9 $%*+\\-./:]|" +
  he +
  `)(?:.|[\r
]))+`;
rt.KANJI = new RegExp(he, "g");
rt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
rt.BYTE = new RegExp(jo, "g");
rt.NUMERIC = new RegExp(fi, "g");
rt.ALPHANUMERIC = new RegExp(Lo, "g");
const Do = new RegExp("^" + he + "$"),
  Bo = new RegExp("^" + fi + "$"),
  Wo = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
rt.testKanji = function (t) {
  return Do.test(t);
};
rt.testNumeric = function (t) {
  return Bo.test(t);
};
rt.testAlphanumeric = function (t) {
  return Wo.test(t);
};
(function (e) {
  const t = er,
    n = rt;
  (e.NUMERIC = { id: "Numeric", bit: 1 << 0, ccBits: [10, 12, 14] }),
    (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 1 << 1, ccBits: [9, 11, 13] }),
    (e.BYTE = { id: "Byte", bit: 1 << 2, ccBits: [8, 16, 16] }),
    (e.KANJI = { id: "Kanji", bit: 1 << 3, ccBits: [8, 10, 12] }),
    (e.MIXED = { bit: -1 }),
    (e.getCharCountIndicator = function (o, a) {
      if (!o.ccBits) throw new Error("Invalid mode: " + o);
      if (!t.isValid(a)) throw new Error("Invalid version: " + a);
      return a >= 1 && a < 10
        ? o.ccBits[0]
        : a < 27
        ? o.ccBits[1]
        : o.ccBits[2];
    }),
    (e.getBestModeForData = function (o) {
      return n.testNumeric(o)
        ? e.NUMERIC
        : n.testAlphanumeric(o)
        ? e.ALPHANUMERIC
        : n.testKanji(o)
        ? e.KANJI
        : e.BYTE;
    }),
    (e.toString = function (o) {
      if (o && o.id) return o.id;
      throw new Error("Invalid mode");
    }),
    (e.isValid = function (o) {
      return o && o.bit && o.ccBits;
    });
  function i(r) {
    if (typeof r != "string") throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + r);
    }
  }
  e.from = function (o, a) {
    if (e.isValid(o)) return o;
    try {
      return i(o);
    } catch {
      return a;
    }
  };
})(pt);
(function (e) {
  const t = K,
    n = Fe,
    i = ze,
    r = pt,
    o = er,
    a =
      (1 << 12) |
      (1 << 11) |
      (1 << 10) |
      (1 << 9) |
      (1 << 8) |
      (1 << 5) |
      (1 << 2) |
      (1 << 0),
    l = t.getBCHDigit(a);
  function s(h, p, I) {
    for (let y = 1; y <= 40; y++) if (p <= e.getCapacity(y, I, h)) return y;
  }
  function c(h, p) {
    return r.getCharCountIndicator(h, p) + 4;
  }
  function m(h, p) {
    let I = 0;
    return (
      h.forEach(function (y) {
        const k = c(y.mode, p);
        I += k + y.getBitsLength();
      }),
      I
    );
  }
  function u(h, p) {
    for (let I = 1; I <= 40; I++)
      if (m(h, I) <= e.getCapacity(I, p, r.MIXED)) return I;
  }
  (e.from = function (p, I) {
    return o.isValid(p) ? parseInt(p, 10) : I;
  }),
    (e.getCapacity = function (p, I, y) {
      if (!o.isValid(p)) throw new Error("Invalid QR Code version");
      typeof y > "u" && (y = r.BYTE);
      const k = t.getSymbolTotalCodewords(p),
        x = n.getTotalCodewordsCount(p, I),
        f = (k - x) * 8;
      if (y === r.MIXED) return f;
      const v = f - c(y, p);
      switch (y) {
        case r.NUMERIC:
          return Math.floor((v / 10) * 3);
        case r.ALPHANUMERIC:
          return Math.floor((v / 11) * 2);
        case r.KANJI:
          return Math.floor(v / 13);
        case r.BYTE:
        default:
          return Math.floor(v / 8);
      }
    }),
    (e.getBestVersionForData = function (p, I) {
      let y;
      const k = i.from(I, i.M);
      if (Array.isArray(p)) {
        if (p.length > 1) return u(p, k);
        if (p.length === 0) return 1;
        y = p[0];
      } else y = p;
      return s(y.mode, y.getLength(), k);
    }),
    (e.getEncodedBits = function (p) {
      if (!o.isValid(p) || p < 7) throw new Error("Invalid QR Code version");
      let I = p << 12;
      for (; t.getBCHDigit(I) - l >= 0; ) I ^= a << (t.getBCHDigit(I) - l);
      return (p << 12) | I;
    });
})(wi);
var vi = {};
const zn = K,
  bi =
    (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
  Uo = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
  $r = zn.getBCHDigit(bi);
vi.getEncodedBits = function (t, n) {
  const i = (t.bit << 3) | n;
  let r = i << 10;
  for (; zn.getBCHDigit(r) - $r >= 0; ) r ^= bi << (zn.getBCHDigit(r) - $r);
  return ((i << 10) | r) ^ Uo;
};
var yi = {};
const Ho = pt;
function Zt(e) {
  (this.mode = Ho.NUMERIC), (this.data = e.toString());
}
Zt.getBitsLength = function (t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
};
Zt.prototype.getLength = function () {
  return this.data.length;
};
Zt.prototype.getBitsLength = function () {
  return Zt.getBitsLength(this.data.length);
};
Zt.prototype.write = function (t) {
  let n, i, r;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    (i = this.data.substr(n, 3)), (r = parseInt(i, 10)), t.put(r, 10);
  const o = this.data.length - n;
  o > 0 &&
    ((i = this.data.substr(n)), (r = parseInt(i, 10)), t.put(r, o * 3 + 1));
};
var Zo = Zt;
const Vo = pt,
  an = [
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
function Vt(e) {
  (this.mode = Vo.ALPHANUMERIC), (this.data = e);
}
Vt.getBitsLength = function (t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
Vt.prototype.getLength = function () {
  return this.data.length;
};
Vt.prototype.getBitsLength = function () {
  return Vt.getBitsLength(this.data.length);
};
Vt.prototype.write = function (t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let i = an.indexOf(this.data[n]) * 45;
    (i += an.indexOf(this.data[n + 1])), t.put(i, 11);
  }
  this.data.length % 2 && t.put(an.indexOf(this.data[n]), 6);
};
var zo = Vt;
const Fo = Ei,
  Go = pt;
function zt(e) {
  (this.mode = Go.BYTE),
    typeof e == "string" && (e = Fo(e)),
    (this.data = new Uint8Array(e));
}
zt.getBitsLength = function (t) {
  return t * 8;
};
zt.prototype.getLength = function () {
  return this.data.length;
};
zt.prototype.getBitsLength = function () {
  return zt.getBitsLength(this.data.length);
};
zt.prototype.write = function (e) {
  for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8);
};
var Ko = zt;
const qo = pt,
  Yo = K;
function Ft(e) {
  (this.mode = qo.KANJI), (this.data = e);
}
Ft.getBitsLength = function (t) {
  return t * 13;
};
Ft.prototype.getLength = function () {
  return this.data.length;
};
Ft.prototype.getBitsLength = function () {
  return Ft.getBitsLength(this.data.length);
};
Ft.prototype.write = function (e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = Yo.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956) n -= 33088;
    else if (n >= 57408 && n <= 60351) n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " +
          this.data[t] +
          `
Make sure your charset is UTF-8`
      );
    (n = ((n >>> 8) & 255) * 192 + (n & 255)), e.put(n, 13);
  }
};
var Jo = Ft;
(function (e) {
  const t = pt,
    n = Zo,
    i = zo,
    r = Ko,
    o = Jo,
    a = rt,
    l = K,
    s = Ai;
  function c(x) {
    return unescape(encodeURIComponent(x)).length;
  }
  function m(x, f, v) {
    const w = [];
    let M;
    for (; (M = x.exec(v)) !== null; )
      w.push({ data: M[0], index: M.index, mode: f, length: M[0].length });
    return w;
  }
  function u(x) {
    const f = m(a.NUMERIC, t.NUMERIC, x),
      v = m(a.ALPHANUMERIC, t.ALPHANUMERIC, x);
    let w, M;
    return (
      l.isKanjiModeEnabled()
        ? ((w = m(a.BYTE, t.BYTE, x)), (M = m(a.KANJI, t.KANJI, x)))
        : ((w = m(a.BYTE_KANJI, t.BYTE, x)), (M = [])),
      f
        .concat(v, w, M)
        .sort(function (B, L) {
          return B.index - L.index;
        })
        .map(function (B) {
          return { data: B.data, mode: B.mode, length: B.length };
        })
    );
  }
  function h(x, f) {
    switch (f) {
      case t.NUMERIC:
        return n.getBitsLength(x);
      case t.ALPHANUMERIC:
        return i.getBitsLength(x);
      case t.KANJI:
        return o.getBitsLength(x);
      case t.BYTE:
        return r.getBitsLength(x);
    }
  }
  function p(x) {
    return x.reduce(function (f, v) {
      const w = f.length - 1 >= 0 ? f[f.length - 1] : null;
      return w && w.mode === v.mode
        ? ((f[f.length - 1].data += v.data), f)
        : (f.push(v), f);
    }, []);
  }
  function I(x) {
    const f = [];
    for (let v = 0; v < x.length; v++) {
      const w = x[v];
      switch (w.mode) {
        case t.NUMERIC:
          f.push([
            w,
            { data: w.data, mode: t.ALPHANUMERIC, length: w.length },
            { data: w.data, mode: t.BYTE, length: w.length },
          ]);
          break;
        case t.ALPHANUMERIC:
          f.push([w, { data: w.data, mode: t.BYTE, length: w.length }]);
          break;
        case t.KANJI:
          f.push([w, { data: w.data, mode: t.BYTE, length: c(w.data) }]);
          break;
        case t.BYTE:
          f.push([{ data: w.data, mode: t.BYTE, length: c(w.data) }]);
      }
    }
    return f;
  }
  function y(x, f) {
    const v = {},
      w = { start: {} };
    let M = ["start"];
    for (let N = 0; N < x.length; N++) {
      const B = x[N],
        L = [];
      for (let Q = 0; Q < B.length; Q++) {
        const j = B[Q],
          X = "" + N + Q;
        L.push(X), (v[X] = { node: j, lastCount: 0 }), (w[X] = {});
        for (let tt = 0; tt < M.length; tt++) {
          const et = M[tt];
          v[et] && v[et].node.mode === j.mode
            ? ((w[et][X] =
                h(v[et].lastCount + j.length, j.mode) -
                h(v[et].lastCount, j.mode)),
              (v[et].lastCount += j.length))
            : (v[et] && (v[et].lastCount = j.length),
              (w[et][X] =
                h(j.length, j.mode) + 4 + t.getCharCountIndicator(j.mode, f)));
        }
      }
      M = L;
    }
    for (let N = 0; N < M.length; N++) w[M[N]].end = 0;
    return { map: w, table: v };
  }
  function k(x, f) {
    let v;
    const w = t.getBestModeForData(x);
    if (((v = t.from(f, w)), v !== t.BYTE && v.bit < w.bit))
      throw new Error(
        '"' +
          x +
          '" cannot be encoded with mode ' +
          t.toString(v) +
          `.
 Suggested mode is: ` +
          t.toString(w)
      );
    switch ((v === t.KANJI && !l.isKanjiModeEnabled() && (v = t.BYTE), v)) {
      case t.NUMERIC:
        return new n(x);
      case t.ALPHANUMERIC:
        return new i(x);
      case t.KANJI:
        return new o(x);
      case t.BYTE:
        return new r(x);
    }
  }
  (e.fromArray = function (f) {
    return f.reduce(function (v, w) {
      return (
        typeof w == "string"
          ? v.push(k(w, null))
          : w.data && v.push(k(w.data, w.mode)),
        v
      );
    }, []);
  }),
    (e.fromString = function (f, v) {
      const w = u(f, l.isKanjiModeEnabled()),
        M = I(w),
        N = y(M, v),
        B = s.find_path(N.map, "start", "end"),
        L = [];
      for (let Q = 1; Q < B.length - 1; Q++) L.push(N.table[B[Q]].node);
      return e.fromArray(p(L));
    }),
    (e.rawSplit = function (f) {
      return e.fromArray(u(f, l.isKanjiModeEnabled()));
    });
})(yi);
const Ke = K,
  sn = ze,
  Qo = To,
  Xo = So,
  ta = hi,
  ea = ui,
  Fn = mi,
  Gn = Fe,
  na = No,
  Ze = wi,
  ra = vi,
  ia = pt,
  ln = yi;
function oa(e, t) {
  const n = e.size,
    i = ea.getPositions(t);
  for (let r = 0; r < i.length; r++) {
    const o = i[r][0],
      a = i[r][1];
    for (let l = -1; l <= 7; l++)
      if (!(o + l <= -1 || n <= o + l))
        for (let s = -1; s <= 7; s++)
          a + s <= -1 ||
            n <= a + s ||
            ((l >= 0 && l <= 6 && (s === 0 || s === 6)) ||
            (s >= 0 && s <= 6 && (l === 0 || l === 6)) ||
            (l >= 2 && l <= 4 && s >= 2 && s <= 4)
              ? e.set(o + l, a + s, !0, !0)
              : e.set(o + l, a + s, !1, !0));
  }
}
function aa(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const i = n % 2 === 0;
    e.set(n, 6, i, !0), e.set(6, n, i, !0);
  }
}
function sa(e, t) {
  const n = ta.getPositions(t);
  for (let i = 0; i < n.length; i++) {
    const r = n[i][0],
      o = n[i][1];
    for (let a = -2; a <= 2; a++)
      for (let l = -2; l <= 2; l++)
        a === -2 || a === 2 || l === -2 || l === 2 || (a === 0 && l === 0)
          ? e.set(r + a, o + l, !0, !0)
          : e.set(r + a, o + l, !1, !0);
  }
}
function la(e, t) {
  const n = e.size,
    i = Ze.getEncodedBits(t);
  let r, o, a;
  for (let l = 0; l < 18; l++)
    (r = Math.floor(l / 3)),
      (o = (l % 3) + n - 8 - 3),
      (a = ((i >> l) & 1) === 1),
      e.set(r, o, a, !0),
      e.set(o, r, a, !0);
}
function cn(e, t, n) {
  const i = e.size,
    r = ra.getEncodedBits(t, n);
  let o, a;
  for (o = 0; o < 15; o++)
    (a = ((r >> o) & 1) === 1),
      o < 6
        ? e.set(o, 8, a, !0)
        : o < 8
        ? e.set(o + 1, 8, a, !0)
        : e.set(i - 15 + o, 8, a, !0),
      o < 8
        ? e.set(8, i - o - 1, a, !0)
        : o < 9
        ? e.set(8, 15 - o - 1 + 1, a, !0)
        : e.set(8, 15 - o - 1, a, !0);
  e.set(i - 8, 8, 1, !0);
}
function ca(e, t) {
  const n = e.size;
  let i = -1,
    r = n - 1,
    o = 7,
    a = 0;
  for (let l = n - 1; l > 0; l -= 2)
    for (l === 6 && l--; ; ) {
      for (let s = 0; s < 2; s++)
        if (!e.isReserved(r, l - s)) {
          let c = !1;
          a < t.length && (c = ((t[a] >>> o) & 1) === 1),
            e.set(r, l - s, c),
            o--,
            o === -1 && (a++, (o = 7));
        }
      if (((r += i), r < 0 || n <= r)) {
        (r -= i), (i = -i);
        break;
      }
    }
}
function da(e, t, n) {
  const i = new Qo();
  n.forEach(function (s) {
    i.put(s.mode.bit, 4),
      i.put(s.getLength(), ia.getCharCountIndicator(s.mode, e)),
      s.write(i);
  });
  const r = Ke.getSymbolTotalCodewords(e),
    o = Gn.getTotalCodewordsCount(e, t),
    a = (r - o) * 8;
  for (
    i.getLengthInBits() + 4 <= a && i.put(0, 4);
    i.getLengthInBits() % 8 !== 0;

  )
    i.putBit(0);
  const l = (a - i.getLengthInBits()) / 8;
  for (let s = 0; s < l; s++) i.put(s % 2 ? 17 : 236, 8);
  return ha(i, e, t);
}
function ha(e, t, n) {
  const i = Ke.getSymbolTotalCodewords(t),
    r = Gn.getTotalCodewordsCount(t, n),
    o = i - r,
    a = Gn.getBlocksCount(t, n),
    l = i % a,
    s = a - l,
    c = Math.floor(i / a),
    m = Math.floor(o / a),
    u = m + 1,
    h = c - m,
    p = new na(h);
  let I = 0;
  const y = new Array(a),
    k = new Array(a);
  let x = 0;
  const f = new Uint8Array(e.buffer);
  for (let B = 0; B < a; B++) {
    const L = B < s ? m : u;
    (y[B] = f.slice(I, I + L)),
      (k[B] = p.encode(y[B])),
      (I += L),
      (x = Math.max(x, L));
  }
  const v = new Uint8Array(i);
  let w = 0,
    M,
    N;
  for (M = 0; M < x; M++)
    for (N = 0; N < a; N++) M < y[N].length && (v[w++] = y[N][M]);
  for (M = 0; M < h; M++) for (N = 0; N < a; N++) v[w++] = k[N][M];
  return v;
}
function ua(e, t, n, i) {
  let r;
  if (Array.isArray(e)) r = ln.fromArray(e);
  else if (typeof e == "string") {
    let c = t;
    if (!c) {
      const m = ln.rawSplit(e);
      c = Ze.getBestVersionForData(m, n);
    }
    r = ln.fromString(e, c || 40);
  } else throw new Error("Invalid data");
  const o = Ze.getBestVersionForData(r, n);
  if (!o)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t) t = o;
  else if (t < o)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
        o +
        `.
`
    );
  const a = da(t, n, r),
    l = Ke.getSymbolSize(t),
    s = new Xo(l);
  return (
    oa(s, t),
    aa(s),
    sa(s, t),
    cn(s, n, 0),
    t >= 7 && la(s, t),
    ca(s, a),
    isNaN(i) && (i = Fn.getBestMask(s, cn.bind(null, s, n))),
    Fn.applyMask(i, s),
    cn(s, n, i),
    {
      modules: s,
      version: t,
      errorCorrectionLevel: n,
      maskPattern: i,
      segments: r,
    }
  );
}
ci.create = function (t, n) {
  if (typeof t > "u" || t === "") throw new Error("No input text");
  let i = sn.M,
    r,
    o;
  return (
    typeof n < "u" &&
      ((i = sn.from(n.errorCorrectionLevel, sn.M)),
      (r = Ze.from(n.version)),
      (o = Fn.from(n.maskPattern)),
      n.toSJISFunc && Ke.setToSJISFunction(n.toSJISFunc)),
    ua(t, r, i, o)
  );
};
var xi = {},
  nr = {};
(function (e) {
  function t(n) {
    if ((typeof n == "number" && (n = n.toString()), typeof n != "string"))
      throw new Error("Color should be defined as hex string");
    let i = n.slice().replace("#", "").split("");
    if (i.length < 3 || i.length === 5 || i.length > 8)
      throw new Error("Invalid hex color: " + n);
    (i.length === 3 || i.length === 4) &&
      (i = Array.prototype.concat.apply(
        [],
        i.map(function (o) {
          return [o, o];
        })
      )),
      i.length === 6 && i.push("F", "F");
    const r = parseInt(i.join(""), 16);
    return {
      r: (r >> 24) & 255,
      g: (r >> 16) & 255,
      b: (r >> 8) & 255,
      a: r & 255,
      hex: "#" + i.slice(0, 6).join(""),
    };
  }
  (e.getOptions = function (i) {
    i || (i = {}), i.color || (i.color = {});
    const r =
        typeof i.margin > "u" || i.margin === null || i.margin < 0
          ? 4
          : i.margin,
      o = i.width && i.width >= 21 ? i.width : void 0,
      a = i.scale || 4;
    return {
      width: o,
      scale: o ? 4 : a,
      margin: r,
      color: {
        dark: t(i.color.dark || "#000000ff"),
        light: t(i.color.light || "#ffffffff"),
      },
      type: i.type,
      rendererOpts: i.rendererOpts || {},
    };
  }),
    (e.getScale = function (i, r) {
      return r.width && r.width >= i + r.margin * 2
        ? r.width / (i + r.margin * 2)
        : r.scale;
    }),
    (e.getImageWidth = function (i, r) {
      const o = e.getScale(i, r);
      return Math.floor((i + r.margin * 2) * o);
    }),
    (e.qrToImageData = function (i, r, o) {
      const a = r.modules.size,
        l = r.modules.data,
        s = e.getScale(a, o),
        c = Math.floor((a + o.margin * 2) * s),
        m = o.margin * s,
        u = [o.color.light, o.color.dark];
      for (let h = 0; h < c; h++)
        for (let p = 0; p < c; p++) {
          let I = (h * c + p) * 4,
            y = o.color.light;
          if (h >= m && p >= m && h < c - m && p < c - m) {
            const k = Math.floor((h - m) / s),
              x = Math.floor((p - m) / s);
            y = u[l[k * a + x] ? 1 : 0];
          }
          (i[I++] = y.r), (i[I++] = y.g), (i[I++] = y.b), (i[I] = y.a);
        }
    });
})(nr);
(function (e) {
  const t = nr;
  function n(r, o, a) {
    r.clearRect(0, 0, o.width, o.height),
      o.style || (o.style = {}),
      (o.height = a),
      (o.width = a),
      (o.style.height = a + "px"),
      (o.style.width = a + "px");
  }
  function i() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  (e.render = function (o, a, l) {
    let s = l,
      c = a;
    typeof s > "u" && (!a || !a.getContext) && ((s = a), (a = void 0)),
      a || (c = i()),
      (s = t.getOptions(s));
    const m = t.getImageWidth(o.modules.size, s),
      u = c.getContext("2d"),
      h = u.createImageData(m, m);
    return (
      t.qrToImageData(h.data, o, s), n(u, c, m), u.putImageData(h, 0, 0), c
    );
  }),
    (e.renderToDataURL = function (o, a, l) {
      let s = l;
      typeof s > "u" && (!a || !a.getContext) && ((s = a), (a = void 0)),
        s || (s = {});
      const c = e.render(o, a, s),
        m = s.type || "image/png",
        u = s.rendererOpts || {};
      return c.toDataURL(m, u.quality);
    });
})(xi);
var Ci = {};
const ma = nr;
function Er(e, t) {
  const n = e.a / 255,
    i = t + '="' + e.hex + '"';
  return n < 1 ? i + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : i;
}
function dn(e, t, n) {
  let i = e + t;
  return typeof n < "u" && (i += " " + n), i;
}
function pa(e, t, n) {
  let i = "",
    r = 0,
    o = !1,
    a = 0;
  for (let l = 0; l < e.length; l++) {
    const s = Math.floor(l % t),
      c = Math.floor(l / t);
    !s && !o && (o = !0),
      e[l]
        ? (a++,
          (l > 0 && s > 0 && e[l - 1]) ||
            ((i += o ? dn("M", s + n, 0.5 + c + n) : dn("m", r, 0)),
            (r = 0),
            (o = !1)),
          (s + 1 < t && e[l + 1]) || ((i += dn("h", a)), (a = 0)))
        : r++;
  }
  return i;
}
Ci.render = function (t, n, i) {
  const r = ma.getOptions(n),
    o = t.modules.size,
    a = t.modules.data,
    l = o + r.margin * 2,
    s = r.color.light.a
      ? "<path " +
        Er(r.color.light, "fill") +
        ' d="M0 0h' +
        l +
        "v" +
        l +
        'H0z"/>'
      : "",
    c =
      "<path " +
      Er(r.color.dark, "stroke") +
      ' d="' +
      pa(a, o, r.margin) +
      '"/>',
    m = 'viewBox="0 0 ' + l + " " + l + '"',
    h =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") +
      m +
      ' shape-rendering="crispEdges">' +
      s +
      c +
      `</svg>
`;
  return typeof i == "function" && i(null, h), h;
};
const ga = Po,
  Kn = ci,
  $i = xi,
  wa = Ci;
function rr(e, t, n, i, r) {
  const o = [].slice.call(arguments, 1),
    a = o.length,
    l = typeof o[a - 1] == "function";
  if (!l && !ga()) throw new Error("Callback required as last argument");
  if (l) {
    if (a < 2) throw new Error("Too few arguments provided");
    a === 2
      ? ((r = n), (n = t), (t = i = void 0))
      : a === 3 &&
        (t.getContext && typeof r > "u"
          ? ((r = i), (i = void 0))
          : ((r = i), (i = n), (n = t), (t = void 0)));
  } else {
    if (a < 1) throw new Error("Too few arguments provided");
    return (
      a === 1
        ? ((n = t), (t = i = void 0))
        : a === 2 && !t.getContext && ((i = n), (n = t), (t = void 0)),
      new Promise(function (s, c) {
        try {
          const m = Kn.create(n, i);
          s(e(m, t, i));
        } catch (m) {
          c(m);
        }
      })
    );
  }
  try {
    const s = Kn.create(n, i);
    r(null, e(s, t, i));
  } catch (s) {
    r(s);
  }
}
me.create = Kn.create;
me.toCanvas = rr.bind(null, $i.render);
me.toDataURL = rr.bind(null, $i.renderToDataURL);
me.toString = rr.bind(null, function (e, t, n) {
  return wa.render(e, n);
});
var fa = Object.defineProperty,
  Ar = Object.getOwnPropertySymbols,
  va = Object.prototype.hasOwnProperty,
  ba = Object.prototype.propertyIsEnumerable,
  kr = (e, t, n) =>
    t in e
      ? fa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ve = (e, t) => {
    for (var n in t || (t = {})) va.call(t, n) && kr(e, n, t[n]);
    if (Ar) for (var n of Ar(t)) ba.call(t, n) && kr(e, n, t[n]);
    return e;
  };
function ya() {
  var e;
  const t = (e = mt.state.themeMode) != null ? e : "dark",
    n = {
      light: {
        foreground: {
          1: "rgb(20,20,20)",
          2: "rgb(121,134,134)",
          3: "rgb(158,169,169)",
        },
        background: {
          1: "rgb(255,255,255)",
          2: "rgb(241,243,243)",
          3: "rgb(228,231,231)",
        },
        overlay: "rgba(0,0,0,0.1)",
      },
      dark: {
        foreground: {
          1: "rgb(228,231,231)",
          2: "rgb(148,158,158)",
          3: "rgb(110,119,119)",
        },
        background: {
          1: "rgb(20,20,20)",
          2: "rgb(39,42,42)",
          3: "rgb(59,64,64)",
        },
        overlay: "rgba(255,255,255,0.1)",
      },
    }[t];
  return {
    "--w3m-color-fg-1": n.foreground[1],
    "--w3m-color-fg-2": n.foreground[2],
    "--w3m-color-fg-3": n.foreground[3],
    "--w3m-color-bg-1": n.background[1],
    "--w3m-color-bg-2": n.background[2],
    "--w3m-color-bg-3": n.background[3],
    "--w3m-color-overlay": n.overlay,
  };
}
function Ir() {
  return {
    "--w3m-accent-color": "#3396FF",
    "--w3m-accent-fill-color": "#FFFFFF",
    "--w3m-z-index": "89",
    "--w3m-background-color": "#3396FF",
    "--w3m-background-border-radius": "8px",
    "--w3m-container-border-radius": "30px",
    "--w3m-wallet-icon-border-radius": "15px",
    "--w3m-wallet-icon-large-border-radius": "30px",
    "--w3m-wallet-icon-small-border-radius": "7px",
    "--w3m-input-border-radius": "28px",
    "--w3m-button-border-radius": "10px",
    "--w3m-notification-border-radius": "36px",
    "--w3m-secondary-button-border-radius": "28px",
    "--w3m-icon-button-border-radius": "50%",
    "--w3m-button-hover-highlight-border-radius": "10px",
    "--w3m-text-big-bold-size": "20px",
    "--w3m-text-big-bold-weight": "600",
    "--w3m-text-big-bold-line-height": "24px",
    "--w3m-text-big-bold-letter-spacing": "-0.03em",
    "--w3m-text-big-bold-text-transform": "none",
    "--w3m-text-xsmall-bold-size": "10px",
    "--w3m-text-xsmall-bold-weight": "700",
    "--w3m-text-xsmall-bold-line-height": "12px",
    "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
    "--w3m-text-xsmall-bold-text-transform": "uppercase",
    "--w3m-text-xsmall-regular-size": "12px",
    "--w3m-text-xsmall-regular-weight": "600",
    "--w3m-text-xsmall-regular-line-height": "14px",
    "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
    "--w3m-text-xsmall-regular-text-transform": "none",
    "--w3m-text-small-thin-size": "14px",
    "--w3m-text-small-thin-weight": "500",
    "--w3m-text-small-thin-line-height": "16px",
    "--w3m-text-small-thin-letter-spacing": "-0.03em",
    "--w3m-text-small-thin-text-transform": "none",
    "--w3m-text-small-regular-size": "14px",
    "--w3m-text-small-regular-weight": "600",
    "--w3m-text-small-regular-line-height": "16px",
    "--w3m-text-small-regular-letter-spacing": "-0.03em",
    "--w3m-text-small-regular-text-transform": "none",
    "--w3m-text-medium-regular-size": "16px",
    "--w3m-text-medium-regular-weight": "600",
    "--w3m-text-medium-regular-line-height": "20px",
    "--w3m-text-medium-regular-letter-spacing": "-0.03em",
    "--w3m-text-medium-regular-text-transform": "none",
    "--w3m-font-family":
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    "--w3m-success-color": "rgb(38,181,98)",
    "--w3m-error-color": "rgb(242, 90, 103)",
  };
}
function xa() {
  const { themeVariables: e } = mt.state;
  return {
    "--w3m-background-image-url":
      e != null && e["--w3m-background-image-url"]
        ? `url(${e["--w3m-background-image-url"]})`
        : "none",
  };
}
const A = {
    getPreset(e) {
      return Ir()[e];
    },
    setTheme() {
      const e = document.querySelector(":root"),
        { themeVariables: t } = mt.state;
      if (e) {
        const n = ve(ve(ve(ve({}, ya()), Ir()), t), xa());
        Object.entries(n).forEach(([i, r]) => e.style.setProperty(i, r));
      }
    },
    globalCss: _`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}`,
  },
  Ca = _`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}`;
var $a = Object.defineProperty,
  Ea = Object.getOwnPropertyDescriptor,
  be = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ea(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && $a(t, n, r), r;
  };
let Et = class extends C {
  constructor() {
    super(...arguments),
      (this.icon = void 0),
      (this.label = ""),
      (this.onClick = () => null);
  }
  render() {
    return d`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`;
  }
};
(Et.styles = [A.globalCss, Ca]),
  be([b()], Et.prototype, "icon", 2),
  be([b()], Et.prototype, "label", 2),
  be([b()], Et.prototype, "onClick", 2),
  (Et = be([E("w3m-box-button")], Et));
const Aa = _`button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost,.w3m-ghost:hover::after,.w3m-outline{background-color:transparent}.w3m-ghost:hover{opacity:.5}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}`;
var ka = Object.defineProperty,
  Ia = Object.getOwnPropertyDescriptor,
  At = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ia(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && ka(t, n, r), r;
  };
let at = class extends C {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.iconLeft = void 0),
      (this.iconRight = void 0),
      (this.onClick = () => null),
      (this.variant = "default");
  }
  render() {
    const e = {
      "w3m-icon-left": this.iconLeft !== void 0,
      "w3m-icon-right": this.iconRight !== void 0,
      "w3m-ghost": this.variant === "ghost",
      "w3m-outline": this.variant === "outline",
    };
    let t = "inverse";
    return (
      this.variant === "ghost" && (t = "secondary"),
      this.variant === "outline" && (t = "accent"),
      d`<button class="${G(e)}" ?disabled="${this.disabled}" @click="${
        this.onClick
      }">${
        this.iconLeft
      }<w3m-text variant="small-regular" color="${t}"><slot></slot></w3m-text>${
        this.iconRight
      }</button>`
    );
  }
};
(at.styles = [A.globalCss, Aa]),
  At([b()], at.prototype, "disabled", 2),
  At([b()], at.prototype, "iconLeft", 2),
  At([b()], at.prototype, "iconRight", 2),
  At([b()], at.prototype, "onClick", 2),
  At([b()], at.prototype, "variant", 2),
  (at = At([E("w3m-button")], at));
const Oa = _`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}`;
var _a = Object.defineProperty,
  Pa = Object.getOwnPropertyDescriptor,
  hn = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Pa(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && _a(t, n, r), r;
  };
let Kt = class extends C {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.variant = "primary");
  }
  render() {
    const e = { "w3m-secondary": this.variant === "secondary" };
    return d`<button ?disabled="${this.disabled}" class="${G(
      e
    )}"><slot></slot></button>`;
  }
};
(Kt.styles = [A.globalCss, Oa]),
  hn([b()], Kt.prototype, "disabled", 2),
  hn([b()], Kt.prototype, "variant", 2),
  (Kt = hn([E("w3m-button-big")], Kt));
const Ma = _`:host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var Ta = Object.defineProperty,
  Sa = Object.getOwnPropertyDescriptor,
  Ra = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Sa(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Ta(t, n, r), r;
  };
let un = class extends C {
  render() {
    return d`<div><slot></slot></div>`;
  }
};
(un.styles = [A.globalCss, Ma]), (un = Ra([E("w3m-info-footer")], un));
const $ = {
    CROSS_ICON: T`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_LOGO: T`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: T`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: T`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: T`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: T`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: T`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: T`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: T`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: T`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: T`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: T`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: T`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: T`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: T`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    HELP_ETH_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
    HELP_PAINTING_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
    HELP_CHART_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    HELP_KEY_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    HELP_USER_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
    HELP_LOCK_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
    HELP_COMPAS_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
    HELP_NOUN_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
    HELP_DAO_IMG: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    SEARCH_ICON: T`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    HELP_ICON: T`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
    WALLET_ICON: T`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
    NETWORK_PLACEHOLDER: T`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
    WALLET_PLACEHOLDER: T`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    TOKEN_PLACEHOLDER: T`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
    ACCOUNT_COPY: T`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
    ACCOUNT_DISCONNECT: T`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`,
    GLOBE_ICON: T`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
  },
  Na = _`.w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}`;
var La = Object.defineProperty,
  ja = Object.getOwnPropertyDescriptor,
  Or = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ja(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && La(t, n, r), r;
  };
let ye = class extends C {
  constructor() {
    super(),
      (this.isHelp = !1),
      (this.unsubscribeRouter = void 0),
      (this.unsubscribeRouter = S.subscribe((e) => {
        this.isHelp = e.view === "Help";
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeRouter) == null || e.call(this);
  }
  onHelp() {
    S.push("Help");
  }
  logoTemplate() {
    var e;
    const t =
      (e = mt.state.themeVariables) == null
        ? void 0
        : e["--w3m-logo-image-url"];
    return t ? d`<img src="${t}">` : $.WALLET_CONNECT_LOGO;
  }
  render() {
    const e = { "w3m-help-active": this.isHelp };
    return d`<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">${this.logoTemplate()}<div class="${G(
      e
    )}"><button @click="${this.onHelp}">${
      $.HELP_ICON
    }</button> <button @click="${J.close}">${
      $.CROSS_ICON
    }</button></div></div>`;
  }
};
(ye.styles = [A.globalCss, Na]),
  Or([R()], ye.prototype, "isHelp", 2),
  (ye = Or([E("w3m-modal-backcard")], ye));
const Da = _`main{padding:20px;padding-top:0;width:100%}`;
var Ba = Object.defineProperty,
  Wa = Object.getOwnPropertyDescriptor,
  Ua = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Wa(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Ba(t, n, r), r;
  };
let mn = class extends C {
  render() {
    return d`<main><slot></slot></main>`;
  }
};
(mn.styles = [A.globalCss, Da]), (mn = Ua([E("w3m-modal-content")], mn));
const Ha = _`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
var Za = Object.defineProperty,
  Va = Object.getOwnPropertyDescriptor,
  za = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Va(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Za(t, n, r), r;
  };
let pn = class extends C {
  render() {
    return d`<footer><slot></slot></footer>`;
  }
};
(pn.styles = [A.globalCss, Ha]), (pn = za([E("w3m-modal-footer")], pn));
const Fa = _`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}`;
var Ga = Object.defineProperty,
  Ka = Object.getOwnPropertyDescriptor,
  qt = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ka(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Ga(t, n, r), r;
  };
let wt = class extends C {
  constructor() {
    super(...arguments),
      (this.title = ""),
      (this.onAction = void 0),
      (this.actionIcon = void 0),
      (this.border = !1);
  }
  backBtnTemplate() {
    return d`<button class="w3m-back-btn" @click="${S.goBack}">${$.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return d`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const e = { "w3m-border": this.border },
      t = S.state.history.length > 1,
      n = this.title
        ? d`<w3m-text variant="big-bold">${this.title}</w3m-text>`
        : d`<slot></slot>`;
    return d`<header class="${G(e)}">${
      t ? this.backBtnTemplate() : null
    } ${n} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
(wt.styles = [A.globalCss, Fa]),
  qt([b()], wt.prototype, "title", 2),
  qt([b()], wt.prototype, "onAction", 2),
  qt([b()], wt.prototype, "actionIcon", 2),
  qt([b()], wt.prototype, "border", 2),
  (wt = qt([E("w3m-modal-header")], wt));
const qa = {
    1: "692ed6ba-e569-459a-556a-776476829e00",
    42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
  },
  Ya = {
    ETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
    WETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
    AVAX: { icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00" },
    FTM: { icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00" },
    BNB: { icon: "93564157-2e8e-4ce7-81df-b264dbee9b00" },
    MATIC: { icon: "41d04d42-da3b-4453-8506-668cc0727900" },
    OP: { icon: "ab9c186a-c52f-464b-2906-ca59d760a400" },
    xDAI: { icon: "02b53f6a-e3d4-479e-1cb4-21178987d100" },
    EVMOS: { icon: "f926ff41-260d-4028-635e-91913fc28e00" },
    METIS: { icon: "3897a66d-40b9-4833-162f-a2c90531c900" },
    IOTX: { icon: "34e68754-e536-40da-c153-6ef2e7188a00" },
  },
  q = {
    externalWallets() {
      const { isStandalone: e } = P.state;
      if (e) return [];
      let t = V.client().getConnectors();
      return (t = t.filter((n) => n.id !== "injected")), t;
    },
    manualMobileWallets() {
      var e;
      return (e = H.state.mobileWallets) != null ? e : [];
    },
    manualDesktopWallets() {
      var e;
      return (e = H.state.desktopWallets) != null ? e : [];
    },
    manualWallets() {
      var e;
      const { mobileWallets: t, desktopWallets: n } = H.state;
      return (e = O.isMobile() ? t : n) != null ? e : [];
    },
    installedInjectedWallets() {
      const { isStandalone: e } = P.state;
      if (e) return [];
      if (!V.client().isInjectedProviderInstalled()) return [];
      const { namespace: t } = V.client(),
        { injectedWallets: n } = W.state;
      let i = n.filter(
        ({ injected: r }) =>
          !!r.some(
            (o) =>
              V.client().safeCheckInjectedProvider(o.injected_id) &&
              o.namespace === t
          )
      );
      return (
        i.length > 1 &&
          (i = i.filter(
            ({ injected: r }) =>
              !!r
                .map(({ injected_id: o }) => o)
                .every((o) => o !== "isMetaMask")
          )),
        i.length ? i : [{ name: "Browser", id: "browser", image_id: void 0 }]
      );
    },
    injectedWallets() {
      const { isStandalone: e } = P.state,
        { explorerExcludedWalletIds: t, explorerRecommendedWalletIds: n } =
          H.state,
        i = O.isMobile();
      if (e || t === "ALL" || i) return [];
      const { namespace: r } = V.client(),
        { injectedWallets: o } = W.state;
      return o.filter(({ id: a, injected: l }) => {
        const s = O.isArray(t) ? t : [],
          c = O.isArray(n) ? n : [];
        return !!l.some(
          (m) => m.namespace === r && !s.includes(a) && !c.includes(a)
        );
      });
    },
    recentWallet() {
      return g.getRecentWallet();
    },
    recomendedWallets(e = !1) {
      var t;
      const n = q.installedInjectedWallets().map(({ id: a }) => a),
        i = e || (t = q.recentWallet()) == null ? void 0 : t.id,
        r = [...n, i],
        { recomendedWallets: o } = W.state;
      return o.filter((a) => !r.includes(a.id));
    },
  },
  g = {
    MOBILE_BREAKPOINT: 600,
    W3M_RECENT_WALLET_DATA: "W3M_RECENT_WALLET_DATA",
    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
    rejectStandaloneButtonComponent() {
      const { isStandalone: e } = P.state;
      if (e)
        throw new Error(
          "Web3Modal button components are not available in standalone mode."
        );
    },
    getShadowRootElement(e, t) {
      const n = e.renderRoot.querySelector(t);
      if (!n) throw new Error(`${t} not found`);
      return n;
    },
    getWalletIcon({ id: e, image_id: t }) {
      const { walletImages: n } = H.state;
      return n != null && n[e] ? n[e] : t ? W.getWalletImageUrl(t) : "";
    },
    getWalletName(e, t = !1) {
      return t ? e.split(" ")[0] : e;
    },
    getChainIcon(e) {
      var t;
      const n = qa[e],
        { projectId: i, chainImages: r } = H.state;
      return (t = r == null ? void 0 : r[e]) != null
        ? t
        : i && n
        ? W.getAssetImageUrl(n)
        : "";
    },
    getTokenIcon(e) {
      var t, n;
      const i = (t = Ya[e]) == null ? void 0 : t.icon,
        { projectId: r, tokenImages: o } = H.state;
      return (n = o == null ? void 0 : o[e]) != null
        ? n
        : r && i
        ? W.getAssetImageUrl(i)
        : "";
    },
    isMobileAnimation() {
      return window.innerWidth <= g.MOBILE_BREAKPOINT;
    },
    async preloadImage(e) {
      const t = new Promise((n, i) => {
        const r = new Image();
        (r.onload = n), (r.onerror = i), (r.src = e);
      });
      return Promise.race([t, O.wait(3e3)]);
    },
    getErrorMessage(e) {
      return e instanceof Error ? e.message : "Unknown Error";
    },
    debounce(e, t = 500) {
      let n;
      return (...i) => {
        function r() {
          e(...i);
        }
        n && clearTimeout(n), (n = setTimeout(r, t));
      };
    },
    handleMobileLinking(e) {
      const { standaloneUri: t } = P.state,
        { pairingUri: n } = Z.state,
        { mobile: i, name: r } = e,
        o = i == null ? void 0 : i.native,
        a = i == null ? void 0 : i.universal;
      g.setRecentWallet(e);
      function l(s) {
        let c = "";
        o
          ? (c = O.formatUniversalUrl(o, s, r))
          : a && (c = O.formatNativeUrl(a, s, r)),
          O.openHref(c, "_self");
      }
      l(t || n);
    },
    handleAndroidLinking() {
      const { standaloneUri: e } = P.state,
        { pairingUri: t } = Z.state;
      e
        ? (O.setWalletConnectAndroidDeepLink(e), O.openHref(e, "_self"))
        : (O.setWalletConnectAndroidDeepLink(t), O.openHref(t, "_self"));
    },
    async handleUriCopy() {
      const { standaloneUri: e } = P.state,
        { pairingUri: t } = Z.state;
      e
        ? await navigator.clipboard.writeText(e)
        : await navigator.clipboard.writeText(t),
        F.openToast("Link copied", "success");
    },
    async handleConnectorConnection(e, t) {
      try {
        const { selectedChain: n } = P.state;
        await V.client().connectConnector(e, n == null ? void 0 : n.id),
          J.close();
      } catch (n) {
        console.error(n), t ? t() : F.openToast(g.getErrorMessage(n), "error");
      }
    },
    getCustomImageUrls() {
      const { chainImages: e, walletImages: t } = H.state,
        n = Object.values(e ?? {}),
        i = Object.values(t ?? {});
      return Object.values([...n, ...i]);
    },
    truncate(e, t = 8) {
      return e.length <= t
        ? e
        : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`;
    },
    generateAvatarColors(e) {
      var t;
      const n = (t = e.match(/.{1,7}/g)) == null ? void 0 : t.splice(0, 5),
        i = [];
      n == null ||
        n.forEach((o) => {
          let a = 0;
          for (let s = 0; s < o.length; s += 1)
            (a = o.charCodeAt(s) + ((a << 5) - a)), (a = a & a);
          const l = [0, 0, 0];
          for (let s = 0; s < 3; s += 1) {
            const c = (a >> (s * 8)) & 255;
            l[s] = c;
          }
          i.push(`rgb(${l[0]}, ${l[1]}, ${l[2]})`);
        });
      const r = document.querySelector(":root");
      if (r) {
        const o = {
          "--w3m-color-av-1": i[0],
          "--w3m-color-av-2": i[1],
          "--w3m-color-av-3": i[2],
          "--w3m-color-av-4": i[3],
          "--w3m-color-av-5": i[4],
        };
        Object.entries(o).forEach(([a, l]) => r.style.setProperty(a, l));
      }
    },
    setRecentWallet(e) {
      const { walletConnectVersion: t } = P.state;
      localStorage.setItem(
        g.W3M_RECENT_WALLET_DATA,
        JSON.stringify({ [t]: e })
      );
    },
    getRecentWallet() {
      const e = localStorage.getItem(g.W3M_RECENT_WALLET_DATA);
      if (e) {
        const { walletConnectVersion: t } = P.state,
          n = JSON.parse(e);
        if (n[t]) return n[t];
      }
    },
    caseSafeIncludes(e, t) {
      return e.toUpperCase().includes(t.toUpperCase());
    },
    openWalletExplorerUrl() {
      O.openHref(g.EXPLORER_WALLET_URL, "_blank");
    },
    getCachedRouterWalletPlatforms() {
      const {
          id: e,
          desktop: t,
          mobile: n,
          injected: i,
        } = O.getWalletRouterData(),
        r = q.installedInjectedWallets(),
        o = !!(i != null && i.length),
        a = r.some((m) => m.id === e),
        l = !!(t != null && t.native),
        s = !!(t != null && t.universal),
        c = !!(n != null && n.native) || !!(n != null && n.universal);
      return {
        isInjectedInstalled: a,
        isInjected: o,
        isDesktop: l,
        isMobile: c,
        isWeb: s,
      };
    },
    goToConnectingView(e) {
      S.setData({ Wallet: e });
      const t = O.isMobile(),
        {
          isDesktop: n,
          isWeb: i,
          isMobile: r,
          isInjectedInstalled: o,
        } = g.getCachedRouterWalletPlatforms();
      t
        ? o
          ? S.push("InjectedConnecting")
          : r
          ? S.push("MobileConnecting")
          : i
          ? S.push("WebConnecting")
          : S.push("InstallWallet")
        : o
        ? S.push("InjectedConnecting")
        : n
        ? S.push("DesktopConnecting")
        : i
        ? S.push("WebConnecting")
        : r
        ? S.push("MobileQrcodeConnecting")
        : S.push("InstallWallet");
    },
  },
  Ja = _`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
var Qa = Object.defineProperty,
  Xa = Object.getOwnPropertyDescriptor,
  gn = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Xa(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Qa(t, n, r), r;
  };
let Yt = class extends C {
  constructor() {
    super(),
      (this.view = S.state.view),
      (this.prevView = S.state.view),
      (this.unsubscribe = void 0),
      (this.oldHeight = "0px"),
      (this.resizeObserver = void 0),
      (this.unsubscribe = S.subscribe((e) => {
        this.view !== e.view && this.onChangeRoute();
      }));
  }
  firstUpdated() {
    (this.resizeObserver = new ResizeObserver(([e]) => {
      const t = `${e.contentRect.height}px`;
      this.oldHeight !== "0px" &&
        Ct(this.routerEl, { height: [this.oldHeight, t] }, { duration: 0.2 }),
        (this.oldHeight = t);
    })),
      this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var e, t;
    (e = this.unsubscribe) == null || e.call(this),
      (t = this.resizeObserver) == null || t.disconnect();
  }
  get routerEl() {
    return g.getShadowRootElement(this, ".w3m-router");
  }
  get contentEl() {
    return g.getShadowRootElement(this, ".w3m-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return d`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
      case "SelectNetwork":
        return d`<w3m-select-network-view></w3m-select-network-view>`;
      case "InjectedConnecting":
        return d`<w3m-injected-connecting-view></w3m-injected-connecting-view>`;
      case "DesktopConnecting":
        return d`<w3m-desktop-connecting-view></w3m-desktop-connecting-view>`;
      case "MobileConnecting":
        return d`<w3m-mobile-connecting-view></w3m-mobile-connecting-view>`;
      case "WebConnecting":
        return d`<w3m-web-connecting-view></w3m-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return d`<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>`;
      case "GetWallet":
        return d`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "WalletExplorer":
        return d`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
      case "Qrcode":
        return d`<w3m-qrcode-view></w3m-qrcode-view>`;
      case "Help":
        return d`<w3m-help-view></w3m-help-view>`;
      case "Account":
        return d`<w3m-account-view></w3m-account-view>`;
      case "SwitchNetwork":
        return d`<w3m-switch-network-view></w3m-switch-network-view>`;
      case "InstallWallet":
        return d`<w3m-install-wallet-view></w3m-install-wallet-view>`;
      default:
        return d`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await Ct(
      this.routerEl,
      { opacity: [1, 0], scale: [1, 1.02] },
      { duration: 0.15, delay: 0.1 }
    ).finished,
      (this.view = S.state.view),
      Ct(
        this.routerEl,
        { opacity: [0, 1], scale: [0.99, 1] },
        { duration: 0.37, delay: 0.05 }
      );
  }
  render() {
    return d`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`;
  }
};
(Yt.styles = [A.globalCss, Ja]),
  gn([R()], Yt.prototype, "view", 2),
  gn([R()], Yt.prototype, "prevView", 2),
  (Yt = gn([E("w3m-modal-router")], Yt));
const ts = _`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}`;
var es = Object.defineProperty,
  ns = Object.getOwnPropertyDescriptor,
  _r = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ns(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && es(t, n, r), r;
  };
let xe = class extends C {
  constructor() {
    super(),
      (this.open = !1),
      (this.unsubscribe = void 0),
      (this.timeout = void 0),
      (this.unsubscribe = F.subscribe((e) => {
        e.open
          ? ((this.open = !0),
            (this.timeout = setTimeout(() => F.closeToast(), 2200)))
          : ((this.open = !1), clearTimeout(this.timeout));
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribe) == null || e.call(this),
      clearTimeout(this.timeout),
      F.closeToast();
  }
  render() {
    const { message: e, variant: t } = F.state,
      n = { "w3m-success": t === "success", "w3m-error": t === "error" };
    return this.open
      ? d`<div class="${G(n)}">${t === "success" ? $.CHECKMARK_ICON : null} ${
          t === "error" ? $.CROSS_ICON : null
        }<w3m-text variant="small-regular">${e}</w3m-text></div>`
      : null;
  }
};
(xe.styles = [A.globalCss, ts]),
  _r([R()], xe.prototype, "open", 2),
  (xe = _r([E("w3m-modal-toast")], xe));
const rs = _`button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--w3m-color-overlay)}`;
var is = Object.defineProperty,
  os = Object.getOwnPropertyDescriptor,
  Ce = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? os(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && is(t, n, r), r;
  };
let kt = class extends C {
  constructor() {
    super(...arguments),
      (this.onClick = () => null),
      (this.name = ""),
      (this.chainId = "");
  }
  render() {
    return d`<button @click="${this.onClick}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular">${this.name}</w3m-text></button>`;
  }
};
(kt.styles = [A.globalCss, rs]),
  Ce([b()], kt.prototype, "onClick", 2),
  Ce([b()], kt.prototype, "name", 2),
  Ce([b()], kt.prototype, "chainId", 2),
  (kt = Ce([E("w3m-network-button")], kt));
const as = _`@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}`;
var ss = Object.defineProperty,
  ls = Object.getOwnPropertyDescriptor,
  Pr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ls(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && ss(t, n, r), r;
  };
let $e = class extends C {
  constructor() {
    super(...arguments), (this.chainId = "");
  }
  render() {
    const e = g.getChainIcon(this.chainId);
    return e
      ? d`<svg width="54" height="59" viewBox="0 0 54 59" fill="none"><image href="${e}"/><image href="${e}" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>`
      : d`${$.NETWORK_PLACEHOLDER}`;
  }
};
($e.styles = [A.globalCss, as]),
  Pr([b()], $e.prototype, "chainId", 2),
  ($e = Pr([E("w3m-network-image")], $e));
const cs = 0.1,
  Mr = 2.5,
  it = 7;
function wn(e, t, n) {
  return e === t ? !1 : (e - t < 0 ? t - e : e - t) <= n + cs;
}
function ds(e, t) {
  const n = Array.prototype.slice.call(
      me.create(e, { errorCorrectionLevel: t }).modules.data,
      0
    ),
    i = Math.sqrt(n.length);
  return n.reduce(
    (r, o, a) => (a % i === 0 ? r.push([o]) : r[r.length - 1].push(o)) && r,
    []
  );
}
const hs = {
    generate(e, t, n, i) {
      const r = i === "light" ? "#141414" : "#fff",
        o = i === "light" ? "#fff" : "#141414",
        a = [],
        l = ds(e, "Q"),
        s = t / l.length,
        c = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
        ];
      c.forEach(({ x: y, y: k }) => {
        const x = (l.length - it) * s * y,
          f = (l.length - it) * s * k,
          v = 0.32;
        for (let w = 0; w < c.length; w += 1) {
          const M = s * (it - w * 2);
          a.push(
            T`<rect fill="${w % 2 === 0 ? r : o}" height="${M}" rx="${
              M * v
            }" ry="${M * v}" width="${M}" x="${x + s * w}" y="${f + s * w}">`
          );
        }
      });
      const m = Math.floor((n + 25) / s),
        u = l.length / 2 - m / 2,
        h = l.length / 2 + m / 2 - 1,
        p = [];
      l.forEach((y, k) => {
        y.forEach((x, f) => {
          if (
            l[k][f] &&
            !(
              (k < it && f < it) ||
              (k > l.length - (it + 1) && f < it) ||
              (k < it && f > l.length - (it + 1))
            ) &&
            !(k > u && k < h && f > u && f < h)
          ) {
            const v = k * s + s / 2,
              w = f * s + s / 2;
            p.push([v, w]);
          }
        });
      });
      const I = {};
      return (
        p.forEach(([y, k]) => {
          I[y] ? I[y].push(k) : (I[y] = [k]);
        }),
        Object.entries(I)
          .map(([y, k]) => {
            const x = k.filter((f) => k.every((v) => !wn(f, v, s)));
            return [Number(y), x];
          })
          .forEach(([y, k]) => {
            k.forEach((x) => {
              a.push(T`<circle cx="${y}" cy="${x}" fill="${r}" r="${s / Mr}">`);
            });
          }),
        Object.entries(I)
          .filter(([y, k]) => k.length > 1)
          .map(([y, k]) => {
            const x = k.filter((f) => k.some((v) => wn(f, v, s)));
            return [Number(y), x];
          })
          .map(([y, k]) => {
            k.sort((f, v) => (f < v ? -1 : 1));
            const x = [];
            for (const f of k) {
              const v = x.find((w) => w.some((M) => wn(f, M, s)));
              v ? v.push(f) : x.push([f]);
            }
            return [y, x.map((f) => [f[0], f[f.length - 1]])];
          })
          .forEach(([y, k]) => {
            k.forEach(([x, f]) => {
              a.push(
                T`<line x1="${y}" x2="${y}" y1="${x}" y2="${f}" stroke="${r}" stroke-width="${
                  s / (Mr / 2)
                }" stroke-linecap="round">`
              );
            });
          }),
        a
      );
    },
  },
  us = _`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
var ms = Object.defineProperty,
  ps = Object.getOwnPropertyDescriptor,
  It = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ps(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && ms(t, n, r), r;
  };
let st = class extends C {
  constructor() {
    super(...arguments),
      (this.uri = ""),
      (this.size = 0),
      (this.imageId = void 0),
      (this.walletId = void 0),
      (this.imageUrl = void 0);
  }
  svgTemplate() {
    var e;
    const t = (e = mt.state.themeMode) != null ? e : "light";
    return T`<svg height="${this.size}" width="${this.size}">${hs.generate(
      this.uri,
      this.size,
      this.size / 4,
      t
    )}</svg>`;
  }
  render() {
    return d`<div>${
      this.walletId || this.imageUrl
        ? d`<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}" imageUrl="${this.imageUrl}"></w3m-wallet-image>`
        : $.WALLET_CONNECT_ICON_COLORED
    } ${this.svgTemplate()}<w3m-theme-context></w3m-theme-context></div>`;
  }
};
(st.styles = [A.globalCss, us]),
  It([b()], st.prototype, "uri", 2),
  It([b({ type: Number })], st.prototype, "size", 2),
  It([b()], st.prototype, "imageId", 2),
  It([b()], st.prototype, "walletId", 2),
  It([b()], st.prototype, "imageUrl", 2),
  (st = It([E("w3m-qrcode")], st));
const gs = _`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin:2px 4px 0 0}div{top:0;left:calc(50% - 12px);transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:calc(100% - 2px);width:fit-content;position:relative}input:focus-within+div,input:not(:placeholder-shown)+div{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+div w3m-text,input:not(:placeholder-shown)+div w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}`;
var ws = Object.defineProperty,
  fs = Object.getOwnPropertyDescriptor,
  Tr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? fs(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && ws(t, n, r), r;
  };
let Ee = class extends C {
  constructor() {
    super(...arguments), (this.onChange = () => null);
  }
  render() {
    const e = "Search wallets";
    return d`<input type="text" @input="${this.onChange}" placeholder="${e}"><div>${$.SEARCH_ICON}<w3m-text color="secondary" variant="small-thin">${e}</w3m-text></div>`;
  }
};
(Ee.styles = [A.globalCss, gs]),
  Tr([b()], Ee.prototype, "onChange", 2),
  (Ee = Tr([E("w3m-search-input")], Ee));
const vs = _`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-accent-color)}`;
var bs = Object.defineProperty,
  ys = Object.getOwnPropertyDescriptor,
  xs = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ys(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && bs(t, n, r), r;
  };
let fn = class extends C {
  render() {
    return d`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
(fn.styles = [A.globalCss, vs]), (fn = xs([E("w3m-spinner")], fn));
const Cs = _`span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}`;
var $s = Object.defineProperty,
  Es = Object.getOwnPropertyDescriptor,
  vn = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Es(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && $s(t, n, r), r;
  };
let Jt = class extends C {
  constructor() {
    super(...arguments),
      (this.variant = "medium-regular"),
      (this.color = "primary");
  }
  render() {
    const e = {
      "w3m-big-bold": this.variant === "big-bold",
      "w3m-medium-regular": this.variant === "medium-regular",
      "w3m-small-regular": this.variant === "small-regular",
      "w3m-small-thin": this.variant === "small-thin",
      "w3m-xsmall-regular": this.variant === "xsmall-regular",
      "w3m-xsmall-bold": this.variant === "xsmall-bold",
      "w3m-color-primary": this.color === "primary",
      "w3m-color-secondary": this.color === "secondary",
      "w3m-color-tertiary": this.color === "tertiary",
      "w3m-color-inverse": this.color === "inverse",
      "w3m-color-accnt": this.color === "accent",
      "w3m-color-error": this.color === "error",
    };
    return d`<span><slot class="${G(e)}"></slot></span>`;
  }
};
(Jt.styles = [A.globalCss, Cs]),
  vn([b()], Jt.prototype, "variant", 2),
  vn([b()], Jt.prototype, "color", 2),
  (Jt = vn([E("w3m-text")], Jt));
const As = _`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var ks = Object.defineProperty,
  Is = Object.getOwnPropertyDescriptor,
  Sr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Is(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && ks(t, n, r), r;
  };
let Ae = class extends C {
  constructor() {
    super(...arguments), (this.symbol = void 0);
  }
  render() {
    var e;
    const t = g.getTokenIcon((e = this.symbol) != null ? e : "");
    return t
      ? d`<div><img src="${t}" alt="${this.id}"></div>`
      : $.TOKEN_PLACEHOLDER;
  }
};
(Ae.styles = [A.globalCss, As]),
  Sr([b()], Ae.prototype, "symbol", 2),
  (Ae = Sr([E("w3m-token-image")], Ae));
const Os = _`button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:hover{background-color:var(--w3m-color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
var _s = Object.defineProperty,
  Ps = Object.getOwnPropertyDescriptor,
  lt = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ps(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && _s(t, n, r), r;
  };
let nt = class extends C {
  constructor() {
    super(...arguments),
      (this.onClick = () => null),
      (this.name = ""),
      (this.walletId = ""),
      (this.label = void 0),
      (this.imageId = void 0),
      (this.installed = !1),
      (this.recent = !1);
  }
  sublabelTemplate() {
    return this.recent
      ? d`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>`
      : this.installed
      ? d`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>`
      : null;
  }
  render() {
    var e;
    return d`<button @click="${
      this.onClick
    }"><div><w3m-wallet-image walletId="${this.walletId}" imageId="${
      this.imageId
    }"></w3m-wallet-image><w3m-text variant="xsmall-regular">${
      (e = this.label) != null ? e : g.getWalletName(this.name, !0)
    }</w3m-text>${this.sublabelTemplate()}</div></button>`;
  }
};
(nt.styles = [A.globalCss, Os]),
  lt([b()], nt.prototype, "onClick", 2),
  lt([b()], nt.prototype, "name", 2),
  lt([b()], nt.prototype, "walletId", 2),
  lt([b()], nt.prototype, "label", 2),
  lt([b()], nt.prototype, "imageId", 2),
  lt([b()], nt.prototype, "installed", 2),
  lt([b()], nt.prototype, "recent", 2),
  (nt = lt([E("w3m-wallet-button")], nt));
const Ms = _`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var Ts = Object.defineProperty,
  Ss = Object.getOwnPropertyDescriptor,
  ke = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ss(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Ts(t, n, r), r;
  };
let Ot = class extends C {
  constructor() {
    super(...arguments),
      (this.walletId = ""),
      (this.imageId = void 0),
      (this.imageUrl = void 0);
  }
  render() {
    var e;
    const t =
      (e = this.imageUrl) != null && e.length
        ? this.imageUrl
        : g.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return d`${
      t.length
        ? d`<div><img src="${t}" alt="${this.id}"></div>`
        : $.WALLET_PLACEHOLDER
    }`;
  }
};
(Ot.styles = [A.globalCss, Ms]),
  ke([b()], Ot.prototype, "walletId", 2),
  ke([b()], Ot.prototype, "imageId", 2),
  ke([b()], Ot.prototype, "imageUrl", 2),
  (Ot = ke([E("w3m-wallet-image")], Ot));
var Rs = Object.defineProperty,
  Ns = Object.getOwnPropertyDescriptor,
  Ls = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ns(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Rs(t, n, r), r;
  };
let Rr = class extends C {
  constructor() {
    super(),
      (this.unwatchAccount = void 0),
      D.getAccount(),
      this.fetchProfile(),
      this.fetchBalance(),
      (this.unwatchAccount = V.client().watchAccount((e) => {
        const { address: t, isConnected: n } = D.state;
        e.isConnected &&
          e.address !== t &&
          (this.fetchProfile(e.address),
          this.fetchBalance(e.address),
          D.setAddress(e.address)),
          e.isConnected || D.resetAccount(),
          n !== e.isConnected && J.close(),
          D.setIsConnected(e.isConnected);
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unwatchAccount) == null || e.call(this);
  }
  async fetchProfile(e) {
    var t;
    const n = (t = P.state.chains) == null ? void 0 : t.find((i) => i.id === 1);
    if (H.state.enableAccountView && n)
      try {
        await D.fetchProfile(g.preloadImage, e);
      } catch (i) {
        console.error(i), F.openToast(g.getErrorMessage(i), "error");
      }
  }
  async fetchBalance(e) {
    if (H.state.enableAccountView)
      try {
        await D.fetchBalance(e);
      } catch (t) {
        console.error(t), F.openToast(g.getErrorMessage(t), "error");
      }
  }
};
Rr = Ls([E("w3m-account-context")], Rr);
var js = Object.defineProperty,
  Ds = Object.getOwnPropertyDescriptor,
  Nr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ds(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && js(t, n, r), r;
  };
let bn = class extends C {
  constructor() {
    super(), (this.preload = !0), this.preloadData();
  }
  async loadImages(e) {
    try {
      e != null &&
        e.length &&
        (await Promise.all(e.map(async (t) => g.preloadImage(t))));
    } catch {
      console.info("Unsuccessful attempt at preloading some images", e);
    }
  }
  async preloadListings() {
    var e;
    if (H.state.enableExplorer) {
      const { chains: t } = P.state;
      await Promise.all([W.getRecomendedWallets(), W.getInjectedWallets()]),
        P.setIsDataLoaded(!0);
      const { recomendedWallets: n } = W.state,
        i = q.installedInjectedWallets(),
        r =
          (e = t == null ? void 0 : t.map((l) => g.getChainIcon(l.id))) != null
            ? e
            : [],
        o = n.map((l) => g.getWalletIcon(l)),
        a = i.map((l) => g.getWalletIcon(l));
      await this.loadImages([...r, ...o, ...a]);
    } else P.setIsDataLoaded(!0);
  }
  async preloadCustomImages() {
    const e = g.getCustomImageUrls();
    await this.loadImages(e);
  }
  async preloadData() {
    try {
      this.preload &&
        ((this.preload = !1),
        await Promise.all([
          this.preloadListings(),
          this.preloadCustomImages(),
        ]));
    } catch (e) {
      console.error(e), F.openToast("Failed preloading", "error");
    }
  }
};
Nr([R()], bn.prototype, "preload", 2),
  (bn = Nr([E("w3m-explorer-context")], bn));
var Bs = Object.defineProperty,
  Ws = Object.getOwnPropertyDescriptor,
  Lr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ws(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Bs(t, n, r), r;
  };
let yn = class extends C {
  constructor() {
    super(), (this.activeChainId = void 0), (this.unwatchNetwork = void 0);
    const e = P.getSelectedChain();
    (this.activeChainId = e == null ? void 0 : e.id),
      (this.unwatchNetwork = V.client().watchNetwork((t) => {
        const n = t.chain;
        n &&
          this.activeChainId !== n.id &&
          (P.setSelectedChain(n),
          (this.activeChainId = n.id),
          D.resetBalance(),
          this.fetchBalance());
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unwatchNetwork) == null || e.call(this);
  }
  async fetchBalance() {
    if (H.state.enableAccountView)
      try {
        await D.fetchBalance();
      } catch (e) {
        console.error(e), F.openToast(g.getErrorMessage(e), "error");
      }
  }
};
Lr([R()], yn.prototype, "activeChainId", 2),
  (yn = Lr([E("w3m-network-context")], yn));
var Us = Object.defineProperty,
  Hs = Object.getOwnPropertyDescriptor,
  Zs = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Hs(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Us(t, n, r), r;
  };
let jr = class extends C {
  constructor() {
    super(),
      (this.unsubscribeTheme = void 0),
      A.setTheme(),
      (this.unsubscribeTheme = mt.subscribe(A.setTheme)),
      this.preloadThemeImages();
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeTheme) == null || e.call(this);
  }
  async preloadThemeImages() {
    try {
      const { themeVariables: e } = mt.state,
        t = [
          e == null ? void 0 : e["--w3m-background-image-url"],
          e == null ? void 0 : e["--w3m-logo-image-url"],
        ].filter(Boolean);
      t.length && (await Promise.all(t.map(async (n) => g.preloadImage(n))));
    } catch {
      console.info("Unsuccessful attempt at preloading some images");
    }
  }
};
jr = Zs([E("w3m-theme-context")], jr);
var Vs = Object.defineProperty,
  zs = Object.getOwnPropertyDescriptor,
  Fs = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? zs(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Vs(t, n, r), r;
  };
const Gs = 18e4,
  Ks = 1e3;
var Dr;
let Br = class extends C {
  constructor() {
    super(),
      (this.unwatchOptions = void 0),
      (this.unwatchAccount = void 0),
      (this.timeout = void 0),
      (this.isGenerated = !1),
      (this.selectedChainId =
        (Dr = P.state.selectedChain) == null ? void 0 : Dr.id),
      (this.isAccountConnected = D.state.isConnected),
      (this.lastRetry = Date.now()),
      (this.unwatchOptions = P.subscribe((e) => {
        var t, n;
        ((t = e.selectedChain) == null ? void 0 : t.id) !==
          this.selectedChainId &&
          ((this.selectedChainId =
            (n = e.selectedChain) == null ? void 0 : n.id),
          this.connectAndWait());
      })),
      (this.unwatchAccount = D.subscribe((e) => {
        (this.isAccountConnected !== e.isConnected || !this.isGenerated) &&
          ((this.isAccountConnected = e.isConnected),
          setTimeout(this.connectAndWait.bind(this), 0));
      })),
      document.addEventListener(
        "visibilitychange",
        this.onVisibilityChange.bind(this)
      );
  }
  disconnectedCallback() {
    var e, t;
    (e = this.unwatchOptions) == null || e.call(this),
      (t = this.unwatchAccount) == null || t.call(this),
      document.removeEventListener("visibilitychange", this.onVisibilityChange);
  }
  async connectAndWait() {
    if ((clearTimeout(this.timeout), !this.isAccountConnected)) {
      (this.isGenerated = !0),
        (this.timeout = setTimeout(this.connectAndWait.bind(this), Gs));
      try {
        const { standaloneUri: e, selectedChain: t } = P.state;
        e
          ? Z.setPairingUri(e)
          : await V.client().connectWalletConnect(
              (n) => Z.setPairingUri(n),
              t == null ? void 0 : t.id
            );
      } catch (e) {
        console.error(e),
          Z.setPairingError(!0),
          F.openToast("Connection request declined", "error"),
          Date.now() - this.lastRetry >= Ks &&
            ((this.lastRetry = Date.now()), this.connectAndWait());
      }
    }
  }
  async onVisibilityChange() {
    !document.hidden &&
      O.isMobile() &&
      (await V.client().pingWalletConnect(), this.connectAndWait());
  }
};
Br = Fs([E("w3m-wc-connection-context")], Br);
const qs = _`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
var Ys = Object.defineProperty,
  Js = Object.getOwnPropertyDescriptor,
  xn = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Js(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Ys(t, n, r), r;
  };
let Qt = class extends C {
  constructor() {
    super(),
      (this.balance = "hide"),
      (this.avatar = "show"),
      g.rejectStandaloneButtonComponent();
  }
  onOpen() {
    const { isStandalone: e } = P.state;
    e || J.open({ route: "Account" });
  }
  accountTemplate() {
    const e = this.avatar === "show";
    return d`${
      e ? d`<w3m-avatar></w3m-avatar>` : null
    }<w3m-address-text></w3m-address-text>`;
  }
  render() {
    const e = this.balance === "show",
      t = { "w3m-no-avatar": this.avatar === "hide" };
    return e
      ? d`<div><w3m-balance></w3m-balance><button @click="${
          this.onOpen
        }" class="${G(t)}">${this.accountTemplate()}</button></div>`
      : d`<w3m-button-big @click="${
          this.onOpen
        }">${this.accountTemplate()}</w3m-button-big>`;
  }
};
(Qt.styles = [A.globalCss, qs]),
  xn([b()], Qt.prototype, "balance", 2),
  xn([b()], Qt.prototype, "avatar", 2),
  (Qt = xn([E("w3m-account-button")], Qt));
const Qs = _`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
var Xs = Object.defineProperty,
  tl = Object.getOwnPropertyDescriptor,
  Cn = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? tl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Xs(t, n, r), r;
  };
let Xt = class extends C {
  constructor() {
    super(),
      (this.chainId = 0),
      (this.label = ""),
      (this.unsubscribeNetwork = void 0);
    const { selectedChain: e } = P.state;
    (this.chainId = e == null ? void 0 : e.id),
      (this.label = e == null ? void 0 : e.name),
      (this.unsubscribeNetwork = P.subscribe(({ selectedChain: t }) => {
        (this.chainId = t == null ? void 0 : t.id),
          (this.label = t == null ? void 0 : t.name);
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeNetwork) == null || e.call(this);
  }
  onClick() {
    S.push("SelectNetwork");
  }
  render() {
    const { chains: e, selectedChain: t } = P.state,
      n = e == null ? void 0 : e.map((o) => o.id),
      i = t && (n == null ? void 0 : n.includes(t.id)),
      r = e && e.length <= 1 && i;
    return d`<button @click="${this.onClick}" ?disabled="${r}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`;
  }
};
(Xt.styles = [A.globalCss, Qs]),
  Cn([R()], Xt.prototype, "chainId", 2),
  Cn([R()], Xt.prototype, "label", 2),
  (Xt = Cn([E("w3m-account-network-button")], Xt));
const el = _`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
var nl = Object.defineProperty,
  rl = Object.getOwnPropertyDescriptor,
  te = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? rl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && nl(t, n, r), r;
  };
let ft = class extends C {
  constructor() {
    super(),
      (this.address = void 0),
      (this.name = void 0),
      (this.loading = !0),
      (this.variant = "button"),
      (this.unsubscribeAccount = void 0),
      (this.address = D.state.address),
      (this.name = D.state.profileName),
      (this.loading = !!D.state.profileLoading),
      (this.unsubscribeAccount = D.subscribe(
        ({ address: e, profileName: t, profileLoading: n }) => {
          (this.address = e), (this.name = t), (this.loading = !!n);
        }
      ));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeAccount) == null || e.call(this);
  }
  render() {
    var e;
    const t = this.variant === "button",
      n = { "w3m-loading": this.loading };
    return d`<w3m-text class="${G(n)}" variant="${
      t ? "medium-regular" : "big-bold"
    }" color="${t ? "inverse" : "primary"}">${
      this.name ? this.name : g.truncate((e = this.address) != null ? e : "")
    }</w3m-text>`;
  }
};
(ft.styles = [A.globalCss, el]),
  te([R()], ft.prototype, "address", 2),
  te([R()], ft.prototype, "name", 2),
  te([R()], ft.prototype, "loading", 2),
  te([b()], ft.prototype, "variant", 2),
  (ft = te([E("w3m-address-text")], ft));
const z = {
    onConnecting(e) {
      g.goToConnectingView(e);
    },
    onExternal(e) {
      g.handleConnectorConnection(e);
    },
    manualWalletsTemplate() {
      return q
        .manualWallets()
        .map(
          (e) =>
            d`<w3m-wallet-button walletId="${e.id}" name="${
              e.name
            }" .onClick="${() => this.onConnecting(e)}"></w3m-wallet-button>`
        );
    },
    recomendedWalletsTemplate(e = !1) {
      return q
        .recomendedWallets(e)
        .map(
          (t) =>
            d`<w3m-wallet-button walletId="${t.id}" imageId="${
              t.image_id
            }" name="${t.name}" .onClick="${() =>
              this.onConnecting(t)}"></w3m-wallet-button>`
        );
    },
    externalWalletsTemplate() {
      return q
        .externalWallets()
        .map(
          (e) =>
            d`<w3m-wallet-button name="${e.name}" walletId="${
              e.id
            }" .onClick="${() => this.onExternal(e.id)}"></w3m-wallet-button>`
        );
    },
    recentWalletTemplate() {
      const e = q.recentWallet();
      if (e)
        return d`<w3m-wallet-button name="${e.name}" walletId="${
          e.id
        }" imageId="${e.image_id}" .recent="${!0}" .onClick="${() =>
          this.onConnecting(e)}"></w3m-wallet-button>`;
    },
    installedInjectedWalletsTemplate() {
      return q
        .installedInjectedWallets()
        .map(
          (e) =>
            d`<w3m-wallet-button .installed="${!0}" name="${
              e.name
            }" walletId="${e.id}" imageId="${e.image_id}" .onClick="${() =>
              this.onConnecting(e)}"></w3m-wallet-button>`
        );
    },
    injectedWalletsTemplate() {
      return q
        .injectedWallets()
        .map(
          (e) =>
            d`<w3m-wallet-button name="${e.name}" walletId="${e.id}" imageId="${
              e.image_id
            }" .onClick="${() => this.onConnecting(e)}"></w3m-wallet-button>`
        );
    },
  },
  il = _`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.w3m-track svg{margin:0 5px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var ol = Object.defineProperty,
  al = Object.getOwnPropertyDescriptor,
  sl = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? al(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && ol(t, n, r), r;
  };
let $n = class extends C {
  onGoToQrcode() {
    S.push("Qrcode");
  }
  onGetWallet() {
    S.push("GetWallet");
  }
  render() {
    const { recomendedWallets: e } = W.state,
      t = [...e, ...e],
      n = z.externalWalletsTemplate(),
      i = z.installedInjectedWalletsTemplate(),
      r = [...i, ...n].length > 0,
      o = O.RECOMMENDED_WALLET_AMOUNT * 2;
    return d`<w3m-modal-header title="Connect your wallet" .onAction="${
      this.onGoToQrcode
    }" .actionIcon="${
      $.QRCODE_ICON
    }"></w3m-modal-header><w3m-modal-content><div class="w3m-title">${
      $.MOBILE_ICON
    }<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">${[
      ...Array(o),
    ].map((a, l) => {
      const s = t[l % t.length];
      return s
        ? d`<w3m-wallet-image walletId="${s.id}" imageId="${s.image_id}"></w3m-wallet-image>`
        : $.WALLET_PLACEHOLDER;
    })}</div><w3m-button-big @click="${
      g.handleAndroidLinking
    }"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>${
      r
        ? d`<w3m-modal-footer><div class="w3m-title">${$.WALLET_ICON}<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">${i} ${n}</div></w3m-modal-footer>`
        : null
    }<w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Choose WalletConnect to see supported apps on your device${
      r ? ", or select from other options" : ""
    }`}</w3m-text><w3m-button variant="outline" .iconRight="${
      $.ARROW_UP_RIGHT_ICON
    }" .onClick="${() =>
      this.onGetWallet()}">I don't have a wallet</w3m-button></w3m-info-footer>`;
  }
};
($n.styles = [A.globalCss, il]),
  ($n = sl([E("w3m-android-wallet-selection")], $n));
const ll = _`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
var cl = Object.defineProperty,
  dl = Object.getOwnPropertyDescriptor,
  ee = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? dl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && cl(t, n, r), r;
  };
let vt = class extends C {
  constructor() {
    super(),
      (this.address = void 0),
      (this.avatar = void 0),
      (this.loading = !0),
      (this.size = "small"),
      (this.unsubscribeAccount = void 0),
      (this.address = D.state.address),
      (this.avatar = D.state.profileAvatar),
      (this.loading = !!D.state.profileLoading),
      (this.unsubscribeAccount = D.subscribe(
        ({ address: e, profileAvatar: t, profileLoading: n }) => {
          (this.address = e), (this.avatar = t), (this.loading = !!n);
        }
      ));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeAccount) == null || e.call(this);
  }
  render() {
    const e = {
      "w3m-placeholder": !0,
      "w3m-small": this.size === "small",
      "w3m-medium": this.size === "medium",
    };
    return this.avatar
      ? d`<img class="${G(e)}" src="${this.avatar}">`
      : this.address
      ? (g.generateAvatarColors(this.address),
        d`<div class="${G(e)}">${
          this.loading ? d`<div class="w3m-loader"></div>` : null
        }</div>`)
      : null;
  }
};
(vt.styles = [A.globalCss, ll]),
  ee([R()], vt.prototype, "address", 2),
  ee([R()], vt.prototype, "avatar", 2),
  ee([R()], vt.prototype, "loading", 2),
  ee([b()], vt.prototype, "size", 2),
  (vt = ee([E("w3m-avatar")], vt));
const hl = _`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
var ul = Object.defineProperty,
  ml = Object.getOwnPropertyDescriptor,
  En = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ml(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && ul(t, n, r), r;
  };
let ne = class extends C {
  constructor() {
    var e, t;
    super(),
      (this.symbol = void 0),
      (this.amount = void 0),
      (this.unsubscribeAccount = void 0),
      (this.symbol = (e = D.state.balance) == null ? void 0 : e.symbol),
      (this.amount = (t = D.state.balance) == null ? void 0 : t.amount),
      (this.unsubscribeAccount = D.subscribe(({ balance: n }) => {
        (this.symbol = n == null ? void 0 : n.symbol),
          (this.amount = n == null ? void 0 : n.amount);
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeAccount) == null || e.call(this);
  }
  render() {
    let e = "_._";
    return (
      this.amount === "0.0"
        ? (e = 0)
        : typeof this.amount == "string" && this.amount.length > 6
        ? (e = parseFloat(this.amount).toFixed(3))
        : typeof this.amount == "string" && (e = parseFloat(this.amount)),
      d`<div><w3m-token-image symbol="${this.symbol}"></w3m-token-image><w3m-text variant="medium-regular" color="primary">${e} ${this.symbol}</w3m-text></div>`
    );
  }
};
(ne.styles = [A.globalCss, hl]),
  En([R()], ne.prototype, "symbol", 2),
  En([R()], ne.prototype, "amount", 2),
  (ne = En([E("w3m-balance")], ne));
const pl = _`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
var gl = Object.defineProperty,
  wl = Object.getOwnPropertyDescriptor,
  Ie = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? wl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && gl(t, n, r), r;
  };
let _t = class extends C {
  constructor() {
    super(),
      (this.loading = !1),
      (this.label = "Connect Wallet"),
      (this.icon = "show"),
      (this.modalUnsub = void 0),
      g.rejectStandaloneButtonComponent(),
      (this.modalUnsub = J.subscribe((e) => {
        e.open && (this.loading = !0), e.open || (this.loading = !1);
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.modalUnsub) == null || e.call(this);
  }
  iconTemplate() {
    return this.icon === "show" ? $.WALLET_CONNECT_ICON : null;
  }
  onClick() {
    D.state.isConnected ? this.onDisconnect() : this.onConnect();
  }
  async onConnect() {
    (this.loading = !0), await J.open(), J.state.open || (this.loading = !1);
  }
  async onDisconnect() {
    await V.client().disconnect();
  }
  render() {
    return d`<w3m-button-big .disabled="${this.loading}" @click="${
      this.onClick
    }">${
      this.loading
        ? d`<w3m-spinner></w3m-spinner><w3m-text variant="medium-regular" color="accent">Connecting...</w3m-text>`
        : d`${this.iconTemplate()}<w3m-text variant="medium-regular" color="inverse">${
            this.label
          }</w3m-text>`
    }</w3m-button-big>`;
  }
};
(_t.styles = [A.globalCss, pl]),
  Ie([R()], _t.prototype, "loading", 2),
  Ie([b()], _t.prototype, "label", 2),
  Ie([b()], _t.prototype, "icon", 2),
  (_t = Ie([E("w3m-connect-button")], _t));
const fl = _`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}`;
var vl = Object.defineProperty,
  bl = Object.getOwnPropertyDescriptor,
  Pt = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? bl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && vl(t, n, r), r;
  };
let ct = class extends C {
  constructor() {
    super(...arguments),
      (this.walletId = void 0),
      (this.imageId = void 0),
      (this.isError = !1),
      (this.isStale = !1),
      (this.label = "");
  }
  svgLoaderTemplate() {
    var e, t;
    const n =
      (t =
        (e = mt.state.themeVariables) == null
          ? void 0
          : e["--w3m-wallet-icon-large-border-radius"]) != null
        ? t
        : A.getPreset("--w3m-wallet-icon-large-border-radius");
    let i = 0;
    n.includes("%")
      ? (i = (88 / 100) * parseInt(n, 10))
      : (i = parseInt(n, 10)),
      (i *= 1.17);
    const r = 317 - i * 1.57,
      o = 425 - i * 1.8;
    return d`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="${i}"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ${r}" stroke-dashoffset="${o}"></use></svg>`;
  }
  render() {
    const e = { "w3m-error": this.isError, "w3m-stale": this.isStale };
    return d`<div class="${G(
      e
    )}">${this.svgLoaderTemplate()}<w3m-wallet-image walletId="${
      this.walletId
    }" imageId="${
      this.imageId
    }"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="${
      this.isError ? "error" : "primary"
    }">${this.isError ? "Connection declined" : this.label}</w3m-text>`;
  }
};
(ct.styles = [A.globalCss, fl]),
  Pt([b()], ct.prototype, "walletId", 2),
  Pt([b()], ct.prototype, "imageId", 2),
  Pt([b()], ct.prototype, "isError", 2),
  Pt([b()], ct.prototype, "isStale", 2),
  Pt([b()], ct.prototype, "label", 2),
  (ct = Pt([E("w3m-connector-waiting")], ct));
var yl = Object.defineProperty,
  xl = Object.getOwnPropertyDescriptor,
  Mt = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? xl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && yl(t, n, r), r;
  };
let bt = class extends C {
  constructor() {
    super(),
      (this.isConnected = !1),
      (this.label = "Connect Wallet"),
      (this.icon = "show"),
      (this.avatar = "show"),
      (this.balance = "hide"),
      (this.unsubscribeAccount = void 0),
      g.rejectStandaloneButtonComponent(),
      (this.isConnected = D.state.isConnected),
      (this.unsubscribeAccount = D.subscribe(({ isConnected: e }) => {
        this.isConnected = e;
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeAccount) == null || e.call(this);
  }
  render() {
    const { enableAccountView: e } = H.state,
      t = this.balance,
      n = this.label,
      i = this.icon,
      r = this.avatar;
    return this.isConnected && e
      ? d`<w3m-account-button balance="${t}" avatar="${r}"></w3m-account-button>`
      : d`<w3m-connect-button label="${
          this.isConnected ? "Disconnect" : n
        }" icon="${i}"></w3m-connect-button>`;
  }
};
Mt([R()], bt.prototype, "isConnected", 2),
  Mt([b()], bt.prototype, "label", 2),
  Mt([b()], bt.prototype, "icon", 2),
  Mt([b()], bt.prototype, "avatar", 2),
  Mt([b()], bt.prototype, "balance", 2),
  (bt = Mt([E("w3m-core-button")], bt));
const Cl = _`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}`;
var $l = Object.defineProperty,
  El = Object.getOwnPropertyDescriptor,
  Al = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? El(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && $l(t, n, r), r;
  };
let An = class extends C {
  render() {
    const { isStandalone: e } = P.state,
      { explorerExcludedWalletIds: t, enableExplorer: n } = H.state,
      i = t !== "ALL" && n,
      r = z.manualWalletsTemplate(),
      o = z.recomendedWalletsTemplate(),
      a = z.externalWalletsTemplate(),
      l = z.recentWalletTemplate(),
      s = z.installedInjectedWalletsTemplate();
    let c = [l, ...r, ...o];
    e || (c = [...s, l, ...a, ...r, ...o]), (c = c.filter(Boolean));
    const m = c.length > 4 || i;
    let u = [];
    m ? (u = c.slice(0, 3)) : (u = c);
    const h = !!u.length;
    return d`<w3m-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
      g.handleUriCopy
    }" .actionIcon="${
      $.COPY_ICON
    }"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${
      $.MOBILE_ICON
    }<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${
      $.SCAN_ICON
    }<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${
      h
        ? d`<w3m-modal-footer><div class="w3m-desktop-title">${
            $.DESKTOP_ICON
          }<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${u} ${
            m
              ? d`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
              : null
          }</div></w3m-modal-footer>`
        : null
    }`;
  }
};
(An.styles = [A.globalCss, Cl]),
  (An = Al([E("w3m-desktop-wallet-selection")], An));
const kl = _`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:hover{opacity:.8}`;
var Il = Object.defineProperty,
  Ol = Object.getOwnPropertyDescriptor,
  _l = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ol(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Il(t, n, r), r;
  };
let kn = class extends C {
  render() {
    const { termsOfServiceUrl: e, privacyPolicyUrl: t } = H.state;
    return e ?? t
      ? d`<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
          e
            ? d`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
            : null
        } ${e && t ? "and" : null} ${
          t
            ? d`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
            : null
        }</w3m-text></div>`
      : null;
  }
};
(kn.styles = [A.globalCss, kl]), (kn = _l([E("w3m-legal-notice")], kn));
const Pl = _`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Ml = Object.defineProperty,
  Tl = Object.getOwnPropertyDescriptor,
  Sl = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Tl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Ml(t, n, r), r;
  };
let In = class extends C {
  onQrcode() {
    S.push("Qrcode");
  }
  render() {
    const { isStandalone: e } = P.state,
      { explorerExcludedWalletIds: t, enableExplorer: n } = H.state,
      i = t !== "ALL" && n,
      r = z.manualWalletsTemplate(),
      o = z.recomendedWalletsTemplate(),
      a = z.externalWalletsTemplate(),
      l = z.recentWalletTemplate(),
      s = z.installedInjectedWalletsTemplate();
    let c = [l, ...r, ...o];
    e || (c = [...s, l, ...a, ...r, ...o]), (c = c.filter(Boolean));
    const m = c.length > 8 || i;
    let u = [];
    m ? (u = c.slice(0, 7)) : (u = c);
    const h = !!u.length;
    return d`<w3m-modal-header title="Connect your wallet" .onAction="${
      this.onQrcode
    }" .actionIcon="${$.QRCODE_ICON}"></w3m-modal-header>${
      h
        ? d`<w3m-modal-content><div>${u} ${
            m
              ? d`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
              : null
          }</div></w3m-modal-content>`
        : null
    }`;
  }
};
(In.styles = [A.globalCss, Pl]),
  (In = Sl([E("w3m-mobile-wallet-selection")], In));
const Rl = _`:host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}`;
var Nl = Object.defineProperty,
  Ll = Object.getOwnPropertyDescriptor,
  On = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ll(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Nl(t, n, r), r;
  };
let re = class extends C {
  constructor() {
    super(),
      (this.open = !1),
      (this.active = !1),
      (this.unsubscribeModal = void 0),
      (this.abortController = void 0),
      (this.unsubscribeModal = J.subscribe((e) => {
        e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeModal) == null || e.call(this);
  }
  get overlayEl() {
    return g.getShadowRootElement(this, ".w3m-overlay");
  }
  get containerEl() {
    return g.getShadowRootElement(this, ".w3m-container");
  }
  toggleBodyScroll(e) {
    if (document.querySelector("body"))
      if (e) {
        const t = document.getElementById("w3m-styles");
        t == null || t.remove();
      } else
        document.head.insertAdjacentHTML(
          "beforeend",
          '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
        );
  }
  onCloseModal(e) {
    e.target === e.currentTarget && J.close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(!1),
      this.addKeyboardEvents(),
      (this.open = !0),
      setTimeout(async () => {
        const e = g.isMobileAnimation()
            ? { y: ["50vh", "0vh"] }
            : { scale: [0.98, 1] },
          t = 0.1,
          n = 0.2;
        await Promise.all([
          Ct(this.overlayEl, { opacity: [0, 1] }, { delay: t, duration: n })
            .finished,
          Ct(this.containerEl, e, { delay: t, duration: n }).finished,
        ]),
          (this.active = !0);
      }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
    const e = g.isMobileAnimation()
        ? { y: ["0vh", "50vh"] }
        : { scale: [1, 0.98] },
      t = 0.2;
    await Promise.all([
      Ct(this.overlayEl, { opacity: [1, 0] }, { duration: t }).finished,
      Ct(this.containerEl, e, { duration: t }).finished,
    ]),
      this.containerEl.removeAttribute("style"),
      (this.active = !1),
      (this.open = !1);
  }
  addKeyboardEvents() {
    (this.abortController = new AbortController()),
      window.addEventListener(
        "keydown",
        (e) => {
          var t;
          e.key === "Escape"
            ? J.close()
            : e.key === "Tab" &&
              (((t = e.target) != null && t.tagName.includes("W3M-")) ||
                this.containerEl.focus());
        },
        this.abortController
      ),
      this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var e;
    (e = this.abortController) == null || e.abort(),
      (this.abortController = void 0);
  }
  managedModalContextTemplate() {
    const { isStandalone: e } = P.state;
    return e
      ? null
      : d`<w3m-wc-connection-context></w3m-wc-connection-context><w3m-account-context></w3m-account-context><w3m-network-context></w3m-network-context>`;
  }
  render() {
    const e = { "w3m-overlay": !0, "w3m-active": this.active };
    return d`<w3m-explorer-context></w3m-explorer-context><w3m-theme-context></w3m-theme-context>${this.managedModalContextTemplate()}<div id="w3m-modal" class="${G(
      e
    )}" @click="${
      this.onCloseModal
    }" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${
      this.open
        ? d`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>`
        : null
    }</div></div>`;
  }
};
(re.styles = [A.globalCss, Rl]),
  On([R()], re.prototype, "open", 2),
  On([R()], re.prototype, "active", 2),
  (re = On([E("w3m-modal")], re));
const jl = _`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
var Dl = Object.defineProperty,
  Bl = Object.getOwnPropertyDescriptor,
  Oe = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Bl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Dl(t, n, r), r;
  };
let Tt = class extends C {
  constructor() {
    super(),
      (this.chainId = ""),
      (this.label = ""),
      (this.wrongNetwork = !1),
      (this.unsubscribeNetwork = void 0),
      g.rejectStandaloneButtonComponent();
    const { selectedChain: e } = P.state;
    this.onSetChainData(e),
      (this.unsubscribeNetwork = P.subscribe(({ selectedChain: t }) => {
        this.onSetChainData(t);
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeNetwork) == null || e.call(this);
  }
  onSetChainData(e) {
    if (e) {
      const { chains: t } = P.state,
        n = t == null ? void 0 : t.map((i) => i.id);
      (this.chainId = e.id.toString()),
        (this.wrongNetwork = !(n != null && n.includes(e.id))),
        (this.label = this.wrongNetwork ? "Wrong Network" : e.name);
    }
  }
  onClick() {
    J.open({ route: "SelectNetwork" });
  }
  render() {
    var e;
    const { chains: t } = P.state,
      n = t && t.length > 1;
    return d`<w3m-button-big @click="${
      this.onClick
    }" ?disabled="${!n}"><w3m-network-image chainId="${
      this.chainId
    }"></w3m-network-image><w3m-text variant="medium-regular" color="inverse">${
      (e = this.label) != null && e.length ? this.label : "Select Network"
    }</w3m-text></w3m-button-big>`;
  }
};
(Tt.styles = [A.globalCss, jl]),
  Oe([R()], Tt.prototype, "chainId", 2),
  Oe([R()], Tt.prototype, "label", 2),
  Oe([R()], Tt.prototype, "wrongNetwork", 2),
  (Tt = Oe([E("w3m-network-switch")], Tt));
const Wl = _`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}`;
var Ul = Object.defineProperty,
  Hl = Object.getOwnPropertyDescriptor,
  _e = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Hl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Ul(t, n, r), r;
  };
let St = class extends C {
  constructor() {
    super(...arguments),
      (this.chainId = void 0),
      (this.isError = !1),
      (this.label = "");
  }
  svgLoaderTemplate() {
    return d`<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>`;
  }
  render() {
    const e = { "w3m-error": this.isError };
    return d`<div class="${G(
      e
    )}">${this.svgLoaderTemplate()}<w3m-network-image chainId="${
      this.chainId
    }"></w3m-network-image></div><w3m-text variant="medium-regular" color="${
      this.isError ? "error" : "primary"
    }">${this.isError ? "Switch declined" : this.label}</w3m-text>`;
  }
};
(St.styles = [A.globalCss, Wl]),
  _e([b()], St.prototype, "chainId", 2),
  _e([b()], St.prototype, "isError", 2),
  _e([b()], St.prototype, "label", 2),
  (St = _e([E("w3m-network-waiting")], St));
const Zl = _`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}`;
var Vl = Object.defineProperty,
  zl = Object.getOwnPropertyDescriptor,
  yt = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? zl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Vl(t, n, r), r;
  };
let ot = class extends C {
  constructor() {
    super(...arguments),
      (this.isMobile = !1),
      (this.isInjected = !1),
      (this.isInjectedInstalled = !1),
      (this.isDesktop = !1),
      (this.isWeb = !1),
      (this.isRetry = !1);
  }
  onMobile() {
    O.isMobile()
      ? S.replace("MobileConnecting")
      : S.replace("MobileQrcodeConnecting");
  }
  onInjected() {
    this.isInjectedInstalled
      ? S.replace("InjectedConnecting")
      : S.replace("InstallWallet");
  }
  onDesktop() {
    S.replace("DesktopConnecting");
  }
  onWeb() {
    S.replace("WebConnecting");
  }
  render() {
    const { isStandalone: e } = P.state;
    return d`<div>${this.isRetry ? d`<slot></slot>` : null} ${
      this.isMobile
        ? d`<w3m-button .onClick="${this.onMobile}" .iconLeft="${$.MOBILE_ICON}" variant="outline">Mobile</w3m-button>`
        : null
    } ${
      this.isInjected && !e
        ? d`<w3m-button .onClick="${this.onInjected}" .iconLeft="${$.WALLET_ICON}" variant="outline">Browser</w3m-button>`
        : null
    } ${
      this.isDesktop
        ? d`<w3m-button .onClick="${this.onDesktop}" .iconLeft="${$.DESKTOP_ICON}" variant="outline">Desktop</w3m-button>`
        : null
    } ${
      this.isWeb
        ? d`<w3m-button .onClick="${this.onWeb}" .iconLeft="${$.GLOBE_ICON}" variant="outline">Web</w3m-button>`
        : null
    }</div>`;
  }
};
(ot.styles = [A.globalCss, Zl]),
  yt([b()], ot.prototype, "isMobile", 2),
  yt([b()], ot.prototype, "isInjected", 2),
  yt([b()], ot.prototype, "isInjectedInstalled", 2),
  yt([b()], ot.prototype, "isDesktop", 2),
  yt([b()], ot.prototype, "isWeb", 2),
  yt([b()], ot.prototype, "isRetry", 2),
  (ot = yt([E("w3m-platform-selection")], ot));
const Fl = _`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var Gl = Object.defineProperty,
  Kl = Object.getOwnPropertyDescriptor,
  ql = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Kl(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Gl(t, n, r), r;
  };
let _n = class extends C {
  onClick() {
    S.push("WalletExplorer");
  }
  render() {
    const { recomendedWallets: e } = W.state,
      t = q.manualWallets(),
      n = [...e, ...t].reverse().slice(0, 4);
    return d`<button @click="${this.onClick}"><div class="w3m-icons">${n.map(
      (i) => {
        const r = g.getWalletIcon(i);
        if (r) return d`<img src="${r}">`;
        const o = g.getWalletIcon({ id: i.id });
        return o ? d`<img src="${o}">` : $.WALLET_PLACEHOLDER;
      }
    )} ${[...Array(4 - n.length)].map(
      () => $.WALLET_PLACEHOLDER
    )}</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>`;
  }
};
(_n.styles = [A.globalCss, Fl]),
  (_n = ql([E("w3m-view-all-wallets-button")], _n));
const Yl = _`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Jl = Object.defineProperty,
  Ql = Object.getOwnPropertyDescriptor,
  Pe = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ql(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && Jl(t, n, r), r;
  };
let Rt = class extends C {
  constructor() {
    super(),
      (this.walletId = ""),
      (this.imageId = ""),
      (this.uri = ""),
      (this.unwatchWcConnection = void 0),
      setTimeout(() => {
        const { pairingUri: e } = Z.state,
          { standaloneUri: t } = P.state;
        this.uri = t ?? e;
      }, 0),
      (this.unwatchWcConnection = Z.subscribe((e) => {
        e.pairingUri && (this.uri = e.pairingUri);
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unwatchWcConnection) == null || e.call(this);
  }
  get overlayEl() {
    return g.getShadowRootElement(this, ".w3m-qr-container");
  }
  render() {
    return d`<div class="w3m-qr-container">${
      this.uri
        ? d`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${this.walletId}" imageId="${this.imageId}"></w3m-qrcode>`
        : d`<w3m-spinner></w3m-spinner>`
    }</div>`;
  }
};
(Rt.styles = [A.globalCss, Yl]),
  Pe([b()], Rt.prototype, "walletId", 2),
  Pe([b()], Rt.prototype, "imageId", 2),
  Pe([R()], Rt.prototype, "uri", 2),
  (Rt = Pe([E("w3m-walletconnect-qr")], Rt));
const Xl = _`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
var t0 = Object.defineProperty,
  e0 = Object.getOwnPropertyDescriptor,
  n0 = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? e0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && t0(t, n, r), r;
  };
let Pn = class extends C {
  async onDisconnect() {
    await V.client().disconnect();
  }
  async onCopyAddress() {
    var e;
    await navigator.clipboard.writeText((e = D.state.address) != null ? e : ""),
      F.openToast("Address copied", "success");
  }
  render() {
    return d`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${$.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${$.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`;
  }
};
(Pn.styles = [A.globalCss, Xl]), (Pn = n0([E("w3m-account-view")], Pn));
var r0 = Object.defineProperty,
  i0 = Object.getOwnPropertyDescriptor,
  o0 = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? i0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && r0(t, n, r), r;
  };
let Mn = class extends C {
  viewTemplate() {
    return O.isAndroid()
      ? d`<w3m-android-wallet-selection></w3m-android-wallet-selection>`
      : O.isMobile()
      ? d`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>`
      : d`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`;
  }
  render() {
    return d`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`;
  }
};
(Mn.styles = [A.globalCss]), (Mn = o0([E("w3m-connect-wallet-view")], Mn));
const a0 = _`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
var s0 = Object.defineProperty,
  l0 = Object.getOwnPropertyDescriptor,
  Wr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? l0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && s0(t, n, r), r;
  };
let Me = class extends C {
  constructor() {
    super(),
      (this.isError = !1),
      (this.unwatchConnection = void 0),
      this.openDesktopApp(),
      (this.unwatchConnection = Z.subscribe((e) => {
        this.isError = e.pairingError;
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unwatchConnection) == null || e.call(this);
  }
  onFormatAndRedirect(e) {
    const { desktop: t, name: n } = O.getWalletRouterData(),
      i = t == null ? void 0 : t.native;
    if (i) {
      const r = O.formatNativeUrl(i, e, n);
      O.openHref(r, "_self");
    }
  }
  openDesktopApp() {
    Z.setPairingError(!1);
    const { standaloneUri: e } = P.state,
      { pairingUri: t } = Z.state,
      n = O.getWalletRouterData();
    g.setRecentWallet(n),
      e ? this.onFormatAndRedirect(e) : this.onFormatAndRedirect(t);
  }
  render() {
    const { name: e, id: t, image_id: n } = O.getWalletRouterData(),
      {
        isMobile: i,
        isInjected: r,
        isWeb: o,
      } = g.getCachedRouterWalletPlatforms();
    return d`<w3m-modal-header title="${e}" .onAction="${
      g.handleUriCopy
    }" .actionIcon="${
      $.COPY_ICON
    }"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${n}" label="${`Continue in ${e}...`}" .isError="${
      this.isError
    }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</w3m-text><w3m-platform-selection .isMobile="${i}" .isInjected="${r}" .isWeb="${o}" .isRetry="${!0}"><w3m-button .onClick="${this.openDesktopApp.bind(
      this
    )}" .iconRight="${
      $.RETRY_ICON
    }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
  }
};
(Me.styles = [A.globalCss, a0]),
  Wr([R()], Me.prototype, "isError", 2),
  (Me = Wr([E("w3m-desktop-connecting-view")], Me));
const c0 = _`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
var d0 = Object.defineProperty,
  h0 = Object.getOwnPropertyDescriptor,
  u0 = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? h0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && d0(t, n, r), r;
  };
let Tn = class extends C {
  onGet(e) {
    O.openHref(e, "_blank");
  }
  render() {
    const e = W.state.recomendedWallets.slice(0, 5),
      t = q.manualWallets().slice(0, 5),
      n = e.length,
      i = t.length;
    return d`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${
      n
        ? e.map(
            (r) =>
              d`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${
                r.id
              }" imageId="${
                r.image_id
              }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                r.name
              }</w3m-text><w3m-button .iconRight="${
                $.ARROW_RIGHT_ICON
              }" .onClick="${() =>
                this.onGet(r.homepage)}">Get</w3m-button></div></div>`
          )
        : null
    } ${
      i
        ? t.map(
            (r) =>
              d`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${
                r.id
              }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                r.name
              }</w3m-text><w3m-button .iconRight="${
                $.ARROW_RIGHT_ICON
              }" .onClick="${() =>
                this.onGet(r.links.universal)}">Get</w3m-button></div></div>`
          )
        : null
    }</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${
      g.openWalletExplorerUrl
    }" .iconRight="${
      $.ARROW_UP_RIGHT_ICON
    }">Explore Wallets</w3m-button></div>`;
  }
};
(Tn.styles = [A.globalCss, c0]), (Tn = u0([E("w3m-get-wallet-view")], Tn));
const m0 = _`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
var p0 = Object.defineProperty,
  g0 = Object.getOwnPropertyDescriptor,
  w0 = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? g0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && p0(t, n, r), r;
  };
let Sn = class extends C {
  constructor() {
    super(...arguments), (this.learnUrl = "https://ethereum.org/en/wallets/");
  }
  onGet() {
    H.state.enableExplorer ? S.push("GetWallet") : g.openWalletExplorerUrl();
  }
  onLearnMore() {
    O.openHref(this.learnUrl, "_blank");
  }
  render() {
    return d`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${
      $.HELP_CHART_IMG
    } ${$.HELP_PAINTING_IMG} ${
      $.HELP_ETH_IMG
    }</div><w3m-text variant="medium-regular">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
      $.HELP_KEY_IMG
    } ${$.HELP_USER_IMG} ${
      $.HELP_LOCK_IMG
    }</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
      $.HELP_COMPAS_IMG
    } ${$.HELP_NOUN_IMG} ${
      $.HELP_DAO_IMG
    }</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(
      this
    )}" .iconLeft="${
      $.WALLET_ICON
    }">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(
      this
    )}" .iconRight="${
      $.ARROW_UP_RIGHT_ICON
    }">Learn More</w3m-button></div></w3m-modal-content>`;
  }
};
(Sn.styles = [A.globalCss, m0]), (Sn = w0([E("w3m-help-view")], Sn));
const f0 = _`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
var v0 = Object.defineProperty,
  b0 = Object.getOwnPropertyDescriptor,
  Ur = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? b0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && v0(t, n, r), r;
  };
let Te = class extends C {
  constructor() {
    super(),
      (this.isError = !1),
      (this.connector = V.client().getConnectorById("injected")),
      this.openInjectedApp();
  }
  async openInjectedApp() {
    const { ready: e } = this.connector;
    e &&
      ((this.isError = !1),
      await g.handleConnectorConnection("injected", () => {
        this.isError = !0;
      }));
  }
  render() {
    const { name: e, id: t, image_id: n } = O.getWalletRouterData(),
      {
        isMobile: i,
        isDesktop: r,
        isWeb: o,
      } = g.getCachedRouterWalletPlatforms();
    return d`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${n}" label="${`Continue in ${e}...`}" .isError="${
      this.isError
    }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="${i}" .isDesktop="${r}" .isWeb="${o}" .isRetry="${!0}"><w3m-button .onClick="${this.openInjectedApp.bind(
      this
    )}" .disabled="${!this.isError}" .iconRight="${
      $.RETRY_ICON
    }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
  }
};
(Te.styles = [A.globalCss, f0]),
  Ur([R()], Te.prototype, "isError", 2),
  (Te = Ur([E("w3m-injected-connecting-view")], Te));
const y0 = _`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
var x0 = Object.defineProperty,
  C0 = Object.getOwnPropertyDescriptor,
  $0 = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? C0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && x0(t, n, r), r;
  };
let Rn = class extends C {
  onInstall(e) {
    e && O.openHref(e, "_blank");
  }
  render() {
    const {
      name: e,
      id: t,
      image_id: n,
      homepage: i,
    } = O.getWalletRouterData();
    return d`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${n}" label="Not Detected" .isStale="${!0}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</w3m-text><w3m-button .onClick="${() =>
      this.onInstall(i)}" .iconLeft="${
      $.ARROW_DOWN_ICON
    }">Download</w3m-button></w3m-info-footer>`;
  }
};
(Rn.styles = [A.globalCss, y0]), (Rn = $0([E("w3m-install-wallet-view")], Rn));
const E0 = _`w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection div{display:flex}w3m-platform-selection w3m-button:nth-child(2){margin-left:10px}`;
var A0 = Object.defineProperty,
  k0 = Object.getOwnPropertyDescriptor,
  Hr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? k0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && A0(t, n, r), r;
  };
let Se = class extends C {
  constructor() {
    super(),
      (this.isError = !1),
      (this.unwatchConnection = void 0),
      this.openMobileApp(),
      (this.unwatchConnection = Z.subscribe((e) => {
        this.isError = e.pairingError;
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unwatchConnection) == null || e.call(this);
  }
  onFormatAndRedirect(e, t = !1) {
    const { mobile: n, name: i } = O.getWalletRouterData(),
      r = n == null ? void 0 : n.native,
      o = n == null ? void 0 : n.universal;
    if (r && !t) {
      const a = O.formatNativeUrl(r, e, i);
      O.openHref(a, "_self");
    } else if (o) {
      const a = O.formatUniversalUrl(o, e, i);
      O.openHref(a, "_self");
    }
  }
  openMobileApp(e = !1) {
    Z.setPairingError(!1);
    const { standaloneUri: t } = P.state,
      { pairingUri: n } = Z.state,
      i = O.getWalletRouterData();
    g.setRecentWallet(i),
      t ? this.onFormatAndRedirect(t, e) : this.onFormatAndRedirect(n, e);
  }
  onGoToAppStore(e) {
    e && O.openHref(e, "_blank");
  }
  render() {
    const {
        name: e,
        id: t,
        image_id: n,
        app: i,
        mobile: r,
      } = O.getWalletRouterData(),
      { isWeb: o } = g.getCachedRouterWalletPlatforms(),
      a = i == null ? void 0 : i.ios,
      l = r == null ? void 0 : r.universal;
    return d`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${n}" label="Tap 'Open' to continue…" .isError="${
      this.isError
    }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note"><w3m-text color="secondary" variant="small-thin">You can reload the website to try again ${
      l ? ` or open ${e} using a "Backup" instead` : ""
    }</w3m-text><w3m-platform-selection .isWeb="${o}" .isRetry="${!0}"><div><w3m-button .onClick="${() =>
      this.openMobileApp(!1)}" .iconRight="${$.RETRY_ICON}">Retry</w3m-button>${
      l
        ? d`<w3m-button variant="outline" .onClick="${() =>
            this.openMobileApp(!0)}" .iconRight="${
            $.ARROW_UP_RIGHT_ICON
          }">Backup</w3m-button>`
        : null
    }</div></w3m-platform-selection></w3m-info-footer><w3m-info-footer class="w3m-app-store"><div><w3m-wallet-image walletId="${t}" imageId="${n}"></w3m-wallet-image><w3m-text>${`Get ${e}`}</w3m-text></div><w3m-button .iconRight="${
      $.ARROW_RIGHT_ICON
    }" .onClick="${() =>
      this.onGoToAppStore(
        a
      )}" variant="ghost">App Store</w3m-button></w3m-info-footer>`;
  }
};
(Se.styles = [A.globalCss, E0]),
  Hr([R()], Se.prototype, "isError", 2),
  (Se = Hr([E("w3m-mobile-connecting-view")], Se));
const I0 = _`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
var O0 = Object.defineProperty,
  _0 = Object.getOwnPropertyDescriptor,
  P0 = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? _0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && O0(t, n, r), r;
  };
let Nn = class extends C {
  render() {
    const { name: e, id: t, image_id: n } = O.getWalletRouterData(),
      {
        isInjected: i,
        isDesktop: r,
        isWeb: o,
      } = g.getCachedRouterWalletPlatforms();
    return d`<w3m-modal-header title="${e}" .onAction="${
      g.handleUriCopy
    }" .actionIcon="${
      $.COPY_ICON
    }"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr walletId="${t}" imageId="${n}"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Scan this qrcode with your phone's camera or inside ${e} app`}</w3m-text><w3m-platform-selection .isDesktop="${r}" .isInjected="${i}" .isWeb="${o}"></w3m-platform-selection></w3m-info-footer>`;
  }
};
(Nn.styles = [A.globalCss, I0]),
  (Nn = P0([E("w3m-mobile-qr-connecting-view")], Nn));
var M0 = Object.defineProperty,
  T0 = Object.getOwnPropertyDescriptor,
  S0 = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? T0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && M0(t, n, r), r;
  };
let Ln = class extends C {
  render() {
    return d`<w3m-modal-header title="Scan the code" .onAction="${g.handleUriCopy}" .actionIcon="${$.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`;
  }
};
(Ln.styles = [A.globalCss]), (Ln = S0([E("w3m-qrcode-view")], Ln));
const R0 = _`div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}`;
var N0 = Object.defineProperty,
  L0 = Object.getOwnPropertyDescriptor,
  j0 = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? L0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && N0(t, n, r), r;
  };
let jn = class extends C {
  async onSelectChain(e) {
    try {
      const {
          selectedChain: t,
          walletConnectVersion: n,
          isInjectedMobile: i,
        } = P.state,
        { isConnected: r } = D.state;
      r
        ? (t == null ? void 0 : t.id) === e.id
          ? S.reset("Account")
          : n === 2
          ? (await V.client().switchNetwork({ chainId: e.id }),
            S.reset("Account"))
          : S.push("SwitchNetwork", { SwitchNetwork: e })
        : i
        ? (P.setSelectedChain(e), J.close())
        : (P.setSelectedChain(e), S.push("ConnectWallet"));
    } catch (t) {
      console.error(t), F.openToast(g.getErrorMessage(t), "error");
    }
  }
  render() {
    const { chains: e } = P.state;
    return d`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div>${
      e == null
        ? void 0
        : e.map(
            (t) =>
              d`<w3m-network-button name="${t.name}" chainId="${
                t.id
              }" .onClick="${async () => this.onSelectChain(t)}">${
                t.name
              }</w3m-network-button>`
          )
    }</div></w3m-modal-content>`;
  }
};
(jn.styles = [A.globalCss, R0]), (jn = j0([E("w3m-select-network-view")], jn));
const D0 = _`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
var B0 = Object.defineProperty,
  W0 = Object.getOwnPropertyDescriptor,
  Zr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? W0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && B0(t, n, r), r;
  };
let Re = class extends C {
  constructor() {
    super(), (this.isError = !1), this.onSwitchNetwork();
  }
  async onSwitchNetwork() {
    try {
      this.isError = !1;
      const e = O.getSwitchNetworkRouterData();
      await V.client().switchNetwork({ chainId: e.id }),
        P.setSelectedChain(e),
        S.reset("Account");
    } catch {
      this.isError = !0;
    }
  }
  render() {
    const { id: e, name: t } = O.getSwitchNetworkRouterData();
    return d`<w3m-modal-header title="${`Connect to ${t}`}"></w3m-modal-header><w3m-modal-content><w3m-network-waiting chainId="${e}" label="Approve in your wallet" .isError="${
      this.isError
    }"></w3m-network-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="${this.onSwitchNetwork.bind(
      this
    )}" .disabled="${!this.isError}" .iconRight="${
      $.RETRY_ICON
    }">Try Again</w3m-button></w3m-info-footer>`;
  }
};
(Re.styles = [A.globalCss, D0]),
  Zr([R()], Re.prototype, "isError", 2),
  (Re = Zr([E("w3m-switch-network-view")], Re));
const U0 = _`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var H0 = Object.defineProperty,
  Z0 = Object.getOwnPropertyDescriptor,
  ie = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Z0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && H0(t, n, r), r;
  };
const Dn = 40;
let xt = class extends C {
  constructor() {
    super(...arguments),
      (this.loading = !W.state.wallets.listings.length),
      (this.firstFetch = !W.state.wallets.listings.length),
      (this.search = ""),
      (this.endReached = !1),
      (this.intersectionObserver = void 0),
      (this.searchDebounce = g.debounce((e) => {
        e.length >= 3
          ? ((this.firstFetch = !0),
            (this.endReached = !1),
            (this.search = e),
            W.resetSearch(),
            this.fetchWallets())
          : this.search &&
            ((this.search = ""),
            (this.endReached = this.isLastPage()),
            W.resetSearch());
      }));
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var e;
    (e = this.intersectionObserver) == null || e.disconnect();
  }
  get placeholderEl() {
    return g.getShadowRootElement(this, ".w3m-placeholder-block");
  }
  createPaginationObserver() {
    (this.intersectionObserver = new IntersectionObserver(([e]) => {
      e.isIntersecting &&
        !(this.search && this.firstFetch) &&
        this.fetchWallets();
    })),
      this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: e, search: t } = W.state,
      { listings: n, total: i } = this.search ? t : e;
    return i <= Dn || n.length >= i;
  }
  async fetchWallets() {
    var e;
    const { wallets: t, search: n, injectedWallets: i } = W.state,
      { listings: r, total: o, page: a } = this.search ? n : t;
    if (!this.endReached && (this.firstFetch || (o > Dn && r.length < o)))
      try {
        this.loading = !0;
        const l = (e = P.state.standaloneChains) == null ? void 0 : e.join(","),
          { listings: s } = await W.getWallets({
            page: this.firstFetch ? 1 : a + 1,
            entries: Dn,
            search: this.search,
            version: P.state.walletConnectVersion,
            chains: l,
          }),
          c = s.map((u) => g.getWalletIcon(u)),
          m = i.map((u) => g.getWalletIcon(u));
        await Promise.all([
          ...c.map(async (u) => g.preloadImage(u)),
          ...m.map(async (u) => g.preloadImage(u)),
          O.wait(300),
        ]),
          (this.endReached = this.isLastPage());
      } catch (l) {
        console.error(l), F.openToast(g.getErrorMessage(l), "error");
      } finally {
        (this.loading = !1), (this.firstFetch = !1);
      }
  }
  onConnect(e) {
    O.isAndroid() ? g.handleMobileLinking(e) : g.goToConnectingView(e);
  }
  onSearchChange(e) {
    const { value: t } = e.target;
    this.searchDebounce(t);
  }
  render() {
    const { wallets: e, search: t } = W.state,
      { listings: n } = this.search ? t : e,
      i = this.loading && !n.length,
      r = this.search.length >= 3;
    let o = z.injectedWalletsTemplate(),
      a = z.manualWalletsTemplate(),
      l = z.recomendedWalletsTemplate(!0);
    r &&
      ((o = o.filter(({ values: u }) => g.caseSafeIncludes(u[0], this.search))),
      (a = a.filter(({ values: u }) => g.caseSafeIncludes(u[0], this.search))),
      (l = l.filter(({ values: u }) => g.caseSafeIncludes(u[0], this.search))));
    const s = !this.loading && !n.length && !o.length && !l.length,
      c = Math.max(o.length, n.length),
      m = {
        "w3m-loading": i,
        "w3m-end-reached": this.endReached || !this.loading,
        "w3m-empty": s,
      };
    return d`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(
      this
    )}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${G(
      m
    )}"><div class="w3m-grid">${i ? null : l} ${
      i
        ? null
        : [...Array(c)].map(
            (u, h) =>
              d`${a[h]} ${o[h]} ${
                n[h]
                  ? d`<w3m-wallet-button imageId="${n[h].image_id}" name="${
                      n[h].name
                    }" walletId="${n[h].id}" .onClick="${() =>
                      this.onConnect(n[h])}"></w3m-wallet-button>`
                  : null
              }`
          )
    }</div><div class="w3m-placeholder-block">${
      s
        ? d`<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>`
        : null
    } ${
      !s && this.loading ? d`<w3m-spinner></w3m-spinner>` : null
    }</div></w3m-modal-content>`;
  }
};
(xt.styles = [A.globalCss, U0]),
  ie([R()], xt.prototype, "loading", 2),
  ie([R()], xt.prototype, "firstFetch", 2),
  ie([R()], xt.prototype, "search", 2),
  ie([R()], xt.prototype, "endReached", 2),
  (xt = ie([E("w3m-wallet-explorer-view")], xt));
const V0 = _`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
var z0 = Object.defineProperty,
  F0 = Object.getOwnPropertyDescriptor,
  Vr = (e, t, n, i) => {
    for (
      var r = i > 1 ? void 0 : i ? F0(t, n) : t, o = e.length - 1, a;
      o >= 0;
      o--
    )
      (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
    return i && r && z0(t, n, r), r;
  };
let Ne = class extends C {
  constructor() {
    super(),
      (this.isError = !1),
      (this.unwatchConnection = void 0),
      this.openWebWallet(),
      (this.unwatchConnection = Z.subscribe((e) => {
        this.isError = e.pairingError;
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unwatchConnection) == null || e.call(this);
  }
  onFormatAndRedirect(e) {
    const { desktop: t, name: n } = O.getWalletRouterData(),
      i = t == null ? void 0 : t.universal;
    if (i) {
      const r = O.formatUniversalUrl(i, e, n);
      O.openHref(r, "_blank");
    }
  }
  openWebWallet() {
    Z.setPairingError(!1);
    const { standaloneUri: e } = P.state,
      { pairingUri: t } = Z.state,
      n = O.getWalletRouterData();
    g.setRecentWallet(n),
      e ? this.onFormatAndRedirect(e) : this.onFormatAndRedirect(t);
  }
  render() {
    const { name: e, id: t, image_id: n } = O.getWalletRouterData(),
      {
        isMobile: i,
        isInjected: r,
        isDesktop: o,
      } = g.getCachedRouterWalletPlatforms(),
      a = O.isMobile();
    return d`<w3m-modal-header title="${e}" .onAction="${
      g.handleUriCopy
    }" .actionIcon="${
      $.COPY_ICON
    }"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${t}" imageId="${n}" label="${`Continue in ${e}...`}" .isError="${
      this.isError
    }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</w3m-text><w3m-platform-selection .isMobile="${i}" .isInjected="${
      a ? !1 : r
    }" .isDesktop="${
      a ? !1 : o
    }" .isRetry="${!0}"><w3m-button .onClick="${this.openWebWallet.bind(
      this
    )}" .iconRight="${
      $.RETRY_ICON
    }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
  }
};
(Ne.styles = [A.globalCss, V0]),
  Vr([R()], Ne.prototype, "isError", 2),
  (Ne = Vr([E("w3m-web-connecting-view")], Ne));
export {
  Qt as W3mAccountButton,
  _t as W3mConnectButton,
  bt as W3mCoreButton,
  re as W3mModal,
  Tt as W3mNetworkSwitch,
  st as W3mQrCode,
};
