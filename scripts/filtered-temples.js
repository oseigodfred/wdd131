// MENU TOGGLE
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.textContent = menuButton.textContent === "☰" ? "X" : "☰";
});

// FOOTER
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;


// TEMPLE DATA
const temples = [
    const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // ✅ Added temples (working images)
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Accra_Ghana_Temple.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Salt_Lake_Temple%2C_Utah_-_Sept_2004-2.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Rome_Italy_Temple.jpg"
    }
];

// SELECT ELEMENTS
const container = document.querySelector("#temple-container");
const title = document.querySelector("#title");

// DISPLAY FUNCTION
function displayTemples(templesArray) {
    container.innerHTML = "";

    templesArray.forEach(temple => {
        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        card.append(name, location, dedicated, area, img);
        container.appendChild(card);
    });
}

// NAVIGATION FILTERS
document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Old Temples";
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "New Temples";
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Large Temples";
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    title.textContent = "Small Temples";
    displayTemples(temples.filter(t => t.area < 10000));
});

// INITIAL LOAD
displayTemples(temples);