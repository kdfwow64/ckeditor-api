kukishlimited('trdirection', 'ru', 3);


var tra = new Array();
var abc2 = new Array();
var abc1 = new Array();

tra['a'] = new Array('ы+', 'Й+', 'Ы+', 'й+', 'Ы', 'й', 'ы', 'Й', '', '');
abc2['a'] = new Array('ыа', 'Йа', 'Ыа', 'йа', 'Я', 'я', 'я', 'Я', 'а', 'a');

tra['b'] = new Array('', '');
abc2['b'] = new Array('б', 'b');

tra['v'] = new Array('', '');
abc2['v'] = new Array('в', 'v');

tra['g'] = new Array('', '');
abc2['g'] = new Array('г', 'g');

tra['d'] = new Array('', '');
abc2['d'] = new Array('д', 'd');

tra['e'] = new Array('Й+', 'й+', 'Й', 'й', '', '');
abc2['e'] = new Array('Йе', 'йе', 'Э', 'э', 'е', 'e');

tra['o'] = new Array('ы+', 'Й+', 'Ы+', 'й+', 'Ы', 'ы', 'Й', 'й', '', '');
abc2['o'] = new Array('ыо', 'Йо', 'Ыо', 'йо', 'Ё', 'ё', 'Ё', 'ё', 'о', 'o');

tra['ö'] = new Array('', '');
abc2['ö'] = new Array('ё', 'ö');

tra['h'] = new Array('сх+', 'Сх+', 'з+', 'Сх', 'с+', 'ш+', 'Ц+', 'Ш+', 'С+', 'сх', 'ц+', 'З+', 'Ш', 'с', 'ц', 'ш', 'З', 'С', 'Ц', 'з', '', '');
abc2['h'] = new Array('схх', 'Схх', 'зх', 'Щ', 'сх', 'шх', 'Цх', 'Шх', 'Сх', 'щ', 'цх', 'Зх', 'Щ', 'ш', 'ч', 'щ', 'Ж', 'Ш', 'Ч', 'ж', 'х', 'h');

tra['z'] = new Array('', '');
abc2['z'] = new Array('з', 'z');

tra['i'] = new Array('', '');
abc2['i'] = new Array('и', 'i');

tra['j'] = new Array('', '');
abc2['j'] = new Array('й', 'j');

tra['k'] = new Array('', '');
abc2['k'] = new Array('к', 'k');

tra['l'] = new Array('', '');
abc2['l'] = new Array('л', 'l');

tra['m'] = new Array('', '');
abc2['m'] = new Array('м', 'm');

tra['n'] = new Array('', '');
abc2['n'] = new Array('н', 'n');

tra['p'] = new Array('', '');
abc2['p'] = new Array('п', 'p');

tra['r'] = new Array('', '');
abc2['r'] = new Array('р', 'r');

tra['s'] = new Array('', '');
abc2['s'] = new Array('с', 's');

tra['t'] = new Array('', '');
abc2['t'] = new Array('т', 't');

tra['u'] = new Array('ы+', 'Й+', 'Ы+', 'й+', 'Ы', 'й', 'ы', 'Й', '', '');
abc2['u'] = new Array('ыу', 'Йу', 'Ыу', 'йу', 'Ю', 'ю', 'ю', 'Ю', 'у', 'u');

tra['f'] = new Array('', '');
abc2['f'] = new Array('ф', 'f');

tra['x'] = new Array('', '');
abc2['x'] = new Array('х', 'x');

tra['c'] = new Array('', '');
abc2['c'] = new Array('ц', 'c');

tra['w'] = new Array('', '');
abc2['w'] = new Array('щ', 'w');

tra['#'] = new Array('ъ+', 'ъ', '', '');
abc2['#'] = new Array('ъъ', 'Ъ', 'ъ', '#');

tra['y'] = new Array('', '');
abc2['y'] = new Array('ы', 'y');

tra['\''] = new Array('ь+', 'ь', '', '');
abc2['\''] = new Array('ьь', 'Ь', 'ь', '\'');

tra['ä'] = new Array('', '');
abc2['ä'] = new Array('э', 'ä');

tra['ü'] = new Array('', '');
abc2['ü'] = new Array('ю', 'ü');

tra['q'] = new Array('', '');
abc2['q'] = new Array('я', 'q');

tra['A'] = new Array('Ы+', 'Й+', 'Ы', 'Й', '', '');
abc2['A'] = new Array('ЫА', 'ЙА', 'Я', 'Я', 'А', 'A');

tra['B'] = new Array('', '');
abc2['B'] = new Array('Б', 'B');

tra['V'] = new Array('', '');
abc2['V'] = new Array('В', 'V');

tra['G'] = new Array('', '');
abc2['G'] = new Array('Г', 'G');

tra['D'] = new Array('', '');
abc2['D'] = new Array('Д', 'D');

tra['E'] = new Array('Й+', 'Й', '', '');
abc2['E'] = new Array('ЙЕ', 'Э', 'Е', 'E');

tra['O'] = new Array('Ы+', 'Й+', 'Ы', 'Й', '', '');
abc2['O'] = new Array('ЫО', 'ЙО', 'Ё', 'Ё', 'О', 'O');

tra['Ö'] = new Array('', '');
abc2['Ö'] = new Array('Ё', 'Ö');

tra['H'] = new Array('СХ+', 'Ц+', 'СХ', 'С+', 'З+', 'Ш+', 'Ш', 'Ц', 'С', 'З', '', '');
abc2['H'] = new Array('СХХ', 'ЦХ', 'Щ', 'СХ', 'ЗХ', 'ШХ', 'Щ', 'Ч', 'Ш', 'Ж', 'Х', 'H');

tra['Z'] = new Array('', '');
abc2['Z'] = new Array('З', 'Z');

tra['I'] = new Array('', '');
abc2['I'] = new Array('И', 'I');

tra['J'] = new Array('', '');
abc2['J'] = new Array('Й', 'J');

tra['K'] = new Array('', '');
abc2['K'] = new Array('К', 'K');

tra['L'] = new Array('', '');
abc2['L'] = new Array('Л', 'L');

tra['M'] = new Array('', '');
abc2['M'] = new Array('М', 'M');

tra['N'] = new Array('', '');
abc2['N'] = new Array('Н', 'N');

tra['P'] = new Array('', '');
abc2['P'] = new Array('П', 'P');

tra['R'] = new Array('', '');
abc2['R'] = new Array('Р', 'R');

tra['S'] = new Array('', '');
abc2['S'] = new Array('С', 'S');

tra['T'] = new Array('', '');
abc2['T'] = new Array('Т', 'T');

tra['U'] = new Array('Ы+', 'Й+', 'Ы', 'Й', '', '');
abc2['U'] = new Array('ЫУ', 'ЙУ', 'Ю', 'Ю', 'У', 'U');

tra['F'] = new Array('', '');
abc2['F'] = new Array('Ф', 'F');

tra['X'] = new Array('', '');
abc2['X'] = new Array('Х', 'X');

tra['C'] = new Array('', '');
abc2['C'] = new Array('Ц', 'C');

tra['W'] = new Array('', '');
abc2['W'] = new Array('Щ', 'W');

tra['Y'] = new Array('', '');
abc2['Y'] = new Array('Ы', 'Y');

tra['Ä'] = new Array('', '');
abc2['Ä'] = new Array('Э', 'Ä');

tra['Ü'] = new Array('', '');
abc2['Ü'] = new Array('Ю', 'Ü');

tra['Q'] = new Array('', '');
abc2['Q'] = new Array('Я', 'Q');

abc1['а'] = 'a';
abc1['б'] = 'b';
abc1['в'] = 'v';
abc1['г'] = 'g';
abc1['д'] = 'd';
abc1['е'] = 'e';
abc1['ё'] = 'jo';
abc1['ж'] = 'zh';
abc1['з'] = 'z';
abc1['и'] = 'i';
abc1['й'] = 'j';
abc1['к'] = 'k';
abc1['л'] = 'l';
abc1['м'] = 'm';
abc1['н'] = 'n';
abc1['о'] = 'o';
abc1['п'] = 'p';
abc1['р'] = 'r';
abc1['с'] = 's';
abc1['т'] = 't';
abc1['у'] = 'u';
abc1['ф'] = 'f';
abc1['х'] = 'h';
abc1['ц'] = 'c';
abc1['ч'] = 'ch';
abc1['ш'] = 'sh';
abc1['щ'] = 'shh';
abc1['ъ'] = '#';
abc1['ы'] = 'y';
abc1['ь'] = '\'';
abc1['э'] = 'je';
abc1['ю'] = 'ju';
abc1['я'] = 'ja';
abc1['А'] = 'A';
abc1['Б'] = 'B';
abc1['В'] = 'V';
abc1['Г'] = 'G';
abc1['Д'] = 'D';
abc1['Е'] = 'E';
abc1['Ё'] = 'Jo';
abc1['Ж'] = 'Zh';
abc1['З'] = 'Z';
abc1['И'] = 'I';
abc1['Й'] = 'J';
abc1['К'] = 'K';
abc1['Л'] = 'L';
abc1['М'] = 'M';
abc1['Н'] = 'N';
abc1['О'] = 'O';
abc1['П'] = 'P';
abc1['Р'] = 'R';
abc1['С'] = 'S';
abc1['Т'] = 'T';
abc1['У'] = 'U';
abc1['Ф'] = 'F';
abc1['Х'] = 'H';
abc1['Ц'] = 'C';
abc1['Ч'] = 'Ch';
abc1['Ш'] = 'Sh';
abc1['Щ'] = 'Shh';
abc1['Ъ'] = '##';
abc1['Ы'] = 'Y';
abc1['Ь'] = '\'\'';
abc1['Э'] = 'Je';
abc1['Ю'] = 'Ju';
abc1['Я'] = 'Ja';
$(document).ready(function () {
    $("body").click(function (event) {
        lettcount();
        savechanges();
        if (event.target.id === $('#tMenuSwitch').attr('id')) {
            if ($('#menubox').is(':visible')) {
                $('#menubox').hide();
                setfoc();
            }
            else {
                $('#menubox').show();
                setfoc();
            }

        }
        else {
            if ($('#menubox').is(':visible') && event.target.id !== $('#tLoadInput').attr('id')) {
                $('#menubox').hide();
            }
        }
    })
});

var translit = 0;
var is_direction_lat_to_cyr = 1;
var is_direction_cyr_to_lat = 1;
var pretranslit = 0;
var processhtmltags = 0;
var processbbcodetags = 0;
var securetext = 0;
var keepTextOn = false;

function maybelogin() {
    var account = document.getElementById('tLoadInput').value;
    if (account.length > 0) {
        document.accountform.action = "/" + account + "/";
    }
    return false;
}

function setfoc() {
    document.searchform.subject.focus();
    return false;
}

function highlightall() {
    document.searchform.subject.focus();
    document.searchform.subject.select();
    return false;
}

function getselectedtext() {
    document.secondaryform.subject.value = gettextareaval(document.searchform.subject);
    document.secondaryform.extendedsubject.value = document.searchform.subject.value;
    return false;
}

function kukish(name, cval) // set cookies
{
    var domainarray = window.location.host.split('.');
    var domain = domainarray[domainarray.length - 2] + '.' + domainarray[domainarray.length - 1];
    var cexpire = new Date();
    var year = cexpire.getTime() + (365 * 24 * 60 * 60 * 1000);
    cexpire.setTime(year);
    document.cookie = name + "=" + cval + ";path=/;domain=" + domain + ";expires=" + cexpire.toGMTString();
}

function kukishlimited(name, cval, time_days) // set cookies
{
    var domainarray = window.location.host.split('.');
    var domain = domainarray[domainarray.length - 2] + '.' + domainarray[domainarray.length - 1];
    var cexpire = new Date();
    var year = cexpire.getTime() + (time_days * 24 * 60 * 60 * 1000);
    cexpire.setTime(year);
    document.cookie = name + "=" + cval + ";path=/;domain=" + domain + ";expires=" + cexpire.toGMTString();
}

function setlanguage() {
    if (is_direction_lat_to_cyr === 1 && is_direction_cyr_to_lat === 1) {
        tcb1 = 'Я хочу писать по-русски. <span onclick="changelanguage();setfoc();" class="tcbul">Включить латиницу</span> <span class="tcbssup">esc</span>';
        tcb2 = 'Я хочу писать на латиницe. <span onclick="changelanguage();setfoc();" class="tcbul">Включить русский</span> <span class="tcbssup">esc</span>';
    }
    else {
        tcb1 = 'Я хочу писать по-русски.';
        tcb2 = 'Я хочу писать на латиницe.';
    }
    document.getElementById("tcb_switch").innerHTML = translit == 1 ? tcb2 : tcb1;
    chartabledirection = translit;
    showtable(shift, chartabledirection);
    return false;
}

function changelanguage() {
    if (is_direction_lat_to_cyr === 1 && is_direction_cyr_to_lat === 1) {
        translit = (translit == 0 ? 1 : 0);
        setlanguage();
    }
    return false;
}

function setcharset1() {
    translit = 1;
    setlanguage();
    return false;
}

function setcharset2() {
    translit = 0;
    setlanguage();
    return false;
}

function setEditorText(txt) {
    document.searchform.subject.value = txt;
    return true;
}

function getEditorText() {
    return document.searchform.subject.value;
}

function SpellCheck() {
    getselectedtext();
    setfoc();
    document.secondaryform.action = '/tools/spell/';
    document.secondaryform.target = 'spellch';
    var spellWin = window.open('about:blank', 'spellch', 'resizable=yes,scrollbars=yes,status=0,width=600,height=320');
    document.secondaryform.submit();
    if (navigator.appName == 'Netscape') {
        spellWin.focus();
    }
    document.secondaryform.target = '_blank';
    document.secondaryform.action = '';
    return true;
}

function backtotext() {
    $('body,html').animate({scrollTop: $('#textblock').offset().top - 10}, 1000);
    $('body,html').promise().done(function () {
        setfoc();
    });
}

function keepText(link) {
    document.secondaryform.cp.value = getcurosrpos();
    document.secondaryform.action = link;
    document.secondaryform.subject.value = Base64.encode(document.searchform.subject.value);
    keepTextOn = true;
    document.secondaryform.setAttribute('target', '_self');
    document.secondaryform.submit();
    return false;
}

function changeDirection() {
    var direction = document.fdirection.direction.value;
    var account = document.fdirection.account.value;
    if (account.length !== 0) {
        keepText('/' + direction + '/' + account + '/');
    } else {
        keepText('/' + direction + '/');
    }
    return false;
}

function changeAddition() {
    var direction = document.fdirection.direction.value;
    var addition = document.faddition.addition.value;
    if (addition.length !== 0) {
        keepText('/' + direction + '/' + addition + '/');
    } else {
        keepText('/' + direction + '/');
    }
    return false;
}

// Source Base64 encode&decode @ github https://gist.github.com/ncerminara/11257943
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    }, decode: function (e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    }, _utf8_encode: function (e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    }, _utf8_decode: function (e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}

function nofstrings(thetext, txtareawidthpix, symbolwidth) {
    var maxstrlengthallowed = Math.floor(txtareawidthpix / (symbolwidth + 1)) + 1;
    var tt, pp, ppp, tuntil, ii;
    var t2 = thetext.split("\n");
    var s = t2.length;
    for (ii = 0; ii < t2.length; ii++) {
        tt = t2[ii] + " ";
        pp = 0;
        tuntil = maxstrlengthallowed;
        while (tt.indexOf(" ", pp) != -1) {
            ppp = pp;
            pp = tt.indexOf(" ", pp) + 1;
            if (pp > tuntil && pp - ppp - 1) {
                tuntil = ppp + maxstrlengthallowed;
                if (pp < tuntil) {
                    pp = ppp;
                }
                s++;
            }
        }
    }
    return s;
}

function laststringlength(thetext) {
    var t = thetext.replace(/\n/g, " ");
    return thetext.replace(/\n/g, " ").length - thetext.replace(/\n/g, " ").lastIndexOf(" ") - 1;
}

function lettcount() {
    var vv = gettextareaval(document.searchform.subject);
    var txtt = btcvalue(document.searchform.subject);
    $('#letterscounter').html(txtt.replace(/\r/g, '').length);
    return false;
}

undotext = new Array();

function savechanges() {
    var undodepth = 10;
    var undotext_last = undotext.length ? undotext[undotext.length - 1] : '';
    if (undotext_last != document.searchform.subject.value) {
        undotext.push(document.searchform.subject.value);
        if (undotext.length > (undodepth + 1)) {
            undotext.shift();
        }
    }
    return false;
}

function common_string(s1, s2) {
    var count1 = 0;
    while ((s1.charAt(count1) == s2.charAt(count1)) && (count1 < s1.length) && (count1 < s2.length)) {
        count1++;
    }
    var count2 = 0;
    while ((s1.charAt(s1.length - count2 - 1) == s2.charAt(s2.length - count2 - 1)) && (count2 < s1.length - count1) && (count2 < s2.length - count1)) {
        count2++;
    }
    return s1.substring(0, s1.length - count2);
}

function recovertext() {
    if (undotext.length > 1) {
        var tt = document.searchform.subject;
        var pXpix = tt.scrollTop;
        var pYpix = tt.scrollLeft;
        tt.value = undotext[undotext.length - 2];
        var result = common_string(undotext[undotext.length - 2], undotext[undotext.length - 1]);
        tt.setSelectionRange(result.length, result.length);
        var r = laststringlength(result) * (textreafontwidth + 1) - pYpix - tt.clientWidth / 2;
        var dd = Math.abs(2 * r) < tt.clientWidth ? 0 : r - tt.clientWidth / 2 * (r > 0 ? 1 : -1);
        tt.scrollLeft = pYpix + dd + (dd == 0 ? 0 : (dd > 0) ? 2 : -textreafontwidth - 1);
        r = (nofstrings(result, tt.clientWidth, textreafontwidth) - 0.5) * (textareafontsize + 3) - pXpix - tt.clientHeight / 2;
        tt.scrollTop = pXpix + (Math.abs(2 * r) < (tt.clientHeight - textareafontsize - 3) ? 0 : r - (tt.clientHeight - textareafontsize - 3) / 2 * (r > 0 ? 1 : -1));
        undotext.pop();
    }
    return false;
}

var textareafontsize = 16;
var textreafontwidth = 9;

var pXpix = 0;
var pYpix = 0;

function get_texatrea_scroll_position() {
    pXpix = window.document.searchform.subject.scrollTop;
    pYpix = window.document.searchform.subject.scrollLeft;
    return false;
}

function set_texatrea_scroll_position() {
    return false;
}

function addchar(result, evnt) {
    if (evnt.shiftKey) result = result.toUpperCase();
    get_texatrea_scroll_position();
    var tt = window.document.searchform.subject;
    var p1 = tt.selectionStart;
    tt.value = tt.value.substring(0, p1) + result + tt.value.substring(tt.selectionEnd);
    tt.setSelectionRange(p1 + result.length, p1 + result.length);
    set_texatrea_scroll_position();
    setfoc();
    return false;
}

var flagServiceKey = 0;

function AkeyIsDown(evnt) {
    evnt = evnt || window.event;
    var code = evnt.keyCode;
    flagServiceKey = 0;
    if (code == 27 || code == 123) {
        changelanguage();
        evnt.preventDefault();
    }
    else if (evnt.keyCode == 89 && evnt.altKey) {
        flagServiceKey = 1;
    }
    return false;
}

function key_up_process(evnt) {
    return false;
}

function switcher(evnt) {
    evnt = evnt || window.event;
    if (flagServiceKey === 1) {
        evnt.preventDefault();
        keepText('');
    }
    return false;
}

function translate_letter(evnt) {
    evnt = evnt || window.event;
    if (flagServiceKey === 1) {
        return false;
    }

    var code = evnt.keyCode ? evnt.keyCode : evnt.charCode ? evnt.charCode : evnt.which ? evnt.which : void 0;
    if (!evnt.which) {
        return true;
    }
    var txt = String.fromCharCode(code);
    if (processhtmltags && (txt == '<')) {
        pretranslit = translit;
        setcharset1();
    }
    if (processhtmltags && (txt == '>')) {
        if (pretranslit) setcharset1(); else setcharset2();
    }
    if (processbbcodetags && (txt == '[')) {
        pretranslit = translit;
        setcharset1();
    }
    if (processbbcodetags && (txt == ']')) {
        if (pretranslit) setcharset1(); else setcharset2();
    }
    if (code && code > 33 && (!(evnt.ctrlKey || evnt.altKey || evnt.metaKey))) {
        if (evnt.preventDefault) {
            evnt.preventDefault();
        }
        tt = window.document.searchform.subject;
        var pretxt = tt.value.substring(0, tt.selectionStart);
        var result = "";
        get_texatrea_scroll_position();
        if (translit) {
            result = pretxt + translatesymboltocharset1(txt);
        }
        else {
            result = translatesymboltocharset2(pretxt + txt);
        }
        var therest = tt.value.substr(tt.selectionEnd);
        tt.value = result + therest;
        tt.setSelectionRange(result.length, result.length);
        set_texatrea_scroll_position();
    }
    return false;
}

function translatesymboltocharset2(txt) {
    var pretxt = txt.substr(0, txt.length - 1);
    var last = txt.substr(txt.length - 1, 1);
    var lat = tra[last];
    var rus = abc2[last];
    if (lat) {
        for (var ii = 0; ii < lat.length; ii++) {
            var pos = pretxt.length > lat[ii].length ? (pretxt.length - lat[ii].length) : 0;
            if (lat[ii] == pretxt.substr(pos, pretxt.length - pos)) {
                return pretxt.substr(0, pretxt.length - lat[ii].length) + rus[ii];
            }
        }
    }
    return txt;
}

function translatesymboltocharset1(symb) {
    return (typeof abc1[symb] != 'undefined') ? abc1[symb] : symb;
}

function translatealltocharset2() {
    var inloop = 1;
    get_texatrea_scroll_position()
    var tt = window.document.searchform.subject;
    var p1 = tt.selectionStart;
    var p2 = tt.selectionEnd;
    var preval = "";
    var postval = "";
    if (p1 == p2) {
        txt = tt.value;
    }
    else {
        preval = tt.value.substring(0, p1);
        txt = tt.value.substring(p1, p2);
        postval = tt.value.substring(p2);
    }
    var txtnew = "";
    if ((!processhtmltags) && (!processbbcodetags)) {
        txtnew = translatestringtocharset2(txt);
    }
    else {
        var htt1, pbb1, t1, t2, txt1, txt2, tag_open, tag_close;
        var noinputtag = 0;
        if (processhtmltags) {
            tag_open = "<";
            tag_close = ">";
        }
        if (processbbcodetags) {
            tag_open = "[";
            tag_close = "]";
        }
        while (inloop) {
            if (processhtmltags && processbbcodetags) {
                htt1 = txt.indexOf("<");
                pbb1 = txt.indexOf("[");
                if (pbb1 == htt1) {
                    noinputtag = 1
                }
                if (pbb1 == -1) {
                    pbb1 = txt.length;
                }
                if (htt1 == -1) {
                    htt1 = txt.length;
                }
                if (htt1 < pbb1) {
                    t1 = htt1;
                    tag_close = ">";
                } else {
                    t1 = pbb1;
                    tag_close = "]";
                }
            }
            else {
                t1 = txt.indexOf(tag_open);
                if (t1 == -1) noinputtag = 1;
            }
            if (noinputtag) {
                inloop = 0;
                t1 = txt.length;
                t2 = txt.length;
            }
            else {
                txt2 = txt.substring(t1, txt.length);
                t2 = txt2.indexOf(tag_close);
                //if (t2==-1) {t2=txt.length; inloop=0;} else {t2=t2+t1+1};
                if (t2 == -1) {
                    t2 = t1 + 1
                } else {
                    t2 = t2 + t1 + 1
                }
                ;
            }
            txt1 = txt.substring(0, t1);
            txt2 = txt.substring(t1, t2);
            txt = txt.substring(t2, txt.length);
            txtnew = txtnew + translatestringtocharset2(txt1) + txt2;
        }
    }
    tt.value = preval + txtnew + postval;
    if (p1 != p2) {
        tt.setSelectionRange(p1 + txtnew.length, p1 + txtnew.length);
    }
    set_texatrea_scroll_position();
    return false;
}

function translatestringtocharset2(thestringlat) {
    var symbb, fromm, howmuch, thestringcyr = "";
    for (kk = 0; kk < thestringlat.length; kk++) {
        thestringcyr = translatesymboltocharset2(thestringcyr + thestringlat.substr(kk, 1))
    }
    return thestringcyr;
}

function translatealltocharset1() {
    get_texatrea_scroll_position();
    tt = window.document.searchform.subject;
    p1 = tt.selectionStart;
    p2 = tt.selectionEnd;
    var preval = "";
    var postval = "";
    if (p1 == p2) {
        txt = tt.value;
    }
    else {
        preval = tt.value.substring(0, p1);
        txt = tt.value.substring(p1, p2);
        postval = tt.value.substring(p2);
    }
    txtnew = "";
    var symb = "";
    for (kk = 0; kk < txt.length; kk++) {
        symb = translatesymboltocharset1(txt.substr(kk, 1));
        txtnew = txtnew.substr(0, txtnew.length) + symb;
    }
    tt.value = preval + txtnew + postval;
    if (p1 != p2) {
        tt.setSelectionRange(p1 + txtnew.length, p1 + txtnew.length);
    }
    set_texatrea_scroll_position();
    return false;
}

function gettextareaval(thetextarea) {
    with (thetextarea) {
        if (selectionStart == selectionEnd) return value;
        return value.substring(selectionStart, selectionEnd);
    }
}

function btcvalue(thetextarea) {
    return thetextarea.value.substring(0, thetextarea.selectionEnd);
}

function cleartrans() {
    var textinputform = window.document.searchform.subject;
    var p1 = textinputform.selectionStart;
    var p2 = textinputform.selectionEnd;
    if (p1 == p2) {
        textinputform.value = "";
    } else {
        textinputform.value = textinputform.value.substring(0, p1) + textinputform.value.substring(p2);
    }
    textinputform.setSelectionRange(p1, p1);
    return false;
}

function movecursor(x) {
    if (x === parseInt(x)) {
        var tt = window.document.searchform.subject;
        tt.setSelectionRange(x, x);
    }
    return false;
}

function getcurosrpos() {
    setfoc();
    return window.document.searchform.subject.selectionEnd;
}




function okcookies() // set cookies
{
    var domainarray = window.location.host.split('.');
    var domain = domainarray[domainarray.length - 2] + '.' + domainarray[domainarray.length - 1];
    var cexpire = new Date();
    var year = cexpire.getTime() + (365 * 24 * 60 * 60 * 1000);
    cexpire.setTime(year);
    document.cookie = "consent=1;path=/;domain=" + domain + ";expires=" + cexpire.toGMTString();
    document.getElementById("cookiesquestion").style.visibility = "hidden";
}

function removecookiesinfo() {
    document.getElementById("cookiesquestion").style.visibility = "hidden";
}

function showmorecookiesinfo() {
    document.getElementById("tCookiesMoreText").style.display = "inline";
    document.getElementById("tCookiesShowMore").style.display = "none";
}



var height = window.innerHeight || document.body.clientHeight;
var lowersideheight = $('#placeholder').offset().top - $('#searchblock').offset().top;
if (height > lowersideheight) {
    $('#placeholder').height(height - lowersideheight);
}

$(document).ready(function () {
    var adjusthint1 = function (h1, fh1) {
        h1.css("top", fh1.position().top + fh1.height() + 10);
        h1.css("left", fh1.position().left - h1.width() + fh1.width());
    }
    var ishint = true;
    $("#hint1").css("display", "block");
    adjusthint1($("#hint1"), $("#forhint1"));
    var domainarray = window.location.host.split('.');
    var domain = domainarray[domainarray.length - 2] + '.' + domainarray[domainarray.length - 1];
    var cexpire = new Date();
    var year = cexpire.getTime() + (365 * 24 * 60 * 60 * 1000);
    cexpire.setTime(year);
    document.cookie = "hint1=1;path=/;domain=" + domain + ";expires=" + cexpire.toGMTString();
    $(window).resize(function () {
        adjusthint1($("#hint1"), $("#forhint1"));
    });
    $("body").keypress(function (event) {
        if (ishint === true) {
            $("#hint1").css("display", "none");
            ishint = false;
        }
    });
    var ishint2 = true;
    $("#hint2").css("display", "block");
    $("body").click(function (event) {
        if (event.target.id === $('#tMenuSwitch').attr('id')) {
            if (ishint2 === true) {
                $("#hint2").css("display", "none");
                ishint2 = false;
            }
        }
    });
});

function translate_to_english()
{
    tt = window.document.searchform.subject;
    var lang = document.getElementById("language_select");
    var lang_val = lang.options[lang.selectedIndex].value;

    var URL="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180104T180445Z.1af0e1705b60a813.3644d1f56e61057d1dcf3168b97f8516b30a0e8f&lang=" + lang_val + "&text=" + encodeURI(tt.value);

    $.ajax({
        url: URL,
        type: 'POST',
        success: function(data) {
            document.getElementById("translate_span").innerHTML = data.text;
        },
        error: function(e) {
            console.log(e);
        }  
    });
}

setfoc();