// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/vendor/zolozRealIdCore.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (t, e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var r = e();

    for (var n in r) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : t)[n] = r[n];
    }
  }
}(window, function () {
  return r = [function (t, e, r) {
    t.exports = r(4);
  }, function (t, e) {
    function c(t, e, r, n, o, a, i) {
      try {
        var u = t[a](i),
            c = u.value;
      } catch (t) {
        return void r(t);
      }

      u.done ? e(c) : Promise.resolve(c).then(n, o);
    }

    t.exports = function (u) {
      return function () {
        var t = this,
            i = arguments;
        return new Promise(function (e, r) {
          var n = u.apply(t, i);

          function o(t) {
            c(n, e, r, o, a, "next", t);
          }

          function a(t) {
            c(n, e, r, o, a, "throw", t);
          }

          o(void 0);
        });
      };
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (t, e) {
    function n(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    t.exports = function (t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t;
    };
  }, function (t, e, r) {
    var n = function (a) {
      "use strict";

      var c,
          t = Object.prototype,
          s = t.hasOwnProperty,
          e = "function" == typeof Symbol ? Symbol : {},
          o = e.iterator || "@@iterator",
          r = e.asyncIterator || "@@asyncIterator",
          n = e.toStringTag || "@@toStringTag";

      function i(t, e, r, n) {
        var a,
            i,
            u,
            c,
            o = e && e.prototype instanceof m ? e : m,
            s = Object.create(o.prototype),
            f = new P(n || []);
        return s._invoke = (a = t, i = r, u = f, c = p, function (t, e) {
          if (c === d) throw new Error("Generator is already running");

          if (c === y) {
            if ("throw" === t) throw e;
            return C();
          }

          for (u.method = t, u.arg = e;;) {
            var r = u.delegate;

            if (r) {
              var n = E(r, u);

              if (n) {
                if (n === v) continue;
                return n;
              }
            }

            if ("next" === u.method) u.sent = u._sent = u.arg;else if ("throw" === u.method) {
              if (c === p) throw c = y, u.arg;
              u.dispatchException(u.arg);
            } else "return" === u.method && u.abrupt("return", u.arg);
            c = d;
            var o = l(a, i, u);

            if ("normal" === o.type) {
              if (c = u.done ? y : h, o.arg === v) continue;
              return {
                value: o.arg,
                done: u.done
              };
            }

            "throw" === o.type && (c = y, u.method = "throw", u.arg = o.arg);
          }
        }), s;
      }

      function l(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }

      a.wrap = i;
      var p = "suspendedStart",
          h = "suspendedYield",
          d = "executing",
          y = "completed",
          v = {};

      function m() {}

      function u() {}

      function f() {}

      var g = {};

      g[o] = function () {
        return this;
      };

      var x = Object.getPrototypeOf,
          b = x && x(x(A([])));
      b && b !== t && s.call(b, o) && (g = b);
      var w = f.prototype = m.prototype = Object.create(g);

      function _(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }

      function k(c) {
        var e;

        this._invoke = function (r, n) {
          function t() {
            return new Promise(function (t, e) {
              !function e(t, r, n, o) {
                var a = l(c[t], c, r);

                if ("throw" !== a.type) {
                  var i = a.arg,
                      u = i.value;
                  return u && "object" == _typeof(u) && s.call(u, "__await") ? Promise.resolve(u.__await).then(function (t) {
                    e("next", t, n, o);
                  }, function (t) {
                    e("throw", t, n, o);
                  }) : Promise.resolve(u).then(function (t) {
                    i.value = t, n(i);
                  }, function (t) {
                    return e("throw", t, n, o);
                  });
                }

                o(a.arg);
              }(r, n, t, e);
            });
          }

          return e = e ? e.then(t, t) : t();
        };
      }

      function E(t, e) {
        var r = t.iterator[e.method];

        if (r === c) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = c, E(t, e), "throw" === e.method)) return v;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return v;
        }

        var n = l(r, t.iterator, e.arg);
        if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, v;
        var o = n.arg;
        return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = c), e.delegate = null, v) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v);
      }

      function S(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }

      function L(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }

      function P(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(S, this), this.reset(!0);
      }

      function A(e) {
        if (e) {
          var t = e[o];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;

          if (!isNaN(e.length)) {
            var r = -1,
                n = function t() {
              for (; ++r < e.length;) {
                if (s.call(e, r)) return t.value = e[r], t.done = !1, t;
              }

              return t.value = c, t.done = !0, t;
            };

            return n.next = n;
          }
        }

        return {
          next: C
        };
      }

      function C() {
        return {
          value: c,
          done: !0
        };
      }

      return u.prototype = w.constructor = f, f.constructor = u, f[n] = u.displayName = "GeneratorFunction", a.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === u || "GeneratorFunction" === (e.displayName || e.name));
      }, a.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, n in t || (t[n] = "GeneratorFunction")), t.prototype = Object.create(w), t;
      }, a.awrap = function (t) {
        return {
          __await: t
        };
      }, _(k.prototype), k.prototype[r] = function () {
        return this;
      }, a.AsyncIterator = k, a.async = function (t, e, r, n) {
        var o = new k(i(t, e, r, n));
        return a.isGeneratorFunction(e) ? o : o.next().then(function (t) {
          return t.done ? t.value : o.next();
        });
      }, _(w), w[n] = "Generator", w[o] = function () {
        return this;
      }, w.toString = function () {
        return "[object Generator]";
      }, a.keys = function (r) {
        var n = [];

        for (var t in r) {
          n.push(t);
        }

        return n.reverse(), function t() {
          for (; n.length;) {
            var e = n.pop();
            if (e in r) return t.value = e, t.done = !1, t;
          }

          return t.done = !0, t;
        };
      }, a.values = A, P.prototype = {
        constructor: P,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(L), !t) for (var e in this) {
            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = c);
          }
        },
        stop: function stop() {
          this.done = !0;
          var t = this.tryEntries[0],
              e = t.completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(r) {
          if (this.done) throw r;
          var n = this;

          function t(t, e) {
            return a.type = "throw", a.arg = r, n.next = t, e && (n.method = "next", n.arg = c), !!e;
          }

          for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
            var o = this.tryEntries[e],
                a = o.completion;
            if ("root" === o.tryLoc) return t("end");

            if (o.tryLoc <= this.prev) {
              var i = s.call(o, "catchLoc"),
                  u = s.call(o, "finallyLoc");

              if (i && u) {
                if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                if (this.prev < o.finallyLoc) return t(o.finallyLoc);
              } else if (i) {
                if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
              } else {
                if (!u) throw new Error("try statement without catch or finally");
                if (this.prev < o.finallyLoc) return t(o.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, e) {
          for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
            var n = this.tryEntries[r];

            if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
              var o = n;
              break;
            }
          }

          o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
          var a = o ? o.completion : {};
          return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a);
        },
        complete: function complete(t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v;
        },
        finish: function finish(t) {
          for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), L(r), v;
          }
        },
        catch: function _catch(t) {
          for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
            var r = this.tryEntries[e];

            if (r.tryLoc === t) {
              var n = r.completion;

              if ("throw" === n.type) {
                var o = n.arg;
                L(r);
              }

              return o;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, e, r) {
          return this.delegate = {
            iterator: A(t),
            resultName: e,
            nextLoc: r
          }, "next" === this.method && (this.arg = c), v;
        }
      }, a;
    }(t.exports);

    try {
      regeneratorRuntime = n;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(n);
    }
  }, function (t, e, r) {
    "use strict";

    r.r(e);
    var n = r(0),
        g = r.n(n),
        o = r(1),
        x = r.n(o),
        a = r(2),
        i = r.n(a),
        u = r(3),
        c = r.n(u);

    function b(t) {
      window.AlipayJSBridge ? t && t() : document.addEventListener("AlipayJSBridgeReady", t, !1);
    }

    function w(e, t) {
      var r = 1 < arguments.length && void 0 !== t ? t : "";
      return console.log("finishWebTask", e), new Promise(function (t) {
        b(function () {
          AlipayJSBridge.call("zimIdentity", {
            action: "finishWebTask",
            status: e,
            nextIndex: r
          }, function () {
            return t();
          });
        });
      });
    }

    function _(t) {
      return new Promise(function (e) {
        b(function () {
          AlipayJSBridge.call("hummerFoundation", {
            action: "needRpc",
            type: t
          }, function (t) {
            return e(t);
          });
        });
      });
    }

    function k(t) {
      return new Promise(function (e) {
        b(function () {
          AlipayJSBridge.call("hummerFoundation", {
            action: "sendRpc",
            type: t
          }, function (t) {
            return e(t);
          });
        });
      });
    }

    function E(t, r, n, e) {
      var o = 3 < arguments.length && void 0 !== e ? e : "";
      return new Promise(function (e) {
        b(function () {
          AlipayJSBridge.call("hummerFoundation", {
            action: "showAlert",
            title: t,
            message: r,
            positive: n,
            negative: o
          }, function (t) {
            return e(t);
          });
        });
      });
    }

    function S(t) {
      return new Promise(function (e) {
        b(function () {
          AlipayJSBridge.call("hummerFoundation", {
            action: "getOutputParams",
            type: t
          }, function (t) {
            return e(t);
          });
        });
      });
    }

    function L(t) {
      return new Promise(function (e) {
        b(function () {
          AlipayJSBridge.call("hummerFoundation", {
            action: "query",
            key: t
          }, function (t) {
            return e(t);
          });
        });
      });
    }

    function P(t, r, n) {
      return new Promise(function (e) {
        b(function () {
          AlipayJSBridge.call("hummerFoundation", {
            action: "add",
            key: t,
            value: r,
            pipeType: n
          }, function (t) {
            return e(t);
          });
        });
      });
    }

    function A(t, e) {
      b(function () {
        AlipayJSBridge.call("hummerFoundation", {
          action: "logging",
          logSeedID: t,
          logMessage: e
        });
      });
    }

    r.d(e, "ekycLog", function () {
      return A;
    });

    var s = function () {
      function e() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        i()(this, e), this._langPack = t;
      }

      var r, t;
      return c()(e, [{
        key: "getInputParams",
        value: (t = x()(g.a.mark(function t() {
          var e, a, r, n;
          return g.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return e = function () {
                    var e = x()(g.a.mark(function t(e) {
                      var r, n, o;
                      return g.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              r = {}, t.t0 = g.a.keys(e);

                            case 2:
                              if ((t.t1 = t.t0()).done) {
                                t.next = 11;
                                break;
                              }

                              if (n = t.t1.value, "url" != n) return t.next = 7, a(e[n]);
                              t.next = 9;
                              break;

                            case 7:
                              o = t.sent, r[n] = o;

                            case 9:
                              t.next = 2;
                              break;

                            case 11:
                              return t.abrupt("return", r);

                            case 12:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }(), a = function () {
                    var e = x()(g.a.mark(function t(e) {
                      var r, n, o;
                      return g.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              r = "", t.t0 = e.pipeType, t.next = "constant" === t.t0 ? 4 : "argument" === t.t0 ? 6 : "context" === t.t0 ? 6 : "both" === t.t0 ? 6 : 12;
                              break;

                            case 4:
                              return r = e.value, t.abrupt("break", 13);

                            case 6:
                              return t.next = 8, L(e.value);

                            case 8:
                              return n = t.sent, o = n.value, r = o, t.abrupt("break", 13);

                            case 12:
                              return t.abrupt("break", 13);

                            case 13:
                              return t.abrupt("return", r);

                            case 14:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }(), console.log("-getInputParams called-"), t.next = 5, new Promise(function (e) {
                    b(function () {
                      AlipayJSBridge.call("hummerFoundation", {
                        action: "getInputParams"
                      }, function (t) {
                        return e(t);
                      });
                    });
                  });

                case 5:
                  if (t.t0 = t.sent, t.t0) {
                    t.next = 8;
                    break;
                  }

                  t.t0 = {};

                case 8:
                  return r = t.t0, t.next = 11, e(r);

                case 11:
                  return n = t.sent, console.log("-inputParamsResult-", n), t.abrupt("return", n);

                case 14:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        })), function () {
          return t.apply(this, arguments);
        })
      }, {
        key: "end",
        value: (r = x()(g.a.mark(function t(e) {
          var r,
              n,
              o,
              c,
              i,
              u,
              a,
              s,
              f,
              l,
              p,
              h,
              d,
              y,
              v = this,
              m = arguments;
          return g.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return r = 1 < m.length && void 0 !== m[1] ? m[1] : {}, n = {
                    system_error_title: "System Error",
                    system_error_msg: "Please try again later",
                    system_error_got_it: "Got it",
                    network_error_title: "No Internet Connection",
                    network_error_msg: "Please check your internet connection and try again",
                    network_error_got_it: "Got it",
                    fe_retry_max_title: "",
                    fe_retry_max_msg: "Sorry, you have too many failed identification attempts. Please try again later.",
                    fe_retry_max_got_it: "Got it"
                  }, o = function o(t) {
                    var e = "";
                    return e = void 0 !== v._langPack[t] ? v._langPack[t] : n[t], e;
                  }, c = function () {
                    var t = x()(g.a.mark(function t() {
                      var e;
                      return g.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              return A("alertAppear", {
                                reason: "systemError"
                              }), t.next = 3, E(o("system_error_title"), o("system_error_msg"), o("system_error_got_it"));

                            case 3:
                              return e = t.sent, A("alertChoose", {
                                choose: e.positive
                              }), t.abrupt("return", e);

                            case 6:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    }));
                    return function () {
                      return t.apply(this, arguments);
                    };
                  }(), i = function () {
                    var t = x()(g.a.mark(function t() {
                      var e;
                      return g.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              return A("alertAppear", {
                                reason: "networkError"
                              }), t.next = 3, E(o("network_error_title"), o("network_error_msg"), o("network_error_got_it"));

                            case 3:
                              return e = t.sent, A("alertChoose", {
                                choose: e.positive
                              }), t.abrupt("return", e);

                            case 6:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    }));
                    return function () {
                      return t.apply(this, arguments);
                    };
                  }(), u = function () {
                    var t = x()(g.a.mark(function t() {
                      var e;
                      return g.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              return A("alertAppear", {
                                reason: "retryLimit"
                              }), t.next = 3, E(o("fe_retry_max_title"), o("fe_retry_max_msg"), o("fe_retry_max_got_it"));

                            case 3:
                              return e = t.sent, A("alertChoose", {
                                choose: e.positive
                              }), t.abrupt("return", e);

                            case 6:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    }));
                    return function () {
                      return t.apply(this, arguments);
                    };
                  }(), a = function () {
                    var e = x()(g.a.mark(function t(e) {
                      var r,
                          n,
                          o,
                          a,
                          i,
                          u = arguments;
                      return g.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              r = 1 < u.length && void 0 !== u[1] ? u[1] : {}, t.t0 = g.a.keys(e);

                            case 2:
                              if ((t.t1 = t.t0()).done) {
                                t.next = 24;
                                break;
                              }

                              n = t.t1.value, o = void 0, t.t2 = n, t.next = "metaInfo" === t.t2 ? 8 : 13;
                              break;

                            case 8:
                              return t.next = 10, L("metaInfo");

                            case 10:
                              return a = t.sent, o = a.value, t.abrupt("break", 15);

                            case 13:
                              return o = r[n], t.abrupt("break", 15);

                            case 15:
                              return t.next = 17, s(e[n], o);

                            case 17:
                              if (i = t.sent, i) {
                                t.next = 22;
                                break;
                              }

                              return t.next = 21, c();

                            case 21:
                              return t.abrupt("return", !1);

                            case 22:
                              t.next = 2;
                              break;

                            case 24:
                              return t.abrupt("return", !0);

                            case 25:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }(), s = function () {
                    var r = x()(g.a.mark(function t(e, r) {
                      return g.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              if (void 0 !== r) {
                                t.next = 5;
                                break;
                              }

                              if (e.mandatory) return t.abrupt("return", !1);
                              t.next = 3;
                              break;

                            case 3:
                              t.next = 12;
                              break;

                            case 5:
                              t.t0 = e.pipeType, t.next = "argument" === t.t0 ? 8 : "context" === t.t0 ? 8 : "both" === t.t0 ? 8 : 11;
                              break;

                            case 8:
                              return t.next = 10, P(e.value, r, e.pipeType);

                            case 10:
                            case 11:
                              return t.abrupt("break", 12);

                            case 12:
                              return t.abrupt("return", !0);

                            case 13:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    }));
                    return function (t, e) {
                      return r.apply(this, arguments);
                    };
                  }(), f = function () {
                    var e = x()(g.a.mark(function t(e) {
                      var r, n, o, a;
                      return g.a.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              return b(function () {
                                AlipayJSBridge.call("hummerFoundation", {
                                  action: "showLoadingDialog"
                                });
                              }), t.next = 3, k(e);

                            case 3:
                              if (r = t.sent, b(function () {
                                AlipayJSBridge.call("hummerFoundation", {
                                  action: "hideLoadingDialog"
                                });
                              }), r.success) {
                                t.next = 9;
                                break;
                              }

                              return t.next = 8, i();

                            case 8:
                              return t.abrupt("return", {
                                retCode: 0
                              });

                            case 9:
                              n = r.nextResponse, o = n.nextIndex, a = n.response, t.t0 = a[0].retCode, t.next = "SYSTEM_SUCCESS" === t.t0 ? 13 : "SYSTEM_ERROR" === t.t0 ? 16 : "ILLEGAL_ARGUMENT" === t.t0 ? 16 : "DOC_MAX_RETRY_EXCEEDED" === t.t0 ? 22 : "FACE_MAX_RETRY_EXCEEDED" === t.t0 ? 22 : 27;
                              break;

                            case 13:
                              return t.next = 15, w(e, o);

                            case 15:
                              return t.abrupt("break", 28);

                            case 16:
                              return A("ztech_system_error", {
                                subCode: a[0].retCodeSub
                              }), t.next = 19, c();

                            case 19:
                              return t.next = 21, w("error", o);

                            case 21:
                              return t.abrupt("break", 28);

                            case 22:
                              return t.next = 24, u();

                            case 24:
                              return t.next = 26, w("error", o);

                            case 26:
                              return t.abrupt("break", 28);

                            case 27:
                              return t.abrupt("return", {
                                retCode: 1,
                                response: a[0]
                              });

                            case 28:
                              return t.abrupt("return", {
                                retCode: 0
                              });

                            case 29:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }(), console.log("-end called-", e, r), t.next = 12, S(e);

                case 12:
                  if (t.t0 = t.sent, t.t0) {
                    t.next = 15;
                    break;
                  }

                  t.t0 = {};

                case 15:
                  return l = t.t0, t.next = 18, a(l, r);

                case 18:
                  if (p = t.sent, p) return h = "", h = "back" == e ? "Z7002" : "next" == e ? "Z7099" : "error" == e ? "Z7023" : "fail" == e ? "Z7038" : "skip" == e ? "Z7039" : "cancel" == e ? "Z7040" : "Z7098", t.next = 24, P("retCodeSub", h, "zStack");
                  t.next = 41;
                  break;

                case 24:
                  return t.next = 26, _(e);

                case 26:
                  if (d = t.sent, d.needRpc) return t.next = 30, f(e);
                  t.next = 35;
                  break;

                case 30:
                  return y = t.sent, console.log("-end ret-", y), t.abrupt("return", y);

                case 35:
                  return t.next = 37, w(e);

                case 37:
                  return console.log("-end ret-", {
                    retCode: 0
                  }), t.abrupt("return", {
                    retCode: 0
                  });

                case 39:
                  t.next = 47;
                  break;

                case 41:
                  return t.next = 43, P("retCodeSub", "Z7023", "zStack");

                case 43:
                  return t.next = 45, w("error");

                case 45:
                  return console.log("-end ret-", {
                    retCode: 0
                  }), t.abrupt("return", {
                    retCode: 0
                  });

                case 47:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        })), function (t) {
          return r.apply(this, arguments);
        })
      }]), e;
    }();

    e.default = s;
  }], n = {}, o.m = r, o.c = n, o.d = function (t, e, r) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (o.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      o.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "dist", o(o.s = 5);

  function o(t) {
    if (n[t]) return n[t].exports;
    var e = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return r[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports;
  }

  var r, n;
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53721" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/vendor/zolozRealIdCore.js"], null)
//# sourceMappingURL=/zolozRealIdCore.2ab21e22.js.map