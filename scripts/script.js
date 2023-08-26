$(() => {
    const promoText1 = "create natural & flushed makeup looks that leave your lips juicy and skin glowy.";
    const promoText2 = "just dropped! 3 new gloss drip shades - <strong>shop now</strong>";
    const promoText3 = "free u.s. shipping with orders over $40";
    
    $("#promo p").html(promoText2);
    setTimeout(() => {
    }, 1)
    let count = 2;
    setInterval(() => {
        count++
        console.log(count);
        $("#promo p").addClass("hide");
        
        setTimeout(() => {
            if (count === 1) $("#promo p").html(promoText1);
            if (count === 2) $("#promo p").html(promoText2);
            if (count >= 3) {
                $("#promo p").html(promoText3);
                count = 0;
            }
            $("#promo p").removeClass("hide");
        }, 200)
    }, 4000)
    
    
    setTimeout(() => {
        $("#popup").removeClass("none");
        if (($("#popup .popup-window").outerHeight() + 32) > $(window).height()) $("#popup").css("align-items", "start");
        setTimeout(() => {
            $("#popup").removeClass("hide");
            $("body").addClass("s");
        }, 1)
    }, 1500);

})