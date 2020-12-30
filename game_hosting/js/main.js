$(document).ready(function() {
    console.log('ready');
    $("button#host").click(function() {
        $("#region").addClass("active");
        $("#other").removeClass("active");
        $("#otherServises").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
        document.getElementById('region').scrollIntoView(true);

    });
    $("button#regionButt").click(function() {
        $("#regServises").addClass("active");
        $("#otherServises").removeClass("active");
        $("#mensual").removeClass("active");
        document.getElementById('regServises').scrollIntoView(true);

    });
    $("button#price1").click(function() {
        $("#pr1").addClass("active");
        document.getElementById('pr1').scrollIntoView(true);
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });
    $("button#price2").click(function() {
        $("#pr2").addClass("active");
        document.getElementById('pr2').scrollIntoView(true);
        $("#pr1").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });
    $("button#price3").click(function() {
        $("#pr3").addClass("active");
        document.getElementById('pr3').scrollIntoView(true);
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });
    $("button#price4").click(function() {
        $("#pr4").addClass("active");
        document.getElementById('pr4').scrollIntoView(true);

        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });
    $("button#price5").click(function() {
        $("#pr5").addClass("active");
        document.getElementById('pr5').scrollIntoView(true);

        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });
    $("button#price6").click(function() {
        $("#pr6").addClass("active");
        document.getElementById('pr6').scrollIntoView(true);

        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr7").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });
    $("button#price7").click(function() {
        $("#pr7").addClass("active");
        document.getElementById('pr7').scrollIntoView(true);

        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr8").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });




    $("button#host2").click(function() {
        $("#other").addClass("active");
        document.getElementById('other').scrollIntoView(true);

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
        console.log("host2");
    });

    $("button#otherButt").click(function() {
        $("#otherServises").addClass("active");
        document.getElementById('otherServises').scrollIntoView(true);

        $("#regServises").removeClass("active");
        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });

    $("button#price8").click(function() {
        $("#pr8").addClass("active");
        document.getElementById('pr8').scrollIntoView(true);

        $("#pr1").removeClass("active");
        $("#pr2").removeClass("active");
        $("#pr3").removeClass("active");
        $("#pr4").removeClass("active");
        $("#pr5").removeClass("active");
        $("#pr6").removeClass("active");
        $("#pr7").removeClass("active");
        $("#mensual").removeClass("active");
        console.log("servises");
    });
    $("button.prices").click(function() {
        $("#mensual").addClass("active");
        document.getElementById('mensual').scrollIntoView(true);

        console.log("servises");
    });
});