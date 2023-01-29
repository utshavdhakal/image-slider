const imageCount = 10;

window.onload = () => {
    const previousButton = document.querySelector(".previous-button");
    const nextButton = document.querySelector(".next-button");

    const image = document.querySelector(".image");

    const dotContainer = document.querySelector(".dots-container");

    previousButton.addEventListener("mouseover", () => {
        previousButton.style = `
        background-color: rgba(219, 219, 219, 0.226);
        `
    });

    previousButton.addEventListener("mouseout", () => {
        previousButton.style = `
        background: none;
        `
    });

    nextButton.addEventListener("mouseover", () => {
        nextButton.style = `
        background-color: rgba(219, 219, 219, 0.226);
        `
    });

    nextButton.addEventListener("mouseout", () => {
        nextButton.style = `
        background: none;
        `
    });

    let current = 1;

    function disableSlidingButtons() {
        previousButton.disabled = true;
        nextButton.disabled = true;
    }

    function enableSlidingButtons() {
        previousButton.disabled = false;
        nextButton.disabled = false;
    }

    function updateDotPosition() {
        const activeDot = document.querySelector(".active-dot");
        activeDot.classList.remove("active-dot");
        document.querySelector(`.dot-${current}`).classList.add("active-dot");
    }

    nextButton.addEventListener("click", () => {
        disableSlidingButtons();
        if (current === 10) current = 1;
        else current++;
        image.src = `images/${current}.jpg`;
    });

    previousButton.addEventListener("click", () => {
        disableSlidingButtons();
        if (current === 1) current = 10;
        else current--;
        image.src = `images/${current}.jpg`;
    });

    for (let i = 1; i <= imageCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.classList.add(`dot-${i}`);
        dotContainer.appendChild(dot);
    }

    document.querySelector(`.dot-${current}`).classList.add("active-dot");

    image.onload = function() {
        enableSlidingButtons();
        updateDotPosition();
    }
};