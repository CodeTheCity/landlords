function Routes(){
    $("#home").click(function(){
        var name = "home.html";
        addNewPage(name);
    });
    $("#case_studies").click(function(){
        $( "div#jumbo"  ).empty()
        var total = ""
        var div_end = "</div>";
        $.getJSON("/landlordslovecreatives/casestudies.json", function(data){
            console.log("getJSON running");
            $.each(data, function(i, item){
                total = total + "<div class='col-lg-4' id=" + item[i].id + ">";
                total = total + "<h6>" + item[i].title + "</h6>";
                total = total + "<p>" + item[i].description  + "</p>";
                total = total + "<p>" + item[i].city + "</p>";
                total = total + "<p>" + item[i].country + "</p>";
                total = total + "<img src='" + item[i].photo + "' />";
                total = total + "<a href='" + item[i].url + "'>Source</a>";
                total = total + item[i].video;
                var benefits = item[i].benefits;
                console.log(total);
                total = total + "<p>Benefits:</p>"
                $.each(benefits, function(i, val){
                    total = total + "<p>   " + val[i] + "</p>"
                });
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
