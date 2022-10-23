$( function() {
    $( "#tabs" ).tabs();
} );

$(document).ready(function() {
    console.log("ready");
    $(".tabContent").not(":first").hide();
    $("#tabs li:first").addClass("active").show(); 
 
    $("#tabs li").click(function() {
        $("#tabs li.active").removeClass("active");
        $("ul.tabs li").removeClass("colorz");
        $(this).addClass("active");
        $("ul.tabs li").not( $(this) ).addClass("colorz");
        $(".tabContent").hide();       
        $($('a',this).attr("href")).fadeIn('slow');
 
        return false;
    });
 
});