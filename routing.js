function Routes(){
    $("#home").click(function(){
        var name = "home.html";
        addNewPage(name);
    });
    $("#case_studies").click(function(){
        var name = "casestudies.html";
        addNewPage(name);
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
        var url = "/landlordslovecreatives/"
        $( "div#jumbo"  ).load(url.concat(name));
    }
}

$(document).ready(function(){
    routes = new Routes();
    $("div#jumbo").load("/landlordslovecreatives/home.html")
});
