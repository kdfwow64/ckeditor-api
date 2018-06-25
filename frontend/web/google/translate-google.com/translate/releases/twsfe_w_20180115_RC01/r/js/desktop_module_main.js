/* Copyright 2011 Google */
window.jstiming.load.tick('jbl');
'use strict';
var aa = " does not look like an IPv4 address.",
    ba = " is not a valid IPv6 address.",
    ca = "%1$s",
    da = "-caption",
    fa = "-content",
    ia = "-disabled",
    ja = "-dropdown",
    ka = "//translate.google.com/toolkit/upload?",
    la = "/community/submit_answer?client=t",
    ma = "/translate/uc?ua=dcp&uav=",
    na = "/translate_a/sg?client=t&",
    oa = "/translate_a/single",
    qa = "</div>",
    ra = "</div></div>",
    sa = "</div></div></div>",
    ta = "</div></div></div></div>",
    ua = '</div><div class="cc-r"><div class="cc-lang">',
    va = '<div class="',
    wa = '<div class="cc-body"><div class="cc-content"><div class="cc-l"><div class="cc-lang">',
    xa = '<div class="gt-pb-lbl">',
    ya = '<div id="gt-community-card">',
    za = "Android",
    Aa = "BUTTON",
    Ba = "Component already rendered",
    k = "DIV",
    Ca = "Edge",
    Da = "IFRAME",
    Ea = "IMG",
    Fa = "INPUT",
    Ga = "Inconsistent use of percent/permill characters",
    Ha = "Macintosh",
    Ia = "Noto Naskh Arabic",
    Ja = "Opera",
    Ka = "POST",
    La = "SCRIPT",
    Ma = "SELECT",
    Na = "SPAN",
    Oa = "StartToEnd",
    Qa = "TEXTAREA",
    Sa = "Too many percent/permill",
    Ta = "Unable to set parent component",
    Ua = "Undefined parameter - ",
    Va = "Uneven number of arguments",
    Wa = "about:invalid#zClosurez",
    Xa =
        "absolute",
    Ya = "accumulate",
    n = "action",
    Za = "activedescendant",
    $a = "all",
    ab = "all|all",
    bb = "alt-edited",
    cb = "application/x-www-form-urlencoded",
    db = "aria-activedescendant",
    eb = "array",
    fb = "authuser",
    gb = "auto",
    hb = "beforehide",
    ib = "beforeshow",
    jb = "beforeunload",
    kb = "blur",
    lb = "border-box",
    mb = "business",
    nb = "button",
    ob = "cc-ctr",
    pb = "cc-input",
    qb = "cc-msg",
    rb = "change",
    sb = "character",
    tb = "checked",
    r = "click",
    ub = "client",
    vb = "collapse",
    wb = "community-promo",
    xb = "communitycard",
    yb = "complete",
    zb = "contextmenu",
    Ab = "copy",
    Bb = "data-tooltip",
    Cb = "data-tooltip-align",
    Db = "data-tooltip-contained",
    Eb = "data-tooltip-suspended",
    Fb = "default",
    Gb = "detectSrcUpdated",
    Hb = "direction",
    Ib = "direction: %s",
    Jb = "display:none",
    Kb = "earlycancel",
    Lb = "en",
    Mb = "en-us-t-k0-intl",
    Nb = "end",
    Ob = "finish",
    Qb = "focus",
    Rb = "focusin",
    Sb = "focusout",
    Tb = "fr-t-k0-und",
    Ub = "function",
    Vb = "goog-buttonset-default",
    Xb = "goog-flat-button",
    Yb = "goog-flat-menu-button",
    Zb = "goog-groupmenu-separator",
    $b = "goog-inline-block",
    ac = "goog-inline-block ",
    bc = "goog-menu",
    cc = "goog-menu-button",
    dc = "goog-menuheader",
    ec = "goog-menuitem-emphasize-highlight",
    fc = "goog-menuitem-group",
    gc = "goog-menuseparator",
    hc = "goog-option",
    ic = "goog-option-selected",
    jc = "gt-baf-back",
    kc = "gt-baf-cell",
    lc = "gt-baf-entry-clickable",
    mc = "gt-baf-hl",
    nc = "gt-baf-word-clickable",
    oc = "gt-br-logo-hidden",
    pc = "gt-br-logo-ltr",
    qc = "gt-br-logo-rtl",
    rc = "gt-br-logo-visible",
    sc = "gt-card-collapsed",
    tc = "gt-card-expand-wrapper",
    uc = "gt-card-expanded",
    vc = "gt-card-fadein-wrapper",
    wc = "gt-card-widen-wrapper",
    xc = "gt-cd-cl",
    yc = "gt-cd-pos",
    zc = "gt-input-tool",
    Ac =
        "gt-is-ld",
    Bc = "gt-related-suggest-message",
    Cc = "gt-res-edit",
    Dc = "gt-res-undo",
    Ec = "gt-spell-correct-message",
    Fc = "gt-src-tools",
    Gc = "gt-src-tools-l",
    Hc = "gt-syn-row",
    Ic = "gt-syn-summary-row",
    Jc = "haspopup",
    Kc = "height",
    Lc = "hi-t-k0-qwerty",
    Mc = "hidden",
    Nc = "hide",
    Oc = "highlight",
    Pc = "horizontal",
    Qc = "https://chekhov.withgoogle.com/?utm_source=other&utm_medium=gtranslate&utm_campaign=",
    Rc = "iPad",
    Sc = "iPod",
    Tc = "init",
    Vc = "input",
    Wc = "inputm",
    Xc = 'javascript:""',
    Yc = "javascript:void(0)",
    Zc = "jfk-bubble-arrow-id",
    $c = "jfk-bubble-closebtn-id",
    ad = "jfk-bubble-content-id",
    bd = "jfk-butterBar-shown",
    cd = "jfk-button-action",
    dd = "jfk-button-img",
    ed = "jfk-button-label",
    fd = "jfk-button-narrow",
    gd = "jfk-button-standard",
    hd = "jfk-checkbox-checkmark",
    id = "jfk-tooltip-hide",
    jd = "key",
    kd = "keydown",
    ld = "keypress",
    md = "keyup",
    nd = "label",
    od = "labelledby",
    pd = "languageSelected",
    qd = "latn-002-t-k0-und",
    rd = "left",
    sd = "ltr",
    td = "margin",
    ud = "margin-top",
    vd = "menuitem",
    wd = "mousedown",
    xd = "mousemove",
    yd = "mouseout",
    zd = "mouseover",
    Ad = "mouseup",
    Bd = "move_offscreen",
    Cd = "none",
    Dd = "number",
    Ed = "object",
    Fd = "opacity 1s linear",
    Gd = "orientationchange",
    Hd = "ovfl-xlt-arrow",
    Id = "paddingLeft",
    Jd = "paddingRight",
    Kd = "paste",
    Ld = "pbmUpdated",
    Md = "play",
    Nd = "position",
    Od = "px",
    Pd = "radix out of range: ",
    Qd = "res-translit",
    Rd = "resize",
    Sd = "result_box",
    Td = "right",
    Ud = "role",
    Vd = "rtl",
    t = "ru",
    Wd = "scroll",
    Xd = "select",
    Yd = "select_document",
    Zd = "selected",
    $d = "separator",
    ae = "set",
    be = "short_text",
    ce = "shortcut",
    de = "show",
    ee = "sound_error",
    fe = "sound_finished",
    ge = "sound_interrupted",
    he = "sound_play_start",
    ie = "source",
    je =
        "source_changed",
    ke = "spelling-correction",
    me = "src-translit",
    ne = "srcEmphasizeUpdated",
    oe = "srcLanguageUpdated",
    pe = "srcSuggestionUpdated",
    qe = "start",
    re = "staticSrcSuggestionUpdated",
    se = "staticTgtSuggestionUpdated",
    te = "stop_playlist",
    ue = "string",
    ve = "target",
    we = "textarea",
    xe = "textarea-placeholder-input",
    ye = "tgtEmphasizeUpdated",
    ze = "tgtLanguageUpdated",
    Ae = "tick",
    Be = "toggle_display",
    Ce = "touchend",
    De = "touchmove",
    Ee = "touchstart",
    Fe = "trans-listen-button",
    Ge = "trans-pb-button-saved",
    He = "trans-target-empty",
    Ie =
        "trans-target-highlight",
    Je = "trans-verified-button-large",
    Ke = "trans-verified-button-small",
    Le = "transition",
    Me = "translate",
    Ne = "translation_changed",
    Oe = "true",
    Pe = "unhighlight",
    Qe = "vertical",
    Re = "visibility",
    Se = "visible",
    Te = "yue-hant-t-i0-und",
    Ue = "zh-CN",
    Ve = "zh-TW",
    We = "zh-hant-t-i0-cangjie-1982",
    Xe = "zh-hant-t-i0-pinyin",
    Ye = "zh-hant-t-i0-und";

function Ze() {
    return function() {}
}

function $e(a) {
    return function(b) {
        this[a] = b
    }
}

function u(a) {
    return function() {
        return this[a]
    }
}

function v(a) {
    return function() {
        return a
    }
}
var w, af = typeof Object.defineProperties == Ub ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    bf = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
    cf = function() {
        cf = Ze();
        bf.Symbol || (bf.Symbol = df)
    },
    df = function() {
        var a = 0;
        return function(b) {
            return "jscomp_symbol_" + (b || "") + a++
        }
    }(),
    ff = function() {
        cf();
        var a = bf.Symbol.iterator;
        a || (a = bf.Symbol.iterator = bf.Symbol("iterator"));
        typeof Array.prototype[a] != Ub && af(Array.prototype,
            a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ef(this)
                }
            });
        ff = Ze()
    },
    ef = function(a) {
        var b = 0;
        return gf(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    },
    gf = function(a) {
        ff();
        a = {
            next: a
        };
        a[bf.Symbol.iterator] = function() {
            return this
        };
        return a
    },
    hf = function(a) {
        ff();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : ef(a)
    },
    jf = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    },
    kf = function(a) {
        if (a) {
            for (var b = bf, c = ["Number", "parseInt"], d = 0; d < c.length - 1; d++) {
                var e = c[d];
                e in
                b || (b[e] = {});
                b = b[e]
            }
            c = c[c.length - 1];
            d = b[c];
            a = a(d);
            a != d && null != a && af(b, c, {
                configurable: !0,
                writable: !0,
                value: a
            })
        }
    };
kf(function(a) {
    return a || parseInt
});
var lf = lf || {},
    x = this,
    y = function(a) {
        return void 0 !== a
    },
    mf = function(a) {
        return typeof a == ue
    },
    nf = function(a) {
        return typeof a == Dd
    },
    of = function(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && y(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    },
    pf = function(a, b) {
        a = a.split(".");
        b = b || x;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    },
    qf = Ze(),
    rf = function(a) {
        a.Eg = void 0;
        a.J = function() {
            return a.Eg ? a.Eg :
                a.Eg = new a
        }
    },
    sf = function(a) {
        var b = typeof a;
        if (b == Ed)
            if (a) {
                if (a instanceof Array) return eb;
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return Ed;
                if ("[object Array]" == c || typeof a.length == Dd && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return eb;
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return Ub
            } else return "null";
        else if (b == Ub && "undefined" == typeof a.call) return Ed;
        return b
    },
    tf = function(a) {
        return sf(a) == eb
    },
    uf = function(a) {
        var b = sf(a);
        return b == eb || b == Ed && typeof a.length == Dd
    },
    vf = function(a) {
        return sf(a) == Ub
    },
    wf = function(a) {
        var b = typeof a;
        return b == Ed && null != a || b == Ub
    },
    zf = function(a) {
        return a[xf] || (a[xf] = ++yf)
    },
    xf = "closure_uid_" + (1E9 * Math.random() >>> 0),
    yf = 0,
    Af = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    Bf = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments,
                2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    },
    z = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? z = Af : z = Bf;
        return z.apply(null, arguments)
    },
    Cf = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    },
    Df = Date.now || function() {
            return +new Date
        },
    A = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.w = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Pm = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
var Ef = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ef);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
A(Ef, Error);
Ef.prototype.name = "CustomError";
var Ff;
var Gf = function(a) {
        return a[a.length - 1]
    },
    Hf = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (mf(a)) return mf(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    C = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = mf(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    If = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a,
            b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = mf(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var l = f[g];
                b.call(void 0, l, g, a) && (d[e++] = l)
            }
        return d
    },
    Jf = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = mf(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    },
    Kf = Array.prototype.reduce ? function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c) {
        var d = c;
        C(a, function(c, f) {
            d = b.call(void 0, d, c,
                f, a)
        });
        return d
    },
    Lf = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = mf(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    },
    Mf = Array.prototype.every ? function(a, b) {
        return Array.prototype.every.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = mf(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    },
    Nf = function(a, b) {
        var c = 0;
        C(a, function(a, e, f) {
                b.call(void 0, a, e, f) && ++c
            },
            void 0);
        return c
    },
    Of = function(a, b) {
        a: {
            for (var c = a.length, d = mf(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : mf(a) ? a.charAt(b) : a[b]
    },
    Pf = function(a, b) {
        return 0 <= Hf(a, b)
    },
    Qf = function(a, b) {
        Pf(a, b) || a.push(b)
    },
    Sf = function(a, b) {
        b = Hf(a, b);
        var c;
        (c = 0 <= b) && Rf(a, b);
        return c
    },
    Rf = function(a, b) {
        Array.prototype.splice.call(a, b, 1)
    },
    Tf = function(a) {
        return Array.prototype.concat.apply([], arguments)
    },
    Uf = function(a) {
        return Array.prototype.concat.apply([], arguments)
    },
    Vf = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    },
    Wf = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (uf(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    },
    Yf = function(a, b, c, d) {
        Array.prototype.splice.apply(a, Xf(arguments, 1))
    },
    Xf = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    },
    Zf = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e =
                a[d++];
            var f = e;
            f = wf(f) ? "o" + zf(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    },
    ag = function(a, b) {
        if (!uf(a) || !uf(b) || a.length != b.length) return !1;
        for (var c = a.length, d = $f, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    },
    $f = function(a, b) {
        return a === b
    };
var bg = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    },
    cg = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    },
    dg = function(a) {
        return /^[\s\xa0]*$/.test(a)
    },
    eg = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n")
    },
    fg = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    },
    gg = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    hg = function(a) {
        return encodeURIComponent(String(a))
    },
    ig = function(a) {
        return decodeURIComponent(a.replace(/\+/g,
            " "))
    },
    jg = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "<br>")
    },
    sg = function(a) {
        if (!lg.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(mg, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ng, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(og, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(pg, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(qg, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(rg, "&#0;"));
        return a
    },
    mg = /&/g,
    ng = /</g,
    og = />/g,
    pg = /"/g,
    qg = /'/g,
    rg = /\x00/g,
    lg = /[\x00&<>"']/,
    vg = function(a) {
        return -1 != a.indexOf("&") ? "document" in
        x ? tg(a) : ug(a) : a
    },
    tg = function(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = x.document.createElement("div");
        return a.replace(wg, function(a, e) {
            var d = b[a];
            if (d) return d;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (d = String.fromCharCode(e)));
            d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = d
        })
    },
    ug = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" !=
                    c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
            }
        })
    },
    wg = /&([^;\s<&]+);?/g,
    xg = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    },
    yg = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    },
    zg = function(a) {
        return null == a ? "" : String(a)
    },
    Ag = function(a) {
        return Array.prototype.join.call(arguments, "")
    },
    Cg = function(a, b) {
        var c = 0;
        a = gg(String(a)).split(".");
        b = gg(String(b)).split(".");
        for (var d =
            Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Bg(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Bg(0 == f[2].length, 0 == g[2].length) || Bg(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    },
    Bg = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    },
    Dg = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    },
    Eg = function(a) {
        var b =
            mf(void 0) ? xg(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };
var Fg;
a: {
    var Gg = x.navigator;
    if (Gg) {
        var Hg = Gg.userAgent;
        if (Hg) {
            Fg = Hg;
            break a
        }
    }
    Fg = ""
}
var E = function(a) {
        return -1 != Fg.indexOf(a)
    },
    Ig = function(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
var Jg = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    },
    Kg = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    },
    Lg = function(a, b) {
        return null !== a && b in a
    },
    Ng = function() {
        var a = Mg,
            b;
        for (b in a) return !1;
        return !0
    },
    Og = function(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    },
    Pg = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    },
    Qg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    Rg = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Qg.length; f++) c = Qg[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    },
    Sg = function(a) {
        var b = arguments.length;
        if (1 == b && tf(arguments[0])) return Sg.apply(null, arguments[0]);
        if (b % 2) throw Error(Va);
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    },
    Tg = function(a) {
        var b = arguments.length;
        if (1 == b && tf(arguments[0])) return Tg.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
var Ug = function() {
        return E("Trident") || E("MSIE")
    },
    Vg = function() {
        return (E("Chrome") || E("CriOS")) && !E(Ca)
    },
    Wg = function() {
        function a(a) {
            a = Of(a, d);
            return c[a] || ""
        }
        var b = Fg;
        if (!Ug()) {
            b = Ig(b);
            var c = {};
            C(b, function(a) {
                c[a[0]] = a[1]
            });
            var d = Cf(Lg, c);
            E(Ja) ? a(["Version", Ja]) : E(Ca) ? a([Ca]) : Vg() && a(["Chrome", "CriOS"])
        }
    };
var Xg = function() {
        return E("iPhone") && !E(Sc) && !E(Rc)
    },
    Yg = function() {
        return Xg() || E(Rc) || E(Sc)
    };
var Zg = function(a) {
    Zg[" "](a);
    return a
};
Zg[" "] = qf;
var $g = function(a, b) {
        try {
            return Zg(a[b]), !0
        } catch (c) {}
        return !1
    },
    bh = function(a, b) {
        var c = ah;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
var ch = E(Ja),
    F = Ug(),
    dh = E(Ca),
    eh = dh || F,
    fh = E("Gecko") && !(-1 != Fg.toLowerCase().indexOf("webkit") && !E(Ca)) && !(E("Trident") || E("MSIE")) && !E(Ca),
    gh = -1 != Fg.toLowerCase().indexOf("webkit") && !E(Ca),
    hh = gh && E("Mobile"),
    jh = E(Ha),
    kh = E("Windows"),
    lh = E(za),
    mh = Xg(),
    nh = E(Rc),
    oh = E(Sc),
    ph = Yg(),
    qh = function() {
        var a = x.document;
        return a ? a.documentMode : void 0
    },
    rh;
a: {
    var sh = "",
        th = function() {
            var a = Fg;
            if (fh) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (dh) return /Edge\/([\d\.]+)/.exec(a);
            if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (gh) return /WebKit\/(\S+)/.exec(a);
            if (ch) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
    th && (sh = th ? th[1] : "");
    if (F) {
        var uh = qh();
        if (null != uh && uh > parseFloat(sh)) {
            rh = String(uh);
            break a
        }
    }
    rh = sh
}
var vh = rh,
    ah = {},
    wh = function(a) {
        return bh(a, function() {
            return 0 <= Cg(vh, a)
        })
    },
    yh = function(a) {
        return Number(xh) >= a
    },
    zh;
var Ah = x.document;
zh = Ah && F ? qh() || ("CSS1Compat" == Ah.compatMode ? parseInt(vh, 10) : 5) : void 0;
var xh = zh;
var Bh = E("Firefox"),
    Ch = Xg() || E(Sc),
    Dh = E(Rc),
    Eh = E(za) && !(Vg() || E("Firefox") || E(Ja) || E("Silk")),
    Fh = Vg(),
    Gh = E("Safari") && !(Vg() || E("Coast") || E(Ja) || E(Ca) || E("Silk") || E(za)) && !Yg();
var Hh = null,
    Ih = null,
    Jh = function(a, b) {
        uf(a);
        if (!Hh) {
            Hh = {};
            Ih = {};
            for (var c = 0; 65 > c; c++) Hh[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Ih[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        b = b ? Ih : Hh;
        c = [];
        for (var d = 0; d < a.length; d += 3) {
            var e = a[d],
                f = d + 1 < a.length,
                g = f ? a[d + 1] : 0,
                l = d + 2 < a.length,
                m = l ? a[d + 2] : 0,
                p = e >> 2;
            e = (e & 3) << 4 | g >> 4;
            g = (g & 15) << 2 | m >> 6;
            m &= 63;
            l || (m = 64, f || (g = 64));
            c.push(b[p], b[e], b[g], b[m])
        }
        return c.join("")
    };
var Kh = Ze(),
    Lh = typeof Uint8Array == Ub,
    Oh = function(a, b, c, d) {
        a.a = null;
        b || (b = []);
        a.m = void 0;
        a.j = -1;
        a.b = b;
        a: {
            if (a.b.length) {
                b = a.b.length - 1;
                var e = a.b[b];
                if (e && typeof e == Ed && !tf(e) && !(Lh && e instanceof Uint8Array)) {
                    a.g = b - a.j;
                    a.c = e;
                    break a
                }
            } - 1 < c ? (a.g = c, a.c = null) : a.g = Number.MAX_VALUE
        }
        a.o = {};
        if (d)
            for (c = 0; c < d.length; c++) b = d[c], b < a.g ? (b += a.j, a.b[b] = a.b[b] || Mh) : (Nh(a), a.c[b] = a.c[b] || Mh)
    },
    Mh = [],
    Nh = function(a) {
        var b = a.g + a.j;
        a.b[b] || (a.c = a.b[b] = {})
    },
    Ph = function(a, b) {
        if (b < a.g) {
            b += a.j;
            var c = a.b[b];
            return c === Mh ? a.b[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === Mh ? a.c[b] = [] : c
    },
    Qh = function(a, b) {
        if (b < a.g) {
            b += a.j;
            var c = a.b[b];
            return c === Mh ? a.b[b] = [] : c
        }
        c = a.c[b];
        return c === Mh ? a.c[b] = [] : c
    },
    Rh = function(a, b) {
        a = Ph(a, 1);
        return null == a ? b : a
    },
    G = function(a, b, c) {
        b < a.g ? a.b[b + a.j] = c : (Nh(a), a.c[b] = c)
    },
    Sh = function(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            for (var d = Qh(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.a[c] = e
        }
    },
    Th = function(a, b, c) {
        a.a || (a.a = {});
        var d = c ? c.nb() : c;
        a.a[b] = c;
        G(a, b, d)
    },
    Uh = function(a, b, c) {
        a.a || (a.a = {});
        c = c || [];
        for (var d = [], e = 0; e <
        c.length; e++) d[e] = c[e].nb();
        a.a[b] = c;
        G(a, b, d)
    },
    Vh = function(a, b, c) {
        Sh(a, c, b);
        var d = a.a[b];
        d || (d = a.a[b] = []);
        c = new c;
        a = Qh(a, b);
        d.push(c);
        a.push(c.nb());
        return c
    },
    Wh = function(a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if (tf(c))
                    for (var d = 0; d < c.length; d++) c[d] && c[d].nb();
                else c && c.nb()
            }
    };
Kh.prototype.nb = function() {
    Wh(this);
    return this.b
};
Kh.prototype.cd = Lh ? function() {
    var a = Uint8Array.prototype.toJSON;
    Uint8Array.prototype.toJSON = function() {
        return Jh(this)
    };
    try {
        return JSON.stringify(this.b && this.nb(), Xh)
    } finally {
        Uint8Array.prototype.toJSON = a
    }
} : function() {
    return JSON.stringify(this.b && this.nb(), Xh)
};
var Xh = function(a, b) {
    return nf(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
};
Kh.prototype.toString = function() {
    Wh(this);
    return this.b.toString()
};
var Zh = function(a) {
        var b = Yh;
        if (a.c) {
            a.a || (a.a = {});
            var c = b.b;
            if (b.c) {
                if (b.a) return a.a[c] || (a.a[c] = Jf(a.c[c] || [], function(a) {
                    return new b.a(a)
                })), a.a[c]
            } else if (b.a) return !a.a[c] && a.c[c] && (a.a[c] = new b.a(a.c[c])), a.a[c];
            return a.c[c]
        }
    },
    ai = function(a) {
        return new a.constructor($h(a.nb()))
    },
    $h = function(a) {
        if (tf(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = typeof d == Ed ? $h(d) : d)
            }
            return b
        }
        if (Lh && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null !=
        d && (b[c] = typeof d == Ed ? $h(d) : d);
        return b
    };
var bi = function(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a) throw Error("Invalid URI scheme in origin");
    c = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d +
            1);
        b = b.substring(0, d);
        if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
    }
    return a + "://" + b + c
};
var ci = {
    ascii_tlds: ["aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics",
        "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", gb, "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva",
        "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "boots", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti",
        "build", "builders", mb, "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "chrysler", "church",
        "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", r, "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket",
        "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv", "dubai", "duck",
        "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "etisalat", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero",
        "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gb", "gbiz",
        "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodhands", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank",
        "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute",
        "insurance", "insure", "int", "intel", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln",
        "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "loan", "loans", "locker",
        "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "merckmsd", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk",
        "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk",
        "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet",
        "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", Md, "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest",
        "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", t, "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung",
        "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", Xd, "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", de, "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin",
        "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "sport", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec",
        "systems", "sz", "tab", "taipei", "talk", "taobao", ve, "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel",
        "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vista", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos",
        "wales", "walmart", "walter", "wang", "wanggou", "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "xn--11b4c3d", "xn--1ck2e1b", "xn--1qqw23a", "xn--2scrj9c", "xn--30rr7y", "xn--3bst00m", "xn--3ds443g", "xn--3e0b707e", "xn--3hcrj9c", "xn--3oq18vl8pn36a", "xn--3pxu8k",
        "xn--42c2d9a", "xn--45br5cyl", "xn--45brj9c", "xn--45q11c", "xn--4gbrim", "xn--54b7fta0cc", "xn--55qw42g", "xn--55qx5d", "xn--5su34j936bgsg", "xn--5tzm5g", "xn--6frz82g", "xn--6qq986b3xl", "xn--80adxhks", "xn--80ao21a", "xn--80aqecdr1a", "xn--80asehdb", "xn--80aswg", "xn--8y0a063a", "xn--90a3ac", "xn--90ae", "xn--90ais", "xn--9dbq2a", "xn--9et52u", "xn--9krt00a", "xn--b4w605ferd", "xn--bck1b9a5dre4c", "xn--c1avg", "xn--c2br7g", "xn--cck2b3b", "xn--cg4bki", "xn--clchc0ea0b2g2a9gcd", "xn--czr694b", "xn--czrs0t", "xn--czru2d", "xn--d1acj3b",
        "xn--d1alf", "xn--e1a4c", "xn--eckvdtc9d", "xn--efvy88h", "xn--estv75g", "xn--fct429k", "xn--fhbei", "xn--fiq228c5hs", "xn--fiq64b", "xn--fiqs8s", "xn--fiqz9s", "xn--fjq720a", "xn--flw351e", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--fzys8d69uvgm", "xn--g2xx48c", "xn--gckr3f0f", "xn--gecrj9c", "xn--gk3at1e", "xn--h2breg3eve", "xn--h2brj9c", "xn--h2brj9c8c", "xn--hxt814e", "xn--i1b6b1a6a2e", "xn--imr513n", "xn--io0a7i", "xn--j1aef", "xn--j1amh", "xn--j6w193g", "xn--jlq61u9w7b", "xn--jvr189m", "xn--kcrx77d1x4a", "xn--kprw13d", "xn--kpry57d",
        "xn--kpu716f", "xn--kput3i", "xn--l1acc", "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a3ejt", "xn--mgba3a4f16a", "xn--mgba7c0bbn0a", "xn--mgbaakc7dvf", "xn--mgbaam7a8h", "xn--mgbab2bd", "xn--mgbai9azgqp6j", "xn--mgbayh7gpa", "xn--mgbb9fbpob", "xn--mgbbh1a", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgbca7dzdo", "xn--mgberp4a5d4ar", "xn--mgbgu82a", "xn--mgbi4ecexp", "xn--mgbpl2fh", "xn--mgbt3dhd", "xn--mgbtx2b", "xn--mgbx4cd0ab", "xn--mix891f", "xn--mk1bu44c", "xn--mxtq1m", "xn--ngbc5azd", "xn--ngbe9e0a", "xn--ngbrx", "xn--node",
        "xn--nqv7f", "xn--nqv7fs00ema", "xn--nyqy26a", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1acf", "xn--p1ai", "xn--pbt977c", "xn--pgbs0dh", "xn--pssy2u", "xn--q9jyb4c", "xn--qcka1pmc", "xn--qxam", "xn--rhqv96g", "xn--rovu88b", "xn--rvc1e0am3e", "xn--s9brj9c", "xn--ses554g", "xn--t60b56a", "xn--tckwe", "xn--tiq49xqyj", "xn--unup4y", "xn--vermgensberater-ctb", "xn--vermgensberatung-pwb", "xn--vhquv", "xn--vuq861b", "xn--w4r85el8fhu5dnra", "xn--w4rs40l", "xn--wgbh1c", "xn--wgbl6a", "xn--xhq521b", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--y9a3aq",
        "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zfr164b", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"
    ],
    unicode_tlds: "\u0915\u0949\u092e \u30bb\u30fc\u30eb \u4f5b\u5c71 \u0cad\u0cbe\u0cb0\u0ca4 \u6148\u5584 \u96c6\u56e2 \u5728\u7ebf \ud55c\uad6d \u0b2d\u0b3e\u0b30\u0b24 \u5927\u4f17\u6c7d\u8f66 \u70b9\u770b \u0e04\u0e2d\u0e21 \u09ad\u09be\u09f0\u09a4 \u09ad\u09be\u09b0\u09a4 \u516b\u5366 \u0645\u0648\u0642\u0639 \u09ac\u09be\u0982\u09b2\u09be \u516c\u76ca \u516c\u53f8 \u9999\u683c\u91cc\u62c9 \u7f51\u7ad9 \u79fb\u52a8 \u6211\u7231\u4f60 \u043c\u043e\u0441\u043a\u0432\u0430 \u049b\u0430\u0437 \u043a\u0430\u0442\u043e\u043b\u0438\u043a \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0430\u0439\u0442 \u8054\u901a \u0441\u0440\u0431 \u0431\u0433 \u0431\u0435\u043b \u05e7\u05d5\u05dd \u65f6\u5c1a \u5fae\u535a \u6de1\u9a6c\u9521 \u30d5\u30a1\u30c3\u30b7\u30e7\u30f3 \u043e\u0440\u0433 \u0928\u0947\u091f \u30b9\u30c8\u30a2 \uc0bc\uc131 \u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u5546\u6807 \u5546\u5e97 \u5546\u57ce \u0434\u0435\u0442\u0438 \u043c\u043a\u0434 \u0435\u044e \u30dd\u30a4\u30f3\u30c8 \u65b0\u95fb \u5de5\u884c \u5bb6\u96fb \u0643\u0648\u0645 \u4e2d\u6587\u7f51 \u4e2d\u4fe1 \u4e2d\u56fd \u4e2d\u570b \u5a31\u4e50 \u8c37\u6b4c \u0c2d\u0c3e\u0c30\u0c24\u0c4d \u0dbd\u0d82\u0d9a\u0dcf \u96fb\u8a0a\u76c8\u79d1 \u8d2d\u7269 \u30af\u30e9\u30a6\u30c9 \u0aad\u0abe\u0ab0\u0aa4 \u901a\u8ca9 \u092d\u093e\u0930\u0924\u092e\u094d \u092d\u093e\u0930\u0924 \u092d\u093e\u0930\u094b\u0924 \u7f51\u5e97 \u0938\u0902\u0917\u0920\u0928 \u9910\u5385 \u7f51\u7edc \u043a\u043e\u043c \u0443\u043a\u0440 \u9999\u6e2f \u8bfa\u57fa\u4e9a \u98df\u54c1 \u98de\u5229\u6d66 \u53f0\u6e7e \u53f0\u7063 \u624b\u8868 \u624b\u673a \u043c\u043e\u043d \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u0639\u0645\u0627\u0646 \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u06cc\u0631\u0627\u0646 \u0627\u0644\u0639\u0644\u064a\u0627\u0646 \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0645\u0627\u0631\u0627\u062a \u0628\u0627\u0632\u0627\u0631 \u067e\u0627\u06a9\u0633\u062a\u0627\u0646 \u0627\u0644\u0627\u0631\u062f\u0646 \u0645\u0648\u0628\u0627\u064a\u0644\u064a \u0628\u0627\u0631\u062a \u0628\u06be\u0627\u0631\u062a \u0627\u0644\u0645\u063a\u0631\u0628 \u0627\u0628\u0648\u0638\u0628\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0680\u0627\u0631\u062a \u0643\u0627\u062b\u0648\u0644\u064a\u0643 \u0633\u0648\u062f\u0627\u0646 \u0647\u0645\u0631\u0627\u0647 \u0639\u0631\u0627\u0642 \u0645\u0644\u064a\u0633\u064a\u0627 \u6fb3\u9580 \ub2f7\ucef4 \u653f\u5e9c \u0634\u0628\u0643\u0629 \u0628\u064a\u062a\u0643 \u0639\u0631\u0628 \u10d2\u10d4 \u673a\u6784 \u7ec4\u7ec7\u673a\u6784 \u5065\u5eb7 \u0e44\u0e17\u0e22 \u0633\u0648\u0631\u064a\u0629 \u0440\u0443\u0441 \u0440\u0444 \u73e0\u5b9d \u062a\u0648\u0646\u0633 \u5927\u62ff \u307f\u3093\u306a \u30b0\u30fc\u30b0\u30eb \u03b5\u03bb \u4e16\u754c \u66f8\u7c4d \u0d2d\u0d3e\u0d30\u0d24\u0d02 \u0a2d\u0a3e\u0a30\u0a24 \u7f51\u5740 \ub2f7\ub137 \u30b3\u30e0 \u5929\u4e3b\u6559 \u6e38\u620f verm\u00f6gensberater verm\u00f6gensberatung \u4f01\u4e1a \u4fe1\u606f \u5609\u91cc\u5927\u9152\u5e97 \u5609\u91cc \u0645\u0635\u0631 \u0642\u0637\u0631 \u5e7f\u4e1c \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe \u0570\u0561\u0575 \u65b0\u52a0\u5761 \u0641\u0644\u0633\u0637\u064a\u0646 \u653f\u52a1".split(" ")
};
var li = function(a) {
        this.b = !1;
        this.a = [];
        this.c = {};
        for (var b = 0; b < H(a, 1); b++) {
            var c = new di(ei(a, 1, b)),
                d = I(c, 0),
                e = "";
            fi(c, 3) && (e = I(c, 3));
            d in this.c ? d = this.c[d] : (c = new gi(d, e), this.c[d] = c, this.a.push(c), d = c);
            for (c = 0; c < (new di(ei(a, 1, b))).a(); c++) {
                var f = (new di(ei(a, 1, b))).b(c);
                e = f;
                e = 0 == H(e, 2) ? -zf(e) : hi(e, 2, 0);
                var g = d;
                if (e in g.b) e = g.b[e];
                else {
                    var l = new ii;
                    g.b[e] = l;
                    g.a.push(l);
                    e = l
                }
                g = I(f, 0);
                l = I(f, 4);
                var m = fi(f, 3) ? ji(f, 3) : -1;
                var p = [];
                for (var q = 0; q < H(f, 1); q++) p.push(hi(f, 1, q));
                f = e;
                g in f.b || (l = new ki(g, l,
                    m, p), f.b[g] = l, f.a.push(l));
                this.b |= 1 < e.a.length
            }
        }
    },
    mi = function(a) {
        for (var b = 0, c = 0; c < a.a.length; c++) {
            for (var d = a.a[c], e = 0, f = 0; f < d.a.length; f++) e += d.a[f].a.length;
            b += e
        }
        for (d = c = 0; d < a.a.length; d++) {
            e = a.a[d];
            for (var g = f = 0; g < e.a.length; g++) {
                for (var l = e.a[g], m = 0, p = 0; p < l.a.length; p++) m += l.a[p].b ? 1 : 0;
                f += m
            }
            c += f
        }
        return b - c
    },
    ni = function(a) {
        for (var b = [], c = 0; c < a.a.length; c++)
            for (var d = 0; d < a.a[c].a.length; d++) Array.prototype.push.apply(b, a.a[c].a[d].a);
        return b
    },
    oi = function(a) {
        for (var b = 0; b < a.a.length; b++)
            for (var c =
                0; c < a.a[b].a.length; c++) a.a[b].a[c].a.sort(function(a, b) {
                return b.a - a.a
            })
    },
    gi = function(a, b) {
        this.g = a;
        this.c = b;
        this.a = [];
        this.b = {}
    },
    qi = function(a) {
        for (var b = 0; b < a.a.length; b++)
            if (pi(a.a[b])) return !0;
        return !1
    },
    ii = function() {
        this.a = [];
        this.b = {}
    },
    pi = function(a) {
        for (var b = 0; b < a.a.length; b++)
            if (a.a[b].b) return !0;
        return !1
    },
    ki = function(a, b, c, d) {
        this.text = a;
        this.g = b;
        this.a = c;
        this.j = d;
        this.b = !1;
        this.c = 0
    };
var ri = !F || yh(9),
    si = !F || yh(9),
    ti = F && !wh("9"),
    ui = function() {
        if (!x.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        x.addEventListener("test", qf, b);
        x.removeEventListener("test", qf, b);
        return a
    }();
var vi = function() {
    this.hc = this.hc;
    this.ob = this.ob
};
vi.prototype.hc = !1;
vi.prototype.Ba = function() {
    this.hc || (this.hc = !0, this.N())
};
var xi = function(a, b) {
    b = Cf(wi, b);
    a.hc ? y(void 0) ? b.call(void 0) : b() : (a.ob || (a.ob = []), a.ob.push(y(void 0) ? z(b, void 0) : b))
};
vi.prototype.N = function() {
    if (this.ob)
        for (; this.ob.length;) this.ob.shift()()
};
var wi = function(a) {
    a && typeof a.Ba == Ub && a.Ba()
};
var yi = $e("id");
yi.prototype.toString = u("id");
var J = function(a, b) {
    this.type = a instanceof yi ? String(a) : a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.ad = !1;
    this.Li = !0
};
J.prototype.stopPropagation = function() {
    this.ad = !0
};
J.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.Li = !1
};
var Ai = function(a, b) {
    J.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.Sg = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.a = null;
    if (a) {
        var c = this.type = a.type,
            d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? fh && ($g(b, "nodeName") || (b = null)):
            c == zd ? b = a.fromElement : c == yd && (b = a.toElement);
        this.relatedTarget = b;
        null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey =
            a.shiftKey;
        this.metaKey = a.metaKey;
        this.Sg = jh ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = mf(a.pointerType) ? a.pointerType : zi[a.pointerType] || "";
        this.state = a.state;
        this.a = a;
        a.defaultPrevented && this.preventDefault()
    }
};
A(Ai, J);
var Bi = [1, 4, 2],
    zi = {
        2: "touch",
        3: "pen",
        4: "mouse"
    },
    Ci = function(a) {
        return (ri ? 0 == a.a.button : a.type == r ? !0 : !!(a.a.button & Bi[0])) && !(gh && jh && a.ctrlKey)
    };
Ai.prototype.stopPropagation = function() {
    Ai.w.stopPropagation.call(this);
    this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
};
Ai.prototype.preventDefault = function() {
    Ai.w.preventDefault.call(this);
    var a = this.a;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, ti) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Di = "closure_listenable_" + (1E6 * Math.random() | 0),
    Ei = function(a) {
        return !(!a || !a[Di])
    },
    Fi = 0;
var Gi = function(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.df = e;
        this.key = ++Fi;
        this.yd = this.ye = !1
    },
    Hi = function(a) {
        a.yd = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.df = null
    };
var Ii = function(a) {
    this.src = a;
    this.a = {};
    this.b = 0
};
Ii.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = Ji(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ye = !1)) : (b = new Gi(b, this.src, f, !!d, e), b.ye = c, a.push(b));
    return b
};
var Ki = function(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = Sf(a.a[c], b);
        d && (Hi(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    },
    Li = function(a, b) {
        b = b && b.toString();
        var c = 0,
            d;
        for (d in a.a)
            if (!b || d == b) {
                for (var e = a.a[d], f = 0; f < e.length; f++) ++c, Hi(e[f]);
                delete a.a[d];
                a.b--
            }
        return c
    };
Ii.prototype.Ge = function(a, b) {
    a = this.a[a.toString()];
    var c = [];
    if (a)
        for (var d = 0; d < a.length; ++d) {
            var e = a[d];
            e.capture == b && c.push(e)
        }
    return c
};
Ii.prototype.Kd = function(a, b, c, d) {
    a = this.a[a.toString()];
    var e = -1;
    a && (e = Ji(a, b, c, d));
    return -1 < e ? a[e] : null
};
Ii.prototype.hasListener = function(a, b) {
    var c = y(a),
        d = c ? a.toString() : "",
        e = y(b);
    return Kg(this.a, function(a) {
        for (var f = 0; f < a.length; ++f)
            if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
        return !1
    })
};
var Ji = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.yd && f.listener == b && f.capture == !!c && f.df == d) return e
    }
    return -1
};
var Mi = "closure_lm_" + (1E6 * Math.random() | 0),
    Ni = {},
    Oi = 0,
    L = function(a, b, c, d, e) {
        if (d && d.once) return Pi(a, b, c, d, e);
        if (tf(b)) {
            for (var f = 0; f < b.length; f++) L(a, b[f], c, d, e);
            return null
        }
        c = Qi(c);
        return Ei(a) ? a.G(b, c, wf(d) ? !!d.capture : !!d, e) : Ri(a, b, c, !1, d, e)
    },
    Ri = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = wf(e) ? !!e.capture : !!e,
            l = Si(a);
        l || (a[Mi] = l = new Ii(a));
        c = l.add(b, c, d, g, f);
        if (c.a) return c;
        d = Ti();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) ui || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
            d, e);
        else if (a.attachEvent) a.attachEvent(Ui(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Oi++;
        return c
    },
    Ti = function() {
        var a = Vi,
            b = si ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    },
    Pi = function(a, b, c, d, e) {
        if (tf(b)) {
            for (var f = 0; f < b.length; f++) Pi(a, b[f], c, d, e);
            return null
        }
        c = Qi(c);
        return Ei(a) ? a.Kg(b, c, wf(d) ? !!d.capture : !!d, e) : Ri(a, b, c, !0,
            d, e)
    },
    Wi = function(a, b, c, d, e) {
        if (tf(b))
            for (var f = 0; f < b.length; f++) Wi(a, b[f], c, d, e);
        else d = wf(d) ? !!d.capture : !!d, c = Qi(c), Ei(a) ? a.Aa(b, c, d, e) : a && (a = Si(a)) && (b = a.Kd(b, c, d, e)) && Xi(b)
    },
    Xi = function(a) {
        if (nf(a) || !a || a.yd) return !1;
        var b = a.src;
        if (Ei(b)) return Ki(b.ub, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ui(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Oi--;
        (c = Si(b)) ? (Ki(c, a), 0 == c.b && (c.src = null, b[Mi] = null)) : Hi(a);
        return !0
    },
    Yi = function(a, b) {
        if (!a) return 0;
        if (Ei(a)) return a.ub ? Li(a.ub, b) : 0;
        a = Si(a);
        if (!a) return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a)
            if (!b || d == b)
                for (var e = a.a[d].concat(), f = 0; f < e.length; ++f) Xi(e[f]) && ++c;
        return c
    },
    Ui = function(a) {
        return a in Ni ? Ni[a] : Ni[a] = "on" + a
    },
    $i = function(a, b, c, d) {
        var e = !0;
        if (a = Si(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.yd && (f = Zi(f, d), e = e && !1 !== f)
                }
        return e
    },
    Zi = function(a, b) {
        var c = a.listener,
            d = a.df || a.src;
        a.ye && Xi(a);
        return c.call(d,
            b)
    },
    Vi = function(a, b) {
        if (a.yd) return !0;
        if (!si) {
            var c = b || pf("window.event");
            b = new Ai(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.currentTarget; e; e = e.parentNode) c.push(e);a = a.type;
                for (e = c.length - 1; !b.ad && 0 <= e; e--) {
                    b.currentTarget = c[e];
                    var f = $i(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.ad && e < c.length; e++) b.currentTarget = c[e],
                    f = $i(c[e], a, !1, b),
                    d = d && f
            }
            return d
        }
        return Zi(a, new Ai(b,
            this))
    },
    Si = function(a) {
        a = a[Mi];
        return a instanceof Ii ? a : null
    },
    aj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    Qi = function(a) {
        if (vf(a)) return a;
        a[aj] || (a[aj] = function(b) {
            return a.handleEvent(b)
        });
        return a[aj]
    };
var M = function() {
    vi.call(this);
    this.ub = new Ii(this);
    this.Kj = this;
    this.Qg = null
};
A(M, vi);
M.prototype[Di] = !0;
w = M.prototype;
w.He = u("Qg");
w.Ad = $e("Qg");
w.addEventListener = function(a, b, c, d) {
    L(this, a, b, c, d)
};
w.removeEventListener = function(a, b, c, d) {
    Wi(this, a, b, c, d)
};
w.dispatchEvent = function(a) {
    var b = this.He();
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.He()) c.push(b), ++d
    }
    b = this.Kj;
    d = a.type || a;
    if (mf(a)) a = new J(a, b);
    else if (a instanceof J) a.target = a.target || b;
    else {
        var e = a;
        a = new J(d, b);
        Rg(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.ad && 0 <= f; f--) {
            var g = a.currentTarget = c[f];
            e = bj(g, d, !0, a) && e
        }
    a.ad || (g = a.currentTarget = b, e = bj(g, d, !0, a) && e, a.ad || (e = bj(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.ad && f < c.length; f++) g = a.currentTarget = c[f], e = bj(g, d, !1, a) && e;
    return e
};
w.N = function() {
    M.w.N.call(this);
    this.ub && Li(this.ub, void 0);
    this.Qg = null
};
w.G = function(a, b, c, d) {
    return this.ub.add(String(a), b, !1, c, d)
};
w.Kg = function(a, b, c, d) {
    return this.ub.add(String(a), b, !0, c, d)
};
w.Aa = function(a, b, c, d) {
    var e = this.ub;
    a = String(a).toString();
    if (a in e.a) {
        var f = e.a[a];
        b = Ji(f, b, c, d); - 1 < b ? (Hi(f[b]), Rf(f, b), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
    } else e = !1;
    return e
};
var bj = function(a, b, c, d) {
    b = a.ub.a[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.yd && g.capture == c) {
            var l = g.listener,
                m = g.df || g.src;
            g.ye && Ki(a.ub, g);
            e = !1 !== l.call(m, d) && e
        }
    }
    return e && 0 != d.Li
};
M.prototype.Ge = function(a, b) {
    return this.ub.Ge(String(a), b)
};
M.prototype.Kd = function(a, b, c, d) {
    return this.ub.Kd(String(a), b, c, d)
};
M.prototype.hasListener = function(a, b) {
    return this.ub.hasListener(y(a) ? String(a) : void 0, b)
};
var cj = function(a, b) {
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null
};
cj.prototype.get = function() {
    if (0 < this.b) {
        this.b--;
        var a = this.a;
        this.a = a.next;
        a.next = null
    } else a = this.c();
    return a
};
var dj = function(a, b) {
    a.g(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b)
};
var ej = function(a) {
    var b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
};
var fj = function(a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    },
    gj, hj = function() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
            var a = document.createElement(Da);
            a.style.display = Cd;
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = z(function(a) {
                if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !Ug()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (y(c.next)) {
                    c = c.next;
                    var a = c.yh;
                    c.yh = null;
                    a()
                }
            };
            return function(a) {
                d.next = {
                    yh: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(La) ? function(a) {
            var b = document.createElement(La);
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function(a) {
            x.setTimeout(a, 0)
        }
    };
var ij = function() {
        this.b = this.a = null
    },
    kj = new cj(function() {
        return new jj
    }, function(a) {
        a.reset()
    });
ij.prototype.add = function(a, b) {
    var c = kj.get();
    c.set(a, b);
    this.b ? this.b.next = c : this.a = c;
    this.b = c
};
var mj = function() {
        var a = lj,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b
    },
    jj = function() {
        this.next = this.a = this.jc = null
    };
jj.prototype.set = function(a, b) {
    this.jc = a;
    this.a = b;
    this.next = null
};
jj.prototype.reset = function() {
    this.next = this.a = this.jc = null
};
var qj = function(a, b) {
        nj || oj();
        pj || (nj(), pj = !0);
        lj.add(a, b)
    },
    nj, oj = function() {
        if (-1 != String(x.Promise).indexOf("[native code]")) {
            var a = x.Promise.resolve(void 0);
            nj = function() {
                a.then(rj)
            }
        } else nj = function() {
            var a = rj;
            !vf(x.setImmediate) || x.Window && x.Window.prototype && !E(Ca) && x.Window.prototype.setImmediate == x.setImmediate ? (gj || (gj = hj()), gj(a)) : x.setImmediate(a)
        }
    },
    pj = !1,
    lj = new ij,
    rj = function() {
        for (var a; a = mj();) {
            try {
                a.jc.call(a.a)
            } catch (b) {
                fj(b)
            }
            dj(kj, a)
        }
        pj = !1
    };
var sj = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    },
    tj = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
var vj = function(a, b) {
        this.a = 0;
        this.m = void 0;
        this.g = this.b = this.c = null;
        this.j = this.o = !1;
        if (a != qf) try {
            var c = this;
            a.call(b, function(a) {
                uj(c, 2, a)
            }, function(a) {
                uj(c, 3, a)
            })
        } catch (d) {
            uj(this, 3, d)
        }
    },
    wj = function() {
        this.next = this.context = this.b = this.c = this.a = null;
        this.g = !1
    };
wj.prototype.reset = function() {
    this.context = this.b = this.c = this.a = null;
    this.g = !1
};
var xj = new cj(function() {
        return new wj
    }, function(a) {
        a.reset()
    }),
    yj = function(a, b, c) {
        var d = xj.get();
        d.c = a;
        d.b = b;
        d.context = c;
        return d
    };
vj.prototype.then = function(a, b, c) {
    return zj(this, vf(a) ? a : null, vf(b) ? b : null, c)
};
sj(vj);
vj.prototype.cancel = function(a) {
    0 == this.a && qj(function() {
        var b = new Aj(a);
        Bj(this, b)
    }, this)
};
var Bj = function(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.a && 1 == d ? Bj(c, b) : (f ? (d = f, d.next == c.g && (c.g = d), d.next = d.next.next) : Cj(c), Dj(c, e, 3, b)))
                }
                a.c = null
            } else uj(a, 3, b)
    },
    Fj = function(a, b) {
        a.b || 2 != a.a && 3 != a.a || Ej(a);
        a.g ? a.g.next = b : a.b = b;
        a.g = b
    },
    zj = function(a, b, c, d) {
        var e = yj(null, null, null);
        e.a = new vj(function(a, g) {
            e.c = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (p) {
                    g(p)
                }
            } : a;
            e.b = c ? function(b) {
                try {
                    var e = c.call(d,
                        b);
                    !y(e) && b instanceof Aj ? g(b) : a(e)
                } catch (p) {
                    g(p)
                }
            } : g
        });
        e.a.c = a;
        Fj(a, e);
        return e.a
    };
vj.prototype.C = function(a) {
    this.a = 0;
    uj(this, 2, a)
};
vj.prototype.A = function(a) {
    this.a = 0;
    uj(this, 3, a)
};
var uj = function(a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            a: {
                var d = c,
                    e = a.C,
                    f = a.A;
                if (d instanceof vj) {
                    Fj(d, yj(e || qf, f || null, a));
                    var g = !0
                } else if (tj(d)) d.then(e, f, a), g = !0;
                else {
                    if (wf(d)) try {
                        var l = d.then;
                        if (vf(l)) {
                            Gj(d, l, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (m) {
                        f.call(a, m);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
            g || (a.m = c, a.a = b, a.c = null, Ej(a), 3 != b || c instanceof Aj || Hj(a, c))
        }
    },
    Gj = function(a, b, c, d, e) {
        var f = !1,
            g = function(a) {
                f || (f = !0, c.call(e, a))
            },
            l = function(a) {
                f || (f = !0, d.call(e, a))
            };
        try {
            b.call(a,
                g, l)
        } catch (m) {
            l(m)
        }
    },
    Ej = function(a) {
        a.o || (a.o = !0, qj(a.v, a))
    },
    Cj = function(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.g = null);
        return b
    };
vj.prototype.v = function() {
    for (var a; a = Cj(this);) Dj(this, a, this.a, this.m);
    this.o = !1
};
var Dj = function(a, b, c, d) {
        if (3 == c && b.b && !b.g)
            for (; a && a.j; a = a.c) a.j = !1;
        if (b.a) b.a.c = null, Ij(b, c, d);
        else try {
            b.g ? b.c.call(b.context) : Ij(b, c, d)
        } catch (e) {
            Jj.call(null, e)
        }
        dj(xj, b)
    },
    Ij = function(a, b, c) {
        2 == b ? a.c.call(a.context, c) : a.b && a.b.call(a.context, c)
    },
    Hj = function(a, b) {
        a.j = !0;
        qj(function() {
            a.j && Jj.call(null, b)
        })
    },
    Jj = fj,
    Aj = function(a) {
        Ef.call(this, a)
    };
A(Aj, Ef);
Aj.prototype.name = "cancel";
var Kj = function(a, b) {
    M.call(this);
    this.g = a || 1;
    this.c = b || x;
    this.j = z(this.m, this);
    this.o = Df()
};
A(Kj, M);
Kj.prototype.b = !1;
Kj.prototype.a = null;
var Lj = function(a, b) {
    a.g = b;
    a.a && a.b ? (a.stop(), a.start()) : a.a && a.stop()
};
Kj.prototype.m = function() {
    if (this.b) {
        var a = Df() - this.o;
        0 < a && a < .8 * this.g ? this.a = this.c.setTimeout(this.j, this.g - a) : (this.a && (this.c.clearTimeout(this.a), this.a = null), this.dispatchEvent(Ae), this.b && (this.a = this.c.setTimeout(this.j, this.g), this.o = Df()))
    }
};
Kj.prototype.start = function() {
    this.b = !0;
    this.a || (this.a = this.c.setTimeout(this.j, this.g), this.o = Df())
};
Kj.prototype.stop = function() {
    this.b = !1;
    this.a && (this.c.clearTimeout(this.a), this.a = null)
};
Kj.prototype.N = function() {
    Kj.w.N.call(this);
    this.stop();
    delete this.c
};
var Mj = function(a, b, c) {
        if (vf(a)) c && (a = z(a, c));
        else if (a && typeof a.handleEvent == Ub) a = z(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
    },
    Nj = function(a) {
        x.clearTimeout(a)
    };
var Oj = function() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        q = p = 0
    }

    function b(a) {
        for (var b = g, c = 0; 64 > c; c += 4) b[c / 4] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3];
        for (c = 16; 80 > c; c++) a = b[c - 3] ^ b[c - 8] ^ b[c - 14] ^ b[c - 16], b[c] = (a << 1 | a >>> 31) & 4294967295;
        a = e[0];
        var d = e[1],
            f = e[2],
            l = e[3],
            m = e[4];
        for (c = 0; 80 > c; c++) {
            if (40 > c)
                if (20 > c) {
                    var p = l ^ d & (f ^ l);
                    var q = 1518500249
                } else p = d ^ f ^ l, q = 1859775393;
            else 60 > c ? (p = d & f | l & (d | f), q = 2400959708) : (p = d ^ f ^ l, q = 3395469782);
            p = ((a << 5 | a >>> 27) & 4294967295) +
                p + m + q + b[c] & 4294967295;
            m = l;
            l = f;
            f = (d << 30 | d >>> 2) & 4294967295;
            d = a;
            a = p
        }
        e[0] = e[0] + a & 4294967295;
        e[1] = e[1] + d & 4294967295;
        e[2] = e[2] + f & 4294967295;
        e[3] = e[3] + l & 4294967295;
        e[4] = e[4] + m & 4294967295
    }

    function c(a, c) {
        if (typeof a === ue) {
            a = unescape(encodeURIComponent(a));
            for (var d = [], e = 0, g = a.length; e < g; ++e) d.push(a.charCodeAt(e));
            a = d
        }
        c || (c = a.length);
        d = 0;
        if (0 == p)
            for (; d + 64 < c;) b(a.slice(d, d + 64)), d += 64, q += 64;
        for (; d < c;)
            if (f[p++] = a[d++], q++, 64 == p)
                for (p = 0, b(f); d + 64 < c;) b(a.slice(d, d + 64)), d += 64, q += 64
    }

    function d() {
        var a = [],
            d = 8 * q;
        56 > p ? c(l, 56 - p) : c(l, 64 - (p - 56));
        for (var g = 63; 56 <= g; g--) f[g] = d & 255, d >>>= 8;
        b(f);
        for (g = d = 0; 5 > g; g++)
            for (var m = 24; 0 <= m; m -= 8) a[d++] = e[g] >> m & 255;
        return a
    }
    for (var e = [], f = [], g = [], l = [128], m = 1; 64 > m; ++m) l[m] = 0;
    var p, q;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        bk: function() {
            for (var a = d(), b = "", c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
            return b
        }
    }
};
var Qj = function(a, b, c) {
        var d = [],
            e = [];
        if (1 == (tf(c) ? 2 : 1)) return e = [b, a], C(d, function(a) {
            e.push(a)
        }), Pj(e.join(" "));
        var f = [],
            g = [];
        C(c, function(a) {
            g.push(a.key);
            f.push(a.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        C(d, function(a) {
            e.push(a)
        });
        a = Pj(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    },
    Pj = function(a) {
        var b = Oj();
        b.update(a);
        return b.bk().toLowerCase()
    };
var Rj = function() {
    this.a = document || {
            cookie: ""
        }
};
w = Rj.prototype;
w.isEnabled = function() {
    return navigator.cookieEnabled
};
w.set = function(a, b, c, d, e, f) {
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    y(c) || (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Df() + 1E3 * c)).toUTCString();
    this.a.cookie = a + "=" + b + e + d + c + f
};
w.get = function(a, b) {
    for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = gg(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
w.Db = function() {
    return Sj(this).keys
};
w.fb = function() {
    return Sj(this).values
};
var Sj = function(a) {
    a = (a.a.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = gg(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
        keys: b,
        values: c
    }
};
var Tj = function(a) {
    var b = bi(String(x.location.href)),
        c = x.__OVERRIDE_SID;
    null == c && (c = (new Rj).get("SID"));
    if (c && (b = (c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? x.__SAPISID : x.__APISID, null == b && (b = (new Rj).get(c ? "SAPISID" : "APISID")), b)) {
        c = c ? "SAPISIDHASH" : "APISIDHASH";
        var d = String(x.location.href);
        return d && b && c ? [c, Qj(bi(d), b, a || null)].join(" ") : null
    }
    return null
};
var Uj = !F || yh(9),
    Vj = !fh && !F || F && yh(9) || fh && wh("1.9.1"),
    Wj = F && !wh("9"),
    Xj = F || ch || gh,
    Yj = F && !yh(9);
var Zj = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var bk = function() {
    this.a = "";
    this.b = ak
};
bk.prototype.bc = !0;
bk.prototype.Eb = u("a");
bk.prototype.toString = function() {
    return "Const{" + this.a + "}"
};
var ck = function(a) {
        return a instanceof bk && a.constructor === bk && a.b === ak ? a.a : "type_error:Const"
    },
    ak = {},
    dk = function(a) {
        var b = new bk;
        b.a = a;
        return b
    };
dk("");
var ek = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
    fk = function(a) {
        return ek.test(a)
    };
var hk = function() {
    this.a = "";
    this.b = gk
};
hk.prototype.bc = !0;
hk.prototype.Eb = u("a");
hk.prototype.Cg = !0;
hk.prototype.Pc = v(1);
var ik = function(a) {
        if (a instanceof hk && a.constructor === hk && a.b === gk) return a.a;
        sf(a);
        return "type_error:TrustedResourceUrl"
    },
    gk = {},
    jk = function(a) {
        var b = new hk;
        b.a = a;
        return b
    };
var lk = function() {
    this.a = "";
    this.b = kk
};
lk.prototype.bc = !0;
lk.prototype.Eb = u("a");
lk.prototype.Cg = !0;
lk.prototype.Pc = v(1);
var mk = function(a) {
        if (a instanceof lk && a.constructor === lk && a.b === kk) return a.a;
        sf(a);
        return "type_error:SafeUrl"
    },
    nk = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    pk = function(a) {
        if (a instanceof lk) return a;
        a = a.bc ? a.Eb() : String(a);
        nk.test(a) || (a = Wa);
        return ok(a)
    },
    qk = function(a) {
        if (a instanceof lk) return a;
        a = a.bc ? a.Eb() : String(a);
        nk.test(a) || (a = Wa);
        return ok(a)
    },
    kk = {},
    ok = function(a) {
        var b = new lk;
        b.a = a;
        return b
    };
ok("about:blank");
var sk = function() {
    this.a = "";
    this.b = rk
};
sk.prototype.bc = !0;
var rk = {};
sk.prototype.Eb = u("a");
var tk = function(a) {
        var b = new sk;
        b.a = a;
        return b
    },
    uk = tk(""),
    zk = function(a) {
        if (a instanceof lk) a = 'url("' + mk(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        else if (a instanceof bk) a = ck(a);
        else {
            a = String(a);
            var b = a.replace(vk, "$1").replace(wk, "url");
            if (b = xk.test(b)) {
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                b = b && c
            }
            a = b ? yk(a) : "zClosurez"
        }
        return a
    },
    xk = /^[-,."'%_!# a-zA-Z0-9]+$/,
    wk = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    vk = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g,
    yk = function(a) {
        return a.replace(wk, function(a, c, d, e) {
            var b = "";
            d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
                b = c;
                return d
            });
            a = pk(d).Eb();
            return c + b + a + b + e
        })
    };
var Bk = function() {
    this.a = "";
    this.b = Ak
};
Bk.prototype.bc = !0;
var Ak = {};
Bk.prototype.Eb = u("a");
var Ck = function(a) {
    var b = new Bk;
    b.a = a;
    return b
};
Ck("");
var Ek = function() {
    this.a = "";
    this.c = Dk;
    this.b = null
};
Ek.prototype.Cg = !0;
Ek.prototype.Pc = u("b");
Ek.prototype.bc = !0;
Ek.prototype.Eb = u("a");
var Fk = function(a) {
        if (a instanceof Ek && a.constructor === Ek && a.c === Dk) return a.a;
        sf(a);
        return "type_error:SafeHtml"
    },
    Hk = function(a) {
        if (a instanceof Ek) return a;
        var b = null;
        a.Cg && (b = a.Pc());
        a = sg(a.bc ? a.Eb() : String(a));
        return Gk(a, b)
    },
    Ik = function(a) {
        if (a instanceof Ek) return a;
        a = Hk(a);
        var b = jg(Fk(a));
        return Gk(b, a.Pc())
    },
    Jk = /^[a-zA-Z0-9-]+$/,
    Kk = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    Lk = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    Nk = function(a, b, c) {
        var d = String(a);
        if (!Jk.test(d)) throw Error("Invalid tag name <" + d + ">.");
        if (d.toUpperCase() in Lk) throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
        return Mk(String(a), b, c)
    },
    Ok = function(a) {
        var b = 0,
            c = "",
            d = function(a) {
                tf(a) ? C(a, d) : (a = Hk(a), c += Fk(a), a = a.Pc(), 0 == b ? b = a : 0 != a && b != a && (b = null))
            };
        C(arguments, d);
        return Gk(c, b)
    },
    Dk = {},
    Gk = function(a, b) {
        var c = new Ek;
        c.a = a;
        c.b = b;
        return c
    },
    Mk = function(a, b, c) {
        var d = null,
            e = "";
        if (b)
            for (q in b) {
                if (!Jk.test(q)) throw Error('Invalid attribute name "' +
                    q + '".');
                var f = b[q];
                if (null != f) {
                    var g = a;
                    var l = q;
                    var m = f;
                    if (m instanceof bk) m = ck(m);
                    else if ("style" == l.toLowerCase()) {
                        f = void 0;
                        g = m;
                        if (!wf(g)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
                        if (!(g instanceof sk)) {
                            m = "";
                            for (f in g) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(f)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + f);
                                var p = g[f];
                                null != p && (p = tf(p) ? Jf(p, zk).join(" ") : zk(p), m += f + ":" + p + ";")
                            }
                            g = m ? tk(m) : uk
                        }
                        g instanceof sk && g.constructor === sk &&
                        g.b === rk ? f = g.a : (sf(g), f = "type_error:SafeStyle");
                        m = f
                    } else {
                        if (/^on/i.test(l)) throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + m + '" given.');
                        if (l.toLowerCase() in Kk)
                            if (m instanceof hk) m = ik(m);
                            else if (m instanceof lk) m = mk(m);
                            else if (mf(m)) m = pk(m).Eb();
                            else throw Error('Attribute "' + l + '" on tag "' + g + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + m + '" given.');
                    }
                    m.bc && (m = m.Eb());
                    l = l + '="' + sg(String(m)) + '"';
                    e += " " + l
                }
            }
        var q = "<" + a + e;
        null != c ? tf(c) || (c = [c]) : c = [];
        !0 ===
        Zj[a.toLowerCase()] ? q += ">" : (d = Ok(c), q += ">" + Fk(d) + "</" + a + ">", d = d.Pc());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return Gk(q, d)
    };
Gk("<!DOCTYPE html>", 0);
var Pk = Gk("", 0),
    Qk = Gk("<br>", 0);
var Rk = function(a, b) {
        a.innerHTML = Fk(b)
    },
    Sk = function(a, b) {
        b = b instanceof lk ? b : qk(b);
        a.href = mk(b)
    };
var Tk = function(a, b) {
    return a + Math.random() * (b - a)
};
var Uk = function(a, b) {
        this.b = y(a) ? a : 0;
        this.a = y(b) ? b : 0
    },
    Vk = function(a) {
        return new Uk(a.b, a.a)
    },
    Wk = function(a, b) {
        return new Uk(a.b - b.b, a.a - b.a)
    };
Uk.prototype.ceil = function() {
    this.b = Math.ceil(this.b);
    this.a = Math.ceil(this.a);
    return this
};
Uk.prototype.floor = function() {
    this.b = Math.floor(this.b);
    this.a = Math.floor(this.a);
    return this
};
Uk.prototype.round = function() {
    this.b = Math.round(this.b);
    this.a = Math.round(this.a);
    return this
};
var Xk = function(a, b) {
        this.width = a;
        this.height = b
    },
    Yk = function(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
Xk.prototype.aspectRatio = function() {
    return this.width / this.height
};
Xk.prototype.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
Xk.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
Xk.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var al = function(a) {
        return a ? new Zk($k(a)) : Ff || (Ff = new Zk)
    },
    N = function(a) {
        return mf(a) ? document.getElementById(a) : a
    },
    cl = function(a, b, c) {
        return bl(document, a, b, c)
    },
    dl = function(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : bl(document, "*", a, b)
    },
    O = function(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : bl(c, "*", a, b)[0] || null
        }
        return a ||
            null
    },
    bl = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, typeof b.split == Ub && Pf(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    },
    fl = function(a, b) {
        Jg(b,
            function(b, d) {
                b && b.bc && (b = b.Eb());
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : el.hasOwnProperty(d) ? a.setAttribute(el[d], b) : bg(d, "aria-") || bg(d, "data-") ? a.setAttribute(d, b) : a[d] = b
            })
    },
    el = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: Kc,
        maxlength: "maxLength",
        nonce: "nonce",
        role: Ud,
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    },
    hl = function(a) {
        a = a.document;
        a = gl(a) ? a.documentElement : a.body;
        return new Xk(a.clientWidth, a.clientHeight)
    },
    jl = function(a) {
        var b = il(a);
        a = a.parentWindow || a.defaultView;
        return F && wh("10") && a.pageYOffset != b.scrollTop ? new Uk(b.scrollLeft, b.scrollTop) : new Uk(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    },
    il = function(a) {
        return a.scrollingElement ? a.scrollingElement : !gh && gl(a) ? a.documentElement : a.body || a.documentElement
    },
    kl = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    },
    P = function(a, b, c) {
        return ll(document, arguments)
    },
    ll = function(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!Uj && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', sg(d.name), '"');
            if (d.type) {
                c.push(' type="', sg(d.type), '"');
                var e = {};
                Rg(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (mf(d) ? c.className = d : tf(d) ? c.className = d.join(" ") : fl(c, d));
        2 < b.length && ml(a, c, b, 2);
        return c
    },
    ml = function(a, b, c, d) {
        function e(c) {
            c && b.appendChild(mf(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !uf(f) || wf(f) && 0 < f.nodeType ? e(f) : C(nl(f) ? Vf(f) : f, e)
        }
    },
    ol = function(a, b) {
        return a.createElement(String(b))
    },
    pl = function(a) {
        return document.createTextNode(String(a))
    },
    rl = function() {
        var a = Nk("WBR");
        return ql(document, a)
    },
    ql = function(a, b) {
        var c = ol(a, k);
        F ? (Rk(c, Ok(Qk, b)), c.removeChild(c.firstChild)) : Rk(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    },
    gl = function(a) {
        return "CSS1Compat" == a.compatMode
    },
    sl = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case Ea:
            case Fa:
            case Da:
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case La:
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    },
    tl = function(a, b) {
        ml($k(a), a, arguments, 1)
    },
    ul = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    },
    vl = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    },
    wl = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    },
    xl = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    },
    yl = function(a) {
        return Vj && void 0 != a.children ? a.children : If(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    },
    Al = function(a) {
        return y(a.firstElementChild) ? a.firstElementChild : zl(a.firstChild, !0)
    },
    Bl = function(a) {
        return y(a.nextElementSibling) ? a.nextElementSibling : zl(a.nextSibling, !0)
    },
    zl = function(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    },
    Cl = function(a) {
        return wf(a) && 1 == a.nodeType
    },
    Dl = function(a) {
        var b;
        if (Xj && !(F && wh("9") && !wh("10") && x.SVGElement && a instanceof x.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return Cl(b) ? b : null
    },
    El = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a ==
            b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    },
    Hl = function(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (F && !yh(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
                d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode,
                f = b.parentNode;
            return e == f ? Fl(a, b) : !c && El(e, b) ? -1 * Gl(a, b) : !d && El(f, a) ? Gl(b, a) : (c ? a.sourceIndex :
                e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = $k(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(x.Range.START_TO_END, a)
    },
    Gl = function(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (; b.parentNode != c;) b = b.parentNode;
        return Fl(b, a)
    },
    Fl = function(a, b) {
        for (; b = b.previousSibling;)
            if (b == a) return -1;
        return 1
    },
    Il = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b <
        c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var l = 1; l < c; l++)
                if (g != d[l][b]) return f;
            f = g
        }
        return f
    },
    $k = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    },
    Jl = function(a) {
        return a.contentDocument || a.contentWindow.document
    },
    Q = function(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else ul(a), a.appendChild($k(a).createTextNode(String(b)))
    },
    Kl = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    Ll = {
        IMG: " ",
        BR: "\n"
    },
    Ml = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    },
    Nl = function(a) {
        return F && !wh("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    },
    Ol = function(a) {
        a = a.tabIndex;
        return nf(a) && 0 <= a && 32768 > a
    },
    Ql = function(a) {
        if (Wj && null !== a && "innerText" in a) a = eg(a.innerText);
        else {
            var b = [];
            Pl(a, b, !0);
            a =
                b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Wj || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    },
    Rl = function(a) {
        var b = [];
        Pl(a, b, !1);
        return b.join("")
    },
    Pl = function(a, b, c) {
        if (!(a.nodeName in Kl))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Ll) b.push(Ll[a.nodeName]);
            else
                for (a = a.firstChild; a;) Pl(a, b, c), a = a.nextSibling
    },
    nl = function(a) {
        if (a && typeof a.length == Dd) {
            if (wf(a)) return typeof a.item ==
                Ub || typeof a.item == ue;
            if (vf(a)) return typeof a.item == Ub
        }
        return !1
    },
    Tl = function(a) {
        return Sl(a, function(a) {
            return mf(a.className) && Pf(a.className.split(/\s+/), lc)
        }, void 0)
    },
    Sl = function(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    },
    Zk = function(a) {
        this.a = a || x.document || document
    };
Zk.prototype.l = function(a) {
    return mf(a) ? this.a.getElementById(a) : a
};
Zk.prototype.lc = function(a, b) {
    return O(a, b || this.a)
};
Zk.prototype.b = function(a, b, c) {
    return ll(this.a, arguments)
};
var Ul = function(a, b) {
        return ol(a.a, b)
    },
    Vl = function(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    };
w = Zk.prototype;
w.appendChild = function(a, b) {
    a.appendChild(b)
};
w.Oh = tl;
w.Me = ul;
w.Qh = xl;
w.Lh = yl;
w.Mh = Al;
w.$k = Cl;
w.contains = El;
w.Ne = Q;
w.Ph = Ql;
var Wl = function(a) {
    this.a = this.b = this.c = a
};
Wl.prototype.reset = function() {
    this.a = this.b = this.c
};
Wl.prototype.P = u("b");
var Xl = function(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    },
    Yl = function(a) {
        a = String(a);
        if (Xl(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    },
    Zl = Ze();
Zl.prototype.cd = function(a) {
    var b = [];
    $l(this, a, b);
    return b.join("")
};
var $l = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if (typeof b == Ed) {
                if (tf(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), $l(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], typeof f != Ub && (c.push(e), am(d, c), c.push(":"), $l(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case ue:
                    am(b, c);
                    break;
                case Dd:
                    c.push(isFinite(b) && !isNaN(b) ?
                        String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case Ub:
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    },
    bm = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    cm = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    am = function(a, b) {
        b.push('"', a.replace(cm, function(a) {
            var b = bm[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), bm[a] = b);
            return b
        }), '"')
    };
var dm = Ze();
dm.prototype.a = null;
var fm = function(a) {
    var b;
    (b = a.a) || (b = {}, em(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
};
var gm, hm = Ze();
A(hm, dm);
var im = function(a) {
        return (a = em(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    em = function(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    };
gm = new hm;
var jm = "StopIteration" in x ? x.StopIteration : {
        message: "StopIteration",
        stack: ""
    },
    km = Ze();
km.prototype.next = function() {
    throw jm;
};
km.prototype.yb = function() {
    return this
};
var lm = function(a) {
        if (a instanceof km) return a;
        if (typeof a.yb == Ub) return a.yb(!1);
        if (uf(a)) {
            var b = 0,
                c = new km;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw jm;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    },
    mm = function(a, b, c) {
        a = lm(a);
        try {
            for (; b.call(c, a.next(), void 0, a););
        } catch (d) {
            if (d !== jm) throw d;
        }
    };
var nm = function(a, b) {
    this.b = {};
    this.a = [];
    this.g = this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error(Va);
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a)
        if (a instanceof nm)
            for (c = a.Db(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
        else
            for (d in a) this.set(d, a[d])
};
nm.prototype.fb = function() {
    om(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a
};
nm.prototype.Db = function() {
    om(this);
    return this.a.concat()
};
var qm = function(a, b) {
    return pm(a.b, b)
};
nm.prototype.Qc = function() {
    this.b = {};
    this.g = this.c = this.a.length = 0
};
var rm = function(a, b) {
        pm(a.b, b) && (delete a.b[b], a.c--, a.g++, a.a.length > 2 * a.c && om(a))
    },
    om = function(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                pm(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], pm(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
nm.prototype.get = function(a, b) {
    return pm(this.b, a) ? this.b[a] : b
};
nm.prototype.set = function(a, b) {
    pm(this.b, a) || (this.c++, this.a.push(a), this.g++);
    this.b[a] = b
};
nm.prototype.forEach = function(a, b) {
    for (var c = this.Db(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
nm.prototype.yb = function(a) {
    om(this);
    var b = 0,
        c = this.g,
        d = this,
        e = new km;
    e.next = function() {
        if (c != d.g) throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length) throw jm;
        var e = d.a[b++];
        return a ? e : d.b[e]
    };
    return e
};
var pm = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var sm = function(a) {
        if (a.fb && typeof a.fb == Ub) return a.fb();
        if (mf(a)) return a.split("");
        if (uf(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    },
    tm = function(a, b, c) {
        if (a.forEach && typeof a.forEach == Ub) a.forEach(b, c);
        else if (uf(a) || mf(a)) C(a, b, c);
        else {
            if (a.Db && typeof a.Db == Ub) var d = a.Db();
            else if (a.fb && typeof a.fb == Ub) d = void 0;
            else if (uf(a) || mf(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f)
            } else
                for (f in d = [], e = 0, a) d[e++] = f;
            e = sm(a);
            f = e.length;
            for (var g =
                0; g < f; g++) b.call(c, e[g], d && d[g], a)
        }
    };
var um = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    vm = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? ig(e) : "")
            }
        }
    },
    wm = function(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ?
            c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    },
    xm = function(a, b, c) {
        if (tf(b))
            for (var d = 0; d < b.length; d++) xm(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + hg(b)))
    },
    ym = function(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) xm(a[b], a[b + 1], c);
        return c.join("&")
    },
    zm = function(a) {
        var b = [],
            c;
        for (c in a) xm(c, a[c], b);
        return b.join("&")
    },
    Am = function(a, b) {
        var c = 2 == arguments.length ? ym(arguments[1], 0) : ym(arguments, 1);
        return wm(a, c)
    },
    Bm = function(a, b, c) {
        c = null != c ? "=" + hg(c) : "";
        return wm(a, b + c)
    },
    Cm = function(a,
                  b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    },
    Dm = /#|$/,
    Em = /[?&]($|#)/,
    Fm = function(a, b) {
        cg(a, "/") && (a = a.substr(0, a.length - 1));
        bg(b, "/") && (b = b.substr(1));
        return Ag(a, "/", b)
    };
var Gm = function(a) {
    M.call(this);
    this.headers = new nm;
    this.xf = a || null;
    this.qb = !1;
    this.wf = this.$ = null;
    this.Sd = "";
    this.Zc = 0;
    this.Xc = this.Dg = this.gf = this.dg = !1;
    this.uf = 0;
    this.tf = null;
    this.Ji = "";
    this.ih = this.Xd = !1
};
A(Gm, M);
Gm.prototype.F = null;
var Hm = /^https?$/i,
    Im = [Ka, "PUT"],
    Jm = [],
    Km = function(a, b, c, d, e, f, g) {
        var l = new Gm;
        Jm.push(l);
        b && l.G(yb, b);
        l.Kg("ready", l.Tj);
        f && (l.uf = Math.max(0, f));
        g && (l.Xd = g);
        l.send(a, c, d, e);
        return l
    };
Gm.prototype.Tj = function() {
    this.Ba();
    Sf(Jm, this)
};
Gm.prototype.send = function(a, b, c, d) {
    if (this.$) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Sd + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Sd = a;
    this.Zc = 0;
    this.dg = !1;
    this.qb = !0;
    this.$ = this.xf ? im(this.xf) : im(gm);
    this.wf = this.xf ? fm(this.xf) : fm(gm);
    this.$.onreadystatechange = z(this.Ei, this);
    try {
        this.Dg = !0, this.$.open(b, String(a), !0), this.Dg = !1
    } catch (f) {
        this.Ee(5, f);
        return
    }
    a = c || "";
    var e = new nm(this.headers);
    d && tm(d, function(a, b) {
        e.set(b, a)
    });
    d = Of(e.Db(), Lm);
    c = x.FormData &&
        a instanceof x.FormData;
    !Pf(Im, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(a, b) {
        this.$.setRequestHeader(b, a)
    }, this);
    this.Ji && (this.$.responseType = this.Ji);
    "withCredentials" in this.$ && this.$.withCredentials !== this.Xd && (this.$.withCredentials = this.Xd);
    try {
        Mm(this), 0 < this.uf && ((this.ih = Nm(this.$)) ? (this.$.timeout = this.uf, this.$.ontimeout = z(this.Jc, this)) : this.tf = Mj(this.Jc, this.uf, this)), this.gf = !0, this.$.send(a), this.gf = !1
    } catch (f) {
        this.Ee(5,
            f)
    }
};
var Nm = function(a) {
        return F && wh(9) && nf(a.timeout) && y(a.ontimeout)
    },
    Lm = function(a) {
        return "content-type" == a.toLowerCase()
    };
Gm.prototype.Jc = function() {
    "undefined" != typeof lf && this.$ && (this.Zc = 8, this.dispatchEvent("timeout"), this.abort(8))
};
Gm.prototype.Ee = function(a) {
    this.qb = !1;
    this.$ && (this.Xc = !0, this.$.abort(), this.Xc = !1);
    this.Zc = a;
    Om(this);
    Pm(this)
};
var Om = function(a) {
    a.dg || (a.dg = !0, a.dispatchEvent(yb), a.dispatchEvent("error"))
};
Gm.prototype.abort = function(a) {
    this.$ && this.qb && (this.qb = !1, this.Xc = !0, this.$.abort(), this.Xc = !1, this.Zc = a || 7, this.dispatchEvent(yb), this.dispatchEvent("abort"), Pm(this))
};
Gm.prototype.N = function() {
    this.$ && (this.qb && (this.qb = !1, this.Xc = !0, this.$.abort(), this.Xc = !1), Pm(this, !0));
    Gm.w.N.call(this)
};
Gm.prototype.Ei = function() {
    this.hc || (this.Dg || this.gf || this.Xc ? Qm(this) : this.Hl())
};
Gm.prototype.Hl = function() {
    Qm(this)
};
var Qm = function(a) {
        if (a.qb && "undefined" != typeof lf && (!a.wf[1] || 4 != Rm(a) || 2 != Sm(a)))
            if (a.gf && 4 == Rm(a)) Mj(a.Ei, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == Rm(a)) {
                a.qb = !1;
                try {
                    Tm(a) ? (a.dispatchEvent(yb), a.dispatchEvent("success")) : (a.Zc = 6, Om(a))
                } finally {
                    Pm(a)
                }
            }
    },
    Pm = function(a, b) {
        if (a.$) {
            Mm(a);
            var c = a.$,
                d = a.wf[0] ? qf : null;
            a.$ = null;
            a.wf = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    },
    Mm = function(a) {
        a.$ && a.ih && (a.$.ontimeout = null);
        a.tf && (Nj(a.tf), a.tf = null)
    };
Gm.prototype.kb = function() {
    return !!this.$
};
var Tm = function(a) {
        var b = Sm(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.Sd).match(um)[1] || null, !a && x.self && x.self.location && (a = x.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Hm.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    },
    Rm = function(a) {
        return a.$ ? a.$.readyState : 0
    },
    Sm = function(a) {
        try {
            return 2 < Rm(a) ? a.$.status : -1
        } catch (b) {
            return -1
        }
    },
    Um = function(a) {
        try {
            return a.$ ? a.$.responseText : ""
        } catch (b) {
            return ""
        }
    },
    Vm = function(a) {
        if (a.$) {
            a: {
                a = a.$.responseText;
                if (x.JSON) try {
                    var b = x.JSON.parse(a);
                    break a
                } catch (c) {}
                b = Yl(a)
            }
            return b
        }
    };
Gm.prototype.getResponseHeader = function(a) {
    if (this.$ && 4 == Rm(this)) return a = this.$.getResponseHeader(a), null === a ? void 0 : a
};
Gm.prototype.getAllResponseHeaders = function() {
    return this.$ && 4 == Rm(this) ? this.$.getAllResponseHeaders() : ""
};
var Wm = function(a, b, c) {
    Km(a.url, function(a) {
        a = a.target;
        Tm(a) ? b(Um(a)) : c(Sm(a))
    }, a.a, a.body, a.b, 0, a.withCredentials)
};
var Ym = function(a) {
    Oh(this, a, 26, Xm)
};
A(Ym, Kh);
var Xm = [3, 20],
    an = function(a) {
        Oh(this, a, -1, null)
    };
A(an, Kh);
var bn = function(a) {
    Oh(this, a, -1, null)
};
A(bn, Kh);
var cn = function(a) {
    Oh(this, a, -1, null)
};
A(cn, Kh);
var en = function(a) {
    Oh(this, a, 15, dn)
};
A(en, Kh);
var dn = [3, 5],
    fn = function(a) {
        var b = Df().toString();
        G(a, 4, b)
    },
    hn = function(a) {
        Oh(this, a, 6, gn)
    };
A(hn, Kh);
var gn = [5],
    jn = function(a) {
        Oh(this, a, -1, null)
    };
A(jn, Kh);
var Yh = new function() {
    this.b = 175237375;
    this.a = jn;
    this.c = 0
};
var kn = function(a, b, c, d, e, f, g, l, m) {
    M.call(this);
    this.V = a;
    this.K = b || qf;
    this.g = new en;
    this.wa = l || Wm;
    this.a = [];
    this.O = "";
    this.aa = Cf(Tk, 0, 1);
    this.C = d || null;
    this.m = c || null;
    this.A = f || !1;
    this.B = m || null;
    this.R = this.U = !1;
    this.X = this.L = -1;
    this.F = null;
    this.Xd = !g;
    this.H = 0;
    this.Y = 1;
    this.M = e || !1;
    a = new cn;
    G(a, 1, 1);
    this.I = a;
    Th(this.g, 1, a);
    G(this.g, 2, this.V);
    this.c = new Wl(3E4);
    this.b = new Kj(this.c.P());
    xi(this, this.b);
    L(this.b, Ae, ej(this.o), !1, this);
    this.v = new Kj(6E5);
    xi(this, this.v);
    L(this.v, Ae, ej(this.o), !1, this);
    this.A || this.v.start();
    this.M || (L(kl(), jb, this.j, !1, this), L(kl(), "unload", this.j, !1, this), L(document, "pagehide", this.j, !1, this))
};
A(kn, M);
kn.prototype.N = function() {
    this.j();
    kn.w.N.call(this)
};
var ln = function(a) {
    a.C || (a.C = .001 > a.aa() ? "" : "");
    return a.C
};
kn.prototype.log = function(a) {
    a = ai(a);
    var b = this.Y++;
    G(a, 21, b);
    if (!Ph(a, 1)) {
        b = a;
        var c = Df().toString();
        G(b, 1, c)
    }
    for (; 1E3 <= this.a.length;) this.a.shift(), ++this.H;
    this.a.push(a);
    this.dispatchEvent(new mn(a));
    this.A || this.b.b || this.b.start()
};
kn.prototype.o = function(a, b) {
    if (0 == this.a.length) a && a();
    else {
        var c = Df();
        if (this.X > c && this.L < c) b && b();
        else {
            var d = ai(this.g);
            fn(d);
            Uh(d, 3, this.a);
            G(d, 14, this.H);
            c = {};
            var e = this.K();
            e && (c.Authorization = e);
            var f = ln(this);
            this.m && (c["X-Goog-AuthUser"] = this.m, f = Bm(f, fb, this.m));
            this.B && (c["X-Goog-PageId"] = this.B, f = Bm(f, "pageId", this.B));
            if (e && this.O == e) b && b();
            else {
                this.a = [];
                this.b.b && this.b.stop();
                this.H = 0;
                var g = d.cd();
                c = {
                    url: f,
                    body: g,
                    c: 1,
                    b: c,
                    a: Ka,
                    withCredentials: this.Xd
                };
                f = z(function(b) {
                    this.c.reset();
                    Lj(this.b, this.c.P());
                    if (b) {
                        try {
                            var c = JSON.parse(b.replace(")]}'\n", ""));
                            var d = new hn(c)
                        } catch (q) {}
                        d && (b = Rh(d, "-1"), b = Number(b), 0 < b && (this.L = Df(), this.X = this.L + b), d = Zh(d)) && (d = Rh(d, -1), -1 != d && (this.c = new Wl(1 > d ? 1 : d), Lj(this.b, this.c.P())))
                    }
                    a && a()
                }, this);
                g = z(function(a) {
                    Sh(d, Ym, 3);
                    var c = d.a[3];
                    c == Mh && (c = d.a[3] = []);
                    var f = this.c;
                    f.a = Math.min(3E5, 2 * f.a);
                    f.b = Math.min(3E5, f.a + Math.round(.2 * (Math.random() - .5) * f.a));
                    Lj(this.b, this.c.P());
                    401 == a && e && (this.O = e);
                    if (500 <= a && 600 > a || 401 == a || 0 == a) this.a = c.concat(this.a),
                    this.A || this.b.b || this.b.start();
                    b && b()
                }, this);
                this.wa(c, f, g)
            }
        }
    }
};
kn.prototype.j = function() {
    this.U && nn(this);
    this.R && on(this);
    this.o()
};
var nn = function(a) {
        pn(a, 32, 10, function(a, c) {
            a = Bm(a, "format", "json");
            return kl().navigator.sendBeacon(a, c.cd())
        })
    },
    on = function(a) {
        pn(a, 6, 5, z(function(a, c) {
            c = c.cd();
            for (var b = [], e = 0, f = 0; f < c.length; f++) {
                var g = c.charCodeAt(f);
                255 < g && (b[e++] = g & 255, g >>= 8);
                b[e++] = g
            }
            c = Jh(b, !0);
            a = Am(a, "format", "base64json", "p", c);
            (new Image).src = a;
            return !0
        }, a))
    },
    pn = function(a, b, c, d) {
        if (0 != a.a.length) {
            var e = ln(a);
            for (var f = e.search(Dm), g = 0, l, m = []; 0 <= (l = Cm(e, g, "format", f));) m.push(e.substring(g, l)), g = Math.min(e.indexOf("&",
                    l) + 1 || f, f);
            m.push(e.substr(g));
            e = m.join("").replace(Em, "$1");
            e = Am(e, "auth", a.K(), fb, a.m || "0");
            for (f = 0; f < c && a.a.length; ++f) {
                g = a.a.slice(0, b);
                l = ai(a.g);
                fn(l);
                Uh(l, 3, g);
                if (!d(e, l)) break;
                a.a = a.a.slice(g.length)
            }
        }
    },
    mn = function() {
        this.type = "event-logged"
    };
A(mn, J);
var qn = !1,
    rn = "",
    sn = function(a) {
        a = a.match(/[\d]+/g);
        if (!a) return "";
        a.length = 3;
        return a.join(".")
    };
(function() {
    if (navigator.plugins && navigator.plugins.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && (qn = !0, a.description)) {
            rn = sn(a.description);
            return
        }
        if (navigator.plugins["Shockwave Flash 2.0"]) {
            qn = !0;
            rn = "2.0.0.11";
            return
        }
    }
    if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], qn = !(!a || !a.enabledPlugin))) {
        rn = sn(a.enabledPlugin.description);
        return
    }
    try {
        var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        qn = !0;
        rn = sn(b.GetVariable("$version"));
        return
    } catch (c) {}
    try {
        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
        qn = !0;
        rn = "6.0.21";
        return
    } catch (c) {}
    try {
        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), qn = !0, rn = sn(b.GetVariable("$version"))
    } catch (c) {}
})();
var tn = qn,
    un = rn;
var vn = function(a) {
        return (a = a.exec(Fg)) ? a[1] : ""
    },
    wn = function() {
        if (Bh) return vn(/Firefox\/([0-9.]+)/);
        if (F || dh || ch) return vh;
        if (Fh) return Yg() ? vn(/CriOS\/([0-9.]+)/) : vn(/Chrome\/([0-9.]+)/);
        if (Gh && !Yg()) return vn(/Version\/([0-9.]+)/);
        if (Ch || Dh) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Fg);
            if (a) return a[1] + "." + a[2]
        } else if (Eh) return (a = vn(/Android\s+([0-9.]+)/)) ? a : vn(/Version\/([0-9.]+)/);
        return ""
    }(),
    xn = function(a) {
        return 0 <= Cg(wn, a)
    };
var yn = ch ? "opera" : dh ? "edge" : F ? "ie" : Bh ? "firefox" : Ch ? "iphone" : Dh ? "ipad" : Eh ? "android" : Fh ? "chrome" : Gh ? "safari" : "unknown";
var An = function() {
        return !zn() && (E(Sc) || E("iPhone") || E(za) || E("IEMobile"))
    },
    zn = function() {
        return E(Rc) || E(za) && !E("Mobile") || E("Silk")
    };
var Bn = function(a, b, c, d, e, f) {
    kn.call(this, a, Tj, b, c, d, e, void 0, void 0, f);
    a = this.I;
    d = this.M;
    b = new bn;
    c = new an;
    e = An() || zn() ? zn() ? 2 : An() ? 1 : 0 : 3;
    G(b, 6, E(za) ? 3 : E("CrOS") ? 5 : E("CrKey") ? 9 : E("Windows") ? 2 : E(Rc) ? 6 : Xg() ? 7 : E(Sc) ? 8 : E("Linux") ? 4 : E(Ha) ? 1 : 0);
    f = Fg;
    var g = "";
    E("Windows") ? (g = /Windows (?:NT|Phone) ([0-9.]+)/, g = (f = g.exec(f)) ? f[1] : "0.0") : Yg() ? (g = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, g = (f = g.exec(f)) && f[1].replace(/_/g, ".")) : E(Ha) ? (g = /Mac OS X ([0-9_.]+)/, g = (f = g.exec(f)) ? f[1].replace(/_/g, ".") : "10") : E(za) ?
        (g = /Android\s+([^\);]+)(\)|;)/, g = (f = g.exec(f)) && f[1]) : E("CrOS") && (g = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, g = (f = g.exec(f)) && f[1]);
    G(b, 2, g || "");
    G(b, 3, e);
    d || (d = kl(), e = document.documentElement.getAttribute("lang"), G(b, 5, e), G(c, 1, d.navigator.language || d.navigator.browserLanguage));
    G(c, 2, yn);
    G(c, 3, wn);
    tn && G(c, 4, un);
    Th(a, 11, b);
    Th(a, 9, c);
    Th(this.g, 1, this.I)
};
A(Bn, kn);
var Cn = function(a) {
    this.a = new Bn(375, a, void 0, !1, !0);
    xi(this, this.a);
    this.a.U = !!kl().navigator.sendBeacon && Fh;
    this.a.R = !0;
    this.g = 0;
    this.b = new Kj(1E3);
    xi(this, this.b);
    L(this.b, Ae, this.c, !1, this);
    this.b.start()
};
A(Cn, M);
Cn.prototype.N = function() {
    this.b.stop();
    Wi(this.b, Ae, this.c, !1, this);
    this.c();
    Cn.w.N.call(this)
};
Cn.prototype.c = function() {
    0 < this.g && this.a.o(z(this.j, this))
};
Cn.prototype.j = function() {
    this.g = 0
};
Cn.prototype.log = function(a) {
    this.a.log(a);
    900 <= ++this.g && this.c()
};
var Dn = function() {
    this.a = F ? xn(9) : Fh && xn(25) || F && xn(8) || dh || Bh && xn(19) || ch && xn(12.1) || Gh && xn(5.1) || Dh && xn(3.2) || Eh && xn(2.1)
};
rf(Dn);
var Gn = function(a, b) {
        var c = En[b];
        b = Fn[b];
        c = null != c ? Vf(c) : [];
        if (a.a && null != b)
            for (a = 0; a < b.length; a++) c.push(b[a]);
        return c
    },
    In = function(a) {
        return 0 <= a.indexOf("-i0-") && !Hn(a)
    },
    Hn = function(a) {
        return 0 <= a.indexOf("-i0-handwrit")
    },
    En = {
        af: [qd],
        am: ["am-t-i0-und", "und-ethi-t-k0-und"],
        ar: ["ar-t-i0-und", "ar-t-k0-und"],
        be: ["be-t-i0-und", "be-t-k0-und"],
        bg: ["bg-t-i0-und", "bg-t-k0-und", "bg-t-k0-qwerty"],
        bn: ["bn-t-i0-und", "bn-t-k0-und", "bn-t-und-latn-k0-und"],
        bs: ["bs-t-k0-und"],
        ca: ["ca-t-k0-und"],
        chr: ["chr-t-k0-und",
            "chr-t-und-latn-k0-und"
        ],
        cs: ["cs-t-k0-und", "cs-t-k0-qwertz"],
        cy: [qd],
        da: ["da-t-k0-und"],
        de: ["de-t-k0-und", "de-ch-t-k0-und", Mb],
        el: ["el-t-i0-und", "el-t-k0-und"],
        en: ["en-t-k0-und", "en-t-k0-dvorak"],
        es: ["es-t-k0-und", Mb],
        et: ["et-t-k0-und"],
        eu: ["eu-t-k0-und"],
        fa: ["fa-t-i0-und", "fa-t-k0-und"],
        fi: ["fi-t-k0-und"],
        fr: [Tb, Mb],
        ga: [qd],
        gl: ["gl-t-k0-und"],
        gu: ["gu-t-i0-und", "gu-t-k0-und", "gu-t-und-latn-k0-qwerty"],
        ha: [qd],
        hi: ["hi-t-i0-und", "hi-t-k0-und", Lc],
        hr: ["hr-t-k0-und"],
        ht: [Tb],
        hu: ["hu-t-k0-101key"],
        hy: ["hy-hyr-t-k0-und",
            "hy-hyt-t-k0-und"
        ],
        id: [qd],
        ig: [qd],
        is: ["is-t-k0-und"],
        it: ["it-t-k0-und", Mb],
        iw: ["he-t-i0-und", "he-t-k0-und"],
        jw: [qd],
        ja: ["ja-t-ja-hira-i0-und"],
        ka: ["ka-t-k0-und", "ka-t-k0-legacy"],
        kk: ["kk-t-k0-und"],
        km: ["km-t-k0-und"],
        kn: ["kn-t-i0-und", "kn-t-k0-und", "kn-t-und-latn-k0-und"],
        ko: ["ko-t-k0-und"],
        ku: ["ku-t-k0-und"],
        ky: ["ky-cyrl-t-k0-und"],
        lb: [Tb, Mb],
        lo: ["lo-t-k0-und"],
        lt: ["lt-t-k0-und"],
        lv: ["lv-t-k0-und"],
        mg: [qd],
        mi: ["mi-t-k0-und"],
        mk: ["mk-t-k0-und"],
        ml: ["ml-t-i0-und", "ml-t-und-latn-k0-und", "ml-t-k0-und"],
        mn: ["mn-cyrl-t-k0-und"],
        mr: ["mr-t-i0-und", Lc],
        ms: [qd],
        mt: ["mt-t-k0-und"],
        my: ["my-t-k0-und", "my-t-k0-myansan"],
        ne: ["ne-t-i0-und", "ne-t-k0-und", "ne-t-und-latn-k0-und"],
        nl: ["nl-t-k0-und", Mb],
        no: ["no-t-k0-und"],
        ny: [qd],
        pa: ["pa-t-i0-und", "pa-guru-t-und-latn-k0-und", "pa-guru-t-k0-und"],
        pl: ["pl-t-k0-und"],
        ps: ["ps-t-k0-und"],
        pt: ["pt-br-t-k0-und", "pt-pt-t-k0-und", Mb],
        ro: ["ro-t-k0-und", "ro-t-k0-legacy", "ro-t-k0-extended"],
        ru: ["ru-t-i0-und", "ru-t-k0-und"],
        rw: [qd],
        sd: ["sd-t-k0-und"],
        si: ["si-t-i0-und", "si-t-k0-und"],
        sk: ["sk-t-k0-und", "sk-t-k0-qwerty"],
        sl: ["sl-t-k0-und"],
        sn: [qd],
        so: [qd],
        sq: ["sq-t-k0-und"],
        sr: ["sr-t-i0-und", "sr-cyrl-t-k0-und", "sr-latn-t-k0-und"],
        st: [qd],
        su: [qd],
        sv: ["sv-t-k0-und"],
        sw: [qd],
        ta: "ta-t-i0-und ta-t-k0-ta99 ta-t-und-latn-k0-und ta-t-k0-und ta-t-k0-typewriter ta-t-k0-itrans".split(" "),
        te: ["te-t-i0-und", "te-t-k0-und", "te-t-und-latn-k0-und"],
        tg: ["tg-t-k0-und"],
        th: ["th-t-i0-und", "th-t-k0-und", "th-t-k0-pattajoti", "th-t-k0-tis"],
        tk: [qd],
        tl: [qd],
        tr: ["tr-t-k0-und", "tr-t-k0-legacy"],
        tt: ["tt-t-k0-und"],
        ug: ["ug-t-k0-und"],
        uk: ["uk-t-i0-und", "uk-t-k0-101key"],
        ur: ["ur-t-i0-und", "ur-t-k0-und"],
        uz: ["uz-latn-t-k0-und", "uz-cyrl-t-k0-und", "uz-cyrl-t-k0-legacy"],
        vi: ["vi-t-i0-und", "vi-t-k0-legacy", "vi-t-k0-viqr", "vi-t-k0-und", "vi-t-k0-vni"],
        wo: [qd],
        xh: [qd],
        yi: ["yi-t-k0-und"],
        yo: [qd],
        yue: [Te, We],
        zu: [qd],
        "zh-CN": ["zh-t-i0-pinyin", "zh-t-i0-wubi-1986", Ye, We, Xe, Te],
        "zh-TW": [Ye, We, Xe, Te]
    },
    Fn = {
        af: ["af-t-i0-handwrit"],
        am: ["am-t-i0-handwrit"],
        ar: ["ar-t-i0-handwrit"],
        auto: ["mul-t-i0-handwrit"],
        az: ["az-t-i0-handwrit"],
        be: ["be-t-i0-handwrit"],
        bg: ["bg-t-i0-handwrit"],
        bn: ["bn-t-i0-handwrit"],
        bs: ["bs-t-i0-handwrit"],
        ca: ["ca-t-i0-handwrit"],
        ceb: ["ceb-t-i0-handwrit"],
        co: ["co-t-i0-handwrit"],
        cs: ["cs-t-i0-handwrit"],
        cy: ["cy-t-i0-handwrit"],
        da: ["da-t-i0-handwrit"],
        de: ["de-t-i0-handwrit"],
        el: ["el-t-i0-handwrit"],
        en: ["en-t-i0-handwrit"],
        eo: ["eo-t-i0-handwrit"],
        es: ["es-t-i0-handwrit"],
        et: ["et-t-i0-handwrit"],
        eu: ["eu-t-i0-handwrit"],
        fa: ["fa-t-i0-handwrit"],
        fi: ["fi-t-i0-handwrit"],
        fr: ["fr-t-i0-handwrit"],
        fy: ["fy-t-i0-handwrit"],
        ga: ["ga-t-i0-handwrit"],
        gd: ["gd-t-i0-handwrit"],
        gl: ["gl-t-i0-handwrit"],
        gu: ["gu-t-i0-handwrit"],
        haw: ["haw-t-i0-handwrit"],
        hi: ["hi-t-i0-handwrit"],
        hmn: ["hmn-t-i0-handwrit"],
        hr: ["hr-t-i0-handwrit"],
        ht: ["ht-t-i0-handwrit"],
        hu: ["hu-t-i0-handwrit"],
        hy: ["hy-t-i0-handwrit"],
        id: ["id-t-i0-handwrit"],
        is: ["is-t-i0-handwrit"],
        it: ["it-t-i0-handwrit"],
        iw: ["he-t-i0-handwrit"],
        ja: ["ja-t-i0-handwrit"],
        jv: ["jv-t-i0-handwrit"],
        ka: ["ka-t-i0-handwrit"],
        kk: ["kk-t-i0-handwrit"],
        km: ["km-t-i0-handwrit"],
        kn: ["kn-t-i0-handwrit"],
        ko: ["ko-t-i0-handwrit"],
        ku: ["ku-t-i0-handwrit"],
        ky: ["ky-t-i0-handwrit"],
        la: ["la-t-i0-handwrit"],
        lb: ["lb-t-i0-handwrit"],
        lo: ["lo-t-i0-handwrit"],
        lt: ["lt-t-i0-handwrit"],
        lv: ["lv-t-i0-handwrit"],
        mg: ["mg-t-i0-handwrit"],
        mi: ["mi-t-i0-handwrit"],
        mk: ["mk-t-i0-handwrit"],
        ml: ["ml-t-i0-handwrit"],
        mn: ["mn-t-i0-handwrit"],
        mr: ["mr-t-i0-handwrit"],
        ms: ["ms-t-i0-handwrit"],
        mt: ["mt-t-i0-handwrit"],
        my: ["my-t-i0-handwrit"],
        ne: ["ne-t-i0-handwrit"],
        nl: ["nl-t-i0-handwrit"],
        no: ["no-t-i0-handwrit"],
        ny: ["ny-t-i0-handwrit"],
        pa: ["pa-t-i0-handwrit"],
        pl: ["pl-t-i0-handwrit"],
        pt: ["pt-t-i0-handwrit"],
        ro: ["ro-t-i0-handwrit"],
        ru: ["ru-t-i0-handwrit"],
        si: ["si-t-i0-handwrit"],
        sk: ["sk-t-i0-handwrit"],
        sl: ["sl-t-i0-handwrit"],
        sm: ["sm-t-i0-handwrit"],
        sn: ["sn-t-i0-handwrit"],
        so: ["so-t-i0-handwrit"],
        sq: ["sq-t-i0-handwrit"],
        sr: ["sr-t-i0-handwrit"],
        su: ["su-t-i0-handwrit"],
        sv: ["sv-t-i0-handwrit"],
        sw: ["sw-t-i0-handwrit"],
        ta: ["ta-t-i0-handwrit"],
        te: ["te-t-i0-handwrit"],
        tg: ["tg-t-i0-handwrit"],
        th: ["th-t-i0-handwrit"],
        tl: ["fil-t-i0-handwrit"],
        tr: ["tr-t-i0-handwrit"],
        uk: ["uk-t-i0-handwrit"],
        ur: ["ur-t-i0-handwrit"],
        uz: ["uz-t-i0-handwrit"],
        vi: ["vi-t-i0-handwrit"],
        xh: ["xh-t-i0-handwrit"],
        "zh-CN": ["zh-t-i0-handwrit"],
        zu: ["zu-t-i0-handwrit"]
    };
var Kn = function(a) {
    Oh(this, a, -1, Jn)
};
A(Kn, Kh);
var Jn = [1, 3, 4],
    Ln = function(a) {
        Oh(this, a, -1, null)
    };
A(Ln, Kh);
var Mn = function(a) {
    Oh(this, a, -1, null)
};
A(Mn, Kh);
var Nn = function(a) {
    Oh(this, a, -1, null)
};
A(Nn, Kh);
Nn.prototype.Ga = function() {
    return Ph(this, 1)
};
var On = function(a) {
    Oh(this, a, -1, null)
};
A(On, Kh);
var Pn = function(a) {
    Oh(this, a, -1, null)
};
A(Pn, Kh);
var Rn = function(a) {
    Oh(this, a, -1, Qn)
};
A(Rn, Kh);
var Qn = [3, 4],
    Tn = function(a) {
        Oh(this, a, -1, Sn)
    };
A(Tn, Kh);
var Sn = [3],
    Vn = function(a) {
        Oh(this, a, -1, Un)
    };
A(Vn, Kh);
var Un = [2],
    Xn = function(a) {
        Oh(this, a, -1, Wn)
    };
A(Xn, Kh);
var Wn = [26];
Xn.prototype.Nh = function() {
    return Ph(this, 1)
};
var Yn = function(a) {
    Oh(this, a, -1, null)
};
A(Yn, Kh);
var Zn = function(a) {
    Oh(this, a, -1, null)
};
A(Zn, Kh);
var $n = function(a) {
    Oh(this, a, -1, null)
};
A($n, Kh);
var ao = function(a) {
    Oh(this, a, -1, null)
};
A(ao, Kh);
var co = function(a) {
    Oh(this, a, -1, bo)
};
A(co, Kh);
var bo = [1];
co.prototype.Oa = function() {
    return Ph(this, 5)
};
var eo = function(a) {
    Oh(this, a, -1, null)
};
A(eo, Kh);
var fo = function(a) {
    Oh(this, a, -1, null)
};
A(fo, Kh);
var go = function(a) {
    Oh(this, a, -1, null)
};
A(go, Kh);
go.prototype.kc = function() {
    return Ph(this, 1)
};
go.prototype.Oa = function() {
    return Ph(this, 4)
};
var ho = function(a) {
    Oh(this, a, -1, null)
};
A(ho, Kh);
var io = function(a) {
    Oh(this, a, -1, null)
};
A(io, Kh);
var ko = function(a) {
    Oh(this, a, -1, jo)
};
A(ko, Kh);
var jo = [2];
var lo = function() {
        this.c = 0;
        this.m = this.g = this.C = this.b = this.o = "";
        this.j = this.a = this.v = 0;
        Dn.J()
    },
    mo = {
        bh: 27,
        btn: 1,
        clks: 2,
        clkt: 3,
        pb: 4,
        sel: 5,
        selalt: 6,
        tws_confirm: 7,
        tws_lsugg: 8,
        tws_revert: 9,
        tws_spell: 10,
        is: 11
    };
rf(lo);
var no = function(a, b) {
        a.b = b
    },
    oo = function(a, b) {
        a.C = b
    },
    po = function(a) {
        var b = 0;
        0 <= a.indexOf("-k0-") ? b = 2 : In(a) ? b = 1 : Hn(a) && (b = 5);
        return b
    },
    qo = function(a, b) {
        mf(b) && (b = mo[b], b = null != b ? b : 0);
        a.v = b
    };
lo.prototype.store = function(a) {
    G(a, 65, this.c);
    G(a, 16, this.b);
    G(a, 14, this.g);
    G(a, 1, this.C);
    G(a, 50, this.o);
    G(a, 52, this.m);
    G(a, 32, this.a)
};
var ro = function() {
    this.a = null;
    this.b = lo.J()
};
A(ro, vi);
rf(ro);
var to = function(a, b, c, d) {
        b = so(a, 237, b, void 0, void 0, void 0, d);
        y(c) && 0 != c && G(b, 74, c);
        R(a, b)
    },
    uo = function(a, b, c) {
        R(a, so(a, 190, b, c, !0, 0))
    },
    vo = function(a, b, c, d) {
        R(a, so(a, 78, b, c, d, 0))
    },
    wo = function(a, b, c) {
        var d = S(a, 148),
            e = new Yn;
        G(e, 1, b);
        c && G(e, 5, c);
        Th(d, 63, e);
        R(a, d)
    },
    xo = function(a) {
        R(a, S(a, 248))
    },
    yo = function(a, b) {
        b = S(a, b);
        var c = new ho;
        G(c, 1, 1);
        Th(b, 46, c);
        R(a, b)
    },
    zo = function(a, b, c, d, e) {
        b = S(a, b ? 84 : 85);
        var f = new ho;
        G(f, 1, 1);
        G(f, 2, c);
        G(f, 3, d);
        G(f, 4, e + 1);
        Th(b, 46, f);
        R(a, b)
    },
    Bo = function(a, b, c) {
        R(a, Ao(a, 251, b,
            c))
    },
    Do = function(a, b) {
        R(a, Co(a, 71, b))
    },
    Eo = function(a, b) {
        var c = S(a, 22),
            d = new io;
        G(d, 1, 3);
        G(d, 2, b);
        Th(c, 56, d);
        R(a, c)
    },
    Fo = function(a, b) {
        var c = S(a, 262),
            d = new Zn;
        G(d, 1, b + 1);
        Th(c, 72, d);
        R(a, c)
    };
ro.prototype.c = function() {
    R(this, S(this, 145))
};
var Go = function(a, b, c, d, e, f, g) {
        b = S(a, b);
        var l = new eo;
        G(l, 1, c);
        G(l, 4, 1);
        G(l, 7, d);
        G(l, 5, e);
        f && G(l, 8, f);
        y(g) && G(l, 6, g + 1);
        Th(b, 43, l);
        R(a, b)
    },
    Ho = function(a) {
        var b = S(a, 1);
        G(b, 53, a.b.v);
        R(a, b);
        qo(a.b, 0)
    };
ro.prototype.g = function() {
    R(this, S(this, 25))
};
var S = function(a, b) {
        var c = new Xn;
        a.b.store(c);
        G(c, 31, b);
        return c
    },
    so = function(a, b, c, d, e, f, g) {
        var l = new go;
        G(l, 1, c);
        y(d) && G(l, 4, d);
        y(e) && G(l, 2, e);
        y(f) && 0 != f && G(l, 3, f);
        y(g) && 0 != g && G(l, 5, g);
        a = S(a, b);
        Th(a, 61, l);
        return a
    },
    Io = function(a, b, c, d, e, f, g, l) {
        for (var m = new Kn, p = [], q = 0; q < c.length; q++) {
            var B = c[q],
                D = new Ln;
            G(D, 1, B[0]);
            G(D, 2, !!B[1]);
            p.push(D)
        }
        Uh(m, 1, p);
        c = new Mn;
        G(c, 1, !!d);
        Th(m, 2, c);
        d = [];
        for (c = 0; c < e.length; c++) p = new Nn, G(p, 1, e[c]), d.push(p);
        Uh(m, 3, d);
        e = [];
        for (d = 0; d < f.length; d++) c = f[d], p = new On, G(p,
            1, !!c[0]), G(p, 2, !!c[1]), e.push(p);
        Uh(m, 4, e);
        g && (f = new Pn, G(f, 1, !0), Th(m, 5, f));
        0 != l && G(m, 6, l);
        a = S(a, b);
        Th(a, 66, m);
        return a
    },
    Jo = function(a, b, c, d, e, f) {
        a = S(a, b);
        b = new co;
        G(b, 1, c || []);
        "" != d && G(b, 2, d);
        "" != e && G(b, 3, e);
        G(b, 4, f ? 2 : 1);
        Th(a, 59, b);
        return a
    },
    Ao = function(a, b, c, d) {
        var e = new ao;
        G(e, 1, d);
        a = S(a, b);
        G(a, 74, c);
        Th(a, 71, e);
        return a
    },
    Co = function(a, b, c) {
        var d = new fo;
        G(d, 1, c);
        a = S(a, b);
        Th(a, 44, d);
        return a
    },
    R = function(a, b) {
        if (a.a) {
            var c = new Ym;
            b = b.cd();
            G(c, 8, b);
            a.a.log(c)
        }
    };
var Ko = function() {
    this.c = [];
    this.b = {};
    this.a = {};
    this.o = !1;
    this.Tg = 1;
    this.Fd = {};
    this.g = null;
    this.m = "";
    this.j = !1;
    L(window, jb, this.A, !1, this)
};
rf(Ko);
var Lo = function(a, b, c) {
        if (null == b) return "1";
        switch (sf(b)) {
            case ue:
                return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), hg(a);
            case Dd:
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case eb:
                var d = [],
                    e;
                for (e in b) d.push(Lo(a, b[e], c));
                return d.join(",");
            case Ed:
                d = [];
                for (e in b) d.push(Mo(a, e, b[e], c));
                return d.join(",");
            default:
                return ""
        }
    },
    Mo = function(a, b, c, d) {
        return [hg(b), Lo(a, c, d || "smtalt" == b)].join("=")
    };
Ko.prototype.log = function(a, b) {
    this.c.push([a, b]);
    this.o || (this.o = !0, Mj(this.v, 0, this))
};
var Po = function(a, b, c, d, e) {
        b = a.m + "/gen204?" + Mo(a, c, d) + "&" + Mo(a, ub, b, !0);
        e && (b += No(a, e));
        a.j && (b += "&cc=1");
        Oo(a, b)
    },
    No = function(a, b) {
        var c = "";
        y(b) && Jg(b, function(a, b) {
            if (a instanceof Array)
                for (var d = 0; d < a.length; d++) c += "&" + Mo(this, b, a[d]);
            else c += "&" + Mo(this, b, a)
        }, a);
        return c
    };
Ko.prototype.v = function() {
    for (var a = 0; a < this.c.length; a++) {
        var b = this.c[a];
        Qo(this, b[0], b[1])
    }
    this.c = [];
    this.o = !1
};
var Qo = function(a, b, c) {
        var d = a.j ? ",cc=1" : "";
        Oo(a, a.m + "/gen204?" + (a.g ? ["client=", a.g, "&"].join("") : "") + Mo(a, b, c) + d)
    },
    Oo = function(a, b) {
        var c = new Image,
            d = a.Tg++;
        a.Fd[d] = c;
        c.onload = c.onerror = function() {
            delete Ko.J().Fd[d]
        };
        c.src = b;
        c = null
    },
    So = function(a, b, c, d) {
        var e = null;
        b in a.b && (e = a.b[b]);
        a.b[b] = Ro(e, c, d)
    },
    To = function(a, b) {
        var c = 0,
            d = null;
        b in a.a && (d = a.a[b], c = d[0], d = d[1]);
        d = Ro(d, 1, Ya);
        a.a[b] = [c, d];
        Nj(a.a[b][0]);
        c = Mj(z(a.C, a, b), 2E3);
        a.a[b][0] = c
    };
Ko.prototype.C = function(a) {
    Qo(this, a, this.a[a][1]);
    a in this.a && (Nj(this.a[a][0]), delete this.a[a])
};
var Uo = function(a, b, c) {
        null != b || (b = 1);
        c == Ya ? (isNaN(a) && (a = parseInt(a, 10)), isNaN(b) && (b = parseInt(b, 10)), a += b) : a = b;
        return a
    },
    Ro = function(a, b, c) {
        if (sf(b) == Ed) {
            sf(a) != Ed && (a = {});
            for (var d in b) a[d] = Uo(d in a ? a[d] : null, b[d], c)
        } else a = Uo(a, b, c);
        return a
    },
    Vo = function(a) {
        var b = [],
            c;
        for (c in a.b) b.push(Mo(a, c, a.b[c]));
        a.b = {};
        return b.join("&")
    };
Ko.prototype.A = function() {
    this.v();
    for (var a in this.a) 0 != this.a[a] && this.C(a)
};
var Wo = function(a) {
        return 32 >= a || 4096 <= a && (8192 <= a && 8198 >= a || 8200 <= a && 8203 >= a || 5760 == a || 6158 == a || 8232 == a || 8233 == a || 8287 == a || 12288 == a)
    },
    Zo = function(a) {
        var b = Xo;
        if (15 > a.length) return a;
        for (var c = [], d = 0, e = 0, f = 0, g = 0, l = 0; l < a.length; l++) {
            var m = g;
            g = a.charCodeAt(l);
            m = 768 <= g && !b(m, g, !0);
            15 <= d && !Wo(g) && !m && (c.push(a.substring(f, l), Yo), f = l, d = 0);
            e ? 62 == g && 60 == e ? e = 0 : 59 == g && 38 == e && (e = 0, d++) : 60 == g || 38 == g ? e = g : Wo(g) ? d = 0 : 8204 <= g && 8207 >= g || 8234 <= g && 8238 >= g || d++
        }
        c.push(a.substr(f));
        return c.join("")
    },
    Xo = function(a, b) {
        return 1024 <=
            b && 1315 > b
    },
    $o = F && wh(8),
    Yo = gh ? "<wbr></wbr>" : ch ? "&shy;" : $o ? "&#8203;" : "<wbr>";
var ap = function(a, b) {
    this.c = this.v = this.b = "";
    this.m = null;
    this.g = this.o = "";
    this.j = !1;
    var c;
    a instanceof ap ? (this.j = y(b) ? b : a.j, bp(this, a.b), this.v = a.v, this.c = a.c, cp(this, a.m), this.o = a.o, dp(this, ep(a.a)), this.g = a.g) : a && (c = String(a).match(um)) ? (this.j = !!b, bp(this, c[1] || "", !0), this.v = fp(c[2] || ""), this.c = fp(c[3] || "", !0), cp(this, c[4]), this.o = fp(c[5] || "", !0), dp(this, c[6] || "", !0), this.g = fp(c[7] || "")) : (this.j = !!b, this.a = new gp(null, this.j))
};
ap.prototype.toString = function() {
    var a = [],
        b = this.b;
    b && a.push(hp(b, ip, !0), ":");
    var c = this.c;
    if (c || "file" == b) a.push("//"), (b = this.v) && a.push(hp(b, ip, !0), "@"), a.push(hg(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
    if (c = this.o) this.c && "/" != c.charAt(0) && a.push("/"), a.push(hp(c, "/" == c.charAt(0) ? jp : kp, !0));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", hp(c, lp));
    return a.join("")
};
var bp = function(a, b, c) {
        a.b = c ? fp(b, !0) : b;
        a.b && (a.b = a.b.replace(/:$/, ""))
    },
    cp = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.m = b
        } else a.m = null
    },
    dp = function(a, b, c) {
        b instanceof gp ? (a.a = b, mp(a.a, a.j)) : (c || (b = hp(b, np)), a.a = new gp(b, a.j))
    },
    op = function(a, b) {
        return a.a.get(b)
    },
    pp = function(a) {
        return a instanceof ap ? new ap(a) : new ap(a, void 0)
    },
    fp = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    },
    hp = function(a, b, c) {
        return mf(a) ? (a = encodeURI(a).replace(b,
            qp), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    },
    qp = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    ip = /[#\/\?@]/g,
    kp = /[#\?:]/g,
    jp = /[#\?]/g,
    np = /[#\?@]/g,
    lp = /#/g,
    gp = function(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.j = !!b
    },
    rp = function(a) {
        a.a || (a.a = new nm, a.b = 0, a.c && vm(a.c, function(b, c) {
            a.add(ig(b), c)
        }))
    };
gp.prototype.add = function(a, b) {
    rp(this);
    this.c = null;
    a = sp(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b = this.b + 1;
    return this
};
var tp = function(a, b) {
        rp(a);
        b = sp(a, b);
        qm(a.a, b) && (a.c = null, a.b = a.b - a.a.get(b).length, rm(a.a, b))
    },
    up = function(a, b) {
        rp(a);
        b = sp(a, b);
        return qm(a.a, b)
    };
w = gp.prototype;
w.forEach = function(a, b) {
    rp(this);
    this.a.forEach(function(c, d) {
        C(c, function(c) {
            a.call(b, c, d, this)
        }, this)
    }, this)
};
w.Db = function() {
    rp(this);
    for (var a = this.a.fb(), b = this.a.Db(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
};
w.fb = function(a) {
    rp(this);
    var b = [];
    if (mf(a)) up(this, a) && (b = Tf(b, this.a.get(sp(this, a))));
    else {
        a = this.a.fb();
        for (var c = 0; c < a.length; c++) b = Tf(b, a[c])
    }
    return b
};
w.set = function(a, b) {
    rp(this);
    this.c = null;
    a = sp(this, a);
    up(this, a) && (this.b = this.b - this.a.get(a).length);
    this.a.set(a, [b]);
    this.b = this.b + 1;
    return this
};
w.get = function(a, b) {
    a = a ? this.fb(a) : [];
    return 0 < a.length ? String(a[0]) : b
};
var vp = function(a, b, c) {
    tp(a, b);
    0 < c.length && (a.c = null, a.a.set(sp(a, b), Vf(c)), a.b = a.b + c.length)
};
gp.prototype.toString = function() {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var a = [], b = this.a.Db(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = hg(d);
        d = this.fb(d);
        for (var f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + hg(d[f]));
            a.push(g)
        }
    }
    return this.c = a.join("&")
};
var ep = function(a) {
        var b = new gp;
        b.c = a.c;
        a.a && (b.a = new nm(a.a), b.b = a.b);
        return b
    },
    sp = function(a, b) {
        b = String(b);
        a.j && (b = b.toLowerCase());
        return b
    },
    mp = function(a, b) {
        b && !a.j && (rp(a), a.c = null, a.a.forEach(function(a, b) {
            var c = b.toLowerCase();
            b != c && (tp(this, b), vp(this, c, a))
        }, a));
        a.j = b
    };
gp.prototype.g = function(a) {
    for (var b = 0; b < arguments.length; b++) tm(arguments[b], function(a, b) {
        this.add(b, a)
    }, this)
};
var wp = {},
    xp = {},
    yp = {},
    zp = function() {
        throw Error("Do not instantiate directly");
    };
zp.prototype.Gd = null;
zp.prototype.Da = u("content");
zp.prototype.toString = u("content");
var Ap = function(a) {
        if (a.gc === yp) return Hk(a.toString());
        if (a.gc !== wp) throw Error("Sanitized content was not of kind TEXT or HTML.");
        dk("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
        return Gk(a.toString(), a.Gd || null)
    },
    Bp = function(a, b) {
        this.content = String(a);
        this.Gd = null != b ? b : null
    };
A(Bp, zp);
Bp.prototype.gc = yp;
var Cp = function() {
    zp.call(this)
};
A(Cp, zp);
Cp.prototype.gc = wp;
var Dp = function(a) {
        if (null != a) switch (a.Gd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    },
    T = function(a) {
        return null != a && a.gc === wp ? a : a instanceof Ek ? Ep(Fk(a), a.Pc()) : Ep(sg(String(String(a))), Dp(a))
    },
    Ep = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            a = new b(String(a));
            void 0 !== d && (a.Gd = d);
            return a
        }
    }(Cp);
(function(a) {
    function b(a) {
        this.content = a
    }
    b.prototype = a.prototype;
    return function(a, d) {
        a = String(a);
        if (!a) return "";
        a = new b(a);
        void 0 !== d && (a.Gd = d);
        return a
    }
})(Cp);
var Jp = function(a) {
        null != a && a.gc === wp ? (a = a.Da(), a = String(a).replace(Fp, "").replace(Gp, "&lt;"), a = String(a).replace(Hp, Ip)) : a = sg(String(a));
        return a
    },
    Lp = function(a) {
        null != a && a.gc === xp ? a = a.Da().replace(/([^"'\s])$/, "$1 ") : (a = String(a), a = Kp.test(a) ? a : "zSoyz");
        return a
    },
    Mp = function(a) {
        return null != a && a.gc === yp ? (a.Da(), "zSoyz") : a
    },
    Np = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    },
    Ip = function(a) {
        return Np[a]
    },
    Hp = /[\x00\x22\x27\x3c\x3e]/g,
    Kp = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
    Fp = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Gp = /</g;
var Op = function(a) {
        return '<div id="' + T(a.id) + '" class="cp-promo" style="display:none"><div class="cp-promo-c"><div class="cp-dismiss"></div><a href="' + T(a.url) + '" class="cp-promo-href"><div class="cp-promo-graphic"></div><div class="cp-promo-text-c"><div class="cp-promo-text"><div class="cp-promo-title">' + T(a.om) + '</div><div class="cp-promo-subtext">' + T(a.gm) + '</div></div></div><div class="cp-promo-bottom"><div class="cp-promo-link"><div class="cp-promo-link-badge"></div><div class="cp-promo-link-arrow"></div><div class="cp-promo-link-text">' +
            T(a.Td) + '</div><div class="cp-promo-link-subtext">' + T(a.fl) + "</div></div></div></a></div></div>"
    },
    Pp = function(a) {
        return '<div><div class="cc-header"><div class="cc-icon"></div><div class="cc-header-text">' + T(a.tc) + '</div><div class="cc-placeholder"></div>' + (a.eg ? '<div class="cc-help"></div><div class="cc-collapse"></div>' : '<div class="cc-expand"></div>') + ra
    },
    Qp = function(a) {
        return ya + Pp({
                tc: a.tc,
                eg: !0
            }) + wa + T(a.Ia) + qa + T(a.Bd) + ua + T(a.Qa) + '</div><input class="cc-input" type="text" placeholder="' + T(a.Bm) +
            '"></div></div><div class="cc-footer"><div class="cc-counter">' + T(a.Yf) + "/" + T(a.eh) + '</div><div class="cc-placeholder"></div><div class="cc-skip">' + T(a.Mg) + '</div><div class="cc-submit">' + T(a.wl) + ta
    },
    Rp = function(a) {
        return ya + Pp({
                tc: a.tc,
                eg: !0
            }) + wa + T(a.Ia) + qa + T(a.Bd) + ua + T(a.Qa) + qa + T(a.lm) + '</div></div><div class="cc-footer"><div class="cc-counter">' + T(a.Yf) + "/" + T(a.eh) + '</div><div class="cc-placeholder"></div><div class="cc-yes"><div class="cc-yes-icon"></div>' + T(a.xl) + '</div><div class="cc-no"><div class="cc-no-icon"></div>' +
            T(a.vl) + '</div><div class="cc-skip"><div class="cc-skip-icon"></div>' + T(a.Mg) + ta
    },
    Sp = function(a) {
        return '<div id="gt-community-thanks"><div class="cc-collapse"></div><div class="cc-thanks">' + T(a.nm) + '</div><div class="cc-continue-r"><div class="cc-continue">' + T(a.Pj) + sa
    },
    Tp = function(a) {
        return '<div id="gt-community-mini">' + Pp({
                tc: a.tc,
                eg: !1
            }) + qa
    },
    Up = function(a) {
        return '<div class="cc-help-content"><div class="cc-arrow"></div><div class="cc-close"></div>' + T(a.Wk) + '</div><div class="cc-help-footer"><div class="cc-play"></div>' +
            T(a.gk) + qa
    },
    Vp = function(a) {
        return '<div><div class="speech-mic"><div class="gt-speech-l1"></div><div class="gt-speech-l2"></div><div class="gt-speech-l3"></div><div class="gt-speech-l4"></div></div><div class="speech-mic-label">' + T(a.label) + ra
    },
    Wp = function(a) {
        return '<div id="' + T(a.id) + '" class="verified-translation"><div class="vt-description">' + T(a.$f) + '</div><div class="vt-buttons"><div class="vt-link"><a class="vt-link-text" href="' + T(a.url) + '">' + T(a.Td) + '</a></div><div class="vt-dismiss">' + T(a.ck) +
            sa
    },
    Xp = function(a) {
        return '<div class="gt-ex-info">' + (a.bm ? '<span class="gt-ex-quote">\x3c!--This SVG renders a quotation mark.--\x3e<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>' : "") + '<div class="gt-ex-top"><div class="gt-ex-text" dir="' + T(a.em) + '">' + Mp(a.Bd) + '</div></div><div class="gt-ex-mt" style="display:none"><span class="gt-cd-mt" dir="' + T(a.hh) + '"></span><br><span class="gt-cd-mt-label">' + T(a.Am) +
            '</span><span class="gt-ex-credit"><a class="gt-ex-link" target="_blank" href="' + T(a.Jg) + '">' + T(a.cl) + "</a></span></div></div>"
    },
    Yp = function(a) {
        return '<div class="st-stp1"><div class="st-stp1-text"><div>' + T(a.Bl) + '</div></div><div id="st-buttons"></div></div>'
    },
    Zp = v('<div class="gt-cc-t"><span class="gt-cc-tc"></span><span class="gt-cc-bc"></span></div><div class="gt-cc"><div class="gt-cc-l"><div class="gt-cc-l-i"></div><div class="gt-cc-exp" style="display:none"><div class="cd-exp-ar"></div></div></div><div class="gt-cc-r"><div class="gt-cc-r-i"></div></div></div>'),
    $p = v('<div class="gt-cd-t"><div class="gt-cd-tl"></div><div class="gt-cd-tr"></div></div><div class="gt-cd-c"></div><div class="cd-expand-button"><span class="jfk-button-img"></span><span class="cd-expand-label"></span></div>'),
    aq = v('<span class="gt-ct-text"></span><span class="gt-ct-translit" style="display:none"></span><div class="gt-ct-tts goog-inline-block"></div>'),
    bq = function(a) {
        var b = '<div class="gt-def-info">' + (a.lh ? '<span class="gt-def-num">' + T(a.Zj) + "</span>" : "") + '<div class="gt-def-row">' +
            T(a.$j) + '<div class="gt-mt-md" style="display:none"><span class="gt-cd-mt"></span></div></div>' + (a.Gh ? '<div class="gt-def-example"><q>' + T(a.Gh) + '</q><div class="gt-mt-ex" style="display:none"><q class="gt-cd-mt" dir="' + T(a.hh) + '"></q></div></div>' : "");
        if (0 < a.Ti.length) {
            b += '<div class="gt-def-synonym"><span class="gt-def-synonym-title">' + T(a.im) + ': </span><span class="gt-def-synonyms-group"></span><span class="gt-def-synonyms-group"></span>';
            for (var c = a.Ti, d = c.length, e = 0; e < d; e++)
                for (var f = c[e], g = f.length,
                         l = 0; l < g; l++) {
                    var m = f[l];
                    var p = a.lh ? "" : l != g - 1 ? ", " : e != d - 1 ? "; " : "";
                    b += (a.Wj ? '<span class="gt-cd-cl">' + T(m) + "</span>" : '<span class="gt-cd-ncl">' + T(m) + "</span>") + p
                }
            b += qa
        }
        return b + qa
    },
    cq = v('<div class="gt-ee-container"></div>'),
    dq = function(a) {
        return '<a href="' + T(a.Jg) + '"></a>'
    };
var eq = function(a) {
        return null != window[a]
    },
    fq = eq("CC_LOG"),
    gq = eq("COMMUNITY_CARD_TASK_TYPE"),
    hq = eq("COMPARE_PROD_TRANS"),
    iq = eq("MSG_HUMAN_TRANSLATION_ACTION"),
    jq = eq("MSG_CHANGE_ITA"),
    kq = eq("KNOWLEDGE_PANEL"),
    lq = eq("MSG_HATS_TITLE"),
    mq = eq("MSG_SHOW_PB"),
    nq = eq("PHRASEBOOK_REORDERING"),
    oq = eq("MSG_SPEECH_INPUT_TURN_ON"),
    pq = eq("SK_WP"),
    qq = eq("TTS_PACE_CONTROL"),
    rq = eq("WEBFONT"),
    sq = eq("TRANSLATED_INPUT_SUGGESTION_DESKTOP");
var tq = function(a) {
        return function() {
            return a
        }
    },
    uq = function(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    },
    vq = null,
    wq = function(a) {
        if (null !== vq) var b = vq;
        else {
            b = tq(String.fromCharCode(84));
            var c = tq(String.fromCharCode(75));
            b = [b(), b()];
            b[1] = c();
            b = (vq = window[b.join(c())] || "") || ""
        }
        var d = tq(String.fromCharCode(116));
        c = tq(String.fromCharCode(107));
        d = [d(), d()];
        d[1] = c();
        c = "&" + d.join("") +
            "=";
        d = b.split(".");
        b = Number(d[0]) || 0;
        for (var e = [], f = 0, g = 0; g < a.length; g++) {
            var l = a.charCodeAt(g);
            128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : (55296 == (l & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = l >> 18 | 240, e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224, e[f++] = l >> 6 & 63 | 128), e[f++] = l & 63 | 128)
        }
        a = b;
        for (f = 0; f < e.length; f++) a += e[f], a = uq(a, "+-a^+6");
        a = uq(a, "+-3^+b+-f");
        a ^= Number(d[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        a %= 1E6;
        return c + (a.toString() + "." +
            (a ^ b))
    };
var yq = function(a) {
        var b = a;
        if (a instanceof Array) b = Array(a.length), xq(b, a);
        else if (a instanceof Object) {
            var c = b = {},
                d;
            for (d in a) a.hasOwnProperty(d) && (c[d] = yq(a[d]))
        }
        return b
    },
    xq = function(a, b) {
        for (var c = 0; c < b.length; ++c) b.hasOwnProperty(c) && (a[c] = yq(b[c]))
    },
    zq = function(a, b) {
        a[b] || (a[b] = []);
        return a[b]
    },
    Bq = function(a, b) {
        if (null == a || null == b) return null == a == (null == b);
        if (a.constructor != Array && a.constructor != Object) throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
        if (a === b) return !0;
        if (a.constructor != b.constructor) return !1;
        for (var c in a)
            if (!(c in b && Aq(a[c], b[c]))) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    },
    Aq = function(a, b) {
        if (a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b)) return !0;
        if (a instanceof Object && b instanceof Object) {
            if (!Bq(a, b)) return !1
        } else return !1;
        return !0
    };
var Cq = function(a) {
        this.data = a || []
    },
    fi = function(a, b) {
        return null != a.data[b]
    },
    Dq = function(a, b, c) {
        a = a.data[b];
        return null != a ? a : c
    },
    Eq = function(a, b) {
        return !!Dq(a, b, void 0)
    },
    ji = function(a, b) {
        return Dq(a, b, 0)
    },
    I = function(a, b, c) {
        return Dq(a, b, c || "")
    },
    hi = function(a, b, c) {
        return zq(a.data, b)[c]
    },
    ei = function(a, b, c) {
        return zq(a.data, b)[c]
    },
    Gq = function(a) {
        for (var b = Fq, c = [], d = 0; d < H(a, 0); d++) c.push(new b(ei(a, 0, d)));
        return c
    },
    H = function(a, b) {
        return a.data[b] ? a.data[b].length : 0
    };
Cq.prototype.nb = u("data");
var Hq = function(a) {
    this.data = a || []
};
A(Hq, Cq);
var Iq = function(a) {
    this.data = a || []
};
A(Iq, Cq);
Hq.prototype.Ca = function() {
    return I(this, 3)
};
var Jq = function(a) {
    this.data = a || []
};
A(Jq, Cq);
var Kq = function(a) {
    this.data = a || []
};
A(Kq, Cq);
var Lq = function(a) {
    this.data = a || []
};
A(Lq, Cq);
var Fq = function(a) {
    this.data = a || []
};
A(Fq, Cq);
var Mq = function(a) {
    this.data = a || []
};
A(Mq, Cq);
var di = function(a) {
    this.data = a || []
};
A(di, Cq);
var Nq = function(a) {
    this.data = a || []
};
A(Nq, Cq);
var Oq = function(a) {
    this.data = a || []
};
A(Oq, Cq);
var Pq = function(a) {
    this.data = a || []
};
A(Pq, Cq);
var Qq = function(a) {
    this.data = a || []
};
A(Qq, Cq);
var Rq = function(a) {
    this.data = a || []
};
A(Rq, Cq);
var Sq = function(a) {
    this.data = a || []
};
A(Sq, Cq);
var Tq = function(a) {
    this.data = a || []
};
A(Tq, Cq);
var Uq = function(a) {
    this.data = a || []
};
A(Uq, Cq);
var Vq = function(a) {
    this.data = a || []
};
A(Vq, Cq);
var Wq = function(a, b) {
        return new Kq(ei(a, 2, b))
    },
    Xq = function(a, b) {
        return new Lq(ei(a, 3, b))
    };
Fq.prototype.cb = function() {
    return I(this, 0)
};
di.prototype.a = function() {
    return H(this, 2)
};
di.prototype.b = function(a) {
    return new Mq(ei(this, 2, a))
};
Oq.prototype.a = function() {
    return H(this, 1)
};
Oq.prototype.b = function(a) {
    return new Nq(ei(this, 1, a))
};
Qq.prototype.a = function() {
    return H(this, 1)
};
Qq.prototype.b = function(a) {
    return new Pq(ei(this, 1, a))
};
var Yq = function(a) {
        return new Rq(a.data[14])
    },
    Zq = function(a, b) {
        return new Fq(ei(a, 0, b))
    },
    $q = function(a, b) {
        return new Jq(ei(a, 5, b))
    };
var ar = function(a, b) {
        this.c = a;
        this.a = "";
        b && (this.a = b);
        this.b = 0;
        this.F = ro.J()
    },
    br = function(a) {
        a = a.fb("q").join("");
        return wq(a)
    },
    cr = function(a, b, c, d, e, f) {
        c = c.toString();
        c += br(d);
        d = d.toString();
        var g = Ka;
        b += "?" + c;
        2E3 > b.length + d.length && (g = "GET", b += "&" + d, d = "");
        ++a.b;
        return Km(b, function(b) {
            --a.b;
            e(b)
        }, g, d, void 0, f)
    },
    dr = function(a, b, c, d, e, f, g, l, m) {
        var p = a.a + "/translate_a/t",
            q = new gp,
            B = new gp;
        q.set(ub, a.c);
        q.set("sl", b);
        q.set("tl", c);
        q.set("hl", d);
        q.set("v", "1.0");
        null != g && q.set(ie, g);
        l && q.g(l);
        (b = !tf(e) ||
            tf(e) && 1 == e.length) ? B.set("q", e): vp(B, "q", e);
        e = z(a.j, a, b, f);
        return cr(a, p, q, B, e, m)
    },
    er = function(a, b, c, d, e, f, g, l, m, p, q) {
        var B = a.a + oa,
            D = new gp,
            K = new gp;
        D.set(ub, a.c);
        D.set("sl", b);
        D.set("tl", c);
        D.set("hl", d);
        vp(D, "dt", f);
        null != l && (D.set("ie", l), D.set("oe", l));
        p && D.set("dj", "1");
        m && D.g(m);
        K.set("q", e);
        cr(a, B, D, K, z(a.g, a, g, q), void 0)
    },
    fr = function(a, b, c, d, e, f, g, l, m, p) {
        var q = "at bd ex ld md qc rw rm ss t".split(" ");
        g && (q = "at bd ex ld md qca rw rm ss t".split(" "));
        kq && q.push("kr");
        er(a, b, c, d, e, q, f, l, m,
            void 0, p)
    };
ar.prototype.o = function(a, b) {
    b = b.target;
    gr(b) && (b = hr(b, "handleTransliterationResult_"), b = new Vq(b), 0 < H(b, 0) && a(I(Zq(b, 0), 3)))
};
ar.prototype.g = function(a, b, c) {
    c = c.target;
    gr(c) ? (b = hr(c, "handleSingleResult_"), tf(b) && (b = new Vq(b)), a(b)) : (ir(this, c), b && b(Sm(c)))
};
ar.prototype.j = function(a, b, c) {
    c = c.target;
    if (Tm(c)) {
        c = hr(c, "handleTextResult_");
        var d = [];
        if (a) d.push(tf(c) ? c[0] : c);
        else if (tf(c))
            for (a = 0; a < c.length; ++a) d.push(tf(c[a]) ? c[a][0] : c[a]);
        b(d)
    } else ir(this, c), b(null, c.Zc)
};
var hr = function(a, b) {
        var c = Um(a);
        a = {
            "class": "trans.common.TranslationAPI",
            func: b,
            url: String(a.Sd)
        };
        try {
            var d = JSON.parse(c)
        } catch (e) {
            throw d = Ko.J(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
        }
        return d
    },
    gr = function(a) {
        return Tm(a) && ("[" == Um(a)[0] || "{" == Um(a)[0])
    },
    jr = {},
    kr = (jr[1] = 15, jr[2] = 16, jr[3] = 17, jr[4] = 18, jr[5] = 19, jr[6] = 20, jr[7] = 21, jr[8] = 22, jr[9] = 23, jr),
    ir = function(a, b) {
        var c = b.Zc;
        wo(a.F, 156, c in kr ? kr[c] : 0);
        a = Ko.J();
        c = String(b.Sd);
        b = Um(b);
        a.log("invalidResponse", {
            q: c.substring(0, 500),
            ql: c.length,
            r: b.substring(0, 500),
            rl: b.length
        })
    };
ar.prototype.m = u("b");
var lr = function(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return mf(a) && a.match(/\S+/g) || []
    },
    mr = function(a, b) {
        return a.classList ? a.classList.contains(b) : Pf(lr(a), b)
    },
    U = function(a, b) {
        if (a == null) return false;
        a.classList ? a.classList.add(b) : mr(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    },
    nr = function(a, b) {
        if (a.classList) C(b, function(b) {
            U(a, b)
        });
        else {
            var c = {};
            C(lr(a), function(a) {
                c[a] = !0
            });
            C(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    },
    V = function(a, b) {
        a.classList ?
            a.classList.remove(b) : mr(a, b) && (a.className = If(lr(a), function(a) {
            return a != b
        }).join(" "))
    },
    or = function(a, b) {
        a.classList ? C(b, function(b) {
            V(a, b)
        }) : a.className = If(lr(a), function(a) {
            return !Pf(b, a)
        }).join(" ")
    },
    pr = function(a, b, c) {
        c ? U(a, b) : V(a, b)
    },
    qr = function(a, b, c) {
        V(a, b);
        U(a, c)
    };
var sr = function(a) {
        rr();
        return Ck(a)
    },
    tr = function(a) {
        rr();
        return jk(a)
    },
    rr = qf;
var wr = function(a, b, c) {
        a.innerHTML = ur(b(c || vr, void 0, void 0))
    },
    xr = function(a, b) {
        var c = al();
        a = a(b || vr, void 0, void 0);
        b = ur(a);
        a instanceof zp ? a = Ap(a) : (rr(), a = Gk(b, null));
        return ql(c.a, a)
    },
    yr = function(a, b, c, d) {
        a = a(b || vr, void 0, c);
        d = Ul(d || al(), k);
        a = ur(a);
        d.innerHTML = a;
        1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
        return d
    },
    ur = function(a) {
        if (!wf(a)) return String(a);
        if (a instanceof zp) {
            if (a.gc === wp) return a.Da();
            if (a.gc === yp) return sg(a.Da())
        }
        return "zSoyz"
    },
    vr = {};
var zr = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
zr.prototype.contains = function(a) {
    return this && a ? a instanceof zr ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.b >= this.left && a.b <= this.right && a.a >= this.top && a.a <= this.bottom : !1
};
zr.prototype.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
zr.prototype.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
zr.prototype.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var Ar = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
Ar.prototype.contains = function(a) {
    return a instanceof Uk ? a.b >= this.left && a.b <= this.left + this.width && a.a >= this.top && a.a <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};
Ar.prototype.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
Ar.prototype.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
Ar.prototype.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var W = function(a, b, c) {
        if (mf(b))(b = Br(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Br(c, d);
                f && (c.style[f] = e)
            }
    },
    Cr = {},
    Br = function(a, b) {
        if (a == null) return false;
        var c = Cr[b];
        if (!c) {
            var d = Dg(b);
            c = d;
            void 0 === a.style[d] && (d = (gh ? "Webkit" : fh ? "Moz" : F ? "ms" : ch ? "O" : null) + Eg(d), void 0 !== a.style[d] && (c = d));
            Cr[b] = c
        }
        return c
    },
    Dr = function(a, b) {
        var c = $k(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    },
    Er = function(a, b) {
        return Dr(a, b) || (a.currentStyle ?
                a.currentStyle[b] : null) || a.style && a.style[b]
    },
    Gr = function(a, b, c) {
        if (b instanceof Uk) {
            var d = b.b;
            b = b.a
        } else d = b, b = c;
        a.style.left = Fr(d, !1);
        a.style.top = Fr(b, !1)
    },
    Hr = function(a) {
        a = a ? $k(a) : document;
        return !F || yh(9) || gl(al(a).a) ? a.documentElement : a.body
    },
    Ir = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        F && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    },
    Jr = function(a) {
        if (F && !yh(8)) return a.offsetParent;
        var b = $k(a),
            c = Er(a, Nd),
            d = "fixed" == c || c == Xa;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Er(a, Nd), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Xa || "relative" == c)) return a;
        return null
    },
    Lr = function(a) {
        for (var b = new zr(0, Infinity, Infinity, 0), c = al(a), d = c.a.body, e = c.a.documentElement, f = il(c.a); a = Jr(a);)
            if (!(F && 0 == a.clientWidth || gh && 0 ==
                a.clientHeight && a == d) && a != d && a != e && Er(a, "overflow") != Se) {
                var g = Kr(a),
                    l = new Uk(a.clientLeft, a.clientTop);
                g.b += l.b;
                g.a += l.a;
                b.top = Math.max(b.top, g.a);
                b.right = Math.min(b.right, g.b + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.a + a.clientHeight);
                b.left = Math.max(b.left, g.b)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = hl(Vl(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b :
            null
    },
    Or = function(a, b) {
        b = b || il(document);
        var c = b || il(document);
        var d = Kr(a),
            e = Kr(c),
            f = Mr(c);
        if (c == il(document)) {
            var g = d.b - c.scrollLeft;
            d = d.a - c.scrollTop;
            F && !yh(10) && (g += f.left, d += f.top)
        } else g = d.b - e.b - f.left, d = d.a - e.a - f.top;
        a = Nr(a);
        f = c.clientHeight - a.height;
        e = c.scrollLeft;
        var l = c.scrollTop;
        e += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
        l += Math.min(d, Math.max(d - f, 0));
        c = new Uk(e, l);
        b.scrollLeft = c.b;
        b.scrollTop = c.a
    },
    Kr = function(a) {
        var b = $k(a),
            c = new Uk(0, 0),
            d = Hr(b);
        if (a == d) return c;
        a = Ir(a);
        b = jl(al(b).a);
        c.b = a.left + b.b;
        c.a = a.top + b.a;
        return c
    },
    Qr = function(a, b) {
        a = Pr(a);
        b = Pr(b);
        return new Uk(a.b - b.b, a.a - b.a)
    },
    Rr = function(a) {
        a = Ir(a);
        return new Uk(a.left, a.top)
    },
    Pr = function(a) {
        if (1 == a.nodeType) return Rr(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new Uk(a.clientX, a.clientY)
    },
    Sr = function(a, b, c) {
        var d = Kr(a);
        b instanceof Uk && (c = b.a, b = b.b);
        Gr(a, a.offsetLeft + (b - d.b), a.offsetTop + (Number(c) - d.a))
    },
    Tr = function(a, b, c) {
        if (b instanceof Xk) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = Fr(b, !0);
        a.style.height = Fr(c, !0)
    },
    Fr = function(a, b) {
        typeof a == Dd && (a = (b ? Math.round(a) : a) + Od);
        return a
    },
    Ur = function(a) {
        var b = Nr;
        if (Er(a, "display") != Cd) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = Mc;
        c.position = Xa;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    },
    Nr = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = gh && !b && !c;
        return y(b) && !d || !a.getBoundingClientRect ? new Xk(b, c) : (a = Ir(a), new Xk(a.right - a.left, a.bottom - a.top))
    },
    Vr = function(a) {
        var b = Kr(a);
        a = Ur(a);
        return new Ar(b.b, b.a, a.width, a.height)
    },
    Wr = function(a, b) {
        a = a.style;
        "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    },
    X = function(a, b) {
        a.style.display = b ? "" : Cd
    },
    Xr = function(a) {
        return a.style.display != Cd
    },
    Zr = function(a) {
        var b = al(void 0),
            c = b.a;
        if (F && c.createStyleSheet) return b = c.createStyleSheet(), Yr(b, a), b;
        c = bl(b.a, "HEAD", void 0, void 0)[0];
        if (!c) {
            var d = bl(b.a, "BODY", void 0, void 0)[0];
            c = b.b("HEAD");
            d.parentNode.insertBefore(c, d)
        }
        d = b.b("STYLE");
        Yr(d, a);
        b.appendChild(c, d);
        return d
    },
    Yr = function(a, b) {
        b instanceof Bk && b.constructor === Bk && b.b === Ak ? b = b.a : (sf(b), b = "type_error:SafeStyleSheet");
        F && y(a.cssText) ? a.cssText = b : a.innerHTML = b
    },
    $r = function(a) {
        return Vd == Er(a, Hb)
    },
    as = fh ? "MozUserSelect" : gh || dh ? "WebkitUserSelect" : null,
    bs = function(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (as) {
            if (b = b ? Cd : "", a.style && (a.style[as] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[as] = b)
            }
        } else if (F || ch)
            if (b = b ? "on" :
                    "", a.setAttribute("unselectable", b), c)
                for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    },
    cs = function(a, b, c) {
        a = a.style;
        fh ? a.MozBoxSizing = c : gh ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + Od;
        a.height = Math.max(b.height, 0) + Od
    },
    ds = function(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c],
            f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return +b
    },
    es = function(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] :
            null) ? ds(a, b, rd, "pixelLeft") : 0
    },
    fs = function(a, b) {
        if (F) {
            var c = es(a, b + "Left"),
                d = es(a, b + "Right"),
                e = es(a, b + "Top");
            a = es(a, b + "Bottom");
            return new zr(e, d, a, c)
        }
        c = Dr(a, b + "Left");
        d = Dr(a, b + "Right");
        e = Dr(a, b + "Top");
        a = Dr(a, b + "Bottom");
        return new zr(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    },
    gs = function(a) {
        return fs(a, "padding")
    },
    hs = {
        thin: 2,
        medium: 4,
        thick: 6
    },
    is = function(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == Cd) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in
        hs ? hs[b] : ds(a, b, rd, "pixelLeft")
    },
    Mr = function(a) {
        if (F && !yh(9)) {
            var b = is(a, "borderLeft"),
                c = is(a, "borderRight"),
                d = is(a, "borderTop");
            a = is(a, "borderBottom");
            return new zr(d, c, a, b)
        }
        b = Dr(a, "borderLeftWidth");
        c = Dr(a, "borderRightWidth");
        d = Dr(a, "borderTopWidth");
        a = Dr(a, "borderBottomWidth");
        return new zr(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
var js = function(a) {
    vi.call(this);
    this.o = a;
    this.c = {}
};
A(js, vi);
var ks = [];
js.prototype.G = function(a, b, c, d) {
    return ls(this, a, b, c, d)
};
var ms = function(a, b, c, d) {
        ls(a, b, r, c, !1, d)
    },
    ls = function(a, b, c, d, e, f) {
        tf(c) || (c && (ks[0] = c.toString()), c = ks);
        for (var g = 0; g < c.length; g++) {
            var l = L(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!l) break;
            a.c[l.key] = l
        }
        return a
    };
js.prototype.Kg = function(a, b, c, d) {
    return ns(this, a, b, c, d)
};
var ns = function(a, b, c, d, e, f) {
    if (tf(c))
        for (var g = 0; g < c.length; g++) ns(a, b, c[g], d, e, f);
    else {
        b = Pi(b, c, d || a.handleEvent, e, f || a.o || a);
        if (!b) return a;
        a.c[b.key] = b
    }
    return a
};
js.prototype.Aa = function(a, b, c, d, e) {
    if (tf(b))
        for (var f = 0; f < b.length; f++) this.Aa(a, b[f], c, d, e);
    else c = c || this.handleEvent, d = wf(d) ? !!d.capture : !!d, e = e || this.o || this, c = Qi(c), d = !!d, b = Ei(a) ? a.Kd(b, c, d, e) : a ? (a = Si(a)) ? a.Kd(b, c, d, e) : null : null, b && (Xi(b), delete this.c[b.key]);
    return this
};
var os = function(a) {
    Jg(a.c, function(a, c) {
        this.c.hasOwnProperty(c) && Xi(a)
    }, a);
    a.c = {}
};
js.prototype.N = function() {
    js.w.N.call(this);
    os(this)
};
js.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
var ps = Ze();
rf(ps);
ps.prototype.a = 0;
var Y = function(a) {
    M.call(this);
    this.a = a || al();
    this.wa = qs;
    this.Pa = null;
    this.va = !1;
    this.D = null;
    this.L = void 0;
    this.H = this.o = this.C = this.X = null;
    this.Ma = !1
};
A(Y, M);
Y.prototype.Sb = ps.J();
var qs = null,
    rs = function(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? Oc : Pe;
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? Xd : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? Qb : kb;
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    },
    ss = function(a) {
        return a.Pa || (a.Pa = ":" + (a.Sb.a++).toString(36))
    },
    ts = function(a, b) {
        if (a.C && a.C.H) {
            var c = a.C.H,
                d = a.Pa;
            d in c && delete c[d];
            Og(a.C.H, b, a)
        }
        a.Pa = b
    };
Y.prototype.l = u("D");
Y.prototype.lc = function(a) {
    return this.D ? this.a.lc(a, this.D) : null
};
var Z = function(a) {
        a.L || (a.L = new js(a));
        return a.L
    },
    vs = function(a, b) {
        if (a == b) throw Error(Ta);
        if (b && a.C && a.Pa && us(a.C, a.Pa) && a.C != b) throw Error(Ta);
        a.C = b;
        Y.w.Ad.call(a, b)
    };
Y.prototype.getParent = u("C");
Y.prototype.Ad = function(a) {
    if (this.C && this.C != a) throw Error("Method not supported");
    Y.w.Ad.call(this, a)
};
Y.prototype.sa = function() {
    this.D = Ul(this.a, k)
};
Y.prototype.ia = function(a) {
    ws(this, a)
};
var ws = function(a, b, c) {
    if (a.va) throw Error(Ba);
    a.D || a.sa();
    b ? b.insertBefore(a.D, c || null) : a.a.a.body.appendChild(a.D);
    a.C && !a.C.va || a.W()
};
w = Y.prototype;
w.S = function(a) {
    //if(a.id == null) return false;
    if (this.va) throw Error(Ba);
    if (a && this.md(a)) {
        this.Ma = !0;
        var b = $k(a);
        this.a && this.a.a == b || (this.a = al(a));
        this.Z(a);
        this.W()
    }// else throw Error("Invalid element to decorate");
};
w.md = v(!0);
w.Z = $e("D");
w.W = function() {
    this.va = !0;
    xs(this, function(a) {
        !a.va && a.l() && a.W()
    })
};
w.hb = function() {
    xs(this, function(a) {
        a.va && a.hb()
    });
    this.L && os(this.L);
    this.va = !1
};
w.N = function() {
    this.va && this.hb();
    this.L && (this.L.Ba(), delete this.L);
    xs(this, function(a) {
        a.Ba()
    });
    !this.Ma && this.D && xl(this.D);
    this.C = this.X = this.D = this.H = this.o = null;
    Y.w.N.call(this)
};
var zs = function(a, b, c) {
    a.Mc(b, ys(a), c)
};
Y.prototype.Mc = function(a, b, c) {
    if (a.va && (c || !this.va)) throw Error(Ba);
    if (0 > b || b > ys(this)) throw Error("Child component index out of bounds");
    this.H && this.o || (this.H = {}, this.o = []);
    if (a.getParent() == this) {
        var d = ss(a);
        this.H[d] = a;
        Sf(this.o, a)
    } else Og(this.H, ss(a), a);
    vs(a, this);
    Yf(this.o, b, 0, a);
    a.va && this.va && a.getParent() == this ? (c = this.Lb(), b = c.childNodes[b] || null, b != a.l() && c.insertBefore(a.l(), b)) : c ? (this.D || this.sa(), b = As(this, b + 1), ws(a, this.Lb(), b ? b.D : null)) : this.va && !a.va && a.D && a.D.parentNode && 1 ==
    a.D.parentNode.nodeType && a.W()
};
Y.prototype.Lb = u("D");
var Bs = function(a) {
        null == a.wa && (a.wa = $r(a.va ? a.D : a.a.a.body));
        return a.wa
    },
    ys = function(a) {
        return a.o ? a.o.length : 0
    },
    us = function(a, b) {
        a.H && b ? (a = a.H, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    },
    As = function(a, b) {
        return a.o ? a.o[b] || null : null
    },
    xs = function(a, b, c) {
        a.o && C(a.o, b, c)
    },
    Cs = function(a, b) {
        return a.o && b ? Hf(a.o, b) : -1
    };
Y.prototype.removeChild = function(a, b) {
    if (a) {
        var c = mf(a) ? a : ss(a);
        a = us(this, c);
        if (c && a) {
            var d = this.H;
            c in d && delete d[c];
            Sf(this.o, a);
            b && (a.hb(), a.D && xl(a.D));
            vs(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
var Ds = function(a) {
    for (var b = []; a.o && 0 != a.o.length;) b.push(a.removeChild(As(a, 0), !0))
};
var Es = function(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !fh;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    },
    Hs = function(a, b, c, d, e, f) {
        if (!(F || dh || gh && wh("525"))) return !0;
        if (jh && e) return Fs(a);
        if (e && !d) return !1;
        nf(b) &&
        (b = Gs(b));
        e = 17 == b || 18 == b || jh && 91 == b;
        if ((!c || jh) && e || jh && 16 == b && (d || f)) return !1;
        if ((gh || dh) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (F && d && b == a) return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !(gh || dh)
        }
        return Fs(a)
    },
    Fs = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (gh || dh) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    },
    Gs = function(a) {
        if (fh) a = Is(a);
        else if (jh && gh) switch (a) {
            case 93:
                a = 91
        }
        return a
    },
    Is = function(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
var Ks = function(a, b) {
    M.call(this);
    a && Js(this, a, b)
};
A(Ks, M);
w = Ks.prototype;
w.D = null;
w.lf = null;
w.Gg = null;
w.mf = null;
w.wb = -1;
w.Hc = -1;
w.Of = !1;
var Ls = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Ms = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    Ns = F || dh || gh && wh("525"),
    Os = jh && fh;
Ks.prototype.a = function(a) {
    if (gh || dh)
        if (17 == this.wb && !a.ctrlKey || 18 == this.wb && !a.altKey || jh && 91 == this.wb && !a.metaKey) this.Hc = this.wb = -1; - 1 == this.wb && (a.ctrlKey && 17 != a.keyCode ? this.wb = 17 : a.altKey && 18 != a.keyCode ? this.wb = 18 : a.metaKey && 91 != a.keyCode && (this.wb = 91));
    Ns && !Hs(a.keyCode, this.wb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Hc = Gs(a.keyCode), Os && (this.Of = a.altKey))
};
Ks.prototype.b = function(a) {
    this.Hc = this.wb = -1;
    this.Of = a.altKey
};
Ks.prototype.handleEvent = function(a) {
    var b = a.a,
        c = b.altKey;
    if (F && a.type == ld) {
        var d = this.Hc;
        var e = 13 != d && 27 != d ? b.keyCode : 0
    } else(gh || dh) && a.type == ld ? (d = this.Hc, e = 0 <= b.charCode && 63232 > b.charCode && Fs(d) ? b.charCode : 0) : ch && !gh ? (d = this.Hc, e = Fs(d) ? b.keyCode : 0) : (d = b.keyCode || this.Hc, e = b.charCode || 0, Os && (c = this.Of), jh && 63 == e && 224 == d && (d = 191));
    var f = d = Gs(d);
    d ? 63232 <= d && d in Ls ? f = Ls[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Ms && (f = Ms[b.keyIdentifier]);
    a = f == this.wb;
    this.wb = f;
    b = new Ps(f, e,
        a, b);
    b.altKey = c;
    this.dispatchEvent(b)
};
Ks.prototype.l = u("D");
var Js = function(a, b, c) {
        a.mf && Qs(a);
        a.D = b;
        a.lf = L(a.D, ld, a, c);
        a.Gg = L(a.D, kd, a.a, c, a);
        a.mf = L(a.D, md, a.b, c, a)
    },
    Qs = function(a) {
        a.lf && (Xi(a.lf), Xi(a.Gg), Xi(a.mf), a.lf = null, a.Gg = null, a.mf = null);
        a.D = null;
        a.wb = -1;
        a.Hc = -1
    };
Ks.prototype.N = function() {
    Ks.w.N.call(this);
    Qs(this)
};
var Ps = function(a, b, c, d) {
    Ai.call(this, d);
    this.type = jd;
    this.keyCode = a;
    this.repeat = c
};
A(Ps, Ai);
var Rs;
Tg(["A", "AREA", Aa, "HEAD", Fa, "LINK", "MENU", "META", "OPTGROUP", "OPTION", "PROGRESS", "STYLE", Ma, "SOURCE", Qa, "TITLE", "TRACK"]);
var Ss = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" "),
    Ts = function(a, b) {
        a = document.getElementById(":31");
        b ? a.setAttribute(Ud, b) : a.removeAttribute(Ud)
    },
    Us = function(a, b, c) {
        a = document.getElementById(":31");
        tf(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (Rs || (Rs = {
            atomic: !1,
            autocomplete: Cd,
            dropeffect: Cd,
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: Qe,
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: Cd,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = Rs, b in c ? a.setAttribute(d,
            c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    },
    Vs = function(a, b) {
        a = a.getAttribute("aria-" + b);
        return null == a || void 0 == a ? "" : String(a)
    },
    Ws = function(a) {
        var b = Vs(a, Za);
        return $k(a).getElementById(b)
    },
    Xs = function(a, b) {
        var c = "";
        b && (c = b.id);
        Us(a, Za, c)
    };
var Ys = Ze(),
    Zs;
rf(Ys);
var at = function() {
        var a = new $s;
        a.T = v("jfk-checkbox");
        return a
    },
    bt = {
        button: "pressed",
        checkbox: tb,
        menuitem: Zd,
        menuitemcheckbox: tb,
        menuitemradio: tb,
        radio: tb,
        tab: Zd,
        treeitem: Zd
    };
Ys.prototype.ac = Ze();
Ys.prototype.Wa = function(a) {
    return a.a.b(k, ct(this, a).join(" "), a.Da())
};
Ys.prototype.vb = function(a) {
    return a
};
var et = function(a, b, c) {
    if (a = a.l ? a.l() : a) {
        var d = [b];
        F && !wh("7") && (d = dt(lr(a), b), d.push(b));
        (c ? nr : or)(a, d)
    }
};
Ys.prototype.Ec = v(!0);
Ys.prototype.S = function(a, b) {
    b.id && ts(a, b.id);
    var c = this.vb(b);
    c && c.firstChild ? ft(a, c.firstChild.nextSibling ? Vf(c.childNodes) : c.firstChild) : a.Tc = null;
    var d = 0,
        e = this.T(),
        f = this.T(),
        g = !1,
        l = !1,
        m = !1,
        p = Vf(lr(b));
    C(p, function(a) {
        g || a != e ? l || a != f ? d |= this.c(a) : l = !0 : (g = !0, f == e && (l = !0));
        1 == this.c(a) && Nl(c) && Ol(c) && Ml(c, !1)
    }, this);
    a.Fc = d;
    g || (p.push(e), f == e && (l = !0));
    l || p.push(f);
    (a = a.Ib) && p.push.apply(p, a);
    if (F && !wh("7")) {
        var q = dt(p);
        0 < q.length && (p.push.apply(p, q), m = !0)
    }
    if (!g || !l || a || m) b.className = p.join(" ");
    return b
};
Ys.prototype.Uh = function(a) {
    Bs(a) && this.qg(a.l(), !0);
    a.isEnabled() && this.nd(a, a.isVisible())
};
var gt = function(a, b, c) {
        if (a = c || a.ac()) c = b.getAttribute(Ud) || null, a != c && Ts(b, a)
    },
    it = function(a, b, c) {
        b.isVisible() || Us(c, Mc, !b.isVisible());
        b.isEnabled() || a.Wb(c, 1, !b.isEnabled());
        ht(b, 8) && a.Wb(c, 8, b.Ha(8));
        ht(b, 16) && a.Wb(c, 16, b.Ta());
        ht(b, 64) && a.Wb(c, 64, b.Ha(64))
    };
w = Ys.prototype;
w.Re = function(a, b) {
    bs(a, !b, !F && !ch)
};
w.qg = function(a, b) {
    et(a, this.T() + "-rtl", b)
};
w.pg = function(a) {
    var b;
    return ht(a, 32) && (b = a.l()) ? Nl(b) && Ol(b) : !1
};
w.nd = function(a, b) {
    var c;
    if (ht(a, 32) && (c = a.l())) {
        if (!b && a.Ha(32)) {
            try {
                c.blur()
            } catch (d) {}
            a.Ha(32) && a.Se(null)
        }(Nl(c) && Ol(c)) != b && Ml(c, b)
    }
};
w.setVisible = function(a, b) {
    X(a, b);
    a && Us(a, Mc, !b)
};
w.Sc = function(a, b, c) {
    var d = a.l();
    if (d) {
        var e = this.a(b);
        e && et(a, e, c);
        this.Wb(d, b, c)
    }
};
w.Wb = function(a, b, c) {
    Zs || (Zs = {
        1: "disabled",
        8: Zd,
        16: tb,
        64: "expanded"
    });
    b = Zs[b];
    var d = a.getAttribute(Ud) || null;
    d && (d = bt[d] || b, b = b == tb || b == Zd ? d : b);
    b && Us(a, b, c)
};
w.Mb = function(a, b) {
    var c = this.vb(a);
    c && (ul(c), b && (mf(b) ? Q(c, b) : (a = function(a) {
        if (a) {
            var b = $k(c);
            c.appendChild(mf(a) ? b.createTextNode(a) : a)
        }
    }, tf(b) ? C(b, a) : !uf(b) || "nodeType" in b ? a(b) : C(Vf(b), a))))
};
w.T = v("goog-control");
var ct = function(a, b) {
        var c = a.T(),
            d = [c],
            e = a.T();
        e != c && d.push(e);
        c = b.Fc;
        for (e = []; c;) {
            var f = c & -c;
            e.push(a.a(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (a = b.Ib) && d.push.apply(d, a);
        F && !wh("7") && d.push.apply(d, dt(d));
        return d
    },
    dt = function(a, b) {
        var c = [];
        b && (a = Tf(a, [b]));
        C([], function(d) {
            !Mf(d, Cf(Pf, a)) || b && !Pf(d, b) || c.push(d.join("_"))
        });
        return c
    };
Ys.prototype.a = function(a) {
    this.b || jt(this);
    return this.b[a]
};
Ys.prototype.c = function(a) {
    if (!this.L) {
        this.b || jt(this);
        var b = this.b,
            c = {},
            d;
        for (d in b) c[b[d]] = d;
        this.L = c
    }
    a = parseInt(this.L[a], 10);
    return isNaN(a) ? 0 : a
};
var jt = function(a) {
    var b = a.T();
    b.replace(/\xa0|\s/g, " ");
    a.b = {
        1: b + ia,
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
    }
};
var kt = Ze();
A(kt, Ys);
rf(kt);
w = kt.prototype;
w.ac = v(nb);
w.Wb = function(a, b, c) {
    switch (b) {
        case 8:
        case 16:
            Us(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            kt.w.Wb.call(this, a, b, c)
    }
};
w.Wa = function(a) {
    var b = kt.w.Wa.call(this, a);
    lt(b, a.m);
    var c = a.P();
    c && this.Oe(b, c);
    ht(a, 16) && this.Wb(b, 16, a.Ta());
    return b
};
w.S = function(a, b) {
    b = kt.w.S.call(this, a, b);
    var c = this.P(b);
    a.Ja = c;
    a.m = b.title;
    ht(a, 16) && this.Wb(b, 16, a.Ta());
    return b
};
w.P = qf;
w.Oe = qf;
var lt = function(a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    },
    nt = function(a, b, c) {
        var d = Bs(b),
            e = a.T() + "-collapse-left";
        a = a.T() + "-collapse-right";
        mt(b, d ? a : e, !!(c & 1));
        mt(b, d ? e : a, !!(c & 2))
    };
kt.prototype.T = v("goog-button");
var pt = function(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!vf(b)) throw Error("Invalid decorator function " + b);
        ot[a] = b
    },
    qt = {},
    ot = {};
var rt = function(a, b, c) {
    Y.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = zf(b);
            if (d = qt[d]) break;
            b = b.w ? b.w.constructor : null
        }
        b = d ? vf(d.J) ? d.J() : new d : null
    }
    this.c = b;
    this.Tc = y(a) ? a : null
};
A(rt, Y);
w = rt.prototype;
w.Tc = null;
w.Fc = 0;
w.Wd = 39;
w.dc = 255;
w.Vd = 0;
w.Te = !0;
w.Ib = null;
w.bf = !0;
w.re = !1;
w.sg = null;
var tt = function(a, b) {
        a.va && b != a.bf && st(a, b);
        a.bf = b
    },
    ut = function(a, b) {
        b && (a.Ib ? Pf(a.Ib, b) || a.Ib.push(b) : a.Ib = [b], et(a, b, !0))
    },
    mt = function(a, b, c) {
        c ? ut(a, b) : b && a.Ib && Sf(a.Ib, b) && (0 == a.Ib.length && (a.Ib = null), et(a, b, !1))
    };
w = rt.prototype;
w.sa = function() {
    var a = this.c.Wa(this);
    this.D = a;
    gt(this.c, a, this.Pd());
    this.re || this.c.Re(a, !1);
    this.isVisible() || this.c.setVisible(a, !1)
};
w.Pd = u("sg");
w.Lb = function() {
    return this.c.vb(this.l())
};
w.md = function(a) {
    return this.c.Ec(a)
};
w.Z = function(a) {
    this.D = a = this.c.S(this, a);
    gt(this.c, a, this.Pd());
    this.re || this.c.Re(a, !1);
    this.Te = a.style.display != Cd
};
w.W = function() {
    rt.w.W.call(this);
    it(this.c, this, this.D);
    this.c.Uh(this);
    if (this.Wd & -2 && (this.bf && st(this, !0), ht(this, 32))) {
        var a = this.l();
        if (a) {
            var b = this.A || (this.A = new Ks);
            Js(b, a);
            Z(this).G(b, jd, this.Sa).G(a, Qb, this.nk).G(a, kb, this.Se)
        }
    }
};
var st = function(a, b) {
    var c = Z(a),
        d = a.l();
    b ? (c.G(d, zd, a.rg).G(d, wd, a.Ya).G(d, Ad, a.jb).G(d, yd, a.Ag), a.Rd != qf && c.G(d, zb, a.Rd), F && (wh(9) || c.G(d, "dblclick", a.ai), a.I || (a.I = new vt(a), xi(a, a.I)))) : (c.Aa(d, zd, a.rg).Aa(d, wd, a.Ya).Aa(d, Ad, a.jb).Aa(d, yd, a.Ag), a.Rd != qf && c.Aa(d, zb, a.Rd), F && (wh(9) || c.Aa(d, "dblclick", a.ai), wi(a.I), a.I = null))
};
rt.prototype.hb = function() {
    rt.w.hb.call(this);
    this.A && Qs(this.A);
    this.isVisible() && this.isEnabled() && this.c.nd(this, !1)
};
rt.prototype.N = function() {
    rt.w.N.call(this);
    this.A && (this.A.Ba(), delete this.A);
    delete this.c;
    this.I = this.Ib = this.Tc = null
};
rt.prototype.Da = u("Tc");
rt.prototype.g = function(a) {
    this.c.Mb(this.l(), a);
    this.Tc = a
};
var ft = function(a, b) {
    a.Tc = b
};
rt.prototype.Va = function() {
    var a = this.Da();
    if (!a) return "";
    a = mf(a) ? a : tf(a) ? Jf(a, Rl).join("") : Ql(a);
    return fg(a)
};
var wt = function(a, b) {
    a.g(b)
};
rt.prototype.isVisible = u("Te");
rt.prototype.setVisible = function(a, b) {
    return b || this.Te != a && this.dispatchEvent(a ? de : Nc) ? ((b = this.l()) && this.c.setVisible(b, a), this.isEnabled() && this.c.nd(this, a), this.Te = a, !0) : !1
};
rt.prototype.isEnabled = function() {
    return !this.Ha(1)
};
rt.prototype.ea = function(a) {
    var b = this.getParent();
    b && typeof b.isEnabled == Ub && !b.isEnabled() || !xt(this, 1, !a) || (a || (yt(this, !1), zt(this, !1)), this.isVisible() && this.c.nd(this, a), At(this, 1, !a, !0))
};
var zt = function(a, b) {
    xt(a, 2, b) && At(a, 2, b)
};
rt.prototype.kb = function() {
    return this.Ha(4)
};
var yt = function(a, b) {
    xt(a, 4, b) && At(a, 4, b)
};
w = rt.prototype;
w.Xg = function(a) {
    xt(this, 8, a) && At(this, 8, a)
};
w.Ta = function() {
    return this.Ha(16)
};
w.Ka = function(a) {
    xt(this, 16, a) && At(this, 16, a)
};
w.Ic = function(a) {
    xt(this, 32, a) && At(this, 32, a)
};
w.Na = function(a) {
    xt(this, 64, a) && At(this, 64, a)
};
w.Ha = function(a) {
    return !!(this.Fc & a)
};
var At = function(a, b, c, d) {
        d || 1 != b ? ht(a, b) && c != a.Ha(b) && (a.c.Sc(a, b, c), a.Fc = c ? a.Fc | b : a.Fc & ~b) : a.ea(!c)
    },
    ht = function(a, b) {
        return !!(a.Wd & b)
    };
rt.prototype.Fa = function(a, b) {
    if (this.va && this.Ha(a) && !b) throw Error(Ba);
    !b && this.Ha(a) && At(this, a, !1);
    this.Wd = b ? this.Wd | a : this.Wd & ~a
};
var Bt = function(a, b) {
        return !!(a.dc & b) && ht(a, b)
    },
    xt = function(a, b, c) {
        return ht(a, b) && a.Ha(b) != c && (!(a.Vd & b) || a.dispatchEvent(rs(b, c))) && !a.hc
    };
w = rt.prototype;
w.rg = function(a) {
    (!a.relatedTarget || !El(this.l(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Bt(this, 2) && zt(this, !0)
};
w.Ag = function(a) {
    a.relatedTarget && El(this.l(), a.relatedTarget) || !this.dispatchEvent("leave") || (Bt(this, 4) && yt(this, !1), Bt(this, 2) && zt(this, !1))
};
w.Rd = qf;
w.Ya = function(a) {
    this.isEnabled() && (Bt(this, 2) && zt(this, !0), Ci(a) && (Bt(this, 4) && yt(this, !0), this.c && this.c.pg(this) && this.l().focus()));
    !this.re && Ci(a) && a.preventDefault()
};
w.jb = function(a) {
    this.isEnabled() && (Bt(this, 2) && zt(this, !0), this.kb() && this.wc(a) && Bt(this, 4) && yt(this, !1))
};
w.ai = function(a) {
    this.isEnabled() && this.wc(a)
};
w.wc = function(a) {
    Bt(this, 16) && this.Ka(!this.Ta());
    Bt(this, 8) && this.Xg(!0);
    Bt(this, 64) && this.Na(!this.Ha(64));
    var b = new J(n, this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Sg = a.Sg);
    return this.dispatchEvent(b)
};
w.nk = function() {
    Bt(this, 32) && this.Ic(!0)
};
w.Se = function() {
    Bt(this, 4) && yt(this, !1);
    Bt(this, 32) && this.Ic(!1)
};
w.Sa = function(a) {
    return this.isVisible() && this.isEnabled() && this.Uc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
w.Uc = function(a) {
    return 13 == a.keyCode && this.wc(a)
};
if (!vf(rt)) throw Error("Invalid component class " + rt);
if (!vf(Ys)) throw Error("Invalid renderer class " + Ys);
var Ct = zf(rt);
qt[Ct] = Ys;
pt("goog-control", function() {
    return new rt(null)
});
var vt = function(a) {
    vi.call(this);
    this.b = a;
    this.a = !1;
    this.c = new js(this);
    xi(this, this.c);
    a = this.b.D;
    this.c.G(a, wd, this.j).G(a, Ad, this.o).G(a, r, this.g)
};
A(vt, vi);
var Dt = !F || yh(9);
vt.prototype.j = function() {
    this.a = !1
};
vt.prototype.o = function() {
    this.a = !0
};
var Et = function(a, b) {
    if (!Dt) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
};
vt.prototype.g = function(a) {
    if (this.a) this.a = !1;
    else {
        var b = a.a,
            c = b.button,
            d = b.type,
            e = Et(b, wd);
        this.b.Ya(new Ai(e, a.currentTarget));
        e = Et(b, Ad);
        this.b.jb(new Ai(e, a.currentTarget));
        Dt || (b.button = c, b.type = d)
    }
};
vt.prototype.N = function() {
    this.b = null;
    vt.w.N.call(this)
};
var Ft = Ze();
A(Ft, kt);
rf(Ft);
w = Ft.prototype;
w.ac = Ze();
w.Wa = function(a) {
    tt(a, !1);
    a.dc &= -256;
    a.Fa(32, !1);
    return a.a.b(Aa, {
        "class": ct(this, a).join(" "),
        disabled: !a.isEnabled(),
        title: a.m || "",
        value: a.P() || ""
    }, a.Va() || "")
};
w.Ec = function(a) {
    return a.tagName == Aa || a.tagName == Fa && (a.type == nb || "submit" == a.type || "reset" == a.type)
};
w.S = function(a, b) {
    tt(a, !1);
    a.dc &= -256;
    a.Fa(32, !1);
    if (b.disabled) {
        var c = this.a(1);
        U(b, c)
    }
    return Ft.w.S.call(this, a, b)
};
w.Uh = function(a) {
    Z(a).G(a.l(), r, a.wc)
};
w.Re = qf;
w.qg = qf;
w.pg = function(a) {
    return a.isEnabled()
};
w.nd = qf;
w.Sc = function(a, b, c) {
    Ft.w.Sc.call(this, a, b, c);
    (a = a.l()) && 1 == b && (a.disabled = c)
};
w.P = function(a) {
    return a.value
};
w.Oe = function(a, b) {
    a && (a.value = b)
};
w.Wb = qf;
var Gt = function(a, b, c) {
    rt.call(this, a, b || Ft.J(), c)
};
A(Gt, rt);
w = Gt.prototype;
w.P = u("Ja");
w.Pe = function(a) {
    this.Ja = a;
    this.c.Oe(this.l(), a)
};
w.N = function() {
    Gt.w.N.call(this);
    delete this.Ja;
    delete this.m
};
w.W = function() {
    Gt.w.W.call(this);
    if (ht(this, 32)) {
        var a = this.l();
        a && Z(this).G(a, md, this.Uc)
    }
};
w.Uc = function(a) {
    return 13 == a.keyCode && a.type == jd || 32 == a.keyCode && a.type == md ? this.wc(a) : 32 == a.keyCode
};
pt("goog-button", function() {
    return new Gt(null)
});
var Ht = function(a) {
    a = a || {};
    var b = a.content,
        c = Ep,
        d = '<div role="button"' + (a.id ? ' id="' + Jp(a.id) + '"' : "") + ' class="';
    var e = a || {};
    var f = "goog-inline-block jfk-button ",
        g = e.style;
    switch (wf(g) ? g.toString() : g) {
        case 0:
            f += gd;
            break;
        case 2:
            f += cd;
            break;
        case 3:
            f += "jfk-button-primary";
            break;
        case 1:
            f += "jfk-button-default";
            break;
        case 4:
            f += "jfk-button-flat";
            break;
        case 5:
            f += "jfk-button-mini";
            break;
        case 6:
            f += "jfk-button-contrast";
            break;
        default:
            f += gd
    }
    f += (1 == e.width ? " jfk-button-narrow" : "") + (e.checked ? " jfk-button-checked" :
            "") + (e.Tf ? " " + e.Tf : "") + (e.disabled ? " jfk-button-disabled" : "");
    return c(d + Jp(new Bp(f, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.ah ? Jp(a.ah) : "0") + '"') + (a.title ? a.Dm ? ' data-tooltip="' + Jp(a.title) + '"' : ' title="' + Jp(a.title) + '"' : "") + (a.value ? ' value="' + Jp(a.value) + '"' : "") + (a.attributes ? " " + Lp(a.attributes) : "") + ">" + T(null != b ? b : "") + qa)
};
var It = function(a, b, c) {
    vi.call(this);
    this.Hb = a;
    this.c = b || 0;
    this.a = c;
    this.b = z(this.kg, this)
};
A(It, vi);
w = It.prototype;
w.Pa = 0;
w.N = function() {
    It.w.N.call(this);
    this.stop();
    delete this.Hb;
    delete this.a
};
w.start = function(a) {
    this.stop();
    this.Pa = Mj(this.b, y(a) ? a : this.c)
};
w.stop = function() {
    this.kb() && Nj(this.Pa);
    this.Pa = 0
};
w.kb = function() {
    return 0 != this.Pa
};
w.kg = function() {
    this.Pa = 0;
    this.Hb && this.Hb.call(this.a)
};
var Lt = function(a) {
        return vg(gg(a.replace(Jt, function(a, c) {
            return Kt.test(c) ? "" : " "
        }).replace(/[\t\n ]+/g, " ")))
    },
    Kt = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,
    Jt = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
var Mt = function() {
    if (kh) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(Fg)) ? a[1] : "0"
    }
    return jh ? (a = /10[_.][0-9_.]+/, (a = a.exec(Fg)) ? a[0].replace(/_/g, ".") : "10") : lh ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(Fg)) ? a[1] : "") : mh || nh || oh ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(Fg)) ? a[1].replace(/_/g, ".") : "") : ""
}();
var Qt = function(a, b, c, d, e, f, g, l, m) {
        var p = Nt(c),
            q = Vr(a),
            B = Lr(a);
        if (B) {
            var D = new Ar(B.left, B.top, B.right - B.left, B.bottom - B.top);
            B = Math.max(q.left, D.left);
            var K = Math.min(q.left + q.width, D.left + D.width);
            if (B <= K) {
                var ea = Math.max(q.top, D.top);
                D = Math.min(q.top + q.height, D.top + D.height);
                ea <= D && (q.left = B, q.top = ea, q.width = K - B, q.height = D - ea)
            }
        }
        B = al(a);
        ea = al(c);
        if (B.a != ea.a) {
            K = B.a.body;
            ea = Vl(ea);
            D = new Uk(0, 0);
            var ha = kl($k(K));
            if ($g(ha, "parent")) {
                var Ra = K;
                do {
                    var Pa = ha == ea ? Kr(Ra) : Rr(Ra);
                    D.b += Pa.b;
                    D.a += Pa.a
                } while (ha &&
                ha != ea && ha != ha.parent && (Ra = ha.frameElement) && (ha = ha.parent))
            }
            K = Wk(D, Kr(K));
            !F || yh(9) || gl(B.a) || (K = Wk(K, jl(B.a)));
            q.left += K.b;
            q.top += K.a
        }
        a = Ot(a, b);
        b = q.left;
        a & 4 ? b += q.width : a & 2 && (b += q.width / 2);
        q = new Uk(b, q.top + (a & 1 ? q.height : 0));
        q = Wk(q, p);
        e && (q.b += (a & 4 ? -1 : 1) * e.b, q.a += (a & 1 ? -1 : 1) * e.a);
        if (g)
            if (m) var pa = m;
            else if (pa = Lr(c)) pa.top -= p.a, pa.right -= p.b, pa.bottom -= p.a, pa.left -= p.b;
        return Pt(q, c, d, f, pa, g, l)
    },
    Nt = function(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Er(a, Nd)) {
                var c =
                    Kr(a);
                if (!b) {
                    b = $r(a);
                    var d;
                    if (d = b) {
                        d = Gh && xn(10);
                        var e = ph && 0 <= Cg(Mt, 10);
                        d = fh || d || e
                    }
                    b = d ? -a.scrollLeft : !b || eh && wh("8") || Er(a, "overflowX") == Se ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = Wk(c, new Uk(b, a.scrollTop))
                }
            }
        }
        return c || new Uk
    },
    Pt = function(a, b, c, d, e, f, g) {
        a = Vk(a);
        var l = Ot(b, c);
        c = Ur(b);
        g = g ? new Xk(g.width, g.height) : new Xk(c.width, c.height);
        a = Vk(a);
        g = new Xk(g.width, g.height);
        var m = 0;
        if (d || 0 != l) l & 4 ? a.b -= g.width + (d ? d.right : 0) : l & 2 ? a.b -= g.width / 2 : d && (a.b += d.left), l & 1 ? a.a -= g.height + (d ? d.bottom :
                0) : d && (a.a += d.top);
        if (f) {
            if (e) {
                d = a;
                l = g;
                m = 0;
                65 == (f & 65) && (d.b < e.left || d.b >= e.right) && (f &= -2);
                132 == (f & 132) && (d.a < e.top || d.a >= e.bottom) && (f &= -5);
                d.b < e.left && f & 1 && (d.b = e.left, m |= 1);
                if (f & 16) {
                    var p = d.b;
                    d.b < e.left && (d.b = e.left, m |= 4);
                    d.b + l.width > e.right && (l.width = Math.min(e.right - d.b, p + l.width - e.left), l.width = Math.max(l.width, 0), m |= 4)
                }
                d.b + l.width > e.right && f & 1 && (d.b = Math.max(e.right - l.width, e.left), m |= 1);
                f & 2 && (m |= (d.b < e.left ? 16 : 0) | (d.b + l.width > e.right ? 32 : 0));
                d.a < e.top && f & 4 && (d.a = e.top, m |= 2);
                f & 32 && (p = d.a, d.a <
                e.top && (d.a = e.top, m |= 8), d.a + l.height > e.bottom && (l.height = Math.min(e.bottom - d.a, p + l.height - e.top), l.height = Math.max(l.height, 0), m |= 8));
                d.a + l.height > e.bottom && f & 4 && (d.a = Math.max(e.bottom - l.height, e.top), m |= 2);
                f & 8 && (m |= (d.a < e.top ? 64 : 0) | (d.a + l.height > e.bottom ? 128 : 0));
                e = m
            } else e = 256;
            m = e
        }
        f = new Ar(0, 0, 0, 0);
        f.left = a.b;
        f.top = a.a;
        f.width = g.width;
        f.height = g.height;
        e = m;
        if (e & 496) return e;
        Gr(b, new Uk(f.left, f.top));
        g = new Xk(f.width, f.height);
        Yk(c, g) || (c = g, a = gl(al($k(b)).a), !F || wh("10") || a && wh("8") ? cs(b, c, lb) : (g =
            b.style, a ? (a = gs(b), b = Mr(b), g.pixelWidth = c.width - b.left - a.left - a.right - b.right, g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width, g.pixelHeight = c.height)));
        return e
    },
    Ot = function(a, b) {
        return (b & 8 && $r(a) ? b ^ 4 : b) & -9
    };
var Rt = Ze();
Rt.prototype.a = Ze();
var St = function(a, b) {
    this.g = a;
    this.m = !!b;
    this.o = {
        0: this.g + "-arrowright",
        1: this.g + "-arrowup",
        2: this.g + "-arrowdown",
        3: this.g + "-arrowleft"
    }
};
A(St, Rt);
w = St.prototype;
w.hf = !1;
w.Qf = 2;
w.qh = 20;
w.Sf = 3;
w.Ng = -5;
w.Mf = !1;
var Tt = function(a, b, c, d) {
    null != b && (a.Sf = b);
    null != c && (a.Qf = c);
    nf(void 0) && (a.qh = NaN);
    nf(d) && (a.Ng = d)
};
St.prototype.a = function(a, b, c) {
    a = this.Qf;
    2 == a && (a = 0);
    Ut(this, this.Sf, a, 2 == this.Qf ? Vt(this.Sf) ? this.c.offsetHeight / 2 : this.c.offsetWidth / 2 : this.qh, 0, c)
};
var Ut = function(a, b, c, d, e, f) {
        if (a.b) {
            var g = Wt(b, c),
                l = a.b;
            var m = Ur(l);
            m = (Vt(b) ? m.height / 2 : m.width / 2) - d;
            var p = Ot(l, g),
                q;
            if (q = Lr(l)) l = Vr(l), l = new zr(l.top, l.left + l.width, l.top + l.height, l.left), Vt(b) ? l.top < q.top && !(p & 1) ? m -= q.top - l.top : l.bottom > q.bottom && p & 1 && (m -= l.bottom - q.bottom) : l.left < q.left && !(p & 4) ? m -= q.left - l.left : l.right > q.right && p & 4 && (m -= l.right - q.right);
            m = Vt(b) ? new Uk(a.Ng, m) : new Uk(m, a.Ng);
            p = Vt(b) ? 6 : 9;
            a.Mf && 2 == e && (p = Vt(b) ? 4 : 1);
            q = b ^ 3;
            Vt(b) && a.b.dir == Vd && (q = b);
            g = Qt(a.b, Wt(q, c), a.c, g, m, f, a.hf ? p :
                0, void 0, null);
            if (2 != e && g & 496) {
                Ut(a, b ^ 3, c, d, a.Mf && 0 == e ? 1 : 2, f);
                return
            }!a.m || g & 496 || (e = parseFloat(a.c.style.left), f = parseFloat(a.c.style.top), isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || Gr(a.c, Math.round(e), Math.round(f)))
        }
        Xt(a, b, c, d)
    },
    Xt = function(a, b, c, d) {
        var e = a.j;
        Jg(a.o, function(a) {
            pr(e, a, !1)
        }, a);
        U(e, a.o[b]);
        e.style.top = e.style.left = e.style.right = e.style.bottom = "";
        a.b ? (c = Qr(a.b, a.c), d = Yt(a.b, b), Vt(b) ? e.style.top = Zt(c.a + d.a, a.c.offsetHeight - 15) + Od : e.style.left = Zt(c.b + d.b, a.c.offsetWidth - 15) + Od) : e.style[0 ==
        c ? Vt(b) ? "top" : rd : Vt(b) ? "bottom" : Td] = d + Od
    },
    Zt = function(a, b) {
        return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    },
    Wt = function(a, b) {
        switch (a) {
            case 2:
                return 0 == b ? 1 : 5;
            case 1:
                return 0 == b ? 0 : 4;
            case 0:
                return 0 == b ? 12 : 13;
            default:
                return 0 == b ? 8 : 9
        }
    },
    Yt = function(a, b) {
        var c = 0,
            d = 0;
        a = Ur(a);
        switch (b) {
            case 2:
                c = a.width / 2;
                break;
            case 1:
                c = a.width / 2;
                d = a.height;
                break;
            case 0:
                d = a.height / 2;
                break;
            case 3:
                c = a.width, d = a.height / 2
        }
        return new Uk(c, d)
    },
    Vt = function(a) {
        return 0 == a || 3 == a
    };
var $t = function(a) {
    vi.call(this);
    this.b = a || al()
};
A($t, vi);
$t.prototype.j = function() {
    Ts(this.l(), "tooltip");
    Us(this.l(), "live", "polite")
};
var bu = function(a) {
    $t.call(this, a);
    this.a = this.b.b(k, au() + "-contentId");
    this.c = this.b.b(k, au() + "-arrow", this.b.b(k, au() + "-arrowimplbefore"), this.b.b(k, au() + "-arrowimplafter"));
    this.g = this.b.b(k, {
        "class": au(),
        role: "tooltip"
    }, this.a, this.c);
    this.j()
};
A(bu, $t);
var au = v("jfk-tooltip");
bu.prototype.l = u("g");
bu.prototype.N = function() {
    bu.w.N.call(this);
    this.g && xl(this.g)
};
var cu = function(a) {
    bu.call(this, a)
};
A(cu, bu);
cu.prototype.j = function() {
    Ts(this.l(), "tooltip")
};
var eu = function(a, b) {
        du(a, b, void 0)
    },
    fu = function(a) {
        var b = a.getAttribute("title");
        b && du(a, b)
    },
    du = function(a, b, c) {
        c || (c = b instanceof Ek ? Lt(Fk(b)) : b);
        a.removeAttribute("title");
        a.removeAttribute(Db);
        a.removeAttribute(Bb);
        b ? (b instanceof Ek ? a.b = b : (a.setAttribute(Bb, b), a.b = null), a.setAttribute("aria-label", c)) : (a.b = null, a.removeAttribute("aria-label"));
        a = al(a) || al();
        b = zf(a.a);
        gu[b] || (gu[b] = new hu(a))
    },
    iu = function(a) {
        a.setAttribute(Cb, "t,c")
    },
    ju = function(a, b) {
        b ? a.setAttribute(Eb, Oe) : a.removeAttribute(Eb)
    },
    gu = {},
    hu = function(a) {
        js.call(this);
        this.A = a;
        this.B = new It(this.X, 0, this);
        xi(this, this.B);
        var b = kl();
        this.m = vf(b.MutationObserver) ? new b.MutationObserver(z(this.K, this)) : null;
        a = a.a;
        this.G(a, [yd, wd, r, kb, Sb, kd], this.I, !0);
        this.G(a, [zd, Qb, Rb], this.O, !0)
    };
A(hu, js);
hu.prototype.N = function() {
    ku(this);
    hu.w.N.call(this)
};
var lu = function(a, b) {
    switch (b.type) {
        case wd:
        case zd:
        case yd:
        case r:
            a.H = !1;
            break;
        case kd:
            a.H = !0
    }
};
hu.prototype.O = function(a) {
    this.m && this.m.disconnect();
    lu(this, a);
    var b = a.target;
    a = a.type == Qb || a.type == Rb;
    var c = this.a && El(this.a.a, b);
    if (this.H || !a || c) {
        this.M = a;
        if (a = b && b.getAttribute && this.m) a = b.getAttribute(Ud) || null, a = Pf(Ss, a);
        a && (this.m.observe(b, {
            attributes: !0
        }), (a = Ws(b)) && (b = a));
        this.g = b
    } else this.g = null;
    mu(this)
};
hu.prototype.I = function(a) {
    lu(this, a);
    var b = a.target;
    a = a.type == wd || a.type == r;
    b = this.a && El(this.a.a, b);
    a && b || (this.g = null, mu(this))
};
hu.prototype.K = function(a) {
    C(a, z(function(a) {
        var b = Ws(a.target);
        b && a.attributeName == db && (this.g = b, mu(this))
    }, this))
};
var mu = function(a) {
        ku(a);
        a.B.start(a.b ? 50 : 300)
    },
    ku = function(a) {
        a.v && (Nj(a.v), a.v = 0, a.b = null)
    };
hu.prototype.X = function() {
    if (!this.g) nu(this), this.b = null;
    else if (!(this.b && this.a && El(this.a.l(), this.g)) || this.b.getAttribute("data-tooltip-unhoverable")) {
        var a = Sl(this.g, function(a) {
                return a.getAttribute && (a.getAttribute(Db) || a.getAttribute(Bb) || a.b) && !a.getAttribute(Eb)
            }),
            b = !1;
        this.b && this.b != a && (nu(this), this.b = null, b = !0);
        if (!this.b && a && (this.b = a, ou(this, a))) {
            var c = Pk;
            if (a.getAttribute(Db))
                for (var d = dl("jfk-tooltip-data", a), e = 0; e < d.length; e++) {
                    if (d[e].parentNode == a) {
                        c = d[e].cloneNode(!0);
                        break
                    }
                } else c =
                a.b ? a.b : Ik(a.getAttribute(Bb));
            d = a.getAttribute(Cb);
            e = a.getAttribute("data-tooltip-class");
            var f = a.getAttribute("data-tooltip-offset");
            f = dg(zg(f)) ? -1 : Number(f);
            if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                this.v = Mj(Cf(this.L, this.b, c, d, f, e), a, this);
                return
            }
            this.L(this.b, c, d, f, e)
        }
    }
};
var ou = function(a, b) {
        return b.getAttribute("data-tooltip-only-on-overflow") && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.M && "mouse" == b.getAttribute("data-tooltip-trigger") ? !1 : !0
    },
    pu = function(a) {
        if (a) switch (a.toLowerCase().split(",")[0]) {
            case "l":
                return 0;
            case "t":
                return 2;
            case "r":
                return 3
        }
        return 1
    };
hu.prototype.L = function(a, b, c, d, e) {
    this.v = 0;
    if (!this.a) {
        this.a = new cu(this.A);
        nu(this);
        this.A.a.body.appendChild(this.a.l());
        xi(this, this.a);
        this.j = new St(au(), !0);
        this.j.hf = !0;
        this.j.Mf = !0;
        var f = this.j,
            g = this.a.c;
        f.c = this.a.l();
        f.j = g
    }
    a: {
        if (c) switch (c.toLowerCase().split(",")[1]) {
            case "l":
                f = 0;
                break a;
            case "r":
                f = 1;
                break a
        }
        f = 2
    }
    Tt(this.j, pu(c), f, d);
    V(this.a.l(), id);
    this.C != e && (this.C && !dg(zg(this.C)) && V(this.a.l(), this.C), dg(zg(e)) || U(this.a.l(), e), this.C = e);
    Gr(this.a.l(), 0, 0);
    if (b instanceof Ek) Rk(this.a.a,
        b);
    else
        for (ul(this.a.a); c = b.firstChild;) this.a.a.appendChild(c);
    this.j.b = a;
    this.j.a(null, 0)
};
var nu = function(a) {
    a.a && U(a.a.l(), id)
};
var ru = function(a, b, c, d) {
    Gt.call(this, a, qu.J(), b);
    this.b = c || 0;
    this.v = d || 0;
    this.$a = !1
};
A(ru, Gt);
var tu = function(a, b) {
    a.b != b && (a.b = b, su(a))
};
ru.prototype.ea = function(a) {
    this.isEnabled() != a && (ru.w.ea.call(this, a), su(this))
};
ru.prototype.Ic = function(a) {
    ru.w.Ic.call(this, a);
    uu(this, !1)
};
ru.prototype.Ya = function(a) {
    ru.w.Ya.call(this, a);
    this.isEnabled() && uu(this, !0)
};
ru.prototype.jb = function(a) {
    ru.w.jb.call(this, a);
    this.isEnabled() && uu(this, !0)
};
var uu = function(a, b) {
        a.l() && pr(a.l(), "jfk-button-clear-outline", b)
    },
    su = function(a) {
        a.l() && vu(a.c, a)
    },
    qu = function() {
        this.B = this.T() + "-standard";
        this.g = this.T() + "-action";
        this.H = this.T() + "-primary";
        this.m = this.T() + "-default";
        this.v = this.T() + "-flat";
        this.A = this.T() + "-narrow";
        this.C = this.T() + "-mini";
        this.o = this.T() + "-contrast"
    };
A(qu, kt);
rf(qu);
w = qu.prototype;
w.Lc = function(a, b, c) {
    a && tu(c, a);
    b && c.v != b && (c.v = b, su(c))
};
w.T = v("jfk-button");
w.Wa = function(a) {
    var b = a.a,
        c = yr(Ht, {
            disabled: !a.isEnabled(),
            checked: a.Ta(),
            style: a.b,
            title: a.m,
            Dm: a.$a,
            value: a.P(),
            width: a.v
        }, void 0, b);
    b.Oh(c, a.Da());
    this.S(a, c);
    return c
};
w.S = function(a, b) {
    qu.w.S.call(this, a, b);
    this.j || (this.j = Sg(this.B, Cf(this.Lc, 0, null), this.g, Cf(this.Lc, 2, null), this.H, Cf(this.Lc, 3, null), this.m, Cf(this.Lc, 1, null), this.v, Cf(this.Lc, 4, null), this.C, Cf(this.Lc, 5, null), this.o, Cf(this.Lc, 6, null), this.A, Cf(this.Lc, null, 1)));
    for (var c = lr(b), d = 0; d < c.length; ++d) {
        var e = this.j[c[d]];
        e && e(a)
    }
    if (c = b.getAttribute(Bb)) a.m = c, a.$a = !0;
    return b
};
w.P = function(a) {
    return a.getAttribute("value") || ""
};
w.Oe = function(a, b) {
    a && a.setAttribute("value", b)
};
var vu = function(a, b) {
    function c(a, b) {
        (a ? d : e).push(b)
    }
    var d = [],
        e = [],
        f = b.b;
    c(0 == f, a.B);
    c(2 == f, a.g);
    c(3 == f, a.H);
    c(4 == f, a.v);
    c(5 == f, a.C);
    c(1 == f, a.m);
    c(6 == f, a.o);
    c(1 == b.v, a.A);
    c(!b.isEnabled(), a.T() + ia);
    or(b.l(), e);
    nr(b.l(), d)
};
var wu = function(a, b) {
    Y.call(this);
    this.M = b;
    this.Ab = a;
    this.xe = this.text = this.Qa = this.Ia = "";
    this.data = null;
    this.La = Ko.J()
};
A(wu, Y);
w = wu.prototype;
w.update = function(a, b, c, d) {
    this.text = a;
    this.Ia = b;
    this.Qa = c;
    this.data = d;
    this.setVisible(!1);
    return !1
};
w.setVisible = function(a) {
    var b = this.l();
    b && X(b, a)
};
w.isVisible = function() {
    var a = this.l();
    return a ? Xr(a) : !1
};
w.aj = function() {
    return {}
};
w.eb = u("M");
w.log = function(a, b) {
    var c = {};
    c.dt = this.M;
    c.sl = this.Ia;
    c.tl = this.Qa;
    c.hl = this.Ab;
    c.q = this.text;
    c.e = a;
    null != b && Rg(c, b);
    Rg(c, this.aj());
    this.La.log("lexicon", c);
    b = this.Ia;
    c = this.Qa;
    window.__gaTracker && (__gaTracker(ae, "dimension1", this.Ab), __gaTracker(ae, "dimension2", b + "|" + c), __gaTracker(ae, "dimension3", b), __gaTracker(ae, "dimension4", c));
    window.__gaTracker && __gaTracker("send", "event", "lexicon", this.M + ":" + a, "", 1)
};
var xu = function(a, b, c, d, e) {
    wu.call(this, a, b);
    this.m = this.b = null;
    this.K = c;
    this.Ra = d;
    this.O = e;
    this.I = this.j = null;
    this.v = !1;
    this.R = "More";
    this.ic = !1;
    this.V = "Less";
    this.Y = [];
    new ar("mt");
    this.Pf = !1;
    this.F = ro.J();
    this.g = []
};
A(xu, wu);
w = xu.prototype;
w.sa = function() {
    xu.w.sa.call(this);
    this.Z(ol(document, k))
};
w.Z = function(a) {
    xu.w.Z.call(this, a);
    U(this.l(), "gt-cd");
    U(this.l(), "gt-cd-" + this.M);
    this.l().appendChild(xr($p));
    this.m = O("gt-cd-tl", this.l());
    this.b = O("gt-cd-c", this.l());
    this.j = O("cd-expand-button", this.l());
    this.I = O("cd-expand-label", this.l());
    X(this.j, !1)
};
w.N = function() {
    this.bd();
    xu.w.N.call(this)
};
w.kc = u("O");
w.Jd = function() {
    return this.g.length
};
w.jg = function(a) {
    return this.g.indexOf(a)
};
w.bd = function() {
    this.g = []
};
w.Oa = function() {
    return this.Jd()
};
w.update = function(a, b, c, d) {
    xu.w.update.call(this, a, b, c, d);
    this.v = this.ic = !1;
    xl(null);
    X(this.j, !1);
    V(this.j, vb);
    yu(this, a);
    return !1
};
w.W = function() {
    xu.w.W.call(this);
    Z(this).G(this.j, r, this.pm, !1);
    Z(this).G(this, "a", z(this.ri, this, "clks"), !1);
    Z(this).G(this, "b", z(this.ri, this, "clkt"), !1)
};
w.pm = function() {
    this.v = !this.v;
    this.Cd(this.v);
    if (this.v) U(this.j, vb), Q(this.I, this.V), this.log("expand"), uo(this.F, this.O, this.Oa());
    else {
        V(this.j, vb);
        Q(this.I, this.R);
        this.log(vb);
        var a = this.F,
            b = this.Oa();
        R(a, so(a, 189, this.O, b, !0, 0))
    }
};
w.ri = function(a, b) {
    b = b.target;
    var c = this.F;
    R(c, so(c, 79, this.O, this.Jd(), this.ic, this.jg(b) + 1));
    b = Ql(b);
    this.log(a, {
        clk: b
    })
};
w.Yg = function() {
    this.m && Q(this.m, this.Ra)
};
var yu = function(a, b) {
        var c = P(k),
            d = a.K.indexOf(ca);
        if (-1 != d) {
            var e = a.K.slice(0, d);
            d = a.K.slice(d + 4, a.K.length);
            e && tl(c, e);
            e = P(Na, {
                "class": "gt-card-ttl-txt"
            });
            W(e, Hb, fk(a.Ia) ? Vd : sd);
            Q(e, b);
            c.appendChild(e);
            d && tl(c, d);
            a.m && (ul(a.m), a.m.appendChild(c))
        } else a.Yg()
    },
    zu = function(a, b, c) {
        a.ic = !0;
        X(a.j, !0);
        null != b && (a.R = b);
        null != c && (a.V = c);
        Q(a.I, a.R)
    };
xu.prototype.Cd = function(a) {
    for (var b, c, d = dl(tc, this.l()), e = 0; e < d.length; e++) {
        b = d[e];
        c = b.firstChild;
        var f = fs(c, td);
        c = Ur(c).height + f.top + f.bottom;
        W(b, "max-height", a ? c + Od : 0);
        a ? (V(b, sc), U(b, uc)) : (V(b, uc), U(b, sc))
    }
};
var Au = function(a, b) {
    return b ? a : P(k, {
        "class": "gt-card-expand-wrapper gt-card-collapsed"
    }, a)
};
var Cu = function(a, b) {
        var c = Array.prototype.slice.call(arguments),
            d = c.shift();
        if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, l, m, p, q, B) {
            if ("%" == p) return "%";
            var e = c.shift();
            if ("undefined" == typeof e) throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = e;
            return Bu[p].apply(null, arguments)
        })
    },
    Bu = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
            a + yg(" ", Number(c) - a.length) : yg(" ", Number(c) - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
            var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= Number(a) && (d = f + d);
            if (isNaN(c) || d.length >= Number(c)) return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = 0 <= b.indexOf("-", 0) ? f + d + yg(" ", a) : f + yg(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, e, f, g, l) {
            return Bu.f(parseInt(a,
                10), b, c, d, 0, f, g, l)
        }
    };
Bu.i = Bu.d;
Bu.u = Bu.d;
var Du = function(a, b, c, d, e, f) {
    var g = "bd";
    null != e && e && (g = "m" + g);
    xu.call(this, a, g, MSG_TRANSLATIONS_OF, "", 11);
    this.ma = "";
    this.ma = e ? "gt-baf-cell gt-baf-word" : c ? nc : "gt-baf-word";
    this.aa = c && !e ? jc : null;
    this.$a = d;
    this.A = null;
    this.U = !1;
    this.Za = c;
    this.c = null != e ? e : !1;
    this.xa = null != f ? f : !0;
    this.B = {};
    this.B[1] = b[2];
    this.B[2] = b[1];
    this.B[3] = b[0];
    this.ra = b[3].replace(ca, "%d")
};
A(Du, xu);
Du.prototype.update = function(a, b, c, d) {
    Du.w.update.call(this, a, b, c, d);
    if (!d || 0 == H(d, 1)) return !1;
    ul(this.b);
    this.bd();
    this.A = new li(d);
    Eu(this, this.A);
    if (this.c) a = P(k);
    else {
        a = P("TBODY");
        var e = P("TABLE", {
            "class": "gt-baf-table"
        }, a)
    }
    b = this.A.a;
    for (c = 0; c < b.length; c++) {
        var f = b[c];
        var g = qi(f);
        var l = f.c,
            m = f.g,
            p = P(k, {
                "class": "gt-baf-cell gt-baf-pos-head"
            });
        l && (this.xe = l, yu(this, l));
        "" !== m && (l = P(Na, {
            "class": yc
        }, m), p.appendChild(l));
        g = Au(p, g);
        this.c ? g = P(k, null, g) : (g = P("TD", {
            colspan: 4
        }, g), g = P("TR", null, g));
        a.appendChild(g);
        if (this.c) {
            var q = P(k, "gt-baf-pos-section");
            this.$a || c != b.length - 1 && null != b[c + 1] && qi(b[c + 1]) && W(q, "margin-bottom", "32px");
            a.appendChild(q)
        }
        f = f.a;
        for (p = g = 0; p < f.length; p++) {
            l = f[p];
            if (!this.c && this.A.b && 0 < p) {
                m = a;
                var B = pi(l);
                var D = P(k, {
                    "class": "gt-baf-cell gt-baf-sep"
                });
                B = Au(D, B);
                this.c || (B = P("TD", {
                    colspan: 4
                }, B), B = P("TR", null, B));
                m.appendChild(B)
            }
            l = l.a;
            for (m = 0; m < l.length; m++) {
                D = l[m];
                B = Zq(d, 0).cb();
                var K = D,
                    ea = g;
                D = K.text;
                var ha = K.g;
                var Ra = K.b;
                var Pa = K.c;
                if (this.U && this.xa) {
                    var pa = Pa;
                    Pa = Ra;
                    var Pb = P(k, {
                        "class": "gt-baf-cell gt-baf-marker-container",
                        title: this.B[pa]
                    });
                    pa = Cu("width: %dpx", 8 * pa);
                    pa = P(k, {
                        "class": "gt-baf-cts",
                        style: pa
                    });
                    Pb.appendChild(pa);
                    Pa = Au(Pb, Pa)
                } else Pa = P(k, {
                    "class": kc
                }), Pa = Au(Pa, Ra);
                Pa = P("TD", null, Pa);
                Pb = null;
                ha && (pa = this.c ? !0 : Ra, Pb = P(this.c ? Na : k, {
                    "class": "gt-baf-cell gt-baf-previous-word"
                }), this.c && U(Pb, "gt-baf-previous-word-mobile"), Q(Pb, ha), Pb = Au(Pb, pa), Pb = this.c ? Pb : P("TD", null, Pb));
                pa = this.c ? !0 : Ra;
                if (fk(this.Qa) != fk(this.Ab)) var ih = Cu(Ib, fk(this.Qa) ? Vd : sd);
                var Wb = P(Na, this.ma, D);
                this.g.push(Wb);
                var Uc = P(k, kc, Wb);
                Wb = Au(this.c ?
                    Wb : Uc, pa);
                pa || U(Wb, wc);
                ha = this.c ? Wb : P("TD", ha ? null : {
                    colspan: 2,
                    style: ih
                }, Wb);
                pa = K.j;
                Wb = [];
                for (Uc = 0; Uc < pa.length; Uc++) {
                    var le = P(Na, null, pa[Uc]);
                    null != this.aa && (U(le, this.aa), this.g.push(le));
                    Wb.push(le);
                    Uc < pa.length - 1 && Wb.push(pl(", "))
                }
                pa = Wb;
                if (fk(this.Ia) != fk(this.Ab)) var Zm = Cu(Ib, fk(this.Ia) ? Vd : sd);
                pa = P(k, {
                    "class": "gt-baf-cell gt-baf-translations",
                    style: Zm
                }, pa);
                this.c && U(pa, "gt-baf-translations-mobile");
                Ra = Au(pa, Ra);
                Ra = this.c ? Ra : P("TD", {
                    style: "width: 100%"
                }, Ra);
                if (this.c) {
                    ea = P(Na, "", Pb, ha);
                    if (fk(this.Qa) !=
                        fk(this.Ab)) var $m = Cu(Ib, fk(this.Qa) ? Vd : sd);
                    Pa = P(k, {
                        "class": kc,
                        style: $m
                    }, ea);
                    W(Pa, ud, "17px");
                    K = Au(Pa, K.b);
                    Pa = this.Za && this.c ? P(k, lc) : P(k, "gt-baf-entry");
                    Pa.appendChild(K);
                    Pa.appendChild(Ra);
                    W(ea, "padding-right", "4px");
                    D == B && (U(ea, "gt-baf-word-selected"), U(Pa, "gt-baf-entry-selected"));
                    B = Pa
                } else B = P("TR", null, Pa, Pb, ha, Ra), fk(this.Ia) != fk(this.Ab) && 1 == ea % 2 && U(B, "gt-baf-translations-alt");
                this.c ? q.appendChild(B) : a.appendChild(B);
                g++
            }
        }
        this.c ? this.b.appendChild(a) : this.b.appendChild(e);
        0 < mi(this.A) && (f =
            Cu(this.ra, mi(this.A)), zu(this, f, MSG_FEWER_TRANSLATIONS_LABEL))
    }
    this.setVisible(!0);
    return !0
};
Du.prototype.W = function() {
    Du.w.W.call(this);
    U(this.l(), "gt-cd-baf");
    Z(this).G(this.l(), r, this.bb);
    Z(this).G(this.l(), zd, this.Ja);
    Z(this).G(this.l(), yd, this.Ea)
};
var Eu = function(a, b) {
    var c = ni(b);
    c = c.sort(function(a, b) {
        return b.a - a.a
    });
    var d = 0;
    a.U = !1;
    for (var e = 0; e < c.length; e++) {
        var f = c[e]; - 1 < f.a && (a.U = !0);
        f.c = .05 <= f.a ? 3 : .0025 <= f.a ? 2 : 1;
        f.b = 12 > e || 3 == f.c;
        d += f.b ? 0 : 1
    }
    if (4 >= d)
        for (e = 0; e < c.length; e++) c[e].b = !0;
    b.b && oi(b)
};
Du.prototype.Cd = function(a) {
    Du.w.Cd.call(this, a);
    for (var b = dl(wc, this.l()), c = 0; c < b.length; c++) {
        var d = b[c],
            e = O(kc, d),
            f = fs(e, td);
        e = e.scrollWidth + f.left + f.right + 1;
        W(d, "max-width", a ? e + Od : 0)
    }
};
Du.prototype.bb = function(a) {
    var b = Tl(a.target);
    null != b ? (a = O("gt-baf-word", b), null != a && this.dispatchEvent(new J("b", a))) : mr(a.target, nc) ? this.dispatchEvent(new J("b", a.target)) : mr(a.target, jc) && this.dispatchEvent(new J("a", a.target))
};
Du.prototype.Ja = function(a) {
    if (mr(a.target, jc)) {
        var b = cl(null, jc, this.l());
        a = Ql(a.target);
        for (var c = 0; c < b.length; c++) Ql(b[c]) == a && U(b[c], mc)
    }
};
Du.prototype.Ea = function() {
    for (var a = cl(null, mc, this.l()), b = 0; b < a.length; b++) V(a[b], mc)
};
var Fu = function() {
    J.call(this, "navigate")
};
A(Fu, J);
var Gu = function(a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
    return a.join("\x0B")
};
var Mu = function(a, b, c, d) {
    M.call(this);
    if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
    if (c) var e = c;
    else {
        e = "history_state" + Hu;
        var f = Nk(Vc, {
            type: "text",
            name: e,
            id: e,
            style: dk(Jb)
        });
        document.write(Fk(f));
        e = N(e)
    }
    this.m = e;
    this.a = c ? kl($k(c)) : window;
    this.H = b;
    F && !b && (this.H = "https" == window.location.protocol ? jk(ck(dk("https:///"))) : jk(ck(dk(Xc))));
    this.b = new Kj(150);
    xi(this, this.b);
    this.g = !a;
    this.c = new js(this);
    if (a || Iu) {
        if (d) var g = d;
        else {
            a = "history_iframe" + Hu;
            d = this.H;
            b = {
                id: a,
                style: dk(Jb),
                sandbox: void 0
            };
            d && ik(d);
            c = {};
            c.src = d || null;
            c.srcdoc = null;
            d = {
                sandbox: ""
            };
            e = {};
            for (g in c) e[g] = c[g];
            for (g in d) e[g] = d[g];
            for (g in b) {
                f = g.toLowerCase();
                if (f in c) throw Error('Cannot override "' + f + '" attribute, got "' + g + '" with value "' + b[g] + '"');
                f in d && delete e[f];
                e[g] = b[g]
            }
            g = Mk("iframe", e, void 0);
            document.write(Fk(g));
            g = N(a)
        }
        this.C = g;
        this.I = !0
    }
    Iu && (this.c.G(this.a, "load", this.Dl), this.L = this.A = !1);
    this.g ? Ju(this, Ku(this), !0) : Lu(this, this.m.value);
    Hu++
};
A(Mu, M);
Mu.prototype.v = !1;
Mu.prototype.o = !1;
Mu.prototype.j = null;
var Nu = function(a, b) {
        var c = b || Gu;
        return function() {
            var b = this || x;
            b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
            var e = c(zf(a), arguments);
            return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
        }
    }(function() {
        return F ? yh(8) : "onhashchange" in x
    }),
    Iu = F && !yh(8);
w = Mu.prototype;
w.vd = null;
w.N = function() {
    Mu.w.N.call(this);
    this.c.Ba();
    this.ea(!1)
};
w.ea = function(a) {
    if (a != this.v)
        if (Iu && !this.A) this.L = a;
        else if (a)
            if (ch ? this.c.G(this.a.document, Ou, this.K) : fh && this.c.G(this.a, "pageshow", this.Il), Nu() && this.g) this.c.G(this.a, "hashchange", this.Fl), this.v = !0, this.dispatchEvent(new Fu(Ku(this), !1));
            else {
                if (!F || An() || this.A) this.c.G(this.b, Ae, z(this.B, this, !0)), this.v = !0, Iu || (this.j = Ku(this), this.dispatchEvent(new Fu(Ku(this), !1))), this.b.start()
            } else this.v = !1, os(this.c), this.b.stop()
};
w.Dl = function() {
    this.A = !0;
    this.m.value && Lu(this, this.m.value, !0);
    this.ea(this.L)
};
w.Il = function(a) {
    a.a.persisted && (this.ea(!1), this.ea(!0))
};
w.Fl = function() {
    var a = Pu(this.a);
    a != this.j && Qu(this, a, !0)
};
var Ku = function(a) {
        return null != a.vd ? a.vd : a.g ? Pu(a.a) : Ru(a) || ""
    },
    Pu = function(a) {
        a = a.location.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    },
    Su = function(a, b, c) {
        Ku(a) != b && (a.g ? (Ju(a, b, c), Nu() || F && !An() && Lu(a, b, c, void 0), a.v && a.B(!1)) : (Lu(a, b, c), a.vd = a.j = a.m.value = b, a.dispatchEvent(new Fu(b, !1))))
    },
    Ju = function(a, b, c) {
        a = a.a.location;
        var d = a.href.split("#")[0],
            e = -1 != a.href.indexOf("#");
        if (Iu || e || b) d += "#" + b;
        d != a.href && (c ? a.replace(d) : (dk("URL taken from location.href."), b = ok(d), Sk(a, b)))
    },
    Lu =
        function(a, b, c, d) {
            if (a.I || b != Ru(a))
                if (a.I = !1, b = hg(b), F) {
                    var e = Jl(a.C);
                    e.open("text/html", c ? "replace" : void 0);
                    c = Ok(Nk("title", {}, d || a.a.document.title), Nk("body", {}, b));
                    e.write(Fk(c));
                    e.close()
                } else e = ik(a.H) + "#" + b, (a = a.C.contentWindow) && (c ? a.location.replace(e) : Sk(a.location, e))
        },
    Ru = function(a) {
        if (F) return a = Jl(a.C), a.body ? ig(a.body.innerHTML) : null;
        var b = a.C.contentWindow;
        if (b) {
            try {
                var c = ig(Pu(b))
            } catch (d) {
                return a.o || (1 != a.o && Lj(a.b, 1E4), a.o = !0), null
            }
            a.o && (0 != a.o && Lj(a.b, 150), a.o = !1);
            return c || null
        }
        return null
    };
Mu.prototype.B = function(a) {
    if (this.g) {
        var b = Pu(this.a);
        b != this.j && Qu(this, b, a)
    }
    if (!this.g || Iu)
        if (b = Ru(this) || "", null == this.vd || b == this.vd) this.vd = null, b != this.j && Qu(this, b, a)
};
var Qu = function(a, b, c) {
    a.j = a.m.value = b;
    a.g ? (Iu && Lu(a, b), Ju(a, b)) : Lu(a, b);
    a.dispatchEvent(new Fu(Ku(a), c))
};
Mu.prototype.K = function() {
    this.b.stop();
    this.b.start()
};
var Ou = [wd, kd, xd],
    Hu = 0;
var Tu = function() {
        this.ff = new Mu;
        this.fh = null;
        this.a = 0
    },
    Vu = function(a, b) {
        var c = [];
        C(b.split(/[|\/]/), function(a) {
            c.push(ig(a))
        });
        dg(zg(c[0])) || dg(zg(c[1])) ? Uu(a.fh, "", "", "", "bh") : Uu(a.fh, c[0], c[1], 2 < c.length ? c[2] : "", "bh")
    },
    Wu = function(a, b, c, d, e) {
        d = (null != b ? b : gb) + "/" + (null != c ? c : Lb) + "/" + hg(d);
        e = !e || !1;
        c = (new Date).getTime();
        2E3 < c - a.a ? Su(a.ff, d, !1) : Su(a.ff, d, !0);
        a.a = e ? 0 : c
    };
var Xu = Ze();
A(Xu, kt);
rf(Xu);
w = Xu.prototype;
w.Wa = function(a) {
    var b = ct(this, a);
    b = a.a.b(k, ac + b.join(" "), this.Ae(a.Da(), a.a));
    lt(b, a.m);
    return b
};
w.ac = v(nb);
w.vb = function(a) {
    return a && a.firstChild && a.firstChild.firstChild
};
w.Ae = function(a, b) {
    return b.b(k, ac + (this.T() + "-outer-box"), b.b(k, ac + (this.T() + "-inner-box"), a))
};
w.Ec = function(a) {
    return a.tagName == k
};
w.S = function(a, b) {
    Yu(b, !0);
    Yu(b, !1);
    a: {
        var c = a.a.Mh(b);
        var d = this.T() + "-outer-box";
        if (c && mr(c, d) && (c = a.a.Mh(c), d = this.T() + "-inner-box", c && mr(c, d))) {
            c = !0;
            break a
        }
        c = !1
    }
    c || b.appendChild(this.Ae(b.childNodes, a.a));
    nr(b, [$b, this.T()]);
    return Xu.w.S.call(this, a, b)
};
w.T = v("goog-custom-button");
var Yu = function(a, b) {
    if (a)
        for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == gg(e)) a.removeChild(c);
                else {
                    c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
                    break
                }
            } else break;
            c = d
        }
};
var Zu = function(a, b, c) {
    Gt.call(this, a, b || Xu.J(), c);
    this.Fa(16, !0)
};
A(Zu, Gt);
pt("goog-toggle-button", function() {
    return new Zu(null)
});
var $u = function(a, b, c, d) {
    Zu.call(this, a, c || kt.J(), d);
    this.v = a;
    this.b = b || null
};
A($u, Zu);
$u.prototype.Ka = function(a) {
    $u.w.Ka.call(this, a);
    null != this.b && this.g(this.Ta() ? this.b : this.v)
};
var av = $e("g");
A(av, kt);
av.prototype.Wa = function(a) {
    var b = a.a.b(k, ct(this, a).join(" ")),
        c = a.a.b(Na),
        d = a.a.b(Na);
    this.g && U(b, this.g);
    U(b, gd);
    d.className = ed;
    c.className = dd;
    b.appendChild(c);
    a.Da() ? (b.appendChild(d), this.Mb(b, a.Da())) : U(b, fd);
    return b
};
av.prototype.Mb = function(a, b) {
    a && (a = y(a.lastElementChild) ? a.lastElementChild : zl(a.lastChild, !1)) && Q(a, b)
};
av.prototype.T = v("jfk-button");
av.prototype.S = function(a, b) {
    var c = a.a.b(Na),
        d = a.a.b(Na);
    this.g && U(b, this.g);
    U(b, gd);
    d.className = ed;
    c.className = dd;
    ul(b);
    b.appendChild(c);
    a.Da() ? (b.appendChild(d), this.Mb(b, a.Da())) : U(b, fd);
    return b = av.w.S.call(this, a, b)
};
var bv = function(a, b) {
    this.g = a;
    this.j = b || !1
};
A(bv, kt);
bv.prototype.Wa = function(a) {
    var b = a.a.b(k, ct(this, a).join(" ") + " goog-inline-block"),
        c = a.a.b(Na);
    this.g && U(b, this.g);
    c.className = dd;
    b.appendChild(c);
    a.Da() && this.Mb(b, a.Da());
    return b
};
bv.prototype.Mb = function(a, b) {
    a && !this.j && (eu(a, b), iu(a))
};
bv.prototype.T = v("goog-toolbar-button");
bv.prototype.S = function(a, b) {
    var c = a.a.b(Na);
    this.g && U(b, this.g);
    c.className = dd;
    ul(b);
    b.appendChild(c);
    a.Da() && this.Mb(b, a.Da());
    return b = bv.w.S.call(this, a, b)
};
var cv = function(a, b, c, d) {
        this.text = a;
        this.Ia = b;
        this.Qa = c;
        this.data = d
    },
    dv = function(a, b, c, d) {
        this.g = a;
        this.c = b;
        this.j = c;
        this.o = d;
        this.a = [];
        this.b = -1;
        L(this.g, n, this.Ml, !1, this);
        L(this.c, n, this.Al, !1, this);
        L(this.j, n, this.Vj, !1, this)
    };
w = dv.prototype;
w.push = function(a, b, c, d) {
    this.a.splice(++this.b);
    this.a.push(new cv(a, b, c, d));
    ev(this)
};
w.reset = function() {
    this.a = [];
    this.b = -1
};
w.Ml = function() {
    0 < this.b && (--this.b, ev(this));
    Ko.J().log("lxprev")
};
w.Al = function() {
    this.b < this.a.length - 1 && (++this.b, ev(this));
    Ko.J().log("lxnext")
};
w.Vj = function() {
    1 < this.a.length && (this.a.splice(1), this.b = 0, ev(this));
    Ko.J().log("lxclear")
};
var ev = function(a) {
    var b = a.a[a.b];
    a.o.update(b.text, b.Ia, b.Qa, b.data);
    a.g.ea(1 < a.b);
    a.c.ea(a.b < a.a.length - 1)
};
var fv = function() {
    this.b = 0;
    this.a = []
};
rf(fv);
fv.prototype.c = function(a) {
    var b = new Image,
        c = this.b++;
    this.a[c] = b;
    b.onload = b.onerror = function() {
        delete fv.J().a[c]
    };
    b.src = a;
    b = null
};
var gv = function() {
    M.call(this);
    this.url = ""
};
A(gv, M);
gv.prototype.Dd = function() {
    this.dispatchEvent(new hv(this.url))
};
gv.prototype.play = $e("url");
gv.prototype.c = function() {
    this.dispatchEvent(new iv(this.url))
};
var jv = function(a) {
    J.call(this, he);
    this.url = a
};
A(jv, J);
var kv = function(a) {
    J.call(this, fe);
    this.url = a
};
A(kv, J);
var hv = function(a) {
    J.call(this, ge);
    this.url = a
};
A(hv, J);
var iv = function(a) {
    J.call(this, ee);
    this.url = a
};
A(iv, J);
var lv = function() {
    gv.call(this);
    this.o = Audio;
    this.a = new this.o;
    this.b = {}
};
A(lv, gv);
lv.prototype.gh = function() {
    return !this.a.paused
};
lv.prototype.Dd = function() {
    lv.w.Dd.call(this);
    this.a.pause()
};
lv.prototype.play = function(a) {
    lv.w.play.call(this, a);
    mv(this, this.a);
    this.a = null;
    null != this.b[a] ? (this.a = this.b[a], this.b[a] = null, this.a.play()) : (this.a = nv(this, a), this.a.autoplay = !0)
};
lv.prototype.fj = function(a) {
    x.setTimeout(z(this.m, this, a), 1E3)
};
var nv = function(a, b) {
        var c = new a.o;
        c.setAttribute("src", b);
        L(c, Md, a.j, !1, a);
        L(c, "ended", a.g, !1, a);
        L(c, "error", a.c, !1, a);
        c.load();
        return c
    },
    mv = function(a, b) {
        Wi(b, Md, a.j);
        Wi(b, "ended", a.g)
    };
lv.prototype.m = function(a) {
    null != this.b[a] && (mv(this, this.b[a]), this.b[a] = null);
    this.b[a] = nv(this, a)
};
lv.prototype.j = function() {
    Wi(this.a, Md, this.j);
    this.dispatchEvent(new jv(this.url))
};
lv.prototype.g = function() {
    Wi(this.a, "ended", this.g);
    this.dispatchEvent(new kv(this.url))
};
var ov = function(a) {
    gv.call(this);
    this.a = a;
    this.b = !1
};
A(ov, gv);
w = ov.prototype;
w.gh = u("b");
w.Dd = function() {
    this.b = !1;
    null != this.a.stopPlayingSound && this.a.stopPlayingSound();
    pv();
    ov.w.Dd.call(this)
};
w.play = function(a) {
    ov.w.play.call(this, a);
    x.setTimeout(z(this.Ol, this), 0)
};
w.Ol = function() {
    this.b = !0;
    var a = z(this.qm, this);
    x.SoundStopCB_ = a;
    null != this.a.setSoundStopCB && this.a.setSoundStopCB("SoundStopCB_");
    try {
        if (null != this.a.setSound) this.a.setSound(this.bj());
        else {
            this.b = !1;
            pv();
            this.c();
            return
        }
        var b = z(this.bj, this);
        x._TTSSoundFile = b
    } catch (c) {
        this.b = !1;
        pv();
        this.c();
        return
    }
    null != this.a.startPlayingSound ? this.a.startPlayingSound() : (this.b = !1, pv(), this.c())
};
w.fj = function(a) {
    var b = fv.J();
    x.setTimeout(z(b.c, b, a), 1E3)
};
w.bj = function() {
    return this.url.substring(1)
};
w.qm = function() {
    this.b = !1;
    pv();
    this.dispatchEvent(new kv(this.url))
};
var pv = function() {
        x.SoundStopCB_ = null
    },
    qv = function() {
        this.a = "";
        this.b = null;
        this.c = !1;
        this.F = null
    };
rf(qv);
qv.prototype.get = function() {
    if (null != this.a && 0 != this.a.length) {
        var a = N(this.a);
        if (!this.c && (rv("audio/mpeg") ? (this.b = new lv, a = "html5") : null != a && "OBJECT" == a.tagName && tn ? (this.b = new ov(a), a = "flash") : (this.b = null, a = Cd), this.c = !0, !this.g && this.F)) {
            this.g = !0;
            var b = rv("audio/mpeg") ? 1 : 0,
                c = rv("audio/ogg") ? 1 : 0,
                d = rv("audio/wav") ? 1 : 0;
            a: {
                try {
                    var e = P("AUDIO");
                    if (null != e && null != e.volume) {
                        var f = e.volume;
                        break a
                    }
                } catch (g) {}
                f = -1
            }
            this.F.log("ttsaudio", {
                mp3: b,
                ogg: c,
                wav: d,
                vol: f,
                type: a
            })
        }
    }
    return this.b
};
var rv = function(a) {
    try {
        var b = P("AUDIO");
        return null != b && null != b.canPlayType && null != b.load && null != b.play && null != b.paused && null != b.pause && "no" != b.canPlayType(a) && "" != b.canPlayType(a)
    } catch (c) {
        return !1
    }
};
var sv = function(a, b, c) {
    M.call(this);
    this.B = b;
    this.m = c ? c : 0;
    this.F = ro.J();
    this.A = qv.J();
    this.A.a = a;
    this.A.F = b;
    this.b = this.A.get();
    this.C = this.c = null;
    this.a = this.o = 0;
    this.g = {};
    this.j = 0;
    this.v = !1
};
A(sv, M);
sv.prototype.set = function(a, b, c, d) {
    this.c = a;
    this.o = b;
    this.C = c;
    null != d && (this.g = Pg(d));
    this.g.total = a.length;
    tv(this)
};
sv.prototype.start = function() {
    this.b.gh() && this.b.Dd();
    L(this.b, he, this.K, !1, this);
    L(this.b, fe, this.I, !1, this);
    L(this.b, ge, this.H, !1, this);
    L(this.b, ee, this.L, !1, this);
    this.j = (new Date).getTime();
    uv(this, "ttsstart", this.g);
    Go(this.F, 31, this.m, this.o, this.c.length);
    this.b.play(this.c[this.a]);
    vv(this)
};
sv.prototype.stop = function() {
    if (this.c && this.b.gh()) {
        var a = Pg(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.j;
        uv(this, "ttsstop", a);
        Go(this.F, 32, this.m, this.o, this.c.length, this.C[this.a], this.a);
        tv(this);
        this.b.Dd();
        wv(this)
    }
};
var tv = function(a) {
        a.a = 0;
        a.v = !1;
        Wi(a.b, he, a.K, !1, a);
        Wi(a.b, fe, a.I, !1, a);
        Wi(a.b, ge, a.H, !1, a);
        Wi(a.b, ee, a.L, !1, a)
    },
    uv = function(a, b, c) {
        a.B && a.B.log(b, c)
    };
sv.prototype.K = function() {
    if (!this.v) {
        this.dispatchEvent(new xv(this.c));
        var a = Pg(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.j;
        uv(this, "ttsplaystart", a);
        Go(this.F, 33, this.m, this.o, this.c.length, this.C[this.a], this.a);
        this.v = !0
    }
};
sv.prototype.I = function() {
    this.a += 1;
    if (this.a < this.c.length) this.b.play(this.c[this.a]), vv(this);
    else {
        wv(this);
        tv(this);
        var a = Pg(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.j;
        uv(this, "ttsfinish", a);
        Go(this.F, 34, this.m, this.o, this.c.length)
    }
};
sv.prototype.H = function() {
    var a = Pg(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.j;
    uv(this, "ttsinterrupted", a);
    wv(this);
    tv(this)
};
sv.prototype.L = function() {
    var a = Pg(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.j;
    uv(this, "ttserror", a);
    wo(this.F, 155);
    wv(this);
    tv(this)
};
var wv = function(a) {
        a.dispatchEvent(new yv(a.c))
    },
    vv = function(a) {
        var b = a.c[a.a + 1];
        null != b && a.b.fj(b)
    },
    xv = function() {
        J.call(this, "play_start_playlist")
    };
A(xv, J);
var yv = function() {
    J.call(this, te)
};
A(yv, J);
var zv = function() {
    this.F = Ko.J()
};
zv.prototype.g = function(a, b, c) {
    Av(a, b, c, z(this.b, this), z(this.c, this))
};
var Av = function(a, b, c, d, e) {
    var f = [];
    d(f, b);
    b = "";
    for (d = 0; d < f.length; d++) {
        var g = gg(b + f[d]);
        g.length <= c ? b += f[d] : (dg(b) || (a.push(gg(b)), b = ""), g = gg(f[d]), g.length <= c ? b = f[d] : e(a, g, c))
    }
    dg(b) || a.push(gg(b))
};
zv.prototype.c = function(a, b, c) {
    for (var d = 0; d < b.length; d += c) a.push(b.substr(d, c))
};
var Bv = / /g,
    Cv = /([?.,;:!][ ]+)|([\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f][ ]?)/g;
zv.prototype.b = function(a, b) {
    Dv(a, b, Bv)
};
zv.prototype.a = function(a, b) {
    Dv(a, b, Cv);
    for (b = 0; b < a.length; b++) {
        var c = {
            length: a[b].length
        };
        this.F && this.F.log("tbphrase", c)
    }
};
var Dv = function(a, b, c) {
    for (var d = 0; c.test(b);) {
        var e = c.lastIndex;
        e > d && a.push(b.substr(d, e - d));
        d = e
    }
    b.length > d && a.push(b.substr(d))
};
var Ev = [0, 200],
    Fv = {
        af: 1,
        ar: 1,
        bn: 1,
        bs: 1,
        ca: 1,
        cs: 1,
        cy: 1,
        da: 1,
        de: 1,
        el: 1,
        en: 1,
        eo: 1,
        es: 1,
        et: 1,
        fi: 1,
        fr: 1,
        hi: 1,
        hr: 1,
        hu: 1,
        hy: 1,
        id: 1,
        is: 1,
        it: 1,
        ja: 1,
        jw: 1,
        km: 1,
        ko: 1,
        la: 1,
        lv: 1,
        mk: 1,
        ne: 1,
        nl: 1,
        no: 1,
        pl: 1,
        pt: 1,
        ro: 1,
        ru: 1,
        si: 1,
        sk: 1,
        sq: 1,
        sr: 1,
        su: 1,
        sv: 1,
        sw: 1,
        ta: 1,
        th: 1,
        tr: 1,
        vi: 1,
        uk: 1,
        zh: 1,
        "zh-cn": 1,
        "zh-tw": 1
    };
var Gv = function(a, b, c, d) {
    vi.call(this);
    this.j = a;
    this.O = new zv;
    this.X = b;
    this.A = this.I = this.g = this.b = "";
    this.L = 0;
    this.H = !1;
    this.a = new sv("tts", Ko.J(), c);
    this.K = null != this.a.b && (lh && -1 != Fg.indexOf("UCBrowser") ? !1 : !0);
    this.m = Dh || Ch;
    L(this.a, te, this.C, !1, this);
    L(this.j, n, this.M, !1, this);
    this.B = (a = /(sa=[^#&]+)/.exec(window.location.href)) ? a[0] : null;
    this.v = (a = /ttsspeed=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.c = 0;
    this.R = !!d;
    this.o = ""
};
A(Gv, vi);
Gv.prototype.N = function() {
    Gv.w.N.call(this);
    Wi(this.a, te, this.C, !1, this);
    Wi(this.j, n, this.M, !1, this)
};
Gv.prototype.C = function() {
    this.j.Ka(!1)
};
var Hv = function(a, b, c, d, e, f) {
    return Ag("/translate_tts?ie=UTF-8&q=", hg(b), "&tl=", c, "&total=", d, "&idx=", e, "&textlen=", b.length, wq(b), a.X, f)
};
Gv.prototype.update = function(a, b, c) {
    var d = /([^?.,;:!"#$%&'()*+\-/<=>?@[\]^_`{|}~\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f])/;
    this.o = "";
    if (null != c)
        for (var e = 0; e < H(c, 5); e++) {
            var f = $q(c, e),
                g = ji(Xq(f, 0), 0),
                l = ji(Xq(f, 0), 1);
            g = I(f, 4).substring(g, l);
            f = I(Wq(f, 0), 0);
            if (g == f && d.test(g)) {
                this.o = I(c, 2);
                break
            }
        }
    this.c = 0;
    this.K ? (a != this.b || b != this.g ? (this.b = a, this.g = b, c = !1) : c = !0, c || (this.a.stop(), this.H = !this.K || !b || dg(a) || this.m && a.length > Ev[Fv[b.toLowerCase()]] ? !1 : b.toLowerCase() in Fv), Iv(this,
        this.H)) : Iv(this, !1)
};
Gv.prototype.play = function() {
    if (this.b != this.I || this.g != this.A || this.c != this.L) {
        if (this.m) var a = [this.b];
        else {
            a = Ev[Fv[this.g.toLowerCase()]];
            var b = [],
                c = this.O,
                d = this.b.replace(/[ \u3000\n\r\t\s]+/g, " ");
            Av(b, d, a, z(c.a, c), z(c.g, c));
            a = b
        }
        b = [];
        c = [];
        d = "";
        null != this.B && (d += "&" + this.B);
        null != this.v ? d += "&ttsspeed=" + this.v : 0 != this.c && (d += "&ttsspeed=" + this.c);
        this.o && (d += "&hint=" + this.o);
        for (var e = 0; e < a.length; e++) b.push(Hv(this, a[e], this.g, a.length, e, d)), c.push(a[e].length);
        this.a.set(b, this.b.length, c, {
            textlen: this.b.length,
            tl: this.g
        });
        this.I = this.b;
        this.A = this.g;
        this.L = this.c
    }
    this.a.start();
    this.R && (this.c = 0 == this.c ? .24 : 0)
};
Gv.prototype.stop = function() {
    this.a.stop()
};
Gv.prototype.M = function() {
    this.j.Ta() ? this.play() : this.stop()
};
var Iv = function(a, b) {
    a.j.setVisible(b);
    a.j.ea(b);
    b || a.a.stop()
};
var Jv = function(a) {
    wu.call(this, a, "ttl");
    this.b = this.c = null;
    this.g = new $u(MSG_LISTEN, void 0, new bv(Fe));
    this.j = new Gv(this.g, "&client=t&prev=lc", 7)
};
A(Jv, wu);
Jv.prototype.sa = function() {
    Jv.w.sa.call(this);
    this.Z(ol(document, k))
};
Jv.prototype.Z = function(a) {
    Jv.w.Z.call(this, a);
    this.l().appendChild(xr(aq));
    this.c = O("gt-ct-text", this.l());
    a = O("gt-ct-tts", this.l());
    this.b = O("gt-ct-translit", this.l());
    this.g.S(a)
};
Jv.prototype.update = function(a, b, c, d) {
    Jv.w.update.call(this, a, b, c, d);
    Q(this.c, a);
    this.j.update(a, b);
    if (this.data) {
        a = [];
        if (0 < H(this.data, 0))
            for (b = 0; b < H(this.data, 0); b++) c = Zq(this.data, b), fi(c, 3) && "" != I(c, 3) && a.push(I(c, 3));
        0 < a.length ? (Q(this.b, a.join(" ")), X(this.b, !0)) : X(this.b, !1)
    }
    this.setVisible(!0);
    return !0
};
var Kv = function(a, b, c) {
    wu.call(this, a, "cm");
    this.R = b;
    this.A = new Jv(a);
    this.v = null;
    this.V = c;
    this.b = new Y;
    zs(this, this.b);
    this.j = new Y;
    zs(this, this.j);
    this.c = this.m = this.B = this.I = this.K = null;
    this.g = [];
    this.U = lo.J();
    this.F = ro.J()
};
A(Kv, wu);
w = Kv.prototype;
w.sa = function() {
    Kv.w.sa.call(this);
    this.Z(ol(document, k))
};
w.Z = function(a) {
    Kv.w.Z.call(this, a);
    this.l().appendChild(xr(Zp));
    this.A.S(O("gt-cc-tc", this.l()));
    this.v = O("gt-cc-t", this.l());
    X(this.v, !1);
    this.b.S(O("gt-cc-l-i", this.l()));
    this.j.S(O("gt-cc-r-i", this.l()));
    a = O("gt-cc-bc", this.l());
    this.K = new Gt("", new bv("prev-button"));
    this.K.ia(a);
    this.I = new Gt("", new bv("next-button"));
    this.I.ia(a);
    this.B = new Gt("", new bv("big-clear-button"));
    this.B.ia(a);
    this.m = O("gt-cc-exp", this.l());
    this.c = new dv(this.K, this.I, this.B, this)
};
w.W = function() {
    Kv.w.W.call(this);
    Z(this).G(this, "a", this.Ok);
    Z(this).G(this, "b", this.Sk);
    Z(this).G(this.m, r, this.Gk)
};
w.Gk = function() {
    X(this.m, !1);
    C(this.g, function(a) {
        a.setVisible(!0)
    });
    var a = {},
        b = this.F;
    xs(this.b, function(c) {
        c.isVisible() && (vo(b, c.kc(), c.Oa(), c.ic), a[c.eb()] = c.ic ? "e" : "ne")
    });
    uo(this.F, 15, ys(this.b));
    this.log("expand", a)
};
w.Ok = function(a) {
    a = Ql(a.target);
    Lv(this, this.Ia, this.Qa, a, !1, "clks")
};
w.Sk = function(a) {
    a = Ql(a.target);
    Lv(this, this.Qa, this.Ia, a, !1, "clkt")
};
w.Yh = function(a) {
    var b = this.c.a[0];
    Lv(this, b.Qa, b.Ia, a.text, !0, "selalt")
};
w.Mk = function(a) {
    var b = a.text;
    if (!(50 < b.length)) {
        var c = this.c.a[0];
        a.bl ? Lv(this, c.Qa, c.Ia, b, !0, "sel") : Lv(this, c.Ia, c.Qa, b, !0, "sel")
    }
};
var Lv = function(a, b, c, d, e, f) {
    if (d != a.text || b != a.Ia) b == Ve && (b = Ue), qo(a.U, f), e ? (Q(a.A.c, "..."), fr(a.R, b, c, a.Ab, d, z(a.O, a, d, b, c), !1, "UTF-8", new gp("source=" + f))) : Uu(a.V, b, c, d, f)
};
Kv.prototype.update = function(a, b, c, d) {
    Kv.w.update.call(this, a, b, c, d);
    X(this.v, 1 != this.c.a.length);
    var e = 0,
        f = 0,
        g = !0;
    this.g = [];
    xs(this.b, function(f) {
        var l = f.update(a, b, c, d);
        e |= l;
        l && (g ? g = !1 : f.Pf || (f.setVisible(!1), this.g.push(f)))
    }, this);
    Mv(this, this.b);
    var l = 0 < this.g.length;
    X(this.m, l);
    xs(this.j, function(e) {
        f |= e.update(a, b, c, d)
    }, this);
    var m = e || f;
    this.setVisible(m);
    this.A.update(a, b, c, d);
    if (m) {
        var p = {},
            q = this.F;
        xs(this.b, function(a) {
            a.isVisible() && (vo(q, a.kc(), a.Oa(), a.ic), p[a.eb()] = a.ic ? "e" : "ne")
        });
        xs(this.j, function(a) {
            a.isVisible() && (vo(q, a.kc(), a.Oa(), a.ic), p[a.eb()] = a.ic ? "e" : "ne")
        });
        p[this.eb()] = l ? "e" : "ne";
        this.log(de, p);
        vo(this.F, 15, ys(this.b), !0)
    }
    return m
};
Kv.prototype.O = function(a, b, c, d) {
    this.c.push(a, b, c, d);
    this.isVisible() || (a = this.c, 1 < a.a.length && (a.a.splice(a.a.length - 1), a.b = a.a.length - 1, ev(a)))
};
var Mv = function(a, b) {
    var c = [];
    xs(b, function(a) {
        if (a.isVisible() || Pf(this.g, a)) {
            var b = a.xe || a.text;
            Pf(c, b) ? a.Yg() : c.push(b)
        }
    }, a)
};
var Nv = {
        jh: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        kj: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    },
    Ov = Nv;
Ov = Nv;
var Pv = {
    AED: [2, "dh", "\u062f.\u0625.", "DH"],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34,
        "Ft", "Ft"
    ],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u20bd",
        "RUB"
    ],
    SAR: [2, "Rial", "Rial"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "\u20ba", "TRY"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
var Qv = {
        nj: ".",
        mh: ",",
        Dj: "%",
        oh: "0",
        Gj: "+",
        nh: "-",
        pj: "E",
        Fj: "\u2030",
        uj: "\u221e",
        Aj: "NaN",
        kh: "#,##0.###",
        Ij: "#E0",
        Ej: "#,##0%",
        lj: "\u00a4#,##0.00",
        Af: "USD"
    },
    Rv = Qv;
Rv = Qv;
var Uv = function(a) {
        this.m = 40;
        this.a = 1;
        this.H = 0;
        this.c = 3;
        this.v = this.b = 0;
        this.O = !1;
        this.K = this.I = "";
        this.C = Rv.nh;
        this.A = "";
        this.g = 1;
        this.o = !1;
        this.j = [];
        this.B = this.M = !1;
        this.L = 0;
        if (typeof a == Dd) switch (a) {
            case 1:
                Sv(this, Rv.kh);
                break;
            case 2:
                Sv(this, Rv.Ij);
                break;
            case 3:
                Sv(this, Rv.Ej);
                break;
            case 4:
                a = Rv.lj;
                var b = ["0"],
                    c = Pv[Rv.Af][0] & 7;
                if (0 < c) {
                    b.push(".");
                    for (var d = 0; d < c; d++) b.push("0")
                }
                a = a.replace(/0.00/g, b.join(""));
                Sv(this, a);
                break;
            case 5:
                Tv(this, 1);
                break;
            case 6:
                Tv(this, 2);
                break;
            default:
                throw Error("Unsupported pattern type.");
        } else Sv(this, a)
    },
    Sv = function(a, b) {
        b.replace(/ /g, "\u00a0");
        var c = [0];
        a.I = Vv(a, b, c);
        for (var d = c[0], e = -1, f = 0, g = 0, l = 0, m = -1, p = b.length, q = !0; c[0] < p && q; c[0]++) switch (b.charAt(c[0])) {
            case "#":
                0 < g ? l++ : f++;
                0 <= m && 0 > e && m++;
                break;
            case "0":
                if (0 < l) throw Error('Unexpected "0" in pattern "' + b + '"');
                g++;
                0 <= m && 0 > e && m++;
                break;
            case ",":
                0 < m && a.j.push(m);
                m = 0;
                break;
            case ".":
                if (0 <= e) throw Error('Multiple decimal separators in pattern "' + b + '"');
                e = f + g + l;
                break;
            case "E":
                if (a.B) throw Error('Multiple exponential symbols in pattern "' +
                    b + '"');
                a.B = !0;
                a.v = 0;
                c[0] + 1 < p && "+" == b.charAt(c[0] + 1) && (c[0]++, a.O = !0);
                for (; c[0] + 1 < p && "0" == b.charAt(c[0] + 1);) c[0]++, a.v++;
                if (1 > f + g || 1 > a.v) throw Error('Malformed exponential pattern "' + b + '"');
                q = !1;
                break;
            default:
                c[0]--, q = !1
        }
        0 == g && 0 < f && 0 <= e && (g = e, 0 == g && g++, l = f - g, f = g - 1, g = 1);
        if (0 > e && 0 < l || 0 <= e && (e < f || e > f + g) || 0 == m) throw Error('Malformed pattern "' + b + '"');
        l = f + g + l;
        a.c = 0 <= e ? l - e : 0;
        0 <= e && (a.b = f + g - e, 0 > a.b && (a.b = 0));
        a.a = (0 <= e ? e : l) - f;
        a.B && (a.m = f + a.a, 0 == a.c && 0 == a.a && (a.a = 1));
        a.j.push(Math.max(0, m));
        a.M = 0 == e || e == l;
        d = c[0] - d;
        a.K = Vv(a, b, c);
        c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, 1 != a.g && (a.o = !0), a.C = Vv(a, b, c), c[0] += d, a.A = Vv(a, b, c)) : (a.C += a.I, a.A += a.K)
    },
    Tv = function(a, b) {
        a.L = b;
        Sv(a, Rv.kh);
        a.b = 0;
        a.c = 2;
        if (0 < a.b) throw Error("Can't combine significant digits and minimum fraction digits");
        a.H = 2
    },
    bw = function(a, b) {
        if (isNaN(b)) return Rv.Aj;
        var c = [];
        var d = b;
        if (0 == a.L) d = Wv;
        else {
            d = Math.abs(d);
            var e = Xv(a, 1 >= d ? 0 : Yv(d)).cg;
            d = Xv(a, e + Yv(Zv(a, d / Math.pow(10, e)).ki))
        }
        b /= Math.pow(10, d.cg);
        c.push(d.prefix);
        e = 0 > b || 0 == b && 0 > 1 / b;
        c.push(e ?
            a.C : a.I);
        if (isFinite(b))
            if (b = b * (e ? -1 : 1) * a.g, a.B) {
                var f = b;
                if (0 == f) $v(a, f, a.a, c), aw(a, 0, c);
                else {
                    b = Math.floor(Math.log(f) / Math.log(10) + 2E-15);
                    var g = Math.pow(10, b);
                    isFinite(g) && 0 !== g ? f /= g : (g = Math.pow(10, Math.floor(b / 2)), f = f / g / g, 1 == b % 2 && (f = 0 < b ? f / 10 : 10 * f));
                    g = a.a;
                    if (1 < a.m && a.m > a.a) {
                        for (; 0 != b % a.m;) f *= 10, b--;
                        g = 1
                    } else 1 > a.a ? (b++, f /= 10) : (b -= a.a - 1, f *= Math.pow(10, a.a - 1));
                    $v(a, f, g, c);
                    aw(a, b, c)
                }
            } else $v(a, b, a.a, c);
        else c.push(Rv.uj);
        c.push(e ? a.A : a.K);
        c.push(d.Ri);
        return c.join("")
    },
    Zv = function(a, b) {
        var c = Math.pow(10,
            a.c);
        a = 0 >= a.H ? Math.round(b * c) : Math.round(cw(b * c, a.H, a.c));
        isFinite(a) ? (b = Math.floor(a / c), c = Math.floor(a - b * c)) : c = 0;
        return {
            ki: b,
            hk: c
        }
    },
    $v = function(a, b, c, d) {
        if (a.b > a.c) throw Error("Min value must be less than max value");
        d || (d = []);
        b = Zv(a, b);
        var e = b.ki,
            f = b.hk,
            g = 0 < a.b || 0 < f || !1;
        b = a.b;
        g && (b = a.b);
        for (var l = "", m = e; 1E20 < m;) l = "0" + l, m = Math.round(m / 10);
        l = m + l;
        var p = Rv.nj;
        m = Rv.oh.charCodeAt(0);
        var q = l.length,
            B = 0;
        if (0 < e || 0 < c) {
            for (e = q; e < c; e++) d.push(String.fromCharCode(m));
            if (2 <= a.j.length)
                for (c = 1; c < a.j.length; c++) B +=
                    a.j[c];
            c = q - B;
            if (0 < c) {
                e = a.j;
                B = q = 0;
                for (var D, K = Rv.mh, ea = l.length, ha = 0; ha < ea; ha++)
                    if (d.push(String.fromCharCode(m + 1 * Number(l.charAt(ha)))), 1 < ea - ha)
                        if (D = e[B], ha < c) {
                            var Ra = c - ha;
                            (1 === D || 0 < D && 1 === Ra % D) && d.push(K)
                        } else B < e.length && (ha === c ? B += 1 : D === ha - c - q + 1 && (d.push(K), q += D, B += 1))
            } else {
                c = l;
                l = a.j;
                e = Rv.mh;
                D = c.length;
                K = [];
                for (q = l.length - 1; 0 <= q && 0 < D; q--) {
                    B = l[q];
                    for (ea = 0; ea < B && 0 <= D - ea - 1; ea++) K.push(String.fromCharCode(m + 1 * Number(c.charAt(D - ea - 1))));
                    D -= B;
                    0 < D && K.push(e)
                }
                d.push.apply(d, K.reverse())
            }
        } else g || d.push(String.fromCharCode(m));
        (a.M || g) && d.push(p);
        f = String(f);
        g = f.split("e+");
        2 == g.length && (f = String(cw(parseFloat(g[0]), a.H, 1)), f = f.replace(".", ""), f += yg("0", parseInt(g[1], 10) - f.length + 1));
        a.c + 1 > f.length && (f = "1" + yg("0", a.c - f.length) + f);
        for (a = f.length;
             "0" == f.charAt(a - 1) && a > b + 1;) a--;
        for (e = 1; e < a; e++) d.push(String.fromCharCode(m + 1 * Number(f.charAt(e))))
    },
    aw = function(a, b, c) {
        c.push(Rv.pj);
        0 > b ? (b = -b, c.push(Rv.nh)) : a.O && c.push(Rv.Gj);
        b = "" + b;
        for (var d = Rv.oh, e = b.length; e < a.v; e++) c.push(d);
        c.push(b)
    },
    Vv = function(a, b, c) {
        for (var d = "", e = !1,
                 f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
            else if (e) d += g;
            else switch (g) {
                    case "#":
                    case "0":
                    case ",":
                    case ".":
                    case ";":
                        return d;
                    case "\u00a4":
                        c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += Rv.Af) : d += Pv[Rv.Af][1];
                        break;
                    case "%":
                        if (!a.o && 1 != a.g) throw Error(Sa);
                        if (a.o && 100 != a.g) throw Error(Ga);
                        a.g = 100;
                        a.o = !1;
                        d += Rv.Dj;
                        break;
                    case "\u2030":
                        if (!a.o && 1 != a.g) throw Error(Sa);
                        if (a.o && 1E3 != a.g) throw Error(Ga);
                        a.g = 1E3;
                        a.o = !1;
                        d += Rv.Fj;
                        break;
                    default:
                        d +=
                            g
                }
        }
        return d
    },
    Wv = {
        prefix: "",
        Ri: "",
        cg: 0
    },
    Xv = function(a, b) {
        a = 1 == a.L ? Ov.jh : Ov.kj;
        null == a && (a = Ov.jh);
        if (3 > b) return Wv;
        b = Math.min(14, b);
        var c = a[Math.pow(10, b)];
        for (--b; !c && 3 <= b;) c = a[Math.pow(10, b)], b--;
        if (!c) return Wv;
        a = c.other;
        return a && "0" != a ? (a = /([^0]*)(0+)(.*)/.exec(a)) ? {
            prefix: a[1],
            Ri: a[3],
            cg: b + 1 - (a[2].length - 1)
        } : Wv : Wv
    },
    Yv = function(a) {
        if (!isFinite(a)) return 0 < a ? a : 0;
        for (var b = 0; 1 <= (a /= 10);) b++;
        return b
    },
    cw = function(a, b, c) {
        if (!a) return a;
        b = b - Yv(a) - 1;
        if (b < -c) return c = Math.pow(10, c), Math.round(a / c) * c;
        c = Math.pow(10, b);
        return Math.round(a * c) / c
    };
var dw = function(a, b, c) {
    Y.call(this);
    this.j = a;
    this.b = b;
    this.c = c;
    this.g = new Uv("######")
};
A(dw, Y);
dw.prototype.md = function(a) {
    return a && a.tagName == k && O(ob, a) && O(qb, a) ? !0 : !1
};
var gw = function(a) {
        ew(a, !1);
        fw(a, 0)
    },
    fw = function(a, b) {
        b = bw(a.g, b);
        var c = bw(a.g, a.j);
        Q(O(ob, a.l()), b + "/" + c)
    },
    ew = function(a, b) {
        b ? qr(O(ob, a.l()), a.b, a.c) : qr(O(ob, a.l()), a.c, a.b);
        X(O(qb, a.l()), b)
    },
    hw = function(a, b) {
        fk(b) ? qr(O(qb, a.l()), "cc-msg-ltr", "cc-msg-rtl") : qr(O(qb, a.l()), "cc-msg-rtl", "cc-msg-ltr")
    };
var iw = function(a, b) {
    vi.call(this);
    this.c = this.b = 0;
    this.Hb = a;
    this.g = b;
    this.a = new It(z(this.jk, this), 0, this)
};
A(iw, vi);
w = iw.prototype;
w.N = function() {
    this.a.Ba();
    delete this.Hb;
    delete this.g;
    iw.w.N.call(this)
};
w.start = function(a, b) {
    this.stop();
    b = b || 0;
    this.b = Math.max(a || 0, 0);
    this.c = 0 > b ? -1 : Df() + b;
    this.a.start(0 > b ? this.b : Math.min(this.b, b))
};
w.stop = function() {
    this.a.stop()
};
w.kb = function() {
    return this.a.kb()
};
w.jk = function() {
    if (!this.Hb.call(this.g))
        if (0 > this.c) this.a.start(this.b);
        else {
            var a = this.c - Df();
            0 >= a || this.a.start(Math.min(this.b, a))
        }
};
var kw = function(a) {
    M.call(this);
    this.D = a;
    this.a = this.D.value;
    this.b = new js(this);
    this.g = Df();
    jw ? this.b.G(a, Kd, this.hd) : this.b.G(a, [kd, kb, Qb, zd, Vc], this.Fk);
    this.c = new iw(z(this.Ah, this))
};
A(kw, M);
var jw = gh || F || dh || fh && wh("1.9");
w = kw.prototype;
w.Dc = Tc;
w.F = null;
w.N = function() {
    kw.w.N.call(this);
    this.b.Ba();
    this.b = null;
    this.c.Ba();
    this.c = null
};
w.Ah = function() {
    if (this.a == this.D.value) return !1;
    this.dispatchEvent("after_paste");
    return !0
};
w.hd = function(a) {
    a = new Ai(a.a);
    a.type = Kd;
    this.dispatchEvent(a);
    Mj(function() {
        this.Ah() || this.c.start(50, 200)
    }, 0, this)
};
w.Fk = function(a) {
    switch (this.Dc) {
        case Tc:
            switch (a.type) {
                case kb:
                    this.Dc = Tc;
                    break;
                case Qb:
                    this.Dc = "focused";
                    break;
                case zd:
                    this.Dc = Tc, this.D.value != this.a && this.hd(a)
            }
            break;
        case "focused":
            switch (a.type) {
                case Vc:
                    var b = this.g + 400;
                    (Df() > b || this.j == Qb) && this.hd(a);
                    break;
                case kb:
                    this.Dc = Tc;
                    break;
                case kd:
                    if (jh && ch && 0 == a.keyCode || jh && ch && 17 == a.keyCode) break;
                    this.Dc = "typing";
                    break;
                case zd:
                    this.D.value != this.a && this.hd(a)
            }
            break;
        case "typing":
            switch (a.type) {
                case Vc:
                    this.Dc = "focused";
                    break;
                case kb:
                    this.Dc = Tc;
                    break;
                case kd:
                    (a.ctrlKey && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode || a.metaKey && 86 == a.keyCode) && this.hd(a);
                    break;
                case zd:
                    this.D.value != this.a && this.hd(a)
            }
    }
    this.g = Df();
    this.a = this.D.value;
    this.j = a.type
};
var lw = Ze();
A(lw, Ys);
rf(lw);
w = lw.prototype;
w.ac = Ze();
w.S = function(a, b) {
    tt(a, !1);
    a.dc &= -256;
    a.Fa(32, !1);
    lw.w.S.call(this, a, b);
    a.g(b.value);
    return b
};
w.Wa = function(a) {
    tt(a, !1);
    a.dc &= -256;
    a.Fa(32, !1);
    return a.a.b(Qa, {
        "class": ct(this, a).join(" "),
        disabled: !a.isEnabled()
    }, a.Da() || "")
};
w.Ec = function(a) {
    return a.tagName == Qa
};
w.qg = qf;
w.pg = function(a) {
    return a.isEnabled()
};
w.nd = qf;
w.Sc = function(a, b, c) {
    lw.w.Sc.call(this, a, b, c);
    (a = a.l()) && 1 == b && (a.disabled = c)
};
w.Wb = qf;
w.Mb = function(a, b) {
    a && (a.value = b)
};
w.T = v("goog-textarea");
var mw = function(a, b, c) {
    rt.call(this, a, b || lw.J(), c);
    tt(this, !1);
    this.re = !0;
    (b = this.l()) && this.c.Re(b, !0);
    this.qd = "" != a;
    a || (this.Tc = "")
};
A(mw, rt);
var nw = !(F && !yh(11));
w = mw.prototype;
w.rd = !1;
w.ef = !1;
w.qd = !1;
w.uc = 0;
w.Lg = 0;
w.ei = !1;
w.qf = !1;
w.Vg = !1;
w.Ug = !1;
w.xd = "";
var ow = function(a) {
        return a.v.top + a.v.bottom + a.O.top + a.O.bottom
    },
    pw = function(a) {
        var b = a.Lg,
            c = a.l();
        b && c && a.qf && (b -= ow(a));
        return b
    },
    rw = function(a) {
        a.Lg = 105;
        qw(a)
    };
mw.prototype.b = function(a) {
    this.g(String(a))
};
mw.prototype.P = function() {
    return this.l().value != this.xd || sw(this) || this.qd ? this.l().value : ""
};
mw.prototype.g = function(a) {
    mw.w.g.call(this, a);
    this.qd = "" != a;
    qw(this)
};
mw.prototype.ea = function(a) {
    mw.w.ea.call(this, a);
    this.l().disabled = !a
};
var qw = function(a) {
        a.l() && a.B()
    },
    sw = function(a) {
        return "placeholder" in a.l()
    },
    tw = function(a) {
        a.xd && (sw(a) ? a.l().placeholder = a.xd : !a.l() || a.qd || a.ef || (U(a.l(), xe), a.l().value = a.xd))
    };
mw.prototype.W = function() {
    mw.w.W.call(this);
    var a = this.l();
    W(a, {
        overflowY: Mc,
        overflowX: gb,
        boxSizing: lb,
        MsBoxSizing: lb,
        WebkitBoxSizing: lb,
        MozBoxSizing: lb
    });
    this.v = gs(a);
    this.O = Mr(a);
    Z(this).G(a, Wd, this.B).G(a, Qb, this.B).G(a, md, this.B).G(a, Ad, this.Ea).G(a, kb, this.ma);
    tw(this);
    qw(this)
};
var uw = function(a) {
        if (!a.ei) {
            var b = a.l().cloneNode(!1);
            W(b, {
                position: Xa,
                height: gb,
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: Mc
            });
            a.a.a.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.Vg = d > c;
            b.style.borderWidth = "10px";
            a.Ug = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.qf = !0);
            xl(b);
            a.ei = !0
        }
        b = a.l();
        isNaN(a.v.top) && (a.v = gs(b), a.O = Mr(b));
        c = a.l().scrollHeight;
        var e = a.l();
        d = e.offsetHeight - e.clientHeight;
        if (!a.Vg) {
            var f =
                a.v;
            d -= f.top + f.bottom
        }
        a.Ug || (e = Mr(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.qf ? c -= ow(a) : (a.Vg || (d = a.v, c += d.top + d.bottom), a.Ug || (a = Mr(b), c += a.top + a.bottom));
        return c
    },
    vw = function(a, b) {
        a.uc != b && (a.uc = b, a.l().style.height = b + Od)
    },
    ww = function(a) {
        var b = a.l();
        b.style.height = gb;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.uc = 0
    };
mw.prototype.ma = function() {
    sw(this) || (this.ef = !1, "" == this.l().value && (this.qd = !1, tw(this)))
};
mw.prototype.B = function(a) {
    if (!this.rd) {
        var b = this.l();
        !sw(this) && a && a.type == Qb && (b.value == this.xd && this.xd && !this.ef && (V(b, xe), b.value = ""), this.ef = !0, this.qd = "" != b.value);
        var c = !1;
        this.rd = !0;
        a = this.uc;
        if (b.scrollHeight) {
            var d = !1,
                e = !1,
                f = uw(this),
                g = b.offsetHeight,
                l = pw(this);
            var m = 0;
            var p = this.l();
            m && p && this.qf && (m -= ow(this));
            l && f < l ? (vw(this, l), d = !0) : m && f > m ? (vw(this, m), b.style.overflowY = "", e = !0) : g != f ? vw(this, f) : this.uc || (this.uc = f);
            d || e || !nw || (c = !0)
        } else ww(this);
        this.rd = !1;
        c && (b = this.l(), this.rd ||
        (this.rd = !0, (e = b.scrollHeight) ? (f = uw(this), c = pw(this), c && f <= c || (d = this.v, b.style.paddingBottom = d.bottom + 1 + Od, uw(this) == f && (b.style.paddingBottom = d.bottom + e + Od, b.scrollTop = 0, e = uw(this) - e, e >= c ? vw(this, e) : vw(this, c)), b.style.paddingBottom = d.bottom + Od)) : ww(this), this.rd = !1));
        a != this.uc && this.dispatchEvent(Rd)
    }
};
mw.prototype.Ea = function() {
    var a = this.l(),
        b = a.offsetHeight;
    a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
    b != this.uc && (this.uc = this.Lg = b)
};
var xw = function(a, b) {
    mw.call(this, a);
    this.La = !!b;
    this.V = "";
    this.Y = null;
    this.K = 0;
    this.R = this.U = !1;
    this.aa = null
};
A(xw, mw);
xw.prototype.b = function(a) {
    xw.w.b.call(this, a);
    this.M(ae)
};
xw.prototype.W = function() {
    xw.w.W.call(this);
    L(this.l(), "compositionstart", z(this.xa, this), !1, this);
    L(this.l(), "compositionend", z(this.ra, this), !1, this);
    this.aa = new Ks(this.l());
    L(this.aa, jd, function(a) {
        yw(this, jd, {
            keyCode: a.keyCode
        })
    }, !1, this);
    L(this.l(), Vc, function() {
        yw(this, Vc)
    }, !1, this);
    L(new kw(this.l()), Kd, function() {
        this.U = !0;
        yw(this, Kd)
    }, !1, this);
    L(this.l(), "drop", function() {
        yw(this, "drop")
    }, !1, this);
    this.Y = new Kj(1E3);
    L(this.Y, Ae, function() {
        this.M("timer")
    }, !1, this);
    this.Y.start()
};
xw.prototype.xa = function() {
    this.R = !0
};
xw.prototype.ra = function() {
    this.R = !1;
    yw(this, Vc)
};
var yw = function(a, b, c) {
    Mj(z(a.M, a, b, c), 0, a)
};
xw.prototype.M = function(a, b) {
    if (!this.R)
        if (this.La && a == jd && b && 13 == b.keyCode) this.dispatchEvent("enter");
        else {
            var c = this.P();
            "" == c.trim() && c != this.V && this.dispatchEvent("clear");
            c != this.V && (this.K += 1, this.V = c, c = new J(rb), this.U && (this.U = !1, a = Kd), c.fd = a, null != b && Rg(c, b), this.dispatchEvent(c))
        }
};
var zw = function(a) {
    var b = a.K;
    a.K = 0;
    return b
};
var Aw = function(a, b) {
    M.call(this);
    this.Nc = a;
    this.a = [];
    null != b && this.Ad(b)
};
A(Aw, M);
Aw.prototype.update = function(a, b) {
    for (var c = this.a.length = 0; c < a.length; ++c) this.a.push(a[c]);
    this.dispatchEvent({
        type: this.Nc,
        data: this.a,
        selected: null != b ? b : null
    })
};
var Bw = function(a, b) {
    M.call(this);
    this.K = !!b;
    this.a = "";
    this.M = a;
    this.c = this.b = "";
    this.C = new Aw(pe, this);
    this.A = new Aw(re, this);
    this.H = new Aw(se, this);
    this.O = [];
    this.V = new Aw(ne, this);
    this.R = new Aw(ye, this);
    this.U = this.X = 0;
    this.g = [];
    this.j = [];
    this.L = [];
    this.I = [];
    this.B = !1;
    this.v = ""
};
A(Bw, M);
var Cw = function(a, b) {
        var c = [];
        if (b) {
            for (var d = a.a == gb ? a.c : a.a, e = -1, f = 0; f < b.length; ++f) b[f] == d ? a.a != gb && (e = f) : c.push(b[f]);
            b = -1 != e && 3 > e
        } else b = !1;
        b || a.B || a.C.update(c ? c.slice(0, 3) : [])
    },
    Dw = function(a, b, c, d) {
        for (var e = {}, f = [], g = 0; g < b.length && 3 > f.length; g++) f.push(b[g]), e[b[g]] = !0;
        for (g = 0; g < a.length && 3 > f.length; g++) null == e[a[g]] && (e[a[g]] = !0, f.push(a[g]));
        c.update(f, d)
    };
Bw.prototype.o = function(a, b) {
    b = null != b ? b : 0;
    if (3 == b || 4 == b || 5 == b) this.B = !0;
    6 == b && (this.v = a);
    a == Ve && (a = Ue);
    a != gb && Ew(this, "");
    Fw(this, this.A, a, this.g);
    if (this.a == a) a == gb && this.dispatchEvent(pd);
    else {
        var c = this.a;
        this.a = a;
        this.K && Gw(this.a, this.g);
        this.M && c != this.a && this.M(fk(this.a) ? Vd : sd);
        a = c == gb ? void 0 : z(this.m, this, c, 6);
        this.X = b;
        Hw(this, this.a, oe, b, a)
    }
};
Bw.prototype.m = function(a, b) {
    b = null != b ? b : 0;
    6 != b && 5 != b || a != Ue || this.v != Ve || (a = Ve);
    5 == b && (this.v = this.b);
    Fw(this, this.H, a, this.j);
    if (this.b != a) {
        var c = this.b;
        this.b = a;
        this.K && Gw(this.b, this.j);
        this.U = b;
        Hw(this, this.b, ze, b, z(this.o, this, c, 6))
    }
};
var Fw = function(a, b, c, d) {
        for (var e = Vf(b.a), f = c != gb, g = 0; g < e.length; g++)
            if (c == e[g]) {
                f = !1;
                break
            }
        if (a.K && c != gb) g = e.length, e = [].concat([c], d instanceof Array ? d : jf(hf(d)), e instanceof Array ? e : jf(hf(e))), Zf(e), e.length = g;
        else if (f)
            for (a = {}, 0 < d.length && (a[d[0]] = !0), 1 < d.length && (a[d[1]] = !0), g = e.length - 1; 0 <= g; g--)
                if (!a[e[g]]) {
                    e[g] = c;
                    break
                }
        b.update(e, c)
    },
    Ew = function(a, b) {
        b == gb && (b = "");
        a.c != b && (a.c = b, a.dispatchEvent({
            type: Gb,
            data: a.c
        }))
    },
    Iw = function(a) {
        Gw(a.a, a.g);
        Gw(a.b, a.j)
    },
    Jw = function(a) {
        a.L = [];
        a.I = [];
        for (var b =
            window.DEFAULT_SOURCES || [], c = window.DEFAULT_TARGETS || [], d = 0; d < b.length; d++) Qf(a.L, b[d]);
        for (b = 0; b < c.length; b++) Qf(a.I, c[b])
    },
    Kw = function(a) {
        if (!a || 0 == a.length) return "";
        for (var b = [], c = 0; c < a.length; ++c) b.push(a[c]);
        return b.join("|")
    },
    Hw = function(a, b, c, d, e) {
        a.dispatchEvent({
            type: c,
            data: b,
            uh: 6 == d
        });
        e && (3 == d || 4 == d) && a.a == a.b && a.a != Ue && e();
        4 != d && 3 != d || a.dispatchEvent(pd)
    },
    Lw = function(a, b) {
        for (var c = [], d = 0; d < a.length && !(a[d] != b && c.push(a[d]), 3 <= c.length); ++d);
        return c
    },
    Gw = function(a, b) {
        if (a != gb) {
            for (var c =
                0; c < b.length && b[c] != a; ++c);
            c == b.length ? (b.unshift(a), 10 < b.length && b.pop()) : (b.splice(c, 1), b.unshift(a))
        }
    };
var Pw = function(a, b) {
        var c = 0,
            d = 0;
        if (Mw(a)) c = a.selectionStart, d = b ? -1 : a.selectionEnd;
        else if (Nw()) {
            var e = Ow(a),
                f = e[0];
            e = e[1];
            if (f.inRange(e)) {
                f.setEndPoint("EndToStart", e);
                if (a.type == we) {
                    a = e.duplicate();
                    var g = f.text;
                    c = g;
                    e = d = a.text;
                    for (var l = !1; !l;) 0 == f.compareEndPoints(Oa, f) ? l = !0 : (f.moveEnd(sb, -1), f.text == g ? c += "\r\n" : l = !0);
                    if (b) b = [c.length, -1];
                    else {
                        for (b = !1; !b;) 0 == a.compareEndPoints(Oa, a) ? b = !0 : (a.moveEnd(sb, -1), a.text == d ? e += "\r\n" : b = !0);
                        b = [c.length, c.length + e.length]
                    }
                    return b
                }
                c = f.text.length;
                d = b ? -1 :
                f.text.length + e.text.length
            }
        }
        return [c, d]
    },
    Rw = function(a, b) {
        Mw(a) ? (a.selectionStart = b, a.selectionEnd = b) : Nw() && (b = Qw(a, b), a = a.createTextRange(), a.collapse(!0), a.move(sb, b), a.select())
    },
    Sw = function(a) {
        if (Mw(a)) return a.value.substring(a.selectionStart, a.selectionEnd);
        if (Nw()) {
            var b = Ow(a),
                c = b[1];
            if (b[0].inRange(c))
                if (a.type == we) {
                    a = c.duplicate();
                    c = b = a.text;
                    for (var d = !1; !d;) 0 == a.compareEndPoints(Oa, a) ? d = !0 : (a.moveEnd(sb, -1), a.text == b ? c += "\r\n" : d = !0);
                    a = c
                } else a = c.text;
            else a = "";
            return a
        }
        throw Error("Cannot get the selection text");
    },
    Ow = function(a) {
        var b = a.ownerDocument || a.document,
            c = b.selection.createRange();
        a.type == we ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    },
    Qw = function(a, b) {
        a.type == we && (b = eg(a.value.substring(0, b)).length);
        return b
    },
    Mw = function(a) {
        try {
            return typeof a.selectionStart == Dd
        } catch (b) {
            return !1
        }
    },
    Nw = function() {
        return F && !wh("9")
    };
var Tw = function(a, b, c, d, e) {
        var f = MAX_SINGLE_QUERY_LENGTH;
        this.c = a;
        this.j = b;
        this.H = c;
        this.g = d;
        this.b = f;
        this.a = e || null;
        this.o = !1;
        this.m = new Ko;
        this.m.g = "t";
        this.F = ro.J()
    },
    Uw = function(a) {
        L(a.c, rb, a.v, !1, a);
        L(document, "selectionchange", a.A, !1, a);
        L(new kw(a.c.l()), Kd, a.C, !1, a)
    };
Tw.prototype.v = function(a) {
    var b = this.c.P().length;
    this.a && fw(this.a, b);
    var c = a.fd == ae;
    a = a.fd == jd;
    if (b > this.b) {
        if (!Xr(this.g.l()) && !a || c) {
            this.g.setVisible(!0);
            a = this.j.c;
            "" == a && (a = this.j.a);
            c = b - this.b;
            Po(this.m, "t", "ov", "1", {
                sl: this.j.a,
                tl: this.j.b,
                dl: a,
                hl: this.H,
                ql: b,
                ol: c
            });
            a = this.F;
            R(a, Ao(a, 250, b, c));
            this.a && ew(this.a, !0);
            c = this.c.P().substring(this.b);
            Q(Vw(this.g), c);
            a = this.g;
            c = O("ovfl-msg", a.l());
            a = a.v;
            b = {
                overflow_character_count: b - this.b,
                maximum_input_count: this.b
            };
            if (a.g) {
                a.j = [];
                var d = Ww(a,
                    a.g);
                a.b = Xw(a, d);
                a.g = null
            }
            if (a.b && 0 != a.b.length)
                for (a.a = Vf(a.j), d = [], Yw(a, a.b, b, !1, d), b = d.join(""), b.search("#"); 0 < a.a.length;) b = b.replace(a.c(a.a), a.a.pop());
            else b = "";
            Q(c, b)
        }
        this.c.g(this.c.P().substring(0, this.b));
        this.a && fw(this.a, this.b)
    } else b < this.b && this.a && ew(this.a, !1), (c || 0 == b) && Zw(this)
};
var Zw = function(a) {
    Q(Vw(a.g), "");
    a.g.setVisible(!1);
    a.a && ew(a.a, !1)
};
Tw.prototype.A = function() {
    var a = Pw(this.c.l(), !1),
        b = this.c.P().length;
    this.o = 0 != b && 0 == a[0] && a[1] == b
};
Tw.prototype.C = function() {
    this.o && Zw(this)
};
var $s = Ze();
A($s, Ys);
rf($s);
$s.prototype.Wa = function(a) {
    var b = a.a.b(Na, ct(this, a).join(" "));
    $w(this, b, a.j);
    return b
};
$s.prototype.S = function(a, b) {
    b = $s.w.S.call(this, a, b);
    var c = lr(b),
        d = !1;
    Pf(c, ax(this, null)) ? d = null : Pf(c, ax(this, !0)) ? d = !0 : Pf(c, ax(this, !1)) && (d = !1);
    a.j = d;
    Us(b, tb, null == d ? "mixed" : 1 == d ? Oe : "false");
    return b
};
$s.prototype.ac = v("checkbox");
var $w = function(a, b, c) {
    if (b) {
        var d = ax(a, c);
        mr(b, d) || (Jg(bx, function(a) {
            a = ax(this, a);
            pr(b, a, a == d)
        }, a), Us(b, tb, null == c ? "mixed" : 1 == c ? Oe : "false"))
    }
};
$s.prototype.T = v("goog-checkbox");
var ax = function(a, b) {
    a = a.T();
    if (1 == b) return a + "-checked";
    if (0 == b) return a + "-unchecked";
    if (null == b) return a + "-undetermined";
    throw Error("Invalid checkbox state: " + b);
};
var cx = function(a, b, c) {
    c = c || $s.J();
    rt.call(this, null, c, b);
    this.j = y(a) ? a : !1
};
A(cx, rt);
var bx = {
    Km: !0,
    Mm: !1,
    Nm: null
};
w = cx.prototype;
w.Ta = function() {
    return 1 == this.j
};
w.Ka = function(a) {
    a != this.j && (this.j = a, $w(this.c, this.l(), this.j))
};
w.Sh = function() {
    this.Ka(this.j ? !1 : !0)
};
w.W = function() {
    cx.w.W.call(this);
    this.bf && Z(this).G(this.l(), r, this.Zh)
};
w.ea = function(a) {
    cx.w.ea.call(this, a);
    if (a = this.l()) a.tabIndex = this.isEnabled() ? 0 : -1
};
w.Zh = function(a) {
    a.stopPropagation();
    var b = this.j ? "uncheck" : "check";
    this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(), this.Sh(), this.dispatchEvent(rb))
};
w.Uc = function(a) {
    32 == a.keyCode && (this.wc(a), this.Zh(a));
    return !1
};
pt("goog-checkbox", function() {
    return new cx
});
var dx = function(a) {
    a = a || {};
    var b = a.gj ? " " + Jp("jfk-checkbox-undetermined") : a.checked ? " " + Jp("jfk-checkbox-checked") : " " + Jp("jfk-checkbox-unchecked");
    var c = a.gj ? "mixed" : a.checked ? Oe : "false";
    var d = a.Nj ? ' aria-labelledby="' + Jp(a.Nj) + '"' : a.Mj ? ' aria-label="' + Jp(a.Mj) + '"' : "";
    return Ep('<span class="' + Jp("jfk-checkbox") + " " + Jp($b) + b + (a.disabled ? " " + Jp("jfk-checkbox-disabled") : "") + (a.Tf ? " " + Jp(a.Tf) : "") + '" role="checkbox" aria-checked="' + c + '"' + d + (a.id ? ' id="' + Jp(a.id) + '"' : "") + (a.disabled ? ' aria-disabled="true" tabindex="-1"' :
        ' tabindex="' + (a.ah ? Jp(a.ah) : "0") + '"') + (a.attributes ? " " + Lp(a.attributes) : "") + ' dir="ltr"><div class="' + Jp(hd) + '" role="presentation"></div></span>')
};
var ex = function(a, b) {
    var c = at();
    cx.call(this, a, b, c);
    this.Fa(4, !0)
};
A(ex, cx);
ex.prototype.sa = function() {
    this.D = yr(dx, {
        checked: this.Ta(),
        disabled: !this.isEnabled(),
        gj: null == this.j
    }, void 0, this.a)
};
ex.prototype.Z = function(a) {
    ex.w.Z.call(this, a);
    U(a, $b);
    this.l().dir = sd;
    this.lc(hd) || (a = this.a.b(k, hd), this.l().appendChild(a));
    Ts(this.lc(hd), "presentation")
};
ex.prototype.Ic = function(a) {
    ex.w.Ic.call(this, a);
    fx(this, !1)
};
ex.prototype.Ya = function(a) {
    ex.w.Ya.call(this, a);
    this.isEnabled() && fx(this, !0)
};
var fx = function(a, b) {
    a.l() && pr(a.l(), "jfk-checkbox-clearOutline", b)
};
var gx = function(a, b) {
    ex.call(this, a, b)
};
A(gx, ex);
gx.prototype.Sh = function() {
    this.Ka(0 == this.j ? !0 : !1)
};
var hx = function() {
        this.a = this.$ = null
    },
    ix = function() {
        var a = op(new ap(window.location.href, !0), fb);
        return a ? "&authuser=" + a : ""
    };
hx.prototype.b = function(a, b) {
    b = b.target;
    if (Tm(b)) try {
        var c = Vm(b);
        if (c.qe && c.qe.length) {
            b = [];
            for (var d = [], e = 0; e < c.qe.length; ++e) b.push(c.qe[e].encrypted_experiment_name), d.push(c.qe[e].encrypted_question_id);
            this.a = new gp;
            vp(this.a, "cpqn", b);
            vp(this.a, "cpqi", d)
        }
        a(c)
    } catch (f) {} else a(null)
};
hx.prototype.abort = function() {
    this.$ && this.$.abort()
};
var jx = function(a) {
        var b = new gp;
        b.set("as", a.encrypted_experiment_name);
        b.set("qid", a.encrypted_question_id);
        b.set("xt", window.USAGE || window.xsrfToken);
        return b
    },
    kx = function(a, b, c, d, e, f, g) {
        a = la + ix() + "&sl=" + d + "&tl=" + e + "&surt=" + c + "&i=" + a;
        0 < f.length && (c = new gp, vp(c, "answer", f), a += "&" + c.toString());
        f = jx(b);
        f.set("q", b.source);
        0 < g.length && vp(f, "ffa", g);
        Km(a, function(a) {
            Vm(a.target)
        }, Ka, f.toString())
    },
    lx = function(a, b, c, d, e) {
        a = la + ix() + "&sl=" + d + "&tl=" + e + "&surt=" + c + "&i=" + a + "&sk=1";
        b = jx(b);
        Km(a, function(a) {
                Vm(a.target)
            },
            Ka, b.toString())
    };
var mx = function(a, b) {
    this.D = a;
    this.C = this.o = this.a = 0;
    this.O = b;
    this.j = !0;
    this.b = null;
    this.A = this.H = this.v = this.m = this.g = "";
    this.F = Ko.J();
    this.c = new js(this)
};
mx.prototype.setVisible = function(a) {
    X(this.D, a)
};
var px = function(a, b) {
        b != a.j && a.b && (b ? nx(a) : ox(a));
        a.j = b
    },
    nx = function(a) {
        a.j = !0;
        os(a.c);
        if (a.a >= a.b.activities.length) a.O();
        else {
            if ("gt" == a.g) a.C = 5, wr(a.D, Qp, {
                Ia: a.H,
                Qa: a.A,
                Bd: a.b.activities[a.a].source,
                Yf: a.o + 1,
                eh: a.C,
                Bm: window.MSG_CC_TYPE_TIP,
                tc: window.MSG_CC_TITLE_GT,
                Mg: window.MSG_CC_SKIP,
                wl: window.MSG_CC_SUBMIT
            }), a.c.G(O("cc-submit", a.D), r, a.K), a.c.G(O(pb, a.D), Vc, a.B);
            else {
                a.C = 10;
                wr(a.D, Rp, {
                    Ia: a.H,
                    Qa: a.A,
                    Bd: a.b.activities[a.a].source,
                    lm: a.b.activities[a.a].target_options[0],
                    Yf: a.o + 1,
                    eh: a.C,
                    tc: window.MSG_CC_TITLE_VT,
                    Mg: window.MSG_CC_SKIP,
                    xl: window.MSG_CC_YES,
                    vl: window.MSG_CC_NO
                });
                var b = O("cc-no", a.D);
                a.c.G(O("cc-yes", a.D), r, a.M);
                a.c.G(b, r, a.L)
            }
            b = O("cc-header", a.D);
            var c = O("cc-help", a.D);
            a.c.G(O("cc-skip", a.D), r, a.I);
            a.c.G(b, r, function() {
                ox(a);
                Po(a.F, "t", xb, vb)
            });
            a.c.G(c, r, function(b) {
                b.stopPropagation();
                qx(a);
                Po(a.F, "t", xb, "help")
            })
        }
    };
mx.prototype.I = function() {
    lx(this.a, this.b.activities[this.a], this.g, this.m, this.v);
    ++this.a;
    nx(this)
};
mx.prototype.K = function() {
    0 != O(pb, this.D).value.trim().length && (kx(this.a, this.b.activities[this.a], this.g, this.m, this.v, [], [O(pb, this.D).value.trim()]), rx(this))
};
mx.prototype.M = function() {
    kx(this.a, this.b.activities[this.a], this.g, this.m, this.v, ["vt_perfect"], []);
    rx(this)
};
mx.prototype.L = function() {
    kx(this.a, this.b.activities[this.a], this.g, this.m, this.v, ["vt_imperfect"], []);
    rx(this)
};
var rx = function(a) {
    ++a.a;
    ++a.o;
    a.o >= a.C ? (a.o = 0, sx(a)) : nx(a)
};
mx.prototype.B = function() {
    var a = O("cc-submit", this.D);
    O(pb, this.D).value ? U(a, "active") : V(a, "active")
};
var ox = function(a) {
        a.j = !1;
        os(a.c);
        wr(a.D, Tp, {
            tc: window.MSG_CC_TITLE_COLLAPSED
        });
        a.c.G(O("cc-header", a.D), r, function() {
            nx(a);
            Po(a.F, "t", xb, "expand")
        })
    },
    sx = function(a) {
        Po(a.F, "t", xb, "show_thanks");
        os(a.c);
        wr(a.D, Sp, {
            nm: window.MSG_CC_THANK_YOU,
            Pj: window.MSG_CC_CONTRIBUTE_MORE
        });
        var b = O("cc-collapse", a.D);
        a.c.G(O("cc-continue", a.D), r, function() {
            nx(a);
            Po(a.F, "t", xb, "thanks_continue")
        });
        a.c.G(b, r, function() {
            ox(a);
            Po(a.F, "t", xb, "thanks_collapse")
        })
    },
    qx = function(a) {
        var b = O("cc-body", a.D),
            c = "";
        c = "gt" == a.g ?
        window.MSG_CC_TIP_GT + " " + window.MSG_CC_TIP_COMMON + "\n" + window.MSG_CC_TIP_THANK_YOU : window.MSG_CC_TIP_VT + " " + window.MSG_CC_TIP_COMMON + "\n" + window.MSG_CC_TIP_THANK_YOU;
        wr(b, Up, {
            Wk: c,
            gk: window.MSG_CC_WATCH_VIDEO
        });
        a.c.G(O("cc-close", a.D), r, function() {
            nx(a);
            Po(a.F, "t", xb, "help_close")
        });
        a.c.G(O("cc-help-footer", a.D), r, function() {
            Po(a.F, "t", xb, "watch");
            window.open(window.COMMUNITY_CARD_VIDEO_URL)
        })
    };
var tx = function(a, b, c) {
        var d = COMMUNITY_CARD_TASK_TYPE,
            e = COMMUNITY_CARD_EXPANDED;
        this.a = b;
        this.m = c;
        this.o = this.j = "";
        this.C = d;
        this.g = new hx;
        this.b = new mx(a, z(this.c, this));
        px(this.b, e)
    },
    wx = function(a) {
        var b = ux(a.a);
        a = vx(a.a);
        return b == Lb && "es" == a || "es" == b && a == Lb ? !0 : !1
    };
tx.prototype.reset = function() {
    this.m();
    px(this.b, !0)
};
tx.prototype.setVisible = function(a) {
    a ? (a = this.j != ux(this.a) || this.o != vx(this.a), this.b.setVisible(!0), a && this.c()) : (this.g.abort(), this.b.setVisible(!1))
};
tx.prototype.c = function() {
    var a = ux(this.a),
        b = vx(this.a),
        c = this.g,
        d = this.C,
        e = z(this.v, this, a, b);
    a = "/community_v2/as?client=t" + ix() + "&sl=" + a + "&tl=" + b + "&surt=" + d;
    (b = op(new ap(window.location.href, !0), "e")) && (a += "&e=" + b);
    c.$ && c.$.abort();
    c.$ = Km(a, z(c.b, c, e), Ka, c.a ? c.a.toString() : void 0)
};
tx.prototype.v = function(a, b, c) {
    if (c) {
        this.j = a;
        this.o = b;
        var d = this.a.K(a),
            e = this.a.Ra(b),
            f = this.b;
        f.b = c;
        f.a = 0;
        !f.b.activities || f.a >= f.b.activities.length ? ul(f.D) : (f.m = a, f.v = b, f.H = d, f.A = e, f.g = f.b.metadata.evaluation_type, a = {}, a.expanded = f.j ? "1" : "0", f.b.error && (a.error = f.b.error.error_type), Po(f.F, "t", xb, "update", a), f.j ? nx(f) : ox(f))
    }
};
var xx = function(a, b, c, d, e, f, g, l) {
    Y.call(this);
    this.g = Ko.J();
    this.K = a;
    this.A = b;
    this.I = c;
    this.B = d;
    this.M = e;
    this.c = f;
    this.j = g;
    this.m = null != l ? l : null;
    this.F = ro.J();
    this.v = !1
};
A(xx, Y);
xx.prototype.setVisible = function(a) {
    a && !this.v ? (this.g.log(wb, "show-" + this.c), Do(this.F, this.j), X(this.b, !0)) : X(this.b, !1)
};
xx.prototype.Z = function(a) {
    xx.w.Z.call(this, a);
    this.b = xr(Op, {
        Td: this.K,
        fl: this.A,
        om: this.I,
        gm: this.B,
        url: this.M,
        id: this.c
    });
    a.appendChild(this.b);
    var b = O("cp-dismiss", a);
    Z(this).G(b, r, this.O);
    a = O("cp-promo-href", a);
    Z(this).G(a, r, this.R)
};
xx.prototype.O = function() {
    this.g.log(wb, "dismiss-" + this.c);
    Oo(this.g, ma + this.c);
    var a = this.F;
    R(a, Co(a, 74, this.j));
    this.setVisible(!1);
    this.v = !0
};
xx.prototype.R = function(a) {
    this.g.log(wb, "click-" + this.c);
    var b = this.F;
    R(b, Co(b, 72, this.j));
    this.m && wx(this.m) && (this.m.reset(), a.preventDefault(), a.stopPropagation())
};
var yx = function(a, b) {
    this.a = a;
    this.b = b || null
};
yx.prototype.Ga = u("a");
yx.prototype.Ca = u("b");
var zx = Ze();
A(zx, Ys);
rf(zx);
w = zx.prototype;
w.ac = v(vd);
w.Wa = function(a) {
    var b = P(k, null, a.Ga());
    U(b, "gt-is-sg");
    var c = P(k, null, "");
    U(c, a.Ih ? "gt-is-ld-top" : Ac);
    c = [k, ct(this, a), c];
    var d = P(Na);
    if (a.zc) {
        var e = new Gt(null, new bv);
        e.ia(d);
        U(e.l(), "gt-is-flag");
        eu(e.l(), a.fg);
        e.setVisible(!1);
        a.Cb = e;
        d.id = ss(e)
    }
    e = P(k);
    U(e, "gt-is-ca");
    var f = new Gt;
    f.D = e;
    a.Yb = f;
    c = c.concat([b, d, e]);
    a.Pl && (b = P(k, null, a.Ca()), c.push(b), U(b, "gt-is-tr"));
    b = P.apply(null, c);
    b.id = ss(a);
    return a.D = b
};
w.Ec = function(a) {
    return a.tagName == k
};
w.T = v("gt-is-itm");
w.Sc = function(a, b, c) {
    zx.w.Sc.call(this, a, b, c);
    2 == b && a.zc && a.Cb && !a.kd && a.Cb.setVisible(c)
};
var Ax = function(a, b, c, d, e, f, g) {
    rt.call(this, a.Ga(), f || zx.J(), g);
    this.wd = a;
    this.zc = b;
    this.fg = c;
    this.Yb = null;
    this.Ih = d;
    this.Pl = e;
    this.kd = !1;
    this.Fa(1, !1)
};
A(Ax, rt);
Ax.prototype.Ga = function() {
    return this.wd.Ga()
};
Ax.prototype.Ca = function() {
    return this.wd.Ca()
};
Ax.prototype.Ya = function(a) {
    this.zc && El(this.Cb.l(), a.target) ? (this.kd = !0, this.Cb.Ya(a)) : this.Yb && El(this.Yb.l(), a.target) ? this.Yb.Ya(a) : Ax.w.Ya.call(this, a)
};
Ax.prototype.jb = function(a) {
    if (this.Yb && El(this.Yb.l(), a.target)) this.Yb.jb(a);
    else if (this.zc && El(this.Cb.l(), a.target) && this.kd) this.Cb.jb(a), this.kd = !1, this.Ha(2) || this.Cb.setVisible(!1);
    else {
        if (this.zc) {
            var b = this.getParent();
            C(b.b, function(a) {
                a.kd && (a.kd = !1, yt(a.Cb, !1));
                a != this && a.Cb.setVisible(!1)
            })
        }
        Ax.w.jb.call(this, a)
    }
};
var Bx = function(a, b, c, d) {
    var e = "md";
    null != d && d && (e = "m" + e);
    xu.call(this, a, e, MSG_DEFINITIONS_OF, "", 7);
    this.U = b;
    this.B = null != c ? c : !0
};
A(Bx, xu);
Bx.prototype.update = function(a, b, c, d) {
    Bx.w.update.call(this, a, b, c, d);
    if (!d || 0 == H(d, 12) && 0 == H(d, 15)) return !1;
    ul(this.b);
    this.bd();
    this.c = 0;
    a = H(d, 12);
    b = 3 > a;
    for (var e = c = 0; e < H(d, 12); e++) c += (new Oq(ei(d, 12, e))).a();
    c = 5 > c ? c : 3;
    for (e = this.A = 0; e < a; ++e) {
        var f = new Oq(ei(d, 12, e)),
            g = I(new Oq(ei(d, 12, e)), 2),
            l = P(k, {
                "class": yc
            });
        this.b.appendChild(l);
        Q(l, I(f, 0));
        l = d;
        var m = b,
            p = c,
            q = Math.ceil(p / a),
            B = P(k, {
                "class": "gt-def-list"
            }),
            D = fk(this.Ia) ? Vd : sd;
        W(B, {
            direction: D
        });
        for (D = 0; D < f.a(); ++D) {
            var K = f.b(D),
                ea = I(K, 0),
                ha = I(K,
                    2);
            var Ra = l;
            for (var Pa = [], pa = 0; pa < H(Ra, 11); ++pa)
                for (var Pb = new Qq(ei(Ra, 11, pa)), ih = 0; ih < Pb.a(); ++ih) {
                    var Wb = Pb.b(ih);
                    if (I(K, 1) == I(Wb, 1)) {
                        for (var Uc = [], le = 0; le < H(Wb, 0); ++le) Qf(Uc, hi(Wb, 0, le));
                        Qf(Pa, Uc)
                    }
                }
            Ra = Pa;
            if (K = 1 > D || m && D < q && this.A < p) this.A += 1;
            ea = Cx(this, D + 1, ea, ha, Ra, K);
            B.appendChild(ea);
            this.c += 1
        }
        this.b.appendChild(B)
    }
    for (e = 0; e < H(d, 15); e++) m = new Uq(ei(d, 15, e)), p = I(m, 1), l = I(m, 2), f = P(k, {
        "class": "gt-def-row"
    }), p = P(k, {
        "class": "gt-kp-desc"
    }, p), q = P("A"), q.setAttribute("href", I(m, 3)), q.setAttribute(ve,
        "_blank"), m = P(Ea, {
        "class": "gt-kp-image"
    }), m.setAttribute("src", l), q.appendChild(m), f.appendChild(q), f.appendChild(p), this.b.appendChild(f);
    g && (this.xe = g, yu(this, g));
    if (!b && this.c > 1 * a || b && this.c > c) d = MSG_N_MORE_DEFINITIONS_LABEL.replace(ca, this.c - this.A), zu(this, d, MSG_FEWER_DEFINITIONS_LABEL);
    else
        for (d = dl(tc, this.l()), g = 0; g < d.length; g++) a = d[g], O("gt-def-synonym", a) && V(a, tc);
    this.setVisible(!0);
    return !0
};
Bx.prototype.W = function() {
    Bx.w.W.call(this);
    Z(this).G(this.l(), r, this.aa)
};
var Cx = function(a, b, c, d, e, f) {
    var g = fk(a.Qa) ? Vd : sd;
    b = yr(bq, {
        Zj: b,
        lh: a.U,
        $j: c,
        Gh: d,
        im: MSG_SYNONYMS_LOWERCASE,
        Ti: e,
        hh: g,
        Wj: a.B
    });
    a.B && C(dl(xc, b), function(a) {
        this.g.push(a)
    }, a);
    a.Y.push([O("gt-mt-md", b), c]);
    (c = O("gt-ex-mt", b)) && a.Y.push([c, d]);
    (d = O("gt-def-synonym-title", b)) && fk(a.Ab) != fk(a.Ia) && (a = fk(a.Ab), W(d, Hb, a ? Vd : sd), W(d, "padding-" + (a ? rd : Td), "8px"), d.style[F ? "styleFloat" : "cssFloat"] = a ? Td : rd);
    return Au(b, f)
};
Bx.prototype.aa = function(a) {
    mr(a.target, xc) && this.dispatchEvent(new J("a", a.target))
};
Bx.prototype.Oa = function() {
    return this.B ? this.Jd() : this.c
};
var Ex = function(a, b, c) {
    M.call(this);
    this.target = a;
    this.m = b || a;
    this.g = c || new Ar(NaN, NaN, NaN, NaN);
    this.c = $k(a);
    this.a = new js(this);
    xi(this, this.a);
    this.deltaY = this.deltaX = this.H = this.A = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.o = !0;
    this.b = !1;
    this.v = 0;
    L(this.m, [Ee, wd], this.Zg, !1, this);
    this.j = Dx
};
A(Ex, M);
var Dx = x.document && x.document.documentElement && !!x.document.documentElement.setCapture && !!x.document.releaseCapture;
w = Ex.prototype;
w.ea = $e("o");
w.N = function() {
    Ex.w.N.call(this);
    Wi(this.m, [Ee, wd], this.Zg, !1, this);
    os(this.a);
    this.j && this.c.releaseCapture();
    this.m = this.target = null
};
w.Zg = function(a) {
    var b = a.type == wd;
    if (!this.o || this.b || b && !Ci(a)) this.dispatchEvent(Kb);
    else {
        if (0 == this.v)
            if (this.dispatchEvent(new Fx(qe, this, a.clientX, a.clientY, a))) this.b = !0, b && a.preventDefault();
            else return;
        else b && a.preventDefault();
        b = this.c;
        var c = b.documentElement,
            d = !this.j;
        this.a.G(b, [De, xd], this.Ik, {
            capture: d,
            passive: !1
        });
        this.a.G(b, [Ce, Ad], this.De, d);
        this.j ? (c.setCapture(!1), this.a.G(c, "losecapture", this.De)) : this.a.G(kl(b), kb, this.De);
        this.L && this.a.G(this.L, Wd, this.B, d);
        this.clientX = this.A =
            a.clientX;
        this.clientY = this.H = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.deltaX = this.target.offsetLeft;
        this.deltaY = this.target.offsetTop;
        this.C = jl(al(this.c).a)
    }
};
w.De = function(a, b) {
    os(this.a);
    this.j && this.c.releaseCapture();
    this.b ? (this.b = !1, this.dispatchEvent(new Fx(Nb, this, a.clientX, a.clientY, a, Gx(this, this.deltaX), Hx(this, this.deltaY), b || "touchcancel" == a.type))) : this.dispatchEvent(Kb)
};
w.Ik = function(a) {
    if (this.o) {
        var b = a.clientX - this.clientX,
            c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.b) {
            var d = this.A - this.clientX,
                e = this.H - this.clientY;
            if (d * d + e * e > this.v)
                if (this.dispatchEvent(new Fx(qe, this, a.clientX, a.clientY, a))) this.b = !0;
                else {
                    this.hc || this.De(a);
                    return
                }
        }
        c = Ix(this, b, c);
        b = c.b;
        c = c.a;
        this.b && this.dispatchEvent(new Fx("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (Jx(this, a, b, c), a.preventDefault())
    }
};
var Ix = function(a, b, c) {
    var d = jl(al(a.c).a);
    b += d.b - a.C.b;
    c += d.a - a.C.a;
    a.C = d;
    a.deltaX += b;
    a.deltaY += c;
    return new Uk(Gx(a, a.deltaX), Hx(a, a.deltaY))
};
Ex.prototype.B = function(a) {
    var b = Ix(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    Jx(this, a, b.b, b.a)
};
var Jx = function(a, b, c, d) {
        a.target.style.left = c + Od;
        a.target.style.top = d + Od;
        a.dispatchEvent(new Fx("drag", a, b.clientX, b.clientY, b, c, d))
    },
    Gx = function(a, b) {
        var c = a.g;
        a = isNaN(c.left) ? null : c.left;
        c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    },
    Hx = function(a, b) {
        var c = a.g;
        a = isNaN(c.top) ? null : c.top;
        c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    },
    Fx = function(a, b, c, d, e, f, g) {
        J.call(this, a);
        this.clientX = c;
        this.clientY =
            d;
        this.a = e;
        this.left = y(f) ? f : b.deltaX;
        this.top = y(g) ? g : b.deltaY
    };
A(Fx, J);
var Kx = function() {
    M.call(this);
    this.aa = 0;
    this.g = [];
    this.o = [];
    this.I = {};
    this.m = new js(this);
    this.ra = this.V = !1;
    this.H = !0
};
A(Kx, M);
var Lx = new yi("c"),
    Mx = new yi("beforedragstart"),
    Nx = new yi("dragstart"),
    Ox = new yi("beforedragmove"),
    Px = new yi("dragmove"),
    Qx = new yi("beforedragend"),
    Rx = new yi("dragend"),
    Sx = new yi("d");
Kx.prototype.B = function(a, b, c, d) {
    a.c = b;
    a.a = d;
    this.g.push(a)
};
Kx.prototype.Ra = function(a) {
    this.A = Xf(arguments, 0)
};
Kx.prototype.N = function() {
    this.m.Ba();
    for (var a = 0, b = this.g.length; a < b; a++) {
        var c = this.g[a];
        c.c = void 0;
        c.a = void 0
    }
    this.g.length = 0;
    this.o.length = 0;
    this.I = null;
    Tx(this);
    Kx.w.N.call(this)
};
var Ux = function(a, b) {
    for (var c = 0, d = a.g.length; c < d; c++) {
        var e = a.g[c];
        e.jd = Vr(e)
    }
    c = 0;
    for (d = a.o.length; c < d; c++) e = a.o[c], e != b && (e.jd = Vr(e))
};
w = Kx.prototype;
w.Lk = function(a) {
    var b = zf(a.currentTarget);
    this.a = this.I[b];
    a: {
        b = this.a;
        for (var c = b.cloneNode(!0), d = (b || document).getElementsByTagName(Qa), e = (c || document).getElementsByTagName(Qa), f = 0; f < d.length; f++) e[f].value = d[f].value;
        switch (b.tagName) {
            case "TR":
                b = P("TABLE", null, P("TBODY", null, c));
                break a;
            case "TD":
            case "TH":
                b = P("TABLE", null, P("TBODY", null, P("TR", null, c)));
                break a;
            case Qa:
                c.value = b.value;
            default:
                b = c
        }
    }
    this.b = b;
    this.U && nr(this.b, this.U || []);
    this.b.style.margin = "0";
    this.b.style.position = Xa;
    this.b.style.visibility =
        Mc;
    $k(this.a).body.appendChild(this.b);
    b = Kr(this.a);
    Sr(this.b, b);
    this.c = new Ex(this.b);
    this.c.v = Math.pow(this.aa, 2);
    L(this.c, qe, this.Dk, !1, this);
    L(this.c, Nb, this.Bk, !1, this);
    L(this.c, Kb, this.Uf, !1, this);
    this.dispatchEvent(new Vx(Lx, this, a, this.a, this.b, this.c));
    this.c.Zg(a)
};
w.Dk = function(a) {
    if (this.dispatchEvent(new Vx(Mx, this, a.a, this.a, null, null))) {
        this.C = this.a.parentNode;
        this.j = this.K = Bl(this.a);
        this.L = this.C;
        this.A ? nr(this.a, this.A || []) : this.a.style.visibility = Mc;
        var b = Ur(this.b);
        this.b.j = b.width / 2;
        this.b.g = b.height / 2;
        this.b.style.visibility = "";
        this.H && (this.a.style.display = Cd);
        Ux(this, this.a);
        this.a.style.display = "";
        L(this.c, "drag", this.Ck, !1, this);
        this.dispatchEvent(new Vx(Nx, this, a.a, this.a, this.b, this.c))
    } else a.preventDefault(), this.Uf()
};
w.Ck = function(a) {
    var b = Kr(this.b);
    b = new Uk(b.b + this.b.j, b.a + this.b.g);
    a: {
        var c = null;
        if (this.a.style.display != Cd) {
            c = this.a.parentNode;
            var d = Vr(c);
            if (Wx(b, d)) break a
        }
        d = 0;
        for (var e = this.g.length; d < e; d++) {
            var f = this.g[d];
            if (f != c && Wx(b, f.jd)) {
                c = f;
                break a
            }
        }
        c = null
    }
    if (c) {
        if (null == c) throw Error("getHoverNextItem_ called with null hoverList.");
        d = 0;
        e = !1;
        f = void 0;
        switch (c.c) {
            case 0:
                d = b.a;
                var g = Xx;
                var l = Yx;
                break;
            case 4:
                e = !0;
            case 2:
                d = b.b;
                g = Zx;
                l = Yx;
                break;
            case 5:
                e = !0;
            case 3:
                d = b.b, g = $x, l = ay
        }
        for (var m = null, p, q = yl(c),
                 B = 0, D = q.length; B < D; B++) {
            var K = q[B];
            if (K != this.a) {
                var ea = g(K.jd);
                if (e) {
                    var ha = by(K, b);
                    y(f) || (f = ha);
                    l(d, ea) && (void 0 == p || ha < f || ha == f && (l(ea, p) || ea == p)) && (m = K, p = ea);
                    ha < f && (f = ha)
                } else l(d, ea) && (void 0 == p || l(ea, p)) && (m = K, p = ea)
            }
        }
        g = null !== m && by(m, b) > f ? null : m
    } else g = null;
    if (!this.dispatchEvent(new Vx(Ox, this, a, this.a, this.b, this.c, b, c, g))) return !1;
    if (c) this.H ? this.a.parentNode == c && Bl(this.a) == g || c.insertBefore(this.a, g) : this.M(g, b), this.a.style.display = "", c.a && U(c, c.a);
    else
        for (this.ra || (this.a.style.display =
            Cd), l = 0, p = this.g.length; l < p; l++) d = this.g[l], d.a && V(d, d.a);
    c != this.L && (this.L = c, Ux(this, this.a));
    this.dispatchEvent(new Vx(Px, this, a, this.a, this.b, this.c, b, c, g));
    return !1
};
w.Uf = function() {
    Tx(this);
    this.c = this.b = this.K = this.C = this.L = this.a = null;
    for (var a = 0, b = this.g.length; a < b; a++) this.g[a].jd = null;
    a = 0;
    for (b = this.o.length; a < b; a++) this.o[a].jd = null
};
w.Bk = function(a) {
    if (!this.dispatchEvent(new Vx(Qx, this, a, this.a, this.b, this.c))) return !1;
    this.H || this.ma();
    Tx(this);
    this.dispatchEvent(new Vx(Rx, this, a, this.a, this.b, this.c));
    this.Uf();
    return !0
};
var Tx = function(a) {
    wi(a.c);
    var b = a.b && a.b.parentElement;
    a.b && xl(a.b);
    a.a && a.a.style.display == Cd && (a.C.insertBefore(a.a, a.K), a.a.style.display = "");
    a.A && a.a ? or(a.a, a.A || []) : a.a && (a.a.style.visibility = "");
    for (var c = 0, d = a.g.length; c < d; c++) {
        var e = a.g[c];
        e.a && V(e, e.a)
    }
    b && a.dispatchEvent(new Vx(Sx, a, null, a.a, a.b, a.c))
};
Kx.prototype.La = function(a) {
    nr(a.currentTarget, this.R || [])
};
Kx.prototype.Ma = function(a) {
    or(a.currentTarget, this.R || [])
};
Kx.prototype.Ja = function(a) {
    nr(a.currentTarget, this.X || [])
};
Kx.prototype.Ea = function(a) {
    or(a.currentTarget, this.X || [])
};
var Wx = function(a, b) {
    return a.b > b.left && a.b < b.left + b.width && a.a > b.top && a.a < b.top + b.height
};
Kx.prototype.M = function(a) {
    a && (this.j = a)
};
Kx.prototype.ma = function() {
    this.C.insertBefore(this.a, this.j)
};
var by = function(a, b) {
        a = a.jd;
        return Math.abs(b.a - (a.top + (a.height - 1) / 2))
    },
    Xx = function(a) {
        return a.top + a.height - 1
    },
    Zx = function(a) {
        return a.left + a.width - 1
    },
    $x = function(a) {
        return a.left || 0
    },
    Yx = function(a, b) {
        return a < b
    },
    ay = function(a, b) {
        return a > b
    },
    Vx = function(a, b, c) {
        J.call(this, a);
        this.a = c
    };
A(Vx, J);
var cy = function(a, b) {
    Kx.call(this);
    this.Y = null != a ? a : "";
    this.wa = null != b ? b : "";
    this.H = !1;
    this.v = null;
    this.O = new js(this)
};
A(cy, Kx);
cy.prototype.B = function(a, b, c, d) {
    cy.w.B.call(this, a, b, c, d);
    this.O.G(this, Mx, this.xa)
};
cy.prototype.xa = function(a) {
    var b = jl(document);
    this.c.deltaX = a.a.clientX + b.b;
    this.c.deltaY = a.a.clientY + b.a
};
cy.prototype.ma = function() {
    this.v && (1 == this.v ? wl(this.a, this.j) : vl(this.a, this.j));
    dy(this, !1)
};
cy.prototype.M = function(a, b) {
    dy(this, !1);
    cy.w.M.call(this, a, b);
    dy(this, !0, b)
};
var dy = function(a, b, c) {
    null != a.j && (b && c ? (b = Vr(a.j), c = Wk(new Uk(b.left + b.width / 2, b.top + b.height / 2), c), b = 0 == a.C.c, a.v = 0 > c.a && b || 0 > c.b && !b ? 1 : 2, 1 == a.v ? U(a.j, a.wa) : U(a.j, a.Y)) : (V(a.j, a.wa), V(a.j, a.Y), a.v = null))
};
cy.prototype.N = function() {
    this.O.Ba();
    cy.w.N.call(this)
};
var ey = Ze();
ey.prototype.o = v("");
var fy = function(a, b, c, d, e) {
    this.g = a;
    this.j = b;
    this.c = c;
    this.a = [];
    for (a = 0; a < d.length; ++a) this.a.push(d[a].toLowerCase());
    this.b = [];
    for (a = 0; a < e.length; ++a) this.b.push(e[a].toLowerCase())
};
A(fy, ey);
fy.prototype.o = function(a, b, c, d) {
    if ("" != this.c && this.c != c) return "";
    c = gy(a, b, d, this.g, this.j, this.a, this.b);
    return "" != c ? c : gy(a, b, d, this.j, this.g, this.b, this.a)
};
var gy = function(a, b, c, d, e, f, g) {
    if (a == d && b == e)
        for (a = 0; a < H(c, 0); a++) {
            b = Zq(c, a);
            d = I(b, 1).toLowerCase();
            if (0 <= Hf(f, d)) return d;
            b = b.cb().toLowerCase();
            if (0 <= Hf(g, b)) return b
        }
    return ""
};
var hy = [{
    qa: new fy(t, Lb, t, ["\u0434\u0430\u043c\u0430", "\u0441\u043e\u0431\u0430\u043a\u0430", "\u0441\u043e\u0431\u0430\u0447\u043a\u0430", "\u0434\u0430\u043c\u0430 \u0441 \u0441\u043e\u0431\u0430\u0447\u043a\u043e\u0439"], ["lady", "dog", "dog", "lady with a dog"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/annasergeevna.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u043c\u0438\u043b\u044b\u0439", "\u0433\u0440\u0435\u0448\u043d\u0438\u043a", "\u0433\u0440\u0435\u0445", "\u0433\u0440\u0435\u0448\u043d\u0438\u0446\u0430"], ["sweet", "sinner", "sin", "sinner"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/annasergeevna_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0447\u0435\u043b\u043e\u0432\u0435\u043a", "\u0444\u0443\u0442\u043b\u044f\u0440", "\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0430", "\u0441\u043a\u043e\u0440\u043b\u0443\u043f\u0430"], ["man", "case", "shell", "shell"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/belikov.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u043d\u0435\u0442"], ["no"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/belikov_callout.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0441\u0435\u0441\u0442\u0440\u0430", "\u0442\u0440\u0438 \u0441\u0435\u0441\u0442\u0440\u044b"], ["sister", "three sisters"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_1.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0434\u043e\u043c", "\u043c\u0435\u0437\u043e\u043d\u0438\u043d", "\u0434\u043e\u043c \u0441 \u043c\u0435\u0437\u043e\u043d\u0438\u043d\u043e\u043c"], ["house",
        "mezzanine", "house with mezzanine"
    ]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_2.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0437\u043b\u043e\u0439", "\u043c\u0430\u043b\u044c\u0447\u0438\u043a", "\u0437\u043b\u043e\u0439 \u043c\u0430\u043b\u044c\u0447\u0438\u043a"], ["evil", "boy", "evil boy"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_3.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u043d\u0435\u0432\u0435\u0441\u0442\u0430"], ["bride"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_4.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0441\u043a\u0443\u0447\u043d\u044b\u0439", "\u0441\u043a\u0443\u043a\u0430", "\u0441\u043a\u0443\u0447\u043d\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f"], ["boring", "boredom", "boring story"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_5.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0446\u0432\u0435\u0442\u044b", "\u0437\u0430\u043f\u043e\u0437\u0434\u0430\u043b\u044b\u0439", "\u0446\u0432\u0435\u0442\u044b \u0437\u0430\u043f\u043e\u0437\u0434\u0430\u043b\u044b\u0435",
        "\u043f\u043e\u0437\u0434\u043d\u043e", "\u043f\u043e\u0437\u0434\u043d\u0438\u0439"
    ], ["flowers", "belated", "belated flowers", "late"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_6.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u043e\u0432\u0440\u0430\u0433", "\u0432 \u043e\u0432\u0440\u0430\u0433\u0435"], ["ravine", "in a ravine"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u044f \u043d\u0435 \u0437\u043d\u0430\u044e"], ["i do not know"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin_callout.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0446\u0438\u043d\u0438\u043a", "\u0446\u0438\u043d\u0438\u0437\u043c"], ["cynic", "cynism"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, "\u0432\u043a\u0443\u0441\u043d\u043e \u043a\u043b\u0443\u0431\u043d\u0438\u043a\u0430 \u044f\u0433\u043e\u0434\u0430 \u0444\u0440\u0443\u043a\u0442 \u0430\u0440\u0431\u0443\u0437 \u0435\u0434\u0430".split(" "),
        "tasty strawberry berry fruit watermelon food".split(" ")),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/gurov.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u043f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u0430\u043f\u043f\u0435\u0442\u0438\u0442\u0430"], ["bon appetit"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/gurov_callout.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u043f\u0440\u043e\u0441\u0432\u0435\u0442\u0432\u043b\u0435\u043d\u043d\u044b\u0439"], ["enlightened"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/gurov_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0442\u043e\u0441\u043a\u0430", "\u0433\u0440\u0443\u0441\u0442\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c\u043d\u044b\u0439"], ["yearning", "sorrow", "sadness", "sadness", "sad"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/iona.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0436\u0435\u0440\u0442\u0432\u0430", "\u0441\u0442\u0440\u0430\u0434\u0430\u0442\u044c",
        "\u0441\u0442\u0440\u0430\u0434\u0430\u043b\u0438\u0446\u0430", "\u0441\u0442\u0440\u0430\u0434\u0430\u043b\u0435\u0446", "\u0432\u0435\u0447\u043d\u044b\u0439"
    ], ["victim", "suffer", "sufferer", "eternal"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/iona_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0447\u0430\u0439\u043a\u0430", "\u043f\u0442\u0438\u0446\u0430"], ["seagull", "bird"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/konstantintreplev.gif"
    },
    na: !0
}, {
    qa: new fy(t,
        Lb, t, ["\u0441\u0442\u0440\u0430\u043d\u043d\u0438\u043a", "\u0431\u0440\u043e\u0434\u044f\u0433\u0430"], ["wanderer", "tramp"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/konstantintreplev_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0440\u043e\u0437\u0430", "\u0433\u043e\u0434", "\u0442\u0440\u0438 \u0433\u043e\u0434\u0430"], ["rose", "year", "three years"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/laptev.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, "\u043b\u044e\u0431\u043b\u044e;\u043b\u044e\u0431\u0438\u0442\u044c;\u044f \u0442\u0435\u0431\u044f \u043b\u044e\u0431\u043b\u044e;\u043b\u044e\u0431\u043e\u0432\u044c;\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f;\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f".split(";"),
        "love;love;i love you;love;artist;please".split(";")),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/laptev_callout.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0440\u043e\u043c\u0430\u043d\u0442\u0438\u043a", "\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439"], ["romantic", "latest"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/laptev_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0431\u0438\u0437\u043d\u0435\u0441", "\u0434\u0435\u043b\u043e", "\u0432\u0438\u0448\u043d\u044f",
        "\u0441\u0430\u0434", "\u0432\u0438\u0448\u043d\u0435\u0432\u044b\u0439 \u0441\u0430\u0434"
    ], [mb, mb, "cherry", "garden", "the cherry orchard"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/lopakhin.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0434\u0430"], ["yes"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/lopakhin_callout.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0440\u0430\u0431\u043e\u0442\u0430"], ["work"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/lopakhin_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0436\u0438\u0437\u043d\u044c", "\u043c\u043e\u044f \u0436\u0438\u0437\u043d\u044c"], ["life", "my life"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/masha.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, "\u043f\u0440\u0438\u0432\u0435\u0442;\u0434\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c;\u0434\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440;\u0434\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e;\u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439;\u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435;\u043a\u0430\u043a \u0434\u0435\u043b\u0430;\u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0448\u044c;\u0447\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e;\u043a\u0430\u043a \u0436\u0438\u0437\u043d\u044c;\u043a\u0430\u043a \u0442\u044b".split(";"),
        "hello;good afternoon;good evening;good morning;how are you;what are you doing;what's new;what's up".split(";")),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/masha_callout.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0445\u0438\u0449\u043d\u0438\u043a", "\u0432\u0430\u043c\u043f\u0438\u0440", "\u043e\u0445\u043e\u0442\u0430"], ["predator", "vampire", "hunting"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/masha_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, "\u043a\u043d\u0438\u0433\u0430 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0430\u0441\u0441\u043a\u0430\u0437 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0430 \u0430\u0432\u0442\u043e\u0440 \u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044c \u043f\u044c\u0435\u0441\u0430".split(" "), ["book", "literature", "composition", "history", "story", "art", "classic", "author", "writer", Md]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/petyatrofimov_callout.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0441\u0442\u0443\u0434\u0435\u043d\u0442", "\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043a\u0430"], ["student", "student"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/petyatrofimov_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, "\u043f\u0430\u043b\u0430\u0442\u0430;\u043f\u0430\u043b\u0430\u0442\u0430 \u21166;\u043f\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u044f;\u043f\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430;\u043f\u0441\u0438\u0445\u0443\u0448\u043a\u0430;\u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430;\u0434\u0443\u0440\u0434\u043e\u043c".split(";"),
        "ward;ward No6;psychiatry;mental hospital;nuthouse;hospital;loony bin".split(";")),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/ragin.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u043f\u043e\u0431\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0439", "\u043f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0435", "\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0448"], ["defeated", "defeat", "loss"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/ragin_type.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0434\u044f\u0434\u044f"], ["uncle"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/sonya.gif"
    },
    na: !0
}, {
    qa: new fy(t, Lb, t, ["\u0430\u043b\u044c\u0442\u0440\u0443\u0438\u0441\u0442", "\u0434\u043e\u0431\u0440\u043e", "\u0445\u043e\u0440\u043e\u0448\u0438\u0439"], ["altruist", "good", "good"]),
    target: Qc,
    oa: Ea,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/sonya_type.gif"
    },
    na: !0
}];
var iy = function(a) {
    xu.call(this, a, "ee", "", "", 12);
    this.Pf = !0
};
A(iy, xu);
var jy = [];
iy.prototype.update = function(a, b, c, d) {
    iy.w.update.call(this, a, b, c, d);
    ul(this.b);
    var e = jy;
    EGGS_RU_CHEKHOV && (e = e.concat(hy));
    for (var f = 0; f < e.length; f++) {
        a = e[f];
        var g = a.qa.o(b, c, this.Ab, d);
        if ("" != g) return c = b = yr(cq), a.target && (d = a.target, a.na && (d += g), g = yr(dq, {
            Jg: d
        }), c.appendChild(g), c = g), c.appendChild(P.apply(null, [a.oa, a.attributes])), this.b.appendChild(b), this.setVisible(!0), !0
    }
    return !1
};
iy.prototype.Yg = function() {
    this.m && Q(this.m, "")
};
var ky = function(a, b, c) {
    var d = "ex";
    null != c && c && (d = "m" + d);
    this.U = b;
    xu.call(this, a, d, MSG_EXAMPLES_OF, MSG_EXAMPLES, 9);
    this.c = new Iq;
    this.B = this.A = sd
};
A(ky, xu);
ky.prototype.update = function(a, b, c, d) {
    ky.w.update.call(this, a, b, c, d);
    ul(this.b);
    this.c = new Iq(d.data[13]);
    if (0 == H(this.c, 0)) return !1;
    this.setVisible(!0);
    3 <= H(this.c, 0) && (a = MSG_N_MORE_EXAMPLES_LABEL.replace(ca, H(this.c, 0) - 1), zu(this, a, MSG_FEWER_EXAMPLES_LABEL));
    this.A = fk(this.Ia) ? Vd : sd;
    this.B = fk(this.Qa) ? Vd : sd;
    for (a = 0; a < H(this.c, 0); ++a) b = 0 == a || 1 == a && 2 == H(this.c, 0), c = new Hq(ei(this.c, 0, a)), c = yr(Xp, {
        em: this.A,
        Bd: I(c, 0),
        Jg: I(c, 2),
        cl: I(c, 1),
        hh: this.B,
        Am: MSG_MT_FROM_GOOGLE,
        bm: this.U
    }), b = Au(c, b), this.b.appendChild(b);
    return !0
};
ky.prototype.aj = function() {
    var a = {};
    a.total = H(this.c, 0);
    return a
};
ky.prototype.Oa = function() {
    return H(this.c, 0)
};
var ly = dk("//www.gstatic.com/inputtools/js/ita/inputtools_3.js"),
    my = dk("//www.gstatic.com/inputtools/js/ita/inputtools_d_3.js");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
 */
var ny = function(a, b) {
    this.j = [];
    this.B = a;
    this.H = b || null;
    this.g = this.a = !1;
    this.c = void 0;
    this.C = this.L = this.m = !1;
    this.o = 0;
    this.b = null;
    this.v = 0
};
ny.prototype.cancel = function(a) {
    if (this.a) this.c instanceof ny && this.c.cancel();
    else {
        if (this.b) {
            var b = this.b;
            delete this.b;
            a ? b.cancel(a) : (b.v--, 0 >= b.v && b.cancel())
        }
        this.B ? this.B.call(this.H, this) : this.C = !0;
        this.a || (a = new oy(this), py(this), qy(this, !1, a))
    }
};
ny.prototype.A = function(a, b) {
    this.m = !1;
    qy(this, a, b)
};
var qy = function(a, b, c) {
        a.a = !0;
        a.c = c;
        a.g = !b;
        ry(a)
    },
    py = function(a) {
        if (a.a) {
            if (!a.C) throw new sy(a);
            a.C = !1
        }
    },
    ty = function(a, b, c, d) {
        a.j.push([b, c, d]);
        a.a && ry(a)
    };
ny.prototype.then = function(a, b, c) {
    var d, e, f = new vj(function(a, b) {
        d = a;
        e = b
    });
    ty(this, d, function(a) {
        a instanceof oy ? f.cancel() : e(a)
    });
    return f.then(a, b, c)
};
sj(ny);
var uy = function(a) {
        return Lf(a.j, function(a) {
            return vf(a[1])
        })
    },
    ry = function(a) {
        if (a.o && a.a && uy(a)) {
            var b = a.o,
                c = vy[b];
            c && (x.clearTimeout(c.Pa), delete vy[b]);
            a.o = 0
        }
        a.b && (a.b.v--, delete a.b);
        b = a.c;
        for (var d = c = !1; a.j.length && !a.m;) {
            var e = a.j.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.g ? g : f) try {
                var l = f.call(e || a.H, b);
                y(l) && (a.g = a.g && (l == b || l instanceof Error), a.c = b = l);
                if (tj(b) || typeof x.Promise === Ub && b instanceof x.Promise) d = !0, a.m = !0
            } catch (m) {
                b = m, a.g = !0, uy(a) || (c = !0)
            }
        }
        a.c = b;
        d && (l = z(a.A, a, !0), d = z(a.A, a, !1), b instanceof ny ? (ty(b, l, d), b.L = !0) : b.then(l, d));
        c && (b = new wy(b), vy[b.Pa] = b, a.o = b.Pa)
    },
    sy = function() {
        Ef.call(this)
    };
A(sy, Ef);
sy.prototype.message = "Deferred has already fired";
sy.prototype.name = "AlreadyCalledError";
var oy = function() {
    Ef.call(this)
};
A(oy, Ef);
oy.prototype.message = "Deferred was canceled";
oy.prototype.name = "CanceledError";
var wy = function(a) {
    this.Pa = x.setTimeout(z(this.a, this), 0);
    this.Ee = a
};
wy.prototype.a = function() {
    delete vy[this.Pa];
    throw this.Ee;
};
var vy = {};
var By = function(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = ik(a),
            e = ol(document, La),
            f = {
                Mi: e,
                Jc: void 0
            },
            g = new ny(xy, f),
            l = null,
            m = null != c.timeout ? c.timeout : 5E3;
        0 < m && (l = window.setTimeout(function() {
            yy(e, !0);
            var a = new zy(1, "Timeout reached for loading script " + d);
            py(g);
            qy(g, !1, a)
        }, m), f.Jc = l);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && e.readyState != yb || (yy(e, c.Uj || !1, l), py(g), qy(g, !0, null))
        };
        e.onerror = function() {
            yy(e, !0, l);
            var a = new zy(0, "Error while loading script " +
                d);
            py(g);
            qy(g, !1, a)
        };
        f = c.attributes || {};
        Rg(f, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        fl(e, f);
        e.src = ik(a);
        Ay(b).appendChild(e);
        return g
    },
    Ay = function(a) {
        var b = (a || document).getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    },
    xy = function() {
        if (this && this.Mi) {
            var a = this.Mi;
            a && a.tagName == La && yy(a, !0, this.Jc)
        }
    },
    yy = function(a, b, c) {
        null != c && x.clearTimeout(c);
        a.onload = qf;
        a.onerror = qf;
        a.onreadystatechange = qf;
        b && window.setTimeout(function() {
            xl(a)
        }, 0)
    },
    zy = function(a, b) {
        var c = "Jsloader error (code #" +
            a + ")";
        b && (c += ": " + b);
        Ef.call(this, c);
        this.code = a
    };
A(zy, Ef);
var Cy = function() {
    this.c = this.b = !1;
    this.a = []
};
rf(Cy);
var Dy = dk("//www.gstatic.cn/inputtools/js/ita/inputtools_1.js"),
    Ey = dk("//www.gstatic.cn/inputtools/js/ita/inputtools_d_1.js");
Cy.prototype.g = function() {
    this.c = !0;
    for (var a = 0; a < this.a.length; ++a) this.a[a]()
};
Cy.prototype.load = function(a, b) {
    this.b ? this.b && !this.c ? this.a.push(a) : a() : (this.b = !0, this.a.push(a), a = 0 <= x.location.href.indexOf("?deb=static") || 0 <= x.location.href.indexOf("&deb=static"), By(jk(ck(b ? a ? Ey : Dy : a ? my : ly))).then(z(this.g, this)))
};
var Gy = function() {
    this.g = Dn.J();
    this.c = {};
    this.b = {};
    this.a = {};
    this.a[zc] = new Fy
};
rf(Gy);
var Hy = function(a) {
        var b = a.split(/[-_]/g);
        "" == (1 < b.length && b[1].match(/^[a-zA-Z]{4}$/) ? b[1] : "") && (a = a.match(/^\w{2,3}([-_]|$)/)) && a[0].replace(/[_-]/g, "")
    },
    Jy = function(a, b, c) {
        b = Iy(a, b, c);
        if (y(b)) a = b.pi;
        else {
            a: {
                a = Gn(a.g, c);
                if (null != a)
                    for (c = 0; c < a.length; c++)
                        if (In(a[c])) {
                            a = a[c];
                            break a
                        }
                a = ""
            }
            a = a || ""
        }
        return a
    },
    Iy = function(a, b, c) {
        if (a = Ky(a, b)) return a.a[c]
    },
    Ky = function(a, b, c) {
        var d = a.a[b];
        c && !y(d) && (d = new Fy, a.a[b] = d);
        return d
    },
    Ly = function(a, b, c) {
        var d = {
            ua: "itui"
        };
        d.uav = mf(a) ? a : a ? 1 : 0;
        d.sl = b;
        d.tl = "und";
        d.hl = c;
        var e = new Image;
        e.src = "/translate/uc?" + zm(d);
        e.onload = function() {
            e.onload = null
        }
    },
    Fy = function() {
        this.a = {};
        for (var a in My) this.a[a] = new Ny(My[a], "")
    },
    My = {
        iw: !1,
        ja: !1,
        vi: !1,
        "zh-CN": !1
    };
Fy.prototype.update = function(a, b, c) {
    var d = this.a[a];
    y(d) ? (d.isEnabled = b, d.pi = c) : this.a[a] = new Ny(b, c)
};
var Ny = function(a, b) {
    this.isEnabled = a;
    this.pi = b
};
var Oy = function(a, b, c, d, e, f) {
    M.call(this);
    this.H = Dn.J();
    this.j = a;
    this.X = c;
    this.V = b;
    this.o = this.b = null;
    this.m = this.B = "";
    this.A = this.j.id;
    this.a = "";
    this.v = this.c = !1;
    this.g = Ko.J();
    this.I = d;
    this.O = e;
    this.U = fk(d) ? [5, 4] : [1, 0];
    this.R = [30, 0, 0, 0];
    this.C = Gy.J();
    this.K = lo.J();
    this.F = ro.J();
    this.L = !0;
    null != f && L(this, rb, f.ma, !1, f)
};
A(Oy, M);
var Ry = function(a, b) {
        if (null == a.b) a.m = b, (null != En[b] || a.H.a && null != Fn[b]) && a.L && (a.L = !1, Cy.J().load(z(a.wa, a), a.O));
        else if (a.B != b)
            if (a.B = b, null != En[b] || a.H.a && null != Fn[b]) {
                var c = Gn(a.H, b),
                    d = Jy(a.C, a.A, b),
                    e = a.C,
                    f = a.A,
                    g = Iy(e, f, b);
                b = y(g) ? g.isEnabled : In(Jy(e, f, b));
                a.v = !0;
                a.a = Pf(c, d) ? d : c[0];
                a.b.disableCurrentInputTool();
                a.c = b;
                a.b.setInputTools(c);
                a.b.activateInputTool(a.a);
                a.c ? a.b.enableCurrentInputTool() : a.b.disableCurrentInputTool();
                null == a.o && (a.o = a.b.showControl({
                    ui: "kd",
                    container: a.j
                }));
                null != a.b.localize &&
                a.b.localize(a.I);
                a.o.show();
                Py(a);
                Qy(a);
                a.v = !1;
                c = a.c ? a.a : "";
                a.K.a = mf(c) ? po(c) : c
            } else a.b.disableCurrentInputTool(), null != a.o && a.o.hide()
    },
    Py = function(a) {
        null != a.b && a.b.repositionKeyboard(a.X, a.U, a.R)
    };
Oy.prototype.isEnabled = function() {
    return null != this.b && this.c
};
var Sy = function(a) {
    return a.isEnabled() && In(a.a)
};
Oy.prototype.M = function(a) {
    Py(this);
    if (!this.v && (this.a != a.currInputToolName || this.c != a.currInputToolActive)) {
        this.a = a.currInputToolName;
        this.c = a.currInputToolActive;
        Qy(this);
        a = this.c;
        var b = this.B,
            c = this.I,
            d = this.A,
            e = this.a;
        Ky(this.C, d, !0).update(b, a, e);
        Ly((a ? "1" : "0") + "." + d + "." + e, b, c);
        a = this.c ? this.a : "";
        this.K.a = mf(a) ? po(a) : a;
        this.c && (0 <= this.a.indexOf("-k0-") ? (a = this.F, R(a, S(a, 171))) : In(this.a) ? (a = this.F, R(a, S(a, 172))) : Hn(this.a) && (a = this.F, R(a, S(a, 146))))
    }
    this.dispatchEvent(rb)
};
Oy.prototype.wa = function() {
    var a = new google.elements.inputtools.InputToolsController;
    a.setAutoDirection(!1);
    a.setApplicationName(Me);
    a.addPageElements([this.V]);
    a.addEventListener(google.elements.inputtools.EventType.INPUT_TOOL_ENABLED, this.M, this);
    this.b = a;
    "" != this.m && (Ry(this, this.m), this.m = "")
};
var Qy = function(a) {
    var b = O("ita-kd-inputtool-icon", a.j);
    if (null != b) {
        var c = In(a.a) ? a.isEnabled() ? window.MSG_IME_OFF || "" : window.MSG_IME_ON || "" : 0 <= a.a.indexOf("-k0-") ? a.isEnabled() ? window.MSG_VK_OFF || "" : window.MSG_VK_ON || "" : Hn(a.a) ? a.isEnabled() ? window.MSG_VK_OFF || "" : window.MSG_HW_ON || "" : "";
        eu(b, c);
        iu(b)
    }
    a = O("ita-kd-dropdown", a.j);
    null != a && (eu(a, window.MSG_CHANGE_ITA || ""), iu(a))
};
var Uy = function(a, b, c, d, e) {
    this.c = !!b;
    this.o = null;
    this.j = 0;
    this.B = !1;
    this.L = !c;
    a && Ty(this, a, d);
    this.g = void 0 != e ? e : this.j || 0;
    this.c && (this.g *= -1)
};
A(Uy, km);
var Ty = function(a, b, c, d) {
    if (a.o = b) a.j = nf(c) ? c : 1 != a.o.nodeType ? 0 : a.c ? -1 : 1;
    nf(d) && (a.g = d)
};
Uy.prototype.next = function() {
    if (this.B) {
        if (!this.o || this.L && 0 == this.g) throw jm;
        var a = this.o;
        var b = this.c ? -1 : 1;
        if (this.j == b) {
            var c = this.c ? a.lastChild : a.firstChild;
            c ? Ty(this, c) : Ty(this, a, -1 * b)
        } else(c = this.c ? a.previousSibling : a.nextSibling) ? Ty(this, c) : Ty(this, a.parentNode, -1 * b);
        this.g += this.j * (this.c ? -1 : 1)
    } else this.B = !0;
    a = this.o;
    if (!this.o) throw jm;
    return a
};
Uy.prototype.splice = function(a) {
    var b = this.o,
        c = this.c ? 1 : -1;
    this.j == c && (this.j = -1 * c, this.g += this.j * (this.c ? -1 : 1));
    this.c = !this.c;
    Uy.prototype.next.call(this);
    this.c = !this.c;
    c = uf(arguments[0]) ? arguments[0] : arguments;
    for (var d = c.length - 1; 0 <= d; d--) wl(c[d], b);
    xl(b)
};
var Vy = Ze(),
    Wy = function(a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    },
    Xy = function(a) {
        for (var b = [], c = 0, d = a.Ld(); c < d; c++) b.push(a.ld(c));
        return b
    },
    Yy = function(a) {
        return a.Fg() ? a.Fb() : a.Zb()
    };
Vy.prototype.Fg = v(!1);
var Zy = function(a, b) {
    Uy.call(this, a, b, !0)
};
A(Zy, Uy);
var $y = function(a, b, c, d, e) {
    this.b = this.a = null;
    this.A = this.H = 0;
    this.m = !!e;
    if (a) {
        this.a = a;
        this.H = b;
        this.b = c;
        this.A = d;
        if (1 == a.nodeType && "BR" != a.tagName)
            if (a = a.childNodes, b = a[b]) this.a = b, this.H = 0;
            else {
                a.length && (this.a = Gf(a));
                var f = !0
            }
        1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.A = 0 : this.b = c)
    }
    Uy.call(this, this.m ? this.b : this.a, this.m, !0);
    if (f) try {
        this.next()
    } catch (g) {
        if (g != jm) throw g;
    }
};
A($y, Zy);
$y.prototype.C = u("a");
$y.prototype.v = function() {
    return this.B && (this.o != (this.m ? this.a : this.b) ? !1 : this.m ? this.H ? -1 != this.j : 1 == this.j : !this.A || 1 != this.j)
};
$y.prototype.next = function() {
    if (this.v()) throw jm;
    return $y.w.next.call(this)
};
var az = Ze(),
    bz = function(a, b) {
        b = b.Id();
        try {
            return 0 <= a.Xb(b, 0, 0) && 0 >= a.Xb(b, 1, 1)
        } catch (c) {
            if (!F) throw c;
            return !1
        }
    };
az.prototype.yb = function() {
    return new $y(this.Jb(), this.oc(), this.nc(), this.Cc())
};
var cz = $e("a");
A(cz, az);
var ez = function(a) {
        var b = $k(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
        else if (dz(a)) {
            for (var c, d = a;
                 (c = d.firstChild) && dz(c);) d = c;
            b.setStart(d, 0);
            for (d = a;
                 (c = d.lastChild) && dz(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = Hf(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    },
    fz = function(a, b, c, d) {
        var e = $k(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    };
w = cz.prototype;
w.Id = u("a");
w.lg = function() {
    return this.a.commonAncestorContainer
};
w.Jb = function() {
    return this.a.startContainer
};
w.oc = function() {
    return this.a.startOffset
};
w.nc = function() {
    return this.a.endContainer
};
w.Cc = function() {
    return this.a.endOffset
};
w.Xb = function(a, b, c) {
    return this.a.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.START_TO_END : 1 == b ? x.Range.END_TO_START : x.Range.END_TO_END, a)
};
w.Kb = function() {
    return this.a.collapsed
};
w.Rh = function() {
    return this.a.toString()
};
w.select = function(a) {
    var b = kl($k(this.Jb()));
    this.Ud(b.getSelection(), a)
};
w.Ud = function(a) {
    a.removeAllRanges();
    a.addRange(this.a)
};
var gz = $e("a");
A(gz, cz);
gz.prototype.Ud = function(a, b) {
    !b || this.Kb() ? gz.w.Ud.call(this, a, b) : (a.collapse(this.nc(), this.Cc()), a.extend(this.Jb(), this.oc()))
};
var hz = function(a) {
    this.b = this.a = this.o = null;
    this.j = this.g = -1;
    this.c = a
};
A(hz, az);
var iz = function(a) {
    var b = $k(a).body.createTextRange();
    if (1 == a.nodeType) b.moveToElementText(a), dz(a) && !a.childNodes.length && b.collapse(!1);
    else {
        for (var c = 0, d = a; d = d.previousSibling;) {
            var e = d.nodeType;
            if (3 == e) c += d.length;
            else if (1 == e) {
                b.moveToElementText(d);
                break
            }
        }
        d || b.moveToElementText(a.parentNode);
        b.collapse(!d);
        c && b.move(sb, c);
        b.moveEnd(sb, a.length)
    }
    return b
};
hz.prototype.Id = u("c");
hz.prototype.lg = function() {
    if (!this.o) {
        var a = this.c.text,
            b = this.c.duplicate(),
            c = a.replace(/ +$/, "");
        (c = a.length - c.length) && b.moveEnd(sb, -c);
        c = b.parentElement();
        b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
        if (this.Kb() && 0 < b) return this.o = c;
        for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
        for (; 1 == c.childNodes.length && c.innerText == jz(c.firstChild) && dz(c.firstChild);) c = c.firstChild;
        0 == a.length && (c = kz(this, c));
        this.o = c
    }
    return this.o
};
var kz = function(a, b) {
    for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
        var f = c[d];
        if (dz(f)) {
            var g = iz(f),
                l = g.htmlText != f.outerHTML;
            if (a.Kb() && l ? 0 <= a.Xb(g, 1, 1) && 0 >= a.Xb(g, 1, 0) : a.c.inRange(g)) return kz(a, f)
        }
    }
    return b
};
w = hz.prototype;
w.Jb = function() {
    this.a || (this.a = lz(this, 1), this.Kb() && (this.b = this.a));
    return this.a
};
w.oc = function() {
    0 > this.g && (this.g = mz(this, 1), this.Kb() && (this.j = this.g));
    return this.g
};
w.nc = function() {
    if (this.Kb()) return this.Jb();
    this.b || (this.b = lz(this, 0));
    return this.b
};
w.Cc = function() {
    if (this.Kb()) return this.oc();
    0 > this.j && (this.j = mz(this, 0), this.Kb() && (this.g = this.j));
    return this.j
};
w.Xb = function(a, b, c) {
    return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
};
var lz = function(a, b, c) {
        c = c || a.lg();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var g = d ? e : f - e - 1,
                l = c.childNodes[g];
            try {
                var m = nz(l)
            } catch (q) {
                continue
            }
            var p = m.Id();
            if (a.Kb())
                if (!dz(l)) {
                    if (0 == a.Xb(p, 1, 1)) {
                        a.g = a.j = g;
                        break
                    }
                } else {
                    if (bz(m, a)) return lz(a, b, l)
                } else {
                if (bz(a, m)) {
                    if (!dz(l)) {
                        d ? a.g = g : a.j = g + 1;
                        break
                    }
                    return lz(a, b, l)
                }
                if (0 > a.Xb(p, 1, 0) && 0 < a.Xb(p, 0, 1)) return lz(a, b, l)
            }
        }
        return c
    },
    mz = function(a, b) {
        var c = 1 == b,
            d = c ? a.Jb() : a.nc();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e =
                d.length, f = c ? 1 : -1, g = c ? 0 : e - 1; 0 <= g && g < e; g += f) {
                var l = d[g];
                if (!dz(l) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), nz(l).Id())) return c ? g : g + 1
            }
            return -1 == g ? 0 : g
        }
        a = a.c.duplicate();
        b = iz(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    },
    jz = function(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    };
hz.prototype.Kb = function() {
    return 0 == this.c.compareEndPoints(Oa, this.c)
};
hz.prototype.Rh = function() {
    return this.c.text
};
hz.prototype.select = function() {
    this.c.select()
};
var oz = $e("a");
A(oz, cz);
oz.prototype.Ud = function(a) {
    a.collapse(this.Jb(), this.oc());
    this.nc() == this.Jb() && this.Cc() == this.oc() || a.extend(this.nc(), this.Cc());
    0 == a.rangeCount && a.addRange(this.a)
};
var pz = $e("a");
A(pz, cz);
pz.prototype.Xb = function(a, b, c) {
    return wh("528") ? pz.w.Xb.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.END_TO_START : 1 == b ? x.Range.START_TO_END : x.Range.END_TO_END, a)
};
pz.prototype.Ud = function(a, b) {
    b ? a.setBaseAndExtent(this.nc(), this.Cc(), this.Jb(), this.oc()) : a.setBaseAndExtent(this.Jb(), this.oc(), this.nc(), this.Cc())
};
var qz = function(a) {
        return Yj ? new hz(a, $k(a.parentElement())) : gh ? new pz(a) : fh ? new gz(a) : ch ? new oz(a) : new cz(a)
    },
    nz = function(a) {
        if (F && !yh(9)) {
            var b = new hz(iz(a), $k(a));
            if (dz(a)) {
                for (var c, d = a;
                     (c = d.firstChild) && dz(c);) d = c;
                b.a = d;
                b.g = 0;
                for (d = a;
                     (c = d.lastChild) && dz(c);) d = c;
                b.b = d;
                b.j = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.o = a
            } else b.a = b.b = b.o = a.parentNode, b.g = Hf(b.o.childNodes, a), b.j = b.g + 1;
            a = b
        } else a = gh ? new pz(ez(a)) : fh ? new gz(ez(a)) : ch ? new oz(ez(a)) : new cz(ez(a));
        return a
    },
    dz = function(a) {
        return sl(a) ||
            3 == a.nodeType
    };
var rz = function() {
    this.c = this.b = this.j = this.a = this.o = null;
    this.g = !1
};
A(rz, Vy);
var sz = function(a, b) {
        var c = new rz;
        c.o = a;
        c.g = !!b;
        return c
    },
    tz = function(a, b) {
        return sz(nz(a), b)
    };
rz.prototype.eb = v("text");
rz.prototype.hg = function() {
    return uz(this).Id()
};
rz.prototype.Ld = v(1);
rz.prototype.ld = function() {
    return this
};
var uz = function(a) {
    var b;
    if (!(b = a.o)) {
        b = a.Fb();
        var c = a.Gb(),
            d = a.Zb(),
            e = a.$b();
        if (F && !yh(9)) {
            var f = b,
                g = c,
                l = d,
                m = e,
                p = !1;
            1 == f.nodeType && (g = f.childNodes[g], p = !g, f = g || f.lastChild || f, g = 0);
            var q = iz(f);
            g && q.move(sb, g);
            f == l && g == m ? q.collapse(!0) : (p && q.collapse(!1), p = !1, 1 == l.nodeType && (l = (g = l.childNodes[m]) || l.lastChild || l, m = 0, p = !g), f = iz(l), f.collapse(!p), m && f.moveEnd(sb, m), q.setEndPoint("EndToEnd", f));
            m = new hz(q, $k(b));
            m.a = b;
            m.g = c;
            m.b = d;
            m.j = e;
            b = m
        } else b = gh ? new pz(fz(b, c, d, e)) : fh ? new gz(fz(b, c, d, e)) : ch ? new oz(fz(b,
            c, d, e)) : new cz(fz(b, c, d, e));
        b = a.o = b
    }
    return b
};
w = rz.prototype;
w.Je = function() {
    return uz(this).lg()
};
w.Fb = function() {
    return this.a || (this.a = uz(this).Jb())
};
w.Gb = function() {
    return null != this.j ? this.j : this.j = uz(this).oc()
};
w.Zb = function() {
    return this.b || (this.b = uz(this).nc())
};
w.$b = function() {
    return null != this.c ? this.c : this.c = uz(this).Cc()
};
w.Fg = u("g");
w.Le = function() {
    return uz(this).Kb()
};
w.Ke = function() {
    return uz(this).Rh()
};
w.yb = function() {
    return new $y(this.Fb(), this.Gb(), this.Zb(), this.$b())
};
w.select = function() {
    uz(this).select(this.g)
};
var vz = Ze();
A(vz, Vy);
var wz = function() {
    this.c = this.b = this.a = null
};
A(wz, vz);
w = wz.prototype;
w.eb = v("control");
w.hg = function() {
    return this.a || document.body.createControlRange()
};
w.Ld = function() {
    return this.a ? this.a.length : 0
};
w.ld = function(a) {
    return tz(this.a.item(a))
};
w.Je = function() {
    return Il.apply(null, xz(this))
};
w.Fb = function() {
    return yz(this)[0]
};
w.Gb = v(0);
w.Zb = function() {
    var a = yz(this),
        b = Gf(a);
    return Of(a, function(a) {
        return El(a, b)
    })
};
w.$b = function() {
    return this.Zb().childNodes.length
};
var xz = function(a) {
        if (!a.b && (a.b = [], a.a))
            for (var b = 0; b < a.a.length; b++) a.b.push(a.a.item(b));
        return a.b
    },
    yz = function(a) {
        a.c || (a.c = xz(a).concat(), a.c.sort(function(a, c) {
            return a.sourceIndex - c.sourceIndex
        }));
        return a.c
    };
wz.prototype.Le = function() {
    return !this.a || !this.a.length
};
wz.prototype.Ke = v("");
wz.prototype.yb = function() {
    return new zz(this)
};
wz.prototype.select = function() {
    this.a && this.a.select()
};
var zz = function(a) {
    this.m = this.b = this.a = null;
    a && (this.m = yz(a), this.a = this.m.shift(), this.b = Gf(this.m) || this.a);
    Uy.call(this, this.a, !1, !0)
};
A(zz, Zy);
zz.prototype.C = u("a");
zz.prototype.v = function() {
    return !this.g && !this.m.length
};
zz.prototype.next = function() {
    if (this.v()) throw jm;
    if (!this.g) {
        var a = this.m.shift();
        Ty(this, a, 1, 1);
        return a
    }
    return zz.w.next.call(this)
};
var Az = function() {
    this.F = null;
    this.a = [];
    this.g = [];
    this.c = this.b = null
};
A(Az, vz);
w = Az.prototype;
w.eb = v("mutli");
w.hg = function() {
    return this.a[0]
};
w.Ld = function() {
    return this.a.length
};
w.ld = function(a) {
    this.g[a] || (this.g[a] = sz(qz(this.a[a]), void 0));
    return this.g[a]
};
w.Je = function() {
    if (!this.c) {
        for (var a = [], b = 0, c = this.Ld(); b < c; b++) a.push(this.ld(b).Je());
        this.c = Il.apply(null, a)
    }
    return this.c
};
var Cz = function(a) {
    a.b || (a.b = Xy(a), a.b.sort(function(a, c) {
        var b = a.Fb();
        a = a.Gb();
        var e = c.Fb();
        c = c.Gb();
        return b == e && a == c ? 0 : Bz(b, a, e, c) ? 1 : -1
    }));
    return a.b
};
w = Az.prototype;
w.Fb = function() {
    return Cz(this)[0].Fb()
};
w.Gb = function() {
    return Cz(this)[0].Gb()
};
w.Zb = function() {
    return Gf(Cz(this)).Zb()
};
w.$b = function() {
    return Gf(Cz(this)).$b()
};
w.Le = function() {
    return 0 == this.a.length || 1 == this.a.length && this.ld(0).Le()
};
w.Ke = function() {
    return Jf(Xy(this), function(a) {
        return a.Ke()
    }).join("")
};
w.yb = function() {
    return new Dz(this)
};
w.select = function() {
    var a = Wy(kl($k(F ? this.Je() : this.Fb())));
    a.removeAllRanges();
    for (var b = 0, c = this.Ld(); b < c; b++) a.addRange(this.ld(b).hg())
};
var Dz = function(a) {
    this.a = null;
    this.b = 0;
    a && (this.a = Jf(Cz(a), function(a) {
        return lm(a)
    }));
    Uy.call(this, a ? this.C() : null, !1, !0)
};
A(Dz, Zy);
Dz.prototype.C = function() {
    return this.a[0].C()
};
Dz.prototype.v = function() {
    return this.a[this.b].v()
};
Dz.prototype.next = function() {
    try {
        var a = this.a[this.b],
            b = a.next();
        Ty(this, a.o, a.j, a.g);
        return b
    } catch (c) {
        if (c !== jm || this.a.length - 1 == this.b) throw c;
        this.b++;
        return this.next()
    }
};
var Fz = function() {
        var a = Wy(window);
        return a && Ez(a)
    },
    Ez = function(a) {
        var b = !1;
        if (a.createRange) try {
            var c = a.createRange()
        } catch (e) {
            return null
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new Az;
                c = 0;
                for (var d = a.rangeCount; c < d; c++) b.a.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = Bz(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        (a = c) && a.addElement ? (b = new wz, b.a = a, a = b) : a = sz(qz(a), b);
        return a
    },
    Bz = function(a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b)
            if (e = a.childNodes[b]) a =
                e, b = 0;
            else if (El(a, c)) return !0;
        if (1 == c.nodeType && d)
            if (e = c.childNodes[d]) c = e, d = 0;
            else if (El(c, a)) return !1;
        return 0 < (Hl(a, c) || b - d)
    };
var Gz = function() {
        var a = Fz();
        return null != a && !a.Le() && 0 < a.Ke().length
    },
    Hz = function(a) {
        Fz();
        tz(a, void 0).select();
        a.setAttribute("tabIndex", "-1");
        return !0
    },
    Iz = function(a) {
        var b = P(Qa, {
            id: "hdt"
        });
        W(b, {
            position: Xa,
            top: jl(document).a + Od,
            left: "-1000px"
        });
        document.body.appendChild(b);
        b.focus();
        Q(b, a);
        a = 0;
        if (Mw(b)) b.selectionStart = a;
        else if (Nw()) {
            var c = Ow(b),
                d = c[0];
            d.inRange(c[1]) && (a = Qw(b, a), d.collapse(!0), d.move(sb, a), d.select())
        }
        a = b.value.length;
        Mw(b) ? b.selectionEnd = a : Nw() && (d = Ow(b), c = d[1], d[0].inRange(c) &&
        (a = Qw(b, a), d = Qw(b, Pw(b, !0)[0]), c.collapse(!0), c.moveEnd(sb, a - d), c.select()));
        return b
    };
var Jz = function(a, b, c, d, e, f) {
    this.A = Ko.J();
    this.v = b;
    this.g = c;
    this.C = d;
    this.o = e || null;
    this.m = f;
    this.b = this.c = this.a = 0;
    this.F = ro.J();
    this.Ac = new It(this.nf, 3E3, this);
    this.j = a;
    L(a, Ab, this.dj, !1, this);
    L(a, Ad, this.ej, !1, this);
    L(a, zb, this.$h, !1, this);
    L(a, r, this.cj, !1, this);
    L(x, kb, this.Kc, !1, this);
    L(x, jb, this.Kc, !1, this)
};
A(Jz, vi);
w = Jz.prototype;
w.Kc = function() {
    this.Ac.stop();
    0 < this.a + this.c + this.b && this.nf()
};
w.N = function() {
    this.Kc();
    this.Ac.Ba();
    Wi(this.j, Ab, this.dj, !1, this);
    Wi(this.j, Ad, this.ej, !1, this);
    Wi(this.j, zb, this.$h, !1, this);
    Wi(this.j, r, this.cj, !1, this);
    Wi(x, kb, this.Kc, !1, this);
    Wi(x, jb, this.Kc, !1, this);
    Jz.w.N.call(this)
};
w.dj = function() {
    this.Ac.stop();
    if (y(this.m)) {
        var a = this.m().length,
            b = null != x.getSelection ? x.getSelection().toString().length : document.selection && "Control" != document.selection.type ? document.selection.createRange().text.length : 0;
        this.nf(1, a, b);
        to(this.F, this.g, a, b)
    } else this.nf(1), to(this.F, this.g)
};
w.nf = function(a, b, c) {
    a = {
        cpy: a || 0,
        clk: this.a,
        sel: this.c,
        ctx: this.b
    };
    null != b && null != c && (a.ql = b, a.cpl = c);
    null != this.o && (a.sl = ux(this.o), a.tl = vx(this.o));
    Po(this.A, this.C, "ilog", this.v, a);
    this.b = this.c = this.a = 0
};
w.ej = function() {
    if (Gz()) {
        this.c++;
        var a = this.F;
        R(a, so(a, 211, this.g));
        59 <= this.c ? this.Kc() : this.Ac.start()
    }
};
w.cj = function(a) {
    Ci(a) && (this.a++, a = this.F, R(a, so(a, 212, this.g)), 59 <= this.a ? this.Kc() : this.Ac.start())
};
w.$h = function() {
    this.b++;
    var a = this.F;
    R(a, so(a, 210, this.g));
    59 <= this.b ? this.Kc() : this.Ac.start()
};
var Kz = function(a, b, c, d) {
    M.call(this);
    this.D = a;
    this.g = b;
    a = yl(this.D);
    this.b = c ? c : a.length;
    ul(this.D);
    this.a = [];
    for (c = 0; c < this.b; ++c) a = new ru(""), a.Fa(16, !0), L(a, n, this.o, !1, this), a.ia(this.D), nt(a.c, a, 0 == c ? 2 : 3), this.a.push(a);
    if (this.c = d ? d : !1) a = new ru(""), a.Fa(16, !0), L(a, n, this.o, !1, this), a.ia(this.D), nt(a.c, a, 3), this.a.push(a);
    this.F = ro.J()
};
A(Kz, M);
Kz.prototype.j = function(a) {
    Lz(this, a.data, a.selected)
};
Kz.prototype.o = function(a) {
    var b = a.currentTarget.P();
    if (a.currentTarget.Ta()) {
        a: {
            var c = a.currentTarget;
            for (var d = 0, e = 0; d < this.a.length; d++) {
                var f = this.a[d];
                if (f && f.isVisible()) {
                    if (c == f) {
                        c = e;
                        break a
                    }
                    e++
                }
            }
            c = -1
        }
        zo(this.F, this.c, 2, b, c)
    } else a.currentTarget.Ka(!0);
    Or(a.currentTarget.l(), this.D);
    this.dispatchEvent({
        type: r,
        data: b
    })
};
var Lz = function(a, b, c) {
    b = b.slice(0, a.b);
    var d = Jf(a.a, function(a) {
        return a.P()
    });
    d.length = a.b;
    d = !ag(Vf(d).sort(), Vf(b).sort());
    for (var e = 0; e < b.length; ++e) {
        d && (a.a[e].Pe(b[e]), wt(a.a[e], a.g(b[e])));
        a.a[e].setVisible(!0);
        var f = a.a[e].P();
        a.a[e].Ka(f == c);
        a.a[e].l().id = "sugg-item-" + b.indexOf(f)
    }
    for (; e < a.b; ++e) a.a[e].setVisible(!1);
    a.c && (b = a.a[a.b], b.Pe(gb), b.g(detect_language), b.setVisible(!0), b.Ka(gb == c));
    X(a.D, !0)
};
Kz.prototype.m = function(a) {
    if (this.c) {
        var b = this.a[this.a.length - 1];
        "" == a.data ? b.g(detect_language) : (a = source_language_detected.replace(/%\d\$s/g, this.g(a.data)), b.g(a))
    }
};
var Mz = function(a) {
        this.a = a;
        this.j = this.A = this.C = this.g = this.c = null;
        this.B = !1;
        this.v = this.b = null;
        this.o = Ko.J();
        this.X = lo.J();
        this.F = ro.J();
        this.m = null
    },
    Oz = function(a, b) {
        b.Oi && (a.c = b.Oi, L(a.c, n, a.I, !1, a), Nz(a, a.a, oe, a.Pk), Nz(a, a.a, Gb, a.xk));
        b.Vi && (a.g = b.Vi, L(a.g, n, a.K, !1, a), Nz(a, a.a, ze, a.Tk));
        b.Sl && (a.wa = b.Sl, Nz(a, a.wa, n, a.L));
        b.fm && (a.M = b.fm, Nz(a, a.M, n, z(a.H, a, "src", !0)));
        b.jm && (a.O = b.jm, Nz(a, a.O, n, z(a.H, a, "tgt", !1)));
        if (b.Pi) {
            a.C = b.Pi;
            Nz(a, a.C, r, a.Qk);
            var c = a.C;
            L(a.a, re, c.j, !1, c);
            c = a.C;
            L(a.a, Gb,
                c.m, !1, c)
        }
        b.Wi && (a.A = b.Wi, Nz(a, a.A, r, a.Uk), c = a.A, L(a.a, se, c.j, !1, c));
        b.Si && (a.j = b.Si, Nz(a, a.j, n, a.Rk));
        b.Xi && (a.b = b.Xi, Nz(a, new Ks(a.b.l()), jd, a.di), Nz(a, new kw(a.b.l()), Kd, a.di));
        b.Ki && (a.v = b.Ki)
    },
    Qz = function(a, b) {
        (a.B = b) && a.j ? a.j.ea(!1) : Pz(a)
    },
    Nz = function(a, b, c, d) {
        b && L(b, c, d, !1, a)
    };
Mz.prototype.I = function() {
    var a = this.c,
        b = this.a.o;
    var c = Kw(this.a.O);
    Rz(this, a, b, c, "slc")
};
Mz.prototype.K = function() {
    var a = this.g,
        b = this.a.m;
    var c = Kw(this.a.R.a);
    Rz(this, a, b, c, "tlc", !0)
};
var Sz = function(a, b, c) {
    var d = {};
    d.lpk = c;
    a.m = d;
    a.m.lsa = b;
    Po(a.o, "t", "lsa", b, d)
};
Mz.prototype.L = function() {
    this.c && this.c.isVisible() ? (Sz(this, "lso", "src"), yo(this.F, 217)) : this.g && this.g.isVisible() && (Sz(this, "lso", "tgt"), yo(this.F, 219))
};
Mz.prototype.H = function(a, b) {
    Sz(this, "lsc", a);
    yo(this.F, b ? 218 : 220)
};
var Rz = function(a, b, c, d, e, f) {
    var g = b.P(),
        l = Tz(a),
        m = Uz(a, f);
    c.call(a.a, g, 4);
    null != b.xa && Rg(l, b.xa);
    "" != d && (l.emphlang = d);
    b = Kw(a.a.C.a);
    f || "" == b || (l.bslang = b);
    "" != m && (l.sugglang = m);
    a.m = l;
    a.m[e] = g;
    Po(a.o, "t", e, g, l)
};
w = Mz.prototype;
w.Pk = function(a) {
    this.c.P() != a.data && Vz(this.c, a.data);
    Pz(this);
    a.uh && (Wz(this, "slauto", Tz(this)), yo(this.F, 221))
};
w.xk = function() {
    Pz(this)
};
w.Tk = function(a) {
    this.g.P() != a.data && Vz(this.g, a.data);
    Pz(this);
    a.uh && (Wz(this, "tlauto", Tz(this)), yo(this.F, 222))
};
w.Qk = function(a) {
    if (a.data == this.a.a) a.target.dispatchEvent({
        type: "clickSelected"
    }), a.preventDefault();
    else {
        var b = this.a.o,
            c = Uz(this),
            d = Tz(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        Wz(this, "ssuggclick", d)
    }
};
w.Uk = function(a) {
    if (a.data == this.a.b) a.target.dispatchEvent({
        type: "clickSelected"
    }), a.preventDefault();
    else {
        var b = this.a.m,
            c = Uz(this, !0),
            d = Tz(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        Wz(this, "tsuggclick", d)
    }
};
w.Rk = function() {
    var a = Tz(this),
        b = this.a.a,
        c = this.a.b,
        d = b;
    if (b == gb && (d = this.a.c, !d)) return;
    this.v && this.b && (b = Rl(this.v), this.b.b(b), qo(this.X, 28));
    this.v && Ql(this.v) && Qz(this, !0);
    Wz(this, "swapclick", a);
    a = this.a;
    a.o(c, 5);
    a.m(d, 5);
    a.dispatchEvent(pd);
    So(this.o, "swap", 1, Ya);
    c = this.F;
    d = S(c, 89);
    a = new ho;
    G(a, 1, 1);
    Th(d, 46, a);
    R(c, d)
};
w.di = function(a) {
    if (a.type == Kd || 2 > gg(this.b.P()).length) this.a.B = !1
};
var Tz = function(a, b) {
        var c = {};
        c.sl = a.a.a;
        c.tl = a.a.b;
        b && (c.val = b);
        (b = a.a.c) && (c.dsl = b);
        a.b && (c.ql = gg(a.b.P()).length);
        return c
    },
    Xz = function(a) {
        So(a.o, "ssel", a.a.X);
        So(a.o, "tsel", a.a.U)
    },
    Wz = function(a, b, c) {
        a.m = c;
        a.o.log(b, c)
    },
    Uz = function(a, b) {
        return b ? Kw(a.a.H.a) : Kw(a.a.A.a)
    },
    Pz = function(a) {
        if (a.j && !a.B) {
            var b = a.a.a;
            b == gb && (b = a.a.c);
            b == Ue && a.a.v == Ve && (b = Ve);
            "" == b || b == a.a.b ? a.j.ea(!1) : a.j.ea(!0)
        }
    };
var Yz = $e("a");
Yz.prototype.Ca = v(null);
Yz.prototype.Ga = u("a");
var Zz = Ze();
A(Zz, Ys);
rf(Zz);
Zz.prototype.ac = v(vd);
Zz.prototype.Wa = function(a) {
    var b = P(k, null, a.Ga());
    nr(b, ["gt-is-sp", "gt-is-cont"]);
    var c = [k, ct(this, a)],
        d = P(k);
    U(d, Ac);
    var e = P(k);
    U(e, "gt-is-ai");
    var f = P(k, null, a.Ed);
    U(f, "gt-is-lb");
    c = c.concat([e, d, f, b]);
    b = P.apply(null, c);
    b.id = ss(a);
    return a.D = b
};
Zz.prototype.Ec = function(a) {
    return a.tagName == k
};
Zz.prototype.T = v("gt-is-itm");
var $z = function(a, b, c, d) {
    rt.call(this, a.Ga(), c || Zz.J(), d);
    this.wd = a;
    this.Ed = b;
    this.Fa(1, !1)
};
A($z, rt);
$z.prototype.Ga = function() {
    return this.wd.Ga()
};
$z.prototype.Ca = function() {
    return this.wd.Ca()
};
var aA = function(a) {
    J.call(this, a)
};
A(aA, J);
al(window.document);
new M;
var bA = function(a) {
        var b = a.getBoundingClientRect();
        if (F) {
            var c = Pr(a);
            a = Ur(a);
            b.left = c.b;
            b.right = c.b + a.width;
            b.top = c.a;
            b.bottom = c.a + a.height
        }
        return b
    },
    cA = function(a, b) {
        var c = al(a),
            d = 0;
        if (nf(b)) d = b;
        else if (F && !wh(9)) {
            if (b = c.a.selection.createRange()) try {
                var e = a.createTextRange(),
                    f = e.duplicate();
                e.moveToBookmark(b.getBookmark());
                f.setEndPoint("EndToStart", e);
                d = f.text.length
            } catch (p) {}
        } else d = a.selectionStart;
        e = "_h#" + zf(a);
        var g = c.l(e);
        g ? c.Me(g) : g = c.b("PRE", {
            id: e
        });
        g.parentNode || c.a.body.appendChild(g);
        var l = [];
        C(a.value, function(a, b, c) {
            l.push(" " == a && b + 1 != c.length && " " == c[b + 1] ? "\u00a0" : a)
        });
        l = l.join("");
        c.appendChild(g, c.a.createTextNode(String(l.substring(0, d))));
        e = Ul(c, Na);
        e.appendChild(c.a.createTextNode("\u200b"));
        c.appendChild(g, e);
        c.appendChild(g, c.a.createTextNode(String(l.substring(d) + " ")));
        c = lr(a);
        C(c, function(a) {
            U(g, a)
        });
        var m = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
        C(["font-family", "font-size", "font-weight", "font-style",
            "text-transform", "text-decoration", "letter-spacing", "word-spacing", "line-height", "text-align", "vertical-align", Hb, "width", Kc, ud, "margin-right", "margin-bottom", "margin-left", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "overflow-x", "overflow-y"
        ], function(b) {
            try {
                var c;
                (c = Dr(a, b) || (a.currentStyle ? a.currentStyle[b] : null) ||
                    a.style[b]) && (m += b + ":" + c + ";")
            } catch (B) {}
        });
        g.style.cssText = m;
        c = Er(a, "overflowX");
        g.style.overflowX = c && c != Se ? c : gb;
        c = Er(a, "overflowY");
        g.style.overflowY = c && c != Se ? c : gb;
        g.scrollTop = a.scrollTop;
        g.scrollLeft = a.scrollLeft;
        Gr(g, Kr(a));
        c = bA(e);
        return a.tagName.toUpperCase() == Fa ? new Uk(c.left, Math.ceil(Pr(a).a + Ur(a).height)) : new Uk(c.left, Math.ceil(c.bottom))
    };
var dA = function(a, b) {
    Y.call(this, b);
    this.m = a
};
A(dA, Y);
dA.prototype.c = "info";
dA.prototype.v = !1;
var eA = {
    info: "jfk-butterBar-info",
    error: "jfk-butterBar-error",
    warning: "jfk-butterBar-warning",
    promo: "jfk-butterBar-promo"
};
dA.prototype.eb = u("c");
var fA = function(a, b) {
    a.m = b;
    if (b = a.l()) {
        var c = a.a;
        c.Me(b);
        c.Oh(b, a.m)
    }
};
dA.prototype.isVisible = function() {
    var a = this.l();
    return null != a && mr(a, bd)
};
dA.prototype.setVisible = function(a) {
    pr(this.l(), bd, a)
};
dA.prototype.sa = function() {
    this.D = this.a.b(k, "jfk-butterBar");
    var a = this.l();
    a && (Us(a, "live", "assertive"), Us(a, "atomic", Oe));
    fA(this, this.m);
    this.v = this.v;
    (a = this.l()) && pr(a, "jfk-butterBar-mini", this.v);
    a = this.c;
    this.Lb() && qr(this.l(), eA[this.c], eA[a]);
    this.c = a
};
var hA = function(a, b, c) {
    M.call(this);
    this.v = c.client;
    this.g = a;
    this.a = b;
    this.o = c.Yk;
    this.X = !1;
    this.A = c.Wl;
    this.L = c.Zk;
    this.ra = c.Xj || null;
    this.K = c.ba;
    this.Qb = c.Ab;
    this.aa = c.hm;
    this.Tb = c.zm;
    this.B = null;
    this.M = c.ym;
    this.Y = c.jl;
    this.H = 0;
    this.m = {};
    this.zc = c.Qj;
    this.fg = c.ek;
    this.U = c.dm;
    this.bb = c.al;
    this.Ob = !!c.Sm;
    this.R = !!c.Rm;
    this.V = !!c.Om;
    this.Pb = c.Tm || "Did you mean:";
    this.Ub = c.Um || 500;
    a = new dA("");
    a.ia(N("gt-bbar"));
    a.setVisible(!1);
    this.O = a;
    this.c = this.b = this.j = "";
    this.C = Ko.J();
    "async_translate_onebox" ==
    this.v && (this.C.m = "/translate");
    this.I = new js(this);
    this.Rb = new Ks(this.o.l());
    this.ma = lo.J();
    this.F = ro.J();
    gA(this)
};
A(hA, M);
var gA = function(a) {
    a.U && a.I.G(a.Rb, jd, a.Ra).G(a.o, rb, a.$a);
    a.I.G(a.a, n, a.xa).G(a.o.l(), kb, a.La).G(a.K, oe, a.wa).G(a.K, ze, a.wa);
    null != a.L && a.I.G(a.L, rb, a.Za)
};
hA.prototype.update = function() {
    0 != this.j.length || this.V ? (iA(this, this.g.a[0]), this.H++, this.m[this.H] = {}, this.m[this.H][0] = Df(), jA(this.aa, this.j, this.b, this.c, z(this.sb, this, this.j, this.b, this.c, this.H))) : kA(this)
};
var lA = function(a) {
    var b = a.a;
    b.c && b.removeChild(b.c, !0);
    b.c = null;
    a.a.setVisible(!!ys(a.a))
};
hA.prototype.Za = function() {
    Sy(this.L) && kA(this)
};
hA.prototype.Ra = function(a) {
    if (!this.a.isVisible()) return !1;
    if (27 == a.keyCode) {
        var b = mA(this.g.a);
        Po(this.C, this.v, "is", "0", {
            q: this.j,
            sl: this.b,
            tl: this.c,
            sn: b.length,
            s: b
        });
        b = this.F;
        var c = nA(this),
            d = oA(this);
        R(b, Io(b, 204, c, d, pA(this), [], null != this.a.g, 0));
        kA(this)
    }
    13 == a.keyCode && -1 == this.a.ya && (b = mA(this.g.a), Po(this.C, this.v, "is", "8", {
        q: this.j,
        sl: this.b,
        tl: this.c,
        sn: b.length,
        s: b
    }), b = this.F, c = nA(this), d = oA(this), R(b, Io(b, 205, c, d, pA(this), [], null != this.a.g, 0)), kA(this));
    if (36 == a.keyCode || 35 == a.keyCode) return !1;
    b = this.a.Sa(a);
    if (38 == a.keyCode || 40 == a.keyCode) - 1 != this.a.ya && (a = qA(this.a), a != this.a.c && this.o.P() != a.Ga() && (this.X = !0, qo(this.ma, "is"), this.o.b(a.Ga()), iA(this))), this.dispatchEvent("suggestionHover");
    return b
};
hA.prototype.$a = function(a) {
    this.X ? this.X = !1 : this.L && Sy(this.L) ? kA(this) : a.fd == ae ? kA(this) : Mj(z(this.Sb, this, a), 0)
};
hA.prototype.Sb = function() {
    var a = -1 != this.o.P().indexOf("\n") ? "" : rA(this.o.P()),
        b = this.K.a,
        c = this.K.b;
    if (a != this.j || b != this.b || c != this.c) this.j = a, this.b = b, this.c = c, this.update()
};
var rA = function(a) {
    return a.replace(/[ \n\t\r\f,\.\?!]+/g, " ").replace(/^ /, "")
};
hA.prototype.xa = function(a) {
    var b = nA(this),
        c = oA(this),
        d = pA(this),
        e = [],
        f = null != this.a.g;
    if (a.target == this.a.g) f = this.F, R(f, Io(f, 185, b, c, d, e, !0, 1)), sA(this, "it", "translationSelected", "");
    else if (a.target == this.a.j) a = this.F, R(a, Io(a, 181, b, c, d, e, f, 1)), sA(this, "ss", "spellingSelected", c);
    else if (a.target == this.a.c) a = this.F, R(a, Io(a, 183, b, c, d, e, f, 1)), sA(this, "ls", pd, d[0]);
    else {
        a = a.target;
        a: {
            var g = this.a.b;
            for (var l = 0; l < g.length; l++)
                if (g[l] == a) {
                    g = l;
                    break a
                }
            g = -1
        }
        l = this.F;
        R(l, Io(l, 142, b, c, d, e, f, g + 1));
        tA(this,
            a.Ga(), "2")
    }
};
var sA = function(a, b, c, d) {
        var e = mA(a.g.a);
        Po(a.C, a.v, "is", "b", {
            q: a.j,
            sl: a.b,
            tl: a.c,
            sn: e.length,
            s: e,
            si: 0,
            sy: b
        });
        kA(a);
        a.dispatchEvent(new aA(c, d))
    },
    tA = function(a, b, c) {
        for (var d = mA(a.g.a), e = 0, f = 0; f < d.length; f++)
            if (d[f] == b) {
                e = f + 1;
                break
            }
        Po(a.C, a.v, "is", c, {
            q: a.j,
            sl: a.b,
            tl: a.c,
            sn: d.length,
            s: d,
            si: e
        });
        a.j = rA(b);
        qo(a.ma, "is");
        a.o.b(b);
        "2" == c ? (kA(a), a.o.l().blur(), a.dispatchEvent("suggestionSelected")) : (a.update(), a.dispatchEvent("suggestionCopied"))
    };
hA.prototype.wa = function() {
    kA(this)
};
hA.prototype.sb = function(a, b, c, d, e) {
    this.m[d][1] = Df();
    0 == this.j.length && !this.V || 0 == e.length && !this.R ? kA(this) : 0 == e.length ? uA(this) : this.b != b || this.c != c ? uA(this) : this.M ? (this.m[d][2] = Df(), this.B && this.B.abort(), this.B = dr(this.Tb, this.b, this.c, this.Qb, e, z(this.Bb, this, a, d, e), "is", void 0, this.Ub)) : vA(this, a, Jf(e, function(a) {
        return new yx(a)
    }), d)
};
hA.prototype.Bb = function(a, b, c, d, e) {
    null == d ? (wA(this, a, c, e), wo(this.F, 145)) : (this.m[b][3] = Df(), c.length == d.length ? vA(this, a, Jf(c, function(a, b) {
        return new yx(c[b], d[b])
    }), b) : (xA(this), wo(this.F, 146), vA(this, a, Jf(c, function(a) {
        return new yx(a)
    }), b)))
};
var uA = function(a) {
        yA(a.a, []);
        a.g.a = [];
        iA(a);
        var b = a.a;
        b.o && 0 != b.o.length || a.a.setVisible(!1)
    },
    kA = function(a) {
        zA(a.aa);
        a.B && a.B.abort();
        a.a.setVisible(!1);
        var b = a.a;
        Ds(b);
        b.b = [];
        b.c = null;
        b.j = null;
        b.g = null;
        b = a.g;
        b.a = [];
        b.b = null;
        b.c = null;
        iA(a)
    },
    vA = function(a, b, c, d) {
        var e = a.m[d][1] - a.m[d][0];
        if (a.M) var f = a.m[d][3] - a.m[d][2];
        delete a.m[d];
        if (0 != c.length) {
            var g = c;
            c.length > a.Y && (g = Xf(c, 0, a.Y));
            a.g.a = g;
            c = {};
            a.M && (c.td = f);
            if (a.H > d) AA(a, !1), BA(a, e, b, g, c, !1);
            else {
                var l = [];
                C(g, function(a, b) {
                    b = new Ax(a, this.zc,
                        this.fg, 0 == b && !this.R, this.M, this.ra);
                    l.push(b);
                    (b = this.g.b) && b.Ga() == a.Ga() && (a = "", b = mA(this.g.a), Pf(b, a) && (a = ""), a ? (a = new Yz(a), b = new $z(a, this.Pb), this.g.b = a, CA(this.a, b), DA(this.a, !0), this.a.setVisible(!0)) : (this.g.b = null, CA(this.a, null), this.a.setVisible(!!ys(this.a))))
                }, a);
                yA(a.a, l);
                6 < EA(a.g) && lA(a);
                a.R && DA(a.a, !!a.a.g);
                iA(a, g[0]);
                if (!a.bb) {
                    d = jl(al(document).a);
                    f = cA(a.o.l(), a.o.P().length);
                    var m = Kr(Dl(a.a.l()));
                    f.b = 0;
                    f.a += d.a;
                    f.a -= m.a;
                    Gr(a.a.l(), f)
                }
                a.zc && FA(a);
                GA(a);
                a.dispatchEvent("suggestionUpdate");
                a.a.setVisible(!0);
                AA(a, !0);
                BA(a, e, b, g, c, !0)
            }
        }
    },
    nA = function(a) {
        var b = [];
        a = a.a.b;
        for (var c = 0; c < a.length; c++) b.push([a[c].Ga(), a[c].Ca()]);
        return b
    },
    oA = function(a) {
        return a.a.j ? a.a.j.Ga() : ""
    },
    pA = function(a) {
        a = a.a.c ? a.a.c.wd.a : "";
        return "" != a ? [a] : []
    },
    AA = function(a, b) {
        var c = a.F,
            d = nA(a),
            e = oA(a);
        R(c, Io(c, b ? 141 : 203, d, e, pA(a), [], null != a.a.g, 0))
    },
    iA = function(a, b) {
        if (a.A)
            if (b) {
                var c = a.o.P();
                bg(b.Ga(), c) ? a.A.b(b.Ga()) : a.A.b(c)
            } else a.A.b("")
    },
    FA = function(a) {
        C(a.a.b, function(a) {
                a.Cb && L(a.Cb, n, this.Ma, !1, this)
            },
            a)
    };
hA.prototype.Ma = function(a) {
    var b = this.a.b;
    C(b, function(c, d) {
        if (c.Cb == a.target) {
            var e = P(Na, null, (window.MSG_SUGGESTION_FLAGGED || "").replace(ca, c.Ga())),
                f = P(Na, null, " ");
            c = P("A", {
                href: "javascript:;"
            }, window.MSG_DISMISS || "");
            e = P(k, null, e, f, c);
            fA(this.O, e);
            this.O.setVisible(!0);
            L(c, r, this.Ja, !1, this);
            HA(this, d + 1, b)
        }
    }, this)
};
var GA = function(a) {
    C(a.a.b, function(a) {
        a.Yb && L(a.Yb, n, this.Ea, !1, this)
    }, a)
};
hA.prototype.Ea = function(a) {
    C(this.a.b, function(b) {
        b.Yb == a.target && tA(this, b.Ga(), "a")
    }, this)
};
hA.prototype.Ja = function() {
    this.O.setVisible(!1)
};
hA.prototype.La = function() {
    this.a && (this.Ob ? uA(this) : this.a.setVisible(!1));
    this.A && this.A.b("")
};
var HA = function(a, b, c) {
        c = Jf(c, function(a) {
            return a.Ga()
        });
        Po(a.C, a.v, "is", "3", {
            q: a.j,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c,
            si: b
        })
    },
    mA = function(a) {
        return a ? Jf(a, function(a) {
            return a ? a.Ga() : ""
        }) : []
    },
    IA = function(a) {
        if (!a) return [];
        a = Jf(a, function(a) {
            return a ? a.Ca() : ""
        });
        return If(a, function(a) {
            return null != a
        })
    },
    BA = function(a, b, c, d, e, f) {
        d = mA(d);
        b = {
            q: c,
            sl: a.b,
            tl: a.c,
            sd: b,
            sn: d.length,
            s: d
        };
        for (var g in e) b[g] = e[g];
        Po(a.C, a.v, "is", f ? "1" : "7", b)
    },
    xA = function(a) {
        var b = a.g.a,
            c = mA(b);
        b = IA(b);
        Po(a.C, a.v, "is", "6", {
            q: a.j,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c,
            tn: b.length,
            st: b
        })
    },
    wA = function(a, b, c, d) {
        b = {
            q: b,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c
        };
        d && (b.ec = d);
        Po(a.C, a.v, "is", "9", b)
    };
var KA = function(a) {
    M.call(this);
    this.D = a;
    L(a, JA, this.b, !1, this);
    L(a, r, this.a, !1, this)
};
A(KA, M);
var JA = fh ? ld : kd;
KA.prototype.b = function(a) {
    (13 == a.keyCode || gh && 3 == a.keyCode) && LA(this, a)
};
KA.prototype.a = function(a) {
    LA(this, a)
};
var LA = function(a, b) {
    var c = new MA(b);
    if (a.dispatchEvent(c)) {
        c = new NA(b);
        try {
            a.dispatchEvent(c)
        } finally {
            b.stopPropagation()
        }
    }
};
KA.prototype.N = function() {
    KA.w.N.call(this);
    Wi(this.D, JA, this.b, !1, this);
    Wi(this.D, r, this.a, !1, this);
    delete this.D
};
var NA = function(a) {
    Ai.call(this, a.a);
    this.type = n
};
A(NA, Ai);
var MA = function(a) {
    Ai.call(this, a.a);
    this.type = "beforeaction"
};
A(MA, Ai);
var OA = function(a, b, c, d, e, f) {
    this.m = a;
    this.a = b;
    this.g = c;
    this.B = d;
    this.M = e;
    this.A = f;
    this.b = "";
    this.c = new It(this.K, 300, this);
    this.o = this.v = 0;
    this.H = null;
    this.C = !1;
    this.j = Ko.J();
    this.g && (this.H = new KA(this.g), L(this.H, n, this.I, !1, this));
    L(this.m, rb, this.L, !1, this);
    this.c.start(void 0)
};
OA.prototype.L = function(a) {
    var b = "";
    a.fd && (b = a.fd);
    b == Kd && (this.v++, So(this.j, "pc", 1, Ya));
    b == ae && this.o++;
    this.c.start(void 0)
};
OA.prototype.K = function() {
    if (this.a) {
        this.c.stop();
        var a = gg(this.m.P());
        if (a != this.b)
            if (this.A && this.A()) this.c.start(300);
            else if (!(2E3 < hg(a).length && 0 == this.v && 0 == this.o)) {
                this.o = this.v = 0;
                var b = a.substring(0, this.b.length) == this.b;
                (a = this.b.substring(0, a.length) == a) || 0 != this.b.length && b && !this.C ? So(this.j, "otf", "2") : So(this.j, "otf", "1");
                this.C = a;
                this.M()
            }
    }
};
OA.prototype.reset = function(a) {
    this.c.stop();
    this.b = gg(this.m.P());
    a || (this.C = !1)
};
OA.prototype.I = function(a) {
    a.preventDefault();
    this.a = !this.a;
    this.g && (this.g.innerHTML = this.a ? msg_disable_otf : msg_enable_otf);
    if (this.B) {
        a = this.B;
        var b = this.a;
        b != a.U && ((a.U = b) ? gA(a) : os(a.I))
    }
    Oo(this.j, "/translate/uc?ua=eotf&uav=" + (this.a ? 1 : 0))
};
var PA = function() {
    M.call(this);
    this.a = 0;
    this.m = this.g = null
};
A(PA, M);
PA.prototype.j = function() {
    this.b("begin")
};
PA.prototype.o = function() {
    this.b(Nb)
};
PA.prototype.b = function(a) {
    this.dispatchEvent(a)
};
var QA = function(a, b) {
        tf(b) || (b = [b]);
        b = Jf(b, function(a) {
            return mf(a) ? a : a.Nl + " " + a.duration + "s " + a.timing + " " + a.Ac + "s"
        });
        W(a, Le, b.join(","))
    },
    RA = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        if (F) return wh("10.0");
        var a = ol(document, k),
            b = gh ? "-webkit" : fh ? "-moz" : F ? "-ms" : ch ? "-o" : null,
            c = {
                transition: Fd
            };
        b && (c[b + "-transition"] = Fd);
        Rk(a, Nk("div", {
            style: c
        }));
        a = a.firstChild;
        b = a.style[Dg(Le)];
        return "" != ("undefined" !== typeof b ? b : a.style[Br(a, Le)] || "")
    });
var SA = function(a, b, c, d, e) {
    PA.call(this);
    this.D = a;
    this.C = b;
    this.A = c;
    this.c = d;
    this.H = tf(e) ? e : [e]
};
A(SA, PA);
w = SA.prototype;
w.play = function() {
    if (1 == this.a) return !1;
    this.j();
    this.b(Md);
    this.g = Df();
    this.a = 1;
    if (RA()) return W(this.D, this.A), this.v = Mj(this.Ll, void 0, this), !0;
    this.ng(!1);
    return !1
};
w.Ll = function() {
    Ur(this.D);
    QA(this.D, this.H);
    W(this.D, this.c);
    this.v = Mj(z(this.ng, this, !1), 1E3 * this.C)
};
w.stop = function() {
    1 == this.a && this.ng(!0)
};
w.ng = function(a) {
    W(this.D, Le, "");
    Nj(this.v);
    W(this.D, this.c);
    this.m = Df();
    this.a = 0;
    a ? this.b("stop") : this.b(Ob);
    this.o()
};
w.N = function() {
    this.stop();
    SA.w.N.call(this)
};
var TA = function(a, b) {
    M.call(this);
    this.g = new js(this);
    this.Qd(a || null);
    b && (this.pd = b)
};
A(TA, M);
w = TA.prototype;
w.D = null;
w.sh = !0;
w.rh = null;
w.Yc = !1;
w.Ig = -1;
w.Hg = -1;
w.pd = Be;
w.eb = u("pd");
w.l = u("D");
w.Qd = function(a) {
    UA(this);
    this.D = a
};
w.setAutoHide = function(a) {
    UA(this);
    this.sh = a
};
var UA = function(a) {
    if (a.Yc) throw Error("Can not change this state of the popup while showing.");
};
TA.prototype.isVisible = u("Yc");
var VA = function(a) {
    return a.Yc || 150 > Df() - a.Hg
};
TA.prototype.setVisible = function(a) {
    this.v && this.v.stop();
    this.m && this.m.stop();
    if (a) {
        if (!this.Yc && this.Pg()) {
            if (!this.D) throw Error("Caller must call setElement before trying to show the popup");
            this.A();
            a = $k(this.D);
            if (this.sh)
                if (this.g.G(a, wd, this.Di, !0), F) {
                    try {
                        var b = a.activeElement
                    } catch (d) {}
                    for (; b && b.nodeName == Da;) {
                        try {
                            var c = Jl(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.g.G(a, wd, this.Di, !0);
                    this.g.G(a, "deactivate", this.Ci)
                } else this.g.G(a, kb, this.Ci);
            this.pd == Be ? (this.D.style.visibility = Se,
                X(this.D, !0)) : this.pd == Bd && this.A();
            this.Yc = !0;
            this.Ig = Df();
            this.Hg = -1;
            this.v ? (Pi(this.v, Nb, this.Wh, !1, this), this.v.play()) : this.Wh()
        }
    } else WA(this)
};
TA.prototype.A = qf;
var WA = function(a, b) {
    a.Yc && a.dispatchEvent({
        type: hb,
        target: b
    }) && (a.g && os(a.g), a.Yc = !1, a.Hg = Df(), a.m ? (Pi(a.m, Nb, Cf(a.Ch, b), !1, a), a.m.play()) : a.Ch(b))
};
w = TA.prototype;
w.Ch = function(a) {
    this.pd == Be ? this.Xk() : this.pd == Bd && (this.D.style.top = "-10000px");
    this.wg(a)
};
w.Xk = function() {
    this.D.style.visibility = Mc;
    X(this.D, !1)
};
w.Pg = function() {
    return this.dispatchEvent(ib)
};
w.Wh = function() {
    this.dispatchEvent(de)
};
w.wg = function(a) {
    this.dispatchEvent({
        type: Nc,
        target: a
    })
};
w.Di = function(a) {
    a = a.target;
    El(this.D, a) || XA(this, a) || 150 > Df() - this.Ig || WA(this, a)
};
w.Ci = function(a) {
    var b = $k(this.D);
    if ("undefined" != typeof document.activeElement) {
        if (a = b.activeElement, !a || El(this.D, a) || "BODY" == a.tagName) return
    } else if (a.target != b) return;
    150 > Df() - this.Ig || WA(this)
};
var XA = function(a, b) {
    return Lf(a.rh || [], function(a) {
        return b === a || El(a, b)
    })
};
TA.prototype.N = function() {
    TA.w.N.call(this);
    this.g.Ba();
    wi(this.v);
    wi(this.m);
    delete this.D;
    delete this.g;
    delete this.rh
};
var YA = function(a, b) {
    this.M = b || void 0;
    TA.call(this, a)
};
A(YA, TA);
YA.prototype.A = function() {
    if (this.M) {
        var a = !this.isVisible() && this.eb() != Bd,
            b = this.l();
        a && (b.style.visibility = Mc, X(b, !0));
        this.M.a(b, 8, this.pf);
        a && X(b, !1)
    }
};
var ZA = function(a, b) {
    YA.call(this, a);
    this.c = b;
    this.a = 0;
    this.b = null;
    this.j = 0;
    this.setVisible(!0);
    this.setVisible(!1);
    U(this.l(), "round-trip-popup");
    U(this.c, "round-trip-content")
};
A(ZA, YA);
ZA.prototype.H = function() {
    Nj(this.j);
    1 == this.a ? Pi(this.b, Ob, z(this.H, this)) : 0 == this.a && (this.j = Mj(z(this.C, this, -1), 200))
};
ZA.prototype.C = function(a) {
    if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
        var b = this.isVisible();
        this.setVisible(!0);
        var c = -Math.ceil(Ur(this.c).width);
        $r(this.l()) && (c = -c);
        var d = 1 == a ? c : 0;
        c = 1 == a ? 0 : c;
        this.setVisible(b);
        if (RA()) {
            b = .2;
            if (0 != this.a) {
                var e = parseInt(Dr(this.c, rd), 10);
                this.o();
                b *= (c - e) / (c - d);
                d = e
            }
            this.a = a;
            this.b = new SA(this.c, b, {
                left: d + Od
            }, {
                left: c + Od
            }, "left " + b + "s");
            this.b.play();
            Pi(this.b, Ob, z(this.o, this)); - 1 == a ? Pi(this.b, Ob, z(this.setVisible, this, !1)) :
                this.setVisible(!0)
        } else W(this.c, rd, c + Od), this.setVisible(1 == a ? !0 : !1)
    }
};
ZA.prototype.o = function() {
    0 != this.a && (this.b.stop(), Mj(z(Yi, this, this.b)), this.a = 0, this.b = null)
};
var aB = function(a) {
        this.D = a || null;
        this.a = P(k, "gt-hl-layer", pl(""));
        this.b = null;
        this.D && (vl(this.a, this.D), $A(this))
    },
    cB = function(a, b, c, d, e) {
        var f = d || "gt-hl-text";
        d = a.D && (a.D.value || Ql(a.D));
        $A(a);
        ul(a.a);
        if (b != c || e) {
            if (0 < b) {
                var g = d.substring(0, b);
                bB(a.a, g, 0, e)
            }
            b < c && (g = d.substring(b, c), f = P(Na, f), bB(f, g, b, e), a.a.appendChild(f));
            c < d.length && (g = d.substring(c), bB(a.a, g, c, e))
        }
    },
    $A = function(a) {
        var b;
        var c = a.D,
            d = $k(c);
        (b = F && c.currentStyle) && gl(al(d).a) && b.width != gb && b.height != gb && !b.boxSizing ? (d = ds(c, b.width,
            "width", "pixelWidth"), c = ds(c, b.height, Kc, "pixelHeight"), b = new Xk(d, c)) : (b = new Xk(c.offsetWidth, c.offsetHeight), d = gs(c), c = Mr(c), b = new Xk(b.width - c.left - d.left - d.right - c.right, b.height - c.top - d.top - d.bottom - c.bottom));
        c = a.a;
        var e = gl(al($k(c)).a);
        !F || wh("10") || e && wh("8") ? cs(c, b, "content-box") : (d = c.style, e ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (e = gs(c), c = Mr(c), d.pixelWidth = b.width + c.left + e.left + e.right + c.right, d.pixelHeight = b.height + c.top + e.top + e.bottom + c.bottom));
        c = Kr(a.D);
        Sr(a.a, c.b, c.a);
        c = gs(a.D);
        W(a.a, Id, c.left + Od);
        W(a.a, Jd, c.right + Od);
        a.a.dir = a.D.dir
    },
    bB = function(a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++)
            if (!(0 > f.Hd - c)) {
                if (f.Hd - c >= b.length) break;
                if (0 < f.Hd - c) {
                    var g = b.substring(0, f.Hd - c);
                    dB(a, g)
                }
                var l = f.className || "gt-hl-text";
                g = b.substring(f.Hd - c, f.dh - c);
                l = P(Na, l);
                dB(l, g);
                a.appendChild(l);
                b = b.substring(f.dh - c);
                c = f.dh
            }
        b && dB(a, b)
    },
    dB = function(a, b) {
        b = eg(b).split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = P("BR");
                a.appendChild(e)
            }
            a.appendChild(pl(b[c]))
        }
    };
var eB = function() {
    this.g = []
};
A(eB, Ys);
rf(eB);
var fB = function(a, b) {
    var c = a.g[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.T() + "-highlight";
                break;
            case 1:
                c = a.T() + "-checkbox";
                break;
            case 2:
                c = a.T() + fa
        }
        a.g[b] = c
    }
    return c
};
w = eB.prototype;
w.ac = v(vd);
w.Wa = function(a) {
    var b = a.a.b(k, ct(this, a).join(" "), gB(this, a.Da(), a.a));
    hB(this, a, b, ht(a, 8) || ht(a, 16));
    return b
};
w.vb = function(a) {
    return a && a.firstChild
};
w.S = function(a, b) {
    var c = Al(b),
        d = fB(this, 2);
    c && mr(c, d) || b.appendChild(gB(this, b.childNodes, a.a));
    mr(b, hc) && (a.Fa(16, !0), a && b && hB(this, a, b, !0));
    return eB.w.S.call(this, a, b)
};
w.Mb = function(a, b) {
    var c = this.vb(a),
        d = iB(this, a) ? c.firstChild : null;
    eB.w.Mb.call(this, a, b);
    d && !iB(this, a) && c.insertBefore(d, c.firstChild || null)
};
var gB = function(a, b, c) {
        a = fB(a, 2);
        return c.b(k, a, b)
    },
    iB = function(a, b) {
        return (b = a.vb(b)) ? (b = b.firstChild, a = fB(a, 1), !!b && Cl(b) && mr(b, a)) : !1
    },
    hB = function(a, b, c, d) {
        gt(a, c, b.Pd());
        it(a, b, c);
        d != iB(a, c) && (pr(c, hc, d), c = a.vb(c), d ? (a = fB(a, 1), c.insertBefore(b.a.b(k, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
eB.prototype.a = function(a) {
    switch (a) {
        case 2:
            return fB(this, 0);
        case 16:
        case 8:
            return ic;
        default:
            return eB.w.a.call(this, a)
    }
};
eB.prototype.c = function(a) {
    var b = fB(this, 0);
    switch (a) {
        case ic:
            return 16;
        case b:
            return 2;
        default:
            return eB.w.c.call(this, a)
    }
};
eB.prototype.T = v("goog-menuitem");
var jB = function(a, b, c, d) {
    rt.call(this, a, d || eB.J(), c);
    this.X = b
};
A(jB, rt);
w = jB.prototype;
w.P = function() {
    var a = this.X;
    return null != a ? a : this.Va()
};
w.Fa = function(a, b) {
    jB.w.Fa.call(this, a, b);
    switch (a) {
        case 8:
            this.Ta() && !b && this.Ka(!1);
            (a = this.l()) && this && a && hB(this.c, this, a, b);
            break;
        case 16:
            (a = this.l()) && this && a && hB(this.c, this, a, b)
    }
};
w.Va = function() {
    var a = this.Da();
    return tf(a) ? (a = Jf(a, function(a) {
        return Cl(a) && (mr(a, "goog-menuitem-accel") || mr(a, "goog-menuitem-mnemonic-separator")) ? "" : Rl(a)
    }).join(""), fg(a)) : jB.w.Va.call(this)
};
w.jb = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.V;
        b.V = null;
        if (b = c && nf(a.clientX)) b = new Uk(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.b == b.b && c.a == b.a : !1;
        if (b) return
    }
    jB.w.jb.call(this, a)
};
w.Uc = function(a) {
    return a.keyCode == this.wi && this.wc(a) ? !0 : jB.w.Uc.call(this, a)
};
w.ik = u("wi");
pt("goog-menuitem", function() {
    return new jB(null)
});
jB.prototype.Pd = function() {
    return ht(this, 16) ? "menuitemcheckbox" : ht(this, 8) ? "menuitemradio" : jB.w.Pd.call(this)
};
jB.prototype.getParent = function() {
    return rt.prototype.getParent.call(this)
};
jB.prototype.He = function() {
    return rt.prototype.He.call(this)
};
var kB = $e("b");
rf(kB);
var lB = function(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
kB.prototype.o = function(a) {
    return a.a.b(k, mB(this, a).join(" "))
};
kB.prototype.g = function(a) {
    return a
};
kB.prototype.a = function(a) {
    return a.tagName == k
};
kB.prototype.S = function(a, b) {
    b.id && ts(a, b.id);
    var c = this.T(),
        d = !1,
        e = lr(b);
    e && C(e, function(b) {
        b == c ? d = !0 : b && (b == c + ia ? a.ea(!1) : b == c + "-horizontal" ? nB(a, Pc) : b == c + "-vertical" && nB(a, Qe))
    }, this);
    d || U(b, c);
    oB(this, a, this.g(b));
    return b
};
var oB = function(a, b, c) {
    if (c)
        for (var d = c.firstChild, e; d && d.parentNode == c;) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
                var f = a.c(d);
                f && (f.D = d, b.isEnabled() || f.ea(!1), zs(b, f), f.S(d))
            } else d.nodeValue && "" != gg(d.nodeValue) || c.removeChild(d);
            d = e
        }
};
kB.prototype.c = function(a) {
    a: {
        a = lr(a);
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            if (d = d in ot ? ot[d]() : null) {
                a = d;
                break a
            }
        }
        a = null
    }
    return a
};
kB.prototype.j = function(a) {
    a = a.l();
    bs(a, !0, fh);
    F && (a.hideFocus = !0);
    var b = this.b;
    b && Ts(a, b)
};
kB.prototype.T = v("goog-container");
var mB = function(a, b) {
        a = a.T();
        var c = [a, b.$c == Pc ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + ia);
        return c
    },
    pB = v(Qe);
var qB = Ze();
A(qB, Ys);
rf(qB);
qB.prototype.Wa = function(a) {
    return a.a.b(k, this.T())
};
qB.prototype.S = function(a, b) {
    b.id && ts(a, b.id);
    if ("HR" == b.tagName) {
        var c = b;
        b = this.Wa(a);
        vl(b, c);
        xl(c)
    } else U(b, this.T());
    return b
};
qB.prototype.Mb = Ze();
qB.prototype.T = v(gc);
var rB = function(a, b) {
    rt.call(this, null, a || qB.J(), b);
    this.Fa(1, !1);
    this.Fa(2, !1);
    this.Fa(4, !1);
    this.Fa(32, !1);
    this.Fc = 1
};
A(rB, rt);
rB.prototype.W = function() {
    rB.w.W.call(this);
    Ts(this.l(), $d)
};
pt(gc, function() {
    return new rB
});
var sB = function(a) {
    this.b = a || "menu"
};
A(sB, kB);
rf(sB);
sB.prototype.a = function(a) {
    return "UL" == a.tagName || sB.w.a.call(this, a)
};
sB.prototype.c = function(a) {
    return "HR" == a.tagName ? new rB : sB.w.c.call(this, a)
};
sB.prototype.T = v(bc);
sB.prototype.j = function(a) {
    sB.w.j.call(this, a);
    Us(a.l(), Jc, Oe)
};
var tB = function(a, b, c) {
    this.b = a;
    this.g = b;
    this.v = c
};
A(tB, Rt);
tB.prototype.a = function(a, b, c) {
    Qt(this.b, this.g, a, b, void 0, c, this.v)
};
var uB = function(a, b, c, d) {
    tB.call(this, a, b);
    this.j = c ? 5 : 0;
    this.o = d || void 0
};
A(uB, tB);
uB.prototype.m = u("j");
uB.prototype.c = $e("j");
uB.prototype.a = function(a, b, c, d) {
    var e = Qt(this.b, this.g, a, b, null, c, 10, d, this.o);
    if (e & 496) {
        var f = vB(e, this.g);
        b = vB(e, b);
        e = Qt(this.b, f, a, b, null, c, 10, d, this.o);
        e & 496 && (f = vB(e, f), b = vB(e, b), Qt(this.b, f, a, b, null, c, this.j, d, this.o))
    }
};
var vB = function(a, b) {
    a & 48 && (b ^= 4);
    a & 192 && (b ^= 1);
    return b
};
var wB = function(a, b, c, d) {
    uB.call(this, a, b, c || d);
    (c || d) && this.c(65 | (d ? 32 : 132))
};
A(wB, uB);
var xB = function(a, b) {
    this.b = a instanceof Uk ? a : new Uk(a, b)
};
A(xB, Rt);
xB.prototype.a = function(a, b, c, d) {
    var e = $k(a);
    var f = e.body;
    e = e.documentElement;
    e = new Uk(f.scrollLeft || e.scrollLeft, f.scrollTop || e.scrollTop);
    f = this.b.b + e.b;
    e = this.b.a + e.a;
    var g = Nt(a);
    f -= g.b;
    e -= g.a;
    Pt(new Uk(f, e), a, b, c, null, null, d)
};
var yB = function(a, b) {
    xB.call(this, a, b)
};
A(yB, xB);
yB.prototype.g = 0;
yB.prototype.c = $e("g");
yB.prototype.a = function(a, b, c, d) {
    var e = Hr(a);
    e = Lr(e);
    var f = il(al(a).a);
    f = new Uk(this.b.b + f.scrollLeft, this.b.a + f.scrollTop);
    var g = b,
        l = Pt(f, a, g, c, e, 10, d);
    if (0 != (l & 496)) {
        if (l & 16 || l & 32) g ^= 4;
        if (l & 64 || l & 128) g ^= 1;
        l = Pt(f, a, g, c, e, 10, d);
        0 != (l & 496) && Pt(f, a, b, c, e, this.g, d)
    }
};
var zB = function(a, b, c) {
    Y.call(this, c);
    this.qc = b || kB.J();
    this.$c = a || pB()
};
A(zB, Y);
w = zB.prototype;
w.ud = null;
w.Od = null;
w.qc = null;
w.$c = null;
w.rc = !0;
w.Rc = !0;
w.Oc = !0;
w.ya = -1;
w.Ua = null;
w.vc = !1;
w.fc = null;
var AB = function(a) {
        return a.ud || a.l()
    },
    DB = function(a, b) {
        if (a.Oc) {
            var c = AB(a),
                d = a.va;
            a.ud = b;
            var e = AB(a);
            d && (a.ud = c, BB(a, !1), a.ud = b, Js(CB(a), e), BB(a, !0))
        } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    },
    CB = function(a) {
        return a.Od || (a.Od = new Ks(AB(a)))
    };
w = zB.prototype;
w.sa = function() {
    this.D = this.qc.o(this)
};
w.Lb = function() {
    return this.qc.g(this.l())
};
w.md = function(a) {
    return this.qc.a(a)
};
w.Z = function(a) {
    this.D = this.qc.S(this, a);
    a.style.display == Cd && (this.rc = !1)
};
w.W = function() {
    zB.w.W.call(this);
    xs(this, function(a) {
        a.va && EB(this, a)
    }, this);
    var a = this.l();
    this.qc.j(this);
    this.setVisible(this.rc, !0);
    Z(this).G(this, "enter", this.yg).G(this, Oc, this.Md).G(this, Pe, this.og).G(this, "open", this.Jk).G(this, "close", this.lk).G(a, wd, this.Ya).G($k(a), Ad, this.Ak).G(a, [wd, Ad, zd, yd, zb], this.qk);
    this.Oc && BB(this, !0)
};
var BB = function(a, b) {
    var c = Z(a),
        d = AB(a);
    b ? c.G(d, Qb, a.Th).G(d, kb, a.Qe).G(CB(a), jd, a.Sa) : c.Aa(d, Qb, a.Th).Aa(d, kb, a.Qe).Aa(CB(a), jd, a.Sa)
};
w = zB.prototype;
w.hb = function() {
    this.cc(-1);
    this.Ua && this.Ua.Na(!1);
    this.vc = !1;
    zB.w.hb.call(this)
};
w.N = function() {
    zB.w.N.call(this);
    this.Od && (this.Od.Ba(), this.Od = null);
    this.qc = this.Ua = this.fc = this.ud = null
};
w.yg = v(!0);
w.Md = function(a) {
    var b = Cs(this, a.target);
    if (-1 < b && b != this.ya) {
        var c = qA(this);
        c && zt(c, !1);
        this.ya = b;
        c = qA(this);
        this.vc && yt(c, !0);
        this.Ua && c != this.Ua && (ht(c, 64) ? c.Na(!0) : this.Ua.Na(!1))
    }
    b = this.l();
    null != a.target.l() && Us(b, Za, a.target.l().id)
};
w.og = function(a) {
    a.target == qA(this) && (this.ya = -1);
    this.l().removeAttribute(db)
};
w.Jk = function(a) {
    (a = a.target) && a != this.Ua && a.getParent() == this && (this.Ua && this.Ua.Na(!1), this.Ua = a)
};
w.lk = function(a) {
    a.target == this.Ua && (this.Ua = null);
    var b = this.l(),
        c = a.target.l();
    b && a.target.Ha(2) && c && Xs(b, c)
};
w.Ya = function(a) {
    this.Rc && (this.vc = !0);
    var b = AB(this);
    b && Nl(b) && Ol(b) ? b.focus() : a.preventDefault()
};
w.Ak = function() {
    this.vc = !1
};
w.qk = function(a) {
    a: {
        var b = a.target;
        if (this.fc)
            for (var c = this.l(); b && b !== c;) {
                var d = b.id;
                if (d in this.fc) {
                    b = this.fc[d];
                    break a
                }
                b = b.parentNode
            }
        b = null
    }
    if (b) switch (a.type) {
        case wd:
            b.Ya(a);
            break;
        case Ad:
            b.jb(a);
            break;
        case zd:
            b.rg(a);
            break;
        case yd:
            b.Ag(a);
            break;
        case zb:
            b.Rd(a)
    }
};
w.Th = Ze();
w.Qe = function() {
    this.cc(-1);
    this.vc = !1;
    this.Ua && this.Ua.Na(!1)
};
w.Sa = function(a) {
    return this.isEnabled() && this.isVisible() && (0 != ys(this) || this.ud) && this.Nd(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
w.Nd = function(a) {
    var b = qA(this);
    if (b && typeof b.Sa == Ub && b.Sa(a) || this.Ua && this.Ua != b && typeof this.Ua.Sa == Ub && this.Ua.Sa(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.Oc) AB(this).blur();
            else return !1;
            break;
        case 36:
            FB(this);
            break;
        case 35:
            GB(this);
            break;
        case 38:
            if (this.$c == Qe) HB(this);
            else return !1;
            break;
        case 37:
            if (this.$c == Pc) Bs(this) ? IB(this) : HB(this);
            else return !1;
            break;
        case 40:
            if (this.$c == Qe) IB(this);
            else return !1;
            break;
        case 39:
            if (this.$c == Pc) Bs(this) ?
                HB(this) : IB(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};
var EB = function(a, b) {
    var c = b.l();
    c = c.id || (c.id = ss(b));
    a.fc || (a.fc = {});
    a.fc[c] = b
};
zB.prototype.Mc = function(a, b, c) {
    a.Vd |= 2;
    a.Vd |= 64;
    a.Fa(32, !1);
    tt(a, !1);
    var d = a.getParent() == this ? Cs(this, a) : -1;
    zB.w.Mc.call(this, a, b, c);
    a.va && this.va && EB(this, a);
    a = d; - 1 == a && (a = ys(this));
    a == this.ya ? this.ya = Math.min(ys(this) - 1, b) : a > this.ya && b <= this.ya ? this.ya++ : a < this.ya && b > this.ya && this.ya--
};
zB.prototype.removeChild = function(a, b) {
    if (a = mf(a) ? us(this, a) : a) {
        var c = Cs(this, a); - 1 != c && (c == this.ya ? (zt(a, !1), this.ya = -1) : c < this.ya && this.ya--);
        var d = a.l();
        d && d.id && this.fc && (c = this.fc, d = d.id, d in c && delete c[d])
    }
    a = zB.w.removeChild.call(this, a, b);
    tt(a, !0);
    return a
};
var nB = function(a, b) {
    if (a.l()) throw Error(Ba);
    a.$c = b
};
zB.prototype.isVisible = u("rc");
zB.prototype.setVisible = function(a, b) {
    if (b || this.rc != a && this.dispatchEvent(a ? de : Nc)) {
        this.rc = a;
        var c = this.l();
        c && (X(c, a), this.Oc && lB(AB(this), this.Rc && this.rc), b || this.dispatchEvent(this.rc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
zB.prototype.isEnabled = u("Rc");
zB.prototype.ea = function(a) {
    this.Rc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Rc = !0, xs(this, function(a) {
        a.hj ? delete a.hj : a.ea(!0)
    })) : (xs(this, function(a) {
        a.isEnabled() ? a.ea(!1) : a.hj = !0
    }), this.vc = this.Rc = !1), this.Oc && lB(AB(this), a && this.rc))
};
var JB = function(a, b) {
    b != a.Oc && a.va && BB(a, b);
    a.Oc = b;
    a.Rc && a.rc && lB(AB(a), b)
};
zB.prototype.cc = function(a) {
    (a = As(this, a)) ? zt(a, !0): -1 < this.ya && zt(qA(this), !1)
};
var qA = function(a) {
        return As(a, a.ya)
    },
    FB = function(a) {
        KB(a, function(a, c) {
            return (a + 1) % c
        }, ys(a) - 1)
    },
    GB = function(a) {
        KB(a, function(a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    },
    IB = function(a) {
        KB(a, function(a, c) {
            return (a + 1) % c
        }, a.ya)
    },
    HB = function(a) {
        KB(a, function(a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.ya)
    },
    KB = function(a, b, c) {
        c = 0 > c ? Cs(a, a.Ua) : c;
        var d = ys(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var f = As(a, c);
            if (f && a.wh(f)) {
                a.cc(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    };
zB.prototype.wh = function(a) {
    return a.isVisible() && a.isEnabled() && ht(a, 2)
};
var LB = Ze();
A(LB, Ys);
rf(LB);
LB.prototype.T = v(dc);
var MB = function(a, b, c) {
    rt.call(this, a, c || LB.J(), b);
    this.Fa(1, !1);
    this.Fa(2, !1);
    this.Fa(4, !1);
    this.Fa(32, !1);
    this.Fc = 1
};
A(MB, rt);
pt(dc, function() {
    return new MB(null)
});
var NB = function(a) {
    rB.call(this, qB.J(), a)
};
A(NB, rB);
pt(gc, function() {
    return new rB
});
var OB = function(a, b) {
    zB.call(this, Qe, b || sB.J(), a);
    JB(this, !1)
};
A(OB, zB);
OB.prototype.K = !0;
OB.prototype.T = function() {
    return this.qc.T()
};
var PB = function(a, b) {
    if (El(a.l(), b)) return !0;
    for (var c = 0, d = ys(a); c < d; c++) {
        var e = As(a, c);
        if (typeof e.vg == Ub && e.vg(b)) return !0
    }
    return !1
};
w = OB.prototype;
w.Oa = function() {
    return ys(this)
};
w.setVisible = function(a, b, c) {
    (b = OB.w.setVisible.call(this, a, b)) && a && this.va && this.K && AB(this).focus();
    a && c && nf(c.clientX) ? this.V = new Uk(c.clientX, c.clientY) : this.V = null;
    return b
};
w.yg = function(a) {
    this.K && AB(this).focus();
    return OB.w.yg.call(this, a)
};
w.ii = function(a) {
    var b = new RegExp("^" + xg(a), "i");
    KB(this, function(a, d) {
        var c = 0 > a ? 0 : a,
            f = !1;
        do {
            ++a;
            a == d && (a = 0, f = !0);
            var g = As(this, a).Va();
            if (g && g.match(b)) return a
        } while (!f || a != c);
        return this.ya
    }, this.ya)
};
w.wh = function(a) {
    return a.isEnabled() && a.isVisible() && ht(a, 2)
};
w.Z = function(a) {
    for (var b = this.qc, c = bl(this.a.a, k, b.T() + fa, a), d = c.length, e = 0; e < d; e++) oB(b, this, c[e]);
    OB.w.Z.call(this, a)
};
w.Nd = function(a) {
    var b = OB.w.Nd.call(this, a);
    b || xs(this, function(c) {
        !b && c.ik && c.wi == a.keyCode && (this.isEnabled() && this.cc(Cs(this, c)), b = c.Sa(a))
    }, this);
    return b
};
w.cc = function(a) {
    OB.w.cc.call(this, a);
    (a = As(this, a)) && Or(a.l(), this.l())
};
var QB = function(a, b) {
    OB.call(this, a, b);
    this.K = !0;
    JB(this, !0);
    this.setVisible(!1, !0);
    this.b = new nm
};
A(QB, OB);
w = QB.prototype;
w.Zi = !1;
w.oi = 0;
w.gb = null;
w.Z = function(a) {
    QB.w.Z.call(this, a);
    (a = a.getAttribute("for") || a.htmlFor) && RB(this, this.a.l(a), 1)
};
w.W = function() {
    QB.w.W.call(this);
    this.b.forEach(this.ve, this);
    var a = Z(this);
    a.G(this, n, this.Og);
    a.G(this.a.a, wd, this.xa, !0)
};
var RB = function(a, b, c, d, e, f) {
    b && qm(a.b, zf(b)) || (c = a.Xf(b, c, d, e, f), a.va && a.ve(c), b = Cf(a.Gl, b), a.l() && Z(a).G(a.l(), kd, b))
};
w = QB.prototype;
w.Gl = function(a, b) {
    if (27 == b.keyCode) a.focus();
    else if (a = As(this, this.ya)) {
        a = a.l();
        var c = new Ai(b.a, a);
        c.target = a;
        if (32 == b.keyCode || 13 == b.keyCode) Ei(a) ? bj(a, kd, !1, c) : $i(a, kd, !1, c);
        32 == b.keyCode && this.sc()
    }
};
w.Xf = function(a, b, c, d, e) {
    if (!a) return null;
    b = {
        D: a,
        Ui: b,
        ll: c,
        Nc: d ? zb : wd,
        pf: e
    };
    this.b.set(zf(a), b);
    return b
};
w.ve = function(a) {
    Z(this).G(a.D, a.Nc, this.rf);
    a.Nc != zb && Z(this).G(a.D, kd, this.Jl)
};
w.Ce = function() {
    if (this.va)
        for (var a = this.b.Db(), b = 0; b < a.length; b++) this.ag(this.b.get(a[b]));
    this.b.Qc()
};
w.ag = function(a) {
    Z(this).Aa(a.D, a.Nc, this.rf)
};
w.Ze = function(a, b, c) {
    b = y(a.Ui) ? new uB(a.D, a.Ui, !0) : new yB(b, c);
    b.c && b.c(5);
    var d = a.ll;
    c = a.pf;
    var e = a.D;
    a = this.isVisible();
    var f;
    (f = this.isVisible()) || (f = 150 > Df() - this.oi);
    f && this.Zi ? this.sc() : (this.gb = e || null, this.dispatchEvent(ib) && (d = "undefined" != typeof d ? d : 8, a || (this.l().style.visibility = Mc), X(this.l(), !0), b.a(this.l(), d, c), a || (this.l().style.visibility = Se), this.cc(-1), this.setVisible(!0)))
};
w.sc = function() {
    this.isVisible() && (this.setVisible(!1), this.isVisible() || (this.oi = Df(), this.gb = null))
};
w.Og = function() {
    this.sc()
};
w.rf = function(a) {
    SB(this, a)
};
w.Jl = function(a) {
    32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || SB(this, a);
    40 == a.keyCode && FB(this)
};
var SB = function(a, b) {
    for (var c = a.b.Db(), d = 0; d < c.length; d++) {
        var e = a.b.get(c[d]);
        if (e.D == b.currentTarget) {
            a.Ze(e, b.clientX, b.clientY);
            b.preventDefault();
            b.stopPropagation();
            break
        }
    }
};
QB.prototype.xa = function(a) {
    this.isVisible() && !PB(this, a.target) && this.sc()
};
QB.prototype.Qe = function(a) {
    QB.w.Qe.call(this, a);
    this.sc()
};
QB.prototype.N = function() {
    QB.w.N.call(this);
    this.b && (this.b.Qc(), delete this.b)
};
var TB = function(a, b, c, d, e) {
    return new SA(a, b, {
        opacity: d
    }, {
        opacity: e
    }, {
        Nl: "opacity",
        duration: b,
        timing: c,
        Ac: 0
    })
};
var UB = function(a) {
    M.call(this);
    this.D = a;
    a = F ? Sb : kb;
    this.a = L(this.D, F ? Rb : Qb, this, !F);
    this.b = L(this.D, a, this, !F)
};
A(UB, M);
UB.prototype.handleEvent = function(a) {
    var b = new Ai(a.a);
    b.type = a.type == Rb || a.type == Qb ? Rb : Sb;
    this.dispatchEvent(b)
};
UB.prototype.N = function() {
    UB.w.N.call(this);
    Xi(this.a);
    Xi(this.b);
    delete this.D
};
var VB = function(a, b) {
    this.b = a instanceof Uk ? a : new Uk(a, b)
};
A(VB, Rt);
VB.prototype.a = function(a, b, c, d) {
    Qt(Hr(a), 0, a, b, this.b, c, null, d)
};
var WB = function() {
        this.a = new nm
    },
    XB = function(a) {
        var b = typeof a;
        return b == Ed && a || b == Ub ? "o" + zf(a) : b.substr(0, 1) + a
    };
WB.prototype.add = function(a) {
    this.a.set(XB(a), a)
};
WB.prototype.contains = function(a) {
    return qm(this.a, XB(a))
};
WB.prototype.fb = function() {
    return this.a.fb()
};
WB.prototype.yb = function() {
    return this.a.yb(!1)
};
var ZB = function(a, b, c) {
    this.L = c || (a ? al(N(a)) : al());
    YA.call(this, this.L.b(k, {
        style: "position:absolute;display:none;"
    }));
    this.U = new Uk(1, 1);
    this.o = new WB;
    this.C = null;
    a && YB(this, a);
    null != b && this.ma(b)
};
A(ZB, YA);
var $B = [];
ZB.prototype.b = null;
ZB.prototype.className = "goog-tooltip";
ZB.prototype.X = 500;
var YB = function(a, b) {
        b = N(b);
        a.o.add(b);
        L(b, zd, a.aa, !1, a);
        L(b, yd, a.K, !1, a);
        L(b, xd, a.ra, !1, a);
        L(b, Qb, a.Y, !1, a);
        L(b, kb, a.K, !1, a)
    },
    bC = function(a, b) {
        if (b) b = N(b), aC(a, b), rm(a.o.a, XB(b));
        else {
            for (var c = a.o.fb(), d = 0; b = c[d]; d++) aC(a, b);
            a.o.a.Qc()
        }
    },
    aC = function(a, b) {
        Wi(b, zd, a.aa, !1, a);
        Wi(b, yd, a.K, !1, a);
        Wi(b, xd, a.ra, !1, a);
        Wi(b, Qb, a.Y, !1, a);
        Wi(b, kb, a.K, !1, a)
    };
ZB.prototype.ma = function(a) {
    Q(this.l(), a)
};
ZB.prototype.Qd = function(a) {
    var b = this.l();
    b && xl(b);
    ZB.w.Qd.call(this, a);
    a ? (b = this.L.a.body, b.insertBefore(a, b.lastChild), wi(this.C), this.C = new UB(this.l()), xi(this, this.C), L(this.C, Rb, this.B, void 0, this), L(this.C, Sb, this.R, void 0, this)) : (wi(this.C), this.C = null)
};
var cC = function(a) {
    return a.j ? a.isVisible() ? 4 : 1 : a.I ? 3 : a.isVisible() ? 2 : 0
};
ZB.prototype.Pg = function() {
    if (!TA.prototype.Pg.call(this)) return !1;
    if (this.a)
        for (var a, b = 0; a = $B[b]; b++) El(a.l(), this.a) || a.setVisible(!1);
    Qf($B, this);
    a = this.l();
    a.className = this.className;
    this.B();
    L(a, zd, this.Ea, !1, this);
    L(a, yd, this.xa, !1, this);
    dC(this);
    return !0
};
ZB.prototype.wg = function() {
    Sf($B, this);
    for (var a = this.l(), b, c = 0; b = $B[c]; c++) b.a && El(a, b.a) && b.setVisible(!1);
    this.Ma && this.Ma.R();
    Wi(a, zd, this.Ea, !1, this);
    Wi(a, yd, this.xa, !1, this);
    this.a = void 0;
    0 == cC(this) && (this.O = !1);
    TA.prototype.wg.call(this)
};
ZB.prototype.Ja = function(a, b) {
    this.a == a && this.o.contains(this.a) && (this.O || !this.Ra ? (this.setVisible(!1), this.isVisible() || eC(this, a, b)) : this.a = void 0);
    this.j = void 0
};
var eC = function(a, b, c) {
    a.a = b;
    b = c || a.V(0);
    a.M = b || void 0;
    a.isVisible() && a.A();
    a.setVisible(!0)
};
ZB.prototype.La = function(a) {
    this.I = void 0;
    if (a == this.a) {
        a = this.L;
        a: {
            var b = a.a;
            try {
                var c = b && b.activeElement;
                break a
            } catch (d) {}
            c = null
        }
        c = c && this.l() && a.contains(this.l(), c);
        null != this.b && (this.b == this.l() || this.o.contains(this.b)) || c || this.wa && this.wa.b || this.setVisible(!1)
    }
};
var fC = function(a, b) {
    var c = jl(a.L.a);
    a.U.b = b.clientX + c.b;
    a.U.a = b.clientY + c.a
};
ZB.prototype.aa = function(a) {
    var b = gC(this, a.target);
    this.b = b;
    this.B();
    b != this.a && (this.a = b, this.j || (this.j = Mj(z(this.Ja, this, b, void 0), this.X)), hC(this), fC(this, a))
};
var gC = function(a, b) {
    try {
        for (; b && !a.o.contains(b);) b = b.parentNode;
        return b
    } catch (c) {
        return null
    }
};
ZB.prototype.ra = function(a) {
    fC(this, a);
    this.O = !0
};
ZB.prototype.Y = function(a) {
    this.b = a = gC(this, a.target);
    this.O = !0;
    if (this.a != a) {
        this.a = a;
        var b = this.V(1);
        this.B();
        this.j || (this.j = Mj(z(this.Ja, this, a, b), this.X));
        hC(this)
    }
};
ZB.prototype.V = function(a) {
    return 0 == a ? new iC(Vk(this.U)) : new jC(this.b)
};
var hC = function(a) {
    if (a.a)
        for (var b, c = 0; b = $B[c]; c++) El(b.l(), a.a) && (b.wa = a, a.Ma = b)
};
ZB.prototype.K = function(a) {
    var b = gC(this, a.target),
        c = gC(this, a.relatedTarget);
    b != c && (b == this.b && (this.b = null), dC(this), this.O = !1, !this.isVisible() || a.relatedTarget && El(this.l(), a.relatedTarget) ? this.a = void 0 : this.R())
};
ZB.prototype.Ea = function() {
    var a = this.l();
    this.b != a && (this.B(), this.b = a)
};
ZB.prototype.xa = function(a) {
    var b = this.l();
    this.b != b || a.relatedTarget && El(b, a.relatedTarget) || (this.b = null, this.R())
};
var dC = function(a) {
    a.j && (Nj(a.j), a.j = void 0)
};
ZB.prototype.R = function() {
    2 == cC(this) && (this.I = Mj(z(this.La, this, this.a), 0))
};
ZB.prototype.B = function() {
    this.I && (Nj(this.I), this.I = void 0)
};
ZB.prototype.N = function() {
    this.setVisible(!1);
    dC(this);
    bC(this);
    this.l() && xl(this.l());
    this.b = null;
    delete this.L;
    ZB.w.N.call(this)
};
var iC = function(a, b) {
    VB.call(this, a, b)
};
A(iC, VB);
iC.prototype.a = function(a, b, c) {
    b = Hr(a);
    b = Lr(b);
    c = c ? new zr(c.top + 10, c.right, c.bottom, c.left + 10) : new zr(10, 0, 0, 10);
    Pt(this.b, a, 8, c, b, 9) & 496 && Pt(this.b, a, 8, c, b, 5)
};
var jC = function(a) {
    tB.call(this, a, 5)
};
A(jC, tB);
jC.prototype.a = function(a, b, c) {
    var d = new Uk(10, 0);
    Qt(this.b, this.g, a, b, d, c, 9) & 496 && Qt(this.b, 4, a, 1, d, c, 5)
};
var kC = function(a, b, c, d, e) {
    d = d || (b ? al(N(b)) : al());
    this.c = a;
    d.a.body.appendChild(this.c.l());
    X(this.c.l(), !1);
    this.className = au();
    ZB.call(this, b, c, d);
    xi(this, this.c);
    this.Qd(this.c.l());
    a = TB(this.c.l(), .13, "ease-out", 0, 1);
    b = TB(this.c.l(), .13, "ease-in", 1, 0);
    this.v = a;
    this.m = b;
    this.H = new St(au(), !0);
    Tt(this.H, null != e ? e : 1, void 0, -1);
    e = this.H;
    a = this.c.c;
    e.c = this.c.l();
    e.j = a;
    this.H.hf = !0;
    this.X = 300
};
A(kC, ZB);
kC.prototype.V = function() {
    this.H.b = this.b;
    return this.H
};
kC.prototype.ma = function(a) {
    Q(this.c.a, a)
};
var lC = function(a, b, c, d) {
    c = c || (a ? al(N(a)) : al());
    var e = new bu(c);
    kC.call(this, e, a, b, c, d)
};
A(lC, kC);
var mC = function(a, b, c) {
    QB.call(this, b, c);
    this.A = new nm;
    this.g = a || 5;
    this.B = null;
    this.I = !1;
    this.m = Array(this.g);
    this.R = Array(this.g);
    this.O = Ko.J();
    this.F = ro.J();
    this.U = this.v = this.j = null;
    this.Zi = !0
};
A(mC, QB);
var nC = "",
    oC = "";
mC.prototype.sa = function() {
    mC.w.sa.call(this);
    for (var a = 0; a < this.g; ++a) zs(this, new jB(""), !0);
    "" != oC && (this.v = new jB(oC), ut(this.v, "gt-edit-menuitem"), zs(this, this.v, !0))
};
mC.prototype.ia = function(a) {
    mC.w.ia.call(this, a);
    U(this.l(), "alt-menu")
};
mC.prototype.Wg = function(a) {
    a = this.A.get(zf(a));
    for (var b = 0; b < H(a, 2) && b < this.g; ++b) {
        var c = As(this, b);
        c.g(I(Wq(a, b), 0));
        c.X = b;
        c.setVisible(!0, !0)
    }
    for (; b < this.g; ++b) As(this, b).setVisible(!1);
    this.v && this.v.setVisible(!0, !0)
};
var pC = function(a, b, c) {
    a.A.set(zf(b), c);
    RB(a, b, 9, 8, !1, new zr(-2, 1, -2, 1))
};
w = mC.prototype;
w.Ce = function() {
    mC.w.Ce.call(this);
    null != this.j && bC(this.j);
    this.A.Qc()
};
w.setVisible = function(a, b) {
    var c = this.gb;
    this.U = c;
    if (a && null != c) {
        qC(this, c);
        To(this.O, "altshow");
        var d = this.F;
        R(d, S(d, 207))
    } else null != this.B && cB(this.B, 0, 0);
    null != c && (a ? this.Zf(c) : this.Vf(c));
    b = mC.w.setVisible.call(this, a, b);
    a && null != this.l() && bs(this.l(), !1);
    return b
};
w.Va = function() {
    if (null != this.U) {
        var a = Ql(this.U);
        if (null != a) return a
    }
    return ""
};
w.sc = function() {
    mC.w.sc.call(this);
    if (this.I)
        for (var a = 0; a < this.m.length; a++) {
            var b = this.m[a];
            Nj(b.j);
            b.o();
            b.C(-1);
            b.o();
            b.setVisible(!1)
        }
};
w.Zf = function(a) {
    U(a, "trans-target");
    null === this.j ? a.title = "" : bC(this.j, a)
};
w.Vf = function(a) {
    V(a, "trans-target");
    null === this.j ? a.title = nC : YB(this.j, a)
};
w.Sa = function(a) {
    if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
    var b = mC.w.Sa.call(this, a);
    if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
        var c = $r(this.gb.parentNode.parentNode),
            d = null;
        if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
        if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
        if (this.Nf(d) && (c = this.gb, (c = d ? Bl(c) : y(c.previousElementSibling) ? c.previousElementSibling : zl(c.previousSibling, !1)) && c != this.gb)) return this.sc(), this.Ni(d), this.Ze(c ? this.b.get(zf(c)) : null, 0, 0), rC(this), a.preventDefault(),
            a.stopPropagation(), !0
    }
    return b
};
w.Ze = function(a, b, c) {
    $r((a.D || this.gb).parentNode.parentNode) ? W(this.l(), Hb, Vd) : W(this.l(), Hb, "");
    if (this.I)
        for (var d = 0; d < this.m.length; d++) sC(this, d), Q(this.m[d].c, "...");
    this.Wg(a.D);
    mC.w.Ze.call(this, a, b, c)
};
var tC = function(a, b, c) {
        !a.I || b >= a.g || "" == c || (Q(a.m[b].c, c), sC(a, b))
    },
    sC = function(a, b) {
        Qt(As(a, b).l(), 12, a.m[b].l(), 8, new Uk(1, 0))
    };
w = mC.prototype;
w.Md = function(a) {
    mC.w.Md.call(this, a);
    var b = this.gb;
    if (null != b) {
        To(this.O, "altmenuhl");
        var c = this.F;
        R(c, S(c, 209));
        qC(this, b);
        a = this.Ie(a.target); - 1 != a && a != this.g && (Nj(this.R[a]), this.R[a] = Mj(this.il, 300, this), this.I && (b = this.m[a], $r(this.gb.parentNode.parentNode) ? (U(b.l(), Vd), W(b.l(), Hb, Vd)) : (V(b.l(), Vd), W(b.l(), Hb, "")), sC(this, a), Nj(b.j), 0 == b.a ? b.j = Mj(z(b.C, b, 1), 300) : b.C(1)))
    }
};
w.il = function() {
    To(this.O, "altmenuhold");
    var a = this.F;
    R(a, S(a, 208))
};
w.og = function(a) {
    mC.w.og.call(this, a);
    a = this.Ie(a.target); - 1 != a && a != this.g && (Nj(this.R[a]), this.I && this.m[a].H())
};
w.Ie = function(a) {
    return Cs(this, a)
};
w.Nf = v(!0);
w.Ni = Ze();
w.Xf = function(a, b, c, d, e) {
    (a = mC.w.Xf.call(this, a, b, c, d, e)) && a.Nc == wd && (a.Nc = r);
    return a
};
w.ve = function(a) {
    mC.w.ve.call(this, a);
    Z(this).G(a.D, zd, this.ra);
    Z(this).G(a.D, yd, this.M);
    Z(this).G(a.D, zb, this.aa);
    Z(this).G(a.D, xd, this.ma)
};
w.ag = function(a) {
    mC.w.ag.call(this, a);
    Z(this).Aa(a.D, zd, this.ra);
    Z(this).Aa(a.D, yd, this.M);
    Z(this).Aa(a.D, zb, this.aa);
    Z(this).Aa(a.D, xd, this.ma)
};
var qC = function(a, b) {
        if (null != a.B && (b = a.A.get(zf(b))) && (a = a.B, a.b))
            for (var c = a.D && (a.D.value || Ql(a.D)), d = -1, e = -1, f = !1, g = 0; g < H(a.b, 5); g++) {
                var l = $q(a.b, g);
                if (0 != H(l, 2) && (0 == ji(l, 5) && (f = c.indexOf(I(l, 4), e + 1), 0 <= f ? (d = f, e = d + I(l, 4).length, f = !0) : f = !1), $q(a.b, g).nb() == b.nb())) {
                    if (f) {
                        c = [];
                        for (e = 0; e < H(b, 3); ++e) c.push({
                            Hd: d + ji(Xq(b, e), 0),
                            dh: d + ji(Xq(b, e), 1)
                        });
                        cB(a, 0, 0, void 0, c)
                    } else d = c.indexOf(I(b, 0)), 0 <= d && cB(a, d, d + I(b, 0).length);
                    break
                }
            }
    },
    uC = function(a, b) {
        b ? mm(a.b.yb(!1), function(a) {
            "" == this.a.Ph(a.D) && (U(a.D,
                He), this.a.Ne(a.D, "_"));
            return !0
        }, a) : mm(a.b.yb(!1), function(a) {
            mr(a.D, He) && (V(a.D, He), this.a.Ne(a.D, ""));
            return !0
        }, a)
    };
mC.prototype.ra = function(a) {
    Gz() || (U(a.target, Ie), qC(this, a.target), uC(this, !0), To(this.O, "althighlight"), a = this.F, R(a, S(a, 206)))
};
mC.prototype.M = function(a) {
    V(a.target, Ie);
    null == this.B || this.isVisible() || cB(this.B, 0, 0);
    uC(this, !1)
};
mC.prototype.ma = function(a) {
    Gz() && this.M(a)
};
mC.prototype.aa = function(a) {
    Gz() || (this.M(a), tz(a.target, void 0).select())
};
var rC = function(a) {
    mm(a.b.yb(!1), function(a) {
        V(a.D, Ie);
        return !0
    }, a)
};
mC.prototype.Og = function(a) {
    a && a.currentTarget && a.currentTarget.gb && (a.Oj = a.currentTarget.gb);
    mC.w.Og.call(this, a)
};
mC.prototype.rf = function(a) {
    Gz() ? rC(this) : mC.w.rf.call(this, a)
};
var vC = function(a, b, c) {
    this.Y = this.c = null;
    mC.call(this, a, b, c)
};
A(vC, mC);
w = vC.prototype;
w.Ni = $e("c");
w.setVisible = function(a, b) {
    b = vC.w.setVisible.call(this, a, b);
    this.c = null;
    a ? this.Y = this.Va() : null != this.Y && this.Y != this.Va() && this.dispatchEvent(new J(n, this));
    return b
};
w.Zf = function(a) {
    vC.w.Zf.call(this, a);
    U(a, "trans-edit");
    a.contentEditable = !0;
    DB(this, a);
    AB(this).focus();
    Ml(AB(this), !0);
    Z(this).G(a, kd, this.bi);
    Z(this).G(a, yd, this.cf);
    Z(this).G(a, zd, this.cf);
    if (null != this.c) {
        a = tz(a, void 0);
        var b = this.c ? a.Gb() : a.$b(),
            c = Yy(a);
        a = c;
        var d = b,
            e = new rz;
        e.g = Bz(a, d, c, b);
        if (Cl(a) && !sl(a)) {
            var f = a.parentNode;
            d = Hf(f.childNodes, a);
            a = f
        }
        Cl(c) && !sl(c) && (f = c.parentNode, b = Hf(f.childNodes, c), c = f);
        e.g ? (e.a = c, e.j = b, e.b = a, e.c = d) : (e.a = a, e.j = d, e.b = c, e.c = b);
        e.select()
    }
};
w.Vf = function(a) {
    vC.w.Vf.call(this, a);
    V(a, "trans-edit");
    a.contentEditable = !1;
    AB(this) && Ml(AB(this), !1);
    Z(this).Aa(a, kd, this.bi);
    Z(this).Aa(a, yd, this.cf);
    Z(this).Aa(a, zd, this.cf)
};
w.cf = function() {
    var a = Fz();
    null == a || a.Fb() == a.Zb() && a.Gb() == a.$b() || this.setVisible(a.Fb() == a.Zb())
};
w.bi = function(a) {
    for (var b = 0; b < this.g; ++b) As(this, b).setVisible(!1);
    this.v && this.v.setVisible(!1);
    if (13 == a.keyCode || 3 == a.keyCode) return null === qA(this) ? (this.sc(), a.stopPropagation(), a.preventDefault(), !0) : !1;
    null === qA(this) || !Es(a) && 37 != a.keyCode && 39 != a.keyCode || (this.gb.focus(), this.cc(Cs(this, null)));
    return !1
};
w.Nf = function(a) {
    var b = Fz();
    if (b.Fb() == b.Zb() && b.Gb() == b.$b()) {
        var c = b.Fg() ? b.Gb() : b.$b();
        b = tz(Yy(b), void 0);
        if (!a && c == b.Gb() || a && c == b.$b()) return !0
    }
    return !1
};
var wC = function(a, b, c) {
    mC.call(this, a, b, c);
    this.c = null
};
A(wC, mC);
w = wC.prototype;
w.ia = function(a) {
    wC.w.ia.call(this, a);
    this.c = new xC("");
    zs(this, this.c, !0)
};
w.Wg = function(a) {
    wC.w.Wg.call(this, a);
    this.c.l().firstChild.value = this.a.Ph(a)
};
w.setVisible = function(a, b) {
    b = wC.w.setVisible.call(this, a, b);
    a && null != this.l() && (AB(this) == this.c.l().firstChild || AB(this) == this.c.l().firstChild.nextSibling) && zt(this.c, !0);
    return b
};
w.Md = function(a) {
    wC.w.Md.call(this, a);
    a.target == this.c ? DB(this, this.c.l().firstChild) : DB(this, this.l());
    AB(this).focus();
    AB(this).tabIndex = 0
};
w.Ie = function(a) {
    return a == this.c ? -1 : wC.w.Ie.call(this, a)
};
w.Sa = function(a) {
    return 9 == a.keyCode ? (this.c.Ha(2) ? (AB(this) == this.c.l().firstChild ? DB(this, this.c.l().firstChild.nextSibling) : DB(this, this.c.l().firstChild), AB(this).focus(), AB(this).tabIndex = 0) : zt(this.c, !0), a.preventDefault(), a.stopPropagation(), !0) : wC.w.Sa.call(this, a)
};
w.Nf = function() {
    return null === qA(this) || !(qA(this) instanceof xC)
};
var xC = function(a, b, c) {
    rt.call(this, a, c || yC.J(), b);
    this.Fa(4, !1)
};
A(xC, rt);
xC.prototype.Ya = function(a) {
    a.target == this.l().firstChild.nextSibling && this.dispatchEvent(n)
};
xC.prototype.W = function() {
    xC.w.W.call(this);
    Z(this).G(this.l().firstChild, kd, function(a) {
        32 == a.keyCode && a.stopPropagation()
    })
};
xC.prototype.Va = function() {
    return this.l().firstChild.value
};
var yC = Ze();
A(yC, Ys);
rf(yC);
var zC = "",
    AC = "";
yC.prototype.Wa = function(a) {
    var b = a.a.b(Fa, {
            value: a.Da(),
            id: "alt-input-text",
            type: "text"
        }),
        c = a.a.b(Fa, {
            value: zC,
            id: "alt-input-submit",
            "class": AC,
            type: nb
        });
    return a.a.b(k, {
        id: "alt-input"
    }, b, c)
};
var BC = function(a, b, c) {
    var d = N("gt-edit"),
        e = N("gt-res-content"),
        f = N("gt-res-wrap");
    this.a = a;
    this.v = d;
    this.A = e;
    this.C = f;
    L(this.a.l(), Qb, function() {
        U(f, Qb)
    });
    L(this.a.l(), kb, function() {
        V(f, Qb)
    });
    this.c = c;
    null != this.c && L(this.c, n, this.B, !1, this);
    this.j = !1;
    this.g = null;
    this.b = !1;
    this.m = null;
    this.o = b;
    this.H = !1;
    this.F = ro.J()
};
BC.prototype.B = function() {
    this.b = !1;
    this.a.b("");
    this.a.l().focus();
    var a = this.F;
    R(a, S(a, 27));
    this.c.setVisible(!1)
};
var CC = function(a) {
    a.j = !1;
    V(a.C, "full-edit");
    X(a.A, !0);
    X(a.v, !1);
    X(a.o, a.H);
    a.a.setVisible(!1);
    a.a.Ic(!1)
};
BC.prototype.L = function(a) {
    this.b = !1;
    "" != this.a.P() && (this.c.setVisible(!0), this.a.P() != this.m && (this.b = !0));
    a()
};
var EC = function(a) {
        var b = N(Dc);
        this.g = N("gt-res-tools");
        this.a = b;
        null != this.a && ((new Gt(DC, new bv("trans-undo-button"))).S(this.a), tl(this.a, DC));
        this.b = a;
        this.c = !1
    },
    DC = "",
    FC = function(a, b) {
        b ? (U(a.g, "edit"), a.c = a.b.isVisible(), a.b.setVisible(!1)) : (V(a.g, "edit"), a.b.setVisible(a.c))
    };
var GC = function(a, b, c, d) {
    Y.call(this);
    this.b = d;
    Ko.J();
    this.c = new ru(a);
    tu(this.c, 2);
    this.m = null;
    this.v = new ru(b);
    this.j = null;
    this.B = c;
    this.A = this.g = null
};
A(GC, Y);
w = GC.prototype;
w.ea = function(a) {
    this.c.ea(a)
};
w.sa = function() {
    GC.w.sa.call(this);
    this.Z(ol(document, k))
};
w.Z = function(a) {
    GC.w.Z.call(this, a);
    null != this.b && !this.b.Ma && this.b.S(a);
    U(a, "st-wrap");
    a.appendChild(xr(Yp, {
        Bl: this.B
    }));
    this.g = O("st-stp1", a);
    a = N("st-buttons");
    this.c.ia(a);
    this.c.Ad(this);
    Z(this).G(this.c, n, this.wk);
    this.v.ia(a);
    this.v.Ad(this);
    Z(this).G(this.v, n, this.pk)
};
w.wk = function(a) {
    X(this.g, !1);
    null != this.b && this.b.setVisible(!0);
    null != this.m && this.m(a)
};
w.pk = function(a) {
    X(this.g, !1);
    null != this.j && this.j(a)
};
w.reset = function() {
    this.A && Nj(this.A);
    this.A = null;
    tu(this.c, 2);
    Wr(this.l(), 1);
    X(this.l(), !0);
    X(this.g, !0);
    null != this.b && this.b.setVisible(!1)
};
var HC = function(a, b) {
        this.b = [];
        this.a = b;
        for (var c = !0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d] | 0;
            c && e == b || (this.b[d] = e, c = !1)
        }
    },
    IC = {},
    JC = function(a) {
        if (-128 <= a && 128 > a) {
            var b = IC[a];
            if (b) return b
        }
        b = new HC([a | 0], 0 > a ? -1 : 0); - 128 <= a && 128 > a && (IC[a] = b);
        return b
    },
    MC = function(a) {
        if (isNaN(a) || !isFinite(a)) return KC;
        if (0 > a) return LC(MC(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
        return new HC(b, 0)
    },
    NC = function(a, b) {
        if (0 == a.length) throw Error("number format error: empty string");
        b = b || 10;
        if (2 > b || 36 < b) throw Error(Pd +
            b);
        if ("-" == a.charAt(0)) return LC(NC(a.substring(1), b));
        if (0 <= a.indexOf("-")) throw Error('number format error: interior "-" character');
        for (var c = MC(Math.pow(b, 8)), d = KC, e = 0; e < a.length; e += 8) {
            var f = Math.min(8, a.length - e),
                g = parseInt(a.substring(e, e + f), b);
            8 > f ? (f = MC(Math.pow(b, f)), d = OC(d, f).add(MC(g))) : (d = OC(d, c), d = d.add(MC(g)))
        }
        return d
    },
    KC = JC(0),
    PC = JC(1),
    QC = JC(16777216),
    RC = function(a) {
        if (-1 == a.a) return -RC(LC(a));
        for (var b = 0, c = 1, d = 0; d < a.b.length; d++) b += SC(a, d) * c, c *= 4294967296;
        return b
    };
HC.prototype.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error(Pd + a);
    if (TC(this)) return "0";
    if (-1 == this.a) return "-" + LC(this).toString(a);
    for (var b = MC(Math.pow(a, 6)), c = this, d = "";;) {
        var e = UC(c, b);
        c = VC(c, OC(e, b));
        var f = ((0 < c.b.length ? c.b[0] : c.a) >>> 0).toString(a);
        c = e;
        if (TC(c)) return f + d;
        for (; 6 > f.length;) f = "0" + f;
        d = "" + f + d
    }
};
var WC = function(a, b) {
        return 0 > b ? 0 : b < a.b.length ? a.b[b] : a.a
    },
    SC = function(a, b) {
        a = WC(a, b);
        return 0 <= a ? a : 4294967296 + a
    },
    TC = function(a) {
        if (0 != a.a) return !1;
        for (var b = 0; b < a.b.length; b++)
            if (0 != a.b[b]) return !1;
        return !0
    },
    XC = function(a, b) {
        a = VC(a, b);
        return -1 == a.a ? -1 : TC(a) ? 0 : 1
    },
    LC = function(a) {
        for (var b = a.b.length, c = [], d = 0; d < b; d++) c[d] = ~a.b[d];
        return (new HC(c, ~a.a)).add(PC)
    };
HC.prototype.add = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0, e = 0; e <= b; e++) {
        var f = d + (WC(this, e) & 65535) + (WC(a, e) & 65535),
            g = (f >>> 16) + (WC(this, e) >>> 16) + (WC(a, e) >>> 16);
        d = g >>> 16;
        f &= 65535;
        g &= 65535;
        c[e] = g << 16 | f
    }
    return new HC(c, c[c.length - 1] & -2147483648 ? -1 : 0)
};
var VC = function(a, b) {
        return a.add(LC(b))
    },
    OC = function(a, b) {
        if (TC(a) || TC(b)) return KC;
        if (-1 == a.a) return -1 == b.a ? OC(LC(a), LC(b)) : LC(OC(LC(a), b));
        if (-1 == b.a) return LC(OC(a, LC(b)));
        if (0 > XC(a, QC) && 0 > XC(b, QC)) return MC(RC(a) * RC(b));
        for (var c = a.b.length + b.b.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
        for (e = 0; e < a.b.length; e++)
            for (var f = 0; f < b.b.length; f++) {
                var g = WC(a, e) >>> 16,
                    l = WC(a, e) & 65535,
                    m = WC(b, f) >>> 16,
                    p = WC(b, f) & 65535;
                d[2 * e + 2 * f] += l * p;
                YC(d, 2 * e + 2 * f);
                d[2 * e + 2 * f + 1] += g * p;
                YC(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 1] += l * m;
                YC(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 2] += g * m;
                YC(d, 2 * e + 2 * f + 2)
            }
        for (e = 0; e < c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new HC(d, 0)
    },
    YC = function(a, b) {
        for (;
            (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
    },
    UC = function(a, b) {
        if (TC(b)) throw Error("division by zero");
        if (TC(a)) return KC;
        if (-1 == a.a) return -1 == b.a ? UC(LC(a), LC(b)) : LC(UC(LC(a), b));
        if (-1 == b.a) return LC(UC(a, LC(b)));
        if (30 < a.b.length) {
            if (-1 == a.a || -1 == b.a) throw Error("slowDivide_ only works with positive integers.");
            for (var c = PC; 0 >= XC(b, a);) c = ZC(c, 1), b =
                ZC(b, 1);
            var d = $C(c, 1),
                e = $C(b, 1);
            b = $C(b, 2);
            for (c = $C(c, 2); !TC(b);) {
                var f = e.add(b);
                0 >= XC(f, a) && (d = d.add(c), e = f);
                b = $C(b, 1);
                c = $C(c, 1)
            }
            return d
        }
        for (c = KC; 0 <= XC(a, b);) {
            d = Math.max(1, Math.floor(RC(a) / RC(b)));
            e = Math.ceil(Math.log(d) / Math.LN2);
            e = 48 >= e ? 1 : Math.pow(2, e - 48);
            f = MC(d);
            for (var g = OC(f, b); - 1 == g.a || 0 < XC(g, a);) d -= e, f = MC(d), g = OC(f, b);
            TC(f) && (f = PC);
            c = c.add(f);
            a = VC(a, g)
        }
        return c
    };
HC.prototype.and = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = WC(this, d) & WC(a, d);
    return new HC(c, this.a & a.a)
};
HC.prototype.or = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = WC(this, d) | WC(a, d);
    return new HC(c, this.a | a.a)
};
HC.prototype.xor = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = WC(this, d) ^ WC(a, d);
    return new HC(c, this.a ^ a.a)
};
var ZC = function(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.b.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? WC(a, f - c) << b | WC(a, f - c - 1) >>> 32 - b : WC(a, f - c);
        return new HC(e, a.a)
    },
    $C = function(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.b.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? WC(a, f + c) >>> b | WC(a, f + c + 1) << 32 - b : WC(a, f + c);
        return new HC(e, a.a)
    };
var aD = $e("a"),
    dD = function(a) {
        this.b = null;
        var b = KC;
        if (a instanceof HC) {
            if (0 != a.a || 0 > XC(a, KC) || 0 < XC(a, bD)) throw Error("The address does not look like an IPv4.");
            b = Pg(a)
        } else {
            if (!cD.test(a)) throw Error(a + aa);
            var c = a.split(".");
            if (4 != c.length) throw Error(a + aa);
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                var f = Number(e);
                e = 0 == f && dg(e) ? NaN : f;
                if (isNaN(e) || 0 > e || 255 < e || 1 != c[d].length && bg(c[d], "0")) throw Error("In " + a + ", octet " + d + " is not valid");
                e = MC(e);
                b = ZC(b, 8).or(e)
            }
        }
        this.a = b
    };
A(dD, aD);
var cD = /^[0-9.]*$/,
    bD = VC(ZC(PC, 32), PC);
dD.prototype.toString = function() {
    if (this.b) return this.b;
    for (var a = SC(this.a, 0), b = [], c = 3; 0 <= c; c--) b[c] = String(a & 255), a >>>= 8;
    return this.b = b.join(".")
};
var hD = function(a) {
    this.b = null;
    var b = KC;
    if (a instanceof HC) {
        if (0 != a.a || 0 > XC(a, KC) || 0 < XC(a, eD)) throw Error("The address does not look like a valid IPv6.");
        b = Pg(a)
    } else {
        if (!fD.test(a)) throw Error(a + ba);
        var c = a.split(":");
        if (-1 != c[c.length - 1].indexOf(".")) {
            a = SC(Pg((new dD(c[c.length - 1])).a), 0);
            var d = [];
            d.push((a >>> 16 & 65535).toString(16));
            d.push((a & 65535).toString(16));
            Rf(c, c.length - 1);
            Wf(c, d);
            a = c.join(":")
        }
        d = a.split("::");
        if (2 < d.length || 1 == d.length && 8 != c.length) throw Error(a + ba);
        if (1 < d.length) {
            c = d[0].split(":");
            d = d[1].split(":");
            1 == c.length && "" == c[0] && (c = []);
            1 == d.length && "" == d[0] && (d = []);
            var e = 8 - (c.length + d.length);
            if (1 > e) c = [];
            else {
                for (var f = [], g = 0; g < e; g++) f[g] = "0";
                c = Uf(c, f, d)
            }
        }
        if (8 != c.length) throw Error(a + " is not a valid IPv6 address");
        for (d = 0; d < c.length; d++) {
            e = NC(c[d], 16);
            if (0 > XC(e, KC) || 0 < XC(e, gD)) throw Error(c[d] + " in " + a + " is not a valid hextet.");
            b = ZC(b, 16).or(e)
        }
    }
    this.a = b
};
A(hD, aD);
var fD = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,
    gD = JC(65535),
    eD = VC(ZC(PC, 128), PC);
hD.prototype.toString = function() {
    if (this.b) return this.b;
    for (var a = [], b = 3; 0 <= b; b--) {
        var c = SC(this.a, b),
            d = c & 65535;
        a.push((c >>> 16).toString(16));
        a.push(d.toString(16))
    }
    c = b = -1;
    for (var e = d = 0, f = 0; f < a.length; f++) "0" == a[f] ? (e++, -1 == c && (c = f), e > d && (d = e, b = c)) : (c = -1, e = 0);
    0 < d && (b + d == a.length && a.push(""), a.splice(b, d, ""), 0 == b && (a = [""].concat(a)));
    return this.b = a.join(":")
};
var iD, jD = {
        http: 1,
        https: 1,
        ftp: 1
    },
    kD = function(a, b) {
        try {
            var c = pp(a)
        } catch (m) {
            return !1
        }
        if (!(a = c.b && !jD[c.b.toLowerCase()] || !c.c)) {
            c = c.c;
            a: {
                a = c.split(".");
                for (var d = 0; d < a.length; d++)
                    if (!a[d]) {
                        var e = !1;
                        break a
                    }
                if (1 < a.length) {
                    b = a[a.length - 1].toLowerCase();
                    if (!iD) {
                        try {
                            e = ci
                        } catch (m) {
                            throw Error("Variable CFG_twsfe_likelyurl_module_file has not been loaded. This is probaly due the configuration data not being properly included.");
                        }
                        a = {};
                        var f = e.ascii_tlds;
                        for (d = 0; d < f.length; d++) {
                            var g = f[d];
                            a[g.toLowerCase()] =
                                1
                        }
                        e = e.unicode_tlds;
                        for (d = 0; d < e.length; d++) g = e[d], a[g.toLowerCase()] = 1;
                        iD = a
                    }
                    e = !!iD[b]
                } else e = !b
            }
            if (!e) {
                try {
                    var l = bg(c, "[") && cg(c, "]") ? new hD(c.substring(1, c.length - 1)) : new dD(c)
                } catch (m) {
                    l = null
                }
                e = null != l
            }
            a = !e
        }
        return a ? !1 : !0
    },
    lD = function(a) {
        a = gg(a);
        if (0 <= a.search(/[\s\xa0@]/)) return !1;
        if (kD(a, !1)) return !0;
        var b = a.replace(/%([0-9A-Fa-f][0-9A-Fa-f])/g, function(a, b) {
            return String.fromCharCode(Number("0x" + b))
        });
        return kD(b, !1) ? !0 : kD("http://" + a, !0) || kD("http://" + b, !0)
    },
    mD = function() {
        var a = (new ap(window.location.href)).a,
            b = a.get("e");
        a = a.get("expid");
        var c = "";
        b && (c += "e=" + b);
        "ForceExperiment" == b && a && (c += "&expid=" + a);
        return c
    },
    nD = function() {
        var a = (new ap(window.location.href)).a.get("rurl"),
            b = "";
        a && (b += "rurl=" + a);
        return b
    },
    oD = function(a, b, c, d, e) {
        var f = ro.J();
        R(f, S(f, 39));
        c.log("pbsi", b);
        b = pp(x.location.href);
        c = b.toString();
        e && (b.g = e, 2E3 >= hg(b.toString()).length && (c = b.toString()));
        b = d + "/Login?hl=" + a + "&continue=" + hg(c);
        a = {
            target: "_top"
        };
        d = window;
        e = b instanceof lk ? b : pk("undefined" != typeof b.href ? b.href : String(b));
        b = a.target ||
            b.target;
        c = [];
        for (var g in a) switch (g) {
            case "width":
            case Kc:
            case "top":
            case rd:
                c.push(g + "=" + a[g]);
                break;
            case ve:
            case "noopener":
            case "noreferrer":
                break;
            default:
                c.push(g + "=" + (a[g] ? 1 : 0))
        }
        g = c.join(",");
        Yg() && d.navigator && d.navigator.standalone && b && "_self" != b ? (g = d.document.createElement("A"), e = e instanceof lk ? e : qk(e), g.href = mk(e), g.setAttribute(ve, b), a.noreferrer && g.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent(r, !0, !0, d, 1), g.dispatchEvent(a)) : a.noreferrer ? (g =
            d.open("", b, g), a = mk(e), g && (eh && -1 != a.indexOf(";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g.opener = null, dk("b/12014412, meta tag with sanitized URL"), a = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + sg(a) + '">', a = Gk(a, null), g.document.write(Fk(a)), g.document.close())) : (g = d.open(mk(e), b, g)) && a.noopener && (g.opener = null)
    },
    pD = function(a) {
        a = If(Gq(a), function(a) {
            return fi(a, 4)
        });
        a = Jf(a, function(a) {
            return Dq(a, 4, 0)
        });
        return Kf(a, function(a, c) {
            return a && 1 == c
        }, 0 < a.length)
    };
var qD = F || gh || ch || dh || !1;
Fh && xn("4") || Gh && wh("533") || fh && wh("2.0") || F && wh("10") || ch && Wg();
var rD = function(a, b, c, d, e, f, g, l) {
    Y.call(this, a);
    this.c = g || null;
    if (null != this.c) {
        a = this.c;
        g = z(this.Ek, this);
        a.g = z(a.L, a, g);
        g = a.a.l();
        var m = new Ks(g);
        L(m, jd, a.g, !1, a);
        m = new kw(g);
        L(m, Kd, a.g, !1, a);
        L(g, md, a.g, !1, a)
    }
    this.j = null;
    this.A = gb;
    this.U = this.m = "";
    this.aa = new ar("mt");
    this.ma = !!b && qD && !F;
    this.M = null != e ? e : 0;
    this.b = null;
    this.ma ? this.b = new vC : this.b = new wC;
    if (0 < this.M)
        for (b = this.b, b.I = !0, e = 0; e < b.g; e++) g = P(k, bc, ""), a = P(k, null, g), g = new ZA(a, g), b.m[e] = g, document.body.appendChild(a);
    this.b.ia(c);
    this.g =
        l || null;
    this.Y = null != d ? d : -1;
    this.O = Ko.J();
    this.B = new nm;
    this.I = this.K = null;
    this.v = f || null;
    this.R = !1;
    null != this.v && (c = z(this.xa, this), this.v.m = c, c = z(this.vk, this), this.v.j = c);
    this.V = null;
    this.F = ro.J()
};
A(rD, Y);
var sD = function(a, b) {
        a.V = b;
        a.b.B = b
    },
    BD = function(a, b, c, d, e) {
        if (null != a.v) {
            var f = a.v;
            X(f.l(), !1);
            X(f.g, !1);
            null != f.b && f.b.setVisible(!1)
        }
        b && (a.j = new Vq(b), a.I = null);
        c && (a.A = c);
        d && (a.m = d);
        e && (a.U = e);
        tD(a) && (CC(a.c), null != a.g && FC(a.g, !1));
        if (a.j) {
            b = 0 != dl(bb).length;
            a.a.Me(a.l());
            a.b.Ce();
            a.V && (a.V.b = a.j);
            c = "";
            for (e = d = 0; e < H(a.j, 5); e++) uD(a.j, e) && (c += " "), c += vD(a.j, e), d += H($q(a.j, e), 2);
            if (0 == d) return !1;
            c = [];
            d = !1;
            e = a.j;
            f = "";
            for (var g = 0; g < H(e, 5); g++) {
                var l = $q(e, g);
                fi(l, 4) && 0 < I(l, 4).length ? f = I(l, 4) : (new Jq(l.nb())).data[4] =
                    f
            }
            for (e = 0; e < H(a.j, 5); e++) {
                f = $q(a.j, e);
                g = Wq(f, 0);
                uD(a.j, e) ? a.a.appendChild(a.l(), a.a.a.createTextNode(" ")) : ("km" == a.m || "lo" == a.m) && a.a.appendChild(a.l(), gh ? rl() : ch ? pl("&shy;") : F && wh(8) ? pl("&#8203;") : rl());
                fi(f, 4) && 0 < I(f, 4).length && 0 == ji(f, 5) && c.push(I(f, 4));
                var m;
                l = vD(a.j, e);
                dg(l) ? 0 == l.length || (m = wD(l)) : (m = a.a.b(Na, null, l), g = ji(g, 1), 0 <= a.Y && g < a.Y && U(m, "alt-low-conf"), qm(a.B, a.A + "." + a.m + "." + I(f, 0)) && (g = a.B.get(a.A + "." + a.m + "." + I(f, 0)), g != xD(f, 0) && (a.a.Ne(m, g), U(m, bb), d = !0, yD(a, !0))), null != a.b.j ? YB(a.b.j,
                    m) : m.title = nC, pC(a.b, m, f));
                m && a.a.appendChild(a.l(), m)
            }
            if (null != a.c) {
                m = a.A + "." + a.m;
                for (e = 0; e < c.length; ++e) m += "." + c[e];
                qm(a.B, m) && (zD(a, !1), d = !0, AD(a, a.B.get(m)), null != a.g && FC(a.g, !1), yD(a, !0))
            }
            d || (yD(a, !1), zD(a, !1));
            (d || b) && a.dispatchEvent(n);
            return 0 < H(a.j, 5)
        }
        yD(a, !1);
        zD(a, !1);
        return !1
    },
    wD = function(a) {
        a = jg(sg(a)).split("<br>");
        var b = document.createDocumentFragment(),
            c = 0;
        C(a, function(a) {
            0 != c && b.appendChild(P("BR"));
            c++;
            "" != a && b.appendChild(pl(vg(a)))
        });
        return b
    },
    CD = function(a, b) {
        if (tD(a)) return a.c.a.P();
        var c = [];
        if (a.l() && a.l().childNodes)
            for (var d = 0; d < a.l().childNodes.length; ++d) {
                var e = a.l().childNodes[d];
                c[d] = b && "BR" == e.tagName ? "\n" : Ql(e)
            }
        return c.join("")
    },
    ED = function(a, b, c, d) {
        for (a = 0; a < H(b, 5); a++) {
            var e = $q(b, a),
                f = e && e;
            if (Bq(c.data, e ? f.data : null)) {
                c = b;
                b = a;
                e = -1;
                a = H(c, 5);
                for (f = b; 0 <= f; f--)
                    if (0 == ji($q(c, f), 5)) {
                        e = f;
                        break
                    }
                for (f = b + 1; f <= H(c, 5); f++)
                    if (0 == ji($q(c, f), 5)) {
                        a = f;
                        break
                    }
                if (null != d && d) b = DD(c, e, a);
                else if (d = c, c = e, d) {
                    e = b + 1;
                    f = b;
                    for (b = vD(d, b).length; 64 > b && (e != a || f != c);) e < a && (b += vD(d, e++).length + 1),
                    64 > b && f > c && (b += vD(d, --f).length + 1);
                    b = DD(d, f, e)
                } else b = "";
                return b
            }
        }
        return ""
    },
    DD = function(a, b, c) {
        var d = [];
        d.push(vD(a, b));
        for (b += 1; b < c; b++) uD(a, b) && d.push(" "), d.push(vD(a, b));
        return d.join("")
    },
    uD = function(a, b) {
        if (0 == b) return !1;
        var c = $q(a, b),
            d = $q(a, b - 1);
        return Eq(Wq(c, 0), 2) && !Eq(Wq(d, 0), 3) && !cg(vD(a, b - 1), "\n")
    };
w = rD.prototype;
w.Nh = u("m");
w.sa = function() {
    this.Z(Ul(this.a, "span"))
};
w.Z = function(a) {
    rD.w.Z.call(this, a);
    BD(this)
};
w.W = function() {
    rD.w.W.call(this);
    Z(this).G(this.b, n, this.ra);
    null != this.g && null != this.g.a && (Z(this).G(this.g.a, r, this.Vk), ms(Z(this), this.g.a, this.F.g, this.F));
    Z(this).G(this.b, de, this.Kk);
    this.l() && Z(this).G(this.l(), kd, function(a) {
        32 == a.keyCode && a.stopPropagation()
    }, !0)
};
w.N = function() {
    rD.w.N.call(this);
    this.b.Ba()
};
w.Ek = function() {
    this.v.ea(this.c.b);
    yD(this, this.c.b)
};
var FD = function(a) {
    null != a.g && FC(a.g, !0);
    var b = a.c,
        c = CD(a);
    U(b.C, "full-edit");
    b.c.setVisible(!0);
    b.m = c;
    b.a.g(c);
    b.a.setVisible(!0);
    b.a.Ic(!0);
    X(b.v, !0);
    X(b.A, !1);
    b.H = Xr(b.o);
    X(b.o, !1);
    c = b.a.l();
    c.focus();
    c.setSelectionRange(c.value.length, c.value.length);
    b.j = !0;
    a.R = Xr(a.v.l());
    a.v.reset();
    null != a.g ? a.v.ea(Xr(a.g.a)) : a.v.ea(!1);
    yD(a, !1)
};
rD.prototype.ra = function(a) {
    if (a.type != Nc || a.target == this.b)
        if (a.target == this.b.v && null != this.c) {
            this.O.log("editpopupclk");
            var b = this.F;
            R(b, S(b, 233));
            FD(this)
        } else {
            var c = a.Oj;
            null == c && null != a.currentTarget && (c = a.currentTarget.gb);
            b = a.target.Va();
            if (null != c && null != a.target) {
                var d = c,
                    e = this.b.A.get(zf(d));
                this.a.Ne(d, b);
                b == xD(e, 0) ? (V(d, bb), 0 == dl(bb).length && (yD(this, !1), zD(this, !1))) : (U(d, bb), yD(this, !0), zD(this, !0));
                null != this.B && this.B.set(this.A + "." + this.m + "." + I(e, 0), b);
                e = this.b.A.get(zf(c));
                null !=
                this.B && this.B.set(this.A + "." + this.m + "." + I(e, 0), b);
                d = xD(e, 0);
                c = Cs(this.b, a.target);
                d = {
                    sl: this.A,
                    tl: this.m,
                    utrans: b,
                    gtrans: d,
                    index: c,
                    ophrase: I(e, 0),
                    osentence: I(e, 4),
                    tsentence: ED(this, this.j, e)
                };
                0 < H(e, 2) && (d.confidence = ji(Wq(e, 0), 1));
                if (a.target instanceof xC || -1 == c) d.manual = 1, c = this.F, R(c, S(c, 240));
                else {
                    a = this.F;
                    e = S(a, 239);
                    var f = new Vn,
                        g = Vh(Vh(f, 2, Tn), 3, Rn);
                    G(g, 1, c);
                    Th(e, 27, f);
                    R(a, e)
                }
                for (var l in d) mf(d[l]) && 64 < d[l].length && (d.tr = 1, d[l] = d[l].substr(0, 64));
                this.O.log("usealt", d, null);
                l = new J("usealt");
                l.text = b;
                this.dispatchEvent(l);
                this.dispatchEvent(n)
            }
        }
};
var AD = function(a, b) {
    if (a.l()) {
        null == a.K && (a.I = Vf(a.a.Lh(a.l())));
        a.K = b;
        var c;
        if (c = a.l().childNodes && 0 < a.l().childNodes.length) c = (c = a.l().childNodes[0]) ? qm(a.b.b, zf(c)) : !1;
        c ? (a.a.Me(a.l()), a.b.Ce(), b = a.a.b(Na, bb, a.K), a.a.appendChild(a.l(), b), pC(a.b, b, new Jq)) : a.l().innerHTML = jg(sg(b))
    }
};
w = rD.prototype;
w.rm = function() {
    this.K = null;
    this.c.b = !1
};
w.Vk = function() {
    if (null != this.c && tD(this)) {
        var a = this.c;
        a.c.setVisible(!0);
        a.a.g(a.m);
        a.a.l().focus();
        a.g(null)
    } else tD(this) && (null != this.g && FC(this.g, !1), CC(this.c)), this.B.Qc(), this.K = null, BD(this), this.dispatchEvent(n);
    this.O.log("clkundo", void 0, null)
};
w.vk = function() {
    tD(this) && (this.c.b && (AD(this, this.c.a.P()), this.R = !0), CC(this.c), null != this.g && FC(this.g, !1), this.c.b && yD(this, !0), this.v.ea(!0), X(this.v.l(), this.R), this.dispatchEvent(n));
    var a = this.F;
    R(a, S(a, 215));
    this.O.log("clkcancel", void 0, null)
};
w.Kk = function() {
    var a = this.b.A.get(zf(this.b.gb));
    if (a) {
        if (0 < this.M) {
            var b = new gp("source=baf");
            if (1 == this.M) {
                for (var c = [], d = 0, e = H(a, 2); d < e; d++) c.push(xD(a, d));
                dr(this.aa, this.m, this.A, N("hl").value, c, z(this.Ul, this), void 0, b, void 0)
            } else
                for (d = 0, e = H(a, 2); d < e; d++) c = xD(a, d), er(this.aa, this.m, this.A, N("hl").value, c, ["at", "t"], z(this.Vl, this, d), void 0, b)
        }
        b = new J(r);
        b.text = this.b.Va();
        b.Cl = H(this.j, 5);
        this.dispatchEvent(b);
        b = {};
        b.confidence = ji(Wq(a, 0), 1);
        this.A && this.m && this.U && (b.segments = H(this.j, 5),
            b.sl = this.A, b.tl = this.m, b.hl = this.U);
        a = this.F;
        R(a, S(a, 238));
        this.O.log("phrsclk", b, null)
    }
};
w.Vl = function(a, b) {
    if (1 == this.M || 1 < H(b, 5)) {
        var c = Zq(b, 0).cb();
        var d = 1;
        for (var e = H(b, 0); d < e; d++) c += " " + Zq(b, d).cb();
        d = c
    } else if (1 == H(b, 5)) {
        c = [];
        b = $q(b, 0);
        d = 0;
        for (e = Math.min(this.M, H(b, 2)); d < e; d++) c.push(xD(b, d));
        d = c.join(", ")
    } else d = "...";
    tC(this.b, a, d)
};
w.Ul = function(a) {
    for (var b = 0; b < a.length; b++) tC(this.b, b, a[b])
};
var yD = function(a, b) {
        null != a.g && null != a.g.a && X(a.g.a, b)
    },
    zD = function(a, b) {
        null != a.v && (b && a.v.reset(), X(a.v.l(), b))
    };
rD.prototype.xa = function() {
    var a = [],
        b;
    null != this.I ? b = this.I : b = yl(this.l());
    for (var c = {
        segment: []
    }, d = null, e = 0, f = 0; f < b.length; f++) {
        var g = $q(this.j, f);
        if (null != g) {
            var l = Ql(b[f]);
            a: {
                var m = l;
                var p = g;
                if (0 == H(p, 2)) m = 0;
                else {
                    for (var q = 0; q < H(p, 2); ++q)
                        if (m == xD(p, q)) {
                            m = q;
                            break a
                        }
                    m = -1
                }
            }
            p = gg(I(g, 4));
            q = ED(this, this.j, g, !0);
            if (0 != p.length) {
                if (0 == a.length || p != a[a.length - 1]) a.push(p), d = GD(this, a.length - 1), e = 0, d = {
                    source: p,
                    original_target: q,
                    segment_source: d,
                    phrase_correction: []
                }, c.segment.push(d);
                if (0 != m)
                    for (p = xD(g,
                        0).length, m = {
                        alternative_index: m,
                        edited_phrase: l,
                        source_span: [],
                        target_span: [{
                            start: e,
                            end: e + p
                        }]
                    }, d.phrase_correction.push(m), p = 0; p < H(g, 3); ++p) q = Xq(g, p), m.source_span.push({
                        start: ji(q, 0),
                        end: ji(q, 1)
                    });
                e += l.length;
                Eq(Wq(g, 0), 2) && e++
            }
        }
    }
    if (tD(this)) {
        this.dispatchEvent(n);
        CC(this.c);
        null != this.g && FC(this.g, !1);
        yD(this, !0);
        this.c.a.P() != CD(this) && AD(this, this.c.a.P());
        b = this.A + "." + this.m;
        for (f = 0; f < a.length; ++f) b += "." + a[f];
        a = this.c.a.P();
        this.B.set(b, a);
        c.contains_full_edit = !0
    }
    c.edited_target = CD(this, !0);
    a = new gp;
    a.set("ue", JSON.stringify(c));
    a.set("sl", this.A);
    a.set("tl", this.m);
    Km("/translate_suggestion?client=t", void 0, Ka, a.toString(), void 0, 1E4)
};
var GD = function(a, b) {
        if (b < H(a.j, 0)) switch (Dq(Zq(a.j, b), 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
        }
        return 0
    },
    tD = function(a) {
        return null != a.c && a.c.j
    },
    vD = function(a, b) {
        a = $q(a, b);
        return 0 == H(a, 2) ? I(a, 0) : xD(a, 0)
    },
    xD = function(a, b) {
        return I(Wq(a, b), 0)
    };
var HD = function(a) {
    this.data = a || []
};
A(HD, Cq);
var ID = function(a) {
    this.data = a || []
};
A(ID, Cq);
HD.prototype.Bc = function() {
    return I(this, 0)
};
HD.prototype.cb = function() {
    return I(this, 4)
};
var JD = function(a) {
    var b = USAGE,
        c = MSG_PB_ERROR;
    this.j = a;
    this.a = "";
    this.c = b;
    this.g = c
};
JD.prototype.b = function(a, b) {
    b = b.target;
    if (Tm(b) && "" != Um(b) && null != Vm(b)) {
        b = Vm(b);
        b = new ID(b);
        var c = I(b, 1);
        null != c && "" != c && (this.a = c)
    } else b = new ID, b.data[3] = this.g;
    a(b)
};
var KD = function(a, b, c, d, e) {
    var f = window.location.href;
    b = new ap(b);
    (f = op(new ap(f, !0), fb)) && b.a.set(fb, f);
    b = b.toString();
    b += "&hl=" + a.j;
    a.c && (b += "&xt=" + a.c);
    null != e ? Km(b, z(a.b, a, c), d, e) : Km(b, z(a.b, a, c), d)
};
JD.prototype.Ca = function(a, b, c, d, e, f) {
    var g = {
        cm: "g"
    };
    null != b && b != $a && (g.sl = b);
    null != c && c != $a && (g.tl = c);
    null != d && "" != d && (g.q = d);
    null != e && "" != e && (g.utrans = e);
    null != f && "0" != f && (g.od = f);
    "" != this.a && (g.tk = this.a, this.a = "");
    KD(this, na + zm(g), a, "GET")
};
var LD = function(a, b, c) {
    M.call(this);
    this.o = a;
    this.m = b;
    this.c = c;
    this.B = 1E4;
    this.a = null;
    this.j = this.g = $a;
    this.v = "0";
    this.b = "";
    this.A = [];
    this.C = !1;
    this.H = ""
};
A(LD, M);
var MD = function(a) {
        a.C = !1;
        if ("" != a.b) {
            var b = a.o,
                c = z(a.L, a),
                d = {
                    cm: "s"
                };
            d.q = a.b;
            "" != b.a && (d.tk = b.a, b.a = "");
            KD(b, na + zm(d), c, "GET")
        } else a.o.Ca(z(a.L, a), a.g, a.j, void 0, void 0, a.v)
    },
    ND = function(a) {
        return null != a.a ? a.a : []
    };
LD.prototype.I = function(a, b) {
    var c = I(b, 3);
    if (null != c && "" != c) this.H = c, this.dispatchEvent(Ld);
    else if (Qf(this.A, I(b, 5)), fi(b, 6) && (c = Number(I(b, 6, "")), null == c || isNaN(c) || (this.B = c)), null == this.a || this.C || "0" != this.v) MD(this);
    else {
        c = new HD;
        var d = a && a;
        a = c.data;
        d = d ? d.nb() : null;
        a !== d && (a.length = 0, d && (a.length = d.length, xq(a, d)));
        c.data[0] = I(b, 5);
        this.a.push(c);
        this.dispatchEvent(Ld)
    }
};
var OD = function(a) {
        var b = Vf(a.A);
        a.A = [];
        return b
    },
    PD = function(a, b) {
        if (0 != b.length) {
            var c = a.o,
                d = {
                    cm: "d"
                };
            d.count = b.length + "";
            var e = {};
            e.id = b;
            KD(c, na + zm(d), qf, Ka, zm(e));
            for (c = a.a.length - 1; 0 <= c; --c) Pf(b, a.a[c].Bc()) && Rf(a.a, c)
        }
    };
LD.prototype.L = function(a) {
    this.a = [];
    for (var b = 0; b < H(a, 2); ++b) this.a.push(new HD(ei(a, 2, b)));
    this.H = zg(I(a, 3));
    this.dispatchEvent(Ld);
    fi(a, 6) && (a = Number(I(a, 6, "")), null == a || isNaN(a) || (this.B = a))
};
var QD = function(a) {
    a.match(/[",\t\n]/) && (a = '"' + a.replace(/"/g, '""') + '"');
    return a
};
LD.prototype.Ga = function() {
    if (null == this.a) return [];
    for (var a = [], b = 0; b < this.a.length; b++) {
        var c = this.a[b],
            d = I(c, 3);
        void 0 == I(c, 1) && void 0 == I(c, 2) && bg(d, void 0) && d.length >= (void 0).length && a.push(c)
    }
    Zf(a);
    return a
};
var Mg = {},
    RD = null,
    SD = function(a) {
        a = zf(a);
        delete Mg[a];
        Ng() && RD && RD.stop()
    },
    UD = function() {
        RD || (RD = new It(function() {
            TD()
        }, 20));
        var a = RD;
        a.kb() || a.start()
    },
    TD = function() {
        var a = Df();
        Jg(Mg, function(b) {
            VD(b, a)
        });
        Ng() || UD()
    };
var WD = function(a, b, c, d) {
    PA.call(this);
    if (!tf(a) || !tf(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length) throw Error("Start and end points must be the same length");
    this.C = a;
    this.I = b;
    this.duration = c;
    this.L = d;
    this.coords = [];
    this.c = 0
};
A(WD, PA);
WD.prototype.play = function(a) {
    if (a || 0 == this.a) this.c = 0, this.coords = this.C;
    else if (1 == this.a) return !1;
    SD(this);
    this.g = a = Df(); - 1 == this.a && (this.g -= this.duration * this.c);
    this.m = this.g + this.duration;
    this.c || this.j();
    this.b(Md); - 1 == this.a && this.b("resume");
    this.a = 1;
    var b = zf(this);
    b in Mg || (Mg[b] = this);
    UD();
    VD(this, a);
    return !0
};
WD.prototype.stop = function(a) {
    SD(this);
    this.a = 0;
    a && (this.c = 1);
    XD(this, this.c);
    this.b("stop");
    this.o()
};
WD.prototype.N = function() {
    0 == this.a || this.stop(!1);
    this.b("destroy");
    WD.w.N.call(this)
};
var VD = function(a, b) {
        b < a.g && (a.m = b + a.m - a.g, a.g = b);
        a.c = (b - a.g) / (a.m - a.g);
        1 < a.c && (a.c = 1);
        XD(a, a.c);
        1 == a.c ? (a.a = 0, SD(a), a.b(Ob), a.o()) : 1 == a.a && a.B()
    },
    XD = function(a, b) {
        vf(a.L) && (b = a.L(b));
        a.coords = Array(a.C.length);
        for (var c = 0; c < a.C.length; c++) a.coords[c] = (a.I[c] - a.C[c]) * b + a.C[c]
    };
WD.prototype.B = function() {
    this.b("animate")
};
WD.prototype.b = function(a) {
    this.dispatchEvent(new YD(a, this))
};
var YD = function(a, b) {
    J.call(this, a);
    this.coords = b.coords;
    this.duration = b.duration;
    this.state = b.a
};
A(YD, J);
var ZD = function(a, b, c, d, e) {
    WD.call(this, b, c, d, e);
    this.v = a
};
A(ZD, WD);
ZD.prototype.A = qf;
ZD.prototype.B = function() {
    this.A();
    ZD.w.B.call(this)
};
ZD.prototype.o = function() {
    this.A();
    ZD.w.o.call(this)
};
ZD.prototype.j = function() {
    this.A();
    ZD.w.j.call(this)
};
var $D = function(a, b, c, d, e) {
    nf(b) && (b = [b]);
    nf(c) && (c = [c]);
    ZD.call(this, a, b, c, d, e);
    if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
    this.H = -1
};
A($D, ZD);
var aE = 1 / 1024;
$D.prototype.A = function() {
    var a = this.coords[0];
    Math.abs(a - this.H) >= aE && (Wr(this.v, a), this.H = a)
};
$D.prototype.j = function() {
    this.H = -1;
    $D.w.j.call(this)
};
$D.prototype.o = function() {
    this.H = -1;
    $D.w.o.call(this)
};
var bE = function(a, b, c) {
    $D.call(this, a, 1, 0, b, c)
};
A(bE, $D);
bE.prototype.j = function() {
    this.v.style.display = "";
    bE.w.j.call(this)
};
bE.prototype.o = function() {
    this.v.style.display = Cd;
    bE.w.o.call(this)
};
var cE = function(a, b, c) {
    $D.call(this, a, 0, 1, b, c)
};
A(cE, $D);
cE.prototype.j = function() {
    this.v.style.display = "";
    cE.w.j.call(this)
};
var dE = function(a, b, c, d, e) {
    if (3 != b.length || 3 != c.length) throw Error("Start and end points must be 3D");
    ZD.apply(this, arguments)
};
A(dE, ZD);
dE.prototype.A = function() {
    for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
    this.v.style.backgroundColor = "rgb(" + a.join(",") + ")"
};
var eE = function(a, b, c) {
    var d = "rw";
    null != c && c && (d = "m" + d);
    this.c = b;
    xu.call(this, a, d, MSG_SEE_ALSO, MSG_SEE_ALSO, 10);
    this.Pf = !0
};
A(eE, xu);
eE.prototype.update = function(a, b, c, d) {
    eE.w.update.call(this, a, b, c, d);
    if (!d || 0 == H(Yq(d), 0)) return !1;
    ul(this.b);
    this.bd();
    c = a = P(k, {
        "class": "gt-rw-div"
    });
    b = 15 < H(Yq(d), 0);
    for (var e = 0; e < H(Yq(d), 0); ++e) {
        var f = hi(Yq(d), 0, e),
            g = P(Na, {
                "class": xc
            });
        Q(g, f);
        this.g.push(g);
        if (10 == e && b) {
            var l = P(k, {
                "class": "gt-rw-div"
            });
            c = l;
            l = b ? P(Na, {
                "class": vc
            }, l) : l;
            W(l, {
                display: Cd
            })
        }
        this.c || 0 != e && e != H(Yq(d), 0) && c.appendChild(pl(", "));
        c.appendChild(g)
    }
    c = fk(this.Ia) ? Vd : sd;
    W(this.b, {
        direction: c
    });
    this.b.appendChild(a);
    l && this.b.appendChild(l);
    b && (d = MSG_N_MORE_RELATED_LABEL.replace(ca, H(Yq(d), 0) - 7), zu(this, d, MSG_FEWER_RELATED_LABEL));
    this.setVisible(!0);
    return !0
};
eE.prototype.W = function() {
    eE.w.W.call(this);
    Z(this).G(this.l(), r, this.A)
};
eE.prototype.A = function(a) {
    mr(a.target, xc) && this.dispatchEvent(new J("a", a.target))
};
eE.prototype.Cd = function(a) {
    for (var b = [], c, d = dl(vc, this.l()), e = 0; e < d.length; e++) c = d[e], a ? b.push(new cE(c, 218)) : b.push(new bE(c, 218));
    for (e = 0; e < b.length; e++) b[e].play()
};
var fE = Ze(),
    gE = function(a) {
        var b = P(Na);
        b.style.color = "transparent";
        b.style.background = "transparent";
        b.style.top = "-1000px";
        b.style.left = "-1000px";
        b.style.position = Xa;
        document.body.appendChild(b);
        Q(b, a);
        a = b.offsetWidth;
        xl(b);
        return a
    };
rf(fE);
var hE = function() {
    fE.J()
};
rf(hE);
var iE = function(a) {
    var b = gE(a);
    a = gE(a.substr(0, 1));
    return b != a
};
var jE = function(a, b) {
    M.call(this);
    for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        L(d, Ad, this.a, !1, this);
        L(d, md, function(a) {
            16 == a.keyCode && this.a(a)
        }, !1, this)
    }
    for (c = 0; c < b.length; ++c) d = b[c], L(d, Ad, this.b, !1, this), L(d, md, function(a) {
        16 == a.keyCode && this.b(a)
    }, !1, this)
};
A(jE, M);
jE.prototype.a = function(a) {
    a = kE(a.target);
    if ("" != a) {
        var b = new J(Xd);
        b.text = a;
        this.dispatchEvent(b)
    }
};
jE.prototype.b = function(a) {
    a = kE(a.target);
    if ("" != a) {
        var b = new J(Xd);
        b.text = a;
        b.bl = !0;
        this.dispatchEvent(b)
    }
};
var kE = function(a) {
    var b = "";
    try {
        if (b = Sw(a).trim(), "" != b) return b
    } catch (c) {}
    a = Wy(window);
    return a.toString ? a.toString().trim() : a.createRange ? a.createRange().text : ""
};
var lE = Ze(),
    mE = new lE,
    nE = [r, fh ? ld : kd, md];
lE.prototype.G = function(a, b, c, d, e) {
    var f = function(a) {
        var c = Qi(b),
            e = Cl(a.target) ? a.target.getAttribute(Ud) || null : null;
        a.type == r && Ci(a) ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || a.type == md ? 32 != a.keyCode || a.type != md || e != nb && "tab" != e || (c.call(d, a), a.preventDefault()) : (a.type = ld, c.call(d, a))
    };
    f.Hb = b;
    f.Rl = d;
    e ? e.G(a, nE, f, c) : L(a, nE, f, c)
};
lE.prototype.Aa = function(a, b, c, d, e) {
    for (var f, g = 0; f = nE[g]; g++) {
        var l = a;
        var m = f;
        var p = !!c;
        m = Ei(l) ? l.Ge(m, p) : l ? (l = Si(l)) ? l.Ge(m, p) : [] : [];
        for (l = 0; p = m[l]; l++) {
            var q = p.listener;
            if (q.Hb == b && q.Rl == d) {
                e ? e.Aa(a, f, p.listener, c, d) : Wi(a, f, p.listener, c, d);
                break
            }
        }
    }
};
var oE = function(a) {
    var b = va + Jp("jfk-bubble") + '" role="alertdialog"' + (a.uid ? ' aria-describedby="' + Jp(a.uid) + '"' : "") + '><div class="' + Jp(ad) + '"' + (a.uid ? ' id="' + Jp(a.uid) + '"' : "") + "></div>";
    if (a.$l) {
        a = b;
        b = va + Jp($c) + " " + Jp("jfk-bubble-closebtn") + '" aria-label="';
        var c = "Close".replace(Hp, Ip);
        b = a + (b + c + '" role="button" tabindex=0></div>')
    }
    b += va + Jp(Zc) + " " + Jp("jfk-bubble-arrow") + '"><div class="' + Jp("jfk-bubble-arrowimplbefore") + '"></div><div class="' + Jp("jfk-bubble-arrowimplafter") + '"></div></div></div>';
    return Ep(b)
};
var pE = function(a) {
    Y.call(this, a);
    this.c = new St("jfk-bubble", !0);
    this.b = new YA;
    this.A = []
};
A(pE, Y);
pE.prototype.g = !0;
var rE = function(a, b) {
        a.K = b;
        qE(a, b)
    },
    qE = function(a, b) {
        a = a.Lb();
        b && a && (mf(b) ? Q(a, b) : b instanceof Cp ? Rk(a, Ap(b)) : b instanceof Ek ? Rk(a, b) : (Rk(a, Pk), a.appendChild(b)))
    };
w = pE.prototype;
w.setAutoHide = function(a) {
    this.b.setAutoHide(a)
};
w.Lb = function() {
    return this.lc(ad)
};
w.sa = function() {
    this.D = yr(oE, {
        $l: this.g,
        uid: "bubble-" + zf(this)
    }, void 0, this.a);
    qE(this, this.K);
    X(this.l(), !1);
    this.b.Qd(this.l());
    if (!hh) {
        var a = this.b,
            b = TB(this.l(), .218, "ease-out", 0, 1),
            c = TB(this.l(), .218, "ease-in", 1, 0);
        a.v = b;
        a.m = c
    }
    nr(this.l(), this.A)
};
w.W = function() {
    pE.w.W.call(this);
    Z(this).G(this.b, [ib, de, hb, Nc], this.I);
    if (this.g) {
        var a = Z(this);
        mE.G(this.lc($c), Cf(this.setVisible, !1), void 0, a.o || a, a)
    }
    a = this.c;
    var b = this.lc(Zc);
    a.c = this.l();
    a.j = b;
    a = this.b;
    a.M = this.c || void 0;
    a.isVisible() && a.A()
};
w.setVisible = function(a) {
    this.b.setVisible(a)
};
w.isVisible = function() {
    return this.b.isVisible()
};
var sE = function(a) {
    a.isVisible() && a.b.A()
};
pE.prototype.N = function() {
    this.b.Ba();
    delete this.b;
    pE.w.N.call(this)
};
pE.prototype.j = function() {
    Pr(this.l());
    return !1
};
pE.prototype.I = function(a) {
    if (a.type == de || a.type == Nc) {
        var b = Z(this),
            c = this.a;
        c = F ? Vl(c) : c.a;
        a.type == de ? b.G(c, Wd, this.j) : b.Aa(c, Wd, this.j)
    }
    return this.dispatchEvent(a.type)
};
var tE = function(a, b) {
        this.a = a;
        this.b = b
    },
    uE = {
        af: "af-ZA",
        am: "am-ET",
        az: "az-AZ",
        bg: "bg-BG",
        ca: "ca-ES",
        cs: "cs-CZ",
        da: "da-DK",
        de: "de-DE",
        el: "el-GR",
        eu: "eu-ES",
        fa: "fa-IR",
        fi: "fi-FI",
        tl: "fil-PH",
        gl: "gl-ES",
        gu: "gu-IN",
        hi: "hi-IN",
        hr: "hr-HR",
        hu: "hu-HU",
        hy: "hy-AM",
        iw: "he-IL",
        id: "id-ID",
        is: "is-IS",
        it: "it-IT",
        ja: "ja-JP",
        jw: "jv-ID",
        ka: "ka-GE",
        km: "km-KH",
        kn: "kn-IN",
        ko: "ko-KR",
        lo: "lo-LA",
        lt: "lt-LT",
        lv: "lv-LV",
        ml: "ml-IN",
        mr: "mr-IN",
        ms: "ms-MY",
        ne: "ne-NP",
        no: "nb-NO",
        nl: "nl-NL",
        pl: "pl-PL",
        ro: "ro-RO",
        ru: "ru-RU",
        si: "si-LK",
        sk: "sk-SK",
        sl: "sl-SI",
        sr: "sr-RS",
        su: "su-ID",
        sv: "sv-SE",
        te: "te-IN",
        th: "th-TH",
        tr: "tr-TR",
        uk: "uk-UA",
        vi: "vi-VN",
        zu: "zu-ZA",
        "ar::ae": "ar-AE",
        "ar::bh": "ar-BH",
        "ar::dz": "ar-DZ",
        "ar::eg": "ar-EG",
        "ar::il": "ar-IL",
        "ar::jo": "ar-JO",
        "ar::kw": "ar-KW",
        "ar::lb": "ar-LB",
        "ar::ma": "ar-MA",
        "ar::om": "ar-OM",
        "ar::ps": "ar-PS",
        "ar::qa": "ar-QA",
        "ar::sa": "ar-SA",
        "ar::tn": "ar-TN",
        ar: "ar-EG",
        "bn::bd": "bn-BD",
        "bn::in": "bn-IN",
        bn: "bn-BD",
        "en::au": "en-AU",
        "en::ca": "en-CA",
        "en::com": "en-US",
        "en::gh": "en-GH",
        "en::ie": "en-IE",
        "en::in": "en-IN",
        "en::ke": "en-KE",
        "en::ng": "en-NG",
        "en::nz": "en-NZ",
        "en::ph": "en-PH",
        "en::tz": "en-TZ",
        "en::uk": "en-GB",
        "en::za": "en-ZA",
        en: "en-001",
        "es::ar": "es-AR",
        "es::bo": "es-BO",
        "es::cl": "es-CL",
        "es::co": "es-CO",
        "es::cr": "es-CR",
        "es::do": "es-DO",
        "es::ec": "es-EC",
        "es::es": "es-ES",
        "es::gt": "es-GT",
        "es::hn": "es-HN",
        "es::mx": "es-MX",
        "es::ni": "es-NI",
        "es::pa": "es-PA",
        "es::pe": "es-PE",
        "es::pr": "es-PR",
        "es::py": "es-PY",
        "es::sv": "es-SV",
        "es::com": "es-US",
        "es::uy": "es-UY",
        "es::ve": "es-VE",
        es: "es-ES",
        "fr::ca": "fr-CA",
        "fr::fr": "fr-FR",
        fr: "fr-FR",
        "pt::pt": "pt-PT",
        pt: "pt-BR",
        "ta::in": "ta-IN",
        "ta::lk": "ta-LK",
        "ta::sg": "ta-SG",
        "ta::my": "ta-MY",
        ta: "ta-IN",
        "sw::ke": "sw",
        "sw::tz": "sw-TZ",
        sw: "sw",
        "ur::pk": "ur-PK",
        "ur::in": "ur-IN",
        ur: "ur-PK",
        "zh-CN:zh-TW:hk": "yue-Hant-HK",
        "zh-CN:zh-CN:hk": "cmn-Hans-HK",
        "zh-CN:zh-TW": "cmn-Hant-TW",
        "zh-CN": "cmn-Hans-CN"
    };
tE.prototype.get = function(a) {
    return uE[a + ":" + this.b + ":" + this.a] || uE[a + "::" + this.a] || uE[a + ":" + this.b] || uE[a] || null
};
var vE = function(a, b) {
    pE.call(this, b);
    this.v = 0;
    this.c.hf = !0;
    this.setAutoHide(!1);
    this.c.b = a;
    sE(this);
    Tt(this.c, 1, 2, void 0);
    this.g = !1;
    rE(this, yr(Vp, {
        label: MSG_SPEAK_NOW
    }))
};
A(vE, pE);
vE.prototype.W = function() {
    vE.w.W.call(this);
    this.m = O("gt-speech-l3", this.l())
};
var wE = function(a) {
    0 == a.v++ && U(a.m, "trigger");
    Mj(a.B, 600, a)
};
vE.prototype.B = function() {
    0 == --this.v && V(this.m, "trigger")
};
var xE = function(a, b, c, d, e) {
    M.call(this);
    this.X = a;
    this.m = b;
    this.a = null;
    oq && "webkitSpeechRecognition" in window && (a = new webkitSpeechRecognition, a.continuous = !An() && !zn(), a.interimResults = !0, this.a = a);
    this.M = new tE(c, d);
    this.o = !e;
    this.c = "";
    this.qb = !1;
    this.b = null;
    this.j = Tc;
    this.v = Ko.J();
    this.O = lo.J();
    this.F = ro.J()
};
A(xE, M);
var yE = function(a) {
        if (null != a.a) {
            var b = N(Gc);
            a.b = new $u(MSG_SPEECH_INPUT_TURN_ON, MSG_SPEECH_INPUT_TURN_OFF, new bv("speech-button", !a.o));
            a.b.S(P(k, {
                id: "gt-speech",
                tabindex: "0"
            }));
            b.insertBefore(a.b.l(), b.childNodes[1] || null);
            a.g = new vE(a.b.l());
            a.g.ia(a.b.l());
            a.a.onresult = z(a.B, a);
            a.a.onstart = z(a.K, a);
            a.a.onspeechstart = z(a.I, a);
            a.a.onend = z(a.A, a);
            a.a.onspeechend = z(a.L, a);
            a.a.onerror = z(a.R, a);
            a.a.onnomatch = z(a.H, a);
            L(a.b, n, a.C, !1, a)
        }
    },
    zE = function(a, b) {
        var c = a.O;
        b ? (c.j = c.a, c.a = 3) : c.a = c.j;
        a.g.setVisible(b &&
            a.o)
    },
    AE = "init:buttonOn end:buttonOn buttonOn:start start:speechStart speechStart:result result:result result:buttonOff buttonOff:speechEnd speechEnd:end".split(" "),
    BE = function(a, b) {
        if (!(0 <= AE.indexOf(a.j + ":" + b))) {
            var c = {};
            c.from = a.j;
            c.to = b;
            a.v.log("speech", c)
        }
        a.j = b
    };
xE.prototype.C = function() {
    if (this.b.Ta()) {
        var a = this.F;
        R(a, S(a, 149));
        Qz(this.m, !0);
        this.c = "";
        this.a.start();
        BE(this, "buttonOn")
    } else this.a.stop(), zE(this, !1), BE(this, "buttonOff"), Qz(this.m, !1)
};
var CE = function(a, b) {
    null != a.a && (a.qb && a.a.stop(), b = a.M.get(b), a.a.lang = null != b ? b : "", a.b.setVisible(null != b))
};
xE.prototype.K = function() {
    this.qb = !0;
    zE(this, !0);
    BE(this, qe);
    this.dispatchEvent(qe)
};
xE.prototype.I = function() {
    wE(this.g);
    BE(this, "speechStart");
    this.dispatchEvent("speechStart")
};
xE.prototype.A = function() {
    DE(this);
    BE(this, Nb);
    this.dispatchEvent(Nb)
};
xE.prototype.L = function() {
    wE(this.g);
    BE(this, "speechEnd")
};
var DE = function(a) {
    a.qb = !1;
    zE(a, !1);
    a.b.Ka(!1)
};
xE.prototype.B = function(a) {
    wE(this.g);
    for (var b = "", c = a.resultIndex; c < a.results.length; ++c) this.a.continuous && (this.c || b) && 0 < a.results[c].length && a.results[c][0].transcript && a.results[c][0].transcript.length && " " != a.results[c][0].transcript[0] || (a.results[c].isFinal ? this.c += a.results[c][0].transcript : b += a.results[c][0].transcript);
    a = this.c + b;
    So(this.v, Wc, 3);
    this.X.b(a);
    BE(this, "result")
};
xE.prototype.R = function() {
    DE(this);
    BE(this, "error")
};
xE.prototype.H = function() {
    DE(this);
    BE(this, "noMatch")
};
xE.prototype.kb = u("qb");
var EE = function(a, b, c, d, e, f) {
    Y.call(this);
    this.K = a;
    this.U = b;
    this.Y = c;
    this.V = d || "";
    this.aa = e || "";
    this.xa = f || Ze();
    this.c = this.I = this.g = "";
    this.b = !1;
    this.A = !0;
    this.v = [];
    this.m = "";
    this.M = !1;
    this.B = new It(this.R, 1E3, this);
    this.j = Ko.J();
    this.F = ro.J()
};
A(EE, Y);
EE.prototype.setVisible = function(a) {
    a || (this.M = this.b = !1, this.B.stop());
    X(this.l(), a)
};
EE.prototype.isVisible = function() {
    return Xr(this.l())
};
var FE = function(a, b) {
    if ("" == b.ze) a.setVisible(!1);
    else {
        if (b.$g) {
            if (a.M) return
        } else a.M = !0;
        a.m = b.$g || "";
        a.g = b.Fi;
        a.I = b.Qi;
        a.c = a.m ? a.c : b.ze;
        a.O = b.Yj || sg(b.ze);
        a.b = b.Bh && a.A;
        var c = b.$g ? a.U : b.Bh && a.A ? a.V : a.Y;
        if (a.b && Pf(b.Wf, 6)) {
            if (a.setVisible(!1), Q(N(me), a.c), b.result)
                for (var d = 0; d < H(b.result, 0); d++) Zq(b.result, d).data[3] = 0 == d ? a.c : ""
        } else a.b ? qr(a.l(), Ec, Bc) : qr(a.l(), Bc, Ec), a.setVisible(!0);
        Q(a.l(), c + " ");
        a.v = b.Wf;
        c = P("a", {
            tabindex: 0,
            href: Yc
        });
        W(c, {
            direction: fk(a.I) ? Vd : sd
        });
        W(c, {
            "text-decoration": Cd
        });
        c.innerHTML = a.O;
        L(c, r, a.ma, !1, a);
        a.l().appendChild(c);
        c = P(k, "gt-spell-icon");
        a.l().appendChild(c);
        a.b && !Pf(b.Wf, 6) && (b = P("div"), Q(b, a.aa + " "), c = P("a", {
            tabindex: 1,
            href: Yc
        }), L(c, r, a.ra, !1, a), Q(c, a.g), b.appendChild(c), a.l().appendChild(b), U(b, "gt-revert-correct-message"));
        a.B.start()
    }
};
EE.prototype.R = function() {
    var a = {};
    a.orig = this.g;
    a.sl = this.I;
    this.b && (a.autocorrect = this.b);
    this.m ? (a.corrlang = this.m, this.j.log("langidshow", a), vo(this.F, 5, 1, !1)) : (a.corr = this.c, a.corrtype = this.v, this.j.log("spell", a), vo(this.F, 4, 1, !1))
};
EE.prototype.ma = function() {
    if (this.m) {
        var a = this.g;
        64 < a.length && (a = a.substr(0, 64));
        So(this.j, "orig", a);
        So(this.j, "psl", this.I);
        this.xa(this.O, this.m);
        Uu(this.K, this.m, "", this.g, "tws_lsugg");
        a = this.F;
        R(a, so(a, 79, 5, 1, !1, 1))
    } else a = this.g, 64 < a.length && (a = a.substr(0, 64)), So(this.j, "orig", a), So(this.j, "corrtype", this.v), this.b ? Uu(this.K, "", "", this.c, "tws_confirm") : Uu(this.K, "", "", this.c, "tws_spell"), a = this.F, R(a, so(a, 79, 4, 1, !1, 1));
    a = this.B;
    a.kb() && (a.stop(), a.kg());
    this.setVisible(!1)
};
var GE = {},
    HE = (GE[1] = 1, GE[2] = 2, GE[3] = 3, GE[4] = 4, GE[5] = 5, GE[6] = 6, GE[7] = 7, GE[8] = 8, GE[9] = 9, GE[10] = 10, GE);
EE.prototype.ra = function() {
    var a = this.c;
    64 < a.length && (a = a.substr(0, 64));
    So(this.j, "corr", a);
    So(this.j, "corrtype", this.v);
    this.A = !1;
    Uu(this.K, "", "", this.g, "tws_revert");
    a = this.B;
    a.kb() && (a.stop(), a.kg());
    this.setVisible(!1);
    a = this.F;
    for (var b = this.g, c = [], d = 0; d < this.v.length; d++) {
        var e = HE[this.v[d]];
        c.push(e ? e : 0)
    }
    d = new ko;
    G(d, 1, b);
    G(d, 2, c || []);
    b = S(a, 139);
    Th(b, 55, d);
    R(a, b)
};
var IE = function() {
        this.a = tr(INPUT_SUGGESTION_SERVER_URL);
        this.Jc = 5E3
    },
    JE = 0;
IE.prototype.send = function(a, b, c, d) {
    a = a ? Pg(a) : {};
    d = d || "_" + (JE++).toString(36) + Df().toString(36);
    var e = "_callbacks___" + d;
    b && (x[e] = KE(d, b), a.callback = e);
    b = {
        timeout: this.Jc,
        Uj: !0
    };
    e = ik(this.a);
    var f = /\?/.test(e) ? "&" : "?";
    for (m in a)
        for (var g = tf(a[m]) ? a[m] : [a[m]], l = 0; l < g.length; l++) null != g[l] && (e += f + encodeURIComponent(m) + "=" + encodeURIComponent(String(g[l])), f = "&");
    var m = jk(e);
    m = By(m, b);
    ty(m, null, LE(d, a, c), void 0);
    return {
        Pa: d,
        Dh: m
    }
};
IE.prototype.cancel = function(a) {
    a && (a.Dh && a.Dh.cancel(), a.Pa && ME(a.Pa, !1))
};
var LE = function(a, b, c) {
        return function() {
            ME(a, !1);
            c && c(b)
        }
    },
    KE = function(a, b) {
        return function(c) {
            ME(a, !0);
            b.apply(void 0, arguments)
        }
    },
    ME = function(a, b) {
        a = "_callbacks___" + a;
        if (x[a])
            if (b) try {
                delete x[a]
            } catch (c) {
                x[a] = void 0
            } else x[a] = qf
    };
var NE = function() {
        var a = INPUT_SUGGESTION_CLIENT_NAME,
            b = INPUT_SUGGESTION_DATASET;
        this.g = new IE;
        this.g.Jc = 500;
        this.a = null;
        this.j = 0;
        this.c = !1;
        this.A = Ko.J();
        this.F = ro.J();
        this.m = b || Me;
        this.C = a || "translate_separate_corpus"
    },
    jA = function(a, b, c, d, e) {
        zA(a);
        if (0 == b.length || 64 < b.length || c == gb) e([]);
        else {
            c = c == Ue || c == Ve ? "zh" : c;
            var f = 167 - (Df() - a.j);
            0 > f && (f = 0);
            a.b = Mj(function() {
                if (this.b) {
                    this.b = void 0;
                    var a = c;
                    this.j = Df();
                    var f = {};
                    f.q = b;
                    f.client = this.C;
                    f.ds = this.m;
                    f.hl = a;
                    f.requiredfields = "tl:" + d;
                    this.a = this.g.send(f,
                        z(this.v, this, b, a, d, e), z(this.o, this, "4", b, a, d, 144))
                }
            }, f, a)
        }
    },
    zA = function(a) {
        a.a && (a.c = !0, a.g.cancel(a.a), a.a = null);
        a.b && (Nj(a.b), a.b = void 0)
    };
NE.prototype.o = function(a, b, c, d, e, f, g, l) {
    if (!this.c) {
        b = {
            q: b,
            sl: c,
            tl: d
        };
        if (null != g) try {
            b.se = g.substring(0, 64)
        } catch (m) {
            throw Error(m + " opt_context is " + g);
        }
        l && (b.msg = l.substring(0, 64));
        wo(this.F, e);
        Po(this.A, "t", "is", a, b)
    }
    this.c = !1
};
NE.prototype.v = function(a, b, c, d, e) {
    try {
        var f = Jf(e[1], function(a) {
            return vg(a[0])
        }, this);
        d(f)
    } catch (g) {
        this.o("5", a, b, c, 53, null, (new Zl).cd(e), g.message)
    }
    this.a = null
};
var OE = function() {
        this.a = [];
        this.c = this.b = null
    },
    EA = function(a) {
        var b = a.a.length;
        b += a.b ? 1 : 0;
        b += a.c ? 1 : 0;
        return a = b + (a.c ? 1 : 0)
    };
var PE = function(a) {
    this.b = a || "menu"
};
A(PE, kB);
rf(PE);
PE.prototype.T = v("gt-is");
PE.prototype.g = function(a) {
    return Al(a)
};
PE.prototype.a = function(a) {
    return a.tagName == k && a.firstChild && a.firstChild.tagName == k ? !0 : !1
};
PE.prototype.o = function() {
    var a = P(k, "gt-is"),
        b = P(k, "gt-is-ctr");
    a.appendChild(b);
    return a
};
var QE = function(a, b, c) {
    zB.call(this, a || pB(PE.J()), b || PE.J(), c);
    this.b = [];
    this.g = this.j = this.c = null;
    JB(this, !1)
};
A(QE, zB);
var yA = function(a, b) {
        C(a.b, function(a) {
            this.removeChild(a, !0)
        }, a);
        C(b, function(a, b) {
            this.c ? this.Mc(a, Cs(this, this.c), !0) : zs(this, a, !0);
            a.lc("gt-is-sg").id = "gt-is-si-" + b
        }, a);
        a.b = b
    },
    CA = function(a, b) {
        a.j && a.removeChild(a.j, !0);
        b && a.Mc(b, Cs(a, a.g) + 1, !0);
        a.j = b
    },
    DA = function(a, b) {
        (a = a.b[0]) && (a = a.lc(a.Ih ? "gt-is-ld-top" : Ac)) && X(a, b)
    };
QE.prototype.Sa = function(a) {
    return 27 == a.keyCode ? (this.setVisible(!1), a.stopPropagation(), a.preventDefault(), !0) : QE.w.Sa.call(this, a)
};
var RE = function(a, b, c) {
    var d = "ss";
    null != c && c && (d = "m" + d);
    this.A = b;
    xu.call(this, a, d, MSG_SYNONYMS_OF, MSG_SYNONYMS, 8);
    this.c = []
};
A(RE, xu);
w = RE.prototype;
w.update = function(a, b, c, d) {
    RE.w.update.call(this, a, b, c, d);
    if (!d || 0 == H(d, 11)) return !1;
    ul(this.b);
    this.bd();
    var e = c = 0;
    for (a = 0; a < H(d, 11); ++a) {
        var f = new Qq(ei(d, 11, a)),
            g = I(f, 2);
        c += f.a();
        for (b = 0; b < f.a(); ++b) e += H(f.b(b), 0)
    }
    if (b = 2 < c / H(d, 11) && 1 < e - c) a = MSG_N_MORE_SYNONYMS_LABEL.replace(ca, e - c), zu(this, a, MSG_FEWER_SYNONYMS_LABEL);
    c = 1 == c / H(d, 11);
    g && (this.xe = g, yu(this, g));
    for (a = 0; a < H(d, 11); ++a) {
        f = new Qq(ei(d, 11, a));
        g = P(k, {
            "class": yc
        });
        this.b.appendChild(g);
        Q(g, I(f, 0));
        g = f;
        f = c;
        e = b;
        var l = P("UL", {
            "class": "gt-syn-list"
        });
        var m = fk(this.Ia) ? Vd : sd;
        W(l, {
            direction: m
        });
        if (e) {
            m = P(Na, {
                "class": "gt-syn-span"
            });
            for (var p = P(k, {
                "class": Hc
            }, m), q = [], B = 0; B < g.a(); ++B) {
                var D = g.b(B);
                D = hi(D, 0, 0);
                if (!Pf(q, D)) {
                    q.push(D);
                    this.A || 0 < B && m.appendChild(pl(", "));
                    var K = P(Na, {
                        "class": xc
                    });
                    m.appendChild(K);
                    Q(K, D);
                    this.c.push(K)
                }
            }
            m = P(k, {
                "class": Ic
            }, p);
            l.appendChild(m)
        }
        for (m = 0; m < g.a(); ++m) {
            p = g.b(m);
            B = e;
            D = f ? k : "LI";
            q = P(Na, {
                "class": "gt-syn-span"
            });
            D = P(D, {
                "class": Hc
            }, q);
            B = Au(D, !B);
            for (D = 0; D < H(p, 0); ++D) K = P(Na, {
                "class": xc
            }), q.appendChild(K), Q(K, hi(p, 0,
                D)), this.g.push(K), this.A || D < H(p, 0) - 1 && q.appendChild(pl(", "));
            l.appendChild(B)
        }
        this.b.appendChild(l)
    }
    this.setVisible(!0);
    return !0
};
w.W = function() {
    RE.w.W.call(this);
    Z(this).G(this.l(), r, this.tm)
};
w.tm = function(a) {
    mr(a.target, xc) && this.dispatchEvent(new J("a", a.target))
};
w.Cd = function(a) {
    RE.w.Cd.call(this, a);
    for (var b = dl(Ic, this.l()), c = 0; c < b.length; c++) {
        var d = b[c],
            e = O(Hc, d),
            f = fs(e, td);
        e = Ur(e).height + f.top + f.bottom;
        W(d, "max-height", a ? 0 : e + Od)
    }
};
w.Jd = function() {
    return this.v ? RE.w.Jd.call(this) : this.c.length
};
w.jg = function(a) {
    return this.v ? RE.w.jg.call(this, a) : this.c.indexOf(a)
};
w.bd = function() {
    RE.w.bd.call(this);
    this.c = []
};
var SE = function(a, b) {
    this.C = Ko.J();
    this.F = ro.J();
    this.c = a;
    F || dh || fh || L(a, Ab, this.m, !1, this);
    this.a = b;
    for (a = 0; a < b.length; a++) L(b[a], wd, this.v, !1, this);
    this.g = this.b = null;
    this.o = this.j = !1
};
A(SE, vi);
SE.prototype.N = function() {
    SE.w.N.call(this);
    Wi(this.c, Ab, this.m, !1, this);
    this.c = null;
    for (var a = 0; a < this.a.length; a++) Wi(this.a[a], wd, this.v, !1, this);
    this.a = null
};
SE.prototype.m = function() {
    var a = Fz();
    a && this.c && (this.g = a, Mj(this.A, 0, this), N(Cc) && (this.j = Xr(N(Cc)), this.o = Xr(N(Dc)), X(N(Cc), !1), X(N(Dc), !1)), a = Wy(window).toString(), this.b = Iz(a))
};
SE.prototype.v = function(a) {
    var b = a.a.detail;
    1 < b && Ci(a) && Pf(this.a, a.target) && (a.preventDefault(), Hz(this.c), a = {}, a.clickCount = b, this.C.log("dblClickSelectall", a), b = this.F, R(b, S(b, 236)))
};
SE.prototype.A = function() {
    this.g && (this.g.select(), this.g = null);
    this.b && (xl(this.b), this.b = null);
    this.j && X(N(Cc), !0);
    this.o && X(N(Dc), !0)
};
var TE = Ze();
rf(TE);
var UE = function(a) {
        a: {
            var b = a.changedTouches[0];
            switch (a.type) {
                case Ee:
                    var c = wd;
                    break;
                case De:
                    c = xd;
                    break;
                case Ce:
                    c = Ad;
                    break;
                default:
                    b = null;
                    break a
            }
            var d = document.createEvent("MouseEvent");
            d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b = d
        }
        null != b && (a.changedTouches[0].target.dispatchEvent(b), a.preventDefault())
    },
    VE = Ch || Dh || Eh,
    WE = function(a, b) {
        VE && (b.addEventListener(Ee, UE, !0), b.addEventListener(De, UE, !0), b.addEventListener(Ce, UE, !0), b.addEventListener("touchcancel",
            UE, !0))
    };
var XE = function(a, b, c, d, e, f, g) {
    Y.call(this);
    this.g = Ko.J();
    this.A = b;
    this.I = c;
    this.B = d;
    this.K = e;
    this.c = a;
    this.b = this.j = null;
    this.v = f;
    this.m = null != g ? g : null;
    this.F = ro.J()
};
A(XE, Y);
w = XE.prototype;
w.setVisible = function(a) {
    a ? (this.g.log(wb, "show-" + this.c), Do(this.F, 17), this.j.setVisible(!0), this.v || (Do(this.F, 16), this.g.log(wb, "open-" + this.c), this.b.setVisible(!0), this.v = !0, Oo(this.g, ma + this.c))) : (this.j.setVisible(!1), this.b.setVisible(!1))
};
w.Z = function(a) {
    XE.w.Z.call(this, a);
    var b = P(Na, {
        id: this.c + "-button",
        style: Jb
    });
    a.appendChild(b);
    this.j = new Gt("", new bv("trans-verified-button", !0));
    this.j.S(b);
    a = this.b = new pE;
    a.c.b = b;
    sE(a);
    Tt(this.b.c, 1, 1, void 0);
    this.b.g = !1;
    this.b.ia();
    b = yr(Wp, {
        id: this.c,
        $f: this.A,
        Td: this.I,
        ck: this.B,
        url: this.K
    });
    rE(this.b, b);
    this.b.setVisible(!1);
    L(this.j, n, this.Zl, !1, this);
    b = O("vt-link", this.b.l());
    Z(this).G(b, r, this.um);
    b = O("vt-dismiss", this.b.l());
    Z(this).G(b, r, this.yk)
};
w.Zl = function() {
    VA(this.b.b) ? this.b.setVisible(!1) : (Do(this.F, 16), this.g.log(wb, "open-" + this.c), this.b.setVisible(!0))
};
w.um = function(a) {
    this.g.log(wb, "click-" + this.c);
    this.b.setVisible(!1);
    var b = this.F;
    R(b, Co(b, 72, 16));
    this.m && wx(this.m) && (this.m.reset(), a.preventDefault(), a.stopPropagation())
};
w.yk = function() {
    this.g.log(wb, "dismiss-" + this.c);
    var a = this.F;
    R(a, Co(a, 74, 16));
    this.b.setVisible(!1)
};
var YE = function(a) {
    this.a = Zr(sr(""));
    this.b = (tf(a) ? a.join(",") : a) + "{font-family:%FONT%arial,sans-serif!important}"
};
YE.prototype.set = function(a) {
    Yr(this.a, sr("" == a ? "" : this.b.replace("%FONT%", '"' + a + '",')))
};
var ZE = function() {
    hE.J();
    var a = gE("\u1288") == gE("\u1290"),
        b = iE("\u09a5\u09cd"),
        c = iE("\u1780\u17d1"),
        d = iE("\u0e81\u0ec8"),
        e = iE("\u0d15\u0d4d"),
        f = iE("\u1001\u1039\u1010"),
        g = iE("\u0da5\u0dca");
    var l = iE("\u0ba4\u0bcd") || gE("\u0bb1\u0bc6\u0bbe") + gE("\u0bb1") != gE("\u0bb1\u0bc6") + gE("\u0bb1\u0bbe");
    this.a = {
        am: a,
        bn: b,
        km: c,
        lo: d,
        ml: e,
        my: f,
        ps: !0,
        sd: !0,
        si: g,
        ta: l
    }
};
rf(ZE);
var $E = {
        "Noto Sans Ethiopic": "notosansethiopic",
        "Noto Naskh Arabic": "notonaskharabic",
        "Noto Sans Malayalam": "notosansmalayalam",
        "Noto Sans Myanmar": "notosansmyanmar",
        "Noto Sans Sinhala": "notosanssinhala"
    },
    aF = {
        Dhyana: Gh || ch || Eh || Dh || Ch
    },
    bF = {
        lo: kh && 0 <= Cg(Mt, "6.0")
    },
    cF = {
        am: "Noto Sans Ethiopic",
        bn: "Lohit Bengali",
        lo: "Dhyana",
        km: "Nokora",
        ml: "Noto Sans Malayalam",
        my: "Noto Sans Myanmar",
        ps: Ia,
        sd: Ia,
        si: "Noto Sans Sinhala",
        ta: "Lohit Tamil"
    },
    dF = function() {
        this.a = {};
        ZE.J()
    };
rf(dF);
var hF = function() {
        this.j = ZE.J();
        this.b = dF.J();
        this.a = new YE(eF);
        this.c = new YE(fF);
        this.g = new YE(gF)
    },
    eF = ["body", "#gb"],
    fF = "#source .gt-hl-layer .gt-baf-translations .round-trip-content .vk-cap .vk-t .orig".split(" "),
    gF = "#result_box .gt-baf-word .gt-baf-word-clickable .alt-menu .gt-ex-translate #alt-input-text .text-wrap".split(" "),
    iF = function(a, b, c) {
        a: {
            var d = bF[c],
                e = a.j.a[c];
            if ((null == d || !d) && null != e && e && (c = cF[c], null != c && (d = aF[c], null == d || !d))) break a;
            c = ""
        }
        a = a.b;
        if ("" != c && null == a.a[c]) {
            a = a.a;
            e =
                d = c;
            var f = new ap;
            null != $E[e] ? f.o = "/earlyaccess/" + $E[e] + ".css" : (f.o = "/css", f.a.set("family", e));
            a[d] = Zr(sr("@import url(//fonts.googleapis.com" + f.toString() + ");"))
        }
        b.set(c)
    },
    jF = function(a, b) {
        iF(a, a.a, b)
    },
    kF = function(a, b) {
        iF(a, a.c, b)
    },
    lF = function(a, b) {
        iF(a, a.g, b)
    };
var pF = function(a) {
        var b = N("gt-res-tools-l"),
            c = N(Gc);
        N("gt-res-tools-r").style.display = "";
        if (Fh && xn(43) || F && wh(11) || dh || ch && wh(29) || Bh && xn(41) || Gh && xn(10)) {
            var d = new Gt(MSG_COPY, new bv("copy-button"));
            d.S(mF("gt-res-copy", b));
            d.setVisible(!1);
            a.b = d
        } else MSG_SELECT_ALL && "" != MSG_SELECT_ALL && (d = new Gt(MSG_SELECT_ALL, new bv("select-button")), d.S(mF("gt-res-select", b)), d.setVisible(!1), a.b = d);
        a.X = nF("gt-res-listen", b);
        a.U = nF("gt-src-listen", c);
        !IN_CHINA && jq && (a.a = P(k, {
            id: zc,
            style: "display:inline-block"
        }),
            c.appendChild(a.a), MSG_SHARE && (c = new Gt(MSG_SHARE, new bv("share-button")), c.S(mF("gt-res-share", b)), c.setVisible(!1), a.R = c));
        a.K = oF();
        a.ob = oF();
        a.v = rq;
        return a
    },
    mF = function(a, b) {
        a = P(k, {
            id: a,
            style: Jb
        });
        b.appendChild(a);
        return a
    },
    nF = function(a, b) {
        var c = new $u(MSG_LISTEN, void 0, new bv(Fe));
        c.S(mF(a, b));
        c.setVisible(!1);
        return c
    },
    oF = function() {
        var a = new Gt(MSG_CLEAR_TEXT, new bv("clear-button"));
        a.S(P(k, {
            id: "gt-clear",
            style: Jb,
            tabindex: "0"
        }));
        a.setVisible(!1);
        return a
    };
var qF = function(a, b) {
    this.j = "";
    this.b = 0;
    this.I = Ko.J();
    this.F = ro.J();
    this.O = a;
    this.B = P("A", {
        href: "javascript:;",
        id: "gt-bbar-dm"
    }, MSG_DISMISS);
    this.g = P("A", {
        id: "gt-bbar-lm"
    });
    this.A = P(Na);
    a = P(Na);
    a.appendChild(this.A);
    a.appendChild(this.g);
    a.appendChild(this.B);
    L(this.B, r, this.K, !1, this);
    L(this.g, r, this.M, !1, this);
    dA.call(this, a, b)
};
A(qF, dA);
var rF = {
    chromepromo: 18,
    sandbox: 19,
    hiring: 20
};
qF.prototype.log = function(a) {
    this.I.log(a, {
        hl: this.O,
        type: this.j
    })
};
var sF = function(a) {
    if (!dg(MSG_BUTTER_BAR_DESC) || !dg(MSG_BUTTER_BAR_BUTTON)) {
        a.j = BUTTER_BAR_LOGTYPE;
        var b = rF[a.j];
        a.b = null != b ? b : 0;
        Q(a.A, MSG_BUTTER_BAR_DESC);
        Q(a.g, MSG_BUTTER_BAR_BUTTON);
        a.g.href = BUTTER_BAR_URL;
        a.setVisible(!0)
    }
};
qF.prototype.setVisible = function(a) {
    a && (Do(this.F, this.b), this.log("bbarshow"));
    qF.w.setVisible.call(this, a)
};
qF.prototype.M = function() {
    this.setVisible(!1);
    var a = this.F;
    R(a, Co(a, 72, this.b));
    this.log("bbarlm")
};
qF.prototype.K = function() {
    this.setVisible(!1);
    var a = this.F;
    R(a, Co(a, 74, this.b));
    Oo(this.I, "/translate/uc?ua=dismiss&uav=" + this.j)
};
var tF = $e("a"),
    uF = function(a, b, c) {
        var d = N(a);
        d ? X(d, b) : c && null.Fm("Element was not found on the page. ID=" + a)
    },
    vF = function(a, b) {
        uF("file", b, !1);
        uF("file_div", b, !1);
        b && (a = a.a, null != a.Cf && a.Cf.fk())
    },
    yF = function(a, b) {
        uF("gt-src-wrap", b, !0);
        wF(b);
        xF(a.a)
    },
    wF = function(a) {
        if (a) {
            a = N(Fc);
            for (var b = 0, c = a.childNodes.length; b < c; b++)
                //if (a.childNodes[b].style.display != Cd) {
                if (a.childNodes[b].id != null && a.childNodes[b].style.display != Cd) {
                    uF(Fc, !0, !0);
                    return
                }
        }
        uF(Fc, !1, !0)
    };
var zF = Ze();
zF.prototype.a = function(a) {
    var b = document.body;
    switch (a.mo) {
        case "sm":
            U(b, "e_sm");
            V(b, "e_md");
            V(b, "e_lg");
            break;
        case "lg":
            U(b, "e_lg");
            V(b, "e_sm");
            V(b, "e_md");
            break;
        default:
            U(b, "e_md"), V(b, "e_sm"), V(b, "e_lg")
    }
    if (b = document.getElementById("contentframe")) {
        var c = 0,
            d = document.getElementById("wtgbr"),
            e = fs(d, td).top;
        a = a.es.h;
        var f = N("gt-logo");
        null != f && (a += Ur(f).height);
        0 == e ? c += a : a != -e && W(d, ud, -a + Od);
        (d = document.getElementById("gt-appbar")) && (c += Ur(d).height);
        Gr(b, 0, c)
    }
};
var AF = function() {
    J.call(this, Ne)
};
A(AF, J);
var BF = function(a) {
    J.call(this, je);
    this.Bd = a
};
A(BF, J);
var CF = /^[\w+/_-]+[=]{0,2}$/;
var DF = function(a, b) {
        this.a = N("gt-feedback");
        this.c = a;
        this.g = b
    },
    EF = ["file", "gt-otf-switch", "gt-tl", "gt-res-listen", Sd, ke, ie, "gt-sl", "gt-src-listen", Qd, me],
    FF = function(a) {
        null != a.a && L(a.a, r, a.b, !1, a)
    };
DF.prototype.b = function() {
    var a = {
        productId: "275",
        locale: this.g
    };
    IN_CHINA && (a.serverUri = "//www.google.cn/tools/feedback");
    var b = this.c,
        c = {
            NO_CACHE_RESULT: b.Df ? (new Zl).cd(b.Df) : "not found"
        };
    c.DISPLAY_LANGUAGE = b.a;
    c.SOURCE_LANGUAGE = ux(b);
    c.TARGET_LANGUAGE = vx(b);
    c.ACTUAL_SOURCE = GF(b);
    c.SOURCE_TEXT = HF(b);
    c.TARGET_TEXT = b.Ca();
    c.SOURCE_STATIC = Kw(b.ba.A.a);
    c.TARGET_STATIC = Kw(b.ba.H.a);
    c.BOTTOM_SUGG = Kw(b.ba.C.a);
    GF(b) == vx(b) || dg(HF(b)) || dg(b.Ca()) || HF(b) != b.Ca() || (c.IDENTICAL_TRANSLATION = "1");
    window.JS_ERR_COUNT &&
    (c.JS_ERR_COUNT = JS_ERR_COUNT, c.JS_ERR_ARR = JS_ERR_ARR);
    null != b.M && (c.TTL = b.ji - b.M);
    null != b.zf && (c.TTNC = b.zf);
    0 < EXPERIMENT_IDS.length && (c.EXP = EXPERIMENT_IDS.join(","));
    b.ke && (b = b.ke, b = 10 * (b.b - 1) + b.j, 0 <= b && (c.HATS = b));
    for (var d in EF) {
        var e = EF[d];
        b = document.getElementById(e);
        e = "ELEMENT[id:" + e + "]";
        c[e] = b ? "exists" : "missing";
        b && ("value" in b && (c[e + ".value"] = "" + b.value), "" != Ql(b) && (c[e + ".innerText"] = "" + Ql(b)))
    }
    try {
        a.timeOfStartCall = (new Date).getTime();
        var f = x.document;
        a: {
            var g = (x || x).document.querySelector("script[nonce]");
            if (g) {
                var l = g.nonce || g.getAttribute("nonce");
                if (l && CF.test(l)) {
                    var m = l;
                    break a
                }
            }
            m = void 0
        }
        m && (a.nonce = m);
        if ("help" == a.flow) {
            var p = pf("document.location.href", x);
            !a.helpCenterContext && p && (a.helpCenterContext = p.substring(0, 1200));
            g = !0;
            if (c && JSON && JSON.stringify) {
                var q = JSON.stringify(c);
                (g = 1200 >= q.length) && (a.psdJson = q)
            }
            g || (c = {
                invalidPsd: !0
            })
        }
        q = [a, c, void 0];
        x.GOOGLE_FEEDBACK_START_ARGUMENTS = q;
        var B = a.serverUri || "//www.google.com/tools/feedback",
            D = x.GOOGLE_FEEDBACK_START;
        if (D) D.apply(x, q);
        else {
            B += "/load.js?";
            for (var K in a) {
                var ea = a[K];
                null != ea && !wf(ea) && (B += encodeURIComponent(K) + "=" + encodeURIComponent(ea) + "&")
            }
            var ha = Ul(al(f), La);
            m && ha.setAttribute("nonce", m);
            var Ra = tr(B);
            ha.src = ik(Ra);
            f.body.appendChild(ha)
        }
    } catch (Pa) {}
};
var IF = function(a, b, c) {
    jB.call(this, a, b, c);
    this.Fa(8, !0)
};
A(IF, jB);
IF.prototype.wc = function() {
    return this.dispatchEvent(n)
};
pt(hc, function() {
    return new IF(null)
});
var JF = Ze();
A(JF, Xu);
rf(JF);
JF.prototype.vb = function(a) {
    return JF.w.vb.call(this, a && a.firstChild)
};
JF.prototype.S = function(a, b) {
    var c = cl("*", bc, b)[0];
    if (c) {
        X(c, !1);
        $k(c).body.appendChild(c);
        var d = new OB;
        d.S(c);
        a.zd(d)
    }
    return JF.w.S.call(this, a, b)
};
JF.prototype.Ae = function(a, b) {
    return JF.w.Ae.call(this, [b.b(k, ac + (this.T() + da), a), b.b(k, ac + (this.T() + ja), "\u00a0")], b)
};
JF.prototype.T = v(cc);
var KF = function(a, b, c, d, e) {
    Gt.call(this, a, c || JF.J(), d);
    this.Fa(64, !0);
    this.B = new wB(null, 9);
    b && this.zd(b);
    this.M = new Kj(500);
    !Ch && !Dh || wh("533.17.9") || (this.jf = !0);
    this.yc = e || sB.J()
};
A(KF, Gt);
w = KF.prototype;
w.jf = !1;
w.W = function() {
    KF.w.W.call(this);
    LF(this, !0);
    this.b && MF(this, this.b, !0);
    Us(this.D, Jc, !!this.b)
};
w.hb = function() {
    KF.w.hb.call(this);
    LF(this, !1);
    if (this.b) {
        this.Na(!1);
        this.b.hb();
        MF(this, this.b, !1);
        var a = this.b.l();
        a && xl(a)
    }
};
w.N = function() {
    KF.w.N.call(this);
    this.b && (this.b.Ba(), delete this.b);
    delete this.ed;
    this.M.Ba()
};
w.Ya = function(a) {
    KF.w.Ya.call(this, a);
    this.kb() && (this.Na(!this.Ha(64), a), this.b && (this.b.vc = this.Ha(64)))
};
w.jb = function(a) {
    KF.w.jb.call(this, a);
    this.b && !this.kb() && (this.b.vc = !1)
};
w.wc = function() {
    yt(this, !1);
    return !0
};
w.zk = function(a) {
    this.b && this.b.isVisible() && !this.vg(a.target) && this.Na(!1)
};
w.vg = function(a) {
    return a && El(this.l(), a) || this.b && PB(this.b, a) || !1
};
w.Uc = function(a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(), a.type != md) return !0
    } else if (a.type != jd) return !1;
    if (this.b && this.b.isVisible()) {
        var b = 13 == a.keyCode || 32 == a.keyCode,
            c = this.b.Sa(a);
        return 27 == a.keyCode || b ? (this.Na(!1), !0) : c
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Na(!0, a), !0) : !1
};
w.zg = function() {
    this.Na(!1)
};
w.Hk = function() {
    this.kb() || this.Na(!1)
};
w.Se = function(a) {
    this.jf || this.Na(!1);
    KF.w.Se.call(this, a)
};
var NF = function(a) {
    a.b || a.zd(new OB(a.a, a.yc));
    return a.b || null
};
KF.prototype.zd = function(a) {
    var b = this.b;
    if (a != b && (b && (this.Na(!1), this.va && MF(this, b, !1), delete this.b), this.va && Us(this.D, Jc, !!a), a)) {
        this.b = a;
        vs(a, this);
        a.setVisible(!1);
        var c = this.jf;
        (a.K = c) && JB(a, !0);
        this.va && MF(this, a, !0)
    }
    return b
};
KF.prototype.Ve = function(a) {
    zs(NF(this), a, !0)
};
KF.prototype.Wc = function(a) {
    var b = NF(this);
    (a = b.removeChild(As(b, a), !0)) && a.Ba()
};
var OF = function(a, b) {
    return a.b ? As(a.b, b) : null
};
KF.prototype.Oa = function() {
    return this.b ? ys(this.b) : 0
};
KF.prototype.setVisible = function(a, b) {
    (a = KF.w.setVisible.call(this, a, b)) && !this.isVisible() && this.Na(!1);
    return a
};
KF.prototype.ea = function(a) {
    KF.w.ea.call(this, a);
    this.isEnabled() || this.Na(!1)
};
KF.prototype.Na = function(a, b) {
    KF.w.Na.call(this, a);
    if (this.b && this.Ha(64) == a) {
        if (a) this.b.va || this.b.ia(), this.Za = Lr(this.l()), this.La = Vr(this.l()), PF(this), !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.cc(-1) : FB(this.b);
        else {
            yt(this, !1);
            this.b.vc = !1;
            var c = this.l();
            c && (Us(c, Za, ""), Us(c, "owns", ""));
            null != this.O && (this.O = void 0, (c = this.b.l()) && Tr(c, "", ""))
        }
        this.b.setVisible(a, !1, b);
        this.hc || (b = Z(this), c = a ? b.G : b.Aa, c.call(b, this.a.a, wd, this.zk, !0), this.jf && c.call(b, this.b, kb, this.Hk), c.call(b, this.M, Ae, this.Qb),
            a ? this.M.start() : this.M.stop())
    }
    this.b && this.b.l() && this.b.D.removeAttribute("aria-hidden")
};
var PF = function(a) {
    if (a.b.va) {
        var b = a.B;
        a.B.b = a.ed || a.l();
        var c = a.b.l();
        a.b.isVisible() || (c.style.visibility = Mc, X(c, !0));
        !a.O && a.B.m && a.B.j & 32 && (a.O = Ur(c));
        b.a(c, b.g ^ 1, null, a.O);
        a.b.isVisible() || (X(c, !1), c.style.visibility = Se)
    }
};
KF.prototype.Qb = function() {
    var a = Vr(this.l()),
        b = Lr(this.l());
    var c = this.La;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.Za, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    c && (this.La = a, this.Za = b, PF(this))
};
var MF = function(a, b, c) {
        var d = Z(a);
        c = c ? d.G : d.Aa;
        c.call(d, b, n, a.zg);
        c.call(d, b, "close", a.Bb);
        c.call(d, b, Oc, a.Ob);
        c.call(d, b, Pe, a.Pb)
    },
    LF = function(a, b) {
        var c = Z(a);
        (b ? c.G : c.Aa).call(c, a.l(), kd, a.Rb)
    };
KF.prototype.Ob = function(a) {
    (a = a.target.l()) && QF(this, a)
};
KF.prototype.Rb = function(a) {
    ht(this, 32) && this.l() && this.b && this.b.isVisible() && a.stopPropagation()
};
KF.prototype.Pb = function() {
    if (!qA(this.b)) {
        var a = this.l();
        Us(a, Za, "");
        Us(a, "owns", "")
    }
};
KF.prototype.Bb = function(a) {
    if (this.Ha(64) && a.target instanceof jB) {
        a = a.target;
        var b = a.l();
        a.isVisible() && a.Ha(2) && null != b && QF(this, b)
    }
};
var QF = function(a, b) {
    a = a.l();
    b = Ws(b) || b;
    if (!b.id) {
        var c = ps.J();
        b.id = ":" + (c.a++).toString(36)
    }
    Xs(a, b);
    Us(a, "owns", b.id)
};
pt(cc, function() {
    return new KF(null)
});
var SF = function(a) {
    M.call(this);
    this.a = [];
    RF(this, a)
};
A(SF, M);
SF.prototype.b = null;
SF.prototype.Oa = function() {
    return this.a.length
};
var RF = function(a, b) {
        b && (C(b, function(a) {
            TF(a, !1)
        }, a), Wf(a.a, b))
    },
    UF = function(a, b, c) {
        b && (TF(b, !1), Yf(a.a, c, 0, b))
    };
SF.prototype.mc = function() {
    var a = this.b;
    return a ? Hf(this.a, a) : -1
};
var VF = function(a) {
    var b = a.a;
    if (!tf(b))
        for (var c = b.length - 1; 0 <= c; c--) delete b[c];
    b.length = 0;
    a.b = null
};
SF.prototype.N = function() {
    SF.w.N.call(this);
    delete this.a;
    this.b = null
};
var TF = function(a, b) {
    a && typeof a.Xg == Ub && a.Xg(b)
};
var WF = function(a, b, c, d, e) {
    KF.call(this, a, b, c, d, e || new sB("listbox"));
    this.V = this.Da();
    this.Y = null;
    this.sg = "listbox"
};
A(WF, KF);
w = WF.prototype;
w.za = null;
w.W = function() {
    WF.w.W.call(this);
    XF(this);
    YF(this)
};
w.Z = function(a) {
    WF.w.Z.call(this, a);
    (a = this.Va()) ? (this.V = a, XF(this)) : ZF(this) || $F(this, 0)
};
w.N = function() {
    WF.w.N.call(this);
    this.za && (this.za.Ba(), this.za = null);
    this.V = null
};
w.zg = function(a) {
    aG(this, a.target);
    WF.w.zg.call(this, a);
    a.stopPropagation();
    this.dispatchEvent(n)
};
w.Nk = function() {
    var a = ZF(this);
    WF.w.Pe.call(this, a && a.P());
    XF(this)
};
w.zd = function(a) {
    var b = WF.w.zd.call(this, a);
    a != b && (this.za && VF(this.za), a && (this.za ? xs(a, function(a) {
        bG(a);
        var b = this.za;
        UF(b, a, b.Oa())
    }, this) : cG(this, a)));
    return b
};
w.Ve = function(a) {
    bG(a);
    WF.w.Ve.call(this, a);
    if (this.za) {
        var b = this.za;
        UF(b, a, b.Oa())
    } else cG(this, NF(this));
    dG(this)
};
w.Wc = function(a) {
    WF.w.Wc.call(this, a);
    if (this.za) {
        var b = this.za;
        (a = b.a[a] || null) && Sf(b.a, a) && a == b.b && (b.b = null, b.dispatchEvent(Xd))
    }
};
var aG = function(a, b) {
        if (a.za) {
            var c = ZF(a),
                d = a.za;
            b != d.b && (TF(d.b, !1), d.b = b, TF(b, !0));
            d.dispatchEvent(Xd);
            b != c && a.dispatchEvent(rb)
        }
    },
    $F = function(a, b) {
        a.za && aG(a, a.za.a[b] || null)
    };
WF.prototype.Pe = function(a) {
    if (null != a && this.za)
        for (var b = 0, c; c = this.za.a[b] || null; b++)
            if (c && typeof c.P == Ub && c.P() == a) {
                aG(this, c);
                return
            }
    aG(this, null)
};
WF.prototype.P = function() {
    var a = ZF(this);
    return a ? a.P() : null
};
var ZF = function(a) {
    return a.za ? a.za.b : null
};
WF.prototype.mc = function() {
    return this.za ? this.za.mc() : -1
};
var cG = function(a, b) {
        a.za = new SF;
        b && xs(b, function(a) {
            bG(a);
            var b = this.za;
            UF(b, a, b.Oa())
        }, a);
        YF(a)
    },
    YF = function(a) {
        a.za && Z(a).G(a.za, Xd, a.Nk)
    },
    XF = function(a) {
        var b = ZF(a);
        a.g(b ? b.Va() : a.V);
        var c = a.c.vb(a.l());
        c && a.a.$k(c) && (null == a.Y && (a.Y = Vs(c, nd)), b = (b = b ? b.l() : null) ? Vs(b, nd) : a.Y, Us(c, nd, b), dG(a))
    },
    dG = function(a) {
        var b = a.c;
        if (b && (b = b.vb(a.l()))) {
            var c = a.D;
            b.id || (b.id = ":" + (ps.J().a++).toString(36));
            Ts(b, "option");
            Us(c, Za, b.id);
            a.za && (c = Vf(a.za.a), Us(b, "setsize", eG(c)), a = a.za.mc(), Us(b, "posinset", 0 <=
            a ? eG(Xf(c, 0, a + 1)) : 0))
        }
    },
    eG = function(a) {
        return Nf(a, function(a) {
            return a instanceof jB
        })
    },
    bG = function(a) {
        a.sg = a instanceof jB ? "option" : $d
    };
WF.prototype.Na = function(a, b) {
    WF.w.Na.call(this, a, b);
    this.Ha(64) ? NF(this).cc(this.mc()) : dG(this)
};
pt("goog-select", function() {
    return new WF(null)
});
var hG = function(a, b, c, d, e, f, g, l, m) {
    c = new fG(c);
    WF.call(this, "", c, g, l);
    this.B.c && this.B.c(33);
    this.Ea = a;
    this.sb = a.id;
    ts(c, this.sb + "-menu");
    this.U = [];
    this.R = null;
    this.ma = null != f ? f : "";
    this.Tb = !!m;
    for (a = 0; a < b.length; a++) {
        var p;
        f = null != d && a < d.length && null != d[a] ? d[a] : b[a];
        f != $d ? p = new IF(b[a], f) : p = new NB;
        this.Ve(p)
    }
    this.S(this.Ea);
    Vz(this, null != e ? e : gG(this, 0))
};
A(hG, WF);
hG.prototype.g = function(a) {
    this.Tb ? a = this.ma : this.ma && (a = this.ma + " " + a);
    hG.w.g.call(this, a)
};
var iG = function(a) {
    a.R && (Nj(a.R), a.R = null);
    a.R = Mj(function() {
        a.U = []
    }, 1E3)
};
hG.prototype.N = function() {
    xl(this.Ea);
    this.Ea = null;
    hG.w.N.call(this)
};
hG.prototype.Sa = function(a) {
    if (!this.Ha(64) && 48 <= a.keyCode && 90 >= a.keyCode) {
        iG(this);
        this.U.push(String.fromCharCode(a.keyCode));
        a = this.U.join("");
        var b = new RegExp("^" + xg(a), "i"),
            c = this.mc(),
            d = c; - 1 < d && 1 < a.length && d--;
        var e = this.Oa(),
            f = 0 > d ? 0 : d,
            g = !1,
            l = !1;
        do {
            ++d;
            d == e && (d = 0, g = !0);
            var m = OF(this, d);
            if (m instanceof jB && (m = m.Va()) && m.match(b)) {
                l = !0;
                break
            }
            g && d == f && 3 == a.length && (m = a.split(""), m[1] == m[2] && (b = new RegExp("^" + m[1], "i"), this.U = [m[1]], g = !1))
        } while (!g || d != f);
        l && d != c && $F(this, d);
        return !0
    }
    return hG.w.Sa.call(this,
        a)
};
hG.prototype.Wc = function(a) {
    var b = this.mc();
    hG.w.Wc.call(this, a);
    (a == b || -1 === b) && OF(this, 0) instanceof jB && $F(this, 0)
};
var jG = function(a, b) {
        if (b) {
            for (var c, d = 0; c = OF(a, d); d++)
                if (c instanceof jB && c.P() == b) return OF(a, d).Va();
            return ""
        }
        return OF(a, a.mc()).Va()
    },
    kG = function(a, b) {
        var c = a.P() == gb;
        if ("" != b)
            for (var d, e = 0; d = OF(a, e); e++)
                if (d instanceof jB && d.P() == gb) {
                    d.Va() != b && (d.g(b), c && a.g(b));
                    break
                }
    },
    Vz = function(a, b) {
        a: {
            for (var c, d = 0; c = OF(a, d); d++)
                if (c instanceof jB && c.P() == b) {
                    b = d;
                    break a
                }
            b = -1
        }
        0 <= b && $F(a, b)
    },
    gG = function(a, b) {
        var c = "";
        a = OF(a, b);
        a instanceof jB && (c = a.P());
        return c
    };
hG.prototype.P = function() {
    var a = this.mc();
    return -1 != a ? gG(this, a) : ""
};
var fG = function(a, b, c) {
    this.b = a;
    this.m = [];
    this.B = [];
    OB.call(this, b, c)
};
A(fG, OB);
w = fG.prototype;
w.Xh = P(k, {
    id: "goog-menuitem-group-",
    "class": fc
});
w.Bg = !1;
w.dd = 0;
w.sa = function() {
    fG.w.sa.call(this);
    this.l().id = ss(this)
};
w.Mc = function(a, b, c) {
    this.Bg && (this.c = b == ys(this) ? this.g[b - 1] : this.g[b]);
    fG.w.Mc.call(this, a, b, c);
    this.c && (this.c = null, lG(this))
};
w.removeChild = function(a, b) {
    mf(a) && (a = us(this, a));
    var c = Cs(this, a);
    this.Bg && (this.c = 0 == c ? this.g[c + 1] : this.g[c]);
    a = fG.w.removeChild.call(this, a, b);
    this.c && (this.c = null, lG(this));
    return a
};
w.Lb = function() {
    var a;
    this.c ? a = this.c : a = fG.w.Lb.call(this);
    return a
};
w.ia = function(a) {
    fG.w.ia.call(this, a);
    lG(this);
    WE(TE.J(), this.l())
};
w.S = function(a) {
    fG.w.S.call(this, a);
    lG(this);
    WE(TE.J(), this.l())
};
var lG = function(a) {
        a.Bg = !0;
        mG(a);
        var b = a.l();
        b.innerHTML = "";
        var c = [],
            d = 0;
        var e = document.createElement("table");
        var f = e.insertRow(-1);
        for (var g = 0, l; l = a.j[g]; g++) {
            var m = f.insertCell(f.cells.length);
            m.appendChild(l);
            l.style.width = "100%";
            mr(l, Zb) ? (c.push(m), f = e.insertRow(e.rows.length)) : d++
        }
        for (g = 0; m = c[g]; g++) m.setAttribute("colspan", d), m.colSpan = d;
        b.appendChild(e)
    },
    nG = function(a, b, c) {
        Pf(a.j, b.zb) || a.j.push(b.zb);
        As(a, c + 1) && (b.zb = a.Xh.cloneNode(!0), b.zb.id += b.Ai, b.Ai++, b.$e = 1);
        return b
    },
    mG = function(a) {
        a.j = [];
        a.g = {};
        var b = a.Xh.cloneNode(!0);
        b.id += 1;
        var c = {
            zb: b,
            Ai: 2,
            $e: 1
        };
        xs(a, function(a, b) {
            c.zb.appendChild(a.l());
            this.g[b] = c.zb;
            c.$e == this.b ? c = nG(this, c, b) : a instanceof jB && c.$e++;
            Pf(this.B, b) && (V(c.zb, fc), U(c.zb, Zb), this.g[b] = c.zb, c = nG(this, c, b))
        }, a);
        1 == c.$e || Pf(a.j, c.zb) || a.j.push(c.zb)
    };
fG.prototype.setVisible = function(a, b) {
    (a = fG.w.setVisible.call(this, a, b)) && this.dd && (Nj(this.dd), this.dd = 0);
    return a
};
fG.prototype.Nd = function(a) {
    var b = fG.w.Nd.call(this, a);
    if (b) return b;
    switch (a.keyCode) {
        case 37:
            return KB(this, z(this.v, this), this.ya), !0;
        case 39:
            return KB(this, z(this.A, this), this.ya), !0;
        default:
            return 48 <= a.keyCode && 90 >= a.keyCode ? (oG(this), this.m.push(String.fromCharCode(a.keyCode)), this.ii(this.m.join("")), !0) : !1
    }
};
var oG = function(a) {
    a.dd && (Nj(a.dd), a.dd = 0);
    a.dd = Mj(function() {
        this.m = []
    }, 1E3, a)
};
fG.prototype.ii = function(a) {
    var b = new RegExp("^" + xg(a), "i"),
        c = this.ya; - 1 < c && 1 < a.length && c--;
    KB(this, function(a, c) {
        var d = 0 > a ? 0 : a,
            e = !1;
        do {
            ++a;
            a == c && (a = 0, e = !0);
            var l = As(this, a).Va();
            if (l && l.match(b)) return a
        } while (!e || a != d);
        return this.ya
    }, c)
};
fG.prototype.v = function(a, b) {
    a -= this.b;
    var c;
    0 > a && (c = a + b + (Math.ceil(b / this.b) * this.b - b) + this.b);
    return c || a
};
fG.prototype.A = function(a, b) {
    a += this.b;
    var c;
    a > b && (c = a - b - (Math.ceil(b / this.b) * this.b - b) - this.b);
    return c || a
};
var pG = Ze();
A(pG, kt);
rf(pG);
w = pG.prototype;
w.Wa = function(a) {
    var b = ct(this, a);
    b = a.a.b(k, ac + b.join(" "), a.Da());
    lt(b, a.m);
    return b
};
w.ac = v(nb);
w.Ec = function(a) {
    return a.tagName == k
};
w.S = function(a, b) {
    U(b, $b);
    return pG.w.S.call(this, a, b)
};
w.P = v("");
w.T = v(Xb);
pt(Xb, function() {
    return new Gt(null, pG.J())
});
var qG = Ze();
A(qG, pG);
rf(qG);
qG.prototype.Wa = function(a) {
    var b = ct(this, a);
    b = a.a.b(k, ac + b.join(" "), [rG(this, a.Da(), a.a), sG(this, a.a)]);
    lt(b, a.m);
    return b
};
qG.prototype.vb = function(a) {
    return a && a.firstChild
};
qG.prototype.S = function(a, b) {
    var c = cl("*", bc, b)[0];
    if (c) {
        X(c, !1);
        a.a.a.body.appendChild(c);
        var d = new OB;
        d.S(c);
        a.zd(d)
    }
    cl("*", this.T() + da, b)[0] || b.appendChild(rG(this, b.childNodes, a.a));
    cl("*", this.T() + ja, b)[0] || b.appendChild(sG(this, a.a));
    return qG.w.S.call(this, a, b)
};
var rG = function(a, b, c) {
        return c.b(k, ac + (a.T() + da), b)
    },
    sG = function(a, b) {
        return b.b(k, {
            "class": ac + (a.T() + ja),
            "aria-hidden": !0
        }, "\u00a0")
    };
qG.prototype.T = v(Yb);
pt(Yb, function() {
    return new KF(null, null, qG.J())
});
var tG = function(a, b) {
    this.v = N(a);
    this.aa = b;
    var c = this.v.id + "-gms",
        d = cl("option", null, this.v);
    a = [];
    b = [];
    for (var e, f = 0; e = d[f]; f++) {
        var g = Ql(e);
        a.push(g);
        b.push(e.value);
        if (e.selected) var l = e.value
    }
    this.K = P(Fa, {
        type: Mc,
        id: this.v.id,
        name: this.v.name,
        value: l
    });
    vl(this.K, this.v);
    d = document.getElementById(c);
    null == d && (d = P(k, {
        id: c
    }), vl(d, this.v));
    c = "";
    e = cl(nd);
    for (f = 0; g = e[f]; f++) g.htmlFor && g.htmlFor == this.v.id && (c = Ql(g), xl(g));
    f = qG.J();
    hG.call(this, d, a, 16, b, l, c, f, void 0, "" == c);
    "" == c && (nt(this.c, this, 1), U(this.l(),
        "gt-gms-icon"));
    L(this, rb, this.bb, !1, this);
    xl(this.v);
    this.ra = 3;
    this.xa = {};
    L(this, [de, n], this.Ub, !1, this);
    this.F = ro.J()
};
A(tG, hG);
tG.prototype.N = function() {
    xl(this.K);
    this.K = null;
    tG.w.N.call(this)
};
tG.prototype.Ub = function(a) {
    if (a.type == de) this.xc = Df(), yo(this.F, this.aa ? 82 : 83);
    else {
        var b = a.target.P();
        a = a.currentTarget.mc();
        this.aa && 0 < a && a--;
        zo(this.F, this.aa, 0, b, a)
    }
    b && (this.xa.ct = (Df() - this.xc).toString())
};
tG.prototype.bb = function() {
    var a = this.P();
    this.K.value != a && (this.K.value = a)
};
var uG = function(a) {
    var b = [];
    var c = a.Oa();
    for (var d = 0; d < a.ra + 1 && d < c; d++) {
        if (OF(a, d) instanceof NB) {
            for (c = 0; c < d; c++) b.push(gG(a, c));
            break
        }
        if (gG(a, d) == gb) break
    }
    if (b.length) {
        d = a.P();
        c = 0;
        for (b = b.length + 1; c < b; c++) a.Wc(0);
        Vz(a, d)
    } else OF(a, 0) instanceof NB && a.Wc(0)
};
tG.prototype.Ra = function(a) {
    var b = a.data;
    a = [];
    for (var c = 0; c < b.length; ++c) b[c] != this.P() && a.push(b[c]);
    for (b = 0; c = OF(this, b); b++) c.P && c.P() && (-1 != Hf(a, c.P()) ? U(c.l(), ec) : V(c.l(), ec))
};
var vG = $e("Hb"),
    wG = function(a, b, c, d) {
        L(b, ne, c.Ra, !1, c);
        L(b, ye, d.Ra, !1, d);
        c = a.Hb;
        L(b, oe, c.ma, !1, c);
        a = a.Hb;
        L(b, ze, a.ma, !1, a)
    };
vG.prototype.a = function(a) {
    for (var b = 0; b < arguments.length; b++) {
        var c = arguments[b];
        if (null != c && null != c.l()) {
            var d = this.Hb;
            L(c.l(), r, d.ma, !1, d)
        }
    }
};
var xG = function() {
    this.j = null;
    this.A = this.C = this.g = this.c = this.M = this.Y = this.O = this.V = this.wa = this.I = "";
    this.b = this.L = this.a = this.K = this.U = this.X = this.R = null;
    this.B = 0;
    this.o = !1;
    this.H = -1;
    this.v = !1
};
var yG = function(a) {
        return '<div id="gt-apb-pb" style="display:none"><div id="gt-pb-tt">' + T(a.Rg) + '</div><div id="gt-apb-pb-r"><input id="gt-pb-sb" type="text"><div id="pb-back-c" class="goog-inline-block"></div><button id="gt-pb-sbt" class="jfk-button jfk-button-action"><span class="jfk-button-img"></span></button><div id="gt-pb-sw2" class="goog-inline-block"></div></div></div>'
    },
    zG = function(a) {
        return '<div id="gt-pb-c" style="display:none"><div id="gt-pb"><div id="gt-pb-pt">' + T(a.Rg) + '</div><div id="pb-tool" class="goog-toolbar"><div id="pb-cb-a" class="goog-inline-block"></div><div id="pb-dd" class="goog-inline-block"><div id="pb-ls"></div><div class="goog-toolbar-separator goog-inline-block"></div><div id="pb-st"></div></div><div id="pb-sh" class="goog-inline-block" style="display:none"></div><div class="goog-toolbar-separator goog-inline-block" id="pb-sp-del" style="display:none"></div><div id="pb-del-c" class="goog-inline-block"></div><div id="pb-tool-r" class="goog-inline-block"></div></div><div id="pb-tb-c" class="jfk-scrollbar-borderless"><div id="gt-pb-spin" style="display:none"></div><div id="pb-empty"></div><table id="gt-pb-tb"><colgroup><col><col><col width="50%"><col><col width="50%"></colgroup><table></div></div></div>'
    },
    AG = function(a) {
        return '<div class="pt-icon goog-inline-block"></div><div class="pt-text goog-inline-block"><div class="pt-act">' + T(a.Jj) + '</div><div class="pt-desc">' + T(a.$f) + ra
    },
    BG = v('<div class="gt-hats-t"><div class="gt-hats-x clear-button"><div class="jfk-button-img"></div></div><div class="gt-hats-tt"></div></div><div class="gt-hats-c"></div>'),
    CG = function(a) {
        return '<div class="gt-hats-af">' + T(a.Lj) + '</div><a href="javascript:void(0);" class="gt-hats-link">' + T(a.Td) + "</a>"
    },
    DG = function(a) {
        return '<div class="share-panel goog-menu-nocheckbox"><h3>' +
            T(a.Yl) + '</h3><ul><li><a href="mailto:?body=' + T(a.$i) + '" target="_top" class="email"><span class="share-link-icon"></span><span> ' + T(a.Xl) + ' </span></a></li><li><a href="https://twitter.com/intent/tweet?text=' + T(a.$i) + '" target="_blank" class="twitter"><span class="share-link-icon"></span><span> Twitter </span></a></li><li><a href="https://plus.google.com/share?url=' + T(a.url) + '" target="_blank" class="gplus"><span class="share-link-icon"></span><span> Google+ </span></a></li></ul></div>'
    };
var EG = function(a) {
    Y.call(this, a)
};
A(EG, Y);
EG.prototype.sa = function() {
    this.D = this.a.b("FORM", {
        method: Ka,
        style: Jb
    })
};
var GG = function(a, b, c, d) {
        var e = a.l();
        e || (a.ia(), e = a.l());
        e.action = c || "";
        e.target = d || "";
        FG(a, e, b);
        e.submit()
    },
    FG = function(a, b, c) {
        var d, e = [];
        for (d in c) {
            var f = c[d];
            uf(f) ? C(f, z(function(a) {
                e.push(Nk(Vc, {
                    type: Mc,
                    name: d,
                    value: String(a)
                }))
            }, a)) : e.push(Nk(Vc, {
                type: Mc,
                name: d,
                value: String(f)
            }))
        }
        Rk(b, Ok(e))
    };
var HG = function(a, b, c) {
    Y.call(this);
    this.c = a;
    this.m = b;
    this.j = c;
    this.b = !1
};
A(HG, Y);
w = HG.prototype;
w.sa = function() {
    HG.w.sa.call(this);
    this.Z(ol(document, k))
};
w.Z = function(a) {
    HG.w.Z.call(this, a);
    U(a, "pt-wrap");
    a.appendChild(xr(AG, {
        Jj: MSG_HUMAN_TRANSLATION_ACTION,
        $f: MSG_HUMAN_TRANSLATION_DESCRIPTION
    }));
    Z(this).G(this.l(), r, this.vm);
    a = new Gt(MSG_DISMISS, new bv("clear-button"));
    a.ia(this.l());
    this.g = a.l();
    Z(this).G(a, n, this.wm)
};
w.vm = function(a) {
    if (!a.target || !El(this.g, a.target)) {
        a = new EG;
        var b = {};
        b.hl = this.j;
        var c = GF(this.c);
        c != gb && (b.sl = c);
        b.tl = vx(this.c);
        b.r = Me;
        c = HF(this.m, !0);
        if (1500 > hg(c).length) b.src = c, window.open(ka + zm(b) + "#text", "_top");
        else {
            var d = {};
            d.src = c;
            GG(a, d, ka + zm(b) + "#text")
        }
    }
};
w.wm = function() {
    this.b = !0;
    (new bE(this.l(), 300)).play();
    Ko.J().log("dismissht")
};
w.setVisible = function(a) {
    this.b || X(this.l(), a)
};
var IG = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: Nb,
    36: "home",
    37: rd,
    38: "up",
    39: Td,
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
};
var LG = function(a) {
        M.call(this);
        this.b = this.c = {};
        this.j = 0;
        this.B = Tg(JG);
        this.I = Tg(KG);
        this.m = !0;
        this.o = null;
        this.a = a;
        L(this.a, kd, this.g, void 0, this);
        kh && L(this.a, ld, this.C, void 0, this);
        L(this.a, md, this.v, void 0, this)
    },
    MG;
A(LG, M);
var NG = function(a) {
        this.a = a || null;
        this.next = a ? null : {}
    },
    JG = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    KG = ["color", "date", "datetime", "datetime-local", "email", "month", Dd, "password", "search", "tel", "text", "time", "url", "week"];
LG.prototype.L = function(a, b) {
    OG(this.c, PG(arguments), a)
};
var PG = function(a) {
    if (mf(a[1])) a = Jf(QG(a[1]), function(a) {
        return RG(a.key || "", a.keyCode, a.ul)
    });
    else {
        var b = a,
            c = 1;
        tf(a[1]) && (b = a[1], c = 0);
        for (a = []; c < b.length; c += 2) a.push(RG("", b[c], b[c + 1]))
    }
    return a
};
LG.prototype.N = function() {
    LG.w.N.call(this);
    this.c = {};
    Wi(this.a, kd, this.g, !1, this);
    kh && Wi(this.a, ld, this.C, !1, this);
    Wi(this.a, md, this.v, !1, this);
    this.a = null
};
var QG = function(a) {
    a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
    a = a.split(" ");
    for (var b = [], c, d = 0; c = a[d]; d++) {
        var e = c.split("+"),
            f = null,
            g = null;
        c = 0;
        for (var l, m = 0; l = e[m]; m++) {
            switch (l) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
            }
            e = void 0;
            f = l;
            if (!MG) {
                g = {};
                for (e in IG) g[IG[e]] = Gs(parseInt(e, 10));
                MG = g
            }
            g = MG[f];
            f = l;
            break
        }
        b.push({
            key: f,
            keyCode: g,
            ul: c
        })
    }
    return b
};
LG.prototype.v = function(a) {
    fh && SG(this, a);
    kh && !this.A && kh && a.ctrlKey && a.altKey && this.g(a)
};
var SG = function(a, b) {
    if (jh) {
        if (224 == b.keyCode) {
            a.H = !0;
            Mj(function() {
                this.H = !1
            }, 400, a);
            return
        }
        var c = b.metaKey || a.H;
        67 != b.keyCode && 88 != b.keyCode && 86 != b.keyCode || !c || (b.metaKey = c, a.g(b))
    }
    32 == a.o && 32 == b.keyCode && b.preventDefault();
    a.o = null
};
LG.prototype.C = function(a) {
    32 < a.keyCode && kh && a.ctrlKey && a.altKey && (this.A = !0)
};
var OG = function(a, b, c) {
        var d = b.shift();
        C(d, function(c) {
            if ((c = a[c]) && (0 == b.length || c.a)) throw Error("Keyboard shortcut conflicts with existing shortcut");
        });
        b.length ? C(d, function(d) {
            d = d.toString();
            var e = new NG;
            d = d in a ? a[d] : a[d] = e;
            OG(d.next, b.slice(0), c)
        }) : C(d, function(b) {
            a[b] = new NG(c)
        })
    },
    TG = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (d) return d
        }
    },
    RG = function(a, b, c) {
        c = c || 0;
        b = ["c_" + b + "_" + c];
        "" != a && b.push("n_" + a + "_" + c);
        return b
    };
LG.prototype.g = function(a) {
    a: {
        var b = a.keyCode;
        if ("" != a.key) {
            var c = a.key;
            if ("Control" == c || "Shift" == c || "Meta" == c || "AltGraph" == c) {
                b = !1;
                break a
            }
        } else if (16 == b || 17 == b || 18 == b) {
            b = !1;
            break a
        }
        c = a.target;
        var d = c.tagName == Qa || c.tagName == Fa || c.tagName == Aa || c.tagName == Ma,
            e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
        b = !d && !e || this.B[b] ? !0 : e ? !1 : a.altKey || a.ctrlKey || a.metaKey ? !0 : c.tagName == Fa && this.I[c.type] ? 13 == b : c.tagName == Fa || c.tagName == Aa ? 32 != b : !1
    }
    if (b)
        if (a.type == kd && kh && a.ctrlKey &&
            a.altKey) this.A = !1;
        else {
            b = Gs(a.keyCode);
            c = RG(a.key, b, (a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0));
            d = TG(this.b, c);
            if (!d || 1500 <= Df() - this.j) this.b = this.c, this.j = Df();
            (d = TG(this.b, c)) && d.next && (this.b = d.next, this.j = Df());
            d && (d.next ? a.preventDefault() : (this.b = this.c, this.j = Df(), this.m && a.preventDefault(), c = d.a, d = a.target, e = this.dispatchEvent(new UG(ce, c, d)), (e &= this.dispatchEvent(new UG("shortcut_" + c, c, d))) || a.preventDefault(), fh && (this.o = b)))
        }
};
var UG = function(a, b, c) {
    J.call(this, a, c);
    this.identifier = b
};
A(UG, J);
var VG = function(a, b) {
    this.a = a;
    this.m = b;
    this.c = null;
    this.o = Ko.J();
    this.F = ro.J();
    this.b = new LG(document);
    this.b.m = !1;
    this.b.L("CTRL_C", 67, jh ? 8 : 2);
    L(this.b, ce, this.j, !1, this)
};
A(VG, vi);
VG.prototype.N = function() {
    VG.w.N.call(this);
    Wi(this.b, ce, this.j, !1, this)
};
VG.prototype.j = function(a) {
    "CTRL_C" != a.identifier || Gz() || "" != Sw(this.a) || "" == this.a.value || (a = this.m.Ca(!0), this.g = Pw(this.a, !1)[1], this.c = Iz(a), Mj(this.v, 0, this))
};
VG.prototype.v = function() {
    if (this.c) {
        this.a.focus();
        F && null != this.g && Rw(this.a, this.g);
        xl(this.c);
        this.c = null;
        var a = this.F;
        R(a, S(a, 228));
        this.o.log("cptrans")
    }
};
var WG = function(a) {
        return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
    },
    XG = WG;
XG = WG;
var YG = function(a, b) {
        if (void 0 === b) {
            b = a + "";
            var c = b.indexOf(".");
            b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
        }
        return 1 == (a | 0) && 0 == b ? "one" : "other"
    },
    ZG = YG;
ZG = YG;
var cH = function() {
        this.g = MSG_OVERFLOW_HEADER;
        this.b = this.a = this.j = null;
        var a = Rv,
            b = Ov;
        if ($G !== a || aH !== b) $G = a, aH = b, bH = new Uv(1);
        this.o = bH
    },
    $G = null,
    aH = null,
    bH = null,
    dH = /'([{}#].*?)'/g,
    eH = /''/g,
    Yw = function(a, b, c, d, e) {
        for (var f = 0; f < b.length; f++) switch (b[f].type) {
            case 4:
                e.push(b[f].value);
                break;
            case 3:
                var g = b[f].value,
                    l = a,
                    m = e,
                    p = c[g];
                y(p) ? (l.a.push(p), m.push(l.c(l.a))) : m.push(Ua + g);
                break;
            case 2:
                g = b[f].value;
                l = a;
                m = c;
                p = d;
                var q = e,
                    B = g.ue;
                y(m[B]) ? (B = g[m[B]], y(B) || (B = g.other), Yw(l, B, m, p, q)) : q.push(Ua + B);
                break;
            case 0:
                g = b[f].value;
                fH(a, g, c, ZG, d, e);
                break;
            case 1:
                g = b[f].value, fH(a, g, c, XG, d, e)
        }
    },
    fH = function(a, b, c, d, e, f) {
        var g = b.ue,
            l = b.ph,
            m = +c[g];
        isNaN(m) ? f.push("Undefined or invalid parameter - " + g) : (l = m - l, g = b[c[g]], y(g) || (d = a.o.X ? d(l, a.o.X()) : d(l), g = b[d], y(g) || (g = b.other)), b = [], Yw(a, g, c, e, b), c = b.join(""), e ? f.push(c) : (a = bw(a.o, l), f.push(c.replace(/#/g, a))))
    },
    Ww = function(a, b) {
        var c = a.j,
            d = z(a.c, a);
        b = b.replace(eH, function() {
            c.push("'");
            return d(c)
        });
        return b = b.replace(dH, function(a, b) {
            c.push(b);
            return d(c)
        })
    },
    gH = function(a) {
        var b = 0,
            c = [],
            d = [],
            e = /[{}]/g;
        e.lastIndex = 0;
        for (var f; f = e.exec(a);) {
            var g = f.index;
            "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
                type: 1
            }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                type: 0,
                value: b
            }), b = g + 1), c.push("{"))
        }
        b = a.substring(b);
        "" != b && d.push({
            type: 0,
            value: b
        });
        return d
    },
    hH = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
    iH = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
    jH = /^\s*(\w+)\s*,\s*select\s*,/,
    Xw = function(a, b) {
        var c = [];
        b = gH(b);
        for (var d = 0; d < b.length; d++) {
            var e = {};
            if (0 == b[d].type) e.type = 4, e.value = b[d].value;
            else if (1 == b[d].type) {
                var f = b[d].value;
                switch (hH.test(f) ? 0 : iH.test(f) ? 1 : jH.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                    case 2:
                        e.type = 2;
                        e.value = kH(a, b[d].value);
                        break;
                    case 0:
                        e.type = 0;
                        e.value = lH(a, b[d].value);
                        break;
                    case 1:
                        e.type = 1;
                        e.value = mH(a, b[d].value);
                        break;
                    case 3:
                        e.type = 3, e.value = b[d].value
                }
            }
            c.push(e)
        }
        return c
    },
    kH = function(a, b) {
        var c = "";
        b = b.replace(jH, function(a, b) {
            c = b;
            return ""
        });
        var d = {};
        d.ue = c;
        b = gH(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            if (1 ==
                b[e].type) var g = Xw(a, b[e].value);
            d[f.replace(/\s/g, "")] = g;
            e++
        }
        return d
    },
    lH = function(a, b) {
        var c = "",
            d = 0;
        b = b.replace(hH, function(a, b, e) {
            c = b;
            e && (d = parseInt(e, 10));
            return ""
        });
        var e = {};
        e.ue = c;
        e.ph = d;
        b = gH(b);
        for (var f = 0; f < b.length;) {
            var g = b[f].value;
            f++;
            if (1 == b[f].type) var l = Xw(a, b[f].value);
            e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = l;
            f++
        }
        return e
    },
    mH = function(a, b) {
        var c = "";
        b = b.replace(iH, function(a, b) {
            c = b;
            return ""
        });
        var d = {};
        d.ue = c;
        d.ph = 0;
        b = gH(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            if (1 == b[e].type) var g =
                Xw(a, b[e].value);
            d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
            e++
        }
        return d
    };
cH.prototype.c = function(a) {
    return "\ufddf_" + (a.length - 1).toString(10) + "_"
};
var nH = function(a, b, c, d) {
    Y.call(this);
    this.g = a;
    this.b = b;
    this.B = c;
    this.A = d;
    this.c = null;
    new Uv("######");
    this.v = new cH;
    this.j = new Ko;
    this.j.g = "t";
    this.F = ro.J()
};
A(nH, Y);
nH.prototype.md = function(a) {
    return a && a.tagName == k && O("ovfl-msg", a) && O("ovfl-text", a) && O("ovfl-xlt", a) ? !0 : !1
};
nH.prototype.W = function() {
    nH.w.W.call(this);
    var a = O("ovfl-xlt", this.l());
    this.c = new Gt(null, new oH);
    this.c.S(a);
    L(this.c, n, this.m, !1, this)
};
var pH = function(a, b) {
        fk(b) ? U(O(Hd, a.l()), "ovfl-xlt-arrow-rtl") : U(O(Hd, a.l()), "ovfl-xlt-arrow-ltr")
    },
    qH = function(a, b) {
        Vw(a).dir = fk(b) ? Vd : sd
    };
nH.prototype.setVisible = function(a) {
    X(this.l(), a)
};
var Vw = function(a) {
    return O("ovfl-text", a.l())
};
nH.prototype.m = function() {
    var a = this.b.c;
    "" == a && (a = this.b.a);
    var b = Ql(Vw(this)),
        c = b.length,
        d = Math.max(c - this.A, 0);
    Bo(this.F, c, d);
    Po(this.j, "t", "xm", "1", {
        sl: this.b.a,
        tl: this.b.b,
        dl: a,
        hl: this.B,
        ql: c,
        ol: d
    });
    this.g.b(b);
    window.scrollTo(0, 0);
    var e = this.g,
        f = e.l();
    Mj(function() {
        f.focus();
        Rw(f, e.P().length)
    }, 0)
};
var oH = Ze();
A(oH, kt);
oH.prototype.Ec = function(a) {
    return a && a.tagName == k && O(Hd, a) ? !0 : !1
};
var rH = function(a, b, c) {
    Y.call(this);
    this.b = b;
    this.A = a;
    this.j = !!c;
    Ko.J()
};
A(rH, Y);
rH.prototype.sa = function() {
    rH.w.sa.call(this);
    var a = ol(document, k);
    var b = this.j ? "" : this.A.K(I(this.b, 1));
    var c = this.j ? "" : this.A.Ra(I(this.b, 2)),
        d = Zo(sg(I(this.b, 3))),
        e = Zo(sg(this.b.cb()));
    b = "<tr" + ("" == b ? ' class="nolabel"' : "") + '><td class="pb-cb"></td><td class="pb-slis-td"></td><td class="pb-src-td">' + ("" != b ? xa + T(b) + qa : "") + '<div class="gt-pb-stc">' + Mp(d) + '</div></td><td class="pb-tlis-td"></td><td class="pb-tgt-td">' + ("" != b ? xa + T(c) + qa : "") + '<div class="gt-pb-ttc">' + Mp(e) + "</div></td><tr>";
    a.innerHTML =
        "<table><tbody>" + b + "</tbody></table>";
    this.Z(a.firstChild.rows[0])
};
rH.prototype.Z = function(a) {
    rH.w.Z.call(this, a);
    a = this.l();
    this.c = O("pb-src-td", a);
    fk(I(this.b, 1)) ? this.c.dir = Vd : this.c.dir = sd;
    this.g = O("pb-tgt-td", a);
    fk(I(this.b, 2)) ? this.g.dir = Vd : this.g.dir = sd;
    var b = O("pb-cb", a),
        c = new ex;
    zs(this, c);
    c.ia(b);
    Z(this).G(c, "check", z(this.xg, this, !0));
    Z(this).G(c, "uncheck", z(this.xg, this, !1));
    this.v = c;
    this.B = sH(this, O("pb-slis-td", a));
    this.m = sH(this, O("pb-tlis-td", a));
    a = I(this.b, 1);
    b = I(this.b, 3);
    c = new Gv(this.B, "&client=t&prev=pbsrc", 5);
    xi(this, c);
    c.update(b, a);
    a = I(this.b,
        2);
    b = this.b.cb();
    c = new Gv(this.m, "&client=t&prev=pbtgt", 6);
    xi(this, c);
    c.update(b, a);
    this.m.isVisible();
    Z(this).G(this.c, r, this.ci);
    Z(this).G(this.g, r, this.ci)
};
var sH = function(a, b) {
    var c = new $u(MSG_LISTEN, void 0, new bv(Fe));
    zs(a, c);
    c.ia(b);
    c.setVisible(!1);
    return c
};
w = rH.prototype;
w.Ta = function() {
    return this.v.Ta()
};
w.Ka = function(a) {
    this.v.Ka(a);
    this.xg(a)
};
w.Bc = function() {
    return this.b.Bc()
};
w.Ca = u("b");
w.ci = function() {
    this.dispatchEvent("pbclick")
};
w.xg = function(a) {
    a ? U(this.l(), tb) : V(this.l(), tb)
};
var tH = function(a, b, c) {
    vi.call(this);
    this.a = a;
    this.b = new Kj(50);
    this.o = new js(this);
    this.j = new Uk;
    this.c = Vr(a);
    if ("BODY" === a.tagName || "HTML" === a.tagName) a = hl(window), this.c.height = a.height, this.c.width = a.width;
    this.pf = b || 0;
    if (b) {
        if (b = this.c, b = new Ar(b.left, b.top, b.width, b.height), a = this.pf) {
            var d = Math.min(a, .25 * b.height);
            b.top += d;
            b.height -= 2 * d;
            a = Math.min(a, .25 * b.width);
            b.left += a;
            b.width -= 2 * a
        }
    } else b = this.c;
    this.g = b;
    c || this.o.G($k(this.a), xd, this.v);
    this.o.G(this.b, Ae, this.m)
};
A(tH, vi);
tH.prototype.m = function() {
    this.a.scrollTop += this.j.a;
    this.a.scrollLeft += this.j.b
};
tH.prototype.v = function(a) {
    var b = uH(a.clientX, this.g.left, this.g.width);
    a = uH(a.clientY, this.g.top, this.g.height);
    this.j.b = b;
    this.j.a = a;
    (b = !b && !a) || (b = !1);
    b ? this.b.stop() : this.b.b || this.b.start()
};
var uH = function(a, b, c) {
    var d = 0;
    a < b ? d = -8 : a > b + c && (d = 8);
    return d
};
tH.prototype.N = function() {
    tH.w.N.call(this);
    this.o.Ba();
    this.b.Ba()
};
var vH = function() {
    Y.call(this);
    this.c = this.b = null
};
A(vH, Y);
var wH = [255, 255, 204],
    xH = [255, 255, 255];
vH.prototype.sa = function() {
    vH.w.sa.call(this);
    var a = P("TBODY");
    this.Z(a)
};
vH.prototype.update = function(a, b, c) {
    Ds(this);
    for (var d = a.length - 1; 0 <= d; d--) {
        var e = new rH(b, a[d], c);
        zs(this, e, !0)
    }
    this.b && (Wi(this.b, Nx, this.j, !1, this), Wi(this.b, Rx, this.g, !1, this), wi(this.b));
    if (nq && (this.b = new cy("pb-drag-before", "pb-drag-after"), this.b.U = gg("pb-drag-flt").split(" "), this.b.Ra("pb-drag-cur"), this.b.ra = !0, this.b.B(this.l(), 0), this.b.aa = 5, L(this.b, Nx, this.j, !1, this), L(this.b, Rx, this.g, !1, this), a = this.b, !a.V)) {
        b = 0;
        for (c = a.g.length; b < c; b++) {
            d = yl(a.g[b]);
            e = 0;
            for (var f = d.length; e < f; ++e) {
                var g =
                        a,
                    l = d[e],
                    m = zf(l);
                g.I[m] = l;
                g.R && (g.m.G(l, zd, g.La), g.m.G(l, yd, g.Ma));
                g.X && (g.m.G(l, zd, g.Ja), g.m.G(l, yd, g.Ea));
                g.o.push(l);
                g.m.G(l, [wd, Ee], g.Lk)
            }
        }
        a.V = !0
    }
};
vH.prototype.j = function() {
    this.c = new tH(N("pb-tb-c"))
};
vH.prototype.g = function() {
    wi(this.c)
};
var yH = function(a, b) {
        var c = [];
        xs(a, function(a) {
            Pf(b, a.Bc()) && c.push(a)
        }, a);
        for (var d = 0; d < c.length; ++d) a.removeChild(c[d], !0)
    },
    zH = function(a) {
        var b = [],
            c = [];
        xs(a, function(a) {
            a.Ta() && (b.push(a.Bc()), c.push(a))
        }, a);
        for (var d = 0; d < c.length; ++d) a.removeChild(c[d], !0);
        return b
    },
    AH = function(a) {
        for (var b = ys(a), c = 0, d = 0; d < b; d++) As(a, d).Ta() && c++;
        return 0 == c ? !1 : c == b ? !0 : null
    };
vH.prototype.Ka = function(a) {
    for (var b = ys(this), c = 0; c < b; c++) As(this, c).Ka(a)
};
var BH = function(a, b) {
        var c = [];
        xs(a, function(a) {
            Pf(b, a.Bc()) && c.push(a)
        }, a);
        for (a = 0; a < c.length; ++a)(new dE(c[a].l(), wH, xH, 1E3)).play()
    },
    CH = function(a) {
        for (var b = [], c = ys(a), d = 0; d < c; d++) As(a, d).Ta() && b.push(d);
        return b
    };
var DH = function(a) {
    M.call(this);
    this.a = a || window;
    this.b = L(this.a, Rd, this.g, !1, this);
    this.c = hl(this.a || window)
};
A(DH, M);
DH.prototype.N = function() {
    DH.w.N.call(this);
    this.b && (Xi(this.b), this.b = null);
    this.c = this.a = null
};
DH.prototype.g = function() {
    var a = hl(this.a || window);
    Yk(a, this.c) || (this.c = a, this.dispatchEvent(Rd))
};
(function() {
    for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !x.requestAnimationFrame; ++b) x.requestAnimationFrame = x[c + "RequestAnimationFrame"], x.cancelAnimationFrame = x[c + "CancelAnimationFrame"] || x[c + "CancelRequestAnimationFrame"];
    if (!x.requestAnimationFrame) {
        var d = 0;
        x.requestAnimationFrame = function(a) {
            var b = (new Date).getTime(),
                c = Math.max(0, 16 - (b - d));
            d = b + c;
            return x.setTimeout(function() {
                a(b + c)
            }, c)
        };
        x.cancelAnimationFrame || (x.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }
})();
var EH = [
        [],
        []
    ],
    FH = 0,
    GH = !1,
    HH = 0,
    JH = function(a, b) {
        var c = HH++,
            d = {
                kl: {
                    id: c,
                    jc: a.measure,
                    context: b
                },
                zl: {
                    id: c,
                    jc: a.yl,
                    context: b
                },
                state: {},
                rb: void 0,
                kf: !1
            };
        return function() {
            0 < arguments.length ? (d.rb || (d.rb = []), d.rb.length = 0, d.rb.push.apply(d.rb, arguments), d.rb.push(d.state)) : d.rb && 0 != d.rb.length ? (d.rb[0] = d.state, d.rb.length = 1) : d.rb = [d.state];
            d.kf || (d.kf = !0, EH[FH].push(d));
            GH || (GH = !0, window.requestAnimationFrame(IH))
        }
    },
    IH = function() {
        GH = !1;
        var a = EH[FH],
            b = a.length;
        FH = (FH + 1) % 2;
        for (var c, d = 0; d < b; ++d) {
            c = a[d];
            var e = c.kl;
            c.kf = !1;
            e.jc && e.jc.apply(e.context, c.rb)
        }
        for (d = 0; d < b; ++d) c = a[d], e = c.zl, c.kf = !1, e.jc && e.jc.apply(e.context, c.rb), c.state = {};
        a.length = 0
    };
var KH = F ? jk(ck(dk(Xc))) : jk(ck(dk("about:blank"))),
    LH = ik(KH),
    MH = F ? jk(ck(dk(Xc))) : jk(ck(dk("javascript:undefined")));
ik(MH);
var NH = function(a, b) {
    this.D = a;
    this.b = b
};
var OH = function(a, b) {
    Y.call(this, b);
    this.O = !!a;
    this.g = null;
    this.K = JH({
        yl: this.sf
    }, this)
};
A(OH, Y);
w = OH.prototype;
w.gg = null;
w.Ye = !1;
w.tb = null;
w.ab = null;
w.Vb = null;
w.Rf = !1;
w.T = v("goog-modalpopup");
w.Fe = u("tb");
w.sa = function() {
    OH.w.sa.call(this);
    var a = this.l();
    nr(a, gg(this.T()).split(" "));
    Ml(a, !0);
    X(a, !1);
    PH(this);
    QH(this)
};
var PH = function(a) {
        if (a.O && !a.ab) {
            var b = a.a.b(Da, {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                src: LH
            });
            a.ab = b;
            a.ab.className = a.T() + "-bg";
            X(a.ab, !1);
            Wr(a.ab, 0)
        }
        a.tb || (a.tb = a.a.b(k, a.T() + "-bg"), X(a.tb, !1))
    },
    QH = function(a) {
        a.Vb || (a.Vb = Ul(a.a, Na), X(a.Vb, !1), Ml(a.Vb, !0), a.Vb.style.position = Xa)
    };
w = OH.prototype;
w.Ii = function() {
    this.Rf = !1
};
w.md = function(a) {
    return !!a && a.tagName == k
};
w.Z = function(a) {
    OH.w.Z.call(this, a);
    nr(this.l(), gg(this.T()).split(" "));
    PH(this);
    QH(this);
    Ml(this.l(), !0);
    X(this.l(), !1)
};
w.W = function() {
    this.ab && vl(this.ab, this.l());
    vl(this.tb, this.l());
    OH.w.W.call(this);
    wl(this.Vb, this.l());
    this.gg = new UB(this.a.a);
    Z(this).G(this.gg, Rb, this.El);
    RH(this, !1)
};
w.hb = function() {
    this.isVisible() && this.setVisible(!1);
    wi(this.gg);
    OH.w.hb.call(this);
    xl(this.ab);
    xl(this.tb);
    xl(this.Vb)
};
w.setVisible = function(a) {
    if (a != this.Ye)
        if (this.m && this.m.stop(), this.A && this.A.stop(), this.j && this.j.stop(), this.v && this.v.stop(), this.va && RH(this, a), a) {
            if (this.dispatchEvent(ib)) {
                try {
                    this.g = this.a.a.activeElement
                } catch (e) {}
                this.sf();
                var b = kl(this.a.a) || window;
                if ("fixed" == Er(this.l(), Nd)) var c = a = 0;
                else c = jl(this.a.a), a = c.b, c = c.a;
                var d = Ur(this.l());
                b = hl(b || window);
                a = Math.max(a + b.width / 2 - d.width / 2, 0);
                c = Math.max(c + b.height / 2 - d.height / 2, 0);
                Gr(this.l(), a, c);
                Gr(this.Vb, a, c);
                Z(this).G(Vl(this.a), Rd, this.sf).G(Vl(this.a),
                    Gd, this.K);
                SH(this, !0);
                this.Jh();
                this.Ye = !0;
                this.m && this.A ? (Pi(this.m, Nb, this.Xe, !1, this), this.A.play(), this.m.play()) : this.Xe()
            }
        } else if (this.dispatchEvent(hb)) {
            Z(this).Aa(Vl(this.a), Rd, this.sf).Aa(Vl(this.a), Gd, this.K);
            this.Ye = !1;
            this.j && this.v ? (Pi(this.j, Nb, this.We, !1, this), this.v.play(), this.j.play()) : this.We();
            a: {
                try {
                    c = this.a;
                    d = c.a.body;
                    b = c.a.activeElement || d;
                    if (!this.g || this.g == d) {
                        this.g = null;
                        break a
                    }(b == d || c.contains(this.l(), b)) && this.g.focus()
                } catch (e) {}
                this.g = null
            }
        }
};
var RH = function(a, b) {
        a.B || (a.B = new NH(a.D, a.a));
        a = a.B;
        if (b) {
            a.a || (a.a = []);
            b = a.b.Lh(a.b.a.body);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d == a.D || Vs(d, Mc) || (Us(d, Mc, !0), a.a.push(d))
            }
        } else if (a.a) {
            for (c = 0; c < a.a.length; c++) a.a[c].removeAttribute("aria-hidden");
            a.a = null
        }
    },
    SH = function(a, b) {
        a.ab && X(a.ab, b);
        a.tb && X(a.tb, b);
        X(a.l(), b);
        X(a.Vb, b)
    };
w = OH.prototype;
w.Xe = function() {
    this.dispatchEvent(de)
};
w.We = function() {
    SH(this, !1);
    this.dispatchEvent(Nc)
};
w.isVisible = u("Ye");
w.sf = function() {
    this.ab && X(this.ab, !1);
    this.tb && X(this.tb, !1);
    var a = this.a.a,
        b = hl(kl(a) || window || window),
        c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.ab && (X(this.ab, !0), Tr(this.ab, c, a));
    this.tb && (X(this.tb, !0), Tr(this.tb, c, a))
};
w.El = function(a) {
    this.Rf ? this.Ii() : a.target == this.Vb && Mj(this.Jh, 0, this)
};
w.Jh = function() {
    try {
        F && this.a.a.body.focus(), this.l().focus()
    } catch (a) {}
};
w.N = function() {
    wi(this.m);
    this.m = null;
    wi(this.j);
    this.j = null;
    wi(this.A);
    this.A = null;
    wi(this.v);
    this.v = null;
    OH.w.N.call(this)
};
var XH = function(a, b, c) {
    OH.call(this, b, c);
    this.c = a || "modal-dialog";
    this.b = TH(TH(new UH, VH, !0), WH, !1, !0)
};
A(XH, OH);
w = XH.prototype;
w.xi = !0;
w.we = .5;
w.Yi = "";
w.Vc = null;
w.Gc = null;
w.Vh = !1;
w.ib = null;
w.xb = null;
w.vf = null;
w.mb = null;
w.Nb = null;
w.Xa = null;
w.T = u("c");
w.Da = function() {
    return null != this.Vc ? Fk(this.Vc) : ""
};
w.Lb = function() {
    this.l() || this.ia();
    return this.Nb
};
w.Fe = function() {
    this.l() || this.ia();
    return XH.w.Fe.call(this)
};
var YH = function(a, b) {
        a.we = b;
        a.l() && (b = a.Fe()) && Wr(b, a.we)
    },
    ZH = function(a, b) {
        var c = gg(a.c + "-title-draggable").split(" ");
        a.l() && (b ? nr(a.ib, c) : or(a.ib, c));
        b && !a.Gc ? (a.Gc = new Ex(a.l(), a.ib), nr(a.ib, c), L(a.Gc, qe, a.Tl, !1, a)) : !b && a.Gc && (a.Gc.Ba(), a.Gc = null)
    };
w = XH.prototype;
w.sa = function() {
    XH.w.sa.call(this);
    var a = this.l(),
        b = this.a;
    this.ib = b.b(k, this.c + "-title", this.xb = b.b(Na, {
        className: this.c + "-title-text",
        id: ss(this)
    }, this.Yi), this.mb = b.b(Na, this.c + "-title-close"));
    tl(a, this.ib, this.Nb = b.b(k, this.c + fa), this.Xa = b.b(k, this.c + "-buttons"));
    Ts(this.xb, "heading");
    Ts(this.mb, nb);
    Ml(this.mb, !0);
    Us(this.mb, nd, "Close");
    this.vf = this.xb.id;
    Ts(a, "dialog");
    Us(a, od, this.vf || "");
    this.Vc && Rk(this.Nb, this.Vc);
    X(this.mb, !0);
    this.b && (a = this.b, a.D = this.Xa, $H(a));
    X(this.Xa, !!this.b);
    YH(this,
        this.we)
};
w.Z = function(a) {
    XH.w.Z.call(this, a);
    a = this.l();
    var b = this.c + fa;
    this.Nb = cl(null, b, a)[0];
    this.Nb || (this.Nb = this.a.b(k, b), this.Vc && Rk(this.Nb, this.Vc), a.appendChild(this.Nb));
    b = this.c + "-title";
    var c = this.c + "-title-text",
        d = this.c + "-title-close";
    (this.ib = cl(null, b, a)[0]) ? (this.xb = cl(null, c, this.ib)[0], this.mb = cl(null, d, this.ib)[0]) : (this.ib = this.a.b(k, b), a.insertBefore(this.ib, this.Nb));
    this.xb ? (this.Yi = Ql(this.xb), this.xb.id || (this.xb.id = ss(this))) : (this.xb = P(Na, {
        className: c,
        id: ss(this)
    }), this.ib.appendChild(this.xb));
    this.vf =
        this.xb.id;
    Us(a, od, this.vf || "");
    this.mb || (this.mb = this.a.b(Na, d), this.ib.appendChild(this.mb));
    X(this.mb, !0);
    b = this.c + "-buttons";
    (this.Xa = cl(null, b, a)[0]) ? (this.b = new UH(this.a), this.b.S(this.Xa)) : (this.Xa = this.a.b(k, b), a.appendChild(this.Xa), this.b && (a = this.b, a.D = this.Xa, $H(a)), X(this.Xa, !!this.b));
    YH(this, this.we)
};
w.W = function() {
    XH.w.W.call(this);
    Z(this).G(this.l(), kd, this.I).G(this.l(), ld, this.I);
    Z(this).G(this.Xa, r, this.M);
    ZH(this, !0);
    Z(this).G(this.mb, r, this.Kl);
    var a = this.l();
    Ts(a, "dialog");
    "" !== this.xb.id && Us(a, od, this.xb.id);
    if (!this.xi) {
        this.xi = !1;
        if (this.va) {
            a = this.a;
            var b = this.Fe();
            a.Qh(this.ab);
            a.Qh(b)
        }
        this.isVisible() && RH(this, !1)
    }
};
w.hb = function() {
    this.isVisible() && this.setVisible(!1);
    ZH(this, !1);
    XH.w.hb.call(this)
};
w.setVisible = function(a) {
    a != this.isVisible() && (this.va || this.ia(), XH.w.setVisible.call(this, a))
};
w.Xe = function() {
    XH.w.Xe.call(this);
    this.dispatchEvent("aftershow")
};
w.We = function() {
    XH.w.We.call(this);
    this.dispatchEvent("afterhide");
    this.Vh && this.Ba()
};
w.Tl = function() {
    var a = this.a.a,
        b = hl(kl(a) || window || window),
        c = Math.max(a.body.scrollWidth, b.width);
    a = Math.max(a.body.scrollHeight, b.height);
    var d = Ur(this.l());
    "fixed" == Er(this.l(), Nd) ? this.Gc.g = new Ar(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.Gc.g = new Ar(0, 0, c - d.width, a - d.height)
};
w.Kl = function() {
    aI(this)
};
var aI = function(a) {
    var b = a.b,
        c = b && b.Ue;
    c ? (b = b.get(c), a.dispatchEvent(new bI(c, b)) && a.setVisible(!1)) : a.setVisible(!1)
};
XH.prototype.N = function() {
    this.Xa = this.mb = null;
    XH.w.N.call(this)
};
XH.prototype.M = function(a) {
    a: {
        for (a = a.target; null != a && a != this.Xa;) {
            if (a.tagName == Aa) break a;
            a = a.parentNode
        }
        a = null
    }
    if (a && !a.disabled) {
        a = a.name;
        var b = this.b.get(a);
        this.dispatchEvent(new bI(a, b)) && this.setVisible(!1)
    }
};
XH.prototype.I = function(a) {
    var b = !1,
        c = !1,
        d = this.b,
        e = a.target;
    if (a.type == kd)
        if (27 == a.keyCode) {
            var f = d && d.Ue;
            e = e.tagName == Ma && !e.disabled;
            f && !e ? (c = !0, b = d.get(f), b = this.dispatchEvent(new bI(f, b))) : e || (b = !0)
        } else {
            if (9 == a.keyCode && a.shiftKey && e == this.l()) {
                this.Rf = !0;
                try {
                    this.Vb.focus()
                } catch (q) {}
                Mj(this.Ii, 0, this)
            }
        } else if (13 == a.keyCode) {
        if (e.tagName == Aa && !e.disabled) f = e.name;
        else if (e == this.mb) aI(this);
        else if (d) {
            var g = d.Be,
                l;
            if (l = g) a: {
                l = (d.D || document).getElementsByTagName(Aa);
                for (var m = 0, p; p = l[m]; m++)
                    if (p.name ==
                        g || p.id == g) {
                        l = p;
                        break a
                    }
                l = null
            }
            e = (e.tagName == Qa || e.tagName == Ma || "A" == e.tagName) && !e.disabled;
            !l || l.disabled || e || (f = g)
        }
        f && d && (c = !0, b = this.dispatchEvent(new bI(f, String(d.get(f)))))
    } else e == this.mb && 32 == a.keyCode && aI(this);
    if (b || c) a.stopPropagation(), a.preventDefault();
    b && this.setVisible(!1)
};
var bI = function(a, b) {
    this.type = "dialogselect";
    this.key = a;
    this.caption = b
};
A(bI, J);
var UH = function(a) {
    a || al();
    nm.call(this)
};
A(UH, nm);
w = UH.prototype;
w.Be = null;
w.D = null;
w.Ue = null;
w.Qc = function() {
    nm.prototype.Qc.call(this);
    this.Be = this.Ue = null
};
w.set = function(a, b, c, d) {
    nm.prototype.set.call(this, a, b);
    c && (this.Be = a);
    d && (this.Ue = a);
    return this
};
var TH = function(a, b, c, d) {
        return a.set(b.key, b.caption, c, d)
    },
    $H = function(a) {
        if (a.D) {
            Rk(a.D, Pk);
            var b = al(a.D);
            a.forEach(function(a, d) {
                a = b.b(Aa, {
                    name: d
                }, a);
                d == this.Be && (a.className = Vb);
                this.D.appendChild(a)
            }, a)
        }
    };
UH.prototype.S = function(a) {
    if (a && 1 == a.nodeType) {
        this.D = a;
        a = (this.D || document).getElementsByTagName(Aa);
        for (var b = 0, c, d, e; c = a[b]; b++)
            if (d = c.name || c.id, e = Ql(c) || c.value, d) {
                var f = 0 == b;
                this.set(d, e, f, "cancel" == c.name);
                f && U(c, Vb)
            }
    }
};
UH.prototype.l = u("D");
var VH = {
        key: "ok",
        caption: "OK"
    },
    WH = {
        key: "cancel",
        caption: "Cancel"
    },
    cI = {
        key: "yes",
        caption: "Yes"
    },
    dI = {
        key: "no",
        caption: "No"
    },
    eI = {
        key: "save",
        caption: "Save"
    },
    fI = {
        key: "continue",
        caption: "Continue"
    };
"undefined" != typeof document && (TH(new UH, VH, !0, !0), TH(TH(new UH, VH, !0), WH, !1, !0), TH(TH(new UH, cI, !0), dI, !1, !0), TH(TH(TH(new UH, cI), dI, !0), WH, !1, !0), TH(TH(TH(new UH, fI), eI), WH, !0, !0));
var gI = Ze();
A(gI, JF);
rf(gI);
gI.prototype.T = v("goog-toolbar-menu-button");
var kI = function(a, b, c, d, e, f, g) {
    var l = SIGNED_IN;
    this.H = c;
    this.O = b;
    this.Ub = d;
    this.Tb = e;
    this.M = l;
    this.Ob = f;
    this.A = this.ob = !1;
    this.a = new LD(a, b, c);
    this.La = MSG_PB_SIGNIN;
    this.Ma = MSG_SAVE;
    this.U = MSG_MY_PB;
    this.g = Ko.J();
    this.Bb = g;
    a = N("gt-pb-star");
    null != a ? (b = new Gt(MSG_SAVE_PB, new bv("trans-pb-button")), b.setVisible(!1), b.ia(a), this.M ? L(b, n, this.Rb, !1, this) : L(b, n, Cf(oD, this.Bb, "st", this.g, LOGIN_URL), !1, this), hI(this, b), a = b) : a = null;
    this.j = a;
    this.C = iI(this);
    a = N("gt-apb-main");
    b = P(k, {
        id: "gt-pb-sw1"
    });
    a.appendChild(b);
    this.R = jI(this, b, MSG_SHOW_PB);
    a = this.R.l();
    b = P(k, {
        id: "gt-pb-id"
    });
    a.appendChild(b);
    X(b, !1);
    this.V = b;
    this.v = 0;
    this.Ja = !0;
    this.m = "";
    this.F = ro.J()
};
kI.prototype.Rb = function() {
    if ("" == this.m) {
        lI(this);
        this.g.log("pbsavs", 1);
        var a = this.F;
        R(a, S(a, 67))
    } else a = [this.m], yH(this.b, a), 0 != a.length && PD(this.a, a), mI(this), this.I(), this.A || nI(this, -1), this.g.log("pbsavs", 0), a = this.F, R(a, S(a, 180))
};
var hI = function(a, b) {
        if (a.M) {
            var c = a.a;
            null != c.a && c.a.length >= c.B ? (b.ea("" != a.m), b.g("" != a.m ? MSG_SAVED : MSG_PB_FULL)) : (b.ea(!0), b.g("" != a.m ? MSG_SAVED : MSG_SAVE_PB))
        } else b.ea(!0), b.g(MSG_SAVE_PB)
    },
    iI = function(a) {
        var b = N("gt-pb-save");
        if (null == b) return null;
        var c = new ru(a.Ma);
        c.ia(b);
        c.setVisible(!1);
        a.M || (c.ea(!1), eu(c.l(), a.La));
        L(c, n, function() {
            lI(this);
            this.g.log("pbsavb")
        }, !1, a);
        return c
    },
    jI = function(a, b, c) {
        var d = new Gt(null, new av);
        d.ia(b);
        U(d.l(), "pb-sw");
        a.M ? (eu(d.l(), c), L(d, n, a.Sb, !1, a)) : (eu(d.l(),
            a.La), L(d, n, Cf(oD, a.Bb, "sw", a.g, LOGIN_URL), !1, a));
        return d
    },
    pI = function(a) {
        var b = N("pb-back-c"),
            c = new Gt(MSG_BACK_TO_ALL, new bv("pbback-button"));
        c.ia(b);
        W(c.l(), Re, Mc);
        L(c, n, function() {
            oI(this);
            MD(this.a)
        }, !1, a);
        return c
    };
kI.prototype.Qb = function() {
    this.o.Ka(AH(this.b));
    mI(this);
    this.g.log("pbco");
    var a = this.F,
        b = CH(this.b),
        c = qI(this),
        d = rI(this),
        e = sI(this);
    R(a, Jo(a, 42, b, c, d, e))
};
var oI = function(a, b) {
        var c = a.a;
        "" != c.b && (c.C = !0, c.b = "");
        a.K.value = "";
        a.aa = "";
        if (!b) {
            b = a.a;
            if (b.g != $a || b.j != $a) b.C = !0, b.g = $a, b.j = $a;
            Vz(a.c, ab)
        }
        X(a.Y, !1);
        X(a.Ea, !0);
        mI(a);
        X(a.B, !0)
    },
    nI = function(a, b) {
        a.v += b;
        0 > a.v && (a.v = 0);
        Q(a.V, 9 >= a.v ? a.v + "" : "9+");
        X(a.V, 0 < a.v)
    },
    lI = function(a) {
        if (300 < HF(a.O, !0).length || 300 < a.O.Ca().length) {
            var b = GF(a.H),
                c = vx(a.H),
                d = HF(a.O, !0).length,
                e = a.O.Ca().length,
                f = new XH,
                g = Ik(MSG_PB_TL);
            f.Vc = g;
            f.Nb && Rk(f.Nb, g);
            g = TH(new UH, VH, !0, !0);
            f.b = g;
            f.Xa && (f.b ? (g = f.b, g.D = f.Xa, $H(g)) : Rk(f.Xa,
                Pk), X(f.Xa, !!f.b));
            f.Vh = !0;
            f.ia();
            f.setVisible(!0);
            a.g.log("pbtl", {
                sl: b,
                tl: c,
                slen: d,
                tlen: e
            })
        } else {
            null != a.j && (a.j.ea(!1), a.j.g(MSG_SAVING), U(a.j.l(), Ge));
            null != a.C && (a.C.ea(!1), a.C.g(MSG_SAVING));
            a.ob || tI(a);
            b = a.c.P() != ab && a.c.P() != GF(a.H) + "|" + vx(a.H);
            oI(a, !b);
            e = a.a;
            b = new HD;
            c = GF(e.c);
            b.data[1] = c;
            c = vx(e.c);
            b.data[2] = c;
            c = HF(e.m, !0);
            b.data[3] = c;
            c = e.m.Ca(!0);
            b.data[4] = c;
            c = e.o;
            d = z(e.I, e, b);
            e = e.m.g;
            var l = null != e.g && Xr(e.g.a);
            var m = I(b, 2);
            e = I(b, 3);
            f = b.cb();
            g = {
                cm: "a"
            };
            g.sl = I(b, 1);
            g.tl = m;
            g.ql = e.length + "";
            l && (g.edit = "1");
            b = {};
            b.q = e;
            b.utrans = f;
            KD(c, na + zm(g), d, Ka, zm(b));
            X(a.B, !0);
            a.A || nI(a, 1)
        }
    },
    mI = function(a) {
        var b = 0 != a.o.j;
        a.ra.setVisible(b);
        X(a.xa, b);
        "" == a.a.b ? W(a.sb.l(), Re, Mc) : W(a.sb.l(), Re, "")
    },
    uI = function(a, b) {
        null != a.j && a.j.setVisible(b);
        null != a.C && a.C.setVisible(b)
    };
kI.prototype.Pb = function() {
    mI(this);
    var a = this.a,
        b = this.c.P(),
        c = b.split("|")[0];
    b = b.split("|")[1];
    if (c != a.g || b != a.j) a.g = c, a.j = b, MD(a);
    X(this.B, !0);
    a = this.F;
    c = CH(this.b);
    b = qI(this);
    var d = rI(this),
        e = sI(this);
    R(a, Jo(a, 179, c, b, d, e))
};
var sI = function(a) {
        return "2" == a.Za.P()
    },
    qI = function(a) {
        a = a.c.P().split("|")[0];
        return a == $a ? "" : a
    },
    rI = function(a) {
        a = a.c.P().split("|");
        a = 1 < a.length ? a[1] : "";
        return a == $a ? "" : a
    };
w = kI.prototype;
w.Rj = function() {
    var a = this.a,
        b = this.Za.P();
    b != a.v && (a.v = b, MD(a));
    X(this.B, !0);
    a = this.F;
    b = CH(this.b);
    var c = qI(this),
        d = rI(this),
        e = sI(this);
    R(a, Jo(a, 44, b, c, d, e))
};
w.Eh = function(a) {
    a.stopPropagation();
    a.preventDefault();
    a = this.K.value;
    if (a != this.aa)
        if (this.aa = a, "" == a) oI(this), MD(this.a);
        else {
            a = this.a;
            var b = this.K.value;
            b != a.b && (a.b = b, MD(a));
            mI(this);
            X(this.B, !0)
        }
    a = this.F;
    b = CH(this.b);
    var c = qI(this),
        d = rI(this),
        e = sI(this);
    R(a, Jo(a, 43, b, c, d, e))
};
w.ak = function() {
    var a = this.F,
        b = CH(this.b),
        c = qI(this),
        d = rI(this),
        e = sI(this);
    R(a, Jo(a, 46, b, c, d, e));
    a = zH(this.b);
    this.o.Ka(!1);
    0 != a.length && PD(this.a, a);
    mI(this);
    this.I()
};
w.Sj = function() {
    if (0 == ND(this.a).length) this.o.Ka(!1);
    else {
        this.b.Ka(this.o.Ta());
        mI(this);
        this.g.log("pbca", this.o.Ta());
        var a = this.F,
            b = CH(this.b),
            c = qI(this),
            d = rI(this),
            e = sI(this);
        R(a, Jo(a, 178, b, c, d, e))
    }
};
w.xm = function(a) {
    var b = a.target.Ca();
    a = this.a.o;
    var c = I(b, 1),
        d = I(b, 2),
        e = I(b, 3),
        f = b.cb(),
        g = {
            cm: "e"
        };
    g.id = b.Bc();
    g.sl = c;
    g.tl = d;
    b = {};
    b.q = e;
    b.utrans = f;
    KD(a, na + zm(g), qf, Ka, zm(b))
};
w.rk = function(a) {
    a = a.target;
    var b = a.Ca();
    Uu(this.Ub, I(b, 1), I(b, 2), I(b, 3), "pb");
    AD(this.Tb, b.cb());
    b = this.b;
    for (var c = ys(b), d = 0; d < c; d++) As(b, d).Ka(As(b, d) == a);
    this.o.Ka(AH(this.b));
    mI(this);
    this.I();
    this.g.log("pbcl");
    a = this.F;
    b = CH(this.b);
    c = qI(this);
    d = rI(this);
    var e = sI(this);
    R(a, Jo(a, 48, b, c, d, e))
};
w.dk = function() {
    var a = {},
        b = op(new ap(window.location.href, !0), fb);
    a.authuser = b ? b : "0";
    b = this.a;
    var c = [],
        d = !1;
    b.g != $a && b.j != $a && (d = !0);
    if (null != b.a)
        for (var e = b.a.length - 1; 0 <= e; --e) {
            var f = [],
                g = b.a[e];
            f.push(b.c.K(I(g, 1)));
            f.push(b.c.Ra(I(g, 2)));
            f.push(QD(I(g, 3)));
            f.push(QD(g.cb()));
            c.push(f.join(","))
        }
    e = "";
    d ? e = " - " + b.c.K(b.g) + " - " + b.c.Ra(b.j) : "" != b.b && (e = " - " + b.b);
    b = [c.join("\n"), e];
    this.g.log("pbexp", "" == b[1] ? 1 : 2);
    c = this.F;
    R(c, S(c, 45));
    c = b[0];
    d = this.U + b[1];
    a = a || {};
    b = a.target;
    e = a.trixPath || (a.useCorp ?
            "https://docs.google.com/a/google.com/spreadsheets/" : void 0);
    delete a.target;
    delete a.useCorp;
    delete a.trixPath;
    Rg(a, {
        content: c,
        title: d
    });
    c = a.authuser;
    d = Fm(e || "https://docs.google.com/spreadsheets/", "import");
    d = Fm(d, "inline");
    c && (d = Bm(d, fb, c));
    c = d;
    GG(new EG, a, c, b)
};
var tI = function(a) {
        a.ob = !0;
        N("gt-apb-c").appendChild(yr(yG, {
            Rg: a.U
        }));
        jI(a, N("gt-pb-sw2"), MSG_HIDE_PB);
        N("gt-main").appendChild(yr(zG, {
            Rg: a.U
        }));
        a.Ea = N("pb-dd");
        a.Y = N("pb-sh");
        a.o = new gx;
        a.o.ia(N("pb-cb-a"));
        a.xa = N("pb-sp-del");
        var b = N("pb-del-c"),
            c = new Gt(MSG_DELETE, new bv("pbdel-button"));
        c.ia(b);
        c.setVisible(!1);
        L(c, n, a.ak, !1, a);
        a.ra = c;
        a.sb = pI(a);
        b = new hG(N("pb-ls"), [MSG_ALL, "-"], 11, [ab, $d], void 0, "", gI.J());
        L(b, rb, a.Pb, !1, a);
        a.c = b;
        b = new hG(N("pb-st"), [MSG_NEWEST, MSG_SOURCE], 10, ["0", "2"], void 0,
            MSG_SORT_BY + " ", gI.J(), void 0, !0);
        L(b, rb, a.Rj, !1, a);
        a.Za = b;
        a.X = N("pb-empty");
        b = N("gt-pb-tb");
        c = new vH;
        c.ia(b);
        L(c, rb, a.Qb, !1, a);
        L(c, "pbedit", a.xm, !1, a);
        L(c, "pbclick", a.rk, !1, a);
        a.b = c;
        a.K = N("gt-pb-sb");
        a.aa = "";
        a.wa = N("gt-pb-sbt");
        a.B = N("gt-pb-spin");
        a.Ra = N("gt-apb-pb");
        a.$a = N("gt-pb-c");
        a.L = N("pb-tb-c");
        a.bb = N("pb-tool");
        b = N("pb-tool-r");
        c = new Gt(MSG_PB_EXP, new bv("pbexp-button"));
        c.ia(b);
        L(c, n, a.dk, !1, a);
        b = new DH;
        L(b, Rd, a.ma, !1, a);
        vI(a)
    },
    wI = function(a, b) {
        if (null == b) {
            b = MSG_NP;
            var c = MSG_NPM;
            b = a.c.P() ==
            ab ? b : c
        }
        Q(a.X, b);
        X(a.X, !0);
        X(a.b.l(), !1)
    },
    xI = function(a, b) {
        a.b.update(b, a.H, !0);
        X(a.X, !1);
        X(a.b.l(), !0)
    };
kI.prototype.yc = function() {
    this.o.Ka(!1);
    this.ra.setVisible(!1);
    X(this.xa, !1);
    X(this.B, !1);
    var a = ND(this.a);
    if (this.c.P() == ab) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = this.H.K(I(d, 1)) + (document.body.dir == Vd ? " < " : " > ") + this.H.Ra(I(d, 2));
            b[I(d, 1) + "|" + I(d, 2)] = e
        }
        for (var f in b) {
            d = !1;
            for (c = 2; c < this.c.Oa(); c++)
                if (gG(this.c, c) == f) {
                    d = !0;
                    break
                }
            d || (c = new IF(b[f], f), this.c.Ve(c))
        }
        for (c = this.c.Oa() - 1; 1 < c; c--) null != b[gG(this.c, c)] || this.c.Wc(c);
        OF(this.c, 1).setVisible(2 < this.c.Oa())
    }
    "" != this.a.b && (b = MSG_PB_SR.replace(ca,
        a.length), Q(this.Y, b), X(this.Y, !0), X(this.Ea, !1));
    0 == a.length ? (b = this.a.H, "" != b ? (wI(this, b), this.g.log("pberr")) : "" == this.a.b ? wI(this) : xI(this, a)) : (xI(this, a), this.A && BH(this.b, OD(this.a)));
    this.I();
    if (this.Ja) {
        b = [];
        for (f = 0; f < a.length; f++) Qf(b, I(a[f], 1) + "/" + I(a[f], 2));
        f = {};
        f.count = a.length;
        f.pairs = b.length;
        this.g.log("pbfo", f);
        a = this.F;
        R(a, S(a, 260));
        this.Ja = !1
    }
};
kI.prototype.Sb = function() {
    X(this.V, !1);
    this.v = 0;
    if (this.A) {
        eu(this.R.l(), MSG_SHOW_PB);
        V(document.body, "pbv");
        var a = new bE(this.Ra, 400),
            b = new bE(this.$a, 400);
        a.play();
        b.play();
        this.A = !1
    } else eu(this.R.l(), MSG_HIDE_PB), this.A = !0, this.ob || (tI(this), MD(this.a), X(this.B, !0)), U(document.body, "pbv"), a = new cE(this.Ra, 400), b = new cE(this.$a, 400), a.play(), b.play(), this.ma(), BH(this.b, OD(this.a));
    a = this.F;
    R(a, S(a, this.A ? 40 : 41));
    this.g.log("pbsw", this.A)
};
var vI = function(a) {
    L(a.o, rb, a.Sj, !1, a);
    L(a.wa, r, a.Eh, !1, a);
    L(new Ks(a.K), jd, function(a) {
        13 == a.keyCode && this.Eh(a)
    }, !1, a);
    L(a.a, Ld, a.yc, !1, a);
    L(a.Ob, Ne, a.I, !1, a);
    L(window, Wd, a.ma, !1, a);
    L(a.L, Wd, a.xc, !1, a)
};
kI.prototype.ma = function() {
    var a = document.documentElement.clientHeight;
    X(this.L, !1);
    document.body.scrollHeight > a && (a = document.body.scrollHeight);
    X(this.L, !0);
    var b = Kr(this.L).a;
    this.L.style.height = Fr(a - b - 29, !0)
};
kI.prototype.I = function() {
    a: {
        var a = this.a;
        if (null != a.a)
            for (var b = 0; b < a.a.length; ++b) {
                var c = a.a[b];
                if (GF(a.c) == I(c, 1) && vx(a.c) == I(c, 2) && HF(a.m) == I(c, 3) && a.m.Ca(!0) == c.cb()) {
                    a = c.Bc();
                    break a
                }
            }
        a = ""
    }
    this.m = a;null != this.j && ("" != this.m ? U(this.j.l(), Ge) : V(this.j.l(), Ge), hI(this, this.j));null != this.C && (this.C.ea("" == this.m), this.C.g("" != this.m ? MSG_SAVED : this.Ma))
};
kI.prototype.xc = function() {
    0 < this.L.scrollTop ? U(this.bb, "pb-shadow") : V(this.bb, "pb-shadow")
};
var yI = function(a, b, c) {
    Y.call(this);
    this.M = a;
    this.B = b;
    this.O = c;
    this.b = HATS_TP;
    this.c = this.v = this.g = this.m = null;
    this.j = -1;
    this.I = Ko.J();
    this.F = ro.J()
};
A(yI, Y);
yI.prototype.sa = function() {
    yI.w.sa.call(this);
    this.Z(ol(document, k))
};
yI.prototype.Z = function(a) {
    yI.w.Z.call(this, a);
    U(a, "gt-hats");
    a.appendChild(xr(BG));
    this.m = O("gt-hats-tt", a);
    this.g = O("gt-hats-c", a);
    this.v = O("gt-hats-x", a);
    Q(this.m, MSG_HATS_TITLE);
    this.c = new OB;
    zs(this, this.c, !0);
    a = [
        [MSG_HATS_O1, 0],
        [MSG_HATS_O2, 1],
        [MSG_HATS_O3, 2],
        [MSG_HATS_O4, 3],
        [MSG_HATS_O5, 4]
    ];
    if (2 == this.b || 4 == this.b || 6 == this.b)
        for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    for (b = 0; b < a.length; ++b)
        if (a[b][0]) {
            c = a[b][0];
            d = a[b][1];
            e = P(Na);
            if (1 == this.b) {
                var f =
                    P(Na, {
                        "class": "goog-inline-block gt-hats-icon"
                    });
                U(f, "gt-hats-icon" + ys(this.c));
                e.appendChild(f)
            }
            f = P(Na, {
                "class": "gt-hats-option"
            });
            Q(f, c);
            e.appendChild(f);
            c = new IF(e, d);
            zs(this.c, c, !0)
        }
};
yI.prototype.Lb = u("g");
yI.prototype.W = function() {
    yI.w.W.call(this);
    Z(this).G(this.c, n, this.K);
    Z(this).G(this.v, r, z(this.A, this, 0));
    var a = this.F;
    R(a, S(a, 261));
    zI(this, de)
};
var zI = function(a, b) {
    var c = {};
    c.sl = GF(a.B);
    c.tl = vx(a.B);
    c.hl = a.M;
    c.e = b;
    a.I.log(1 == a.b ? "survey" : "survey" + a.b, c)
};
yI.prototype.K = function(a) {
    this.j = a.target.P();
    Fo(this.F, 10 * (this.b - 1) + this.j);
    zI(this, Xd + this.j);
    Tr(this.l(), Ur(this.l()));
    this.c.Ba();
    Q(this.m, MSG_HATS_THANKS);
    this.g.appendChild(xr(CG, {
        Lj: MSG_HATS_AF,
        Td: MSG_HATS_MF
    }));
    a = O("gt-hats-link", this.g);
    Z(this).G(a, r, function() {
        this.O.b();
        var a = this.F;
        R(a, S(a, 263));
        zI(this, "feedback")
    });
    this.A(1E4)
};
yI.prototype.A = function(a) {
    Oo(this.I, "/translate/uc?ua=dismiss&uav=survey");
    Mj(this.R, a, this)
};
yI.prototype.R = function() {
    (new bE(this.l(), 300)).play();
    Mj(z(this.Ba, this), 300)
};
var AI = function(a) {
    this.data = a || []
};
A(AI, Cq);
var BI = function(a) {
    this.data = a || []
};
A(BI, Cq);
var CI = function(a) {
    this.data = a || []
};
A(CI, Cq);
AI.prototype.Ha = function() {
    return fi(this, 1)
};
BI.prototype.Ha = function() {
    return fi(this, 1)
};
var DI = function(a) {
    this.data = a || []
};
A(DI, Cq);
var EI = function(a) {
    this.data = a || []
};
A(EI, Cq);

function FI(a, b, c) {
    b = P(Fa, {
        type: Mc,
        name: b,
        value: c
    });
    a.appendChild(b)
}
var SI = function(a) {
    M.call(this);
    this.A = Ko.J();
    var b = new vG(this);
    a.o && (a = pF(a));
    this.Hi = N("gt-submit");
    this.form = this.Hi.form;
    this.a = N("hl").value;
    this.R = lo.J();
    this.F = ro.J();
    this.bb = new ar("t");
    this.he = !0;
    this.M = a.L;
    this.ji = (new Date).getTime();
    xo(this.F);
    this.C = new tG("gt-sl", !0);
    this.L = new tG("gt-tl", !1);
    uG(this.C);
    this.C.ra = 0;
    uG(this.L);
    this.L.ra = 0;
    this.Df = null;
    this.Ff = Gy.J();
    this.Bi = N("gt-swap");
    this.Jf = new Gt(null, new av("trans-swap-button"));
    this.Bi && this.Jf.S(this.Bi);
    var c = N(ie);
    this.c = new xw(c.value);
    rw(this.c);
    this.c.S(c);
    qw(this.c);
    U(GI(this), be);
    this.oe = this.Lf = 0;
    this.ba = new Bw(z(this.zi, this));
    wG(b, this.ba, this.C, this.L);
    c = "" == a.c ? null : new Kz(HI(a.c), z(this.K, this), void 0, !0);
    var d = "" == a.g ? null : new Kz(HI(a.g), z(this.Ra, this));
    Jw(this.ba);
    no(this.R, GF(this));
    oo(this.R, vx(this));
    this.ti = !0;
    this.Ja = new Mz(this.ba);
    this.b = HI(a.I);
    Oz(this.Ja, {
        Oi: this.C,
        Vi: this.L,
        Pi: c,
        Wi: d,
        Si: this.Jf,
        Xi: this.c,
        Ki: this.b
    });
    null != FEATURE_STICKINESS && II(this);
    c = N("gt-src-cc");
    this.le = new dw(MAX_SINGLE_QUERY_LENGTH,
        "gt-src-cc-normal", "gt-src-cc-overflow");
    this.le.S(c);
    gw(this.le);
    hw(this.le, GF(this));
    this.sb = new nH(this.c, this.ba, this.a, MAX_SINGLE_QUERY_LENGTH);
    this.sb.S(N("gt-ovfl"));
    pH(this.sb, this.a);
    qH(this.sb, GF(this));
    this.mm = new Tw(this.c, this.ba, this.a, this.sb, this.le);
    Uw(this.mm);
    JI(this);
    KI(this.c, GF(this));
    L(this.ba, pe, this.rj, !1, this);
    L(this.ba, oe, this.tj, !1, this);
    L(this.ba, Gb, this.Cm, !1, this);
    L(this.ba, ze, this.xj, !1, this);
    this.v = new mw("");
    this.v.S(N("contribute-target"));
    rw(this.v);
    qw(this.v);
    KI(this.v, vx(this));
    L(this.Hi, r, this.Ql, !1, this);
    L(this.ba, pd, z(this.pe, this, !1), !1, this);
    L(this.c, rb, this.Im, !1, this);
    L(this, Ne, this.Jm, !1, this);
    this.o = new Kv(this.a, this.bb, this);
    this.o.S(N("gt-lc"));
    c = new iy(this.a);
    zs(this.o.b, c, !0);
    this.fe = new Du(this.a, [common_translation_tooltip, uncommon_translation_tooltip, rare_translation_tooltip, MSG_N_MORE_TRANSLATIONS_LABEL], !0, !1);
    zs(this.o.j, this.fe, !0);
    this.Qb = this.Pb = this.Ub = this.Bb = null;
    this.Bb = new Bx(this.a, !1);
    zs(this.o.b, this.Bb, !0);
    this.Ub = new RE(this.a, !1);
    zs(this.o.b, this.Ub, !0);
    this.Pb = new ky(this.a, !1);
    zs(this.o.b, this.Pb, !0);
    this.Qb = new eE(this.a, !1);
    zs(this.o.b, this.Qb, !0);
    if (c = HI(a.M)) this.j = new EE(this, MSG_LANGUAGE_CORRECTION, MSG_SPELLING_CORRECTION, MSG_SPELLING_AUTO_CORRECTION, MSG_SPELLING_REVERT_CORRECTION), this.j.S(c);
    this.Kf = a.wa;
    this.Bj = a.V;
    this.O = N(Qd);
    this.Za = N(me);
    this.ee = N("backend-stats-stt-total");
    this.yf = N("backend-stats-community");
    this.Zd = N("backend-stats-dictionary");
    this.ae = N("backend-stats-other");
    this.Yd = N("backend-stats-decoder");
    this.ce = N("backend-stats-decoder1");
    this.$d = N("backend-stats-decoder2");
    this.Ed = N("backend-models-used");
    this.yj = a.O;
    this.gi = HI(a.C);
    this.yc = HI(a.A);
    this.Ea = null;
    null != a.a && (this.Ea = new Oy(a.a, GI(this), N("gt-src-c"), this.a, IN_CHINA, this));
    this.Ob = null;
    null != this.v && null != a.m && (this.Ob = new Oy(a.m, this.v.l(), N("gt-res-c"), this.a, IN_CHINA, void 0), X(a.m, !1));
    this.ge = N(Yd);
    this.Kh = new tF(this);
    LI(this);
    this.Gf = a.X;
    this.Hf = a.U;
    if (this.B = a.K) MI(this.B, GF(this)), wl(this.B.l(), GI(this)), L(this.B, n, this.Hh, !1, this);
    this.Rb = a.ob;
    null != this.v && null != this.Rb && (MI(this.Rb, vx(this)), wl(this.Rb.l(), this.v.l()));
    this.Ma = a.R;
    this.Tb = null;
    this.Ma && (this.Tb = NI(this.Ma.l()), L(this.Ma, n, this.qj, !1, this));
    this.I = null;
    gq && (this.I = new tx(N("gt-community-card-c"), this, z(this.Hh, this)));
    this.H = null;
    ENABLE_COMMUNITY_PROMO && ENABLE_COMMUNITY_SERVED_PROMO && (this.H = new XE("t-served-community", MSG_COMMUNITY_PROMO_SERVED_DESCRIPTION, MSG_COMMUNITY_PROMO_SERVED_LINK, MSG_COMMUNITY_PROMO_SERVED_DISMISS, MSG_COMMUNITY_PROMO_SERVED_URL,
        COMMUNITY_PROMO_SERVED_DISMISSED, this.I), this.H.S(N("gt-res-dir-ctr")));
    this.La = {};
    this.La.edit = ENABLE_COMMUNITY_USER_EDIT_PROMO ? new xx(MSG_COMMUNITY_PROMO_EDIT_LINK, MSG_COMMUNITY_PROMO_EDIT_SUBTEXT, MSG_COMMUNITY_PROMO_EDIT_TITLE, "", MSG_COMMUNITY_PROMO_EDIT_URL, "t-user-edit", 15, this.I) : null;
    ENABLE_COMMUNITY_PROMO && ("new" === COMMUNITY_PROMO_TYPE ? this.La[Fb] = new xx(MSG_COMMUNITY_PROMO_NEW_USER_LINK, "", MSG_COMMUNITY_PROMO_NEW_USER_TITLE, MSG_COMMUNITY_PROMO_NEW_USER_SUBTEXT, MSG_COMMUNITY_PROMO_NEW_USER_URL,
        "t-new-user", 13) : "return" === COMMUNITY_PROMO_TYPE && (this.La[Fb] = new xx(MSG_COMMUNITY_PROMO_RETURN_USER_LINK, "", MSG_COMMUNITY_PROMO_RETURN_USER_TITLE, MSG_COMMUNITY_PROMO_RETURN_USER_SUBTEXT, MSG_COMMUNITY_PROMO_RETURN_USER_URL, "t-return-user", 14)), c = N("gt-promo-lr"), d = this.La[Fb], null != d && d.S(c));
    DC = MSG_UNDO_EDITS;
    this.aa = new EC(a.b);
    this.wa = N("gt-res-copy");
    this.aa.b && (this.wa && (this.Bf = new lC(this.wa, MSG_COPIED, null, 2)), L(this.aa.b, n, this.oj, !1, this));
    b.a(this.Jf, this.Gf, this.Hf);
    (b = mD()) && (b = "&" +
        b);
    this.Sb = null;
    null != this.Gf && (this.Sb = new Gv(this.Gf, "&client=t" + b, 2, qq));
    this.ra = null;
    null != this.Hf && (this.ra = new Gv(this.Hf, "&client=t&prev=input" + b, 1, qq));
    wF(!0);
    this.ie = !1;
    nC = MSG_ALT_PHRASE_TITLE;
    oC = MSG_EDIT_TRANSLATION;
    zC = MSG_USE_ALTERNATIVE;
    AC = cd;
    c = ol(document, k);
    X(c, !1);
    vl(c, this.O);
    b = new GC(MSG_SUBMIT_TRANSLATION, MSG_CANCEL_EDITS, MSG_SUGGEST_A_TRANSLATION, this.La.edit);
    b.S(c);
    c = new BC(this.v, this.O, this.Rb);
    this.g = new rD(void 0, !0, void 0, a.H, a.B, b, c, this.aa);
    this.g.S(this.b);
    this.me = new aB(GI(this));
    sD(this.g, this.me);
    U(this.me.a, be);
    this.g.b.j = new lC(void 0, MSG_ALT_PHRASE_TITLE, void 0, 2);
    this.g.b.j.X = 700;
    pq && (b = new jE([this.c.l()], [this.b]), L(b, Xd, this.o.Mk, !1, this.o), L(this.g, r, function(a) {
        1 < a.Cl && this.o.Yh(a)
    }, !1, this), L(this.g, "usealt", this.o.Yh, !1, this.o));
    xF(this);
    null != this.Ob && Ry(this.Ob, vx(this));
    this.j && L(this.j, n, this.vj, !1, this);
    this.xa = new xE(this.c, this.Ja, tld.substr(tld.lastIndexOf(".") + 1), this.a);
    yE(this.xa);
    CE(this.xa, ux(this));
    L(this.xa, qe, function() {
        GI(this).focus()
    }, !1, this);
    L(this.xa, Nb, function() {
        GI(this).focus()
    }, !1, this);
    L(this.g, n, this.Gm, !1, this);
    b = [this.b];
    (c = N("gt-res-tools")) && b.push(c);
    new SE(this.b, b);
    (b = N("gt-swap")) && b.title && fu(b);
    var e = N("gt-src-wrap");
    U(e, Qb);
    L(GI(this), Qb, function() {
        U(e, Qb)
    });
    L(GI(this), kb, function() {
        V(e, Qb)
    });
    L(GI(this), Qb, this.F.c, !1, this.F);
    V(document.body, "nj");
    b = N("gt-sl-gms");
    c = N("gt-tl-gms");
    null != b && (b.onclick = null);
    null != c && (c.onclick = null);
    this.Gi = new DF(this, this.a);
    FF(this.Gi);
    this.Fh = new qF(this.a);
    this.Fh.ia(N("gt-bbar"));
    sF(this.Fh);
    this.V = null;
    a.v && (this.V = new hF, jF(this.V, this.a), kF(this.V, ux(this)), lF(this.V, vx(this)));
    new VG(GI(this), this);
    this.xc = OI(this);
    mq && (this.je = new kI(new JD(this.a), this, this, this, this.g, this, this.a));
    this.zj = new OE;
    this.If = new QE;
    this.If.S(N("gt-src-is"));
    this.If.setVisible(!1);
    this.ed = new mw("");
    b = N("source-is");
    this.ed.S(b);
    U(b, be);
    KI(this.ed, GF(this));
    b = {
        Yk: this.c,
        Wl: this.ed,
        Zk: this.Ea,
        Xj: new zx,
        ba: this.ba,
        hm: new NE,
        zm: new ar("t"),
        client: "t",
        Ab: this.a,
        dm: this.he,
        jl: 4,
        ym: sq,
        Qj: !1,
        ek: MSG_FLAG_SUGGESTION,
        al: !1
    };
    this.U = new hA(this.zj, this.If, b);
    this.zi(fk(this.ba.a) ? Vd : sd);
    sq ? U(this.U.a.l(), "gt-is-tr-on") : U(this.U.a.l(), "gt-is-tr-off");
    this.jj = new OA(this.c, this.he, N("gt-otf-switch"), this.U, z(this.pe, this, !0, void 0), z(this.bb.m, this.bb));
    L(this, je, this.g.rm, !1, this.g);
    this.$a = null;
    iq && (c = ol(document, k), X(c, !1), wl(c, N(Qd)), this.$a = new HG(this, this, this.a), this.$a.S(c));
    this.ke = null;
    Mj(this.sj, 6E4, this);
    this.m = "";
    this.X = null;
    a.j && (this.X = a.j, this.X.fh = this, pp(x.location).g && Vu(this.X, x.location.hash.substr(1)),
        this.X.ff.ea(!0), L(this.X.ff, "navigate", this.ij, void 0, this));
    this.Y = [];
    this.Y.push(new Jz(GI(this), "orig", 13, "t", this));
    this.Y.push(new Jz(this.b, "trans", 14, "t", this, z(this.Ca, this)));
    this.Y.push(new Jz(this.fe.l(), this.fe.eb(), this.fe.kc(), "t", this));
    this.Y.push(new Jz(this.Bb.l(), this.Bb.eb(), this.Bb.kc(), "t", this));
    this.Y.push(new Jz(this.Ub.l(), this.Ub.eb(), this.Ub.kc(), "t", this));
    this.Y.push(new Jz(this.Pb.l(), this.Pb.eb(), this.Pb.kc(), "t", this));
    this.Y.push(new Jz(this.Qb.l(), this.Qb.eb(),
        this.Qb.kc(), "t", this));
    L(window, jb, z(this.Ef, this, jb));
    L(window, "unload", z(this.Ef, this, "unload"));
    JS_LOADED = !0;
    window.jstiming && window.jstiming.load && (window.jstiming.load.tick("je"), _csi("t", ux(this), vx(this), this.c.l()));
    PI(this);
    QI(this);
    if (hq) {
        a = dl("gt-br-logo");
        var f = vx(this);
        C(a, function(a) {
            U(a, fk(f) ? qc : pc)
        });
        RI(this)
    }
};
A(SI, M);
SI.prototype.zi = function(a) {
    if (this.U) a: {
        var b = this.U.a;
        if (a == sd) var c = rd;
        else if (a == Vd) c = Td;
        else break a;
        W(b.l(), Hb, a);
        W(b.l(), "text-align", c)
    }
};
SI.prototype.rj = function(a) {
    if (!this.ie && a && a.data && 0 < a.data.length) {
        a = a.data[0];
        var b = this.K(a);
        b && FE(this.j, {
            ze: b,
            $g: a,
            Fi: HF(this),
            Qi: ux(this)
        })
    }
};
var HI = function(a) {
    return y(a) ? N(a) : null
};
SI.prototype.Hh = function() {
    TI(this, "");
    var a = this.g;
    a.j = null;
    a.I = null;
    BD(this.g);
    UI(this);
    this.xa.c = "";
    a = this.F;
    R(a, S(a, 23));
    So(this.A, "clearbtn", 1, Ya);
    this.ma()
};
SI.prototype.oj = function() {
    var a = Hz(N(Sd)),
        b = Tz(this.Ja);
    b.hl = this.a;
    b.ql = HF(this).length;
    if (this.wa) try {
        if (document.execCommand(Ab)) {
            ju(this.wa, !0);
            var c = this.Bf,
                d = this.wa;
            YB(c, d);
            c.b = d;
            eC(c, d, void 0);
            var e = this.F,
                f = S(e, 21),
                g = new io;
            G(g, 1, 3);
            Th(f, 56, g);
            R(e, f);
            Po(this.A, "t", Ab, "success", b)
        } else wo(this.F, 157), Po(this.A, "t", Ab, "failure", b)
    } catch (l) {
        wo(this.F, 158), Po(this.A, "t", Ab, "error", b)
    } else c = this.F, R(c, S(c, 24)), b.selected = a, this.A.log("selectall", b)
};
SI.prototype.qj = function() {
    if (VA(this.Tb.b)) this.Tb.setVisible(!1);
    else {
        var a = "https://translate.google.com/#" + ux(this) + "/" + vx(this) + "/" + hg(HF(this));
        a = yr(DG, {
            $i: this.Ca(),
            Yl: MSG_SHARE_MODULE_TITLE,
            Xl: MSG_SHARE_MODULE_EMAIL,
            url: hg(a)
        });
        rE(this.Tb, a);
        this.Tb.setVisible(!0);
        var b = this.A;
        Po(b, "t", "share", "share", {
            sl: ux(this),
            tl: vx(this),
            hl: this.a,
            ql: HF(this).length
        });
        Eo(this.F, "share");
        a = cl("a", "", O("share-panel"));
        a[0].focus();
        C(a, function(a) {
            L(a, r, function() {
                var c = a.className.split(" ")[0];
                Po(b, "t",
                    "share", c, {
                        sl: ux(this),
                        tl: vx(this),
                        hl: this.a,
                        ql: HF(this).length
                    });
                Eo(this.F, c)
            }, !1, this)
        }, this)
    }
};
var NI = function(a) {
    var b = new pE;
    b.c.b = a;
    sE(b);
    Tt(b.c, 1, 0, void 0);
    b.g = !0;
    b.ia();
    return b
};
SI.prototype.ma = function() {
    hh || Ch || Dh || Eh || GI(this).focus()
};
SI.prototype.vj = function() {
    this.ma()
};
var KI = function(a, b) {
        a && (a = a.l(), fk(b) ? (a.dir = Vd, W(a, Id, "20px"), W(a, Jd, "")) : (a.dir = sd, W(a, Jd, "20px"), W(a, Id, "")))
    },
    MI = function(a, b) {
        a && (a = a.l(), fk(b) ? (W(a, Td, ""), W(a, rd, "0")) : (W(a, rd, ""), W(a, Td, "0")))
    },
    JI = function(a) {
        var b = GF(a);
        ux(a) == gb && b != gb ? (b = source_language_detected.replace(/%\d\$s/g, a.K(b)), kG(a.C, b)) : kG(a.C, detect_language)
    },
    VI = function(a, b) {
        var c = !1;
        C(NND, function(d) {
            d[0] == a && d[1] == b && (c = !0)
        });
        return c
    },
    WI = function(a, b) {
        var c = !1;
        C(NNDX, function(d) {
            d[0] == a && d[1] == b && (c = !0)
        });
        return c
    },
    XI =
        function(a) {
            var b = GF(a);
            a = vx(a);
            return VI(b, a) || VI(b, Lb) && VI(Lb, a) && !WI(b, a) ? !0 : !1
        },
    RI = function(a) {
        a = XI(a);
        V(N("gt-brain"), a ? oc : rc);
        U(N("gt-brain"), a ? rc : oc);
        V(N("gt-nobrain"), a ? rc : oc);
        U(N("gt-nobrain"), a ? oc : rc)
    };
SI.prototype.tj = function() {
    CE(this.xa, ux(this));
    xF(this);
    QI(this);
    null != this.V && kF(this.V, ux(this));
    KI(this.c, GF(this));
    KI(this.ed, GF(this));
    MI(this.B, GF(this));
    var a = HF(this, !0),
        b = ux(this);
    this.ra && this.ra.update(a, b);
    YI(this);
    hq && RI(this);
    qH(this.sb, GF(this));
    a = GF(this);
    this.R.b = a
};
SI.prototype.Cm = function() {
    JI(this);
    QI(this);
    KI(this.c, GF(this));
    KI(this.ed, GF(this));
    MI(this.B, GF(this));
    var a = GF(this);
    this.R.g = a;
    hq && RI(this);
    qH(this.sb, GF(this))
};
SI.prototype.xj = function() {
    null != this.Ob && Ry(this.Ob, vx(this));
    QI(this);
    var a = vx(this);
    null != this.V && lF(this.V, a);
    KI(this.v, vx(this));
    MI(this.Rb, vx(this));
    YI(this);
    oo(this.R, vx(this));
    if (hq) {
        var b = fk(a);
        C(dl("gt-br-logo"), function(a) {
            V(a, b ? pc : qc);
            U(a, b ? qc : pc)
        })
    }
    hq && RI(this)
};
var YI = function(a) {
    var b = !0;
    0 == a.Ca().length && (b = !1);
    a.xc.setVisible(b)
};
SI.prototype.Im = function(a) {
    this.B && this.B.setVisible(HF(this) ? !0 : !1);
    a.fd == Kd && (ZI(this, HF(this)) ? this.Lf++ : this.oe++);
    50 >= (HF(this) || "").length ? (U(this.b, be), U(GI(this), be), U(this.me.a, be), null != this.v && U(this.v.l(), be), null != this.H && (V(this.H.l(), Ke), U(this.H.l(), Je))) : (V(this.b, be), V(GI(this), be), V(this.me.a, be), null != this.v && V(this.v.l(), be), null != this.H && (V(this.H.l(), Je), U(this.H.l(), Ke)));
    this.dispatchEvent(new BF(a.text))
};
var QI = function(a) {
    var b = a.La[Fb],
        c = !HF(a);
    SIGNED_IN && a.ba.a != gb && a.I && wx(a.I) ? (a.I.setVisible(c), null != b && b.setVisible(!1)) : (null != b && b.setVisible(c), a.I && a.I.setVisible(!1))
};
SI.prototype.Jm = function() {
    this.Bf && (bC(this.Bf, this.wa), ju(this.wa, !1));
    if (GF(this) != gb) {
        var a = HF(this, !0),
            b = GF(this);
        this.ra && this.ra.update(a, b)
    }
    this.xa.kb() || Qz(this.Ja, !1)
};
var $I = function(a) {
    "u" == GI(a).name ? (a.form.action = a.Kf, a.form.enctype = a.form.encoding = cb, a.form.method = "get") : null != a.gi && Xr(a.gi) ? (a.form.action = a.yj, a.form.enctype = a.form.encoding = "multipart/form-data", a.form.method = "post") : (a.form.action = a.Bj, a.form.enctype = a.form.encoding = cb, 2E3 < HF(a).length ? a.form.method = "post" : a.form.method = "get")
};
SI.prototype.vh = function(a) {
    TI(this, HF(this));
    null != this.yc && (xl(this.yc), this.yc = null);
    GI(this).name = "u";
    $I(this);
    a && FI(this.form, "act", "url");
    (a = op(new ap(window.location, !0), fb)) && FI(this.form, fb, a);
    this.form.submit()
};
SI.prototype.Ql = function(a) {
    a.preventDefault(); - 1 != this.form.action.indexOf("/translate_f") ? this.yc && dg(zg(this.yc.value)) || this.form.submit() : "" != this.Kf && lD(HF(this)) ? this.vh() : (qo(this.R, "btn"), So(this.A, ie, "btn"), this.pe(!1), this.Lm && kA(this.U))
};
var aJ = function(a) {
        0 != a.b.innerHTML.length ? a.b.innerHTML += "..." : Mj(function() {
            this.bb.b && 0 == this.b.innerHTML.length && (this.b.innerHTML = tr_in)
        }, 1500, a)
    },
    bJ = function(a) {
        ul(a.b);
        a.b.lang = "";
        a.O && ul(a.O);
        a.aa.b && a.aa.b.setVisible(!1);
        a.Ma && a.Ma.setVisible(!1);
        null != a.H && a.H.setVisible(!1);
        a.Sb && Iv(a.Sb, !1);
        null != a.je && uI(a.je, !1);
        a.xc && a.xc.setVisible(!1)
    },
    UI = function(a) {
        cJ();
        bJ(a);
        a.o.setVisible(!1);
        a.ba && Cw(a.ba, null);
        a.Za && ul(a.Za);
        a.ee && Q(a.ee, "0");
        a.yf && Q(a.yf, "0");
        a.Zd && Q(a.Zd, "0");
        a.ae && Q(a.ae,
            "0");
        a.Yd && Q(a.Yd, "0");
        a.ce && Q(a.ce, "0");
        a.$d && Q(a.$d, "0");
        a.Ed && Q(a.Ed, "&nbsp;");
        a.ra && Iv(a.ra, !1);
        JI(a);
        a.B && a.B.setVisible(!1);
        a.$a && a.$a.setVisible(!1);
        a.j && a.j.setVisible(!1);
        a.ge && X(a.ge, !0);
        QI(a);
        a.dispatchEvent(new AF(a, a))
    };
SI.prototype.pe = function(a) {
    this.jj.reset(a);
    var b = ux(this),
        c = vx(this);
    if (0 == HF(this).length) UI(this);
    else {
        dJ(this);
        Xz(this.Ja);
        this.X && Wu(this.X, ux(this), vx(this), HF(this), a);
        var d = new window.jstiming.Timer;
        d.name = "at";
        aJ(this);
        Qz(this.Ja, !0);
        var e = new gp;
        e.g(new gp(Vo(this.A)));
        e.g(new gp(mD()));
        e.g(new gp(nD()));
        e.add("kc", zw(this.c));
        a = HF(this);
        this.R.m = a.substring(0, 64);
        Ho(this.F);
        var f = null != this.j && this.j.A;
        fr(this.bb, b, c, this.a, a, z(this.Cj, this, a, d), f, ENCODING, e, z(this.Hj, this));
        d = !1;
        ZI(this,
            a) ? (this.Ef(), d = !0) : a.length >= this.m.length && (d = !0);
        d && (this.m = a, this.Em = b, this.li = c);
        if (hq) {
            var g = N("prod-trans");
            g || (g = P(k, {
                id: "prod-trans"
            }), wl(g, N(Qd)));
            e = ep(e);
            e.add("internal", 1);
            e.add("expflags", "NMT__enable_nmt_level:0");
            fr(new ar("t", "https://translate.google.com"), b, c, this.a, a, function(a) {
                ul(g);
                X(g, !!a);
                if (a) {
                    for (var b = [], d = 0; d < H(a, 0); d++) b.push(Zq(a, d).cb());
                    Q(g, b.join(""));
                    W(g, Hb, fk(c) ? Vd : sd)
                }
            }, f, ENCODING, e)
        }
    }
};
SI.prototype.ij = function() {
    if (pp(x.location).g) {
        var a = x.location.hash.substr(1);
        this.C.P() + "/" + this.L.P() + "/" + hg(HF(this)) == a || Vu(this.X, a)
    }
};
var ZI = function(a, b) {
    return "" != a.m && b[0] != a.m[0] && b[b.length - 1] != a.m[a.m.length - 1]
};
SI.prototype.Ef = function(a) {
    if ("" != this.m) {
        var b = this.F,
            c = this.m,
            d = this.li,
            e = this.oe,
            f = S(b, 246);
        G(f, 1, d);
        G(f, 74, c.length);
        G(f, 52, c.substring(0, 64));
        c = new $n;
        G(c, 1, e);
        Th(f, 70, c);
        R(b, f);
        b = {
            sl: this.Em,
            tl: this.li,
            ql: this.m.length
        };
        64 < this.m.length && (this.m = this.m.substr(0, 64));
        b.q = this.m;
        a && (b[a] = 1);
        b.pc = this.oe;
        this.oe = this.Lf;
        this.Lf = 0;
        this.A.log("fq", b);
        this.m = ""
    }
};
SI.prototype.Cj = function(a, b, c) {
    this.j && this.j.setVisible(!1);
    cJ();
    try {
        this.ie = lD(a);
        ux(this) == gb && fi(c, 2) && (this.ie || fi(c, 3) ? Ew(this.ba, "") : Ew(this.ba, I(c, 2)));
        eJ(this, fi(c, 8) ? new Tq(c.data[8]) : null);
        var d = vx(this);
        fi(c, 9) && (b.tick("_start", void 0, 1), b.tick("st", "_start", ji(c, 9) + 1));
        this.b.parentNode.parentNode.style.display = "";
        Iw(this.ba);
        var e = [],
            f = [],
            g = [],
            l = "";
        this.b.lang = d;
        ul(this.b);
        var m = I(c, 2);
        if (0 < H(c, 0))
            for (var p = 0; p < H(c, 0); p++) {
                var q = Zq(c, p);
                fi(q, 2) && e.push(I(q, 2));
                fi(q, 3) && f.push(I(q,
                    3));
                fi(q, 0) && q.cb() && g.push(Dq(q, 4, 0));
                if (0 < H(q, 5)) {
                    for (var B = 0; B < H(q, 5); B++) l += hi(q, 5, B) + " ";
                    l += "\n"
                }
            }
        this.Ed && (this.Ed.innerHTML = jg(sg(l)));
        l = "";
        if (BD(this.g, c.nb(), m, d, this.a)) l = CD(this.g);
        else
            for (ul(this.b), p = 0; p < H(c, 0); p++) {
                q = Zq(c, p);
                var D = P(Na, {
                    title: I(q, 1)
                });
                D.innerHTML = jg(sg(q.cb()));
                this.b.appendChild(D);
                l += Ql(D)
            }
        null != this.xc && this.xc.setVisible(!0);
        this.ni(d, e.join(" "));
        if (this.Za) {
            var K = jg(sg(zg(f.join(" "))));
            if (dg(K)) ul(this.Za);
            else {
                var ea = fk(m) ? Td : rd;
                this.Za.innerHTML = K;
                this.Za.style.textAlign =
                    ea;
                if (m != this.wj) {
                    if (!y(this.Ff.c[m])) {
                        var ha = this.a;
                        m != ha && (Hy(m), Hy(ha))
                    }
                    this.wj = m
                }
            }
        }
        if (fi(c, 7)) {
            var Ra = this.j,
                Pa = I(new Sq(c.data[7]), 0),
                pa = I(new Sq(c.data[7]), 1),
                Pb = Eq(new Sq(c.data[7]), 5),
                ih = HF(this);
            var Wb = zq((new Sq(c.data[7])).data, 2);
            FE(Ra, {
                Yj: Pa,
                ze: pa,
                Bh: Pb,
                Fi: ih,
                Wf: Wb,
                Qi: ux(this)
            });
            this.j.A = !0
        }
        this.dispatchEvent(new AF(this, this));
        if (this.ee && this.yf && this.Zd && this.Yd && this.ce && this.$d && this.ae) {
            for (K = D = q = p = f = e = 0; K < g.length; K++) 0 == g[K] ? e++ : 3 == g[K] ? f++ : 1 == g[K] ? p++ : 2 == g[K] ? q++ : 10 == g[K] && D++;
            this.ee.innerHTML = (p + q).toString();
            this.yf.innerHTML = p.toString();
            this.Zd.innerHTML = q.toString();
            this.ae.innerHTML = D.toString();
            this.Yd.innerHTML = (e + f).toString();
            this.ce.innerHTML = e.toString();
            this.$d.innerHTML = f.toString()
        }
        var Uc = gg(l);
        if ("" != this.Kf && this.ie && (null != this.Cf && this.Cf.fk(), this.b.innerHTML = '<a href="javascript:ctr._submitUrl(true);" title="' + url_hyperlink_tooltip + '">' + sg(a) + "</a>", 0 != Uc.length && Uc != a)) {
            var le = P(Na, {
                title: a
            });
            le.innerHTML = jg(sg(" (" + Uc + ")"));
            this.b.appendChild(le)
        }
        this.ge &&
        X(this.ge, !1);
        this.b.parentNode.dir = fk(d) ? Vd : sd;
        QI(this);
        b.tick("prt");
        if (null != this.M) {
            var Zm = this.F;
            R(Zm, S(Zm, 249));
            this.A.log("ftrans", {
                ttl: this.ji - this.M,
                ttt: (new Date).getTime() - this.M
            });
            this.M = null
        }
        var $m = this.o;
        $m.c.reset();
        $m.c.push(a, m, d, c);
        null != this.je && uI(this.je, !fi(c, 3));
        this.aa.b && this.aa.b.setVisible(!fi(c, 3));
        this.Ma && this.Ma.setVisible(!fi(c, 3));
        var iJ = this.Ca(!0),
            jJ = vx(this);
        this.Sb && this.Sb.update(iJ, jJ, c);
        this.$a && this.$a.setVisible(!0);
        null != this.H && this.H.setVisible(pD(c));
        var kJ = hg(a).length;
        a = {};
        a.sl = m;
        a.tl = d;
        a.size = kJ;
        a.e = EXPERIMENT_IDS.join(",");
        b.tick("ol");
        window.jstiming.sn = Me;
        window.jstiming.report(b, a)
    } catch (kg) {
        throw null.Fm("Ajax translation failed.", kg), b = {}, kg.name && (b.name = kg.name), kg.message && (b.message = kg.message), kg.stack && (b.stack = kg.stack.substr(0, 2E3)), this.A.log("transerr", b), kg;
    }
    hq && !XI(this) && (this.b.innerHTML = "NMT NOT SUPPORTED FOR " + GF(this) + "->" + vx(this))
};
var cJ = function() {
    var a = N(Sd);
    X(N("gt-res-error"), !1);
    X(a, !0)
};
SI.prototype.Hj = function(a) {
    a = 413 == a ? MSG_REQUEST_TOO_BIG : MSG_TRANSLATION_ERROR;
    bJ(this);
    var b = N("gt-res-error");
    X(N(Sd), !1);
    ul(b);
    b.appendChild(document.createTextNode(a));
    X(b, !0)
};
SI.prototype.Gm = function(a) {
    var b = CD(a.target),
        c = a.target.Nh();
    a = this.bb;
    var d = z(this.ni, this, c),
        e = new gp,
        f = new gp;
    e.set(ub, a.c);
    e.set("sl", c);
    c = a.a + oa;
    e.set("dt", "rm");
    f.set("q", b);
    cr(a, c, e, f, z(a.o, a, d), void 0);
    this.dispatchEvent(new AF(this, this))
};
SI.prototype.ni = function(a, b) {
    if (this.O)
        if (b = jg(sg(zg(b))), dg(b)) ul(this.O);
        else {
            var c = fk(a) ? Td : rd;
            this.O.innerHTML = b;
            this.O.style.textAlign = c;
            a != this.mj && (y(this.Ff.b[a]) || (b = this.a, a != b && (Hy(a), Hy(b))), this.mj = a)
        }
};
var PI = function(a) {
        for (var b = a.Ja, c = Tz(b), d = [], e = [], f = 0; f < b.a.g.length; ++f) d.push(b.a.g[f]);
        for (f = 0; f < b.a.j.length; ++f) e.push(b.a.j[f]);
        c.slh = d.join("|");
        c.tlh = e.join("|");
        b = b.a;
        d = [];
        e = [];
        for (f = 0; f < b.g.length; ++f) {
            var g = b.g[f]; - 1 == Hf(d, g) && (d.push(g), e.push(g))
        }
        for (f = 0; f < b.j.length; ++f) g = b.j[f], -1 == Hf(e, g) && e.push(g);
        c.soph = 2 < d.length && 3 < e.length;
        c.hl = a.a;
        null != a.M && (a.zf = (new Date).getTime() - a.M, c.ttnc = a.zf);
        c.uetrans = a.g.ma;
        c.eotf = a.he;
        a.A.log("hready", c);
        a = a.F;
        R(a, S(a, 216))
    },
    II = function(a) {
        var b =
            FEATURE_STICKINESS;
        a.Df = b;
        b = new EI(b);
        if (fi(b, 2)) {
            var c = a.Ff,
                d = new CI(b.data[2]);
            c.a = {};
            c.a[zc] = new Fy;
            for (var e, f = 0; f < H(d, 3); ++f)
                if (e = new AI(ei(d, 3, f)), 0 == !!Eq(e, 1))
                    for (var g in c.a) c.a[g].update(I(e, 0), !1, "");
            c.c = {};
            for (f = 0; f < H(d, 1); ++f) e = new AI(ei(d, 1, f)), c.c[I(e, 0)] = !!Eq(e, 1);
            c.b = {};
            for (f = 0; f < H(d, 2); ++f) e = new AI(ei(d, 2, f)), c.b[I(e, 0)] = !!Eq(e, 1);
            for (f = 0; f < H(d, 9); ++f) g = new BI(ei(d, 9, f)), (fi(g, 3) ? Ky(c, I(g, 3), !0) : Ky(c, zc, !0)).update(I(g, 0), Eq(g, 1), I(g, 2))
        }
        a.he = Eq(b, 1);
        d = new DI(b.data[0]);
        f = [];
        c = [];
        for (g = 0; g < H(d, 0); ++g) e = hi(d, 0, g), f.push(e);
        g = a.ba;
        for (e = 0; e < f.length; ++e) g.g.push(f[e]);
        for (g = 0; g < H(d, 1); ++g) e = hi(d, 1, g), c.push(e);
        d = a.ba;
        for (f = 0; f < c.length; ++f) d.j.push(c[f]);
        if (a.ti) {
            b = new DI(b.data[0]);
            c = [];
            d = [];
            for (f = 0; f < H(b, 0); ++f) c.push(hi(b, 0, f));
            for (f = 0; f < H(b, 1); ++f) d.push(hi(b, 1, f));
            fi(b, 4) && (c = [I(b, 4)]);
            fi(b, 5) && (d = [I(b, 5)]);
            2E3 < HF(a).length || window.location.href.match(/^[^#]+(\?|&)sl=([A-Za-z-]+)/) || (window.location.href.match(/^[^#]+(\?|&)tl=([A-Za-z-]+)/) ? Vz(a.C, gb) : (Eq(b, 3) ? Vz(a.C, gb) :
                Vz(a.C, c[0]), Vz(a.L, d[0])));
            a.ba.o(ux(a));
            a.ba.m(vx(a))
        }
        eJ(a, null);
        Iw(a.ba);
        b = a.ba;
        Dw(b.L, b.g, b.A, b.a);
        a = a.ba;
        Dw(a.I, a.j, a.H, a.b)
    },
    eJ = function(a, b) {
        if (a.ba) {
            if (b) {
                for (var c = [], d = 0; d < H(b, 0); ++d) {
                    var e = hi(b, 0, d);
                    c.push(e)
                }
                Cw(a.ba, c)
            } else Cw(a.ba, null);
            b = a.ba;
            c = b.a == gb ? "" : b.a;
            d = Lw(b.g, c);
            d.push(b.a);
            b.O = Vf(d);
            d = d.concat(Lw(b.C.a, c));
            b.V.update(d);
            a = a.ba;
            b = Lw(a.j, a.b);
            b.push(a.b);
            a.R.update(b)
        }
    },
    xF = function(a) {
        null != a.Ea && (X(a.Ea.j, !0), Ry(a.Ea, ux(a)))
    },
    dJ = function(a) {
        null != a.Ea && (a = a.Ea, Sy(a) && (So(a.g,
            "trs"), So(a.g, Wc, 1)), a.isEnabled() && 0 <= a.a.indexOf("-k0-") && (So(a.g, "vkb"), So(a.g, Wc, 2)), a.isEnabled() && Hn(a.a) && (So(a.g, "hwt"), So(a.g, Wc, 5)))
    },
    LI = function(a) {
        var b = cl("A", null, N(Yd));
        b && 1 == b.length && (b = b[0], L(b, r, function(a) {
            a.preventDefault();
            a = this.Kh;
            yF(a, !1);
            vF(a, !0);
            uF("gt-res-data", !1, !0);
            uF(Yd, !1, !1);
            $I(a.a)
        }, !1, a));
        (b = cl("A", null, N("select_text"))) && 1 == b.length && (b = b[0], L(b, r, function(a) {
            a.preventDefault();
            a = this.Kh;
            vF(a, !1);
            yF(a, !0);
            uF("gt-res-data", !0, !0);
            uF(Yd, !0, !1);
            $I(a.a);
            this.ma()
        }, !1, a))
    },
    Uu = function(a, b, c, d, e) {
        null != e && qo(a.R, e);
        a.ti = !1;
        if (b) {
            var f = void 0;
            "tws_lsugg" == e && (f = 3);
            a.ba.o(b, f)
        }
        c && a.ba.m(c);
        HF(a) != d && TI(a, d);
        e && So(a.A, ie, e);
        a.pe(!1)
    };
SI.prototype.K = function(a) {
    return null != a ? jG(this.C, a) : jG(this.C)
};
SI.prototype.Ra = function(a) {
    return null != a ? jG(this.L, a) : jG(this.L)
};
var GF = function(a) {
        var b = a.C.P();
        a = a.ba.c;
        b == gb && "" != a && (b = a);
        return b
    },
    ux = function(a) {
        return a.C.P()
    },
    vx = function(a) {
        return a.L.P()
    },
    GI = function(a) {
        return a.c.l()
    },
    HF = function(a, b) {
        return b && a.j && a.j.b ? gg(a.j.c) : gg(a.c.P())
    };
SI.prototype.Ca = function(a) {
    return CD(this.g, a)
};
var TI = function(a, b) {
        a.c.b(b);
        if (a.U) {
            var c = a.U,
                d = a.ba.a;
            a = a.ba.b;
            c.j = rA(b);
            c.b = d;
            c.c = a;
            kA(c)
        }
    },
    OI = function(a) {
        var b = P(k, {
            id: Cc,
            style: Jb
        });
        vl(b, N(Dc));
        var c = new Gt(MSG_EDIT_POPUP, new bv("trans-edit-button"));
        c.S(b);
        tl(b, MSG_SUGGEST_AN_EDIT);
        c.setVisible(!1);
        L(c, n, a.Hm, !1, a);
        return c
    };
SI.prototype.Hm = function() {
    if (HF(this)) {
        FD(this.g);
        var a = this.F;
        R(a, S(a, 26));
        Po(this.A, "t", "editclk", "1", {
            sl: ux(this),
            tl: vx(this)
        })
    }
};
SI.prototype.sj = function() {
    lq && (this.ke = new yI(this.a, this, this.Gi), this.ke.ia(document.body))
};
SI.prototype._submitUrl = SI.prototype.vh;

function _csi(a) {
    window.jstiming.load.name = a;
    window.jstiming.sn = Me;
    try {
        window[fJ.a] && window[fJ.a].resT && window[fJ.a].resT()
    } catch (b) {
        null.Qm("No CSI (window.external.resT) found.", b)
    }
}
of("_csi", _csi);
var fJ = function() {
    var a = N("hl").value,
        b = lo.J();
    b.c = 1;
    b.o = a;
    a = ro.J();
    b = x.location.href;
    var c = b.search(Dm),
        d = Cm(b, 0, fb, c);
    if (0 > d) b = null;
    else {
        var e = b.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += 9;
        b = ig(b.substr(d, e - d))
    }
    b = b || "0";
    fq && (a.a = new Cn(b), xi(a, a.a));
    Ko.J().j = fq;
    b = new zF;
    b = z(b.a, b);
    window.gbar && window.gbar.elc && (window.gbar.elc(b), window.gbar.elr && b(window.gbar.elr()));
    x.h = new Tu;
    b = new xG;
    b.j = x.h;
    b.I = Sd;
    b.wa = WEB_TRANSLATION_PATH;
    b.V = TEXT_TRANSLATION_PATH;
    b.O = FILE_TRANSLATION_PATH;
    b.Y = null != window.INPUT_SUGGESTION_SERVER_URL ?
        window.INPUT_SUGGESTION_SERVER_URL : "";
    b.M = ke;
    b.c = "gt-sl-sugg";
    b.g = "gt-tl-sugg";
    b.C = "file_div";
    b.A = "file";
    b.L = (new Date).getTime();
    R(a, S(a, 247));
    b.B = MAX_ALTERNATIVES_ROUNDTRIP_RESULTS;
    b.o = !0;
    b.H = LOW_CONFIDENCE_THRESHOLD;
    x.ctr = new SI(b)
};
fJ.a = "external";
of("Init", fJ);
if (window.jstiming) {
    window.jstiming.Fd = {};
    window.jstiming.Tg = 1;
    var gJ = function(a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        },
        hJ = function(a, b, c) {
            var d = "";
            window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
            window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                    window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (B) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var g = a.t,
                l = g.start;
            e = [];
            f = [];
            for (var m in g)
                if (m != qe && 0 != m.indexOf("_")) {
                    var p = g[m][1];
                    p ? g[p] && f.push(m + "." + gJ(a, m, g[p][0])) : l && e.push(m + "." + gJ(a,
                            m))
                }
            delete g.start;
            if (b)
                for (var q in b) d += "&" + q + "=" + b[q];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.jstiming.sn || Me) + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        },
        lJ = function(a, b, c) {
            a = hJ(a, b, c);
            if (!a) return "";
            b = new Image;
            var d = window.jstiming.Tg++;
            window.jstiming.Fd[d] = b;
            b.onload = b.onerror = function() {
                window.jstiming && delete window.jstiming.Fd[d]
            };
            b.src = a;
            b = null;
            return a
        };
    window.jstiming.report = function(a, b, c) {
        var d = document.visibilityState,
            e = "visibilitychange";
        d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
        if ("prerender" == d) {
            var f = !1,
                g = function() {
                    if (!f) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var d = !1;
                        else lJ(a, b, c), d = !0;
                        d && (f = !0, document.removeEventListener(e, g, !1))
                    }
                };
            document.addEventListener(e, g, !1);
            return ""
        }
        return lJ(a, b, c)
    }
};
window.jstiming.load.tick('jl');