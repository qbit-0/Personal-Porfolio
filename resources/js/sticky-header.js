let header = document.querySelector('header');

function updateHeader() {
    let scrolled = window.scrollY;
    let headerBot = header.offsetTop + header.offsetHeight;
    if (scrolled > headerBot) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
}

console.log(header)

header.addEventListener('click', function() {
    header.style.backgroundColor = 'blue';
});

header.addEventListener('scroll', updateHeader);