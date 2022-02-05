font_size = 1.5;

const makeBigger = () => {
   font_size += 0.2;
   document.querySelector(".content").style.fontSize = `${font_size}em`;
   document.querySelector("header").style.fontSize = `${font_size}em`;
};

const makeSmaller = () => {
   font_size -= 0.2;
   document.querySelector(".content").style.fontSize = `${font_size}em`;
   document.querySelector("header").style.fontSize = `${font_size}em`;
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

