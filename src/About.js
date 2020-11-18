

export function constructAbout() {
    const aboutPage = document.createElement('div');
    aboutPage.setAttribute('id', 'about');
    aboutPage.setAttribute('class', 'tabContent hide');

    const heading = document.createElement("h1");
    heading.textContent= "Casey's Restaurant";
    aboutPage.appendChild(heading);

    const img = document.createElement("img");
    setAttributes(img, {"src": "https://www.urdesignmag.com/wordpress/wp-content/uploads/2020/04/peak-restaurant-new-york-city-usa-rockwell-group-2.jpg", "alt":"restaurant", "width":"700", "height":"400" });

    function setAttributes(element, attribute) {
        for (let key in attribute){
            element.setAttribute(key, attribute[key]);
        }
    }
    aboutPage.appendChild(img);

    const info = document.createElement("p");
    info.innerHTML=`Situated in downtown LA, Casey's Restaurant is one of the oldest restaurant boasting one of the highest percentage of European visitors dining in fall season.
    It offers traditional Italian cuisines which you can enjoyed in the pleasant air conditioned ambience.
    It has a capacity of 123 seats and 35-40 seats in the summer garden. In addition to lunch and dinner, the restaurant premises, for example, to organize banquets, graduations, weddings or birthday celebrations. <br>
    For the booking options to lunch or dinner for tourist group don’t hesitate to contact us. <br>
    We hope that your visit to our restaurants will be one of your pleasant experiences, and that you will come back. Our team is looking forvard to your visit.`;
    aboutPage.appendChild(info);

    return aboutPage;
}


