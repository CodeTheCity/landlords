function Routes(){
    $("#home").click(function(){
        var name = "home.html";
        addNewPage(name);
    });
    $("#case_studies").click(function(){
        $( "div#jumbo"  ).empty()
        var total = ""
        var div_end = "</div>";
        console.log("Case studies clicked");
        $.getJSON("/landlordslovecreatives/casestudies.json", function(data){
            var n = 0;
            var j = 0;
            $.each(data, function(i, item){
                console.log("i = " + i + " item = " + item[n].id);
                total = total + "<div class='col-lg-4' id=" + item[n].id + ">";
                total = total + "<h6>" + item[n].title + "</h6>";
                total = total + "<p>" + item[n].description  + "</p>";
                total = total + "<p>" + item[n].city + "</p>";
                total = total + "<p>" + item[n].country + "</p>";
                total = total + "<img src='" + item[n].photo + "' />";
                total = total + "<a href='" + item[n].url + "'>Source</a>";
                total = total + item[n].video;
                var benefits = item[n].benefits;
                n++;
                console.log(total);
                total = total + "<p>Benefits:</p>"
                $.each(benefits, function(i, val){
                    j++
                    total = total + "<p>   " + val[j] + "</p>"
                });
                j = 0;
                total = total + div_end;
                console.log("Generate html = " + total + " \n");
            });
        });
        $( "div#jumbo"  ).append(total);
    });
    $("#template").click(function(){
        var name = "template.html";
        addNewPage(name);
    });
    $("#guide").click(function(){
        var name = "guide.html";
        addNewPage(name);
    });
    $("#faq").click(function(){
        var name = "FAQs.html";
        addNewPage(name);
    });
    function addNewPage(name){
        $( "div#jumbo"  ).empty();
        var url = "/landlordslovecreatives/";
        $( "div#jumbo"  ).load(url.concat(name));
    }
}

$(document).ready(function(){
    $("div#jumbo").load("/landlordslovecreatives/home.html")
    routes = new Routes();
});
