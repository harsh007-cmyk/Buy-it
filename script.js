import { offers } from "./offers.js";
import {Shops,category} from "./shops.js";
console.log(offers);
const todayOffer=document.getElementById("offers");
console.log(todayOffer);
offers.forEach(element => {
    const Div=document.createElement("div");
    const heading =document.createElement('h1');
    Div.setAttribute("class",'Offer');
    const shop=document.createElement('h2');
    shop.setAttribute('class','shopname');
    if(element.Active){
        console.log(element.Active===true)
        if(element.imageOfOffer){
        Div.style.backgroundImage=`linear-gradient(
            rgba(225, 225, 225, 0.5),
            rgba(225, 225, 0, 0.5)
          ),url(${element.imageOfOffer})`;
        }
        heading.innerHTML=element.offer+' on'
        shop.innerHTML=element.shopName;
        Div.appendChild(heading);
    Div.appendChild(shop);
    
    todayOffer.appendChild(Div);
    }
    
    
    
});




const shopCategories=document.querySelector(".shops");
category.forEach(element => {
    let divForCategory=document.createElement('div');
    let lisOfshops=document.createElement('div');
            lisOfshops.setAttribute('class','list');
    let categoryHeading=document.createElement('h2');
    categoryHeading.innerHTML=element;
    divForCategory.setAttribute('class','shop-category');
    divForCategory.appendChild(categoryHeading);
    console.log(divForCategory);
    divForCategory.appendChild(lisOfshops);
    shopCategories.appendChild(divForCategory);
    Shops.forEach(ele => {
        if(ele.category===element){
            let cardOfshop=document.createElement('div');
            cardOfshop.setAttribute('class','cardOfitem');
            cardOfshop.setAttribute('id',ele.id);
            let imageOfitem=document.createElement('div');
            let imag=document.createElement('img');
            imag.src=ele.imageOfshop;
            imag.setAttribute('id',ele.id);
            cardOfshop.appendChild(imag);
            let nameOfShop=document.createElement('h3');
            nameOfShop.setAttribute('id',ele.id);
            nameOfShop.innerHTML=ele.nameOfshop;
            cardOfshop.appendChild(nameOfShop);
            lisOfshops.appendChild(cardOfshop);
        }
    });
    
});

const shopDetails=[];
const cardsOfshops=document.querySelectorAll('.cardOfitem');
cardsOfshops.forEach(element => {
    element.addEventListener('click',(e)=>{
         localStorage.clear();
        Shops.forEach(ele => {
            // console.log(ele);
            if(ele.id==e.target.id){
                console.log("enter"+e.target.id);
                console.log(ele);
                localStorage.setItem("data",JSON.stringify(ele.Data));
                window.location.href='index2.html';
            }
        });
    })
});

let nav=document.querySelector('.nav-bar');
nav.addEventListener('click',Resposive);
let nav_bar=document.querySelector('.fa-window-close');
nav_bar.addEventListener('click',Resposive);
function Resposive(){
    console.log("harsh");
    let m_nav=document.getElementById("m-nav");
    m_nav.classList.toggle("responsive");
}
 

// const close=document.querySelector('.fa-window-close')

// console.log(close);
// close.addEventListener('click',()=>{
//     console.log('harsh');
// })
document.querySelector('.loign-window-close').addEventListener('click',()=>{
document.querySelector('.outer-login').style.display="none";
})
let login=document.querySelector('#login');
login.addEventListener('click',()=>{
    document.querySelector('.outer-login').style.display='flex';
})


function validateLogin(){
    var user=JSON.parse(localStorage.getItem('user'))
}