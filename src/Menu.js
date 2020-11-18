

export function constructMenu() {
    const menuPage = document.createElement('div');
    menuPage.setAttribute('id', 'menu');
    menuPage.setAttribute('class', 'tabContent hide'); // 2 classes why?- tabContent to select pages and hide to show/hide the display accordingly.
    let cuisine=[]; //initial array where objects are input and then segregated (pushed) according to their types into starters, pastaRisotto, meat and sides
    let starters=[];
    let pastaRisotto=[];
    let meat=[];
    let sides=[];
    let menuArray= []; //final array


    const cuisineFactory = (name, price, type) => {
        return { name, price, type };
    }

    const garlicBread=cuisineFactory('Garlic Bread', '$9', 'starters');
    const oliveBread=cuisineFactory('Bread with Olives', '$11', 'starters');
    const Bruschetta=cuisineFactory('Bruschetta with Bocconcini', '$16', 'starters');
    const antipastoMisto=cuisineFactory('Antipasto Misto', '$29', 'starters');

    const spaghettiBolognese=cuisineFactory('Spaghetti Bolognese', '$24', 'pasta & risotto');
    const linguineAlPollo=cuisineFactory('Linguine al Pollo', '$25', 'pasta & risotto');
    const pennePolpette=cuisineFactory('Penne Polpette', '$25', 'pasta & risotto');
    const risottoPescatora=cuisineFactory('Risotto Pescatora', '$35', 'pasta & risotto');


    const parmigiana=cuisineFactory('Parmigiana', '$27', 'meat');
    const chickenAvocado=cuisineFactory('Chicken avocado', '$34', 'meat');
    const ribEyeSteak=cuisineFactory('Rib eye steak', '$39', 'meat');
    const vealAlLimone=cuisineFactory('Veal al Limone', '$34', 'meat');

    const insalataRomana=cuisineFactory('Insalata Romana', '$9', 'sides');
    const butterMushrooms=cuisineFactory('Button Mushrooms', '$9', 'sides');
    const bowlOfChips=cuisineFactory('Bowl of chips', '$8', 'sides');
    const roastedPotatoes=cuisineFactory('Roasted Potatoes', '$9', 'sides');

    cuisine.push(garlicBread, oliveBread, Bruschetta, antipastoMisto, 
                spaghettiBolognese, linguineAlPollo, pennePolpette, risottoPescatora, 
                parmigiana, chickenAvocado, ribEyeSteak, vealAlLimone, 
                insalataRomana, butterMushrooms, bowlOfChips, roastedPotatoes);

    cuisine.map((item)=> {
        return (item.type === "starters") ? starters.push(item) :
                (item.type=== "pasta & risotto") ? pastaRisotto.push(item) :
                (item.type === "meat") ? meat.push(item):
                sides.push(item);
    })

    menuArray.push(starters, pastaRisotto, meat, sides);

    menuArray.map((category)=>{
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.innerHTML = `<strong> <h2> ${category[0].type} </h2> </strong>`;
        let ul = document.createElement('ul');
        category.map((obj) =>{
            let li = document.createElement('li');
            li.innerHTML=`${obj.name} <span class="price">${obj.price}</span>`;
            ul.appendChild(li);
        });
        card.appendChild(ul);
        menuPage.appendChild(card);

    })
    return menuPage;
}


