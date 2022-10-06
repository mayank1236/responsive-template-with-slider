// Global Events

window.onscroll = () => {

    stickyNav();
    navActiveText();
};

window.onload = () => {
    stickyNav();
    dropdown();
    navActive.innerHTML = navBtns[0].innerHTML.toUpperCase();
}

window.onresize = () => {
    dropdown();
}

//  Variables

let navWrap = document.querySelector('.sticky-nav');
let nav = document.querySelector('.sticky-menu');

let navActive = document.querySelector('.sticky-menu .container span');
let navList = document.querySelector('.sticky-menu ul');
let navBtns = document.querySelectorAll('.sticky-menu ul a');

let tglBtn = document.querySelector('.sticky-nav .tglBtn');
let toggle = false;

// Styling
tglBtn.style.transition = 'transform 0.3s ease-in-out';

// Event Listeners

tglBtn.addEventListener('click', (event) => {
    event.preventDefault();
    toggle = !toggle;
    if(toggle) {
        navList.style.height = 'auto';
        navActive.style.display = 'none';
        tglBtn.style.transform = 'rotate(180deg)';
    } else {
        navList.style.height = '0';
        navActive.style.display = 'inline-block';
        tglBtn.style.transform = 'rotate(0deg)';
    }

});

// Functions

function dropdown() {
    if(window.innerWidth <= 992) {
        nav.classList.add('dropdown');

        navList.style.height = '0';
        navActive.style.display = 'inline-block';

        
        
        return;
    }

    //default for Desktop nav
    nav.classList.remove('dropdown');
    navList.style.height = 'auto';
    navActive.style.display = 'none';
}

function stickyNav() {
    if(window.scrollY >= navWrap.offsetTop) {
        nav.classList.add('sticky');
        return;
    }
    nav.classList.remove('sticky');
}

function navActiveText() {
    navBtns.forEach((btn, id) => {

        btn.addEventListener('click', () => {
            navActive.innerHTML = '';
            tglBtn.click(); 
            console.log();
            navActive.innerHTML = btn.innerHTML.toUpperCase();
        });
        // FROM HERE, ;(
        // console.log(document.querySelector(`${btn.getAttribute("href")}`).offsetTop);
        // if(window.scrollY >= document.querySelector(`${btn.getAttribute("href")}`).offsetTop) {
        //     navActive.innerHTML = btn.innerHTML.toUpperCase();
        // }
    });
}