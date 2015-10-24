function Routes(){
    $("#home").click(function(){
        var name = "home.html";
        addNewPage(name);
    });
    $("#case_studies").click(function(){
        $( "div#jumbo"  ).empty()
        var total = ""
        var div_end = "</div>";
        $.getJSON("http://ptravers.github.io/landlordslovecreatives/casestudies.json", function(data){
            $.each(data, function(i, item){
                total = total + "<div class='col-lg-4' id=" + item.id + ">";
                total = total + "<h6>" + item.title + "</h6>";
                total = total + "<p>" + item.description  + "</p>";
                total = total + "<p>" + item.city + "</p>";
                total = total + "<p>" + item.country + "</p>";
                total = total + "<img src='" + item.photo_url + "' />";
                total = total + "<a href='" + item.url + "'>Source</a>";
                total = total + item.video_url;
                var benefits = item.benefits;
                total = total + "<p>Benefits:</p>"
                for(var i = 0; i < benefits.length; i++){
                    total = total + "<p>   " + benefits[i] + "</p>"
                }
                total = total + div_end;
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
