function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// ---

const menuButton = document.getElementById('menu-button')

const iconTooltipText = document.getElementsByClassName('icon-tooltip-text')


function showText() {
    for (let i = 0; i < Object.keys(iconTooltipText).length; i++) {
        iconTooltipText[i].classList.remove("hide")
    }
}
function hideText() {
    for (let i = 0; i < Object.keys(iconTooltipText).length; i++) {
        iconTooltipText[i].classList.add("hide")
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    menuButton.addEventListener("mouseover", showText)
    menuButton.addEventListener("mouseout", hideText)

});

// ---

document.querySelectorAll('.info').forEach((info, index) => {
    const input = info.querySelector('.info__switch');
    const label = info.querySelector('.info__headline');
    input.id = `info_${index}`;
    label.setAttribute('for', `info_${index}`);
});