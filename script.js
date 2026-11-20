const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
const factImage = document.querySelector("#fact-image");

if (factButton && factImage) {
    factButton.addEventListener("click", function () {
        factImage.hidden = !factImage.hidden;
        factButton.textContent = factImage.hidden
            ? "Pokaż ciekawostkę"
            : "Ukryj ciekawostkę";

        if (bio) {
            bio.textContent = factImage.hidden
                ? "Uczę się tworzyć strony internetowe."
                : "Ta treść została zmieniona przez JavaScript.";
        }
    });
}