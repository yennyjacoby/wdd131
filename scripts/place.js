document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent= document.lastModified;

const temperature= -1;
const windSpeed= 8;

function calculateWindChill(temp, speed){
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 *  temp * Math.pow(speed, 0.16);
}

let windChill;

    if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
    } else {
    windChill = "N/A";
    }

document.getElementById("windChill").textContent = windChill;