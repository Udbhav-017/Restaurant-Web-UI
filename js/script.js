$(function() {
    $("#navbar-Toggle").click(function(event){
        $("#collapsable-nav-items").focus();
    });
});

$(function() {
    $("#collapsable-nav-items").focusout(function(event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $("#collapsable-nav-items").collapse('hide');
        }
    });
});