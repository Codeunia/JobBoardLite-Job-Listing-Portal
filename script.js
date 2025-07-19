let navbar = document.querySelector('.header .container .navbar');

document.querySelector('#menu-button').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
