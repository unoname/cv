import { Data, renderHtml } from './data.js'
const main = document.querySelector('body');

function changeLanguage(e) {
 if(e.target.type === 'button') {
   const btn = document.querySelector('button');
  const lang = btn.innerHTML === 'EN' ? 'RU' : 'EN';
  btn.innerHTML = lang;
  localStorage.setItem('cv-lang', `${JSON.stringify(lang)}`); 
  const data = JSON.parse(localStorage.getItem('cv-lang')) === 'EN' ? Data[0] : Data[1];
  main.innerHTML = renderHtml(data);
 }
  }
  main.addEventListener('click', changeLanguage);
function start() {
  const data = JSON.parse(localStorage.getItem('cv-lang')) === 'EN' ? Data[0] : Data[1];
  main.innerHTML = renderHtml(data);
}
start()