let hamburger = document.getElementById ('hamburger');
let navigation = document.getElementById ('navigation');
// navigation.style.visibility = 'visible';
let flag = false;

hamburger.onclick = function () {
  if (flag) {
    navigation.style.visibility = 'visible';
    flag = false;
  } else {
    navigation.style.visibility = 'hidden';
    flag = true;
  }
};
let opt1 = document.getElementById ('opt1');
let toshow = document.getElementById ('MEN');
let ddown = document.getElementsByClassName ('ddown');
let name = document.getElementById ('name');
opt1.onmouseover = function () {
  // console.log(toshow);
  opt1.style.borderBottom = '4px solid red';

  toshow.style.visibility = 'visible';
};
opt1.onmouseleave = function () {
  // console.log(toshow);
  opt1.style.borderBottom = null;
  toshow.style.visibility = 'hidden';
};

let opt2 = document.getElementById ('opt2');
let toshow2 = document.getElementById ('WOMEN');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
opt2.onmouseover = function () {
  // console.log(toshow2);
  opt2.style.borderBottom = '4px solid red';
  toshow2.style.visibility = 'visible';
};
opt2.onmouseleave = function () {
  // console.log(toshow2);
  opt2.style.borderBottom = null;
  toshow2.style.visibility = 'hidden';
};

let opt3 = document.getElementById ('opt3');
let toshow3 = document.getElementById ('KIDS');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
console.log (opt3, toshow3);
opt3.onmouseover = function () {
  // console.log(toshow3);
  opt3.style.borderBottom = '4px solid red';
  toshow3.style.visibility = 'visible';
};
opt3.onmouseleave = function () {
  // console.log(toshow3);
  opt3.style.borderBottom = null;
  toshow3.style.visibility = 'hidden';
};

let opt4 = document.getElementById ('opt4');
let toshow4 = document.getElementById ('HOMEL');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
console.log (opt4, toshow4);
opt4.onmouseover = function () {
  // console.log(toshow4);
  opt4.style.borderBottom = '4px solid red';
  toshow4.style.visibility = 'visible';
};
opt4.onmouseleave = function () {
  // console.log(toshow4);
  opt4.style.borderBottom = null;
  toshow4.style.visibility = 'hidden';
};

let opt5 = document.getElementById ('opt5');
let toshow5 = document.getElementById ('BEAUTY');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
// console.log(opt4, toshow4);
opt5.onmouseover = function () {
  // console.log(toshow4);
  opt5.style.borderBottom = '4px solid red';
  toshow5.style.visibility = 'visible';
};
opt5.onmouseleave = function () {
  // console.log(toshow5);
  opt5.style.borderBottom = null;
  toshow5.style.visibility = 'hidden';
};

let opt6 = document.getElementById ('profileI');
let toshow6 = document.getElementById ('dprofile');

// opt6.onclick = () => {
//   window.location.href = '/loginsignup/login/login.html';
// };
let logo = document.getElementById ('logo');
logo.onclick = function () {
  window.location.href = '/mainProducts';
};
// opt6.onmouseover = function () {
//   toshow6.style.visibility = 'visible';
// };
// opt6.onmouseleave = function () {
//   opt6.style.borderBottom = null;
//   toshow6.style.visibility = 'hidden';
// };

let wishlist = document.getElementById ('wishlistI');
wishlist.style.cursor = 'pointer';
wishlist.onclick = function () {
  window.location.href = '/signup-login';
};

let bag = document.getElementById ('bagI');
bag.style.cursor = 'pointer';
bag.onclick = function () {
  window.location.href = '/bags';
};

let take = document.getElementById ('take');
console.log(take);
take.onclick = function () {
  window.location.href = '/mainProducts/products';
};
let take2 = document.getElementById ('take2');

take2.onclick = function () {
  window.location.href = '/mainProducts/products';
};
let take3 = document.getElementById ('take3');

take3.onclick = function () {
  window.location.href = '/mainProducts/products';
};
let take4 = document.getElementById ('take4');

take4.onclick = function () {
  window.location.href = '/mainProducts/products';
};
let take5 = document.getElementById ('take5');

take5.onclick = function () {
  window.location.href = '/mainProducts/products';
};

var slideIndex = 0;
showSlides ();

function showSlides () {
  var i;
  var slides = document.getElementsByClassName ('mySlides');
  var dots = document.getElementsByClassName ('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace (' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout (showSlides, 2000); // Change image every 2 seconds
}
