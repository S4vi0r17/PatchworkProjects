function initApp() {
    headerMenu(),
        navSticky(),
        typed(),
        formJDev()
}
function headerMenu() {
    const e = document.querySelector("#audio1"),
        n = document.querySelector("#audio2"),
        t = document.querySelector(".header-hamburger-btn"),
        o = document.querySelector(".js-header-menu"),
        r = document.querySelector(".js-header-backdrop");
    function a() {
        window.innerWidth < 768 && (t.classList.toggle("activo"), t.classList.contains("activo") ? e.play() : n.play(), o.classList.toggle("open"), r.classList.toggle("active"), document.body.classList.toggle("overflow-hidden"))
    }
    document.querySelectorAll(".js-header-menu-toggler").forEach(e => {
        e.addEventListener("click", a)
    }),
        r.addEventListener("click", a),
        o.addEventListener("click", a)
}
function navSticky() {
    window.addEventListener("scroll", (function () {
        document.querySelector(".header-section").classList.toggle("sticky", window.scrollY > 0)
    }))
}
function typed() {
    ityped.init(document.querySelector(".ityped"), {
        showCursor: !0,
        strings: ["Mi nombre es Jonathan", "Soy desarrollador web"],
        typeSpeed: 250
    })
}
function formJDev() {
    const e = document.querySelector("#form"),
        n = document.querySelectorAll("#form input"),
        t = /^[^\s][a-zA-ZÀ-ÿ\s]{3,24}$/,
        o = /^[a-zA-ZÀ-ÿ\s]{4,24}$/,
        r = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        a = {
            nombre: !1,
            email: !1,
            asunto: !1
        },
        s = e => {
            switch (e.target.name) {
                case "nombre":
                    i(t, e.target, "nombre");
                    break;
                case "email":
                    i(r, e.target, "email");
                    break;
                case "asunto":
                    i(o, e.target, "asunto")
            }
        },
        i = (e, n, t) => {
            e.test(n.value) ? (document.querySelector("#grupo-" + t).classList.remove("form-group-cancel"), document.querySelector("#grupo-" + t).classList.add("form-group-check"), document.querySelector(`#grupo - $ {
            t
        } .input - group .input - icon i`).classList.add("fa-check-circle"), document.querySelector(`#grupo - $ {
            t
        } .input - group .input - icon i`).classList.remove("fa-times-circle"), document.querySelector(`#grupo - $ {
            t
        } .form - input - warning`).classList.remove("form-input-warning-active"), a[t] = !0) : (document.querySelector("#grupo-" + t).classList.add("form-group-cancel"), document.querySelector("#grupo-" + t).classList.remove("form-group-check"), document.querySelector(`#grupo - $ {
            t
        } .input - group .input - icon i`).classList.add("fa-times-circle"), document.querySelector(`#grupo - $ {
            t
        } .input - group .input - icon i`).classList.remove("fa-check-circle"), document.querySelector(`#grupo - $ {
            t
        } .form - input - warning`).classList.add("form-input-warning-active"), a[t] = !1)
        };
    n.forEach(e => {
        e.addEventListener("keyup", s),
            e.addEventListener("blur", s)
    }),
        e.addEventListener("submit", n => {
            a.nombre && a.email && a.asunto ? (e.reset(), document.querySelector("#form-send").classList.add("form-send-active"), setTimeout(() => {
                document.querySelector("#form-send").classList.remove("form-send-active")
            },
                5e3), document.querySelectorAll(".form-checked").forEach(e => {
                    e.classList.remove("form-checked"),
                        e.classList.remove("fa-check-circle"),
                        e.classList.add("form-checked")
                })) : (document.getElementById("form-mensaje-error").classList.add("form-mensaje-error-activo"), setTimeout(() => {
                    document.getElementById("form-mensaje-error").classList.remove("form-mensaje-error-activo")
                },
                    5e3))
        })
}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
document.addEventListener("DOMContentLoaded", (function () {
    initApp()
})),
    function (e, n, t) {
        function o(e, n) {
            return typeof e === n
        }
        function r(e) {
            var n = A.className,
                t = u._config.classPrefix || "";
            if (d && (n = n.baseVal), u._config.enableJSClass) {
                var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                n = n.replace(o, "$1" + t + "js$2")
            }
            u._config.enableClasses && (n += " " + t + e.join(" " + t), d ? A.className.baseVal = n : A.className = n)
        }
        function a(e, n) {
            if ("object" == typeof e) for (var t in e) l(e, t) && a(t, e[t]);
            else {
                var o = (e = e.toLowerCase()).split("."),
                    s = u[o[0]];
                if (2 == o.length && (s = s[o[1]]), void 0 !== s) return u;
                n = "function" == typeof n ? n() : n,
                    1 == o.length ? u[o[0]] = n : (!u[o[0]] || u[o[0]] instanceof Boolean || (u[o[0]] = new Boolean(u[o[0]])), u[o[0]][o[1]] = n),
                    r([(n && 0 != n ? "" : "no-") + o.join("-")]),
                    u._trigger(e, n)
            }
            return u
        }
        var s = [],
            i = [],
            c = {
                _version: "3.6.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function (e, n) {
                    var t = this;
                    setTimeout((function () {
                        n(t[e])
                    }), 0)
                },
                addTest: function (e, n, t) {
                    i.push({
                        name: e,
                        fn: n,
                        options: t
                    })
                },
                addAsyncTest: function (e) {
                    i.push({
                        name: null,
                        fn: e
                    })
                }
            },
            u = function () { };
        u.prototype = c,
            u = new u;
        var l, A = n.documentElement,
            d = "svg" === A.nodeName.toLowerCase(); ! function () {
                var e = {}.hasOwnProperty;
                l = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
                    return n in e && o(e.constructor.prototype[n], "undefined")
                } : function (n, t) {
                    return e.call(n, t)
                }
            }(),
                c._l = {},
                c.on = function (e, n) {
                    this._l[e] || (this._l[e] = []),
                        this._l[e].push(n),
                        u.hasOwnProperty(e) && setTimeout((function () {
                            u._trigger(e, u[e])
                        }), 0)
                },
                c._trigger = function (e, n) {
                    if (this._l[e]) {
                        var t = this._l[e];
                        setTimeout((function () {
                            var e;
                            for (e = 0; e < t.length; e++)(0, t[e])(n)
                        }), 0),
                            delete this._l[e]
                    }
                },
                u._q.push((function () {
                    c.addTest = a
                })),
                u.addAsyncTest((function () {
                    function e(e, n, t) {
                        function o(n) {
                            var o = !(!n || "load" !== n.type) && 1 == r.width;
                            a(e, "webp" === e && o ? new Boolean(o) : o),
                                t && t(n)
                        }
                        var r = new Image;
                        r.onerror = o,
                            r.onload = o,
                            r.src = n
                    }
                    var n = [{
                        uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                        name: "webp"
                    },
                    {
                        uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                        name: "webp.alpha"
                    },
                    {
                        uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                        name: "webp.animation"
                    },
                    {
                        uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                        name: "webp.lossless"
                    }],
                        t = n.shift();
                    e(t.name, t.uri, (function (t) {
                        if (t && "load" === t.type) for (var o = 0; o < n.length; o++) e(n[o].name, n[o].uri)
                    }))
                })),
                function () {
                    var e, n, t, r, a, c;
                    for (var l in i) if (i.hasOwnProperty(l)) {
                        if (e = [], (n = i[l]).name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                        for (r = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) 1 === (c = e[a].split(".")).length ? u[c[0]] = r : (!u[c[0]] || u[c[0]] instanceof Boolean || (u[c[0]] = new Boolean(u[c[0]])), u[c[0]][c[1]] = r),
                            s.push((r ? "" : "no-") + c.join("-"))
                    }
                }(),
                r(s),
                delete c.addTest,
                delete c.addAsyncTest;
        for (var m = 0; m < u._q.length; m++) u._q[m]();
        e.Modernizr = u
    }(window, document); //# sourceMappingURL=app.js.map
