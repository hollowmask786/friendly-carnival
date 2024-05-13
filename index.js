// TEMPERATURE CONVERSION PROGRAM

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        //Formula for converting celsius into Fahrenheit
        temp = temp * 9 / 5 +32;
        // To add a degree("°") symbol type Alt 0176
        // toFixed basically gives you option to add digits after decimal(.)
        // Here we added 1 digit after decimal so it will show like (32.0)
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        //Formula for converting Fahrenheit into celsius
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";

    }
    else{
        result.textContent = "Select a unit";
    }
}