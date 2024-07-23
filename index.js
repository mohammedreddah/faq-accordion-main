
    $("p").hide();

    $(document).on("click", ".btn", function() {
        $(this).attr("src", "./assets/images/icon-minus.svg");
        $(this).closest("h5").next("p").slideDown();
        $(this).removeClass("btn").addClass("puck");
    });

    $(document).on("click", ".puck", function() {
        $(this).attr("src", "./assets/images/icon-plus.svg");
        $(this).closest("h5").next("p").slideUp();
        $(this).removeClass("puck").addClass("btn");
    });
