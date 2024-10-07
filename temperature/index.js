let result = 0;
document.getElementById("convertbtn").onclick = function () {
    let temperature = document.getElementById("temperatureInput").value
    let selectTemperature = document.getElementById("temperatureScale")
    if (selectTemperature.value === "Fahrenheit") {
        result = (temperature * 9 / 5) + 32;
        document.getElementById("result").innerText = `${result}°F`
    }
    else {
        result = (temperature - 32) * 5 / 9;
        document.getElementById("result").innerText = `${result.toFixed(2)}°C`;
    }


}
