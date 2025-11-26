/* const paragraph = document.querySelectorAll('.paragraph');
const words = ['first', 'second'];

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].innerHTML = `This is ${words[i]} paragraph`;
} */

// ---------------------------------------------------------------------//

/* const paragraph = document.querySelectorAll('.paragraph');
const paragraphlength = paragraph.length;

for (let i = 0; i < paragraph.length; i++) {
    const text = (i==0) ? 'first' : 'second'
  paragraph[i].innerHTML = `This is ${text} paragraph`;
} */

const title = document.getElementById('title');
            const btnred = document.getElementById('btnRed');
            const btnblue = document.getElementById('btnBlue');
            const btngreen = document.getElementById('btnYellow');       
            btnred.addEventListener('click', () => {     title.classList.add('text-red');});
            btnblue.addEventListener('click', () => {  title.classList.add('text-blue');});
            btngreen.addEventListener('click', () => {  title.classList.add('text-yellow');});


