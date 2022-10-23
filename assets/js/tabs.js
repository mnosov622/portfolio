$( function() {
    $( "#tabs" ).tabs();
} );

$(document).ready(function() {
    console.log("ready");
    //hiding tab content except first one
    $(".tabContent").not(":first").hide();
    // adding Active class to first selected tab and show
    $("#tabs li:first").addClass("active").show(); 
 
    // Click event on tab
    $("#tabs li").click(function() {
        // Removing class of Active tab
        $("#tabs li.active").removeClass("active");
        $("ul.tabs li").removeClass("colorz");
        // Adding Active class to Clicked tab
        $(this).addClass("active");
        $("ul.tabs li").not( $(this) ).addClass("colorz");
        // hiding all the tab contents
        $(".tabContent").hide();       
        // showing the clicked tab's content using fading effect
        $($('a',this).attr("href")).fadeIn('slow');
 
        return false;
    });
 
});