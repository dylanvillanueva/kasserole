// Hamburger Menu
const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

function close() {
    mainMenu.style.top = "-100%"
}

// Upcoming Gigs
const cities = ["New York City, NY", "Los Angeles, CA", "Chicago, IL",
    "Houston, TX", "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX",
    "San Diego, CA", "Dallas, TX", "San Jose, CA"];

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

const upcomingGigsList = document.querySelector("#upcoming-gigs ul");

function addRandomGig(numOfGigs) {
    let month = 0;
    const year = 2023;
    for (let i = 0; i < numOfGigs; i++) {
        const selectedMonth = months[month];
        const day = Math.floor(Math.random() * 28) + 1;
        const randomCity = Math.floor(Math.random() * cities.length);
        const city = cities.splice(randomCity, 1);
        const newItem = document.createElement("li");
        const newItemHTML = '<a href="#">' + selectedMonth + ' ' + day + ', ' + year + ' - ' + city + '</a>';
        newItem.innerHTML = newItemHTML;
        upcomingGigsList.appendChild(newItem);
        month++;
    }
}

addRandomGig(10);