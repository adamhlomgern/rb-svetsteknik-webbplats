function ShowHide(element) {
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle menu visibility
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }

    // Toggle hamburger icon animation (change to X)
    element.classList.toggle("change");
}



<script type="text/plain" data-cookie-consent="tracking">
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'GTM-MS67TZ8B', 'auto');
ga('send', 'pageview');
</script>



var swiper = new Swiper('.mySwiper', {
    autoplay: {
        delay: 2000,  // Tiden mellan bildbyten
        disableOnInteraction: false,  // Fortsätt autoplay även efter interaktion
    },
    loop: true,  // Gör så att karusellen loopar kontinuerligt
    navigation: {
        nextEl: '.swiper-button-next',  // Nästa knapp
        prevEl: '.swiper-button-prev',  // Föregående knapp
    },
    pagination: {
        el: '.swiper-pagination',  // Pagination-elementet
        clickable: true,  // Gör pagination-klickbar
    },
    slidesPerView: 1,  // Antal bilder som visas per slide som standard
    spaceBetween: 10,  // Utrymme mellan bilderna
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});


