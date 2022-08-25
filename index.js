import './index.css';

const cookieConsent = document.querySelector('.cookie-consent');
const buttonCookie = document.querySelector('.cookie-consent__button');

buttonCookie.addEventListener('click', (event) => {
    localStorage.setItem('cookie', cookieConsent.toString());
    cookieConsent.classList.add('hide');
  });

if(localStorage.getItem('cookie') === cookieConsent.toString()) {
    cookieConsent.classList.add('hide');
};



// const buttonCookie = document.querySelector('.cookie-consent__button');
// buttonCookie.addEventListener('onclick', () => {

// })
// const buttonCookie = document.querySelector('.cookie-consent__button');

// buttonCookie.addEventListener('click', () => {
//     log.textContent ='';
//     setTimeout(() => {
//         window.location.reload(true);
//     }, 200);
// });


// const buttonCookie = document.getElementsByClassName('cookie-consent__button');
// buttonCookie.onclick = function() {
//    const buttonCookie1 = document.querySelector('.cookie-consent__text');
//    buttonCookie1.('.cookie-consent__text');
//    console.log(buttonCookie1);
// };
//    // buttonCookie.onclick = function() {

//    // const buttonCookie = document.querySelector('.cookie-consent__button');
//    // buttonCookie.forEach(buttonCookie) => {
//    //    buttonCookie.addEventListener('onclick', (event) => {
//    //    // console.log(event.target);
//    //    const { target } = event;
//    //    target.classList.remove('.cookie-consent__button');
//    //    buttonCookie.forEach(onclick) => {
//    //       onclick.classList.remove('.cookie-consent__button')
      
   
//    // const newObject = {
//    //    delete: true 
//    // };
//    // buttonCookie.removeEventListener();
   
//    // localStorage.setItem(onclick, JSON.stringify(newObject));
//    // const getNewObject = localStorage.getItem('onclick');

//    // console.log(localStorage.getItem('onclick'));

//    // if (object && object.delete)  {
      
//    // };
 
   
// // }



// cookieButton.onclick = function() {

//  document.querySelector 
//  remove()

//  const cookieButton = document.querySelector('.cookie-consent__button');

//  cons newObject = { delete: true }
//  const newObject = {
//       delete: true 
//    };
//      localStorage  getItem
//    localStorage.setItem("onclick", JSON.stringify(newObject));
//    const getNewObject = localStorage.getItem('onclick');
//      JSON.parse 
//     localStorage  JSON.stringify(newObject)
//    
//    const object = JSON.parse(getNewObject) 