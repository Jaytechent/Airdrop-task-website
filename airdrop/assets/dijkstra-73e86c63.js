var m = function (u) {
    for (var r = [], s = u.length, t = 0; t < s; t++) {
      var e = u.charCodeAt(t);
      if (e >= 55296 && e <= 56319 && s > t + 1) {
        var o = u.charCodeAt(t + 1);
        o >= 56320 &&
          o <= 57343 &&
          ((e = (e - 55296) * 1024 + o - 56320 + 65536), (t += 1));
      }
      if (e < 128) {
        r.push(e);
        continue;
      }
      if (e < 2048) {
        r.push((e >> 6) | 192), r.push((e & 63) | 128);
        continue;
      }
      if (e < 55296 || (e >= 57344 && e < 65536)) {
        r.push((e >> 12) | 224),
          r.push(((e >> 6) & 63) | 128),
          r.push((e & 63) | 128);
        continue;
      }
      if (e >= 65536 && e <= 1114111) {
        r.push((e >> 18) | 240),
          r.push(((e >> 12) & 63) | 128),
          r.push(((e >> 6) & 63) | 128),
          r.push((e & 63) | 128);
        continue;
      }
      r.push(239, 191, 189);
    }
    return new Uint8Array(r).buffer;
  },
  d = {},
  F = {
    get exports() {
      return d;
    },
    set exports(a) {
      d = a;
    },
  };
(function (a) {
  var u = {
    single_source_shortest_paths: function (r, s, t) {
      var e = {},
        o = {};
      o[s] = 0;
      var h = u.PriorityQueue.make();
      h.push(s, 0);
      for (var n, i, f, v, _, x, c, p, l; !h.empty(); ) {
        (n = h.pop()), (i = n.value), (v = n.cost), (_ = r[i] || {});
        for (f in _)
          _.hasOwnProperty(f) &&
            ((x = _[f]),
            (c = v + x),
            (p = o[f]),
            (l = typeof o[f] > "u"),
            (l || p > c) && ((o[f] = c), h.push(f, c), (e[f] = i)));
      }
      if (typeof t < "u" && typeof o[t] > "u") {
        var y = ["Could not find a path from ", s, " to ", t, "."].join("");
        throw new Error(y);
      }
      return e;
    },
    extract_shortest_path_from_predecessor_list: function (r, s) {
      for (var t = [], e = s; e; ) t.push(e), r[e], (e = r[e]);
      return t.reverse(), t;
    },
    find_path: function (r, s, t) {
      var e = u.single_source_shortest_paths(r, s, t);
      return u.extract_shortest_path_from_predecessor_list(e, t);
    },
    PriorityQueue: {
      make: function (r) {
        var s = u.PriorityQueue,
          t = {},
          e;
        r = r || {};
        for (e in s) s.hasOwnProperty(e) && (t[e] = s[e]);
        return (t.queue = []), (t.sorter = r.sorter || s.default_sorter), t;
      },
      default_sorter: function (r, s) {
        return r.cost - s.cost;
      },
      push: function (r, s) {
        var t = { value: r, cost: s };
        this.queue.push(t), this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return this.queue.length === 0;
      },
    },
  };
  a.exports = u;
})(F);
export { d, m as e };
