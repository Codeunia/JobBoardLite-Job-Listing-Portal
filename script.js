let navbar = document.querySelector('.header .container .navbar');

document.querySelector('#menu-button').onclick = () =>{
   navbar.classList.toggle('active'); }

    window.onscroll = () => {
     navbar.classList.remove('active');
}
// let menuBtn = document.querySelector("#menu-button");
//     let navbar = document.querySelector(".header .container .navbar");

//     menuBtn.onclick = () => {
//         navbar.classList.toggle("active");
//     };
