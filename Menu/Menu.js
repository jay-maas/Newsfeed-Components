
//This function houses my animations and uses an if statement to activate the corresponding animation
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if (menu.style.left === -350+"px") {
    TweenMax.to(".menu", 1, {left:0});
  } else {
    TweenMax.to(".menu", 1, {left:-350});
  }
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', ()=> {
  toggleMenu();
});

//Stretch 
const body = document.querySelector("body");

body.addEventListener('click', ()=>{
  if (menu.style.left ===0+"px") {
    toggleMenu();
  }
});