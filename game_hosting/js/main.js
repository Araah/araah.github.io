$(document).ready(function() {

    $("button#host").click(function() {
        $("#region").addClass("active");
        $("#host2").addClass("non_select");
        $("#host").removeClass("non_select");
        $("#other").removeClass("active");
        $("#host").removeClass("non_select");
        $("#otherServises").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");

    });
    $("button#regionButt").click(function() {
        $("#regServises").addClass("active");
        $("#regionButt1").addClass("non_select");
        $("#regionButt").removeClass("non_select");
        $("#otherServises").removeClass("active");
        $("#mensual").removeClass("active");

    });

    $("button#regionButt1").click(function() {
        $("#regServises").addClass("active");
        $("#regionButt").addClass("non_select");
        $("#regionButt1").removeClass("non_select");
        $("#otherServises").removeClass("active");
        $("#mensual").removeClass("active");

    });
    $("button#price1").click(function() {
        $("#pr1").addClass("active");
        $("#price2").addClass("non_select");
        $("#price3").addClass("non_select");
        $("#price4").addClass("non_select");
        $("#price5").addClass("non_select");
        $("#price6").addClass("non_select");
        $("#price7").addClass("non_select");
        $("#price1").removeClass("non_select");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
    });
    $("button#price2").click(function() {
        $("#pr2").addClass("active");
        $("#price1").addClass("non_select");
        $("#price3").addClass("non_select");
        $("#price4").addClass("non_select");
        $("#price5").addClass("non_select");
        $("#price6").addClass("non_select");
        $("#price7").addClass("non_select");
        $("#price2").removeClass("non_select");
        $("#pr1").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
    });
    $("button#price3").click(function() {
        $("#pr3").addClass("active");
        $("#price2").addClass("non_select");
        $("#price1").addClass("non_select");
        $("#price4").addClass("non_select");
        $("#price5").addClass("non_select");
        $("#price6").addClass("non_select");
        $("#price7").addClass("non_select");
        $("#price3").removeClass("non_select");
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
    });
    $("button#price4").click(function() {
        $("#pr4").addClass("active");
        $("#price2").addClass("non_select");
        $("#price3").addClass("non_select");
        $("#price1").addClass("non_select");
        $("#price5").addClass("non_select");
        $("#price6").addClass("non_select");
        $("#price7").addClass("non_select");
        $("#price4").removeClass("non_select");
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
    });
    $("button#price5").click(function() {
        $("#pr5").addClass("active");
        $("#price2").addClass("non_select");
        $("#price3").addClass("non_select");
        $("#price4").addClass("non_select");
        $("#price1").addClass("non_select");
        $("#price6").addClass("non_select");
        $("#price7").addClass("non_select");
        $("#price5").removeClass("non_select");
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
    });
    $("button#price6").click(function() {
        $("#pr6").addClass("active");
        $("#price2").addClass("non_select");
        $("#price3").addClass("non_select");
        $("#price4").addClass("non_select");
        $("#price5").addClass("non_select");
        $("#price1").addClass("non_select");
        $("#price7").addClass("non_select");
        $("#price6").removeClass("non_select");
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
    });
    $("button#price7").click(function() {
        $("#pr7").addClass("active");
        $("#price2").addClass("non_select");
        $("#price3").addClass("non_select");
        $("#price4").addClass("non_select");
        $("#price5").addClass("non_select");
        $("#price6").addClass("non_select");
        $("#price1").addClass("non_select");
        $("#price7").removeClass("non_select");
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
    });




    $("button#host2").click(function() {
        $("#other").addClass("active");
        $("#host").addClass("non_select");
        $("#host2").removeClass("non_select");
        $("#region").removeClass("active");
        $("#regServises").removeClass("active");
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#mensual").removeClass("active");
    });

    $("button#otherButt").click(function() {
        $("#otherServises").addClass("active");
        $("#otherButt").removeClass("non_select");
        $("#regServises").removeClass("active");
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#mensual").removeClass("active");
    });

    $("button#price8").click(function() {
        $("#pr8").addClass("active");

        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#mensual").removeClass("active");
    });
    $("button.prices").click(function() {
        $("#mensual").addClass("active");

    });
    $("button#men1").click(function() {
        $("#men6").addClass("non_select");
        $("#men12").addClass("non_select");
        $("#men1").removeClass("non_select");
    });
    $("button#men6").click(function() {
        $("#men1").addClass("non_select");
        $("#men12").addClass("non_select");
        $("#men6").removeClass("non_select");
    });
    $("button#men12").click(function() {
        $("#men6").addClass("non_select");
        $("#men1").addClass("non_select");
        $("#men12").removeClass("non_select");
    });
    $("button#prs").click(function() {
        $("#prs1").addClass("non_select");
        $("#prs").removeClass("non_select");
    });
    $("button#prs1").click(function() {
        $("#prs").addClass("non_select");
        $("#prs1").removeClass("non_select");
    });
    $("button#prs2").click(function() {
        $("#prs3").addClass("non_select");
        $("#prs2").removeClass("non_select");
    });
    $("button#prs3").click(function() {
        $("#prs2").addClass("non_select");
        $("#prs3").removeClass("non_select");
    });
    $("button#prs4").click(function() {
        $("#prs5").addClass("non_select");
        $("#prs4").removeClass("non_select");
    });
    $("button#prs5").click(function() {
        $("#prs4").addClass("non_select");
        $("#prs5").removeClass("non_select");
    });
    $("button#prs6").click(function() {
        $("#prs7").addClass("non_select");
        $("#prs6").removeClass("non_select");
    });
    $("button#prs7").click(function() {
        $("#prs6").addClass("non_select");
        $("#prs7").removeClass("non_select");
    });
    $("button#prs8").click(function() {
        $("#prs9").addClass("non_select");
        $("#prs10").addClass("non_select");
        $("#prs8").removeClass("non_select");
    });
    $("button#prs9").click(function() {
        $("#prs8").addClass("non_select");
        $("#prs10").addClass("non_select");
        $("#prs9").removeClass("non_select");
    });
    $("button#prs10").click(function() {
        $("#prs8").addClass("non_select");
        $("#prs9").addClass("non_select");
        $("#prs10").removeClass("non_select");
    });
    $("button#prs11").click(function() {
        $("#prs12").addClass("non_select");
        $("#prs11").removeClass("non_select");
    });
    $("button#prs12").click(function() {
        $("#prs11").addClass("non_select");
        $("#prs12").removeClass("non_select");
    });

});