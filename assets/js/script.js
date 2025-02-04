
function startTransition(){
    const content = document.querySelector('.contents');
    const style = window.getComputedStyle(content);
    content.classList.add('show');
    let duration = parseFloat(style.getPropertyValue("transition-duration"));
    duration = (13 / 100) * (duration * 1000);
    setTimeout(() => {
        showElement();
    }, duration);
}

function showElement(){
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.style.opacity = 1;
        element.classList.add('show');
        element.classList.add('animate');
        element.addEventListener('transitionend', function () {
            element.style.zIndex = "1";
        });
    });
}

window.onload = function() {
    startTransition();
};
