// Footer
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modified: " + document.lastModified;


// Static weather values
const temperature = 8;
const windSpeed = 10;


// Wind chill function
function calculateWindChill(temp, speed) {
    return 13.12
        + (0.6215 * temp)
        - (11.37 * Math.pow(speed, 0.16))
        + (0.3965 * temp * Math.pow(speed, 0.16));
}


// Display wind chill
const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {

    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill.toFixed(1) + "°C";

} else {

    windChillElement.textContent = "N/A";
}