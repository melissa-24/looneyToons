$(document).ready(function(){
    $.get("https://looney-toons-api.herokuapp.com/api/characters/", function(res) {
       var html_str = "";
        for(var i = 0; i < res.data.length; i++) {
            html_str += "<div class='characters'>"
            html_str += "<h3>" + res.data[i].name + "</h3>";
            html_str += "<img src='" + res.data[i].img + "' alt='character img' />";
            html_str += "<h5>Originally voiced by: " + res.data[i].voice + "</h5>";
            html_str += "<h5>Birth Day: " + res.data[i].birthDay + "</h5>";
            html_str += "</div>"
       }
       
       $("#characters").html(html_str);
   }, "json");
})