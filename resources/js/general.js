/*Sticky Nav Bar*/

let navStatic = document.querySelector('nav.static');
let navFixed = document.querySelector('nav.fixed');

function updateNav() {
    let scrolled = window.scrollY;
    let navBot = navStatic.offsetTop + navStatic.offsetHeight + 400;
    if (scrolled >= navBot) {
        navFixed.style.top = '0';
        navFixed.style.opacity = '1';
    } else {
        navFixed.style.top = '-10rem';
        navFixed.style.opacity = '0';
    }
}

document.addEventListener('scroll', updateNav);

/* Show Project Info On Mouseover */

function showProjectInfo(event) {
    let projectInfo = event.target.querySelector('.project-info');
    projectInfo.style.opacity = '1';
    projectInfo.style.left = '0';

    let projectLinks = event.target.querySelector('.project-links');
    projectLinks.style.opacity = '1';
    projectLinks.style.bottom = '0';
}

function hideProjectInfo(event) {
    let projectInfo = event.target.querySelector('.project-info');
    projectInfo.style.opacity = '0';
    projectInfo.style.left = '-20rem';

    let projectLinks = event.target.querySelector('.project-links');
    projectLinks.style.opacity = '0';
    projectLinks.style.bottom = '-20rem';
}

let projects = document.getElementsByClassName('project');
Array.prototype.forEach.call(projects, (project) => {
    project.addEventListener('mouseenter', showProjectInfo);
    project.addEventListener('mouseleave', hideProjectInfo);
});