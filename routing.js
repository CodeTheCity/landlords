function Routes(){
    $("#home").click(function(){
        var name = "";
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
    $("#home").click(function(){
        var name = "faq.html";
        addNewPage(name);
    });
    function addNewPage(name){
        $( "div#jumbo"  ).empty();
        var url = "/landlordslovecreatives/"
        if(Boolean(name)){
            $( "div#jumbo"  ).load(url.concat(name));
        }
        else {
            $( "div#jumbo"  ).load(url);
        }
    }
}

$(document).ready(function(){
    routes = new Routes();
});
