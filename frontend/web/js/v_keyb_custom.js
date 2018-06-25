$(document).ready(function () {
    EM.addEventListener(window,'domload',function(){
        /*
         *  building the list of language codes
         */
        var codes = VirtualKeyboard.getLayoutCodes()
            ,cont = document.getElementById('lfilter')
            ,html = []
        for (var i=0, cL=codes.length; i<cL; i++) {
            html.push ("<td><label for='cbx"+i+"'><input id='cbx"+i+"' type='checkbox' value='"+codes[i]+"' />"+codes[i]+"</label></td>");
            if (!((i+1)%10))
                html.push('</tr><tr>');
        }
        cont.innerHTML = '<table><tr>'+html.join("")+'</tr></table>';

        /*
         *  open the keyboard
         */
        VirtualKeyboard.toggle('text','td');

        /*
         *  building the list of layouts
         */
        var el = document.getElementById('layouts')
            ,lt = VirtualKeyboard.getLayouts()
            ,dl = window.location.href.replace(/[?#].+/,"")

        for (var i=0,lL=lt.length; i<lL; i++) {
            var cl = lt[i];
            cl = cl[0]+" "+cl[1];
            lt[i] = "<a href='"+dl+"?vk_layout="+cl+"' onclick='VirtualKeyboard.switchLayout(this.title);return false;' title='"+cl+"' alt='"+cl+"' >"+cl+"</a>";
        }
        el.innerHTML += lt.join("&nbsp;| ");

        /*
         *  build the list of skins
         */
        var skins = ['winxp','small','soberTouch','textual','flat_gray','air_large','air_mid','air_small','goldie'].sort()
            ,html = []
            ,el = document.getElementById('skins')
        for (var i=0, sL=skins.length; i<sL; i++) {
            var cs = skins[i]
            html[i] = "<a href='"+dl+"?vk_skin="+cs+"' title='"+cs+"' alt='"+cs+"' >"+cs+
                "<img src='"+dl.replace(/\/[^\/]+.html/i,"")+"/css/"+cs+"/thumbnail.png' title='"+cs+"' alt='"+cs+"' /></a>";
        }
        el.innerHTML = html.join("&nbsp;| ");

    });
});
function setFilter() {
    var filter = []
        ,cbxs = document.getElementsByTagName('input');
    for (var i=0,cL=cbxs.length; i<cL; i++) {
        if (cbxs[i].checked)
            filter.push(cbxs[i].value);
    }
    VirtualKeyboard.setVisibleLayoutCodes(filter);
}

