import {constructAbout} from './About.js';
import {constructMenu} from './Menu.js';
import {constructContact} from './Contact.js';
import "./style.css";

let navTab = document.createElement('div');
let aboutTab = document.createElement('button');
aboutTab.textContent="About";
aboutTab.setAttribute('id', 'default');
aboutTab.setAttribute('class', 'tabLink');
let menuTab = document.createElement('button');
menuTab.textContent ="Menu";
menuTab.setAttribute('class', 'tabLink');
let contactTab = document.createElement('button');
contactTab.textContent="Contact";
contactTab.setAttribute('class', 'tabLink');
navTab.appendChild(aboutTab);
navTab.appendChild(menuTab);
navTab.appendChild(contactTab);
content.appendChild(navTab);

content.appendChild(constructAbout());
content.appendChild(constructMenu());
content.appendChild(constructContact());


const openTab = (e, id) => {
    let tabContent = document.querySelectorAll('.tabContent');
    for (let i=0; i< tabContent.length; i++){
        tabContent[i].classList.add('hide'); // hide all other pages display when clicked
    }
    let tabPage = document.querySelector(`#${id}`);
    tabPage.classList.remove('hide'); //show the selected page display

    let tabButton = document.querySelectorAll('.tabLink');
    for (let i=0; i< tabButton.length; i++){
        tabButton[i].classList.remove('active');
    }
    e.target.classList.add('active');
}

aboutTab.addEventListener('click', (e)=> {
    openTab(e, 'about')
});

menuTab.addEventListener('click', (e)=> {
    openTab(e, 'menu')
});

contactTab.addEventListener('click', (e)=> {
    openTab(e, 'contact')
});

let defaultPage = document.querySelector('#default'); 
defaultPage.click(); 