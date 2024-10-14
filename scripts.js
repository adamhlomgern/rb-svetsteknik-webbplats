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
