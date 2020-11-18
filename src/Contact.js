
export function constructContact() {
    let contactPage = document.createElement('div');
    contactPage.setAttribute('id', 'contact');
    contactPage.setAttribute('class', 'tabContent hide');

    let address = document.createElement('div');
    address.setAttribute('class', 'address');
    address.innerHTML=`
    <h2> Visit Us </h2> <br>
    Casey's Restaurant <br>
    4.7 stars - based on 368 reviews <br>
    624 South La Brea Ave <br>
    Los Angeles, CA 90036 <br>
    United States <br>
    Phone: +1 310-362-6115 <br>
    Email: casey@laheights.com <br>
    Categories: Authentic Italian Food <br>
    Price Range: starting $8 <br>
    Takes Reservations: Yes
    `;

    contactPage.appendChild(address);

    let hours = [
        {
            day: "Monday",
            status: "CLOSED",
        },
        {
            day: "Tuesday",
            status: "5:30PM-10PM",
        },
        {
            day: "Wednesday",
            status: "5:30PM-10PM",
        },
        {
            day: "Thursday",
            status: "5:30PM-10PM",
        },
        {
            day: "Friday",
            status: ["5:30PM-10PM", "11AM-2PM"],
        },
        {
            day: "Saturday",
            status: ["5:30PM-10PM", "11AM-2PM"],
        },
        {
            day: "Sunday",
            status: ["5:30PM-10PM", "11AM-2PM"],
        },
    ]

    let timings = document.createElement('div');
    timings.setAttribute('class', 'timings');
    let timingcontent=`<h2> Opening Hours </h2> <br>`;
    hours.map((item)=>{
        timingcontent+=`${item.day} <span class="hrs">${item.status}</span> <br>`;
    })
    timingcontent+=`Please note that our restaurant closes between 2:30pm-5:30pm every open day of the week.`;
    timings.innerHTML=timingcontent;
    contactPage.appendChild(timings);
    
    return contactPage;
}

