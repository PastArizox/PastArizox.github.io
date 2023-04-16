const buttonSeeMoreList = document.querySelectorAll(".btn_see_more");

buttonSeeMoreList.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const details =
            event.target.parentElement.parentElement.querySelector(".details");
        if (details) {
            if (details.classList.contains("hidden")) {
                details.classList.remove("hidden");
            } else {
                details.classList.add("hidden");
            }
        } else {
            console.log("Pas de détails");
        }
    });
});
