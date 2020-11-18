let interStart = setInterval(function() {
    if (document.querySelector("div.selector1")) {
        $('.selector1').lightGallery({
            selector: '.item'
        });
        console.log("Yeah");
        clearInterval(interStart);
    }
    console.log("Search");
}, 100);